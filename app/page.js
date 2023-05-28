'use client'

import Image from 'next/image'
// api secret key = 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

// local imports
import { useAppContext } from '@/libs/myAppContext'

import logo from '../public/webLogo.svg'
import NavButton from '@/components/NavButton'
import Devider from '@/components/Devider'
import PrevPrompts from '@/components/PrevPrompts'
import ChatSpace from '@/components/ChatSpace'
import HistoryWrap from '@/components/HistoryWrap'


export default function Home() {
  console.log(process.env.NEXT_PUBLIC_GUPUTA_KEY)
  console.log(process.env.GUPUTA_KEY)

  return (
    <main className=" container min-h-screen p-8 gap-6 min-w-full bg-slate-100 max-w-[1920px] sm:flex-row flex-col ">
      <section className='sm:hidden flex self-center'>
      <Image src={logo} height={100} width={100} priority alt='the logo of chat-guputa app' className=''/>
      </section>
      <section className='bg-white left-section rounded-xl shadow-2xl flex-col relative sm:flex hidden'>
        <div className='flex justify-center '>
          <Image src={logo} height={180} width={180} priority alt='the logo of chat-guputa app' className='mt-7 mb-3'/>
        </div>
        <Devider/> 
        <div className='flex mb-2 mt-2 mx-3 justify-center'>
          <NavButton props={{title:'About',link:'about'}}/>
          <NavButton props={{title:'Developer',link:'dev'}}/>
          <NavButton props={{title:'Buy Me Coffee',link:'https://www.buymeacoffee.com/SajanNethsara',blank:true}}/>
        </div>
        <HistoryWrap/>
        <div className='absolute self-center bottom-2'>
          <p className='text-[14px] font-normal'> <span>2023 🌍 </span> www.chatguputa.fun</p>
        </div>

      </section>
      <section className='bg-white right-section rounded-xl shadow-2xl'>
        <ChatSpace/>
      </section>
    </main>
    
  )
}
