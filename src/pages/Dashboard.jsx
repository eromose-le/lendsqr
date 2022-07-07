import { assets } from '../assets/constants';
import { StarRating } from '../components/Star';
import {
  EducationInfo,
  GuarantorInfo,
  SocialInfo,
  UserInfo
} from '../components/UserInfo';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { getUser } from '../apiCalls';
import { AuthContext } from '../context/AuthContext';

export const Dashboard = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { singleUser, isFetching, error, dispatch } = useContext(AuthContext);

  useEffect(() => {
    getUser(id, dispatch);
    window.scrollTo(0, 0);

    return () => {};
  }, [id, dispatch]);

  if (isFetching) {
    return (
      <div className="loadingGif">
        <img src={assets.loading} alt="loading" />
      </div>
    );
  }

  if (error) {
    return navigate('/');
  }
  return (
    <div className="dashboard">
      {/* header */}
      <div className="header">
        {/* navigation */}
        <div className="navigation" onClick={() => navigate('/')}>
          <img src={assets.back} alt="back-arrow" />
          <p>Back to Users</p>
        </div>

        {/* details */}
        <div className="userDetailContainer">
          <h3>User Details</h3>
          <div className="userDetailsButtonContainer">
            <button>Blacklist User</button>
            <button>Activate User</button>
          </div>
        </div>

        {/* user info */}
        <div className="userInfoContainer">
          {/* category 1 */}
          <div className="cat1">
            <img
              className="catUserIcon"
              src={
                singleUser?.profile?.avatar
                  ? singleUser?.profile?.avatar
                  : assets.avatar
              }
              alt="avatar"
            />
            <div className="nameContainer">
              <p className="name">
                {singleUser?.profile?.firstName} {singleUser?.profile?.lastName}
              </p>
              <p className="id">{singleUser?.accountNumber}</p>
            </div>
          </div>

          {/* divider */}
          <div className="divider"></div>

          {/* category 2 */}
          <div className="cat2">
            <p className="tierInfo">User’s Tier</p>
            <StarRating value={2} />
          </div>

          {/* divider */}
          <div className="divider"></div>

          {/* user Account */}
          <div className="userAccountInfo">
            <p className="amount">₦ {singleUser?.accountBalance}</p>
            <p className="bankName">
              {singleUser?.accountNumber}/Providus Bank
            </p>
          </div>
        </div>

        {/* dashboard navigation */}
        <div className="dashNav">
          <div className="dashNavWrapper">
            <button className="dashLink active">General Details</button>
            <button className="dashLink">Documents</button>
            <button className="dashLink">Bank Details</button>
            <button className="dashLink">Loans</button>
            <button className="dashLink">Savings</button>
            <button className="dashLink">App and System</button>
          </div>
        </div>
      </div>

      {/* body */}
      <div className="dashInfoBodyContainer">
        <UserInfo singleUser={singleUser} title="Personal Information" />
        <EducationInfo
          singleUser={singleUser}
          title="Education and Employment"
        />
        <SocialInfo singleUser={singleUser} title="Socials" />
        <GuarantorInfo singleUser={singleUser} title="Guarantor" />
      </div>
    </div>
  );
};
