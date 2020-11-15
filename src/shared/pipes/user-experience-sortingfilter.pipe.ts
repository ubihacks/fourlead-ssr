import { Pipe, PipeTransform } from '@angular/core';
import { UserExperienceDto } from 'src/shared/dto/user/user-experience-dto';

@Pipe({
  name: 'userExperienceSortingfilter'
})
export class UserExperienceSortingfilterPipe implements PipeTransform {

  transform(items: UserExperienceDto[]): any {
    // return items.sort((x, y) => x.startDate > y.startDate ? 1 : -1);


    return items.sort((a, b) => {
      return getTime(b.endDate) - getTime(a.endDate);
    });
  }

}
 
export function getTime(date?: Date) {
  return date != null ? new Date(date).getTime() : new Date().getTime();
}