import { EnhancedDatePipe } from './enhanced-date.pipe';

describe('EnhancedDatePipe', () => {
  it('create an instance', () => {
    const pipe = new EnhancedDatePipe();
    expect(pipe).toBeTruthy();
  });
});
