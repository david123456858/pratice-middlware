import { IFailureProcess, ISuccessProcess } from '../../interfaces/resutl/result'

export const FailureProcess = <T>(
  error: T,
  statuCode: number): IFailureProcess<T> => ({
    statuCode,
    error,
    success: false
  })

export const SuccessProcess = <T>(
  value: T,
  statuCode: number): ISuccessProcess<T> => ({
    statuCode,
    value,
    success: true
  })
