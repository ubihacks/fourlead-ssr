import { Pipe, PipeTransform } from '@angular/core';
import { JobAdSkillDto } from 'src/shared/dto/company/job-ad-skill-dto';

@Pipe({
  name: 'jobsHardSkillsFilter'
})
export class JobsHardSkillsfilterPipe implements PipeTransform {


  transform(items: JobAdSkillDto[]): any {
    var result = [];
    if (!items || items.length === 0) {
      return result = [{ skill: { name: '―' } }];
    }
    result = items.filter(s => s.skillCategoryId === 1 && s.skillTypeId !== 7);
    if (!result || result.length === 0) {
      return [{ skill: { name: '―' } }];
    }
    if (result) {
      return result;
    }
    else {
      return [{ skill: { name: '―' } }];
    }
  }


}
