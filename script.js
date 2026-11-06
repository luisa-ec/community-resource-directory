
/* ==========================================
   WAYPOINT
   Community Resource Directory
   JavaScript interactions
   ========================================== */


/* 1. Resource data
   All information below is fictional.
*/

const resources = {
    brightpath: {
        name: "Brightpath Learning Centre",
        category: "Education",
        description:
            "Free tutoring and digital skills classes for young people.",
        location: "Northfield",
        hours: "Monday to Saturday, 9:00 to 17:00",
        keywords: "tutoring education computers homework learning"
    },

    riverside: {
        name: "Riverside Youth Clinic",
        category: "Health",
        description:
            "Health checks, vaccinations and confidential advice.",
        location: "Riverside",
        hours: "Monday to Friday, 8:00 to 16:00",
        keywords: "health clinic vaccinations wellbeing"
    },

    opendoor: {
        name: "Open Door Job Club",
        category: "Employment",
        description:
            "CV workshops, interview practice and job search support.",
        location: "Old Town",
        hours: "Tuesday and Thursday, 9:30 to 16:00",
        keywords: "jobs employment cv interviews careers"
    },

    safeharbour: {
        name: "Safe Harbour Housing Aid",
        category: "Housing",
        description:
            "Emergency shelter referrals and rental application support.",
        location: "Harbour",
        hours: "Daily, 8:00 to 20:00",
        keywords: "housing shelter rent accommodation"
    },

    hopeline: {
        name: "Hopeline Youth Space",
        category: "Youth Support",
        description:
            "Mentoring, clubs and creative workshops for young people.",
        location: "Hillcrest",
        hours: "Monday to Saturday, 12:00 to 19:00",
        keywords: "youth mentoring clubs workshops support"
    }
};


/* 2. Select HTML elements */

const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const categoryFilter = document.querySelector("#category-filter");

const resourceCards = document.querySelectorAll(".resource-card");

const resultsMessage = document.querySelector("#results-message");
const emptyMessage = document.querySelector("#empty-message");

const categoryCards = document.querySelectorAll(".category-card");

const profileDialog = document.querySelector("#profile-dialog");
const dialogClose = document.querySelector("#dialog-close");
const dialogCloseBottom = document.querySelector("#dialog-close-bottom");

const dialogCategory = document.querySelector("#dialog-category");
const dialogTitle = document.querySelector("#dialog-title");
const dialogDescription = document.querySelector("#dialog-description");
const dialogLocation = document.querySelector("#dialog-location");
const dialogHours = document.querySelector("#dialog-hours");


/* 3. Search and filter resources */

function filterResources() {

    const searchTerm = searchInput.value.trim().toLowerCase();

    const selectedCategory = categoryFilter.value;

    let visibleCount = 0;

    resourceCards.forEach((card) => {

        const cardCategory = card.dataset.category;

        const searchableText = card.dataset.search.toLowerCase();

        const matchesSearch = searchableText.includes(searchTerm);

        const matchesCategory =
            selectedCategory === "all" ||
            cardCategory === selectedCategory;

        const shouldDisplay = matchesSearch && matchesCategory;

        card.hidden = !shouldDisplay;

        if (shouldDisplay) {
            visibleCount++;
        }

    });

    /* Update the results message */

    resultsMessage.textContent =
        `Showing ${visibleCount} resource${visibleCount === 1 ? "" : "s"}`;

    /* Show or hide the empty state */

    emptyMessage.hidden = visibleCount !== 0;

}


/* 4. Handle search form submission */

searchForm.addEventListener("submit", (event) => {

    event.preventDefault();

    filterResources();

});


/* 5. Filter resources while typing */

searchInput.addEventListener("input", () => {

    filterResources();

});


/* 6. Filter resources by category */

categoryFilter.addEventListener("change", () => {

    filterResources();

});


/* 7. Browse by category cards */

categoryCards.forEach((card) => {

    card.addEventListener("click", () => {

        const selectedCategory = card.dataset.category;

        categoryFilter.value = selectedCategory;

        searchInput.value = "";

        filterResources();

        document.querySelector("#resources").scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* 8. Open resource profile */

function openResourceProfile(resourceId) {

    const resource = resources[resourceId];

    if (!resource) {
        return;
    }

    dialogCategory.textContent = resource.category;

    dialogTitle.textContent = resource.name;

    dialogDescription.textContent = resource.description;

    dialogLocation.textContent = resource.location;

    dialogHours.textContent = resource.hours;

    profileDialog.showModal();

}


/* 9. Attach profile buttons */

const profileButtons = document.querySelectorAll(".view-profile");

profileButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const resourceId = button.dataset.resource;

        openResourceProfile(resourceId);

    });

});


/* 10. Close profile dialog */

dialogClose.addEventListener("click", () => {

    profileDialog.close();

});

dialogCloseBottom.addEventListener("click", () => {

    profileDialog.close();

});


/* 11. Initial page state */

filterResources();
