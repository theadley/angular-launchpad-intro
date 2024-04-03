import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSeasons',
  standalone: true
})
export class FilterSeasonsPipe implements PipeTransform {

  transform(seasons: string[], searchTerm: string): string[] {
    if (!searchTerm?.length) {
      return seasons;
    }
    return seasons.filter(season => season.includes(searchTerm));
    // console.log('FilterSeasonsPipe', seasons.length, searchTerm)
    // return seasons;
  }

}
