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

var precacheConfig = [["D:/blog/public/2019/10/22/Markdown语法学习/index.html","63c2f3f54bc754d116829bc4021e6081"],["D:/blog/public/2019/10/22/PAT-1122/index.html","7a60cd9a04d111678be2545b902761ee"],["D:/blog/public/2019/10/22/PAT计划/index.html","6d8a78cd3051fc3fe2da374c37a26a4b"],["D:/blog/public/2019/10/22/一周年纪念/1.png","b922b2b5d70da4521554e351b799eafa"],["D:/blog/public/2019/10/22/一周年纪念/10.jpg","4ee6bc37ff3698fa570a938b2bd3cd8f"],["D:/blog/public/2019/10/22/一周年纪念/11.jpg","1eb8883718238d92b64c1d22aa0ad727"],["D:/blog/public/2019/10/22/一周年纪念/12.jpg","6f72da1105ecd7baec4b4ae55a95c4e5"],["D:/blog/public/2019/10/22/一周年纪念/13.png","9a7c7b6afec674eb08e5607057ecadf9"],["D:/blog/public/2019/10/22/一周年纪念/14.jpg","1c2a7133e420bc4b898cff3c3a67c3cd"],["D:/blog/public/2019/10/22/一周年纪念/15.png","9c39368c806a0cfa2e7d709132df9056"],["D:/blog/public/2019/10/22/一周年纪念/16.png","35d0b5720714b6bdc6d3a406196eff55"],["D:/blog/public/2019/10/22/一周年纪念/17.png","9e7284fb82f396c4810ef96f1b4fe4f8"],["D:/blog/public/2019/10/22/一周年纪念/19.jpg","8a64b1eb0e09baf650be35c430e1e35b"],["D:/blog/public/2019/10/22/一周年纪念/20.jpg","0903b15ae3093a3532017dc07d32e3ac"],["D:/blog/public/2019/10/22/一周年纪念/21.jpg","22b445ee7acb7233b44fc4a25d3ae663"],["D:/blog/public/2019/10/22/一周年纪念/22.jpg","efc11d26abeff3b665daa5d9f2391f15"],["D:/blog/public/2019/10/22/一周年纪念/23.png","234580cc98d43a9b6e76eea8ec82470d"],["D:/blog/public/2019/10/22/一周年纪念/24.png","2ba8d6c8d4be23e8c33d3fc0f4b4b4d6"],["D:/blog/public/2019/10/22/一周年纪念/25.png","5ab1f6e4156096f8ba58f66255bc3c0a"],["D:/blog/public/2019/10/22/一周年纪念/27.jpg","836de2238b33e122dfca7d9da44f27e3"],["D:/blog/public/2019/10/22/一周年纪念/28.png","9e80a6a4a5ddebfd511f53ea1e8267b0"],["D:/blog/public/2019/10/22/一周年纪念/29.jpg","04f2ec6d41985b0ed3e44f2361c7899f"],["D:/blog/public/2019/10/22/一周年纪念/3.jpg","412cd99e96d03326a84f0c0a84d1ec10"],["D:/blog/public/2019/10/22/一周年纪念/30.png","befd1520ca9f8db304c88e9d88278df8"],["D:/blog/public/2019/10/22/一周年纪念/31.png","c18c6d47b84e55829bcfe8e11fb63729"],["D:/blog/public/2019/10/22/一周年纪念/32.jpg","14d40f93919dc0c17c38c039f8a35cb1"],["D:/blog/public/2019/10/22/一周年纪念/33.jpg","4e615748f58a6f23602d4a7806e6422c"],["D:/blog/public/2019/10/22/一周年纪念/5.png","9941823b1349fbb055ca615b6e3d54de"],["D:/blog/public/2019/10/22/一周年纪念/6.jpg","1266f0dcd054f6bd16fb50de12b43b26"],["D:/blog/public/2019/10/22/一周年纪念/8.png","6e4467f160ae2401f89d866bd1e7da2d"],["D:/blog/public/2019/10/22/一周年纪念/9.jpg","1e90bb672bca5590d1a4e79e97431fb8"],["D:/blog/public/2019/10/22/一周年纪念/index.html","53f86cc2f1b8059221046376007efc31"],["D:/blog/public/2019/10/25/PAT-1142/index.html","662550ec3f370b8d5384850ef93cf54a"],["D:/blog/public/2019/10/26/刷题技巧整理/index.html","f92402778a1fc94742f226bd2161595c"],["D:/blog/public/2019/10/26/算法笔记阅读/1.png","92150d33ef3bd6c65a9aaced8376a92c"],["D:/blog/public/2019/10/26/算法笔记阅读/2.png","cfccd02ede828f058d6097a5ea36231e"],["D:/blog/public/2019/10/26/算法笔记阅读/3.png","8829fd0644f4aa7c563ed6700448d1a5"],["D:/blog/public/2019/10/26/算法笔记阅读/4.png","9cd3a2412ecc95904bc4fa988104670d"],["D:/blog/public/2019/10/26/算法笔记阅读/5.png","2d944484cd483c4328cf23f83f283df4"],["D:/blog/public/2019/10/26/算法笔记阅读/6.png","e029e7b61a5b2af8a9adca3fe5c958c7"],["D:/blog/public/2019/10/26/算法笔记阅读/7.png","e3ea1a023a3cd92a0f71600be7356567"],["D:/blog/public/2019/10/26/算法笔记阅读/8.png","6867de9496f219814cfdc9065a3300f5"],["D:/blog/public/2019/10/26/算法笔记阅读/9.png","9edf64d883da58014326c3dfe069972b"],["D:/blog/public/2019/10/26/算法笔记阅读/index.html","de8a0877a04d88d165c34ee13ed132e1"],["D:/blog/public/2019/10/29/PAT-1013/index.html","6f06acf977d75df8b44dd940fe045fcc"],["D:/blog/public/2019/10/29/PAT-1034/index.html","88ade1046828b1892995c24f28c4618c"],["D:/blog/public/2019/10/30/PAT-1021/index.html","7d7eb7a71f449d95cbc46496c5a29b58"],["D:/blog/public/2019/11/03/Mac折腾记录/index.html","f89e670d3bcc3524e4ccf83b02db5eb1"],["D:/blog/public/2019/11/04/VSCode使用/1.png","e8132b252da910da84d0d1ae36572702"],["D:/blog/public/2019/11/04/VSCode使用/2.png","3c8c0b6004e0d69eb0fe084e61359e9f"],["D:/blog/public/2019/11/04/VSCode使用/index.html","f71dbc939ab2cc9f73178b809d421ef5"],["D:/blog/public/2019/11/05/PAT-1107/index.html","bda21c63bb6410927f91097bd12fa4af"],["D:/blog/public/2019/11/05/文件自动分类脚本/index.html","7d0d1b36cf8ccc70be81e9ae0561cebc"],["D:/blog/public/2019/11/06/PAT-1114/index.html","638a027495bef8274b8deb078b00096f"],["D:/blog/public/2019/11/06/python基础/index.html","8e6fd96b2c37bf049cf08c31c554d16c"],["D:/blog/public/2019/11/07/git学习/0.jpg","701e02bf0b2d71ab51b7e2b6aa973d52"],["D:/blog/public/2019/11/07/git学习/1.png","2adbbdf8d8bab5606af6279ef5612da2"],["D:/blog/public/2019/11/07/git学习/2.png","c6f039420a0f851eb424883511ac4e2f"],["D:/blog/public/2019/11/07/git学习/3.png","06f0d7d34075653ba25a18ea0fea8b7d"],["D:/blog/public/2019/11/07/git学习/4.png","cb8a9c11c8fd1326260bbc7c2c6a62ac"],["D:/blog/public/2019/11/07/git学习/index.html","5ad34a4c2f8ba582029f2d438ae87890"],["D:/blog/public/2019/11/13/PAT-1025/index.html","826fbb11b3be456d7ac819f3c799324f"],["D:/blog/public/2019/11/14/H和T的成长回忆录/index.html","b8316f42d9e47f91e9bb3fdc0470cbe4"],["D:/blog/public/2019/11/14/PAT-1069/index.html","596e83ee5f48a4b711684082957abe90"],["D:/blog/public/2019/11/14/PAT-1093/index.html","186234c0a13755e3fa64fcce6dfaea89"],["D:/blog/public/2019/11/14/PAT-1101/index.html","648c9c227358a861a29aa0d77e440625"],["D:/blog/public/2019/11/14/blog分类规划/index.html","3ad5bbb1f9d9a5dc16e71a24d2fabab3"],["D:/blog/public/2019/11/14/北京游感/index.html","997457c95870cc8ad6df14f968c331d1"],["D:/blog/public/2019/11/14/热爱生命/1.png","0b865b5a8c5ffc65ab33586bb50513b7"],["D:/blog/public/2019/11/14/热爱生命/index.html","85d2b5a750d5e92e071e9e6b9a92d51c"],["D:/blog/public/2019/11/14/随想-1/index.html","6762865a4c9165b435c110bac3d6a8fe"],["D:/blog/public/2019/11/14/随想-2/1.png","ba65a9551263d1c1cb9c1870d1ee8a29"],["D:/blog/public/2019/11/14/随想-2/index.html","714ac64c7f96b9901583b369066f8cce"],["D:/blog/public/2019/11/15/PAT-1032/index.html","2515096c9d088424012c41ea0ae8632f"],["D:/blog/public/2019/11/15/PAT-1059/index.html","4e23db50dc854a7d0e3e42077591215e"],["D:/blog/public/2019/11/15/去南京/1.png","53d7c944f9a7326b86bd734f9d2d967c"],["D:/blog/public/2019/11/15/去南京/2.png","17208773d5c2ee30d094a597d4a8b9b6"],["D:/blog/public/2019/11/15/去南京/index.html","4b19e7e5535109545614f37f5a1b1575"],["D:/blog/public/2019/11/16/PAT-1052/index.html","38ff350d43d119ea4dd1959afc2d60f3"],["D:/blog/public/2019/11/16/连通块个数/index.html","f3a179c7c684e3fba930045e7ddf0806"],["D:/blog/public/2019/11/16/迷宫问题/index.html","da5ce4b467390fa6699505f74a549fb7"],["D:/blog/public/2019/11/17/Listening-training/index.html","bd417a07e4b7bd54c56b9849547b9665"],["D:/blog/public/2019/11/17/PAT-1020/index.html","8f1ef69b3ab7238cf97999c21516be00"],["D:/blog/public/2019/11/18/随想-3/index.html","c42a4fda1e12c88491f5952c0596a62d"],["D:/blog/public/2019/11/19/PAT-1053/index.html","0d36a39884e47bc6f9d03d2139932722"],["D:/blog/public/2019/11/19/Win环境配置/1.png","c32e495ccfeb914740d76fdf84b2fda3"],["D:/blog/public/2019/11/19/Win环境配置/2.png","4cb6305070b92541ac6749688e6ddec6"],["D:/blog/public/2019/11/19/Win环境配置/3.png","da3b800653c68b7c463ee0b5598055e9"],["D:/blog/public/2019/11/19/Win环境配置/index.html","5994a7e5aba879d174417f2a9099c2bd"],["D:/blog/public/2019/11/20/PAT-1043/index.html","080d6926d7c866d24d414166780e5f52"],["D:/blog/public/2019/11/22/PAT-1003/1.png","6fd7e183ac46df7222a1d2a2a4c9b12a"],["D:/blog/public/2019/11/22/PAT-1003/index.html","0f85777ebd8dd478bb2f69d35b4dfb8b"],["D:/blog/public/2019/11/22/PAT-1018/index.html","ff0c8e82023ad725950ba4437c79900d"],["D:/blog/public/2019/11/22/阅读管理/index.html","d6bd3a48c479a7f21e5c3a3be3503995"],["D:/blog/public/2019/11/23/ExcelToMarkdown/index.html","6d95738dd02cdb27f8335ac6c0a0b568"],["D:/blog/public/2019/11/23/PAT-1030/1.png","aecb20c8058c5af85e249217e120debe"],["D:/blog/public/2019/11/23/PAT-1030/index.html","a86b127c40e4bfc0e1b26d2af8063b2b"],["D:/blog/public/2019/11/23/四级选择填空高频词/index.html","c68b5a6dfda0ce6fd49feb97929af034"],["D:/blog/public/2019/11/24/PAT-1087/index.html","a21d43aa0d109f36fae3b39e589ffe85"],["D:/blog/public/archives/2019/10/index.html","54316779420e7da2097709048e661603"],["D:/blog/public/archives/2019/11/index.html","f815eff455e2c6e26266234eb0fceb38"],["D:/blog/public/archives/2019/11/page/2/index.html","beb58d2f18498d77d1e5ce9edba9f3b6"],["D:/blog/public/archives/2019/11/page/3/index.html","9c78bfd8bcee412d95ff63231c1c3850"],["D:/blog/public/archives/2019/11/page/4/index.html","ed0b88c2050e65e3ad0c875e725e5ecd"],["D:/blog/public/archives/2019/index.html","4276eaa82a41ea3dcba3691b45fe658e"],["D:/blog/public/archives/2019/page/2/index.html","dca2b104355617dd2db47b00b594aba1"],["D:/blog/public/archives/2019/page/3/index.html","89b9359f04617536a79c517ec18bfa9c"],["D:/blog/public/archives/2019/page/4/index.html","f8f23ff29bc58a42843debaf248dffe7"],["D:/blog/public/archives/2019/page/5/index.html","d464a0e44a0e8f8810a691734f4c415e"],["D:/blog/public/archives/index.html","5df08f0cdc4a9abc289976aad59032e7"],["D:/blog/public/archives/page/2/index.html","e210410071ccfc72814b561fb6b784b0"],["D:/blog/public/archives/page/3/index.html","51e9d412f61dae04c82c9cc799efb88f"],["D:/blog/public/archives/page/4/index.html","ace19f755c1036c74bc7f0ef321ee47e"],["D:/blog/public/archives/page/5/index.html","0fcb71dabb096efa7e7675755e042fac"],["D:/blog/public/categories/code/index.html","9682ffd2023b6ea19b0676759ab5c467"],["D:/blog/public/categories/code/page/2/index.html","80c2bac88a7b70ddf0d97b8d60adc189"],["D:/blog/public/categories/code/page/3/index.html","f4ebfaedaab20e510cf17747a80ed33d"],["D:/blog/public/categories/index.html","ac43a517b2d16e8b456c01a5aebe451b"],["D:/blog/public/categories/life/index.html","b46c1c8262a8cf7397174e28fd6f47d5"],["D:/blog/public/categories/life/page/2/index.html","324854ecf81d137c0a404ef45643c4ce"],["D:/blog/public/categories/note/index.html","561b8aef43f45894f42423a1fbf9394f"],["D:/blog/public/css/index.css","9911b20a2e31dc1aa98c48e483335237"],["D:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/blog/public/index.html","35c948da44bdac2586b12a4d05f1c0d1"],["D:/blog/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["D:/blog/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["D:/blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/blog/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["D:/blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/blog/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/blog/public/page/2/index.html","89894787d356744ade56649adb538fbc"],["D:/blog/public/page/3/index.html","fc1dc348b1ccb70538f851b004e05a59"],["D:/blog/public/page/4/index.html","fd68e9685da0dd0315625cc724b89dee"],["D:/blog/public/page/5/index.html","cd98dfead2745e794ac4e62a43afbbdf"],["D:/blog/public/tags/PAT/index.html","ecdb585aa7fb61d26c02841993c2aa18"],["D:/blog/public/tags/PAT/page/2/index.html","bf8b27c2dab3f85a9afebcf1ebe32d1b"],["D:/blog/public/tags/bfs/index.html","e3321499b1f55a13b33a38973b3570de"],["D:/blog/public/tags/dfs/index.html","4dc46657226451afd747ff25339cd65a"],["D:/blog/public/tags/dijkstra/index.html","e2d80b16e9a2d0ecf25323e5dac16106"],["D:/blog/public/tags/english/index.html","86fd076993acc3d8a0ac974e88f71eec"],["D:/blog/public/tags/git/index.html","44aa24098182d957977eb54b8ae289da"],["D:/blog/public/tags/index.html","857a96695f5869d73693e41aba0a4037"],["D:/blog/public/tags/plan/index.html","88c0699b8db3e902f4a0820596298666"],["D:/blog/public/tags/python/index.html","5d80e3b7d69461e7e2e11bf1c5c40602"],["D:/blog/public/tags/python语法/index.html","fd4e8c2d8860de0512c203383997c8cd"],["D:/blog/public/tags/travel/index.html","19267a80e9b16e9a6ce1bcf8bc289906"],["D:/blog/public/tags/win/index.html","6109d57c2fe870b0c32d2aac4df360af"],["D:/blog/public/tags/图/index.html","8caf35eb89d32b7d28188c22205b0956"],["D:/blog/public/tags/图论/index.html","717e8769a84845b4586a3eea1001bb4d"],["D:/blog/public/tags/字符串/index.html","311267e19650dee3174ab1db4728a32b"],["D:/blog/public/tags/并查集/index.html","95f56d49bfe9d5867a981088144a5d0c"],["D:/blog/public/tags/排序/index.html","e06f4b55cab614ba861292a74f122f70"],["D:/blog/public/tags/数学/index.html","12108ede021dcc3e1d05900f78964803"],["D:/blog/public/tags/整理/index.html","0c573065e919b7412d3445a995acbad4"],["D:/blog/public/tags/文本编辑/index.html","1ca594a9b077fa8cbcaed868d85641d3"],["D:/blog/public/tags/树/index.html","ba7a9f68f614be9d6ce0365439ca2082"],["D:/blog/public/tags/竞赛/index.html","60cd0f4b86d9271f80e762d4a813212d"],["D:/blog/public/tags/纪念日/index.html","589b84b02170fc5d25b62f712645a71e"],["D:/blog/public/tags/脚本/index.html","9ede4aed9669cbc3a1194f3518f0f71b"],["D:/blog/public/tags/链表/index.html","659385322b300f77639fb5d4da13d43d"]];
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







