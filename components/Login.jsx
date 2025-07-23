const login = () => {
  return (
    <>
      <div className="login-container">
        <h1>NOTES</h1>
        <p>Prepare and arrange your notes in a simple way.</p>
        <div>
          <p>Email</p>
          <input type="email" placeholder="@example.com" />
        </div>
        <div>
          <p>Password</p>
          <input type="password" placeholder="***********" />
        </div>
        <button>Login</button>
        <p>
          <a href="">Forgot password?</a>
        </p>
        <div>
          <a href="">View code</a>
        </div>
      </div>
    </>
  );
};

export default login;
