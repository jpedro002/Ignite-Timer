import { Play } from "phosphor-react";

export default function Home() {
  return (
    <div className="flex-1 flex justify-center items-center h-full ">
      <form action="" className="flex flex-col items-center gap">
        <div className="w-full flex flex-wrap gap-2 items-center justify-center font-bold text-lg mb-16">
          <label htmlFor="task">vou trabalhar em</label>
          <input type="text" id="task" />

          <label htmlFor="minutesAmount">durante</label>
          <input type="number" id="minutesAmount" />
          <span>minutos.</span>
        </div>

        <div className="text-[10rem] space-x-2 text-gray-100  ">
          <span className="bg-[#7C7C8A] rounded-lg">0</span>
          <span className="bg-[#7C7C8A] rounded-lg">0</span>
          <span>:</span>
          <span className="bg-[#7C7C8A] rounded-lg">0</span>
          <span className="bg-[#767680] rounded-lg">0</span>
        </div>
        <button type="submit" >
          <Play size={24} />
          começar
        </button>
      </form>
    </div>
  );
}
