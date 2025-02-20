
function Experience() {
  return (
    <>
    <div class="flex flex-col ml-10 mr-10 mt-10 items-center justify-center">
        <span class="text-3xl font-bold mb-5">Experience</span>
        <div class="flex">
            
            {/* ----------------- Experience Example ----------------- */}
            <div class="flex flex-row items-start justify-center">
                <div className="relative inline-block items-center bg-cyan-500 text-white px-4 py-2 rounded-l-lg before:content-[''] before:absolute before:-right-2 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-0 before:border-l-[10px] before:border-l-cyan-500 before:border-y-[8px] before:border-y-transparent">
                    <span className="text-sm font-bold">2025</span>
                </div>
            </div>
            <div class="flex flex-col ml-5 mt-2.5 items-center justify-center">
                <hr class="h-7 w-5 rounded-full border-cyan-400 bg-cyan-400"></hr>
                <hr class="mt-5 h-full w-[4px] rounded-full border-cyan-400 bg-cyan-400"></hr>
            </div>
            <div class="flex flex-col ml-4">
                <span class="text-2xl font-bold mb-1">[Experience name]</span>
                <span class="text-[20px] mb-1">[Company name]</span>
                <span>
                    Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado 
                    desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro 
                    de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, 
                    permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo 
                    passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como 
                    Aldus PageMaker.
                </span>
            </div>
            {/* ----------------- Experience End ----------------- */}

        </div>
    </div>
    </>
  );
}

export default Experience;