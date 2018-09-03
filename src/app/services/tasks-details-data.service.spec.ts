import { TestBed, inject } from '@angular/core/testing';

import { TasksDetailsDataService } from './tasks-details-data.service';

describe('TasksDetailsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TasksDetailsDataService]
    });
  });

  it('should be created', inject([TasksDetailsDataService], (service: TasksDetailsDataService) => {
    expect(service).toBeTruthy();
  }));
});
