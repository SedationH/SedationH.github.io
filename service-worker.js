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

var precacheConfig = [["D:/blog/public/2019/10/22/Markdown语法学习/index.html","6c63b4ef37d7f2ea235d384c5c31200e"],["D:/blog/public/2019/10/22/PAT-1122/index.html","0b927b001817c7f1e1a1697a1417875a"],["D:/blog/public/2019/10/22/PAT计划/index.html","7caa7f48d0c6410d005d057947d53c85"],["D:/blog/public/2019/10/22/一周年纪念/1.png","b922b2b5d70da4521554e351b799eafa"],["D:/blog/public/2019/10/22/一周年纪念/10.jpg","4ee6bc37ff3698fa570a938b2bd3cd8f"],["D:/blog/public/2019/10/22/一周年纪念/11.jpg","1eb8883718238d92b64c1d22aa0ad727"],["D:/blog/public/2019/10/22/一周年纪念/12.jpg","6f72da1105ecd7baec4b4ae55a95c4e5"],["D:/blog/public/2019/10/22/一周年纪念/13.png","9a7c7b6afec674eb08e5607057ecadf9"],["D:/blog/public/2019/10/22/一周年纪念/14.jpg","1c2a7133e420bc4b898cff3c3a67c3cd"],["D:/blog/public/2019/10/22/一周年纪念/15.png","9c39368c806a0cfa2e7d709132df9056"],["D:/blog/public/2019/10/22/一周年纪念/16.png","35d0b5720714b6bdc6d3a406196eff55"],["D:/blog/public/2019/10/22/一周年纪念/17.png","9e7284fb82f396c4810ef96f1b4fe4f8"],["D:/blog/public/2019/10/22/一周年纪念/19.jpg","8a64b1eb0e09baf650be35c430e1e35b"],["D:/blog/public/2019/10/22/一周年纪念/20.jpg","0903b15ae3093a3532017dc07d32e3ac"],["D:/blog/public/2019/10/22/一周年纪念/21.jpg","22b445ee7acb7233b44fc4a25d3ae663"],["D:/blog/public/2019/10/22/一周年纪念/22.jpg","efc11d26abeff3b665daa5d9f2391f15"],["D:/blog/public/2019/10/22/一周年纪念/23.png","234580cc98d43a9b6e76eea8ec82470d"],["D:/blog/public/2019/10/22/一周年纪念/24.png","2ba8d6c8d4be23e8c33d3fc0f4b4b4d6"],["D:/blog/public/2019/10/22/一周年纪念/25.png","5ab1f6e4156096f8ba58f66255bc3c0a"],["D:/blog/public/2019/10/22/一周年纪念/27.jpg","836de2238b33e122dfca7d9da44f27e3"],["D:/blog/public/2019/10/22/一周年纪念/28.png","9e80a6a4a5ddebfd511f53ea1e8267b0"],["D:/blog/public/2019/10/22/一周年纪念/29.jpg","04f2ec6d41985b0ed3e44f2361c7899f"],["D:/blog/public/2019/10/22/一周年纪念/3.jpg","412cd99e96d03326a84f0c0a84d1ec10"],["D:/blog/public/2019/10/22/一周年纪念/30.png","befd1520ca9f8db304c88e9d88278df8"],["D:/blog/public/2019/10/22/一周年纪念/31.png","c18c6d47b84e55829bcfe8e11fb63729"],["D:/blog/public/2019/10/22/一周年纪念/32.jpg","14d40f93919dc0c17c38c039f8a35cb1"],["D:/blog/public/2019/10/22/一周年纪念/33.jpg","4e615748f58a6f23602d4a7806e6422c"],["D:/blog/public/2019/10/22/一周年纪念/5.png","9941823b1349fbb055ca615b6e3d54de"],["D:/blog/public/2019/10/22/一周年纪念/6.jpg","1266f0dcd054f6bd16fb50de12b43b26"],["D:/blog/public/2019/10/22/一周年纪念/8.png","6e4467f160ae2401f89d866bd1e7da2d"],["D:/blog/public/2019/10/22/一周年纪念/9.jpg","1e90bb672bca5590d1a4e79e97431fb8"],["D:/blog/public/2019/10/22/一周年纪念/index.html","c7439f58a81c705d240d2d7f9da3aa61"],["D:/blog/public/2019/10/25/PAT-1142/index.html","d7f3dbff5f00f593a2e6dc67e9099a9b"],["D:/blog/public/2019/10/26/刷题技巧整理/index.html","78c33f0ce04e79c32654fdda54e0b2a3"],["D:/blog/public/2019/10/26/算法笔记阅读/1.png","92150d33ef3bd6c65a9aaced8376a92c"],["D:/blog/public/2019/10/26/算法笔记阅读/2.png","cfccd02ede828f058d6097a5ea36231e"],["D:/blog/public/2019/10/26/算法笔记阅读/3.png","8829fd0644f4aa7c563ed6700448d1a5"],["D:/blog/public/2019/10/26/算法笔记阅读/4.png","9cd3a2412ecc95904bc4fa988104670d"],["D:/blog/public/2019/10/26/算法笔记阅读/5.png","2d944484cd483c4328cf23f83f283df4"],["D:/blog/public/2019/10/26/算法笔记阅读/6.png","e029e7b61a5b2af8a9adca3fe5c958c7"],["D:/blog/public/2019/10/26/算法笔记阅读/7.png","e3ea1a023a3cd92a0f71600be7356567"],["D:/blog/public/2019/10/26/算法笔记阅读/8.png","6867de9496f219814cfdc9065a3300f5"],["D:/blog/public/2019/10/26/算法笔记阅读/9.png","9edf64d883da58014326c3dfe069972b"],["D:/blog/public/2019/10/26/算法笔记阅读/index.html","d06b54bc67f6b5ea380bfc93a78382f1"],["D:/blog/public/2019/10/29/PAT-1013/index.html","3533f2c17a594b55f98d8c4644fa87a2"],["D:/blog/public/2019/10/29/PAT-1034/index.html","591a4e3c7f6817fb32f6ce50abc61aef"],["D:/blog/public/2019/10/30/PAT-1021/index.html","a8f7055e9a1cb6d242ad747a31cd3dc8"],["D:/blog/public/2019/11/03/Mac折腾记录/index.html","aa39cfad4128275ccb735bbe2872b3a7"],["D:/blog/public/2019/11/04/VSCode使用/1.png","e8132b252da910da84d0d1ae36572702"],["D:/blog/public/2019/11/04/VSCode使用/2.png","3c8c0b6004e0d69eb0fe084e61359e9f"],["D:/blog/public/2019/11/04/VSCode使用/index.html","a190da8baff905a36d91cefad26d5ccc"],["D:/blog/public/2019/11/05/PAT-1107/index.html","69e6cd8a1758141d960829f618a1efda"],["D:/blog/public/2019/11/05/文件自动分类脚本/index.html","55f36147eedd717aeba423e0224f3f20"],["D:/blog/public/2019/11/06/PAT-1114/index.html","f7a4f1548e121ed47f09c0a9ed0456bb"],["D:/blog/public/2019/11/06/python基础/index.html","b4031e940cc2e3fd54262716819b1a25"],["D:/blog/public/2019/11/07/git学习/0.jpg","701e02bf0b2d71ab51b7e2b6aa973d52"],["D:/blog/public/2019/11/07/git学习/1.png","2adbbdf8d8bab5606af6279ef5612da2"],["D:/blog/public/2019/11/07/git学习/2.png","c6f039420a0f851eb424883511ac4e2f"],["D:/blog/public/2019/11/07/git学习/3.png","06f0d7d34075653ba25a18ea0fea8b7d"],["D:/blog/public/2019/11/07/git学习/4.png","cb8a9c11c8fd1326260bbc7c2c6a62ac"],["D:/blog/public/2019/11/07/git学习/index.html","a040eea7aac2a7ea43663f1ea2c24d59"],["D:/blog/public/2019/11/13/PAT-1025/index.html","2f2ec32de2758148c47ba3fa157e2fe0"],["D:/blog/public/2019/11/14/H和T的成长回忆录/index.html","157e04b3c7ae0a6c0d27940353e4ee92"],["D:/blog/public/2019/11/14/PAT-1069/index.html","9c7af7fa86eb7f1c62b35333acedebc6"],["D:/blog/public/2019/11/14/PAT-1093/index.html","4865179efe6b8049b017f662adad7e92"],["D:/blog/public/2019/11/14/PAT-1101/index.html","a9e8fa7b4f7b0467aa9ba1be8c08a6fe"],["D:/blog/public/2019/11/14/blog分类规划/index.html","8e4b880a2797a3c4fab06e46044e280a"],["D:/blog/public/2019/11/14/北京游感/index.html","35d84de11897f2ab696c52a5d7cba77b"],["D:/blog/public/2019/11/14/热爱生命/1.png","0b865b5a8c5ffc65ab33586bb50513b7"],["D:/blog/public/2019/11/14/热爱生命/index.html","fe4b394cedba9696f98f5ace7fe86a43"],["D:/blog/public/2019/11/14/随想-1/index.html","445d27f03670bb4310fdf46a6f503fc4"],["D:/blog/public/2019/11/14/随想-2/1.png","ba65a9551263d1c1cb9c1870d1ee8a29"],["D:/blog/public/2019/11/14/随想-2/index.html","affa05265dcdfe629834d400dc018bde"],["D:/blog/public/2019/11/15/PAT-1032/index.html","2e8cf35a85ff7dc897830f10bb6b5174"],["D:/blog/public/2019/11/15/PAT-1059/index.html","d43ab1a0fa51228d80cf4480c48fdf2c"],["D:/blog/public/2019/11/15/去南京/1.png","53d7c944f9a7326b86bd734f9d2d967c"],["D:/blog/public/2019/11/15/去南京/2.png","17208773d5c2ee30d094a597d4a8b9b6"],["D:/blog/public/2019/11/15/去南京/index.html","1a4a06a9be19e2f1fc47ae8deb03a8ed"],["D:/blog/public/2019/11/16/PAT-1052/index.html","61fbc1de6f23d85148144c061fe3aeda"],["D:/blog/public/2019/11/16/连通块个数/index.html","53180e6397f4f59e3e087fca4d367f60"],["D:/blog/public/2019/11/16/迷宫问题/index.html","8dd923db04a61ca87d4ff57e2e47b029"],["D:/blog/public/2019/11/17/Listening-training/index.html","1657bdd8462e5b5f9ca8abfac9aeb2ff"],["D:/blog/public/2019/11/17/PAT-1020/index.html","b2ac88b4294f135aec43511a9de7eb61"],["D:/blog/public/2019/11/18/随想-3/index.html","d5e5057206b86e204cb47192c5ba8dc1"],["D:/blog/public/2019/11/19/PAT-1053/index.html","85decc885af417aa35575cc1649bc826"],["D:/blog/public/2019/11/19/Win环境配置/1.png","c32e495ccfeb914740d76fdf84b2fda3"],["D:/blog/public/2019/11/19/Win环境配置/2.png","4cb6305070b92541ac6749688e6ddec6"],["D:/blog/public/2019/11/19/Win环境配置/3.png","da3b800653c68b7c463ee0b5598055e9"],["D:/blog/public/2019/11/19/Win环境配置/index.html","e7e61dcf65d52fceb48b873e89d36207"],["D:/blog/public/2019/11/20/PAT-1043/index.html","f638432005999ceb1f49eeb6b82b252f"],["D:/blog/public/2019/11/22/PAT-1003/1.png","6fd7e183ac46df7222a1d2a2a4c9b12a"],["D:/blog/public/2019/11/22/PAT-1003/index.html","151749ccf4b9d62e520fa7ec99ed6efd"],["D:/blog/public/archives/2019/10/index.html","c2e669ce9fc7b41bc64205698481815b"],["D:/blog/public/archives/2019/11/index.html","97149ad3648708f45fd9abb4dbe49bd7"],["D:/blog/public/archives/2019/11/page/2/index.html","4fe62e9b4bc1f05b851931fbada16738"],["D:/blog/public/archives/2019/11/page/3/index.html","d7036c46e5fad910b3c67b77e449e04f"],["D:/blog/public/archives/2019/index.html","d7dbc9895922da3e33aa85fd1c02f435"],["D:/blog/public/archives/2019/page/2/index.html","62cc3358f01f0ba36e5ed2f8968fbba1"],["D:/blog/public/archives/2019/page/3/index.html","1b1d8555823e925dd7d4b1a148677455"],["D:/blog/public/archives/2019/page/4/index.html","ac7b7c27f05f09c44484f8f0e0ae7bb3"],["D:/blog/public/archives/index.html","34ea5ece2505223d9a4c4b25618680ab"],["D:/blog/public/archives/page/2/index.html","dfd5fa616355bffc75fcda5378abf4ad"],["D:/blog/public/archives/page/3/index.html","ca9f818c8157623fb9f98fb0acdc5b44"],["D:/blog/public/archives/page/4/index.html","b936dc820af8c933c37ff91b12a45a33"],["D:/blog/public/categories/code/index.html","36c59f85532a47dc2cab5532787fc0c1"],["D:/blog/public/categories/code/page/2/index.html","08df5a19407d952e4815db138441816c"],["D:/blog/public/categories/code/page/3/index.html","6a92e6dd3d3c175127628f3df69ad830"],["D:/blog/public/categories/index.html","513365abfef52235a321e148e169034e"],["D:/blog/public/categories/life/index.html","567717f280c287982f786d4d5f27b6da"],["D:/blog/public/categories/note/index.html","b467e45414413a3f9b3248e8eb805b1c"],["D:/blog/public/css/index.css","9911b20a2e31dc1aa98c48e483335237"],["D:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/blog/public/index.html","f8ec1952e341312333ad9382abeac4b2"],["D:/blog/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["D:/blog/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["D:/blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/blog/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["D:/blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/blog/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/blog/public/page/2/index.html","2df1efb9d0357e7afe7e40267bea7261"],["D:/blog/public/page/3/index.html","fbd6956953f33be26afdce6c8eddee02"],["D:/blog/public/page/4/index.html","d05e88dd99688366f3f3004599297ffa"],["D:/blog/public/tags/PAT/index.html","cf56eef90c9d5dfa5331296f78efdddd"],["D:/blog/public/tags/PAT/page/2/index.html","5b8b0042194e667dd5a25f54a8be60b1"],["D:/blog/public/tags/bfs/index.html","4991abb5e2ea9788d7daac7bc5d6cf27"],["D:/blog/public/tags/dfs/index.html","be83948a8ae3b60bbee3fddce5b1c495"],["D:/blog/public/tags/dijkstra/index.html","9148069354354a4e9f1d4ab8f2ab7cea"],["D:/blog/public/tags/english/index.html","8c7580579af4e9f51360baf702206a1f"],["D:/blog/public/tags/git/index.html","7a584a20faa36fae0ee942c4f6c684ea"],["D:/blog/public/tags/index.html","6234ffa1bdb30f2f155c9437c9cfe3a4"],["D:/blog/public/tags/plan/index.html","62fb1d8c87f83113dcc89497276d0adf"],["D:/blog/public/tags/python/index.html","64364e6e26dd93cf674aa7f1c104176e"],["D:/blog/public/tags/python语法/index.html","2d115f10e08cbf18619c9d006ad2a714"],["D:/blog/public/tags/travel/index.html","031b5b1b7bc9769e6d3f1eb74ea71e98"],["D:/blog/public/tags/win/index.html","d09aadddd754097fc58c0c204f90afba"],["D:/blog/public/tags/图/index.html","221e75801e56365e75bc6ef4f2e1025b"],["D:/blog/public/tags/图论/index.html","e95194d7c04fa281e78ee4ca79c865a9"],["D:/blog/public/tags/字符串/index.html","a8943a487bd145538a21f896360b46fb"],["D:/blog/public/tags/并查集/index.html","4c2dde0e177d6e7efaffd8ce5a389cc4"],["D:/blog/public/tags/排序/index.html","84564a03821292a64fd5bb7a03309454"],["D:/blog/public/tags/数学/index.html","9fbf53f481b78534a2208bf6671d18a9"],["D:/blog/public/tags/整理/index.html","bb5e40aead22b49caee4e9b736d79d98"],["D:/blog/public/tags/文本编辑/index.html","6581fbefcec3694b91b4dfd7872306c1"],["D:/blog/public/tags/树/index.html","35ef525edfa190e0640e4b96a1359566"],["D:/blog/public/tags/竞赛/index.html","f741e16ed74a85938f413eb0ce25314c"],["D:/blog/public/tags/纪念日/index.html","2dd5da5247faaf1844fe79f68411bbe5"],["D:/blog/public/tags/脚本/index.html","a1e67fce12fad74fe7a2ac8236413214"],["D:/blog/public/tags/链表/index.html","fcf86dae3b3f3e01fdec47f7acfa8cca"]];
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







