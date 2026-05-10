const templates = {
  ngs: {
    title: "NGS intake checklist",
    items: [
      "Project goal and organism or sample source",
      "Sample count, nucleic acid type, concentration, and expected quality",
      "Desired readout, coverage, read length, and analysis needs",
      "Timeline, budget sensitivity, and quote deadline",
    ],
  },
  synthesis: {
    title: "Gene synthesis brief",
    items: [
      "Final sequence, target vector, and insert length",
      "Codon-optimization preference and expression host",
      "Restriction sites, tags, antibiotic marker, and delivery format",
      "Any difficult regions, repeats, GC concerns, or IP constraints",
    ],
  },
  sanger: {
    title: "Sanger submission notes",
    items: [
      "Sample format: tubes, plates, plasmid, PCR product, or colony",
      "Primer plan and whether universal or custom primers are needed",
      "Read direction, expected product size, and number of reactions",
      "Turnaround expectations and any institutional ordering requirements",
    ],
  },
};

const templateTitle = document.querySelector("#template-title");
const templateList = document.querySelector("#template-list");
const templateButtons = document.querySelectorAll("[data-template]");

function renderTemplate(key) {
  const template = templates[key];
  templateTitle.textContent = template.title;
  templateList.replaceChildren(
    ...template.items.map((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      return li;
    }),
  );

  templateButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.template === key);
  });
}

templateButtons.forEach((button) => {
  button.addEventListener("click", () => renderTemplate(button.dataset.template));
});

renderTemplate("ngs");

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

  const mailto = new URL("mailto:your.email@azenta.com");
  mailto.searchParams.set("subject", `GENEWIZ project inquiry: ${project}`);
  mailto.searchParams.set("body", body);
  window.location.href = mailto.toString();
  form.querySelector(".form-note").textContent =
    "Email draft prepared. Update the contact address before publishing.";
});

window.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
