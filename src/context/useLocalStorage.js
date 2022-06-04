import { useState } from "react";

// export function useLocalStorage(key, initialValue) {
    export function useLocalStorage(initialValue) {

    const [storedValue, setStoredValue] = useState(()=> {
        try{
            const item = window.localStorage.getItem('cart')
            return item ? JSON.parse(item) : initialValue
        }catch (error){
            return initialValue
        }
    })


    const setValue = value => {
        try{
            setStoredValue(value)
            window.localStorage.setItem('cart', JSON.stringify(value))
        }catch (error){
            console.error(error)
        }
    }

    return [storedValue, setValue]

}