import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import './App.css';
import About from './Pages/About';
import NotFound from './Pages/Notfound';
import Article from './Pages/Article';
import ArticlesList from './Pages/ArticlesList';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='max-w-screen-md mx-auto pt-20'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />          
          <Route path='/articles-list' element={<ArticlesList />} /> 
          <Route path='/article/:name' element={<Article />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;