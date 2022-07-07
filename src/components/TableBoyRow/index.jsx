import { useState } from 'react';
import { assets } from '../../assets/constants';
import { DetailModal } from '../Modal';
import moment from 'moment';

export const TableBodyRow = ({ user }) => {
  const [isDetailModal, setIsDetailModal] = useState(false);
  return (
    <>
      <div className="tableBodyBox">
        {/* Organisation */}
        <button className="tableTitleBox">
          <p className="tableMsg">{user.orgName}</p>
          <img className="hideImg" src={assets.filter} alt="filter" />
        </button>

        {/* 1 */}
        <button className="tableTitleBox">
          <p className="tableMsg">{user.userName}</p>
          <img className="hideImg" src={assets.filter} alt="filter" />
        </button>

        {/* 1 */}
        <button className="tableTitleBox addSpace2">
          <p className="tableMsg">{user.email}</p>
          <img className="hideImg" src={assets.filter} alt="filter" />
        </button>

        {/* 1 */}
        <button className="tableTitleBox">
          <p className="tableMsg">{user.phoneNumber}</p>
          <img className="hideImg" src={assets.filter} alt="filter" />
        </button>

        {/* 1 */}
        <button className="tableTitleBox">
          <p className="tableMsg">
            {moment(user.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
          </p>
          <img className="hideImg" src={assets.filter} alt="filter" />
        </button>

        {/* 1 */}
        <button className="tableTitleBox tableStatus pending">
          <p className="tableMsg">Pending</p>
          {/* <img className="hideImg" src={assets.filter} alt="filter" /> */}
        </button>

        {/* 1 */}
        <button
          onClick={() => setIsDetailModal(!isDetailModal)}
          className="tableTitleBox row-col-7 tableTitlelastItem"
        >
          <img src={assets.dot} alt="filter" />

          {/* detail modal */}
          {isDetailModal && <DetailModal userId={user.id} />}
        </button>
      </div>
    </>
  );
};
