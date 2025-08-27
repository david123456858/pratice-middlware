import * as fs from 'fs'

export class fileUtils {
  constructor (private readonly pathTheFile: string) {
    this.pathTheFile = pathTheFile
  }

  readFile (): [JSON] {
    try {
      const fileReaded = fs.readFileSync(this.pathTheFile)
      const resultToString = fileReaded.toString()
      const parsedJson: [JSON] = JSON.parse(resultToString)
      return parsedJson
    } catch (error) {
      return JSON.parse(error as string) // it's no best way for this example
    }
  }

  writeFile (object: any): any {
    try {
      fs.writeFileSync(this.pathTheFile, object)
    } catch (error) {
      return [error]
    }
  }

  findById (id: string): any {
    try {
      const result = this.readFile()
      result.map(value => console.log(value)
      )
      console.log(result)
    } catch (error) {

    }
  }
}
