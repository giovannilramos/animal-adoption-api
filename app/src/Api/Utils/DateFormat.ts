import format from 'date-format';

export default class DateFormat {
  public static dateToStr(date: Date): string {
    return format.asString('yyyy-MM-dd', date);
  }

  public static timestamp(date: Date): string {
    return format.asString('yyyy-MM-dd hh:mm:ss.SSS', date);
  }

  public static dateToStrBR(date: Date): string {
    return format.asString('dd/MM/yyyy', date);
  }

  public static dateTimeToStr(date: Date): string {
    return format.asString('yyyy-MM-dd hh:mm:ss', date);
  }

  public static isDateExpired(expiresDateTime: string): boolean {
    return new Date() > new Date(expiresDateTime);
  }

  public static strToDate(date?: string): Date {
    if (!date) {
      date = this.dateToStr(new Date());
    }

    return format.parse('yyyy-MM-dd hh:mm:ss', date + ' 00:00:00');
  }

  public static strToDateBR(date?: string): Date {
    if (!date) {
      date = this.dateToStrBR(new Date());
    }
    return format.parse('dd/MM/yyyy', date + ' 00:00:00');
  }
}
