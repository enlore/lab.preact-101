import net from './net'

const actions = store => ({
  addChitsToUser: ({ user }, chits) => {
    // console.info(state, chits)
    return { user: { ...user, chits: user.chits + chits } }
  }

  , checkApi: ({ apiStatus }) =>
      net.get('http://localhost:4000/api/heartbeat')
        .then(({ data }) => console.info(data) || { apiStatus: data.message })

  , submitCounts: ({ inventory }) =>
      net.get('http://localhost:4000/api/census', { body: inventory })
        .then(({ data }) => { inventory: data.inventory })

  , getInventory: (state) =>
      net.get('http://localhost:4000/api/census')
        .then(({ data }) => { inventory: data.inventory })

  , setEditingCount: (_, editingCount) => console.info('editing count', editingCount) || { editingCount }

  , setCount: ({ inventory }, product, count) => ({
    // iterate over the products in inventory, overwrite the matching one and leave the rest
    inventory: inventory.map(p =>
      p !== product ? p : {
        ...p,
        count: {
          expected: p.count.expected,
          actual: count
        }
      }
    )
  })

  , addCount: ({ inventory }, product, count) => ({
    // iterate over the products in inventory, overwrite the matching one and leave the rest
    inventory: inventory.map(p =>
      p !== product ? p : {
        ...p,
        count: {
          expected: p.count.expected,
          actual: p.count.actual += count
        }
      }
    )
  })
})

export default actions
