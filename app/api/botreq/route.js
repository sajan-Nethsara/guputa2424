import {trans_Si_to_En , trans_En_to_Si , getBotMsg ,removeZeroWidthJoiner} from './supportFunc'
import { NextResponse } from 'next/server';
 
export async function POST(request) {
  const res = await request.json();
  const userMsg =res.prompt
  //translating request
  const trans = await trans_Si_to_En(userMsg)
  const prompt = trans.result
  //chatGPT stuff
  const botReply = await getBotMsg(prompt)
  const replyArr = botReply.content.split("\n")
  //translating response
  const trans2 = await trans_En_to_Si(replyArr)
  const trans2Arr = trans2.result
  const newtrans2Arr = trans2Arr.map(removeZeroWidthJoiner)

  return NextResponse.json({
    UserMsgEN:userMsg,
    UserMsgSI:prompt, 
    BotMsgEN: replyArr,
    BotMsgSI: newtrans2Arr
   });
}




export async function GET(request) {
  console.log(process.env.NEXT_PUBLIC_GUPUTA_KEY)
  return NextResponse.json({ Hi:"people" })
}
//සරුංගලය ගැන වාක්‍ය 5ක් ලියන්න

/*
org_id = org-yk6WpjszPzLmXdqGT5ew08tz
api_secret_key = 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


*/