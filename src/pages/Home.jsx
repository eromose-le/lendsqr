import { Statistics } from '../components/Statistics';
import { Table } from '../components/Table';

export const Home = () => {
  return (
    <div className="dashboard">
      {/* header */}
      <div className="header">
        {/* details */}
        <div className="userDetailContainer">
          <h3>User Details</h3>
        </div>

        {/* user info */}
        <div className="overviewContainer">
          <Statistics />
        </div>
      </div>

      {/* table */}
      <Table />
    </div>
  );
};
