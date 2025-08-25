import { Response, Router } from 'express'
import { route } from '../../../../config/route/route'

export const routeAuth = (prefix: string): Router => {
  route.post(`${prefix}/login`, (res: Response) => {
    res.json('llegue a este lugar que es el login')
  })

  route.get(`${prefix}/login`, (res: Response) => {
    res.json({ message: 'Lleggue hasta login' })
  })

  route.post(`${prefix}/register`, () => ({}))

  return route
}
