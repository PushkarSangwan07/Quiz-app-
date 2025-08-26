import './LoginButton.css';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
    const navigate = useNavigate();
    const { user, loginWithRedirect, isAuthenticated, logout, isLoading } = useAuth0();

    if (isLoading) {
        return <div className="login-container">Loading...</div>;
    }

    return (
        <>
        <div className="login-container">

            {isAuthenticated ? (
                <div>
                    <h3>Hello {user.name}</h3>
                    <img src={user.picture} alt={user.name} />
                    <h2>Name:{user.name}</h2>
                    <p>Email:{user.email}</p>
                    <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
                    <button onClick={() => navigate('/page1')}>Start Quiz</button>
                    </div>
                
            ) : (
<button onClick={() => loginWithRedirect({ screen_hint: 'signup' })}>
  Register
</button>
            )}
        </div>
        </>
    );
};

export default LoginButton;
