import React from 'react';
import LeftMain from './LeftMain';
import MiddleMain from './MiddleMain';
import RightMain from './RightMain';

// Main Component
const Main = () => {
  return (
    <main className="main">
      <LeftMain />
      <MiddleMain />
      <RightMain />
    </main>
  );
};

export default Main;