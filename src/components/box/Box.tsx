import React from 'react';
import styles from './Box.module.scss';

interface IBoxProps {
  children: React.ReactNode;
}

const Box = ({ children }: IBoxProps) => {
  return <div className={styles.box}>{children}</div>;
};

export default Box;
