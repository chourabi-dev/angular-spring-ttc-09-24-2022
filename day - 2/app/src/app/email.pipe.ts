import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'email'
})
export class EmailPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {



    return value[0]+'**************@'+value.split('@')[1];
  }

}
