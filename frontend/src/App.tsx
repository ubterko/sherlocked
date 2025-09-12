import { useState } from 'react';
import './App.css'
import RendererComponent from './components/RendererComponent';
import RadioWidget from './widgets/RadioWidget';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';

function AppUI() {
  const [testStarted, setTestStarted] = useState(false);

  return (
    <div className='bg-green-200 w-[100vw] h-[100vh] flex flex-col justify-start 
      items-center'>
      <h1 className="text-center text-4xl font-bold p-4 m-4">
        SherlockED Exam System
      </h1>
      <div className='m-8 p-4 border bg-white border-[#ccc] rounded w-3/4 h-[400px] 
        overflow-auto'>
        {
          testStarted ? (
            <div>
              <h1>This is a mock-test for simulating the SherlockED Exam system.</h1>
              <button 
                className='bg-blue-500 text-white px-4 py-2 rounded mt-4'
                onClick={() => setTestStarted(false)}>
                  Start Test
              </button>
            </div>
          ) : (
            <RendererComponent />
          )
        }
      </div>
    </div>
  ) 
};

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AppUI} />
        <Route path="/radio-widget" component={RadioWidget} />
      </Switch>
    </Router>
  )
}

export default App;
