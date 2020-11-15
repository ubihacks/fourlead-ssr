
export interface IMonthWiseJobStatsDto {
    month: number;
    monthString: string;
    noOfJobAds: number;
}


export class MonthWiseJobStatsDto implements IMonthWiseJobStatsDto {
    static fromJS(data: any): MonthWiseJobStatsDto {
        data = typeof data === 'object' ? data : {};
        const result = new MonthWiseJobStatsDto();
        result.init(data);
        return result;
    }
    month: number;
    monthString: string;
    noOfJobAds: number;

    constructor(data?: IMonthWiseJobStatsDto) {
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
            this.month = data['month'];
            this.monthString = data['monthString'];
            this.noOfJobAds = data['noOfJobAds'];
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['month'] = this.month;
        data['monthString'] = this.monthString;
        data['noOfJobAds'] = this.noOfJobAds;
        return data;
    }

    clone(): MonthWiseJobStatsDto {
        const json = this.toJSON();
        const result = new MonthWiseJobStatsDto();
        result.init(json);
        return result;
    }
}



export class ListMonthWiseJobStatsDto implements IListMonthWiseJobStatsDto {
    static fromJS(data: any): ListMonthWiseJobStatsDto {
        data = typeof data === 'object' ? data : {};
        const result = new ListMonthWiseJobStatsDto();
        result.init(data);
        return result;
    }
    items: MonthWiseJobStatsDto[] | undefined;
    totalCount: number;

    constructor(data?: IListMonthWiseJobStatsDto) {
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
                    this.items.push(MonthWiseJobStatsDto.fromJS(item));
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

    clone(): ListMonthWiseJobStatsDto {
        const json = this.toJSON();
        const result = new ListMonthWiseJobStatsDto();
        result.init(json);
        return result;
    }
}

export interface IListMonthWiseJobStatsDto {
    items: MonthWiseJobStatsDto[] | undefined;
    totalCount: number;
}
