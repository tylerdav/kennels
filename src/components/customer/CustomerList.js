import React, { useContext } from "react"
import { CustomerContext } from "./CustomerProvider"
import Customer from "./Customer"
import "./Customers.css"

export default () => {
    const { customers } = useContext(CustomerContext)

    return (
        <div className="customers">
        {
            customers.map(loc => <Customer key={loc.id} customer={loc} />)
        }
        </div>
    )
}