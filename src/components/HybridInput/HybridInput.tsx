import React from 'react';
import styles from './HybridInput.module.css';

interface HybridInputProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange: (value: number) => void;
}

export function HybridInput({ label, value, min, max, step, unit, onChange }: HybridInputProps) {
  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val)) {
      onChange(Math.min(max, Math.max(min, val)));
    }
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(parseFloat(e.target.value));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <label className={styles.label}>{label}</label>
        <div className={styles.valueGroup}>
          <input
            type="number"
            className={styles.numberInput}
            value={value}
            min={min}
            max={max}
            step={step}
            onChange={handleNumberChange}
            aria-label={`${label} value`}
          />
          <span className={styles.unit}>{unit}</span>
        </div>
      </div>
      <input
        type="range"
        className={styles.slider}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleSliderChange}
        aria-label={`${label} slider`}
      />
    </div>
  );
}
