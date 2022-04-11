const anyString = '1';

describe('Nothing to look at here', () => {
  it('should make ESLint warn us about the expression', () => {
    expect(anyString.length).toBe(1);
  });
});
