import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import './App.css';

function App() {
  return (
    <>
      <Navbar title='Encoder' aboutName="About Us" />
      <TextForm disc="Enter Text Here" />
    </>
  );
}

export default App;
