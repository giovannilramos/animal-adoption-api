export interface IIntegrationTransformer<T, R> {
  toRequest(dto: T | T[]): Promise<R | R[]>;

  toDto(responseData: any | any[], dto?: T | T[]): Promise<T | T[]>;
}
