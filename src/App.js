import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import Home from './components/Home/Home';
import Contact from './components/Contact/contact';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='Contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
