import { useContext, useState } from "react"
import "../form/styles/style.scss"
import "../form/styles/styleMedia.scss"
import { RequestContext } from "../../context"
import close from "../../assets/images/close.png"
import useCreateRequest from "../../hooks/useCreateRequest"

const Form = () => {
    const requestContext = useContext(RequestContext)
    const [personInfo,setPersonInfo] = useState({name:"",phone:""})
    console.log(personInfo.name)
    const formHandler= (event:React.ChangeEvent<HTMLFormElement>) =>{
        event?.preventDefault()
        requestContext?.setRequest(!requestContext.request)
        useCreateRequest(personInfo.name,personInfo.phone)
    }
    const inputHandler=(event:React.ChangeEvent<HTMLInputElement>)=>{
        const {value,name}=event.target
        setPersonInfo((prev) => ({
            ...prev,
            [name]:value
        }))
    }
    const closeHandler = () => {
        requestContext?.setRequest(!requestContext.request)
    }
    console.log(personInfo)
    return(
        <div className={requestContext!.request === false ? "form hide" : "form"}>
            <div className="form-wrapper">
                <div className="form__close-btn__container">
                    <button className="form__close-btn" onClick={closeHandler}><img src={close} alt="close"/></button>
                </div>
                <div className="form__title-container">
                    <h2 className="form-title">Оставить заявку</h2>
                </div>
                <form className="form__inp-container" onSubmit={formHandler}>
                    <input className="from-inp" type="text" value={personInfo.name} onChange={inputHandler} placeholder="Имя, Фамилия" name="name" required/>
                    <input className="from-inp" type="text" value={personInfo.phone} onChange={inputHandler} placeholder="Номер телефона" name="phone" required/>
                    <button className="form-btn">Отправить</button>
                </form>
            </div>
        </div>
    )
}
export default Form