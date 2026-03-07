import React from 'react';
import { UnitSystem, BMICategory } from '../../types';
import { getCategoryColor } from '../../utils/bmi';
import { BMIGauge } from '../BMIGauge/BMIGauge';
import { HealthyRange } from '../HealthyRange/HealthyRange';
import { ShareButton } from '../ShareButton/ShareButton';
import styles from './ResultCard.module.css';

interface ResultCardProps {
  bmi: number;
  category: BMICategory;
  heightCm: number;
  unit: UnitSystem;
}

const categoryLabels: Record<BMICategory, string> = {
  underweight: 'Underweight',
  normal: 'Normal',
  overweight: 'Overweight',
  obese: 'Obese',
};

export function ResultCard({ bmi, category, heightCm, unit }: ResultCardProps) {
  const color = getCategoryColor(category);
  const shareText = `My BMI is ${bmi} (${categoryLabels[category]})`;

  return (
    <div className={styles.card} aria-live="polite">
      <div className={styles.bmiValue} style={{ color }}>
        {bmi}
      </div>
      <div className={styles.category} style={{ color }}>
        {categoryLabels[category]}
      </div>
      <BMIGauge bmi={bmi} />
      <HealthyRange heightCm={heightCm} unit={unit} />
      <div className={styles.actions}>
        <ShareButton text={shareText} />
      </div>
    </div>
  );
}
