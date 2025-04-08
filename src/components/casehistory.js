import React from 'react';

const CaseHistory = () => {
    function showCaseHistory(caseId) {
        const caseHistoryDetails = document.getElementById('case-history-details');
        caseHistoryDetails.innerHTML = '';
        switch (caseId) {
            case 'case1':
                caseHistoryDetails.innerHTML = `
                    <h3>Case 1 - Breach of Contract</h3>
                    <div class="case-info">
                        <span>Case Number:</span> 123456
                        <span>Filed Date:</span> April 1, 2024
                    </div>
                    <p>This case involves a breach of contract dispute between two parties. The plaintiff alleges that the defendant failed to fulfill their contractual obligations, causing significant financial harm. The case is currently in the discovery phase, and a hearing is scheduled for the end of the month.</p>
                `;
                break;
            case 'case2':
                caseHistoryDetails.innerHTML = `
                    <h3>Case 2 - Intellectual Property Dispute</h3>
                    <div class="case-info">
                        <span>Case Number:</span> 789012
                        <span>Filed Date:</span> May 15, 2024
                    </div>
                    <p>This case is a dispute over intellectual property rights. The plaintiff claims that the defendant has infringed on their patents and trademarks, and is seeking damages and an injunction to prevent further use. The case is currently in the pre-trial phase, with both parties engaged in settlement negotiations.</p>
                `;
                break;
            case 'case3':
                caseHistoryDetails.innerHTML = `
                    <h3>Case 3 - Employment Discrimination</h3>
                    <div class="case-info">
                        <span>Case Number:</span> 345678
                        <span>Filed Date:</span> July 1, 2024
                    </div>
                    <p>This case involves an employment discrimination lawsuit. The plaintiff alleges that they were unfairly terminated from their job due to their race and gender. The case is currently in the trial phase, with both sides presenting their evidence and arguments.</p>
                `;
                break;
            case 'case4':
                caseHistoryDetails.innerHTML = `
                    <h3>Case 4 - Real Estate Litigation</h3>
                    <div class="case-info">
                        <span>Case Number:</span> 901234
                        <span>Filed Date:</span> September 1, 2024
                    </div>
                    <p>This case is a dispute over a real estate transaction. The plaintiff alleges that the defendant misrepresented the condition of the property, and is seeking compensation for the cost of repairs. The case is currently in the discovery phase, with both parties exchanging evidence and depositions.</p>
                `;
                break;
            case 'case5':
                caseHistoryDetails.innerHTML = `
                    <h3>Case 5 - Personal Injury Claim</h3>
                    <div class="case-info">
                        <span>Case Number:</span> 567890
                        <span>Filed Date:</span> November 1, 2024
                    </div>
                    <p>This case involves a personal injury claim. The plaintiff was involved in a car accident and suffered significant injuries. They are seeking compensation from the defendant for medical expenses, lost wages, and pain and suffering. The case is currently in the pre-trial settlement negotiations phase.</p>
                `;
                break;
            default:
                caseHistoryDetails.innerHTML = '<p>No case history available.</p>';
        }
    }

    function downloadPDF(caseId) {
        
        const filename = 'case.pdf';
        const a = document.createElement('a');
        a.href = filename;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    return (
        <div>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Case History</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            <style dangerouslySetInnerHTML={{__html: "\n        /* CSS styles */\n        body {\n            font-family: Arial, sans-serif;\n            margin: 0;\n            padding: 0;\n            background-image: url('background.png'); /* Add your background image URL here */\n            background-size: 80%; /* Adjust the zoom level of the background image */\n            background-position: center;\n        }\n\n        .container {\n            display: flex;\n            height: 100vh;\n        }\n\n        .sidebar {\n            background-color: #6acff4; /* Change sidebar color to purple */\n            color: #fff;\n            width: 200px;\n            height: 1250px;\n            padding: 20px;\n            border-top-left-radius: 15px; /* Increase curve radius on top left */\n            border-bottom-left-radius: 15px; /* Increase curve radius on bottom left */\n        }\n\n        .sidebar ul {\n            list-style-type: none;\n            padding: 0;\n            margin: 0;\n        }\n\n        .sidebar li {\n            margin-bottom: 10px;\n        }\n\n        .sidebar a {\n            color: #fff;\n            text-decoration: none;\n            display: flex;\n            align-items: center;\n        }\n\n        .sidebar a i {\n            margin-right: 10px;\n            font-size: 20px; /* Increase the size of the icons */\n        }\n\n        .sidebar:hover {\n            width: 220px;\n        }\n\n        .content {\n            flex: 1;\n            padding: 20px;\n        }\n\n        .case-history-content {\n            display: flex;\n            flex-wrap: wrap;\n            justify-content: space-between;\n        }\n\n        .case-list-item {\n            background-color: #95d0d3;\n            width: 43%;\n            padding: 20px;\n            border-radius: 15px;\n            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n            cursor: pointer;\n            margin-bottom: 20px;\n            transition: transform 0.3s ease;\n        }\n\n        .case-list-item:hover {\n            transform: translateY(-5px);\n        }\n\n        .case-list-item h3 {\n            margin-bottom: 10px;\n            color: #333;\n        }\n\n        .case-list-item .case-info {\n            font-size: 14px;\n            color: #666;\n        }\n\n        .case-list-item .case-info span {\n            font-weight: bold;\n            color: #333;\n        }\n\n        .case-history-details {\n            background-color: #f5f5f5;\n            padding: 20px;\n            border-radius: 5px;\n            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n            margin-top: 20px;\n            width: 47%;\n        }\n\n        .case-history-details h3 {\n            margin-bottom: 10px;\n            color: #333;\n        }\n\n        .case-history-details p {\n            color: #666;\n            line-height: 1.5;\n            margin-bottom: 10px;\n        }\n\n        .case-history-details .case-info {\n            display: flex;\n            justify-content: space-between;\n            font-size: 14px;\n            color: #666;\n            margin-bottom: 20px;\n        }\n\n        .case-history-details .case-info span {\n            font-weight: bold;\n            color: #333;\n        }\n\n        .logo {\n            text-align: center;\n        }\n\n        /* Add more styles for the 20 flex boxes */\n        .case-list-item:nth-child(1) {\n            background-color: #e6e6ff;\n        }\n\n        .case-list-item:nth-child(2) {\n            background-color: #fff0f0;\n        }\n\n        .case-list-item:nth-child(3) {\n            background-color: #f0ffff;\n        }\n\n        .case-list-item:nth-child(4) {\n            background-color: #ffffd0;\n        }\n\n        .case-list-item:nth-child(5) {\n            background-color: #e6e6ff;\n        }\n\n        .case-list-item:nth-child(6) {\n            background-color: #fff0f0;\n        }\n\n        .case-list-item:nth-child(7) {\n            background-color: #f0ffff;\n        }\n\n        .case-list-item:nth-child(8) {\n            background-color: #ffffd0;\n        }\n\n        .case-list-item:nth-child(9) {\n            background-color: #e6e6ff;\n        }\n\n        .case-list-item:nth-child(10) {\n            background-color: #fff0f0;\n        }\n\n        .case-list-item:nth-child(11) {\n            background-color: #f0ffff;\n        }\n\n        .case-list-item:nth-child(12) {\n            background-color: #ffffd0;\n        }\n\n        .case-list-item:nth-child(13) {\n            background-color: #e6e6ff;\n        }\n\n        .case-list-item:nth-child(14) {\n            background-color: #fff0f0;\n        }\n\n        .case-list-item:nth-child(15) {\n            background-color: #f0ffff;\n        }\n\n        .case-list-item:nth-child(16) {\n            background-color: #ffffd0;\n        }\n\n        .case-list-item:nth-child(17) {\n            background-color: #e6e6ff;\n        }\n\n        .case-list-item:nth-child(18) {\n            background-color: #fff0f0;\n        }\n\n        .case-list-item:nth-child(19) {\n            background-color: #f0ffff;\n        }\n\n        .case-list-item:nth-child(20) {\n            background-color: #ffffd0;\n        }\n\n        /* New styles for dashboard links */\n        .sidebar ul.dashboard-links {\n            margin-top: 30px;\n        }\n\n        .sidebar ul.dashboard-links li {\n            margin-bottom: 10px;\n        }\n\n        .sidebar ul.dashboard-links a {\n            color: #fff;\n            text-decoration: none;\n            display: flex;\n            align-items: center;\n        }\n\n        .sidebar ul.dashboard-links a i {\n            margin-right: 10px;\n            font-size: 20px; /* Increase the size of the icons */\n        }\n\n        .sidebar ul.dashboard-links li:nth-child(even) {\n            background-color: #95d0d3; /* Background color for even rows */\n        }\n" }} />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            <div className="container">
                <div className="sidebar">
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
                <div className="content">
                    <div className="case-history-content">
                        <div className="case-list-item" onClick={() => showCaseHistory('case1')}>
                            <h3>Case 1 - Breach of Contract</h3>
                            <div className="case-info">
                                <span>Case Number:</span> 123456
                                <span>Filed Date:</span> April 1, 2024
                            </div>
                            <button onClick={() => downloadPDF('case1')}>Download PDF</button>
                        </div>
                        <div className="case-list-item" onClick={() => showCaseHistory('case2')}>
                            <h3>Case 2 - Intellectual Property Dispute</h3>
                            <div className="case-info">
                                <span>Case Number:</span> 789012
                                <span>Filed Date:</span> May 15, 2024
                            </div>
                            <button onClick={() => downloadPDF('case2')}>Download PDF</button>
                        </div>
                        <div className="case-list-item" onClick={() => showCaseHistory('case3')}>
                            <h3>Case 3 - Employment Discrimination</h3>
                            <div className="case-info">
                                <span>Case Number:</span> 345678
                                <span>Filed Date:</span> July 1, 2024
                            </div>
                            <button onClick={() => downloadPDF('case3')}>Download PDF</button>
                        </div>
                       
                        <div className="case-list-item" onClick={() => showCaseHistory('case4')}>
                            <h3>Case 4 - Real Estate Litigation</h3>
                            <div className="case-info">
                                <span>Case Number:</span> 901234
                                <span>Filed Date:</span> September 1, 2024
                            </div>
                            <button onClick={() => downloadPDF('case4')}>Download PDF</button>
                        </div>
                        <div className="case-list-item" onClick={() => showCaseHistory('case5')}>
                            <h3>Case 5 - Personal Injury Claim</h3>
                            <div className="case-info">
                                <span>Case Number:</span> 567890
                                <span>Filed Date:</span> November 1, 2024
                            </div>
                            <button onClick={() => downloadPDF('case5')}>Download PDF</button>
                        </div>
                        <div className="case-list-item" onClick={() => showCaseHistory('case6')}>
                            <h3>Case 6 - Construction Dispute</h3>
                            <div className="case-info">
                                <span>Case Number:</span> 234567
                                <span>Filed Date:</span> January 15, 2024
                            </div>
                            <button onClick={() => downloadPDF('case6')}>Download PDF</button>
                        </div>
                        <div className="case-list-item" onClick={() => showCaseHistory('case7')}>
                            <h3>Case 7 - Medical Malpractice</h3>
                            <div className="case-info">
                                <span>Case Number:</span> 678901
                                <span>Filed Date:</span> March 1, 2024
                            </div>
                            <button onClick={() => downloadPDF('case7')}>Download PDF</button>
                        </div>
                        <div className="case-list-item" onClick={() => showCaseHistory('case8')}>
                            <h3>Case 8 - Divorce Proceedings</h3>
                            <div className="case-info">
                                <span>Case Number:</span> 456789
                                <span>Filed Date:</span> June 1, 2024
                            </div>
                            <button onClick={() => downloadPDF('case8')}>Download PDF</button>
                        </div>
                        <div className="case-list-item" onClick={() => showCaseHistory('case9')}>
                            <h3>Case 9 - Environmental Litigation</h3>
                            <div className="case-info">
                                <span>Case Number:</span> 901234
                                <span>Filed Date:</span> August 15, 2024
                            </div>
                            <button onClick={() => downloadPDF('case9')}>Download PDF</button>
                        </div>
                        <div className="case-list-item" onClick={() => showCaseHistory('case10')}>
                            <h3>Case 10 - Product Liability</h3>
                            <div className="case-info">
                                <span>Case Number:</span> 567890
                                <span>Filed Date:</span> October 1, 2024
                            </div>
                            <button onClick={() => downloadPDF('case10')}>Download PDF</button>
                        </div>
                        <div className="case-list-item" onClick={() => showCaseHistory('case11')}>
                            <h3>Case 11 - Defamation</h3>
                            <div className="case-info">
                                <span>Case Number:</span> 234567
                                <span>Filed Date:</span> December 1, 2024
                            </div>
                            <button onClick={() => downloadPDF('case11')}>Download PDF</button>
                        </div>
                        <div className="case-list-item" onClick={() => showCaseHistory('case12')}>
                            <h3>Case 12 - Tax Dispute</h3>
                            <div className="case-info">
                                <span>Case Number:</span> 678901
                                <span>Filed Date:</span> February 1, 2024
                            </div>
                            <button onClick={() => downloadPDF('case12')}>Download PDF</button>
                        </div>
                        <div className="case-list-item" onClick={() => showCaseHistory('case13')}>
                            <h3>Case 13 - Commercial Litigation</h3>
                            <div className="case-info">
                                <span>Case Number:</span> 456789
                                <span>Filed Date:</span> April 15, 2024
                            </div>
                            <button onClick={() => downloadPDF('case13')}>Download PDF</button>
                        </div>
                        <div className="case-list-item" onClick={() => showCaseHistory('case14')}>
                            <h3>Case 14 - Landlord-Tenant Dispute</h3>
                            <div className="case-info">
                                <span>Case Number:</span> 901234
                                <span>Filed Date:</span> June 1, 2024
                            </div>
                            <button onClick={() => downloadPDF('case14')}>Download PDF</button>
                        </div>
                        <div className="case-list-item" onClick={() => showCaseHistory('case15')}>
                            <h3>Case 15 - Securities Fraud</h3>
                            <div className="case-info">
                                <span>Case Number:</span> 567890
                                <span>Filed Date:</span> August 1, 2024
                            </div>
                            <button onClick={() => downloadPDF('case15')}>Download PDF</button>
                        </div>
                        <div className="case-list-item" onClick={() => showCaseHistory('case16')}>
                            <h3>Case 16 - Wrongful Termination</h3>
                            <div className="case-info">
                                <span>Case Number:</span> 234567
                                <span>Filed Date:</span> October 15, 2024
                            </div>
                            <button onClick={() => downloadPDF('case16')}>Download PDF</button>
                        </div>
                        <div className="case-list-item" onClick={() => showCaseHistory('case17')}>
                            <h3>Case 17 - Insurance Dispute</h3>
                            <div className="case-info">
                                <span>Case Number:</span> 678901
                                <span>Filed Date:</span> December 1, 2024
                            </div>
                            <button onClick={() => downloadPDF('case17')}>Download PDF</button>
                        </div>
                        <div className="case-list-item" onClick={() => showCaseHistory('case18')}>
                            <h3>Case 18 - Antitrust Violation</h3>
                            <div className="case-info">
                                <span>Case Number:</span> 456789
                                <span>Filed Date:</span> February 15, 2024
                            </div>
                            <button onClick={() => downloadPDF('case18')}>Download PDF</button>
                        </div>
                        <div className="case-list-item" onClick={() => showCaseHistory('case19')}>
                            <h3>Case 19 - Construction Defect</h3>
                            <div className="case-info">
                                <span>Case Number:</span> 901234
                                <span>Filed Date:</span> April 1, 2024
                            </div>
                            <button onClick={() => downloadPDF('case19')}>Download PDF</button>
                        </div>
                        <div className="case-list-item" onClick={() => showCaseHistory('case20')}>
                            <h3>Case 20 - Bankruptcy Proceedings</h3>
                            <div className="case-info">
                                <span>Case Number:</span> 567890
                                <span>Filed Date:</span> May 15, 2024
                            </div>
                            <button onClick={() => downloadPDF('case20')}>Download PDF</button>
                        </div>
                    </div>
                    <div id="case-history-details" className="case-history-details">
                        <p>Select a case from the list to view details.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CaseHistory;
