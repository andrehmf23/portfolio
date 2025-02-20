
function Skill({ skill }) {
  return (
    <>

    <div class="flex flex-col ml-10 mr-10 mt-10 items-center justify-center">
        <span class="text-3xl font-bold">My Skills</span>
        <div class="grid grid-cols-4 gap-4 mt-5 justify-items-center">
            
            {/* ----------------- Skill Example ----------------- */}
            <div class="flex flex-col custom-skill-box p-4 h-50 w-50 rounded-2xl justify-center items-center">
                <img class="h-20 w-20 m-4" src="icons-skill/c.png" alt="" />
                <span class="font-bold text-xl">HTML</span>
                <span class="font-bold text-xl">(0 anos)</span>
            </div>
            {/* ----------------- Skill End ---------------- */}

        </div>
    </div>
    </>
  );
}

export default Skill;