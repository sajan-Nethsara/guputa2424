import React,{useEffect,useRef} from 'react'


const BotMsg = ({msg}) => {
  const myMessage = useRef(null)
  useEffect(() => {
    if(myMessage.current){
      myMessage.current.scrollIntoView({ behavior:'smooth'});
    }
  })
  return (
    <div ref={myMessage} className='flex flex-col bg-[#5d18dc65] items-center rounded-2xl my-3 mr-2 px-4 py-2'>
      <div className='self-start font-semibold text-[14px] text-[#5d18dc]'>
      චැට් ජුපුටාවා ~
      </div>
      {msg.map((singleMsg , index) => (
        <p className='mb-4' key={index}>{singleMsg}</p>
      ))}
    </div>
  )
}

export default BotMsg