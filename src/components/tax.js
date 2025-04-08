import React from 'react'

const tax = () => {
    const addInvoice = () => {
        const table = document.getElementById("invoiceTable");
        const rowCount = table.rows.length;
        const row = table.insertRow(rowCount);
    
        const cell0 = row.insertCell(0);
        const cell1 = row.insertCell(1);
        const cell2 = row.insertCell(2);
        const cell3 = row.insertCell(3);
        const cell4 = row.insertCell(4);
        const cell5 = row.insertCell(5);
        const cell6 = row.insertCell(6);
        const cell7 = row.insertCell(7);
    
        cell0.innerHTML = rowCount;
        cell1.innerHTML = document.getElementById("invoiceNo").value;
        cell2.innerHTML = document.getElementById("clientName").value;
        cell3.innerHTML = "Rs. " + document.getElementById("totalAmount").value;
        cell4.innerHTML = "Rs. " + document.getElementById("paidAmount").value;
        cell5.innerHTML = "Rs. " + document.getElementById("dueAmount").value;
        cell6.innerHTML = document.getElementById("status").value;
        cell7.innerHTML = '<button onclick="deleteInvoice(this)">Delete</button>';
      };
    
      const toggleAddInvoiceForm = () => {
        const form = document.getElementById("addInvoiceForm");
        form.style.display = form.style.display === "none" ? "block" : "none";
      };

    
  return (
    <div>
  <title>Taxes</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
  <style dangerouslySetInnerHTML={{__html: "\n       /* CSS for the sidebar */\n       body {\n      font-family: Arial, sans-serif;\n      margin: 0;\n      padding: 0;\n      background-image: url('background.png'); /* Add your background image URL here */\n      background-position: center;\n       }\n\n       .sidebar {\n           width: 200px;\n           height: 100%;\n           background-color: #6acff4;\n           color: #fff;\n           padding: 20px;\n           box-sizing: border-box;\n           position: fixed;\n           top: 0;\n           left: 0;\n           overflow-y: auto;\n           transition: width 0.3s ease-in-out;\n       }\n\n       .sidebar:hover {\n           width: 220px;\n       }\n\n       .sidebar ul {\n           list-style-type: none;\n           padding: 0;\n           margin: 0;\n       }\n\n       .sidebar li {\n           margin-bottom: 10px;\n       }\n\n       .sidebar a {\n           color: #fff;\n           text-decoration: none;\n           display: flex;\n           align-items: center;\n       }\n\n       .sidebar a i {\n           margin-right: 10px;\n           font-size: 20px;\n       }\n\n       /* CSS for the content */\n       .content {\n           margin-left: 220px;\n           background-size: cover;\n       }\n\n       table {\n        background-color: rgb(161, 245, 245);\n           border-collapse: collapse;\n           width: 100%;\n       }\n\n       th, td {\n           padding: 8px;\n           text-align: left;\n           border-bottom: 1px solid #ddd;\n       }\n\n       tr:hover {\n           background-color:#6fd1f4;\n       }\n\n       .highlight {\n           background-color: #ff9a9a;\n       }\n   " }} />

  <div className="sidebar">
    <h3><i className="fas fa-file-invoice-dollar" /> Tax</h3>
    <ul>
      <li><a href="/dashboard2"><i class="fa-solid fa-table-columns"></i> Dashboard</a></li>
        <li><a href="/hearing"><i class="fas fa-tasks"></i> Hearings</a></li>
        <li><a href="/appointment2"><i class="far fa-calendar-alt"></i> Appointment</a></li>
        <li><a href="/tax"><i class="fas fa-file-invoice-dollar"></i> Tax</a></li>
        <li><a href="/"><i class="fa-solid fa-right-from-bracket"></i>Logout</a></li>
    </ul>
  </div>
  
  <div className="content">
    <h1><i class="fa-solid fa-building"></i> Payment Counter</h1>
    <h2>Fine Invoice</h2>
    <button onClick={toggleAddInvoiceForm}>+ Add Invoice</button>
    <div id="addInvoiceForm" style={{ display: 'none' }}>
          <h3>Add New Invoice</h3>
          <label htmlFor="invoiceNo">Invoice No:</label>
          <input type="text" id="invoiceNo" name="invoiceNo" required />
          <br /><br />
          <label htmlFor="clientName">Client Name:</label>
          <input type="text" id="clientName" name="clientName" required />
          <br /><br />
          <label htmlFor="totalAmount">Total Amount:</label>
          <input type="text" id="totalAmount" name="totalAmount" required />
          <br /><br />
          <label htmlFor="paidAmount">Paid Amount:</label>
          <input type="text" id="paidAmount" name="paidAmount" required />
          <br /><br />
          <label htmlFor="dueAmount">Due Amount:</label>
          <input type="text" id="dueAmount" name="dueAmount" required />
          <br /><br />
          <label htmlFor="status">Status:</label>
          <select id="status" name="status">
            <option value="Due">Due</option>
            <option value="Paid">Paid</option>
          </select>
          <br /><br />
          <button onClick={addInvoice}>Save Invoice</button><br />
          <button onClick={() => document.getElementById("addInvoiceForm").style.display = "none"}>Cancel</button>
    </div>
    <p>Show <select>
        <option>26</option>
      
      </select> entries</p>
    <table id="invoiceTable">
      <tbody><tr>
          <th>SI.No</th>
          <th>Invoice No</th>
          <th>Client Name</th>
          <th>Total (Rs.)</th>
          <th>Paid (Rs.)</th>
          <th>Due</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>1</td>
          <td>INV-000033</td>
          <td>Darshan N Mehta</td>
          <td>Rs. 1040.00</td>
          <td>Rs. 1040</td>
          <td>Rs. 0</td>
          <td>Paid</td>
        </tr>
        <tr>
          <td>2</td>
          <td>INV-000032</td>
          <td>Deepika Sachinbhai Padukon</td>
          <td>Rs. 550.00</td>
          <td>Rs. 550</td>
          <td>Rs. 0</td>
          <td>Paid</td>
        </tr>
        <tr>
          <td>3</td>
          <td>INV-000031</td>
          <td>Devraja Nayakar</td>
          <td>Rs. 4130.00</td>
          <td>Rs. 2120</td>
          <td>Rs. 1010</td>
          <td>Due</td>
        </tr>
        <tr>
          <td>4</td>
          <td>INV-000030</td>
          <td>Hiranya Kumar</td>
          <td>Rs. 3300.00</td>
          <td>Rs. 3000</td>
          <td>Rs. 300</td>
          <td>Due</td>
        </tr>
        <tr>
          <td>5</td>
          <td>INV-000029</td>
          <td>Khalaivani</td>
          <td>Rs.5000.00</td>
          <td>Rs. 2500</td>
          <td>Rs. 2500</td>
          <td>Due</td>
        </tr>
        <tr>
          <td>6</td>
          <td>INV-000028</td>
          <td>Deeparadhana</td>
          <td>Rs. 400.00</td>
          <td>Rs. 400</td>
          <td>Rs. 0</td>
          <td>Paid</td>
        </tr>
        <tr>
          <td>7</td>
          <td>INV-000027</td>
          <td>Varun Modi</td>
          <td>Rs. 1800.00</td>
          <td>Rs. 1200</td>
          <td>Rs. 600</td>
          <td>Due</td>
        </tr>
        <tr>
          <td>8</td>
          <td>INV-000026</td>
          <td>Kavita Bonsley</td>
          <td>Rs. 3000.00</td>
          <td>Rs. 2000</td>
          <td>Rs. 1000</td>
          <td>Due</td>
        </tr>
        <tr>
          <td>9</td>
          <td>INV-000025</td>
          <td>Dileep Kumaran</td>
          <td>Rs. 5000.00</td>
          <td>Rs. 4000</td>
          <td>Rs. 1000</td>
          <td>Due</td>
        </tr>
        <tr>
          <td>10</td>
          <td>INV-000024</td>
          <td>Sanjay Saahu</td>
          <td>Rs. 2400.00</td>
          <td>Rs. 2000</td>
          <td>Rs. 400</td>
          <td>Due</td>
        </tr>
        <tr>
          <td>11</td>
          <td>INV-000023</td>
          <td>Anita Gupta</td>
          <td>Rs. 3500.00</td>
          <td>Rs. 3000</td>
          <td>Rs. 500</td>
          <td>Due</td>
        </tr>
        <tr>
          <td>12</td>
          <td>INV-000022</td>
          <td>Suresh Menon</td>
          <td>Rs. 4000.00</td>
          <td>Rs. 3500</td>
          <td>Rs. 500</td>
          <td>Due</td>
        </tr>
        <tr>
          <td>13</td>
          <td>INV-000021</td>
          <td>Neha Sharma</td>
          <td>Rs. 1800.00</td>
          <td>Rs. 1500</td>
          <td>Rs. 300</td>
          <td>Due</td>
        </tr>
        <tr>
          <td>14</td>
          <td>INV-000020</td>
          <td>Devkumar</td>
          <td>Rs. 5500.00</td>
          <td>Rs. 5000</td>
          <td>Rs. 500</td>
          <td>Due</td>
        </tr>
        <tr>
          <td>15</td>
          <td>INV-000019</td>
          <td>Deepika Sachinbhai Padukon</td>
          <td>Rs. 2800.00</td>
          <td>Rs. 2500</td>
          <td>Rs. 300</td>
          <td>Due</td>
        </tr>
        <tr>
          <td>16</td>
          <td>INV-000018</td>
          <td>Darshan N Mehta</td>
          <td>Rs. 1200.00</td>
          <td>Rs. 1000</td>
          <td>Rs. 200</td>
          <td>Due</td>
        </tr>
        <tr>
          <td>17</td>
          <td>INV-000017</td>
          <td>Hiral Ghodasara Bipinbhai</td>
          <td>Rs. 2100.00</td>
          <td>Rs. 2000</td>
          <td>Rs. 100</td>
          <td>Due</td>
        </tr>
        <tr>
          <td>18</td>
          <td>INV-000016</td>
          <td>Durgesh Yadav</td>
          <td>Rs. 3300.00</td>
          <td>Rs. 3000</td>
          <td>Rs. 300</td>
          <td>Due</td>
        </tr>
        <tr>
          <td>19</td>
          <td>INV-000015</td>
          <td>Khushbu Aggarwal</td>
          <td>Rs. 2500.00</td>
          <td>Rs. 2000</td>
          <td>Rs. 500</td>
          <td>Due</td>
        </tr>
        <tr>
          <td>20</td>
          <td>INV-000014</td>
          <td>Sanjay Verma</td>
          <td>Rs. 1800.00</td>
          <td>Rs. 1500</td>
          <td>Rs. 300</td>
          <td>Due</td>
        </tr>
        <tr>
          <td>21</td>
          <td>INV-000013</td>
          <td>Deepak Tiwari</td>
          <td>Rs. 4000.00</td>
          <td>Rs. 3500</td>
          <td>Rs. 500</td>
          <td>Due</td>
        </tr>
        <tr>
          <td>22</td>
          <td>INV-000012</td>
          <td>Kavita Singhania</td>
          <td>Rs. 2800.00</td>
          <td>Rs. 2500</td>
          <td>Rs. 300</td>
          <td>Due</td>
        </tr>
        <tr>
          <td>23</td>
          <td>INV-000011</td>
          <td>Rahul Sharma</td>
          <td>Rs. 1200.00</td>
          <td>Rs. 1000</td>
          <td>Rs. 200</td>
          <td>Due</td>
        </tr>
        <tr>
          <td>24</td>
          <td>INV-000010</td>
          <td>Darshan N Mehta</td>
          <td>Rs. 2100.00</td>
          <td>Rs. 2000</td>
          <td>Rs. 100</td>
          <td>Due</td>
        </tr>
        <tr>
          <td>25</td>
          <td>INV-000009</td>
          <td>Deepika Sachinbhai Padukon</td>
          <td>Rs. 3300.00</td>
          <td>Rs. 3000</td>
          <td>Rs. 300</td>
          <td>Due</td>
        </tr>
        <tr>
          <td>26</td>
          <td>INV-000008</td>
          <td>Devraj D Shiyal</td>
          <td>Rs. 2500.00</td>
          <td>Rs. 2000</td>
          <td>Rs. 500</td>
          <td>Due</td>
        </tr>
      </tbody></table>
  </div>
</div>

  )
}

export default tax 