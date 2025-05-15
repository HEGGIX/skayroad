import "../header/styles/style.scss"
import "../header/styles/styleMedia.scss"

const Header = () => {
    return(
        <header className="header">
            <div className="header-wrapper">
                <div className="header-title">СкайРоуд</div>
                <div className="header-phone__container">
                    <a className="header-phone" href="tel:+375447412269">+375 (44) 741-22-69</a>
                    <a className="header-phone" href="tel:+375333294602">+375 (33) 329-46-02</a>
                    <a className="header-phone" href="tel:+375336070742">+375 (33) 607-07-42</a>
                </div>
                <nav className="header-nav">
                    <ul className="nav-list">
                        <li><a href="/">Главная</a></li>
                        <li><a href="#work-section">Условия работы</a></li>
                        <li><a href="#registry">Реестр</a></li>
                        <li><a href="#start">Заявка</a></li>
                        <li className="nav-item-with-dropdown">
                            <a href="#about">Контакты</a>
                            <div className="dropdown-phones">
                                <a className="header-phone" href="tel:+375447412269">+375 (44) 741-22-69</a>
                                <a className="header-phone" href="tel:+375333294602">+375 (33) 329-46-02</a>
                                <a className="header-phone" href="tel:+375336070742">+375 (33) 607-07-42</a>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header