import './App.css';
import Connect from './components/Connect';
import Difference from './components/Difference';
import Hero from './components/Hero';
import ScrollArea from './components/ScrollArea';
import Images from './components/Images';

function App() {
  return (
    <div>
      <Hero />
      <Images />
      <ScrollArea />
      <Connect />
      <Difference />
    </div>
  );
}

export default App;
