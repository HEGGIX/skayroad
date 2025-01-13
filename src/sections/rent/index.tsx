import "../rent/styles/style.scss"
import "../offer/styles/style.scss"
import "../rent/styles/styleMedia.scss"
import taxi from "../../assets/images/taxi-car.png"

const Rent = () => {
    return(
        <div className="rent">
            <div className="rent-wrapper">
                <img className="rent-img" src={taxi} alt="taxi-car" />
                <p className="rent-text">Предоставляем для <br/> работы автомобиль <br/> в аренду </p>
            </div>
        </div>
    )
}
export default Rent