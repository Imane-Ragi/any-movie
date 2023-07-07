import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume'
})
export class ResumePipe implements PipeTransform {

  transform(value: string, limit: number = 10): unknown {
    return value.substring(0,limit )+'......';
  }

}
