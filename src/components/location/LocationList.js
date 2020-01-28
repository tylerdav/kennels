import React, { useContext } from "react"
import { LocationContext } from "./LocationProvider"
import Location from "./Location"
import "./Locations.css"

export default (props) => {
    const { locations } = useContext(LocationContext)

    return (
        <>
            <h1>Kennel Locations</h1>
            <div className="locations">
            {
                locations.map(loc => <Location key={loc.id} location={loc} />)
            }
            </div>
        </>
    )
}