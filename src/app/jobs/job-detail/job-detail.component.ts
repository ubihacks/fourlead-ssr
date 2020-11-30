import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonLdService } from 'ngx-seo';
import { finalize } from 'rxjs/operators';
import { AppComponentBase } from 'src/shared/app-component.base';
import { AppConfigService } from 'src/shared/AppConfigService';
import { CompanyOverviewDto } from 'src/shared/dto/company/company-overview-dto';
import { JobAdDto, JobApplicationDto } from 'src/shared/dto/company/job-ad-dto';
import { JobAdSearchDtoDto } from 'src/shared/dto/company/job-ad-search-dto';
import { JobAdSkillDto } from 'src/shared/dto/company/job-ad-skill-dto';
import { TenantDto } from 'src/shared/dto/company/tenant-dto';
import { UserJobStatsDto } from 'src/shared/dto/company/user-job-stats-dto';
import { ListResultDtoOfUserExperienceDto, UserExperienceDto } from 'src/shared/dto/user/user-experience-dto';
import { UserProfileOutputDto } from 'src/shared/dto/user/user-profile-output-dto';
import { CompanyProxyService } from 'src/shared/proxies/company-proxy.service';
import { JobsProxyService } from 'src/shared/proxies/jobs-proxy.service';
import { SeoService } from 'src/shared/seo/seo.service';
import { AccountServiceProxy, ConfigurationServiceProxy } from 'src/shared/service-proxies';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent extends AppComponentBase implements OnInit {

  pageTitle = '';
  pageKeywords = 'personality test,Jobs in malaysia,career building. Best job portal in malaysia,jobs,behaviour assessment,pre employment, company culture,organisation culture,workplace culture,office politics,';
  pageDescription = 'Fourlead empowers you to make smarter decisions through transparency. Discover jobs that suit your workplace behavioural style. Sign up now for free!';



  href = '';
  apiBaseUrl: string;
  userJobStatus = new UserJobStatsDto();
  company: TenantDto = new TenantDto();
  jobAd = new JobAdDto();
  languageSkills: JobAdSkillDto[];
  hardSkills: JobAdSkillDto[];
  softSkills: JobAdSkillDto[];
  jobAdId: number;
  userId: number;
  workingHours: string;
  userProfileImg = '../../assets/images/company-img.png';
  coverImagePath = '../../assets/images/company-img.png';
  profileImagePath = '../../assets/images/company-img.png';
  defaultImagePath = '../../assets/images/company-img.png';
  jobApplicationDto = new JobApplicationDto();
  jobAdSearchRequest = new JobAdSearchDtoDto();
  userProfileResult = new UserProfileOutputDto();
  userExperiences: UserExperienceDto[];

  designation: any;
  companyOverview: CompanyOverviewDto;
  loadingCompanyOverview: boolean;
  politicsResult: any[];
  flexibilityResult: any[];
  financialCompensation: any[];
  employmentBenefits: any[];
  careerDevelopment: any[];
  workEnvironment: any[];
  jobFlexibility: any[];
  evpAverage: any;
  politicsFlexibilityView: any[] = [345, 300];
  politicscolorScheme = {
    domain: ['#ffa500', '#ffa500']
  };
  flexibilitycolorScheme = {
    domain: ['#005aff', '#ffa500']
  };

  flResult: any[];
  flView: any[] = [600, 250];
  // options
  gradient = true;
  showLegend = true;
  showLabels = true;
  isDoughnut = false;

  fLColorScheme = {
    domain: ['#ff0000', '#ffea00', '#00ff80', '#0080ff']
  };

  constructor(
    injector: Injector,
    private companyService: CompanyProxyService,
    private accountService: AccountServiceProxy,
    configuration: ConfigurationServiceProxy,
    private appConfigService: AppConfigService,
    private activatedRoute: ActivatedRoute,
    private jobsService: JobsProxyService,
    private seo: SeoService,
    private readonly jsonLdService: JsonLdService,
    private router: Router

  ) {
    super(injector);
    this.jobAdId = this.activatedRoute.snapshot.params.id;
    this.userProfileImg = accountService.userProfileImg ? accountService.userProfileImg : 'assets/images/user-img.png';
    this.apiBaseUrl = configuration.baseUrl;
    if (this.appSession.userId) {
      this.userId = this.appSession.userId;
      this.getUserProfile();
    }


  }

  ngOnInit(): void {

    this.getJobAdDetail();
   

  }

  getCompany(): void {

    this.companyService
      .getCompanyById(this.jobAd.company.id)
      .pipe(
        finalize(() => {

        })
      )
      .subscribe((result: TenantDto) => {
        if (result) {
          this.company = result;
          this.getCompanyOverview(result.registrationNumber);
          this.workingHours = result.companyTimings[0].startTime + ' '
            + result.companyTimings[0].startTimeMeridiem + ' - '
            + result.companyTimings[0].endTime + ' ' + result.companyTimings[0].endTimeMeridiem;
          this.setProfileImagePath();
          this.setCoverImagePath();
        } else {
          this.router.navigate(['/account/company-profile']);
          this.notify.error('Company not found. Please create one.');
        }
        return;
      });
  }

  setCoverImagePath(): void {
    if (this.company.companyImages) {
      const imageObj = this.company.companyImages.filter(s => s.imageType === 2)[0]; // 1: cover
      this.coverImagePath = imageObj && imageObj.url ? imageObj.url : this.defaultImagePath;
    } else {
      this.coverImagePath = this.defaultImagePath;
    }
  }

  setProfileImagePath(): void {
    if (this.company.companyImages) {
      const imageObj = this.company.companyImages.filter(s => s.imageType === 1)[0]; // 1: logo
      this.profileImagePath = imageObj && imageObj.url ? imageObj.url : this.defaultImagePath;
    } else {
      this.profileImagePath = this.defaultImagePath;
    }
  }

  getCompanyOverview(registrationNo: string): void {
    this.loadingCompanyOverview = true;

    this.accountService
      .getCompanyOverview(registrationNo)
      .pipe(
        finalize(() => {
          this.loadingCompanyOverview = false;

        })
      )
      .subscribe((result: CompanyOverviewDto) => {
        if (result) {
          this.companyOverview = result;
          if (result.total > 0) {
            this.flResult = [];
            this.flResult.push({
              name: 'Driver',
              value: result.d
            });
            this.flResult.push({
              name: 'Innovative',
              value: result.i
            });
            this.flResult.push({
              name: 'Society',
              value: result.s
            });
            this.flResult.push({
              name: 'Compliant',
              value: result.c
            });
            this.politicsResult = [];
            this.politicsResult.push({
              name: '',
              value: result.politicsLevel
            });
            this.politicsResult.push({
              name: 'totsl',
              value: 10
            });
            this.flexibilityResult = [];
            this.flexibilityResult.push({
              name: '',
              value: result.flexibilityLevel
            });
            this.flexibilityResult.push({
              name: 'Politics Level',
              value: 10
            });
          }
        }
        return;
      });
  }

  getUserProfile(): void {

    this.accountService
      .getUserProfile(this.userId)
      .subscribe((result: UserProfileOutputDto) => {
        if (result) {
          this.userProfileResult = result;
        } else {

          this.router.navigate(['']);
          this.notify.error('Something went wrong while processing your request.');
        }

        return;
      });
  }

  getUserExperience(): any {
    this.spinner.show();
    this.accountService
      .getUserExperiences(this.userId)
      .subscribe((result: ListResultDtoOfUserExperienceDto) => {
        this.userExperiences = result.items;
        this.designation = this.userExperiences.find(x => x.endDate == null);
        if (!this.designation) {
          this.designation = this.userExperiences[0];
        }
        this.spinner.hide();
        return;
      });
  }
  takeAssesment(): void {
    if (!this.userProfileResult.behaviourTestResult) {
      this.router.navigate(['/assessment/behaviour-instruction']);
    }
    else if (this.userProfileResult.behaviourTestResult && this.userExperiences) {
      this.router.navigate(['/assessment/fl-culture-assessment']);
    }

  }

  getJobAdDetail(): void {

    this.jobsService.getJobAdDetail(this.jobAdId)
      .pipe(
        finalize(() => {

        })
      )
      .subscribe((result: JobAdDto) => {
        if (result) {
          this.jobAd = result;

          this.languageSkills = result.jobAdSkills.filter(f => f.skillTypeId === 7 && f.skillCategoryId === 1);
          this.hardSkills = result.jobAdSkills.filter(f => f.skillTypeId !== 7 && f.skillCategoryId === 1);
          this.softSkills = result.jobAdSkills.filter(f => f.skillTypeId !== 7 && f.skillCategoryId === 2);
          this.getCompany();

          // set seo tags
          this.seo.generateTags({
            title: this.jobAd.jobTitle + '|' + this.jobAd.specialization?.name + this.jobAd.position?.name + this.company.name,
            description: this.pageDescription,
            image: this.coverImagePath,
            keywords: this.pageKeywords + ',' + this.jobAd.specialization?.name +
              ',' + this.jobAd.position?.name + ',' + this.company.name
          });
          const JobPostingObject = this.jsonLdService.getObject('JobPosting', {
            title: this.jobAd.jobTitle,
            description: this.pageDescription,
            datePosted: this.jobAd.creationTime,
            employmentType: this.jobAd.employmentType,
            applicantLocationRequirements: {
              '@type': 'Country',
              name: 'Malaysia'
            },
          });
          this.jsonLdService.setData(JobPostingObject);


        } else {

          this.router.navigate(['']);
          this.notify.error('Something went wrong while processing your request.');
        }
      });
  }

  apply(): void {
    if (this.userId) {
      this.jobApplicationDto.jobAdId = this.jobAdId;
      this.jobApplicationDto.userId = this.userId;
      this.jobApplicationDto.tenantId = this.jobAd.company.id;
      this.companyService
        .applyForJob(this.jobApplicationDto)
        .pipe(
          finalize(() => {
          })
        )
        .subscribe((result: JobApplicationDto) => {
          if (result) {
            this.jobAd.userAppliedStatus = true;
            this.jobApplicationDto = result;
            this.notify.success('Job Applied successfully.');
            this.router.navigate(['jobs/list/applied']);
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
  delete(entity: JobAdDto): void {
    this.swal.fire({
      title: 'Are you sure?',
      text: `Are you sure you want to withdraw the "${entity.jobTitle}" application?`,
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {
        this.spinner.show();
        this.accountService
          .delete(entity.id, '/api/services/app/JobApplication/Delete?')
          .pipe(
            finalize(() => {
              this.notify.success('Successfully deleted', 'Successfull');
              this.spinner.hide();
              this.getJobAdDetail();
            })
          )
          .subscribe(() => { });
      }
    }
    );
  }

  showLoginDialog(): void {


  }

  sochialShare(plateform): void {
    switch (plateform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${this.appConfigService.appBaseUrl + this.router.url}`, '_blank', 'toolbar=0, width=800, height=400');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${this.appConfigService.appBaseUrl + this.router.url}`, '_blank', 'toolbar=0, width=800, height=400');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${this.appConfigService.appBaseUrl + this.router.url}`, '_blank', 'toolbar=0, width=800, height=400');
        break;

    }

  }
}
