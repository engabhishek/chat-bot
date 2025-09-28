import Dp from "../components/Dp";
import { HatGlasses, MoveLeft } from "lucide-react";
import Footer from "../components/Footer";
import ChatWindow from "../components/ChatWindow";

const Home = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="shrink-0 my-2 p-4 flex items-center justify-between shadow-md rounded-full bg-white z-10">
        <div className="flex items-center gap-4">
          <MoveLeft />
          <Dp text={"A"} bg={"yellow-500"} w={14} h={14} textSize={"4xl"} />
          <h1 className="text-red-500 font-bold">Fun Friday group</h1>
        </div>
        <div className="rounded-full bg-red-900 p-2">
          <HatGlasses size={24} color="white" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <ChatWindow />
      </div>
      <div className="relative border-t bg-white p-4 mb-4">
        <div className="absolute h-3 top-0 left-0 right-0 bg-gradient-to-b from-black/10 to-transparent pointer-events-none"></div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
