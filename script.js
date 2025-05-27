function updateCountdown() {
  const countdown = document.getElementById("countdown");
  if (!countdown) return;

  const now = new Date();
  const nextBirthday = new Date(now.getFullYear(), 4, 28); // Misalnya: 25 Desember
  if (now > nextBirthday) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
  }

  const diff = nextBirthday - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdown.innerHTML = `Countdown ke ulang tahun: ${days} hari, ${hours} jam, ${minutes} menit, ${seconds} detik`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

document.querySelector(".balloons").appendChild(balloon);