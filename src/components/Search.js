import { useState } from "react"

const Search = () => {
    const [search, setSearch] = useState("")
    const [engine, setEngine] = useState("duckduckgo")

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const isURL = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/

        if (engine === "duckduckgo") {
            window.open(`https://duckduckgo.com/${search}`, "_blank")
        } else {
            window.open(`https://${engine}.com/search?q=${search}`, "_blank")

        }
    }

    const handleEngineChange = (e) => {
        setEngine(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select value={engine} onChange={handleEngineChange}>
                    <option value="duckduckgo">DuckDuckGo</option>
                    <option value="youtube">youtube</option>
                    <option value="google">Google</option>
                    <option value="bing">Bing</option>
                </select>
                <input
                    type="text"
                    placeholder="Search DuckDuckGo or enter an URL"
                    value={search}
                    onChange={handleChange} />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Search