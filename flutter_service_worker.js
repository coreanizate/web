'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "23a8822215d6623676c495583f5d7809",
".git/config": "69e4bcb42fa7a9782457027e9c521ab9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "31f32eb434baf75642f6f7c3b451fb8e",
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
".git/index": "efa97d4252cb4546aa89e377cd63b938",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "07c1474d660c93fcee60c9b9a1f30ccf",
".git/logs/refs/heads/main": "07c1474d660c93fcee60c9b9a1f30ccf",
".git/logs/refs/remotes/origin/HEAD": "3379adcef2d0fe99824cf06d1e17a50d",
".git/logs/refs/remotes/origin/main": "e61d6dada28581731733a995e3f3d4d2",
".git/objects/02/38b06093b881bf098e9788b06d8cd3054907c4": "01bbbcf6c0146136188ecb36f50c5381",
".git/objects/06/5f63f6d29a754dfdc16de362cd4faba46875aa": "6abd76ed11cb76f684b5a6f32637c594",
".git/objects/0f/b25b52fcafeb040db91255494378fb422f8cb9": "bebf01b5f30e24e9bd799fd931d7247b",
".git/objects/10/5a7bb16ba3246c383101c869df1a76828da7f4": "19eef3e85c9013c50112e03cf6c97372",
".git/objects/14/827867173a9017ff27fbd5cccd2efc58c66b7b": "b2beeaddf8fef52f7daa56a225c01cc8",
".git/objects/22/244c222e5ec531ff3ea0a0bcc53a598c367832": "c1285ac8f427d663b7b509742751d245",
".git/objects/28/f9df494864d89c3800949a9630620881fee4ea": "3ba5b14bfe3ef3e81c241e6b573ef888",
".git/objects/2a/76dde3806c5a8b3b66120ce3a5f30288b1b4c5": "2c66bd19bbee888d57895626d79cb876",
".git/objects/2c/28ef2b67658616d670e39cfa00cbe5277053ea": "952da877d3399d48990a26837961a3ad",
".git/objects/36/7a3c10a85252959353c2af4cd1972504cc9323": "c4b9718889b27bfa9b5eb92b2c6cad13",
".git/objects/38/ad6c9ff074c26888c511e579c78e0c9e91083c": "8af09de96e954f7c1a77d1f1a135cb52",
".git/objects/40/cbf7db8209337fecf685b16665c64bb425d4b6": "29a0d2ca4220d30e3266584bbe8aba01",
".git/objects/4a/29251d71cea28e61d6973045d2d371f71067e5": "17577f52412383079f0c196830746693",
".git/objects/4f/a8b531bba83469e266e505804c5bb83b41017a": "294a635ce2ff3248d11e37820096519a",
".git/objects/4f/f2ff4db71f6961ee45885802b37c8a11dc42e7": "2caf063fa240f29c913e27ecaefe3b74",
".git/objects/53/8e8c0c6b3f50a3308e92fc0395bba3a305ad90": "32449d1f5d0ec3de95ec06dbdac43b82",
".git/objects/59/ea8e5ff5110080bf8546ff909481a9bb91ce34": "9757b1cfcaf2fd585c0c95f4846057da",
".git/objects/60/7c3360f221a009aa66c0820ef9a1df726f48ab": "d976268bb093ba4e923b92bc9683acdc",
".git/objects/6c/09ee7fa54c726155aa2c6c20c50050a962af40": "92b693ee4c67bb6c188eb4c77be55050",
".git/objects/6c/74c56444cd78ac84e08fc790a6904f1f911e96": "96cc3ba46e797d7c5a4474dc4625d500",
".git/objects/6d/c6765b01512af6c093608acbe9fcf67123ce09": "a8f292ff81c538411c5ca781d5f58d33",
".git/objects/73/f071e46802a16dd84b624e23b73f6ecb51dbd5": "e92751f1ddeff88595576efb5cf2ac25",
".git/objects/78/e7dfc128301baae9d563df7ef4746f5d7176a8": "0cc1180fe73f3c94cbf57107276f936e",
".git/objects/94/8d363fed00b13fff17dc1f0be8d6c68a34d805": "ee921d062bf451f08c91bf133e098515",
".git/objects/aa/14c604b4474f5192335e47481abfc37b7adfb5": "cb0c10d3dce7e1dd897a6f5ca92ec0b4",
".git/objects/b1/b122d3432446791f402e61f9e274dee020e24d": "f427d6ff664955f0c985f24ce8154340",
".git/objects/b2/f3b438e8758d334604ae3e422942ef8c96325f": "efd88bfaede96db1020d7a8031fac142",
".git/objects/c1/47333cb8f4264de665f627424107c2e588daef": "5aebe2eb8493b1568162aee85318bb95",
".git/objects/c2/e2fd0e0d8caaf714b3cc927de524600e6556cb": "784adc837d5ba53027d91d1ad7d95ac5",
".git/objects/ce/58ef4e5cb90893acafefe77493244710eeb10d": "3fa896341ac0fc66b366895bb5449f2a",
".git/objects/d2/631bfabee11a7b429b8643ecfcab6d1687994f": "d2aa5d15d9a28d56c542e3c1fd12fb3e",
".git/objects/d3/cf58af7f4f2d3896fc7f357843cb5808ab3858": "c6db0ae85d3966a1b35a873404307d9b",
".git/objects/d6/1df6333b08a759945a0d7eebefa6d6671c3ae1": "f5357e8e6792cbebb4d25b6179499f50",
".git/objects/db/e05f5b33643a04db32e3b807c3597f391f5095": "5cca8ab0e3f443bf417657adc894ccae",
".git/objects/df/0c15b87255b42b2efa5a35fb1567b83aaa0d5c": "daabae66864f2999a093fa2eeacda401",
".git/objects/e3/d7d1e8595b7ce66ec27ea8ee4739e4a00625ff": "d478d635a341266fc9de662624ec34c5",
".git/objects/ed/853f8a8e6590b5fe8d2690fbb34c2652825c3d": "d7b55e2dcfd74fb53eaa244d9331bf57",
".git/objects/ee/ed1c2ef08dd0c0d97b173bd7a5af14aceee36a": "ea33dbdb3a933eb8dc0d0acdc6aa383e",
".git/objects/ff/abd100e0abf7afde31efbd6cc0261db042fc17": "6dcedf933168a633e29eeefd45403290",
".git/objects/pack/pack-d6695768e8416c8c6d69b664f28f3261fff52c6a.idx": "de0d70c373af0a5e177066887c8a6a3c",
".git/objects/pack/pack-d6695768e8416c8c6d69b664f28f3261fff52c6a.pack": "8e56b836a34c49a7aa175bc120140a59",
".git/objects/pack/pack-d6695768e8416c8c6d69b664f28f3261fff52c6a.rev": "64f4beb41e7076f39046cb7eec5dd8e8",
".git/ORIG_HEAD": "ad4aa8e5ecf6b8ad2737d29d52995ceb",
".git/packed-refs": "237225495875f279fdf8e69a2115dcc7",
".git/refs/heads/main": "2c367a54b36ee03337413b3993a20d5a",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "2c367a54b36ee03337413b3993a20d5a",
"assets/AssetManifest.bin": "0a355db5c2919a6a40ac5a8f7c4a9c5e",
"assets/AssetManifest.bin.json": "6695d0279bc84e31806538e0449571c3",
"assets/AssetManifest.json": "0963f26d769a5e99602718dcdc4c5bce",
"assets/assets/images/logo_ccg.png": "9f607020dfbfaa694074432f687ce32e",
"assets/assets/images/logo_ccg_alpha.png": "090a0888d375d3df8573f994878dfadd",
"assets/FontManifest.json": "66b71d2bcd2b436ab06cceee43157084",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "fbd343f316889cb8e47bfd904d1401a9",
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
"favicon.ico": "91f6250ad41837cd1311cc36eb5d1aee",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "a40477249d1fe6c464723c59c1e5d177",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3bfc949f1b1fe69c759460d551502f8b",
"/": "3bfc949f1b1fe69c759460d551502f8b",
"main.dart.js": "1f1920e35ccdb083d839f5cd1e8a2a04",
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
