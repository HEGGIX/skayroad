import "../offer/styles/style.scss"
import car from "../../assets/images/Geely.png"
import RequestButton from "../../ui-components/requestButton"

const OfferSection = () => {
    return(
        <div className="offer">
            <div className="offer-wrapper">
                <div className="offer-container">
                    <h1 className="offer-title">Работа водителем в Яндекс Такси</h1>
                    <ul className="offer-info">
                        <li className="offer-info__item">Официальное трудоустройство</li>
                        <li className="offer-info__item">Заключение трудового договора</li>
                        <li className="offer-info__item">Бесплатное вступление в реестр</li>
                        <li className="offer-info__item">Предоставление карты таксиста</li>
                        <li className="offer-info__item">Помощь в получении курсов повышения квалификации</li>
                        <li className="offer-info__item">Бейджик, тарифы</li>
                    </ul>
                    <RequestButton/>
                </div>
            </div>
            <div className="offer-bg">
                <img className="offer-bg__img" src={car} alt="car"/>
            </div>
        </div>
    )
}
export default OfferSection