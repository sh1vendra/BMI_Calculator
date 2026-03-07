import React from 'react';
import { UnitSystem } from '../../types';
import { getHealthyWeightRange } from '../../utils/bmi';
import { formatWeight } from '../../utils/conversion';
import styles from './HealthyRange.module.css';

interface HealthyRangeProps {
  heightCm: number;
  unit: UnitSystem;
}

export function HealthyRange({ heightCm, unit }: HealthyRangeProps) {
  const range = getHealthyWeightRange(heightCm);

  return (
    <p className={styles.text}>
      Healthy weight: {formatWeight(range.min, unit)} - {formatWeight(range.max, unit)}
    </p>
  );
}
