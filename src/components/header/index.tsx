import "../header/styles/styles.scss"
import logo from "../../assets/images/Taxi-logo.png"

const Header = () => {
    return(
        <header className="header">
            <div className="header-wrapper">
                <img src={logo} alt="logo" />
                <span className="header-phone">+375333974844</span>
            </div>
        </header>
    )
}
export default Header