import './App.css';
import { Modal } from './components/modal/modal';
import { useState } from 'react';

function App() {

  const [show, setModalState] = useState(false);

  function handleOpen() {
      
      setModalState(true);
  }

  function handleClose() {
    setModalState(false);
  }

  return (
    <div className="App">
      <button type="button" onClick={() => handleOpen()}>Open Modal</button>
      <Modal show={show} handleClose={handleClose}>
        <p>hey p</p>
        <p>hey p</p>
        <p>hey p</p>
        <p>hey p</p>
        <p>hey p</p>
        <p>hey p</p>
        <p>hey p</p>
        <p>hey p</p>
        <p>hey p</p>
        <p>hey p</p>
      </Modal>
    </div>
  );
}

export default App;
