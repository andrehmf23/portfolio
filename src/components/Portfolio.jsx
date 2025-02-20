
function Portfolio() {
  return (
    <>
    <div class="flex flex-col ml-10 mr-10 mt-10 content-center items-center justify-center">
        <span id="portfolio" class="text-3xl font-bold" style={{ scrollMarginTop: "120px" }}>Portfolio</span>

        <div class="grid grid-cols-4 gap-4 mt-5 justify-items-center">

            {/* ----------------- Portfolio Example ----------------- */}
            <img class="h-20 w-20" src="" alt="" />
            <img class="h-20 w-20" src="" alt="" />
            {/* ----------------- Portfolio End ----------------- */}

        </div>

        <button class="mt-10 custom-button">View More</button>

    </div>
    </>
  );
}

export default Portfolio;