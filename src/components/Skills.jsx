function Skills({ data }) {

  return (
    <div className="flex flex-col p-5 items-center justify-center">
      <span className="text-3xl font-bold">{data.title}</span>
      <div className="flex flex-wrap gap-4 mt-5 justify-center">
        {/* ----------------- Skill Example ----------------- */}
        {data.data.map((skill, index) => (
          <div key={index} className="custom-box">
            <img
              className="h-[60%] w-[60%] m-1"
              src={`icons-skill/${skill}.png`}
              alt={skill}
            />
            <span className="font-bold text-2xl sm:text-xl uppercase">{skill}</span>
          </div>
        ))}
        {/* ----------------- Skill End ---------------- */}
      </div>
    </div>
  );
}

export default Skills;
