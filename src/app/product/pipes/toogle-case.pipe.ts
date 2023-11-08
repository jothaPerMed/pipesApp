import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toogleCase'
})

export class ToogleCasePipe implements PipeTransform {
  transform(value: string, isCapitalize:boolean): string {

    return isCapitalize?value.toUpperCase():value;
  }
}
