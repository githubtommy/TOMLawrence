import * as React from 'react';
import './kdsButton.scss'

const KdsButton = ({children}) => {
  const handleClick = () => {
    console.log('TOMTOM: You clicked the React Button, dude');
  };

  return (
      <>
        <div>
          <button type="button" className={`kds-button kds-button-text`} onClick={handleClick}>
            {children}
          </button>
        </div>
      </>
  );
};

export default KdsButton;