export interface IFailureProcess<T> {
  success: false
  error: T
  statuCode: number
}

export interface ISuccessProcess<T> {
  success: true
  value: T
  statusCode: number
}
