function Intro({ data }) {
  const handleClick = () => {
    window.open("https://www.linkedin.com/in/andrehmf23/", "_blank"); // Abre em nova aba
  };

  return (
    <>
      {/* ----------------- Intro ----------------- */}
      <div className="flex flex-col sm:flex-row items-center justify-center pt-30">
        <div className="flex items-center">
          <div className="p-4">
            <span className="text-2xl sm:text-5xl font-extralight">
              {data.greeting} <span className="custom-hover-text text-3xl sm:text-5xl">André HMF</span> <br />{data.job}
            </span>
            <br />
            <button className="mt-3 custom-button" onClick={handleClick}>{data.contact}</button>
          </div>
          <img className="h-50 sm:h-120 rounded-full shadow-amber-50 bg-gray-950/50" src="Im.png" alt="André HMF"/>
        </div>
        <div className="justify-center items-center flex flex-row sm:flex-col gap-5">
          <hr className="sm:h-40 sm:w-0.5 h-0.5 w-40" />

          <a href="https://github.com/andrehmf23" target="_blank" rel="noopener noreferrer">
            <svg className="h-8 custom-svg-1" viewBox="0 0 20 20" version="1.1" aria-label="GitHub">
              <g id="SVGRepo_iconCarrier">
                <title>GitHub</title>
                <g>
                  <path d="M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492v-1.314c0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051-.799-.227-1.655-.341-2.505-.345-.85.004-1.705.118-2.503.345-1.911-1.326-2.75-1.051-2.75-1.051-.543 1.412-.2 2.455-.098 2.714-.64.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493-3.974-1.355-6.839-5.199-6.839-9.729C0 4.59 4.478 0 10 0z"></path>
                </g>
              </g>
            </svg>
          </a>

          <a href="https://x.com/andrehmf23" target="_blank" rel="noopener noreferrer">
            <svg className="h-8 custom-svg-1" viewBox="0 -2 20 20" version="1.1" aria-label="Twitter">
              <g id="SVGRepo_iconCarrier">
                <title>Twitter</title>
                <g id="Page-1">
                  <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -7521.000000)">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705"></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </a>

          <a href="https://www.linkedin.com/in/andrehmf23/" target="_blank" rel="noopener noreferrer">
            <svg className="h-8 custom-svg-1" viewBox="0 0 20 20" version="1.1" aria-label="LinkedIn">
              <g id="SVGRepo_iconCarrier">
                <title>LinkedIn</title>
                <g id="Page-1">
                  <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -7479.000000)">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z"></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </a>
        </div>
      </div>
      {/* ----------------- Intro End ----------------- */}
    </>
  );
}

export default Intro;
