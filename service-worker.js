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

var precacheConfig = [["D:/blog/public/2019/10/22/Markdown语法学习/index.html","108197d2adef3ef876bba3e7e6749be9"],["D:/blog/public/2019/10/22/PAT-1122/index.html","c4982c598d7a6a5492090404279cab22"],["D:/blog/public/2019/10/22/PAT计划/index.html","f3ef26382145318c7627df3899100723"],["D:/blog/public/2019/10/22/一周年纪念/1.png","b922b2b5d70da4521554e351b799eafa"],["D:/blog/public/2019/10/22/一周年纪念/10.jpg","4ee6bc37ff3698fa570a938b2bd3cd8f"],["D:/blog/public/2019/10/22/一周年纪念/11.jpg","1eb8883718238d92b64c1d22aa0ad727"],["D:/blog/public/2019/10/22/一周年纪念/12.jpg","6f72da1105ecd7baec4b4ae55a95c4e5"],["D:/blog/public/2019/10/22/一周年纪念/13.png","9a7c7b6afec674eb08e5607057ecadf9"],["D:/blog/public/2019/10/22/一周年纪念/14.jpg","1c2a7133e420bc4b898cff3c3a67c3cd"],["D:/blog/public/2019/10/22/一周年纪念/15.png","9c39368c806a0cfa2e7d709132df9056"],["D:/blog/public/2019/10/22/一周年纪念/16.png","35d0b5720714b6bdc6d3a406196eff55"],["D:/blog/public/2019/10/22/一周年纪念/17.png","9e7284fb82f396c4810ef96f1b4fe4f8"],["D:/blog/public/2019/10/22/一周年纪念/19.jpg","8a64b1eb0e09baf650be35c430e1e35b"],["D:/blog/public/2019/10/22/一周年纪念/20.jpg","0903b15ae3093a3532017dc07d32e3ac"],["D:/blog/public/2019/10/22/一周年纪念/21.jpg","22b445ee7acb7233b44fc4a25d3ae663"],["D:/blog/public/2019/10/22/一周年纪念/22.jpg","efc11d26abeff3b665daa5d9f2391f15"],["D:/blog/public/2019/10/22/一周年纪念/23.png","234580cc98d43a9b6e76eea8ec82470d"],["D:/blog/public/2019/10/22/一周年纪念/24.png","2ba8d6c8d4be23e8c33d3fc0f4b4b4d6"],["D:/blog/public/2019/10/22/一周年纪念/25.png","5ab1f6e4156096f8ba58f66255bc3c0a"],["D:/blog/public/2019/10/22/一周年纪念/27.jpg","836de2238b33e122dfca7d9da44f27e3"],["D:/blog/public/2019/10/22/一周年纪念/28.png","9e80a6a4a5ddebfd511f53ea1e8267b0"],["D:/blog/public/2019/10/22/一周年纪念/29.jpg","04f2ec6d41985b0ed3e44f2361c7899f"],["D:/blog/public/2019/10/22/一周年纪念/3.jpg","412cd99e96d03326a84f0c0a84d1ec10"],["D:/blog/public/2019/10/22/一周年纪念/30.png","befd1520ca9f8db304c88e9d88278df8"],["D:/blog/public/2019/10/22/一周年纪念/31.png","c18c6d47b84e55829bcfe8e11fb63729"],["D:/blog/public/2019/10/22/一周年纪念/32.jpg","14d40f93919dc0c17c38c039f8a35cb1"],["D:/blog/public/2019/10/22/一周年纪念/33.jpg","4e615748f58a6f23602d4a7806e6422c"],["D:/blog/public/2019/10/22/一周年纪念/5.png","9941823b1349fbb055ca615b6e3d54de"],["D:/blog/public/2019/10/22/一周年纪念/6.jpg","1266f0dcd054f6bd16fb50de12b43b26"],["D:/blog/public/2019/10/22/一周年纪念/8.png","6e4467f160ae2401f89d866bd1e7da2d"],["D:/blog/public/2019/10/22/一周年纪念/9.jpg","1e90bb672bca5590d1a4e79e97431fb8"],["D:/blog/public/2019/10/22/一周年纪念/index.html","76fdee683f341fa24a5545583d47d58a"],["D:/blog/public/2019/10/25/PAT-1142/index.html","ea4c621f3ef6d8462a13243f9a918ebe"],["D:/blog/public/2019/10/26/刷题技巧整理/index.html","7e3488acd9a94edc56264d7dec0ff37d"],["D:/blog/public/2019/10/26/算法笔记阅读/1.png","92150d33ef3bd6c65a9aaced8376a92c"],["D:/blog/public/2019/10/26/算法笔记阅读/2.png","cfccd02ede828f058d6097a5ea36231e"],["D:/blog/public/2019/10/26/算法笔记阅读/3.png","8829fd0644f4aa7c563ed6700448d1a5"],["D:/blog/public/2019/10/26/算法笔记阅读/4.png","9cd3a2412ecc95904bc4fa988104670d"],["D:/blog/public/2019/10/26/算法笔记阅读/5.png","2d944484cd483c4328cf23f83f283df4"],["D:/blog/public/2019/10/26/算法笔记阅读/6.png","e029e7b61a5b2af8a9adca3fe5c958c7"],["D:/blog/public/2019/10/26/算法笔记阅读/7.png","e3ea1a023a3cd92a0f71600be7356567"],["D:/blog/public/2019/10/26/算法笔记阅读/8.png","6867de9496f219814cfdc9065a3300f5"],["D:/blog/public/2019/10/26/算法笔记阅读/9.png","9edf64d883da58014326c3dfe069972b"],["D:/blog/public/2019/10/26/算法笔记阅读/index.html","f96ce603d30d3cf444e5a0f84945a691"],["D:/blog/public/2019/10/29/PAT-1013/index.html","8f032231c29b0cdcba1da7c84ddfaabb"],["D:/blog/public/2019/10/29/PAT-1034/index.html","9272118739299e9ecb90ecd3db7e4634"],["D:/blog/public/2019/10/30/PAT-1021/index.html","47235d8aeb8d71dd8e565fb5e56740bd"],["D:/blog/public/2019/11/03/Mac折腾记录/index.html","4eaa7c45652430ac0dc9ff36f2364379"],["D:/blog/public/2019/11/04/VSCode使用/1.png","e8132b252da910da84d0d1ae36572702"],["D:/blog/public/2019/11/04/VSCode使用/2.png","3c8c0b6004e0d69eb0fe084e61359e9f"],["D:/blog/public/2019/11/04/VSCode使用/index.html","2e1223dee547516a7ce1321705163bb4"],["D:/blog/public/2019/11/05/PAT-1107/index.html","52846a052fd5e5b67e9231f2701ea021"],["D:/blog/public/2019/11/05/文件自动分类脚本/index.html","b326d1b56a0725ab8bb83cf113ecc713"],["D:/blog/public/2019/11/06/PAT-1114/index.html","5c53b530ab0b8a0e48345c0d6ae17e6b"],["D:/blog/public/2019/11/06/python基础/index.html","e18179e9e1fb1da28a4fbe82e967b290"],["D:/blog/public/2019/11/07/git学习/0.jpg","701e02bf0b2d71ab51b7e2b6aa973d52"],["D:/blog/public/2019/11/07/git学习/1.png","2adbbdf8d8bab5606af6279ef5612da2"],["D:/blog/public/2019/11/07/git学习/2.png","c6f039420a0f851eb424883511ac4e2f"],["D:/blog/public/2019/11/07/git学习/3.png","06f0d7d34075653ba25a18ea0fea8b7d"],["D:/blog/public/2019/11/07/git学习/4.png","cb8a9c11c8fd1326260bbc7c2c6a62ac"],["D:/blog/public/2019/11/07/git学习/index.html","24aa8e84269e528d1a6fdd5732014316"],["D:/blog/public/2019/11/13/PAT-1025/index.html","09aea6fafdd55286b45330e70ff8789d"],["D:/blog/public/2019/11/14/H和T的成长回忆录/index.html","94431a1f71d0dcf97ad2a0ad2711371b"],["D:/blog/public/2019/11/14/PAT-1069/index.html","09f8ff55058f8f6a76981c42166cb0de"],["D:/blog/public/2019/11/14/PAT-1093/index.html","265edf048aec5ac9769a17aaf434d9ac"],["D:/blog/public/2019/11/14/PAT-1101/index.html","f0a76bd7974ad393e01e011b6ff28ea6"],["D:/blog/public/2019/11/14/blog分类规划/index.html","0e4d26f3f117ee292fdc1c5c28ce8007"],["D:/blog/public/2019/11/14/北京游感/index.html","155ab8e0cccd12d3f207e9667eaac49e"],["D:/blog/public/2019/11/14/热爱生命/1.png","0b865b5a8c5ffc65ab33586bb50513b7"],["D:/blog/public/2019/11/14/热爱生命/index.html","a5c1057281d58878ddc63ea3a0b8178d"],["D:/blog/public/2019/11/14/随想-1/index.html","47a52539ef4a55c9ca4f0c6fe44a973c"],["D:/blog/public/2019/11/14/随想-2/1.png","ba65a9551263d1c1cb9c1870d1ee8a29"],["D:/blog/public/2019/11/14/随想-2/index.html","7333db02be9c1a564cd9fdcf424e30e5"],["D:/blog/public/2019/11/15/PAT-1032/index.html","db18ad785ce42dfa50a5a784dcaad245"],["D:/blog/public/2019/11/15/PAT-1059/index.html","2ef821ae6db1433cbd7a34665b89c918"],["D:/blog/public/2019/11/15/去南京/1.png","53d7c944f9a7326b86bd734f9d2d967c"],["D:/blog/public/2019/11/15/去南京/2.png","17208773d5c2ee30d094a597d4a8b9b6"],["D:/blog/public/2019/11/15/去南京/index.html","b8ea7193ae17ba82d1bb62d773d50a65"],["D:/blog/public/2019/11/16/PAT-1052/index.html","c689e7c850e408ad61183bda78a0611a"],["D:/blog/public/2019/11/16/连通块个数/index.html","aa2b3d15d0963394231ce4062912783b"],["D:/blog/public/2019/11/16/迷宫问题/index.html","64f0a23310789c007f48b9541e88ea1f"],["D:/blog/public/2019/11/17/Listening-training/index.html","8e8408970e6a7d50f8694506469fee2e"],["D:/blog/public/2019/11/17/PAT-1020/index.html","93f4053d5cacdf06532314ee41b9d727"],["D:/blog/public/2019/11/18/随想-3/index.html","3c3d05fdd8243e0ef07dcb893e17d9dc"],["D:/blog/public/2019/11/19/PAT-1053/index.html","36cd65947071e5b12772410a8d015a11"],["D:/blog/public/2019/11/19/Win环境配置/1.png","c32e495ccfeb914740d76fdf84b2fda3"],["D:/blog/public/2019/11/19/Win环境配置/2.png","4cb6305070b92541ac6749688e6ddec6"],["D:/blog/public/2019/11/19/Win环境配置/3.png","da3b800653c68b7c463ee0b5598055e9"],["D:/blog/public/2019/11/19/Win环境配置/index.html","a76583ee71e10af0afa6d2e91bf50262"],["D:/blog/public/2019/11/20/PAT-1043/index.html","540e05aa81181864e6bf3a3301f0783c"],["D:/blog/public/2019/11/22/PAT-1003/1.png","6fd7e183ac46df7222a1d2a2a4c9b12a"],["D:/blog/public/2019/11/22/PAT-1003/index.html","1b23c4b72ad42d66daac43aac0b254cf"],["D:/blog/public/2019/11/22/PAT-1018/index.html","ca884a941b6127652f2c430e2a4bc6e2"],["D:/blog/public/2019/11/22/阅读管理/index.html","c3de3828f366a6a0ef827fa16b9ff9c4"],["D:/blog/public/2019/11/23/ExcelToMarkdown/index.html","6c58168c425127fa5606219693ea905b"],["D:/blog/public/2019/11/23/PAT-1030/1.png","aecb20c8058c5af85e249217e120debe"],["D:/blog/public/2019/11/23/PAT-1030/index.html","331ca244a70477dc3d6d312fcc844dba"],["D:/blog/public/2019/11/23/四级选择填空高频词/index.html","8d62cca4285a2f88c9903c85e7508fc3"],["D:/blog/public/2019/11/24/PAT-1004/index.html","a5f1c165b8438a1098c2fc05794a475a"],["D:/blog/public/2019/11/24/PAT-1087/2.png","3a8111c12681b201c59e6a04840cf400"],["D:/blog/public/2019/11/24/PAT-1087/index.html","87166955ed577e42a788adbfd494485c"],["D:/blog/public/2019/11/25/Markdown编辑和预览/index.html","87b09fa4e6d1eb391be388412ab2c0f3"],["D:/blog/public/2019/11/25/PAT-1079/index.html","58fa984f55269be757c6b24ecb27c896"],["D:/blog/public/2019/11/25/PAT-1086/index.html","3eb77038949bccf8f77fb6479df56bb0"],["D:/blog/public/2019/11/25/PAT-1090/index.html","32fe81e571eb67f0f53acdfd3b82946f"],["D:/blog/public/2019/11/25/PAT自动签到/1.png","0131d4cb9e40bf24404e33de225bd771"],["D:/blog/public/2019/11/25/PAT自动签到/index.html","ce3c1218b3b071f528f8e510d6884adf"],["D:/blog/public/2019/11/25/字幕文件处理/index.html","d24b1b3de4e567cf6434a2b89b61ef35"],["D:/blog/public/2019/11/25/用需求引导学习/index.html","e3fcc1ce3740ae04121bb667b0a443f8"],["D:/blog/public/2019/11/26/PAT-1094/index.html","e0f9c6ead2501e28ae2bd38d3ffdd7ad"],["D:/blog/public/2019/11/28/PAT-1012/index.html","ffc710fa4b2634b1b05f9d5adf34792a"],["D:/blog/public/2019/11/28/PAT-1102/index.html","e21362c2c577526da2c39500acac4bd8"],["D:/blog/public/2019/11/28/道路思考/index.html","6d2f27cd343c9a98ef330a9618151a24"],["D:/blog/public/2019/11/30/随想-4/index.html","c589e69fd771ce4a752f4f7b37548114"],["D:/blog/public/2019/12/02/PAT考前准备/index.html","885bd200e4c4b996daf6dc72466ae4ab"],["D:/blog/public/2019/12/03/PAT-1074/index.html","100ed10b15c49b005e3086a41b62a15d"],["D:/blog/public/2019/12/04/PAT-1115/index.html","ab993e2ce1a1329c6d64efd75b5d778b"],["D:/blog/public/archives/2019/10/index.html","6ab5d700e56015c244ea0681554e04f6"],["D:/blog/public/archives/2019/11/index.html","ce80ce822a6b5f310a3c1b6d715fb03b"],["D:/blog/public/archives/2019/11/page/2/index.html","8bef4aa2c27ad25cf760e8c1689c6557"],["D:/blog/public/archives/2019/11/page/3/index.html","bfdd0261ba339e3bb167cf634027ec88"],["D:/blog/public/archives/2019/11/page/4/index.html","ab8be884b6111b0ad472dc56d8de0cfc"],["D:/blog/public/archives/2019/11/page/5/index.html","2ee10d61bc24b14813460dfc49febe00"],["D:/blog/public/archives/2019/12/index.html","28e90393519639e16eb9b39f08055de3"],["D:/blog/public/archives/2019/index.html","2d22f0db0ca9a4c83149c8bb5ae69665"],["D:/blog/public/archives/2019/page/2/index.html","65a8849a7fd444929e9e87979eda8ef2"],["D:/blog/public/archives/2019/page/3/index.html","3fefe65520ab68177e6091a9f6beb64b"],["D:/blog/public/archives/2019/page/4/index.html","531e7e9e3f486899ea9070507e7e48b5"],["D:/blog/public/archives/2019/page/5/index.html","ac189627b27a721d1d0b5c33e7b86033"],["D:/blog/public/archives/2019/page/6/index.html","6ca08231f811267cd05d7f44e8bbd8cb"],["D:/blog/public/archives/2019/page/7/index.html","5fc150216b4053fc0784cac5b9252827"],["D:/blog/public/archives/index.html","112cdde7fbafff7a2304eead26ae569b"],["D:/blog/public/archives/page/2/index.html","42e3045844b2d05d9f7b527bfbbd4f0e"],["D:/blog/public/archives/page/3/index.html","78bbc434765b83cb644476ea6cc3a5c9"],["D:/blog/public/archives/page/4/index.html","2ef7f21432b36f0ac9fbccc11074cda5"],["D:/blog/public/archives/page/5/index.html","82ff57c71782e632de54f3314cd253b5"],["D:/blog/public/archives/page/6/index.html","ed90250cc1c3f27e85456733bf5867a4"],["D:/blog/public/archives/page/7/index.html","3a8de6c7634002d5a2020b81d662dd3b"],["D:/blog/public/categories/code/index.html","f23987ba354be0404b7bb1837768f413"],["D:/blog/public/categories/code/page/2/index.html","0ca60418b22e59e4158f34dbff5eb561"],["D:/blog/public/categories/code/page/3/index.html","748bb831e4b5016b180f4e24719c1b34"],["D:/blog/public/categories/code/page/4/index.html","43de39ba77e0351703a9cfa0cf212bd6"],["D:/blog/public/categories/index.html","e704cec17b584da3b6a00d3257d71d90"],["D:/blog/public/categories/life/index.html","06cb5f0bb8c2eea254e654a9479173ae"],["D:/blog/public/categories/life/page/2/index.html","4d94ea531c0d88e67a8b9394cc27a69d"],["D:/blog/public/categories/note/index.html","9f70d37f2f34b1963170153e8de5d184"],["D:/blog/public/css/index.css","9911b20a2e31dc1aa98c48e483335237"],["D:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/blog/public/index.html","f44f8739335bbb6ee34c7a9d001f196a"],["D:/blog/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["D:/blog/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["D:/blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/blog/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["D:/blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/blog/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/blog/public/page/2/index.html","96d99de3cbf3362d33aa018e633223e2"],["D:/blog/public/page/3/index.html","3663d92a7f95f86024452181c2b5f84c"],["D:/blog/public/page/4/index.html","6842c2b8fdf013e8b14c13d0d6b30831"],["D:/blog/public/page/5/index.html","857029463e889a4725cbd39a2a4502fb"],["D:/blog/public/page/6/index.html","125acf858b88eba120b1e90f4ee59ce8"],["D:/blog/public/page/7/index.html","0767337916df0173872e8114b969544f"],["D:/blog/public/tags/PAT/index.html","01c6b0023fa8bd49898165a8e43452d6"],["D:/blog/public/tags/PAT/page/2/index.html","8db03d5a30d0e382fbafcc4f79e18331"],["D:/blog/public/tags/bfs/index.html","8c5c7ccf8d33fae1b564162073e09c5d"],["D:/blog/public/tags/dfs/index.html","78a97b3a828112113af05cfafaedf2ea"],["D:/blog/public/tags/dfs/page/2/index.html","5705da7b17f2e466a5cf2320e90c25db"],["D:/blog/public/tags/dijkstra/index.html","ef5d3542c58de0250d8fb372ba295516"],["D:/blog/public/tags/english/index.html","78be9f3a90d24d4706d8d07261848002"],["D:/blog/public/tags/git/index.html","30674aa1e1f2a9c564b7017513df52cc"],["D:/blog/public/tags/index.html","64e9bf047ffa9d6d8b743ff94bca2ee7"],["D:/blog/public/tags/plan/index.html","cd27b6b6105d7bf9b301093b40ffd188"],["D:/blog/public/tags/python/index.html","95b5c6a8366b3b5c887a73651be38ee5"],["D:/blog/public/tags/python语法/index.html","afb1f269e03ef8a6d80bda38b70037c2"],["D:/blog/public/tags/travel/index.html","01da91adb6c8a6ef37102a73067b0c4b"],["D:/blog/public/tags/win/index.html","102197e296e3883b0d96dc33119db12e"],["D:/blog/public/tags/图/index.html","45215ef0c3c714d1c2b67e4eb488de64"],["D:/blog/public/tags/图论/index.html","f0950abe371f5009ce0431b47707924a"],["D:/blog/public/tags/字符串/index.html","c535b3ec23e0f69419baa9c69088d7d6"],["D:/blog/public/tags/实践/index.html","df4f9695f5d5216893f3f75d94abf22e"],["D:/blog/public/tags/并查集/index.html","e4fa8b457574329f5f0692793ee81ee8"],["D:/blog/public/tags/排序/index.html","b305697f7863959ba1bdc2d4cd6bea8d"],["D:/blog/public/tags/数学/index.html","14bb3891d28b045ad78437de41b7230b"],["D:/blog/public/tags/整理/index.html","3a5321d319c6af6c423d498818b47780"],["D:/blog/public/tags/文本编辑/index.html","a746c83c521f24c55cd598ec437672e0"],["D:/blog/public/tags/树/index.html","67bf45e21d6d6db2331c36ad54953487"],["D:/blog/public/tags/竞赛/index.html","1d98fde79e75eb356bf29503bc006538"],["D:/blog/public/tags/纪念日/index.html","a409dd989fbc5930dc7384c40c4f2f67"],["D:/blog/public/tags/脚本/index.html","90a83226df066120cbc9bcb180d95b53"],["D:/blog/public/tags/链表/index.html","52eec3e4f7c0f49769d3c266a6f4d285"]];
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







