import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/constants';
import { GetYposition } from '../../utils/reusable';

export const Navbar = () => {
  const navigate = useNavigate();
  const [isToggle, setIsToggle] = useState(false);

  const showNavBar = () => (GetYposition() >= 200 ? 'navbar fixed' : 'navbar');
  return (
    <section className={showNavBar()}>
      {/* logo */}
      <div className="left">
        <div onClick={() => navigate('/')} className="logoContainer">
          <img src={assets.logo} alt="logo" />
        </div>
      </div>

      {/* right */}
      <div className="right">
        <div className="searchContainer">
          <div className="searchItem">
            <input type="text" placeholder="Search for anything" />
            <button>
              <img src={assets.search} alt="search_icon" />
            </button>
          </div>
        </div>

        {/* toggle view */}
        <div className="actionToggle" onClick={() => setIsToggle(!isToggle)}>
          <img
            className="action"
            id="user"
            src="https://i.ibb.co/2jNk5WT/BA-png-black.png"
            alt="user"
          />
          <img
            className="action arrow"
            src={assets.down_arrow}
            alt="down_arrow"
          />

          {isToggle ? (
            <img src={assets.cancel} className="action hambug" alt="cancel" />
          ) : (
            <img
              className="action hambug"
              src={assets.down_arrow}
              alt="down_arrow"
            />
          )}

          {/* drop down */}
          {isToggle && (
            <div className="dropdownContainer">
              <button>
                <img
                  className="action notification"
                  src={assets.notification}
                  alt="notification"
                />
              </button>
              <button>
                <img
                  className="action"
                  id="user"
                  src="https://i.ibb.co/2jNk5WT/BA-png-black.png"
                  alt="user"
                />
              </button>
              <button>
                <p className="action name">Adedeji</p>
              </button>
              <button>
                <img
                  className="action arrow"
                  src={assets.down_arrow}
                  alt="down_arrow"
                />
              </button>
            </div>
          )}
        </div>

        {/* actions */}
        <div className="actionContainer">
          <a className="action link" href="/">
            Docs
          </a>
          <img
            className="action notification"
            src={assets.notification}
            alt="notification"
          />
          <img
            className="action user"
            src="https://i.ibb.co/2jNk5WT/BA-png-black.png"
            alt="user"
          />
          <p className="action name">Adedeji</p>
          <img
            className="action arrow"
            src={assets.down_arrow}
            alt="down_arrow"
          />
        </div>
      </div>
    </section>
  );
};
