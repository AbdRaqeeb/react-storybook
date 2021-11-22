import React, { CSSProperties } from 'react';
import cn from 'classnames';
import styles from './Grid.module.scss';

type Column = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type Spacing = 'sm' | 'md' | 'lg';
type JustifyContent = 'flex-start' | 'flex-end' | 'space-between' | 'center' | 'space-around';
type AlignItems = 'flex-start' | 'flex-end' | 'center';

export interface IGridProps {
  children?: React.ReactNode;
  container?: boolean;
  item?: boolean;
  xs?: Column;
  sm?: Column;
  md?: Column;
  lg?: Column;
  spacing?: Spacing;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  style?: CSSProperties;
}

const Grid = ({
  children,
  container,
  item,
  xs,
  lg,
  sm,
  md,
  spacing,
  justifyContent,
  alignItems,
  style,
}: IGridProps) => {
  const classNames = cn({
    [styles.grid_container]: container,
    [styles.grid_item]: item,
    [styles[`grid_xs_${xs}`]]: xs,
    [styles[`grid_sm_${sm}`]]: sm,
    [styles[`grid_md_${md}`]]: md,
    [styles[`grid_lg_${lg}`]]: lg,
    [styles[`grid_spacing_${spacing}`]]: spacing,
    [styles[`grid_justifyContent_${justifyContent}`]]: justifyContent,
    [styles[`grid_alignItems_${alignItems}`]]: alignItems,
  });
  return <div className={classNames} style={style}>{children}</div>;
};

export default Grid;
