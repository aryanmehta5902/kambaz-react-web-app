export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label><br />
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description" rows={10} cols={40}>
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table cellPadding={10}>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="PROJECTS">PROJECTS</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as" defaultValue="Percentage">
                <option value="Percentage">Percentage</option>
                <option value="Points">Points</option>
                <option value="Letter Grade">Letter Grade</option>
              </select>
            </td>
          </tr>

          {/* Submission Type */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type" defaultValue="Online">
                <option value="Online">Online</option>
                <option value="On Paper">On Paper</option>
                <option value="No Submission">No Submission</option>
              </select>
</td>
</tr>
<tr>
   <td>          
  <label>Online Entry Options</label> <br />
  <input type="checkbox" id="wd-text-entry" />
  <label htmlFor="wd-text-entry">Text Entry</label>
  <br />

  <input type="checkbox" id="wd-website-url" />
  <label htmlFor="wd-website-url">Website URL</label>
  <br />

  <input type="checkbox" id="wd-media-recordings" />
  <label htmlFor="wd-media-recordings">Media Recordings</label>
  <br />

  <input type="checkbox" id="wd-student-annotation" />
  <label htmlFor="wd-student-annotation">Student Annotation</label>
  <br />

  <input type="checkbox" id="wd-file-upload" />
  <label htmlFor="wd-file-upload">File Upload</label>
  <br />

            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign To</label>
            </td>
            <td>
              <input id="wd-assign-to" type="text" value="Everyone" />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input id="wd-due-date" type="date" value="2024-05-13" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input id="wd-available-from" type="date" value="2024-05-06" />
              <span> Until </span>
              <input id="wd-available-until" type="date" value="2024-05-20" />
            </td>
          </tr>
        
      </table>
      <hr />
      <table width="100%">
        <tr>
            <td align="right">
                <button type="button" id="wd-buttons">Cancel</button>
            <button type="button" id="wd-buttons">Save</button></td>
        </tr>
      </table>
      
        
       
    </div>
  );
}
  