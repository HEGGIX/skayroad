import "../registry/styles/styles.scss"
import "../registry/styles/styleMedia.scss"
import {IStartInfoBox } from "../../types"
import StartInfoBox from "../../ui-components/startInfoBox";

const startInfoBoxData: IStartInfoBox [] = [
    {title: "Исправный автомобиль с оклейкой/магнитами",text:"(УНП и название организации уточняйте у менеджера)"},
    {title: "Свежий техосмотр",text:"(не старше 6 месяцев)"},
    {title: "Видеорегистратор и оранжевый плафон",text:""},
    {title: "Пассажирская страховка",text:"(оформляем мы)"},
    {title: "Страховка А6",text:"(можно оформить в рассрочку)"},
    {title: "Таксометр",text:"(СКНО подключает парк) или работа только по безналу (можно приобрести у нас)  "},
    {title: "Медсправка и предрейсовый осмотр перед каждой сменой",text:""},
    {title: "Курсы повышения квалификации",text:"(если стаж вождения более 5 лет)"},
    {title: "Курсы для водителей такси",text:""},
]

const RegistrySection = () => {
    return (
        <div className="registry-section" id="registry">
            <div className="registry-block">
                <h2 className="section-title">Требования к реестру</h2>
                {startInfoBoxData.map((box) => {
                    return(
                        <StartInfoBox title={box.title} text={box.text}/>
                    )
                })}
            </div>
        </div>
    )
}

export default RegistrySection