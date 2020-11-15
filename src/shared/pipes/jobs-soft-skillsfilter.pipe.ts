import { Pipe, PipeTransform } from '@angular/core';
import { JobAdSkillDto } from 'src/shared/dto/company/job-ad-skill-dto';

@Pipe({
  name: 'jobsSoftSkillsFilter'
})
export class JobsSoftSkillsfilterPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(items: JobAdSkillDto[]): any {
    var result = [];
    if (!items || items.length == 0) {
      return result = [{ skill: { name: '―' } }];
    }
    result = items.filter(s => s.skillCategoryId == 2);
    if (!result || result.length == 0) {
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
