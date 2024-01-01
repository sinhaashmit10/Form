import React, { useState } from 'react';
import './Form.css';
// import Datepicker from './Datepicker';

function Form() {
  const [action, setAction] = useState('');
  const [showBackupFolder, setShowBackupFolder] = useState(false);

  const handleActionChange = (selectedAction) => {
    setAction(selectedAction);
  };

  const handleBackupCheckboxChange = () => {
    setShowBackupFolder(!showBackupFolder);
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h3 className='form-heading'>Form</h3>
          <div className="form-container">
            <div className="form-group">
              <label htmlFor="name" className="form-header">
                Requested By:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Name"
              />
            </div>
            <label htmlFor="" className="form-header">
              Database Query:
            </label>
            <textarea
              name=""
              id="dbQuery"
              rows="5"
              className="form-control"
              placeholder='Enter Query'
            ></textarea>
            <label htmlFor="" className="form-header">
              Format:
            </label>
            <div className="dropdown">
              <button 
                className="btn btn-success btn-sm dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select Format
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item">Excel</button>
                </li>
                <li>
                  <button className="dropdown-item">CSV</button>
                </li>
              </ul>
            </div>
            <label htmlFor="" className="form-header">
              Automation Frequency:
            </label>
            <div className="dropdown">
              <button
                className="btn btn-success btn-sm dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Set Frequency
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item">Daily</button>
                </li>
                <li>
                  <button className="dropdown-item">Weekly</button>
                </li>
                <li>
                  <button className="dropdown-item">Monthly</button>
                </li>
              </ul>
            </div>
            <label htmlFor="" className="form-header">
              Start Date & Time:
            </label><br />
            {/* <Datepicker/> */}
            <label htmlFor="" className="form-header">
              Action Required:
            </label>
            <div className="dropdown">
              <button
                className="btn btn-success btn-sm dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select Action
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleActionChange('S3')}
                  >
                    S3
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleActionChange('SMTP')}
                  >
                    SMTP
                  </button>
                </li>
              </ul>
            </div>

            {/* Additional input fields based on selected action */}
            {action === 'S3' && (
              <>
                <label htmlFor="folderName" className="form-header">
                  Folder name:
                </label>
                <input
                  type="text"
                  id="folderName"
                  className="form-control"
                  placeholder="Enter Folder Name"
                />
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onChange={handleBackupCheckboxChange}
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Backup
                  </label>
                </div>
                {showBackupFolder && (
                  <>
                    <label htmlFor="backupFolderName" className="form-header">
                      Backup Folder Name:
                    </label>
                    <input
                      type="text"
                      id="backupFolderName"
                      className="form-control"
                      placeholder="Enter Backup Folder Name"
                    />
                  </>
                )}
              </>
            )}

            {action === 'SMTP' && (
              <>
                <label htmlFor="mailTo" className="form-header">
                  Mail To:
                </label>
                <input
                  type="text"
                  id="mailTo"
                  className="form-control"
                  placeholder="Enter Mail To"
                />
                <label htmlFor="mailCc" className="form-header">
                  Mail CC:
                </label>
                <input
                  type="text"
                  id="mailCc"
                  className="form-control"
                  placeholder="Enter Mail CC"
                />
                <label htmlFor="mailSubject" className="form-header">
                  Mail Subject:
                </label>
                <input
                  type="text"
                  id="mailSubject"
                  className="form-control"
                  placeholder="Enter Mail Subject"
                />
                <label htmlFor="mailBody" className="form-header">
                  Mail Body:
                </label>
                <textarea
                  id="mailBody"
                  rows="5"
                  className="form-control"
                  placeholder="Enter Mail Body"
                ></textarea>
              </>
            )}
          </div>
          <button id='submitBtn' type="button" class="btn btn-success">Submit</button>
        </div>
      </div>
    </>
  );
}

export default Form;
