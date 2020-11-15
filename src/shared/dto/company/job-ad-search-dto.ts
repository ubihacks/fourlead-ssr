import { PagedRequestDto } from '../paged-listing-component-base';
import { JobAdStatusCatalog } from './job-ad-dto';


export interface IJobAdSearchDtoDto {
    locationIds: number[];
    location: string;
    employmentTypeIds: number[];
    positionIds: number[];
    specializationIds:number[];
    behaviourIds: number[];
    salaryMin: number;
    experienceMax: number;
    search: string;
    type: string;
    maxResultCount: number;
    skipCount: number;
    sorting:string;
    registrationNo: string;
}


export class JobAdSearchDtoDto extends PagedRequestDto implements IJobAdSearchDtoDto {
    static fromJS(data: any): JobAdSearchDtoDto {
        data = typeof data === 'object' ? data : {};
        const result = new JobAdSearchDtoDto();
        result.init(data);
        return result;
    }
    locationIds: number[];
    location: string;
    employmentTypeIds: number[];
    behaviourIds: number[];
    positionIds: number[];
    specializationIds:number[];
    salaryMin: number;
    experienceMax: number;
    search: string;
    type: string;
    maxResultCount: number;
    skipCount: number;
    sorting:string;
    registrationNo: string;
    companySlug: string;

    constructor(data?: IJobAdSearchDtoDto) {
        super();
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
            this.locationIds = data['locationIds'];
            this.employmentTypeIds = data['employmentTypeIds'];
            this.behaviourIds = data['behaviourIds'];
            this.salaryMin = data['salaryMin'];
            this.experienceMax = data['experienceMax'];
            this.search = data['search'];
            this.type = data['type'];
            this.positionIds = data['positionIds'];
            this.specializationIds = data['specializationIds'];
            this.location = data['location'];
            this.maxResultCount = data['maxResultCount'];
            this.skipCount = data['skipCount'];
            this.sorting = data['sorting'];
            this.registrationNo = data['registrationNo'];
            this.companySlug = data['companySlug'];
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['locationIds'] = this.locationIds;
        data['employmentTypeIds'] = this.employmentTypeIds;
        data['behaviourIds'] = this.behaviourIds;
        data['salaryMin'] = this.salaryMin;
        data['experienceMax'] = this.experienceMax;
        data['search'] = this.search;
        data['type'] = this.type;
        data['positionIds'] = this.positionIds;
        data['specializationIds'] =this.specializationIds;
        data['location'] = this.location;
        data['maxResultCount'] = this.maxResultCount;
        data['skipCount'] = this.skipCount;
        data['sorting'] = this.sorting;
        data['registrationNo'] = this.registrationNo;
        data['companySlug'] = this.companySlug;
        
        return data;
    }

    clone(): JobAdSearchDtoDto {
        const json = this.toJSON();
        const result = new JobAdSearchDtoDto();
        result.init(json);
        return result;
    }
}
