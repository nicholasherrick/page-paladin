import './App.css';
import { useEffect } from 'react';
import { themeChange } from 'theme-change';
import Navbar from './components/ThemeController';

function App() {
  useEffect(() => {
    themeChange(false)
     // 👆 false parameter is required for react project
  }, [])

  return (
    <div className='App'>
      <Navbar />
      <h1>Welcome to Page Paladin!</h1>
    </div>
  );
}

export default App;
