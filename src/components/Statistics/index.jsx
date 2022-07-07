import { assets } from '../../assets/constants';

export const Statistics = () => {
  return (
    <>
      {/* 1 */}
      <div className="overviewBox">
        <img className="homeIcon" src={assets.user} alt="user" />
        <p className="overviewText">USERS</p>
        <h3 className="value">2,453</h3>
      </div>

      {/* 2 */}
      <div className="overviewBox">
        <img className="homeIcon" src={assets.users} alt="users" />
        <p className="overviewText">Active Users</p>
        <h3 className="value">2,453</h3>
      </div>

      {/* 3 */}
      <div className="overviewBox">
        <img className="homeIcon" src={assets.loans} alt="loans" />
        <p className="overviewText">Users with Loans</p>
        <h3 className="value">12,453</h3>
      </div>

      {/* 4 */}
      <div className="overviewBox">
        <img className="homeIcon" src={assets.savings} alt="savings" />
        <p className="overviewText">Users with Savings</p>
        <h3 className="value">102,453</h3>
      </div>
    </>
  );
};
