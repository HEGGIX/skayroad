import "../offer/styles/style.scss"
import "../offer/styles/styleMedia.scss"
import videoBg from "../../assets/videos/taxi.mp4"
import posterImg from "../../assets/images/taxi-poster.jpg"
import mobilePosterImg from "../../assets/images/taxi-poster-mobile.jpg"

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
                <video
                    className="offer-bg__video hide-on-mobile"
                    src={videoBg}
                    poster={posterImg}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                />
                <div
                    className="mobile-image show-on-mobile"
                    style={{backgroundImage: `url(${mobilePosterImg})`}}
                ></div>
            </div>
        </div>
    )
}
export default OfferSection