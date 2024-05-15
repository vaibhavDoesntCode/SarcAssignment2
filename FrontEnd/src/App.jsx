import { useEffect, useState } from 'react'
import './App.css'
import Carousel from './components/Carousel/Carousel'

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/events/')
      .then((res) => res.json())
      .then((res) => {
        setEvents(res);
        console.log(res)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

      console.log(events)
  }, []);

 return(
  <div className='bodyy'>
    <Carousel data={events}  />
    <div className='head'>
      <h1>Events</h1>
    </div>
    <div className='events-div'>
    {events.map((event) => (
      <div className='event' >
        
      </div>
))}
      
    </div>

  </div>
 )
}

export default App
