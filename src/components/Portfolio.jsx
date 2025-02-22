import React, { useEffect, useState } from "react";

function Portfolio() {

  const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch("/data/portfolio.json") // Carrega o JSON local da pasta public
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.error("Erro ao carregar JSON:", err));
    }, []);

  return (
    <>
    <div class="flex flex-col ml-10 mr-10 mt-10 content-center items-center justify-center">
        <span id="portfolio" class="text-3xl font-bold" style={{ scrollMarginTop: "120px" }}>Portfolio</span>

        <div class="flex flex-wrap gap-5 mt-5 justify-items-center">
          {data.map((content) => (
            <img class="h-80 w-80 object-cover" src={`/imgs-portfolio/${content.img}.png`} alt="" />
          ))}
        </div>

        <button class="mt-10 custom-button">View More</button>

    </div>
    </>
  );
}

export default Portfolio;