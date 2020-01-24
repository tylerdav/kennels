import React from "react"
import "./Employees.css"

export default ({ employee }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <address className="employee__address">{employee.address}</address>
    </section>
)