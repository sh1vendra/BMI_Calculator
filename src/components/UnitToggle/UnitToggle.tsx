import React from 'react';
import { UnitSystem } from '../../types';
import styles from './UnitToggle.module.css';

interface UnitToggleProps {
  unit: UnitSystem;
  onChange: (unit: UnitSystem) => void;
}

export function UnitToggle({ unit, onChange }: UnitToggleProps) {
  return (
    <div className={styles.container} role="radiogroup" aria-label="Unit system">
      <button
        className={`${styles.option} ${unit === 'metric' ? styles.active : ''}`}
        role="radio"
        aria-checked={unit === 'metric'}
        onClick={() => onChange('metric')}
      >
        Metric
      </button>
      <button
        className={`${styles.option} ${unit === 'imperial' ? styles.active : ''}`}
        role="radio"
        aria-checked={unit === 'imperial'}
        onClick={() => onChange('imperial')}
      >
        Imperial
      </button>
    </div>
  );
}
