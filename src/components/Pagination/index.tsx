import { useLocation, useNavigate } from 'react-router-dom';

type PropsPagination = {
  pageCount: number | undefined;
  total: number | undefined;
  handlePage: (currentPage: number) => void;
  currentPage: number;
};

const Pagination = (props: PropsPagination) => {
  const { pageCount, total, handlePage, currentPage } = props;

  const handlePagination = (currentPage: number) => {
    if (currentPage < 1) currentPage = 1;
    if (pageCount && currentPage > pageCount) currentPage = pageCount;
    handlePage(currentPage);
  };

  return (
    <nav className="py-4">
      <ul className="flex items-center justify-center space-x-3 h-8 text-sm">
        <li>
          <button
            onClick={() => handlePagination(currentPage - 1)}
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight hover:text-black bg-transparent rounded-lg  text-gray-400 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </button>
        </li>
        {Array.from(Array(pageCount).keys()).map((item, index) => (
          <li key={index}>
            <button
              onClick={() => handlePagination(item + 1)}
              className={`flex items-center justify-center px-4 h-8 leading-tight ${
                currentPage === item + 1
                  ? 'text-white bg-gray-700'
                  : 'text-white bg-gray-400'
              } rounded-lg hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              {item + 1}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => handlePagination(currentPage + 1)}
            className="flex items-center justify-center px-3 h-8 leading-tight hover:text-black bg-transparent  rounded-e-lg text-gray-400 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
