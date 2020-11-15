import { Pipe, PipeTransform } from '@angular/core';
import { JobAdSkillDto } from 'src/shared/dto/company/job-ad-skill-dto';

@Pipe({
  name: 'jobsLanguageFilter',
  pure: false
})
export class JobsLanguagefilterPipe implements PipeTransform {

  transform(items: JobAdSkillDto[]): any {
    if (items === undefined || items.length === 0) {
      return [{ skill: { name: '―' } }];
    }
    var result = items.filter(s => s.skillCategoryId === 1 && s.skillTypeId === 7);
    if (result) {
      return result;
    }
    else {
      return [{ skill: { name: '―' } }];
    }
  }
}
