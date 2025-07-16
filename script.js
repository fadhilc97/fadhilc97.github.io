const EXPERIENCES = [
  {
    id: "incit",
    position: "Fullstack Developer",
    companyShortName: "INCIT",
    period: {
      start: "November 2022",
      end: "Present",
    },
    descriptions: [
      "Implement the UI components and pages based on designed by UI/UX Team",
      "Integrate REST API that already created with Backend Developer",
      "Collaborate with across functional teams: UI/UX Designers, Backend/Fullstack Developers, QAs, and Technical Writers",
      "Create and integrate the APIs based on the requirements using Nest.js",
      "Payment and invoicing services integration with Stripe, Google Pay, Apple Pay, and Xero",
      "File storage services integration with AWS S3 and GCP Storage",
    ],
    skills: ["React, TypeScript", "Tailwind CSS", "Nest.js", "Prisma.js"],
  },
  {
    id: "tigernix",
    position: "Software Engineer",
    companyShortName: "Tigernix",
    period: {
      start: "March 2020",
      end: "August 2022",
    },
    descriptions: [
      "Develop and extend existing features in ERP application",
      "Provide data migration before live production",
      "Deployment setup using AWS EC2",
      "Create auto-backup database and attachment in server production with cron job and shell script",
    ],
    skills: ["Odoo", "Python", "PostgreSQL"],
  },
  {
    id: "smk-mhs",
    position: "Substitute Teacher",
    companyShortName: "SMK MHS",
    period: {
      start: "August 2019",
      end: "December 2019",
    },
    descriptions: [
      "Provide materials, examination questions and evaluation for Web and Mobile subject",
      'As a participant companion to participate the "LKS 2019" (student skill competition) Web Technology competition Riau Island Province level for school representative',
    ],
    skills: ["Laravel", "PHP", "Teaching"],
  },
  {
    id: "pt-mks",
    position: "IT Staff",
    companyShortName: "PT. MKS",
    period: {
      start: "July 2018",
      end: "March 2019",
    },
    descriptions: [
      'Handle the "Madebyme" makerspace',
      "Instructor of coding for kids",
      "Explore and prototyping related to robotic and IoT",
    ],
    skills: ["Arduino", "Code.org", "Tutoring"],
  },
];

const hamburgerBtn = document.querySelector(".hamburger-menu");
const menuUl = document.querySelector("nav ul");
const experienceLi = document.querySelectorAll(".experience-list-item");
const experienceDetailWrapper = document.querySelector(".experience-detail");

hamburgerBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  showNavMenus();
});

document.addEventListener("click", () => {
  menuUl.classList.remove("show-nav-menus");
});

let prevSelectedExperienceLi = experienceLi[0];
prevSelectedExperienceLi.classList.add("experience-selected");
experienceLi.forEach((el) => {
  el.addEventListener("click", () => {
    prevSelectedExperienceLi.classList.remove("experience-selected");
    el.classList.add("experience-selected");
    prevSelectedExperienceLi = el;

    showExperienceDetails(el);
  });
});

function showNavMenus() {
  menuUl.classList.toggle("show-nav-menus");
}

function showExperienceDetails(el) {
  const experienceId = el.dataset.experienceid;
  const experienceDetails = EXPERIENCES.find(
    (experience) => experienceId === experience.id
  );

  const titleEl = document.createElement("h2");
  titleEl.innerHTML = `${experienceDetails.position}  <span>@ ${experienceDetails.companyShortName}</span>`;

  const periodEl = document.createElement("p");
  periodEl.innerText = `${experienceDetails.period.start} - ${experienceDetails.period.end}`;

  const descriptionEl = document.createElement("ul");
  const descriptionLis = experienceDetails.descriptions.map((description) => {
    const descriptionLi = document.createElement("li");
    descriptionLi.innerText = description;
    return descriptionLi;
  });
  descriptionEl.append(...descriptionLis);

  const skillsEl = document.createElement("p");
  skillsEl.innerText = `Skills: ${experienceDetails.skills.join(", ")}`;

  experienceDetailWrapper.replaceChildren(
    titleEl,
    periodEl,
    descriptionEl,
    skillsEl
  );
}
