import './App.css';
import Heading from './components/heading';
import HeartList from './components/heartList';

const messages = 'cool cud'


function App() {
  return (
    <>
      <Heading />
      <HeartList msg={messages} />
    </>
  );
}

export default App;
