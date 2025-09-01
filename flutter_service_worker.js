'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "100a753e95d9a2a7eccdc2eb9b42d4a2",
".git/config": "2c13fe66977a1c82320a6842bd86d4cc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "bc55569c2a7c9b35ee1b2864dbb3ca2f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6f1c3924e4c785820e562007efa2455b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5d2add4d63867b9b31ab7e6466540650",
".git/logs/refs/heads/main": "5d2add4d63867b9b31ab7e6466540650",
".git/logs/refs/remotes/origin/HEAD": "768d768386e5302873c6742c10a89084",
".git/logs/refs/remotes/origin/main": "a882c2ba7c4293537532728bb41fbe0b",
".git/objects/01/211857345dbff9a23aa87e0b7354e5d7c968cf": "075409c5bcc081caae8957f805b1b6d9",
".git/objects/03/b8a409fb5d11b682e01dcb90196f276047976f": "b1bc724df3f4397edf88e65f8c618dd8",
".git/objects/06/c81c002852ca2ac36bf8d8b25ebe157d48ff8f": "d6fba3ed1f2507c5f5b1c8ff23e6e684",
".git/objects/1a/e1b3860bc41d6f16ef72225a128f326f6ea8b0": "95fa99c645b85f4388c23726f71f5a93",
".git/objects/1c/a4e66bab8afa6cc644e54f248d37fd32360237": "2f9a571ce1fe71bfdf92709b080f9816",
".git/objects/1d/328efb2a265ef6a8f57890c5260a263a15e779": "546c4f316ca2771c8cda67f52f5fe61f",
".git/objects/23/1fc4611e224258a25ea6a1249eaf0ce595301b": "86b4b8f4792c53b6b03036dfe5f66b35",
".git/objects/25/f470ed27b4023c8542b8d937cb182dba1e6941": "28651710241ae7c13402fc0ba20c4861",
".git/objects/26/79afc54d7dafa6b72f5c7e673379076b1d9f7d": "e75ee7167f63fe830e584e71f546ef37",
".git/objects/27/9efc0ce653e6b4785dd5138dab5eef80fe4722": "4163391e3b6f550558f0919f7023e2a0",
".git/objects/31/7d3a04aac50d4c5b74e17b9f3be682deba985e": "5fcb80c7b6dd1c88f47fa9cdfadf902e",
".git/objects/36/a6cd7594ae0fdbd82d48501f3a0dbca65bce8d": "aa6639feb09eef37d0e8e2b2de815b39",
".git/objects/40/41e9061eb8b7f04b99c2ebbfed331b0d2ef8fe": "784428d9d205166f74b79a7edf82f1ae",
".git/objects/42/a088a42d51d7774ca55f5f8915f12800c41410": "12d544fe4b3daafdb12dd06c1c254dfc",
".git/objects/47/096d829ea78324814643c259b2700c97f89043": "c200c7082936d178e977fa769d16d11b",
".git/objects/49/5db8c336a41c017e375fd34e369a400651606b": "b7e74483b4db5032ba694280b4c614ca",
".git/objects/4b/9286e6d234df315eabcb6cf9c01de1c9be3b0a": "fb055ee0e85cf1b770c81de09dbf5785",
".git/objects/4e/aa70f0ec468275ca2ca4415efba62e2ea2b74e": "a2b6e222bf6df05715e041c7661486ea",
".git/objects/4f/1e1a23723ef109f475b1218e63550e9bdd63f6": "8ccadf4eecc5d964e400e0ecd8603b0e",
".git/objects/50/63dab0e2e1fa36277808b2890ff9b9117fe760": "022f8bd337a20f4232a9c76279f020b0",
".git/objects/5f/4fd7fc448de5be7fee098f8e745cf3d502029a": "23abce825e3a52bcb26bbabdfd3c9133",
".git/objects/66/6ff6b83cf3b51e73bfbf496afe39a3c3b3b28a": "58482343b41314a5c576148308f722ac",
".git/objects/6e/0cacebbce4ef300ad11899c3a49cb25ce439df": "6d2589546e7bea4acb6445a893851215",
".git/objects/6e/ba6309df5e1cc1978cdc8f4a00dd11e4ae9517": "07b620207e0d1fea8c677d47bfc777a0",
".git/objects/77/a0e22e3360dbbf7fb26410f7039296babc9f61": "88bf3ff855f2fc6a4845f4e9e4d0417a",
".git/objects/79/3a2b8fb686f7a8cd0b4e6be441d1523bf5ca23": "e880e1873d8cc19aea206842fd0cd77d",
".git/objects/7b/1c61abd4e80706d3cf267908aae98b86f405e4": "bcce9261ed09ba9cd252d8b51cc8f891",
".git/objects/8d/dc48977e2e66ccbae12368262f4a63d4238ab1": "dea0a42d763e5272460389a46b2affdb",
".git/objects/99/ead7260fa6704dc160e9c2a2d9a2cf0d13e5ec": "ce2c1a9b06e25184fe2e18382611087a",
".git/objects/a1/db30b52372dea83c376a9f7f0282cddcf5f848": "f52f200c642007a82c4cbe0612be8624",
".git/objects/a3/b4562a15a5679eb9d0cd4e9dfd4939091cbc87": "7fa623c5995080205428d2f82226e2a4",
".git/objects/a9/cb171c24dd9914f29be0e421a2f33e16570cc0": "5b8a87939e4981d3222f1792f776644f",
".git/objects/ab/375a4d92241bb6e4f7619159953d2cd03828fc": "ebe31d16266ac3f4ca8b5da1fd8c6853",
".git/objects/ad/252845c5a9596f69932ad6e82b00c7ecf8dbd0": "eece9e968f32b46730367cea53ba6116",
".git/objects/b3/e6a7cc8d1eda6261a852cd858039f8eac5b01c": "7412cbc2437ee7032adb659c7d188317",
".git/objects/b7/2d4c42822e07f5198971acf4ee01fd8f0beb6e": "be62101b8cbe2389dcc546709a07b155",
".git/objects/b7/8e3cffbfbd71ce7f0a59d0158bb093d0c2ecc6": "83d579fcf013950c6e2fbf9ff69aae67",
".git/objects/b9/5b51215751f83bbe5186e9b84130e8c366ee09": "cecfdab3a30a24f7342757cdbafa1a9f",
".git/objects/bd/732fff128f7ada12fd74d85c7b015ddc39e7cd": "d85bbf9913e796183501cf1fd1695000",
".git/objects/c0/43cfd16193a13e80af3fb3eb9dd2a61e8fdb37": "a634d541b90534df201b45922820a932",
".git/objects/c9/4a1fc143eb8ad327f4b493fe117bfa96656cdc": "1a69200d8a1817dbd4ebbec7b6e057fe",
".git/objects/cf/ffb5ed3eca4dca7960857ec9f382cf4675ce92": "a443d043bd6c19d38f1a7848fce36891",
".git/objects/d6/c8522d58352948aa1e27445d96bf3f65a7c6af": "add727ac4403493daa45c8c49d709eb8",
".git/objects/d8/429a6be8987763dfe95f877efe0f17fea3f504": "9d12921d89581ff12442997d36e6d9d9",
".git/objects/e3/c7e2baa5dbc9c78f600e8fff8bc85e89afd39d": "475387042fa2b2200081e4284ce80c58",
".git/objects/e4/99ee779c3e657cf9f76d09d2cf39d39631093f": "833f7b8cb2bee24213a1f7eca10229d9",
".git/objects/e4/f746bbd97b647140ae97533668f8d36c3e8a1a": "b9e59cf547d91e20262bd5cc34305175",
".git/objects/f5/4d52ab390bb257148c6c481f5059c5155f24c3": "667baec6456768f3707abb1863779439",
".git/objects/f9/eb62fa3a6d6cb9d1819c7b967c20a1f82eaa01": "89c420cca680e22955808afffa419db7",
".git/objects/fb/88ccbf2a46c72c3e9c5fd9dd9021a0ab33e1a3": "8e8a8a066ca6bbee2aed5558733251db",
".git/objects/ff/7e6722dfe54b4ac8baf9d9b9f410ed8c268efc": "4a8bd8f45dc39532f024e367665e3009",
".git/objects/pack/pack-01d3db2699ae9504f56b53975a95c4628a8e0b97.idx": "26e6791238f980d39fc0a56ee0395b8e",
".git/objects/pack/pack-01d3db2699ae9504f56b53975a95c4628a8e0b97.pack": "8dc6aefe29b7d0b3c26ba6db00c0c802",
".git/objects/pack/pack-01d3db2699ae9504f56b53975a95c4628a8e0b97.rev": "27699f31c32554c683c6e350bc9e1240",
".git/ORIG_HEAD": "cc9c251586b870954328224f8f0d70cb",
".git/packed-refs": "d3cb51fea325183d13f6dea17aac28fa",
".git/refs/heads/main": "f2fa4d6c8f4c413abdf2bafe7205ad3c",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "c4d0f66e30737a743a4d746cb6260b9c",
"assets/AssetManifest.bin": "0a355db5c2919a6a40ac5a8f7c4a9c5e",
"assets/AssetManifest.bin.json": "6695d0279bc84e31806538e0449571c3",
"assets/AssetManifest.json": "0963f26d769a5e99602718dcdc4c5bce",
"assets/assets/images/logo_ccg.png": "9f607020dfbfaa694074432f687ce32e",
"assets/assets/images/logo_ccg_alpha.png": "844550370cb001b97e35edc915d24e8f",
"assets/FontManifest.json": "66b71d2bcd2b436ab06cceee43157084",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "0c14923205a7ff2882f7a711082a2b29",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9821d317eff9bb9cef89a8a239e389c6",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "a48ca9e5bcc89fccac32592416234257",
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
"flutter_bootstrap.js": "bacede8392010cab6b87e248241fdd62",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "22ff29acfea8e58fa9c84db7bf0123dc",
"/": "22ff29acfea8e58fa9c84db7bf0123dc",
"main.dart.js": "9071c4bb05f0909872957097a84c3ac6",
"manifest.json": "dda6d6d811adebaeddb141d0a5d4c1b4",
"version.json": "82bc4730c0b69ea7bb795b3b59c2c496"};
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
