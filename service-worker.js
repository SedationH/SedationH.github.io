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

var precacheConfig = [["D:/blog/public/2019/10/22/Markdown语法学习/index.html","cbb08aea6254aa810c89cd7800ef35a2"],["D:/blog/public/2019/10/22/PAT-1122/index.html","af173ee93e028024be14fd207f737361"],["D:/blog/public/2019/10/22/PAT计划/index.html","80dc92c59a3786ed85df2b299a75cdc0"],["D:/blog/public/2019/10/22/一周年纪念/1.png","b922b2b5d70da4521554e351b799eafa"],["D:/blog/public/2019/10/22/一周年纪念/10.jpg","4ee6bc37ff3698fa570a938b2bd3cd8f"],["D:/blog/public/2019/10/22/一周年纪念/11.jpg","1eb8883718238d92b64c1d22aa0ad727"],["D:/blog/public/2019/10/22/一周年纪念/12.jpg","6f72da1105ecd7baec4b4ae55a95c4e5"],["D:/blog/public/2019/10/22/一周年纪念/13.png","9a7c7b6afec674eb08e5607057ecadf9"],["D:/blog/public/2019/10/22/一周年纪念/14.jpg","1c2a7133e420bc4b898cff3c3a67c3cd"],["D:/blog/public/2019/10/22/一周年纪念/15.png","9c39368c806a0cfa2e7d709132df9056"],["D:/blog/public/2019/10/22/一周年纪念/16.png","35d0b5720714b6bdc6d3a406196eff55"],["D:/blog/public/2019/10/22/一周年纪念/17.png","9e7284fb82f396c4810ef96f1b4fe4f8"],["D:/blog/public/2019/10/22/一周年纪念/19.jpg","8a64b1eb0e09baf650be35c430e1e35b"],["D:/blog/public/2019/10/22/一周年纪念/20.jpg","0903b15ae3093a3532017dc07d32e3ac"],["D:/blog/public/2019/10/22/一周年纪念/21.jpg","22b445ee7acb7233b44fc4a25d3ae663"],["D:/blog/public/2019/10/22/一周年纪念/22.jpg","efc11d26abeff3b665daa5d9f2391f15"],["D:/blog/public/2019/10/22/一周年纪念/23.png","234580cc98d43a9b6e76eea8ec82470d"],["D:/blog/public/2019/10/22/一周年纪念/24.png","2ba8d6c8d4be23e8c33d3fc0f4b4b4d6"],["D:/blog/public/2019/10/22/一周年纪念/25.png","5ab1f6e4156096f8ba58f66255bc3c0a"],["D:/blog/public/2019/10/22/一周年纪念/27.jpg","836de2238b33e122dfca7d9da44f27e3"],["D:/blog/public/2019/10/22/一周年纪念/28.png","9e80a6a4a5ddebfd511f53ea1e8267b0"],["D:/blog/public/2019/10/22/一周年纪念/29.jpg","04f2ec6d41985b0ed3e44f2361c7899f"],["D:/blog/public/2019/10/22/一周年纪念/3.jpg","412cd99e96d03326a84f0c0a84d1ec10"],["D:/blog/public/2019/10/22/一周年纪念/30.png","befd1520ca9f8db304c88e9d88278df8"],["D:/blog/public/2019/10/22/一周年纪念/31.png","c18c6d47b84e55829bcfe8e11fb63729"],["D:/blog/public/2019/10/22/一周年纪念/32.jpg","14d40f93919dc0c17c38c039f8a35cb1"],["D:/blog/public/2019/10/22/一周年纪念/33.jpg","4e615748f58a6f23602d4a7806e6422c"],["D:/blog/public/2019/10/22/一周年纪念/5.png","9941823b1349fbb055ca615b6e3d54de"],["D:/blog/public/2019/10/22/一周年纪念/6.jpg","1266f0dcd054f6bd16fb50de12b43b26"],["D:/blog/public/2019/10/22/一周年纪念/8.png","6e4467f160ae2401f89d866bd1e7da2d"],["D:/blog/public/2019/10/22/一周年纪念/9.jpg","1e90bb672bca5590d1a4e79e97431fb8"],["D:/blog/public/2019/10/22/一周年纪念/index.html","a37680e2975d528c8273b9cbcdcca81f"],["D:/blog/public/2019/10/25/PAT-1142/index.html","bea4654d4ef8943f56a2033d2d500ae7"],["D:/blog/public/2019/10/26/刷题技巧整理/index.html","0881ad2af6435ce8ce8308b5851ab1d7"],["D:/blog/public/2019/10/26/算法笔记阅读/1.png","92150d33ef3bd6c65a9aaced8376a92c"],["D:/blog/public/2019/10/26/算法笔记阅读/2.png","cfccd02ede828f058d6097a5ea36231e"],["D:/blog/public/2019/10/26/算法笔记阅读/3.png","8829fd0644f4aa7c563ed6700448d1a5"],["D:/blog/public/2019/10/26/算法笔记阅读/4.png","9cd3a2412ecc95904bc4fa988104670d"],["D:/blog/public/2019/10/26/算法笔记阅读/5.png","2d944484cd483c4328cf23f83f283df4"],["D:/blog/public/2019/10/26/算法笔记阅读/6.png","e029e7b61a5b2af8a9adca3fe5c958c7"],["D:/blog/public/2019/10/26/算法笔记阅读/7.png","e3ea1a023a3cd92a0f71600be7356567"],["D:/blog/public/2019/10/26/算法笔记阅读/8.png","6867de9496f219814cfdc9065a3300f5"],["D:/blog/public/2019/10/26/算法笔记阅读/9.png","9edf64d883da58014326c3dfe069972b"],["D:/blog/public/2019/10/26/算法笔记阅读/index.html","270ae1d13d90931fdedff601a0556572"],["D:/blog/public/2019/10/29/PAT-1013/index.html","d11cb528d16553c3b53c6cd0ae8d5793"],["D:/blog/public/2019/10/29/PAT-1034/index.html","3fda28ea92cbab0e0dbdd7cfa8469113"],["D:/blog/public/2019/10/30/PAT-1021/index.html","6fb3d145398c04218029268c2627f7a7"],["D:/blog/public/2019/11/03/Mac折腾记录/index.html","0b4de2c6481135f9cf944d40d87373bd"],["D:/blog/public/2019/11/04/VSCode使用/1.png","e8132b252da910da84d0d1ae36572702"],["D:/blog/public/2019/11/04/VSCode使用/2.png","3c8c0b6004e0d69eb0fe084e61359e9f"],["D:/blog/public/2019/11/04/VSCode使用/index.html","d4249d449f8d1cc51cd0efe71d541517"],["D:/blog/public/2019/11/05/PAT-1107/index.html","afde9e506e78a106636ea93c9795c5e0"],["D:/blog/public/2019/11/05/文件自动分类脚本/index.html","23e76b62a7b9e968e73d4e1e1a5d503a"],["D:/blog/public/2019/11/06/PAT-1114/index.html","014bc223bf3dcc20962e91e331171901"],["D:/blog/public/2019/11/06/python基础/index.html","44d860f5caf72365ac19c2f5e9a89fec"],["D:/blog/public/2019/11/07/git学习/0.jpg","701e02bf0b2d71ab51b7e2b6aa973d52"],["D:/blog/public/2019/11/07/git学习/1.png","2adbbdf8d8bab5606af6279ef5612da2"],["D:/blog/public/2019/11/07/git学习/2.png","c6f039420a0f851eb424883511ac4e2f"],["D:/blog/public/2019/11/07/git学习/3.png","06f0d7d34075653ba25a18ea0fea8b7d"],["D:/blog/public/2019/11/07/git学习/4.png","cb8a9c11c8fd1326260bbc7c2c6a62ac"],["D:/blog/public/2019/11/07/git学习/index.html","f5a277837276d9763c0c4847bcc56c3c"],["D:/blog/public/2019/11/13/PAT-1025/index.html","ea4ab4422e36feed8eccb5ace46a5e04"],["D:/blog/public/2019/11/14/H和T的成长回忆录/index.html","c6ca95fabe4f7b3b352808bb0b71c9aa"],["D:/blog/public/2019/11/14/PAT-1069/index.html","9037691b2b0afd83b9ff7babcf1d3756"],["D:/blog/public/2019/11/14/PAT-1093/index.html","7a5c2c5c966d953770a906e945948d2f"],["D:/blog/public/2019/11/14/PAT-1101/index.html","e79d34bc0cda8e5b646b28d5a06b0406"],["D:/blog/public/2019/11/14/blog分类规划/index.html","918529a3ac30a0f803d4f6f11bb6cbae"],["D:/blog/public/2019/11/14/北京游感/index.html","76f1f254cd54ffeeeecfea9acfdb999d"],["D:/blog/public/2019/11/14/热爱生命/1.png","0b865b5a8c5ffc65ab33586bb50513b7"],["D:/blog/public/2019/11/14/热爱生命/index.html","6041a881e08b2644ace06376f0814587"],["D:/blog/public/2019/11/14/随想-1/index.html","a5600b85f6d1331f11955f265fae6ef4"],["D:/blog/public/2019/11/14/随想-2/1.png","ba65a9551263d1c1cb9c1870d1ee8a29"],["D:/blog/public/2019/11/14/随想-2/index.html","9070044ab2f32b90ec4121eeeaa159a3"],["D:/blog/public/2019/11/15/PAT-1032/index.html","b44d46a937039f171dc674876fdb25e7"],["D:/blog/public/2019/11/15/PAT-1059/index.html","f683beeec807a9c5136560152227100b"],["D:/blog/public/2019/11/15/去南京/1.png","53d7c944f9a7326b86bd734f9d2d967c"],["D:/blog/public/2019/11/15/去南京/2.png","17208773d5c2ee30d094a597d4a8b9b6"],["D:/blog/public/2019/11/15/去南京/index.html","536ba4701302fa29a1b07f4c3e8352e1"],["D:/blog/public/2019/11/16/PAT-1052/index.html","c50b67b27e31278b5c8cc0c5b008fa80"],["D:/blog/public/2019/11/16/连通块个数/index.html","dfa0e90ec11ba13c27c9269b1431b445"],["D:/blog/public/2019/11/16/迷宫问题/index.html","b19fd8dfa9de5eb25b1fe386e5819232"],["D:/blog/public/2019/11/17/Listening-training/index.html","53b08c611bfd1c8b0030c9f195070da0"],["D:/blog/public/2019/11/17/PAT-1020/index.html","7099251c46c5970a7b40df1d09ebd9a8"],["D:/blog/public/2019/11/18/随想-3/index.html","97908ece403ddfbf4d5301d2fc61231b"],["D:/blog/public/2019/11/19/PAT-1053/index.html","0420cc5a4e5378f4f4d7564008a8c8b2"],["D:/blog/public/2019/11/19/Win环境配置/1.png","c32e495ccfeb914740d76fdf84b2fda3"],["D:/blog/public/2019/11/19/Win环境配置/2.png","4cb6305070b92541ac6749688e6ddec6"],["D:/blog/public/2019/11/19/Win环境配置/3.png","da3b800653c68b7c463ee0b5598055e9"],["D:/blog/public/2019/11/19/Win环境配置/index.html","bd2e585a91eec9cbf914773927711510"],["D:/blog/public/2019/11/20/PAT-1043/index.html","3ef1fa41323e313f455d17917a3ff3be"],["D:/blog/public/2019/11/22/PAT-1003/1.png","6fd7e183ac46df7222a1d2a2a4c9b12a"],["D:/blog/public/2019/11/22/PAT-1003/index.html","c4be3921e64440dd080f5fe16f244fb9"],["D:/blog/public/2019/11/22/PAT-1018/index.html","b137f5c59db691d83dfecd3405266495"],["D:/blog/public/2019/11/22/阅读管理/index.html","254ff80e32c323b63af6f78e730c418b"],["D:/blog/public/2019/11/23/ExcelToMarkdown/index.html","c5a3af1389355817b00560419d9ed3ad"],["D:/blog/public/2019/11/23/四级选择填空高频词/index.html","df7b470dd850ce61c35b65973c91b47b"],["D:/blog/public/archives/2019/10/index.html","6fe3c7e9893bcb225ab181b9fc7a2557"],["D:/blog/public/archives/2019/11/index.html","efb5bbeabeb54670a11f12ec69219d7b"],["D:/blog/public/archives/2019/11/page/2/index.html","469a9f466cf8e3a99c8eb4369a7b26a9"],["D:/blog/public/archives/2019/11/page/3/index.html","891f771aff5127148824ee1a21c2fedd"],["D:/blog/public/archives/2019/11/page/4/index.html","65b57ad69d8cada3aacee794b92e74d4"],["D:/blog/public/archives/2019/index.html","b4854641b18e95ae28e0447258510da4"],["D:/blog/public/archives/2019/page/2/index.html","9d1f3481416ee86bbd11aeb3de6ba973"],["D:/blog/public/archives/2019/page/3/index.html","5e4fc190c926ab5dcfd714e4b2d90229"],["D:/blog/public/archives/2019/page/4/index.html","bc7fb3f82888046a950b774dd9721d88"],["D:/blog/public/archives/2019/page/5/index.html","1cab66f0480d653110301f6a0ed498ba"],["D:/blog/public/archives/index.html","1b83c0d808953b24206f5d2d42a8fc23"],["D:/blog/public/archives/page/2/index.html","355bb599138ec1d887c7d604800ac994"],["D:/blog/public/archives/page/3/index.html","6c7d198cf0705e8769289d3efac316ca"],["D:/blog/public/archives/page/4/index.html","4ecd0e5199459888b2de4128d81cdc64"],["D:/blog/public/archives/page/5/index.html","d3d5f14e1d28c8f08ca36a9e16a9209a"],["D:/blog/public/categories/code/index.html","756345ed1cfdad5bd47a590400a3b0e0"],["D:/blog/public/categories/code/page/2/index.html","91a65047496d940caf66f356d2be0064"],["D:/blog/public/categories/code/page/3/index.html","1d45a65192cc8766d6e71777f51d5a4d"],["D:/blog/public/categories/index.html","1cbe65d7a6144267f8315428e7f3c7a9"],["D:/blog/public/categories/life/index.html","bc4440a013d7b44ce1668e4f5ed8db3b"],["D:/blog/public/categories/life/page/2/index.html","ac17fa4fa551f909959e4457bf3ea2a5"],["D:/blog/public/categories/note/index.html","24b42ce8d4d63ba45ddfe1fa3658929b"],["D:/blog/public/css/index.css","9911b20a2e31dc1aa98c48e483335237"],["D:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/blog/public/index.html","8a3406fbc82108b006d921ed172e2b04"],["D:/blog/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["D:/blog/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["D:/blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/blog/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["D:/blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/blog/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/blog/public/page/2/index.html","feffe31fd74c139f0336f1b6f58a8dd0"],["D:/blog/public/page/3/index.html","478a08ab51f8efa25dcda11c2eafcbe8"],["D:/blog/public/page/4/index.html","45ff60da9d751e3c10a5c5b5c3b093da"],["D:/blog/public/page/5/index.html","4f6e60ef8139196de947c02955a949e4"],["D:/blog/public/tags/PAT/index.html","ebe3bea750dc5dc1ccf05c845cc10a6d"],["D:/blog/public/tags/PAT/page/2/index.html","9ec0441957ae59b27c977d14cda3af7d"],["D:/blog/public/tags/bfs/index.html","0da01d613ae3c79e417055f804434b08"],["D:/blog/public/tags/dfs/index.html","0773ad8a063706295d743b7b4a5b1806"],["D:/blog/public/tags/dijkstra/index.html","0a63125e9ec6cabce280e12a5ba5b29a"],["D:/blog/public/tags/english/index.html","6b8146fc6b323655e877af58b0ad3536"],["D:/blog/public/tags/git/index.html","874f06871db2b722fad9b13a1d811621"],["D:/blog/public/tags/index.html","335a5d2881078365345ff0b918ead5d3"],["D:/blog/public/tags/plan/index.html","a8107e9a364efbb3887602fc91b6e02e"],["D:/blog/public/tags/python/index.html","8d8d48bc7c428940703ecc7eb3eae4ba"],["D:/blog/public/tags/python语法/index.html","97cfdf8491667c289a7cd3a7f2d668dd"],["D:/blog/public/tags/travel/index.html","8b49ddda653e0b4b9f1f5c9d4fce6cb8"],["D:/blog/public/tags/win/index.html","0ec4526153e3cd25eab6d648ea940bce"],["D:/blog/public/tags/图/index.html","65f17f3943edb3b94ed53dd281120788"],["D:/blog/public/tags/图论/index.html","7cb58a93cc9f289f07326c58264fe0ee"],["D:/blog/public/tags/字符串/index.html","79b9bcba02cdecb45e20a4d39fb40dd3"],["D:/blog/public/tags/并查集/index.html","6c338d5cb25d26377ef07e37ca166aef"],["D:/blog/public/tags/排序/index.html","0a413ca54e287673cecd2326a10c097d"],["D:/blog/public/tags/数学/index.html","e211ddc23b4bc3fe89c5f2d24d6a960b"],["D:/blog/public/tags/整理/index.html","4bf957d434d5186cfb1158252d6501c5"],["D:/blog/public/tags/文本编辑/index.html","1b3a86b299e8accc5015e241a139dd86"],["D:/blog/public/tags/树/index.html","b5785da62e2256a793405b41fd72861c"],["D:/blog/public/tags/竞赛/index.html","748348e54f9d7c4ec01bd96c60989745"],["D:/blog/public/tags/纪念日/index.html","f7659af0e3b71345f79e9e494956f0dd"],["D:/blog/public/tags/脚本/index.html","43ebf5c91ca67dc20166b606a54e4fb8"],["D:/blog/public/tags/链表/index.html","24d53a323f51a96064225e47dddff960"]];
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







