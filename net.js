const _throw = msg => { throw new Error(msg) }

const withQuery = (url, query) => {
  let params = new URLSearchParams()
  Object.keys(query).forEach(k => params.append(k, query[k]))
  return `${url}?${params.toString()}`
}

// TODO handle json serialization barf
const _jsonProxy = f => (url, { body, ...rest } = {}) =>
  get(url, {...rest, body: body ? JSON.stringify(body) : void 0 })

const get = (url, { query, body, headers } = {}) => {
  return fetch(query ? withQuery(url, query) : url, {
    headers: {
      'Content-Type': 'application/json', // TODO don't send erroneous headers
      ...headers
    },
    body,
    query,
    method: body ? 'POST' : 'GET'
  })
    .then(resp => resp.status >= 400 ? _throw(resp.statusText) : resp)
    .then(resp => resp.json())
    .catch(err => (console.error(err), _throw(err)))
}

export default { get: _jsonProxy(get) }
