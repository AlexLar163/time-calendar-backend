import { Injectable } from '@nestjs/common';
import * as lo from 'lodash';

@Injectable()
export class LodashHelpers {
  helper() {
    console.log('lodash222: ', lo.some)
    return lo
  }
}
