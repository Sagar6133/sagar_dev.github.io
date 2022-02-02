'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "8aae25baff2ef9e3da0ac9ff82467823",
".git/config": "e5c0aaad5d0074e7145e1960d04bcb8e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "c31753b02734a9a5bbdd2751f8d10ac6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "799e19059279836dde981f261aea1196",
".git/logs/refs/heads/master": "799e19059279836dde981f261aea1196",
".git/logs/refs/remotes/origin/master": "7d4ff1c76a0032fdb6897322247c9fc0",
".git/objects/0b/4ef7179a2adcb27b9bc8ca4ec84c280efd4392": "3b95d329fc9d733615a29ac1ff3cbf6c",
".git/objects/0f/bde152bb7e8ddec5a5a01a8d987d0b4d797db6": "c1421bdab35ee9a5903ef4cd987d6839",
".git/objects/17/dccaa03d37a570ad49bd224355ba1e1a51b820": "0a3369275777d959a28774dce3cadde7",
".git/objects/1d/c9f20b286956cfb590ed03efd55321f249f15c": "8fdd5b42994a14dd5e05b4691af72b2a",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/38/a49f6be8363c821c8397dac6f1e34f967a9eb8": "06cf714338a530ff5e8a42e6d04549e7",
".git/objects/3e/2ffc0fccc6c29fd525c5277019dc10d40ad19e": "c89dbcc257bf6ff6023dc08d694e0c35",
".git/objects/40/5763c672c36d0276d127337b712c2d37688ee6": "5beda6b8825c49500afc37cb108852d9",
".git/objects/43/5515aea2ebc774849baa1b49b4869a93329510": "312700bcf3c4b53e67550ac9249b9b5c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/58/545f9e9afd2ef8c18094f4889a7757a321e15e": "841e9d5e8c34c19c3055dce3c207a000",
".git/objects/5e/524abb26e8d7363e566d5bde8e3af72e2efd9f": "36ec00880224e6345afdc1fe8a8b8122",
".git/objects/65/861b91fe7af65372dcdeed4c8d71a8301a3760": "934d64c543d9c19ecb51fa44d35a1d4b",
".git/objects/77/347a56e0435e6df277b837c5114012d425a48b": "108dddcc5ae4e0b25ee699d86b0dab3e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/85/63b867d921b0d3b4c38e196d20ff0372d93757": "c8dd97397166cf3d0172c857b6f3f9c4",
".git/objects/87/4a7090039e0823e91fcff39b42641ffb757bde": "2f3cfbb077e3ad6512edc7fc0525d642",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/d4c8ea8a5481158ff7377f1f06b29e988a5936": "52634c3575bd62986371f387b9975444",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/9b/03c1a3a42d9765f735a33f978b06f2bee9732e": "3fabcc50718c7f0d1e1a9443aeb40de3",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9e/4e20375caadf0fe3a8527386fa610914224ff5": "24c3bc563e10895e0801940dad8d4646",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c9/74aa54d2da7c250a2c144d2838d1a29aa9ec6c": "23ff6780e56f54a80da2725570b3e8bc",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/da/a543fe4e4b0805bb6f972ef31c450188a0fd3b": "ccc4f851dc0efd2470f621c9e24bff35",
".git/objects/dd/a8d659d7750525529cdeb5291039424a41ebd5": "bb42623a542b676580fb28a3588a6ef4",
".git/objects/de/3712a05122064e187c51b696b3c9e612084df0": "a9bf690b4bdc6e518dccbc63c8411e3a",
".git/objects/e4/40081876df135f6d27f5cf764233f85ac6194b": "f62aaa149c5552e5da6461af2ba85e52",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/refs/heads/master": "1d9015fc87afd2800e21e1ceeb92d8f5",
".git/refs/remotes/origin/master": "21f04fd336320c6417ddcca58b00f0df",
"assets/AssetManifest.json": "607c38f0b91047e602586b4c2b877ef8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/about.jpg": "d19febc74c166d382bac09ea5923ae5a",
"assets/images/github.png": "b37b05a713d8eebcbb475119e587859b",
"assets/images/instagram.png": "cc1e9597ab5186deeedcad484d27778d",
"assets/images/linkedin.png": "898c0407d74c75fa110de76293d96ddd",
"assets/images/myphoto.jpeg": "31356dbab62a9fc3d34ff90a521df9d9",
"assets/images/Resume.pdf": "63a716930f26378a30f5b8f8c9ffa66f",
"assets/images/xyz.jpg": "c1d6b3d2f55a88fc636099fbd26b4b80",
"assets/NOTICES": "ff852d9efcf5c6e88edfebb663417326",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "ca3dcb7af03f85cf773bd65e66442ead",
"/": "ca3dcb7af03f85cf773bd65e66442ead",
"main.dart.js": "9da746589537fb5398b85c89f353c37e",
"manifest.json": "3d9b369265eb00a2b9f833c932327313",
"version.json": "7367c9ca1c69727a8bb09a7d2d21d48c"
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
