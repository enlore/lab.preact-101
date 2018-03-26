import { createStore } from 'unistore/full/preact'

const store = createStore({
  user: { id: '1', username: 'flembo', email: '---', chits: 300 },
  chits: 0,
  messages: [],
  inventory: [],
  editingCount: false,
  apiStatus: 'unknown'
})

export default store
