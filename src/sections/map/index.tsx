import { Map,Placemark,YMaps } from "@pbe/react-yandex-maps"
import "../map/styles/style.scss"

const MapPoint = () => {
    return(
        <YMaps>
            <div className="map-wrapper">
                <Map className="map" defaultState={{ center: [ 53.905504, 27.502731], zoom: 17 }}>
                    <Placemark defaultGeometry={[53.905504, 27.502731]} />
                </Map>
            </div>
        </YMaps>
    )
}
export default MapPoint