'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "e9a08d3a2d97d28658a3961576af9833",
"index.html": "5682c662dcc7f34fd7a1085047f5eca7",
"/": "5682c662dcc7f34fd7a1085047f5eca7",
"main.dart.js": "000b00fc82231cb984e7a90d0a22027f",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "63bb0c1d0ca4e00743a7d7f339d86129",
"assets/AssetManifest.json": "c09e2925475e8c2e73589ee1e7c63100",
"assets/NOTICES": "396f0ead447bfe4aa7972c1241fec7f7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "d742c7ac51868b86d263394b7bd6f9b0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "7b042c715d6647a981807d2585df9455",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/boy_play_flute.png": "dfdfaf40f7a5a03163035cb25db8ddfb",
"assets/assets/images/logo_ic.svg": "84ae46de5346136400e77098c4d1e2c0",
"assets/assets/images/sound_ic.svg": "bad8887fdc08b50df1e6fea6ba215a85",
"assets/assets/images/flute.png": "e37da822735e95e43b0911354693ebf5",
"assets/assets/images/sound_header_ic.png": "0b608c1a22d42bdf2f4e537765e8ecfc",
"assets/assets/images/girl_play_flute.png": "75fea748183036281972ad2e7656d08e",
"assets/assets/images/thank_you_ic.png": "c7c7238d37f0e63194bb5b269d19ddad",
"assets/assets/json/notes.json": "b1fc32d3f00dc1e3c6bbd3671b0876df",
"assets/assets/notes/48.png": "469754fd530f1576308d77034a2e7379",
"assets/assets/notes/49.png": "454b65799e0378fd217564d45a07006e",
"assets/assets/notes/8.png": "53d2a90de20fb9870a807f8a11a83aee",
"assets/assets/notes/9.png": "0f555c7c2535af057f4c365823f470f6",
"assets/assets/notes/14.png": "258b832b79e969e22a66f250e9fcc00a",
"assets/assets/notes/28.png": "0c573dfb4ec6c61f83bbf49d7e82167b",
"assets/assets/notes/29.png": "017f30bb62ebe00039e876ef104d14d7",
"assets/assets/notes/15.png": "2399debdec41099a92f8865b69552d24",
"assets/assets/notes/17.png": "173778d01f52a0ee4e94d0adfc868b37",
"assets/assets/notes/16.png": "d8a87b6e8abe4a170a4296f0c226f8c9",
"assets/assets/notes/12.png": "74cfcb6773499b7f21ecb8bbb3c25546",
"assets/assets/notes/13.png": "3e6ec701a743172368fcee584b204405",
"assets/assets/notes/39.png": "6619ee5382c6811adb8aa78aa7df7927",
"assets/assets/notes/11.png": "efc9ba4fcb6688379ab0be4c3cf6979f",
"assets/assets/notes/10.png": "b2c95dfdbdbdc487b0442c7bd6c7bd97",
"assets/assets/notes/38.png": "ee54f21b89629098427160de8fd03f6f",
"assets/assets/notes/35.png": "416e10ca2a0b360dc47fc497e7741675",
"assets/assets/notes/21.png": "b98bb5dbed8ed909efe53a8a60774d10",
"assets/assets/notes/20.png": "156646995b7eaa84dc6d23f31576417e",
"assets/assets/notes/34.png": "3d8264163a13a1fa6f67693c4353672c",
"assets/assets/notes/22.png": "1a2ed5601cb317a094111daeeab73af8",
"assets/assets/notes/36.png": "305f38d5b69c837eb3d2d1e2e4f6d5c9",
"assets/assets/notes/37.png": "8f71e51875e8b102c444417025ec6c4d",
"assets/assets/notes/23.png": "69bf26bdec23baaaaaf5a43a58d6b38f",
"assets/assets/notes/27.png": "387f82b878d21fad67d3cc9c7216dbac",
"assets/assets/notes/33.png": "fc70b7bbcf76d46f96bc778904d651fd",
"assets/assets/notes/32.png": "df6326e3907b3b1bae2b5e6c60392bc6",
"assets/assets/notes/26.png": "d85363e1ec5ebc0056d0b38215110711",
"assets/assets/notes/18.png": "cb6c27d91b0c15711d4b17ec1a8b35e5",
"assets/assets/notes/30.png": "f892dcb4ad22bc09e71c88b72b83e5a6",
"assets/assets/notes/24.png": "55f618b1ee88d091caa4633b16a0e18e",
"assets/assets/notes/25.png": "dd5ca2e2e6791bd1ca8f00c544ca2553",
"assets/assets/notes/31.png": "3f15d0f33b67191b099dea3c23612c6a",
"assets/assets/notes/19.png": "c3c9de92ce33243d00c10234664dd658",
"assets/assets/notes/4.png": "d1f056d6a4a0d47283c0cc3037e339c1",
"assets/assets/notes/42.png": "b73a45d449dbdc7c98fb8178fcc9a33b",
"assets/assets/notes/43.png": "9eebda0567bc56c6e8c614701dfe158e",
"assets/assets/notes/5.png": "3588ec4423cfdd9127a582f164782dbc",
"assets/assets/notes/41.png": "533ad608960e40e90288d1ed39899adc",
"assets/assets/notes/55.png": "ef62e99c153b65f303e9f16794eb7173",
"assets/assets/notes/7.png": "da8d8ebae09b08f1f25bbf6b6cf83d05",
"assets/assets/notes/54.png": "c4765c47f0151f2fb98c824c0f71447e",
"assets/assets/notes/6.png": "a37c35af6e314320310cf1d7c54daa98",
"assets/assets/notes/40.png": "c9716df011bd5f6f1ec0a2e773bac849",
"assets/assets/notes/44.png": "d7046eac0c841d650a969607afd67728",
"assets/assets/notes/2.png": "e7b91eb14643b2b17ae8edbd16ca2456",
"assets/assets/notes/50.png": "89cfb704b7692c27789deb4f6288d455",
"assets/assets/notes/3.png": "89eda72756d08f913a8077c91e0113b4",
"assets/assets/notes/51.png": "1d0751696a56f47541e81c32c53996d2",
"assets/assets/notes/45.png": "e9fb295777e0663517d8c4861ff8c7c6",
"assets/assets/notes/53.png": "3f468dbcbdbac6c57816287e9ffb06f6",
"assets/assets/notes/1.png": "37bf02c7f0099e7b9e7a077e62ac7f31",
"assets/assets/notes/47.png": "5b879875c707fbdfb7011643b3c96b6a",
"assets/assets/notes/46.png": "b3140b249ceac8069f8a27a34ff1006f",
"assets/assets/notes/52.png": "269d1953f84dc8ff61718a8598e52e40",
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
