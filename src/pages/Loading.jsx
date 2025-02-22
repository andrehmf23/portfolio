
export default function Loading() {
    return (
        <>
            <div className="filter"></div>
            <div className="flex min-h-screen justify-center items-center">
                <h1 className="relative text-6xl font-bold text-black dark:text-cyan-400">
                    Loading
                    <span className="dot-anim">.</span>
                    <span className="dot-anim">.</span>
                    <span className="dot-anim">.</span>
                </h1>
            </div>
        </>
    )
}