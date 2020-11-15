
export interface IDropdownOutputDto {
  value: string;
  text: string;
  name: string;
  parent:string;
  selected: boolean;
  id: string;
  disabled?: boolean;
  children?: Array<IDropdownOutputDto>;
  additional?: any;
}


export class DropdownOutputDto implements IDropdownOutputDto {

  value: string;
  text: string;
  name: string;
  parent:string;
  selected: boolean;
  id: string;
  disabled?: boolean;
  children?: IDropdownOutputDto[];
  additional?: any;

  static fromJS(data: any): DropdownOutputDto {
    data = typeof data === 'object' ? data : {};
    const result = new DropdownOutputDto();
    result.init(data);
    return result;
  }

  constructor(data?: IDropdownOutputDto) {
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
      this.value = data.value;
      this.text = data.text;
      this.parent = data.parent;
      this.selected = data.selected;
      this.id = data.id;
      this.disabled = data.disabled;
      this.children = data.children;
      this.additional = data.additional;
      this.name = data.name;
    }
  }



  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data.value = this.value;
    data.text = this.text;
    data.parent = this.parent;
    data.selected = this.selected;
    data.id = this.id;
    data.disabled = this.disabled;
    data.children = this.children;
    data.additional = this.additional;
    data.name = this.name;
    return data;
  }

  clone(): DropdownOutputDto {
    const json = this.toJSON();
    const result = new DropdownOutputDto();
    result.init(json);
    return result;
  }
}



export interface IListResultDtoOfDropdownDto {
  items: DropdownOutputDto[] | undefined;
}


export class ListResultDtoOfDropdownDto implements IListResultDtoOfDropdownDto {

  constructor(data?: IListResultDtoOfDropdownDto) {
    if (data) {
      for (const property in data) {
        if (data.hasOwnProperty(property)) {
          (this as any)[property] = (data as any)[property];
        }
      }
    }
  }
  items: DropdownOutputDto[] | undefined;
  static fromJS(data: any): ListResultDtoOfDropdownDto {
    data = typeof data === 'object' ? data : {};
    const result = new ListResultDtoOfDropdownDto();
    result.init(data);
    return result;
  }

  init(data?: any) {
    if (data) {
      if (data.items && data.items.constructor === Array) {
        this.items = [];
        for (const item of data.items) {
          this.items.push(DropdownOutputDto.fromJS(item));
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

  clone(): ListResultDtoOfDropdownDto {
    const json = this.toJSON();
    const result = new ListResultDtoOfDropdownDto();
    result.init(json);
    return result;
  }
}
