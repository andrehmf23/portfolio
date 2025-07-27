function Portfolio({ data }) {

  const handleClick = () => {
    window.open("https://github.com/andrehmf23", "_blank"); // Abre em nova aba
  };

  return (
    <>
      <div className="flex flex-col p-5 content-center items-center justify-center">
        <span
          id="portfolio"
          className="text-3xl font-bold"
          style={{ scrollMarginTop: "120px" }}
        >
          {data.title}
        </span>

        <div className="flex flex-wrap gap-5 mt-5 justify-center items-center">
          {data.data.map((content, index) => (
            <a
              key={index} // Adicionando key única para cada item
              href={`${content.href}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-80 w-80 object-cover"
                src={`/imgs-portfolio/${content.img}.png`}
                alt={content.img || "Imagem do portfólio"} // Adicionando alt mais descritivo
              />
            </a>
          ))}
        </div>
        <button className="mt-10 custom-button" onClick={handleClick}>
          View More
        </button>
      </div>
    </>
  );
}

export default Portfolio;
