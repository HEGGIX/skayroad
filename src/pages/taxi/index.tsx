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
import FormSection from "../../sections/form"
import WorkConditionsSection from "../../sections/conditions";
import RegistrySection from "../../sections/registry";
import { ToastContainer } from "react-toastify"

const TaxiPage = () => {
    const [request,setRequest] = useState(false)
    return(
        <>
        <RequestContext.Provider value={{request:request,setRequest:setRequest}}>
            <Header/>
            <OfferSection/>
            <FormSection/>
            <WorkConditionsSection/>
            <AboutUs/>
            <RegistrySection/>
            <Rent/>
            <Start/>
            <MapPoint/>
            <Footer/>
            <Form/>
            <ToastContainer />
        </RequestContext.Provider>
        </>
    )
}
export default TaxiPage