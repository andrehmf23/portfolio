function Experience({ data }) {
  return (
    <div className="flex flex-col p-5 items-center justify-center">
      <span className="text-3xl font-bold mb-5">{data.title}</span>
      {data.data.map((content, index) => (
        <div key={index} className="flex mt-4">
          {/* ----------------- Experience Example ----------------- */}
          <div className="hidden flex-row items-start justify-center sm:flex">
            <div className="custom-date">
              <span className="text-sm font-bold">{content.date}</span>
            </div>
          </div>
          <div className="flex flex-col ml-5 mt-2.5 items-center justify-center">
            <div className="flex flex-row items-center justify-center">
              <hr className="hidden sm:block h-5 w-5" />
              <span className="custom-button sm:hidden">{content.date}</span>
            </div>
            <hr className="flex-1 mt-5 w-0.75" />
          </div>
          <div className="flex flex-col ml-4">
            <span className="text-2xl font-bold mb-1">{content.title}</span>
            <span className="text-[20px] mb-1">
              {content.subtitle} ({content.type})
            </span>
            <span>{content.description}</span>
          </div>
          {/* ----------------- Experience End ----------------- */}
        </div>
      ))}
    </div>
  );
}

export default Experience;
