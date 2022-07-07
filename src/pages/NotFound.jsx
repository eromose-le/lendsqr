import { useNavigate } from 'react-router-dom';
export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="notFound">
      <button className="notFoundBtn" onClick={() => navigate('/')}>
        Go Back
      </button>
      <p>Page Not Found</p>
    </div>
  );
};
