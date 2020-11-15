export interface IUserInfoDto {
  userProfileImgUrl: string;
  userCompanyName: string;
  userCompanyLogoUrl: string ;
  userCompanySlug: string ;
  userEnglishTestResult: string ;
}


export class UserInfoDto implements IUserInfoDto {
  static fromJS(data: any): UserInfoDto {
      data = typeof data === 'object' ? data : {};
      const result = new UserInfoDto();
      result.init(data);
      return result;
  }

  userProfileImgUrl: string;
  userCompanyName: string;
  userCompanyLogoUrl: string ;
  userCompanySlug: string ;
  userEnglishTestResult: string ;

  constructor(data?: IUserInfoDto) {
      if (data) {
          for (const property in data) {
              if (data.hasOwnProperty(property)) {
                  (this as any)[property] = (data as any)[property];
              }
          }
      }
  }

  init(data?: any) {
      if (data) {
          this.userProfileImgUrl = data.userProfileImgUrl;
          this.userCompanyName = data.userCompanyName;
          this.userCompanyLogoUrl = data.userCompanyLogoUrl;
          this.userCompanySlug = data.userCompanySlug;
          this.userEnglishTestResult = data.userEnglishTestResult;
      }
  }



  toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data.userProfileImgUrl = this.userProfileImgUrl;
      data.userCompanyName = this.userCompanyName;
      data.userCompanyLogoUrl = this.userCompanyLogoUrl;
      data.userCompanySlug = this.userCompanySlug;
      data.userEnglishTestResult = this.userEnglishTestResult;
      return data;
  }

  clone(): UserInfoDto {
      const json = this.toJSON();
      const result = new UserInfoDto();
      result.init(json);
      return result;
  }
}
