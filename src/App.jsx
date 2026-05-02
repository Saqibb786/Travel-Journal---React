import Header from "./components/Header"
import Entry  from "./components/Entry"

import tripsData from "./data/data"

export default function App() {

const tripsElements = tripsData.map((trip) => {
  return <Entry
          key = {trip.id}
          {...trip}
           />

})

  return (
    <>
      <Header/>
      {tripsElements}
    </>
  )
}





