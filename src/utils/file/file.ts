import * as fs from 'fs'

export class fileUtils {
  constructor (private readonly pathTheFile: string) {
    this.pathTheFile = pathTheFile
  }

  readFile (): any {
    try {
      const fileReaded = fs.readFileSync(this.pathTheFile)
      fileReaded.toString()
      return fileReaded.toJSON()
    } catch (error) {
      return []
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
