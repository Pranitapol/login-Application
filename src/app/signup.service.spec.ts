import { TestBed } from '@angular/core/testing';

import { SignupService } from './signup.service';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import {HttpClientTestingModule} from '@angular/common/http/testing'

describe('SignupService', () => {
  let service: SignupService;
  let httpClient: HttpClient;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule, HttpClientTestingModule]
    });
   // httpClient=TestBed.get(HttpClient)
    service = TestBed.inject(SignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call PostData function',()=>{
    let mockrs={
      confirmPassword: "Abc@3000",
      email: "jqij@kfj.djewl",
      password: "Abc@3000",
      username: "fbewfk"
    }
    service.postData(mockrs)
  })

  it('should call postLoginData function',()=>{
    let mockrs={email: 'abc1@gmail.com', password: 'Kolhapur@1'}
    service.postLoginData(mockrs)
  })

});
