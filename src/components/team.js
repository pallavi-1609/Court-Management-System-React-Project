


import React from 'react'

const team = () => {
  return (
    <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Law Office Team</title>
  <style dangerouslySetInnerHTML={{__html: "\n    /* CSS styles */\n    body {\n      font-family: Arial, sans-serif;\n      margin: 0;\n      padding: 0;\n      background-color: #f2f2f2;\n background-image: url('background.png')    }\n\n    .container {\n      display: flex;\n      height: 100vh;\n    }\n\n    .sidebar {\n      background-color: #6acff4;\n      color: #fff;\n      width: 200px;\n      padding: 20px;\n      position: fixed;\n      overflow-y: auto;\n      height: 100%;\n      transition: width 0.3s ease; /* Smoothly animate width change */\n    }\n\n    .sidebar ul {\n      list-style-type: none;\n      padding: 0;\n      margin: 0;\n    }\n\n    .sidebar li {\n      margin-bottom: 10px;\n    }\n\n    .sidebar a {\n      color: #fff;\n      text-decoration: none;\n      display: flex;\n      align-items: center;\n    }\n\n    .sidebar a i {\n      margin-right: 10px;\n      font-size: 20px;\n    }\n\n    .content {\n      flex: 1;\n      padding: 20px;\n      margin-left: 200px; /* Adjusted to match the width of the sidebar */\n    }\n\n    .team-member {\n      display: flex;\n      align-items: center;\n      background-color: #cbe0e8;\n      border-radius: 15px; /* Reduced border radius */\n      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n      padding: 10px; /* Reduced padding */\n      margin-bottom: 20px;\n    }\n\n    .team-member img {\n      width: 100px; /* Reduced image size */\n      height: 100px; /* Reduced image size */\n      border-radius: 50%;\n      margin-right: 10px; /* Adjusted to move the image to the right */\n    }\n\n    .name {\n      font-weight: bold;\n      margin-bottom: 5px;\n    }\n\n    .details {\n      text-align: left;\n    }\n\n    .status {\n      margin-top: 10px;\n      font-weight: bold;\n      color: #555;\n    }\n\n    .present {\n      color: green;\n    }\n\n    .on-leave {\n      color: red;\n    }\n\n    /* Adjusted sidebar hover effect */\n    .sidebar:hover {\n      width: 220px;\n    }\n  " }} />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
  <div className="container">
    <div className="sidebar">
      <h3><i className="fas fa-users-cog" /> Team Members</h3>
      <ul>
        <li><a href="/dashboard1"><i className="fa-solid fa-table-columns" /> Dashboard</a></li>
        <li><a href="/client"><i className="fas fa-users" /> Client</a></li>
        <li><a href="/case"><i className="fas fa-briefcase" /> Case</a></li>
        <li><a href="/appointment"><i className="far fa-calendar-alt" /> Appointment</a></li>
        <li><a href="/team"><i className="fas fa-users-cog" /> Team Members</a></li>
        <li><a href="/income"><i className="fas fa-money-bill-alt" /> Income</a></li>
        <li><a href="/"><i class="fa-solid fa-right-from-bracket"></i>Logout</a></li>
      </ul>
    </div>
    <div className="content">
      <div className="team-member">
        <img src="lawyer1.jpg" alt="Lawyer 1" />
        <div className="details">
          <div className="name">Adv.Manlini Joseph</div>
          <div className="designation">Associate Lawyer</div>
          <div className="other-details">
            <p>Email: MariaJ@gmail.com</p>
            <p>Phone: +91 9100435566</p>
            <p>Legal ID: XYZ123</p>
            <p>Experience: 5 years</p>
            <p>Cases Handled: 100</p>
          </div>
          <div className="status present">Present</div>
        </div>
      </div>
      <div className="team-member">
        <img src="lawyer2.jpg" alt="Lawyer 2" />
        <div className="details">
        <div className="name">Adv.Vignesh Kumar</div>
          <div className="designation">Assistant Lawyer</div>
          <div className="other-details">
            <p>Email: CarterJ@gmail.com</p>
            <p>Phone: +91 9440273576</p>
            <p>Legal ID: ABC456</p>
            <p>Experience: 3 years</p>
            <p>Cases Handled: 50</p>
          </div>
          <div className="status on-leave">On Leave</div>
        </div>
      </div>
      <div className="team-member">
        <img src="lawyer3.jpg" alt="Lawyer 3" />
        <div className="details">
        <div className="name">Adv.Dinesh Karthik</div>
          <div className="designation">Senior Lawyer</div>
          <div className="other-details">
            <p>Email: CarlosD@gmail.com</p>
            <p>Phone: +91 8897313495</p>
            <p>Legal ID: LMN789</p>
            <p>Experience: 8 years</p>
            <p>Cases Handled: 150</p>
          </div>
          <div className="status on-leave">On Leave</div>
        </div>
      </div>
      <div className="team-member">
        <img src="lawyer4.jpg" alt="Lawyer 4" />
        <div className="details">
        <div className="name">Adv.Jayakumar</div>
          <div className="designation">Junior Lawyer</div>
          <div className="other-details">
            <p>Email: JacobE@gmail.com</p>
            <p>Phone: +91 9030555878</p>
            <p>Legal ID: PQR321</p>
            <p>Experience: 2 years</p>
            <p>Cases Handled: 30</p>
          </div>
          <div className="status present">Present</div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default team