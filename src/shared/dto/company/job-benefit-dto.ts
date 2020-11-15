
export interface IJobAdBenefitDto {
  id: number;
  jobAdId: number;
  benefitId: number|undefined;
  benefitName:string;
}


export class JobAdBenefitDto implements IJobAdBenefitDto {
  static fromJS(data: any): JobAdBenefitDto {
      data = typeof data === 'object' ? data : {};
      const result = new JobAdBenefitDto();
      result.init(data);
      return result;
  }

  id: number;
  jobAdId: number;
  benefitId: number|undefined;
  benefitName:string;
  constructor(data?: IJobAdBenefitDto) {
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
          this.jobAdId = data['jobAdId'];
          this.benefitId = data['benefitId'];
          this.benefitName = data['benefitName'];
      }
  }



  toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data['id'] = this.id;
      data['jobAdId'] = this.jobAdId;
      data['benefitId'] = this.benefitId;
      data['benefitName']= this.benefitName;

      return data;
  }

  clone(): JobAdBenefitDto {
      const json = this.toJSON();
      const result = new JobAdBenefitDto();
      result.init(json);
      return result;
  }
}


export interface IListJobAdBenefitDto {
  items: JobAdBenefitDto[] | undefined;
  totalCount: number;
}


export class ListJobAdBenefitDto implements IListJobAdBenefitDto {
  static fromJS(data: any): ListJobAdBenefitDto {
      data = typeof data === 'object' ? data : {};
      const result = new ListJobAdBenefitDto();
      result.init(data);
      return result;
  }
  items: JobAdBenefitDto[] | undefined;
  totalCount: number;

  constructor(data?: IListJobAdBenefitDto) {
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
          if (data['items'] && data['items'].constructor === Array) {
              this.items = [];
              for (const item of data['items']) {
                  this.items.push(JobAdBenefitDto.fromJS(item));
              }
          }
      }
  }



  toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      if (this.items && this.items.constructor === Array) {
          data['items'] = [];
          for (const item of this.items) {
              data['items'].push(item.toJSON());
          }
      }
      return data;
  }

  clone(): ListJobAdBenefitDto {
      const json = this.toJSON();
      const result = new ListJobAdBenefitDto();
      result.init(json);
      return result;
  }
}
