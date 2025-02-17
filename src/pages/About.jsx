import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
    return (
    <>
        <Header />
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
        <div class="ml-20 mr-20 mt-10 content-center items-center justify-center">
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
        <div class="flex flex-col ml-10 mr-10 mt-10 content-center items-center justify-center">
            <span class="text-3xl font-bold">My Skills</span>

            <div class="grid grid-cols-4 gap-4 mt-4 justify-items-center">
                <div class="flex flex-col custom-skill-box p-4 h-50 w-50 rounded-2xl justify-center items-center">
                    <img class="h-20 w-20 m-4" src="src/assets/icons-skill/c.png" alt="" />
                    <span class="font-bold text-xl">HTML</span>
                    <span class="font-bold text-xl">(0 anos)</span>
                </div>
            </div>
        </div>
        <Footer />
    </>
    )
}