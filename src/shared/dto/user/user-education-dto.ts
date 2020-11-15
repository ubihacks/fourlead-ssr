
export interface IUserEducationDto {
    creationTime: Date;
    userId: number;
    dateFrom: Date;
    institutionName: string;
    qualification: string;
    courseName:string;
    courseOutline: string;
    achievements: string;
    grade: string;
    id: number;
    institutionId: number;
    qualificationId: number;
    majorFieldOfStudyId: number;
    minorFieldOfStudyId: number;
    minorFieldOfStudyIds: number[];
    majorFieldOfStudyName: string;
    minorFieldOfStudyName: string;
    attachment: string;
    otherInstitute: string;
    isFileUpdated: boolean;
}


export class UserEducationDto implements IUserEducationDto {
    static fromJS(data: any): UserEducationDto {
        data = typeof data === 'object' ? data : {};
        const result = new UserEducationDto();
        result.init(data);
        return result;
    }

    creationTime: Date;
    userId: number;
    dateFrom: Date;

    institutionName: string;
    qualification: string;
    courseName:string;
    courseOutline: string;
    achievements: string;
    grade: string;
    id: number;
    institutionId: number;
    qualificationId: number;
    majorFieldOfStudyId: number;
    minorFieldOfStudyId: number;
    minorFieldOfStudyIds: number[];
    majorFieldOfStudyName: string;
    minorFieldOfStudyName: string;
    attachment: string;
    otherInstitute: string;
    isFileUpdated: boolean;

    constructor(data?: IUserEducationDto) {
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
            this.creationTime = data['creationTime'];
            this.userId = data['userId'];
            this.dateFrom = data['dateFrom'];
            this.institutionName = data['institutionName'];
            this.qualification = data['qualification'];
            this.courseName = data['courseName'];
            this.courseOutline = data['courseOutline'];
            this.achievements = data['achievements'];
            this.grade = data['grade'];
            this.id = data['id'];
            this.institutionId = data['institutionId'];
            this.qualificationId = data['qualificationId'];
            this.majorFieldOfStudyId = data['majorFieldOfStudyId'];
            this.minorFieldOfStudyId = data['minorFieldOfStudyId'];
            this.majorFieldOfStudyName = data['majorFieldOfStudyName'];
            this.minorFieldOfStudyName = data['minorFieldOfStudyName'];
            this.minorFieldOfStudyIds = data['minorFieldOfStudyIds'];
            this.attachment = data['attachment'];
            this.otherInstitute = data['otherInstitute'];
            this.isFileUpdated = data['isFileUpdated'];
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['userId'] = this.userId;
        data['creationTime'] = this.creationTime;
        data['userId'] = this.userId;
        data['dateFrom'] = this.dateFrom;
        data['institutionName'] = this.institutionName;
        data['qualification'] = this.qualification;
        data['courseName'] = this.courseName;
        data['courseOutline'] = this.courseOutline;
        data['achievements'] = this.achievements;
        data['grade'] = this.grade;
        data['id'] = this.id;
        data['institutionId'] = this.institutionId;
        data['qualificationId'] = this.qualificationId;
        data['majorFieldOfStudyId'] = this.majorFieldOfStudyId;
        data['minorFieldOfStudyId'] = this.minorFieldOfStudyId;
        data['majorFieldOfStudyName'] = this.majorFieldOfStudyName;
        data['minorFieldOfStudyName'] = this.minorFieldOfStudyName;
        data['minorFieldOfStudyIds'] = this.minorFieldOfStudyIds;
        data['attachment'] = this.attachment;
        data['otherInstitute'] = this.otherInstitute;
        data['isFileUpdated'] = this.isFileUpdated;
        return data;
    }

    clone(): UserEducationDto {
        const json = this.toJSON();
        const result = new UserEducationDto();
        result.init(json);
        return result;
    }
}

export interface IListResultDtoOfUserEducationDto {
    items: UserEducationDto[] | undefined;
    totalCount: number;
}


export class ListResultDtoOfUserEducationDto implements IListResultDtoOfUserEducationDto {
    static fromJS(data: any): ListResultDtoOfUserEducationDto {
        data = typeof data === 'object' ? data : {};
        const result = new ListResultDtoOfUserEducationDto();
        result.init(data);
        return result;
    }
    items: UserEducationDto[] | undefined;
    totalCount: number;

    constructor(data?: IListResultDtoOfUserEducationDto) {
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
                    this.items.push(UserEducationDto.fromJS(item));
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

    clone(): ListResultDtoOfUserEducationDto {
        const json = this.toJSON();
        const result = new ListResultDtoOfUserEducationDto();
        result.init(json);
        return result;
    }
}
