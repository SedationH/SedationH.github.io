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

var precacheConfig = [["D:/blog/public/2019/10/22/Markdown语法学习/index.html","88ad888d6c7dc0cb7cc82cc0e89e45e2"],["D:/blog/public/2019/10/22/PAT-1122/index.html","da2351ebb6b138f9ae1d8b1875a553f7"],["D:/blog/public/2019/10/22/PAT计划/index.html","cfc1b85008f1c7e2978f060161f560f6"],["D:/blog/public/2019/10/22/一周年纪念/1.png","b922b2b5d70da4521554e351b799eafa"],["D:/blog/public/2019/10/22/一周年纪念/10.jpg","4ee6bc37ff3698fa570a938b2bd3cd8f"],["D:/blog/public/2019/10/22/一周年纪念/11.jpg","1eb8883718238d92b64c1d22aa0ad727"],["D:/blog/public/2019/10/22/一周年纪念/12.jpg","6f72da1105ecd7baec4b4ae55a95c4e5"],["D:/blog/public/2019/10/22/一周年纪念/13.png","9a7c7b6afec674eb08e5607057ecadf9"],["D:/blog/public/2019/10/22/一周年纪念/14.jpg","1c2a7133e420bc4b898cff3c3a67c3cd"],["D:/blog/public/2019/10/22/一周年纪念/15.png","9c39368c806a0cfa2e7d709132df9056"],["D:/blog/public/2019/10/22/一周年纪念/16.png","35d0b5720714b6bdc6d3a406196eff55"],["D:/blog/public/2019/10/22/一周年纪念/17.png","9e7284fb82f396c4810ef96f1b4fe4f8"],["D:/blog/public/2019/10/22/一周年纪念/19.jpg","8a64b1eb0e09baf650be35c430e1e35b"],["D:/blog/public/2019/10/22/一周年纪念/20.jpg","0903b15ae3093a3532017dc07d32e3ac"],["D:/blog/public/2019/10/22/一周年纪念/21.jpg","22b445ee7acb7233b44fc4a25d3ae663"],["D:/blog/public/2019/10/22/一周年纪念/22.jpg","efc11d26abeff3b665daa5d9f2391f15"],["D:/blog/public/2019/10/22/一周年纪念/23.png","234580cc98d43a9b6e76eea8ec82470d"],["D:/blog/public/2019/10/22/一周年纪念/24.png","2ba8d6c8d4be23e8c33d3fc0f4b4b4d6"],["D:/blog/public/2019/10/22/一周年纪念/25.png","5ab1f6e4156096f8ba58f66255bc3c0a"],["D:/blog/public/2019/10/22/一周年纪念/27.jpg","836de2238b33e122dfca7d9da44f27e3"],["D:/blog/public/2019/10/22/一周年纪念/28.png","9e80a6a4a5ddebfd511f53ea1e8267b0"],["D:/blog/public/2019/10/22/一周年纪念/29.jpg","04f2ec6d41985b0ed3e44f2361c7899f"],["D:/blog/public/2019/10/22/一周年纪念/3.jpg","412cd99e96d03326a84f0c0a84d1ec10"],["D:/blog/public/2019/10/22/一周年纪念/30.png","befd1520ca9f8db304c88e9d88278df8"],["D:/blog/public/2019/10/22/一周年纪念/31.png","c18c6d47b84e55829bcfe8e11fb63729"],["D:/blog/public/2019/10/22/一周年纪念/32.jpg","14d40f93919dc0c17c38c039f8a35cb1"],["D:/blog/public/2019/10/22/一周年纪念/33.jpg","4e615748f58a6f23602d4a7806e6422c"],["D:/blog/public/2019/10/22/一周年纪念/5.png","9941823b1349fbb055ca615b6e3d54de"],["D:/blog/public/2019/10/22/一周年纪念/6.jpg","1266f0dcd054f6bd16fb50de12b43b26"],["D:/blog/public/2019/10/22/一周年纪念/8.png","6e4467f160ae2401f89d866bd1e7da2d"],["D:/blog/public/2019/10/22/一周年纪念/9.jpg","1e90bb672bca5590d1a4e79e97431fb8"],["D:/blog/public/2019/10/22/一周年纪念/index.html","8988df823fb865410604b577b8a4b9cd"],["D:/blog/public/2019/10/25/PAT-1142/index.html","0bd49cdc2fbcd2229ad41296bf75519d"],["D:/blog/public/2019/10/26/刷题技巧整理/index.html","d44abd72c7482e34a83e7349c6ad5feb"],["D:/blog/public/2019/10/26/算法笔记阅读/1.png","92150d33ef3bd6c65a9aaced8376a92c"],["D:/blog/public/2019/10/26/算法笔记阅读/2.png","cfccd02ede828f058d6097a5ea36231e"],["D:/blog/public/2019/10/26/算法笔记阅读/3.png","8829fd0644f4aa7c563ed6700448d1a5"],["D:/blog/public/2019/10/26/算法笔记阅读/4.png","9cd3a2412ecc95904bc4fa988104670d"],["D:/blog/public/2019/10/26/算法笔记阅读/5.png","2d944484cd483c4328cf23f83f283df4"],["D:/blog/public/2019/10/26/算法笔记阅读/6.png","e029e7b61a5b2af8a9adca3fe5c958c7"],["D:/blog/public/2019/10/26/算法笔记阅读/7.png","e3ea1a023a3cd92a0f71600be7356567"],["D:/blog/public/2019/10/26/算法笔记阅读/8.png","6867de9496f219814cfdc9065a3300f5"],["D:/blog/public/2019/10/26/算法笔记阅读/9.png","9edf64d883da58014326c3dfe069972b"],["D:/blog/public/2019/10/26/算法笔记阅读/index.html","a246b2a582e4b97d13b99060b0892747"],["D:/blog/public/2019/10/29/PAT-1013/index.html","5358d1b54ec6da9376e036663f381db7"],["D:/blog/public/2019/10/29/PAT-1034/index.html","04e435b374adfa623936453e1314cbed"],["D:/blog/public/2019/10/30/PAT-1021/index.html","4310521454a2dd648bad75b1bca17c8f"],["D:/blog/public/2019/11/03/Mac折腾记录/index.html","b6ed6df551fb33bdf4b1a662ec9b04ff"],["D:/blog/public/2019/11/04/VSCode使用/1.png","e8132b252da910da84d0d1ae36572702"],["D:/blog/public/2019/11/04/VSCode使用/2.png","3c8c0b6004e0d69eb0fe084e61359e9f"],["D:/blog/public/2019/11/04/VSCode使用/index.html","81479415fc33c95cc863641dab8b30ea"],["D:/blog/public/2019/11/05/PAT-1107/index.html","6743d3dc4337ccd95ca2273dbb2e0cd5"],["D:/blog/public/2019/11/05/文件自动分类脚本/index.html","e3355b9b3c35c7e303fb385c0fc69cb4"],["D:/blog/public/2019/11/06/PAT-1114/index.html","d435c44e202fdae3583f7de3e177fc3a"],["D:/blog/public/2019/11/06/python基础/index.html","b5c9e36b370bcecacfd04e4badcc02d5"],["D:/blog/public/2019/11/07/git学习/0.jpg","701e02bf0b2d71ab51b7e2b6aa973d52"],["D:/blog/public/2019/11/07/git学习/1.png","2adbbdf8d8bab5606af6279ef5612da2"],["D:/blog/public/2019/11/07/git学习/2.png","c6f039420a0f851eb424883511ac4e2f"],["D:/blog/public/2019/11/07/git学习/3.png","06f0d7d34075653ba25a18ea0fea8b7d"],["D:/blog/public/2019/11/07/git学习/4.png","cb8a9c11c8fd1326260bbc7c2c6a62ac"],["D:/blog/public/2019/11/07/git学习/index.html","f198202713f8f9be6617460c3c40072f"],["D:/blog/public/2019/11/13/PAT-1025/index.html","b2f020cd76a01a62cc94735127fdc1cb"],["D:/blog/public/2019/11/14/H和T的成长回忆录/index.html","92201a8ba9a5bf4e81ae8848be0becbb"],["D:/blog/public/2019/11/14/PAT-1069/index.html","44b27aceaa082e91ec7365e47d1a07ae"],["D:/blog/public/2019/11/14/PAT-1093/index.html","7892bc6b63dcf60b3386331c2c249260"],["D:/blog/public/2019/11/14/PAT-1101/index.html","e9f1d03f242e138ea804564f69cc9a93"],["D:/blog/public/2019/11/14/blog分类规划/index.html","bd6cd302613160ee30fedb8a99c58fd5"],["D:/blog/public/2019/11/14/北京游感/index.html","07dc9891229b409bd1f4d12e81c75253"],["D:/blog/public/2019/11/14/热爱生命/1.png","0b865b5a8c5ffc65ab33586bb50513b7"],["D:/blog/public/2019/11/14/热爱生命/index.html","835d3204976e9bd652159045c4a8fce9"],["D:/blog/public/2019/11/14/随想-1/index.html","907d8d57ec7bbf3cb99c2aa31e45c6d6"],["D:/blog/public/2019/11/14/随想-2/1.png","ba65a9551263d1c1cb9c1870d1ee8a29"],["D:/blog/public/2019/11/14/随想-2/index.html","f51860f63be005fb1e655ff3d6bf7b15"],["D:/blog/public/2019/11/15/PAT-1032/index.html","a4183293596cebad6c9eee46b69660fa"],["D:/blog/public/2019/11/15/PAT-1059/index.html","be2d1db8e314a3b54ec35644b0da9c24"],["D:/blog/public/2019/11/15/去南京/1.png","53d7c944f9a7326b86bd734f9d2d967c"],["D:/blog/public/2019/11/15/去南京/2.png","17208773d5c2ee30d094a597d4a8b9b6"],["D:/blog/public/2019/11/15/去南京/index.html","c9854a1aedc02aff962425f33e09e491"],["D:/blog/public/2019/11/16/PAT-1052/index.html","7e17cd64a3819d5d8573fa8361321ef9"],["D:/blog/public/2019/11/16/连通块个数/index.html","d08aa692ecc690e1f3b6fa99bb3e1bcd"],["D:/blog/public/2019/11/16/迷宫问题/index.html","06c4dc248e300a4e412395e896cd6949"],["D:/blog/public/2019/11/17/Listening-training/index.html","bcaeff74343518a8a1ee343434db93fa"],["D:/blog/public/2019/11/17/PAT-1020/index.html","49c042428535408899bf7e43731b05b8"],["D:/blog/public/2019/11/18/随想-3/index.html","06f45431e1295858b3590aa4ab1e5e97"],["D:/blog/public/2019/11/19/PAT-1053/index.html","aa1a02f01cada631295dae4c93b62c43"],["D:/blog/public/2019/11/19/Win环境配置/1.png","c32e495ccfeb914740d76fdf84b2fda3"],["D:/blog/public/2019/11/19/Win环境配置/2.png","4cb6305070b92541ac6749688e6ddec6"],["D:/blog/public/2019/11/19/Win环境配置/3.png","da3b800653c68b7c463ee0b5598055e9"],["D:/blog/public/2019/11/19/Win环境配置/index.html","2aa558d6619500ef1f610e8daf0596bd"],["D:/blog/public/2019/11/20/PAT-1043/index.html","cb0d866d0496a1e5b6e0165bd711c963"],["D:/blog/public/2019/11/22/PAT-1003/1.png","6fd7e183ac46df7222a1d2a2a4c9b12a"],["D:/blog/public/2019/11/22/PAT-1003/index.html","06d4e73b94ab7a153555bffdc42d6da9"],["D:/blog/public/2019/11/22/PAT-1018/index.html","51804ba715d5ad5c37978123aa5ba82c"],["D:/blog/public/2019/11/22/阅读管理/index.html","5f3db0751f18e6e60c028b6caae7638f"],["D:/blog/public/2019/11/23/ExcelToMarkdown/index.html","8003b5a437ee9d5271f1196695658b03"],["D:/blog/public/2019/11/23/PAT-1030/1.png","aecb20c8058c5af85e249217e120debe"],["D:/blog/public/2019/11/23/PAT-1030/index.html","22791404aa66d909e6a3ae2cff0645a9"],["D:/blog/public/2019/11/23/四级选择填空高频词/index.html","680ef498f53b271c4af1aa969ee287a9"],["D:/blog/public/2019/11/24/PAT-1004/index.html","50cf3268915f823afb03c1427828fbdd"],["D:/blog/public/2019/11/24/PAT-1087/2.png","3a8111c12681b201c59e6a04840cf400"],["D:/blog/public/2019/11/24/PAT-1087/index.html","92264437f970b7d603df8d25cbd257dd"],["D:/blog/public/2019/11/25/Markdown编辑和预览/index.html","b8a34c862d242392aeb1ecd6616758b7"],["D:/blog/public/2019/11/25/PAT-1079/index.html","3764d6971dda992d47d8f5571543069a"],["D:/blog/public/2019/11/25/PAT-1086/index.html","f0c37e54d22c66d2fd85de3ba3420625"],["D:/blog/public/2019/11/25/PAT-1090/index.html","5984004a9036dd33f67a38b7bb356372"],["D:/blog/public/2019/11/25/PAT自动签到/1.png","0131d4cb9e40bf24404e33de225bd771"],["D:/blog/public/2019/11/25/PAT自动签到/index.html","ff58a3e0868e1ffe8d226727bbff9dba"],["D:/blog/public/2019/11/25/字幕文件处理/index.html","c250b890c8d963b1b2f5bba9281a1f6e"],["D:/blog/public/2019/11/25/用需求引导学习/index.html","81026b7409ce75a207cdb6c1750c0cf3"],["D:/blog/public/2019/11/26/PAT-1094/index.html","328ce917db96218ed0cf5d1e3a262312"],["D:/blog/public/2019/11/28/PAT-1012/index.html","09746646604cb3482d26f7083b0467b8"],["D:/blog/public/2019/11/28/PAT-1102/index.html","1aac4bda31517932c6bb7f153487c451"],["D:/blog/public/2019/11/28/道路思考/index.html","2f4ecfe8aedee8a9fcf8b2c2da04f4ea"],["D:/blog/public/2019/11/30/随想-4/index.html","2106f363d56c730c6898d09a55438479"],["D:/blog/public/2019/12/02/PAT考前准备/index.html","1f15a99d4911ce055cef37467e01b8fa"],["D:/blog/public/2019/12/03/PAT-1074/index.html","f0cd20d4c38541ccb1c2e249f9148d41"],["D:/blog/public/2019/12/04/PAT-1115/index.html","59c24951d8c7cb5aa55e696df42504a9"],["D:/blog/public/2019/12/10/test/index.html","3aeca19f25e137401a8ebdaa029063c9"],["D:/blog/public/2019/12/16/随想-5/index.html","647bbaf2d5668eda20d4d6c2e1a2cf8f"],["D:/blog/public/2019/12/19/cplus面向对象复习/index.html","2b7bab04186da8f014d99c82a98aafd4"],["D:/blog/public/archives/2019/10/index.html","654ab8d58134b6cabeb86b745fed21a0"],["D:/blog/public/archives/2019/11/index.html","34b7fd6d0702a26dc5d41e6ea54eb9d7"],["D:/blog/public/archives/2019/11/page/2/index.html","32694e9282d9e430b293c8cb59650107"],["D:/blog/public/archives/2019/11/page/3/index.html","f01f85a44217a03bca998757337f8270"],["D:/blog/public/archives/2019/11/page/4/index.html","5235bdb6d2732b6de46cee1a514b388e"],["D:/blog/public/archives/2019/11/page/5/index.html","b9d4b77a79d02cb44538568545e173fc"],["D:/blog/public/archives/2019/12/index.html","7f12d7fd7c791c0e2d9896aa946b3462"],["D:/blog/public/archives/2019/index.html","5c047df624355740507ac516e474685a"],["D:/blog/public/archives/2019/page/2/index.html","d79f9b8449d4c373c789d8fff99b9f6f"],["D:/blog/public/archives/2019/page/3/index.html","a3787fd434fedaa98989acee0d69e317"],["D:/blog/public/archives/2019/page/4/index.html","c9d0da454be378bd5a3436b5cd74b726"],["D:/blog/public/archives/2019/page/5/index.html","bbac48431dd18667b0d1f22684b829c4"],["D:/blog/public/archives/2019/page/6/index.html","7c7afbb41edb33c5684b5d46a3b052d3"],["D:/blog/public/archives/2019/page/7/index.html","ee63a2c5b9ea3ff89ec68004eb925271"],["D:/blog/public/archives/index.html","e33e6e5b4ad504ee4cce053695d4c8a3"],["D:/blog/public/archives/page/2/index.html","2e7dbecf22789cb6b1b9d64db287eee2"],["D:/blog/public/archives/page/3/index.html","63691f7089ae9dbb975eaf9d7324af4c"],["D:/blog/public/archives/page/4/index.html","af127588f526ddffd3acbd3527f28edc"],["D:/blog/public/archives/page/5/index.html","9affc77c71f8a5052d4d3ea32e26f6e2"],["D:/blog/public/archives/page/6/index.html","cde67ee118990bf1d7d4b61e940787eb"],["D:/blog/public/archives/page/7/index.html","01e9254d2565e7999a00ae4619765566"],["D:/blog/public/categories/code/index.html","57958603756c8651f17ccd3116953113"],["D:/blog/public/categories/code/page/2/index.html","c38f03aee067a486b5ff208625df03f6"],["D:/blog/public/categories/code/page/3/index.html","4ef50a6d2a1987e68f20d45b8a51da81"],["D:/blog/public/categories/code/page/4/index.html","8fea2612980950451af407ea1d7d6a80"],["D:/blog/public/categories/code/page/5/index.html","8f248540cf5faaec2ec722272c1fe2d5"],["D:/blog/public/categories/index.html","8b7d6cc7f3660640a73d120085e86529"],["D:/blog/public/categories/life/index.html","3cf7489f67d9f717a2c8fdf45d938410"],["D:/blog/public/categories/life/page/2/index.html","d63b1a1951d47d3649a4e1dcf9abb9bf"],["D:/blog/public/categories/note/index.html","610a4ff50f9479c7ae08fd81f6fa398a"],["D:/blog/public/categories/note/page/2/index.html","74b93bc74e5dc845cfca03e2a02baf57"],["D:/blog/public/css/index.css","9911b20a2e31dc1aa98c48e483335237"],["D:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/blog/public/index.html","7484713b2079a06848c0699defdcc601"],["D:/blog/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["D:/blog/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["D:/blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/blog/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["D:/blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/blog/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/blog/public/page/2/index.html","83eddf062140109df4b73257de63e394"],["D:/blog/public/page/3/index.html","3fb9e098306564b345569916d0b9f86e"],["D:/blog/public/page/4/index.html","3292eab9a1cf47af9d54765b1f5ff6a8"],["D:/blog/public/page/5/index.html","cb6c7802a284cf86c33eb1c0c05af46d"],["D:/blog/public/page/6/index.html","013bdef97642066fb7677db9ece581fd"],["D:/blog/public/page/7/index.html","bff5a013e02844e5616b311cd2d67fb4"],["D:/blog/public/tags/PAT/index.html","dfe4e31112284675a4e2012e577cd26b"],["D:/blog/public/tags/PAT/page/2/index.html","61065205fbde69b972fe08bd829b1148"],["D:/blog/public/tags/bfs/index.html","618629a39af3831014547718f9ed6f0b"],["D:/blog/public/tags/dfs/index.html","fb927d1db2237f43448530b042014c62"],["D:/blog/public/tags/dfs/page/2/index.html","324f1e61aaf7114673fcb2979a0ef927"],["D:/blog/public/tags/dijkstra/index.html","9e2d4a299fcd94283b6688f04b9dd870"],["D:/blog/public/tags/english/index.html","46fa6c3af3f5fe487cc1a4fe65c71755"],["D:/blog/public/tags/git/index.html","65d6fe4b824cd6ceb55a7f7950df80d6"],["D:/blog/public/tags/index.html","6ea377cf6619294440abd1eee3407ecc"],["D:/blog/public/tags/plan/index.html","d595081aff2223ca7995cdd06eb5aec9"],["D:/blog/public/tags/python/index.html","b3f9608c71981fbfa02cb5f8249fabc7"],["D:/blog/public/tags/python语法/index.html","91df9fa66f7c69988aad2b218ee8789f"],["D:/blog/public/tags/travel/index.html","be0ddce0faf2048045fb5af072d12899"],["D:/blog/public/tags/win/index.html","9511d7bcabd5608cf57bfd975945108d"],["D:/blog/public/tags/图/index.html","36986b6b5f063074b8d0612386c89baf"],["D:/blog/public/tags/图论/index.html","934c2c0cd7f6dbfe8b00115e3160570f"],["D:/blog/public/tags/字符串/index.html","8e2b19690abc922ae6268fa117fac6ee"],["D:/blog/public/tags/实践/index.html","515e1fb04c7853debf16ffa913ebd423"],["D:/blog/public/tags/并查集/index.html","2aabe697e9ed85a9955d26a4322de94e"],["D:/blog/public/tags/排序/index.html","ec57b4038895bcae31d7d6aec0ce72df"],["D:/blog/public/tags/数学/index.html","24a06178ca21e1ccd659fd51e6791415"],["D:/blog/public/tags/整理/index.html","ae4107ffe3588cb779f3f01a05ea3192"],["D:/blog/public/tags/文本编辑/index.html","caba6168935a5beff6b87b08dc84632b"],["D:/blog/public/tags/树/index.html","5033a2c9580b3edf376b337f72614800"],["D:/blog/public/tags/竞赛/index.html","b96c948f2badb4c1fb61bb62c2c7dd0d"],["D:/blog/public/tags/纪念日/index.html","562031711e8826caf91992be2c90f546"],["D:/blog/public/tags/脚本/index.html","fb0489355c98612eaf4b74dda3d68d3e"],["D:/blog/public/tags/链表/index.html","46c039df62f7f7113ee16db7ee598bfe"]];
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







