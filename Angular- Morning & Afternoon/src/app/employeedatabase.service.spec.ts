import { TestBed } from '@angular/core/testing';

import { EmployeeDBService } from './employeedatabase.service';

describe('EmployeeDBService', () => {
  let service: EmployeeDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
