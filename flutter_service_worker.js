'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "0041012fdab4278b3229dbf9c0578f60",
"assets/NOTICES": "9f95cf9f1491ff9dc8224fa304500a38",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/AssetManifest.json": "d97d47dbd984d417a18411e30647648b",
"assets/assets/chartData/AAPL/AAPL_Weekly.csv": "0dce360e8b175c24bb89d508b8b56893",
"assets/assets/chartData/AAPL/AAPL_Monthly.csv": "52aa1f1b8ac613c7cdb53b0ffca47df7",
"assets/assets/chartData/AAPL/AAPL_Daily.csv": "bba00bd8419523b1c0dcaf71a2622151",
"assets/assets/chartData/FB/FB_Monthly.csv": "d858e32e13a3660b8479670a9e8e2bff",
"assets/assets/chartData/FB/FB_Weekly.csv": "d688a8d02d0968d2236cc15ad06fefca",
"assets/assets/chartData/FB/FB_Daily.csv": "164e96907fcea5fd820d839440ba00f3",
"assets/assets/chartData/TSLA/TSLA_Weekly.csv": "7790213ffaa1fe05af0c46cc0a46252f",
"assets/assets/chartData/TSLA/TSLA_Monthly.csv": "1a83f124ac63701c9821d65f4ac29b47",
"assets/assets/chartData/TSLA/TSLA_Daily.csv": "1a6179bcf8ed933eedb10ae5e21114fe",
"assets/assets/videos/pickFruitCat_demo.gif": "0aed3734d5bae443fe8e090ec318920a",
"assets/assets/videos/roboticsSLAM_4x.gif": "dd4f758279cd79409830f664177e4e86",
"assets/assets/videos/nuclearTrial_4x.gif": "ff0ce0fbffd45ee4bbbe1016c2605897",
"assets/assets/videos/mapanimation.mpeg": "f41e3e0dac44cc3eda533034438e8d80",
"assets/assets/fonts/Montserrat-Bold.ttf": "d3085f686df272f9e1a267cc69b2d24f",
"assets/assets/fonts/Montserrat-Regular.ttf": "07689d4eaaa3d530d58826b5d7f84735",
"assets/assets/images/technicalSkills/pLanguages/cPlusPlus.png": "a15ba0c670a57fd09076b7cfde43615e",
"assets/assets/images/technicalSkills/pLanguages/dart.png": "0a4777b993a114d9b9870727398bcac6",
"assets/assets/images/technicalSkills/pLanguages/java.png": "0414fcd53fdb6903fb57134fdd8a9af2",
"assets/assets/images/technicalSkills/pLanguages/cSharp.png": "e7081ab128eb9cab24605d02dd6ce177",
"assets/assets/images/technicalSkills/pLanguages/javaScript.png": "c7140ae897077ae303aa769001cd0619",
"assets/assets/images/technicalSkills/pLanguages/html.png": "64ba6d76997bc51a792f321deda40db4",
"assets/assets/images/technicalSkills/pLanguages/css.png": "707e1342a3c3d3aa0a246bde9595efe6",
"assets/assets/images/technicalSkills/pLanguages/django.png": "f246d8d1828f46beedddbeb80b8cb177",
"assets/assets/images/technicalSkills/pLanguages/swift.png": "c1cfefb5f143a24730e1b19cbc7840c0",
"assets/assets/images/technicalSkills/pLanguages/python.png": "875d547546c810dc4b75ded02191c70e",
"assets/assets/images/edu_bg.jpg": "2fb0624a86d0c01045733a7a672f16da",
"assets/assets/images/lp_image.png": "5aad4d4216174954f5228d7d268546e8",
"assets/assets/images/flutter.png": "e4ab57b8da1cb9d2a01a34b17a0753b4",
"assets/assets/images/socialMedia/facebook_48px.png": "f63a0ae9fcf6cd73c344c343043355da",
"assets/assets/images/socialMedia/twitter_48px.png": "4599d7ca598ebeacb4f360e843f462cf",
"assets/assets/images/socialMedia/instagram_48px.png": "ff86eb598ca653dbf7f55325f6aadb09",
"assets/assets/images/socialMedia/linkedin_48px.png": "f7ee5e62b27aeb8f33adb426a3924695",
"assets/assets/images/socialMedia/discord_48px.png": "85ff450c59bac4476026461517fcbeff",
"assets/assets/images/pickFruitCat/installGuide/step6.webp": "1cbc60a7d5a263c128ab1512bbe1f360",
"assets/assets/images/pickFruitCat/installGuide/step7.webp": "57f8860f960196a81ec01232bbde3b73",
"assets/assets/images/pickFruitCat/installGuide/step4.webp": "a76f6793bc8c1a5698441ef2cea1de25",
"assets/assets/images/pickFruitCat/installGuide/step3.webp": "dfcebcadfa8ff51b7e3ce3c6a8b3727e",
"assets/assets/images/pickFruitCat/installGuide/step1.webp": "62bb15892a527adfe38cd325a8eb99f3",
"assets/assets/images/pickFruitCat/installGuide/step5.webp": "e490002a3c0bd7d4d82e9b5b0f21b550",
"assets/assets/images/pickFruitCat/installGuide/step8.webp": "4c6874ca0f66222b57abdb61b6178899",
"assets/assets/images/pickFruitCat/installGuide/step2.webp": "2ef22b0b0c8310ce89829708ea248cd0",
"assets/assets/images/pickFruitCat/gameDemo/demo3.png": "56e381df61c5fa6f6c168301e5625078",
"assets/assets/images/pickFruitCat/gameDemo/demo1.png": "0adbc1aa54da68c75b64d85278655dc0",
"assets/assets/images/pickFruitCat/gameDemo/pickFruitCat2.mp4": "15fad0c7832689d3dba8b45385298281",
"assets/assets/images/pickFruitCat/gameDemo/demo4.png": "15f9a329b869fdba5030b2102e662e69",
"assets/assets/images/pickFruitCat/gameDemo/demo5.png": "2f609fee4334348c7edcd00699fc1509",
"assets/assets/images/pickFruitCat/gameDemo/demo2.png": "a76e840d7c90e4f6127aa4c49e3a7540",
"assets/assets/images/pickFruitCat/gameDemo/pickFruitCat5.mp4": "4f93e7ffa30bf71de26a6930491bec5d",
"assets/assets/images/pickFruitCat/gameDemo/pickFruitCat4.mp4": "444da01f00c1c89d596fa59f30032b93",
"assets/assets/images/pickFruitCat/gameDemo/demo6.png": "201bddf6a2c9d0387d63fe5e771f183f",
"assets/assets/images/pickFruitCat/gameDemo/pickFruitCat0.mp4": "068e452386d0b52f485714a825ebff3e",
"assets/assets/images/pickFruitCat/gameDemo/pickFruitCat1.mp4": "15fad0c7832689d3dba8b45385298281",
"assets/assets/images/pickFruitCat/gameDemo/pickFruitCat3.mp4": "ddfe69a9b257fed0df23acc2626a7adb",
"assets/assets/images/pickFruitCat/gameDemo/pickFruitCat6.mp4": "b6ef9a7466a5976d9ccec48442879025",
"assets/assets/images/bg.png": "d8d10fdd88dd9d8f37bb7f31a3c61f95",
"assets/assets/images/academic_bg.jpg": "4f6b1c1c03df094a9ace70ad78817853",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/FontManifest.json": "1a726564c73eb44d252c69c6eb91fd93",
"main.dart.js": "71f8b58e176caa9ae6fc6567cc00c6e5",
"index.html": "9d5c515ef044e96cfa8eddcb51ee10e3",
"/": "9d5c515ef044e96cfa8eddcb51ee10e3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
