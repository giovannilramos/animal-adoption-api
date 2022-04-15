import { InvalidFieldsException } from './InvalidFieldsException';
import { ServerInternalErrorException } from './ServerInternalErrorException';
import { CODE_ERROR_MONGODB_DUPLICATE_KEY } from './CodeErrors/CodeErrors';

export class MongoDbErrorException extends ServerInternalErrorException {
  constructor(error: any) {
    if (error.code && error.code === 11000 && error.keyValue) {
      throw new InvalidFieldsException([
        {
          code: CODE_ERROR_MONGODB_DUPLICATE_KEY.code,
          message: `Duplicate key: ${JSON.stringify(error.keyValue)}`,
        },
      ]);
    }
    super(error.stack);
  }
}
