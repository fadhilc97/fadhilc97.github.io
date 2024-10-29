const EXPERIENCES = [
  {
    id: "incit",
    position: "Frontend Developer",
    companyShortName: "INCIT",
    period: {
      start: "November 2022",
      end: "Present",
    },
    descriptions: [
      "Implement the UI components and pages based on designed by UI/UX ",
      "Integrate REST API that already created with Backend Developer",
      "Collaborate with across functional teams: UI/UX Designers, Backend/Fullstack Developers, QAs, and Technical Writers",
    ],
  },
  {
    id: "tigernix",
    position: "Software Engineer",
    companyShortName: "Tigernix",
    period: {
      start: "March 202",
      end: "August 2022",
    },
    descriptions: [
      "Develop and extend existing features in ERP application",
      "Provide data migration before live production",
      "Deployment setup using AWS EC2",
      "Create auto-backup database and attachment in server production with cron job and shell script",
    ],
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
      "Provide materials, examination questions and evaluation for Web and Mobile subjec",
      'As a participant companion to participate the "LKS 2019" (student skill competition) Web and Technology competition Riau Island Province level for school representative',
    ],
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
  menuUl.classList.remove("nav-menus");
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
  menuUl.classList.toggle("nav-menus");
}

function showExperienceDetails(el) {
  const experienceId = el.dataset.experienceid;
  const experienceDetails = EXPERIENCES.find(
    (experience) => experienceId === experience.id
  );

  const titleEl = document.createElement("h2");
  titleEl.innerHTML = `${experienceDetails.position} @ <span>${experienceDetails.companyShortName}</span>`;

  const periodEl = document.createElement("p");
  periodEl.innerText = `${experienceDetails.period.start} - ${experienceDetails.period.end}`;

  const descriptionEl = document.createElement("ul");
  const descriptionLis = experienceDetails.descriptions.map((description) => {
    const descriptionLi = document.createElement("li");
    descriptionLi.innerText = description;
    return descriptionLi;
  });
  descriptionEl.append(...descriptionLis);

  experienceDetailWrapper.replaceChildren(titleEl, periodEl, descriptionEl);
}
