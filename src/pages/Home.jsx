import Header from "@/components/Header";
import About from "@/components/About";
import Intro from "@/components/Intro";
import Skill from "@/components/Skill";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
    return (
    <>
        <div class="relative min-h-screen">
            <div class="absolute inset-0 dark:bg-gray-950/95 h-full"></div>
            <div class="relative z-10 h-auto">
                <Header />
                <Intro />
                <About />
                <Skill />
                <Portfolio />
                <Experience />
                <Footer />
            </div>
        </div>
    </>
    )
}