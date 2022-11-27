
class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/'
    _apiKey = 'apikey=a3eeb1398e6927f793981f2b5010d215'

    getResource = async (url) => {
        let res = await fetch(url)

        // серверные ошибки
        if (!res.ok) {
            throw new Error (`Could not fetch ${url}, statut ${res.status}`)
        }

        // ответ в формате json (возвращается Promise)
        return await res.json()
    }

    // запросы к API
    getAllCharacters = () => {
        return this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`)
    }

    getCharacter = (id) => {
        return this.getResource(`${this._apiBase}characters/${id}?&${this._apiKey}`)
    }
}


export default MarvelService