import { Camera, Paperclip, SendHorizonal, Share } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full flex justify-between gap-2 ">
      <div className="w-full flex border items-center rounded-full p-2 gap-4">
        <input
          className="w-full overflow-hidden outline-none "
          type="text"
          placeholder="Type a message...."
        />
        <div className="flex gap-4 cursor-pointer">
          <Camera />
          <Paperclip />
        </div>
      </div>
      <div className="bg-red-600 rounded-full p-2 cursor-pointer">
        <SendHorizonal size={24} color="white" />
      </div>
    </footer>
  );
};

export default Footer;
