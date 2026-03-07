import { FeetInches, UnitSystem } from '../types';

const LBS_PER_KG = 2.20462;
const CM_PER_INCH = 2.54;

export function kgToLbs(kg: number): number {
  return parseFloat((kg * LBS_PER_KG).toFixed(1));
}

export function lbsToKg(lbs: number): number {
  return parseFloat((lbs / LBS_PER_KG).toFixed(1));
}

export function cmToFtIn(cm: number): FeetInches {
  const totalInches = cm / CM_PER_INCH;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);
  return { feet, inches: inches === 12 ? 0 : inches };
}

export function ftInToCm(feet: number, inches: number): number {
  return parseFloat(((feet * 12 + inches) * CM_PER_INCH).toFixed(1));
}

export function formatWeight(kg: number, unit: UnitSystem): string {
  if (unit === 'imperial') {
    return `${kgToLbs(kg)} lbs`;
  }
  return `${kg} kg`;
}

export function formatHeight(cm: number, unit: UnitSystem): string {
  if (unit === 'imperial') {
    const { feet, inches } = cmToFtIn(cm);
    return `${feet}'${inches}"`;
  }
  return `${cm} cm`;
}
