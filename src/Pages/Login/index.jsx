/* Components */
import BasicPage from '../../Components/BasicPage';

/* Styles */
import './style.scss';

const Login = () => {
  const titlePage = 'Login';

  return <BasicPage titlePage={titlePage}>
    <div className="Login content">
      <div className="Login__box">
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" className='myTransition' />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button className='btn-primary w-full'>Login</button>
        </form>
      </div>
    </div>
  </BasicPage>
};

export default Login;
