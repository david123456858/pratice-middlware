import { IFailureProcess, ISuccessProcess } from '../../../../interfaces/resutl/result'
import { FailureProcess, SuccessProcess } from '../../../../utils/result/result'

export class ServiceAuthLogin {
  login (dto?: string): IFailureProcess<any> | ISuccessProcess<any> {
    try {
      return SuccessProcess('Llegue señores tiurrrriririri', 200)
    } catch (error) {
      return FailureProcess('', 500)
    }
  }
}
