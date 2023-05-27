import axios from "axios";
import { Configuration, OpenAIApi } from "openai";

import authData from "./supportData";
const { GPT_ApiSecretKey, GPT_OrgId, translatorAuth } = authData;

export const trans_Si_to_En = async (TextData) => {
  const options = {
    method: "POST",
    url: "https://api-b2b.backenster.com/b1/api/v3/translate",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: translatorAuth,
    },
    data: {
      translateMode: "html",
      platform: "api",
      data: TextData,
      to: "en_US",
      from: "si_LK",
    },
  };

  const data = axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return data;
};

export const trans_En_to_Si = async (TextDataArr) => {
  const options = {
    method: "POST",
    url: "https://api-b2b.backenster.com/b1/api/v3/translate",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization:
        "a_UuncMqFc3xKshtL0EEQiiEJaMM1EsXgI6VZgxK8haEMoDo86yQVH7mFEbgVMTIAusyES2ZevsCmuqZuo",
    },
    data: {
      translateMode: "html",
      platform: "api",
      data: TextDataArr,
      to: "si_LK",
      from: "en_US",
    },
  };

  const data = axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return data;
};

export const getBotMsg = async (prompt) => {
  const configuration = new Configuration({
    organization: GPT_OrgId,
    apiKey: GPT_ApiSecretKey,
  });
  const openai = new OpenAIApi(configuration);
  console.log("connected to organization");
  console.log(prompt);

  const botReply = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });
  const reply = botReply.data.choices[0].message;
  console.log(reply);
  //response.data.choices[0].message
  return reply;
};

export function removeZeroWidthJoiner(str) {
  return str.replace(/\u200d/g, "");
}
