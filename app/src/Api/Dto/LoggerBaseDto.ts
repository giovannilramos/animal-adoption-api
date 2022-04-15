import { v4 as uuidv4 } from 'uuid';
import HideFieldRequestBodyHelper from '../Helpers/HideFieldRequestBodyHelper';

export abstract class LoggerBaseDto {
  protected constructor(startTime: [number, number], requestId: string, application: string, method: string, requestBody: any) {
    this.logId = uuidv4();
    this.partnerUuid = 'null';
    this.requestId = requestId;
    this.application = application;
    this.clientIp = 'null';
    this.remoteIp = 'null';
    this.method = method;
    this.originalMethod = method;
    this.statusCode = 0;
    this.elapsedTime = 0;
    this.requestBody = HideFieldRequestBodyHelper.getRequestBody(requestBody);
    this.responseBody = 'null';
    this.error = 'null';
    this.startTime = startTime;
  }

  public logId: string;
  public requestId: string;
  public partnerUuid: string;
  public application: string;
  public clientIp: string;
  public remoteIp: string;
  public method: string;
  public originalMethod: string;
  public statusCode: number;
  public elapsedTime: number;
  public requestBody: any;
  public responseBody?: any;
  public error?: any;
  public startTime?: [number, number];
  public queueStatus?: string;
  public jobStatus?: string;
}
