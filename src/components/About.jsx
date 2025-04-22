function About() {
  return (
    <>
      {/* ----------------- About ----------------- */}
      <div className="p-5 content-center items-center justify-center">
        <span id="about" className="text-3xl font-bold" style={{ scrollMarginTop: "120px" }}>About me</span>
        <div className="items-center justify-center mt-5">
          <hr className="inline-block mb-1 h-[2px] w-8" />
          <span className="ml-2">
            Estudante em constante aprimoramento e aspirante a Desenvolvedor Full-Stack, 
            apaixonado por transformar ideias em realidade através de software, jogos e websites. <br />
            Minha experiência abrange diversas linguagens e tecnologias, como C, C++, HTML, Javascript, 
            CSS, Java, React e SQL (Oracle e MySQL). <br />
            Exploro continuamente novas áreas e desafios, como Python, e me dedico ao estudo de Inteligência 
            Artificial e Machine Learning, mantendo-me aberto a novas tecnologias e oportunidades que surgem no 
            mundo do desenvolvimento.
          </span>
        </div>
      </div>
      {/* ----------------- About End ----------------- */}
    </>
  );
}

export default About;
