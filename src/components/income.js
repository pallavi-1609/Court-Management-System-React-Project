import React, { useState } from 'react';

const Income = () => {
  
  const incomeData = [
    {
      id: 1,
      name: 'Rahul Sharma',
      amount: 1500.00,
      status: 'paid',
      actions: ['Divorce Case', 'Criminal Case', 'Property Dispute']
    },
    {
      id: 2,
      name: 'Priya Desai',
      amount: 2000.00,
      status: 'due',
      actions: ['Family Dispute', 'Corporate Fraud', 'Intellectual Property']
    },
    {
      id: 3,
      name: 'Vikram Malhotra',
      amount: 3000.00,
      status: 'paid',
      actions: ['Financial Fraud', 'Personal Injury', 'Real Estate Litigation']
    },
    {
      id: 4,
      name: 'Kriti Sanon',
      amount: 2500.00,
      status: 'due',
      actions: ['Employment Dispute', 'Insurance Claims', 'Consumer Rights']
    },
    {
      id: 5,
      name: 'Varun Sharma',
      amount: 1800.00,
      status: 'paid',
      actions: ['Immigration Issues', 'Bankruptcy Cases', 'Contract Disputes']
    },
    {
      id: 6,
      name: 'Parineeti Chopra',
      amount: 2200.00,
      status: 'due',
      actions: ['Environmental Law', 'Maritime Law', 'Medical Malpractice']
    },
    {
      id: 7,
      name: 'Rajkummar Rao',
      amount: 2700.00,
      status: 'paid',
      actions: ['Product Liability', 'Securities Law', 'Tax Law']
    },
    {
      id: 8,
      name: 'Radhika Apte',
      amount: 1900.00,
      status: 'due',
      actions: ['White-Collar Crimes', 'Wills & Trusts', 'Wrongful Death']
    },
    {
      id: 9,
      name: 'Shruti Haasan',
      amount: 3100.00,
      status: 'paid',
      actions: ['International Law', 'Entertainment Law', 'Education Law']
    },
    {
      id: 10,
      name: 'Aditya Roy Kapur',
      amount: 2600.00,
      status: 'due',
      actions: ['Banking Law', 'Constitutional Law', 'Environmental Law']
    }
  ];

  
  const [searchTerm, setSearchTerm] = useState('');

  
  const [newServiceFormVisible, setNewServiceFormVisible] = useState(false);

  
  const [newServiceData, setNewServiceData] = useState({
    name: '',
    amount: '',
    status: 'paid',
    actions: ['', '', '']
  });

  
  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  
  const handleNewServiceInputChange = (event, field) => {
    const { value } = event.target;
    setNewServiceData(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  
  const handleAddServiceSubmit = () => {
    
  };

 
  const generateTableRows = () => {
    return incomeData
      .filter(item => item.name.toLowerCase().includes(searchTerm))
      .map((item, index) => (
        <tr key={item.id}>
          <td>{index + 1}</td>
          <td>{item.name}</td>
          <td>{item.amount.toFixed(2)}</td>
          <td><span className={item.status}>{item.status}</span></td>
          <td>
            <div className="action">
              <i className="fas fa-ellipsis-v"></i>
              <div className="action-dropdown">
                {item.actions.map(action => (
                  <div key={action} className="case-box"><p>{action}</p></div>
                ))}
              </div>
            </div>
          </td>
        </tr>
      ));
  };

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Law Office</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
      <style dangerouslySetInnerHTML={{__html: `
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: Arial, sans-serif;
          background-color: #d6edf8;
          background-image: url('background.png');
        }

        .container {
          display: flex;
          height: 100vh;
        }

        .sidebar {
          background-color: #6acff4;
          color: #fff;
          width: 250px;
          padding: 20px;
          transition: width 0.3s ease-in-out;
        }

        .sidebar:hover {
          width: 290px;
        }

        .sidebar nav ul {
          list-style-type: none;
        }

        .sidebar nav ul li a {
          display: block;
          color: #fff;
          text-decoration: none;
          padding: 10px;
          border-radius: 5px;
          transition: background-color 0.3s;
        }

        .sidebar nav ul li a:hover {
          background-color: #6acff4;
        }

        .sidebar nav ul li a i {
          margin-right: 10px;
        }

        .content {
          flex-grow: 1;
          padding: 20px;
        }

        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .header-left {
          display: flex;
          align-items: center;
        }

        .logo img {
          height: 100px;
          margin-right: 10px;
          width: 80px;
          border-radius: 50%;
          align-items: center;
          justify-content: center;
        }

        .header-right {
          display: flex;
          align-items: center;
        }

        .header-right button {
          margin-right: 10px;
          padding: 8px 16px;
          background-color: #6acff4;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .search-box {
          position: relative;
        }

        .search-box input[type="text"] {
          padding: 8px 30px 8px 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .search-box i {
          position: absolute;
          top: 50%;
          right: 10px;
          transform: translateY(-50%);
          color: #999;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          background-color: #dafef0;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        th, td {
          padding: 10px;
          text-align: left;
          border-bottom: 1px solid #8ec8d4;
        }

        th {
          background-color: #79b6f0;
          color: #c4f0fb;
        }

        .paid {
          color: green;
          font-weight: bold;
        }

        .due {
          color: red;
          font-weight: bold;
        }

        .action-dropdown {
          display: none;
          position: absolute;
          background-color: #b4f4f9;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          border-radius: 5px;
          padding: 10px;
          z-index: 1;
        }

        .action-dropdown p {
          margin: 5px 0;
          background-color: #95e8fd;
          padding: 5px;
          border-radius: 3px;
        }

        .action:hover .action-dropdown {
          display: block;
        }

        .action-dropdown .case-box {
          background-color: #95e8fd;
          padding: 5px;
          margin-bottom: 5px;
          border-radius: 3px;
        }

        /* Styles for user input fields and select box */
        input[type="text"], select {
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
          margin-right: 10px;
          margin-bottom: 10px;
        }

        select {
          background-color: #fff;
        }

        option {
          background-color: #f2f2f2;
          color: #333;
          padding: 8px;
        }

        /* Highlight row on search */
        tr.highlighted {
          background-color: #ffffcc;
          animation: highlight 3s ease;
        }

        @keyframes highlight {
          0% {
            background-color: transparent;
          }
          50% {
            background-color: #ffffcc;
          }
          100% {
            background-color: transparent;
          }
        }
      `}} />
      <div className="container">
        <div className="sidebar">
          <h3><i className="fas fa-money-bill-alt" /> Income</h3>
          <nav>
            <ul>
              <li><a href="/dashboard1"><i className="fa-solid fa-table-columns" /> Dashboard</a></li>
              <li><a href="/client"><i className="fas fa-users" /> Client</a></li>
              <li><a href="/case"><i className="fas fa-briefcase" /> Case</a></li>
              <li><a href="/appointment"><i className="far fa-calendar-alt" /> Appointment</a></li>
              <li><a href="/team"><i className="fas fa-users-cog" /> Team Members</a></li>
              <li><a href="/income"><i className="fas fa-money-bill-alt" /> Income</a></li>
              <li><a href="/"><i class="fa-solid fa-right-from-bracket"></i>Logout</a></li>
            </ul>
          </nav>
        </div>
        <div className="content">
          <header>
            <div className="header-left">
              <div className="logo">
                <img src="logo.png" alt="Law Office Logo" />
              </div>
              <h2>Service - Fee</h2>
            </div>
            <div className="header-right">
              <div className="search-box">
                <input
                  type="text"
                  id="searchInput"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleSearchInputChange}
                />
                <i className="fas fa-search" />
              </div>
            </div>
          </header>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody id="tableBody">
      
                {generateTableRows()}
              </tbody>
            </table>
          </div>
          <div>
            <button id="addServiceBtn" onClick={() => setNewServiceFormVisible(true)}>Add Service</button>
          </div>
          
          {newServiceFormVisible && (
            <div id="addServiceForm">
              <input
                type="text"
                id="nameInput"
                placeholder="Name"
                value={newServiceData.name}
                onChange={(event) => handleNewServiceInputChange(event, 'name')}
              />
              <input
                type="text"
                id="amountInput"
                placeholder="Amount"
                value={newServiceData.amount}
                onChange={(event) => handleNewServiceInputChange(event, 'amount')}
              />
              <select
                id="statusSelect"
                value={newServiceData.status}
                onChange={(event) => handleNewServiceInputChange(event, 'status')}
              >
                <option value="paid">Paid</option>
                <option value="due">Due</option>
              </select>
              {[1, 2, 3].map((index) => (
                <input
                  key={index}
                  type="text"
                  id={`action${index}Input`}
                  placeholder={`Action ${index}`}
                  value={newServiceData.actions[index - 1]}
                  onChange={(event) => handleNewServiceInputChange(event, `actions[${index - 1}]`)}
                />
              ))}
              <button id="addServiceSubmit" onClick={handleAddServiceSubmit}>Add</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Income;