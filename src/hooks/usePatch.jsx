import { useEffect, useState, useContext } from "react"
import { DataContext } from "../context/DataContext"

export const usePatch = () => {
    const [id, setId] = useState()
    const [method, setMethod] = useState()
    const [config, setConfig] = useState()

    const url = 'https://coconut-mewing-success.glitch.me/products'

    // Altera o valor para que aja uma nova requisição GET para atualizar os dados
    const {setCallGet} = useContext(DataContext)

    const patchConfig = (data, id, method) => {
        setConfig({
            method,
            headers: {
                "Content-type" : "application/json",
            },
            body: JSON.stringify(data)
        })
        setId(id)
        setMethod(method)
    }
    
    useEffect(() => {
        const patchRequest = async () => {
            const urlPath = `${url}/${id}`
            const res = await fetch(urlPath, config)
            const json = await res.json()
            setCallGet(json)
        }
        patchRequest()
    },[config, method])
    return {patchConfig}
}