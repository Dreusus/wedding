import { useEffect } from 'react';
import { useApp } from './contexts/AppContext';
import { weddingConfig } from './config';

// Components
import { Loading } from './components/Loading/Loading';
import { Welcome } from './components/Welcome/Welcome';
import { Home } from './components/Home/Home';
import { Couple } from './components/Couple/Couple';
import { Quotes } from './components/Quotes/Quotes';
import { Countdown } from './components/Countdown/Countdown';
import { Gallery } from './components/Gallery/Gallery';
import { Gifts } from './components/Gifts/Gifts';
import { RSVP } from './components/RSVP/RSVP';
import { Footer } from './components/Footer/Footer';
import { Navigation } from './components/Navigation/Navigation';
import { DesktopSidebar } from './components/common/DesktopSidebar';
import { FloatingButtons } from './components/common/FloatingButtons';
import { WaveSeparator } from './components/common/WaveSeparator';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const { isInvitationOpened, audioRef } = useApp();

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    // Refresh AOS when invitation is opened
    if (isInvitationOpened) {
      AOS.refresh();
    }
  }, [isInvitationOpened]);

  return (
    <>
      {/* Audio element */}
      <audio ref={audioRef} src={weddingConfig.audio} loop />

      {/* Loading Screen */}
      <Loading />

      {/* Welcome Screen */}
      <Welcome />

      {/* Main Content */}
      <div
        className={`row m-0 p-0 ${isInvitationOpened ? '' : 'opacity-0'}`}
        id="root"
        style={{ transition: 'opacity 0.5s ease' }}
      >
        {/* Desktop Sidebar */}
        <DesktopSidebar />

        {/* Mobile/Main Content */}
        <div className="col-sm-7 col-md-6 col-lg-5 col-xl-4 col-xxl-3 m-0 p-0">
          <main
            data-bs-spy="scroll"
            data-bs-target="#navbar-menu"
            data-bs-root-margin="25% 0% 0% 0%"
            data-bs-smooth-scroll="true"
            tabIndex={0}
          >
            {/* Home Section */}
            <Home />

            {/* Wave Separator */}
            <WaveSeparator />

            {/* Couple Section */}
            <Couple />

            {/* Wave Separator */}
            <WaveSeparator variant="top" />

            {/* Quotes Section */}
            <Quotes />

            {/* Countdown Section */}
            <Countdown />

            {/* Gallery Section */}
            <Gallery />

            {/* Wave Separator */}
            <WaveSeparator variant="top" />

            {/* Gifts Section */}
            <Gifts />

            {/* RSVP Section */}
            <RSVP />

            {/* Wave Separator */}
            <WaveSeparator />

            {/* Footer */}
            <Footer />
          </main>

          {/* Bottom Navigation */}
          <Navigation />
        </div>
      </div>

      {/* Floating Buttons */}
      <FloatingButtons />
    </>
  );
}

export default App;
