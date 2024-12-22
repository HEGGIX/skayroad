import "../startInfoBox/styles/style.scss"
import check from "../../assets/images/check.png"

const StartInfoBox = (props:{title:string,text:string}) => {
    return(
        <div className="start__info-box">
            <div className="start__info-box__img">
                <img src={check} alt="img" />
            </div>
            <div className="start__info-box__text-wrapp">
                <span className="start__info-box__title">{props.title}</span>
                <p className="start__info-box__text">{props.text}</p>
            </div>
        </div>
    )
}
export default StartInfoBox