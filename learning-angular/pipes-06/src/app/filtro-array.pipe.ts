import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray',
  pure: true
})
export class FiltroArrayPipe implements PipeTransform {

  transform(value: any, args?: string): any {

    if (value.length == 0 || !args || !Array.isArray(value)) {
      return value;
    }

    let filter = args[0].toLocaleLowerCase();
    return value.filter((v: any) => v.toLocaleLowerCase().includes(filter));

  }

}
