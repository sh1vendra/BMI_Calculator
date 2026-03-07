import React from 'react';
import { HistoryEntry } from '../../types';
import { getCategoryColor, getBMICategory } from '../../utils/bmi';
import styles from './HistoryChart.module.css';

interface HistoryChartProps {
  history: HistoryEntry[];
  onClear: () => void;
}

export function HistoryChart({ history, onClear }: HistoryChartProps) {
  if (history.length === 0) return null;

  const last10 = history.slice(-10);
  const width = 300;
  const height = 120;
  const padding = { top: 20, right: 20, bottom: 30, left: 35 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  const bmis = last10.map((e) => e.bmi);
  const minBMI = Math.floor(Math.min(...bmis) - 1);
  const maxBMI = Math.ceil(Math.max(...bmis) + 1);
  const range = maxBMI - minBMI || 1;

  const points = last10.map((entry, i) => {
    const x = padding.left + (last10.length === 1 ? chartW / 2 : (i / (last10.length - 1)) * chartW);
    const y = padding.top + chartH - ((entry.bmi - minBMI) / range) * chartH;
    return { x, y, entry };
  });

  const polyline = points.map((p) => `${p.x},${p.y}`).join(' ');

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>History</h3>
        <button className={styles.clearBtn} onClick={onClear} aria-label="Clear history">
          Clear
        </button>
      </div>
      <svg viewBox={`0 0 ${width} ${height}`} className={styles.chart}>
        {[minBMI, Math.round((minBMI + maxBMI) / 2), maxBMI].map((val) => {
          const y = padding.top + chartH - ((val - minBMI) / range) * chartH;
          return (
            <g key={val}>
              <line x1={padding.left} y1={y} x2={width - padding.right} y2={y} className={styles.gridLine} />
              <text x={padding.left - 6} y={y + 3} className={styles.axisLabel} textAnchor="end">
                {val}
              </text>
            </g>
          );
        })}
        <polyline points={polyline} className={styles.line} fill="none" />
        {points.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={4}
            fill={getCategoryColor(getBMICategory(p.entry.bmi))}
            className={styles.dot}
          />
        ))}
      </svg>
    </div>
  );
}
