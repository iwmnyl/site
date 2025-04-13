
document.getElementById("faq-toggle").addEventListener("click", () => {
  const faq = document.getElementById("faq");
  faq.classList.toggle("hidden");
});

document.getElementById("booking-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = this[0].value;
  const service = this[1].value;
  const datetime = this[2].value;
  const msg = this[3].value;

  const text = `Olá, meu nome é ${name}. Gostaria de agendar o serviço: ${service}. Para o dia/horário: ${datetime}. ${msg}`;
  const url = "https://wa.me/5564992219893?text=" + encodeURIComponent(text);
  window.open(url, "_blank");
});
