import React from 'react';
import { Header } from './components/Header';
import './App.css';
import { FreeChampionList } from './components/FreeChampionList';
import { NewFreeChampionList } from './components/NewFreeChampionList';

function App() {
  return (
    <>
      <Header />
      <FreeChampionList />
      <NewFreeChampionList />
    </>
  );
}

export default App;
