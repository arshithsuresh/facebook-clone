import { Products } from './products';

describe('Products', () => {
  it('should create an instance', () => {
    expect(new Products(0,"test",123)).toBeTruthy();
  });
});
