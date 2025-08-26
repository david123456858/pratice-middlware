import { config } from 'dotenv'
import Jwt from 'jsonwebtoken'

config()

export class MiddlwareJwt {
  private readonly secreyKey!: string | any

  constructor () {
    this.secreyKey = process.env.SECRET_KEY
  }

  createToken (dto: any): string {
    return Jwt.sign(dto, this.secreyKey, { algorithm: 'HS256', expiresIn: '1m' })
  }

  verifyToken (): void {

  }
}
