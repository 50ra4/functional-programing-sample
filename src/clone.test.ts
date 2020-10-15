import { clone } from '.';
import { clone as ramdaClone } from 'ramda';

const TEST_DATA = {
  string: 'string',
  number: 1000,
  boolean: true,
  object: {
    string: 'string',
    number: 1000,
    boolean: true,
    object: {
      string: 'string',
      number: 1000,
      boolean: true,
    },
  },
  arrayString: ['string1', 'string2', 'string3'],
  arrayNumber: [1000, 2000, 3000],
  arrayObject: [
    { string: 'string', number: 1000, boolean: true },
    { string: 'string', number: 1000, boolean: true },
    { string: 'string', number: 1000, boolean: true },
  ],
};
const getTestObject = () => ramdaClone(TEST_DATA);

describe('clone', () => {
  it('object reference breaks', () => {
    const data = getTestObject();
    const expected = clone(data);
    expect(TEST_DATA).toEqual(expected);
    data.number = 2000;
    expect(data).not.toEqual(expected);
  });
});
