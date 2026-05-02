
import globeImage from "../assets/globe.png"


function Header() {
  return (
    <header>
        <img src={globeImage} alt="Globe icon" />
        <h1>My Travel Journal</h1>
    </header>
  )
}

export default Header