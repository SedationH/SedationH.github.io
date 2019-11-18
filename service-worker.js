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

var precacheConfig = [["D:/blog/public/2019/10/22/Markdown语法学习/index.html","a3623b8be6e909a8fbc0c0bcb888d5bd"],["D:/blog/public/2019/10/22/PAT-1122/index.html","96c50a8a69e0654ff859d38987023b9e"],["D:/blog/public/2019/10/22/PAT计划/index.html","a9fdaabf2ea08522bbad606691ff73e4"],["D:/blog/public/2019/10/22/一周年纪念/1.png","b922b2b5d70da4521554e351b799eafa"],["D:/blog/public/2019/10/22/一周年纪念/10.jpg","4ee6bc37ff3698fa570a938b2bd3cd8f"],["D:/blog/public/2019/10/22/一周年纪念/11.jpg","1eb8883718238d92b64c1d22aa0ad727"],["D:/blog/public/2019/10/22/一周年纪念/12.jpg","6f72da1105ecd7baec4b4ae55a95c4e5"],["D:/blog/public/2019/10/22/一周年纪念/13.png","9a7c7b6afec674eb08e5607057ecadf9"],["D:/blog/public/2019/10/22/一周年纪念/14.jpg","1c2a7133e420bc4b898cff3c3a67c3cd"],["D:/blog/public/2019/10/22/一周年纪念/15.png","9c39368c806a0cfa2e7d709132df9056"],["D:/blog/public/2019/10/22/一周年纪念/16.png","35d0b5720714b6bdc6d3a406196eff55"],["D:/blog/public/2019/10/22/一周年纪念/17.png","9e7284fb82f396c4810ef96f1b4fe4f8"],["D:/blog/public/2019/10/22/一周年纪念/19.jpg","8a64b1eb0e09baf650be35c430e1e35b"],["D:/blog/public/2019/10/22/一周年纪念/20.jpg","0903b15ae3093a3532017dc07d32e3ac"],["D:/blog/public/2019/10/22/一周年纪念/21.jpg","22b445ee7acb7233b44fc4a25d3ae663"],["D:/blog/public/2019/10/22/一周年纪念/22.jpg","efc11d26abeff3b665daa5d9f2391f15"],["D:/blog/public/2019/10/22/一周年纪念/23.png","234580cc98d43a9b6e76eea8ec82470d"],["D:/blog/public/2019/10/22/一周年纪念/24.png","2ba8d6c8d4be23e8c33d3fc0f4b4b4d6"],["D:/blog/public/2019/10/22/一周年纪念/25.png","5ab1f6e4156096f8ba58f66255bc3c0a"],["D:/blog/public/2019/10/22/一周年纪念/27.jpg","836de2238b33e122dfca7d9da44f27e3"],["D:/blog/public/2019/10/22/一周年纪念/28.png","9e80a6a4a5ddebfd511f53ea1e8267b0"],["D:/blog/public/2019/10/22/一周年纪念/29.jpg","04f2ec6d41985b0ed3e44f2361c7899f"],["D:/blog/public/2019/10/22/一周年纪念/3.jpg","412cd99e96d03326a84f0c0a84d1ec10"],["D:/blog/public/2019/10/22/一周年纪念/30.png","befd1520ca9f8db304c88e9d88278df8"],["D:/blog/public/2019/10/22/一周年纪念/31.png","c18c6d47b84e55829bcfe8e11fb63729"],["D:/blog/public/2019/10/22/一周年纪念/32.jpg","14d40f93919dc0c17c38c039f8a35cb1"],["D:/blog/public/2019/10/22/一周年纪念/33.jpg","4e615748f58a6f23602d4a7806e6422c"],["D:/blog/public/2019/10/22/一周年纪念/5.png","9941823b1349fbb055ca615b6e3d54de"],["D:/blog/public/2019/10/22/一周年纪念/6.jpg","1266f0dcd054f6bd16fb50de12b43b26"],["D:/blog/public/2019/10/22/一周年纪念/8.png","6e4467f160ae2401f89d866bd1e7da2d"],["D:/blog/public/2019/10/22/一周年纪念/9.jpg","1e90bb672bca5590d1a4e79e97431fb8"],["D:/blog/public/2019/10/22/一周年纪念/index.html","311645568e60d730dbf85f760c9b0af9"],["D:/blog/public/2019/10/25/PAT-1142/index.html","df98bb27dfb09ff3df9f2bfdd78f227b"],["D:/blog/public/2019/10/26/刷题技巧整理/index.html","b670795247e3c0aee3a5c4da8e964078"],["D:/blog/public/2019/10/26/算法笔记阅读/1.png","92150d33ef3bd6c65a9aaced8376a92c"],["D:/blog/public/2019/10/26/算法笔记阅读/2.png","cfccd02ede828f058d6097a5ea36231e"],["D:/blog/public/2019/10/26/算法笔记阅读/index.html","fde62ad9cdbf39349ca496d3a1589cf6"],["D:/blog/public/2019/10/29/PAT-1013/index.html","f7a8dcffe6d287779a126e4b240f384b"],["D:/blog/public/2019/10/29/PAT-1034/index.html","d297a3492c568cefef61d651354644e7"],["D:/blog/public/2019/10/30/PAT-1021/index.html","139fa29b0cdb84ad26eb68537b64da53"],["D:/blog/public/2019/11/03/Mac折腾记录/index.html","32fe95ba15ed17a3e807e8c2382a2246"],["D:/blog/public/2019/11/04/VSCode使用/1.png","e8132b252da910da84d0d1ae36572702"],["D:/blog/public/2019/11/04/VSCode使用/2.png","3c8c0b6004e0d69eb0fe084e61359e9f"],["D:/blog/public/2019/11/04/VSCode使用/index.html","c3a67cd3fd23d52878cf8667189d63eb"],["D:/blog/public/2019/11/05/PAT-1107/index.html","915545fafe49cd366fd278d1835644fb"],["D:/blog/public/2019/11/05/文件自动分类脚本/index.html","b93776f4df919d2e2e1305a2c0c1fa82"],["D:/blog/public/2019/11/06/PAT-1114/index.html","9c23d6531c4bfcbb245020932efef167"],["D:/blog/public/2019/11/06/python基础/index.html","43d6730634476127c201892f830702f7"],["D:/blog/public/2019/11/07/git学习/0.jpg","701e02bf0b2d71ab51b7e2b6aa973d52"],["D:/blog/public/2019/11/07/git学习/1.png","2adbbdf8d8bab5606af6279ef5612da2"],["D:/blog/public/2019/11/07/git学习/2.png","c6f039420a0f851eb424883511ac4e2f"],["D:/blog/public/2019/11/07/git学习/3.png","06f0d7d34075653ba25a18ea0fea8b7d"],["D:/blog/public/2019/11/07/git学习/4.png","cb8a9c11c8fd1326260bbc7c2c6a62ac"],["D:/blog/public/2019/11/07/git学习/index.html","525e6e657ef29a8c9a25261606aa383b"],["D:/blog/public/2019/11/13/PAT-1025/index.html","f91077493d245949b431bddbe2ca734c"],["D:/blog/public/2019/11/14/H和T的成长回忆录/index.html","daa3bd8f46edbbe7db17922e56066ade"],["D:/blog/public/2019/11/14/PAT-1069/index.html","dc75ea466e0968b78aa1532eabfade4c"],["D:/blog/public/2019/11/14/PAT-1093/index.html","58b3f1a5bae6836ec81465af909f1883"],["D:/blog/public/2019/11/14/PAT-1101/index.html","183785c2ee443802a4efbc59ae5c365d"],["D:/blog/public/2019/11/14/blog分类规划/index.html","f61de5666c1f1a1bfd5cc88a76f2983d"],["D:/blog/public/2019/11/14/北京游感/index.html","45fd5d2e31f44aca936e33d716391315"],["D:/blog/public/2019/11/14/热爱生命/1.png","0b865b5a8c5ffc65ab33586bb50513b7"],["D:/blog/public/2019/11/14/热爱生命/index.html","dfadc1ee7b71d535545b7625b3eb6653"],["D:/blog/public/2019/11/14/随想-1/index.html","f1cb001fe8b71282104fccfe36512bd5"],["D:/blog/public/2019/11/14/随想-2/1.png","ba65a9551263d1c1cb9c1870d1ee8a29"],["D:/blog/public/2019/11/14/随想-2/index.html","9b161bd50d55e0003e0ab20291db3338"],["D:/blog/public/2019/11/15/PAT-1032/index.html","f602f8e4681d888e8670368ddae15c02"],["D:/blog/public/2019/11/15/PAT-1059/index.html","b8d4ecfe69c40e093aacf6c86d24b8a8"],["D:/blog/public/2019/11/15/去南京/1.png","53d7c944f9a7326b86bd734f9d2d967c"],["D:/blog/public/2019/11/15/去南京/2.png","17208773d5c2ee30d094a597d4a8b9b6"],["D:/blog/public/2019/11/15/去南京/index.html","f5c795bc1daf13580e712c97297faf6f"],["D:/blog/public/2019/11/16/PAT-1052/index.html","81e44f36fa3d3043d335a2d80b7e4b3d"],["D:/blog/public/2019/11/16/连通块个数/index.html","a78ad88cf5a90af159f24e0984b8be27"],["D:/blog/public/2019/11/16/迷宫问题/index.html","44a4cece028fd4b4786ffada90d27ad0"],["D:/blog/public/2019/11/17/TED-list/index.html","94c33ef426a7b6bba57f2d2e8ff00b7c"],["D:/blog/public/2019/11/18/hello-world/index.html","cfebd9091ba3ff89a7ea978f0b3e9530"],["D:/blog/public/2019/11/18/win/index.html","793153fab95fcc7a04c878ea2845e69b"],["D:/blog/public/archives/2019/10/index.html","a2eeb9c1112f1f95d6a4aeecfb656168"],["D:/blog/public/archives/2019/11/index.html","89fe7cbdfd5b05a6d9e6651fd3a8301d"],["D:/blog/public/archives/2019/11/page/2/index.html","c2b47b615c9b4bd477af6f8b79823c87"],["D:/blog/public/archives/2019/11/page/3/index.html","98f1500ffec33e9e523b98fe829f7bb8"],["D:/blog/public/archives/2019/index.html","b6dfe6f6848f5c7b431f7f13a9dcb301"],["D:/blog/public/archives/2019/page/2/index.html","c3c5dacfad64189717ce57e362154796"],["D:/blog/public/archives/2019/page/3/index.html","1ffe37a327cd4c8e9cff151ea266b697"],["D:/blog/public/archives/2019/page/4/index.html","f5d60ad9f447668ebc4f69a2cd5ca359"],["D:/blog/public/archives/index.html","6a379585d50da76aabd9db152e092d2e"],["D:/blog/public/archives/page/2/index.html","c8b84d874b63b1d3db39780211a62ed8"],["D:/blog/public/archives/page/3/index.html","02faaf5387878723ec8839aae4a326f9"],["D:/blog/public/archives/page/4/index.html","41bfaa00d8729d19d56c40a266148f44"],["D:/blog/public/categories/code/index.html","ef6920ef7dd424774a54f2b6c56bd889"],["D:/blog/public/categories/code/page/2/index.html","df818dc53eb0123b4a934acd3b0ff0a1"],["D:/blog/public/categories/index.html","5e8daf36f241e24b6d6536a3e65cbbc5"],["D:/blog/public/categories/life/index.html","caeff1def2c9485fc4a5e5465ea919b8"],["D:/blog/public/categories/note/index.html","2a55383ce96d2f497df9b0f6bbb0125c"],["D:/blog/public/css/index.css","9911b20a2e31dc1aa98c48e483335237"],["D:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/blog/public/index.html","5cdb2de86f52d19c2912de3299116ef7"],["D:/blog/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["D:/blog/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["D:/blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/blog/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["D:/blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/blog/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/blog/public/page/2/index.html","aa43fcc8833a6338d43b5791095fef9d"],["D:/blog/public/page/3/index.html","46acdfadc8f0c76a2705332cf16e42dd"],["D:/blog/public/page/4/index.html","6f19fc53b690e27731a41e6204d12947"],["D:/blog/public/tags/PAT/index.html","bd6d4f8a3531c48f171f745540db6555"],["D:/blog/public/tags/PAT/page/2/index.html","0f70d507e996c0ed131e8469ab63fb39"],["D:/blog/public/tags/dfs/index.html","a5d9848928fe4995d9c013d66ee475d5"],["D:/blog/public/tags/english/index.html","a6d24b73890d75ca8362accb5591c5f1"],["D:/blog/public/tags/git/index.html","e367a50a53478c4893e115b68a4bbdef"],["D:/blog/public/tags/index.html","248074f0db113043f8c9696437a31a94"],["D:/blog/public/tags/plan/index.html","58ce86dc1c516b04e63577632fd56cc8"],["D:/blog/public/tags/python/index.html","0a01874cbcd84cb52e4b1dee09b9d46e"],["D:/blog/public/tags/python语法/index.html","bf232734770630c0b9a8c81184347594"],["D:/blog/public/tags/travel/index.html","6027c534222fd81ede90e5ef44e6e55a"],["D:/blog/public/tags/图/index.html","f78b1d236418096f874eb0701ba99503"],["D:/blog/public/tags/图论/index.html","0c834a9acadc4085fd3a51cdce96775e"],["D:/blog/public/tags/字符串/index.html","0e57c03a94af6f74aa5c0babee3aea63"],["D:/blog/public/tags/并查集/index.html","aac7ddffaeec1f565a3e531262b12dba"],["D:/blog/public/tags/排序/index.html","754f3338ad0eac9242a4894ceb219ca5"],["D:/blog/public/tags/数学/index.html","433ac0e4f6515ac310bf8c23a737e5f1"],["D:/blog/public/tags/整理/index.html","53f664906c77087fbd56eb3a349f513f"],["D:/blog/public/tags/文本编辑/index.html","4dbafbf3702e657179f45f84664e9915"],["D:/blog/public/tags/竞赛/index.html","1b344122487bacfc5cfd93dca8f15e5d"],["D:/blog/public/tags/纪念日/index.html","b8e0f910720073838db11836cdd610a1"],["D:/blog/public/tags/脚本/index.html","3c0d9b4f7f8485f86914956c463100b1"],["D:/blog/public/tags/链表/index.html","6575059ccb8bd28a172badaf2a5448ce"]];
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







