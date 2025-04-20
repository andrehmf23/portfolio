import React, { useEffect, useState } from "react";

function Skills() {

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/data/skills.json") // Carrega o JSON local da pasta public
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error("Erro ao carregar JSON:", err));
  }, []);

  return (
    <>
    <div class="flex flex-col p-5 items-center justify-center">
        <span class="text-3xl font-bold">My Skills</span>
        <div class="flex flex-wrap gap-4 mt-5 justify-center">
            
            {/* ----------------- Skill Example ----------------- */}
            {skills.map((skill) => (
              <div class="custom-box">
                  <img class="h-[60%] w-[60%] m-1" src={`icons-skill/${skill.code}.png`} alt="" />
                  <span class="font-bold text-2xl sm:text-xl uppercase">{skill.name}</span>
                  <span class="font-bold text-1xl sm:text-xl">{skill.time}</span>
              </div>
            ))}
            
            {/* ----------------- Skill End ---------------- */}

        </div>
    </div>
    </>
  );
}

export default Skills;