import React from "react";

const Header = ({
  searchTerm,
  setSearchTerm,
  sortBy,
  setSortBy,
  totalBooks,
}) => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="flex justify-between max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <svg width="32" height="33" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.4.619C2 .825 0 2.99 0 5.362v22.276c0 2.371 2 4.537 4.4 4.743 3.8.413 7.7.619 11.6.619 3.9 0 7.8-.206 11.6-.619 2.4-.206 4.4-2.372 4.4-4.744V5.363C32 2.991 30 .825 27.7.62A111.1 111.1 0 0016.013 0C12.125 0 8.25.206 4.4.619z"
                fill="url(#logo_svg__paint0_linear)"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.383 8.327a.99.99 0 00-1.09.22L16 13.912l-5.293-5.365a.99.99 0 00-1.09-.22A1.014 1.014 0 009 9.264v12.163c0 .56.448 1.014 1 1.014s1-.454 1-1.014v-9.716l4.293 4.351a.99.99 0 001.414 0L21 11.711v9.716c0 .56.448 1.014 1 1.014s1-.454 1-1.014V9.264c0-.41-.244-.78-.617-.937z"
                fill="#BE5B04"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.93 17.828l-1.926 1.987-1.926-1.987a.962.962 0 00-1.39 0 1.036 1.036 0 000 1.434l2.333 2.405v3.297c0 .56.44 1.014.983 1.014.543 0 .983-.454.983-1.014v-3.296l2.333-2.406a1.036 1.036 0 000-1.434.962.962 0 00-1.39 0z"
                fill="#BE5B04"
              ></path>
              <defs>
                <linearGradient
                  id="logo_svg__paint0_linear"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="33"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F9D860"></stop>
                  <stop offset="1" stop-color="#FB9E49"></stop>
                </linearGradient>
              </defs>
            </svg>
            <h1 className="text-3xl font-bold text-gray-900">MyBook</h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 max-w-md">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </span>
            <input
              type="text"
              placeholder="Sarlavha yoki muallif bo'yicha qidirish..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            className="px-4 py-2 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="rating">Reyting bo'yicha</option>
            <option value="title">Nomi bo'yicha</option>
            <option value="author">Muallif tomonidan</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
