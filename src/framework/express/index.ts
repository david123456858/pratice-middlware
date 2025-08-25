import express, { Response, Request } from 'express'

const app = express()

const PORT = 3000

app.get('/', (req: Request, res: Response) => {
  res.send('Server builder ... ✔')
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
