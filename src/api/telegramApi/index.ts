const baseUrl = "https://api.telegram.org/bot7812137498:AAFS03d24rMqVBXS_KlAneYBOTMSrd12smE/"

const sendMessage = async (message:string): Promise<void> => {
    const url = `${baseUrl}sendMessage?chat_id=-4748933216&text=${message}`

    const response = await fetch(url)

    if(!response.ok){
        const error = await response.json()
        await Promise.reject(error.description || "Что-то пошло не так")
    }
}
export default sendMessage