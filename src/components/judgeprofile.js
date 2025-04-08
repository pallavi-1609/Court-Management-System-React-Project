import React from 'react'

const judgeprofile = () => {
  return (
    <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Judge Profile</title>
  <style dangerouslySetInnerHTML={{__html: "\n    body {\n      font-family: Arial, sans-serif;\n      margin: 0;\n      padding: 0;\n      background-image: url('background.png'); /* Add your background image URL here */\n      background-size: 80%; /* Adjust the zoom level of the background image */\n      background-position: center;\n    }\n\n    .container {\n      display: flex;\n      height: 100vh;\n    }\n\n    .sidebar {\n      background-color: #6acff4;\n      color: #fff;\n      width: 200px;\n      padding: 20px;\n    }\n\n    .sidebar ul {\n      list-style-type: none;\n      padding: 0;\n      margin: 0;\n    }\n\n    .sidebar li {\n      margin-bottom: 10px;\n    }\n\n    .sidebar a {\n      color: #fff;\n      text-decoration: none;\n      display: flex;\n      align-items: center;\n    }\n\n    .sidebar a i {\n      margin-right: 10px;\n      font-size: 20px;\n    }\n\n    .content {\n      flex: 1;\n      padding: 20px;\n    }\n\n    .profile-card {\n      background-color: #f7a9a9;\n      border-radius: 15px;\n      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n      padding: 20px;\n      max-width: 800px;\n      width: 100%;\n      height: 80%;\n      overflow-y: auto;\n    }\n\n    .profile-header {\n      display: flex;\n      align-items: center;\n      margin-bottom: 20px;\n    }\n\n    .profile-picture {\n      width: 120px;\n      height: 120px;\n      border-radius: 50%;\n      overflow: hidden;\n      margin-right: 20px;\n    }\n\n    .profile-picture img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n\n    .profile-info h2 {\n      margin: 0;\n      color: #0047ab;\n    }\n\n    .profile-info p {\n      margin: 5px 0;\n      color: #0066cc;\n    }\n\n    .profile-details {\n      margin-top: 20px;\n    }\n\n    .profile-details h3 {\n      margin-bottom: 10px;\n      color: #0047ab;\n    }\n\n    .profile-details p {\n      margin: 5px 0;\n      color: #333;\n    }\n  " }} />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
  <div className="container">
    <div className="sidebar">
      <h3><i className="fas fa-user-circle" /> Profile</h3>
      <ul>
        <li><a href="/dashboard2"><i class="fa-solid fa-table-columns"></i> Dashboard</a></li>
        <li><a href="/hearing"><i class="fas fa-tasks"></i> Hearings</a></li>
        <li><a href="/appointment2"><i class="far fa-calendar-alt"></i> Appointment</a></li>
        <li><a href="/tax"><i class="fas fa-file-invoice-dollar"></i> Tax</a></li>
        <li><a href="/"><i class="fa-solid fa-right-from-bracket"></i>Logout</a></li>
      </ul>
    </div>
    <div className="content">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-picture">
            <img src="judge.jpg" alt="Judge Profile Picture" />
          </div>
          <div className="profile-info">
            <h2>Justice Raghav Sharma</h2>
            <p>Supreme Court Judge</p>
            <p>Supreme Court of India</p>
          </div>
        </div>
        <div className="profile-details">
          <h3>Personal Details</h3>
          <p><strong>Email:</strong> justice.sharma@supremecourt.in</p>
          <p><strong>Phone:</strong> +91 9876543210</p>
          <p><strong>Address:</strong> 14, Tilak Marg, New Delhi - 110001</p>
          <p><strong>Designation:</strong> Supreme Court Judge</p>
          <p><strong>Service Years:</strong> Supreme Court - 20 years</p>
          <p><strong>Honorary:</strong> Padma Bhushan Award 2023</p>
        </div>
        <div className="profile-details">
          <h3>Professional Details</h3>
          <p><strong>Total Cases Handled:</strong> 500+</p>
          <p><strong>Majority Opinions:</strong> 300+</p>
          <p><strong>Landmark Cases:</strong> XYZ v. ABC, DEF v. GHI</p>
        </div>
      </div>
    </div>
  </div>
</div>


  )
}

export default judgeprofile;