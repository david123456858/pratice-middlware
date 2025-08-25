import { config } from 'dotenv'

config()

export class MiddlwareJwt {
  private readonly secreyKey!: string | any

  constructor () {
    this.secreyKey = process.env.SECRET_KEY
  }

  async createToken (): Promise<any> {

  }
}
