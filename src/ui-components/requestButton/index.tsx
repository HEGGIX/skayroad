import { useContext } from "react"
import "../requestButton/styles/style.scss"
import { RequestContext } from "../../context"

const RequestButton = () => {
    const requestContext = useContext(RequestContext)
    const handler = () => {
        requestContext?.setRequest(!requestContext.request)
    }
    return(
        <button className="request-btn" onClick={handler}>Оставить заявку</button>
    )
}
export default RequestButton