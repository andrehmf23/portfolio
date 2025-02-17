

function Blank(){
    return (<>
    <div class="bg-[#29292c] columns-3 gap-4">
        <p class="bg-amber-300">Teste</p>
        <img src="/OIP.jpg" alt="paisagem" class="aspect-3/2 ..."/>
        <button class="btn btn-primary">Eai</button>
    </div>
    <div class="box-border size-32 border-4 p-4 ..."></div>
    <div class="p-4">
  <div>
    <div class="my-4 ...">Well, let me tell you something, ...</div>
  </div>
  <div>
    <div class="my-4 ...">Sure, go ahead, laugh if you want...</div>
  </div>
</div>
<div class="flex">
    <div class="z-40 border-2 p-3 rounded-full bg-blue-500">05</div>
    <div class="-ml-3 z-30 border-2 p-3 rounded-full bg-green-500">04</div>
    <div class="-ml-3 z-20 border-2 p-3 rounded-full bg-yellow-500">03</div>
    <div class="-ml-3 z-10 border-2 p-3 rounded-full bg-orange-500">02</div>
    <div class="-ml-3 z-0 border-2 p-3 rounded-full bg-red-500">01</div>
</div>
<div class="grid grid-cols-4 gap-4">
  <div class="bg-amber-500">01</div>
  <div class="bg-amber-500">05</div>
  <div class="col-span-3 grid grid-cols-subgrid gap-4">
    <div class="col-start-2 bg-amber-500">06</div>
    <p class="">bdihdisg</p>
  </div>
</div>

<label class="peer cursor-pointer flex items-center gap-2 mt-2">
  <input type="checkbox" class="hidden peer" />
  <span class="text-gray-700">Marque para mostrar</span>
</label>
<button class="hidden transition-all not-peer-has-checked:opacity-0 peer-has-checked:block bg-blue-500 text-white px-4 py-2 rounded">
  Apareço quando marcado
</button>

    </>)
}

export default Blank;