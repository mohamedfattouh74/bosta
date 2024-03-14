import logo from './logo.svg';
import './App.css';
import Nav from './nav/nav'
import HeroSection from './hero-section/hero-section';
import { useTranslation } from 'react-i18next';

function App() {
  

  const [t,i18n]=useTranslation();
  return (
    <div className="App">
      <Nav />
      <HeroSection />
    </div>
  );
}

export default App;
