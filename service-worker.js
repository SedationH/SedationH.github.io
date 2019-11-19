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

var precacheConfig = [["D:/blog/public/2019/10/22/Markdown语法学习/index.html","7cf38ca0eba523b7f86a10b42b7f152d"],["D:/blog/public/2019/10/22/PAT-1122/index.html","a74028baab36b93e9be0ee6eedc23d7f"],["D:/blog/public/2019/10/22/PAT计划/index.html","31d8ff599e759722b3c4223780e66c41"],["D:/blog/public/2019/10/22/一周年纪念/1.png","b922b2b5d70da4521554e351b799eafa"],["D:/blog/public/2019/10/22/一周年纪念/10.jpg","4ee6bc37ff3698fa570a938b2bd3cd8f"],["D:/blog/public/2019/10/22/一周年纪念/11.jpg","1eb8883718238d92b64c1d22aa0ad727"],["D:/blog/public/2019/10/22/一周年纪念/12.jpg","6f72da1105ecd7baec4b4ae55a95c4e5"],["D:/blog/public/2019/10/22/一周年纪念/13.png","9a7c7b6afec674eb08e5607057ecadf9"],["D:/blog/public/2019/10/22/一周年纪念/14.jpg","1c2a7133e420bc4b898cff3c3a67c3cd"],["D:/blog/public/2019/10/22/一周年纪念/15.png","9c39368c806a0cfa2e7d709132df9056"],["D:/blog/public/2019/10/22/一周年纪念/16.png","35d0b5720714b6bdc6d3a406196eff55"],["D:/blog/public/2019/10/22/一周年纪念/17.png","9e7284fb82f396c4810ef96f1b4fe4f8"],["D:/blog/public/2019/10/22/一周年纪念/19.jpg","8a64b1eb0e09baf650be35c430e1e35b"],["D:/blog/public/2019/10/22/一周年纪念/20.jpg","0903b15ae3093a3532017dc07d32e3ac"],["D:/blog/public/2019/10/22/一周年纪念/21.jpg","22b445ee7acb7233b44fc4a25d3ae663"],["D:/blog/public/2019/10/22/一周年纪念/22.jpg","efc11d26abeff3b665daa5d9f2391f15"],["D:/blog/public/2019/10/22/一周年纪念/23.png","234580cc98d43a9b6e76eea8ec82470d"],["D:/blog/public/2019/10/22/一周年纪念/24.png","2ba8d6c8d4be23e8c33d3fc0f4b4b4d6"],["D:/blog/public/2019/10/22/一周年纪念/25.png","5ab1f6e4156096f8ba58f66255bc3c0a"],["D:/blog/public/2019/10/22/一周年纪念/27.jpg","836de2238b33e122dfca7d9da44f27e3"],["D:/blog/public/2019/10/22/一周年纪念/28.png","9e80a6a4a5ddebfd511f53ea1e8267b0"],["D:/blog/public/2019/10/22/一周年纪念/29.jpg","04f2ec6d41985b0ed3e44f2361c7899f"],["D:/blog/public/2019/10/22/一周年纪念/3.jpg","412cd99e96d03326a84f0c0a84d1ec10"],["D:/blog/public/2019/10/22/一周年纪念/30.png","befd1520ca9f8db304c88e9d88278df8"],["D:/blog/public/2019/10/22/一周年纪念/31.png","c18c6d47b84e55829bcfe8e11fb63729"],["D:/blog/public/2019/10/22/一周年纪念/32.jpg","14d40f93919dc0c17c38c039f8a35cb1"],["D:/blog/public/2019/10/22/一周年纪念/33.jpg","4e615748f58a6f23602d4a7806e6422c"],["D:/blog/public/2019/10/22/一周年纪念/5.png","9941823b1349fbb055ca615b6e3d54de"],["D:/blog/public/2019/10/22/一周年纪念/6.jpg","1266f0dcd054f6bd16fb50de12b43b26"],["D:/blog/public/2019/10/22/一周年纪念/8.png","6e4467f160ae2401f89d866bd1e7da2d"],["D:/blog/public/2019/10/22/一周年纪念/9.jpg","1e90bb672bca5590d1a4e79e97431fb8"],["D:/blog/public/2019/10/22/一周年纪念/index.html","f2a2cb27c6f836e0e13f278523056a06"],["D:/blog/public/2019/10/25/PAT-1142/index.html","74feaefcf111820195929bf8157467b7"],["D:/blog/public/2019/10/26/刷题技巧整理/index.html","424e626db9caa3c1b9889ae6f60a9d74"],["D:/blog/public/2019/10/26/算法笔记阅读/1.png","92150d33ef3bd6c65a9aaced8376a92c"],["D:/blog/public/2019/10/26/算法笔记阅读/2.png","cfccd02ede828f058d6097a5ea36231e"],["D:/blog/public/2019/10/26/算法笔记阅读/index.html","b459a76565e42c7080b5fcf99e8bfe70"],["D:/blog/public/2019/10/29/PAT-1013/index.html","89762f3e04473a574e96063ea13b1ce5"],["D:/blog/public/2019/10/29/PAT-1034/index.html","b8ad357815ea750101e28f516fe04cc6"],["D:/blog/public/2019/10/30/PAT-1021/index.html","e5b653871da15c6597303d9d626d8a86"],["D:/blog/public/2019/11/03/Mac折腾记录/index.html","bf540009955268eb96ee8f4f0b19bea5"],["D:/blog/public/2019/11/04/VSCode使用/1.png","e8132b252da910da84d0d1ae36572702"],["D:/blog/public/2019/11/04/VSCode使用/2.png","3c8c0b6004e0d69eb0fe084e61359e9f"],["D:/blog/public/2019/11/04/VSCode使用/index.html","65fd9bd9caa61d22968676b30cfb9186"],["D:/blog/public/2019/11/05/PAT-1107/index.html","169f416771c71c0a98949e75279b6720"],["D:/blog/public/2019/11/05/文件自动分类脚本/index.html","465b476453a87ce11e2c7a820c824c5b"],["D:/blog/public/2019/11/06/PAT-1114/index.html","67661334a5720a93ee05727623690c6b"],["D:/blog/public/2019/11/06/python基础/index.html","b9265ffb06791d1734785c0d6f84be59"],["D:/blog/public/2019/11/07/git学习/0.jpg","701e02bf0b2d71ab51b7e2b6aa973d52"],["D:/blog/public/2019/11/07/git学习/1.png","2adbbdf8d8bab5606af6279ef5612da2"],["D:/blog/public/2019/11/07/git学习/2.png","c6f039420a0f851eb424883511ac4e2f"],["D:/blog/public/2019/11/07/git学习/3.png","06f0d7d34075653ba25a18ea0fea8b7d"],["D:/blog/public/2019/11/07/git学习/4.png","cb8a9c11c8fd1326260bbc7c2c6a62ac"],["D:/blog/public/2019/11/07/git学习/index.html","2af22c1df95f5128da7a9ad5fe9a4ffd"],["D:/blog/public/2019/11/13/PAT-1025/index.html","da436f9a1c136ed56e41f6935258bb23"],["D:/blog/public/2019/11/14/H和T的成长回忆录/index.html","3eb8a6f5070fa5d14345e2efc492e43b"],["D:/blog/public/2019/11/14/PAT-1069/index.html","0b265e7a5b56b9c59c2e6030fd677e71"],["D:/blog/public/2019/11/14/PAT-1093/index.html","bbfa506aa1c4dc24bf2d2ceaadd20ce1"],["D:/blog/public/2019/11/14/PAT-1101/index.html","05f6d58623ec745c2a57fba6acfbd281"],["D:/blog/public/2019/11/14/blog分类规划/index.html","9594851e174fa9425a5b6baf32183873"],["D:/blog/public/2019/11/14/北京游感/index.html","08f81e46e7d1522ee827da774a40952b"],["D:/blog/public/2019/11/14/热爱生命/1.png","0b865b5a8c5ffc65ab33586bb50513b7"],["D:/blog/public/2019/11/14/热爱生命/index.html","98e1e8b9002f031a45761f3c5bf410e4"],["D:/blog/public/2019/11/14/随想-1/index.html","c209f710b06dfc54a29ae68a5a0b5f01"],["D:/blog/public/2019/11/14/随想-2/1.png","ba65a9551263d1c1cb9c1870d1ee8a29"],["D:/blog/public/2019/11/14/随想-2/index.html","97964e9264830afd52738eefc114b9a8"],["D:/blog/public/2019/11/15/PAT-1032/index.html","6e04e17cb5b6879f7fdf30bcd070c089"],["D:/blog/public/2019/11/15/PAT-1059/index.html","07874e1ee589862e70c7591a9ce3cad6"],["D:/blog/public/2019/11/15/去南京/1.png","53d7c944f9a7326b86bd734f9d2d967c"],["D:/blog/public/2019/11/15/去南京/2.png","17208773d5c2ee30d094a597d4a8b9b6"],["D:/blog/public/2019/11/15/去南京/index.html","77691e6ca4d412d1fa6b848638fe4be0"],["D:/blog/public/2019/11/16/PAT-1052/index.html","7b4d3a96bc28f8035c784b8312e8f6fa"],["D:/blog/public/2019/11/16/连通块个数/index.html","a13ce4b93e314873c01f659cf16d2733"],["D:/blog/public/2019/11/16/迷宫问题/index.html","bb542c11769b687be8a1a998a9b2e304"],["D:/blog/public/2019/11/17/Listening-training/index.html","45216c3bd467d01fb12bf29b75001f7a"],["D:/blog/public/2019/11/17/PAT-1020/index.html","3b43d92f0c654867ca219c78e95e0192"],["D:/blog/public/2019/11/18/随想-3/index.html","485e4c7411e1e64220182e4d97d2cb30"],["D:/blog/public/2019/11/19/Win环境配置/1.png","c32e495ccfeb914740d76fdf84b2fda3"],["D:/blog/public/2019/11/19/Win环境配置/2.png","4cb6305070b92541ac6749688e6ddec6"],["D:/blog/public/2019/11/19/Win环境配置/3.png","da3b800653c68b7c463ee0b5598055e9"],["D:/blog/public/2019/11/19/Win环境配置/index.html","c97abc136ec81c5c7472e75f642eeccb"],["D:/blog/public/archives/2019/10/index.html","efc0250abda14f9f3a3662207156f96e"],["D:/blog/public/archives/2019/11/index.html","b263dc597a2f67fa9e2bc23ac64114f1"],["D:/blog/public/archives/2019/11/page/2/index.html","ac158c8d0003081ec2a927e1234c75dd"],["D:/blog/public/archives/2019/11/page/3/index.html","bcfd293585d83752dc822fb8cdfd0107"],["D:/blog/public/archives/2019/index.html","4b2d4af1c38a3a4bdf2e90a662728bb3"],["D:/blog/public/archives/2019/page/2/index.html","de85b8d6d6b01897a70f80eb9ea9bc88"],["D:/blog/public/archives/2019/page/3/index.html","22c6f27b1ab270350fc1db436d2705e8"],["D:/blog/public/archives/2019/page/4/index.html","6febb27763c462fc9dac4a929cf22aca"],["D:/blog/public/archives/index.html","1ed7ebdf1f62abe52fcc62cc73528dae"],["D:/blog/public/archives/page/2/index.html","8ce5e0f1e754fd766a27ca44f5384a32"],["D:/blog/public/archives/page/3/index.html","50fcc7e68685be2ce5bfbb570034b958"],["D:/blog/public/archives/page/4/index.html","cc8a764fa29d31ea0a9b32c665761986"],["D:/blog/public/categories/code/index.html","2a05610a13b5316541d8d675ebe790b4"],["D:/blog/public/categories/code/page/2/index.html","e49d9bd8695d0af296c5464def47e02c"],["D:/blog/public/categories/index.html","c1466b5f37c634f76dac73d507799e91"],["D:/blog/public/categories/life/index.html","69144dcd936db29d4330250d0a0c762a"],["D:/blog/public/categories/note/index.html","04578e9e4ec96bdefb617e6a1f07d618"],["D:/blog/public/css/index.css","9911b20a2e31dc1aa98c48e483335237"],["D:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/blog/public/index.html","b80aa8273e415523706a7b67b880e6f6"],["D:/blog/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["D:/blog/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["D:/blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/blog/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["D:/blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/blog/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/blog/public/page/2/index.html","203e6e04e30d64c4ba875a8d22c25e65"],["D:/blog/public/page/3/index.html","76a8d10e4309f951679b732d8e71132c"],["D:/blog/public/page/4/index.html","06013cf3e493470ff90e72c6325dc781"],["D:/blog/public/tags/PAT/index.html","029fcfd1ad01ebebf4aee6741faac43c"],["D:/blog/public/tags/PAT/page/2/index.html","22c3d9bb35e99bed840b20b26be8b222"],["D:/blog/public/tags/bfs/index.html","3e82e9a4c6ada5a1d9153c251c75a552"],["D:/blog/public/tags/dfs/index.html","71674783d1c9ccd6d8501134908ff50b"],["D:/blog/public/tags/english/index.html","a0e1bb9ec4b64d20f85a6d168cd6ca18"],["D:/blog/public/tags/git/index.html","42597b5af8b85a8878eda7024393c928"],["D:/blog/public/tags/index.html","758758f613b72072c9385b3993914a2f"],["D:/blog/public/tags/plan/index.html","7609eb0af88892d28ed1a96b0b685a13"],["D:/blog/public/tags/python/index.html","5807ff206e7e89345cb5ef5feeb901ae"],["D:/blog/public/tags/python语法/index.html","5dbf54f11a728533db91775b59a685a6"],["D:/blog/public/tags/travel/index.html","0873a50bf046df84d6094154eaa477f2"],["D:/blog/public/tags/win/index.html","c641c870345d365b03d83eb7e1e68237"],["D:/blog/public/tags/图/index.html","8347536af5c987a34eb2d90f84590918"],["D:/blog/public/tags/图论/index.html","7e94e9e34c35ccfc8679fe746f16e241"],["D:/blog/public/tags/字符串/index.html","be013655dd8790b99cc433f51bb3fb8e"],["D:/blog/public/tags/并查集/index.html","bd9ebf0c7413724658371e66b7dde515"],["D:/blog/public/tags/排序/index.html","a314b83fd6bb921be7182734da0f1493"],["D:/blog/public/tags/数学/index.html","68ec805a3700b374ff5b91419c19b1a0"],["D:/blog/public/tags/整理/index.html","16f95a1b0477e9865cb33d914b161ce5"],["D:/blog/public/tags/文本编辑/index.html","30e8c3a0fa41445f1dcb0a2736071aea"],["D:/blog/public/tags/树/index.html","12fa7a9bb46cfeee378f93149372e1c3"],["D:/blog/public/tags/竞赛/index.html","f42d3ef6f6507358694cd252ec72b349"],["D:/blog/public/tags/纪念日/index.html","c02b689562dc982546052868deb7f0a6"],["D:/blog/public/tags/脚本/index.html","ba3738accc8e6388614945da93fc9c7b"],["D:/blog/public/tags/链表/index.html","69c10e65bb0fe4cbac7819e913dc1e62"]];
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







