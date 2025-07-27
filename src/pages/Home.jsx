import Header from "@/components/Header";
import About from "@/components/About";
import Intro from "@/components/Intro";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { use, useEffect, useState } from "react";
import Loading from "./Loading";

export default function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        let userLang = navigator.language || navigator.userLanguage;
        userLang = userLang == "pt-BR" ? "pt-BR" : "en-US";

        fetch("/data/languages.json")
            .then((res) => res.json())
            .then((json) => {
                console.log("Dados carregados:", json[userLang]);
                setData(json[userLang]);
            })
            .catch((err) => console.error("Erro ao carregar JSON:", err));
    }, []);

    if (!data) return <Loading />;

    return (
        <div className="relative">
            <div className="filter"></div>
            <div className="relative">
                <Header data={data["shortcut"]} />
                <Intro data={data["title"]} />
                <About data={data["about"]} />
                <Skills data={data["skills"]} />
                <Portfolio data={data["projects"]} />
                <Experience data={data["experience"]} />
                <Footer data={data["title"]} />
            </div>
        </div>
    );
}
