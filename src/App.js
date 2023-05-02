import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import Home from './components/Home/Home';
import Contact from './components/Contact/contact';
import Profile from './components/Profile';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='Profile' element={<Profile />} />
          <Route path='Resume' element={<Resume />} />
          <Route path='Portfolio' element={<Portfolio />}>
            
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
