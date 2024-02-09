import preassureLevel from './preassureLevel';

describe('preassureLevel', () => {
  it('should return "critical" for high systolic and dystolic values', () => {
    const result = preassureLevel(20, 12);
    expect(result).toBe('critical');
  });

  it('should return "high" for moderately high systolic and dystolic values', () => {
    const result = preassureLevel(15, 10);
    expect(result).toBe('high');
  });

  it('should return "low" for low systolic and dystolic values', () => {
    const result = preassureLevel(10, 7);
    expect(result).toBe('low');
  });

  it('should return "normal" for values that do not meet the other conditions', () => {
    const result = preassureLevel(12, 8);
    expect(result).toBe('normal');
  });
});
