import React, { useState } from 'react';

const Appointment2 = () => {
  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({
    clientName: '',
    appointmentDate: '',
    appointmentTime: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      id: Math.floor(Math.random() * 10000), 
      clientName: formData.clientName,
      appointmentDate: formData.appointmentDate,
      appointmentTime: formData.appointmentTime
    };
    setAppointments([...appointments, newAppointment]);
    setFormData({ clientName: '', appointmentDate: '', appointmentTime: '' });
  };

  
  const initialAppointments = [
    {
      id: 1,
      clientName: 'Rajesh Kumar',
      appointmentDate: '2024-04-16',
      appointmentTime: '10:00'
    },
    {
      id: 2,
      clientName: 'Priya Patel',
      appointmentDate: '2024-04-17',
      appointmentTime: '11:30'
    },
    {
      id: 3,
      clientName: 'Amit Singh',
      appointmentDate: '2024-04-18',
      appointmentTime: '14:00'
    },
    {
      id: 4,
      clientName: 'Neha Sharma',
      appointmentDate: '2024-04-19',
      appointmentTime: '15:30'
    },
    {
      id: 5,
      clientName: 'Suresh Menon',
      appointmentDate: '2024-04-20',
      appointmentTime: '09:30'
    },
    {
      id: 6,
      clientName: 'Anita Gupta',
      appointmentDate: '2024-04-21',
      appointmentTime: '12:00'
    },
    {
      id: 7,
      clientName: 'Sanjay Verma',
      appointmentDate: '2024-04-22',
      appointmentTime: '16:00'
    },
    {
      id: 8,
      clientName: 'Deepak Tiwari',
      appointmentDate: '2024-04-23',
      appointmentTime: '10:30'
    },
    {
      id: 9,
      clientName: 'Kavita Singhania',
      appointmentDate: '2024-04-24',
      appointmentTime: '14:30'
    },
    {
      id: 10,
      clientName: 'Rahul Sharma',
      appointmentDate: '2024-04-25',
      appointmentTime: '11:00'
    }
  ];

 
  useState(() => {
    setAppointments(initialAppointments);
  }, []);

  return (
    <div>
      <div className="container">
        <div className="sidebar">
          <h3><i className="far fa-calendar-alt" /> Appointments</h3>
          <ul>
          <li><a href="/dashboard2"><i class="fa-solid fa-table-columns"></i> Dashboard</a></li>
        <li><a href="/hearing"><i class="fas fa-tasks"></i> Hearings</a></li>
        <li><a href="/appointment2"><i class="far fa-calendar-alt"></i> Appointment</a></li>
        <li><a href="/tax"><i class="fas fa-file-invoice-dollar"></i> Tax</a></li>
        <li><a href="/"><i class="fa-solid fa-right-from-bracket"></i>Logout</a></li>
      </ul>
        </div>
        <div className="content">
          <h1>Appointments</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="clientName">Client Name:</label>
            <input
              type="text"
              id="clientName"
              name="clientName"
              value={formData.clientName}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="appointmentDate">Date:</label>
            <input
              type="date"
              id="appointmentDate"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="appointmentTime">Time:</label>
            <input
              type="time"
              id="appointmentTime"
              name="appointmentTime"
              value={formData.appointmentTime}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Add Appointment</button>
          </form>
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Client Name</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr key={appointment.id}>
                  <td>{index + 1}</td>
                  <td>{appointment.clientName}</td>
                  <td>{appointment.appointmentDate}</td>
                  <td>{appointment.appointmentTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="clock" id="clock" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <style>{`
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-image: url('background.png'); /* Add your background image URL here */
          background-size: 80%; /* Adjust the zoom level of the background image */
          background-position: center;
        }
        /* CSS styles for the sidebar */
        .sidebar {
          width: 300px;
          height: 100%;
          background-color: #6acff4;
          color: #fff;
          padding: 20px;
          box-sizing: border-box;
          position: fixed;
          top: 0;
          left: 0;
          overflow-y: auto;
          transition: width 0.3s ease-in-out;
        }

        .sidebar:hover {
          width: 320px;
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

        /* CSS styles for the appointments list */
        .container {
          display: flex;
        }

        .content {
          flex-grow: 1;
          padding: 20px;
          margin-left: 300px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          border: 1px solid #ddd;
          background-color: rgb(158, 244, 244);
        }

        th, td {
          padding: 8px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }

        tr:hover {
          background-color: #d7fec0;
        }

        /* Additional styles for the appointment form */
        form {
          margin-bottom: 20px;
        }

        input[type="text"], input[type="date"], input[type="time"] {
          padding: 5px;
          margin-right: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        button[type="submit"] {
          padding: 5px 10px;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        /* Styles for the clock */
        .clock {
          position: fixed;
          top: 20px;
          right: 20px;
          background-color: #fff;
          border: 2px solid #000;
          border-radius: 10px;
          padding: 10px;
        }
      `}</style>
    </div>
  );
};

export default Appointment2;