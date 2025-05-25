const seatsContainer = document.getElementById('seats-container');
const reserveBtn = document.getElementById('reserve-btn');

for (let i = 1; i <= 20; i++) {
  const seat = document.createElement('div');
  seat.classList.add('seat');
  seat.textContent = i;
  seat.addEventListener('click', () => {
    seat.classList.toggle('selected');
  });
  seatsContainer.appendChild(seat);
}

reserveBtn.addEventListener('click', () => {
  const selectedSeats = document.querySelectorAll('.seat.selected');
  if (selectedSeats.length === 0) {
    alert('Please select at least one seat.');
    return;
  }
  const seatNumbers = Array.from(selectedSeats).map(seat => seat.textContent);
  alert(`You reserved seat(s): ${seatNumbers.join(', ')}`);
});
