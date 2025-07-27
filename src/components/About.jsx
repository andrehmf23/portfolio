function About({ data }) {
  return (
    <>
      {/* ----------------- About ----------------- */}
      <div className="p-5 content-center items-center justify-center">
        <span id="about" className="text-3xl font-bold" style={{ scrollMarginTop: "120px" }}>{data.title}</span>
        <div className="items-center justify-center mt-5">
          <hr className="inline-block mb-1 h-[2px] w-8" />
          <span className="ml-2" dangerouslySetInnerHTML={{ __html: data.description }} />
        </div>
      </div>
      {/* ----------------- About End ----------------- */}
    </>
  );
}

export default About;
