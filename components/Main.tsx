import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarIcon,
  ChatAlt2Icon,
  CogIcon,
  CubeTransparentIcon,
  PresentationChartLineIcon,
  WifiIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

const Main: React.FC = () => {
  return (
    <div className="flex-1 bg-[#1E1F23] h-screen p-8">
      {/** header section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image
            src="/pic.jpg"
            width={60}
            height={60}
            alt="avatar"
            className="rounded-full"
          />
          <h2 className="text-white font-bold text-xl">
            Good evening ,Arindam
          </h2>
        </div>
        <div className="flex items-center space-x-4">
          <select className="px-10 py-2 bg-black text-white rounded-lg">
            <option value={"choose"}>Choose</option>
            <option value={"mr"}>whatver</option>
            <option value={"mr"}>whatver</option>
            <option value={"mr"}>whatver</option>
            <option value={"mr"}>whatver</option>
          </select>
          <button className="bg-indigo-500 cursor-pointer text-white px-4 py-2 rounded-lg">
            <ChatAlt2Icon className="h-6" />
          </button>
        </div>
      </div>
      {/** card section  */}
      <div className="flex py-8 items-center justify-between">
        <div>
          <div className="flex space-x-4 my-4">
            <div className="bg-blue-400 p-5 rounded-lg text-white">
              <PresentationChartLineIcon className="h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total earnings</p>
              <h2 className="text-2xl text-white font-bold">$10,357.68</h2>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="bg-green-400 p-5 rounded-lg text-white">
              <PresentationChartLineIcon className="h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total for all goals</p>
              <h2 className="text-2xl text-white font-bold">$3,357.68</h2>
            </div>
          </div>
        </div>
        {/** credit card */}
        <div className="max-w-[400px] px-4 py-2 rounded-2xl w-full bg-black">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Name Card</p>
              <h2 className="text-xl text-gray-200">Arindam Roy</h2>
            </div>
            <Image
              src="/visa-logo2.png"
              objectFit="contain"
              width={100}
              height={100}
              alt="visa"
            />
          </div>
          <div className="text-white text-xl">**** **** **** 1236</div>
          <div className="flex items-center space-x-10 py-4 ">
            <div>
              <p className="text-gray-500">Exp Date</p>
              <p className="text-gray-500">12/27</p>
            </div>
            <div>
              <p className="text-gray-500">CVV</p>
              <p className="text-gray-500">124</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex space-x-4 my-4">
            <div className="bg-yellow-400 p-5 rounded-lg text-white">
              <PresentationChartLineIcon className="h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Expenses</p>
              <h2 className="text-2xl text-white font-bold">$4000.23</h2>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="bg-red-400 p-5 rounded-lg text-white">
              <PresentationChartLineIcon className="h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Weekly Stats</p>
              <h2 className="text-2xl text-white font-bold">$1,357.20</h2>
            </div>
          </div>
        </div>
      </div>
      {/** tab section */}
      <div className="w-full flex items-center justify-between border-t border-b h-20 border-gray-600">
        <h2 className="text-2xl font-bold text-gray-300 uppercase">
          Active Summary
        </h2>
        <h2 className="text-2xl font-bold text-gray-500 uppercase">
          Spending Summary
        </h2>
        <h2 className="text-2xl font-bold text-gray-500 uppercase">
          Income Summary
        </h2>
      </div>
    </div>
  );
};

export default Main;
