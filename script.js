document.querySelector(".contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const name = data.get("name") || "Prospective customer";
  const organization = data.get("organization") || "Organization not provided";
  const project = data.get("project");
  const message = data.get("message") || "Project details not provided yet.";
  const body = [
    `Name: ${name}`,
    `Organization: ${organization}`,
    `Project type: ${project}`,
    "",
    message,
  ].join("\n");

  const mailto = new URL("mailto:sengchong.teo@azenta.com");
  mailto.searchParams.set("subject", `GENEWIZ project inquiry: ${project}`);
  mailto.searchParams.set("body", body);
  window.location.href = mailto.toString();
  form.querySelector(".form-note").textContent =
    "Email draft prepared for sengchong.teo@azenta.com.";
});

window.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
