import React from 'react';
import styles from './ProgressBar.module.scss';
import { createBarLine } from './utils';

export type ProgressItem = {
  name: string;
  color: string;
  value: number;
};

interface ProgressBarProps {
  data: ProgressItem[];
  height?: number;
  width?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  data,
  height = 24,
  width = 800,
}) => {
  const sum = data.reduce((acc, curr) => {
    return acc + curr.value;
  }, 0);

  const barLine = createBarLine(data, width, sum);

  return (
    <div className={styles.bar} style={{ width }}>
      <section className={styles.barLine}>
        {barLine.map((item, index) => (
          <div key={index} style={{ backgroundColor: item.color, height }} />
        ))}
      </section>

      <section className={styles.description}>
        {data.map((item) =>
          item.value > 0 ? (
            <div key={item.name} className={styles.descriptionItem}>
              <div style={{ backgroundColor: item.color }} />
              <p>
                {item.name}: {item.value} (
                {Math.round((item.value / sum) * 1000) / 10} %)
              </p>
            </div>
          ) : null
        )}
      </section>
    </div>
  );
};

export default ProgressBar;
