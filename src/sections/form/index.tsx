import {useEffect, useState} from "react"
import "../form/styles/style.scss"
import "../form/styles/styleMedia.scss"
import useCreateRequest from "../../hooks/useCreateRequest"
import { getUTMParams } from "../../utils/getUTMParams"
import privacyPolicy from "../../assets/files/privacy-policy.pdf"

const FormSection = () => {
    const [personInfo, setPersonInfo] = useState({
        name: "",
        phone: "",
        city: "",
        vacancy: ""
    })

    const [agree, setAgree] = useState(false)
    const [utm, setUtm] = useState<Record<string, string>>({})

    useEffect(() => {
        setUtm(getUTMParams())
    }, [])

    const formHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!agree) return

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
        setPersonInfo(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="form-section">
            <div className="form-wrapper">
                <div className="form__title-container">
                    <h2 className="form-title">Оставить заявку</h2>
                </div>

                <form className="form__inp-container" onSubmit={formHandler}>
                    <input
                        className="form-inp"
                        type="text"
                        name="name"
                        value={personInfo.name}
                        onChange={inputHandler}
                        placeholder="Имя, Фамилия"
                        required
                    />
                    <input
                        className="form-inp"
                        type="text"
                        name="phone"
                        value={personInfo.phone}
                        onChange={inputHandler}
                        placeholder="Номер телефона"
                        required
                    />
                    <input
                        className="form-inp"
                        type="text"
                        name="city"
                        value={personInfo.city}
                        onChange={inputHandler}
                        placeholder="Город"
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

                    <button className="form-btn" type="submit" disabled={!agree}>
                        Отправить
                    </button>
                </form>
            </div>
        </div>
    )
}

export default FormSection
