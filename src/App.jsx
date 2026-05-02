import Header from "./components/Header"
import Entry  from "./components/Entry"

import tripsData from "./data/data"

export default function App() {

const tripsElements = tripsData.map((trip) => {
  return <Entry
          img = {trip.img}
          title = {trip.title}
          country = {trip.country}
          googleMapsLink = {trip.googleMapsLink}
          dates = {trip.dates}
          text = {trip.text} />

})

  return (
    <>
      <Header/>
      {tripsElements}
    </>
  )
}





