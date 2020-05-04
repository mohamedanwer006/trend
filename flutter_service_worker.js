'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "052df829d68be982d12b5cd402bd5813",
"assets/assets/images/4d.png": "719564566e4b75abd527da033ee32ff7",
"assets/assets/images/app%2520mobile.png": "761c6c79a544d8e75e7effca2369d051",
"assets/assets/images/contact.png": "8c84e425a177bcdc3ab6755dfc3b408f",
"assets/assets/images/copy.png": "e4ccb6d9c7ee66a1b8f69fe61e56c094",
"assets/assets/images/dfd.png": "d4eb5906aba8e85b9b69a55f2ec4bf06",
"assets/assets/images/face.png": "bd2e4030e11368661232665422427fc5",
"assets/assets/images/hero.png": "7313b86d0728a1580eb5182b7225e9f3",
"assets/assets/images/home.png": "e669995588f5c856e234fa97b7b040b6",
"assets/assets/images/Image%25202.png": "4914fa4ec33e7191d18f96ff318013dc",
"assets/assets/images/insta.png": "c5d3f20bf684abe961e7adb4bb6734f0",
"assets/assets/images/logo.png": "f096f3a954c4bdd56b2e22522c2fc0c6",
"assets/assets/images/media.png": "b5f986d47cf6e8c070e077a04b360461",
"assets/assets/images/motion.png": "82c6e8b7c89434627508a7e936763d04",
"assets/assets/images/others.png": "50a33547a97650b4894bdc94e51ceeef",
"assets/assets/images/twitter.png": "830d4e32a2633eb8c2478b79c892485d",
"assets/assets/images/web.png": "e7b47a790a4227753eaeaac0bbb402ab",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "eb0c5b6f27cd246b0a3f2b076ec93ced",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "c949ebfcb478d34cca786a803e4bdd1f",
"/": "c949ebfcb478d34cca786a803e4bdd1f",
"main.dart.js": "167dadb402b61e09b1ca277920d4c2d6",
"manifest.json": "dbcccf05c4ccfd9ecf8652e733898c33"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
