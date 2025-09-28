import React, { useEffect, useRef } from "react";
import Footer from "./Footer";

const ChatWindow = () => {
  const dummyChats = [
    {
      id: 1,
      from: "other",
      text: "Hey! Long time no see!",
      timestamp: "2025-09-28T09:00:00",
    },
    {
      id: 2,
      from: "self",
      text: "Yeah, it's been a while. How have you been?",
      timestamp: "2025-09-28T09:01:15",
    },
    {
      id: 3,
      from: "other",
      text: "Busy with work. You know how it goes.",
      timestamp: "2025-09-28T09:02:00",
    },
    {
      id: 4,
      from: "self",
      text: "Totally get it. Deadlines never stop.",
      timestamp: "2025-09-28T09:03:10",
    },
    {
      id: 5,
      from: "other",
      text: "But hey, the weekend is finally here.",
      timestamp: "2025-09-28T09:04:00",
    },
    {
      id: 6,
      from: "self",
      text: "Yes! Any plans?",
      timestamp: "2025-09-28T09:05:20",
    },
    {
      id: 7,
      from: "other",
      text: "Thinking of going hiking.",
      timestamp: "2025-09-28T09:06:00",
    },
    {
      id: 8,
      from: "self",
      text: "Sounds refreshing!",
      timestamp: "2025-09-28T09:06:30",
    },
    {
      id: 9,
      from: "other",
      text: "Want to join?",
      timestamp: "2025-09-28T09:07:10",
    },
    {
      id: 10,
      from: "self",
      text: "I wish I could, but I have some errands.",
      timestamp: "2025-09-28T09:08:00",
    },
    {
      id: 11,
      from: "other",
      text: "No worries, maybe next time.",
      timestamp: "2025-09-28T09:08:30",
    },
    {
      id: 12,
      from: "self",
      text: "Sure. Have fun though!",
      timestamp: "2025-09-28T09:09:10",
    },
    {
      id: 13,
      from: "other",
      text: "Thanks! By the way, did you finish the project?",
      timestamp: "2025-09-28T09:10:00",
    },
    {
      id: 14,
      from: "self",
      text: "Yes, just submitted it yesterday.",
      timestamp: "2025-09-28T09:11:15",
    },
    {
      id: 15,
      from: "other",
      text: "Nice! Must feel like a relief.",
      timestamp: "2025-09-28T09:12:00",
    },
    {
      id: 16,
      from: "self",
      text: "Absolutely. It was stressing me out.",
      timestamp: "2025-09-28T09:13:00",
    },
    {
      id: 17,
      from: "other",
      text: "Take a break now, you earned it!",
      timestamp: "2025-09-28T09:14:00",
    },
    {
      id: 18,
      from: "self",
      text: "Haha, trying to. Maybe some Netflix later.",
      timestamp: "2025-09-28T09:15:00",
    },
    {
      id: 19,
      from: "other",
      text: "What are you watching?",
      timestamp: "2025-09-28T09:16:00",
    },
    {
      id: 20,
      from: "self",
      text: "Started a new thriller series.",
      timestamp: "2025-09-28T09:17:00",
    },
    {
      id: 21,
      from: "other",
      text: "Ooo nice. Any good?",
      timestamp: "2025-09-28T09:18:00",
    },
    {
      id: 22,
      from: "self",
      text: "So far it's gripping. Can't stop bingeing.",
      timestamp: "2025-09-28T09:19:00",
    },
    {
      id: 23,
      from: "other",
      text: "I’ll add it to my list.",
      timestamp: "2025-09-28T09:20:00",
    },
    {
      id: 24,
      from: "self",
      text: "You should! It's called 'Dark Echoes'.",
      timestamp: "2025-09-28T09:21:00",
    },
    {
      id: 25,
      from: "other",
      text: "Heard about it. Good reviews.",
      timestamp: "2025-09-28T09:22:00",
    },
    {
      id: 26,
      from: "self",
      text: "Yes! Very suspenseful.",
      timestamp: "2025-09-28T09:23:00",
    },
    {
      id: 27,
      from: "other",
      text: "Do you usually like thrillers?",
      timestamp: "2025-09-28T09:24:00",
    },
    {
      id: 28,
      from: "self",
      text: "Mostly. But I also enjoy comedies.",
      timestamp: "2025-09-28T09:25:00",
    },
    {
      id: 29,
      from: "other",
      text: "Same here! Ever watched Brooklyn 99?",
      timestamp: "2025-09-28T09:26:00",
    },
    {
      id: 30,
      from: "self",
      text: "Yes! Jake and Amy are iconic 😂",
      timestamp: "2025-09-28T09:27:00",
    },
    {
      id: 31,
      from: "other",
      text: "Captain Holt’s humor is gold!",
      timestamp: "2025-09-28T09:28:00",
    },
    {
      id: 32,
      from: "self",
      text: "No doubt. Peralta is chaos though 😅",
      timestamp: "2025-09-28T09:29:00",
    },
    {
      id: 33,
      from: "other",
      text: "Haha true. Need to rewatch it soon.",
      timestamp: "2025-09-28T09:30:00",
    },
    {
      id: 34,
      from: "self",
      text: "Let’s do a rewatch marathon?",
      timestamp: "2025-09-28T09:31:00",
    },
    {
      id: 35,
      from: "other",
      text: "I’m down! When?",
      timestamp: "2025-09-28T09:32:00",
    },
    {
      id: 36,
      from: "self",
      text: "Maybe next weekend?",
      timestamp: "2025-09-28T09:33:00",
    },
    {
      id: 37,
      from: "other",
      text: "Perfect. Snacks on me 😎",
      timestamp: "2025-09-28T09:34:00",
    },
    {
      id: 38,
      from: "self",
      text: "I’ll bring drinks!",
      timestamp: "2025-09-28T09:35:00",
    },
    {
      id: 39,
      from: "other",
      text: "We’re set then. Can’t wait!",
      timestamp: "2025-09-28T09:36:00",
    },
    {
      id: 40,
      from: "self",
      text: "It's going to be fun 😁",
      timestamp: "2025-09-28T09:37:00",
    },
    {
      id: 41,
      from: "other",
      text: "Gotta go now, meeting in 5 mins.",
      timestamp: "2025-09-28T09:38:00",
    },
    {
      id: 42,
      from: "self",
      text: "Alright, talk later!",
      timestamp: "2025-09-28T09:39:00",
    },
    {
      id: 43,
      from: "other",
      text: "Bye!",
      timestamp: "2025-09-28T09:40:00",
    },
    {
      id: 44,
      from: "self",
      text: "👋",
      timestamp: "2025-09-28T09:40:10",
    },
    {
      id: 45,
      from: "other",
      text: "Back! That meeting was so boring.",
      timestamp: "2025-09-28T10:00:00",
    },
    {
      id: 46,
      from: "self",
      text: "Lol! I feel you.",
      timestamp: "2025-09-28T10:00:30",
    },
    {
      id: 47,
      from: "other",
      text: "Let’s plan that weekend soon.",
      timestamp: "2025-09-28T10:01:00",
    },
    {
      id: 48,
      from: "self",
      text: "Sure, I’ll check my calendar.",
      timestamp: "2025-09-28T10:02:00",
    },
    {
      id: 49,
      from: "other",
      text: "Cool. Talk soon!",
      timestamp: "2025-09-28T10:03:00",
    },
    {
      id: 50,
      from: "self",
      text: "Later! 🫶",
      timestamp: "2025-09-28T10:04:00",
    },
  ];

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [dummyChats]);

  const formatDateLabel = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const isSameDay = (d1, d2) =>
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate();

    if (isSameDay(date, today)) return "Today";
    if (isSameDay(date, yesterday)) return "Yesterday";

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  };

  const groupMessagesByDate = (messages) => {
    return messages.reduce((groups, msg) => {
      const dateLabel = formatDateLabel(msg.timestamp);
      if (!groups[dateLabel]) groups[dateLabel] = [];
      groups[dateLabel].push(msg);
      return groups;
    }, {});
  };

  const groupedMessages = groupMessagesByDate(dummyChats);

  return (
    <div className="w-full h-full flex flex-col rounded-lg">
      <div className="flex-1 overflow-y-auto p-4 bg-white">
        {Object.entries(groupedMessages).map(([date, messages]) => (
          <div key={date} className="space-y-3">
            <div className="flex justify-center">
              <div className="text-xs px-3 py-1  text-gray-500 bg-white rounded-full shadow-sm">
                {date}
              </div>
            </div>

            {messages.map((msg) => (
              <div
                key={msg.id + msg.timestamp}
                className={`flex ${
                  msg.from === "self" ? "justify-end" : "justify-start"
                }`}
              >
                <div className="">
                  <div
                    className={`w-fit px-4 py-1 rounded-lg text-sm ${
                      msg.from === "self"
                        ? "bg-red-800 text-white rounded-br-none"
                        : "bg-gray-200 text-gray-800 rounded-bl-none"
                    }`}
                  >
                    <div className="flex flex-col">
                      <span>{msg.text}</span>
                      <span
                        className={`text-[10px] pl-4 ${
                          msg.from === "self"
                            ? "text-right text-white"
                            : "text-right text-gray-500"
                        }`}
                      >
                        {formatTime(msg.timestamp)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatWindow;
