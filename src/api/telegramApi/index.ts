const baseUrl = "https://api.telegram.org/bot7812137498:AAFS03d24rMqVBXS_KlAneYBOTMSrd12smE/"

const sendMessage = async (message:string): Promise<void> => {
    const encodedMessage = encodeURIComponent(message)
    const url = `${baseUrl}sendMessage?chat_id=-1002501606692&text=${encodedMessage}`

    const response = await fetch(url)

    if(!response.ok){
        const error = await response.json()
        return Promise.reject(error.description || "Что-то пошло не так")
    }
}
export default sendMessage