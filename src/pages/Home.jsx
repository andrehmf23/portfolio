import Header from "@/components/Header";
import About from "@/components/About";
import Intro from "@/components/Intro";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <div className="relative">
                <div className="filter"></div> {/* Se precisar do filtro, adicione um valor */}
                <div className="relative">
                    <Header />
                    <Intro />
                    <About />
                    <Skills />
                    <Portfolio />
                    <Experience />
                    <Footer />
                </div>
            </div>
        </>
    );
}
