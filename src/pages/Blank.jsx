import React from "react";

function Blank() {
  return (
    <>
      <div className="bg-[#29292c] columns-3 gap-4">
        <p className="bg-amber-300">Teste</p>
        <img src="/OIP.jpg" alt="paisagem" className="aspect-[3/2]" />
        <button className="btn btn-primary">Eai</button>
      </div>

      <div className="box-border size-32 border-4 p-4"></div>

      <div className="p-4">
        <div>
          <div className="my-4">Well, let me tell you something, ...</div>
        </div>
        <div>
          <div className="my-4">Sure, go ahead, laugh if you want...</div>
        </div>
      </div>

      <div className="flex">
        <div className="z-40 border-2 p-3 rounded-full bg-blue-500">05</div>
        <div className="-ml-3 z-30 border-2 p-3 rounded-full bg-green-500">04</div>
        <div className="-ml-3 z-20 border-2 p-3 rounded-full bg-yellow-500">03</div>
        <div className="-ml-3 z-10 border-2 p-3 rounded-full bg-orange-500">02</div>
        <div className="-ml-3 z-0 border-2 p-3 rounded-full bg-red-500">01</div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-amber-500">01</div>
        <div className="bg-amber-500">05</div>
        <div className="col-span-3 grid grid-cols-subgrid gap-4">
          <div className="col-start-2 bg-amber-500">06</div>
          <p>bdihdisg</p>
        </div>
      </div>

      <label className="peer cursor-pointer flex items-center gap-2 mt-2">
        <input type="checkbox" className="hidden peer" />
        <span className="text-gray-700">Marque para mostrar</span>
      </label>

      <button className="hidden transition-all peer-checked:block bg-blue-500 text-white px-4 py-2 rounded">
        Apareço quando marcado
      </button>
    </>
  );
}

export default Blank;
