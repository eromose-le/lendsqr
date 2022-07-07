import { assets } from '../assets/constants';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { getUsers } from '../apiCalls';
import { AuthContext } from '../context/AuthContext';

export const Login = () => {
  const navigate = useNavigate();
  const { isFetching, error, dispatch } = useContext(AuthContext);
  const [isShow, setIsShow] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    getUsers(dispatch);
    navigate('/');
  };

  if (error) {
    return alert('An error occurred. Please try again later.');
  }
  return (
    <section className="login">
      <div className="logoContainer">
        <img src={assets.logo} alt="logo" />
      </div>
      <div className="left">
        <div className="loginBgImgContainer">
          <img src={assets.signin_image} alt="sigin_image" />
        </div>
      </div>
      <div className="right">
        <form className="formContainer">
          {/* header */}
          <div className="header">
            <h1 className="title">Welcome!</h1>
            <p className="subTitle">Enter details to login.</p>
          </div>

          {/* text fields */}
          <div className="inputContainer">
            <input type="email" placeholder="Email" />
          </div>
          <div className="inputContainer">
            <input
              className="input"
              type={isShow ? 'text' : 'password'}
              placeholder="Password"
            />
            <span
              onClick={() => {
                setIsShow(!isShow);
              }}
            >
              {isShow ? 'HIDE' : 'SHOW'}
            </span>
          </div>

          {/* forgot text */}
          <h3 className="forgotPassword">FORGOT PASSWORD?</h3>

          {/* button */}
          <button onClick={submit}>
            {isFetching ? 'loading...' : 'LOG IN'}
          </button>
        </form>
      </div>
    </section>
  );
};
