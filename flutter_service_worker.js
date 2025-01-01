'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "e9a08d3a2d97d28658a3961576af9833",
"index.html": "dc432128d371757c58946a4e8d57ee71",
"/": "dc432128d371757c58946a4e8d57ee71",
"main.dart.js": "e1b5f3cc1e226ab8791df169bd1a7be8",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "63bb0c1d0ca4e00743a7d7f339d86129",
"assets/AssetManifest.json": "5e5025389988d3c615ca892662e9eb39",
"assets/NOTICES": "396f0ead447bfe4aa7972c1241fec7f7",
"assets/FontManifest.json": "0bdbb207505bdac745447fe272bc06d2",
"assets/AssetManifest.bin.json": "6b5779dd01c67fb657b29e5dc3343e62",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c5d5836e85a8e3defaae87550e53fc93",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/boy_play_flute.png": "dfdfaf40f7a5a03163035cb25db8ddfb",
"assets/assets/images/logo_ic.svg": "84ae46de5346136400e77098c4d1e2c0",
"assets/assets/images/sound_ic.svg": "6ce953b9bab65f16d755c83f1246c2e4",
"assets/assets/images/flute.png": "427222f87a73c86caee1eac64f45773f",
"assets/assets/images/sound_header_ic.png": "da3b3374fbac29d30ce1b5a302d0b218",
"assets/assets/images/girl_play_flute.png": "75fea748183036281972ad2e7656d08e",
"assets/assets/images/thank_you_ic.png": "c7c7238d37f0e63194bb5b269d19ddad",
"assets/assets/json/notes.json": "b1fc32d3f00dc1e3c6bbd3671b0876df",
"assets/assets/notes/48.png": "de2cdad3d3657e6ddce6554098b5ff81",
"assets/assets/notes/49.png": "e5463e725b15381725010e9925b5dcb9",
"assets/assets/notes/8.png": "581d414693d4835f9fb423fd067ab05a",
"assets/assets/notes/9.png": "7e3c7513929242ccc7e8548885e31294",
"assets/assets/notes/14.png": "8aeb12f49a050574fbe67b9d845305a5",
"assets/assets/notes/28.png": "03cfd0ff012c51ff7d8833f07417d825",
"assets/assets/notes/29.png": "76c9d424bd39a513cd76e89dea0a2c80",
"assets/assets/notes/15.png": "8b9451bfdc3a1f1f2fd144312493660c",
"assets/assets/notes/17.png": "ba19c7cb73d4ce8e76f5a66a6ccf378e",
"assets/assets/notes/16.png": "8961f11b838784536bdc4085e536f6b6",
"assets/assets/notes/12.png": "fc3211fbbdce468c108f1cc9a49b66ff",
"assets/assets/notes/13.png": "d1d97dc5318e186ec63be383d9419a9e",
"assets/assets/notes/39.png": "7fa3a067d97c44e33b679101ad4dcf1a",
"assets/assets/notes/11.png": "2af5f5bcdc4b5ed26918a5ddaa51d43e",
"assets/assets/notes/10.png": "4d344822dec5f28aae2e68144e637337",
"assets/assets/notes/38.png": "f702669843c6f7ee6f3028d531b1f107",
"assets/assets/notes/35.png": "ea17a8be75430b06d7e74f426d6bd56c",
"assets/assets/notes/21.png": "2382dd1d357010a1bb451a01ccf9e50c",
"assets/assets/notes/20.png": "81734272613e14027c4f43f714b2b91c",
"assets/assets/notes/34.png": "50acdf2b931537cff1cd72605f7c5923",
"assets/assets/notes/22.png": "ae79273842811a762a1b67ee4fb03e10",
"assets/assets/notes/36.png": "2e663e647226618f88e7ac1ffc34bc94",
"assets/assets/notes/37.png": "ff3f981140741db284c5bb88839ca559",
"assets/assets/notes/23.png": "8b20edee164d3d00e3069fd24fe6877f",
"assets/assets/notes/27.png": "0078b2cc2db7ee472883951f88fc16fd",
"assets/assets/notes/33.png": "e6a2b9c231b882f103106ea182b60e95",
"assets/assets/notes/32.png": "1d9d1431d956e72e84b5d062cc4d6607",
"assets/assets/notes/26.png": "361c32191d7e0d66850d51830c7ffdad",
"assets/assets/notes/18.png": "23203f71d2f55f4c3f049f57755a38b4",
"assets/assets/notes/30.png": "0fbe225e6515d30fde27b4c923862484",
"assets/assets/notes/24.png": "7c1036cfabac62ac82cddad7195fdf28",
"assets/assets/notes/25.png": "120bd9d85f2d207f70cafaa1f35b2765",
"assets/assets/notes/31.png": "1d64826880021859a637c4c41dc1cd7f",
"assets/assets/notes/19.png": "85c70bbeaced76c64df5eae13268e4be",
"assets/assets/notes/4.png": "2c1e03a2d893a6b5e0c09e92deaecb1c",
"assets/assets/notes/42.png": "fbf68bdd15b8061c9dddf21c7e1e579e",
"assets/assets/notes/43.png": "10eaefef8f016feb7496ddca35833fee",
"assets/assets/notes/5.png": "3c869743e6dfcd8232b533f618418ee2",
"assets/assets/notes/41.png": "a0b5f23e02b85f3cf177ee194f7b768d",
"assets/assets/notes/55.png": "2ab961c8b643d9981453aa123b08d431",
"assets/assets/notes/7.png": "ac8b1733fdc42f61de5d817edee6a80d",
"assets/assets/notes/54.png": "de1fe48e3674051de5e46f51067fecb6",
"assets/assets/notes/6.png": "70322bea889941ae2c652c025a08365c",
"assets/assets/notes/40.png": "6e411cb2e5c56c3724d005001ec208a9",
"assets/assets/notes/44.png": "1bee8fdeac25658cff84fda47b36bf9a",
"assets/assets/notes/2.png": "2752bc38b95be58a7259a0b576ea168c",
"assets/assets/notes/50.png": "c0c9c69599befe9a232c9ceda0423d91",
"assets/assets/notes/3.png": "f75d169d38168619778f0bc7378e947b",
"assets/assets/notes/51.png": "4e1f7a48f1b1d0f49dacb6156d282db7",
"assets/assets/notes/45.png": "43bd3b787b98946d17369559510c0890",
"assets/assets/notes/53.png": "d083f846e8eefadfbbe30273f5cd5d8d",
"assets/assets/notes/1.png": "39041a5432e078efe914754f8af58c0f",
"assets/assets/notes/47.png": "401e567721d7d9074b7e79e669705076",
"assets/assets/notes/46.png": "d4e9a68e9b2b92426f1c514ed7ee4fc2",
"assets/assets/notes/52.png": "814f16b37b4e487f1cf081c22461a858",
"assets/assets/mp3/1661s.mp3": "f52bfee04405fb77417331b1c554056a",
"assets/assets/mp3/880s.mp3": "dc849ce1a126c9f88d0b584241f0ecc2",
"assets/assets/mp3/2217s.mp3": "ed4b1cf31582c44dcc29b42867f6f309",
"assets/assets/mp3/622s.mp3": "8395099e336fc0783c374f2bbc5d6073",
"assets/assets/mp3/783.mp3": "ff992c5ad8168ce4af0f47bf44f1c67f",
"assets/assets/mp3/1046s.mp3": "89ac1cb41693e389a3dbdefa42f7b19e",
"assets/assets/mp3/1396s.mp3": "c9a285d1af7861a6ba9ed93d9a23fed8",
"assets/assets/mp3/659s.mp3": "f673147d5ddce3819c64902629af456d",
"assets/assets/mp3/415s.mp3": "3fbaaf20fe6464532a262ecafc843359",
"assets/assets/mp3/2349s.mp3": "4ee93c0b40dda22eff4d24b32a2cab4d",
"assets/assets/mp3/1318s.mp3": "d2ca1a767cdb42e89fed1ac29b8c742f",
"assets/assets/mp3/1174s.mp3": "e0fb2883a38d599d0968760e5ef5dd68",
"assets/assets/mp3/Tuner3sec.wav": "2005f92b2a131597ab683ff5d84208ab",
"assets/assets/mp3/1108s.mp3": "aaef04da0ffee1ad65696e86ee2d1483",
"assets/assets/mp3/1975s.mp3": "fe3ef55fecde212e6c8068dc155a97cd",
"assets/assets/mp3/tock.wav": "f1a2cc4a0b6f256300e5e300593b69fa",
"assets/assets/mp3/311s.mp3": "202032d5377e5c547ce7a30a38b9cacc",
"assets/assets/mp3/2093s.mp3": "3c1ac97840bfa1e329e4d7f56c91384a",
"assets/assets/mp3/523.mp3": "c370d3942e76cc635594dd42c2205f8a",
"assets/assets/mp3/277s.mp3": "3129808cf5870e0c30a00884db1f3253",
"assets/assets/mp3/261s.mp3": "fcd190ff5f42d93097f65b6b260bfb53",
"assets/assets/mp3/830s.mp3": "42eb7725b360ba863c2ca4ac6025e285",
"assets/assets/mp3/349s.mp3": "98158ad32be2966255afd40c8ff6ff4b",
"assets/assets/mp3/1864s.mp3": "712a89a70632cec54f160cc78e747c17",
"assets/assets/mp3/369s.mp3": "4682a71b81217c1f35b282db066800af",
"assets/assets/mp3/739s.mp3": "ad299cfa7d38586e2ef9fdcf2eecc455",
"assets/assets/mp3/493s.mp3": "c74ceb84a029dbf3fd2b96f6553cf56a",
"assets/assets/mp3/1760s.mp3": "7a4e7ee23e6888203cc4f77adeafc955",
"assets/assets/mp3/329s.mp3": "31b2656e06a0f228a4d0b01cae803d26",
"assets/assets/mp3/391s.mp3": "31926d52cb941fbf7af0e9f6272e1c3e",
"assets/assets/mp3/554s.mp3": "00d46b69bc32ebf4bbb8e7d83a01b9ca",
"assets/assets/mp3/466s.mp3": "585fa7fa18ccd7140bf05991381cf29d",
"assets/assets/mp3/1244s.mp3": "58a9d21dd623bcbc64e5dc5432812682",
"assets/assets/mp3/932s.mp3": "e551ec8ca7b0da0e4f2aa76247d5e7a6",
"assets/assets/mp3/698s.mp3": "4609d969cd1ad6959787e23ec7476634",
"assets/assets/mp3/1479s.mp3": "c03abd8585f1699b47ea8374e34f657c",
"assets/assets/mp3/987s.mp3": "e3b53b2a1bcd2efa0bad323412dea49f",
"assets/assets/mp3/587s.mp3": "5de0379c7a1c0875926a0950d3214251",
"assets/assets/mp3/1567s.mp3": "572fd6f4b2345c13b6388c7609048cae",
"assets/assets/mp3/440s.mp3": "2a4abb665e885a427829d723952c5929",
"assets/assets/mp3/293s.mp3": "7709ed3153ed4f9ff4e67056cc73a3f4",
"assets/assets/fonts/grover/Grover-Semi-Bold.ttf": "ae79675dd5327542c06dfb6877c47ba8",
"assets/assets/fonts/grover/Grover-Regular.ttf": "12cfd1d2edbba8bd3b9421db34423639",
"assets/assets/fonts/grover/Grover-Bold.ttf": "c1b33e702a41def2b259f6cf2c23cb92",
"assets/assets/fonts/funny_kid/Funny-Kids-Font.ttf": "60165be3935de029b8a53cf551d2d9b9",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
