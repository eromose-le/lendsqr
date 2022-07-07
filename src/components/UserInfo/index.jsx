export const UserInfo = ({ title, singleUser }) => {
  return (
    <div className="dashInfoItemBox">
      <h3 className="dashInfoHeader">{title}</h3>
      <div className="dashInfoWrapper">
        {/* 1 */}
        <div className="dashInfoBox">
          <p className="title">full Name</p>
          <h3 className="info">
            {singleUser?.profile?.firstName} {singleUser?.profile?.lastName}
          </h3>
        </div>

        {/* 2 */}
        <div className="dashInfoBox">
          <p className="title">Phone Number</p>
          <h3 className="info">{singleUser?.profile?.phonenumber}</h3>
        </div>

        {/* 3 */}
        <div className="dashInfoBox">
          <p className="title">Email Address</p>
          <h3 className="info">{singleUser?.email}</h3>
        </div>

        {/* 4 */}
        <div className="dashInfoBox">
          <p className="title">Bvn</p>
          <h3 className="info">{singleUser?.profile?.bvn}</h3>
        </div>

        {/* 4 */}
        <div className="dashInfoBox">
          <p className="title">Gender</p>
          <h3 className="info">{singleUser?.profile?.gender}</h3>
        </div>

        {/* 4 */}
        <div className="dashInfoBox">
          <p className="title">Marital status</p>
          <h3 className="info">Single</h3>
        </div>

        {/* 4 */}
        <div className="dashInfoBox">
          <p className="title">Children</p>
          <h3 className="info">None</h3>
        </div>

        {/* 4 */}
        <div className="dashInfoBox">
          <p className="title">Type of residence</p>
          <h3 className="info">Parent’s Apartment</h3>
        </div>
      </div>
    </div>
  );
};

export const EducationInfo = ({ title, singleUser }) => {
  return (
    <div className="dashInfoItemBox">
      <h3 className="dashInfoHeader">{title}</h3>
      <div className="dashInfoWrapper">
        {/* * */}
        <div className="dashInfoBox">
          <p className="title">level of education</p>
          <h3 className="info">{singleUser?.education?.level}</h3>
        </div>

        {/* * */}
        <div className="dashInfoBox">
          <p className="title">employment status</p>
          <h3 className="info">{singleUser?.education?.employmentStatus}</h3>
        </div>

        {/* * */}
        <div className="dashInfoBox">
          <p className="title">sector of employment</p>
          <h3 className="info">{singleUser?.education?.sector}</h3>
        </div>

        {/* * */}
        <div className="dashInfoBox">
          <p className="title">Duration of employment</p>
          <h3 className="info">{singleUser?.education?.duration}</h3>
        </div>

        {/* * */}
        <div className="dashInfoBox">
          <p className="title">office email</p>
          <h3 className="info">{singleUser?.education?.officeEmail}</h3>
        </div>

        {/* * */}
        <div className="dashInfoBox">
          <p className="title">Monthly income</p>
          <h3 className="info">{singleUser?.education?.monthlyIncome[0]}</h3>
        </div>

        {/* * */}
        <div className="dashInfoBox">
          <p className="title">loan repayment</p>
          <h3 className="info">{singleUser?.education?.loanRepayment}</h3>
        </div>
      </div>
    </div>
  );
};

export const SocialInfo = ({ title, singleUser }) => {
  return (
    <div className="dashInfoItemBox">
      <h3 className="dashInfoHeader">{title}</h3>
      <div className="dashInfoWrapper">
        {/* * */}
        <div className="dashInfoBox">
          <p className="title">Twitter</p>
          <h3 className="info">{singleUser?.socials?.twitter}</h3>
        </div>

        {/* * */}
        <div className="dashInfoBox">
          <p className="title">Facebook</p>
          <h3 className="info">{singleUser?.socials?.facebook}</h3>
        </div>

        {/* * */}
        <div className="dashInfoBox">
          <p className="title">Instagram</p>
          <h3 className="info">{singleUser?.socials?.instagram}</h3>
        </div>
      </div>
    </div>
  );
};

export const GuarantorInfo = ({ title, singleUser }) => {
  return (
    <div className="dashInfoItemBox">
      <h3 className="dashInfoHeader">{title}</h3>
      <div className="dashInfoWrapper">
        {/* * */}
        <div className="dashInfoBox">
          <p className="title">full Name</p>
          <h3 className="info">
            {singleUser?.guarantor?.firstName} {singleUser?.guarantor?.lastName}
          </h3>
        </div>

        {/* * */}
        <div className="dashInfoBox">
          <p className="title">Phone Number</p>
          <h3 className="info">{singleUser?.guarantor?.phoneNumber}</h3>
        </div>

        {/* * */}
        <div className="dashInfoBox">
          <p className="title">Email Address</p>
          <h3 className="info">None</h3>
        </div>

        {/* * */}
        <div className="dashInfoBox">
          <p className="title">Relationship</p>
          <h3 className="info">None</h3>
        </div>
      </div>
    </div>
  );
};
