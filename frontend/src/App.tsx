import {useApp} from './contexts/AppContext';

import {Welcome} from './components/Welcome/Welcome';
import {Home} from './components/Home/Home';
import {Venue} from './components/Venue/Venue';
import {FabricDivider} from './components/FabricDivider/FabricDivider';
import {Program} from './components/Program/Program';
import {DressCode} from './components/DressCode/DressCode';
import {Gifts} from './components/Gifts/Gifts';
import {RSVP} from './components/RSVP/RSVP';
import {Footer} from './components/Footer/Footer';

function App() {
    const {isInvitationOpened} = useApp();

    return (
        <>
            <Welcome/>
            {isInvitationOpened && (
                <div className="d-flex justify-content-center m-0 p-0" id="root">
                    <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4 m-0 p-0">
                        <main>
                            <Home/>
                            <Venue/>
                            <FabricDivider/>
                            <Program/>
                            <FabricDivider/>
                            <DressCode/>
                            <FabricDivider/>
                            <Gifts/>
                            <FabricDivider/>
                            <RSVP/>
                            <FabricDivider/>
                            <Footer/>
                        </main>
                    </div>
                </div>
            )}
        </>
    );
}

export default App;
