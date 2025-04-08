import React from 'react'

const dashboard2 = () => {
  const handleCaseHistoryClick = () => {
    window.location.href = '/casehistory';
  };

  const handleAppointmentClick = () => {
    window.location.href = '/appointment2';
  };

  const handleProfileClick = () => {
    window.location.href = '/judgeprofile';
  };
  return (
    <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Law Office Dashboard</title>
  <style dangerouslySetInnerHTML={{__html: "\n    /* CSS styles */\n    body {\n      font-family: Arial, sans-serif;\n      margin: 0;\n      padding: 0;\n      background-image: url('background.png'); /* Add your background image URL here */\n      background-size: 80%; /* Adjust the zoom level of the background image */\n      background-position: center;\n    }\n\n    .container {\n      display: flex;\n      height: 100vh;\n    }\n\n    .sidebar {\n      background-color: #6acff4; /* Change sidebar color to purple */\n      color: #fff;\n      width: 200px;\n      padding: 20px;\n      border-top-left-radius: 15px; /* Increase curve radius on top left */\n      border-bottom-left-radius: 15px; /* Increase curve radius on bottom left */\n    }\n\n    .sidebar ul {\n      list-style-type: none;\n      padding: 0;\n      margin: 0;\n    }\n\n    .sidebar li {\n      margin-bottom: 10px;\n    }\n\n    .sidebar a {\n      color: #fff;\n      text-decoration: none;\n      display: flex;\n      align-items: center;\n    }\n\n    .sidebar a i {\n      margin-right: 10px;\n      font-size: 20px; /* Increase the size of the icons */\n    }\n\n    .content {\n      flex: 1;\n      padding: 20px;\n    }\n\n    .header {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      background-color: #c5f9f5;\n      padding: 10px 20px;\n      border-top-right-radius: 15px; /* Increase curve radius on top right */\n      border-bottom-right-radius: 15px; /* Increase curve radius on bottom right */\n      border-top-left-radius: 15px;\n      border-bottom-left-radius: 15px;  \n    }\n\n    .header-left {\n      display: flex;\n      align-items: center;\n    }\n\n    .header h2 {\n      margin: 0;\n    }\n\n    .logo {\n      background-color: #9dc0e2;\n      color: #fff;\n      width: 80px; /* Set the width of the logo */\n      height: 80px; /* Set the height of the logo */\n      border-radius: 50%; /* Make the logo circular */\n      margin-right: 20px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n    .logo img {\n      width: 100%; /* Make the logo square */\n      height: 100%;\n      border-radius: 50%; /* Make the logo circular */\n    }\n\n    .notifications {\n      display: flex;\n      align-items: center;\n      margin-left: 30px;\n    }\n\n    .dashboard-heading {\n      display: flex;\n      align-items: center;\n    }\n\n    .dashboard-heading h2 {\n      margin-right: 20px;\n    }\n\n    .dashboard {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-top: 20px;\n    }\n\n    .card {\n      background-color: #f3e3fa;\n      padding: 20px;\n      text-align: center;\n      border-radius: 15px; /* Increase curve radius on cards */\n      position: relative;\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n    }\n\n    .card:nth-child(1) {\n      background-color: #e6e6ff;\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n    }\n\n    .card:nth-child(2) {\n      background-color: #fff0f0;\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n    }\n\n    .card:nth-child(3) {\n      background-color: #f0ffff;\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n    }\n\n    .card:nth-child(4) {\n      background-color: #ffffd0;\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n    }\n\n    .card i {\n      font-size: 24px;\n      position: absolute;\n      top: 10px;\n      right: 10px;\n    }\n\n    .case-board,\n    .appointment {\n      display: flex;\n      flex-direction: column;\n      margin-top: 20px;\n      position: relative;\n      background-color: #f8f8f8;\n      padding: 20px;\n      border-radius: 15px; /* Increase curve radius on cards */\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n    }\n\n    .case-board {\n      background-color: #e6e6ff;\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n    }\n\n    .appointment {\n      background-color: #fff0f0;\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n    }\n\n    .case-board h3,\n    .appointment h3 {\n      margin-bottom: 10px;\n      display: flex;\n      align-items: center;\n    }\n\n    .case-board h3 i,\n    .appointment h3 i {\n      margin-right: 10px;\n    }\n\n    .case-board .date,\n    .appointment .date {\n      position: absolute;\n      top: 20px;\n      right: 20px;\n      display: flex;\n      align-items: center;\n    }\n\n    .case-board .date i,\n    .appointment .date i {\n      margin-right: 5px;\n    }\n\n    .case-board button,\n    .appointment button {\n      width: 150px;\n      padding: 10px;\n      border: none;\n      background-color: #003366;\n      color: #fff;\n      border-radius: 5px;\n      cursor: pointer;\n    }\n\n    .tooltip {\n      position: absolute;\n      background-color: rgba(0, 0, 0, 0.8);\n      color: #fff;\n      padding: 5px 10px;\n      border-radius: 5px;\n      opacity: 0;\n      transition: opacity 0.3s;\n      pointer-events: none;\n    }\n\n    .card:hover .tooltip,\n    .case-board:hover .tooltip,\n    .appointment:hover .tooltip {\n      opacity: 1;\n    }\n\n    /* Profile icon */\n    .profile {\n      margin-left: 20px;\n      cursor: pointer;\n    }\n\n    .profile i {\n      font-size: 30px; /* Increase the size of the profile icon */\n    }\n\n    /* Sidebar hover effect */\n    .sidebar:hover {\n      width: 220px;\n    }\n\n  " }} />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
  <div className="container">
    <div className="sidebar">
      <h3>Dashboard</h3>
      <ul>
      <li><a href="/dashboard2"><i class="fa-solid fa-table-columns"></i> Dashboard</a></li>
        <li><a href="/hearing"><i class="fas fa-tasks"></i> Hearings</a></li>
        <li><a href="/appointment2"><i class="far fa-calendar-alt"></i> Appointment</a></li>
        <li><a href="/tax"><i class="fas fa-file-invoice-dollar"></i> Tax</a></li>
        <li><a href="/"><i class="fa-solid fa-right-from-bracket"></i>Logout</a></li>
      </ul>
    </div>
    <div className="content">
      <div className="header">
        <div className="dashboard-heading">
          <div className="logo">
            <img src="logo.png" alt="Law Office Logo" />
          </div>
          <h2>🇮🇳Court-Case-Management</h2>
          <h4>Justice.Raghav Sharma</h4>
        </div>
        <div className="notifications">
          
          <div className="profile" onClick={handleProfileClick}>
              <i className="fas fa-user-circle" />
          </div>
        </div>
      </div>
      <div className="dashboard">
        <div className="card" title="Clients">
          <h3>Clients</h3>
          <p>Total clients: 10</p>
          <i className="fas fa-users" />
          <div className="tooltip">Clients</div>
        </div>
        <div className="card" title="Cases">
          <h3>Cases</h3>
          <p>Total cases: 8</p>
          <i className="fas fa-briefcase" />
          <div className="tooltip">Cases</div>
        </div>
        <div className="card" title="Important Cases">
          <h3>Important Cases</h3>
          <p>Total important cases: 4</p>
          <i className="fas fa-star" />
          <div className="tooltip">Important Cases</div>
        </div>
        <div className="card" title="Archived Cases">
          <h3>Archived Cases</h3>
          <p>Total completed cases: 9</p>
          <i className="fa-solid fa-file-zipper" />
          <div className="tooltip">Archived Cases</div>
        </div>
      </div>
      <div className="case-board" title="Case Board">
        <h3><i className="fas fa-briefcase" /> Case Board</h3>
        <div className="date">
          <i className="fas fa-calendar-alt" />
          <span id="currentDate" />
        </div>
        <p>Manage your case</p>
        <p>Maintain complete case details like case history, case transfer, next hearing date etc.</p>
        <button onClick={handleCaseHistoryClick}>See Cases</button>
        <div className="tooltip">Case Board</div>
      </div>
      <div className="appointment" title="Appointment">
        <h3><i className="far fa-calendar-alt" /> Appointment</h3>
        <div className="date">
          <i className="fas fa-calendar-alt" />
          <span id="currentDate" />
        </div>
        <p>Manage your Appointment</p>
        <p>Schedule your appointment with Advocates Diary and we will remind and notify as and when your appointment is due.</p>
        <button onClick={handleAppointmentClick}>Add Appointment</button>
        <div className="tooltip">Appointment</div>
      </div>
    </div>
  </div>
</div>
  )
}

export default dashboard2