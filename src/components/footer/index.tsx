import "../footer/styles/style.scss"
import "../footer/styles/styleMedia.scss"
import privacyPolicy from "../../assets/files/privacy-policy.pdf";

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="footer-column first">
                    <span className="footer-column__text">© {new Date().getFullYear()} – Все права защищены</span>
                    <span
                        className="footer-column__text"><br/>Адрес: Беларусь, г. Минск,<br/>пр-т Дзержинского 22, каб. 337<br/>220068</span>
                    <span
                        className="footer-column__text"><br/><a
                        href={privacyPolicy}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                                Политика конфиденциальности
                            </a></span>
                </div>
                <div className="footer-column">
                    <span className="footer-column__text">График работы офиса:</span>
                    <span className="footer-column__text"><br/>ПН - ПТ: 09:00 - 17:00 <br/> СБ, ВС - Выходной</span>
                </div>
                <div className="footer-column third">
                    <span className="footer-column__text">ООО "ХЕППАКОМПАНИ", УНП: 193872830 <br/> Карт-счет: </span>
                    <span className="footer-column__text">BY08ALFA30122H00660010270000</span>
                    <span className="footer-column__text"><br/>в BYN в ЗАО 'Альфа-Банк', БИК: ALFABY2X</span>
                </div>
            </div>
        </footer>
    )
}
export default Footer