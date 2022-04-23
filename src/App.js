import './App.css';
import Connect from './components/Connect';
import Difference from './components/Difference';
import Hero from './components/Hero';
import ScrollArea from './components/ScrollArea';

function App() {
  return (
    <div>

    <a href='htts://hellow.com' className='text-red-500'>
      Hello world
    </a>

      <Hero />
      <ScrollArea />
      <Connect />
      <Difference />
    </div>
  );
}

export default App;
