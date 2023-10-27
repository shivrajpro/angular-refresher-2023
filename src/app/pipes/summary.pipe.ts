import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, len?: number): unknown {
    if(!len) len = 10;
    // console.log('>> len',len);
    return value.substring(0, len);
  }

}
