import "./App.css";
import MainBanner from "./components/MainBanner";
import ContentCenter from "./components/ContentCenter";
import CardComponent from "./components/CardComponent";
import ContentOne from "./components/ContentOne";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlug } from '@fortawesome/fontawesome-free-solid';

function App() {
  return (
    <div className="App">
      <MainBanner />
      <div className="container">
        <ContentCenter />
       
        <ContentOne />
        <div>
     </div>



        <div className="d-flex justify-content-between content-box">
          <div className="content-item">
            <CardComponent
              title="Direct Energy $1000-surge Protect"
              icon={<FontAwesomeIcon icon="fa-solid fa-plug fa-xl"  size="3x" className='m-3 icon-round' />}
              list={[
                "No serve call fee no long term contract no pre-inspection required",
                "Up to 100 in annual coverage",
                "Low monthly fee, conveniently added right to your Direct Energy bill",
              ]}
              buttonLabel="SELECT OFFER"
              onClick={() => console.log("clicked the button")}
              price="$6.99/mo"
              className="border-box"
            />
          </div>
          <div className="content-item">
          <CardComponent
              title="Direct Energy $2000-surge Protect"
              icon={<FontAwesomeIcon icon="fa-solid fa-plug fa-xl" size="3x" className='m-3 icon-round' />}
              list={[
                "No serve call fee no long term contract no pre-inspection required",
                "Up to 100 in annual coverage",
                "Low monthly fee, conveniently added right to your Direct Energy bill",
              ]}
              buttonLabel="SELECT OFFER"
              onClick={() => console.log("clicked the button")}
              price="$9.99/mo"
              className="border-box"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
