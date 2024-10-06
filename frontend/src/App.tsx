import './App.css'
import Reveal from './LandingPage/components/Reveal'
import ProgressBar from './LandingPage/components/ProgressBar/ProgressBar';
import LandingPage from './LandingPage/LandingPage'
import tutorialVideo from './assets/savvybot-tutorial.mp4';
import TeamCard from './LandingPage/components/TeamCard/TeamCard';
import lennoxProfileImg from './assets/lennoxProfileImg.jpeg'
import jonahProfileImg from './assets/jonahProfileImg.jpeg'
import williamProfileImg from './assets/williamProfileImg.jpeg'
import davidProfileImg from './assets/davidProfileImg.jpeg'

const App = () => {
  
  return (
    <div className='main-container'>
      <div className='main-wrapper'>
        <header className='sticky-header'>
          <div className='onyx-group'>
            OnyxAI LLC
          </div>
          <div className='button-group'>
            <button>Sign up</button>
          </div>
        </header>
        <div className='content-container'>
          <div className='content-column'>
            <Reveal>
              <div className='content-title'>
                <span className='accent-text'>Data-Driven</span> Solutions
              </div>
            </Reveal>
            <Reveal>
              <div className='content-body'>
                SavvyCSV leverages the power of AI and web scraping to create the perfect CSV file for your needs.
              </div>
            </Reveal>
            <Reveal>
              <div className='start-button-container'>
                <button>
                  Start now
                </button>
              </div>
            </Reveal>
          </div>
          <div className='savvy-logo-column' style={{ background: '#0D0D0D', color: 'white' }}>
            <div className='savvy-logo'>
              <LandingPage />
            </div>
          </div>
        </div>
        <div className='tutorial-container'>
          <div className='tutorial-gif-column'>
            <Reveal>
              <div className="tutorial-gif">
                <video
                  src={tutorialVideo}
                  autoPlay
                  loop
                  muted
                  controls
                  width="650"
                  height="auto"
                />
              </div>
            </Reveal>
          </div>
          <div className='tutorial-content-column'>
            <Reveal>
              <div className='tutorial-title'>
                Endless <span className='accent-text'>datasets</span> at your disposal
              </div>
            </Reveal>
            <Reveal>
              <div className='tutorial-body'>
                Search for any dataset you can imagine by communicating with SavvyBot
              </div>
            </Reveal>
          </div>
        </div>
        <div className='team-container'>
          <Reveal>
            <div className='team-title-row'>
              Meet the <span className='accent-text'>SavvyCSV</span> Team
            </div>
          </Reveal>
          <div className='team-members-wrapper'>
            <TeamCard
              imageUrl={lennoxProfileImg}
              name='Lennox Anderson'
              title='Founder & Chief Engineer'
            />
            <TeamCard
              imageUrl={jonahProfileImg}
              name='Jonah Mulcrone'
              title='Software Engineer'
            />
            <TeamCard
              imageUrl={williamProfileImg}
              name='William Guanci'
              title='Researcher & CO-Founder'
            />
            <TeamCard
              imageUrl={davidProfileImg}
              name='David Bosse'
              title='Project Manager & CO-Founder'
            />
          </div>
        </div>
        <ProgressBar />
      </div>
    </div>
  )
}

export default App
