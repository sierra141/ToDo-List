import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Event from './components/Events'
import AddEvent from './components/AddEvent'

function App() {
  
  const [showAddEvent, setShowAddEvent] = useState(false)
  const [events, setEvent] = useState([
    {
        id: 1,
        text: 'Meeting at Work',
        date: 'Mar 7 2021 13:00',
        done: true,
    },
    {
        id: 2,
        text: 'Workout',
        date: 'Mar 7 2021 18:00',
        done: false,
    }
])

//Num of events
const maxevents = 10
if (events.length >= maxevents){
  events.length = 10
}

const addEvent = (event) => {
  
  const id = Math.floor(Math.random() * 10000) + 1
  const date = (event.date).toString().slice(4, 21)
  const done = false
  const newEvent = { id, ...event, date, done }
  setEvent([...events, newEvent])
  
 console.log(newEvent)

}

const deleteEvent = (id) => {
  setEvent(events.filter((event) => event.id !== id))
}

const toggleEventAsDone = (id) => {
  setEvent(events.map((event) => event.id === id ? {...event, done: !event.done} : event))

}


  return (
    <div className="container">
      <Header onAdd={() => setShowAddEvent(!showAddEvent)} showAddEvent={showAddEvent} eventcnt={events.length} maxevents={maxevents}/>
      {showAddEvent && events.length < maxevents && <AddEvent onAdd={addEvent}/>}
      {events.length > 0 ? <Event event={events} onDelete={deleteEvent} onToggle={toggleEventAsDone}/> : 'No events to show'}
      <Footer eventcnt={maxevents}/>
    </div>
  );
}

export default App;
