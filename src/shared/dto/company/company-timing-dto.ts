
enum DayCatalog {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}

export interface ICompanyTimingDto {
    id: number;
    tenantId: number;
    day: DayCatalog;
    startTime: string;
    startTimeMeridiem: string;
    endTime: string;
    endTimeMeridiem: string;
}


export class CompanyTimingDto implements ICompanyTimingDto {
    static fromJS(data: any): CompanyTimingDto {
        data = typeof data === 'object' ? data : {};
        const result = new CompanyTimingDto();
        result.init(data);
        return result;
    }

    id: number;
    tenantId: number;
    day: DayCatalog;
    dayName: string;
    startTime: string;
    startTimeMeridiem: string;
    endTime: string;
    endTimeMeridiem: string;

    constructor(data?: ICompanyTimingDto) {
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
            this.tenantId = data['tenantId'];
            this.day = data['day'];
            this.dayName = data['dayName'];
            this.startTime = data['startTime'];
            this.startTimeMeridiem = data['startTimeMeridiem'];
            this.endTime = data['endTime'];
            this.endTimeMeridiem = data['endTimeMeridiem'];
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['id'] = this.id;
        data['tenantId'] = this.tenantId;
        data['day'] = this.day;
        data['dayName'] = this.dayName;
        data['startTime'] = this.startTime;
        data['startTimeMeridiem'] = this.startTimeMeridiem;
        data['endTime'] = this.endTime;
        data['endTimeMeridiem'] = this.endTimeMeridiem;
        return data;
    }

    clone(): CompanyTimingDto {
        const json = this.toJSON();
        const result = new CompanyTimingDto();
        result.init(json);
        return result;
    }
}


export interface IListCompanyTimingDto {
    items: CompanyTimingDto[] | undefined;
    totalCount: number;
}


export class ListCompanyTimingDto implements IListCompanyTimingDto {
    static fromJS(data: any): ListCompanyTimingDto {
        data = typeof data === 'object' ? data : {};
        const result = new ListCompanyTimingDto();
        result.init(data);
        return result;
    }
    items: CompanyTimingDto[] | undefined;
    totalCount: number;

    constructor(data?: IListCompanyTimingDto) {
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
                    this.items.push(CompanyTimingDto.fromJS(item));
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

    clone(): ListCompanyTimingDto {
        const json = this.toJSON();
        const result = new ListCompanyTimingDto();
        result.init(json);
        return result;
    }
}
