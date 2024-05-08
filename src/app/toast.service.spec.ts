import { TestBed } from '@angular/core/testing';

import { ToastService } from './toast.service';

describe('ToastService', () => {
  let service: ToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call showToaster',()=>{
    service.showToaster('hello');
    spyOn(service,'showToaster').and.callThrough()
  })

  it('should call dismissToast',()=>{
    service.dismissTOast();
    spyOn(service,'dismissTOast').and.callThrough()
  })
});
