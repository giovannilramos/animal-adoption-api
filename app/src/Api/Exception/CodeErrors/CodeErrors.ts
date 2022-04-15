import { ErrorDetailsDto } from '../../Dto/ErrorDetailsDto';

export const CODE_ERROR_SERVER_INTERNAL_ERROR: ErrorDetailsDto = {
  code: 'SERVER_INTERNAL_ERROR',
  message: 'Internal error in service',
};

export const CODE_ERROR_RESOURCE_NOT_FOUND: ErrorDetailsDto = {
  code: 'RESOURCE_NOT_FOUND',
  message: 'Resource not found',
};

export const CODE_ERROR_INVALID_FILE: ErrorDetailsDto = {
  code: 'INVALID_FILE',
  message: 'Arquivo inválido',
};

export const CODE_ERROR_RESOURCE_ALREADY_EXISTS: ErrorDetailsDto = {
  code: 'RESOURCE_ALREADY_EXISTS',
  message: 'Resource already exists',
};

export const CODE_ERROR_NOT_FOUND: ErrorDetailsDto = {
  code: 'NOT_FOUND',
  message: 'Route not found',
};

export const CODE_ERROR_JSON_MAPPING: ErrorDetailsDto = {
  code: 'JSON_MAPPING',
  message: 'Incorrect json mapping',
};

export const CODE_ERROR_UNAUTHORIZED: ErrorDetailsDto = {
  code: 'UNAUTHORIZED',
  message: 'Unauthorized',
};

export const CODE_ERROR_ACCESS_DENIED: ErrorDetailsDto = {
  code: 'ACCESS_DENIED',
  message: 'Access Denied',
};

export const CODE_ERROR_FIELDS_INVALID: ErrorDetailsDto = {
  code: 'INVALID_FIELDS',
  message: 'Fields are invalid/required',
};

export const CODE_ERROR_INVALID_CONTENT_TYPE: ErrorDetailsDto = {
  code: 'INVALID_CONTENT_TYPE',
  message: 'Invalid content type',
};

export const CODE_ERROR_MONGODB_DUPLICATE_KEY: ErrorDetailsDto = {
  code: 'DUPLICATE_KEY',
  message: 'Duplicate records',
};

export const CODE_ERROR_UPLOAD_FILE: ErrorDetailsDto = {
  code: 'UPLOAD_FILE',
  message: 'File upload failed',
};

export const CODE_ERROR_DOWNLOAD_FILE: ErrorDetailsDto = {
  code: 'DOWNLOAD_FILE',
  message: 'File download failed',
};

export const CODE_ERROR_INTEGRATION_FAILED: ErrorDetailsDto = {
  code: 'INTEGRATION_FAILED',
  message: 'Integration error with partner',
};

export const CODE_ERROR_FIELDS_INVALID_FEE: ErrorDetailsDto = {
  code: 'FEE_FAILED_INVALID',
  message: 'Fee not implement',
};

export const CODE_ERROR_CARD_ALREADY_EXISTS: ErrorDetailsDto = {
  code: 'CARD_ALREADY_EXISTS',
  message: 'Card already exists',
};

export const CODE_ERROR_CARD_ALREADY_PENDING: ErrorDetailsDto = {
  code: 'CARD_ALREADY_PENDING',
  message: 'There is already a pending card, please wait',
};

export const CODE_ERROR_FIELDS_INVALID_DOCUMENT: ErrorDetailsDto = {
  code: 'DOCUMENT_INVALID',
  message: 'Invalid document number',
};

export const CODE_ERROR_FIELDS_INVALID_BIRTH_DATE: ErrorDetailsDto = {
  code: 'BIRTH_DATE_INVALID',
  message: 'Invalid birth date, minimum 18 years old required',
};

export const CODE_ERROR_FIELDS_INVALID_DOCUMENT_PHOTOS: ErrorDetailsDto = {
  code: 'DOCUMENT_IMAGES_INVALID',
  message: 'Invalid document images, supported types are JPG and PNG',
};

export const CODE_ERROR_FAILED_DATA_VALIDATION: ErrorDetailsDto = {
  code: 'DATA_VALIDATION_FAILED',
  message: 'The data sent to validate was inconsistent',
};

export const CODE_ERROR_ACCOUNT_NOT_VALID: ErrorDetailsDto = {
  code: 'ACCOUNT_VALIDATION_FAILED',
  message: 'The account is not valid or not properly set',
};

export const CODE_ERROR_INVALID_KEY: ErrorDetailsDto = {
  code: 'FIELDS_INVALID',
  message: 'Invalid API KEY',
};
