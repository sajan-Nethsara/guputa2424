import React, { useRef , useEffect } from "react";

import { useAppContext } from "@/libs/myAppContext";
import Chat from "./Chat";

const ChatSpace = () => {
  const lastItemRef = useRef(null)
  useEffect(() => {
    if(lastItemRef.current){
      lastItemRef.current.scrollIntoView({ behavior:'smooth', block: "end"});
    }
  })


  const { chat, addChat,isPromptLocked,lockPrompt } = useAppContext();
  const inputRef = useRef(null);

  const handleButton = () => {
    if(isPromptLocked){
      alert('Please weit for a moment')
    }else{
      lockPrompt()
      const prompt = inputRef.current.value;
      addChat("user", prompt);
      inputRef.current.value = "";
      inputRef.current.focus();

    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleButton();
    }
  };
  return (
    <div className="items-center flex flex-col justify-between relative h-full">
      <div className=" flex  mb-8 mt-8 h-[500px] justify-end w-[800px] flex-grow mx-6 gap-3 rounded-2xl flex-col overflow-y-scroll">
        <div className="overflow-y-scroll">
          {chat.map((c, index) => {
            return (
            <div key={index} ref={(index == chat.length -1) ? lastItemRef : null} >
              <Chat prompt={c.message} key={index}  />

            </div>
            );
          })}
        </div>
      </div>
      <div className={`flex `}>
        <div className="search mb-5">
        
          <input
            type="text"
            className={`search__input`}
            ref={inputRef}
            onKeyDown={handleKeyPress}
            placeholder="ඕන දෙයක් අහන්න..."
          />
          <button className={` search__button p-[10px] rounded-full`} onClick={handleButton}>
            <svg
              className="search__icon"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
          </button>
        <div className="bg-[#5d18dc] text-white p-2 ml-2 rounded-t-full rounded-br-full mr-3">#සිං</div>

        </div>
      </div>
    </div>
  );
};

export default ChatSpace;
