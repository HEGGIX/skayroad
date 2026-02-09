import { Map,Placemark,YMaps } from "@pbe/react-yandex-maps"
import "../map/styles/style.scss"
import "../map/styles/styleMedia.scss"

const MapPoint = () => {
    return(
        <YMaps>
            <div className="map-wrapper" id={"about"}>
                <h2 className="section-title">О нас</h2>
                <div className="description">
                    Официальный партнёр сервиса Яндекс Такси в Беларуси. Мы помогаем на каждом этапе вступления в реестр. Гарантируем своевременные еженедельные выплаты и ежедневную поддержку. Официальное трудоустройство по трудовому договору. Уплата всех налогов и взносов.
                </div>
                    <Map className="map" defaultState={{center: [53.889205, 27.519619], zoom: 17}}>
                        <Placemark defaultGeometry={[53.889205, 27.519619]}/>
                    </Map>
                </div>
        </YMaps>
)
}
export default MapPoint