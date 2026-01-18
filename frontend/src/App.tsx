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
    const {isWelcomeVisible} = useApp();

    return (
        <>
            <Welcome/>
            <div className={`app-container ${isWelcomeVisible ? 'no-scroll' : ''}`}>
                <main className="main-content">
                        <Home/>
                        <Venue/>
                        <FabricDivider />
                        <Program/>
                        <FabricDivider />
                        <DressCode/>
                        <FabricDivider />
                        <Gifts/>
                        <FabricDivider />
                        <RSVP/>
                        <FabricDivider />
                        <Footer/>
                </main>
            </div>
        </>
    );
}

export default App;
