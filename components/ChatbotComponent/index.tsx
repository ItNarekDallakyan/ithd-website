import { Chat } from "./custom/chat";
import { generateUUID } from "@lib/utils";
import {FC, useState} from "react";

const ChatbotComponent: FC = () => {
  const id = generateUUID();
  return <Chat key={id} id={id} initialMessages={[]} />;
}

export default ChatbotComponent;
