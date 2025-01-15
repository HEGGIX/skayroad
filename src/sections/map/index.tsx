import { Map,Placemark,YMaps } from "@pbe/react-yandex-maps"
import "../map/styles/style.scss"
import "../map/styles/styleMedia.scss"

const MapPoint = () => {
    return(
        <YMaps>
            <div className="map-wrapper">
                <Map className="map" defaultState={{ center: [53.934721, 27.427892], zoom: 17 }}>
                    <Placemark defaultGeometry={[53.934721, 27.427892]} />
                </Map>
            </div>
        </YMaps>
    )
}
export default MapPoint