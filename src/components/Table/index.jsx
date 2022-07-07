import { useContext, useState } from 'react';
import { assets } from '../../assets/constants';
import { AuthContext } from '../../context/AuthContext';
import { DetailModal, FilterModal } from '../Modal';
import { Pagination } from '../Pagination/Pagination';
import { TableBodyRow } from '../TableBoyRow';

export const Table = () => {
  // user data
  const { user: users, isFetching } = useContext(AuthContext);

  // modal visiblity
  const [isFilterModal, setIsFilterModal] = useState(false);
  const [isDetailModal, setIsDetailModal] = useState(false);

  // pagination
  const [posts] = useState(users);
  // const [loading, setLoading] = useState(isFetching);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (isFetching) return <h3>loading data...</h3>;

  return (
    <>
      <div className="overviewTableContainer">
        <table className="table">
          {/* header */}
          <thead className="tableHeaderBox">
            {/* filter modal */}
            {isFilterModal && <FilterModal />}

            {/* 1 */}
            <div
              onClick={() => setIsFilterModal(!isFilterModal)}
              className="tableTitleBox row-col-1"
            >
              <p className="tableText">organization</p>
              <img className="filterIcon" src={assets.filter} alt="filter" />

              {/* filter modal */}
            </div>

            {/* 1 */}
            <div
              onClick={() => setIsFilterModal(!isFilterModal)}
              className="tableTitleBox row-col-2"
            >
              <p className="tableText">Username</p>
              <img className="filterIcon" src={assets.filter} alt="filter" />
            </div>

            {/* 1 */}
            <div
              onClick={() => setIsFilterModal(!isFilterModal)}
              className="tableTitleBox row-col-3 addSpace2"
            >
              <p className="tableText">Email</p>
              <img className="filterIcon" src={assets.filter} alt="filter" />
            </div>

            {/* 1 */}
            <div
              onClick={() => setIsFilterModal(!isFilterModal)}
              className="tableTitleBox row-col-4"
            >
              <p className="tableText">Phone number</p>
              <img className="filterIcon" src={assets.filter} alt="filter" />
            </div>

            {/* 1 */}
            <div
              onClick={() => setIsFilterModal(!isFilterModal)}
              className="tableTitleBox row-col-5"
            >
              <p className="tableText">Date joined</p>
              <img className="filterIcon" src={assets.filter} alt="filter" />
            </div>

            {/* 1 */}
            <div
              onClick={() => setIsFilterModal(!isFilterModal)}
              className="tableTitleBox row-col-6"
            >
              <p className="tableText">Status</p>
              <img className="filterIcon" src={assets.filter} alt="filter" />
            </div>

            {/* 1 */}
            <div
              onClick={() => setIsFilterModal(!isFilterModal)}
              className="tableTitleBox row-col-7"
            >
              <img className="hideImg" src={assets.dot} alt="filter" />
            </div>
          </thead>

          {/* body */}
          <tbody>
            {/* row */}
            <div className="tableBodyBox">
              {/* 1 */}
              <button className="tableTitleBox row-col-1">
                <p className="tableMsg">Lendsqr</p>
                <img className="hideImg" src={assets.filter} alt="filter" />
              </button>

              {/* 2 */}
              <button className="tableTitleBox row-col-2">
                <p className="tableMsg">Adedeji</p>
                <img className="hideImg" src={assets.filter} alt="filter" />
              </button>

              {/* 1 */}
              <button className="tableTitleBox row-col-3 addSpace2">
                <p className="tableMsg">adedeji@lendsqr.com</p>
                <img className="hideImg" src={assets.filter} alt="filter" />
              </button>

              {/* 1 */}
              <button className="tableTitleBox row-col-4">
                <p className="tableMsg">08078903721</p>
                <img className="hideImg" src={assets.filter} alt="filter" />
              </button>

              {/* 1 */}
              <button className="tableTitleBox row-col-5">
                <p className="tableMsg">May 15, 2020 10:00 AM</p>
                <img className="hideImg" src={assets.filter} alt="filter" />
              </button>

              {/* 1 */}
              <button className="tableTitleBox row-col-6 tableStatus blacklisted">
                <p className="tableMsg">Blacklisted</p>
                {/* <img className="hideImg" src={assets.filter} alt="filter" /> */}
              </button>

              {/* 1 */}
              <button
                onClick={() => setIsDetailModal(!isDetailModal)}
                className="tableTitleBox row-col-7 tableTitlelastItem"
              >
                <img src={assets.dot} alt="filter" />

                {/* detail modal */}
                {isDetailModal && <DetailModal userId={'1'} />}
              </button>
            </div>
            {/* row */}
            <div className="tableBodyBox">
              {/* 1 */}
              <button className="tableTitleBox">
                <p className="tableMsg">Irorun</p>
                <img className="hideImg" src={assets.filter} alt="filter" />
              </button>

              {/* 1 */}
              <button className="tableTitleBox">
                <p className="tableMsg">Debby Ogana</p>
                <img className="hideImg" src={assets.filter} alt="filter" />
              </button>

              {/* 1 */}
              <button className="tableTitleBox addSpace2">
                <p className="tableMsg">debby2@irorun.com</p>
                <img className="hideImg" src={assets.filter} alt="filter" />
              </button>

              {/* 1 */}
              <button className="tableTitleBox">
                <p className="tableMsg">08160780928</p>
                <img className="hideImg" src={assets.filter} alt="filter" />
              </button>

              {/* 1 */}
              <button className="tableTitleBox">
                <p className="tableMsg">Apr 30, 2020 10:00 AM</p>
                <img className="hideImg" src={assets.filter} alt="filter" />
              </button>

              {/* 1 */}
              <button className="tableTitleBox tableStatus active">
                <p className="tableMsg">Active</p>
                {/* <img className="hideImg" src={assets.filter} alt="filter" /> */}
              </button>

              {/* 1 */}
              <button
                onClick={() => setIsDetailModal(!isDetailModal)}
                className="tableTitleBox row-col-7 tableTitlelastItem"
              >
                <img src={assets.dot} alt="filter" />
              </button>
            </div>
            {/* row */}
            <div className="tableBodyBox">
              {/* 1 */}
              <button className="tableTitleBox">
                <p className="tableMsg">Lendsqr</p>
                <img className="hideImg" src={assets.filter} alt="filter" />
              </button>

              {/* 1 */}
              <button className="tableTitleBox">
                <p className="tableMsg">Adedeji</p>
                <img className="hideImg" src={assets.filter} alt="filter" />
              </button>

              {/* 1 */}
              <button className="tableTitleBox addSpace2">
                <p className="tableMsg">adedeji@lendsqr.com</p>
                <img className="hideImg" src={assets.filter} alt="filter" />
              </button>

              {/* 1 */}
              <button className="tableTitleBox">
                <p className="tableMsg">08078903721</p>
                <img className="hideImg" src={assets.filter} alt="filter" />
              </button>

              {/* 1 */}
              <button className="tableTitleBox">
                <p className="tableMsg">May 15, 2020 10:00 AM</p>
                <img className="hideImg" src={assets.filter} alt="filter" />
              </button>

              {/* 1 */}
              <button className="tableTitleBox tableStatus inactive">
                <p className="tableMsg">Inactive</p>
                {/* <img className="hideImg" src={assets.filter} alt="filter" /> */}
              </button>

              {/* 1 */}
              <button
                onClick={() => setIsDetailModal(!isDetailModal)}
                className="tableTitleBox tableTitlelastItem"
              >
                <img src={assets.dot} alt="filter" />
              </button>
            </div>
            {currentPosts?.map((user, index) => {
              return <TableBodyRow key={index} user={user} />;
            })}
          </tbody>
        </table>
      </div>

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};
