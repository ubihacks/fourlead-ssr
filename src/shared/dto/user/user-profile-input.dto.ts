
export interface IUserProfileInputDto {
    userId: number;
    firstName: string;
    lastName: string;
    gender: number;
    dateOfBirth: string;
    contactNo: string;
    nationality: string;
    currentLocation: string;
    country: string;
    favouriteQuote : string;
    isCompanyRegistered:boolean;
    profileImage:string;
}


export class UserProfileInputDto implements IUserProfileInputDto {
    static fromJS(data: any): UserProfileInputDto {
        data = typeof data === 'object' ? data : {};
        const result = new UserProfileInputDto();
        result.init(data);
        return result;
    }

    userId: number;
    firstName: string;
    lastName: string;
    gender: number;
    dateOfBirth: string;
    contactNo: string;
    nationality: string;
    currentLocation: string;
    country: string;
    favouriteQuote : string;
    isCompanyRegistered:boolean;
    profileImage:string;

    constructor(data?: IUserProfileInputDto) {
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
            this.userId = data['userId'];
            this.firstName = data['firstName'];
            this.lastName = data['lastName'];
            this.gender = data['gender'];
            this.dateOfBirth = data['dateOfBirth'];
            this.contactNo = data['contactNo'];
            this.nationality = data['nationality'];
            this.currentLocation = data['currentLocation'];
            this.country = data['country'];
            this.favouriteQuote = data['favouriteQuote'];
            this.isCompanyRegistered = data['isCompanyRegistered'];
            this.profileImage = data['profileImage'];
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['userId'] = this.userId;
        data['firstName'] = this.firstName;
        data['lastName'] = this.lastName;
        data['gender'] = this.gender;
        data['dateOfBirth'] = this.dateOfBirth;
        data['contactNo'] = this.contactNo;
        data['nationality'] = this.nationality;
        data['currentLocation'] = this.currentLocation;
        data['country'] = this.country;
        data['favouriteQuote'] = this.favouriteQuote;
        data['isCompanyRegistered'] = this.isCompanyRegistered  ;
        data['profileImage'] =this.profileImage  ;
        return data;
    }

    clone(): UserProfileInputDto {
        const json = this.toJSON();
        const result = new UserProfileInputDto();
        result.init(json);
        return result;
    }
}

