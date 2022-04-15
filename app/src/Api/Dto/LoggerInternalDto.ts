import { LoggerBaseDto } from './LoggerBaseDto';

export class LoggerInternalDto extends LoggerBaseDto {
  constructor(startTime: [number, number], requestId: string, method: string, originalMethod: string, requestBody: any) {
    super(startTime, requestId, 'API_PARTNERS', method, requestBody);
    this.originalMethod = originalMethod;
    this.queueStatus = 'null';
    this.jobStatus = 'null';
  }
}
