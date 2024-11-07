export default function json2html(data) {
  let html = `<table data-user="triveni45450@gmail.com">`;
 
  html += `
      <thead>
          <tr><th>Name</th><th>Age</th><th>Gender</th></tr>
      </thead>
      <tbody>`;
 
  data.forEach(item => {
      const name = item.Name || "";  
      const age = item.Age || "";    
      const gender = item.Gender || "";
      html += `
          <tr>
              <td>${name}</td>
              <td>${age}</td>
              <td>${gender}</td>
          </tr>`;
  });
 
  html += `
      </tbody>
  </table>`;
 
  return html;
}

