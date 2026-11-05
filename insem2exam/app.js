
function openSection(sectionId, clickedButton) {

    // Get all dashboard sections
    const allSections = document.querySelectorAll(".section");

    // Hide every section
    allSections.forEach(function(section) {
        section.classList.remove("visible");
    });

    // Display the selected section
    const selectedSection = document.getElementById(sectionId);

    if (!selectedSection) return;

    selectedSection.classList.add("visible");

    // Remove active state from all menu buttons
    const menuButtons = document.querySelectorAll(".menu");

    menuButtons.forEach(function(button) {
        button.classList.remove("active");
    });

    // Highlight selected menu button
    clickedButton.classList.add("active");

    // Update heading
    const sectionNames = {
        overview: "Overview",
        subjects: "My Subjects",
        resources: "Learning Resources",
        grades: "Academic Performance",
        presence: "Attendance Report",
        account: "Student Information"
    };

    document.getElementById("heading").textContent =
        sectionNames[sectionId];
}
