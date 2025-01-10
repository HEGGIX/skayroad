import RequestButton from "../../ui-components/requestButton"
import arrow from "../../assets/images/arrow.png"
import "../start/styles/styles.scss"
import "../start/styles/styleMedia.scss"
import {IStartInfoBox } from "../../types"
import StartInfoBox from "../../ui-components/startInfoBox"

const startInfoBoxData: IStartInfoBox [] = [
    {title: "Оставьте заявку на сайте",text:"Мы перезвоним для уточнения деталей"},
    {title: "Скачайте приложение Яндекс PRO",text:"Пройдите короткий тренинг"},
    {title: "Выходите на линию",text:"Получайте первые заказы и зарабатывайте"}
]

const Start = () => {
    return(
        <div className="start">
            <div className="start-wrapper">
                <div className="start__btn-container">
                    <h2 className="start__btn-title">Как начать работать?</h2>
                    <img className = "start__btn-img" src={arrow} alt="arrow" />
                    <RequestButton/>
                </div>
                <div className="start__info-container">
                    {startInfoBoxData.map((box) => {
                        return(
                            <StartInfoBox title={box.title} text={box.text}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Start