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

var precacheConfig = [["D:/blog/public/2019/10/22/Markdown语法学习/index.html","c519cadd7d434e43945918421293774d"],["D:/blog/public/2019/10/22/PAT-1122/index.html","2b149404af2ce5b4c043be14745d86a0"],["D:/blog/public/2019/10/22/PAT计划/index.html","4438e42a70922d6e4b9047e944751a5c"],["D:/blog/public/2019/10/22/一周年纪念/1.png","b922b2b5d70da4521554e351b799eafa"],["D:/blog/public/2019/10/22/一周年纪念/10.jpg","4ee6bc37ff3698fa570a938b2bd3cd8f"],["D:/blog/public/2019/10/22/一周年纪念/11.jpg","1eb8883718238d92b64c1d22aa0ad727"],["D:/blog/public/2019/10/22/一周年纪念/12.jpg","6f72da1105ecd7baec4b4ae55a95c4e5"],["D:/blog/public/2019/10/22/一周年纪念/13.png","9a7c7b6afec674eb08e5607057ecadf9"],["D:/blog/public/2019/10/22/一周年纪念/14.jpg","1c2a7133e420bc4b898cff3c3a67c3cd"],["D:/blog/public/2019/10/22/一周年纪念/15.png","9c39368c806a0cfa2e7d709132df9056"],["D:/blog/public/2019/10/22/一周年纪念/16.png","35d0b5720714b6bdc6d3a406196eff55"],["D:/blog/public/2019/10/22/一周年纪念/17.png","9e7284fb82f396c4810ef96f1b4fe4f8"],["D:/blog/public/2019/10/22/一周年纪念/19.jpg","8a64b1eb0e09baf650be35c430e1e35b"],["D:/blog/public/2019/10/22/一周年纪念/20.jpg","0903b15ae3093a3532017dc07d32e3ac"],["D:/blog/public/2019/10/22/一周年纪念/21.jpg","22b445ee7acb7233b44fc4a25d3ae663"],["D:/blog/public/2019/10/22/一周年纪念/22.jpg","efc11d26abeff3b665daa5d9f2391f15"],["D:/blog/public/2019/10/22/一周年纪念/23.png","234580cc98d43a9b6e76eea8ec82470d"],["D:/blog/public/2019/10/22/一周年纪念/24.png","2ba8d6c8d4be23e8c33d3fc0f4b4b4d6"],["D:/blog/public/2019/10/22/一周年纪念/25.png","5ab1f6e4156096f8ba58f66255bc3c0a"],["D:/blog/public/2019/10/22/一周年纪念/27.jpg","836de2238b33e122dfca7d9da44f27e3"],["D:/blog/public/2019/10/22/一周年纪念/28.png","9e80a6a4a5ddebfd511f53ea1e8267b0"],["D:/blog/public/2019/10/22/一周年纪念/29.jpg","04f2ec6d41985b0ed3e44f2361c7899f"],["D:/blog/public/2019/10/22/一周年纪念/3.jpg","412cd99e96d03326a84f0c0a84d1ec10"],["D:/blog/public/2019/10/22/一周年纪念/30.png","befd1520ca9f8db304c88e9d88278df8"],["D:/blog/public/2019/10/22/一周年纪念/31.png","c18c6d47b84e55829bcfe8e11fb63729"],["D:/blog/public/2019/10/22/一周年纪念/32.jpg","14d40f93919dc0c17c38c039f8a35cb1"],["D:/blog/public/2019/10/22/一周年纪念/33.jpg","4e615748f58a6f23602d4a7806e6422c"],["D:/blog/public/2019/10/22/一周年纪念/5.png","9941823b1349fbb055ca615b6e3d54de"],["D:/blog/public/2019/10/22/一周年纪念/6.jpg","1266f0dcd054f6bd16fb50de12b43b26"],["D:/blog/public/2019/10/22/一周年纪念/8.png","6e4467f160ae2401f89d866bd1e7da2d"],["D:/blog/public/2019/10/22/一周年纪念/9.jpg","1e90bb672bca5590d1a4e79e97431fb8"],["D:/blog/public/2019/10/22/一周年纪念/index.html","f2aa15dce23ab5e7cc67d77ae655e74f"],["D:/blog/public/2019/10/25/PAT-1142/index.html","61bdfc51bb5d08eab95fcf7f6beaa220"],["D:/blog/public/2019/10/26/刷题技巧整理/index.html","dd07f609bbf3b40ec6fd697eff228ce1"],["D:/blog/public/2019/10/26/算法笔记阅读/1.png","92150d33ef3bd6c65a9aaced8376a92c"],["D:/blog/public/2019/10/26/算法笔记阅读/2.png","cfccd02ede828f058d6097a5ea36231e"],["D:/blog/public/2019/10/26/算法笔记阅读/3.png","8829fd0644f4aa7c563ed6700448d1a5"],["D:/blog/public/2019/10/26/算法笔记阅读/4.png","9cd3a2412ecc95904bc4fa988104670d"],["D:/blog/public/2019/10/26/算法笔记阅读/5.png","2d944484cd483c4328cf23f83f283df4"],["D:/blog/public/2019/10/26/算法笔记阅读/6.png","e029e7b61a5b2af8a9adca3fe5c958c7"],["D:/blog/public/2019/10/26/算法笔记阅读/7.png","e3ea1a023a3cd92a0f71600be7356567"],["D:/blog/public/2019/10/26/算法笔记阅读/8.png","6867de9496f219814cfdc9065a3300f5"],["D:/blog/public/2019/10/26/算法笔记阅读/9.png","9edf64d883da58014326c3dfe069972b"],["D:/blog/public/2019/10/26/算法笔记阅读/index.html","34ecdf7f79beb4661de5b03df6abbb1c"],["D:/blog/public/2019/10/29/PAT-1013/index.html","3e4ff1caa98bbb2799a0c8d009c4b134"],["D:/blog/public/2019/10/29/PAT-1034/index.html","7b9a2dd25feb8aadb7d1663efaf6fd26"],["D:/blog/public/2019/10/30/PAT-1021/index.html","9ca9b6904f647d5ee93f861379c86d09"],["D:/blog/public/2019/11/03/Mac折腾记录/index.html","216837ae3696b8e3d323612335db50c8"],["D:/blog/public/2019/11/04/VSCode使用/1.png","e8132b252da910da84d0d1ae36572702"],["D:/blog/public/2019/11/04/VSCode使用/2.png","3c8c0b6004e0d69eb0fe084e61359e9f"],["D:/blog/public/2019/11/04/VSCode使用/index.html","99c58175d9db7d82947122fb1692a97b"],["D:/blog/public/2019/11/05/PAT-1107/index.html","11610a13f8b758c80346cd1cd6b3a680"],["D:/blog/public/2019/11/05/文件自动分类脚本/index.html","1ec851900389c8fe0b16e9ebde3c9c23"],["D:/blog/public/2019/11/06/PAT-1114/index.html","0d2a1cd0f945449a4eb1fae675246f4b"],["D:/blog/public/2019/11/06/python基础/index.html","8408d9d9a959a13e4a0cdd018e48922f"],["D:/blog/public/2019/11/07/git学习/0.jpg","701e02bf0b2d71ab51b7e2b6aa973d52"],["D:/blog/public/2019/11/07/git学习/1.png","2adbbdf8d8bab5606af6279ef5612da2"],["D:/blog/public/2019/11/07/git学习/2.png","c6f039420a0f851eb424883511ac4e2f"],["D:/blog/public/2019/11/07/git学习/3.png","06f0d7d34075653ba25a18ea0fea8b7d"],["D:/blog/public/2019/11/07/git学习/4.png","cb8a9c11c8fd1326260bbc7c2c6a62ac"],["D:/blog/public/2019/11/07/git学习/index.html","0f8fa33d3443a124ccd27a1b9d568700"],["D:/blog/public/2019/11/13/PAT-1025/index.html","9d32a194bd23018aa40a9eca6ac6458c"],["D:/blog/public/2019/11/14/H和T的成长回忆录/index.html","3ebaf9e19e01c1a5b615457031910b22"],["D:/blog/public/2019/11/14/PAT-1069/index.html","a9e97bff90d6e9fcd41117c91573e46f"],["D:/blog/public/2019/11/14/PAT-1093/index.html","72602c8592aa1fddb186fe293b609e0e"],["D:/blog/public/2019/11/14/PAT-1101/index.html","00ce326f69204c3f15dd49603caabe54"],["D:/blog/public/2019/11/14/blog分类规划/index.html","5696f21a3bd1a1b4e2f844bba4c781df"],["D:/blog/public/2019/11/14/北京游感/index.html","d079242c1f47cfb23edaacc992feaf52"],["D:/blog/public/2019/11/14/热爱生命/1.png","0b865b5a8c5ffc65ab33586bb50513b7"],["D:/blog/public/2019/11/14/热爱生命/index.html","867d160b17bced262af67b4a1f0f90e3"],["D:/blog/public/2019/11/14/随想-1/index.html","59c62fba6873966503c55d4807c42224"],["D:/blog/public/2019/11/14/随想-2/1.png","ba65a9551263d1c1cb9c1870d1ee8a29"],["D:/blog/public/2019/11/14/随想-2/index.html","ced166295eef95eafefbaf6b8ca781cf"],["D:/blog/public/2019/11/15/PAT-1032/index.html","8a711b576e2c6293911069bce2e61838"],["D:/blog/public/2019/11/15/PAT-1059/index.html","2af18de2753c941c91a89dce8b1d5e76"],["D:/blog/public/2019/11/15/去南京/1.png","53d7c944f9a7326b86bd734f9d2d967c"],["D:/blog/public/2019/11/15/去南京/2.png","17208773d5c2ee30d094a597d4a8b9b6"],["D:/blog/public/2019/11/15/去南京/index.html","fe0d5872f2ad20a5d40ce61909fbec21"],["D:/blog/public/2019/11/16/PAT-1052/index.html","6f241936311e3d12ff8b98564d7f3a48"],["D:/blog/public/2019/11/16/连通块个数/index.html","81a884596a7e3aaeef3b40ef0b6cb4c7"],["D:/blog/public/2019/11/16/迷宫问题/index.html","897a63f8e346d85c8ddcb852e49b662f"],["D:/blog/public/2019/11/17/Listening-training/index.html","00eefa244b9b5de7382d5a24ce268831"],["D:/blog/public/2019/11/17/PAT-1020/index.html","ebf261db7ffeec63383eb4b66423f8f6"],["D:/blog/public/2019/11/18/随想-3/index.html","910da8185cf00b93fe8150e7b7359814"],["D:/blog/public/2019/11/19/PAT-1053/index.html","fba454f17a56abf956603d564fc2ae6b"],["D:/blog/public/2019/11/19/Win环境配置/1.png","c32e495ccfeb914740d76fdf84b2fda3"],["D:/blog/public/2019/11/19/Win环境配置/2.png","4cb6305070b92541ac6749688e6ddec6"],["D:/blog/public/2019/11/19/Win环境配置/3.png","da3b800653c68b7c463ee0b5598055e9"],["D:/blog/public/2019/11/19/Win环境配置/index.html","6d5cb4bd548022fe6a7842b4278b860c"],["D:/blog/public/2019/11/20/PAT-1043/index.html","2b85c1ac263d49842c1fa712d60e73ae"],["D:/blog/public/2019/11/22/PAT-1003/1.png","6fd7e183ac46df7222a1d2a2a4c9b12a"],["D:/blog/public/2019/11/22/PAT-1003/index.html","6de88771ef45041a7c057f9875d15233"],["D:/blog/public/2019/11/22/PAT-1018/index.html","f6708ccc3df80e042de0c346c80e3d44"],["D:/blog/public/2019/11/22/阅读管理/index.html","4f3767577ce7b9308ec454b88e9245f5"],["D:/blog/public/2019/11/23/ExcelToMarkdown/index.html","7875e2863f8955b7ba06961f8fb7c714"],["D:/blog/public/2019/11/23/PAT-1030/1.png","aecb20c8058c5af85e249217e120debe"],["D:/blog/public/2019/11/23/PAT-1030/index.html","fd56df7d733aa2edc9b3d0b15d1e42be"],["D:/blog/public/2019/11/23/四级选择填空高频词/index.html","f29448b7cf7823c0bbcdaf22107f854f"],["D:/blog/public/2019/11/24/PAT-1004/index.html","2a596892ac7fd770aef4f82da6fce60f"],["D:/blog/public/2019/11/24/PAT-1087/2.png","3a8111c12681b201c59e6a04840cf400"],["D:/blog/public/2019/11/24/PAT-1087/index.html","e7aa2d09a2d31968eaf48ffff7ee2b81"],["D:/blog/public/2019/11/25/Markdown编辑和预览/index.html","a76f52d38b8bea5637752420586ed2c1"],["D:/blog/public/2019/11/25/PAT-1079/index.html","26129e8cd18f8646e29d3756f71ab24a"],["D:/blog/public/2019/11/25/PAT-1086/index.html","818931e79e419c287a4b9d2d603b7f74"],["D:/blog/public/2019/11/25/PAT-1090/index.html","18a8e518fea69f868a3c993e2a5bbceb"],["D:/blog/public/2019/11/25/PAT自动签到/1.png","0131d4cb9e40bf24404e33de225bd771"],["D:/blog/public/2019/11/25/PAT自动签到/index.html","213989155cf19a487a594df1b71df42a"],["D:/blog/public/2019/11/25/字幕文件处理/index.html","a17c7ea89f829b10c35244ecd1926b3f"],["D:/blog/public/2019/11/26/PAT-1094/index.html","548c0b8416e8cf4b2d3ad3831ea517af"],["D:/blog/public/2019/11/28/PAT-1012/index.html","4e9dc9c6429914bffb0a5ce093810f20"],["D:/blog/public/2019/11/28/PAT-1102/index.html","635dc871412a5b72d41db4322009742a"],["D:/blog/public/2019/11/28/道路思考/index.html","8437c2b04b2929250b2ed9a526433792"],["D:/blog/public/2019/11/30/随想-4/index.html","4999eb24536cd015cfd692e2957bda20"],["D:/blog/public/2019/12/02/PAT考前准备/index.html","d2cbf782bded70f57582324eab90eaaa"],["D:/blog/public/2019/12/03/PAT-1074/index.html","5b3ac670abf29c4b3549ea200f3dfb17"],["D:/blog/public/2019/12/04/PAT-1115/index.html","9e32d010af43bf77228e5491c9d6a253"],["D:/blog/public/2019/12/10/test/index.html","915aafa62d73575b90af11c9f5699323"],["D:/blog/public/2019/12/16/随想-5/index.html","f8ca72b6f20694cc49475a881c4fe6d8"],["D:/blog/public/2019/12/19/cplus面向对象复习/index.html","373aae3380858559c73638daa956eaf6"],["D:/blog/public/2019/12/30/前端学习记录与规划/index.html","663cf8d9b699f14cc18c703f7dc7ad3b"],["D:/blog/public/2020/01/15/npm总结/index.html","7d2508bc36421b03415f61374787dfb3"],["D:/blog/public/2020/01/15/课程表项目/1.png","0140062a02b8b105d92bff1b33543798"],["D:/blog/public/2020/01/15/课程表项目/index.html","8b2fa455f434059557001bd05d4ddea3"],["D:/blog/public/2020/01/20/mock数据模拟/1.png","1b3e790f2719f4f89eb0be809b8bc423"],["D:/blog/public/2020/01/20/mock数据模拟/index.html","1f3b505f80ad774ec8456c0ee70d42d1"],["D:/blog/public/2020/01/24/css总结/1.png","31e77bd078ce99e1bb524531c0fdf01b"],["D:/blog/public/2020/01/24/css总结/index.html","bee7e133a4d049943ea088abf23c2197"],["D:/blog/public/2020/01/25/个人博客项目/index.html","fddbc8a7d840134eec0e11cb79da258b"],["D:/blog/public/archives/2019/10/index.html","ed507099eb5d8951f5561b3b50ca0271"],["D:/blog/public/archives/2019/11/index.html","005a235c43b91853b2acdea3e1db371c"],["D:/blog/public/archives/2019/11/page/2/index.html","bf9c2e4a1d4e704077be996d04863ef7"],["D:/blog/public/archives/2019/11/page/3/index.html","38a1990c4b548c93e4a94f1830a4a0c3"],["D:/blog/public/archives/2019/11/page/4/index.html","217b74eb0f5a14f5619f987dbb82f87a"],["D:/blog/public/archives/2019/11/page/5/index.html","41385331abb209d80ce5dc4701e9ff4d"],["D:/blog/public/archives/2019/12/index.html","c571e67e4d0acb4859a75a381b1151c9"],["D:/blog/public/archives/2019/index.html","e3ffff0a2c841594c026a2ff8c99f159"],["D:/blog/public/archives/2019/page/2/index.html","9c7ed72d4791fa0ba5cad342c155dba7"],["D:/blog/public/archives/2019/page/3/index.html","08d28e1c6e62a0ef7d62adb112979f79"],["D:/blog/public/archives/2019/page/4/index.html","69eb5c6e38dfc5566fd425a50d2281db"],["D:/blog/public/archives/2019/page/5/index.html","0e6eb6ae706555790a43a7f3140dacf7"],["D:/blog/public/archives/2019/page/6/index.html","893e637516e27ae5d5eebd2888652f22"],["D:/blog/public/archives/2019/page/7/index.html","47b21597fba276e5246b4502d3579bd6"],["D:/blog/public/archives/2020/01/index.html","f65090d9c9e3e47c9428b49a5e82afec"],["D:/blog/public/archives/2020/index.html","56bb8d836efbf1c217285006acf99a42"],["D:/blog/public/archives/index.html","00d47a26a7cc6bb10a93247da18a3742"],["D:/blog/public/archives/page/2/index.html","c91d53162c1507ec4079a129eea0ee54"],["D:/blog/public/archives/page/3/index.html","493f6a3e53708ba2a0d75500e9bb32b4"],["D:/blog/public/archives/page/4/index.html","5d4b938edb848dc2042982e2a4268505"],["D:/blog/public/archives/page/5/index.html","a026f2b56b6169f914557e2940b1c8c5"],["D:/blog/public/archives/page/6/index.html","33c962181f4e694629872c490d26cd73"],["D:/blog/public/archives/page/7/index.html","5200dd4d7bcdcb0070a05d1d78822bcf"],["D:/blog/public/categories/code/index.html","b77630fd9d2949f895da9d453d37084c"],["D:/blog/public/categories/code/page/2/index.html","829166143b49da7b5d68e536332be13e"],["D:/blog/public/categories/code/page/3/index.html","72d899e809788f9653492092e36fbf91"],["D:/blog/public/categories/code/page/4/index.html","48d187c3a1dcb8b44240ed7e6779cdbb"],["D:/blog/public/categories/code/page/5/index.html","f143da65afb686908831def2c5bdba9d"],["D:/blog/public/categories/index.html","d5162e72ac294617f19be28739718b1d"],["D:/blog/public/categories/life/index.html","6d95ed062178b67fe4d45659f614319d"],["D:/blog/public/categories/life/page/2/index.html","2f5db618b721e46373af1b196ceb9a4c"],["D:/blog/public/categories/note/index.html","7d16749237624c6fc5820f0e2f0f54ca"],["D:/blog/public/categories/note/page/2/index.html","337d0f016da84a6ace5cc6a438e612b5"],["D:/blog/public/css/index.css","9911b20a2e31dc1aa98c48e483335237"],["D:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/blog/public/index.html","4a6236d3da57ace256e6795478bff9cb"],["D:/blog/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["D:/blog/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["D:/blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/blog/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["D:/blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/blog/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/blog/public/page/2/index.html","df18810bbdf029378449d9da88ed39fc"],["D:/blog/public/page/3/index.html","d2d580906231b086bbf1d6fe39131b00"],["D:/blog/public/page/4/index.html","c1c86e1d949e6c5cae68d0f12ff71ac3"],["D:/blog/public/page/5/index.html","f074ab3aeb66c205a938f48a00c6ce4b"],["D:/blog/public/page/6/index.html","833835f45765675feed8dcbed8fc67e9"],["D:/blog/public/page/7/index.html","58194a4565a387b87e42367c72268025"],["D:/blog/public/tags/PAT/index.html","a4313f7a56b7b7a7b790ab0b6f2be945"],["D:/blog/public/tags/PAT/page/2/index.html","cb07c0f574ce17a887cb03a45e59c2bd"],["D:/blog/public/tags/bfs/index.html","288650c64c26c32735361b75fa949885"],["D:/blog/public/tags/dfs/index.html","07442ec03de920705453c654d725ec5a"],["D:/blog/public/tags/dfs/page/2/index.html","f39c302a599691c683005fa271eb4ccb"],["D:/blog/public/tags/dijkstra/index.html","a62e58ecadb52cc82ec6dcef84fa0b85"],["D:/blog/public/tags/english/index.html","1d0dd40f031a39918b78856c9f6a3849"],["D:/blog/public/tags/git/index.html","a1e9a4d16be4eadd2c0d3f680096ad13"],["D:/blog/public/tags/index.html","d0ce6d556e49cd29bd3a67509fc57b24"],["D:/blog/public/tags/plan/index.html","cba995c7c6cc961b91c90ca5d7fceacd"],["D:/blog/public/tags/python/index.html","15bfd1adcbb4811f69ba54f2a78d2b36"],["D:/blog/public/tags/python语法/index.html","e8b0c2299efa0efc47234088a4d89294"],["D:/blog/public/tags/travel/index.html","61ee76b02d23f8448b70626d6c1c055e"],["D:/blog/public/tags/win/index.html","df7d4d77c84f83d4dc53a2cc6bee5370"],["D:/blog/public/tags/图/index.html","17530a542accde36b8d1612878069c08"],["D:/blog/public/tags/图论/index.html","dfa62e4cb487131a2be709e0eda159bf"],["D:/blog/public/tags/字符串/index.html","3bbf6d8a629f3d82f8dd2a49ed9654cd"],["D:/blog/public/tags/实践/index.html","49e9b4bfa3a1968e890a2b87c58c8943"],["D:/blog/public/tags/并查集/index.html","bfd3abfcbf3236a6778b7bb200f15fbf"],["D:/blog/public/tags/排序/index.html","8de07d05bc5f97edeb603cd969e05109"],["D:/blog/public/tags/数学/index.html","220dc2a6919999d478819843adcf9002"],["D:/blog/public/tags/整理/index.html","f6d32230d1407e53e1d7e70867b5c5cb"],["D:/blog/public/tags/文本编辑/index.html","5bb52b461e4dd49a7969e3126c9d7001"],["D:/blog/public/tags/树/index.html","0a3faa2bedc260aeb081d02c41351f77"],["D:/blog/public/tags/竞赛/index.html","78011eab297728e9c48d2dc9fbafccb3"],["D:/blog/public/tags/纪念日/index.html","0b5de91e71adcf39098027b3b32765a6"],["D:/blog/public/tags/脚本/index.html","7a00556215efc5177ec7655bff42b6a5"],["D:/blog/public/tags/链表/index.html","6b4a467f83cf5dc45535f28121fb64c8"]];
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







