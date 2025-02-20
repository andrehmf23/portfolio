
function Footer() {

    return (
        <>
        <div class="w-full h-40 flex justify-center items-center bg-gradient-to-b to-gray-950"/>
        <div class="w-full flex flex-col justify-center items-center bg-gray-950 p-5 pb-15">
            <span id="contact" class="text-3xl font-bold text-white" style={{ scrollMarginTop: "120px" }}>Contact me</span>
            
            {/* ----------------- Par ----------------- */}
            <div class="grid grid-cols-2 gap-9 mt-10">
                <div class="flex w-75 border-2 p-3 rounded-lg border-cyan-400 text-center items-center justify-center gap-3">
                <svg class="h-7" viewBox="0 -2.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#26C6DA"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>email [#1573]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -922.000000)" fill="#26C6DA"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M262,764.291 L254,771.318 L246,764.281 L246,764 L262,764 L262,764.291 Z M246,775 L246,766.945 L254,773.98 L262,766.953 L262,775 L246,775 Z M244,777 L264,777 L264,762 L244,762 L244,777 Z" id="email-[#1573]"> </path> </g> </g> </g> </g></svg>
                <span class="text-cyan-400">andrehmf23@gmail.com</span> 
                </div>
                <div class="flex w-75 border-2 p-3 rounded-lg border-cyan-400 text-center items-center justify-center gap-3">
                    <svg class="h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#26C6DA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#26C6DA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                <span class="text-cyan-400">Ribeirão Preto - SP</span> 
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;