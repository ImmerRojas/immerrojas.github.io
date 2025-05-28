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
    const ul = getElement("ul", "list-unstyled"); // Using a list for better structure
    items.forEach((item) => {
        const li = getElement("li", null);
        li.innerHTML = item; // Item already contains <strong> tags
        ul.appendChild(li);
    });
    // Wrap the list in a column for consistent layout if needed
    const divCol = getElement("div", "col-md-12");
    divCol.appendChild(ul);
    skillsTag.appendChild(divCol);
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

            const divProgressBar = getElement("div", `progress-bar color-${(index % 6) + 1}`); // Cycle through 6 colors
            divProgressBar.setAttribute("role", "progressbar");
            divProgressBar.setAttribute("aria-valuenow", percentage);
            divProgressBar.setAttribute("aria-valuemin", "0");
            divProgressBar.setAttribute("aria-valuemax", "100");
            divProgressBar.style.width = `${percentage}%`;
            divProgressBar.appendChild(spanPercentage);

            const divProgress = getElement("div", "progress");
            divProgress.appendChild(divProgressBar);

            const divProgressWrap = getElement("div", "progress-wrap");
            divProgressWrap.appendChild(h3);
            divProgressWrap.appendChild(divProgress);

            const divAnimateBox = getElement("div", "col-md-6 animate-box"); // Each skill takes half width
            divAnimateBox.setAttribute("data-animate-effect", "fadeInLeft"); // Example animation
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
    const ul = getElement("ul", "list-unstyled"); // Using a list for better structure
    items.forEach((item) => {
        const li = getElement("li", null);
        li.innerHTML = item; // Item already contains <strong> tags
        ul.appendChild(li);
    });
     // Wrap the list in a column for consistent layout
    const divCol = getElement("div", "col-md-12");
    divCol.appendChild(ul);
    projectsTag.appendChild(divCol);
}

function populateInterestsHobbies(items, id) {
    const containerTag = document.getElementById(id);
    if (!containerTag) {
        console.error(`Element with id "${id}" not found for interests/hobbies.`);
        return;
    }
    containerTag.innerHTML = ''; // Clear existing content
    if (items && items.length > 0) {
        const ul = getElement("ul", "list-unstyled");
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

        let spanh2 = getElement("span", null);
        spanh2.innerHTML = item.duration || "";

        let h2TimelineLabel = getElement("h2", null);
        h2TimelineLabel.innerHTML = item.title || "";
        h2TimelineLabel.append(spanh2);

        let divTimelineLabel = getElement("div", "timeline-label");
        divTimelineLabel.append(h2TimelineLabel);
        divTimelineLabel.append(spanTimelineSublabel);

        if (item.details && Array.isArray(item.details) && item.details.length > 0) {
            item.details.forEach(detail => {
                let pTimelineText = getElement("p", "timeline-text");
                pTimelineText.innerHTML = "&blacksquare; " + detail;
                divTimelineLabel.append(pTimelineText);
            });
        }

        if (item.tags && Array.isArray(item.tags) && item.tags.length > 0) {
            let divTags = getElement("div", "tags-container");
            item.tags.forEach(tag => {
                let spanTags = getElement("span", "badge");
                spanTags.innerHTML = tag;
                divTags.append(spanTags);
            });
            divTimelineLabel.append(divTags);
        }

        let iFa = getElement("i", "fa fa-" + (item.icon || "briefcase"));
        let iconColorClass = "color-" + ((i % 6) + 1); // Cycle through 6 colors for variety
        let divTimelineIcon = getElement("div", "timeline-icon " + iconColorClass);
        divTimelineIcon.append(iFa);

        let divTimelineEntryInner = getElement("div", "timeline-entry-inner");
        divTimelineEntryInner.append(divTimelineIcon);
        divTimelineEntryInner.append(divTimelineLabel);

        let article = getElement("article", "timeline-entry animate-box");
        article.setAttribute("data-animate-effect", "fadeInLeft"); // Add animation effect
        article.append(divTimelineEntryInner);

        mainContainer.append(article);
    });

    let divTimelineIconEnd = getElement("div", "timeline-icon color-" + (((items.length) % 6) + 1));
    let divTimelineEntryInnerEnd = getElement("div", "timeline-entry-inner");
    divTimelineEntryInnerEnd.append(divTimelineIconEnd);

    let articleEnd = getElement("article", "timeline-entry begin animate-box");
    articleEnd.setAttribute("data-animate-effect", "fadeInLeft"); // Add animation effect
    articleEnd.append(divTimelineEntryInnerEnd);
    mainContainer.append(articleEnd);
}

function populateLinks(items, id) {
    let footer = document.getElementById(id);
    if (!footer) {
        console.error(`Element with id "${id}" not found for footer.`);
        return;
    }
    footer.innerHTML = '';

    let linkRow = getElement("div", "row");

    items.forEach(function (item) {
        if (item.label !== "copyright-text") {
            const linkSections = items.filter(f => f.label !== 'copyright-text').length;
            const colWidth = linkSections > 0 ? Math.max(4, Math.floor(12 / linkSections)) : 12;
            let colDiv = getElement("div", `col-md-${colWidth} col-sm-6`);

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
                        a.rel = "noopener noreferrer";
                        a.innerHTML = data.text;
                        li.append(a);
                    } else {
                        li.innerHTML = data.text;
                    }
                    ul.append(li);
                });
            }
            nav.append(ul);
            colDiv.append(nav);
            linkRow.append(colDiv);
        }
    });
    footer.append(linkRow);

    items.forEach(function (item) {
        if (item.label === "copyright-text") {
            let copyrightRow = getElement("div", "row");
            let copyrightInnerDiv = getElement("div", "col-md-12 text-center copyright-text no-print");

            if (item.data && Array.isArray(item.data)) {
                item.data.forEach(function (copyright) {
                    let p = getElement("p", null);
                    p.innerHTML = copyright;
                    copyrightInnerDiv.append(p);
                });
            }
            copyrightRow.append(copyrightInnerDiv);
            footer.append(copyrightRow);
        }
    });
}


// --- Wait for DOM to load before running scripts ---
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed. Populating content...");

    try {
        populateBio(bio, "bio");
        populateSkills(skills, "skills"); // For Skills Overview (no percentages)

        // Populate skills with progress bars
        populateSkillsWithProgress(hardSkills, "hard-skills", 'skill');
        populateSkillsWithProgress(softSkills, "soft-skills", 'skill');
        populateSkillsWithProgress(languageSkills, "language-skills", 'language');

        populateProjects(projects, "projects");
        populateInterestsHobbies(interestsHobbies, "interests-hobbies"); // Added call for interests
        populateExp_Edu(experience, "experience");
        populateExp_Edu(education, "education");
        populateLinks(footer, "footer");

        console.log("Content population functions called.");
    } catch (error) {
        console.error("Error during content population:", error);
    }

    // Waypoint refresh logic from your original file
    // (Ensure main.js and Waypoints are correctly loaded in index.html for this to work)
    if (typeof Waypoint !== 'undefined' && typeof $ !== 'undefined' && typeof $('.animate-box').waypoint === 'function') {
        console.log("Attempting to re-initialize Waypoints for animate-box elements...");
        $('.animate-box').waypoint(function( direction ) {
            if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
                // $(this.element).removeClass('item-animate'); // Ensure it's clean before adding
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
                            } else { // Default to fadeInUp if not specified or other
                                el.addClass('fadeInUp animated-fast');
                            }
                            el.removeClass('item-animate');
                        },  k * 50, 'easeInOutExpo' ); // Reduced delay k*50 for faster appearance
                    });
                }, 100);
            }
        }, { offset: '85%' } ); // Standard offset
        Waypoint.refreshAll(); // Also call refreshAll
        console.log("Waypoints re-initialization attempted.");
    } else {
         console.warn("Waypoint library, jQuery, or .waypoint function not available for re-initialization of animate-box.");
    }
});
