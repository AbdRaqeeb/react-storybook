import React from 'react';

interface IProps {
  children: React.ReactNode;
}

const AppDecorator = ({ children }: IProps) => {
  return (
    <div className='App' style={{ position: 'relative' }}>
      {children}
    </div>
  );
};

export default AppDecorator;