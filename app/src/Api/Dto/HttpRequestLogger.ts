export class HttpRequestLogger {
  public requestMethod?: string;
  public requestUrl?: string;
  public protocol?: string;
  public remoteIp: string;
  public requestSize?: number;
  public userAgent?: string;
  public status?: number;
  public responseTime?: number;
}
