import {useApp} from './contexts/AppContext';

import {Welcome} from './components/Welcome/Welcome';
import {Home} from './components/Home/Home';
import {Countdown} from './components/Countdown/Countdown';
import {Program} from './components/Program/Program';
import {Organizer} from './components/Organizer/Organizer';
import {RSVP} from './components/RSVP/RSVP';
import {Footer} from './components/Footer/Footer';
import {DesktopSidebar} from './components/common/DesktopSidebar';

function App() {
    const {isInvitationOpened} = useApp();

    return (
        <>
            <Welcome/>
            {isInvitationOpened && (
                <div className="row m-0 p-0" id="root">
                    <DesktopSidebar/>

                    <div className="col-sm-7 col-md-6 col-lg-5 col-xl-4 col-xxl-3 m-0 p-0">
                        <main>
                            <Home/>
                            <Countdown/>
                            <Program/>
                            <Organizer/>
                            <RSVP/>
                            <Footer/>
                        </main>
                    </div>
                </div>
            )}
        </>
    );
}

export default App;
