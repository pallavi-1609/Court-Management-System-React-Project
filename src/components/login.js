import React from 'react';

const Login = () => {
  const users = [
    { username: "Sundarmurthy117", password: "12345678", email: "sundar214murthy@gmail.com", name: "Sundar Murthy", dashboard: "/dashboard1" },
    { username: "SuryaJ1234", password: "1234555", email: "surya214murthy@gmail.com", name: "Surya J", dashboard: "/dashboard1" },
    { username: "Raghavsharma118", password: "87654321", email: "justice.sharma@supremecourt.in", name: "Raghav Sharma", dashboard: "/dashboard2" }
  ];

  const handleLogin = () => {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;


    const user = users.find(user => user.username === usernameInput && user.password === passwordInput);

    if (user) {
    
      alert(`Welcome, ${user.name}!`);

      window.location.href = user.dashboard; 
    } else {
      alert("Invalid username or password.");
    }
  };


  const handleForgotPassword = () => {
    const email = prompt("Please enter your email address:");

    const user = users.find(user => user.email === email);

    if (user) {

      alert(`Your password is: ${user.password}`);
    } else {
      alert("Invalid email address.");
    }
  };

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Login Page</title>
      <style dangerouslySetInnerHTML={{__html: "\n    /* CSS styles */\n    * { font-family: 'Poppins'; }\n    body {\n      user-select: none;\n      overflow-y: hidden;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      background: hsl(218deg 50% 91%);\n      height: 100vh;\n    }\n    .screen-1 {\n      background: hsl(213deg 85% 97%);\n      padding: 2em;\n      display: flex;\n      flex-direction: column;\n      border-radius: 30px;\n      box-shadow: 0 0 2em hsl(231deg 62% 94%);\n      gap: 2em;\n    }\n    .logo { margin-top: -3em; }\n    .email, .password {\n      background: hsl(0deg 0% 100%);\n      box-shadow: 0 0 2em hsl(231deg 62% 94%);\n      padding: 1em;\n      display: flex;\n      flex-direction: column;\n      gap: 0.5em;\n      border-radius: 20px;\n      color: hsl(0deg 0% 30%);\n      margin-top: -3em;\n    }\n    .email input, .password input {\n      outline: none;\n      border: none;\n    }\n    .email input::placeholder, .password input::placeholder {\n      color: hsl(0deg 0% 0%);\n      font-size: 0.9em;\n    }\n    .email ion-icon, .password ion-icon {\n      color: hsl(0deg 0% 30%);\n      margin-bottom: -.2em;\n    }\n    .login {\n      padding: 1em;\n      background: hsl(233deg 36% 38%);\n      color: hsl(0 0 100);\n      border: none;\n      border-radius: 30px;\n      font-weight: 600;\n    }\n    .footer {\n      display: flex;\n      font-size: 0.7em;\n      color: hsl(0deg 0% 37%);\n      gap: 14em;\n      padding-bottom: 10em;\n    }\n    .footer span { cursor: pointer; }\n  " }} />
      <div className="screen-1">
        <svg className="logo" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width={300} height={300} viewBox="0 0 640 480" xmlSpace="preserve">
          <g transform="matrix(3.31 0 0 3.31 320.4 240.4)">
            <circle style={{stroke: 'rgb(0,0,0)', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeDashoffset: 0, strokeLinejoin: 'miter', strokeMiterlimit: 4, fill: 'rgb(61,71,133)', fillRule: 'nonzero', opacity: 1}} cx={0} cy={0} r={40} />
          </g>
          <g transform="matrix(0.98 0 0 0.98 268.7 213.7)">
            <circle style={{stroke: 'rgb(0,0,0)', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeDashoffset: 0, strokeLinejoin: 'miter', strokeMiterlimit: 4, fill: 'rgb(255,255,255)', fillRule: 'nonzero', opacity: 1}} cx={0} cy={0} r={40} />
          </g>
          <g transform="matrix(1.01 0 0 1.01 362.9 210.9)">
            <circle style={{stroke: 'rgb(0,0,0)', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeDashoffset: 0, strokeLinejoin: 'miter', strokeMiterlimit: 4, fill: 'rgb(255,255,255)', fillRule: 'nonzero', opacity: 1}} cx={0} cy={0} r={40} />
          </g>
          <g transform="matrix(0.92 0 0 0.92 318.5 286.5)">
            <circle style={{stroke: 'rgb(0,0,0)', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeDashoffset: 0, strokeLinejoin: 'miter', strokeMiterlimit: 4, fill: 'rgb(255,255,255)', fillRule: 'nonzero', opacity: 1}} cx={0} cy={0} r={40} />
          </g>
          <g transform="matrix(0.16 -0.12 0.49 0.66 290.57 243.57)">
            <polygon style={{stroke: 'rgb(0,0,0)', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeDashoffset: 0, strokeLinejoin: 'miter', strokeMiterlimit: 4, fill: 'rgb(255,255,255)', fillRule: 'nonzero', opacity: 1}} points="-50,-50 -50,50 50,50 50,-50 " />
          </g>
          <g transform="matrix(0.16 0.1 -0.44 0.69 342.03 248.34)">
            <polygon style={{stroke: 'rgb(0,0,0)', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeDashoffset: 0, strokeLinejoin: 'miter', strokeMiterlimit: 4, fill: 'rgb(255,255,255)', fillRule: 'nonzero', opacity: 1}} vectorEffect="non-scaling-stroke" points="-50,-50 -50,50 50,50 50,-50 " />
          </g>
        </svg>
        <div className="email">
          <label htmlFor="username">Username</label>
          <div className="sec-2">
            <ion-icon name="mail-outline" />
            <input type="text" name="username" id="username" placeholder="Enter Username" />
          </div>
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <div className="sec-2">
            <ion-icon name="lock-closed-outline" />
            <input className="pas" type="password" name="password" id="password" placeholder="Enter Password" />
            <ion-icon className="show-hide" name="eye-outline" />
          </div>
        </div>
        <button className="login" onClick={handleLogin}>Login</button>
        <div className="footer">
          <span onClick={handleForgotPassword}>Forgot Password?</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
