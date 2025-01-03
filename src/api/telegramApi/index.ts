const baseUrl = "https://api.telegram.org/bot8141493584:AAF5ei0aStfV60FBSc_3jkAICc1EucohI28/"

const sendMessage = async (message:string): Promise<void> => {
    const url = `${baseUrl}sendMessage?chat_id=-4664286917&text=${message}`

    const response = await fetch(url)

    if(!response.ok){
        const error = await response.json()
        await Promise.reject(error.description || "Что-то пошло не так")
    }
}
export default sendMessage