import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppService, User } from './app.service';
import { UserService } from './user.service';

describe('AppService', () => {
  let service: AppService;
  let userService: UserService;
  const userServiceMock = {
    getUserName: jest.fn()
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AppService,
        UserService,
        // { provide: UserService, useValue: userServiceMock }
      ]
    });
    service = TestBed.inject(AppService);
    userService = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add user', () => {
    const user: User = {
      name: 'test',
      id: '1'
    };
    service.addUser(user);
    expect(service.userList).toEqual([user]);
  });

  it('should remove user', () => {
    service.userList = [{
      name: 'test',
      id: '1'
    }];
    service.removeUser('1');
    expect(service.userList).toEqual([]);
  })

  it('should filter user', () => {
    //using mock
    const user: User = {
      name: 'test',
      id: '1'
    };
    service.userList = [user];
    userServiceMock.getUserName.mockReturnValue(['test']);
    expect(service.getUserName('1')).toEqual(['test']);

    //using spy method
    jest.spyOn(userService, 'getUserName');
    service.userList = [{ name: 'user', id: '1' }];
    service.getUserName('1');
    expect(userService.getUserName).toHaveBeenCalledWith(service.userList);
  })

});
