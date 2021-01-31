import logo from './logo.svg';
import fireplace from './IMG_3975 copy.jpg'
import boat from './IMG_4384.jpeg'
import istanbul from './IMG_3118.jpeg'
import './App.css';
import ImageSlider from './components/ImageSlider';
import {Sliderdata} from './components/SliderData';

function App() {
  return (
    <div className="App">

      

      <head>
    <title>Page Title</title>
    </head>
 <body>
    <body>
        <h1>Welcome to my Page!</h1>
        
        <h2>About Me</h2>
        <img src={fireplace} className="image" alt="fireplace" width="600"/>
        <p className="Text-bottom">Hi, my name's Shadman. I'm from Manhasset, NY, and am a sophomore at Bates pursuing a math major.  I have tons of experience doing scientific research and volunteering for political organizations.</p> 
        <h2>What Am I Doing Now?</h2>
        <p className="Text">Over this long break Bates students have had, I've been working with a friend to develop a new Bates-based EdTech Consultancy group, Tech207.  We are getting involved with local school systems to bring seamless solutions to technological issues they have faced in the shift to virtual teaching.  We are working to bring an innovative approach for Bates students to get involved and gain real experience even through the restrictions that have been put in place for the pandemic.</p>
        <div>
        <p className="Text">Some things I love doing in my free time:</p>
          <ul className="Text">
            <li>Sailing</li>
            <li>Traveling</li>
            <li>COD and 2K</li>
          </ul>
          <img src={boat} className='image' alt="fireplace" height="200"/>
          <img src={istanbul} className='image' alt="fireplace" height="200"/>
        </div>
        <div>
        <ImageSlider slides={Sliderdata}/>
        </div>
        
      </body>
 </body>
    </div>
  );
}

function slider() {
  return <ImageSlider />
}

export default App;
