import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'averageMark',
  standalone: true
})
export class AverageMarkPipe implements PipeTransform {

  transform(marks: number[]): number {
    let sum = 0;
    for(const mark of marks) {
      sum += mark;
    }
    return sum / marks.length;
  }

}
