const { User, User2, user1, lesson, web, proxy, proxy1, proxy2, Validate } = require('../objTest');

describe('User Constructor', () => {
  test('should create a user with name and age', () => {
    const user = new User('Test', 25);
    expect(user.name).toBe('Test');
s    expect(user.age).toBe(25);
  });

  test('show method should log user details', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const user = new User('Test', 25);
    user.show();
    const consoleSpy = jest.spyOn(console, 'log');
    proxy.name;
    expect(consoleSpy).toHaveBeenCalledWith('name');
    consoleSpy.mockRestore();
  });

  test('proxy1 should log factorial execution time', () => {
    const consoleSpy = jest.spyOn(console, 'time');
    proxy1.apply({}, [3]);
    expect(consoleSpy).toHaveBeenCalledWith('time');
    consoleSpy.mockRestore();
  });

  test('proxy2 should truncate long titles', () => {
    expect(proxy2[0].title).toMatch(/...$/);
  });
});

describe('Validate Class', () => {
  const validate = new Validate();
  test('max should validate length', () => {
    expect(validate.max('123', 3)).toBe(true);
    expect(validate.max('1234', 3)).toBe(false);
  });

  test('min should validate length', () => {
    expect(validate.min('123', 2)).toBe(true);
    expect(validate.min('1', 2)).toBe(false);
  });

  test('isNumber should validate numeric input', () => {
    expect(validate.isNumber('123')).toBe(true);
    expect(validate.isNumber('abc')).toBe(false);
  });
});
