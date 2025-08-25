import { IFailureProcess } from '../../interfaces/resutl/result'

export const FailureProcess = <T>(
  error: T,
  statuCode: number): IFailureProcess<T> => ({
    statuCode,
    error,
    success: false
  })
