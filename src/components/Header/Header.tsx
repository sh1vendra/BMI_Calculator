import React from 'react';
import { UnitSystem } from '../../types';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { UnitToggle } from '../UnitToggle/UnitToggle';
import styles from './Header.module.css';

interface HeaderProps {
  unit: UnitSystem;
  onUnitChange: (unit: UnitSystem) => void;
}

export function Header({ unit, onUnitChange }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>BMI Calculator</h1>
      <div className={styles.controls}>
        <UnitToggle unit={unit} onChange={onUnitChange} />
        <ThemeToggle />
      </div>
    </header>
  );
}
