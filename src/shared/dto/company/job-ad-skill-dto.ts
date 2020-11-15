import { QualificationDto } from '../primary-data/qualification-dto';
import { SkillCategoryDto } from '../skill-category-dto';
import { SkillTypeDto } from '../skill-type-dto';
import { SkillDto } from '../skill-dto';
import { JobAdSkillDetailDto } from './job-ad-skill-detail-dto';

export interface IJobAdSkillDto {
    id: number;
    skillCategoryId: number;
    skillTypeId: number;
    skillId: number;
    jobAdId: number;
    skillCategory: SkillCategoryDto;
    skillType: SkillTypeDto;
    skill: SkillDto;
    jobAdSkillDetails: JobAdSkillDetailDto[];
}


export class JobAdSkillDto implements IJobAdSkillDto {
    static fromJS(data: any): JobAdSkillDto {
        data = typeof data === 'object' ? data : {};
        const result = new JobAdSkillDto();
        result.init(data);
        return result;
    }
    id: number;
    skillCategoryId: number;
    skillTypeId: number;
    skillId: number| undefined;
    jobAdId: number;
    skillName:string;
    skillCategory: SkillCategoryDto;
    skillType: SkillTypeDto;
    skill: SkillDto;
    jobAdSkillDetails: JobAdSkillDetailDto[];

    constructor(data?: IJobAdSkillDto) {
      if (data) {
          for (const property in data) {
              if (data.hasOwnProperty(property)) {
                  (<any>this)[property] = (<any>data)[property];
              }
          }
      }
  }

  init(data?: any) {
    if (data) {
        this.id = data['id'];
        this.skillCategoryId = data['skillCategoryId'];
        this.skillTypeId = data['skillTypeId'];
        this.skillId = data['skillId'];
        this.jobAdId = data['jobAdId'];
        this.skillName = data['skillName'];
        this.skillCategory = data['skillCategory'];
        this.skillType = data['skillType'];
        this.skill = data['skill'];
        this.jobAdSkillDetails = data['jobAdSkillDetails'];
    }
}



toJSON(data?: any) {
  data = typeof data === 'object' ? data : {};
  data['id'] = this.id;
  data['skillCategoryId'] = this.skillCategoryId;
  data['skillTypeId'] = this.skillTypeId;
  data['skillId'] = this.skillId;
  data['jobAdId'] = this.jobAdId;
  data['skillName'] = this.skillName;
  data['skillCategory'] = this.skillCategory;
  data['skillType'] = this.skillType;
  data['skill'] = this.skill;
  data['jobAdSkillDetails'] = this.jobAdSkillDetails;

  return data;
}

    clone(): JobAdSkillDto {
        const json = this.toJSON();
        const result = new JobAdSkillDto();
        result.init(json);
        return result;
    }
}
