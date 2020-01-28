import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { CustomerProvider } from "./customer/CustomerProvider"
import LocationList from "./location/LocationList"
import AnimalList from "./animal/AnimalList"
import EmployeeList from "./employee/EmployeeList"
import CustomerList from "./customer/CustomerList"
import EmployeeForm from "./employee/EmployeeForm"
import AnimalDetails from "./animal/AnimalDetails"
import AnimalForm from "./animal/AnimalForm"
import ProviderProvider from "./ProviderProvider"


export default (props) => {
    return (
        <>
            <ProviderProvider>
                <Route exact path="/">
                    <LocationList />
                </Route>
            </ProviderProvider>



            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals" render={
                        props => <AnimalList {...props} />
                    } />

                    <Route exact path="/animals/create" render={
                        props => <AnimalForm {...props} />
                    } />
                    <Route path="/animals/:animalId(\d+)" render={
                        props => <AnimalDetails {...props} />
                    } />
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>



            <EmployeeProvider>
                <LocationProvider>
                    <Route exact path="/employees" render={
                        props => <EmployeeList {...props} />
                    } />

                    <Route exact path="/employees/create" render={
                        props => <EmployeeForm {...props} />
                    } />
                </LocationProvider>
            </EmployeeProvider>



            <CustomerProvider>
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>
        </>
    )
}