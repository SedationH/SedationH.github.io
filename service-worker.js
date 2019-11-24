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

var precacheConfig = [["D:/blog/public/2019/10/22/Markdown语法学习/index.html","fce01c593461885ac07ae334c1f479e8"],["D:/blog/public/2019/10/22/PAT-1122/index.html","f8838c24dee13311a3767cdbe1d8280a"],["D:/blog/public/2019/10/22/PAT计划/index.html","3b0150252c40a3a1c2fd81ef3f7a7db7"],["D:/blog/public/2019/10/22/一周年纪念/1.png","b922b2b5d70da4521554e351b799eafa"],["D:/blog/public/2019/10/22/一周年纪念/10.jpg","4ee6bc37ff3698fa570a938b2bd3cd8f"],["D:/blog/public/2019/10/22/一周年纪念/11.jpg","1eb8883718238d92b64c1d22aa0ad727"],["D:/blog/public/2019/10/22/一周年纪念/12.jpg","6f72da1105ecd7baec4b4ae55a95c4e5"],["D:/blog/public/2019/10/22/一周年纪念/13.png","9a7c7b6afec674eb08e5607057ecadf9"],["D:/blog/public/2019/10/22/一周年纪念/14.jpg","1c2a7133e420bc4b898cff3c3a67c3cd"],["D:/blog/public/2019/10/22/一周年纪念/15.png","9c39368c806a0cfa2e7d709132df9056"],["D:/blog/public/2019/10/22/一周年纪念/16.png","35d0b5720714b6bdc6d3a406196eff55"],["D:/blog/public/2019/10/22/一周年纪念/17.png","9e7284fb82f396c4810ef96f1b4fe4f8"],["D:/blog/public/2019/10/22/一周年纪念/19.jpg","8a64b1eb0e09baf650be35c430e1e35b"],["D:/blog/public/2019/10/22/一周年纪念/20.jpg","0903b15ae3093a3532017dc07d32e3ac"],["D:/blog/public/2019/10/22/一周年纪念/21.jpg","22b445ee7acb7233b44fc4a25d3ae663"],["D:/blog/public/2019/10/22/一周年纪念/22.jpg","efc11d26abeff3b665daa5d9f2391f15"],["D:/blog/public/2019/10/22/一周年纪念/23.png","234580cc98d43a9b6e76eea8ec82470d"],["D:/blog/public/2019/10/22/一周年纪念/24.png","2ba8d6c8d4be23e8c33d3fc0f4b4b4d6"],["D:/blog/public/2019/10/22/一周年纪念/25.png","5ab1f6e4156096f8ba58f66255bc3c0a"],["D:/blog/public/2019/10/22/一周年纪念/27.jpg","836de2238b33e122dfca7d9da44f27e3"],["D:/blog/public/2019/10/22/一周年纪念/28.png","9e80a6a4a5ddebfd511f53ea1e8267b0"],["D:/blog/public/2019/10/22/一周年纪念/29.jpg","04f2ec6d41985b0ed3e44f2361c7899f"],["D:/blog/public/2019/10/22/一周年纪念/3.jpg","412cd99e96d03326a84f0c0a84d1ec10"],["D:/blog/public/2019/10/22/一周年纪念/30.png","befd1520ca9f8db304c88e9d88278df8"],["D:/blog/public/2019/10/22/一周年纪念/31.png","c18c6d47b84e55829bcfe8e11fb63729"],["D:/blog/public/2019/10/22/一周年纪念/32.jpg","14d40f93919dc0c17c38c039f8a35cb1"],["D:/blog/public/2019/10/22/一周年纪念/33.jpg","4e615748f58a6f23602d4a7806e6422c"],["D:/blog/public/2019/10/22/一周年纪念/5.png","9941823b1349fbb055ca615b6e3d54de"],["D:/blog/public/2019/10/22/一周年纪念/6.jpg","1266f0dcd054f6bd16fb50de12b43b26"],["D:/blog/public/2019/10/22/一周年纪念/8.png","6e4467f160ae2401f89d866bd1e7da2d"],["D:/blog/public/2019/10/22/一周年纪念/9.jpg","1e90bb672bca5590d1a4e79e97431fb8"],["D:/blog/public/2019/10/22/一周年纪念/index.html","a84f79e680d0733da46ec1992cbdf1eb"],["D:/blog/public/2019/10/25/PAT-1142/index.html","d39dac111b0f8e598da74711b4e5604f"],["D:/blog/public/2019/10/26/刷题技巧整理/index.html","dbcfdab1533ebd8ab2e754e23bd578c8"],["D:/blog/public/2019/10/26/算法笔记阅读/1.png","92150d33ef3bd6c65a9aaced8376a92c"],["D:/blog/public/2019/10/26/算法笔记阅读/2.png","cfccd02ede828f058d6097a5ea36231e"],["D:/blog/public/2019/10/26/算法笔记阅读/3.png","8829fd0644f4aa7c563ed6700448d1a5"],["D:/blog/public/2019/10/26/算法笔记阅读/4.png","9cd3a2412ecc95904bc4fa988104670d"],["D:/blog/public/2019/10/26/算法笔记阅读/5.png","2d944484cd483c4328cf23f83f283df4"],["D:/blog/public/2019/10/26/算法笔记阅读/6.png","e029e7b61a5b2af8a9adca3fe5c958c7"],["D:/blog/public/2019/10/26/算法笔记阅读/7.png","e3ea1a023a3cd92a0f71600be7356567"],["D:/blog/public/2019/10/26/算法笔记阅读/8.png","6867de9496f219814cfdc9065a3300f5"],["D:/blog/public/2019/10/26/算法笔记阅读/9.png","9edf64d883da58014326c3dfe069972b"],["D:/blog/public/2019/10/26/算法笔记阅读/index.html","9da2a8d4df2409380a7e0a4cc10d80e3"],["D:/blog/public/2019/10/29/PAT-1013/index.html","2684f2b7715d4a65c07c452a78de1cb9"],["D:/blog/public/2019/10/29/PAT-1034/index.html","dd3888153a0a3d7be9d8379d3cd10a42"],["D:/blog/public/2019/10/30/PAT-1021/index.html","923106e9437267ecb18aba7d6d52ccb0"],["D:/blog/public/2019/11/03/Mac折腾记录/index.html","c07023c30d6afdbf2a94f92917c102b2"],["D:/blog/public/2019/11/04/VSCode使用/1.png","e8132b252da910da84d0d1ae36572702"],["D:/blog/public/2019/11/04/VSCode使用/2.png","3c8c0b6004e0d69eb0fe084e61359e9f"],["D:/blog/public/2019/11/04/VSCode使用/index.html","c0109db21d9cd93cfd01b96dd823627a"],["D:/blog/public/2019/11/05/PAT-1107/index.html","56d4b1c7a1be46b5155c3c45cd402d72"],["D:/blog/public/2019/11/05/文件自动分类脚本/index.html","851ddaa0a648bb505ed64d65ee427f44"],["D:/blog/public/2019/11/06/PAT-1114/index.html","1766d06d92ab755e22ba80257a7e926a"],["D:/blog/public/2019/11/06/python基础/index.html","bab63faa41ad477b6d2333d8d0caded6"],["D:/blog/public/2019/11/07/git学习/0.jpg","701e02bf0b2d71ab51b7e2b6aa973d52"],["D:/blog/public/2019/11/07/git学习/1.png","2adbbdf8d8bab5606af6279ef5612da2"],["D:/blog/public/2019/11/07/git学习/2.png","c6f039420a0f851eb424883511ac4e2f"],["D:/blog/public/2019/11/07/git学习/3.png","06f0d7d34075653ba25a18ea0fea8b7d"],["D:/blog/public/2019/11/07/git学习/4.png","cb8a9c11c8fd1326260bbc7c2c6a62ac"],["D:/blog/public/2019/11/07/git学习/index.html","2a2fd8d39bac8ff13afff4df3ed47a16"],["D:/blog/public/2019/11/13/PAT-1025/index.html","d3b01b610764d9903bfeccdb59a323e6"],["D:/blog/public/2019/11/14/H和T的成长回忆录/index.html","e13174df9ddcc9e90e6d3f38651dd83f"],["D:/blog/public/2019/11/14/PAT-1069/index.html","eea595541c485b0981db8822c8499079"],["D:/blog/public/2019/11/14/PAT-1093/index.html","46d2edf7f16fd3dd0d8deb732fcaa4b2"],["D:/blog/public/2019/11/14/PAT-1101/index.html","405ef51cb1a590a06c613aed9e2e855e"],["D:/blog/public/2019/11/14/blog分类规划/index.html","aa9cd731e8fc8b1f400fc0444ab3ee30"],["D:/blog/public/2019/11/14/北京游感/index.html","a27dcf5e2066bc875a4ac27cfb2baa6d"],["D:/blog/public/2019/11/14/热爱生命/1.png","0b865b5a8c5ffc65ab33586bb50513b7"],["D:/blog/public/2019/11/14/热爱生命/index.html","28fc67e394072543d7d30b0c18d5382d"],["D:/blog/public/2019/11/14/随想-1/index.html","d28aaee7c378e4af5e825687ba03daa5"],["D:/blog/public/2019/11/14/随想-2/1.png","ba65a9551263d1c1cb9c1870d1ee8a29"],["D:/blog/public/2019/11/14/随想-2/index.html","aad55858406a6e82a0bdeb6dd6840fbb"],["D:/blog/public/2019/11/15/PAT-1032/index.html","49578c323e717c0411bfc0737dfd31ac"],["D:/blog/public/2019/11/15/PAT-1059/index.html","f8548e7796b36874744385cbfc4cfc12"],["D:/blog/public/2019/11/15/去南京/1.png","53d7c944f9a7326b86bd734f9d2d967c"],["D:/blog/public/2019/11/15/去南京/2.png","17208773d5c2ee30d094a597d4a8b9b6"],["D:/blog/public/2019/11/15/去南京/index.html","59a53db5373e389aa46767a445ded37f"],["D:/blog/public/2019/11/16/PAT-1052/index.html","4273c2e72936cc3d404660ab8f382444"],["D:/blog/public/2019/11/16/连通块个数/index.html","c93f8bf9a7f0a2e748d3780f1195b3ef"],["D:/blog/public/2019/11/16/迷宫问题/index.html","e4db735f24a4abb280ee9107eb9bb3ce"],["D:/blog/public/2019/11/17/Listening-training/index.html","4f1f404f45a5fb8c6eaeffabcf4b9c28"],["D:/blog/public/2019/11/17/PAT-1020/index.html","74f9390bcf036de68086cc0a41101385"],["D:/blog/public/2019/11/18/随想-3/index.html","d850d5727bdbc64059520ba44fb5c525"],["D:/blog/public/2019/11/19/PAT-1053/index.html","af84a7ee0d5f066013429a92bc0773c4"],["D:/blog/public/2019/11/19/Win环境配置/1.png","c32e495ccfeb914740d76fdf84b2fda3"],["D:/blog/public/2019/11/19/Win环境配置/2.png","4cb6305070b92541ac6749688e6ddec6"],["D:/blog/public/2019/11/19/Win环境配置/3.png","da3b800653c68b7c463ee0b5598055e9"],["D:/blog/public/2019/11/19/Win环境配置/index.html","f3d315fa606ebef12180c1b8e36d45b8"],["D:/blog/public/2019/11/20/PAT-1043/index.html","d2dbb4cc57af7d524e4fbe63888a9817"],["D:/blog/public/2019/11/22/PAT-1003/1.png","6fd7e183ac46df7222a1d2a2a4c9b12a"],["D:/blog/public/2019/11/22/PAT-1003/index.html","fe4f8a476bb8d2447134c66dfaa43696"],["D:/blog/public/2019/11/22/PAT-1018/index.html","bc49b1610adef75775cc5e5efa9a8d63"],["D:/blog/public/2019/11/22/阅读管理/index.html","c24961b17239949c32550e00e251eca5"],["D:/blog/public/2019/11/23/ExcelToMarkdown/index.html","130aa812b649219d23e7fa25d22182db"],["D:/blog/public/2019/11/23/PAT-1030/1.png","aecb20c8058c5af85e249217e120debe"],["D:/blog/public/2019/11/23/PAT-1030/index.html","20b3c4c8c09f5b31d7cdf6b7a3463236"],["D:/blog/public/2019/11/23/四级选择填空高频词/index.html","37c7cf7884a1f74213460b8f9f7dea36"],["D:/blog/public/2019/11/24/PAT-1004/index.html","9994284cbd9bc27ccc5f5757f281a1ce"],["D:/blog/public/2019/11/24/PAT-1087/2.png","3a8111c12681b201c59e6a04840cf400"],["D:/blog/public/2019/11/24/PAT-1087/index.html","a690ac06b6c219eb89c4ae36eaca6b64"],["D:/blog/public/archives/2019/10/index.html","7721884a9679e82b89503118e79a51d6"],["D:/blog/public/archives/2019/11/index.html","2bb4831a5307a8e961835bdc2098837d"],["D:/blog/public/archives/2019/11/page/2/index.html","cad9421056d402dcd6a185f0613e9b99"],["D:/blog/public/archives/2019/11/page/3/index.html","27cc9835a5bf1c20d84b474c298f0eab"],["D:/blog/public/archives/2019/11/page/4/index.html","8c6092d51d2d6c736caa911e580a65bf"],["D:/blog/public/archives/2019/index.html","3e74d5dfd8606751ea1ecb2211c7829f"],["D:/blog/public/archives/2019/page/2/index.html","6d788c599bb7643e0261116655a3ec6b"],["D:/blog/public/archives/2019/page/3/index.html","15ac227682a5c2b07afc6d1620c4a22a"],["D:/blog/public/archives/2019/page/4/index.html","e72983278f3e60de741413d7b73e3240"],["D:/blog/public/archives/2019/page/5/index.html","77bc9df6967f7a4d63a88b5c961b3c21"],["D:/blog/public/archives/index.html","f8a7c5fe69666e15f8a6db4e35ecb58f"],["D:/blog/public/archives/page/2/index.html","6014fecc43224cca78ef101e064aecad"],["D:/blog/public/archives/page/3/index.html","537cf7b58906f201a33b7fb5d7790623"],["D:/blog/public/archives/page/4/index.html","59303320debd0fc6ce6d5c8a5dff2cf2"],["D:/blog/public/archives/page/5/index.html","b5f7964306fad3b5a9ebba4b9b75d426"],["D:/blog/public/categories/code/index.html","cd70c243812496d81e8a0f7ac2ad0c79"],["D:/blog/public/categories/code/page/2/index.html","6eb2fd220c350429d5d19cc4ecc19694"],["D:/blog/public/categories/code/page/3/index.html","439d6c754886679681f16878ff1bc9dd"],["D:/blog/public/categories/index.html","d4bfb8bf2a6d1650e5491c4289eae35f"],["D:/blog/public/categories/life/index.html","714184acf3b11ec5afc30951064bece7"],["D:/blog/public/categories/life/page/2/index.html","191f0035aff7158ecdb836364f54c317"],["D:/blog/public/categories/note/index.html","7573aa9cc742b3a05ef487f929781a22"],["D:/blog/public/css/index.css","9911b20a2e31dc1aa98c48e483335237"],["D:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/blog/public/index.html","ae04967bfb120b97ac0da16cce304a7b"],["D:/blog/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["D:/blog/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["D:/blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/blog/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["D:/blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/blog/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/blog/public/page/2/index.html","f2b1c13331e8da9601106fc2f715e028"],["D:/blog/public/page/3/index.html","346efaf3477059e78c144b91b5d5ea0f"],["D:/blog/public/page/4/index.html","5a7691dba02e7d77d26939606984ab4d"],["D:/blog/public/page/5/index.html","4e219edf06ce207bdbb3c8d7cc5fbbd5"],["D:/blog/public/tags/PAT/index.html","3fa78507a4accb19c18b93cad4f5a9a2"],["D:/blog/public/tags/PAT/page/2/index.html","e4d58d41b25e5c835a241d8bcd46c0b8"],["D:/blog/public/tags/bfs/index.html","5dcec7302275454d070526686208c051"],["D:/blog/public/tags/dfs/index.html","703c27dcf65b8d1907776df76b1f52fd"],["D:/blog/public/tags/dijkstra/index.html","98c64894a5e5d9e7b1120104cd9c14ff"],["D:/blog/public/tags/english/index.html","b0e56ebdabdddffe06e0f986d00d79e6"],["D:/blog/public/tags/git/index.html","0636301763445b2e493882707e7e9a3c"],["D:/blog/public/tags/index.html","7570ec3e9d846164517a135991641aa4"],["D:/blog/public/tags/plan/index.html","6dae14400b22652ea5c23eb9b0e7a318"],["D:/blog/public/tags/python/index.html","82ef32b23c8966fe7ad88a6521a15219"],["D:/blog/public/tags/python语法/index.html","cd707d5e83de9e59f78b11a96f3bdca8"],["D:/blog/public/tags/travel/index.html","d9cf23a8df3827aa04cb4a5b09831e6f"],["D:/blog/public/tags/win/index.html","e8c2eb5eb3ccc520034309460785d9e7"],["D:/blog/public/tags/图/index.html","ac9f08a7bb04549a04ead5d3ce2d49b3"],["D:/blog/public/tags/图论/index.html","6ffe0a9422a4b7df360f90c24648d0df"],["D:/blog/public/tags/字符串/index.html","c4fbd8288af6289578e27159df1baef0"],["D:/blog/public/tags/并查集/index.html","b058dd29ac1d29501bfdad53fe9830e1"],["D:/blog/public/tags/排序/index.html","5c44cc1ec9a991d3018d88eea1bce811"],["D:/blog/public/tags/数学/index.html","3db4c97b73b60265db8eb8e5a701c839"],["D:/blog/public/tags/整理/index.html","17cbe0cc36d901ab58f17a37eb203fe9"],["D:/blog/public/tags/文本编辑/index.html","a98e4a15072443371cf00f7e6d8e38cf"],["D:/blog/public/tags/树/index.html","dca32d2fa79bb9ac0709db68821c120f"],["D:/blog/public/tags/竞赛/index.html","aa255a8f4f390f50a79bebef1e5fc28f"],["D:/blog/public/tags/纪念日/index.html","dc40d32bad70226b277e4b1a176d4737"],["D:/blog/public/tags/脚本/index.html","66bbb748a19ffdce574e2c7594765abe"],["D:/blog/public/tags/链表/index.html","da76b9dfa1a60ddd00de806eff17a60b"]];
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







