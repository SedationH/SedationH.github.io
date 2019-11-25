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

var precacheConfig = [["D:/blog/public/2019/10/22/Markdown语法学习/index.html","a345f47b0fc9a3a6157de1233c69a1c1"],["D:/blog/public/2019/10/22/PAT-1122/index.html","0f926a181fbd98181d930f9316b7d946"],["D:/blog/public/2019/10/22/PAT计划/index.html","4bc36c1449f990b7ddadf7b523a938a3"],["D:/blog/public/2019/10/22/一周年纪念/1.png","b922b2b5d70da4521554e351b799eafa"],["D:/blog/public/2019/10/22/一周年纪念/10.jpg","4ee6bc37ff3698fa570a938b2bd3cd8f"],["D:/blog/public/2019/10/22/一周年纪念/11.jpg","1eb8883718238d92b64c1d22aa0ad727"],["D:/blog/public/2019/10/22/一周年纪念/12.jpg","6f72da1105ecd7baec4b4ae55a95c4e5"],["D:/blog/public/2019/10/22/一周年纪念/13.png","9a7c7b6afec674eb08e5607057ecadf9"],["D:/blog/public/2019/10/22/一周年纪念/14.jpg","1c2a7133e420bc4b898cff3c3a67c3cd"],["D:/blog/public/2019/10/22/一周年纪念/15.png","9c39368c806a0cfa2e7d709132df9056"],["D:/blog/public/2019/10/22/一周年纪念/16.png","35d0b5720714b6bdc6d3a406196eff55"],["D:/blog/public/2019/10/22/一周年纪念/17.png","9e7284fb82f396c4810ef96f1b4fe4f8"],["D:/blog/public/2019/10/22/一周年纪念/19.jpg","8a64b1eb0e09baf650be35c430e1e35b"],["D:/blog/public/2019/10/22/一周年纪念/20.jpg","0903b15ae3093a3532017dc07d32e3ac"],["D:/blog/public/2019/10/22/一周年纪念/21.jpg","22b445ee7acb7233b44fc4a25d3ae663"],["D:/blog/public/2019/10/22/一周年纪念/22.jpg","efc11d26abeff3b665daa5d9f2391f15"],["D:/blog/public/2019/10/22/一周年纪念/23.png","234580cc98d43a9b6e76eea8ec82470d"],["D:/blog/public/2019/10/22/一周年纪念/24.png","2ba8d6c8d4be23e8c33d3fc0f4b4b4d6"],["D:/blog/public/2019/10/22/一周年纪念/25.png","5ab1f6e4156096f8ba58f66255bc3c0a"],["D:/blog/public/2019/10/22/一周年纪念/27.jpg","836de2238b33e122dfca7d9da44f27e3"],["D:/blog/public/2019/10/22/一周年纪念/28.png","9e80a6a4a5ddebfd511f53ea1e8267b0"],["D:/blog/public/2019/10/22/一周年纪念/29.jpg","04f2ec6d41985b0ed3e44f2361c7899f"],["D:/blog/public/2019/10/22/一周年纪念/3.jpg","412cd99e96d03326a84f0c0a84d1ec10"],["D:/blog/public/2019/10/22/一周年纪念/30.png","befd1520ca9f8db304c88e9d88278df8"],["D:/blog/public/2019/10/22/一周年纪念/31.png","c18c6d47b84e55829bcfe8e11fb63729"],["D:/blog/public/2019/10/22/一周年纪念/32.jpg","14d40f93919dc0c17c38c039f8a35cb1"],["D:/blog/public/2019/10/22/一周年纪念/33.jpg","4e615748f58a6f23602d4a7806e6422c"],["D:/blog/public/2019/10/22/一周年纪念/5.png","9941823b1349fbb055ca615b6e3d54de"],["D:/blog/public/2019/10/22/一周年纪念/6.jpg","1266f0dcd054f6bd16fb50de12b43b26"],["D:/blog/public/2019/10/22/一周年纪念/8.png","6e4467f160ae2401f89d866bd1e7da2d"],["D:/blog/public/2019/10/22/一周年纪念/9.jpg","1e90bb672bca5590d1a4e79e97431fb8"],["D:/blog/public/2019/10/22/一周年纪念/index.html","58aef420b50a5ea79c33cdab017cf827"],["D:/blog/public/2019/10/25/PAT-1142/index.html","95e2e021f3ce8e5cc0d04271345b7559"],["D:/blog/public/2019/10/26/刷题技巧整理/index.html","e3d075901f4caf08656fea1f6709545c"],["D:/blog/public/2019/10/26/算法笔记阅读/1.png","92150d33ef3bd6c65a9aaced8376a92c"],["D:/blog/public/2019/10/26/算法笔记阅读/2.png","cfccd02ede828f058d6097a5ea36231e"],["D:/blog/public/2019/10/26/算法笔记阅读/3.png","8829fd0644f4aa7c563ed6700448d1a5"],["D:/blog/public/2019/10/26/算法笔记阅读/4.png","9cd3a2412ecc95904bc4fa988104670d"],["D:/blog/public/2019/10/26/算法笔记阅读/5.png","2d944484cd483c4328cf23f83f283df4"],["D:/blog/public/2019/10/26/算法笔记阅读/6.png","e029e7b61a5b2af8a9adca3fe5c958c7"],["D:/blog/public/2019/10/26/算法笔记阅读/7.png","e3ea1a023a3cd92a0f71600be7356567"],["D:/blog/public/2019/10/26/算法笔记阅读/8.png","6867de9496f219814cfdc9065a3300f5"],["D:/blog/public/2019/10/26/算法笔记阅读/9.png","9edf64d883da58014326c3dfe069972b"],["D:/blog/public/2019/10/26/算法笔记阅读/index.html","098f83e3c967d73100e2b85631c4aebd"],["D:/blog/public/2019/10/29/PAT-1013/index.html","251a7aa50f66ffc3b2d7f1bb8b753c8b"],["D:/blog/public/2019/10/29/PAT-1034/index.html","90c3355d8d296e238c1693116a556a0f"],["D:/blog/public/2019/10/30/PAT-1021/index.html","2096b3543e2cbad7ebd874c8199d19c5"],["D:/blog/public/2019/11/03/Mac折腾记录/index.html","511b674f825f9976bd86f40878b4d8fc"],["D:/blog/public/2019/11/04/VSCode使用/1.png","e8132b252da910da84d0d1ae36572702"],["D:/blog/public/2019/11/04/VSCode使用/2.png","3c8c0b6004e0d69eb0fe084e61359e9f"],["D:/blog/public/2019/11/04/VSCode使用/index.html","d96ecf91897c154c5d4692c22e2a82fa"],["D:/blog/public/2019/11/05/PAT-1107/index.html","b6e3d42b8323ff51ec1548c454211a56"],["D:/blog/public/2019/11/05/文件自动分类脚本/index.html","1c9542426a8421ef1777875b06473bdf"],["D:/blog/public/2019/11/06/PAT-1114/index.html","56f0e746ccb0a7da02961f8075209fb3"],["D:/blog/public/2019/11/06/python基础/index.html","a0929638c1502d7d0c8c11da6abc4b4c"],["D:/blog/public/2019/11/07/git学习/0.jpg","701e02bf0b2d71ab51b7e2b6aa973d52"],["D:/blog/public/2019/11/07/git学习/1.png","2adbbdf8d8bab5606af6279ef5612da2"],["D:/blog/public/2019/11/07/git学习/2.png","c6f039420a0f851eb424883511ac4e2f"],["D:/blog/public/2019/11/07/git学习/3.png","06f0d7d34075653ba25a18ea0fea8b7d"],["D:/blog/public/2019/11/07/git学习/4.png","cb8a9c11c8fd1326260bbc7c2c6a62ac"],["D:/blog/public/2019/11/07/git学习/index.html","0ea7c8d8e0869140831c778bcef67a63"],["D:/blog/public/2019/11/13/PAT-1025/index.html","5c4a3f771a9af1a9a98b178011accb79"],["D:/blog/public/2019/11/14/H和T的成长回忆录/index.html","6b039b29a573809c203ac9f48cbcb148"],["D:/blog/public/2019/11/14/PAT-1069/index.html","019f0483395c3de10a355e2a5e892a87"],["D:/blog/public/2019/11/14/PAT-1093/index.html","6b7b09d514cf3f2fd363e6f28d4fa570"],["D:/blog/public/2019/11/14/PAT-1101/index.html","35fbd1a196078082068d7084f2251342"],["D:/blog/public/2019/11/14/blog分类规划/index.html","4f8bc3ac795a1042031f109da6a93d89"],["D:/blog/public/2019/11/14/北京游感/index.html","d3dd4b686c0ad68e49c8139fb721b316"],["D:/blog/public/2019/11/14/热爱生命/1.png","0b865b5a8c5ffc65ab33586bb50513b7"],["D:/blog/public/2019/11/14/热爱生命/index.html","1af789eb0400d41d0b61451a045a18e2"],["D:/blog/public/2019/11/14/随想-1/index.html","f408d74c4d83359fb555ac076bdaf4d1"],["D:/blog/public/2019/11/14/随想-2/1.png","ba65a9551263d1c1cb9c1870d1ee8a29"],["D:/blog/public/2019/11/14/随想-2/index.html","c3a034185d6930212bbd6b0ed6e1d2df"],["D:/blog/public/2019/11/15/PAT-1032/index.html","7a5d5cc1e3456c603c2fdffecb8f8fcc"],["D:/blog/public/2019/11/15/PAT-1059/index.html","2482b7dcf9127b397c41486a180861cd"],["D:/blog/public/2019/11/15/去南京/1.png","53d7c944f9a7326b86bd734f9d2d967c"],["D:/blog/public/2019/11/15/去南京/2.png","17208773d5c2ee30d094a597d4a8b9b6"],["D:/blog/public/2019/11/15/去南京/index.html","8c8f1131d8c1b5e94590673c38f27cc5"],["D:/blog/public/2019/11/16/PAT-1052/index.html","7eeaebe7bde58b9d8696061724bbc11d"],["D:/blog/public/2019/11/16/连通块个数/index.html","ab1d0cd8429e55d318cc0b4d59aecfdb"],["D:/blog/public/2019/11/16/迷宫问题/index.html","5eecad9fb48f4054d9204ca878aa9ea9"],["D:/blog/public/2019/11/17/Listening-training/index.html","4c5e6a4cc80e2d724341ab6eb9e01eb9"],["D:/blog/public/2019/11/17/PAT-1020/index.html","714c0d464ccc95952a358fd49d3fc15f"],["D:/blog/public/2019/11/18/随想-3/index.html","c43a4163482f0984e1db3ccb5a46978f"],["D:/blog/public/2019/11/19/PAT-1053/index.html","601d063cf39805c496f36bcc614fef0f"],["D:/blog/public/2019/11/19/Win环境配置/1.png","c32e495ccfeb914740d76fdf84b2fda3"],["D:/blog/public/2019/11/19/Win环境配置/2.png","4cb6305070b92541ac6749688e6ddec6"],["D:/blog/public/2019/11/19/Win环境配置/3.png","da3b800653c68b7c463ee0b5598055e9"],["D:/blog/public/2019/11/19/Win环境配置/index.html","0c3f87c97304e2668b57b325b8f982f5"],["D:/blog/public/2019/11/20/PAT-1043/index.html","37ba992d540be7cc9e637baeb06432d1"],["D:/blog/public/2019/11/22/PAT-1003/1.png","6fd7e183ac46df7222a1d2a2a4c9b12a"],["D:/blog/public/2019/11/22/PAT-1003/index.html","8cf4b1bc4b38429579876c72ba0b4881"],["D:/blog/public/2019/11/22/PAT-1018/index.html","85a263063c847ef10607f6b07190aa41"],["D:/blog/public/2019/11/22/阅读管理/index.html","71ec015ff055cad34c553abe2b4cf70e"],["D:/blog/public/2019/11/23/ExcelToMarkdown/index.html","de916eca90a580abdd2dd80b040b80ba"],["D:/blog/public/2019/11/23/PAT-1030/1.png","aecb20c8058c5af85e249217e120debe"],["D:/blog/public/2019/11/23/PAT-1030/index.html","4cc523b3224e1e9c1d7d622009f86aa5"],["D:/blog/public/2019/11/23/四级选择填空高频词/index.html","08d5d13805991a1f3f7c27dbb24319b7"],["D:/blog/public/2019/11/24/PAT-1004/index.html","417bd451cb82b9168980842b53bd7a0b"],["D:/blog/public/2019/11/24/PAT-1087/2.png","3a8111c12681b201c59e6a04840cf400"],["D:/blog/public/2019/11/24/PAT-1087/index.html","e68ca81f860f5542a00a9e109f68edb1"],["D:/blog/public/2019/11/25/Markdown编辑和预览/index.html","9615c471569533f2cb0a589921345aea"],["D:/blog/public/2019/11/25/PAT自动签到/index.html","9605f249f5d404d8d11e3485134eadc4"],["D:/blog/public/2019/11/25/字幕文件处理/index.html","53ca49bdf142b8888ffec0ceb8ac8af3"],["D:/blog/public/2019/11/25/用需求引导学习/index.html","2a39caf07f73af1f909f0974b4738243"],["D:/blog/public/archives/2019/10/index.html","49f493592806115e6f8b9e391e3764a8"],["D:/blog/public/archives/2019/11/index.html","cee474c5f6f2d80ae3904739c31898a4"],["D:/blog/public/archives/2019/11/page/2/index.html","8300c4e4dee3adcd73b029c23c1f9496"],["D:/blog/public/archives/2019/11/page/3/index.html","c818c9ae2739c1b7fcd342a4633ddf4e"],["D:/blog/public/archives/2019/11/page/4/index.html","58fa7c5117ed5cbc08717ab6ac1d9358"],["D:/blog/public/archives/2019/11/page/5/index.html","f6189fd694016b939c917e5e8a0b40ad"],["D:/blog/public/archives/2019/index.html","3fe0d5859ec9df82b8eb48e2c5ac3e53"],["D:/blog/public/archives/2019/page/2/index.html","d9d22f0a8b75019b292d5d948ef68550"],["D:/blog/public/archives/2019/page/3/index.html","7179832a5d5ba8c5f90a033d5017246b"],["D:/blog/public/archives/2019/page/4/index.html","6b63b959894a6a70c9e0c9e2aac07643"],["D:/blog/public/archives/2019/page/5/index.html","baa9146d12499364ec3a294fdbe83ab6"],["D:/blog/public/archives/2019/page/6/index.html","f111db475623caeccb53736ecbb1b874"],["D:/blog/public/archives/index.html","fe1bba00e08fbc7c3a8df8563696af8a"],["D:/blog/public/archives/page/2/index.html","08efe1d0ff118f19a4ea220baa66617d"],["D:/blog/public/archives/page/3/index.html","a9ebad6493db003abdb43e67abaf1a6f"],["D:/blog/public/archives/page/4/index.html","8136f64af70767de37973d7059dd331a"],["D:/blog/public/archives/page/5/index.html","3ec1237a23574c482aa56be480457ea4"],["D:/blog/public/archives/page/6/index.html","2c209e3ff27d90f60627ae3d586244a9"],["D:/blog/public/categories/code/index.html","0ef36a6c2696e18e9138a747ed98ed65"],["D:/blog/public/categories/code/page/2/index.html","a616ee07afbd1b30fc323ab944fc819d"],["D:/blog/public/categories/code/page/3/index.html","560369a770b0692300b882419dee52da"],["D:/blog/public/categories/index.html","ecfe95d6b1715368be140cfed1373328"],["D:/blog/public/categories/life/index.html","5490f8142be66dce5b10abef26e502b4"],["D:/blog/public/categories/life/page/2/index.html","f1eb30c8dcd2c0288699752637817e12"],["D:/blog/public/categories/note/index.html","92b52cc436b23f313048090d12aef46e"],["D:/blog/public/css/index.css","9911b20a2e31dc1aa98c48e483335237"],["D:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/blog/public/index.html","1586c774edffc97948c003d3c639a2a8"],["D:/blog/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["D:/blog/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["D:/blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/blog/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["D:/blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/blog/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/blog/public/page/2/index.html","b6f21f54084a516326873f563e58e6e2"],["D:/blog/public/page/3/index.html","98d6039c5769aaa1c94ba59d91e189b4"],["D:/blog/public/page/4/index.html","b08c6a880b00523b8a481ffbaf6dac80"],["D:/blog/public/page/5/index.html","ee494549d0caf5c1a9968066c27abe5c"],["D:/blog/public/page/6/index.html","c2dedfb103d0a6bf517026af9ef22548"],["D:/blog/public/tags/PAT/index.html","cffc1dbea48a90d8635cdd9b795ef76f"],["D:/blog/public/tags/PAT/page/2/index.html","833d6e8acc0f0b4d5ec5565c7cdd857b"],["D:/blog/public/tags/bfs/index.html","c0ee4766399673bf5c3a1776f83cb295"],["D:/blog/public/tags/dfs/index.html","a5193ab696826ac49be88796afb6c4e7"],["D:/blog/public/tags/dijkstra/index.html","b2f3b603b3c46f3aa646998845d9f669"],["D:/blog/public/tags/english/index.html","2bc24e5d76ff1183990859f00bfd2c28"],["D:/blog/public/tags/git/index.html","d590ff14ee2726ea55b84de196b3d4fc"],["D:/blog/public/tags/index.html","59fb5bc1a17243ff369d2e9ca3aa2f50"],["D:/blog/public/tags/plan/index.html","953222a058739ae4f9a3ee4aa00dc271"],["D:/blog/public/tags/python/index.html","21ce20af640361f3cee0fb4861b01e29"],["D:/blog/public/tags/python语法/index.html","0628a952746dd002f23f72c9b20b7fd2"],["D:/blog/public/tags/travel/index.html","b40469dba2660db76c03d47865468773"],["D:/blog/public/tags/win/index.html","6ea10275d3f49afe419a29b36da275b6"],["D:/blog/public/tags/图/index.html","a9f425073dfd938b9174feb1d8c5b1aa"],["D:/blog/public/tags/图论/index.html","f1e2bbbc468fc55dd4bf77602d2db542"],["D:/blog/public/tags/字符串/index.html","3c53e504d853c78f27c376e1d5ea87ce"],["D:/blog/public/tags/实践/index.html","3ee5a46e606e88e5f43620a4dda7d8de"],["D:/blog/public/tags/并查集/index.html","53b13bdc311bf169b25613e8aaec8399"],["D:/blog/public/tags/排序/index.html","6dda9771469eac996f0f76aa4f98e2b2"],["D:/blog/public/tags/数学/index.html","9637ba028425b953926e80f64ef05966"],["D:/blog/public/tags/整理/index.html","8ef5432f830b8840a8a150ca53ed8550"],["D:/blog/public/tags/文本编辑/index.html","fe4964d8dbb097b948a0e3dc3cbf9144"],["D:/blog/public/tags/树/index.html","31a30f4249f3ba7939fd645a794b73e1"],["D:/blog/public/tags/竞赛/index.html","239ad3eccfedd9c0bdb926c4a0de84b6"],["D:/blog/public/tags/纪念日/index.html","fead6fcf3b1227c2fb1cd5c62b3741a8"],["D:/blog/public/tags/脚本/index.html","d87c6388f1ab07436df1a57c23524b03"],["D:/blog/public/tags/链表/index.html","94bcdacb43b0903577705f5a672a49fc"]];
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







