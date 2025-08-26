import express, { Response, Request, json } from 'express'
import { routeBase } from '../../config/route/route'
import { routeAuth } from '../../factures/user/route/auth/auth'
import { routeUser } from '../../factures/user/route/user/user'

const app = express()

const PORT = 3000

app.use(json())

app.use(routeBase, routeAuth('/auth'))
app.use(routeBase, routeUser('/user'))

app.get('/', (req: Request, res: Response) => {
  res.send('Server builder ... ✔')
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
