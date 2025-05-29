import sendMessage from "../api/telegramApi"
import { toast } from "react-toastify"

const useCreateRequest = async (
    name: string,
    phone: string,
    city: string,
    vacancy: string,
    utm?: Record<string, string>
): Promise<boolean> => {
    try {
        const message = `
            Имя, Фамилия: ${name}
            Телефон: ${phone}
            Город: ${city}
            Вакансия: ${vacancy}
            ${utm?.utm_source ? `UTM Source: ${utm.utm_source}` : ''}
            ${utm?.utm_medium ? `UTM Medium: ${utm.utm_medium}` : ''}
            ${utm?.utm_campaign ? `UTM Campaign: ${utm.utm_campaign}` : ''}
            ${utm?.utm_content ? `UTM Content: ${utm.utm_content}` : ''}
            ${utm?.utm_term ? `UTM Term: ${utm.utm_term}` : ''}
            ${utm?.utm_id ? `UTM ID: ${utm.utm_id}` : ''}
        `.trim()

        await sendMessage(message)

        toast.success("Ваша заявка отправлена!", {
            position: "top-right",
            autoClose: 2500,
            pauseOnHover: false,
            pauseOnFocusLoss: false
        });

        return true
    } catch (error) {
        toast.error("Ошибка при отправке. Попробуйте снова.")
        return false
    }
}
export default useCreateRequest

// function rejectWithValue(message: string): void | PromiseLike<void> {
//     throw new Error(message)
// }
