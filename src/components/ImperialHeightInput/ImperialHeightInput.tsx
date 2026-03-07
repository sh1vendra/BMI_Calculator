import React from 'react';
import { cmToFtIn, ftInToCm } from '../../utils/conversion';
import styles from './ImperialHeightInput.module.css';

interface ImperialHeightInputProps {
  heightCm: number;
  onChange: (cm: number) => void;
}

export function ImperialHeightInput({ heightCm, onChange }: ImperialHeightInputProps) {
  const { feet, inches } = cmToFtIn(heightCm);

  const handleFeetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val)) {
      onChange(ftInToCm(Math.min(8, Math.max(3, val)), inches));
    }
  };

  const handleInchesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val)) {
      onChange(ftInToCm(feet, Math.min(11, Math.max(0, val))));
    }
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(parseFloat(e.target.value));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <label className={styles.label}>Height</label>
        <div className={styles.valueGroup}>
          <input
            type="number"
            className={styles.numberInput}
            value={feet}
            min={3}
            max={8}
            onChange={handleFeetChange}
            aria-label="Height feet"
          />
          <span className={styles.unit}>ft</span>
          <input
            type="number"
            className={styles.numberInput}
            value={inches}
            min={0}
            max={11}
            onChange={handleInchesChange}
            aria-label="Height inches"
          />
          <span className={styles.unit}>in</span>
        </div>
      </div>
      <input
        type="range"
        className={styles.slider}
        min={100}
        max={250}
        step={1}
        value={heightCm}
        onChange={handleSliderChange}
        aria-label="Height slider"
      />
    </div>
  );
}
