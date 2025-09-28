import Dp from "../components/Dp";
import { HatGlasses, MoveLeft } from "lucide-react";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <div className="my-2 p-4 flex items-center justify-between shadow-md rounded-full ">
        <div className="flex items-center gap-4">
          <MoveLeft />
          <Dp text={"A"} bg={"yellow-500"} w={14} h={14} textSize={"4xl"} />
          <h1 className="text-red-500 font-bold">Fun Friday group</h1>
        </div>
        <div className="rounded-full bg-red-900 p-2">
          <HatGlasses size={24} color="white" />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
