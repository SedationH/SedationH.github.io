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

var precacheConfig = [["D:/blog/public/2019/10/22/Markdown语法学习/index.html","a3e5bfe946153272ad6b8edfc1466e19"],["D:/blog/public/2019/10/22/PAT-1122/index.html","29a317ded36a8af9d7f5e9ba7bb4d5ca"],["D:/blog/public/2019/10/22/PAT计划/index.html","eec3ea0e86a38cea3ecd12cc813354f0"],["D:/blog/public/2019/10/22/一周年纪念/1.png","b922b2b5d70da4521554e351b799eafa"],["D:/blog/public/2019/10/22/一周年纪念/10.jpg","4ee6bc37ff3698fa570a938b2bd3cd8f"],["D:/blog/public/2019/10/22/一周年纪念/11.jpg","1eb8883718238d92b64c1d22aa0ad727"],["D:/blog/public/2019/10/22/一周年纪念/12.jpg","6f72da1105ecd7baec4b4ae55a95c4e5"],["D:/blog/public/2019/10/22/一周年纪念/13.png","9a7c7b6afec674eb08e5607057ecadf9"],["D:/blog/public/2019/10/22/一周年纪念/14.jpg","1c2a7133e420bc4b898cff3c3a67c3cd"],["D:/blog/public/2019/10/22/一周年纪念/15.png","9c39368c806a0cfa2e7d709132df9056"],["D:/blog/public/2019/10/22/一周年纪念/16.png","35d0b5720714b6bdc6d3a406196eff55"],["D:/blog/public/2019/10/22/一周年纪念/17.png","9e7284fb82f396c4810ef96f1b4fe4f8"],["D:/blog/public/2019/10/22/一周年纪念/19.jpg","8a64b1eb0e09baf650be35c430e1e35b"],["D:/blog/public/2019/10/22/一周年纪念/20.jpg","0903b15ae3093a3532017dc07d32e3ac"],["D:/blog/public/2019/10/22/一周年纪念/21.jpg","22b445ee7acb7233b44fc4a25d3ae663"],["D:/blog/public/2019/10/22/一周年纪念/22.jpg","efc11d26abeff3b665daa5d9f2391f15"],["D:/blog/public/2019/10/22/一周年纪念/23.png","234580cc98d43a9b6e76eea8ec82470d"],["D:/blog/public/2019/10/22/一周年纪念/24.png","2ba8d6c8d4be23e8c33d3fc0f4b4b4d6"],["D:/blog/public/2019/10/22/一周年纪念/25.png","5ab1f6e4156096f8ba58f66255bc3c0a"],["D:/blog/public/2019/10/22/一周年纪念/27.jpg","836de2238b33e122dfca7d9da44f27e3"],["D:/blog/public/2019/10/22/一周年纪念/28.png","9e80a6a4a5ddebfd511f53ea1e8267b0"],["D:/blog/public/2019/10/22/一周年纪念/29.jpg","04f2ec6d41985b0ed3e44f2361c7899f"],["D:/blog/public/2019/10/22/一周年纪念/3.jpg","412cd99e96d03326a84f0c0a84d1ec10"],["D:/blog/public/2019/10/22/一周年纪念/30.png","befd1520ca9f8db304c88e9d88278df8"],["D:/blog/public/2019/10/22/一周年纪念/31.png","c18c6d47b84e55829bcfe8e11fb63729"],["D:/blog/public/2019/10/22/一周年纪念/32.jpg","14d40f93919dc0c17c38c039f8a35cb1"],["D:/blog/public/2019/10/22/一周年纪念/33.jpg","4e615748f58a6f23602d4a7806e6422c"],["D:/blog/public/2019/10/22/一周年纪念/5.png","9941823b1349fbb055ca615b6e3d54de"],["D:/blog/public/2019/10/22/一周年纪念/6.jpg","1266f0dcd054f6bd16fb50de12b43b26"],["D:/blog/public/2019/10/22/一周年纪念/8.png","6e4467f160ae2401f89d866bd1e7da2d"],["D:/blog/public/2019/10/22/一周年纪念/9.jpg","1e90bb672bca5590d1a4e79e97431fb8"],["D:/blog/public/2019/10/22/一周年纪念/index.html","65862651ac72b7a652969edf0e5e9f3e"],["D:/blog/public/2019/10/25/PAT-1142/index.html","81da5a5049b010cf11d66543a81d53f2"],["D:/blog/public/2019/10/26/刷题技巧整理/index.html","ac547623b84a0de7695280e366725327"],["D:/blog/public/2019/10/26/算法笔记阅读/1.png","92150d33ef3bd6c65a9aaced8376a92c"],["D:/blog/public/2019/10/26/算法笔记阅读/2.png","cfccd02ede828f058d6097a5ea36231e"],["D:/blog/public/2019/10/26/算法笔记阅读/3.png","8829fd0644f4aa7c563ed6700448d1a5"],["D:/blog/public/2019/10/26/算法笔记阅读/4.png","9cd3a2412ecc95904bc4fa988104670d"],["D:/blog/public/2019/10/26/算法笔记阅读/5.png","2d944484cd483c4328cf23f83f283df4"],["D:/blog/public/2019/10/26/算法笔记阅读/6.png","e029e7b61a5b2af8a9adca3fe5c958c7"],["D:/blog/public/2019/10/26/算法笔记阅读/7.png","e3ea1a023a3cd92a0f71600be7356567"],["D:/blog/public/2019/10/26/算法笔记阅读/8.png","6867de9496f219814cfdc9065a3300f5"],["D:/blog/public/2019/10/26/算法笔记阅读/9.png","9edf64d883da58014326c3dfe069972b"],["D:/blog/public/2019/10/26/算法笔记阅读/index.html","22b60243123616472658a5ca61b023eb"],["D:/blog/public/2019/10/29/PAT-1013/index.html","c84c043e64447a8df5f405807ae09820"],["D:/blog/public/2019/10/29/PAT-1034/index.html","3db902f1b35edd109464c65713b64c3b"],["D:/blog/public/2019/10/30/PAT-1021/index.html","dd5edc990e10a445dadf68adfc0ac209"],["D:/blog/public/2019/11/03/Mac折腾记录/index.html","1fcb9981d3053f35c43e64124a9ffcd7"],["D:/blog/public/2019/11/04/VSCode使用/1.png","e8132b252da910da84d0d1ae36572702"],["D:/blog/public/2019/11/04/VSCode使用/2.png","3c8c0b6004e0d69eb0fe084e61359e9f"],["D:/blog/public/2019/11/04/VSCode使用/index.html","2cfc976533d205568a9e0e23c56347d6"],["D:/blog/public/2019/11/05/PAT-1107/index.html","26802921d0a798aae093f03ddb5ce61d"],["D:/blog/public/2019/11/05/文件自动分类脚本/index.html","3d0c00635ce2f3916a54395beb43b7a3"],["D:/blog/public/2019/11/06/PAT-1114/index.html","f7c8fe778a4dd2474aed68a9dbe5812f"],["D:/blog/public/2019/11/06/python基础/index.html","a4135a355c109c3386d91fb7cb8aa9bc"],["D:/blog/public/2019/11/07/git学习/0.jpg","701e02bf0b2d71ab51b7e2b6aa973d52"],["D:/blog/public/2019/11/07/git学习/1.png","2adbbdf8d8bab5606af6279ef5612da2"],["D:/blog/public/2019/11/07/git学习/2.png","c6f039420a0f851eb424883511ac4e2f"],["D:/blog/public/2019/11/07/git学习/3.png","06f0d7d34075653ba25a18ea0fea8b7d"],["D:/blog/public/2019/11/07/git学习/4.png","cb8a9c11c8fd1326260bbc7c2c6a62ac"],["D:/blog/public/2019/11/07/git学习/index.html","77d7c64b648cf4c566beb6b2788da1f7"],["D:/blog/public/2019/11/13/PAT-1025/index.html","339935c9bffaefb8f0c03b0fd08996a8"],["D:/blog/public/2019/11/14/H和T的成长回忆录/index.html","7eb947477a79bd1e10681e1a22f8d4c4"],["D:/blog/public/2019/11/14/PAT-1069/index.html","bac8fd6e3fffc9a0fc0b90713f10497c"],["D:/blog/public/2019/11/14/PAT-1093/index.html","f36ff0280a4dba077778fa41c536d241"],["D:/blog/public/2019/11/14/PAT-1101/index.html","eb73bd5b2f08f5ac939bf68b0310f206"],["D:/blog/public/2019/11/14/blog分类规划/index.html","d7b8611f33c97fe0e986a4ebda91a1da"],["D:/blog/public/2019/11/14/北京游感/index.html","4c31803483a921108b1891f76f623619"],["D:/blog/public/2019/11/14/热爱生命/1.png","0b865b5a8c5ffc65ab33586bb50513b7"],["D:/blog/public/2019/11/14/热爱生命/index.html","b0062c5328035052ea44128c81e06c29"],["D:/blog/public/2019/11/14/随想-1/index.html","c73cdcb1751870131d95146fc559c1f4"],["D:/blog/public/2019/11/14/随想-2/1.png","ba65a9551263d1c1cb9c1870d1ee8a29"],["D:/blog/public/2019/11/14/随想-2/index.html","53706f5a795bd9d1b69974c9863f8fc3"],["D:/blog/public/2019/11/15/PAT-1032/index.html","6c9523d3528b90a928f28f0e41438eb6"],["D:/blog/public/2019/11/15/PAT-1059/index.html","a9b53bc6b72d6b7727fec8746d9d768c"],["D:/blog/public/2019/11/15/去南京/1.png","53d7c944f9a7326b86bd734f9d2d967c"],["D:/blog/public/2019/11/15/去南京/2.png","17208773d5c2ee30d094a597d4a8b9b6"],["D:/blog/public/2019/11/15/去南京/index.html","d395da923b176306ee99390cf6e1ad5a"],["D:/blog/public/2019/11/16/PAT-1052/index.html","e16f022f7d1f23802199ffcfe04fe46e"],["D:/blog/public/2019/11/16/连通块个数/index.html","5509f617ef07f21b1b049d6ba0f5e51e"],["D:/blog/public/2019/11/16/迷宫问题/index.html","de2e7242bac5666ef5a7385ed46f800e"],["D:/blog/public/2019/11/17/Listening-training/index.html","1772107e331b7edc60e1da75356067dc"],["D:/blog/public/2019/11/17/PAT-1020/index.html","f425c4b2659b7dadc39efefddb974424"],["D:/blog/public/2019/11/18/随想-3/index.html","adaaf6f9bdd0318d176d21fea0d8ef7a"],["D:/blog/public/2019/11/19/PAT-1053/index.html","e3cdce09575ad15c16202911319b5aab"],["D:/blog/public/2019/11/19/Win环境配置/1.png","c32e495ccfeb914740d76fdf84b2fda3"],["D:/blog/public/2019/11/19/Win环境配置/2.png","4cb6305070b92541ac6749688e6ddec6"],["D:/blog/public/2019/11/19/Win环境配置/3.png","da3b800653c68b7c463ee0b5598055e9"],["D:/blog/public/2019/11/19/Win环境配置/index.html","c72b045fdc8cfa7b47ec33ccc31761c4"],["D:/blog/public/2019/11/20/PAT-1043/index.html","312bcc1a23f1558ca535230bde7425ec"],["D:/blog/public/2019/11/22/PAT-1003/1.png","6fd7e183ac46df7222a1d2a2a4c9b12a"],["D:/blog/public/2019/11/22/PAT-1003/index.html","cb8aef391d1930cea31f903a6700f3be"],["D:/blog/public/2019/11/22/阅读管理/index.html","38bb52a9148bb98afb22de1620a422b0"],["D:/blog/public/archives/2019/10/index.html","5c1be3cc0674c9be93489915017b3e15"],["D:/blog/public/archives/2019/11/index.html","4a20474835f52b1955b6c29d24f7f5e8"],["D:/blog/public/archives/2019/11/page/2/index.html","b9838164d1a052b96c5a27a9754b0124"],["D:/blog/public/archives/2019/11/page/3/index.html","a0b471f2610b56263fe552dba13ea105"],["D:/blog/public/archives/2019/11/page/4/index.html","c9d307ece63ac67409e3d9e02f4d4188"],["D:/blog/public/archives/2019/index.html","fc91953b5535218ef314dc0aec884425"],["D:/blog/public/archives/2019/page/2/index.html","6046bfd6e184c0b8709da93bc3d0b484"],["D:/blog/public/archives/2019/page/3/index.html","8c91f9eca3000ce9200b00f6e373eac7"],["D:/blog/public/archives/2019/page/4/index.html","bb7d5916899cbf6555c28b2374035ffb"],["D:/blog/public/archives/2019/page/5/index.html","8851347bf1cf68144d05f747e5906c9a"],["D:/blog/public/archives/index.html","f0fc892ec1361b22974c2b315b99caa9"],["D:/blog/public/archives/page/2/index.html","498f511a0346b803b7fe08f2674c2d6b"],["D:/blog/public/archives/page/3/index.html","1134554528f12625a5febbccea4d56b9"],["D:/blog/public/archives/page/4/index.html","1eb7bf49505a4b863f9529232883390a"],["D:/blog/public/archives/page/5/index.html","1d8685d9d28401b831ad94b155e3f0d6"],["D:/blog/public/categories/code/index.html","8dcf9fd1a72de28445e3eb064deadb61"],["D:/blog/public/categories/code/page/2/index.html","5d50d7db1b464d7f77d3498ec9571f80"],["D:/blog/public/categories/code/page/3/index.html","d7cc223aa8b86749a70e0f7664919b8f"],["D:/blog/public/categories/index.html","40b969f286df5bf2f919d84616024c2d"],["D:/blog/public/categories/life/index.html","0e3a62f4b624a7050d29f90931770141"],["D:/blog/public/categories/note/index.html","7bef94b0d955d759899c52c72aa1c7f2"],["D:/blog/public/css/index.css","9911b20a2e31dc1aa98c48e483335237"],["D:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/blog/public/index.html","cf593ed7311224ef003be74b1a8a382a"],["D:/blog/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["D:/blog/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["D:/blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/blog/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["D:/blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/blog/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/blog/public/page/2/index.html","f0314b1c69784785970d41c2c7c29373"],["D:/blog/public/page/3/index.html","bbeee9c1f74af2b15e985cd051af155d"],["D:/blog/public/page/4/index.html","f205a07ebb8a748ca3177514f2cb7785"],["D:/blog/public/page/5/index.html","05afba81bf5db9d5e36b40693a5e62f5"],["D:/blog/public/tags/PAT/index.html","e421329b5e210cde87aa67d301a6578a"],["D:/blog/public/tags/PAT/page/2/index.html","c94132bf41e2e92968060f63c3cd3b1e"],["D:/blog/public/tags/bfs/index.html","9e0d1586b05835239c4717fb4111b01d"],["D:/blog/public/tags/dfs/index.html","7bda7461079d55ec53aa32e13b9be5c3"],["D:/blog/public/tags/dijkstra/index.html","ebfe7b61238693678038303b487bf9da"],["D:/blog/public/tags/english/index.html","7c612b55c8d8d3917c4abff0d739af14"],["D:/blog/public/tags/git/index.html","83af92453e405c8a9d996920c754fb04"],["D:/blog/public/tags/index.html","221397a85d0eb0eb2c206911406f507a"],["D:/blog/public/tags/plan/index.html","c2518b3d911b62747d56519e6b0ace0c"],["D:/blog/public/tags/python/index.html","d6356f30b002e3758badf8ddfbd4f7db"],["D:/blog/public/tags/python语法/index.html","41b575f864b2fb2e523b510c8d0e510c"],["D:/blog/public/tags/travel/index.html","2484ce5cbe1d249e0fad849289955bc5"],["D:/blog/public/tags/win/index.html","53a1083f1b688b6cf292d7d303fb8acc"],["D:/blog/public/tags/图/index.html","19ff5dc820ee6eac89ab7a099bc3abc4"],["D:/blog/public/tags/图论/index.html","4e2eb20cca1936e1e797e430eb17095e"],["D:/blog/public/tags/字符串/index.html","e20a17ca935cce5f1bd09ac7b4d5b015"],["D:/blog/public/tags/并查集/index.html","35d47ab2e7f83e60fec41cb585a07133"],["D:/blog/public/tags/排序/index.html","d1e35485138078a94c5c0659d181572b"],["D:/blog/public/tags/数学/index.html","771a5dccdf54ce65399bd63e982a73f0"],["D:/blog/public/tags/整理/index.html","d56a6a2de87f8f95c2b85351c32f4157"],["D:/blog/public/tags/文本编辑/index.html","88bba13313b8544caabc7b63a0257ab6"],["D:/blog/public/tags/树/index.html","a382cb2a4ce4131ba9ceffc90e58d401"],["D:/blog/public/tags/竞赛/index.html","36fef8de39d5f9c87d921be88aed06c6"],["D:/blog/public/tags/纪念日/index.html","518097262145a9042ce2b6f4660f34f8"],["D:/blog/public/tags/脚本/index.html","7fe432c051c76f5e8238bbca911f0421"],["D:/blog/public/tags/链表/index.html","1eac4f22b28cafcd5237a7f42798cca1"]];
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







