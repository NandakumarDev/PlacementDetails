const formEl = document.querySelector("form");
const tbodyEl = document.querySelector("tbody");
const tableEl = document.querySelector("table");
function onAddWebsite(e) {
  e.preventDefault();
  const website = document.getElementById("details").value;
  const url = document.getElementById("cmpname").value;
  tbodyEl.innerHTML += `
      <tr>
          <td>${url}</td>
          <td>${website}</td>
      </tr>
  `;
}
formEl.addEventListener("submit", onAddWebsite);
