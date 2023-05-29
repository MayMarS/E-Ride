import './Main.scss';
import MainSection from './MainSection/MainSection';
import HowWorks from './HowWorks/HowWorks';
import Catalog from './Catalog/Catalog';
import Cities from './Cities/Cities';
import ChooseRide from './ChooseRide/ChooseRide';
import LearnMore from './LearnMore/LearnMore';

const Main = (props) => {
    window.scrollTo(0,0);
    return (
        <main>
            <MainSection />
            <HowWorks />
            <Catalog catalog={props.catalog}/>
            <Cities />
            <ChooseRide rides={props.rides}/>
            <LearnMore learn={props.learn}/>
        </main>
    )
}

export default Main;