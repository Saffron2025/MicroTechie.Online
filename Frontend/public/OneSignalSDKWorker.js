importScripts('https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js');

// Custom push handler (fallback in case default fails)
self.addEventListener('push', function(event) {
  let data = {};
  try {
    if (event.data) {
      const textData = event.data.text(); // raw text
      try {
        data = JSON.parse(textData); // agar JSON hai to parse karo
      } catch (e) {
        data = { message: textData }; // warna plain text treat karo
      }
    }
  } catch (e) {
    console.error("Push data error:", e);
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
});
