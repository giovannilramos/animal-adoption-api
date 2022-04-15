import { loggerError } from '../Utils/Logger';

const SKIP_FIELD_SECRET = ['password', 'secret', 'clientSecret', 'clientId', 'cvv', 'pin'];
const SKIP_FIELD_IMAGES = ['frontImage', 'backImage', 'selfie'];

export default class HideFieldRequestBodyHelper {
  public static getRequestBody(requestBody: any): string {
    if (!requestBody || requestBody === '') {
      return 'null';
    }

    try {
      let body = requestBody;
      if (typeof body === 'string') {
        body = JSON.parse(requestBody);
      }

      this.hideFieldSecret(body);

      if (body.document) {
        this.hideFieldImage(body);
      }

      return JSON.stringify(body);
    } catch (e) {
      loggerError(e);
    }

    return 'null';
  }

  private static hideFieldSecret(body: any): void {
    for (const field of SKIP_FIELD_SECRET) {
      // eslint-disable-next-line security/detect-object-injection
      if (body[field]) {
        // eslint-disable-next-line security/detect-object-injection
        body[field] = '****';
      }
    }
  }

  private static hideFieldImage(body: any): void {
    for (const field of SKIP_FIELD_IMAGES) {
      // eslint-disable-next-line security/detect-object-injection
      if (body.document[field]) {
        // eslint-disable-next-line security/detect-object-injection
        body.document[field] = 'null';
      }
    }
  }
}
