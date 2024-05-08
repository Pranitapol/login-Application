import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ToastService } from '../toast.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let toasterService: ToastService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ LoginComponent ],
      providers: [ToastService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    toasterService = TestBed.inject(ToastService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should cover toaster subject and subscription',()=>{
   toasterService.toasterMessage.next('success');
   toasterService.toasterMessage.subscribe((res:any)=>{
    
   })
   expect(component.successMessage).toEqual('success')
  })  

  it('should cover settimeout',()=>{

   spyOn(global,'setTimeout');
   expect(setTimeout).toHaveBeenCalledTimes(1)

  })
});
