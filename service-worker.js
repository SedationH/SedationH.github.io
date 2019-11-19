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

var precacheConfig = [["D:/blog/public/2019/10/22/Markdown语法学习/index.html","0f8cd5f45373733dfcfa1cc322fd1662"],["D:/blog/public/2019/10/22/PAT-1122/index.html","856c0b06d8ae1de8ed2f5b88ab76a2cb"],["D:/blog/public/2019/10/22/PAT计划/index.html","b44c169e2b7bb64f74d445d0c84cd9d7"],["D:/blog/public/2019/10/22/一周年纪念/1.png","b922b2b5d70da4521554e351b799eafa"],["D:/blog/public/2019/10/22/一周年纪念/10.jpg","4ee6bc37ff3698fa570a938b2bd3cd8f"],["D:/blog/public/2019/10/22/一周年纪念/11.jpg","1eb8883718238d92b64c1d22aa0ad727"],["D:/blog/public/2019/10/22/一周年纪念/12.jpg","6f72da1105ecd7baec4b4ae55a95c4e5"],["D:/blog/public/2019/10/22/一周年纪念/13.png","9a7c7b6afec674eb08e5607057ecadf9"],["D:/blog/public/2019/10/22/一周年纪念/14.jpg","1c2a7133e420bc4b898cff3c3a67c3cd"],["D:/blog/public/2019/10/22/一周年纪念/15.png","9c39368c806a0cfa2e7d709132df9056"],["D:/blog/public/2019/10/22/一周年纪念/16.png","35d0b5720714b6bdc6d3a406196eff55"],["D:/blog/public/2019/10/22/一周年纪念/17.png","9e7284fb82f396c4810ef96f1b4fe4f8"],["D:/blog/public/2019/10/22/一周年纪念/19.jpg","8a64b1eb0e09baf650be35c430e1e35b"],["D:/blog/public/2019/10/22/一周年纪念/20.jpg","0903b15ae3093a3532017dc07d32e3ac"],["D:/blog/public/2019/10/22/一周年纪念/21.jpg","22b445ee7acb7233b44fc4a25d3ae663"],["D:/blog/public/2019/10/22/一周年纪念/22.jpg","efc11d26abeff3b665daa5d9f2391f15"],["D:/blog/public/2019/10/22/一周年纪念/23.png","234580cc98d43a9b6e76eea8ec82470d"],["D:/blog/public/2019/10/22/一周年纪念/24.png","2ba8d6c8d4be23e8c33d3fc0f4b4b4d6"],["D:/blog/public/2019/10/22/一周年纪念/25.png","5ab1f6e4156096f8ba58f66255bc3c0a"],["D:/blog/public/2019/10/22/一周年纪念/27.jpg","836de2238b33e122dfca7d9da44f27e3"],["D:/blog/public/2019/10/22/一周年纪念/28.png","9e80a6a4a5ddebfd511f53ea1e8267b0"],["D:/blog/public/2019/10/22/一周年纪念/29.jpg","04f2ec6d41985b0ed3e44f2361c7899f"],["D:/blog/public/2019/10/22/一周年纪念/3.jpg","412cd99e96d03326a84f0c0a84d1ec10"],["D:/blog/public/2019/10/22/一周年纪念/30.png","befd1520ca9f8db304c88e9d88278df8"],["D:/blog/public/2019/10/22/一周年纪念/31.png","c18c6d47b84e55829bcfe8e11fb63729"],["D:/blog/public/2019/10/22/一周年纪念/32.jpg","14d40f93919dc0c17c38c039f8a35cb1"],["D:/blog/public/2019/10/22/一周年纪念/33.jpg","4e615748f58a6f23602d4a7806e6422c"],["D:/blog/public/2019/10/22/一周年纪念/5.png","9941823b1349fbb055ca615b6e3d54de"],["D:/blog/public/2019/10/22/一周年纪念/6.jpg","1266f0dcd054f6bd16fb50de12b43b26"],["D:/blog/public/2019/10/22/一周年纪念/8.png","6e4467f160ae2401f89d866bd1e7da2d"],["D:/blog/public/2019/10/22/一周年纪念/9.jpg","1e90bb672bca5590d1a4e79e97431fb8"],["D:/blog/public/2019/10/22/一周年纪念/index.html","a0f207f5d435e02e4f32b2bfd7bf2436"],["D:/blog/public/2019/10/25/PAT-1142/index.html","6b093f5306d0762a76819389889fc1e6"],["D:/blog/public/2019/10/26/刷题技巧整理/index.html","6e70741eee4538e12521f449ac3e0d20"],["D:/blog/public/2019/10/26/算法笔记阅读/1.png","92150d33ef3bd6c65a9aaced8376a92c"],["D:/blog/public/2019/10/26/算法笔记阅读/2.png","cfccd02ede828f058d6097a5ea36231e"],["D:/blog/public/2019/10/26/算法笔记阅读/index.html","19226d83c03132dca6df0706f95fa239"],["D:/blog/public/2019/10/29/PAT-1013/index.html","2300722cadc2956dbe7b895821e3064a"],["D:/blog/public/2019/10/29/PAT-1034/index.html","88ea540bfa46638433bf31d4948e5aac"],["D:/blog/public/2019/10/30/PAT-1021/index.html","fd4764833d5c23982d31eec15fc877da"],["D:/blog/public/2019/11/03/Mac折腾记录/index.html","cf88fc04625eb92550201f0e00f85513"],["D:/blog/public/2019/11/04/VSCode使用/1.png","e8132b252da910da84d0d1ae36572702"],["D:/blog/public/2019/11/04/VSCode使用/2.png","3c8c0b6004e0d69eb0fe084e61359e9f"],["D:/blog/public/2019/11/04/VSCode使用/index.html","82d3e890df93b5d74b0b53894a0eb21d"],["D:/blog/public/2019/11/05/PAT-1107/index.html","96d45cfbc38eb03e6962ba703dc6f2a7"],["D:/blog/public/2019/11/05/文件自动分类脚本/index.html","af14214e9f4528c040d23c065fb63d40"],["D:/blog/public/2019/11/06/PAT-1114/index.html","398f514b5350a1504caf4d3204bdff10"],["D:/blog/public/2019/11/06/python基础/index.html","dc3df00e6d04d673debf0ae51e35670c"],["D:/blog/public/2019/11/07/git学习/0.jpg","701e02bf0b2d71ab51b7e2b6aa973d52"],["D:/blog/public/2019/11/07/git学习/1.png","2adbbdf8d8bab5606af6279ef5612da2"],["D:/blog/public/2019/11/07/git学习/2.png","c6f039420a0f851eb424883511ac4e2f"],["D:/blog/public/2019/11/07/git学习/3.png","06f0d7d34075653ba25a18ea0fea8b7d"],["D:/blog/public/2019/11/07/git学习/4.png","cb8a9c11c8fd1326260bbc7c2c6a62ac"],["D:/blog/public/2019/11/07/git学习/index.html","2f2a51f145b9dcf43705ee840581009c"],["D:/blog/public/2019/11/13/PAT-1025/index.html","3a1a9fede94cfed094ef77a25985b663"],["D:/blog/public/2019/11/14/H和T的成长回忆录/index.html","4487433595150ea023add6fa5717e5e7"],["D:/blog/public/2019/11/14/PAT-1069/index.html","01485dbace692474a94f4308ded940a5"],["D:/blog/public/2019/11/14/PAT-1093/index.html","f824118506b1ae5b71eec1fad0927273"],["D:/blog/public/2019/11/14/PAT-1101/index.html","b05d91d16faba195fa3f19dc9043b2ec"],["D:/blog/public/2019/11/14/blog分类规划/index.html","adb88de3adf79a9b1d413767df64c3aa"],["D:/blog/public/2019/11/14/北京游感/index.html","fd236e4636e94c25969f473b9dac5f8e"],["D:/blog/public/2019/11/14/热爱生命/1.png","0b865b5a8c5ffc65ab33586bb50513b7"],["D:/blog/public/2019/11/14/热爱生命/index.html","24bc60efcadad1e45b0dff69b50c453e"],["D:/blog/public/2019/11/14/随想-1/index.html","367660430ab57d6fd4fabdbaebff1b8e"],["D:/blog/public/2019/11/14/随想-2/1.png","ba65a9551263d1c1cb9c1870d1ee8a29"],["D:/blog/public/2019/11/14/随想-2/index.html","dc2585b89f69ef1f48d2497661c58430"],["D:/blog/public/2019/11/15/PAT-1032/index.html","ce13dd95c72c479a027d7865105cc0af"],["D:/blog/public/2019/11/15/PAT-1059/index.html","c24b39eebdd4f6b91178dfc7bf26f745"],["D:/blog/public/2019/11/15/去南京/1.png","53d7c944f9a7326b86bd734f9d2d967c"],["D:/blog/public/2019/11/15/去南京/2.png","17208773d5c2ee30d094a597d4a8b9b6"],["D:/blog/public/2019/11/15/去南京/index.html","4119c4bad0d9b5e550a429ad6fd3b6fa"],["D:/blog/public/2019/11/16/PAT-1052/index.html","d1cd419ffa268b4e883b1763002ddfb0"],["D:/blog/public/2019/11/16/连通块个数/index.html","1a3ad0664d989b02ef4b88b1fa7a0128"],["D:/blog/public/2019/11/16/迷宫问题/index.html","b693e22163ddf09ca046055290b4ed23"],["D:/blog/public/2019/11/17/Listening-training/index.html","77cb8edad97c0346161bb32564946ce9"],["D:/blog/public/2019/11/17/PAT-1020/index.html","2e4c3de1712f963e124f833662c5fef4"],["D:/blog/public/2019/11/18/随想-3/index.html","7812f79da62836d056445a6268f7f9bd"],["D:/blog/public/2019/11/19/PAT-1053/index.html","575106119167cb1804a43e8cc47c73b6"],["D:/blog/public/2019/11/19/Win环境配置/1.png","c32e495ccfeb914740d76fdf84b2fda3"],["D:/blog/public/2019/11/19/Win环境配置/2.png","4cb6305070b92541ac6749688e6ddec6"],["D:/blog/public/2019/11/19/Win环境配置/3.png","da3b800653c68b7c463ee0b5598055e9"],["D:/blog/public/2019/11/19/Win环境配置/index.html","25f2ed6e73834a3520155283047f8d2b"],["D:/blog/public/archives/2019/10/index.html","c7be515641ef3c8b8e3757dc544c0cbb"],["D:/blog/public/archives/2019/11/index.html","30bd8e82eabe1b6aa5aeb9614bfa2882"],["D:/blog/public/archives/2019/11/page/2/index.html","943394f9f4339adedafa50c17f69533c"],["D:/blog/public/archives/2019/11/page/3/index.html","d3be8f61ad9c734cfb5ee8cd3bb15f5b"],["D:/blog/public/archives/2019/index.html","e7620e37cbf5b74b6059a8913aa933a5"],["D:/blog/public/archives/2019/page/2/index.html","8400fa625a2225a598ec4a8bd0586b1d"],["D:/blog/public/archives/2019/page/3/index.html","aab75780b64b3d88a81f171f9128be63"],["D:/blog/public/archives/2019/page/4/index.html","5f5e24b71fe98f5bdc85ea80f34e50fe"],["D:/blog/public/archives/index.html","fde9be86760e8671302fc9d3c23e2b6a"],["D:/blog/public/archives/page/2/index.html","df9ce48c58a2e09e35efb4582bf88ea3"],["D:/blog/public/archives/page/3/index.html","33f07bb13a39861d694bb38f32bbff1c"],["D:/blog/public/archives/page/4/index.html","c45109ae77d42b7ef21eaa4cd31102d7"],["D:/blog/public/categories/code/index.html","6c5790f099f6003cb854428e329cba69"],["D:/blog/public/categories/code/page/2/index.html","4a802fdb5b3f554d356346d6f6beff3e"],["D:/blog/public/categories/index.html","47a46f377d66c8d5968b39f3e82226f2"],["D:/blog/public/categories/life/index.html","b4f077b8984ce30e26be41ab8dcd6c69"],["D:/blog/public/categories/note/index.html","2f26be00a07239a5d8fa2c3aa9e62443"],["D:/blog/public/css/index.css","9911b20a2e31dc1aa98c48e483335237"],["D:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/blog/public/index.html","93613332399a7ad83fb7cd9cd9a78130"],["D:/blog/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["D:/blog/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["D:/blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/blog/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["D:/blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/blog/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/blog/public/page/2/index.html","cd0731bd7f7ec4647c9599a2c1724417"],["D:/blog/public/page/3/index.html","0300b5837521c9ab8e677c8bdf42ca67"],["D:/blog/public/page/4/index.html","8c4a9a31d34375b75875acc9174d060c"],["D:/blog/public/tags/PAT/index.html","fd6cf3280882148f3ad5a468008c0fdb"],["D:/blog/public/tags/PAT/page/2/index.html","3f315290fbd60a8f59400708ca94ee2c"],["D:/blog/public/tags/bfs/index.html","45ca42c81ecf6b745f5edc369a840d06"],["D:/blog/public/tags/dfs/index.html","0dd1dec6125ef55dcae8b94a55afebdb"],["D:/blog/public/tags/english/index.html","93066316ef21d8cb3fa2f56e162e6b32"],["D:/blog/public/tags/git/index.html","eee54578fe29b951e320ff20c3db13b2"],["D:/blog/public/tags/index.html","18d884b9c2ab120b7c174bbdbe525511"],["D:/blog/public/tags/plan/index.html","d32c1a04e7f064be6aaf6d1f2b90127b"],["D:/blog/public/tags/python/index.html","2b6cf4da07ed4f4c2669077376fcc7b7"],["D:/blog/public/tags/python语法/index.html","51638cd3d9ca766583cc7add29d28800"],["D:/blog/public/tags/travel/index.html","c3f58c5064c2cf78a5470da80431718a"],["D:/blog/public/tags/win/index.html","ca1937e3579c78427b855ab8a6cebb2a"],["D:/blog/public/tags/图/index.html","0b7de58883f5692ff84f53b52972577f"],["D:/blog/public/tags/图论/index.html","53b012c5fe3613ff47143a5b23624e21"],["D:/blog/public/tags/字符串/index.html","fb9ffb125ede792dabcd5f6ceaf2b735"],["D:/blog/public/tags/并查集/index.html","05f4fc80ea68af630bed261876ff05e8"],["D:/blog/public/tags/排序/index.html","3a3119b1cb0bf60753b8e0bfda60a649"],["D:/blog/public/tags/数学/index.html","df4dcdd4bb0b48dca173bad5204285b3"],["D:/blog/public/tags/整理/index.html","10a911bf39ac2380d72f829ea6de7f36"],["D:/blog/public/tags/文本编辑/index.html","6ecc7befe87a57e8ad5f5b10a0260d00"],["D:/blog/public/tags/树/index.html","ac688750aff8a491fc0d3bea6ad81711"],["D:/blog/public/tags/竞赛/index.html","fc9b37130fd5fa1c6174cecfc8427c5d"],["D:/blog/public/tags/纪念日/index.html","829dcb39dfbb0fd3d9f83ceed32e7af7"],["D:/blog/public/tags/脚本/index.html","e6d108a822e8e718b580d11088ec8f75"],["D:/blog/public/tags/链表/index.html","a02522577fedaefc0cb3439e6d4ca7ea"]];
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







