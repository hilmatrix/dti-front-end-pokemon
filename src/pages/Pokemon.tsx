import React from 'react';
import CardSingle from "./CardSingle";
import Header from "./Header";

const Index: React.FC = () => {
  return (
    <>
        <Header></Header>
        <main className='pt-[100px]'>
          <CardSingle></CardSingle>
          <CardSingle></CardSingle>
          <CardSingle></CardSingle>
          <CardSingle></CardSingle>
        </main>
        
    </>
  );
}

export default Index;
