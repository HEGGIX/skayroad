import "../footer/styles/style.scss"
import "../footer/styles/styleMedia.scss"

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="footer-column first">
                    <span className="footer-column__text">© {new Date().getFullYear()} – Все права защищены</span>
                    <span className="footer-column__text"><br/>Адрес: Беларусь, г. Минск,<br/>Берута 3Б, 415 каб.</span>
                </div>
                <div className="footer-column">
                    <span className="footer-column__text">График работы офиса:</span>
                    <span className="footer-column__text"><br/>ПН - ПТ: 09:00 - 17:00 <br/> СБ, ВС - Выходной</span>
                </div>
                <div className="footer-column third">
                    <span className="footer-column__text">ООО "СКАЙРОУД", УНП: 193797907 <br/> Карт-счет: </span>
                    <span className="footer-column__text">BY85ALFA30122F47810010270000</span>
                    <span className="footer-column__text"><br/>в BYN в ЗАО 'Альфа-Банк', БИК: ALFABY2X</span>
                </div>
            </div>
        </footer>
    )
}
export default Footer