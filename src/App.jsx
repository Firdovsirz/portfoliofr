import './App.css'
import Header from './components/header/Header'
import Tools from './components/Tools/Tools'
import DifferenceSection from './sections/DifferenceSection/DifferenceSection'
import HelpSection from './sections/HelpSection/HelpSection'
import IntroSection from './sections/IntroSection/IntroSection'

function App() {
  return (
    <>
      <Header />
      <IntroSection />
      <DifferenceSection />
      <HelpSection />
      <Tools />
    </>
  )
}

export default App
