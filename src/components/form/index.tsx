import "../form/styles/style.scss"

const Form = () => {
    return(
        <div className="form">
            <div className="form-wrapper">
                <div className="form__title-container">
                    <h2 className="form-title">Оставить заявку</h2>
                </div>
                <form className="form__inp-container">
                    <input className="from-inp" type="text" placeholder="Имя, Фамилия"/>
                    <input className="from-inp" type="text" placeholder="Номер телефона"/>
                    <button className="form-btn">Отправить</button>
                </form>
            </div>
        </div>
    )
}
export default Form