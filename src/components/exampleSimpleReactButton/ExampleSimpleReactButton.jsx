import * as React from 'react';
import styles from './styles.module.scss';

const ExampleSimpleReactButton = ({ children }) => {

  const handleClick = () => {
    console.log('CLICK! Handled by click handler in ExampleSimpleReactButton');
  }
  return (
    <div className={styles.wrapper}>
      <button type="button" onClick={handleClick}>
        {children}
      </button>
    </div>
  );
};

export default ExampleSimpleReactButton;