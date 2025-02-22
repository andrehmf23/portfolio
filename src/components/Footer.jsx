
function Footer() {

    return (
        <>
        <div class="sub-footer"/>
        <footer class="">
            <span id="contact" class="text-3xl font-bold" style={{ scrollMarginTop: "120px" }}>Contact me</span>
            
            {/* ----------------- Par ----------------- */}
            <div class="grid grid-cols-2 gap-9 mt-10">
                <div className="custom-contact">
                    <svg class="h-7 custom-svg-2" viewBox="0 -2.5 20 20" version="1.1">
                        <g id="SVGRepo_bgCarrier"></g>
                        <g id="SVGRepo_tracerCarrier"></g>
                        <g id="SVGRepo_iconCarrier"> 
                            <title>Email</title>
                            <g id="Page-1"> 
                                <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -922.000000)"> 
                                    <g id="icons" transform="translate(56.000000, 160.000000)"> 
                                        <path d="M262,764.291 L254,771.318 L246,764.281 L246,764 L262,764 L262,764.291 Z M246,775 L246,766.945 L254,773.98 L262,766.953 L262,775 L246,775 Z M244,777 L264,777 L264,762 L244,762 L244,777 Z" id="email-[#1573]"> </path> 
                                    </g> 
                                </g> 
                            </g> 
                        </g>
                    </svg>
                    <span>andrehmf23@gmail.com</span> 
                </div>

                <div className="custom-contact">
                <svg viewBox="-4 0 32 32" version="1.1" className="h-7 custom-svg-2">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <title>Location</title>
                        <defs> </defs> 
                        <g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd" sketch:type="MSPage"> 
                            <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-106.000000, -413.000000)"> 
                                <path d="M118,422 C116.343,422 115,423.343 115,425 C115,426.657 116.343,428 118,428 C119.657,428 121,426.657 121,425 C121,423.343 119.657,422 118,422 L118,422 Z M118,430 C115.239,430 113,427.762 113,425 C113,422.238 115.239,420 118,420 C120.761,420 123,422.238 123,425 C123,427.762 120.761,430 118,430 L118,430 Z M118,413 C111.373,413 106,418.373 106,425 C106,430.018 116.005,445.011 118,445 C119.964,445.011 130,429.95 130,425 C130,418.373 124.627,413 118,413 L118,413 Z" id="location" sketch:type="MSShapeGroup"> </path> 
                            </g> 
                        </g> 
                    </g>
                </svg>
                    <span>Ribeirão Preto - SP</span>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;