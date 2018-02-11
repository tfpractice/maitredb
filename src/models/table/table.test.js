import mongoose from 'mongoose';

import Table from './model';
import 'jasmine-expect';

console.log('Table.constructor', Table.constructor);
describe('Table', () => {
  it('has a name', () =>
    Table.create({ name: 'myName' }).then(tb =>
      expect(tb.name).toEqual('myName')
    ));
});
