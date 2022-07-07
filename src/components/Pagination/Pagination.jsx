import { assets } from '../../assets/constants';

export const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
  setCurrentPage
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const pageLength = pageNumbers.length;

  const isValidPageBackward = (_currentPage) => {
    const movePage = parseInt(_currentPage) <= 1;
    return movePage;
  };

  const isValidPageForward = (_currentPage, _pageNumber) => {
    const movePage = parseInt(_currentPage) >= _pageNumber;
    return movePage;
  };

  return (
    <div className="paginateContainer">
      {/* top */}
      <div className="top">
        <p className="paginateText">Showing</p>
        <div className="paginateSelectContainer">
          <select className="paginateSelect" name="count" id="count">
            <option value="100" className="paginateOption">
              100
            </option>
            <option value="200" className="paginateOption">
              200
            </option>
            <option value="300" className="paginateOption">
              300
            </option>
          </select>
          {/* <img src={assets.down_arrow} alt="down-arrow" /> */}
        </div>
        <p className="paginateText">out of 100</p>
      </div>

      {/* down */}
      <div className="down">
        <img
          onClick={() =>
            isValidPageBackward(currentPage)
              ? setCurrentPage(1)
              : setCurrentPage((prev) => prev - 1)
          }
          className="paginateArrowIcon"
          src={assets.left}
          alt="left-arrow"
        />
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={
              number === currentPage ? 'paginateValue active' : 'paginateValue'
            }
          >
            {number}
          </button>
        ))}
        {/* <p className="paginateValue">1</p>
        <p className="paginateValue">2</p>
        <p className="paginateValue">3</p>
        <p className="paginateValue">...</p>
        <p className="paginateValue">15</p>
        <p className="paginateValue">16</p> */}
        <img
          onClick={() =>
            isValidPageForward(currentPage, pageLength)
              ? setCurrentPage(pageLength)
              : setCurrentPage((prev) => prev + 1)
          }
          className="paginateArrowIcon"
          src={assets.right}
          alt="right-arrow"
        />
      </div>
    </div>
  );
};
