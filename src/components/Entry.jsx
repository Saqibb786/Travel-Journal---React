import mapMarkerImage from "../assets/marker.png"

export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={props.trip.img.src}
                    alt={props.trip.img.alt} 
                />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src={mapMarkerImage}
                    alt="map marker icon"
                />
                <span className="country">{props.trip.country}</span>
                <a href={props.trip.googleMapsLink}>View on Google Maps</a>
                <h2 className="entry-title">{props.trip.title}</h2>
                <p className="trip-dates">{props.trip.dates}</p>
                <p className="entry-text">{props.trip.text}</p>
            </div>
            
        </article>
    )
}