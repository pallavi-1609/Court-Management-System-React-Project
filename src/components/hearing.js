import React, { useState } from 'react';

const Hearing = () => {
  const [formData, setFormData] = useState({
    taskName: '',
    relatedTo: '',
    startDate: '',
    deadline: '',
    members: '',
    status: 'Completed',
    priority: 'low'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointmentToTable(formData);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      taskName: '',
      relatedTo: '',
      startDate: '',
      deadline: '',
      members: '',
      status: 'Completed',
      priority: 'low'
    });
  };

  const addAppointmentToTable = (appointment) => {
    var table = document.querySelector('.task-list');
    var tableBody = document.createElement('tbody');
    table.appendChild(tableBody);

    var newRow = document.createElement('tr');
    tableBody.appendChild(newRow);

    for (var key in appointment) {
      var newCell = document.createElement('td');
      newCell.textContent = appointment[key];
      newRow.appendChild(newCell);
    }

    var actionCell = document.createElement('td');
    newRow.appendChild(actionCell);
  };

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Hearings</title>
  <style dangerouslySetInnerHTML={{__html: "\n    /* CSS styles */\n    body {\n      font-family: Arial, sans-serif;\n      margin: 0;\n      padding: 0;\n      background-image: url('background.png'); /* Add your background image URL here */\n      background-size: 80%; /* Adjust the zoom level of the background image */\n      background-position: center;\n    }\n\n    .container {\n      display: flex;\n      height: 100vh;\n    }\n\n    .sidebar {\n      width: 200px;\n      height: 100%;\n      background-color: #6acff4;\n      color: #fff;\n      padding: 20px;\n      box-sizing: border-box;\n      position: fixed;\n      top: 0;\n      left: 0;\n      overflow-y: auto;\n      transition: width 0.3s ease-in-out; /* Add transition for smooth sliding effect */\n    }\n\n    .sidebar:hover {\n      width: 220px; /* Increase the width on hover */\n      background-color: #6acff4; /* Change background color on hover */\n    }\n\n    .sidebar ul {\n      list-style-type: none;\n      padding: 0;\n      margin: 0;\n    }\n\n    .sidebar li {\n      margin-bottom: 10px;\n    }\n\n    .sidebar a {\n      color: #fff;\n      text-decoration: none;\n      display: flex;\n      align-items: center;\n    }\n\n    .sidebar a i {\n      margin-right: 10px;\n      font-size: 20px;\n    }\n\n    .content {\n      flex-grow: 1;\n      padding: 20px;\n      margin-left: 300px;\n    }\n\n    .header {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      background-color: #c5f9f5;\n      padding: 10px 20px;\n      border-radius: 15px;\n    }\n\n    .header-left {\n      display: flex;\n      align-items: center;\n    }\n\n    .header h2 {\n      margin: 0;\n    }\n\n    .logo {\n      background-color: #9dc0e2;\n      color: #fff;\n      width: 80px;\n      height: 80px;\n      border-radius: 50%;\n      margin-right: 20px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n    .logo img {\n      width: 100%;\n      height: 100%;\n      border-radius: 50%;\n    }\n\n    .notifications {\n      display: flex;\n      align-items: center;\n      margin-left: 30px;\n    }\n\n    .task-list {\n      width: 100%;\n      border-collapse: collapse;\n      border: 1px solid #ddd;\n    }\n\n    .task-list th, .task-list td {\n      padding: 8px;\n      text-align: left;\n      border-bottom: 1px solid #ddd;\n    }\n\n    .task-list th {\n      background-color: #003366;\n      color: white;\n    }\n\n    .task-list tr:hover {\n      background-color: #d1faad;\n    }\n\n    /* CSS styles for the switch */\n    .switch {\n      position: relative;\n      display: inline-block;\n      width: 60px;\n      height: 34px;\n    }\n\n    .switch input {\n      opacity: 0;\n      width: 0;\n      height: 0;\n    }\n\n    .slider {\n      position: absolute;\n      cursor: pointer;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background-color: #ccc;\n      -webkit-transition: .4s;\n      transition: .4s;\n    }\n\n    .slider:before {\n      position: absolute;\n      content: \"\";\n      height: 26px;\n      width: 26px;\n      left: 4px;\n      bottom: 4px;\n      background-color: white;\n      -webkit-transition: .4s;\n      transition: .4s;\n    }\n\n    input:checked + .slider {\n      background-color: #2196F3;\n    }\n\n    input:focus + .slider {\n      box-shadow: 0 0 1px #2196F3;\n    }\n\n    input:checked + .slider:before {\n      -webkit-transform: translateX(26px);\n      -ms-transform: translateX(26px);\n      transform: translateX(26px);\n    }\n\n    /* Rounded sliders */\n    .slider.round {\n      border-radius: 34px;\n    }\n\n    .slider.round:before {\n      border-radius: 50%;\n    }\n\n    table{\n      background-color: #c5f9f5;\n    }\n  " }} />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <div className="container">
        <div className="sidebar">
          <h3><a href="/hearing"><i class="fas fa-tasks"></i> Hearings</a></h3>
          <ul>
            <li><a href="/dashboard2"><i class="fa-solid fa-table-columns"></i> Dashboard</a></li>
            <li><a href="/hearing"><i class="fas fa-tasks"></i> Hearings</a></li>
            <li><a href="/appointment2"><i class="far fa-calendar-alt"></i> Appointment</a></li>
            <li><a href="/tax"><i class="fas fa-file-invoice-dollar"></i> Tax</a></li>
            <li><a href="/"><i class="fa-solid fa-right-from-bracket"></i>Logout</a></li>
          </ul>
        </div>
        <div className="content">
          <h2>Upcoming Hearings</h2>
          <table className="task-list">
            <tbody>
              <tr>
                <th>No</th>
                <th>Task Name</th>
                <th>Related To</th>
                <th>Start Date</th>
                <th>Deadline</th>
                <th>Members</th>
                <th>Status</th>
                <th>Priority</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Lal Baghicha Case</td>
                <td>Manishaben U Shah <br /> Case Number 5/2019</td>
                <td>15-01-2020</td>
                <td>16-01-2020</td>
                <td><span style={{color: 'green'}}>R</span></td>
                <td><span style={{color: 'green'}}>Completed</span></td>
                <td>medium</td>
              </tr>
              <tr>
                <td>2</td>
                <td>NH57 Accident</td>
                <td>Hiral Ghodasara Bipinbhai <br /> Case Number 78</td>
                <td>21-12-2019</td>
                <td>24-12-2019</td>
                <td><span style={{color: 'purple'}}>P</span></td>
                <td>Not Started</td>
                <td><span style={{color: 'red'}}>high</span></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Divorce</td>
                <td>Pal A Puri <br /> Case Number 12/2018</td>
                <td>03-01-2020</td>
                <td>06-01-2020</td>
                <td><span style={{color: 'navy'}}>N</span> <span style={{color: 'purple'}}>P</span> <span style={{color: 'brown'}}>B</span></td>
                <td><span style={{color: 'blue'}}>In Progress</span></td>
                <td>low</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Litigation</td>
                <td>Other</td>
                <td>15-12-2019</td>
                <td>18-12-2019</td>
                <td><span style={{color: 'purple'}}>P</span></td>
                <td>Not Started</td>
                <td>medium</td>
              </tr>
              <tr>
                <td>5</td>
                <td>College Management</td>
                <td>Other</td>
                <td>09-12-2019</td>
                <td>14-12-2019</td>
                <td><span style={{color: 'green'}}>R</span></td>
                <td><span style={{color: 'green'}}>Completed</span></td>
                <td>medium</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Drunk and Drive</td>
                <td>Darshan N Mehta <br /> Case Number 12/2019</td>
                <td>24-12-2019</td>
                <td>26-12-2019</td>
                <td><span style={{color: 'green'}}>R</span> <span style={{color: 'navy'}}>N</span></td>
                <td>Not Started</td>
                <td>medium</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Illegal Liquor Smuggling</td>
                <td>Other</td>
                <td>11-12-2019</td>
                <td>13-12-2019</td>
                <td><span style={{color: 'green'}}>R</span> <span style={{color: 'green'}}>R</span> <span style={{color: 'purple'}}>P</span></td>
                <td><span style={{color: 'blue'}}>In Progress</span></td>
                <td><span style={{color: 'red'}}>urgent</span></td>
              </tr>
              <tr>
                <td>8</td>
                <td>Land Assests</td>
                <td>Other</td>
                <td>11-12-2019</td>
                <td>13-12-2019</td>
                <td />
                <td><span style={{color: 'blue'}}>In Progress</span></td>
                <td><span style={{color: 'red'}}>urgent</span></td>
              </tr>
            </tbody>
          </table>
          <button onClick={showAppointmentForm} style={{backgroundColor: '#003366', color: 'white', padding: '10px 20px', border: 'none', borderRadius: 5, cursor: 'pointer', marginTop: 20}}>+ Add Hearing</button>
          
          <div id="appointment-form" style={{display: 'none'}}>
            <h2>Add New Appointment</h2>
            <form id="add-appointment-form" onSubmit={handleSubmit}>
              <label htmlFor="task-name">Task Name:</label>
              <input type="text" id="task-name" name="taskName" value={formData.taskName} onChange={handleChange} required /><br /><br />
              <label htmlFor="related-to">Related To:</label>
              <input type="text" id="related-to" name="relatedTo" value={formData.relatedTo} onChange={handleChange} required /><br /><br />
              <label htmlFor="start-date">Start Date:</label>
              <input type="date" id="start-date" name="startDate" value={formData.startDate} onChange={handleChange} required /><br /><br />
              <label htmlFor="deadline">Deadline:</label>
              <input type="date" id="deadline" name="deadline" value={formData.deadline} onChange={handleChange} required /><br /><br />
              <label htmlFor="members">Members:</label>
              <input type="text" id="members" name="members" value={formData.members} onChange={handleChange} /><br /><br />
              <label htmlFor="status">Status:</label>
              <select id="status" name="status" value={formData.status} onChange={handleChange}>
                <option value="Completed">Completed</option>
                <option value="In Progress">In Progress</option>
                <option value="Not Started">Not Started</option>
              </select><br /><br />
              <label htmlFor="priority">Priority:</label>
              <select id="priority" name="priority" value={formData.priority} onChange={handleChange}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select><br /><br />
              <input type="submit" value="Add Appointment" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hearing;

function showAppointmentForm() {
  var form = document.getElementById('appointment-form');
  form.style.display = 'block';
}