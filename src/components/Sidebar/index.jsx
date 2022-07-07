import { assets } from '../../assets/constants';
import ReactTooltip from 'react-tooltip';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createBrowserHistory } from 'history';

export const Sidebar = () => {
  const navigate = useNavigate();
  const [tooltip, setTooltip] = useState();

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('singleUser');
    navigate('/');

    setTimeout(() => {
      createBrowserHistory().push('/');
      createBrowserHistory().go(0);
    }, 2000);
  };

  return (
    <div className="sidebar">
      {/* switch */}
      <button
        data-tip
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => {
          setTooltip(false);
          setTimeout(() => setTooltip(true), 10);
        }}
        data-for="idSwitchOrganization"
        className="headerItemContainer"
      >
        <img className="icon" src={assets.switch_icon} alt="switch" />
        <p className="text">Switch Organization</p>
        <span>
          <img src={assets.down} alt="down-arow" />
        </span>
      </button>

      {tooltip && (
        <ReactTooltip id="idSwitchOrganization" place="right" effect="solid">
          Switch Organization
        </ReactTooltip>
      )}

      {/* _____ Sub Links _______ */}

      {/* items */}
      <button
        data-tip
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => {
          setTooltip(false);
          setTimeout(() => setTooltip(true), 10);
        }}
        data-for="idDashboard"
        className="itemContainer"
      >
        <img className="icon" src={assets.dashboard} alt="dashboard" />
        <p className="text">Dashboard</p>
      </button>

      {tooltip && (
        <ReactTooltip id="idDashboard" place="right" effect="solid">
          Dashboard
        </ReactTooltip>
      )}

      {/* title */}
      <h3 className="title">CUSTOMERS</h3>

      {/* items */}
      <button
        data-tip
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => {
          setTooltip(false);
          setTimeout(() => setTooltip(true), 10);
        }}
        data-for="idUsers"
        className="itemContainer"
      >
        <img className="icon" src={assets.user_friends} alt="switch" />
        <p className="text">Users</p>
      </button>

      {tooltip && (
        <ReactTooltip id="idUsers" place="right" effect="solid">
          Users
        </ReactTooltip>
      )}

      {/* items */}
      <button
        data-tip
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => {
          setTooltip(false);
          setTimeout(() => setTooltip(true), 10);
        }}
        data-for="idGuarantors"
        className="itemContainer"
      >
        <img className="icon" src={assets.guarantors} alt="guarantors" />
        <p className="text">Guarantors</p>
      </button>

      {tooltip && (
        <ReactTooltip id="idGuarantors" place="right" effect="solid">
          Guarantors
        </ReactTooltip>
      )}

      {/* item */}
      <button
        data-tip
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => {
          setTooltip(false);
          setTimeout(() => setTooltip(true), 10);
        }}
        data-for="idLoans"
        className="itemContainer"
      >
        <img className="icon" src={assets.loan} alt="loan" />
        <p className="text">Loans</p>
      </button>

      {tooltip && (
        <ReactTooltip id="idLoans" place="right" effect="solid">
          Loans
        </ReactTooltip>
      )}

      {/* item */}
      <button
        data-tip
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => {
          setTooltip(false);
          setTimeout(() => setTooltip(true), 10);
        }}
        data-for="idDecisionModels"
        className="itemContainer"
      >
        <img className="icon" src={assets.decision} alt="decision" />
        <p className="text">Decision Models</p>
      </button>

      {tooltip && (
        <ReactTooltip id="idDecisionModels" place="right" effect="solid">
          Decision Models
        </ReactTooltip>
      )}

      {/* items */}
      <button
        data-tip
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => {
          setTooltip(false);
          setTimeout(() => setTooltip(true), 10);
        }}
        data-for="idSavings"
        className="itemContainer"
      >
        <img className="icon" src={assets.piggy} alt="piggy" />
        <p className="text">Savings</p>
      </button>

      {tooltip && (
        <ReactTooltip id="idSavings" place="right" effect="solid">
          Savings
        </ReactTooltip>
      )}

      {/* items */}
      <button
        data-tip
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => {
          setTooltip(false);
          setTimeout(() => setTooltip(true), 10);
        }}
        data-for="idLoanRequests"
        className="itemContainer"
      >
        <img className="icon" src={assets.loan_request} alt="loan_request" />
        <p className="text">Loan Requests</p>
      </button>

      {tooltip && (
        <ReactTooltip id="idLoanRequests" place="right" effect="solid">
          Loan Requests
        </ReactTooltip>
      )}

      {/* items */}
      <button
        data-tip
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => {
          setTooltip(false);
          setTimeout(() => setTooltip(true), 10);
        }}
        data-for="idWhitelist"
        className="itemContainer"
      >
        <img className="icon" src={assets.whitelist} alt="whitelist" />
        <p className="text">Whitelist</p>
      </button>

      {tooltip && (
        <ReactTooltip id="idWhitelist" place="right" effect="solid">
          Whitelist
        </ReactTooltip>
      )}

      <button
        data-tip
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => {
          setTooltip(false);
          setTimeout(() => setTooltip(true), 10);
        }}
        data-for="idKarma"
        className="itemContainer"
      >
        <img className="icon" src={assets.karma} alt="karma" />
        <p className="text">Karma</p>
      </button>

      {tooltip && (
        <ReactTooltip id="idKarma" place="right" effect="solid">
          Karma
        </ReactTooltip>
      )}

      {/* title */}
      <h3 className="title">BUSINESSES</h3>

      {/* items */}
      <button
        data-tip
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => {
          setTooltip(false);
          setTimeout(() => setTooltip(true), 10);
        }}
        data-for="idOrganization"
        className="itemContainer"
      >
        <img className="icon" src={assets.switch_icon} alt="switch_icon" />
        <p className="text">Organization</p>
      </button>

      {tooltip && (
        <ReactTooltip id="idOrganization" place="right" effect="solid">
          Organization
        </ReactTooltip>
      )}

      {/* items */}
      <button
        data-tip
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => {
          setTooltip(false);
          setTimeout(() => setTooltip(true), 10);
        }}
        data-for="idLoanProducts"
        className="itemContainer"
      >
        <img className="icon" src={assets.loan_request} alt="loan_request" />
        <p className="text">Loan Products</p>
      </button>

      {tooltip && (
        <ReactTooltip id="idLoanProducts" place="right" effect="solid">
          Loan Products
        </ReactTooltip>
      )}

      {/* items */}
      <button
        data-tip
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => {
          setTooltip(false);
          setTimeout(() => setTooltip(true), 10);
        }}
        data-for="idSavingsProducts"
        className="itemContainer"
      >
        <img className="icon" src={assets.saving} alt="saving" />
        <p className="text">Savings Products</p>
      </button>

      {tooltip && (
        <ReactTooltip id="idSavingsProducts" place="right" effect="solid">
          Savings Products
        </ReactTooltip>
      )}

      {/* items */}
      <button
        data-tip
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => {
          setTooltip(false);
          setTimeout(() => setTooltip(true), 10);
        }}
        data-for="idFeesandCharges"
        className="itemContainer"
      >
        <img className="icon" src={assets.dashboard} alt="dashboard" />
        <p className="text">Fees and Charges</p>
      </button>

      {tooltip && (
        <ReactTooltip id="idFeesandCharges" place="right" effect="solid">
          Fees and Charges
        </ReactTooltip>
      )}

      {/* items */}
      <button
        data-tip
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => {
          setTooltip(false);
          setTimeout(() => setTooltip(true), 10);
        }}
        data-for="idTransactions"
        className="itemContainer"
      >
        <img className="icon" src={assets.transaction} alt="transaction" />
        <p className="text">Transactions</p>
      </button>

      {tooltip && (
        <ReactTooltip id="idTransactions" place="right" effect="solid">
          Transactions
        </ReactTooltip>
      )}

      {/* items */}
      <button
        data-tip
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => {
          setTooltip(false);
          setTimeout(() => setTooltip(true), 10);
        }}
        data-for="idServices"
        className="itemContainer"
      >
        <img className="icon" src={assets.services} alt="services" />
        <p className="text">Services</p>
      </button>

      {tooltip && (
        <ReactTooltip id="idServices" place="right" effect="solid">
          Services
        </ReactTooltip>
      )}

      {/* items */}
      <button
        data-tip
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => {
          setTooltip(false);
          setTimeout(() => setTooltip(true), 10);
        }}
        data-for="idServiceAccount"
        className="itemContainer"
      >
        <img
          className="icon"
          src={assets.service_account}
          alt="service_account"
        />
        <p className="text">Service Account</p>
      </button>

      {tooltip && (
        <ReactTooltip id="idServiceAccount" place="right" effect="solid">
          Service Account
        </ReactTooltip>
      )}

      {/* items */}
      <button
        data-tip
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => {
          setTooltip(false);
          setTimeout(() => setTooltip(true), 10);
        }}
        data-for="idSettlements"
        className="itemContainer"
      >
        <img className="icon" src={assets.settlements} alt="settlements" />
        <p className="text">Settlements</p>
      </button>

      {tooltip && (
        <ReactTooltip id="idSettlements" place="right" effect="solid">
          Settlements
        </ReactTooltip>
      )}

      {/* items */}
      <button
        data-tip
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => {
          setTooltip(false);
          setTimeout(() => setTooltip(true), 10);
        }}
        data-for="idReports"
        className="itemContainer"
      >
        <img className="icon" src={assets.report} alt="report" />
        <p className="text">Reports</p>
      </button>

      {tooltip && (
        <ReactTooltip id="idReports" place="right" effect="solid">
          Reports
        </ReactTooltip>
      )}

      {/* title */}
      <h3 className="title">SETTINGS</h3>

      {/* items */}
      <button
        data-tip
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => {
          setTooltip(false);
          setTimeout(() => setTooltip(true), 10);
        }}
        data-for="idPreferences"
        className="itemContainer"
      >
        <img className="icon" src={assets.preferences} alt="preferences" />
        <p className="text">Preferences</p>
      </button>

      {tooltip && (
        <ReactTooltip id="idPreferences" place="right" effect="solid">
          Preferences
        </ReactTooltip>
      )}

      {/* items */}
      <button
        data-tip
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => {
          setTooltip(false);
          setTimeout(() => setTooltip(true), 10);
        }}
        data-for="idFeesandPricing"
        className="itemContainer"
      >
        <img className="icon" src={assets.fees} alt="fees" />
        <p className="text">Fees and Pricing</p>
      </button>

      {tooltip && (
        <ReactTooltip id="idFeesandPricing" place="right" effect="solid">
          Fees and Pricing
        </ReactTooltip>
      )}

      {/* items */}
      <button
        data-tip
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => {
          setTooltip(false);
          setTimeout(() => setTooltip(true), 10);
        }}
        data-for="idAuditLogs"
        className="itemContainer"
      >
        <img className="icon" src={assets.audit} alt="audit" />
        <p className="text">Audit Logs</p>
      </button>

      {tooltip && (
        <ReactTooltip id="idAuditLogs" place="right" effect="solid">
          Audit Logs
        </ReactTooltip>
      )}

      {/* items */}
      <button
        onClick={logout}
        data-tip
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => {
          setTooltip(false);
          setTimeout(() => setTooltip(true), 10);
        }}
        data-for="idLogout"
        className="itemContainer logout"
      >
        <img className="icon" src={assets.sign_out} alt="sign_out" />
        <p className="text">Logout</p>
      </button>

      {tooltip && (
        <ReactTooltip id="idLogout" place="right" effect="solid">
          Logout
        </ReactTooltip>
      )}
    </div>
  );
};
