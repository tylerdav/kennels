import React, { useContext } from "react"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "./AnimalProvider"
import { EmployeeContext } from "../employee/EmployeeProvider"
import "./Animals.css"

export default (props) => {
    const { locations } = useContext(LocationContext)
    const { animals } = useContext(AnimalContext)
    const { employees } = useContext(EmployeeContext)

    const chosenAnimalId = parseInt(props.match.params.animalId, 10)

    const animal = animals.find(a => a.id === chosenAnimalId) || {}
    const employee = employees.find(c => c.id === animal.employeeId) || {}
    const location = locations.find(l => l.id === animal.locationId) || {}

    return (
        <section className="animal">
            <h3 className="current__location">{location.name}</h3>
            <div className="current__animals">{animal.name}</div>
            <div className="current__employees">Current Employees: {employee.name}</div>
        </section>
    )
}