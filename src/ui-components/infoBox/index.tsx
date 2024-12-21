import "../infoBox/styles/style.scss"

const InfoBox = (props:{img:string,text:string}) => {
    return(
        <div className="info-box">
            <img src={props.img} alt="img"/>
            <p className="info-box__text">{props.text}</p>
        </div>
    )
}
export default InfoBox