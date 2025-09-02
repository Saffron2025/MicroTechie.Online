importScripts('https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js');

// Custom push handler (fallback in case default fails)
self.addEventListener('push', function(event) {
  try {
    let data = {};
    if (event.data) {
      try {
        data = event.data.json(); // try JSON parse
      } catch (e) {
        // fallback if plain text
        data = { message: event.data.text() };
      }
    }

    const title = data.title || "MicroTechie";
    const options = {
      body: data.message || "Test push from Service Worker",
      icon: "/Micro/MicroTechieLogo-192x192.png",
      badge: "/Micro/MicroTechieLogo-192x192.png"
    };

    event.waitUntil(
      self.registration.showNotification(title, options)
    );
  } catch (e) {
    console.error("Push event error:", e);
  }
});
