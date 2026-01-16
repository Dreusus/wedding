import {useEffect} from 'react';
import {useApp} from './contexts/AppContext';
import {weddingConfig} from './config';

import {Loading} from './components/Loading/Loading';
import {Welcome} from './components/Welcome/Welcome';
import {Home} from './components/Home/Home';
import {Couple} from './components/Couple/Couple';
import {Quotes} from './components/Quotes/Quotes';
import {Countdown} from './components/Countdown/Countdown';
import {Program} from './components/Program/Program';
import {Gallery} from './components/Gallery/Gallery';
import {Gifts} from './components/Gifts/Gifts';
import {Organizer} from './components/Organizer/Organizer';
import {CoupleQuiz} from './components/CoupleQuiz/CoupleQuiz';
import {RSVP} from './components/RSVP/RSVP';
import {Footer} from './components/Footer/Footer';
import {Navigation} from './components/Navigation/Navigation';
import {DesktopSidebar} from './components/common/DesktopSidebar';
import {FloatingButtons} from './components/common/FloatingButtons';
import {WaveSeparator} from './components/common/WaveSeparator';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    const {isInvitationOpened, audioRef} = useApp();

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1000,
        });
    }, []);

    useEffect(() => {
        if (isInvitationOpened) {
            AOS.refresh();
        }
    }, [isInvitationOpened]);

    return (
        <>
            <audio ref={audioRef} src={weddingConfig.audio} loop/>
            <Loading/>
            <Welcome/>
            <div
                className={`row m-0 p-0 ${isInvitationOpened ? '' : 'opacity-0'}`}
                id="root"
                style={{transition: 'opacity 0.5s ease'}}
            >
                <DesktopSidebar/>

                <div className="col-sm-7 col-md-6 col-lg-5 col-xl-4 col-xxl-3 m-0 p-0">
                    <main
                        data-bs-spy="scroll"
                        data-bs-target="#navbar-menu"
                        data-bs-root-margin="25% 0% 0% 0%"
                        data-bs-smooth-scroll="true"
                        tabIndex={0}
                    >
                        {/* Home: bg-light-dark */}
                        <Home/>
                        <WaveSeparator/>

                        {/* Couple: bg-white-black */}
                        <Couple/>
                        <WaveSeparator variant="top"/>

                        {/* CoupleQuiz + Quotes: bg-light-dark */}
                        <CoupleQuiz/>
                        <Quotes/>
                        <WaveSeparator/>

                        {/* Countdown: bg-white-black */}
                        <Countdown/>
                        <WaveSeparator variant="top"/>

                        {/* Program: bg-light-dark */}
                        <Program/>
                        <WaveSeparator/>

                        {/* Gallery: bg-white-black */}
                        <Gallery/>
                        <WaveSeparator variant="top"/>

                        {/* Gifts: bg-light-dark */}
                        <Gifts/>
                        <WaveSeparator/>

                        {/* Organizer: bg-white-black */}
                        <Organizer/>
                        <WaveSeparator variant="top"/>

                        {/* RSVP: bg-light-dark */}
                        <RSVP/>
                        <WaveSeparator/>

                        {/* Footer: bg-white-black */}
                        <Footer/>
                    </main>
                    <Navigation/>
                </div>
            </div>

            <FloatingButtons/>
        </>
    );
}

export default App;
