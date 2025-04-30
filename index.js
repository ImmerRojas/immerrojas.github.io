// Corrected import path for data.js and removed unused imports
import {
  bio,
  skills,
  education,
  experience,
  projects, // Added projects import
  footer,
} from "./data.js";

// Removed functions related to Medium, GitConnected, GitHub Repos:
// fetchBlogsFromMedium, fetchReposFromGit, fetchGitConnectedData, mapBasicResponse, populateBlogs, populateRepo

// Kept populateBio function as is
function populateBio(items, id) {
  const bioTag = document.getElementById(id);
  items.forEach((bioItem) => {
    const p = getElement("p", null);
    p.innerHTML = bioItem;
    bioTag.append(p);
  });
}

// Kept populateSkills function as is
function populateSkills(items, id) {
  const skillsTag = document.getElementById(id);
  items.forEach((item) => {
    const h3 = getElement("li", null);
    h3.innerHTML = item;

    const divProgressWrap = getElement("div", "progress-wrap");
    divProgressWrap.append(h3);

    const divAnimateBox = getElement("div", "col-md-12 animate-box");
    divAnimateBox.append(divProgressWrap);

    skillsTag.append(divAnimateBox);
  });
}

// Added populateProjects function (similar to populateSkills)
function populateProjects(items, id) {
  const projectsTag = document.getElementById(id);
  items.forEach((item) => {
    const h3 = getElement("li", null); // Using list items for simplicity
    h3.innerHTML = item;

    const divProgressWrap = getElement("div", "progress-wrap");
    divProgressWrap.append(h3);

    const divAnimateBox = getElement("div", "col-md-12 animate-box"); // Using col-md-12 for full width list items
    divAnimateBox.append(divProgressWrap);

    projectsTag.append(divAnimateBox);
  });
}


// Removed populateTrekking function

// Kept populateExp_Edu function as is
function populateExp_Edu(items, id) {
  let mainContainer = document.getElementById(id);

  for (let i = 0; i < items.length; i++) {
    let spanTimelineSublabel = document.createElement("span");
    spanTimelineSublabel.className = "timeline-sublabel";
    spanTimelineSublabel.innerHTML = items[i].subtitle;

    let spanh2 = document.createElement("span");
    spanh2.innerHTML = items[i].duration;

    let h2TimelineLabel = document.createElement("h2");
    h2TimelineLabel.innerHTML = items[i].title;
    h2TimelineLabel.append(spanh2);

    let divTimelineLabel = document.createElement("div");
    divTimelineLabel.className = "timeline-label";
    divTimelineLabel.append(h2TimelineLabel);
    divTimelineLabel.append(spanTimelineSublabel);

    if (items[i].details && items[i].details.length > 0) { // Check if details exist
        for (let j = 0; j < items[i].details.length; j++) {
          let pTimelineText = document.createElement("p");
          pTimelineText.className = "timeline-text";
          pTimelineText.innerHTML = "&blacksquare; " + items[i].details[j];
          divTimelineLabel.append(pTimelineText);
        }
    }


    if (items[i].tags && items[i].tags.length > 0) { // Check if tags exist
        let divTags = document.createElement("div");
        divTags.className = "tags-container"; // Added class for styling if needed
        for (let j = 0; j < items[i].tags.length; j++) {
          let spanTags = document.createElement("span");
          spanTags.className = "badge";
          spanTags.innerHTML = items[i].tags[j];
          divTags.append(spanTags);
        }
        divTimelineLabel.append(divTags);
    }


    let iFa = document.createElement("i");
    // Use a default icon if specific one isn't provided
    iFa.className = "fa fa-" + (items[i].icon || "briefcase");

    // Use a default color class if needed, or cycle through colors
    let iconColorClass = "color-" + ((i % 5) + 1); // Cycle through 5 colors
    let divTimelineIcon = document.createElement("div");
    divTimelineIcon.className = "timeline-icon " + iconColorClass;
    divTimelineIcon.append(iFa);

    let divTimelineEntryInner = document.createElement("div");
    divTimelineEntryInner.className = "timeline-entry-inner";
    divTimelineEntryInner.append(divTimelineIcon);
    divTimelineEntryInner.append(divTimelineLabel);

    let article = document.createElement("article");
    article.className = "timeline-entry animate-box";
    article.append(divTimelineEntryInner);

    mainContainer.append(article);
  }

  // Keep the 'begin' marker at the end of the timeline
  let divTimelineIcon = document.createElement("div");
   let endIconColorClass = "color-" + (((items.length) % 5) + 1); // Match color cycling
  divTimelineIcon.className = "timeline-icon " + endIconColorClass;


  let divTimelineEntryInner = document.createElement("div");
  divTimelineEntryInner.className = "timeline-entry-inner";
  divTimelineEntryInner.append(divTimelineIcon);

  let article = document.createElement("article");
  article.className = "timeline-entry begin animate-box"; // 'begin' class might be styled as the end marker
  article.append(divTimelineEntryInner);

  mainContainer.append(article);
}


// Kept populateLinks function as is, but ensure footer structure in data.js matches
function populateLinks(items, id) {
  let footer = document.getElementById(id);
  footer.innerHTML = ''; // Clear existing footer content before populating

  let row = document.createElement("div"); // Use a row div for better layout control
  row.className = "row"; // Assuming Bootstrap grid system is used

  items.forEach(function (item) {
    if (item.label !== "copyright-text") {
      let colDiv = document.createElement("div");
      // Assign columns based on number of sections, e.g., col-md-4 for 3 sections
      colDiv.className = "col-md-4"; // Adjust based on how many footer sections you have

      let p = document.createElement("p");
      p.className = "col-title";
      p.innerHTML = item.label;
      colDiv.append(p);

      let nav = document.createElement("nav");
      nav.className = "col-list";

      let ul = document.createElement("ul");
      item.data.forEach(function (data) {
        let li = document.createElement("li");
        if (data.link) {
          let a = document.createElement("a");
          a.href = data.link;
          a.target = "_blank";
          a.innerHTML = data.text;
          li.append(a);
        } else {
          // If no link, just display text (like contact info)
          li.innerHTML = data.text;
        }
        ul.append(li);
      });
      nav.append(ul);
      colDiv.append(nav);
      row.append(colDiv); // Append the column to the row
    }
  });

  footer.append(row); // Append the row containing link/contact sections

  // Handle copyright separately, usually centered below
  items.forEach(function (item) {
      if (item.label === "copyright-text") {
        let copyrightDiv = document.createElement("div");
        copyrightDiv.className = "row"; // Place copyright in its own row
        let copyrightInnerDiv = document.createElement("div");
        copyrightInnerDiv.className = "col-md-12 text-center copyright-text no-print"; // Center align
        item.data.forEach(function (copyright) {
          let p = document.createElement("p");
          p.innerHTML = copyright;
          copyrightInnerDiv.append(p);
        });
         copyrightDiv.append(copyrightInnerDiv);
        footer.append(copyrightDiv); // Append copyright row after links/contact row
      }
  });

}

// Kept getElement function as is
function getElement(tagName, className) {
  let item = document.createElement(tagName);
  if (className) { // Only set className if provided
      item.className = className;
  }
  return item;
}

// Removed getBlogDate function

// Call population functions
populateBio(bio, "bio");
populateSkills(skills, "skills");
populateProjects(projects, "projects"); // Added call for projects
populateExp_Edu(experience, "experience");
populateExp_Edu(education, "education");
populateLinks(footer, "footer");

// Removed calls to fetchBlogsFromMedium, fetchReposFromGit, fetchGitConnectedData, populateTrekking
