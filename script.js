document.querySelector(".contact-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const name = data.get("name") || "[Name]";
  const organization = data.get("organization") || "[Organization]";
  const project = data.get("project");
  const message = data.get("message") || "[What do you need?]";
  const subject = `GENEWIZ Project enquiry - ${project}`;
  const body = `Hello, I'm ${name} from ${organization}, wanted to know more about ${project},\n\nHere's some background of my project:\n${message}`;
  const note = form.querySelector(".form-note");

  try {
    await navigator.clipboard.writeText(body);
    note.textContent = "Message copied and email draft prepared for sengchong.teo@azenta.com.";
  } catch (error) {
    note.textContent = "Email draft prepared for sengchong.teo@azenta.com.";
  }

  const mailto = `mailto:sengchong.teo@azenta.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
});

window.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
