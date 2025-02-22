import React, { useEffect, useState } from "react";

function Experience() {

    const [data, setData] = useState([]);
        
        useEffect(() => {
            fetch("/data/experience.json") // Carrega o JSON local da pasta public
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.error("Erro ao carregar JSON:", err));
        }, []);

  return (
    <>
    <div class="flex flex-col ml-10 mr-10 mt-10 items-center justify-center">
        <span class="text-3xl font-bold mb-5">Experience</span>
        <div class="flex">
            
            {/* ----------------- Experience Example ----------------- */}

            {data.map((content) => (
            <>
            <div class="flex flex-row items-start justify-center">
                <div className="custom-date">
                    <span className="text-sm font-bold">{content.date}</span>
                </div>
            </div>
            <div class="flex flex-col ml-5 mt-2.5 items-center justify-center">
                <hr className="h-7 w-5"></hr>
                <hr className="mt-5 h-full w-[4px]"></hr>
            </div>
            <div class="flex flex-col ml-4">
                    <span class="text-2xl font-bold mb-1">{content.title}</span>
                    <span class="text-[20px] mb-1">{content.subtitle}</span>
                    <span>
                        {content.description}
                    </span>
            </div>
            </>
            ))}
            {/* ----------------- Experience End ----------------- */}

        </div>
    </div>
    </>
  );
}

export default Experience;