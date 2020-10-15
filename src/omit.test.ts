import { omit } from '.';

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

describe('omit', () => {
  it('Returns an object other than the specified key', () => {
    expect(omit(['string'], TEST_DATA)).toEqual({
      number: 1000,
      boolean: true,
      object: {
        string: 'string',
        number: 1000,
        boolean: true,
      },
      arrayString: ['string1', 'string2', 'string3'],
    });
    expect(omit(['string', 'object'], TEST_DATA)).toEqual({
      number: 1000,
      boolean: true,
      arrayString: ['string1', 'string2', 'string3'],
    });
  });
});
