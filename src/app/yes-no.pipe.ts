import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesNo',
})
export class YesNoPipe implements PipeTransform {
  transform(value: any): string {
    if(value == true) {
      return "Si"
    } else {
      console.log(value)
      return "No"
    }
    return value ? 'Si' : 'No';
  }
}
