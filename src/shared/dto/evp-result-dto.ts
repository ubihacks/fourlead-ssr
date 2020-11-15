 

export interface IEvpResultDto {
  companyRegistrationNo: string;
  financialCompensation: number;
  employmentBenefits: number;
  careerDevelopment: number;
  workEnvironment: number;
  jobFlexibility: number;
  total: number;
  average: number;
}


export class EvpResultDto implements IEvpResultDto {
  static fromJS(data: any): EvpResultDto {
      data = typeof data === 'object' ? data : {};
      const result = new EvpResultDto();
      result.init(data);
      return result;
  }

  companyRegistrationNo: string;
  financialCompensation: number;
  employmentBenefits: number;
  careerDevelopment: number;
  workEnvironment: number;
  jobFlexibility: number;
  total: number;
  average: number;

  constructor(data?: IEvpResultDto) {
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
          this.companyRegistrationNo = data['companyRegistrationNo'];
          this.financialCompensation = data['financialCompensation'];
          this.employmentBenefits = data['employmentBenefits'];
          this.careerDevelopment = data['careerDevelopment'];
          this.workEnvironment = data['workEnvironment'];
          this.jobFlexibility = data['jobFlexibility'];
          this.total = data['total'];
          this.average = data['average'];
      }
  }



  toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data['companyRegistrationNo'] = this.companyRegistrationNo;
      data['financialCompensation'] = this.financialCompensation;
      data['employmentBenefits'] = this.employmentBenefits;
      data['careerDevelopment'] = this.careerDevelopment;
      data['workEnvironment'] = this.workEnvironment;
      data['jobFlexibility'] = this.jobFlexibility;
      data['total'] = this.total;
      data['average'] = this.average;
      return data;
  }

  clone(): EvpResultDto {
      const json = this.toJSON();
      const result = new EvpResultDto();
      result.init(json);
      return result;
  }
}
