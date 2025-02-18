import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
    return (
    <>
        <Header />
        <About />
        <div class="flex flex-col ml-10 mr-10 mt-10 items-center justify-center">
            <span class="text-3xl font-bold">My Skills</span>

            <div class="grid grid-cols-4 gap-4 mt-4 justify-items-center">
                <div class="flex flex-col custom-skill-box p-4 h-50 w-50 rounded-2xl justify-center items-center">
                    <img class="h-20 w-20 m-4" src="icons-skill/c.png" alt="" />
                    <span class="font-bold text-xl">HTML</span>
                    <span class="font-bold text-xl">(0 anos)</span>
                </div>
            </div>
        </div>

        <div class="flex flex-col ml-10 mr-10 mt-10 content-center items-center justify-center">
            <span id="portfolio" class="text-3xl font-bold">Portfolio</span>

            <div class="grid grid-cols-4 gap-4 mt-4 justify-items-center">
                <img class="h-20 w-20" src="" alt="" />
                <img class="h-20 w-20" src="" alt="" />
            </div>
        </div>

        <div class="flex flex-col ml-10 mr-10 mt-10 content-center items-center justify-center">
                <span class="text-3xl font-bold">Experience</span>
            <div>

            </div>
        </div>
        <Footer />
    </>
    )
}