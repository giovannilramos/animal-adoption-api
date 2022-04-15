export interface ISqsTransformer<T> {
  fromSqs(message: string): Promise<T | T[]>;

  toSqs(dto: T | T[]): Promise<string>;
}
