import { createContext, useState } from "react";

export const DataContext = createContext()

export const DataContextProvider = ({children}) => {
    const [callGet, setCallGet] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [fees, setFees] = useState('')
    const [category, setCategory] = useState('')
    const [emphasis, setEmphasis] = useState(false)
    const [description, setDescription] = useState('')
    const [photo, setPhoto] = useState('')
    const [search, setSearch] = useState('')
    return (
        <DataContext.Provider value={{callGet, setCallGet, name, setName, price, fees, setFees, setPrice, category, setCategory, emphasis, setEmphasis, description, setDescription, photo, setPhoto, search, setSearch}}>
            {children}
        </DataContext.Provider>
    )
}