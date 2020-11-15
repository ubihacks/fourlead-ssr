import { UserDto } from '../user/user-dto';
import { TenantDto } from './tenant-dto';
import { CompanyOfficeDto } from './company-office-dto';
import { SpecializationDto } from '../primary-data/specialization-dto';
import { PositionDto } from '../primary-data/position-dto';
import { EmploymentTypeDto } from '../primary-data/employment-type-dto';
import { BehaviourDto } from '../primary-data/behaviour-dto';
import { JobAdQualificationDto } from './job-ad-qualification-dto';
import { JobAdFieldOfStudyDto } from './job-ad-field-of-study-dto';
import { JobAdIndustryDto } from './job-ad-industry-dto';
import { JobAdSkillDto } from './job-ad-skill-dto';
import { JobAdBehaviourDto } from './job-ad-behaviour-dto';
import { JobAdBenefitDto } from './job-benefit-dto';
import { PackageDto } from './package-dto';


export enum JobAdStatusCatalog {
    Posted = 1,
    Draft = 2,
    Completed = 3,
    PackageExpired = 4
}

export enum JobApplicationResponseCatalog {
    PendingResponse = 1,
    Accepted = 2,
    Rejected = 3
}

export enum JobApplicationStatusCatalog {
    RequestedInterview = 1,
    Rejected,
    Close,
    MyCandidate
}
export interface IBookmarkJobDto {
    id: number;
    userId: number;
    jobAdId: number;
    user: UserDto;
    jobAd: JobAdDto;
}

export class BookmarkJobDto implements IBookmarkJobDto {
    static fromJS(data: any): BookmarkJobDto {
        data = typeof data === 'object' ? data : {};
        const result = new BookmarkJobDto();
        result.init(data);
        return result;
    }

    id: number;
    userId: number;
    jobAdId: number;
    user: UserDto;
    jobAd: JobAdDto;

    constructor(data?: IBookmarkJobDto) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property)) {
                    (<any> this)[property] = (<any> data)[property];
                }
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data.id;
            this.userId = data.userId;
            this.jobAdId = data.jobAdId;
            this.user = data.user;
            this.jobAd = data.jobAd;
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data.id = this.id;
        data.userId = this.userId;
        data.jobAdId = this.jobAdId;
        data.user = this.user;
        data.jobAd = this.jobAd;

        return data;
    }

    clone(): BookmarkJobDto {
        const json = this.toJSON();
        const result = new BookmarkJobDto();
        result.init(json);
        return result;
    }
}


export interface IMyCandidateDto {
    id: number;
    userId: number;
    jobAdId: number | undefined;
    tenantId: number | undefined;
    user: UserDto;
    company: TenantDto;
}


export class MyCandidateDto implements IMyCandidateDto {
    static fromJS(data: any): JobApplicationDto {
        data = typeof data === 'object' ? data : {};
        const result = new JobApplicationDto();
        result.init(data);
        return result;
    }

    id: number;
    userId: number;
    jobAdId: number | undefined;
    tenantId: number | undefined;
    user: UserDto;
    company: TenantDto;


    constructor(data?: IMyCandidateDto) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property)) {
                    (<any> this)[property] = (<any> data)[property];
                }
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data.id;
            this.userId = data.userId;
            this.jobAdId = data.jobAdId;
            this.tenantId = data.tenantId;
            this.user = data.user;
            this.company = data.company;

        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data.id = this.id;
        data.userId = this.userId;
        data.jobAdId = this.jobAdId;
        data.tenantId = this.tenantId;
        data.user = this.user;
        data.company = this.company;

        return data;
    }

    clone(): MyCandidateDto {
        const json = this.toJSON();
        const result = new MyCandidateDto();
        result.init(json);
        return result;
    }
}

export interface IJobApplicationDto {
    id: number;
    userId: number;
    jobAdId: number | undefined;
    tenantId: number | undefined;
    companyOfficeId: number | undefined;
    applicationStatus: JobApplicationStatusCatalog;
    jobApplicationResponseStatus: JobApplicationResponseCatalog;
    interviewDate: Date | undefined;
    interviewTime: string;
    interviewTimeMeridiem: string;
    user: UserDto;
    jobAd: JobAdDto;
    companyOffice: CompanyOfficeDto;
    creationTime: Date;
}


export class JobApplicationDto implements IJobApplicationDto {
    static fromJS(data: any): JobApplicationDto {
        data = typeof data === 'object' ? data : {};
        const result = new JobApplicationDto();
        result.init(data);
        return result;
    }

    id: number;
    userId: number;
    jobAdId: number | undefined;
    tenantId: number | undefined;
    companyOfficeId: number | undefined;
    applicationStatus: JobApplicationStatusCatalog;
    jobApplicationResponseStatus: JobApplicationResponseCatalog;
    interviewDate: Date | undefined;
    interviewTime: string;
    interviewTimeMeridiem: string;
    user: UserDto;
    jobAd: JobAdDto;
    companyOffice: CompanyOfficeDto;
    creationTime: Date

    constructor(data?: IJobApplicationDto) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property)) {
                    (<any> this)[property] = (<any> data)[property];
                }
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data.id;
            this.userId = data.userId;
            this.jobAdId = data.jobAdId;
            this.tenantId = data.tenantId;
            this.companyOfficeId = data.companyOfficeId;
            this.companyOffice = data.companyOffice;
            this.applicationStatus = data.applicationStatus;
            this.jobApplicationResponseStatus = data.jobApplicationResponseStatus;
            this.interviewDate = data.interviewDate;
            this.interviewTime = data.interviewTime;
            this.interviewTimeMeridiem = data.interviewTimeMeridiem;
            this.user = data.user;
            this.jobAd = data.jobAd;
            this.creationTime = data.creationTime;
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data.id = this.id;
        data.userId = this.userId;
        data.jobAdId = this.jobAdId;
        data.tenantId = this.tenantId;
        data.companyOfficeId = this.companyOfficeId;
        data.companyOffice = this.companyOffice;
        data.applicationStatus = this.applicationStatus;
        data.jobApplicationResponseStatus = this.jobApplicationResponseStatus;
        data.interviewDate = this.interviewDate;
        data.interviewTime = this.interviewTime;
        data.interviewTimeMeridiem = this.interviewTimeMeridiem;
        data.user = this.user;
        data.jobAd = this.jobAd;
        data.creationTime = this.creationTime;

        return data;
    }

    clone(): JobApplicationDto {
        const json = this.toJSON();
        const result = new JobApplicationDto();
        result.init(json);
        return result;
    }
}

export interface IJobAdDto {
    id: number;
    title: string;
    jobTitle: string;
    specializationId: number;
    specializationName:string;
    positionId: number;
    description: string;
    employmentTypeId: number;
    benefitIds: string;
    isShiftWork: boolean;
    companyOfficeId: number;
    otherRequirements: string;
    behaviourId: number;
    isAutoSift: boolean;
    status: number;
    creatorUserId: number;
    creationTime: Date;
    lastModifierUserId: number;
    lastModificationTime: Date;
    deleterUserId: number;
    deletionTime: Date;
    isDeleted: boolean;
    undisclosedSalary: boolean;
    salaryRangeFrom: number|undefined;
    salaryRangeTo: number|undefined;
    workExperienceFrom: number;
    workExperienceTo: number;
    frequentlyUsedDescription: string;
    frequentlyUsedRequirements: string;
    companyLogo: string;
    packageId: number;
    specialization: SpecializationDto;
    position: PositionDto;
    employmentType: EmploymentTypeDto;
    behaviour: BehaviourDto;
    companyOffice: CompanyOfficeDto;
    company: TenantDto;
    qualifications: JobAdQualificationDto[];
    fieldOfStudies: JobAdFieldOfStudyDto[];
    industries: JobAdIndustryDto[];
    jobAdSkills: JobAdSkillDto[];
    jobAdBehaviours: JobAdBehaviourDto[];
    jobApplications: JobApplicationDto[];
    bookmarkedJobs: BookmarkJobDto[];
    jobAdBenefits: JobAdBenefitDto[];
    identifier: string;
    jobApplicants: number;
    creatorUser: UserDto;
    package: PackageDto;
    expiryInDays: number;
    userAppliedStatus: boolean;
    views: number;
    savedCandidates: number;
    isConfidential: boolean;
    aboutConfidential: string;
    isReposted: boolean;
    state: string;
    city: string;
}


export class JobAdDto implements IJobAdDto {


    id: number;
    title: string;
    jobTitle: string;
    specializationId: number;
    specializationName:string;
    positionId: number;
    description: string;
    employmentTypeId: number;
    benefitIds: string;
    isShiftWork: boolean;
    companyOfficeId: number;
    otherRequirements: string;
    behaviourId: number;
    isAutoSift: boolean;
    status: number;
    creatorUserId: number;
    creationTime: Date;
    lastModifierUserId: number;
    lastModificationTime: Date;
    deleterUserId: number;
    deletionTime: Date;
    isDeleted: boolean;
    companyLogo: string;
    undisclosedSalary: boolean;
    salaryRangeFrom: number|undefined;
    salaryRangeTo: number|undefined;
    workExperienceFrom: number;
    workExperienceTo: number;
    frequentlyUsedDescription: string;
    frequentlyUsedRequirements: string;
    packageId: number;
    specialization: SpecializationDto;
    position: PositionDto;
    employmentType: EmploymentTypeDto;
    behaviour: BehaviourDto;
    companyOffice: CompanyOfficeDto;
    company: TenantDto;
    qualifications: JobAdQualificationDto[];
    fieldOfStudies: JobAdFieldOfStudyDto[];
    industries: JobAdIndustryDto[];
    jobAdSkills: JobAdSkillDto[];
    jobAdBehaviours: JobAdBehaviourDto[];
    jobApplications: JobApplicationDto[];
    bookmarkedJobs: BookmarkJobDto[];
    jobAdBenefits: JobAdBenefitDto[];
    identifier: string;
    jobApplicants: number;
    creatorUser: UserDto;
    package: PackageDto;
    expiryInDays: number;
    userAppliedStatus: boolean;
    views: number;
    savedCandidates: number;
    isConfidential: boolean;
    aboutConfidential: string;
    isReposted: boolean;
    state: string;
    city: string;

    constructor(data?: IJobAdDto) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property)) {
                    (<any> this)[property] = (<any> data)[property];
                }
            }
        }
    }

    static fromJS(data: any): JobAdDto {
      data = typeof data === 'object' ? data : {};
      const result = new JobAdDto();
      result.init(data);
      return result;
  }
    init(data?: any) {
        if (data) {
            this.id = data.id;
            this.title = data.title;
            this.jobTitle = data.jobTitle;
            this.specializationId = data.specializationId;
            this.specializationName = data.specializationName;
            this.positionId = data.positionId;
            this.description = data.description;
            this.employmentTypeId = data.employmentTypeId;
            this.benefitIds = data.benefitIds;
            this.isShiftWork = data.isShiftWork;
            this.companyOfficeId = data.companyOfficeId;
            this.otherRequirements = data.otherRequirements;
            this.behaviourId = data.behaviourId;
            this.isAutoSift = data.isAutoSift;
            this.status = data.status;
            this.creatorUserId = data.creatorUserId;
            this.creationTime = data.creationTime;
            this.lastModifierUserId = data.lastModifierUserId;
            this.lastModificationTime = data.lastModificationTime;
            this.deleterUserId = data.deleterUserId;
            this.deletionTime = data.deletionTime;
            this.isDeleted = data.isDeleted;
            this.undisclosedSalary = data.undisclosedSalary;
            this.salaryRangeFrom = data.salaryRangeFrom;
            this.salaryRangeTo = data.salaryRangeTo;
            this.workExperienceFrom = data.workExperienceFrom;
            this.workExperienceTo = data.workExperienceTo;
            this.frequentlyUsedDescription = data.frequentlyUsedDescription;
            this.frequentlyUsedRequirements = data.frequentlyUsedRequirements;
            this.companyLogo = data.companyLogo;
            this.specialization = data.specialization;
            this.position = data.position;
            this.employmentType = data.employmentType;
            this.behaviour = data.behaviour;
            this.companyOffice = data.companyOffice;
            this.company = data.company;
            this.qualifications = data.qualifications;
            this.fieldOfStudies = data.fieldOfStudies;
            this.industries = data.industries;
            this.jobAdSkills = data.jobAdSkills;
            this.jobAdBehaviours = data.jobAdBehaviours;
            this.jobApplications = data.jobApplications;
            this.bookmarkedJobs = data.bookmarkedJobs;
            this.jobAdBenefits = data.jobAdBenefits;
            this.identifier = data.identifier;
            this.packageId = data.packageId;
            this.jobApplicants = data.jobApplicants;
            this.creatorUser = data.creatorUser;
            this.package = data.package;
            this.expiryInDays = data.expiryInDays;
            this.userAppliedStatus = data.userAppliedStatus;
            this.views = data.views;
            this.savedCandidates = data.savedCandidates;
            this.isConfidential = data.isConfidential;
            this.aboutConfidential = data.aboutConfidential;
            this.isReposted = data.isReposted;
            this.state = data.state;
            this.city = data.city;
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data.id = this.id;
        data.title = this.title;
        data.jobTitle = this.jobTitle;
        data.specializationId = this.specializationId;
        data.specializationName = this.specializationName;
        data.positionId = this.positionId;
        data.description = this.description;
        data.employmentTypeId = this.employmentTypeId;
        data.benefitIds = this.benefitIds;
        data.isShiftWork = this.isShiftWork;
        data.companyOfficeId = this.companyOfficeId;
        data.otherRequirements = this.otherRequirements;
        data.behaviourId = this.behaviourId;
        data.isAutoSift = this.isAutoSift;
        data.status = this.status;
        data.creatorUserId = this.creatorUserId;
        data.creationTime = this.creationTime;
        data.lastModifierUserId = this.lastModifierUserId;
        data.lastModificationTime = this.lastModificationTime;
        data.deleterUserId = this.deleterUserId;
        data.deletionTime = this.deletionTime;
        data.isDeleted = this.isDeleted;
        data.undisclosedSalary = this.undisclosedSalary;
        data.salaryRangeFrom = this.salaryRangeFrom;
        data.salaryRangeTo = this.salaryRangeTo;
        data.workExperienceFrom = this.workExperienceFrom;
        data.workExperienceTo = this.workExperienceTo;
        data.frequentlyUsedDescription = this.frequentlyUsedDescription;
        data.frequentlyUsedRequirements = this.frequentlyUsedRequirements;
        data.companyLogo = this.companyLogo;
        data.specialization = this.specialization;
        data.position = this.position;
        data.employmentType = this.employmentType;
        data.behaviour = this.behaviour;
        data.companyOffice = this.companyOffice;
        data.company = this.company;
        data.qualifications = this.qualifications;
        data.fieldOfStudies = this.fieldOfStudies;
        data.industries = this.industries;
        data.jobAdSkills = this.jobAdSkills;
        data.jobAdBehaviours = this.jobAdBehaviours;
        data.jobApplications = this.jobApplications;
        data.bookmarkedJobs = this.bookmarkedJobs;
        data.jobAdBenefits = this.jobAdBenefits;
        data.identifier = this.identifier;
        data.packageId = this.packageId;
        data.jobApplicants = this.jobApplicants;
        data.creatorUser = this.creatorUser;
        data.package = this.package;
        data.expiryInDays = this.expiryInDays;
        data.userAppliedStatus = this.userAppliedStatus;
        data.views = this.views;
        data.savedCandidates = this.savedCandidates;
        data.isConfidential = this.isConfidential;
        data.aboutConfidential = this.aboutConfidential;
        data.isReposted = this.isReposted;
        data.state = this.state;
        data.city = this.city;
        return data;
    }

    clone(): JobAdDto {
        const json = this.toJSON();
        const result = new JobAdDto();
        result.init(json);
        return result;
    }
}

export interface IListBookmarkedJobsDto {
    items: BookmarkJobDto[] | undefined;
    totalCount: number;
}

export class ListBookmarkedJobDto implements IListBookmarkedJobsDto {
    static fromJS(data: any): ListBookmarkedJobDto {
        data = typeof data === 'object' ? data : {};
        const result = new ListBookmarkedJobDto();
        result.init(data);
        return result;
    }
    items: BookmarkJobDto[] | undefined;
    totalCount: number;

    constructor(data?: IListBookmarkedJobsDto) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property)) {
                    (<any> this)[property] = (<any> data)[property];
                }
            }
        }
    }

    init(data?: any) {
        if (data) {
            if (data.items && data.items.constructor === Array) {
                this.items = [];
                for (const item of data.items) {
                    this.items.push(JobApplicationDto.fromJS(item));
                }
            }
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.items && this.items.constructor === Array) {
            data.items = [];
            for (const item of this.items) {
                data.items.push(item.toJSON());
            }
        }
        return data;
    }

    clone(): ListBookmarkedJobDto {
        const json = this.toJSON();
        const result = new ListBookmarkedJobDto();
        result.init(json);
        return result;
    }
}

export interface IListJobApplicationDto {
    items: JobApplicationDto[] | undefined;
    totalCount: number;
}

export class ListJobApplicationDto implements IListJobApplicationDto {
    static fromJS(data: any): ListJobApplicationDto {
        data = typeof data === 'object' ? data : {};
        const result = new ListJobApplicationDto();
        result.init(data);
        return result;
    }
    items: JobApplicationDto[] | undefined;
    totalCount: number;

    constructor(data?: IListJobApplicationDto) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property)) {
                    (<any> this)[property] = (<any> data)[property];
                }
            }
        }
    }

    init(data?: any) {
        if (data) {
            if (data.items && data.items.constructor === Array) {
                this.items = [];
                for (const item of data.items) {
                    this.items.push(JobApplicationDto.fromJS(item));
                }
            }
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.items && this.items.constructor === Array) {
            data.items = [];
            for (const item of this.items) {
                data.items.push(item.toJSON());
            }
        }
        return data;
    }

    clone(): ListJobApplicationDto {
        const json = this.toJSON();
        const result = new ListJobApplicationDto();
        result.init(json);
        return result;
    }
}

export interface IListJobAdDto {
    items: JobAdDto[] | undefined;
    totalCount: number;
}


export class ListJobAdDto implements IListJobAdDto {
    static fromJS(data: any): ListJobAdDto {
        data = typeof data === 'object' ? data : {};
        const result = new ListJobAdDto();
        result.init(data);
        return result;
    }
    items: JobAdDto[] | undefined;
    totalCount: number;

    constructor(data?: IListJobAdDto) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property)) {
                    (<any> this)[property] = (<any> data)[property];
                }
            }
        }
    }

    init(data?: any) {
        if (data) {
            if (data.items && data.items.constructor === Array) {
                this.items = [];
                for (const item of data.items) {
                    this.items.push(JobAdDto.fromJS(item));
                }
            }
            this.totalCount = data.totalCount;
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.items && this.items.constructor === Array) {
            data.items = [];
            for (const item of this.items) {
                data.items.push(item.toJSON());
            }
        }
        data.totalCount = this.totalCount;
        return data;
    }

    clone(): ListJobAdDto {
        const json = this.toJSON();
        const result = new ListJobAdDto();
        result.init(json);
        return result;
    }
}
