import React from 'react';
import styles from './BMIGauge.module.css';

interface BMIGaugeProps {
  bmi: number;
}

export function BMIGauge({ bmi }: BMIGaugeProps) {
  const minBMI = 10;
  const maxBMI = 40;
  const clampedBMI = Math.min(maxBMI, Math.max(minBMI, bmi));
  const percentage = ((clampedBMI - minBMI) / (maxBMI - minBMI)) * 100;

  return (
    <div className={styles.container} aria-hidden="true">
      <div className={styles.bar}>
        <div
          className={styles.marker}
          style={{ left: `${percentage}%` }}
        />
      </div>
      <div className={styles.labels}>
        <span>10</span>
        <span>18.5</span>
        <span>25</span>
        <span>30</span>
        <span>40</span>
      </div>
    </div>
  );
}
