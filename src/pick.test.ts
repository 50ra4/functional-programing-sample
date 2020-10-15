import { pick } from '.';

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

describe('pick', () => {
  it('Returns the object with the specified key', () => {
    expect(pick(['string'], TEST_DATA)).toEqual({
      string: 'string',
    });
    expect(pick(['string', 'object'], TEST_DATA)).toEqual({
      string: 'string',
      object: {
        string: 'string',
        number: 1000,
        boolean: true,
      },
    });
  });
});
