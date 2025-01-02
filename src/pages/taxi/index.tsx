import { useState } from "react"
import Footer from "../../components/footer"
import Form from "../../components/form"
import Header from "../../components/header"
import { RequestContext } from "../../context"
import AboutUs from "../../sections/aboutUs"
import MapPoint from "../../sections/map"
import OfferSection from "../../sections/offer"
import Rent from "../../sections/rent"
import Start from "../../sections/start"

const TaxiPage = () => {
    const [request,setRequest] = useState(false)
    return(
        <>
        <RequestContext.Provider value={{request:request,setRequest:setRequest}}>
            <Header/>
            <OfferSection/>
            <AboutUs/>
            <Rent/>
            <Start/>
            <MapPoint/>
            <Footer/>
            <Form/>
        </RequestContext.Provider>
        </>
    )
}
export default TaxiPage