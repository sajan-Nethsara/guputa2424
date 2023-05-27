import React from "react"
import { useAppContext } from "@/libs/myAppContext"
const PrevPrompts = ({message , item}) => {
  
  const {chat , setChat} = useAppContext()

  function handleClick () {
    const updatedChat = chat.filter((_,i) => i !== item )
    setChat(updatedChat)
  }
  return (
    <div className="mybutifulbutton2  cursor-default flex  overflow-y-hidden my-3 mx-3 rounded-2xl justify-between items-center">
      <p className="w-[200px]">{message}</p>
      <button className="h-6 w-6 bg-white rounded-full mr-2 my-2" onClick={handleClick}>0</button>
    </div>
  )
}

export default PrevPrompts