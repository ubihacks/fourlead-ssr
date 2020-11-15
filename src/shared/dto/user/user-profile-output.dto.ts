
export interface IUserProfileOutputDto {
    id: number;
    userId: number;
    firstName: string;
    lastName: string;
    gender: number;
    dateOfBirth: Date;
    contactNo: string;
    nationality: string;
    locationState: string;
    locationCity: string;
    country: string;
    isContactNoConfirmed: boolean;
    isProfileCompleted: boolean;
    nric: string;
    passportNo: string;
    isSmsSent: boolean;
    favouriteQuote: string;
    isCompanyRegistered: boolean;
    profileImage: string;
    englishTestResult: string;
    behaviourTestResult: string;
    totalExperience: number;
    email:string;
}


export class UserProfileOutputDto implements IUserProfileOutputDto {
    static fromJS(data: any): UserProfileOutputDto {
        data = typeof data === 'object' ? data : {};
        const result = new UserProfileOutputDto();
        result.init(data);
        return result;
    }

    id: number;
    userId: number;
    firstName: string;
    lastName: string;
    gender: number;
    dateOfBirth: Date;
    contactNo: string;
    nationality: string;
    locationState: string;
    locationCity: string;
    country: string;
    isContactNoConfirmed: boolean;
    isProfileCompleted: boolean;
    nric: string;
    passportNo: string;
    isSmsSent: boolean;
    favouriteQuote: string;
    isCompanyRegistered: boolean;
    profileImage: string;
    englishTestResult: string;
    behaviourTestResult: string;
    totalExperience: number;
    email:string;

    constructor(data?: IUserProfileOutputDto) {
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
            this.userId = data['userId'];
            this.firstName = data['firstName'];
            this.lastName = data['lastName'];
            this.gender = data['gender'];
            this.dateOfBirth = data['dateOfBirth'];
            this.contactNo = data['contactNo'];
            this.nationality = data['nationality'];
            this.locationState = data['locationState'];
            this.locationCity = data['locationCity'];
            this.country = data['country'];
            this.isContactNoConfirmed = data['isContactNoConfirmed'];
            this.isProfileCompleted = data['isProfileCompleted'];
            this.nric = data['nric'];
            this.passportNo = data['passportNo'];
            this.isSmsSent = data['isSmsSent'];
            this.favouriteQuote = data['favouriteQuote'];
            this.isCompanyRegistered = data['isCompanyRegistered'];
            this.profileImage = data['profileImage'];
            this.englishTestResult = data['englishTestResult'];
            this.behaviourTestResult = data['behaviourTestResult'];
            this.totalExperience = data["totalExperience"];
            this.email = data["email"];
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['id'] = this.id;
        data['userId'] = this.userId;
        data['firstName'] = this.firstName;
        data['lastName'] = this.lastName;
        data['gender'] = this.gender;
        data['dateOfBirth'] = this.dateOfBirth;
        data['contactNo'] = this.contactNo;
        data['nationality'] = this.nationality;
        data['locationState'] = this.locationState;
        data['locationCity'] = this.locationCity;
        data['country'] = this.country;
        data['isContactNoConfirmed'] = this.isContactNoConfirmed;
        data['isProfileCompleted'] = this.isProfileCompleted;
        data['nric'] = this.nric;
        data['passportNo'] = this.passportNo;
        data['isSmsSent'] = this.isSmsSent;
        data['favouriteQuote'] = this.favouriteQuote;
        data['isCompanyRegistered'] = this.isCompanyRegistered;
        data['profileImage'] = this.profileImage;
        data['englishTestResult'] = this.englishTestResult;
        data['behaviourTestResult'] = this.behaviourTestResult;
        data['totalExperience'] = this.totalExperience;
        data['email'] = this.email;

        return data;
    }

    clone(): UserProfileOutputDto {
        const json = this.toJSON();
        const result = new UserProfileOutputDto();
        result.init(json);
        return result;
    }
}

