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
    <div class="flex flex-col ml-10 mr-10 mt-10 items-center justify-center">
        <span class="text-3xl font-bold">My Skills</span>
        <div class="flex flex-wrap gap-6 mt-5 justify-center pl-40 pr-40">
            
            {/* ----------------- Skill Example ----------------- */}
            {skills.map((skill) => (
              <div class=" custom-box">
                  <img class="h-20 w-20 m-1" src={`icons-skill/${skill.code}.png`} alt="" />
                  <span class="font-bold text-xl">HTML</span>
                  <span class="font-bold text-xl">(0 anos)</span>
              </div>
            ))}
            
            {/* ----------------- Skill End ---------------- */}

        </div>
    </div>
    </>
  );
}

export default Skills;