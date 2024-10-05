import './App.css'
import LandingPage from './LandingPage/LandingPage'

function App() {
  return (
    <div className='app-container'>
      <div className='header'>
        <div className='onyx-group'>
          OnyxAI LLC
        </div>
        <div className='button-group'>
          <button>Sign In</button>
          <button>Create an Account</button>
        </div>
      </div>
      <div className='content-container'>
        <div className='content-column'>
          <div className='content-title'>
            <span className='accent-text'>Data-Driven</span> Solutions
          </div>

          <div className='spacer'>
            
          </div>

          <div className='content-body'>
            SavvyCSV leverages the power of AI and web scraping to create the perfect CSV file for your needs.
          </div>
        </div>
        <div className='savvy-logo-column' style={{ background: '#0D0D0D' }}>
          <LandingPage />
          </div>
        
        <div className='logo-spacer'>
        </div>
      </div>
    </div>
  )
}

export default App
