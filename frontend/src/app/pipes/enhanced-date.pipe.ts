import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enhancedDate'
})
export class EnhancedDatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
