import './App.css'
import LandingPage from './LandingPage/LandingPage'

const App = () => {
  return (
    <div className='main-container'>
      <div className='main-wrapper'>
        <div className='header'>
          <div className='onyx-group'>
            OnyxAI LLC
          </div>
          <div className='button-group'>
            <button>Sign up</button>
          </div>
        </div>
        <div className='content-container'>
          <div className='content-column'>
            <div className='content-title'>
              <span className='accent-text'>Data-Driven</span> Solutions
            </div>
            <div className='content-body'>
              SavvyCSV leverages the power of AI and web scraping to create the perfect CSV file for your needs.
            </div>
            <div className='start-button-container'>
              <button>
                Start now
              </button>
            </div>
          </div>
          <div className='savvy-logo-column' style={{ background: '#0D0D0D', color: 'white' }}>
            <div className='savvy-logo'>
              <LandingPage />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
