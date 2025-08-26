import { IFailureProcess, ISuccessProcess } from '../../../../interfaces/resutl/result'
import { fileUtils } from '../../../../utils/file/file'
import { FailureProcess, SuccessProcess } from '../../../../utils/result/result'

export class ServiceAuthLogin {
  private readonly path: string
  private readonly classUtilsFiles: fileUtils
  constructor () {
    this.path = '../../../../data/users/user.json'
    this.classUtilsFiles = new fileUtils(this.path)
  }

  login (dto?: string): IFailureProcess<any> | ISuccessProcess<any> {
    try {
      return SuccessProcess('Llegue señores tiurrrriririri', 200)
    } catch (error) {
      return FailureProcess('', 500)
    }
  }
}
