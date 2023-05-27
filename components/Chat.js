import axios from "axios";
import BotMsg from "./BotMsg";
import UserMsg from "./UserMsg";
import { useEffect, useState } from "react";
import { useAppContext } from "@/libs/myAppContext";

const Chat = ({ prompt }) => {
  const { unlockPrompt } = useAppContext();
  const [result, setResult] = useState(null);
  useEffect(() => {
    //find the answer for the prompt
    axios.post('/api/botreq',{prompt}).then((res)=>{
      console.log(res.data.BotMsgSI)
      setResult(res.data.BotMsgSI)
    }).catch((err)=>{
      console.log(err)
    })
    unlockPrompt()

    // setTimeout(() => {
    //   const dummyResult = "This message is from bot";
    //   setResult(dummyResult);
    //   unlockPrompt()
    // }, 2000);
  },[]);

  return (
    <div className="cursor-default w-full px-3 mx-4 flex  flex-col">
      <div className="self-end w-[60%]"><UserMsg prompt={prompt}/></div>
      <div className=" w-[60%]">{result == null ? <div>Peek Peek Peek</div> : <BotMsg msg={result}/>}</div>
    </div>
  );
};

export default Chat;
