import { useContext, useEffect, useState } from "react"
import "../form/styles/style.scss"
import "../form/styles/styleMedia.scss"
import { RequestContext } from "../../context"
import close from "../../assets/images/close.png"
import useCreateRequest from "../../hooks/useCreateRequest"
import { getUTMParams } from "../../utils/getUTMParams"
import privacyPolicy from "../../assets/files/privacy-policy.pdf";

const Form = () => {
    const requestContext = useContext(RequestContext)

    const [personInfo, setPersonInfo] = useState({
        name: "",
        phone: "",
        city: "",
        vacancy: ""
    })

    const [utm, setUtm] = useState<Record<string, string>>({})
    const [agree, setAgree] = useState(false)


    useEffect(() => {
        setUtm(getUTMParams())
    }, [])

    const formHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        requestContext?.setRequest(false)
        useCreateRequest(
            personInfo.name,
            personInfo.phone,
            personInfo.city,
            personInfo.vacancy,
            utm
        )
    }

    const inputHandler = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = event.target
        const selectedText =
            event.target instanceof HTMLSelectElement
                ? event.target.options[event.target.selectedIndex].text
                : value

        setPersonInfo(prev => ({
            ...prev,
            [name]: selectedText
        }))
    }

    const closeHandler = () => {
        requestContext?.setRequest(false)
    }

    return (
        <div className={requestContext!.request === false ? "form hide" : "form"}>
            <div className="form-wrapper">
                <div className="form__close-btn__container">
                    <button className="form__close-btn" onClick={closeHandler}>
                        <img src={close} alt="close" />
                    </button>
                </div>
                <div className="form__title-container">
                    <h2 className="form-title">Оставить заявку</h2>
                </div>
                <form className="form__inp-container" onSubmit={formHandler}>
                    <input
                        className="form-inp"
                        type="text"
                        value={personInfo.name}
                        onChange={inputHandler}
                        placeholder="Имя, Фамилия"
                        name="name"
                        required
                    />
                    <input
                        className="form-inp"
                        type="text"
                        value={personInfo.phone}
                        onChange={inputHandler}
                        placeholder="Номер телефона"
                        name="phone"
                        required
                    />
                    <input
                        className="form-inp"
                        type="text"
                        value={personInfo.city}
                        onChange={inputHandler}
                        placeholder="Город"
                        name="city"
                        required
                    />
                    <select
                        className="form-select"
                        name="vacancy"
                        value={personInfo.vacancy}
                        onChange={inputHandler}
                        required
                    >
                        <option value="" disabled>
                            Выберите вакансию
                        </option>
                        <option value="own-car">На личном авто</option>
                        <option value="rental-car">На арендном авто (для города Минска)</option>
                    </select>

                    <label className="form-checkbox__label">
                        <input
                            type="checkbox"
                            className="form-checkbox"
                            checked={agree}
                            onChange={() => setAgree(prev => !prev)}
                            required
                        />
                        <span>
                            Я соглашаюсь с{" "}
                            <a
                                href={privacyPolicy}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                обработкой персональных данных
                            </a>
                            *
                        </span>
                    </label>

                    <button className="form-btn">Отправить</button>
                </form>
            </div>
        </div>
    )
}
export default Form
