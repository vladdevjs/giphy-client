import { useState, useEffect } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Main from './Main';
import Trending from './Trending';
import Random from './Random';
import Popup from './Popup';
import Favourites from './Favourites';
import Toggler from './Toggler';
import SettingsContext from '../contexts/SettingsContext';

function App() {
  const lightThemeInitial = localStorage.getItem('theme') ? localStorage.getItem('theme') === 'true' : false;

  const [cards, setCards] = useState([]);
  const [card, setCard] = useState(null);
  const [randomTrigger, setRandomTrigger] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [lightTheme, setLightTheme] = useState(lightThemeInitial);
  const navigate = useNavigate();

  useEffect(() => {
    setCards([]);
  }, [navigate]);

  const handleRandomRefresh = () => {
    setRandomTrigger((prev) => prev + 1);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setTimeout(() => {
      setCard(null);
    }, 500);
  };
  const openPopup = (card) => {
    setCard(card);
    setIsPopupOpen(true);
  };

  return (
    <div className={`page${lightTheme ? ' light-theme' : ''}`}>
      <Header lightTheme={lightTheme} />
      <Navbar onRandomClick={handleRandomRefresh} />
      <SettingsContext.Provider
        value={{
          lightTheme,
          setLightTheme,
        }}
      >
        <Toggler />
      </SettingsContext.Provider>

      <Popup isOpen={isPopupOpen} card={card} onClose={closePopup} setCard={setCard} />
      <Routes>
        <Route path='/' element={<Main setCards={setCards} cards={cards} openPopup={openPopup} />} />
        <Route path='/trending' element={<Trending setCards={setCards} cards={cards} openPopup={openPopup} />} />
        <Route path='/random' element={<Random trigger={randomTrigger} openPopup={openPopup} />} />
        <Route path='/favourites' element={<Favourites setCards={setCards} cards={cards} openPopup={openPopup} />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  );
}

export default App;
