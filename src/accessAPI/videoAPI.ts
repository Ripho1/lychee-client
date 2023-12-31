import axios from 'axios'

const baseURL = 'http://localhost:3001/api/video-layers'

export async function addVideoOutro(text: string) {
    try {
        const { data } = await axios.post(`${baseURL}/outro`, { text }, { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } })

        return data
    } catch (error) {
        console.log(error)
        // Will return a porper response object with a status in the future
        return 'Error - try again later'
    }
}