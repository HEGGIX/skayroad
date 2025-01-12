import sendMessage from "../api/telegramApi"
import { toast } from "react-toastify"

const useCreateRequest = async (name:string,phone:string): Promise<void> => {
    try{
        const message = `Имя,Фамилия: ${name}, номер телефона: ${phone}`
        await sendMessage(message)
        toast.success("Ваша зявка отправлена!", {
            position: "top-right",
            autoClose: 2500,
            pauseOnHover: false,
            pauseOnFocusLoss: false
        });

    }
    catch(error){
        return rejectWithValue((error as Error).message)
    }
}
export default useCreateRequest

function rejectWithValue(message: string): void | PromiseLike<void> {
    throw new Error(message)
}
