import { pathData } from '../../../../config/route/route'
import { IFailureProcess, ISuccessProcess } from '../../../../interfaces/resutl/result'
import { fileUtils } from '../../../../utils/file/file'
import { FailureProcess, SuccessProcess } from '../../../../utils/result/result'
import path from 'path'

export class ServiceAuthLogin {
  private readonly path: string
  private readonly classUtilsFiles: fileUtils
  constructor () {
    this.path = path.join(process.cwd(), pathData.USERS, '/user.json')
    this.classUtilsFiles = new fileUtils(this.path)
  }

  login (dto?: string): IFailureProcess<any> | ISuccessProcess<any> {
    try {
      console.log(this.path)
      dto = ''
      const result = this.classUtilsFiles.findById(dto)
      console.log(result)

      return SuccessProcess('Llegue señores tiurrrriririri', 200)
    } catch (error) {
      return FailureProcess('', 500)
    }
  }
}
