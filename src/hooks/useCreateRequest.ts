import sendMessage from "../api/telegramApi"
import { toast } from "react-toastify"

const useCreateRequest = async (
    name: string,
    phone: string,
    city: string,
    vacancy: string
): Promise<void> => {
    try {
        const message = `
            Имя, Фамилия: ${name}
            Телефон: ${phone}
            Город: ${city}
            Вакансия: ${vacancy}
        `
        await sendMessage(message)

        toast.success("Ваша заявка отправлена!", {
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
