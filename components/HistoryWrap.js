
import { useAppContext } from "@/libs/myAppContext";
import PrevPrompts from "./PrevPrompts";
import { useEffect , useRef , } from "react";

const HistoryWrap = () => {
  const lastItemRef = useRef(null)
  useEffect(() => {
    if(lastItemRef.current){
      lastItemRef.current.scrollIntoView({ behavior:'smooth'});
    }
  })
  const {chat} = useAppContext()
  console.log(chat)
  return (
    <div className="flex mt-2 mb-8 h-[300px] flex-grow mx-6 gap-3 rounded-2xl flex-col-reverse overflow-y-scroll myScroll">
      <div className="gap-10">
      <PrevPrompts message={'pera ewa metana darshanaya wanu ata'} />
        {chat.map((c, index) => (
          <div ref={(index == chat.length -1) ? lastItemRef : null} key={index} >
          <PrevPrompts key={index} message={c.message} item={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryWrap;
