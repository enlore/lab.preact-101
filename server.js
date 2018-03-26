const cors = require('cors')

const exp = require('express')
const bod = require('body-parser')
const app = exp()
const PORT = process.env.PORT || 4000

const inventory = require('./inventory')
console.info(inventory.get())

app.use(cors())
app.use(bod.json())

app.get('/api/heartbeat', (req, res) => res.json({
  status: 200,
  method: 'GET',
  endpoint: '/api/heartbeat',
  service: 'inventory-control',
  data: {
    message: 'hello',
    timestamp: Date.now()
  }
}))

app.get('/api/census', (req, res) => res.json({
  status: 200,
  method: 'GET',
  endpoint: '/api/census',
  service: 'inventory-control',
  data: { inventory: inventory.get() }
}))

app.post('/api/census', (req, res) => (inventory.set(req.body), res.json({
  status: 200,
  method: 'POST',
  endpoint: '/api/census',
  service: 'inventory-control',
  data: { inventory: inventory.get() }
})))

app.listen(PORT, () => console.info(`~~~~~~> listening at ${PORT}`))
