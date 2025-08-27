import * as fs from 'fs'

export abstract class fileUtils {
  constructor (public pathTheFile: string) {
    this.pathTheFile = pathTheFile
  }

  readFile (): [] {
    try {
      const fileReaded = fs.readFileSync(this.pathTheFile)
      const resultToString = fileReaded.toString()
      const parsedJson: [] = JSON.parse(resultToString)
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
}
