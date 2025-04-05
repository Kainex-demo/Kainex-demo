// NFC-Demo (simuliert Scan)
document.getElementById('scanBtn').addEventListener('click', () => {
  const mockData = {
    dating: {
      name: "Max Mustermann",
      hobby: "Reisen",
      telefon: "0123-456789"
    },
    business: {
      firma: "KAINEX GmbH",
      email: "max@kainex.de",
      telefon: "0123-456789"
    }
  };

  const mode = document.querySelector('.mode.active').dataset.mode;
  displayCard(mockData[mode]);
});

function displayCard(data) {
  const card = document.getElementById('card');
  card.innerHTML = `
    <h2>${data.name || data.firma}</h2>
    ${data.hobby ? `<p><strong>Hobby:</strong> ${data.hobby}</p>` : ''}
    ${data.email ? `<p><strong>Email:</strong> ${data.email}</p>` : ''}
    <p><strong>Telefon:</strong> ${data.telefon}</p>
  `;
}
