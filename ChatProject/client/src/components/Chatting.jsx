import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { GiHummingbird } from "react-icons/gi";

const Message = [
  { senderID: "user1", receiverID: "user2", text: "Hey, how are you?" },
  { senderID: "user2", receiverID: "user1", text: "I’m good! How about you?" },
  {
    senderID: "user1",
    receiverID: "user2",
    text: "Doing great, just had lunch.",
  },
  { senderID: "user2", receiverID: "user1", text: "Nice! What did you eat?" },
  { senderID: "user1", receiverID: "user2", text: "Some dal and rice." },
  { senderID: "user2", receiverID: "user1", text: "Simple and tasty." },
  { senderID: "user1", receiverID: "user2", text: "Exactly, comfort food." },
  {
    senderID: "user2",
    receiverID: "user1",
    text: "Did you finish the assignment?",
  },
  {
    senderID: "user1",
    receiverID: "user2",
    text: "Yes, submitted last night.",
  },
  {
    senderID: "user2",
    receiverID: "user1",
    text: "Good, I still need to complete mine.",
  },

  { senderID: "user1", receiverID: "user2", text: "Need any help with it?" },
  {
    senderID: "user2",
    receiverID: "user1",
    text: "Maybe, I’m stuck at one question.",
  },
  { senderID: "user1", receiverID: "user2", text: "Which one?" },
  {
    senderID: "user2",
    receiverID: "user1",
    text: "The part about data structures.",
  },
  {
    senderID: "user1",
    receiverID: "user2",
    text: "I can explain linked lists to you.",
  },
  { senderID: "user2", receiverID: "user1", text: "That would be great." },
  {
    senderID: "user1",
    receiverID: "user2",
    text: "Okay, let’s do a quick call later.",
  },
  {
    senderID: "user2",
    receiverID: "user1",
    text: "Sure, after 6 works for me.",
  },
  {
    senderID: "user1",
    receiverID: "user2",
    text: "Perfect, I’ll be free by then.",
  },
  { senderID: "user2", receiverID: "user1", text: "Cool, thanks a lot!" },

  {
    senderID: "user1",
    receiverID: "user2",
    text: "By the way, did you watch yesterday’s match?",
  },
  { senderID: "user2", receiverID: "user1", text: "Yes! It was so intense." },
  {
    senderID: "user1",
    receiverID: "user2",
    text: "That last-minute goal was crazy.",
  },
  {
    senderID: "user2",
    receiverID: "user1",
    text: "I know, I almost jumped off my seat.",
  },
  { senderID: "user1", receiverID: "user2", text: "Haha same here." },
  {
    senderID: "user2",
    receiverID: "user1",
    text: "We should watch the next one together.",
  },
  {
    senderID: "user1",
    receiverID: "user2",
    text: "Great idea, let’s plan it.",
  },
  { senderID: "user2", receiverID: "user1", text: "Done, I’ll bring snacks." },
  { senderID: "user1", receiverID: "user2", text: "And I’ll arrange drinks." },
  {
    senderID: "user2",
    receiverID: "user1",
    text: "Perfect movie-night vibes.",
  },

  {
    senderID: "user1",
    receiverID: "user2",
    text: "What’s up with your project work?",
  },
  {
    senderID: "user2",
    receiverID: "user1",
    text: "Almost done, just fixing bugs.",
  },
  {
    senderID: "user1",
    receiverID: "user2",
    text: "Debugging is always the hardest part.",
  },
  {
    senderID: "user2",
    receiverID: "user1",
    text: "True! Sometimes I spend hours on a small issue.",
  },
  {
    senderID: "user1",
    receiverID: "user2",
    text: "Haha I can totally relate.",
  },
  {
    senderID: "user2",
    receiverID: "user1",
    text: "Do you use console.log a lot?",
  },
  { senderID: "user1", receiverID: "user2", text: "Yes, it’s my best friend." },
  { senderID: "user2", receiverID: "user1", text: "Mine too, haha." },
  {
    senderID: "user1",
    receiverID: "user2",
    text: "We should try using a debugger more often.",
  },
  {
    senderID: "user2",
    receiverID: "user1",
    text: "Yeah, true. It’s more professional.",
  },

  {
    senderID: "user1",
    receiverID: "user2",
    text: "Any plans for the weekend?",
  },
  {
    senderID: "user2",
    receiverID: "user1",
    text: "Not really, just chilling at home.",
  },
  {
    senderID: "user1",
    receiverID: "user2",
    text: "Same here, I might catch up on some shows.",
  },
  {
    senderID: "user2",
    receiverID: "user1",
    text: "Which shows are you watching?",
  },
  {
    senderID: "user1",
    receiverID: "user2",
    text: "I just started a new sci-fi series.",
  },
  {
    senderID: "user2",
    receiverID: "user1",
    text: "Oh, sounds interesting. Recommend it to me later.",
  },
  { senderID: "user1", receiverID: "user2", text: "Sure, you’ll love it." },
  {
    senderID: "user2",
    receiverID: "user1",
    text: "Awesome, can’t wait to check it out.",
  },
];

const Chatting = ({ friend }) => {
  const { user } = useAuth();

  const [messages, setMessages] = useState(Message);

  const SenderID = user._id;
  const ReceiverID = friend._id || null;

  return (
    <>
      <div className="w-full">
        {ReceiverID ? (
          <>
            <div
              className="
             flex gap-3 items-center mx-3 mt-5 bg-secondary p-2 text-secondary-content rounded h-[10vh]"
            >
              <img
                src={friend.photo}
                alt=""
                className="w-12 h-12 rounded-full border border-primary "
              />
              <span className="text-lg">{friend.fullName}</span>
            </div>
            <div className="bg-secondary my-2 h-[75vh] mx-3 rounded p-3 overflow-y-auto">
              {messages ? (
                messages.map((message, index) => (
                  <div
                    className={`chat p-2 ${
                      message.senderID === "user1"
                        ? "chat-sender"
                        : "chat-receiver"
                    }`}
                    key={index}
                  >
                    <div className="chat-avatar avatar">
                      <div className="size-10 rounded-full">
                        <img
                          src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png"
                          alt="avatar"
                        />
                      </div>
                    </div>
                    <div className="chat-header flex gap-3 ">
                      <span className="text-secondary-content">
                        {" "}
                        Obi-Wan Kenobi
                      </span>
                      <time className="text-secondary-content/50">12:45</time>
                    </div>
                    <div className="chat-bubble">{message.text}</div>
                  </div>
                ))
              ) : (
                <div className="flex items-center justify-center h-full italic text-secondary-content">
                  Send messages to Start Conversatation
                </div>
              )}
            </div>
            <div className="bg-secondary my-2  mx-3 h-[8vh] rounded flex gap-5 items-center px-3">
              <input
                type="text"
                name=""
                id=""
                className="input bg-accent"
                placeholder="Your Message ..."
              />
              <button className="btn btn-success">
                <GiHummingbird />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center justify-center h-full">
              <div>Select the Friend to Start Chatting</div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Chatting;
