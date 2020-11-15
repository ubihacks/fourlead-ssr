
import { UserExperienceDto } from './user-experience-dto';
import { UserProfileOutputDto } from './user-profile-output-dto';
import { UserPreferenceDto } from '../user-preference-dto';
import { PagedRequestDto } from '../paged-listing-component-base';
import { TenantDto } from '../company/tenant-dto';
import { JobApplicationDto } from '../company/job-ad-dto';
import { UserEducationDto } from './user-education-dto';


export class UserDto implements IUserDto {
    userName: string;
    name: string;
    surname: string;
    emailAddress: string;
    isActive: boolean | undefined;
    fullName: string | undefined;
    lastLoginTime:any | undefined;
    creationTime: any | undefined;
    roleNames: string[] | undefined;
    id: number | undefined;
    company: TenantDto | undefined;
    userEducations:UserEducationDto[];
    userExperiences: UserExperienceDto[] | undefined;
    userProfile: UserProfileOutputDto | undefined;
    userPreference: UserPreferenceDto | undefined;
    jobApplications: JobApplicationDto | undefined;

    constructor(data?: IUserDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.userName = data["userName"];
            this.name = data["name"];
            this.surname = data["surname"];
            this.emailAddress = data["emailAddress"];
            this.isActive = data["isActive"];
            this.fullName = data["fullName"];
            this.lastLoginTime = data["lastLoginTime"] ?  data["lastLoginTime"].toString()  : <any>undefined;
            this.creationTime = data["creationTime"] ? data["creationTime"].toString()  : <any>undefined;
            if (data["roleNames"] && data["roleNames"].constructor === Array) {
                this.roleNames = [];
                for (let item of data["roleNames"])
                    this.roleNames.push(item);
            }
            this.id = data["id"];
            this.company = data["company"];
            this.userEducations = data["userEducations"];
            this.userExperiences = data["userExperiences"];
            this.userProfile = data["userProfile"];
            this.userPreference = data["userPreference"];
            this.jobApplications = data["jobApplications"];

        }
    }

    static fromJS(data: any): UserDto {
        data = typeof data === 'object' ? data : {};
        let result = new UserDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["userName"] = this.userName;
        data["name"] = this.name;
        data["surname"] = this.surname;
        data["emailAddress"] = this.emailAddress;
        data["isActive"] = this.isActive;
        data["fullName"] = this.fullName;
        data["lastLoginTime"] = this.lastLoginTime ? this.lastLoginTime.toISOString() : <any>undefined;
        data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : <any>undefined;
        if (this.roleNames && this.roleNames.constructor === Array) {
            data["roleNames"] = [];
            for (let item of this.roleNames)
                data["roleNames"].push(item);
        }
        data["id"] = this.id;
        data["company"] = this.company;
        data["userEducations"] = this.userEducations;
        data["userExperiences"] = this.userExperiences;
        data["userProfile"] = this.userProfile;
        data["userPreference"] = this.userPreference;
        data["jobApplications"] = this.jobApplications;
        return data;
    }

    clone(): UserDto {
        const json = this.toJSON();
        let result = new UserDto();
        result.init(json);
        return result;
    }
}

export interface IUserDto {
    userName: string;
    name: string;
    surname: string;
    emailAddress: string;
    isActive: boolean | undefined;
    fullName: string | undefined;
    lastLoginTime:any | undefined;
    creationTime: any | undefined;
    roleNames: string[] | undefined;
    id: number | undefined;
    company: TenantDto | undefined;
    userEducations:UserEducationDto[];
    userExperiences: UserExperienceDto[] | undefined;
    userProfile: UserProfileOutputDto | undefined;
    userPreference: UserPreferenceDto | undefined;
    jobApplications: JobApplicationDto | undefined;

}



export class CreateUserDto implements ICreateUserDto {
  userName: string;
  name: string;
  surname: string;
  emailAddress: string;
  isActive: boolean | undefined;
  roleNames: string[] | undefined;
  password: string;

  constructor(data?: ICreateUserDto) {
      if (data) {
          for (var property in data) {
              if (data.hasOwnProperty(property))
                  (<any>this)[property] = (<any>data)[property];
          }
      }
  }

  init(data?: any) {
      if (data) {
          this.userName = data["userName"];
          this.name = data["name"];
          this.surname = data["surname"];
          this.emailAddress = data["emailAddress"];
          this.isActive = data["isActive"];
          if (data["roleNames"] && data["roleNames"].constructor === Array) {
              this.roleNames = [];
              for (let item of data["roleNames"])
                  this.roleNames.push(item);
          }
          this.password = data["password"];
      }
  }

  static fromJS(data: any): CreateUserDto {
      data = typeof data === 'object' ? data : {};
      let result = new CreateUserDto();
      result.init(data);
      return result;
  }

  toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["userName"] = this.userName;
      data["name"] = this.name;
      data["surname"] = this.surname;
      data["emailAddress"] = this.emailAddress;
      data["isActive"] = this.isActive;
      if (this.roleNames && this.roleNames.constructor === Array) {
          data["roleNames"] = [];
          for (let item of this.roleNames)
              data["roleNames"].push(item);
      }
      data["password"] = this.password;
      return data;
  }

  clone(): CreateUserDto {
      const json = this.toJSON();
      let result = new CreateUserDto();
      result.init(json);
      return result;
  }
}

export interface ICreateUserDto {
  userName: string;
  name: string;
  surname: string;
  emailAddress: string;
  isActive: boolean | undefined;
  roleNames: string[] | undefined;
  password: string;
}


export class ChangeUserLanguageDto implements IChangeUserLanguageDto {
  languageName: string;

  constructor(data?: IChangeUserLanguageDto) {
      if (data) {
          for (var property in data) {
              if (data.hasOwnProperty(property))
                  (<any>this)[property] = (<any>data)[property];
          }
      }
  }

  init(data?: any) {
      if (data) {
          this.languageName = data["languageName"];
      }
  }

  static fromJS(data: any): ChangeUserLanguageDto {
      data = typeof data === 'object' ? data : {};
      let result = new ChangeUserLanguageDto();
      result.init(data);
      return result;
  }

  toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["languageName"] = this.languageName;
      return data;
  }

  clone(): ChangeUserLanguageDto {
      const json = this.toJSON();
      let result = new ChangeUserLanguageDto();
      result.init(json);
      return result;
  }
}

export interface IChangeUserLanguageDto {
  languageName: string;
}


export class PagedUsersRequestDto extends PagedRequestDto {
  type: string;
  keyword: string;
  isActive: boolean | null;
  tenantId: string;
  jobAdId: string;
  sorting: string;
  experience: number | undefined;
  behaviourIds: string[];
  companyOfficeIds: number[];
  positionIds: number[];
  qualificationIds: number[];
  stateIds: number[];
}
export class PagedResultDtoOfUserDto implements IPagedResultDtoOfUserDto {
  totalCount: number | undefined;
  items: UserDto[] | undefined;

  constructor(data?: IPagedResultDtoOfUserDto) {
      if (data) {
          for (var property in data) {
              if (data.hasOwnProperty(property))
                  (<any>this)[property] = (<any>data)[property];
          }
      }
  }

  init(data?: any) {
      if (data) {
          this.totalCount = data["totalCount"];
          if (data["items"] && data["items"].constructor === Array) {
              this.items = [];
              for (let item of data["items"])
                  this.items.push(UserDto.fromJS(item));
          }
      }
  }

  static fromJS(data: any): PagedResultDtoOfUserDto {
      data = typeof data === 'object' ? data : {};
      let result = new PagedResultDtoOfUserDto();
      result.init(data);
      return result;
  }

  toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["totalCount"] = this.totalCount;
      if (this.items && this.items.constructor === Array) {
          data["items"] = [];
          for (let item of this.items)
              data["items"].push(item.toJSON());
      }
      return data;
  }

  clone(): PagedResultDtoOfUserDto {
      const json = this.toJSON();
      let result = new PagedResultDtoOfUserDto();
      result.init(json);
      return result;
  }
}

export interface IPagedResultDtoOfUserDto {
  totalCount: number | undefined;
  items: UserDto[] | undefined;
}
