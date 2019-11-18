/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/blog/public/2019/10/22/Markdown语法学习/index.html","db81821bfbdb1cc9fde66e023083a053"],["D:/blog/public/2019/10/22/PAT-1122/index.html","628e2b91c1cf8478e63983719ff48cc3"],["D:/blog/public/2019/10/22/PAT计划/index.html","9f0da980a85f02a7cc20984278a9a47f"],["D:/blog/public/2019/10/22/一周年纪念/1.png","b922b2b5d70da4521554e351b799eafa"],["D:/blog/public/2019/10/22/一周年纪念/10.jpg","4ee6bc37ff3698fa570a938b2bd3cd8f"],["D:/blog/public/2019/10/22/一周年纪念/11.jpg","1eb8883718238d92b64c1d22aa0ad727"],["D:/blog/public/2019/10/22/一周年纪念/12.jpg","6f72da1105ecd7baec4b4ae55a95c4e5"],["D:/blog/public/2019/10/22/一周年纪念/13.png","9a7c7b6afec674eb08e5607057ecadf9"],["D:/blog/public/2019/10/22/一周年纪念/14.jpg","1c2a7133e420bc4b898cff3c3a67c3cd"],["D:/blog/public/2019/10/22/一周年纪念/15.png","9c39368c806a0cfa2e7d709132df9056"],["D:/blog/public/2019/10/22/一周年纪念/16.png","35d0b5720714b6bdc6d3a406196eff55"],["D:/blog/public/2019/10/22/一周年纪念/17.png","9e7284fb82f396c4810ef96f1b4fe4f8"],["D:/blog/public/2019/10/22/一周年纪念/19.jpg","8a64b1eb0e09baf650be35c430e1e35b"],["D:/blog/public/2019/10/22/一周年纪念/20.jpg","0903b15ae3093a3532017dc07d32e3ac"],["D:/blog/public/2019/10/22/一周年纪念/21.jpg","22b445ee7acb7233b44fc4a25d3ae663"],["D:/blog/public/2019/10/22/一周年纪念/22.jpg","efc11d26abeff3b665daa5d9f2391f15"],["D:/blog/public/2019/10/22/一周年纪念/23.png","234580cc98d43a9b6e76eea8ec82470d"],["D:/blog/public/2019/10/22/一周年纪念/24.png","2ba8d6c8d4be23e8c33d3fc0f4b4b4d6"],["D:/blog/public/2019/10/22/一周年纪念/25.png","5ab1f6e4156096f8ba58f66255bc3c0a"],["D:/blog/public/2019/10/22/一周年纪念/27.jpg","836de2238b33e122dfca7d9da44f27e3"],["D:/blog/public/2019/10/22/一周年纪念/28.png","9e80a6a4a5ddebfd511f53ea1e8267b0"],["D:/blog/public/2019/10/22/一周年纪念/29.jpg","04f2ec6d41985b0ed3e44f2361c7899f"],["D:/blog/public/2019/10/22/一周年纪念/3.jpg","412cd99e96d03326a84f0c0a84d1ec10"],["D:/blog/public/2019/10/22/一周年纪念/30.png","befd1520ca9f8db304c88e9d88278df8"],["D:/blog/public/2019/10/22/一周年纪念/31.png","c18c6d47b84e55829bcfe8e11fb63729"],["D:/blog/public/2019/10/22/一周年纪念/32.jpg","14d40f93919dc0c17c38c039f8a35cb1"],["D:/blog/public/2019/10/22/一周年纪念/33.jpg","4e615748f58a6f23602d4a7806e6422c"],["D:/blog/public/2019/10/22/一周年纪念/5.png","9941823b1349fbb055ca615b6e3d54de"],["D:/blog/public/2019/10/22/一周年纪念/6.jpg","1266f0dcd054f6bd16fb50de12b43b26"],["D:/blog/public/2019/10/22/一周年纪念/8.png","6e4467f160ae2401f89d866bd1e7da2d"],["D:/blog/public/2019/10/22/一周年纪念/9.jpg","1e90bb672bca5590d1a4e79e97431fb8"],["D:/blog/public/2019/10/22/一周年纪念/index.html","73713c1cb227058854ff4445dcb5964e"],["D:/blog/public/2019/10/25/PAT-1142/index.html","eca23b9667d690e2e7422fa7657fe132"],["D:/blog/public/2019/10/26/刷题技巧整理/index.html","b131fa09239cfd6815ac84b82718822f"],["D:/blog/public/2019/10/26/算法笔记阅读/1.png","92150d33ef3bd6c65a9aaced8376a92c"],["D:/blog/public/2019/10/26/算法笔记阅读/2.png","cfccd02ede828f058d6097a5ea36231e"],["D:/blog/public/2019/10/26/算法笔记阅读/index.html","38a20613efa5ca0b95b55550d56b7c2a"],["D:/blog/public/2019/10/29/PAT-1013/index.html","712ff5bb538b3a67a3a56ef1a20ea30d"],["D:/blog/public/2019/10/29/PAT-1034/index.html","269ea35528b88cd459a7d8e5e4a09eb9"],["D:/blog/public/2019/10/30/PAT-1021/index.html","e6e8d0dee1c75d394b24396fa316e350"],["D:/blog/public/2019/11/03/Mac折腾记录/index.html","5dc6d7d887a045441b45793caf0660e4"],["D:/blog/public/2019/11/04/VSCode使用/1.png","e8132b252da910da84d0d1ae36572702"],["D:/blog/public/2019/11/04/VSCode使用/2.png","3c8c0b6004e0d69eb0fe084e61359e9f"],["D:/blog/public/2019/11/04/VSCode使用/index.html","08472d68114241d7eaeeb27f3cb7baa7"],["D:/blog/public/2019/11/05/PAT-1107/index.html","c700d89dff4c66581569ad8546debb6f"],["D:/blog/public/2019/11/05/文件自动分类脚本/index.html","d5d3634c4e5de6e6e3b2c1850d8af2c7"],["D:/blog/public/2019/11/06/PAT-1114/index.html","605d337ff15e8242b5b7f03c85d57cca"],["D:/blog/public/2019/11/06/python基础/index.html","3bb5b723034dbec53bf2129501ac9cee"],["D:/blog/public/2019/11/07/git学习/0.jpg","701e02bf0b2d71ab51b7e2b6aa973d52"],["D:/blog/public/2019/11/07/git学习/1.png","2adbbdf8d8bab5606af6279ef5612da2"],["D:/blog/public/2019/11/07/git学习/2.png","c6f039420a0f851eb424883511ac4e2f"],["D:/blog/public/2019/11/07/git学习/3.png","06f0d7d34075653ba25a18ea0fea8b7d"],["D:/blog/public/2019/11/07/git学习/4.png","cb8a9c11c8fd1326260bbc7c2c6a62ac"],["D:/blog/public/2019/11/07/git学习/index.html","a5c46471a87bf2859ce2243c6353d43e"],["D:/blog/public/2019/11/13/PAT-1025/index.html","807adc32eddfa9cb847ae9694d6d52f2"],["D:/blog/public/2019/11/14/H和T的成长回忆录/index.html","5ba77824030c49c3ccb2d1561170f6ad"],["D:/blog/public/2019/11/14/PAT-1069/index.html","11e24ffb30435ed55a74062526719ff1"],["D:/blog/public/2019/11/14/PAT-1093/index.html","9971c14b3e3bbd63eba56ff560e263d7"],["D:/blog/public/2019/11/14/PAT-1101/index.html","11a7dd6f750a5db9a1e84315022f9819"],["D:/blog/public/2019/11/14/blog分类规划/index.html","2228f0739561df8ba0c4b6fcaa887eb0"],["D:/blog/public/2019/11/14/北京游感/index.html","b63e547f54addc9bf7344af23e19a871"],["D:/blog/public/2019/11/14/热爱生命/1.png","0b865b5a8c5ffc65ab33586bb50513b7"],["D:/blog/public/2019/11/14/热爱生命/index.html","c84f749b21ca301a689dfcd066a661c4"],["D:/blog/public/2019/11/14/随想-1/index.html","3a831af77c6393cef49a01cc4178020b"],["D:/blog/public/2019/11/14/随想-2/1.png","ba65a9551263d1c1cb9c1870d1ee8a29"],["D:/blog/public/2019/11/14/随想-2/index.html","e88e1c2c9293907129f303f922c9ebe6"],["D:/blog/public/2019/11/15/PAT-1032/index.html","64ffb99905d11062bcd2cb522099879d"],["D:/blog/public/2019/11/15/PAT-1059/index.html","632c3dd1d6fcb493f56ecf80abbf6f93"],["D:/blog/public/2019/11/15/去南京/1.png","53d7c944f9a7326b86bd734f9d2d967c"],["D:/blog/public/2019/11/15/去南京/2.png","17208773d5c2ee30d094a597d4a8b9b6"],["D:/blog/public/2019/11/15/去南京/index.html","c876336706678e5e1c80c1441ed4cd3a"],["D:/blog/public/2019/11/16/PAT-1052/index.html","500cd3472cabb46b5fd317a2157aa247"],["D:/blog/public/2019/11/16/连通块个数/index.html","7c0ffbdcc42f058a789a558e4bffc86a"],["D:/blog/public/2019/11/16/迷宫问题/index.html","ba6236fdb262e443852564e2661a3d9b"],["D:/blog/public/2019/11/17/Listening-training/index.html","573b11f2bc4d16acce9c2d13cbe4667c"],["D:/blog/public/2019/11/17/PAT-1020/index.html","169f00f5d92bcbbeb2486b1531c2edab"],["D:/blog/public/2019/11/18/随想-3/index.html","9a14e7ac54f5ce724d74458ed97b8d67"],["D:/blog/public/archives/2019/10/index.html","873e2bed3d4378acd7144b4ebc606cf4"],["D:/blog/public/archives/2019/11/index.html","91fd45546d97faade5f9e62ebf8bba8a"],["D:/blog/public/archives/2019/11/page/2/index.html","0b8745ebcd22914b2b25780164f38ae4"],["D:/blog/public/archives/2019/11/page/3/index.html","88efe8e109f9086b28bd9742550d0058"],["D:/blog/public/archives/2019/index.html","9ba5e6da98657f52e234bb2c8874f30b"],["D:/blog/public/archives/2019/page/2/index.html","207735ea2601d4e981bc2eebeba95e68"],["D:/blog/public/archives/2019/page/3/index.html","22ef6dde2eb7e31f05f2077ce1cfe719"],["D:/blog/public/archives/2019/page/4/index.html","f4abb398d1cc6414e0e726004e2bb69d"],["D:/blog/public/archives/index.html","1e9398c7933f6b271b550f6184456376"],["D:/blog/public/archives/page/2/index.html","61b2ebd62954361f8c96ab45995d7331"],["D:/blog/public/archives/page/3/index.html","93149385cb2d725ae1a58ae6237daedd"],["D:/blog/public/archives/page/4/index.html","475f6806fcae6e3526748fc6c3c9773e"],["D:/blog/public/categories/code/index.html","fc0d7fe966d7cf823d960041af4e1444"],["D:/blog/public/categories/code/page/2/index.html","9886f02f84fc81af39a437eee52bc5d5"],["D:/blog/public/categories/index.html","c0cc957daaf6fc54806ff6240342fd31"],["D:/blog/public/categories/life/index.html","4b1feedd2f0c0ef3018eb79259c4d7bb"],["D:/blog/public/categories/note/index.html","cb0d80b6365283b7318928d6a2bdf2b2"],["D:/blog/public/css/index.css","9911b20a2e31dc1aa98c48e483335237"],["D:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/blog/public/index.html","faf63d9ae8d4e8eff376745fa412fc5f"],["D:/blog/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["D:/blog/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["D:/blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/blog/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["D:/blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/blog/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/blog/public/page/2/index.html","17f51a701b244703c35b5ae6ad377863"],["D:/blog/public/page/3/index.html","6d9eec06ec67a9d0390b5d6178ee149e"],["D:/blog/public/page/4/index.html","7370451e1e57899d126453dc2dfdf0c2"],["D:/blog/public/tags/PAT/index.html","22ce7b8e95683ae75a759ba130769d63"],["D:/blog/public/tags/PAT/page/2/index.html","927a55e4c8fc23a1ac12793f6c95681e"],["D:/blog/public/tags/bfs/index.html","52d47e018c8791579e44adcf6e9dbf98"],["D:/blog/public/tags/dfs/index.html","4eaa620eab0b0a284d845725fffc2bac"],["D:/blog/public/tags/english/index.html","af333803a2fd341edeaecc5728035b85"],["D:/blog/public/tags/git/index.html","08a15635601419dfa519fd43539da295"],["D:/blog/public/tags/index.html","a048f5e4f34546e7bd98eb32e40ffd30"],["D:/blog/public/tags/plan/index.html","5af8727b67b62afc406bce0fd870c1d3"],["D:/blog/public/tags/python/index.html","358f63274beeaaff56d525d5c9c57fc7"],["D:/blog/public/tags/python语法/index.html","6a8f2927f29be13404a3191bdeaf90ea"],["D:/blog/public/tags/travel/index.html","138399864875094514ba76ab8fe99c2e"],["D:/blog/public/tags/图/index.html","71b2bfa4f01eb1f37c14e6222a7c6afc"],["D:/blog/public/tags/图论/index.html","d8dee3dd2caa40762f62196cb0521c1f"],["D:/blog/public/tags/字符串/index.html","489f5a43977de9130a1f6e50eecb8a6a"],["D:/blog/public/tags/并查集/index.html","27fbf734aabbcc5c93df39685c9ad52e"],["D:/blog/public/tags/排序/index.html","d76921263c9665393d58aadb33dbb06b"],["D:/blog/public/tags/数学/index.html","3e1a54d400e9d84f62bbd639f820918b"],["D:/blog/public/tags/整理/index.html","6d7b9f5c384211e63cd0da23a4cd46e4"],["D:/blog/public/tags/文本编辑/index.html","51b40fc118f177d15a52bea63e4df33d"],["D:/blog/public/tags/树/index.html","f1d8abe142bf3ea600790e554d3941ae"],["D:/blog/public/tags/竞赛/index.html","346890ee0e5ab4be0310c6fb092d2433"],["D:/blog/public/tags/纪念日/index.html","382426ade8912378c6d53e3cd2fdc6a4"],["D:/blog/public/tags/脚本/index.html","0c4a80c074a8ed5eff9e9e170da8cf2c"],["D:/blog/public/tags/链表/index.html","302c931fb758a1e6cd98ae42d8b1ae33"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







