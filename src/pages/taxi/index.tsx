import Footer from "../../components/footer"
import Form from "../../components/form"
import Header from "../../components/header"
import AboutUs from "../../sections/aboutUs"
import MapPoint from "../../sections/map"
import OfferSection from "../../sections/offer"
import Rent from "../../sections/rent"
import Start from "../../sections/start"

const TaxiPage = () => {
    return(
        <>
            <Header/>
            <OfferSection/>
            <AboutUs/>
            <Rent/>
            <Start/>
            <MapPoint/>
            <Footer/>
            <Form/>
        </>
    )
}
export default TaxiPage