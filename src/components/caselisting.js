import React, { useState } from 'react';

const Caselisting = () => {
  const [cases, setCases] = useState([
    {
      id: 1,
      title: 'Case 1: Prabhu Gopinath vs. Sampath Nandi',
      description: 'This is a civil case regarding a property dispute between John Doe and Jane Smith.',
      caseNumber: 'C1',
      partiesInvolved: 'Prabhu Gopinath, Sampath Nandi',
      caseType: 'Civil',
      currentStatus: 'Hearing Next Week',
      hearingDates: '10-04-2024',
      expanded: false,
    },
    {
      id: 2,
      title: 'Case 2: State vs. Mehtha Corporation',
      description: 'This criminal case involves charges of fraud against XYZ Corporation filed by the state.',
      caseNumber: 'C2',
      partiesInvolved: 'State, Mehtha Corporation',
      caseType: 'Criminal',
      currentStatus: 'Pending',
      hearingDates: '20-04-2024',
      expanded: false,
    },
    {
      id: 3,
      title: 'Case 3: Mary Johnson vs. Chandra Sekahr',
      description: 'This civil case involves a contractual dispute between Mary Johnson and David Brown regarding the sale of a property.',
      caseNumber: 'C3',
      partiesInvolved: 'Mary Johnson, Chandra Sekahr',
      caseType: 'Civil',
      currentStatus: 'Running',
      hearingDates: 'Running',
      expanded: false
    },
    {
      id: 4,
      title: 'Case 4: Semen Solutions vs. Vijetha Corporation',
      description: 'This civil case involves a breach of contract claim filed by ABC Company against DEF Corporation.',
      caseNumber: 'C4',
      partiesInvolved: 'Semen Solutions, Vijetha Corporation',
      caseType: 'Civil',
      currentStatus: 'Hearing Next Month',
      hearingDates: '25-04-2024',
      expanded: false
    },
    {
      id: 5,
      title: 'Case 5: Ramesh Enterprises vs. L&T Ltd.',
      description: 'This criminal case involves charges of intellectual property theft against PQR Inc. filed by LMN Ltd.',
      caseNumber: 'C5',
      partiesInvolved: 'Ramesh Enterprises, L&T Ltd',
      caseType: 'Civil',
      currentStatus: 'Hearing Pending',
      hearingDates: '24-06-2024',
      expanded: false
    },
  ]);

  const [newCaseData, setNewCaseData] = useState({
    caseNo: '',
    description: '',
    caseNumber: '',
    partiesInvolved: '',
    caseType: 'Contract disputes',
    currentStatus: '',
    hearingDates: ''
  });

  const [showForm, setShowForm] = useState(false); 

  const toggleCaseDetails = (id) => {
    setCases(cases.map(caseItem => {
      if (caseItem.id === id) {
        return { ...caseItem, expanded: !caseItem.expanded };
      }
      return caseItem;
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCaseData({ ...newCaseData, [name]: value });
  };

  const addNewCase = () => {
    const newCase = {
      // Generate a unique ID for the new case
      id: Math.floor(Math.random() * 1000),
      title: `Case ${newCaseData.caseNo}: ${newCaseData.partiesInvolved}`,
      description: newCaseData.description,
      caseNumber: newCaseData.caseNumber,
      partiesInvolved: newCaseData.partiesInvolved,
      caseType: newCaseData.caseType,
      currentStatus: newCaseData.currentStatus,
      hearingDates: newCaseData.hearingDates,
      expanded: false
    };
    // Add the new case to the cases array
    setCases([...cases, newCase]);
    // Reset the form fields
    setNewCaseData({
      caseNo: '',
      description: '',
      caseNumber: '',
      partiesInvolved: '',
      caseType: 'Contract disputes',
      currentStatus: '',
      hearingDates: ''
    });
    // Hide the form after adding the case
    setShowForm(false);
  };

  const showAddCaseForm = () => {
    setShowForm(true);
  };

  return (
    <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <main>
        <div className="sidebar">
          <h3><i className="fas fa-briefcase"></i>Case Listing</h3>
          <ul>
            <li><a href="/dashboard1"><i className="fa-solid fa-table-columns" /> Dashboard</a></li>
            <li><a href="/client"><i className="fas fa-users" /> Client</a></li>
            <li><a href="/case"><i className="fas fa-briefcase" /> Case</a></li>
            <li><a href="/appointment"><i className="far fa-calendar-alt" /> Appointment</a></li>
            <li><a href="/team"><i className="fas fa-users-cog" /> Team Members</a></li>
            <li><a href="/income"><i className="fas fa-money-bill-alt" /> Income</a></li>
            <li><a href="/caselisting"><i className="fas fa-briefcase" /> Case Listing</a></li>
            <li><a href="/casehistory"><i className="fas fa-briefcase" /> Case History</a></li>
            <li><a href="/"><i class="fa-solid fa-right-from-bracket"></i>Logout</a></li>
          </ul>
        </div>
        <div className="main-content">
          <section id="caseList">
            <h1>Case Listing</h1>
            {/* Button to toggle form visibility */}
            <button onClick={showAddCaseForm}>Add New Case</button>
            {/* Form to add a new case */}
            {showForm && (
              <div>
                <label htmlFor="caseNo">Case No:</label>
                <input type="text" id="caseNo" name="caseNo" value={newCaseData.caseNo} onChange={handleInputChange} required /><br /><br />
                <label htmlFor="description">Description:</label>
                <input type="text" id="description" name="description" value={newCaseData.description} onChange={handleInputChange} required /><br /><br />
                <label htmlFor="caseNumber">Case Number:</label>
                <input type="text" id="caseNumber" name="caseNumber" value={newCaseData.caseNumber} onChange={handleInputChange} required /><br /><br />
                <label htmlFor="partiesInvolved">Parties Involved:</label>
                <input type="text" id="partiesInvolved" name="partiesInvolved" value={newCaseData.partiesInvolved} onChange={handleInputChange} required /><br /><br />
                <label htmlFor="caseType">Case Type:</label>
                <select id="caseType" name="caseType" value={newCaseData.caseType} onChange={handleInputChange} required>
                  <option value="Contract disputes">Contract disputes</option>
                  <option value="Property disputes">Property disputes</option>
                  <option value="Personal injury cases">Personal injury cases</option>
                  <option value="Family law cases">Family law cases</option>
            
                </select><br /><br />
                <label htmlFor="currentStatus">Current Status:</label>
                <input type="text" id="currentStatus" name="currentStatus" value={newCaseData.currentStatus} onChange={handleInputChange} required /><br /><br />
                <label htmlFor="hearingDates">Hearing Dates:</label>
                <input type="date" id="hearingDates" name="hearingDates" value={newCaseData.hearingDates} onChange={handleInputChange} required /><br /><br />
                <button onClick={addNewCase}>Add Case</button>
              </div>
            )}
            
            {cases.map(caseItem => (
              <div className={`case ${caseItem.expanded ? 'expanded' : ''}`} key={caseItem.id} onClick={() => toggleCaseDetails(caseItem.id)}>
                <h2>{caseItem.title}</h2>
                <p>Description: {caseItem.description}</p>
                <p>Case Number: {caseItem.caseNumber}</p>
                <p>Parties Involved: {caseItem.partiesInvolved}</p>
                <p>Case Type: {caseItem.caseType}</p>
                <p>Current Status: {caseItem.currentStatus}</p>
                <p>Hearing Dates: {caseItem.hearingDates}</p>
              </div>
            ))}
          </section>
        </div>
      </main>
      <style jsx>{`
        body {      
            font-family: Arial, sans-serif;
            margin: 0;     
            padding: 0;      
            background-image: url('background.png'); /* Add your background image URL here */      
            background-size: 80%; /* Adjust the zoom level of the background image */     
            background-position: center;
          }
  
          header {
              background-color: #007bff;
              color: white;
              text-align: center;
              padding: 20px 0;
            }
            h1 {
              margin: 0;
              font-size: 40px;
            }
            main {
              padding: 20px;
              display: flex;
            }
            .sidebar {
              background-color: #6acff4;
              color: hsl(0, 0%, 100%);
              width: 200px;
              padding: 20px;
              transition: width 0.3s ease;
            }
            .sidebar:hover {
              width: 220px;
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
            .main-content {
              flex: 1;
              padding-left: 20px;
            }
            .case {
              background-color: #b0dded;
              border-radius: 10px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              margin-bottom: 20px;
              padding: 20px;
              cursor: pointer;
              overflow: hidden;
              transition: transform 0.3s ease;
            }
            .case:hover {
              transform: translateY(-5px);
            }
            .case.expanded {
              height: auto;
            }
            .case h2 {
              color: #007bff;
            }
            .case p {
              color: #333333;
            }
            button{
                background-color: aquamarine;
            }
      `}</style>
    </div>
  );
};

export default Caselisting;
