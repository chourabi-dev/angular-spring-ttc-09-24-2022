import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mydate'
})
export class MydatePipe implements PipeTransform {

  transform(data: Date, ...args: unknown[]): unknown {
    
    let date = '';
 

    date =( data.getMonth()+ 1) + ' / '+ data.getDate()
  
    return date;
    
    
  }

}
