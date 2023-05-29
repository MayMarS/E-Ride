import './App.scss';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Explorer from './Route/Explorer/Explorer';
import Commuter from './Route/Commuter/Commuter';
import Cruiser from './Route/Cruiser/Cruiser';
import Business from './Route/Business/Business';
import About from './Route/About/About';

function App(props) {
  return (
    <div className="App">
      <Header links={props.state.header.links}/>
      <Routes>
        <Route path="/" element={<Main catalog={props.state.main.catalog} rides={props.state.main.rides} learn={props.state.main.learn} />} />
        <Route path="/explorer" element={<Explorer info={props.state.explorer}/>} /> 
        <Route path="/commuter" element={<Commuter info={props.state.commuter}/>} /> 
        <Route path="/cruiser" element={<Cruiser info={props.state.cruiser}/>} /> 
        <Route path="/business" element={<Business business={props.state.business}/>} /> 
        <Route path="/about" element={<About about={props.state.about}/>} /> 
      </Routes>
      <Footer footer={props.state.footer} social={props.state.footer.social}/>
    </div>
  )
}

export default App;
