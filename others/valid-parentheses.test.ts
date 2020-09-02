import isValid from './valid-parentheses';
/*
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

describe(isValid, () => {
  it('rejects any input length 1', () => {
    expect(isValid('(')).toBeFalse();
    expect(isValid('[')).toBeFalse();
    expect(isValid('{')).toBeFalse();
  });

  it('accepts simple pairs', () => {
    expect(isValid('()')).toBeTrue();
    expect(isValid('[]')).toBeTrue();
    expect(isValid('{}')).toBeTrue();
  });

  it('accepts nested parens', () => {
    expect(isValid('{[()]}')).toBeTrue();
    expect(isValid('({[]})')).toBeTrue();
    expect(isValid('[({})]')).toBeTrue();
  });

  it('rejects dangling parens', () => {
    expect(isValid('([')).toBeFalse();
    expect(isValid('}(')).toBeFalse();
    expect(isValid('[}')).toBeFalse();
  });

  it('accepts large inputs', () => {
    let s = '';
    for (let i = 0; i < 10 ** 2; i++) {
      s += '(';
    }
    for (let j = 0; j < 10 ** 2; j++) {
      s += ')';
    }
    expect(isValid(s)).toBeTrue();
  });
});
