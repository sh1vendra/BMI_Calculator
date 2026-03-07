import React, { useMemo, useState } from 'react';
import { UnitSystem, HistoryEntry } from '../../types';
import { calculateBMI, getBMICategory } from '../../utils/bmi';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Header } from '../Header/Header';
import { InputSection } from '../InputSection/InputSection';
import { ResultCard } from '../ResultCard/ResultCard';
import { HistoryChart } from '../HistoryChart/HistoryChart';
import styles from './App.module.css';

function App() {
  const [weightKg, setWeightKg] = useState(70);
  const [heightCm, setHeightCm] = useState(170);
  const [unit, setUnit] = useLocalStorage<UnitSystem>('bmi-unit', 'metric');
  const [history, setHistory] = useLocalStorage<HistoryEntry[]>('bmi-history', []);

  const bmi = useMemo(() => calculateBMI(weightKg, heightCm), [weightKg, heightCm]);
  const category = useMemo(() => getBMICategory(bmi), [bmi]);

  const handleSave = () => {
    const entry: HistoryEntry = {
      id: Date.now().toString(),
      bmi,
      category,
      weightKg,
      heightCm,
      date: new Date().toLocaleDateString(),
    };
    setHistory((prev) => [...prev.slice(-9), entry]);
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  return (
    <main className={styles.app}>
      <Header unit={unit} onUnitChange={setUnit} />
      <InputSection
        weightKg={weightKg}
        heightCm={heightCm}
        unit={unit}
        onWeightChange={setWeightKg}
        onHeightChange={setHeightCm}
      />
      <ResultCard bmi={bmi} category={category} heightCm={heightCm} unit={unit} />
      <button className={styles.saveBtn} onClick={handleSave}>
        Save to History
      </button>
      <HistoryChart history={history} onClear={handleClearHistory} />
    </main>
  );
}

export default App;
