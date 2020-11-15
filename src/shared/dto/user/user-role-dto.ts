import { PagedRequestDto } from '../paged-listing-component-base'; import { UserDto } from './user-dto';

export class PagedUserRoleRequestDto extends PagedRequestDto {
  keyword: string;
  isActive: boolean | null;
}

export interface IUserRoleDto {
  id: number;
  userId: number;
  roleId: number;
  role: RoleDto;
  user: UserDto;
  tenantId: number;
}


export class UserRoleDto implements IUserRoleDto {
  static fromJS(data: any): UserRoleDto {
    data = typeof data === 'object' ? data : {};
    const result = new UserRoleDto();
    result.init(data);
    return result;
  }

  id: number;
  userId: number;
  roleId: number;
  role: RoleDto;
  user: UserDto;
  tenantId: number;
  constructor(data?: IUserRoleDto) {
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
      this.roleId = data['roleId'];
      this.role = data['role'];
      this.user = data['user'];
      this.tenantId = data['tenantId'];

    }
  }



  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data['id'] = this.id;
    data['userId'] = this.userId;
    data['roleId'] = this.roleId;
    data['role'] = this.role;
    data['user'] = this.user;
    data['tenantId'] = this.tenantId;

    return data;
  }

  clone(): UserRoleDto {
    const json = this.toJSON();
    const result = new UserRoleDto();
    result.init(json);
    return result;
  }
}

export interface IPagedResultDtoOfUserRoleDto {
  totalCount: number | undefined;
  items: UserRoleDto[] | undefined;
}

export class PagedResultDtoOfUserRoleDto implements IPagedResultDtoOfUserRoleDto {
  static fromJS(data: any): PagedResultDtoOfUserRoleDto {
    data = typeof data === 'object' ? data : {};
    const result = new PagedResultDtoOfUserRoleDto();
    result.init(data);
    return result;
  }

  totalCount: number | undefined;
  items: UserRoleDto[] | undefined;


  constructor(data?: IPagedResultDtoOfUserRoleDto) {
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
      this.totalCount = data['totalCount'];
      if (data['items'] && data['items'].constructor === Array) {
        this.items = [];
        for (const item of data['items']) {
          this.items.push(UserRoleDto.fromJS(item));
        }
      }
    }
  }



  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data['totalCount'] = this.totalCount;
    if (this.items && this.items.constructor === Array) {
      data['items'] = [];
      for (const item of this.items) {
        data['items'].push(item.toJSON());
      }
    }
    return data;
  }

  clone(): PagedResultDtoOfUserRoleDto {
    const json = this.toJSON();
    const result = new PagedResultDtoOfUserRoleDto();
    result.init(json);
    return result;
  }


}



export class RoleDto implements IRoleDto {
  name: string;
  displayName: string;
  normalizedName: string | undefined;
  description: string | undefined;
  isStatic: boolean | undefined;
  permissions: string[] | undefined;
  id: number | undefined;

  constructor(data?: IRoleDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(data?: any) {
    if (data) {
      this.name = data["name"];
      this.displayName = data["displayName"];
      this.normalizedName = data["normalizedName"];
      this.description = data["description"];
      this.isStatic = data["isStatic"];
      if (data["permissions"] && data["permissions"].constructor === Array) {
        this.permissions = [];
        for (let item of data["permissions"])
          this.permissions.push(item);
      }
      this.id = data["id"];
    }
  }

  static fromJS(data: any): RoleDto {
    data = typeof data === 'object' ? data : {};
    let result = new RoleDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["name"] = this.name;
    data["displayName"] = this.displayName;
    data["normalizedName"] = this.normalizedName;
    data["description"] = this.description;
    data["isStatic"] = this.isStatic;
    if (this.permissions && this.permissions.constructor === Array) {
      data["permissions"] = [];
      for (let item of this.permissions)
        data["permissions"].push(item);
    }
    data["id"] = this.id;
    return data;
  }

  clone(): RoleDto {
    const json = this.toJSON();
    let result = new RoleDto();
    result.init(json);
    return result;
  }
}

export interface IRoleDto {
  name: string;
  displayName: string;
  normalizedName: string | undefined;
  description: string | undefined;
  isStatic: boolean | undefined;
  permissions: string[] | undefined;
  id: number | undefined;
}


export class ListResultDtoOfRoleDto implements IListResultDtoOfRoleDto {
  items: RoleDto[] | undefined;

  constructor(data?: IListResultDtoOfRoleDto) {
      if (data) {
          for (var property in data) {
              if (data.hasOwnProperty(property))
                  (<any>this)[property] = (<any>data)[property];
          }
      }
  }

  init(data?: any) {
      if (data) {
          if (data["items"] && data["items"].constructor === Array) {
              this.items = [];
              for (let item of data["items"])
                  this.items.push(RoleDto.fromJS(item));
          }
      }
  }

  static fromJS(data: any): ListResultDtoOfRoleDto {
      data = typeof data === 'object' ? data : {};
      let result = new ListResultDtoOfRoleDto();
      result.init(data);
      return result;
  }

  toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      if (this.items && this.items.constructor === Array) {
          data["items"] = [];
          for (let item of this.items)
              data["items"].push(item.toJSON());
      }
      return data;
  }

  clone(): ListResultDtoOfRoleDto {
      const json = this.toJSON();
      let result = new ListResultDtoOfRoleDto();
      result.init(json);
      return result;
  }
}

export interface IListResultDtoOfRoleDto {
  items: RoleDto[] | undefined;
}
