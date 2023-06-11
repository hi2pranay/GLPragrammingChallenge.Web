import { TestBed } from '@angular/core/testing';

import { SimpleCalculatorService } from './simple-calculator.service';

describe('SimpleCalculatorService', () => {
  let service: SimpleCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
