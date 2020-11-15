import { PagedRequestDto } from '../paged-listing-component-base';

export class PagedJobApplicationRequestDto extends PagedRequestDto {
  type: string;
  keyword: string;
  isActive: boolean | null;
  tenantId: string;
  jobAdId: string;
  sorting: string;
  experience: number | undefined;
}
