import "../offer/styles/style.scss"
import "../offer/styles/styleMedia.scss"
import posterImg from "../../assets/images/PM.png"
import mobilePosterImg from "../../assets/images/PM-mob.png"

const OfferSection = () => {
    return(
        <div className="offer">
            <div className="offer-wrapper">
                <div className="offer-container">
                    <h1 className="offer-title">Работа водителем <br/> в Яндекс Такси</h1>
                    <ul className="offer-info">
                        <li className="offer-info__item">Официальное трудоустройство</li>
                        <li className="offer-info__item">Еженедельные выплаты на карту</li>
                        <li className="offer-info__item">Бонусная система от Яндекс/Парка.</li>
                        <li className="offer-info__item">Заявление в реестр + бейдж с тарифами
                            <br/> за наш счёт
                        </li>
                        <li className="offer-info__item">Поддержка 24/7</li>
                    </ul>
                </div>
            </div>
            <div className="offer-bg">
                <div
                    className="desctop-image hide-on-mobile"
                    style={{backgroundImage: `url(${posterImg})`}}
                ></div>
                <div
                    className="mobile-image show-on-mobile"
                    style={{backgroundImage: `url(${mobilePosterImg})`}}
                ></div>
            </div>
        </div>
    )
}
export default OfferSection