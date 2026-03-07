import { BMICategory, WeightRange } from '../types';

export function calculateBMI(weightKg: number, heightCm: number): number {
  const heightM = heightCm / 100;
  return parseFloat((weightKg / (heightM * heightM)).toFixed(1));
}

export function getBMICategory(bmi: number): BMICategory {
  if (bmi < 18.5) return 'underweight';
  if (bmi < 25) return 'normal';
  if (bmi < 30) return 'overweight';
  return 'obese';
}

export function getCategoryColor(category: BMICategory): string {
  const colors: Record<BMICategory, string> = {
    underweight: '#3498db',
    normal: '#2ecc71',
    overweight: '#f39c12',
    obese: '#e74c3c',
  };
  return colors[category];
}

export function getHealthyWeightRange(heightCm: number): WeightRange {
  const heightM = heightCm / 100;
  const heightMSq = heightM * heightM;
  return {
    min: parseFloat((18.5 * heightMSq).toFixed(1)),
    max: parseFloat((24.9 * heightMSq).toFixed(1)),
  };
}
