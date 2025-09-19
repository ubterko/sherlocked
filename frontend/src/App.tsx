import { useState } from 'react';
import './App.css'
import RendererComponent from './components/RendererComponent'; 

function AppUI() {
  const [testStarted, setTestStarted] = useState(false);

  return (
    <div>
        <h1 className="bg-green-200 font-bold">
            SherlockED Exam System
        </h1>
        <div className='m-4 p-4 border border-[#ccc] rounded w-3/4 h-[600px] overflow-auto'>
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

      <div>
        <AppUI />
      </div>

  )
}

export default App
