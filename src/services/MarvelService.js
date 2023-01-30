
class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/'
    _apiKey = 'apikey=a3eeb1398e6927f793981f2b5010d215'

    getResource = async (url) => {
        let res = await fetch(url)

        // серверные ошибки
        if (!res.ok) {
            throw new Error (`Could not fetch ${url}, status ${res.status}`)
        }

        // ответ в формате json (возвращается Promise)
        return await res.json()
    }

    // запросы к API
    getAllCharacters = async () => {
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`)
        return res.data.results.map(this._transformCharacter) // каждый отдельный объект массива будет проходить через метод _transformCharacter
    }

    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}characters/${id}?&${this._apiKey}`)
        return this._transformCharacter(res.data.results[0])
    }

    // возврат трансформированного объекта с нужными полями
    _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }
}


export default MarvelService