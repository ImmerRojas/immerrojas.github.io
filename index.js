// index.js - Handles populating the HTML with data

// Corrected import path for data.js to reflect the 'user-data' folder
import {
  bio,
  skills,
  education,
  experience,
  projects, // Added projects import
  footer,
} from "./user-data/data.js"; // <--- CORRECTED PATH

// Helper function to create elements
function getElement(tagName, className) {
  let item = document.createElement(tagName);
  if (className) { // Only set className if provided
      item.className = className;
  }
  return item;
}

// --- Population Functions ---

function populateBio(items, id) {
  const bioTag = document.getElementById(id);
  if (!bioTag) {
      console.error(`Element with id "${id}" not found for bio.`);
      return;
  }
  bioTag.innerHTML = ''; // Clear existing content
  items.forEach((bioItem) => {
    const p = getElement("p", null);
    p.innerHTML = bioItem;
    bioTag.append(p);
  });
}

function populateSkills(items, id) {
  const skillsTag = document.getElementById(id);
   if (!skillsTag) {
      console.error(`Element with id "${id}" not found for skills.`);
      return;
  }
  skillsTag.innerHTML = ''; // Clear existing content
  items.forEach((item) => {
    const h3 = getElement("li", null); // Using list items for skills as well
    h3.innerHTML = item;

    const divProgressWrap = getElement("div", "progress-wrap"); // Keeping original class names
    divProgressWrap.append(h3);

    const divAnimateBox = getElement("div", "col-md-6 animate-box"); // Use col-md-6 for two columns
    divAnimateBox.append(divProgressWrap);

    skillsTag.append(divAnimateBox);
  });
}

// Added populateProjects function (similar to populateSkills)
function populateProjects(items, id) {
  const projectsTag = document.getElementById(id);
   if (!projectsTag) {
      console.error(`Element with id "${id}" not found for projects.`);
      return;
  }
  projectsTag.innerHTML = ''; // Clear existing content
  items.forEach((item) => {
    const h3 = getElement("li", null); // Using list items for simplicity
    h3.innerHTML = item;

    const divProgressWrap = getElement("div", "progress-wrap");
    divProgressWrap.append(h3);

    // Use col-md-12 for full width list items or col-md-6 for two columns
    const divAnimateBox = getElement("div", "col-md-12 animate-box");
    divAnimateBox.append(divProgressWrap);

    projectsTag.append(divAnimateBox);
  });
}

function populateExp_Edu(items, id) {
  let mainContainer = document.getElementById(id);
   if (!mainContainer) {
      console.error(`Element with id "${id}" not found for experience/education.`);
      return;
  }
  mainContainer.innerHTML = ''; // Clear existing content

  items.forEach((item, i) => { // Changed to forEach for consistency
    let spanTimelineSublabel = getElement("span", "timeline-sublabel");
    spanTimelineSublabel.innerHTML = item.subtitle || ""; // Add default empty string

    let spanh2 = getElement("span", null);
    spanh2.innerHTML = item.duration || ""; // Add default empty string

    let h2TimelineLabel = getElement("h2", null);
    h2TimelineLabel.innerHTML = item.title || ""; // Add default empty string
    h2TimelineLabel.append(spanh2);

    let divTimelineLabel = getElement("div", "timeline-label");
    divTimelineLabel.append(h2TimelineLabel);
    divTimelineLabel.append(spanTimelineSublabel);

    if (item.details && Array.isArray(item.details) && item.details.length > 0) { // Check if details exist and is an array
        item.details.forEach(detail => { // Use forEach for details
            let pTimelineText = getElement("p", "timeline-text");
            pTimelineText.innerHTML = "&blacksquare; " + detail;
            divTimelineLabel.append(pTimelineText);
        });
    }

    if (item.tags && Array.isArray(item.tags) && item.tags.length > 0) { // Check if tags exist and is an array
        let divTags = getElement("div", "tags-container"); // Added class for styling if needed
        item.tags.forEach(tag => { // Use forEach for tags
            let spanTags = getElement("span", "badge"); // Standard badge class
            spanTags.innerHTML = tag;
            divTags.append(spanTags);
        });
        divTimelineLabel.append(divTags);
    }

    let iFa = getElement("i", "fa fa-" + (item.icon || "briefcase")); // Default icon

    // Use a default color class or cycle through colors
    let iconColorClass = "color-" + ((i % 5) + 1); // Cycle through 5 colors
    let divTimelineIcon = getElement("div", "timeline-icon " + iconColorClass);
    divTimelineIcon.append(iFa);

    let divTimelineEntryInner = getElement("div", "timeline-entry-inner");
    divTimelineEntryInner.append(divTimelineIcon);
    divTimelineEntryInner.append(divTimelineLabel);

    let article = getElement("article", "timeline-entry animate-box");
    article.append(divTimelineEntryInner);

    mainContainer.append(article);
  });

  // Keep the 'begin' marker at the end of the timeline
  let divTimelineIconEnd = getElement("div", "timeline-icon color-" + (((items.length) % 5) + 1));

  let divTimelineEntryInnerEnd = getElement("div", "timeline-entry-inner");
  divTimelineEntryInnerEnd.append(divTimelineIconEnd);

  let articleEnd = getElement("article", "timeline-entry begin animate-box"); // 'begin' class might be styled as the end marker
  articleEnd.append(divTimelineEntryInnerEnd);

  mainContainer.append(articleEnd);
}

function populateLinks(items, id) {
  let footer = document.getElementById(id);
   if (!footer) {
      console.error(`Element with id "${id}" not found for footer.`);
      return;
  }
  footer.innerHTML = ''; // Clear existing footer content before populating

  let linkRow = getElement("div", "row"); // Use a row div for link/contact sections

  items.forEach(function (item) {
    if (item.label !== "copyright-text") {
      // Determine column width based on number of non-copyright sections
      const linkSections = items.filter(f => f.label !== 'copyright-text').length;
      // Ensure at least col-md-4 for readability, adjust as needed
      const colWidth = linkSections > 0 ? Math.max(4, Math.floor(12 / linkSections)) : 12;
      let colDiv = getElement("div", `col-md-${colWidth} col-sm-6`); // Add sm for responsiveness

      let p = getElement("p", "col-title");
      p.innerHTML = item.label;
      colDiv.append(p);

      let nav = getElement("nav", "col-list");
      let ul = getElement("ul", null);

      if (item.data && Array.isArray(item.data)) {
          item.data.forEach(function (data) {
            let li = getElement("li", null);
            if (data.link) {
              let a = getElement("a", null);
              a.href = data.link;
              a.target = "_blank";
              a.rel = "noopener noreferrer"; // Good practice for security
              a.innerHTML = data.text;
              li.append(a);
            } else {
              // If no link, just display text (like contact info)
              li.innerHTML = data.text;
            }
            ul.append(li);
          });
      }
      nav.append(ul);
      colDiv.append(nav);
      linkRow.append(colDiv); // Append the column to the link row
    }
  });

  footer.append(linkRow); // Append the row containing link/contact sections

  // Handle copyright separately, usually centered below
  items.forEach(function (item) {
      if (item.label === "copyright-text") {
        let copyrightRow = getElement("div", "row"); // Place copyright in its own row
        let copyrightInnerDiv = getElement("div", "col-md-12 text-center copyright-text no-print"); // Center align

        if (item.data && Array.isArray(item.data)) {
            item.data.forEach(function (copyright) {
              let p = getElement("p", null);
              p.innerHTML = copyright;
              copyrightInnerDiv.append(p);
            });
        }
        copyrightRow.append(copyrightInnerDiv);
        footer.append(copyrightRow); // Append copyright row after links/contact row
      }
  });
}


// --- Wait for DOM to load before running scripts ---
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed. Populating content..."); // Add console log for debugging

    // Call population functions safely after DOM is ready
    try {
        populateBio(bio, "bio");
        populateSkills(skills, "skills");
        populateProjects(projects, "projects"); // Added call for projects
        populateExp_Edu(experience, "experience");
        populateExp_Edu(education, "education");
        populateLinks(footer, "footer");
        console.log("Content population functions called."); // Confirm functions were called
    } catch (error) {
        console.error("Error during content population:", error); // Log any errors during population
    }

    // If main.js depends on content being populated, ensure it runs after or is also deferred correctly.
    // Triggering animations or waypoints might need a slight delay or re-initialization if content loads later.
    // Check if Waypoint exists before trying to refresh
    if (typeof Waypoint !== 'undefined' && typeof Waypoint.refreshAll === 'function') {
         console.log("Refreshing Waypoints...");
         Waypoint.refreshAll();
    } else {
         console.log("Waypoint library not found or refreshAll not available.");
    }
});

// Note: Removed functions related to Medium, Git Repo lists, GitConnected
// Note: Kept helper function getElement
