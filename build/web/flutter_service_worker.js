'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0830ea774248a8657db29489d5fb5e2b",
"assets/AssetManifest.bin.json": "666c26095ca4fe04c7f000fcb6a9e910",
"assets/AssetManifest.json": "cfcbd96ade2de03f0d778f40d52402fd",
"assets/assets/images/empresaes.png": "1bcea97a5b121cb171f130de81dab022",
"assets/assets/images/imagem.jpeg": "604f6e1a166580d18f5a6756f2fd9f3c",
"assets/assets/images/imagem1.jpeg": "e94f39c103e336948e8939192c7268fe",
"assets/assets/images/imagem10.jpeg": "732c060e2574034c7567a403da8f1a9b",
"assets/assets/images/imagem11.jpeg": "dfaa0e50dd0e0e8c1098e8a43e5bb878",
"assets/assets/images/imagem12.jpeg": "2e709195cd2edb48839ec127a5c8a09e",
"assets/assets/images/imagem13.jpeg": "85c9f76e60b1d6091473afef93cf2d68",
"assets/assets/images/imagem14.jpeg": "0686e9af22db2b772d860030b462e8f2",
"assets/assets/images/imagem15.jpeg": "f90a59b9e97769cabef22d4e9141d7d9",
"assets/assets/images/imagem16.jpeg": "5329f0df2d61d8a01c99d9652b732705",
"assets/assets/images/imagem17.jpeg": "0eefab3f752e7fe20a9bacd2bbf3ed7f",
"assets/assets/images/imagem18.jpeg": "9f741ca963463b58a1753b5771f985db",
"assets/assets/images/imagem19.jpeg": "4cf461521cab76cc63810c6ca82dae4d",
"assets/assets/images/imagem2.jpeg": "c4c14888f9d9e45036d6fd4230ed10d6",
"assets/assets/images/imagem20.jpeg": "d93d8ab1774db7873270002016e07ae2",
"assets/assets/images/imagem21.jpeg": "b32011231fbaaeeb1270723472671498",
"assets/assets/images/imagem22.jpeg": "c1c4bcd722a7aba24820d8755a13903d",
"assets/assets/images/imagem23.jpeg": "39f732c08134c659b193c6fef5a21806",
"assets/assets/images/imagem24.jpeg": "a527dddbaccb7cb71d9abb088c026fe9",
"assets/assets/images/imagem25.jpeg": "c763f8b592f411799547ef969f40faf8",
"assets/assets/images/imagem26.jpeg": "6483c11d82a89958ee7c743d5e194828",
"assets/assets/images/imagem27.jpeg": "ebd3295beb3a633a71eac2cc6b46a2f5",
"assets/assets/images/imagem28.jpeg": "e6e7266343bb3cd5e242d81df249f235",
"assets/assets/images/imagem29.jpeg": "fed116a62ea5042e811e0ed52396d214",
"assets/assets/images/imagem3.jpeg": "8d1dc92d4145825328256108d5ea7458",
"assets/assets/images/imagem30.jpeg": "02f7db812eebc98e577f8202c9e466ac",
"assets/assets/images/imagem31.jpeg": "22326bdef0a92cf7a526bf447f973e44",
"assets/assets/images/imagem32.jpeg": "092c8879c09bc3e6ce561560a4e17a47",
"assets/assets/images/imagem33.jpeg": "e5c06a6ee8064b9b6f930a3469ade294",
"assets/assets/images/imagem34.jpeg": "dae055d191241be177e6610097e14e38",
"assets/assets/images/imagem35.jpeg": "c951296f5af014b37a218580a8455378",
"assets/assets/images/imagem36.jpeg": "06919722123da9a08aa7fd863cf384fe",
"assets/assets/images/imagem37.jpeg": "ea2e17ba37a664a3301b2c543719882d",
"assets/assets/images/imagem38.jpeg": "cbd918701f3829383a2fb99dfb9cd560",
"assets/assets/images/imagem39.jpeg": "279163e8ca8e1af232b96af421fc2bb3",
"assets/assets/images/imagem4.jpeg": "1311794ff7a91159b0d782a1b7d64111",
"assets/assets/images/imagem40.jpeg": "e88a16ee17336f1f1bdbdad72f5d88cc",
"assets/assets/images/imagem41.jpeg": "d069b756d53a607d287eb42294e243ac",
"assets/assets/images/imagem42.jpeg": "d7f21bcc7e48c1c0cb3ad79987c8aac8",
"assets/assets/images/imagem43.jpeg": "48bdc5c36317390eabb07e75f46c9b99",
"assets/assets/images/imagem44.jpeg": "6ae913438a1df82b5f370658920834d9",
"assets/assets/images/imagem45.jpeg": "f74845b0d5bbb58dea44d17f82540998",
"assets/assets/images/imagem46.jpeg": "e80b5bab531a2baa17b8715dae2adf96",
"assets/assets/images/imagem47.jpeg": "ccdd0d6fcbfba96529d3ce030aeb7df9",
"assets/assets/images/imagem48.jpeg": "a6c5a99446a3d0c7c782b51942812c85",
"assets/assets/images/imagem49.jpeg": "9f270c04690420c31cb761a8b5b2e9eb",
"assets/assets/images/imagem5.jpeg": "c6f9d29ac6995377d17e6eb649840a46",
"assets/assets/images/imagem50.jpeg": "83bfb8db5b2ddec7bb2570e8f47b14f5",
"assets/assets/images/imagem51.jpeg": "8360df718303a3fc3eab938ba3a206b4",
"assets/assets/images/imagem52.jpeg": "16de64897cef113f3489e37f520c03c1",
"assets/assets/images/imagem53.jpeg": "e26de5c5043a2a63f5d3022a6a273adb",
"assets/assets/images/imagem54.jpeg": "4e41c27d0a63060593b8d70f01f8d17b",
"assets/assets/images/imagem55.jpeg": "3504244be57288dd93c5effff63553ea",
"assets/assets/images/imagem56.jpeg": "27ae480b4b6664ac69b890addfccff4b",
"assets/assets/images/imagem57.jpeg": "006f24f6ec003fc3c48640b66b6f0285",
"assets/assets/images/imagem58.jpeg": "6d8764469bd09bb343a3ec56c6bd2cc5",
"assets/assets/images/imagem59.jpeg": "33618a493765f11038b85cb64dd97085",
"assets/assets/images/imagem6.jpeg": "71f8a7062d5377b390a8ebd6f57d2978",
"assets/assets/images/imagem60.jpeg": "e5c834fb4a97f504cc3af6f3d4fc7587",
"assets/assets/images/imagem61.jpeg": "c74b1b46d0200e5f2ee041173967a4b6",
"assets/assets/images/imagem62.jpeg": "7c7da9e09b1aa28e0b42afbc3c9eaafb",
"assets/assets/images/imagem63.jpeg": "992406851909486e4ed5a944e5d854ac",
"assets/assets/images/imagem64.jpeg": "2d22ec87df514040f9aa8b6ffd49f9dd",
"assets/assets/images/imagem65.jpeg": "ea2a75f5315f534c02189bbc10d179fd",
"assets/assets/images/imagem66.jpg": "2cc749ec1511aedd42d3db3e5f4b1d40",
"assets/assets/images/imagem67.jfif": "4d730b7ec4c835c9e841900180124a14",
"assets/assets/images/imagem68.jfif": "5307b1a7ce0474c4200c0b072b684373",
"assets/assets/images/imagem69.jfif": "133626e8b93434da33d274a344b500f5",
"assets/assets/images/imagem7.jpeg": "86b6b105bc619e1298eb53df822f93f9",
"assets/assets/images/imagem70.jfif": "a8d9ab877cbee20c9783e11c34acdc39",
"assets/assets/images/imagem71.jpg": "ac3e8dfb929848f4c4c33a2ca08cf462",
"assets/assets/images/imagem72.jpg": "d281db44029320eab19c4564a17b0615",
"assets/assets/images/imagem73.jpeg": "6a59190cb8ce64f3e89daa84fc7708e3",
"assets/assets/images/imagem74.jpeg": "6ca1637a894549cf438ec56eb6aa3c94",
"assets/assets/images/imagem75.jpg": "9f1340d2a61d2e06e2e476e2ff9c9cfd",
"assets/assets/images/imagem76.jpg": "780763ccfb1df21df0ce68711109b20e",
"assets/assets/images/imagem77.jpg": "87253b51c5161b4e12c7571f6789cdba",
"assets/assets/images/imagem78.jpg": "b2e5cf61f337abee19064a0d7843fdaf",
"assets/assets/images/imagem79.jpg": "2c98cf3aeccf48d5eb25dfc40075e9cb",
"assets/assets/images/imagem8.jpeg": "6a2a688a47b80292afce8e66e4ae3c7f",
"assets/assets/images/imagem80.jpg": "f4f6d9205d71e7421c483d6c675a04de",
"assets/assets/images/imagem81.jpg": "a2a688d37ab7999922320c4ef1aa60ce",
"assets/assets/images/imagem82.jpg": "be8204d29e40d7c4d6ba937ad4c63369",
"assets/assets/images/imagem83.jpg": "3b839b380bf7618e987e0bceb30742cb",
"assets/assets/images/imagem84.jpg": "22cc0dac45a7954bce7a9ff8ff55754d",
"assets/assets/images/imagem85.jpg": "0b0be2af5bccd7ac7f5a17b7d07a743c",
"assets/assets/images/imagem86.jpg": "fb5f0774e069b2819427bf128bc178bd",
"assets/assets/images/imagem87.jpg": "7d22e2dbd7b80ca97179e77a8d8c1af5",
"assets/assets/images/imagem88.jpg": "2e3a9da11c0a9144ec41de3726df62fd",
"assets/assets/images/imagem89.jpg": "a1afd15b2e0ac5482b692eb0fd7236ae",
"assets/assets/images/imagem9.jpeg": "3cb32f5abb752572414d2a2f69069126",
"assets/assets/images/imagem90.jpg": "d8195f7b433683c3dd2b3a351afe22de",
"assets/assets/images/imagem91.jpg": "0c9141a0f22bb0eb58111c99c09b25f9",
"assets/assets/images/imagem92.jpg": "e4af6aa912ffdddd687e70cf10b7b885",
"assets/assets/images/imagemfundoServico.jpg": "9a821002aff0b2f9052963e074321051",
"assets/assets/images/logo.png": "b4f1f0a2c47dbb97a612d11dd2fa437c",
"assets/assets/logos/instagram.svg": "b640bed831818575a427d855d6e0bd11",
"assets/assets/logos/logo0.png": "2c92df7582629b7ebb9cdc7c3f23f389",
"assets/assets/logos/logo1.png": "1b16348712064d141565c1c10181fbf4",
"assets/assets/logos/logo10.png": "fe63fd233b5370ce4ad2c22dd8fd61dc",
"assets/assets/logos/logo11.png": "f65d97155f0b94ab31b4717f681d026c",
"assets/assets/logos/logo2.png": "8ad212b69d5ef3e04bc2383631990f91",
"assets/assets/logos/logo3.jpg": "304fcdcd97fd8cd61e2ad01366f1e455",
"assets/assets/logos/logo4.png": "83da7ec4f15a0bd509d1ca968bfad40b",
"assets/assets/logos/logo5.png": "c0817d1fe96ec7d0e621cbece0bb5c48",
"assets/assets/logos/logo6.jpg": "4a740f8f238af29321fbeb8d13975334",
"assets/assets/logos/logo7.png": "09481e547f83a5341fb596d4f30020d9",
"assets/assets/logos/logo8.png": "d681f72ae271cf2ada22fd3bca12ecae",
"assets/assets/logos/logo9.png": "3ca611cf0eeb6868c2a4dec4c836c019",
"assets/assets/logos/logoEstatica1.png": "700a9dac99786482d6f09f3ed366942d",
"assets/assets/logos/logoEstatica2.png": "d112e8531a4c4968844ac70ceb6880b8",
"assets/assets/logos/logoEstatica3.png": "f52f8a027b058b9f8cebded9219f0f80",
"assets/assets/videos/video.mp4": "c27d0da3e208d5b09f3289070f4fc6b1",
"assets/assets/videos/video1.mp4": "5345bd9e0ab55a2795931418db3d33ee",
"assets/assets/videos/video2.mp4": "76e092bb4f3390fe1fc3538d3ff1cb3d",
"assets/assets/videos/video3.mp4": "c693909007cf2f34651f2dfb0943e62e",
"assets/assets/videos/VideoDeInicio.mp4": "4abcf24958abec7273167b5b780cdbf2",
"assets/FontManifest.json": "1e82c8c72a31659db8fe33a1937e5a5e",
"assets/fonts/MaterialIcons-Regular.otf": "5f9de6d18b2dfa92c5ee560212e91202",
"assets/lib/assets/fonts/Borel/Borel-Regular.ttf": "c3807e854e7efe35040492302bcb88ae",
"assets/lib/assets/fonts/Quicksand/Quicksand-VariableFont_wght.ttf": "191a406a7e852a6a06dd6346733938f8",
"assets/lib/assets/fonts/Quicksand/static/Quicksand-Bold.ttf": "e8dcee4bbf2288a2d264c76fa547f37a",
"assets/NOTICES": "6dbb79b7628e1373c7582536c5ea8518",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "a98d218e511e8eca03ac2b548028576c",
"icone.jpg": "72e909a423db72113204b7b36e73c4ef",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "27550d5a2882741fbdb56638e45626fb",
"/": "27550d5a2882741fbdb56638e45626fb",
"main.dart.js": "7eb9c7e3bcafce7303328b75908caf00",
"main.dart.mjs": "edb1f0c26ce2b7226421313c22b0d982",
"main.dart.wasm": "1fc6bde6821e58c5bd4f70f77a709166",
"manifest.json": "a3ed3eb466485902f8010f91e0300998",
"version.json": "573c3b09b5362bc5ac9e3609a2f5e1b5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
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
