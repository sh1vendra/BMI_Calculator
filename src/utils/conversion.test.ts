import { kgToLbs, lbsToKg, cmToFtIn, ftInToCm, formatWeight, formatHeight } from './conversion';

describe('kgToLbs', () => {
  it('converts kg to lbs', () => {
    expect(kgToLbs(70)).toBe(154.3);
  });

  it('converts 100kg', () => {
    expect(kgToLbs(100)).toBe(220.5);
  });
});

describe('lbsToKg', () => {
  it('converts lbs to kg', () => {
    expect(lbsToKg(154.3)).toBe(70);
  });
});

describe('cmToFtIn', () => {
  it('converts 170cm', () => {
    const result = cmToFtIn(170);
    expect(result.feet).toBe(5);
    expect(result.inches).toBe(7);
  });

  it('converts 183cm', () => {
    const result = cmToFtIn(183);
    expect(result.feet).toBe(6);
    expect(result.inches).toBe(0);
  });
});

describe('ftInToCm', () => {
  it('converts 5ft 7in to cm', () => {
    expect(ftInToCm(5, 7)).toBe(170.2);
  });

  it('converts 6ft 0in to cm', () => {
    expect(ftInToCm(6, 0)).toBe(182.9);
  });
});

describe('formatWeight', () => {
  it('formats metric weight', () => {
    expect(formatWeight(70, 'metric')).toBe('70 kg');
  });

  it('formats imperial weight', () => {
    expect(formatWeight(70, 'imperial')).toBe('154.3 lbs');
  });
});

describe('formatHeight', () => {
  it('formats metric height', () => {
    expect(formatHeight(170, 'metric')).toBe('170 cm');
  });

  it('formats imperial height', () => {
    expect(formatHeight(170, 'imperial')).toBe("5'7\"");
  });
});
