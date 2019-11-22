import findEqualString from './index';

describe("findEqualString", () => {
  it("如果传入的不是字符串，则报错", () => {
    const a = 123;
    const b = 456;
    expect(findEqualString(a, b)).toBe('');
  });

  it("找出最长相同字符串单元", () => {
    const case1 = { a: 'asdasdasdaaaa', b: 'aaaa' };
    expect(findEqualString(case1.a, case1.b)).toBe('aaaa');

    const case2 = { a: '23123sdas31231azc', b: 'as' };
    expect(findEqualString(case2.a, case2.b)).toBe('as');

    const case3 = { a: 'tttzxxca123123adasd', b: '312' };
    expect(findEqualString(case3.a, case3.b)).toBe('312');
  });
});