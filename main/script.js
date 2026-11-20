
/* =========================================
   WAYPOINT
   Community Resource Directory
   Shared JavaScript for all three pages
   ========================================= */

/* -----------------------------------------
   1. FICTIONAL RESOURCE DATA
   ----------------------------------------- */

const resources = [
    {
        id: 1,
        name: "Brightpath Learning Centre",
        category: "Education",
        description: "Free tutoring and digital skills classes for ages 14 to 25.",
        location: "Northfield",
        hours: "Monday to Saturday, 9:00 to 17:00",
        phone: "000 000 0101",
        tags: ["tutoring", "computers", "homework"]
    },
    {
        id: 2,
        name: "Mosaic Newcomer Hub",
        category: "Education",
        description: "Language classes and settling-in support for people new to the area.",
        location: "Riverside",
        hours: "Wednesday and Saturday, 10:00 to 15:00",
        phone: "000 000 0102",
        tags: ["language", "newcomers", "community"]
    },
    {
        id: 3,
        name: "Lantern Library Study Space",
        category: "Education",
        description: "Quiet study rooms, free Wi-Fi and exam preparation groups.",
        location: "Old Town",
        hours: "Daily, 8:00 to 20:00",
        phone: "000 000 0103",
        tags: ["study", "exams", "wifi"]
    },
    {
        id: 4,
        name: "Riverside Youth Clinic",
        category: "Health",
        description: "Walk-in health checks, vaccinations and confidential advice.",
        location: "Riverside",
        hours: "Monday to Friday, 8:00 to 16:00",
        phone: "000 000 0104",
        tags: ["clinic", "vaccination", "walk-in"]
    },
    {
        id: 5,
        name: "Calm Minds Counselling",
        category: "Health",
        description: "Low-cost counselling and wellbeing workshops for adults and teens.",
        location: "Hillcrest",
        hours: "Tuesday to Saturday, 10:00 to 18:00",
        phone: "000 000 0105",
        tags: ["counselling", "mental health", "wellbeing"]
    },
    {
        id: 6,
        name: "Family First Health Desk",
        category: "Health",
        description: "Parent and baby health advice, nutrition and family planning support.",
        location: "Northfield",
        hours: "Monday to Friday, 9:00 to 17:00",
        phone: "000 000 0106",
        tags: ["parents", "family", "nutrition"]
    },
    {
        id: 7,
        name: "Open Door Job Club",
        category: "Employment",
        description: "CV workshops, interview practice and weekly job search support.",
        location: "Old Town",
        hours: "Tuesday and Thursday, 9:30 to 16:00",
        phone: "000 000 0107",
        tags: ["cv", "interviews", "jobs"]
    },
    {
        id: 8,
        name: "Skills Bridge Training",
        category: "Employment",
        description: "Short practical courses in construction, hospitality and customer service.",
        location: "Harbour",
        hours: "Monday to Friday, 8:30 to 16:30",
        phone: "000 000 0108",
        tags: ["training", "skills", "certificates"]
    },
    {
        id: 9,
        name: "Safe Harbour Housing Aid",
        category: "Housing",
        description: "Emergency shelter referrals and help with rental applications.",
        location: "Harbour",
        hours: "Daily, 8:00 to 20:00",
        phone: "000 000 0109",
        tags: ["shelter", "rent", "emergency"]
    },
    {
        id: 10,
        name: "Fair Rent Advice Line",
        category: "Housing",
        description: "Free advice on tenancy rights, deposits and repairs.",
        location: "Hillcrest",
        hours: "Monday, Wednesday and Friday, 9:00 to 14:00",
        phone: "000 000 0110",
        tags: ["tenancy", "deposits", "repairs"]
    },
    {
        id: 11,
        name: "Hopeline Youth Space",
        category: "Youth Support",
        description: "A drop-in safe space with mentoring, clubs and creative workshops.",
        location: "Hillcrest",
        hours: "Monday to Saturday, 12:00 to 19:00",
        phone: "000 000 0111",
        tags: ["mentoring", "clubs", "safe space"]
    },
    {
        id: 12,
        name: "Pathfinders Mentoring",
        category: "Youth Support",
        description: "One-to-one mentoring for teens planning school, work or training.",
        location: "Northfield",
        hours: "Thursday to Saturday, 15:00 to 19:00",
        phone: "000 000 0112",
        tags: ["mentoring", "teens", "careers"]
    }
];

/* -----------------------------------------
   2. MOBILE NAVIGATION
   ----------------------------------------- */

const menuButton = document.querySelector(".menu-toggle");
const mainNavigation = document.querySelector("#primary-navigation");

function closeMobileMenu() {

    if (!menuButton || !mainNavigation) return;

    menuButton.setAttribute("aria-expanded", "false");

    menuButton.setAttribute(
        "aria-label",
        "Open navigation menu"
    );

    mainNavigation.classList.remove("is-open");

}

if (menuButton && mainNavigation) {

    menuButton.addEventListener("click", () => {

        const isOpen =
            menuButton.getAttribute("aria-expanded") === "true";

        menuButton.setAttribute(
            "aria-expanded",
            String(!isOpen)
        );

        mainNavigation.classList.toggle("is-open", !isOpen);
    menuButton.setAttribute(
    "aria-label",
    isOpen ? "Open navigation menu" : "Close navigation menu");

    });

    mainNavigation.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", closeMobileMenu);

    });

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            const wasOpen =
                menuButton.getAttribute("aria-expanded") === "true";

            closeMobileMenu();

            if (wasOpen) {
                menuButton.focus();
            }

        }

    });

}

/* -----------------------------------------
   3. RESOURCE CARD CREATION
   ----------------------------------------- */

const featuredResourceIds = [1, 4, 7, 9, 11, 5];

const categoryLetters = {
    "Education": "E",
    "Health": "H",
    "Employment": "J",
    "Housing": "H",
    "Youth Support": "Y"
};

function createElement(tag, className, text) {

    const element = document.createElement(tag);

    if (className) {
        element.className = className;
    }

    if (text !== undefined) {
        element.textContent = text;
    }

    return element;
}

function createResourceCard(resource) {

    const article = createElement("article", "resource-card");

    article.dataset.category = resource.category;

    const header = createElement(
        "div",
        "resource-card__header"
    );

    header.appendChild(
        createElement(
            "span",
            "resource-symbol",
            categoryLetters[resource.category]
        )
    );

    header.appendChild(
        createElement(
            "span",
            "resource-tag",
            resource.category
        )
    );

    const content = createElement(
        "div",
        "resource-card__content"
    );

    content.appendChild(
        createElement("h3", "", resource.name)
    );

    content.appendChild(
        createElement("p", "", resource.description)
    );

    content.appendChild(
        createElement(
            "p",
            "resource-location",
            "Location: " + resource.location
        )
    );

    const profileButton = createElement(
        "button",
        "button button-outline view-profile",
        "View profile"
    );

    profileButton.type = "button";

    profileButton.dataset.resourceId = resource.id;

    profileButton.setAttribute(
        "aria-label",
        "View profile of " + resource.name
    );

    content.appendChild(profileButton);

    article.appendChild(header);
    article.appendChild(content);

    return article;
}

/* -----------------------------------------
   4. DISPLAY RESOURCES
   ----------------------------------------- */

const resourceGrid = document.querySelector("#resource-grid");

const isResourcePage =
    document.body.dataset.page === "resources";

if (resourceGrid) {

    const resourcesToDisplay = isResourcePage
        ? resources
        : resources.filter((resource) =>
            featuredResourceIds.includes(resource.id)
        );

    resourcesToDisplay.forEach((resource) => {

        resourceGrid.appendChild(
            createResourceCard(resource)
        );

    });

}

/* -----------------------------------------
   5. RESOURCE SEARCH AND FILTERING
   ----------------------------------------- */

const resourceSearchForm =
    document.querySelector("#resource-search-form");

const searchInput =
    document.querySelector("#search-input");

const categoryFilter =
    document.querySelector("#category-filter");

const categoryButtons =
    document.querySelectorAll("[data-category-filter]");

const resultsMessage =
    document.querySelector("#results-message");

const emptyMessage =
    document.querySelector("#empty-message");

const resetButton =
    document.querySelector("#reset-filters");

let activeCategory = "all";

function updateCategoryButtons() {

    categoryButtons.forEach((button) => {

        const selected =
            button.dataset.categoryFilter === activeCategory;

        button.setAttribute(
            "aria-pressed",
            String(selected)
        );

    });

}

function filterResources() {

    if (!resourceGrid || !isResourcePage) return;

    const keyword = searchInput.value
        .trim()
        .toLowerCase();

    activeCategory = categoryFilter.value;

    let visibleCount = 0;

    const cards = resourceGrid.querySelectorAll(
        ".resource-card"
    );

    cards.forEach((card) => {

        const resource = resources.find(
            (item) =>
                item.id === Number(
                    card.querySelector("[data-resource-id]")
                        .dataset.resourceId
                )
        );

        if (!resource) return;

        const searchableText = [
            resource.name,
            resource.category,
            resource.description,
            resource.location,
            resource.hours,
            ...resource.tags
        ].join(" ").toLowerCase();

        const matchesKeyword =
            searchableText.includes(keyword);

        const matchesCategory =
            activeCategory === "all" ||
            resource.category === activeCategory;

        const visible =
            matchesKeyword && matchesCategory;

        card.hidden = !visible;

        if (visible) {
            visibleCount++;
        }

    });

    if (resultsMessage) {

        resultsMessage.textContent =
            `Showing ${visibleCount} of ${resources.length} resources`;

    }

    if (emptyMessage) {

        emptyMessage.hidden = visibleCount !== 0;

    }

    updateCategoryButtons();

}

/* Read search and category values from the URL */

if (isResourcePage) {

    const urlParameters = new URLSearchParams(
        window.location.search
    );

    const initialKeyword = urlParameters.get("q") || "";

    const initialCategory =
        urlParameters.get("category") || "all";

    const validCategories = [
        "all",
        "Education",
        "Health",
        "Employment",
        "Housing",
        "Youth Support"
    ];

    if (searchInput) {
        searchInput.value = initialKeyword;
    }

    if (categoryFilter) {

        categoryFilter.value =
            validCategories.includes(initialCategory)
                ? initialCategory
                : "all";

        activeCategory = categoryFilter.value;

    }

}

/* Search form submission */

if (resourceSearchForm) {

    resourceSearchForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();

            filterResources();

        }
    );

}

/* Search while typing */

if (searchInput && isResourcePage) {

    searchInput.addEventListener(
        "input",
        filterResources
    );

}

/* Category dropdown */

if (categoryFilter && isResourcePage) {

    categoryFilter.addEventListener(
        "change",
        filterResources
    );

}

/* Category filter buttons */

categoryButtons.forEach((button) => {

    button.addEventListener("click", () => {

        categoryFilter.value =
            button.dataset.categoryFilter;

        filterResources();

    });

});

/* Reset search and category filters */

if (resetButton) {

    resetButton.addEventListener("click", () => {

        searchInput.value = "";

        categoryFilter.value = "all";

        activeCategory = "all";

        filterResources();

        searchInput.focus();

    });

}

/* -----------------------------------------
   6. RESOURCE PROFILE DIALOG
   ----------------------------------------- */

const profileDialog =
    document.querySelector("#profile-dialog");

const dialogClose =
    document.querySelector("#dialog-close");

const dialogCategory =
    document.querySelector("#dialog-category");

const dialogTitle =
    document.querySelector("#dialog-title");

const dialogDescription =
    document.querySelector("#dialog-description");

const dialogLocation =
    document.querySelector("#dialog-location");

const dialogHours =
    document.querySelector("#dialog-hours");

const dialogPhone =
    document.querySelector("#dialog-phone");

const dialogTags =
    document.querySelector("#dialog-tags");

let lastProfileButton = null;

function openResourceProfile(resourceId, triggerButton) {

    const resource = resources.find(
        (item) => item.id === Number(resourceId)
    );

    if (!resource || !profileDialog) return;

    lastProfileButton = triggerButton;

    dialogCategory.textContent = resource.category;

    dialogTitle.textContent = resource.name;

    dialogDescription.textContent =
        resource.description;

    dialogLocation.textContent =
        resource.location + " (fictional)";

    dialogHours.textContent =
        resource.hours;

    dialogPhone.textContent =
        resource.phone + " (fictional)";

    dialogTags.textContent =
        resource.tags.join(", ");

    profileDialog.showModal();

}

/* Listen for profile-button clicks */

if (resourceGrid) {

    resourceGrid.addEventListener("click", (event) => {

        const button = event.target.closest(
            "[data-resource-id]"
        );

        if (!button) return;

        openResourceProfile(
            button.dataset.resourceId,
            button
        );

    });

}

/* Close button */

if (dialogClose && profileDialog) {

    dialogClose.addEventListener("click", () => {

        profileDialog.close();

    });

}

/* Return focus to the button that opened the dialog */

if (profileDialog) {

    profileDialog.addEventListener("close", () => {

        if (lastProfileButton) {

            lastProfileButton.focus();

            lastProfileButton = null;

        }

    });

}

/* -----------------------------------------
   7. HOMEPAGE SEARCH
   ----------------------------------------- */

const homeSearchForm =
    document.querySelector("#home-search-form");

if (homeSearchForm) {

    homeSearchForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();

            const keyword =
                homeSearchForm.querySelector(
                    "[name='q']"
                ).value.trim();

            const category =
                homeSearchForm.querySelector(
                    "[name='category']"
                ).value;

            const parameters = new URLSearchParams();

            if (keyword) {
                parameters.set("q", keyword);
            }

            if (category !== "all") {
                parameters.set("category", category);
            }

            const query = parameters.toString();

            window.location.href =
                "resource.html" +
                (query ? "?" + query : "");

        }
    );

}

/* -----------------------------------------
   8. INITIALISE RESOURCE FILTERS
   ----------------------------------------- */

if (isResourcePage) {
    filterResources();
}