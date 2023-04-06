// Register Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("static/service-worker.js")
    .then(function (registration) {
      console.log("Service Worker Registered");
      return registration;
    })
    .catch(function (err) {
      console.error("Unable to register service worker.", err);
    });
}

// For Add To Home Screen (A2HS) button
// Chrome Only for now
let deferredPrompt;
const addBtn = document.getElementById("t-4");
addBtn.style.display = "none";

window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = "flex";

  addBtn.addEventListener("click", (e) => {
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      deferredPrompt = null;
    });
  });
});

// Display Message at top of homepage when offline
window.addEventListener(
  "online",
  function (e) {
    // We could use this event to Resync data with server.
    console.log("Status: Online");
    hideOfflineWarning();
  },
  false
);

window.addEventListener(
  "offline",
  function (e) {
    // We could use this event to Queue up events for server.
    console.log("Status: Offline");
    showOfflineWarning();
  },
  false
);

// Check if the user is connected.
if (navigator.onLine) {
  hideOfflineWarning();
} else {
  // Show offline message
  showOfflineWarning();
}

function showOfflineWarning() {
  document.querySelector(".offline-notification").classList.add("show");
}

function hideOfflineWarning() {
  document.querySelector(".offline-notification").classList.remove("show");
}
