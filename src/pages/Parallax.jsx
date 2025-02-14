import { useEffect, useState } from "react";

export default function ParticlesScroll() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[200vh] bg-black overflow-hidden">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `translateY(${scrollY * -0.3}px)`,
            transition: "transform 0.1s linear",
          }}
        ></div>
      ))}
      <div className="relative z-10 flex items-center justify-center h-screen text-white text-5xl font-bold">
        Fragmentos Subindo 🚀
        <h1>aaaaaaaaaaaa</h1>
        <h1>aaaaaaaaaaaa</h1>
        <h1>aaaaaaaaaaaa</h1>
        <h1>aaaaaaaaaaaa</h1>
        <h1>aaaaaaaaaaaa</h1>
        <h1>aaaaaaaaaaaa</h1>
        <h1>aaaaaaaaaaaa</h1>
        <h1>aaaaaaaaaaaa</h1>
        <h1>aaaaaaaaaaaa</h1>
        <h1>aaaaaaaaaaaa</h1>
        <h1>aaaaaaaaaaaa</h1>
        <h1>aaaaaaaaaaaa</h1>
        <h1>aaaaaaaaaaaa</h1>
        <h1>aaaaaaaaaaaa</h1>
        <h1>aaaaaaaaaaaa</h1>
        <h1>aaaaaaaaaaaa</h1>
        <h1>aaaaaaaaaaaa</h1>
        <h1>aaaaaaaaaaaa</h1>
        <h1>aaaaaaaaaaaa  </h1>
      </div>
    </div>
  );
}
