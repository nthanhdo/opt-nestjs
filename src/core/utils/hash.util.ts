import * as crypto from 'crypto';

export class HashUtil {
  static sha256(str: string) {
    return crypto.createHash('sha256').update(str).digest('hex');
  }
}
