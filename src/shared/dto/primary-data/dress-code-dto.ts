

export interface IDressCodeDto {
    id: number;
    name: string;
}


export class DressCodeDto implements IDressCodeDto {
    static fromJS(data: any): DressCodeDto {
        data = typeof data === 'object' ? data : {};
        const result = new DressCodeDto();
        result.init(data);
        return result;
    }

    id: number;
    name: string;

    constructor(data?: IDressCodeDto) {
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
            this.name = data['name'];
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['id'] = this.id;
        data['name'] = this.name;
    }

    clone(): DressCodeDto {
        const json = this.toJSON();
        const result = new DressCodeDto();
        result.init(json);
        return result;
    }
}
