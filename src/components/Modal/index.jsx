import { assets } from '../../assets/constants';
import { Link } from 'react-router-dom';

export const FilterModal = () => {
  return (
    <div className="filterContainer">
      {/* select */}
      <div className="filerItemBox">
        {/* label */}
        <label className="filterLabel" htmlFor="organization">
          Organization
        </label>

        {/* selection */}
        <div className="filterSubCustomBox">
          <select
            className="filterSelect"
            name="organization"
            id="organization"
          >
            <option className="filterOption" value="#">
              Select
            </option>
            <option className="filterOption" value="#">
              *
            </option>
          </select>
          {/* <img
            className="customSelectIcon"
            src={assets.down_arrow}
            alt="down-arrow"
          /> */}
        </div>
      </div>

      {/* input */}
      <div className="filerItemBox">
        <label className="filterLabel" htmlFor="username">
          Username
        </label>
        <input className="filterInput" type="text" placeholder="User" />
      </div>

      {/* input */}
      <div className="filerItemBox">
        <label className="filterLabel" htmlFor="email">
          Email
        </label>
        <input className="filterInput" type="email" placeholder="Email" />
      </div>

      {/* date */}
      <div className="filerItemBox">
        {/* label */}
        <label className="filterLabel" htmlFor="date">
          Calender
        </label>

        {/* selection */}
        <div className="filerItemBox">
          <input className="filterDate" type="datetime-local" id="date" />
          {/* <img
                      className="customDateIcon"
                      src={assets.calender}
                      alt="down-arrow"
                    /> */}
        </div>
      </div>

      {/* input */}
      <div className="filerItemBox">
        <label className="filterLabel" htmlFor="phonenumber">
          Phone Number
        </label>
        <input className="filterInput" type="text" placeholder="Phone Number" />
      </div>

      {/* select */}
      <div className="filerItemBox">
        {/* label */}
        <label className="filterLabel" htmlFor="status">
          Status
        </label>

        {/* selection */}
        <div className="filterSubCustomBox">
          <select className="filterSelect" name="status" id="status">
            <option className="filterOption" value="#">
              Select
            </option>
            <option className="filterOption" value="#">
              *
            </option>
          </select>
          {/* <img
            className="customSelectIcon"
            src={assets.down_arrow}
            alt="down-arrow"
          /> */}
        </div>
      </div>

      {/* buttons */}
      <div className="filterButtonContainer">
        <button>Reset</button>
        <button>Filter</button>
      </div>
    </div>
  );
};

export const DetailModal = ({ userId }) => {
  return (
    <Link to={`/user/${userId}`} className="detailModalContainer">
      {/* 1 */}
      <div className="detailModalBox">
        <img src={assets.view} alt="view" />
        <p className="detailText">View Details</p>
      </div>
      {/* 1 */}
      <div className="detailModalBox">
        <img src={assets.blacklist} alt="view" />
        <p className="detailText">Blacklist User</p>
      </div>
      {/* 1 */}
      <div className="detailModalBox">
        <img src={assets.activate} alt="view" />
        <p className="detailText">Activate User</p>
      </div>
    </Link>
  );
};
