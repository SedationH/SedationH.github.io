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

var precacheConfig = [["D:/blog/public/2019/10/22/Markdown语法学习/index.html","c6eb20325c6795a4dd5fa86ea2bcfc3f"],["D:/blog/public/2019/10/22/PAT-1122/index.html","5412dc91e67b17fc576346de6f135bbf"],["D:/blog/public/2019/10/22/PAT计划/index.html","04751305994b35353b8ff48b742337e7"],["D:/blog/public/2019/10/22/一周年纪念/1.png","b922b2b5d70da4521554e351b799eafa"],["D:/blog/public/2019/10/22/一周年纪念/10.jpg","4ee6bc37ff3698fa570a938b2bd3cd8f"],["D:/blog/public/2019/10/22/一周年纪念/11.jpg","1eb8883718238d92b64c1d22aa0ad727"],["D:/blog/public/2019/10/22/一周年纪念/12.jpg","6f72da1105ecd7baec4b4ae55a95c4e5"],["D:/blog/public/2019/10/22/一周年纪念/13.png","9a7c7b6afec674eb08e5607057ecadf9"],["D:/blog/public/2019/10/22/一周年纪念/14.jpg","1c2a7133e420bc4b898cff3c3a67c3cd"],["D:/blog/public/2019/10/22/一周年纪念/15.png","9c39368c806a0cfa2e7d709132df9056"],["D:/blog/public/2019/10/22/一周年纪念/16.png","35d0b5720714b6bdc6d3a406196eff55"],["D:/blog/public/2019/10/22/一周年纪念/17.png","9e7284fb82f396c4810ef96f1b4fe4f8"],["D:/blog/public/2019/10/22/一周年纪念/19.jpg","8a64b1eb0e09baf650be35c430e1e35b"],["D:/blog/public/2019/10/22/一周年纪念/20.jpg","0903b15ae3093a3532017dc07d32e3ac"],["D:/blog/public/2019/10/22/一周年纪念/21.jpg","22b445ee7acb7233b44fc4a25d3ae663"],["D:/blog/public/2019/10/22/一周年纪念/22.jpg","efc11d26abeff3b665daa5d9f2391f15"],["D:/blog/public/2019/10/22/一周年纪念/23.png","234580cc98d43a9b6e76eea8ec82470d"],["D:/blog/public/2019/10/22/一周年纪念/24.png","2ba8d6c8d4be23e8c33d3fc0f4b4b4d6"],["D:/blog/public/2019/10/22/一周年纪念/25.png","5ab1f6e4156096f8ba58f66255bc3c0a"],["D:/blog/public/2019/10/22/一周年纪念/27.jpg","836de2238b33e122dfca7d9da44f27e3"],["D:/blog/public/2019/10/22/一周年纪念/28.png","9e80a6a4a5ddebfd511f53ea1e8267b0"],["D:/blog/public/2019/10/22/一周年纪念/29.jpg","04f2ec6d41985b0ed3e44f2361c7899f"],["D:/blog/public/2019/10/22/一周年纪念/3.jpg","412cd99e96d03326a84f0c0a84d1ec10"],["D:/blog/public/2019/10/22/一周年纪念/30.png","befd1520ca9f8db304c88e9d88278df8"],["D:/blog/public/2019/10/22/一周年纪念/31.png","c18c6d47b84e55829bcfe8e11fb63729"],["D:/blog/public/2019/10/22/一周年纪念/32.jpg","14d40f93919dc0c17c38c039f8a35cb1"],["D:/blog/public/2019/10/22/一周年纪念/33.jpg","4e615748f58a6f23602d4a7806e6422c"],["D:/blog/public/2019/10/22/一周年纪念/5.png","9941823b1349fbb055ca615b6e3d54de"],["D:/blog/public/2019/10/22/一周年纪念/6.jpg","1266f0dcd054f6bd16fb50de12b43b26"],["D:/blog/public/2019/10/22/一周年纪念/8.png","6e4467f160ae2401f89d866bd1e7da2d"],["D:/blog/public/2019/10/22/一周年纪念/9.jpg","1e90bb672bca5590d1a4e79e97431fb8"],["D:/blog/public/2019/10/22/一周年纪念/index.html","19c62e48e7b1935819d476aaba2c6cdc"],["D:/blog/public/2019/10/25/PAT-1142/index.html","f760e80666baeb4e0cdb99f7a620729a"],["D:/blog/public/2019/10/26/刷题技巧整理/index.html","f5a622ee3e2f5953496f1f6ede78618b"],["D:/blog/public/2019/10/26/算法笔记阅读/1.png","92150d33ef3bd6c65a9aaced8376a92c"],["D:/blog/public/2019/10/26/算法笔记阅读/2.png","cfccd02ede828f058d6097a5ea36231e"],["D:/blog/public/2019/10/26/算法笔记阅读/3.png","8829fd0644f4aa7c563ed6700448d1a5"],["D:/blog/public/2019/10/26/算法笔记阅读/4.png","9cd3a2412ecc95904bc4fa988104670d"],["D:/blog/public/2019/10/26/算法笔记阅读/5.png","2d944484cd483c4328cf23f83f283df4"],["D:/blog/public/2019/10/26/算法笔记阅读/6.png","e029e7b61a5b2af8a9adca3fe5c958c7"],["D:/blog/public/2019/10/26/算法笔记阅读/7.png","e3ea1a023a3cd92a0f71600be7356567"],["D:/blog/public/2019/10/26/算法笔记阅读/8.png","6867de9496f219814cfdc9065a3300f5"],["D:/blog/public/2019/10/26/算法笔记阅读/9.png","9edf64d883da58014326c3dfe069972b"],["D:/blog/public/2019/10/26/算法笔记阅读/index.html","43e8601638d7aed2b14d338736174150"],["D:/blog/public/2019/10/29/PAT-1013/index.html","f8fe132dec9e56f7537d37e58ce361d1"],["D:/blog/public/2019/10/29/PAT-1034/index.html","b4aa8a952de3318d2565f390e3b5b896"],["D:/blog/public/2019/10/30/PAT-1021/index.html","49356d2072da2588c798aeff7aa15622"],["D:/blog/public/2019/11/03/Mac折腾记录/index.html","ed1a7152545d7578bebd7e85d7062230"],["D:/blog/public/2019/11/04/VSCode使用/1.png","e8132b252da910da84d0d1ae36572702"],["D:/blog/public/2019/11/04/VSCode使用/2.png","3c8c0b6004e0d69eb0fe084e61359e9f"],["D:/blog/public/2019/11/04/VSCode使用/index.html","bae34bdfedb964ced671cc62852aba94"],["D:/blog/public/2019/11/05/PAT-1107/index.html","39bae34c3772edf2acbd179b45fc3ae6"],["D:/blog/public/2019/11/05/文件自动分类脚本/index.html","c15af32214e8231915001197f9cb6bd4"],["D:/blog/public/2019/11/06/PAT-1114/index.html","de30e956130eac28e72392b6e944366f"],["D:/blog/public/2019/11/06/python基础/index.html","f51dcc3d18661844a759c0b74b4c94cb"],["D:/blog/public/2019/11/07/git学习/0.jpg","701e02bf0b2d71ab51b7e2b6aa973d52"],["D:/blog/public/2019/11/07/git学习/1.png","2adbbdf8d8bab5606af6279ef5612da2"],["D:/blog/public/2019/11/07/git学习/2.png","c6f039420a0f851eb424883511ac4e2f"],["D:/blog/public/2019/11/07/git学习/3.png","06f0d7d34075653ba25a18ea0fea8b7d"],["D:/blog/public/2019/11/07/git学习/4.png","cb8a9c11c8fd1326260bbc7c2c6a62ac"],["D:/blog/public/2019/11/07/git学习/index.html","bb3acf0eeb8277514fe04d5958586d5a"],["D:/blog/public/2019/11/13/PAT-1025/index.html","83b6f303b36e74ca35fa8aaf5f87203a"],["D:/blog/public/2019/11/14/H和T的成长回忆录/index.html","0dd2b34b3848eb6d302688f1178a0c69"],["D:/blog/public/2019/11/14/PAT-1069/index.html","7da8e773c298ae583b96052b50e0a81e"],["D:/blog/public/2019/11/14/PAT-1093/index.html","cf67ea05485f6675626dc21ca99e68a9"],["D:/blog/public/2019/11/14/PAT-1101/index.html","823a192de4de0f5288105c4ef01ab181"],["D:/blog/public/2019/11/14/blog分类规划/index.html","18434fa353d8d607914297f936cddafb"],["D:/blog/public/2019/11/14/北京游感/index.html","c71c2b48595c7a14ebe77a600fb46046"],["D:/blog/public/2019/11/14/热爱生命/1.png","0b865b5a8c5ffc65ab33586bb50513b7"],["D:/blog/public/2019/11/14/热爱生命/index.html","5da7f3298e0ecbe47d54df56d4b46919"],["D:/blog/public/2019/11/14/随想-1/index.html","6725ed82af2b088cbfd858faeeaf448a"],["D:/blog/public/2019/11/14/随想-2/1.png","ba65a9551263d1c1cb9c1870d1ee8a29"],["D:/blog/public/2019/11/14/随想-2/index.html","920f0ebb27ae32a652842a32731f61dd"],["D:/blog/public/2019/11/15/PAT-1032/index.html","dbca886d34c60710e431393d913b5c5a"],["D:/blog/public/2019/11/15/PAT-1059/index.html","0237c02fe10ed4fb4aea7dddfd4b06fa"],["D:/blog/public/2019/11/15/去南京/1.png","53d7c944f9a7326b86bd734f9d2d967c"],["D:/blog/public/2019/11/15/去南京/2.png","17208773d5c2ee30d094a597d4a8b9b6"],["D:/blog/public/2019/11/15/去南京/index.html","24f8e7ffcde0a641bf2cf805f00ac372"],["D:/blog/public/2019/11/16/PAT-1052/index.html","8d2689d608378fe25beaa688fb32a3ac"],["D:/blog/public/2019/11/16/连通块个数/index.html","e4c42b3ba38d29a32fbef9d768e2f9a9"],["D:/blog/public/2019/11/16/迷宫问题/index.html","2efd8958e3faaf13ac152315b9f9cd64"],["D:/blog/public/2019/11/17/Listening-training/index.html","2a843fdb4d45bea152fd08a89335207b"],["D:/blog/public/2019/11/17/PAT-1020/index.html","28fbcc6bdf61bf2d45b110bc5cf459e2"],["D:/blog/public/2019/11/18/随想-3/index.html","be152716b42036303e80e22b0154485c"],["D:/blog/public/2019/11/19/PAT-1053/index.html","e2066c262b0131ea68576256cd7db134"],["D:/blog/public/2019/11/19/Win环境配置/1.png","c32e495ccfeb914740d76fdf84b2fda3"],["D:/blog/public/2019/11/19/Win环境配置/2.png","4cb6305070b92541ac6749688e6ddec6"],["D:/blog/public/2019/11/19/Win环境配置/3.png","da3b800653c68b7c463ee0b5598055e9"],["D:/blog/public/2019/11/19/Win环境配置/index.html","1d830cacb77486737735979652058185"],["D:/blog/public/2019/11/20/PAT-1043/index.html","fcd34b2d59896bd6c70a2d4844175849"],["D:/blog/public/2019/11/22/PAT-1003/1.png","6fd7e183ac46df7222a1d2a2a4c9b12a"],["D:/blog/public/2019/11/22/PAT-1003/index.html","a7baa822fd91b4cdcb859f6f1b59088e"],["D:/blog/public/2019/11/22/PAT-1018/index.html","af149a85f47fbb6b2c5b59e538a392d8"],["D:/blog/public/2019/11/22/阅读管理/index.html","03815d9b889f150482933b663ae1a23f"],["D:/blog/public/2019/11/23/ExcelToMarkdown/index.html","9f3b9c05fb7e1bb25ec2322cf035eb06"],["D:/blog/public/2019/11/23/PAT-1030/1.png","aecb20c8058c5af85e249217e120debe"],["D:/blog/public/2019/11/23/PAT-1030/index.html","cab984641171be44361e4d5d7db64188"],["D:/blog/public/2019/11/23/四级选择填空高频词/index.html","b86f03bab5762c9f929275bc25310843"],["D:/blog/public/2019/11/24/PAT-1004/index.html","a119fac8798e3350fc82e679d7d57965"],["D:/blog/public/2019/11/24/PAT-1087/2.png","3a8111c12681b201c59e6a04840cf400"],["D:/blog/public/2019/11/24/PAT-1087/index.html","ec4e41376c51106b11d7b8d6924f0494"],["D:/blog/public/2019/11/25/Markdown编辑和预览/index.html","f21093218564ef4cdfd9d94f59f6894a"],["D:/blog/public/2019/11/25/PAT-1079/index.html","1fb9c653c58e9d5ac6cc30ec14330b24"],["D:/blog/public/2019/11/25/PAT-1086/index.html","2a7e3f0fd0e189450c05dad99ebc47f0"],["D:/blog/public/2019/11/25/PAT-1090/index.html","66f1b9a001569bab5059c3bc98ef67fb"],["D:/blog/public/2019/11/25/PAT自动签到/1.png","0131d4cb9e40bf24404e33de225bd771"],["D:/blog/public/2019/11/25/PAT自动签到/index.html","149cd9977cfe0f337ecf7d3ce3ed94d5"],["D:/blog/public/2019/11/25/字幕文件处理/index.html","d79a88c0482dee8f3d895deb68b2ed04"],["D:/blog/public/2019/11/25/用需求引导学习/index.html","d72f2a51157dbc2674b3cfb46c086ead"],["D:/blog/public/2019/11/26/PAT-1094/index.html","e659069297de4aa19d6e62c052bacadf"],["D:/blog/public/2019/11/28/PAT-1012/index.html","42c06b6efe64e17a160936ba3707df7f"],["D:/blog/public/2019/11/28/PAT-1102/index.html","510340eebcb42290882f544afdb3dd7e"],["D:/blog/public/2019/11/28/道路思考/index.html","abc60623ed3065084142e70e47b880c1"],["D:/blog/public/2019/11/30/随想-4/index.html","2569d5f6b9762dfbb665e3f3545c87b4"],["D:/blog/public/archives/2019/10/index.html","b8414e62b163922043a9bf51c28824b8"],["D:/blog/public/archives/2019/11/index.html","b4a11778dff874f4b1690e431bbdb3df"],["D:/blog/public/archives/2019/11/page/2/index.html","f54c3a9f12b06c77af9b434b8add64d8"],["D:/blog/public/archives/2019/11/page/3/index.html","6e129fe9201ac769e5e9e3648d744e94"],["D:/blog/public/archives/2019/11/page/4/index.html","72cb220aeaa8209584117ea0ec3a2b2b"],["D:/blog/public/archives/2019/11/page/5/index.html","5f7700b17f977407847dac4d326c934e"],["D:/blog/public/archives/2019/index.html","ad5d13448ccccb27af46604cecc36e0e"],["D:/blog/public/archives/2019/page/2/index.html","252e8e702d1188e42b42ed00439497b2"],["D:/blog/public/archives/2019/page/3/index.html","565f9c88d410fb97812f3a8c4e4f4647"],["D:/blog/public/archives/2019/page/4/index.html","93a06c769b911969a372b84f6fcceb68"],["D:/blog/public/archives/2019/page/5/index.html","5edc4461cb1ec727cbca67eb62bd4447"],["D:/blog/public/archives/2019/page/6/index.html","e623b32ff14751bfce645f18a0d208bd"],["D:/blog/public/archives/index.html","702066a486fa87adee07e46e054ae592"],["D:/blog/public/archives/page/2/index.html","841d3d3bc5952f60e83472581a7e134f"],["D:/blog/public/archives/page/3/index.html","b6f8a91c8f4f1e0b602ace9b2ad28edd"],["D:/blog/public/archives/page/4/index.html","3a2943eb668565d7b44285d32dca7b02"],["D:/blog/public/archives/page/5/index.html","7a347550fe9a17418133106194f0b68a"],["D:/blog/public/archives/page/6/index.html","e466e87b66f90f2e7ef7d3ac5f334ee9"],["D:/blog/public/categories/code/index.html","acd2babd9646b643e7af11a63a4b0920"],["D:/blog/public/categories/code/page/2/index.html","8bc831af36ae763d10d57979f88c0f15"],["D:/blog/public/categories/code/page/3/index.html","442a47c531379320579233efda826559"],["D:/blog/public/categories/code/page/4/index.html","572e3e5f1b844c442384c259431c8b0c"],["D:/blog/public/categories/index.html","9d4efc084b0919ffc69998d1f2f2549d"],["D:/blog/public/categories/life/index.html","516a41d26fabd1f11546ab83da4dea8f"],["D:/blog/public/categories/life/page/2/index.html","74517624f91b52843953f954294c3126"],["D:/blog/public/categories/note/index.html","4d97434059ad8cd90679478c9e71891b"],["D:/blog/public/css/index.css","9911b20a2e31dc1aa98c48e483335237"],["D:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/blog/public/index.html","d27452b5833a5645f35f7a08e94aaa36"],["D:/blog/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["D:/blog/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["D:/blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/blog/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["D:/blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/blog/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/blog/public/page/2/index.html","510a3150f1dbf467bc1268e28d56744d"],["D:/blog/public/page/3/index.html","535cfdda0fa44fb8247cd7e7b1ebe915"],["D:/blog/public/page/4/index.html","0a8103d4350fefc57738d31425d922a8"],["D:/blog/public/page/5/index.html","ea1104b775fe7978fd74bdb58758fe02"],["D:/blog/public/page/6/index.html","167c41dac9c45200b59f05fe50394fc8"],["D:/blog/public/tags/PAT/index.html","8384a804fbbdcbc933c3181680ec77d7"],["D:/blog/public/tags/PAT/page/2/index.html","8f6e30ae2bdf5ec544522dbb813aefc9"],["D:/blog/public/tags/bfs/index.html","f9fd1cbc67fdd50e5e234c1c24dd9034"],["D:/blog/public/tags/dfs/index.html","f1d74be872b2fd27f1ac8af28ae91f68"],["D:/blog/public/tags/dfs/page/2/index.html","6e476c7b1be98b49e45a7990fdb06ed6"],["D:/blog/public/tags/dijkstra/index.html","fff459551f32c92d94ab76ce76df1fb7"],["D:/blog/public/tags/english/index.html","a9bcfe97e0ced137db08a74de073267f"],["D:/blog/public/tags/git/index.html","3906a38ea3a708f6a958cf4d722184f8"],["D:/blog/public/tags/index.html","090d8ff0677808729cafccf1f95c1366"],["D:/blog/public/tags/plan/index.html","cac909063c312f30e127e31554a999b9"],["D:/blog/public/tags/python/index.html","fe865c9536a734ac0d23606eba9c499d"],["D:/blog/public/tags/python语法/index.html","b6bb56decee2f1e14e25b2336d7557bc"],["D:/blog/public/tags/travel/index.html","6acf669409f747b10e02627a09311dd4"],["D:/blog/public/tags/win/index.html","8375d2d9e61f75106b2998c51d5d83d2"],["D:/blog/public/tags/图/index.html","02f3ef7f2e3eca924ff3d44975579eb2"],["D:/blog/public/tags/图论/index.html","3201a6aed28cc17043ccf655ff3c570e"],["D:/blog/public/tags/字符串/index.html","dc05e8ff1100ec4bd0f5b769f624b6b8"],["D:/blog/public/tags/实践/index.html","ab6fa107f17ad6304593932575054938"],["D:/blog/public/tags/并查集/index.html","165b7bbeec6d62ada1b7e49bcd3d2bfb"],["D:/blog/public/tags/排序/index.html","9f28f8ca7a1520758071c7b58215e4d1"],["D:/blog/public/tags/数学/index.html","0ac58134c56defdca212d1ccf1caf6ca"],["D:/blog/public/tags/整理/index.html","2f4bfdad0106918f7087a40990a7b5b6"],["D:/blog/public/tags/文本编辑/index.html","a62fc063114562b5727b898d40e6266a"],["D:/blog/public/tags/树/index.html","2df714af9aa77ef5acf1030c03f566d8"],["D:/blog/public/tags/竞赛/index.html","a52095d70814b262196b7895ee156429"],["D:/blog/public/tags/纪念日/index.html","bbcdffbd7a1c2d5762f11da8ffd1e3c2"],["D:/blog/public/tags/脚本/index.html","d0045843fd494451a64cace56734c998"],["D:/blog/public/tags/链表/index.html","7b3197da36bae3fce2d1cbf2e2ff8ca7"]];
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







