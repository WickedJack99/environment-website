import './App.css'
import MainNavbar from '../src/components/navbar/MainNavbar';
import RainbowHeader from './components/common/RainbowHeader';

function App() {
  const navbarElements = [
    { href: '/', text: 'Home' },
    { href: '/about', text: 'About' },
    { href: '/services', text: 'Services' },
    { href: '/contact', text: 'Contact' }
  ];

  return (
    <>
      <MainNavbar elements={navbarElements} />
      <header className="App-header">
        <RainbowHeader text="Mitwelt Deutschland"></RainbowHeader>
      </header>
      <div>Willkommen auf der Seite von Mitwelt Deutschland.</div>
    </>
  )
}

export default App
