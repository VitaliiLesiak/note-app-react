import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutNote from './components/about-note/about-note.components'
import Navigate from './components/navigate/navigate.component'
import Notes from './components/notes/notes.components'
import TodosApp from './components/todos-app/todos-app.component';
import NotFounded from './components/not-founded/not-founded.component'
import './App.css';





function App() {
  return (
    <div className="App">
      <Router>
        <Navigate />
        <div className='container'>
          <div className='pages'>
            <Routes>
              <Route exact path='/' element={<AboutNote />} />
              <Route path='/notes' element={<Notes />} />
              <Route path='/todo' element={<TodosApp />} />
              <Route path='*' element={<NotFounded />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
