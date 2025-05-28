// index.js - Handles populating the HTML with data

// Corrected import path for data.js to reflect the 'user-data' folder
import {
    bio,
    skills,
    hardSkills,
    softSkills,
    languageSkills,
    experience,
    projects,
    education,
    interestsHobbies,
    footer
} from './user-data/data.js';

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

// For "Skills Overview" (original skills list, no percentages)
function populateSkills(items, id) {
    const skillsTag = document.getElementById(id);
    if (!skillsTag) {
        console.error(`Element with id "${id}" not found for skills overview.`);
        return;
    }
    skillsTag.innerHTML = ''; // Clear existing content
    const ul = getElement("ul", null); // Removed "list-unstyled" as new CSS handles it
    items.forEach((item) => {
        const li = getElement("li", null);
        li.innerHTML = item; // Item already contains <strong> tags
        ul.appendChild(li);
    });
    // The row structure in HTML is enough, no need for extra col-md-12 wrapper here if target is already a row
    skillsTag.appendChild(ul);
}

// For Hard Skills, Soft Skills, Language Skills (with percentages)
function populateSkillsWithProgress(items, id, skillKeyName = 'skill') {
    const containerTag = document.getElementById(id);
    if (!containerTag) {
        console.error(`Element with id "${id}" not found for skills with progress.`);
        return;
    }
    containerTag.innerHTML = ''; // Clear existing content

    if (items && items.length > 0) {
        items.forEach((item, index) => {
            const skillName = item[skillKeyName];
            const percentage = item.percentage;
            const note = item.note || ''; // For language skills

            const h3 = getElement("h3", null);
            h3.innerHTML = `${skillName} ${note ? `<em>(${note})</em>` : ''}`;

            const spanPercentage = getElement("span", null);
            spanPercentage.innerHTML = `${percentage}%`;

            const divProgressBar = getElement("div", `progress-bar color-${(index % 6) + 1}`);
            divProgressBar.setAttribute("role", "progressbar");
            divProgressBar.setAttribute("aria-valuenow", percentage);
            divProgressBar.setAttribute("aria-valuemin", "0");
            divProgressBar.setAttribute("aria-valuemax", "100");
            divProgressBar.style.width = `${percentage}%`;
            divProgressBar.appendChild(spanPercentage); // Percentage span inside bar

            const divProgress = getElement("div", "progress");
            divProgress.appendChild(divProgressBar);

            const divProgressWrap = getElement("div", "progress-wrap");
            divProgressWrap.appendChild(h3);
            divProgressWrap.appendChild(divProgress);

            // Bootstrap column for layout
            const divAnimateBox = getElement("div", "col-md-6 animate-box");
            divAnimateBox.setAttribute("data-animate-effect", "fadeInLeft");
            divAnimateBox.appendChild(divProgressWrap);

            containerTag.appendChild(divAnimateBox);
        });
    } else {
        containerTag.innerHTML = "<p>No data available for this section.</p>";
    }
}


function populateProjects(items, id) { // For "Key Technical Areas"
    const projectsTag = document.getElementById(id);
    if (!projectsTag) {
        console.error(`Element with id "${id}" not found for projects.`);
        return;
    }
    projectsTag.innerHTML = ''; // Clear existing content
    const ul = getElement("ul", null); // Removed "list-unstyled"
    items.forEach((item) => {
        const li = getElement("li", null);
        li.innerHTML = item; // Item already contains <strong> tags
        ul.appendChild(li);
    });
    projectsTag.appendChild(ul);
}

function populateInterestsHobbies(items, id) {
    const containerTag = document.getElementById(id);
    if (!containerTag) {
        console.error(`Element with id "${id}" not found for interests/hobbies.`);
        return;
    }
    containerTag.innerHTML = ''; // Clear existing content
    if (items && items.length > 0) {
        const ul = getElement("ul", null); // Removed "list-unstyled"
        items.forEach(itemText => {
            const li = getElement("li", null);
            li.innerHTML = itemText;
            ul.appendChild(li);
        });
        containerTag.appendChild(ul);
    } else {
        containerTag.innerHTML = "<p>No interests or hobbies listed.</p>";
    }
}


function populateExp_Edu(items, id) {
    let mainContainer = document.getElementById(id);
    if (!mainContainer) {
        console.error(`Element with id "${id}" not found for experience/education.`);
        return;
    }
    mainContainer.innerHTML = ''; // Clear existing content

    items.forEach((item, i) => {
        let spanTimelineSublabel = getElement("span", "timeline-sublabel");
        spanTimelineSublabel.innerHTML = item.subtitle || "";

        let spanh2Duration = getElement("span", null); // For duration
        spanh2Duration.innerHTML = item.duration || "";

        let h2TimelineLabel = getElement("h2", null); // Main title
        h2TimelineLabel.innerHTML = item.title || "";
        h2TimelineLabel.append(spanh2Duration); // Append duration to title

        let divTimelineLabel = getElement("div", "timeline-label");
        divTimelineLabel.append(h2TimelineLabel);
        divTimelineLabel.append(spanTimelineSublabel); // Subtitle below title

        if (item.details && Array.isArray(item.details) && item.details.length > 0) {
            item.details.forEach(detail => {
                // Using p for details might be better for semantic and styling
                let pDetail = getElement("p", "timeline-text");
                // Using a different marker or styling via CSS :before for elegance
                pDetail.innerHTML = detail; // Removed "&blacksquare;" - style with CSS if needed
                divTimelineLabel.append(pDetail);
            });
        }

        if (item.tags && Array.isArray(item.tags) && item.tags.length > 0) {
            let divTags = getElement("div", "tags-container");
            item.tags.forEach(tag => {
                let spanTags = getElement("span", "badge"); // Bootstrap badge styling will apply
                spanTags.innerHTML = tag;
                divTags.append(spanTags);
            });
            divTimelineLabel.append(divTags);
        }

        let iFa = getElement("i", "fa fa-" + (item.icon || "briefcase"));
        let iconColorClass = "color-" + ((i % 6) + 1); // Cycle through 6 colors for variety
        // CSS will handle icon background color based on .timeline-icon and .color-X
        let divTimelineIcon = getElement("div", `timeline-icon ${iconColorClass}`);
        divTimelineIcon.append(iFa);

        let divTimelineEntryInner = getElement("div", "timeline-entry-inner");
        divTimelineEntryInner.append(divTimelineIcon);
        divTimelineEntryInner.append(divTimelineLabel);

        let article = getElement("article", "timeline-entry animate-box");
        article.setAttribute("data-animate-effect", "fadeInLeft");
        article.append(divTimelineEntryInner);

        mainContainer.append(article);
    });

    // "End of timeline" marker
    let divTimelineIconEnd = getElement("div", "timeline-icon color-" + (((items.length) % 6) + 1)); // Match color cycle
    let divTimelineEntryInnerEnd = getElement("div", "timeline-entry-inner");
    divTimelineEntryInnerEnd.append(divTimelineIconEnd);

    let articleEnd = getElement("article", "timeline-entry begin animate-box"); // "begin" class can be used for styling start/end nodes
    articleEnd.setAttribute("data-animate-effect", "fadeInLeft");
    articleEnd.append(divTimelineEntryInnerEnd);
    mainContainer.append(articleEnd);
}

function populateLinks(items, id) {
    let footerElement = document.getElementById(id); // Changed variable name for clarity
    if (!footerElement) {
        console.error(`Element with id "${id}" not found for footer.`);
        return;
    }
    footerElement.innerHTML = ''; // Clear existing content

    let linkRow = getElement("div", "row"); // Bootstrap row for link columns

    // Links section
    const linkSections = items.filter(f => f.label !== 'copyright-text');
    const numLinkColumns = linkSections.length;
    // Bootstrap column sizing (e.g., col-md-4 for 3 columns, col-md-6 for 2)
    const colWidth = numLinkColumns > 0 ? Math.floor(12 / Math.max(1, numLinkColumns)) : 12;


    items.forEach(function (item) {
        if (item.label !== "copyright-text") {
            let colDiv = getElement("div", `col-md-${colWidth} col-sm-6`); // Responsive columns

            let pTitle = getElement("p", "col-title");
            pTitle.innerHTML = item.label;
            colDiv.append(pTitle);

            let nav = getElement("nav", "col-list");
            let ul = getElement("ul", null); // Removed "list-unstyled"

            if (item.data && Array.isArray(item.data)) {
                item.data.forEach(function (dataItem) { // Changed variable name
                    let li = getElement("li", null);
                    if (dataItem.link) {
                        let a = getElement("a", null);
                        a.href = dataItem.link;
                        a.target = "_blank";
                        a.rel = "noopener noreferrer";
                        a.innerHTML = dataItem.text;
                        li.append(a);
                    } else {
                        li.innerHTML = dataItem.text; // For non-link items like email
                    }
                    ul.append(li);
                });
            }
            nav.append(ul);
            colDiv.append(nav);
            linkRow.append(colDiv);
        }
    });
    footerElement.append(linkRow);

    // Copyright section
    items.forEach(function (item) {
        if (item.label === "copyright-text") {
            let copyrightRow = getElement("div", "row"); // Separate row for copyright
            let copyrightInnerDiv = getElement("div", "col-md-12 text-center copyright-text no-print");

            if (item.data && Array.isArray(item.data)) {
                item.data.forEach(function (copyrightText) { // Changed variable name
                    let p = getElement("p", null);
                    p.innerHTML = copyrightText;
                    copyrightInnerDiv.append(p);
                });
            }
            copyrightRow.append(copyrightInnerDiv);
            footerElement.append(copyrightRow); // Append copyright row to footer
        }
    });
}


// --- Wait for DOM to load before running scripts ---
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed. Populating content...");

    try {
        populateBio(bio, "bio");
        populateSkills(skills, "skills");

        populateSkillsWithProgress(hardSkills, "hard-skills", 'skill');
        populateSkillsWithProgress(softSkills, "soft-skills", 'skill');
        populateSkillsWithProgress(languageSkills, "language-skills", 'language');

        populateProjects(projects, "projects");
        populateInterestsHobbies(interestsHobbies, "interests-hobbies");
        populateExp_Edu(experience, "experience");
        populateExp_Edu(education, "education");
        populateLinks(footer, "footer");

        console.log("Content population functions called.");
    } catch (error)
        console.error("Error during content population:", error);
    }

    // Waypoint refresh logic (ensure main.js and Waypoints are correctly loaded)
    if (typeof Waypoint !== 'undefined' && typeof $ !== 'undefined' && typeof $('.animate-box').waypoint === 'function') {
        console.log("Attempting to re-initialize Waypoints for animate-box elements...");
        $('.animate-box').waypoint(function( direction ) {
            if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
                $(this.element).addClass('item-animate');
                setTimeout(function(){
                    $('body .animate-box.item-animate').each(function(k){
                        var el = $(this);
                        setTimeout( function () {
                            var effect = el.data('animate-effect');
                            if ( effect === 'fadeIn') {
                                el.addClass('fadeIn animated-fast');
                            } else if ( effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated-fast');
                            } else if ( effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated-fast');
                            } else {
                                el.addClass('fadeInUp animated-fast');
                            }
                            el.removeClass('item-animate');
                        },  k * 50, 'easeInOutExpo' );
                    });
                }, 100);
            }
        }, { offset: '85%' } );
        Waypoint.refreshAll();
        console.log("Waypoints re-initialization attempted.");
    } else {
         console.warn("Waypoint library, jQuery, or .waypoint function not available for re-initialization of animate-box.");
    }
});
