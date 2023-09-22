import './App.css';
import lake from "./image/lake.JPG";
import GallaryFooter from './components/GallaryFooter';
import Gallary from './components/Gallary';
import Header from './components/Header';

const imageData = [
  {
    id:1,
    img:lake 
  },
  {
    id:2,
    img:lake
  },
  {
    id:3,
    img:lake
  },
  {
    id:4,
    img:lake
  }
]

function App() {
  return (
    <div>
      
      <Header />

      <div>
        {
          imageData.map(image=>{
            return(
              <div key={image.id} className="column">
                <Gallary id={image.id} imgUrl={image.img}/>
              </div>
            )
          })
        }
      </div>

      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
