import "../conditions/styles/styles.scss"
import "../conditions/styles/styleMedia.scss"
import {IStartInfoBox } from "../../types"
import StartInfoBox from "../../ui-components/startInfoBox";

const startInfoBoxData: IStartInfoBox [] = [
    {title: "Свободный график – только Вы решаете, когда и на сколько выходить на линию",text:""},
    {title: "Выдаём виртуальные топливные карты для заправки с баланса в Яндекс.Про",text:""},
    {title: "Комиссия Парка – 17%",text:""},
    {title: "Абонентская плата на полную ставку – 13.30 руб. ежедневно (налоги, врач, механик)",text:""},
    {title: "Абонентская плата на 0.5 ставки – 6.40 руб. ежедневно (налоги, врач, механик)",text:""},
    {title: "Бонус за привлечение друга – 100 руб.",text:""},
    {title: "Заработок на балансе Яндекса – полностью ваш!",text:""},
    {title: "Выплаты:",text:"Еженедельно на карту Альфа-банка (без комиссии)"},
]

const WorkConditionsSection = () => {
    return (
        <div className="work-section" id="work-section">
            <div className="work-block">
                <h2 className="section-title">Условия работы</h2>
                {startInfoBoxData.map((box) => {
                    return(
                        <StartInfoBox title={box.title} text={box.text}/>
                    )
                })}
            </div>
        </div>
    )
}

export default WorkConditionsSection