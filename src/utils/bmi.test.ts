import { calculateBMI, getBMICategory, getCategoryColor, getHealthyWeightRange } from './bmi';

describe('calculateBMI', () => {
  it('calculates BMI correctly for normal weight', () => {
    expect(calculateBMI(70, 170)).toBe(24.2);
  });

  it('calculates BMI correctly for overweight', () => {
    expect(calculateBMI(90, 175)).toBe(29.4);
  });

  it('calculates BMI correctly for underweight', () => {
    expect(calculateBMI(45, 170)).toBe(15.6);
  });
});

describe('getBMICategory', () => {
  it('returns underweight for BMI < 18.5', () => {
    expect(getBMICategory(17)).toBe('underweight');
  });

  it('returns normal for BMI 18.5-24.9', () => {
    expect(getBMICategory(22)).toBe('normal');
  });

  it('returns overweight for BMI 25-29.9', () => {
    expect(getBMICategory(27)).toBe('overweight');
  });

  it('returns obese for BMI >= 30', () => {
    expect(getBMICategory(35)).toBe('obese');
  });

  it('returns normal at boundary 18.5', () => {
    expect(getBMICategory(18.5)).toBe('normal');
  });

  it('returns overweight at boundary 25', () => {
    expect(getBMICategory(25)).toBe('overweight');
  });
});

describe('getCategoryColor', () => {
  it('returns blue for underweight', () => {
    expect(getCategoryColor('underweight')).toBe('#3498db');
  });

  it('returns green for normal', () => {
    expect(getCategoryColor('normal')).toBe('#2ecc71');
  });

  it('returns orange for overweight', () => {
    expect(getCategoryColor('overweight')).toBe('#f39c12');
  });

  it('returns red for obese', () => {
    expect(getCategoryColor('obese')).toBe('#e74c3c');
  });
});

describe('getHealthyWeightRange', () => {
  it('calculates healthy range for 170cm', () => {
    const range = getHealthyWeightRange(170);
    expect(range.min).toBe(53.5);
    expect(range.max).toBe(72);
  });

  it('calculates healthy range for 180cm', () => {
    const range = getHealthyWeightRange(180);
    expect(range.min).toBe(59.9);
    expect(range.max).toBe(80.7);
  });
});
