import {
  BellIcon,
  ChartSquareBarIcon,
  DownloadIcon,
  SearchIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

const Widgets: React.FC = () => {
  return (
    <div className="max-w-[500px] w-full h-screen bg-black">
      <div className="flex justify-between items-center p-4">
        <div className="text-white">
          <h2 className="text-2xl font-bold">Crypto Profile</h2>
          <p className="text-sm">increase your profit</p>
        </div>
        <div className="text-white flex space-x-4">
          <div className="h-10 w-10 grid place-items-center bg-gray-500 rounded-full">
            <SearchIcon className="h-6" />
          </div>
          <div className="h-10 w-10 grid place-items-center bg-gray-500 rounded-full">
            <BellIcon className="h-6" />
          </div>
        </div>
      </div>
      {/** card  */}

      <div className="p-10">
        <div className="bg-[#1E1F23] p-4 rounded-xl flex justify-between">
          <div>
            <h2 className="text-xl text-white font-bold">My Portfolio</h2>
            <h2 className="text-3xl py-2 text-white font-bold">$34,000</h2>
          </div>
          <div className="flex flex-col">
            <div className="border w-8 h-8 grid place-items-center rounded-xl">
              <ChartSquareBarIcon className="h-6 text-white" />
            </div>
            <p className="text-white py-4">^2.03%</p>
          </div>
        </div>
        <div className="flex  w-full justify-around">
          <div className="bg-white flex  px-4 py-2 items-center space-x-2 rounded-lg  -mt-5 text-black">
            <DownloadIcon className="h-6" />
            Deposit
          </div>
          <div className="bg-white flex items-center text-black p-4 space-x-2 rounded-lg -mt-5">
            <UploadIcon className="h-6" />
            Withdraw
          </div>
        </div>
      </div>

      {/** assets */}
      <div className="py-20 px-10">
        <div className="text-white flex justify-between font-bold">
          <h2>Favorites</h2>
          <p>See all</p>
        </div>
        <div className="py-5  flex space-x-4">
          <div className="w-1/2  p-5 bg-[#1F1F23] rounded-xl">
            <div className="flex items-center space-x-4">
              <Image
                src="/btc.jpeg"
                alt="btc"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="text-white">
                <h2>BTC</h2>
                <p className="text-gray-600">Bitcoin</p>
              </div>
            </div>
            <div className="flex justify-between py-4">
              <p className="text-white">$20.78</p>
              <p className="text-green-500">^0.25%</p>
            </div>
          </div>
          <div className="w-1/2  p-5 bg-[#1F1F23] rounded-xl">
            <div className="flex items-center space-x-4">
              <Image
                src="/eth.jpeg"
                alt="btc"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="text-white">
                <h2>ETH</h2>
                <p className="text-gray-600">Ethreum</p>
              </div>
            </div>
            <div className="flex justify-between py-4">
              <p className="text-white">$20.78</p>
              <p className="text-green-500">^0.25%</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-white">Live Prices</h2>
          <div className="py-4 flex  items-center justify-between">
            <div className="flex space-x-4 items-center">
              <Image
                src="/binance.jpeg"
                width={60}
                height={60}
                alt=""
                className="rounded-full"
              />
              <div>
                <h2 className="text-white">Binance</h2>
                <p className="text-gray-700">BNB</p>
              </div>
            </div>
            <div>
              <h2 className="text-white">$18.254</h2>
              <p className="text-green-500">^0.15%</p>
            </div>
          </div>
          <div className="py-4 flex  items-center justify-between">
            <div className="flex space-x-4 items-center">
              <Image
                src="/binance.jpeg"
                width={60}
                height={60}
                alt=""
                className="rounded-full"
              />
              <div>
                <h2 className="text-white">Binance</h2>
                <p className="text-gray-700">BNB</p>
              </div>
            </div>
            <div>
              <h2 className="text-white">$18.254</h2>
              <p className="text-green-500">^0.15%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widgets;
