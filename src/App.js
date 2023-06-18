import info from './data'
import Heading from './components/Heading';
import Tours from './components/Tours';
import { useState } from 'react';
const App = () => {

const [tour,settour] = useState(info);
  const CardHandler = (id)=>{
        const newTours = tour.filter(tour=>tour.id!==id);
        settour(newTours);
    }
    const refresh = ()=>{
      settour(info);
    }
    if(tour.length===0){
      return(
        <div className='refresh'>
        <div>No Tours Left!!🙁</div>
        <button onClick={refresh}>Refresh</button>
        </div>
      );
    }
  return (
    <div className="App">
     <Heading/>
     <Tours data={tour} removeTour={CardHandler}/>
    </div>
  )
};

export default App;
