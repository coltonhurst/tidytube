// ---------------------
// ----- Tidy Tube -----
// ---------------------

window.addEventListener("load", main, false);
const MAX_SIDEBAR_REMOVAL_RETRY_INTERVAL_MS = 100;
const MAX_SIDEBAR_REMOVAL_RETRIES_ALLOWED = 10;

function main() {
    let removeSidebarTimer = setInterval(removeSidebar, MAX_SIDEBAR_REMOVAL_RETRY_INTERVAL_MS);
    let sidebarRemovalAttempts = 0;

    function removeSidebar() {
        if (sidebarRemovalAttempts >= MAX_SIDEBAR_REMOVAL_RETRIES_ALLOWED) {
            // give up
            clearInterval(removeSidebarTimer);
            return;
        } else {
            sidebarRemovalAttempts++;
        }

        try {
            const sidebar = document.getElementById("secondary");

            if (sidebar != undefined && sidebar != null) {
                clearInterval(removeSidebarTimer);
                sidebar.remove();
            }
        } catch (error) {
            console.log(error);
        }
    }
}
