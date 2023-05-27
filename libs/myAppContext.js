'use client'
import React , {createContext, useContext, useState } from "react";

export const AppContext = createContext()

export const AppContextProvider = ({children}) => {
  
  // setting states
  const [chat,setChat] = useState([])
  const [isPromptLocked,setIsPromptLocked] = useState(false)
  

  //functions to add new chat
  const addChat = (title, message ) => {
    const currentDate = new Date()
    const DateAndTime = `${currentDate.toDateString()} ${currentDate.toLocaleTimeString()}`
    const newItem = {
      title,
      message,
      DateAndTime
    }
    if(chat.length == 0){
      setChat([...chat , newItem])
      console.log('first')
    }else{
      setChat([...chat , newItem])
    }
    console.log(chat)
  }
  // lock & unlock the button
  const lockPrompt = () => setIsPromptLocked(true)
  const unlockPrompt = () => setIsPromptLocked(false)
  //api calls
  

  //----------------------------------------------------------------

  const value = {
    chat,
    setChat,
    addChat,
    isPromptLocked,
    lockPrompt,
    unlockPrompt
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}