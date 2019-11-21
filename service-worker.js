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

var precacheConfig = [["D:/blog/public/2019/10/22/Markdown语法学习/index.html","7ef6c4946b2ad0bfed415fddc39acda6"],["D:/blog/public/2019/10/22/PAT-1122/index.html","507ba9c901678c30e9414004adc66627"],["D:/blog/public/2019/10/22/PAT计划/index.html","5bb41de2c3c2eb908f97417c8afdc82d"],["D:/blog/public/2019/10/22/一周年纪念/1.png","b922b2b5d70da4521554e351b799eafa"],["D:/blog/public/2019/10/22/一周年纪念/10.jpg","4ee6bc37ff3698fa570a938b2bd3cd8f"],["D:/blog/public/2019/10/22/一周年纪念/11.jpg","1eb8883718238d92b64c1d22aa0ad727"],["D:/blog/public/2019/10/22/一周年纪念/12.jpg","6f72da1105ecd7baec4b4ae55a95c4e5"],["D:/blog/public/2019/10/22/一周年纪念/13.png","9a7c7b6afec674eb08e5607057ecadf9"],["D:/blog/public/2019/10/22/一周年纪念/14.jpg","1c2a7133e420bc4b898cff3c3a67c3cd"],["D:/blog/public/2019/10/22/一周年纪念/15.png","9c39368c806a0cfa2e7d709132df9056"],["D:/blog/public/2019/10/22/一周年纪念/16.png","35d0b5720714b6bdc6d3a406196eff55"],["D:/blog/public/2019/10/22/一周年纪念/17.png","9e7284fb82f396c4810ef96f1b4fe4f8"],["D:/blog/public/2019/10/22/一周年纪念/19.jpg","8a64b1eb0e09baf650be35c430e1e35b"],["D:/blog/public/2019/10/22/一周年纪念/20.jpg","0903b15ae3093a3532017dc07d32e3ac"],["D:/blog/public/2019/10/22/一周年纪念/21.jpg","22b445ee7acb7233b44fc4a25d3ae663"],["D:/blog/public/2019/10/22/一周年纪念/22.jpg","efc11d26abeff3b665daa5d9f2391f15"],["D:/blog/public/2019/10/22/一周年纪念/23.png","234580cc98d43a9b6e76eea8ec82470d"],["D:/blog/public/2019/10/22/一周年纪念/24.png","2ba8d6c8d4be23e8c33d3fc0f4b4b4d6"],["D:/blog/public/2019/10/22/一周年纪念/25.png","5ab1f6e4156096f8ba58f66255bc3c0a"],["D:/blog/public/2019/10/22/一周年纪念/27.jpg","836de2238b33e122dfca7d9da44f27e3"],["D:/blog/public/2019/10/22/一周年纪念/28.png","9e80a6a4a5ddebfd511f53ea1e8267b0"],["D:/blog/public/2019/10/22/一周年纪念/29.jpg","04f2ec6d41985b0ed3e44f2361c7899f"],["D:/blog/public/2019/10/22/一周年纪念/3.jpg","412cd99e96d03326a84f0c0a84d1ec10"],["D:/blog/public/2019/10/22/一周年纪念/30.png","befd1520ca9f8db304c88e9d88278df8"],["D:/blog/public/2019/10/22/一周年纪念/31.png","c18c6d47b84e55829bcfe8e11fb63729"],["D:/blog/public/2019/10/22/一周年纪念/32.jpg","14d40f93919dc0c17c38c039f8a35cb1"],["D:/blog/public/2019/10/22/一周年纪念/33.jpg","4e615748f58a6f23602d4a7806e6422c"],["D:/blog/public/2019/10/22/一周年纪念/5.png","9941823b1349fbb055ca615b6e3d54de"],["D:/blog/public/2019/10/22/一周年纪念/6.jpg","1266f0dcd054f6bd16fb50de12b43b26"],["D:/blog/public/2019/10/22/一周年纪念/8.png","6e4467f160ae2401f89d866bd1e7da2d"],["D:/blog/public/2019/10/22/一周年纪念/9.jpg","1e90bb672bca5590d1a4e79e97431fb8"],["D:/blog/public/2019/10/22/一周年纪念/index.html","883c1ff387734a7a21f859925bdeb2fd"],["D:/blog/public/2019/10/25/PAT-1142/index.html","4ca3d962f2b996eb2b14d29ebe0b2167"],["D:/blog/public/2019/10/26/刷题技巧整理/index.html","ef5457853667e6b6d4140435476bfdf4"],["D:/blog/public/2019/10/26/算法笔记阅读/1.png","92150d33ef3bd6c65a9aaced8376a92c"],["D:/blog/public/2019/10/26/算法笔记阅读/2.png","cfccd02ede828f058d6097a5ea36231e"],["D:/blog/public/2019/10/26/算法笔记阅读/3.png","8829fd0644f4aa7c563ed6700448d1a5"],["D:/blog/public/2019/10/26/算法笔记阅读/4.png","9cd3a2412ecc95904bc4fa988104670d"],["D:/blog/public/2019/10/26/算法笔记阅读/5.png","2d944484cd483c4328cf23f83f283df4"],["D:/blog/public/2019/10/26/算法笔记阅读/6.png","e029e7b61a5b2af8a9adca3fe5c958c7"],["D:/blog/public/2019/10/26/算法笔记阅读/7.png","e3ea1a023a3cd92a0f71600be7356567"],["D:/blog/public/2019/10/26/算法笔记阅读/index.html","793019f38c8192b13f5121e913b34476"],["D:/blog/public/2019/10/29/PAT-1013/index.html","3bbe20fdeb4bf24988501825e12b09ff"],["D:/blog/public/2019/10/29/PAT-1034/index.html","6a55076da542739c949a13ecadb01f20"],["D:/blog/public/2019/10/30/PAT-1021/index.html","57755ac41341885ed14a77764ea2d48f"],["D:/blog/public/2019/11/03/Mac折腾记录/index.html","d01f06584a1d0642ecc64c7bb9861519"],["D:/blog/public/2019/11/04/VSCode使用/1.png","e8132b252da910da84d0d1ae36572702"],["D:/blog/public/2019/11/04/VSCode使用/2.png","3c8c0b6004e0d69eb0fe084e61359e9f"],["D:/blog/public/2019/11/04/VSCode使用/index.html","dcfc8bc13ef4bcc7fb0aad218ade194c"],["D:/blog/public/2019/11/05/PAT-1107/index.html","c7cbb251e8f39097d3f222c836e49925"],["D:/blog/public/2019/11/05/文件自动分类脚本/index.html","0802ff49d3d16902abe3bfa59f313d19"],["D:/blog/public/2019/11/06/PAT-1114/index.html","0117f7629c8ae18df6a3cead2917a236"],["D:/blog/public/2019/11/06/python基础/index.html","f30020b3a4dd7b1c08d493f51b9827fd"],["D:/blog/public/2019/11/07/git学习/0.jpg","701e02bf0b2d71ab51b7e2b6aa973d52"],["D:/blog/public/2019/11/07/git学习/1.png","2adbbdf8d8bab5606af6279ef5612da2"],["D:/blog/public/2019/11/07/git学习/2.png","c6f039420a0f851eb424883511ac4e2f"],["D:/blog/public/2019/11/07/git学习/3.png","06f0d7d34075653ba25a18ea0fea8b7d"],["D:/blog/public/2019/11/07/git学习/4.png","cb8a9c11c8fd1326260bbc7c2c6a62ac"],["D:/blog/public/2019/11/07/git学习/index.html","8553848de4a0bbac94545ad1f1052741"],["D:/blog/public/2019/11/13/PAT-1025/index.html","cfbe7e2e9853af9dec4b05f539f7bc82"],["D:/blog/public/2019/11/14/H和T的成长回忆录/index.html","65d9cf58d2c4f04fe248b4656b1f9eb1"],["D:/blog/public/2019/11/14/PAT-1069/index.html","01c9d3d96704454318d4b94277b3fa5c"],["D:/blog/public/2019/11/14/PAT-1093/index.html","7c3c3911d23e7768198d008c01e419fb"],["D:/blog/public/2019/11/14/PAT-1101/index.html","c08cb375d58246bf0a6662bd60f38864"],["D:/blog/public/2019/11/14/blog分类规划/index.html","a98b25ff307c0f2810f28d76d55c78b8"],["D:/blog/public/2019/11/14/北京游感/index.html","8630db61b3ee092ec6b7b2967c2a2e89"],["D:/blog/public/2019/11/14/热爱生命/1.png","0b865b5a8c5ffc65ab33586bb50513b7"],["D:/blog/public/2019/11/14/热爱生命/index.html","6ae18e57d1ea9ca017e071e5ed77d505"],["D:/blog/public/2019/11/14/随想-1/index.html","ba764f87af00e23ff82d17051f15dae4"],["D:/blog/public/2019/11/14/随想-2/1.png","ba65a9551263d1c1cb9c1870d1ee8a29"],["D:/blog/public/2019/11/14/随想-2/index.html","1704e43ccb0f024b246c7c2e7085951b"],["D:/blog/public/2019/11/15/PAT-1032/index.html","ddc6b1847d5365a6d98507f09c5d6b41"],["D:/blog/public/2019/11/15/PAT-1059/index.html","ea66fdebcfcc3b79875929ea146058c9"],["D:/blog/public/2019/11/15/去南京/1.png","53d7c944f9a7326b86bd734f9d2d967c"],["D:/blog/public/2019/11/15/去南京/2.png","17208773d5c2ee30d094a597d4a8b9b6"],["D:/blog/public/2019/11/15/去南京/index.html","a98cb8e54c56c37c439d919e93c12977"],["D:/blog/public/2019/11/16/PAT-1052/index.html","b62f86f7a680c0e889546e76d5f7201f"],["D:/blog/public/2019/11/16/连通块个数/index.html","3d1a9b6de9b3ecab5d27d8a0f4150055"],["D:/blog/public/2019/11/16/迷宫问题/index.html","33654523669a6134b0a0a8b78da8710c"],["D:/blog/public/2019/11/17/Listening-training/index.html","cf218f26017b33b6ce7c06b2d15578d8"],["D:/blog/public/2019/11/17/PAT-1020/index.html","3e6c66af4a769c7e1cb7b25b74928c0e"],["D:/blog/public/2019/11/18/随想-3/index.html","7c89513cf7f9665e0306716708a2b7c6"],["D:/blog/public/2019/11/19/PAT-1053/index.html","6bb31d1f90ce29d562938091929be5a5"],["D:/blog/public/2019/11/19/Win环境配置/1.png","c32e495ccfeb914740d76fdf84b2fda3"],["D:/blog/public/2019/11/19/Win环境配置/2.png","4cb6305070b92541ac6749688e6ddec6"],["D:/blog/public/2019/11/19/Win环境配置/3.png","da3b800653c68b7c463ee0b5598055e9"],["D:/blog/public/2019/11/19/Win环境配置/index.html","ed8135d9672c1533392b405f3cc96ba2"],["D:/blog/public/2019/11/20/PAT-1043/index.html","0ab67f18177e843fcd9a3b15ea42b0e8"],["D:/blog/public/archives/2019/10/index.html","00e387d54c3430c2c9860f7631e0d2ec"],["D:/blog/public/archives/2019/11/index.html","381579f0a9021b9cda91ef022fd6c6f2"],["D:/blog/public/archives/2019/11/page/2/index.html","65892c7e9513da5dd734faa858b6c2e4"],["D:/blog/public/archives/2019/11/page/3/index.html","fc22d3a48848f522fd034ae176de3966"],["D:/blog/public/archives/2019/index.html","7e75ad0069121242cd6a150674e7073a"],["D:/blog/public/archives/2019/page/2/index.html","cdd1aeb59c2b000d035eb77428595152"],["D:/blog/public/archives/2019/page/3/index.html","51f2f7f091160a4e9fb94f5787077f9b"],["D:/blog/public/archives/2019/page/4/index.html","7c1f06dc9d03542b5ed0c28638cc18f5"],["D:/blog/public/archives/index.html","4ad10d8efacbbd9e5d04a1f0688a0fcd"],["D:/blog/public/archives/page/2/index.html","d2a4bb7efa0a8582d30a8d4efaec9051"],["D:/blog/public/archives/page/3/index.html","1cd4b3b0d2ce55ca543fd39e0b8c3066"],["D:/blog/public/archives/page/4/index.html","f693cc68119bff54906e7426b34dd67a"],["D:/blog/public/categories/code/index.html","ceab5daf9813eaa7d17b32b8da09fa7f"],["D:/blog/public/categories/code/page/2/index.html","34d564618e6290a39749fe020129ed2a"],["D:/blog/public/categories/code/page/3/index.html","a18947c0acca875de5436eb542dc2ee1"],["D:/blog/public/categories/index.html","aab06305412140777d0eea59e436bc67"],["D:/blog/public/categories/life/index.html","3311fc8fa192d319976baf0aa5efb921"],["D:/blog/public/categories/note/index.html","30f4d2ff415828fa6eb41dac955b0dde"],["D:/blog/public/css/index.css","9911b20a2e31dc1aa98c48e483335237"],["D:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/blog/public/index.html","ad930af721381b265ee57e2a6df2eed4"],["D:/blog/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["D:/blog/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["D:/blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/blog/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["D:/blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/blog/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/blog/public/page/2/index.html","1108289de1acf3fe90fee1a57f2955bb"],["D:/blog/public/page/3/index.html","153a2d21724466e645dccc02dbeca305"],["D:/blog/public/page/4/index.html","6ab3c482bbc533f2cc0f04f2d9145b6b"],["D:/blog/public/tags/PAT/index.html","bb92fd4c8f33ebc5a196fa5d3689a9d8"],["D:/blog/public/tags/PAT/page/2/index.html","148fcefa09edede26166b32ade1f4a63"],["D:/blog/public/tags/bfs/index.html","3ad2b63627842c455dfc1df8b7901e2c"],["D:/blog/public/tags/dfs/index.html","d9e7bc32dbcfc6722675f734408a729b"],["D:/blog/public/tags/english/index.html","d3706e4c5d763c864297716aec0787de"],["D:/blog/public/tags/git/index.html","2ba83ecb388e271203a89e85230c5258"],["D:/blog/public/tags/index.html","7d309b088c9c19b1e4605aa529124acf"],["D:/blog/public/tags/plan/index.html","f9b45bdcaf495973966be30e3faa499e"],["D:/blog/public/tags/python/index.html","02cb61239457012488b2433293b3ae50"],["D:/blog/public/tags/python语法/index.html","1b93af77b53174bbb690c2295badf7f4"],["D:/blog/public/tags/travel/index.html","e57176e4e50c1fe83b6d77c023bfe3da"],["D:/blog/public/tags/win/index.html","08e96e780fb66723801933c5d6ae6757"],["D:/blog/public/tags/图/index.html","cd6e88f30aed32e6694ff7238d051e82"],["D:/blog/public/tags/图论/index.html","4410ee39aa001a915b3bbe76a820aae3"],["D:/blog/public/tags/字符串/index.html","5493705aaab7f67ef51987dcb45b063f"],["D:/blog/public/tags/并查集/index.html","e5140a8d4833e53c718af9c808a62993"],["D:/blog/public/tags/排序/index.html","934b111dae2f5f6892caf209f7e25e82"],["D:/blog/public/tags/数学/index.html","47bbfb8850d9d0f5cb703a05f6bb70ec"],["D:/blog/public/tags/整理/index.html","48cd2492beed5ea21bed42e9e5f2e80c"],["D:/blog/public/tags/文本编辑/index.html","6b4e524b7003b1d5873122646b9ffacb"],["D:/blog/public/tags/树/index.html","109c8d501b6af785989d6a7264523333"],["D:/blog/public/tags/竞赛/index.html","bcbbb9692d133b98645606609217959d"],["D:/blog/public/tags/纪念日/index.html","a9a464ff3dd6518d9c962562a8de458a"],["D:/blog/public/tags/脚本/index.html","fd31c212e78bbedd8be1bf265d1170ab"],["D:/blog/public/tags/链表/index.html","9212e7c595572cc4d77b893dc73d36c8"]];
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







