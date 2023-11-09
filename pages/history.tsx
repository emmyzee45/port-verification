import ReactPaginate from "react-paginate";
import { FC, useState } from "react";
import { headers } from "./lib/headers";
import { proxyDetails } from "./lib/proxyDetails";


const Payments: FC = () => {
  const [activeProxy, setActiveProxy] = useState<string | null>(null);
  const [activeCountry, setActiveCountry] = useState<string>("USA");
  const [activeState, setActiveState] = useState<string>("");

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

  const paginatedData = proxyDetails.slice(
    currentPage * perPage,
    (currentPage + 1) * perPage
  );

  return (
    <div className="container mx-auto p-4">
      <div className="table-responsive mt-4">
        <table className="items table table-hover table-sm" id="socks">
          <thead className="hidden lg:table-header-group">
            {headers.map(({ label, sortBy }) => (
              <th key={sortBy}>
                <a
                  className="sort-link"
                  href="#"
                  // onClick={() => setSort(sortBy)}
                >
                  {label}
                </a>
                {["IP", "DOMAIN", "STATE", "CITY", "ISP", "ZIP"].includes(
                  label
                ) && (
                  <input
                    type="text"
                    className="form-control"
                    placeholder={`Enter ${label}`}
                  />
                )}
              </th>
            ))}
          </thead>
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
        </table>
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

export default Payments;
