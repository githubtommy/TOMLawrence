import * as React from 'react';

const ExampleReactButton = () => {

  const handleClick = () => {
    console.log('TOMTOM: You clicked the React Button, dude');
  };

  return (
      <>
        <div>
          <button type="button" onClick={handleClick}>
            I am a react button
          </button>
        </div>
      </>
  );
};

export default ExampleReactButton;