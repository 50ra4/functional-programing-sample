import { prop } from '.';

const TEST_DATA = {
  string: 'string',
  number: 1000,
  boolean: true,
  object: {
    string: 'string',
    number: 1000,
    boolean: true,
  },
  arrayString: ['string1', 'string2', 'string3'],
};

describe('prop', () => {
  it('Returns the value of the specified key', () => {
    expect(prop('string', TEST_DATA)).toEqual('string');
    expect(prop('number', TEST_DATA)).toEqual(1000);
    expect(prop('object', TEST_DATA)).toEqual({
      string: 'string',
      number: 1000,
      boolean: true,
    });
    expect(prop('arrayString', TEST_DATA)).toEqual(['string1', 'string2', 'string3']);
  });
});
