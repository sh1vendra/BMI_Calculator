export type UnitSystem = 'metric' | 'imperial';

export type BMICategory = 'underweight' | 'normal' | 'overweight' | 'obese';

export interface HistoryEntry {
  id: string;
  bmi: number;
  category: BMICategory;
  weightKg: number;
  heightCm: number;
  date: string;
}

export interface FeetInches {
  feet: number;
  inches: number;
}

export interface WeightRange {
  min: number;
  max: number;
}
