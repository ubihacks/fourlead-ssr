import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators';
import { AppComponentBase } from 'src/shared/app-component.base';
import { JobAdDto, BookmarkJobDto, JobApplicationDto } from 'src/shared/dto/company/job-ad-dto';
import { JobAdSearchDtoDto } from 'src/shared/dto/company/job-ad-search-dto';
import { TenantDto } from 'src/shared/dto/company/tenant-dto';
import { CompanyProxyService } from 'src/shared/proxies/company-proxy.service';
import { JobsProxyService } from 'src/shared/proxies/jobs-proxy.service';
import { AccountServiceProxy } from 'src/shared/service-proxies';


@Component({
  selector: 'app-job-card-public',
  templateUrl: './job-card-public.component.html',
  styleUrls: ['./job-card-public.component.css']
})
export class JobCardPublicComponent extends AppComponentBase implements OnInit {
   @Input() jobAd: JobAdDto;
   @Input() jobAdSearchRequest: JobAdSearchDtoDto;
   @Input() apiBaseUrl: string;
   @Input() isPublic: boolean;
   @Output('refresh') refresh: EventEmitter<any> = new EventEmitter();
  //  @Output("bookmark") bookmark: EventEmitter<any> = new EventEmitter();
  //  @Output("removeBookmark") removeBookmark: EventEmitter<any> = new EventEmitter();
  //  @Output("withdraw") withdraw: EventEmitter<any> = new EventEmitter();

  bookmarkJobDto: BookmarkJobDto = new BookmarkJobDto();
  jobApplicationDto: JobApplicationDto = new JobApplicationDto();
  company = new TenantDto();
  userId: number | undefined;

   public constructor(
    injector: Injector,
    private jobsService: JobsProxyService,
    private dialog: MatDialog,
    private companyService: CompanyProxyService,
    private accountService: AccountServiceProxy,
    public spinner: NgxSpinnerService,
    private router: Router
  ) {
    super(injector);
    this.userId = this.appSession.userId;

  }
  ngOnInit(): void {
  }

  refreshEm(){
    this.refresh.emit();
  }


  withdraw(entity: JobAdDto): void {
    if (this.appSession.userId) {

      this.swal.fire({
        title: 'Are you sure?',
        text: `Are you sure you want to withdraw the "${entity.employmentType}" application?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, undo applied job!'
      }).then((result) => {
        if (result.value) {
          this.jobsService
            .withdraw(entity.id, '/api/services/app/JobApplication/Delete?')
            .pipe(
              finalize(() => {
                this.swal.fire(
                  'Successfull',
                  'Successfully undo applied job.',
                  'success'
                );
                this.refreshEm();
              })
            )
            .subscribe(() => { });
        }
      });
    }
    else {
      this.router.navigate(['/account/login']);
    }

  }


  removeBookmark(input: JobAdDto): void {
    if (this.userId) {
      this.swal.fire({
        title: 'Are you sure?',
        text: `Are you sure you want to remove this job from your bookmark? `,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, remove job from bookmark!'
      }).then((result) => {
        if (result.value) {
          this.jobsService
            .removeBookmark(input.id, '/api/services/app/BookmarkedJob/Delete?')
            .pipe(
              finalize(() => {
                this.swal.fire(
                  'Successfull',
                  'Successfully removed.',
                  'success'
                );
                this.refreshEm();
              })
            )
            .subscribe(() => { });
        }
      });
    }
    else {
      this.router.navigate(['/account/login']);
    }

  }

  bookmark(jobAdId: number) {
    if (this.userId) {
      this.bookmarkJobDto.jobAdId = jobAdId;
      this.bookmarkJobDto.userId = this.userId;

      this.jobsService
        .bookmarkJob(this.bookmarkJobDto)
        .pipe(
          finalize(() => {

          })
        )
        .subscribe((result: BookmarkJobDto) => {
          if (result) {
            this.bookmarkJobDto = result;
            this.notify.success('Job Added to Bookmark successfully.');
            // this.router.navigate(['/user/jobs/bookmarked']);
          } else {
            this.notify.error('Something went wrong while processing your request.');
          }
          return;
        });
    }
    else {
      this.router.navigate(['/account/login']);
    }

  }

  apply(jobAd: JobAdDto) {
    if (this.appSession.userId) {
      this.jobApplicationDto.jobAdId = jobAd.id;
      this.jobApplicationDto.tenantId = jobAd.company.id;
      this.jobApplicationDto.userId = this.userId;

      this.jobsService
        .applyForJob(this.jobApplicationDto)
        .pipe(
          finalize(() => {

          })
        )
        .subscribe((result: JobApplicationDto) => {
          if (result) {
            this.jobApplicationDto = result;
            this.refreshEm();
            this.notify.success('Job Applied successfully.');
            // this.router.navigate(['/user/jobs/applied']);
          } else {
            this.notify.error('Something went wrong while processing your request.');
          }
          return;
        });
    }
    else {
      this.router.navigate(['/account/register']);
    }
  }

  showEditJobAdDialog(id?: number): void {
    // const frequentlyUsedDescription = this.company.frequentlyUsedDescription;
    // const frequentlyUsedRequirements = this.company.frequentlyUsedRequirements;
    // const dialog = this.dialog.open(EditJobAdComponent, {
    //   data: {
    //     frequentlyUsedDescription,
    //     frequentlyUsedRequirements,
    //     id
    //   }
    // });

    // dialog.afterClosed().subscribe(result => {
    //   if (result) {

    //   }
    // });
  }
  deleteDraftJobAd(jobAd: JobAdDto) {
    this.swal.fire({
      title: 'Are you sure?',
      text: `Are you sure you want to job ad '${jobAd.jobTitle}'.`,
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {
        this.companyService
          .deleteJobAd(jobAd.id)
          .pipe(
            finalize(() => { })
          )
          .subscribe(() => {
            this.notify.success('Successfully deleted', 'Successfull');

          });
      }
    });
  }

  public markJobAsComplete(jobAd: JobAdDto): void {
    this.swal.fire({
      title: 'Are you sure?',
      text: `Are you sure you want to Mark "${jobAd.jobTitle}" as complete `,
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {
        this.spinner.show();
        this.accountService.markJobAsComplete(jobAd)
          .pipe(
            finalize(() => {
              this.spinner.hide();

            })
          )
          .subscribe(success => {
            if (success) {
              this.notify.success('Operation performed successfully.', 'Successfull');
            } else {
              this.message.fire('Error', 'Failed to update, Please try again later.', 'error');
            }
          });
      }
    });
  }
}
