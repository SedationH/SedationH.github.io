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

var precacheConfig = [["D:/blog/public/2019/10/22/Markdown语法学习/index.html","e7675dee10cce4c60c72e4e4776dd250"],["D:/blog/public/2019/10/22/PAT-1122/index.html","e37736ed0ff1e28e87382a2fb2ed8e3b"],["D:/blog/public/2019/10/22/PAT计划/index.html","62117a3c3409275b56fb2ff342d26772"],["D:/blog/public/2019/10/22/一周年纪念/1.png","b922b2b5d70da4521554e351b799eafa"],["D:/blog/public/2019/10/22/一周年纪念/10.jpg","4ee6bc37ff3698fa570a938b2bd3cd8f"],["D:/blog/public/2019/10/22/一周年纪念/11.jpg","1eb8883718238d92b64c1d22aa0ad727"],["D:/blog/public/2019/10/22/一周年纪念/12.jpg","6f72da1105ecd7baec4b4ae55a95c4e5"],["D:/blog/public/2019/10/22/一周年纪念/13.png","9a7c7b6afec674eb08e5607057ecadf9"],["D:/blog/public/2019/10/22/一周年纪念/14.jpg","1c2a7133e420bc4b898cff3c3a67c3cd"],["D:/blog/public/2019/10/22/一周年纪念/15.png","9c39368c806a0cfa2e7d709132df9056"],["D:/blog/public/2019/10/22/一周年纪念/16.png","35d0b5720714b6bdc6d3a406196eff55"],["D:/blog/public/2019/10/22/一周年纪念/17.png","9e7284fb82f396c4810ef96f1b4fe4f8"],["D:/blog/public/2019/10/22/一周年纪念/19.jpg","8a64b1eb0e09baf650be35c430e1e35b"],["D:/blog/public/2019/10/22/一周年纪念/20.jpg","0903b15ae3093a3532017dc07d32e3ac"],["D:/blog/public/2019/10/22/一周年纪念/21.jpg","22b445ee7acb7233b44fc4a25d3ae663"],["D:/blog/public/2019/10/22/一周年纪念/22.jpg","efc11d26abeff3b665daa5d9f2391f15"],["D:/blog/public/2019/10/22/一周年纪念/23.png","234580cc98d43a9b6e76eea8ec82470d"],["D:/blog/public/2019/10/22/一周年纪念/24.png","2ba8d6c8d4be23e8c33d3fc0f4b4b4d6"],["D:/blog/public/2019/10/22/一周年纪念/25.png","5ab1f6e4156096f8ba58f66255bc3c0a"],["D:/blog/public/2019/10/22/一周年纪念/27.jpg","836de2238b33e122dfca7d9da44f27e3"],["D:/blog/public/2019/10/22/一周年纪念/28.png","9e80a6a4a5ddebfd511f53ea1e8267b0"],["D:/blog/public/2019/10/22/一周年纪念/29.jpg","04f2ec6d41985b0ed3e44f2361c7899f"],["D:/blog/public/2019/10/22/一周年纪念/3.jpg","412cd99e96d03326a84f0c0a84d1ec10"],["D:/blog/public/2019/10/22/一周年纪念/30.png","befd1520ca9f8db304c88e9d88278df8"],["D:/blog/public/2019/10/22/一周年纪念/31.png","c18c6d47b84e55829bcfe8e11fb63729"],["D:/blog/public/2019/10/22/一周年纪念/32.jpg","14d40f93919dc0c17c38c039f8a35cb1"],["D:/blog/public/2019/10/22/一周年纪念/33.jpg","4e615748f58a6f23602d4a7806e6422c"],["D:/blog/public/2019/10/22/一周年纪念/5.png","9941823b1349fbb055ca615b6e3d54de"],["D:/blog/public/2019/10/22/一周年纪念/6.jpg","1266f0dcd054f6bd16fb50de12b43b26"],["D:/blog/public/2019/10/22/一周年纪念/8.png","6e4467f160ae2401f89d866bd1e7da2d"],["D:/blog/public/2019/10/22/一周年纪念/9.jpg","1e90bb672bca5590d1a4e79e97431fb8"],["D:/blog/public/2019/10/22/一周年纪念/index.html","b57293e9bb0c9f8841dec70675decb1c"],["D:/blog/public/2019/10/25/PAT-1142/index.html","f31862ad94e201b8c48a5175110f28b2"],["D:/blog/public/2019/10/26/刷题技巧整理/index.html","a5e4ba44f8ecd56e8fead78e539bcfaf"],["D:/blog/public/2019/10/26/算法笔记阅读/1.png","92150d33ef3bd6c65a9aaced8376a92c"],["D:/blog/public/2019/10/26/算法笔记阅读/2.png","cfccd02ede828f058d6097a5ea36231e"],["D:/blog/public/2019/10/26/算法笔记阅读/3.png","8829fd0644f4aa7c563ed6700448d1a5"],["D:/blog/public/2019/10/26/算法笔记阅读/4.png","9cd3a2412ecc95904bc4fa988104670d"],["D:/blog/public/2019/10/26/算法笔记阅读/5.png","2d944484cd483c4328cf23f83f283df4"],["D:/blog/public/2019/10/26/算法笔记阅读/6.png","e029e7b61a5b2af8a9adca3fe5c958c7"],["D:/blog/public/2019/10/26/算法笔记阅读/7.png","e3ea1a023a3cd92a0f71600be7356567"],["D:/blog/public/2019/10/26/算法笔记阅读/8.png","6867de9496f219814cfdc9065a3300f5"],["D:/blog/public/2019/10/26/算法笔记阅读/9.png","9edf64d883da58014326c3dfe069972b"],["D:/blog/public/2019/10/26/算法笔记阅读/index.html","2ca78c15008fd1e6fa4447e276232548"],["D:/blog/public/2019/10/29/PAT-1013/index.html","c94acd239035b2e969856a2b11dd7347"],["D:/blog/public/2019/10/29/PAT-1034/index.html","a41f148901159bdbafaa34062151fca9"],["D:/blog/public/2019/10/30/PAT-1021/index.html","aa521fcfb9ed1c94c6b09851b35428b5"],["D:/blog/public/2019/11/03/Mac折腾记录/index.html","0d06b5c24a680017cbdec4346f4fd477"],["D:/blog/public/2019/11/04/VSCode使用/1.png","e8132b252da910da84d0d1ae36572702"],["D:/blog/public/2019/11/04/VSCode使用/2.png","3c8c0b6004e0d69eb0fe084e61359e9f"],["D:/blog/public/2019/11/04/VSCode使用/index.html","42456f760369d47c2154fc882df33f90"],["D:/blog/public/2019/11/05/PAT-1107/index.html","697699b7b673a540de71ee87f7adb8fb"],["D:/blog/public/2019/11/05/文件自动分类脚本/index.html","f2e5d3cff626cdeeab068ee8486152d7"],["D:/blog/public/2019/11/06/PAT-1114/index.html","711e6dd7648b72eb11b0da725d61617a"],["D:/blog/public/2019/11/06/python基础/index.html","0ba34a9b6bb6cc79da7818f1d4a9a7cc"],["D:/blog/public/2019/11/07/git学习/0.jpg","701e02bf0b2d71ab51b7e2b6aa973d52"],["D:/blog/public/2019/11/07/git学习/1.png","2adbbdf8d8bab5606af6279ef5612da2"],["D:/blog/public/2019/11/07/git学习/2.png","c6f039420a0f851eb424883511ac4e2f"],["D:/blog/public/2019/11/07/git学习/3.png","06f0d7d34075653ba25a18ea0fea8b7d"],["D:/blog/public/2019/11/07/git学习/4.png","cb8a9c11c8fd1326260bbc7c2c6a62ac"],["D:/blog/public/2019/11/07/git学习/index.html","bc61b83da47cdaecf44fca989783bd63"],["D:/blog/public/2019/11/13/PAT-1025/index.html","679ba0b486116efd889fd4f59dbb817f"],["D:/blog/public/2019/11/14/H和T的成长回忆录/index.html","c37cb468d244f5d639a4c287ec6aec07"],["D:/blog/public/2019/11/14/PAT-1069/index.html","86affc6ca97e3f0dca08f15ecbda4301"],["D:/blog/public/2019/11/14/PAT-1093/index.html","bb14448d019c5ece9b7485cf043c931c"],["D:/blog/public/2019/11/14/PAT-1101/index.html","d6522fbc76332590982f9debcc8a43a5"],["D:/blog/public/2019/11/14/blog分类规划/index.html","2b997b770b8739f5c8630adba6038066"],["D:/blog/public/2019/11/14/北京游感/index.html","c3c4aa43aa75cd61ceffc0f8110f946a"],["D:/blog/public/2019/11/14/热爱生命/1.png","0b865b5a8c5ffc65ab33586bb50513b7"],["D:/blog/public/2019/11/14/热爱生命/index.html","d5c70b4b115ff007ab53be181874578e"],["D:/blog/public/2019/11/14/随想-1/index.html","d58b49a15996f6490dad9879e3079d02"],["D:/blog/public/2019/11/14/随想-2/1.png","ba65a9551263d1c1cb9c1870d1ee8a29"],["D:/blog/public/2019/11/14/随想-2/index.html","b818af9ab199f56c9767e6fa6e6096f3"],["D:/blog/public/2019/11/15/PAT-1032/index.html","fb012bcfa16579d323d447820473c622"],["D:/blog/public/2019/11/15/PAT-1059/index.html","cd0d93f7827accdb48a3e1b259b3480c"],["D:/blog/public/2019/11/15/去南京/1.png","53d7c944f9a7326b86bd734f9d2d967c"],["D:/blog/public/2019/11/15/去南京/2.png","17208773d5c2ee30d094a597d4a8b9b6"],["D:/blog/public/2019/11/15/去南京/index.html","f2cc52e7933770800d7260204b3f1efd"],["D:/blog/public/2019/11/16/PAT-1052/index.html","6bf2d5db180f3e761fd00ec7039c319a"],["D:/blog/public/2019/11/16/连通块个数/index.html","9a73d30541347dadd66006914ce71b2b"],["D:/blog/public/2019/11/16/迷宫问题/index.html","02c69db818742e91bdde5af2e5ba712b"],["D:/blog/public/2019/11/17/Listening-training/index.html","69bf1b88730cbd0371a27a55a2d969b0"],["D:/blog/public/2019/11/17/PAT-1020/index.html","86b55812d8d917423d80ab2cecc6a8e7"],["D:/blog/public/2019/11/18/随想-3/index.html","c31a36c6e725ba26bf9fbb57ed877486"],["D:/blog/public/2019/11/19/PAT-1053/index.html","61231ccfca1026c112696fd233dbb43d"],["D:/blog/public/2019/11/19/Win环境配置/1.png","c32e495ccfeb914740d76fdf84b2fda3"],["D:/blog/public/2019/11/19/Win环境配置/2.png","4cb6305070b92541ac6749688e6ddec6"],["D:/blog/public/2019/11/19/Win环境配置/3.png","da3b800653c68b7c463ee0b5598055e9"],["D:/blog/public/2019/11/19/Win环境配置/index.html","150c890931ba9f0f26a121db9c100b97"],["D:/blog/public/2019/11/20/PAT-1043/index.html","f7a21cf95cc7f0b71ae2f5787392bbb2"],["D:/blog/public/2019/11/22/PAT-1003/1.png","6fd7e183ac46df7222a1d2a2a4c9b12a"],["D:/blog/public/2019/11/22/PAT-1003/index.html","8a569dcecd5b3ae20572d0bf104a03b9"],["D:/blog/public/2019/11/22/PAT-1018/index.html","f574a8fc2c48d2e15008cdfa14c59fff"],["D:/blog/public/2019/11/22/阅读管理/index.html","d95b2832b53fd0404cacbeae75e327dd"],["D:/blog/public/archives/2019/10/index.html","a8e9e507955e77edada3eda4733d2c31"],["D:/blog/public/archives/2019/11/index.html","05b594802f868836cc6addc4c92218bc"],["D:/blog/public/archives/2019/11/page/2/index.html","88b201949d98a7d11e210d2089d09095"],["D:/blog/public/archives/2019/11/page/3/index.html","bb090d408b55e562501b8112bdec3d74"],["D:/blog/public/archives/2019/11/page/4/index.html","00b733f84beaa31c4e66a17592010bee"],["D:/blog/public/archives/2019/index.html","be5ada66ad5ba9cce6faa3ab43bf0861"],["D:/blog/public/archives/2019/page/2/index.html","802f808741fdbcbb6f274c2041fb09bf"],["D:/blog/public/archives/2019/page/3/index.html","4342303b0383a365b219de780c713142"],["D:/blog/public/archives/2019/page/4/index.html","36d70f830ad4982563f8e5c8feb71e88"],["D:/blog/public/archives/2019/page/5/index.html","6738224d7727b4b6d0f36e56b647fa7b"],["D:/blog/public/archives/index.html","7e2a229f8f8cf07685e1c6bad815485c"],["D:/blog/public/archives/page/2/index.html","174b4ee994af019da59972bcf1f34b25"],["D:/blog/public/archives/page/3/index.html","1e14bd4c50ece8bc662e005c9c599a8e"],["D:/blog/public/archives/page/4/index.html","d6e612cb6ecda2984560bc92b69570fc"],["D:/blog/public/archives/page/5/index.html","eb4e9c3bcb16c7dbcb0e5ae2413f8b03"],["D:/blog/public/categories/code/index.html","ae8dd2f1bbcba1c9622ea0e09e78670f"],["D:/blog/public/categories/code/page/2/index.html","4f60b165ed30f86cc3750f4f5f4cbee8"],["D:/blog/public/categories/code/page/3/index.html","f587aa2c5e133cd0d7afff312b939853"],["D:/blog/public/categories/index.html","aafea8b2d308f161c4adbcd25b4690cc"],["D:/blog/public/categories/life/index.html","f49ddb43380db1e77cf4aba3f4f3a6bb"],["D:/blog/public/categories/life/page/2/index.html","cda11b8ec7293c7401fc45d821d8832b"],["D:/blog/public/categories/note/index.html","926660c683d3a46451eeaca39d672ff0"],["D:/blog/public/css/index.css","9911b20a2e31dc1aa98c48e483335237"],["D:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/blog/public/index.html","4c41c59fdcacae23cfcfaefce04e1ab5"],["D:/blog/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["D:/blog/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["D:/blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/blog/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["D:/blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/blog/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/blog/public/page/2/index.html","d7d42f0d13672a4cd5906342415a5559"],["D:/blog/public/page/3/index.html","7062dceab982935391f0b420c0297d37"],["D:/blog/public/page/4/index.html","6c631e22a67ef9fb38293e572d8610a2"],["D:/blog/public/page/5/index.html","d2d58b16259175d48c7dec3e268c16f4"],["D:/blog/public/tags/PAT/index.html","e4eafb8b79b9e2fbede0e5bfe7be9264"],["D:/blog/public/tags/PAT/page/2/index.html","a703f5de90bedd1cb9f13d8133268748"],["D:/blog/public/tags/bfs/index.html","bf9b7f206712d7a43fdd6f7ab48e5169"],["D:/blog/public/tags/dfs/index.html","f2f63a42dfd3c84dc379f7d6871f83c8"],["D:/blog/public/tags/dijkstra/index.html","86e4b824f2c65fa9d4c6bdcdc23514ca"],["D:/blog/public/tags/english/index.html","522be8a3bab9538a611255edc9736786"],["D:/blog/public/tags/git/index.html","a4dc26b5b886d929edfacbff8f54b130"],["D:/blog/public/tags/index.html","139605888f212e7dec6bf3decfd6d56c"],["D:/blog/public/tags/plan/index.html","894d39e37c3879548a5ef3eac9db1638"],["D:/blog/public/tags/python/index.html","21de79c9a7f5fbc6364e27a7fee04a44"],["D:/blog/public/tags/python语法/index.html","8ddd0aae6db7e237606dff33e7bedec6"],["D:/blog/public/tags/travel/index.html","0bf1171765c339ca73cc3afb13979d9a"],["D:/blog/public/tags/win/index.html","43c4243a4f5bcde7eedc55436e877d70"],["D:/blog/public/tags/图/index.html","4d41dac79c89549ce9a4632e0cc43750"],["D:/blog/public/tags/图论/index.html","7573d00670ad0230fc38c7516658bfe8"],["D:/blog/public/tags/字符串/index.html","e227c994d1ed63634b7617fe1e40d03e"],["D:/blog/public/tags/并查集/index.html","ca62208040a8b519aa025dff1fb044f7"],["D:/blog/public/tags/排序/index.html","84285a4542bbdd565505bf2175acb8d1"],["D:/blog/public/tags/数学/index.html","e5e7efc5a22c6b3782d35a6ddcfd7d58"],["D:/blog/public/tags/整理/index.html","e393ecc09197505e2d7149c32f6d094a"],["D:/blog/public/tags/文本编辑/index.html","7c548c55f8cb5ffacfd6b76ae3c8f089"],["D:/blog/public/tags/树/index.html","f78f253d73577e65d4c9a3c0bf3970be"],["D:/blog/public/tags/竞赛/index.html","3021bb84bc80ff1e41c1e9f5fbfb7b57"],["D:/blog/public/tags/纪念日/index.html","3904eacf130a7a2c1f7f81fb6db49251"],["D:/blog/public/tags/脚本/index.html","74518158faa585822f7d5ab2a344f071"],["D:/blog/public/tags/链表/index.html","513ea82ea8489703e8ad04abc1d31e7d"]];
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







