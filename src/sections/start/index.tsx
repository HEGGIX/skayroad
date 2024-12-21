import RequestButton from "../../ui-components/requestButton"
import arrow from "../../assets/images/arrow.png"
import "../start/styles/styles.scss"

const Start = () => {
    return(
        <div className="start">
            <div className="start-wrapper">
                <div className="start__btn-container">
                    <h2 className="start__btn-title">Как начать работать?</h2>
                    <img src={arrow} alt="arrow" />
                    <RequestButton/>
                </div>
                <div></div>
            </div>
        </div>
    )
}
export default Start