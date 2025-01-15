import "../aboutUs/styles/style.scss"
import "../aboutUs/styles/styleMedia.scss"
import support from "../../assets/images/support-img.svg"
import schedule  from "../../assets/images/schedule-img.svg"
import income from "../../assets/images/income-img.svg"
import experience from "../../assets/images/experience-img.svg"
import payments from "../../assets/images/payments-img.svg"
import { IInfoBox } from "../../types"
import InfoBox from "../../ui-components/infoBox"

const infoBoxData:IInfoBox[] = [
    {img:payments,text: "Выплаты на карту еженедельно"},
    {img:schedule,text:"Свободный график работы"},
    {img:income,text:"Доход от 2000 BYN в месяц"},
    {img:experience,text:"Опыт работы не требуется"},
    {img:support,text:"Поддержка 24/7"},
]

const AboutUs = () => {
    return(
        <div className="aboutUs">
            <div className="aboutUs-wrapper">
                <h2 className="aboutUs-title">Почему выбирают нас?</h2>
                <div className="aboutUs-info">
                    {infoBoxData.map((box) => {
                        return(
                            <InfoBox img={box.img} text={box.text}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default AboutUs