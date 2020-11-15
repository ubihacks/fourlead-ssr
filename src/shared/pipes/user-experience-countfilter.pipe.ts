import { Pipe, PipeTransform } from '@angular/core';
import { UserExperienceDto } from 'src/shared/dto/user/user-experience-dto';
import { DurationHelper } from 'src/shared/utils/duration-helper';
import { getTime } from './user-experience-sortingfilter.pipe';

@Pipe({
  name: 'userExperienceCountfilter'
})
export class UserExperienceCountfilterPipe implements PipeTransform {

  transform(items: UserExperienceDto[]): any {
    // return items.sort((x, y) => x.startDate > y.startDate ? 1 : -1);


    items.sort((a, b) => {
      return getTime(b.endDate) - getTime(a.endDate);
    });
    items.forEach(i => {
      console.log("userExperienceCountFilter", DurationHelper.getDuration(i.startDate, i.endDate, 1, 'months'));
    });
    return
  }

}
