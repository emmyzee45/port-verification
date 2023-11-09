import ReactPaginate from "react-paginate";
import { FC, useState } from "react";
import { headers } from "./lib/headers";
import { proxyDetails } from "./lib/proxyDetails";

const History: FC = () => {
  function resetFilters(): void {
    throw new Error("Function not implemented.");
  }

  function setSort(sortBy: string): void {
    throw new Error("Function not implemented.");
  }

  const perPage = 20;
  const pageCount = Math.ceil(proxyDetails.length / perPage);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col">
        <div className="table-responsive w-3/4 px-5 mt-4 bg-gray-200 py-2">
          <table className="items table table-hover table-sm" id="socks">
            <thead className="flex space-x-10">
              {headers.map(({ label, sortBy }) => (
                <th key={sortBy} className="flex-1">
                  <a
                    className="sort-link"
                    href="#"
                    // onClick={() => setSort(sortBy)}
                  >
                    {label}
                  </a>
                </th>
              ))}
            </thead>
          </table>
        </div>

        {/* <tbody id="main-list">
            {proxyDetails.map((proxy) => (
              <tr
                key={proxy.id}
                className={`proxy-row ${
                  activeProxy === proxy.id ? "active" : ""
                }`}
                onClick={() => setActiveProxy(proxy.id)}
              >
                {Object.keys(proxy).map((key) => (
                  <td key={key}>{renderProxyDetail(proxy, key)}</td>
                ))}
              </tr>
            ))}
          </tbody> */}
        <div className="filter mt-2 mb-2 ml-auto">
          <div className="filter">
            <div className="col-filter">
              <div className="form-check">
                <input
                  className="form-check-input"
                  id="excludeUsedFilter"
                  type="checkbox"
                  value=""
                />
                <label className="form-check-label" htmlFor="excludeUsedFilter">
                  Exclude used proxies
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pagination-container mt-4 flex justify-end">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination flex"}
          previousLinkClassName={
            "pagination-link mr-2 p-2 active bg-blue-500 text-white"
          }
          nextLinkClassName={"pagination-link ml-2 p-2 hover:bg-gray-200"}
          activeClassName={"active bg-blue-500 px-2 text-white"}
        />
      </div>
    </div>
  );
};

export default History;
