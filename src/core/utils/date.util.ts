export class DateUtil {
  static now(): string {
    return new Date().toISOString();
  }
}
