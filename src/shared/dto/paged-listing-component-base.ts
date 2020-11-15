import { Injector, OnInit, Directive } from '@angular/core';
import { AppComponentBase } from '../app-component.base';

export class PagedResultDto {
  items: any[];
  totalCount: number;
}

export class EntityDto {
  id: number;
}

export class PagedRequestDto {
  skipCount: number;
  maxResultCount: number;
}

@Directive()
export abstract class PagedListingComponentBase<TEntityDto> extends AppComponentBase implements OnInit {

  public pageSize = 20;
  public pageNumber = 1;
  public totalPages = 1;
  public totalItems: number;
  public isTableLoading = false;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.getDataPage(this.pageNumber);
  }
  isFoundHardSkill(skills) {
    if (skills) {
      return skills.some(s => s.skillCategoryId === 1 && s.skillTypeId !== 7);
    }
  }
  isFoundSoftSkill(skills) {
    if (skills) {
      return skills.some(s => s.skillCategoryId === 2);
    }
  }

  public showPaging(result: PagedResultDto, pageNumber: number): void {

    this.totalPages = ((result.totalCount - (result.totalCount % this.pageSize)) / this.pageSize) + 1;

    this.totalItems = result.totalCount;
    this.pageNumber = pageNumber;
  }

  public getDataPage(page: number): void {
    const req = new PagedRequestDto();
    req.maxResultCount = this.pageSize;
    req.skipCount = (page - 1) * this.pageSize;

    this.isTableLoading = true;
    this.list(req, page, () => {
      this.isTableLoading = false;
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  protected abstract list(request: PagedRequestDto, pageNumber: number, finishedCallback: Function): void;
  protected abstract delete(entity: TEntityDto): void;
}
