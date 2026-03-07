import React from 'react';
import { UnitSystem } from '../../types';
import { kgToLbs, lbsToKg } from '../../utils/conversion';
import { HybridInput } from '../HybridInput/HybridInput';
import { ImperialHeightInput } from '../ImperialHeightInput/ImperialHeightInput';
import styles from './InputSection.module.css';

interface InputSectionProps {
  weightKg: number;
  heightCm: number;
  unit: UnitSystem;
  onWeightChange: (kg: number) => void;
  onHeightChange: (cm: number) => void;
}

export function InputSection({ weightKg, heightCm, unit, onWeightChange, onHeightChange }: InputSectionProps) {
  if (unit === 'imperial') {
    const weightLbs = kgToLbs(weightKg);
    return (
      <div className={styles.container}>
        <HybridInput
          label="Weight"
          value={Math.round(weightLbs)}
          min={88}
          max={440}
          step={1}
          unit="lbs"
          onChange={(lbs) => onWeightChange(lbsToKg(lbs))}
        />
        <ImperialHeightInput heightCm={heightCm} onChange={onHeightChange} />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <HybridInput
        label="Weight"
        value={weightKg}
        min={40}
        max={200}
        step={1}
        unit="kg"
        onChange={onWeightChange}
      />
      <HybridInput
        label="Height"
        value={heightCm}
        min={100}
        max={250}
        step={1}
        unit="cm"
        onChange={onHeightChange}
      />
    </div>
  );
}
