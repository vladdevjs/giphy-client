import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Main from './Main';
import Trending from './Trending';
import Random from './Random';

function App() {
  const [randomTrigger, setRandomTrigger] = useState(0);

  const handleRandomRefresh = () => {
    setRandomTrigger((prev) => prev + 1);
  };

  return (
    <div className='page'>
      <Header />
      <Navbar onRandomClick={handleRandomRefresh} />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/random' element={<Random trigger={randomTrigger} />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  );
}

export default App;
