importScripts('https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js');

// Custom push handler (fallback in case default fails)
self.addEventListener('push', function(event) {
  try {
    const data = event.data ? event.data.json() : {};
    const title = data.title || "MicroTechie";
    const options = {
      body: data.message || "Test push from Service Worker",
      icon: "/Micro/MicroTechieLogo-192x192.png",  // apna icon ka path
      badge: "/Micro/MicroTechieLogo-192x192.png"  // optional
    };

    event.waitUntil(
      self.registration.showNotification(title, options)
    );
  } catch (e) {
    console.error("Push event error:", e);
  }
});
