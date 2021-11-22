import React from 'react';
import cn from 'classnames';
import styles from './GridRuler.module.scss';
import { Spacing } from '../grid/Grid';

interface IGridRulerProps {
  spacing?: Spacing;
}

const GridRuler = ({ spacing }: IGridRulerProps) => {
  const classNames = cn(styles.gridRuler, {
    [styles[`gridRuler_spacing_${spacing}`]]: spacing,
  });
  return (
    <div className={classNames}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num: number) => (
        <div className={styles.gridRuler_item} key={num} />
      ))}
    </div>
  );
};

export default GridRuler;
