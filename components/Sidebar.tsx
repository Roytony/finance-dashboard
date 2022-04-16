import {
  AdjustmentsIcon,
  ChartPieIcon,
  ChartSquareBarIcon,
  ChatIcon,
  PlusSmIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";

const Sidebar: React.FC = () => {
  return (
    <aside className="max-w-[100px] w-full justify-between h-screen bg-black flex flex-col items-center py-4">
      {/** logo */}
      <div>
        <div className="w-16 h-16 grid place-items-center font-bold rounded-full bg-indigo-600 text-white">
          Fn
        </div>
        <nav className="my-8 space-y-4">
          <div className="cursor-pointer p-4  rounded-full group hover:bg-slate-200">
            <ViewGridIcon className="text-white h-8 group-hover:text-black" />
          </div>
          <div className="cursor-pointer p-4 rounded-full group hover:bg-slate-200">
            <ChartPieIcon className="text-white h-8 group-hover:text-black" />
          </div>
          <div className="cursor-pointer p-4 rounded-full group hover:bg-slate-200">
            <ChartSquareBarIcon className="text-white h-8 group-hover:text-black" />
          </div>
          <div className="cursor-pointer p-4 rounded-full group hover:bg-slate-200">
            <ChatIcon className="text-white h-8 group-hover:text-black" />
          </div>
          <div className="cursor-pointer p-4 rounded-full group hover:bg-slate-200">
            <AdjustmentsIcon className="text-white h-8 group-hover:text-black" />
          </div>
        </nav>
      </div>
      <button className="bg-indigo-600 hover:rounded-full transition duration-100 ease-out p-4 rounded-md">
        <PlusSmIcon className="text-white h-8" />
      </button>
    </aside>
  );
};

export default Sidebar;
