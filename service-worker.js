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

var precacheConfig = [["D:/blog/public/2019/10/22/Markdown语法学习/index.html","bff9fc9960a140ca55198d569cedbe3b"],["D:/blog/public/2019/10/22/PAT-1122/index.html","3553b216e6fa0aec8640b6f0798337f4"],["D:/blog/public/2019/10/22/PAT计划/index.html","bb7a65f1330c3ca6bc92948ddcb51168"],["D:/blog/public/2019/10/22/一周年纪念/1.png","b922b2b5d70da4521554e351b799eafa"],["D:/blog/public/2019/10/22/一周年纪念/10.jpg","4ee6bc37ff3698fa570a938b2bd3cd8f"],["D:/blog/public/2019/10/22/一周年纪念/11.jpg","1eb8883718238d92b64c1d22aa0ad727"],["D:/blog/public/2019/10/22/一周年纪念/12.jpg","6f72da1105ecd7baec4b4ae55a95c4e5"],["D:/blog/public/2019/10/22/一周年纪念/13.png","9a7c7b6afec674eb08e5607057ecadf9"],["D:/blog/public/2019/10/22/一周年纪念/14.jpg","1c2a7133e420bc4b898cff3c3a67c3cd"],["D:/blog/public/2019/10/22/一周年纪念/15.png","9c39368c806a0cfa2e7d709132df9056"],["D:/blog/public/2019/10/22/一周年纪念/16.png","35d0b5720714b6bdc6d3a406196eff55"],["D:/blog/public/2019/10/22/一周年纪念/17.png","9e7284fb82f396c4810ef96f1b4fe4f8"],["D:/blog/public/2019/10/22/一周年纪念/19.jpg","8a64b1eb0e09baf650be35c430e1e35b"],["D:/blog/public/2019/10/22/一周年纪念/20.jpg","0903b15ae3093a3532017dc07d32e3ac"],["D:/blog/public/2019/10/22/一周年纪念/21.jpg","22b445ee7acb7233b44fc4a25d3ae663"],["D:/blog/public/2019/10/22/一周年纪念/22.jpg","efc11d26abeff3b665daa5d9f2391f15"],["D:/blog/public/2019/10/22/一周年纪念/23.png","234580cc98d43a9b6e76eea8ec82470d"],["D:/blog/public/2019/10/22/一周年纪念/24.png","2ba8d6c8d4be23e8c33d3fc0f4b4b4d6"],["D:/blog/public/2019/10/22/一周年纪念/25.png","5ab1f6e4156096f8ba58f66255bc3c0a"],["D:/blog/public/2019/10/22/一周年纪念/27.jpg","836de2238b33e122dfca7d9da44f27e3"],["D:/blog/public/2019/10/22/一周年纪念/28.png","9e80a6a4a5ddebfd511f53ea1e8267b0"],["D:/blog/public/2019/10/22/一周年纪念/29.jpg","04f2ec6d41985b0ed3e44f2361c7899f"],["D:/blog/public/2019/10/22/一周年纪念/3.jpg","412cd99e96d03326a84f0c0a84d1ec10"],["D:/blog/public/2019/10/22/一周年纪念/30.png","befd1520ca9f8db304c88e9d88278df8"],["D:/blog/public/2019/10/22/一周年纪念/31.png","c18c6d47b84e55829bcfe8e11fb63729"],["D:/blog/public/2019/10/22/一周年纪念/32.jpg","14d40f93919dc0c17c38c039f8a35cb1"],["D:/blog/public/2019/10/22/一周年纪念/33.jpg","4e615748f58a6f23602d4a7806e6422c"],["D:/blog/public/2019/10/22/一周年纪念/5.png","9941823b1349fbb055ca615b6e3d54de"],["D:/blog/public/2019/10/22/一周年纪念/6.jpg","1266f0dcd054f6bd16fb50de12b43b26"],["D:/blog/public/2019/10/22/一周年纪念/8.png","6e4467f160ae2401f89d866bd1e7da2d"],["D:/blog/public/2019/10/22/一周年纪念/9.jpg","1e90bb672bca5590d1a4e79e97431fb8"],["D:/blog/public/2019/10/22/一周年纪念/index.html","02a924aa44d846cdac57e1e6ebea65f1"],["D:/blog/public/2019/10/25/PAT-1142/index.html","89e6eb3fc5376dfa0715caf34f70b43e"],["D:/blog/public/2019/10/26/刷题技巧整理/index.html","4fe975e2074683d496d64bd5459e1d9d"],["D:/blog/public/2019/10/26/算法笔记阅读/1.png","92150d33ef3bd6c65a9aaced8376a92c"],["D:/blog/public/2019/10/26/算法笔记阅读/2.png","cfccd02ede828f058d6097a5ea36231e"],["D:/blog/public/2019/10/26/算法笔记阅读/3.png","8829fd0644f4aa7c563ed6700448d1a5"],["D:/blog/public/2019/10/26/算法笔记阅读/4.png","9cd3a2412ecc95904bc4fa988104670d"],["D:/blog/public/2019/10/26/算法笔记阅读/5.png","2d944484cd483c4328cf23f83f283df4"],["D:/blog/public/2019/10/26/算法笔记阅读/6.png","e029e7b61a5b2af8a9adca3fe5c958c7"],["D:/blog/public/2019/10/26/算法笔记阅读/7.png","e3ea1a023a3cd92a0f71600be7356567"],["D:/blog/public/2019/10/26/算法笔记阅读/8.png","6867de9496f219814cfdc9065a3300f5"],["D:/blog/public/2019/10/26/算法笔记阅读/9.png","9edf64d883da58014326c3dfe069972b"],["D:/blog/public/2019/10/26/算法笔记阅读/index.html","d0167a8012b547764dad8124d05ae873"],["D:/blog/public/2019/10/29/PAT-1013/index.html","72991ebb8a5659fdb3572d8ebb0cfdf0"],["D:/blog/public/2019/10/29/PAT-1034/index.html","c1bcc0b93fe9d64e2df5aade5220a163"],["D:/blog/public/2019/10/30/PAT-1021/index.html","494885ef4c0f94fffd7b497771d54ef0"],["D:/blog/public/2019/11/03/Mac折腾记录/index.html","2923553d0be0875178e9a104c0c5d96d"],["D:/blog/public/2019/11/04/VSCode使用/1.png","e8132b252da910da84d0d1ae36572702"],["D:/blog/public/2019/11/04/VSCode使用/2.png","3c8c0b6004e0d69eb0fe084e61359e9f"],["D:/blog/public/2019/11/04/VSCode使用/index.html","6066b3c01ef8e42d3ff39ad87a880e94"],["D:/blog/public/2019/11/05/PAT-1107/index.html","1436a1f962d45263aa26096f5fe8c3bf"],["D:/blog/public/2019/11/05/文件自动分类脚本/index.html","26554ec89f34f6117c2acc2f93774388"],["D:/blog/public/2019/11/06/PAT-1114/index.html","c32b27efef8a4aefcc62dfe871994d73"],["D:/blog/public/2019/11/06/python基础/index.html","5621bb21b0d2d86af884d0b20240ca24"],["D:/blog/public/2019/11/07/git学习/0.jpg","701e02bf0b2d71ab51b7e2b6aa973d52"],["D:/blog/public/2019/11/07/git学习/1.png","2adbbdf8d8bab5606af6279ef5612da2"],["D:/blog/public/2019/11/07/git学习/2.png","c6f039420a0f851eb424883511ac4e2f"],["D:/blog/public/2019/11/07/git学习/3.png","06f0d7d34075653ba25a18ea0fea8b7d"],["D:/blog/public/2019/11/07/git学习/4.png","cb8a9c11c8fd1326260bbc7c2c6a62ac"],["D:/blog/public/2019/11/07/git学习/index.html","f31608e616c249cc139603013d0d9fa2"],["D:/blog/public/2019/11/13/PAT-1025/index.html","1d5938832ecc93c05869c0cd9966327e"],["D:/blog/public/2019/11/14/H和T的成长回忆录/index.html","b6794ca549b302ab09f9af582d75ecb3"],["D:/blog/public/2019/11/14/PAT-1069/index.html","7064f9e28c472800e2cfda5f75bb22dd"],["D:/blog/public/2019/11/14/PAT-1093/index.html","4bd84855d0810c329f49a0e94cb89b8f"],["D:/blog/public/2019/11/14/PAT-1101/index.html","9053798a00370cacbca29ec7d87def37"],["D:/blog/public/2019/11/14/blog分类规划/index.html","7e675ff8046a23d81b074580e1b18a50"],["D:/blog/public/2019/11/14/北京游感/index.html","d4a3d115c5e35a28628ecc26a16892ff"],["D:/blog/public/2019/11/14/热爱生命/1.png","0b865b5a8c5ffc65ab33586bb50513b7"],["D:/blog/public/2019/11/14/热爱生命/index.html","008fa7337d258e5514f7243464ec470d"],["D:/blog/public/2019/11/14/随想-1/index.html","f1bd2764786123933ce30ac55215fdc0"],["D:/blog/public/2019/11/14/随想-2/1.png","ba65a9551263d1c1cb9c1870d1ee8a29"],["D:/blog/public/2019/11/14/随想-2/index.html","49fc7b251c252fd10bfe5678b911e859"],["D:/blog/public/2019/11/15/PAT-1032/index.html","c6a426153da7dfa4adf028f2859b00ea"],["D:/blog/public/2019/11/15/PAT-1059/index.html","a4069ff80c3fcd8e1b715798494f4d00"],["D:/blog/public/2019/11/15/去南京/1.png","53d7c944f9a7326b86bd734f9d2d967c"],["D:/blog/public/2019/11/15/去南京/2.png","17208773d5c2ee30d094a597d4a8b9b6"],["D:/blog/public/2019/11/15/去南京/index.html","5469673789009936142cd00a6b0374e3"],["D:/blog/public/2019/11/16/PAT-1052/index.html","0ff0a4412de8e53cc96c27f26dcbc91d"],["D:/blog/public/2019/11/16/连通块个数/index.html","49cb8e8e3ee7224afe2e212e736bead9"],["D:/blog/public/2019/11/16/迷宫问题/index.html","8da950f721428555b39acc1a15b8df1d"],["D:/blog/public/2019/11/17/Listening-training/index.html","f3ccb2ec0026224637d41395dfe2fa01"],["D:/blog/public/2019/11/17/PAT-1020/index.html","5743efabedb043acaaffa55c8108012f"],["D:/blog/public/2019/11/18/随想-3/index.html","85f7b5ec91e04cc0f5901c0302fb860f"],["D:/blog/public/2019/11/19/PAT-1053/index.html","fad385a495c1de4e061bb03c5ed0db64"],["D:/blog/public/2019/11/19/Win环境配置/1.png","c32e495ccfeb914740d76fdf84b2fda3"],["D:/blog/public/2019/11/19/Win环境配置/2.png","4cb6305070b92541ac6749688e6ddec6"],["D:/blog/public/2019/11/19/Win环境配置/3.png","da3b800653c68b7c463ee0b5598055e9"],["D:/blog/public/2019/11/19/Win环境配置/index.html","ba9f0e365e7c9e08528910f11afa3b5b"],["D:/blog/public/2019/11/20/PAT-1043/index.html","fb33c4362523e0986ee159b6e023feb6"],["D:/blog/public/2019/11/22/PAT-1003/1.png","6fd7e183ac46df7222a1d2a2a4c9b12a"],["D:/blog/public/2019/11/22/PAT-1003/index.html","825e8c8d69e334a8362bd9505719627e"],["D:/blog/public/2019/11/22/PAT-1018/index.html","194e916484947b5210cbc8c5b739e2a2"],["D:/blog/public/2019/11/22/阅读管理/index.html","ad046768169194b8f43532495d9fc78b"],["D:/blog/public/2019/11/23/ExcelToMarkdown/index.html","7b299056c04472a05a3102b61b4498e7"],["D:/blog/public/2019/11/23/PAT-1030/1.png","aecb20c8058c5af85e249217e120debe"],["D:/blog/public/2019/11/23/PAT-1030/index.html","954d8659930e6bd75bae32edafc4679f"],["D:/blog/public/2019/11/23/四级选择填空高频词/index.html","98a556b612f012b174197f3f71760ff8"],["D:/blog/public/2019/11/24/PAT-1004/index.html","934e398c4b091dea6ae3abff9c3ec3f7"],["D:/blog/public/2019/11/24/PAT-1087/2.png","3a8111c12681b201c59e6a04840cf400"],["D:/blog/public/2019/11/24/PAT-1087/index.html","077c56ce0ddd6dcfd71bfa6d345b84ea"],["D:/blog/public/2019/11/25/Markdown编辑和预览/index.html","19352791418be7c6d6e8900e49c7d70a"],["D:/blog/public/2019/11/25/PAT-1079/index.html","88b30d2398e910838f7457a9e4ff8fe9"],["D:/blog/public/2019/11/25/PAT-1086/index.html","ff92a0a919f9d63bcabb0637308b8e0c"],["D:/blog/public/2019/11/25/PAT-1090/index.html","043f857ce2214bf8ac92c732eb5fa053"],["D:/blog/public/2019/11/25/PAT自动签到/1.png","0131d4cb9e40bf24404e33de225bd771"],["D:/blog/public/2019/11/25/PAT自动签到/index.html","9d74d926891e3898eb2a1445133af022"],["D:/blog/public/2019/11/25/字幕文件处理/index.html","de1272ddf0fbc81ad5bd0151958aab9a"],["D:/blog/public/2019/11/25/用需求引导学习/index.html","3979232e27d4beeaaf5a8f6027af2b62"],["D:/blog/public/2019/11/26/PAT-1094/index.html","a9d4c8973acc67c0f66aac1bd71600eb"],["D:/blog/public/archives/2019/10/index.html","db1ee9d5f7d5d40b2991bec32e40063f"],["D:/blog/public/archives/2019/11/index.html","78ae55194d9adf6670537217a1913f4d"],["D:/blog/public/archives/2019/11/page/2/index.html","d7bb964df06a71bbc92553a4da14d062"],["D:/blog/public/archives/2019/11/page/3/index.html","63fe0598351a10d26ce906f6c18c3ef1"],["D:/blog/public/archives/2019/11/page/4/index.html","c3bcaff6da34e279099f2856c60abc0d"],["D:/blog/public/archives/2019/11/page/5/index.html","e04f03d0b9cdec55b6810c86ec64aed4"],["D:/blog/public/archives/2019/index.html","b99ed3d7d0cfe37e0dc9b091149b8f9d"],["D:/blog/public/archives/2019/page/2/index.html","c9941f9cb158d25b36ebff145c3d6b82"],["D:/blog/public/archives/2019/page/3/index.html","03731874e3614319786fc0ca8c4c7f77"],["D:/blog/public/archives/2019/page/4/index.html","eef0691ad66543ffcd605a95e869d9e8"],["D:/blog/public/archives/2019/page/5/index.html","c83fa68c20af7608a6ea3f0f39529661"],["D:/blog/public/archives/2019/page/6/index.html","3edc73ac90f4b55ed93da67f0a8c8b01"],["D:/blog/public/archives/index.html","f0437f96a1b17b1df478e809c6c9a351"],["D:/blog/public/archives/page/2/index.html","6f1988dfe38681f3dc3505a086f96844"],["D:/blog/public/archives/page/3/index.html","f44836129d6c3ad6aef5c6139cdcf394"],["D:/blog/public/archives/page/4/index.html","f51925513b4b35c921256994dd86dfca"],["D:/blog/public/archives/page/5/index.html","a0ba264269606ca6652a54c46aeb2680"],["D:/blog/public/archives/page/6/index.html","15ea3280cff05bb90eaa35e30331c57d"],["D:/blog/public/categories/code/index.html","1b011852adc9dccf7214c1114fead903"],["D:/blog/public/categories/code/page/2/index.html","5a7673bca8dc41e0e69fb84452bc6762"],["D:/blog/public/categories/code/page/3/index.html","e3e83d70658824b178a6da73e9fc9d9b"],["D:/blog/public/categories/code/page/4/index.html","f36c0c1d4681cc110c845f31caee24c5"],["D:/blog/public/categories/index.html","9f5a2011ec5d1bbb301ecbad3849c01f"],["D:/blog/public/categories/life/index.html","da093154004e3bc7ba9f1e15b796b635"],["D:/blog/public/categories/life/page/2/index.html","c4886418a025ee1dfb835a0b0223d570"],["D:/blog/public/categories/note/index.html","5ec1ebd0fe4bdcf1bb7f429e29252aab"],["D:/blog/public/css/index.css","9911b20a2e31dc1aa98c48e483335237"],["D:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/blog/public/index.html","960df9e5542f189b68851cf58b92d156"],["D:/blog/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["D:/blog/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["D:/blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/blog/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["D:/blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/blog/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/blog/public/page/2/index.html","4bdf0fc25df41e7521f8448af6bb7ba8"],["D:/blog/public/page/3/index.html","485004698bb8da9a84a1f69b6112c806"],["D:/blog/public/page/4/index.html","3c56026ead2c23af875fd91ec7d05d7d"],["D:/blog/public/page/5/index.html","a208b03e4568c6a3e0bc3b29f933346a"],["D:/blog/public/page/6/index.html","ed1c93ef27acf783800dc9d3185be545"],["D:/blog/public/tags/PAT/index.html","52a4898ab3450703f94163724893ba05"],["D:/blog/public/tags/PAT/page/2/index.html","38cab3fd3c71557bf0cca6be50b03cff"],["D:/blog/public/tags/bfs/index.html","8cfb00bbc9f69c49148ac7d04213d7e1"],["D:/blog/public/tags/dfs/index.html","20317da19ecf5d4eda4c2d699d68c9c5"],["D:/blog/public/tags/dijkstra/index.html","a40f636f8a4708f28228ab7657252442"],["D:/blog/public/tags/english/index.html","17f19116e8be7794944feef4dd5467c9"],["D:/blog/public/tags/git/index.html","b2f5cb1607cd8f2bd133db9d781a61e2"],["D:/blog/public/tags/index.html","3607c06e5b636004fd6d545720a8c7e6"],["D:/blog/public/tags/plan/index.html","afa21ec52032c0592dee49b9d53ae461"],["D:/blog/public/tags/python/index.html","c9b1bfce92e6c7dbe630a3c4eee28ce2"],["D:/blog/public/tags/python语法/index.html","f9a9486645ee7e6ed62096f096f3e7de"],["D:/blog/public/tags/travel/index.html","291a4995a9689b72d003acfa05cd23b3"],["D:/blog/public/tags/win/index.html","db6aab80f2f93c8d1a234fd29dcab703"],["D:/blog/public/tags/图/index.html","52c6e158c9ff26195bbf42c432a69968"],["D:/blog/public/tags/图论/index.html","9fb1e204c87d79d079d435f396c15f59"],["D:/blog/public/tags/字符串/index.html","92084863a4ce795c7119a808aa3e65db"],["D:/blog/public/tags/实践/index.html","3280272ca46eabd894127502bdc6a132"],["D:/blog/public/tags/并查集/index.html","4b383c765b9df44edc2f2572f154bac5"],["D:/blog/public/tags/排序/index.html","d9a36bb8c9fa93b16295949b5510d195"],["D:/blog/public/tags/数学/index.html","e2a6b3c482c06ebeaef298e4ac10d986"],["D:/blog/public/tags/整理/index.html","8ac216c30245faf24a7a2f5bd433c276"],["D:/blog/public/tags/文本编辑/index.html","deff6c6732bf9cd3ecf73809c963ce72"],["D:/blog/public/tags/树/index.html","28c72cd46000609a8fd2881f95a119b5"],["D:/blog/public/tags/竞赛/index.html","3795a8a6074e600f5c470386c1631a95"],["D:/blog/public/tags/纪念日/index.html","08aedbf03618875afde60059c9a8e5c7"],["D:/blog/public/tags/脚本/index.html","e8f0e26224681e47e705ef7bdcd45cbd"],["D:/blog/public/tags/链表/index.html","65bf4ad1cb3f598c5c93456741cc7aa4"]];
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







