
export interface IUserCertificationDto {
    grade: string;
    id: number;
    userId: number;
    startDate: Date;
    
    instituteId: number;
    instituteName: string; 
    qualificationName: string;
    otherQualification: string;
    otherInstitute:string;
    professionalCertificateId: number;
    professionalCertificateName: string;
    attachment: string; 
    isFileUpdated: boolean;
}


export class UserCertificationDto implements IUserCertificationDto {
    static fromJS(data: any): UserCertificationDto {
        data = typeof data === 'object' ? data : {};
        const result = new UserCertificationDto();
        result.init(data);
        return result;
    }

    grade: string;
    id: number;
    userId: number;
    startDate: Date;
   
    instituteId: number;
    instituteName: string; 
    qualificationName: string;
    otherQualification: string;
    otherInstitute:string;
    professionalCertificateId: number;
    professionalCertificateName: string;
    attachment: string; 
    isFileUpdated: boolean;

    constructor(data?: IUserCertificationDto) {
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
            this.startDate = data['startDate'];
            this.instituteName = data['instituteName'];
            this.instituteId = data['instituteId']; 
            this.qualificationName = data['qualificationName'];
            this.otherQualification = data['otherQualification'];
            this.otherInstitute = data['otherInstitute'];
            this.professionalCertificateId = data['professionalCertificateId'];
            this.grade = data['grade'];
            this.professionalCertificateName = data['professionalCertificateName'];
            this.attachment = data['attachment'];
            this.isFileUpdated = data['isFileUpdated'];
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['id'] = this.id;
        data['userId'] = this.userId;
        data['startDate'] = this.startDate;
        data['instituteName'] = this.instituteName;
        data['instituteId'] = this.instituteId; 
        data['qualificationName'] = this.qualificationName;
        data['otherQualification'] = this.otherQualification;
        data['otherInstitute'] = this.otherInstitute;
        data['grade'] = this.grade;
        data['professionalCertificateId'] = this.professionalCertificateId;
        data['professionalCertificateName'] = this.professionalCertificateName;
        data['attachment'] = this.attachment;
        data['isFileUpdated'] = this.isFileUpdated;
        return data;
    }

    clone(): UserCertificationDto {
        const json = this.toJSON();
        const result = new UserCertificationDto();
        result.init(json);
        return result;
    }
}

export interface IListResultDtoOfUserCertificationDto {
    items: UserCertificationDto[] | undefined;
    totalCount: number;
}


export class ListResultDtoOfUserCertificationDto implements IListResultDtoOfUserCertificationDto {
    static fromJS(data: any): ListResultDtoOfUserCertificationDto {
        data = typeof data === 'object' ? data : {};
        const result = new ListResultDtoOfUserCertificationDto();
        result.init(data);
        return result;
    }
    items: UserCertificationDto[] | undefined;
    totalCount: number;

    constructor(data?: IListResultDtoOfUserCertificationDto) {
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
                    this.items.push(UserCertificationDto.fromJS(item));
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

    clone(): ListResultDtoOfUserCertificationDto {
        const json = this.toJSON();
        const result = new ListResultDtoOfUserCertificationDto();
        result.init(json);
        return result;
    }
}
