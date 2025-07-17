// Countdown timer

const indicatori = document.querySelectorAll('#time span'),
  scadenza = new Date(2026, 10, 1, 0, 0, 0, 0),
  ms_scadenza = scadenza.getTime(),
  ms_in_giorno = 24 * 60 * 60 * 1000,
  ms_in_ora = 60 * 60 * 1000,
  ms_in_min = 60 * 1000

function countdown() {
  const data_corrente = new Date(),
    ms_corrente = data_corrente.getTime(),
    ms_rimanenti = ms_scadenza - ms_corrente

  let giorni = Math.floor(ms_rimanenti / ms_in_giorno),
    ore = Math.floor((ms_rimanenti % ms_in_giorno) / ms_in_ora),
    minuti = Math.floor((ms_rimanenti % ms_in_ora) / ms_in_min),
    secondi = Math.floor((ms_rimanenti % ms_in_min) / 1000)

  let time = [giorni, ore, minuti, secondi]

  indicatori.forEach((span, index) => {
    span.innerHTML = time[index]
  })


}

const countdownInterval = setInterval(countdown, 1000);
