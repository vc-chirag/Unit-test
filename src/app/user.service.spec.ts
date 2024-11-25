import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return user list', () => {
    let users: any = [];
    service.getUserList().subscribe(data => {
      users = data;
    });
    const req = httpTestingController.expectOne('http://localhost:3004');
    req.flush([{ id: '1', name: 'foo' }]);
    expect(users).toEqual([{ id: '1', name: 'foo' }]);
  })
});
