import 'jasmine-expect';
import mongoose from 'mongoose';
import Table from './model';

describe('Table', () => {
  it('is an instance of mongoose model', () => {
    expect(Table instanceof mongoose.model).toBe(true);
  });
});
