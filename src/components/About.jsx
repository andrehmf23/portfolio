
function About() {
  return (
    <>
    <div class="flex gap-4 ml-4 mr-4 mt-4 content-center items-center justify-center">
            <div class="p-4">
                <span class="text-3xl font-extralight">I'M <span class="custom-hover-text">André HMF</span> <br />Front-end Developer</span>
                <br /><button class="mt-3 custom-button">Contact me</button>
            </div>
            <div>
                <img src="" alt="I" />
            </div>
            <div>
                <hr class="mt-40 border-t-400 border-1 rounded-4xl border-cyan-400"></hr>
            </div>
        </div>
        <div id="about" class="ml-20 mr-20 mt-10 content-center items-center justify-center" style={{ scrollMarginTop: "120px" }}>
            <span class="text-3xl font-bold">About me </span>
            <br />
            <hr class="inline-block mb-1 border-l-50 border-1 rounded-4xl border-cyan-400"></hr>
            <span class="ml-2">Estudante em constante aprimoramento e aspirante a Desenvolvedor Full-Stack, 
                apaixonado por transformar ideias em realidade através de software, jogos e websites. <br />
                Minha experiência abrange diversas linguagens e tecnologias, como C, C++, HTML, Javascript, 
                CSS, Java, React e SQL (Oracle e MySQL). <br />
                Exploro continuamente novas áreas e desafios, como Python, e me dedico ao estudo de Inteligência 
                Artificial e Machine Learning, mantendo-me aberto a novas tecnologias e oportunidades que surgem no 
                mundo do desenvolvimento.</span>
        </div>
        </>
  );
}

export default About;