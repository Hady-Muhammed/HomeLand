import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Footer from "./components/Footer";
import Header from "./components/Header";
import PropertyDetails from './components/PropertyDetails';
import { Provider } from 'react-redux';
import { store } from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
  <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/HomeLand/' element={<App />}/>
          <Route path='/HomeLand/property/:id' element={<PropertyDetails/>}/>
        </Routes>
      <Footer/>
  </BrowserRouter>
</Provider>
);
