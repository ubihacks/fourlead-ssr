export class SearchTags {
    id: string;
    name: string;
    text: string;
  }
  export enum SearchByCatalog {
    search = 'search',
    location = 'location',
    employmentType = 'employmentTypeIds',
    position = 'positionIds',
    specialization='specializationIds',
    salaryMin = 'salaryMin',
    experienceMax = 'experienceMax',
    behaviour = 'behaviourIds',
    jobStatus= 'jobStatus'
  }