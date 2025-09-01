'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8ea08ea2444cc58ec5807fd7669e488f",
"assets/NOTICES": "5646055627d1b77d39d0ad8f36057524",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "9237378a2730fa1f2eb55bdf8bd2e90c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "22ff29acfea8e58fa9c84db7bf0123dc",
"/": "22ff29acfea8e58fa9c84db7bf0123dc",
"main.dart.js": "8b720d521ade73762817f5732c076153",
"manifest.json": "dda6d6d811adebaeddb141d0a5d4c1b4",
"version.json": "82bc4730c0b69ea7bb795b3b59c2c496",
"web/.git/config": "2c13fe66977a1c82320a6842bd86d4cc",
"web/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"web/.git/FETCH_HEAD": "a5abc4130e9334d91db7b6cd45dfc9c6",
"web/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"web/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"web/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"web/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"web/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"web/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"web/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"web/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"web/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"web/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"web/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"web/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"web/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"web/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"web/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"web/.git/index": "f81288ee4789a51ac6210ea73d03bc93",
"web/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"web/.git/logs/HEAD": "871950ef59823ddeff4ee3ddcf5a9657",
"web/.git/logs/refs/heads/main": "871950ef59823ddeff4ee3ddcf5a9657",
"web/.git/logs/refs/remotes/origin/HEAD": "e22027e95fb66fac60038380bbbe69a0",
"web/.git/objects/pack/pack-f2e7a9b4a7539c5a646a0a24a18045c36a04bf97.idx": "fffa212db3acbeae7f71affd483aa8d2",
"web/.git/objects/pack/pack-f2e7a9b4a7539c5a646a0a24a18045c36a04bf97.pack": "d1dba406bde6fede0fb3d2078b44c58d",
"web/.git/objects/pack/pack-f2e7a9b4a7539c5a646a0a24a18045c36a04bf97.rev": "86013137394c3d47d522b2b146584e45",
"web/.git/packed-refs": "57de4248bb96fa4e7bf1bb15f0cd5dd4",
"web/.git/refs/heads/main": "62db9185a26ba118547479e55c7a4586",
"web/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"web/assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"web/assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"web/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"web/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"web/assets/fonts/MaterialIcons-Regular.otf": "8ea08ea2444cc58ec5807fd7669e488f",
"web/assets/NOTICES": "f13c75b03609d18fb87a59f6e6084a38",
"web/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"web/assets/shaders/ink_sparkle.frag": "9bb2aaa0f9a9213b623947fa682efa76",
"web/canvaskit/canvaskit.js": "42e05a9f91b79e57785ec9bfc00b225c",
"web/canvaskit/canvaskit.js.symbols": "fb4a73c9dad886e036c3d222f44cfa4a",
"web/canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"web/canvaskit/chromium/canvaskit.js": "d6271c4ef1261e212b5a1bb898830cce",
"web/canvaskit/chromium/canvaskit.js.symbols": "4fce448c55821f9c1fcf493895f5169f",
"web/canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"web/canvaskit/skwasm.js": "84da1e9f1f623c2236616062f8113f39",
"web/canvaskit/skwasm.js.symbols": "61ca8ce5c6c98fbbcb1d24a05fac3890",
"web/canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"web/canvaskit/skwasm.worker.js": "b31cd002f2ed6e6d27aed1fa7658efae",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/flutter.js": "dc84edd4c17e3c4c430feb0e0688cce9",
"web/flutter_bootstrap.js": "62547f11ef145824d979fdec4e408624",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web/index.html": "446ef3ff4e36beb8112c4a44e37c911f",
"web/main.dart.js": "b7ec0b6bf78e870464ffcb6bdbe06dd2",
"web/manifest.json": "dda6d6d811adebaeddb141d0a5d4c1b4",
"web/version.json": "82bc4730c0b69ea7bb795b3b59c2c496"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
