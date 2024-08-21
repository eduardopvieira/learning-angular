import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let values = value.split('')
    let result = '';

    for (let v of values) {
      result += v
    }

    return result;
  }

  capitalize(text: string) {
    let firstChar = text.slice(0, 1).toLocaleUpperCase();
    let restChar = text.slice(1, text.length).toLocaleLowerCase();
    return firstChar + restChar;
  }
}
