import { SetMetadata } from '@nestjs/common';
export const Mock = (data: any) => SetMetadata('mock:data', data);
