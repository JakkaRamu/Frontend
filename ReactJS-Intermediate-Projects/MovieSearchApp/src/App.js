
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import SingleMovie from './components/SingleMovie';
import Error from './components/Error';
function App() {
  return <>
   
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="Movies/:id" element={<SingleMovie/>}/>
              <Route path='*' element={<Error />}></Route>
          </Routes>
      </BrowserRouter>
   
  </>
}

export default App;
