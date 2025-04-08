import React, { useState, useEffect } from 'react';

const ClientList = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    
    const sampleClients = [
      {
        id: 1,
        name: "Janardhan",
        mobile: "8913603293",
        cases: 2,
        status: true,
        caseDetails: [
          "Case 1: Breach of Contract",
          "Case 2: Personal Injury"
        ]
      },
      {
        id: 2,
        name: "Jacky Hussain",
        mobile: "9876543210",
        cases: 1,
        status: false,
        caseDetails: [
          "Case 1: Divorce Settlement"
        ]
      },
      {
        id: 3,
        name: "Minnal Murali",
        mobile: "7237927399",
        cases: 3,
        status: true,
        caseDetails: [
          "Case 1: Property Dispute",
          "Case 2: Intellectual Property",
          "Case 3: Tax Litigation"
        ]
      },
      {
        id: 4,
        name: "Sanjay Saahu",
        mobile: "9398319356",
        cases: 2,
        status: false,
        caseDetails: [
          "Case 1: Employment Discrimination",
          "Case 2: Wrongful Termination"
        ]
      },
      {
        id: 5,
        name: "Ramana",
        mobile: "9128891277",
        cases: 1,
        status: true,
        caseDetails: [
          "Case 1: Corporate Merger and Acquisition"
        ]
      },
      {
        id: 6,
        name: "Sreeleela",
        mobile: "9849306636",
        cases: 2,
        status: false,
        caseDetails: [
          "Case 1: Criminal Defense",
          "Case 2: DUI/DWI"
        ]
      },
      {
        id: 7,
        name: "Vikram Rathode",
        mobile: "9782472039",
        cases: 3,
        status: true,
        caseDetails: [
          "Case 1: Medical Malpractice",
          "Case 2: Product Liability",
          "Case 3: Personal Injury"
        ]
      },
      {
        id: 8,
        name: "Olivia Martinez",
        mobile: "6297943830",
        cases: 1,
        status: false,
        caseDetails: [
          "Case 1: Family Law"
        ]
      },
      {
        id: 9,
        name: "Bellamkonda Ramesh",
        mobile: "7737430499",
        cases: 2,
        status: true,
        caseDetails: [
          "Case 1: Real Estate Law",
          "Case 2: Landlord-Tenant Disputes"
        ]
      },
      {
        id: 10,
        name: "Bellamkonda Suresh",
        mobile: "8793983409",
        cases: 3,
        status: false,
        caseDetails: [
          "Case 1: Immigration Law",
          "Case 2: Naturalization",
          "Case 3: Deportation Defense"
        ]
      }
    ];
    setClients(sampleClients);
  }, []);

  const toggleStatus = (index) => {
    setClients(prevClients => {
      const updatedClients = [...prevClients];
      updatedClients[index].status = !updatedClients[index].status;
      return updatedClients;
    });
  };

  const generateClientList = () => {
    return clients.map((client, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{client.name}</td>
        <td>{client.mobile}</td>
        <td>{client.cases}</td>
        <td>
          <label className="switch">
            <input type="checkbox" checked={client.status} onChange={() => toggleStatus(index)} />
            <span className="slider round"></span>
          </label>
        </td>
        <td>
          <div className="action">
            <i className="fas fa-ellipsis-v"></i>
            <div className="dropdown-content">
              {client.caseDetails.map((detail, idx) => (
                <p key={idx}>{detail}</p>
              ))}
            </div>
          </div>
        </td>
      </tr>
    ));
  };

  return (
    <div className="container">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <style>{`
        /* CSS styles for the sidebar */
        body {
          background-image: url('background.png');
          background-size: cover; /* Adjust background size as needed */
          background-repeat: no-repeat; /* Prevent background image from repeating */
          /* Add any additional body styles here */
        }
        .sidebar {
          width: 250px;
          height: 100%;
          background-color: #6acff4;
          color: #fff;
          padding: 20px;
          box-sizing: border-box;
          position: fixed;
          top: 0;
          left: 0;
          overflow-y: auto;
          transition: width 0.3s ease-in-out; /* Add transition for smooth sliding effect */
        }

        .sidebar:hover {
          width: 290px; /* Increase the width on hover */
        }

        .sidebar ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }

        .sidebar li {
          margin-bottom: 10px;
        }

        .sidebar a {
          color: #fff;
          text-decoration: none;
          display: flex;
          align-items: center;
        }

        .sidebar a i {
          margin-right: 10px;
          font-size: 20px;
        }

        /* CSS styles for the client list */
        .container {
          display: flex;
        }

        .content {
          flex-grow: 1;
          padding: 20px;
          margin-left: 250px; /* Adjusted margin-left to match sidebar width */
        }

        table {
          width: 100%;
          border-collapse: collapse;
          border: 1px solid #ddd;
          background-color: #cbe0e8
        }

        th, td {
          padding: 8px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }

        tr:hover {
          background-color: #d7fec0;
        }

        .action {
          position: relative;
          display: inline-block;
        }

        .dropdown-content {
          display: none;
          position: absolute;
          background-color: #cee8ff;
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
          z-index: 1;
        }

        .dropdown-content p {
          padding: 12px 16px;
          text-decoration: none;
          display: block;
        }

        .action:hover .dropdown-content {
          display: block;
        }

        /* CSS styles for switch */
        .switch {
          position: relative;
          display: inline-block;
          width: 60px;
          height: 34px;
        }

        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          -webkit-transition: .4s;
          transition: .4s;
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 26px;
          width: 26px;
          left: 4px;
          bottom: 4px;
          background-color: white;
          -webkit-transition: .4s;
          transition: .4s;
        }

        input:checked + .slider {
          background-color: #2196F3;
        }

        input:focus + .slider {
          box-shadow: 0 0 1px #2196F3;
        }

        input:checked + .slider:before {
          -webkit-transform: translateX(26px);
          -ms-transform: translateX(26px);
          transform: translateX(26px);
        }

        /* Rounded sliders */
        .slider.round {
          border-radius: 34px;
        }

        .slider.round:before {
          border-radius: 50%;
        }
      `}</style>

      <div className="sidebar">
        <h3><i className="fas fa-users" /> Client</h3>
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
        <h1>Client List</h1>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Client Name</th>
              <th>Mobile</th>
              <th>Case</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="clientList">
            {generateClientList()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientList;
