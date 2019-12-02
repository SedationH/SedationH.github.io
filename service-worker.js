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

var precacheConfig = [["D:/blog/public/2019/10/22/Markdown语法学习/index.html","0412856b1ff267528ddb0d28bb2cc339"],["D:/blog/public/2019/10/22/PAT-1122/index.html","7a848f0dcbcac5953716b941b4f1af88"],["D:/blog/public/2019/10/22/PAT计划/index.html","60fc7c0dc7b26c822efdf0a254d5dd33"],["D:/blog/public/2019/10/22/一周年纪念/1.png","b922b2b5d70da4521554e351b799eafa"],["D:/blog/public/2019/10/22/一周年纪念/10.jpg","4ee6bc37ff3698fa570a938b2bd3cd8f"],["D:/blog/public/2019/10/22/一周年纪念/11.jpg","1eb8883718238d92b64c1d22aa0ad727"],["D:/blog/public/2019/10/22/一周年纪念/12.jpg","6f72da1105ecd7baec4b4ae55a95c4e5"],["D:/blog/public/2019/10/22/一周年纪念/13.png","9a7c7b6afec674eb08e5607057ecadf9"],["D:/blog/public/2019/10/22/一周年纪念/14.jpg","1c2a7133e420bc4b898cff3c3a67c3cd"],["D:/blog/public/2019/10/22/一周年纪念/15.png","9c39368c806a0cfa2e7d709132df9056"],["D:/blog/public/2019/10/22/一周年纪念/16.png","35d0b5720714b6bdc6d3a406196eff55"],["D:/blog/public/2019/10/22/一周年纪念/17.png","9e7284fb82f396c4810ef96f1b4fe4f8"],["D:/blog/public/2019/10/22/一周年纪念/19.jpg","8a64b1eb0e09baf650be35c430e1e35b"],["D:/blog/public/2019/10/22/一周年纪念/20.jpg","0903b15ae3093a3532017dc07d32e3ac"],["D:/blog/public/2019/10/22/一周年纪念/21.jpg","22b445ee7acb7233b44fc4a25d3ae663"],["D:/blog/public/2019/10/22/一周年纪念/22.jpg","efc11d26abeff3b665daa5d9f2391f15"],["D:/blog/public/2019/10/22/一周年纪念/23.png","234580cc98d43a9b6e76eea8ec82470d"],["D:/blog/public/2019/10/22/一周年纪念/24.png","2ba8d6c8d4be23e8c33d3fc0f4b4b4d6"],["D:/blog/public/2019/10/22/一周年纪念/25.png","5ab1f6e4156096f8ba58f66255bc3c0a"],["D:/blog/public/2019/10/22/一周年纪念/27.jpg","836de2238b33e122dfca7d9da44f27e3"],["D:/blog/public/2019/10/22/一周年纪念/28.png","9e80a6a4a5ddebfd511f53ea1e8267b0"],["D:/blog/public/2019/10/22/一周年纪念/29.jpg","04f2ec6d41985b0ed3e44f2361c7899f"],["D:/blog/public/2019/10/22/一周年纪念/3.jpg","412cd99e96d03326a84f0c0a84d1ec10"],["D:/blog/public/2019/10/22/一周年纪念/30.png","befd1520ca9f8db304c88e9d88278df8"],["D:/blog/public/2019/10/22/一周年纪念/31.png","c18c6d47b84e55829bcfe8e11fb63729"],["D:/blog/public/2019/10/22/一周年纪念/32.jpg","14d40f93919dc0c17c38c039f8a35cb1"],["D:/blog/public/2019/10/22/一周年纪念/33.jpg","4e615748f58a6f23602d4a7806e6422c"],["D:/blog/public/2019/10/22/一周年纪念/5.png","9941823b1349fbb055ca615b6e3d54de"],["D:/blog/public/2019/10/22/一周年纪念/6.jpg","1266f0dcd054f6bd16fb50de12b43b26"],["D:/blog/public/2019/10/22/一周年纪念/8.png","6e4467f160ae2401f89d866bd1e7da2d"],["D:/blog/public/2019/10/22/一周年纪念/9.jpg","1e90bb672bca5590d1a4e79e97431fb8"],["D:/blog/public/2019/10/22/一周年纪念/index.html","b4770c0bbe5c1130dbe1a49df6b4ad12"],["D:/blog/public/2019/10/25/PAT-1142/index.html","26d220d4f2e1bdbdcd864d1b4ec9e356"],["D:/blog/public/2019/10/26/刷题技巧整理/index.html","32e9185355d2bdae2203c0a349017c61"],["D:/blog/public/2019/10/26/算法笔记阅读/1.png","92150d33ef3bd6c65a9aaced8376a92c"],["D:/blog/public/2019/10/26/算法笔记阅读/2.png","cfccd02ede828f058d6097a5ea36231e"],["D:/blog/public/2019/10/26/算法笔记阅读/3.png","8829fd0644f4aa7c563ed6700448d1a5"],["D:/blog/public/2019/10/26/算法笔记阅读/4.png","9cd3a2412ecc95904bc4fa988104670d"],["D:/blog/public/2019/10/26/算法笔记阅读/5.png","2d944484cd483c4328cf23f83f283df4"],["D:/blog/public/2019/10/26/算法笔记阅读/6.png","e029e7b61a5b2af8a9adca3fe5c958c7"],["D:/blog/public/2019/10/26/算法笔记阅读/7.png","e3ea1a023a3cd92a0f71600be7356567"],["D:/blog/public/2019/10/26/算法笔记阅读/8.png","6867de9496f219814cfdc9065a3300f5"],["D:/blog/public/2019/10/26/算法笔记阅读/9.png","9edf64d883da58014326c3dfe069972b"],["D:/blog/public/2019/10/26/算法笔记阅读/index.html","751e447a84ad904a730506c229c33dda"],["D:/blog/public/2019/10/29/PAT-1013/index.html","e0654b6d923ff9ea9372fd295727b71c"],["D:/blog/public/2019/10/29/PAT-1034/index.html","35e6b5195c6cc1039e243ce4df6d9186"],["D:/blog/public/2019/10/30/PAT-1021/index.html","92a2465b78c0fbfbee4972831f0a9367"],["D:/blog/public/2019/11/03/Mac折腾记录/index.html","e89db317e429640a4331b845cbb70525"],["D:/blog/public/2019/11/04/VSCode使用/1.png","e8132b252da910da84d0d1ae36572702"],["D:/blog/public/2019/11/04/VSCode使用/2.png","3c8c0b6004e0d69eb0fe084e61359e9f"],["D:/blog/public/2019/11/04/VSCode使用/index.html","3f2800dc4d58db20a1573934f1f9a5b3"],["D:/blog/public/2019/11/05/PAT-1107/index.html","8d22274e282fb0b4d4786a99cf754e29"],["D:/blog/public/2019/11/05/文件自动分类脚本/index.html","906eeab38c182784bfa45815ddd12fc2"],["D:/blog/public/2019/11/06/PAT-1114/index.html","e2ad524b45bc4578f78f1cee41daf0fd"],["D:/blog/public/2019/11/06/python基础/index.html","aa58eb6ccc5e028c4f039e23cc4e4bc8"],["D:/blog/public/2019/11/07/git学习/0.jpg","701e02bf0b2d71ab51b7e2b6aa973d52"],["D:/blog/public/2019/11/07/git学习/1.png","2adbbdf8d8bab5606af6279ef5612da2"],["D:/blog/public/2019/11/07/git学习/2.png","c6f039420a0f851eb424883511ac4e2f"],["D:/blog/public/2019/11/07/git学习/3.png","06f0d7d34075653ba25a18ea0fea8b7d"],["D:/blog/public/2019/11/07/git学习/4.png","cb8a9c11c8fd1326260bbc7c2c6a62ac"],["D:/blog/public/2019/11/07/git学习/index.html","29bc8d9947a5a108ec74a09115af0e9c"],["D:/blog/public/2019/11/13/PAT-1025/index.html","e1f923186f7500ae5e4d43a860029f2e"],["D:/blog/public/2019/11/14/H和T的成长回忆录/index.html","ea814e6d036dd1d5dbe96b6cac51920b"],["D:/blog/public/2019/11/14/PAT-1069/index.html","5ba3b26a45b40d3b1f4b3786df89e77e"],["D:/blog/public/2019/11/14/PAT-1093/index.html","aa9c9d8e03e1210f9a4064436c4466d0"],["D:/blog/public/2019/11/14/PAT-1101/index.html","9165fd95e47a5869e8d5c7f99939120e"],["D:/blog/public/2019/11/14/blog分类规划/index.html","a53d22967a302cd950e2ca2b2f859649"],["D:/blog/public/2019/11/14/北京游感/index.html","a9c127c6ee99e6c3c73ed0f281509d66"],["D:/blog/public/2019/11/14/热爱生命/1.png","0b865b5a8c5ffc65ab33586bb50513b7"],["D:/blog/public/2019/11/14/热爱生命/index.html","e57af9c90cc2af99b01328306cab8ce9"],["D:/blog/public/2019/11/14/随想-1/index.html","421349ccb0138879978cba3ec95ad3fa"],["D:/blog/public/2019/11/14/随想-2/1.png","ba65a9551263d1c1cb9c1870d1ee8a29"],["D:/blog/public/2019/11/14/随想-2/index.html","d53183fa80a86f356481f9de17f0f4c5"],["D:/blog/public/2019/11/15/PAT-1032/index.html","7e001e496612417fd5e1aac3a88c8e90"],["D:/blog/public/2019/11/15/PAT-1059/index.html","dcc0c953827a224cc24fca37eae34546"],["D:/blog/public/2019/11/15/去南京/1.png","53d7c944f9a7326b86bd734f9d2d967c"],["D:/blog/public/2019/11/15/去南京/2.png","17208773d5c2ee30d094a597d4a8b9b6"],["D:/blog/public/2019/11/15/去南京/index.html","5165cb3f7f94ad6fe5ca770e90137d7b"],["D:/blog/public/2019/11/16/PAT-1052/index.html","48e49d7b09ffa1d899fda6415caabe4f"],["D:/blog/public/2019/11/16/连通块个数/index.html","b13d777bc8bf93160d8269d2c9a1f355"],["D:/blog/public/2019/11/16/迷宫问题/index.html","21feaed75d04cb56090ddcd13657221c"],["D:/blog/public/2019/11/17/Listening-training/index.html","8965ac9dd34106f88535b49eacdf95ca"],["D:/blog/public/2019/11/17/PAT-1020/index.html","3ef05f8baba33d8287bfcfb44b427941"],["D:/blog/public/2019/11/18/随想-3/index.html","8a753f45e7855e50b9ac46f0d680e8e0"],["D:/blog/public/2019/11/19/PAT-1053/index.html","aaddd1e2ef8f00447c6a9772b60facfe"],["D:/blog/public/2019/11/19/Win环境配置/1.png","c32e495ccfeb914740d76fdf84b2fda3"],["D:/blog/public/2019/11/19/Win环境配置/2.png","4cb6305070b92541ac6749688e6ddec6"],["D:/blog/public/2019/11/19/Win环境配置/3.png","da3b800653c68b7c463ee0b5598055e9"],["D:/blog/public/2019/11/19/Win环境配置/index.html","3160436d9651bce128e101c39f7ce4e9"],["D:/blog/public/2019/11/20/PAT-1043/index.html","8acafa33ccd9e41770a9af00222f5969"],["D:/blog/public/2019/11/22/PAT-1003/1.png","6fd7e183ac46df7222a1d2a2a4c9b12a"],["D:/blog/public/2019/11/22/PAT-1003/index.html","2d5e8a9fcf9109d84463b68f28cdef47"],["D:/blog/public/2019/11/22/PAT-1018/index.html","f96b245493a331e918dd4e8dc20bb431"],["D:/blog/public/2019/11/22/阅读管理/index.html","43e35d973a47349f7bf09fbe16ea56ff"],["D:/blog/public/2019/11/23/ExcelToMarkdown/index.html","35ee9e1f8220f25cae2c378de51403c7"],["D:/blog/public/2019/11/23/PAT-1030/1.png","aecb20c8058c5af85e249217e120debe"],["D:/blog/public/2019/11/23/PAT-1030/index.html","93152da6835bbff644e92ac6674b815a"],["D:/blog/public/2019/11/23/四级选择填空高频词/index.html","c8623d59060197c636421e0bc72c77d9"],["D:/blog/public/2019/11/24/PAT-1004/index.html","023c052810a568c630918e9918e671e9"],["D:/blog/public/2019/11/24/PAT-1087/2.png","3a8111c12681b201c59e6a04840cf400"],["D:/blog/public/2019/11/24/PAT-1087/index.html","34437c3c64efedc6fa845b3fcb1aa731"],["D:/blog/public/2019/11/25/Markdown编辑和预览/index.html","e09e82e8b40eb8cbff2f831561d71bee"],["D:/blog/public/2019/11/25/PAT-1079/index.html","54253a58556068251bd81f99901880af"],["D:/blog/public/2019/11/25/PAT-1086/index.html","838db2025fd4895ef49198e94b8bfce0"],["D:/blog/public/2019/11/25/PAT-1090/index.html","0df6dc9f84aecc72895f2e55636943a8"],["D:/blog/public/2019/11/25/PAT自动签到/1.png","0131d4cb9e40bf24404e33de225bd771"],["D:/blog/public/2019/11/25/PAT自动签到/index.html","d09bd9c7ac7c4427c389e16bf1748d07"],["D:/blog/public/2019/11/25/字幕文件处理/index.html","914959b1ce3636b90eca53df181ccfb5"],["D:/blog/public/2019/11/25/用需求引导学习/index.html","47c75568c8556d8e4286fc44d8af0f83"],["D:/blog/public/2019/11/26/PAT-1094/index.html","02fc18604764469bddb68c598bdec270"],["D:/blog/public/2019/11/28/PAT-1012/index.html","d806e6f7fadfcfbc5d775fb81fe8e4c4"],["D:/blog/public/2019/11/28/PAT-1102/index.html","373987e4fc686250f93fcaae94505fd7"],["D:/blog/public/2019/11/28/道路思考/index.html","49a64325f170f9ff7b561bd37009e823"],["D:/blog/public/2019/11/30/随想-4/index.html","70745428f55719a02ded0011835caf14"],["D:/blog/public/2019/12/02/PAT考前准备/index.html","2b8b0a05cbe787aa066cb2e78359a6d9"],["D:/blog/public/archives/2019/10/index.html","10e19fba9ee92fba8f46a6dc5b61a38d"],["D:/blog/public/archives/2019/11/index.html","8414d87349d8c50277c4185144ea0008"],["D:/blog/public/archives/2019/11/page/2/index.html","a7625e4732867d7c6556fc160aac960b"],["D:/blog/public/archives/2019/11/page/3/index.html","e4b8ace354d156fffdd05695904bdad3"],["D:/blog/public/archives/2019/11/page/4/index.html","8aee2e2f7e73cbe2494390528b6e4c92"],["D:/blog/public/archives/2019/11/page/5/index.html","cd04f884d00d72c77d208ba9f53aa727"],["D:/blog/public/archives/2019/12/index.html","10147b5b830c122768b60c223065a226"],["D:/blog/public/archives/2019/index.html","f3a83f4f27c22315de446598d15818f0"],["D:/blog/public/archives/2019/page/2/index.html","ca8e84e2ec85ddbb853ef34e23360693"],["D:/blog/public/archives/2019/page/3/index.html","98549c33305cd8c4449af6619b342f79"],["D:/blog/public/archives/2019/page/4/index.html","af5e125bf8343d0051345a6538551964"],["D:/blog/public/archives/2019/page/5/index.html","03447f4e10590d2e0b8419698014fee8"],["D:/blog/public/archives/2019/page/6/index.html","442a2d8cf8a5a33168909e6188bf1e71"],["D:/blog/public/archives/index.html","b1482b7865c0af1c710639f56ac9a10b"],["D:/blog/public/archives/page/2/index.html","7aa7383d7eaa4c209e272b457d2d95a0"],["D:/blog/public/archives/page/3/index.html","cba478f702e09ab00e35da33b05cd7c7"],["D:/blog/public/archives/page/4/index.html","d6e21a2ec5632fb5ff1de068be299d95"],["D:/blog/public/archives/page/5/index.html","de5183cdec8a7ac9187f4d853c013e6b"],["D:/blog/public/archives/page/6/index.html","bb715ff3d11254f7819b6f9db7cba504"],["D:/blog/public/categories/code/index.html","abe02e1320fbd8fd20942214048eddb5"],["D:/blog/public/categories/code/page/2/index.html","542361feb478aa6865ccc20b8072a3ca"],["D:/blog/public/categories/code/page/3/index.html","6e8898bf284fe774d62d4ee470fde200"],["D:/blog/public/categories/code/page/4/index.html","6283050f4e7a4c259f7025502f58249b"],["D:/blog/public/categories/index.html","1af9a28dae9abe18a8e55a6338a82487"],["D:/blog/public/categories/life/index.html","01f4a282bbf9b0fa4cce99e7864e4ce6"],["D:/blog/public/categories/life/page/2/index.html","c094d7599185ae2516d11a29b61f0eff"],["D:/blog/public/categories/note/index.html","04ff20b0b26ec061a74532a32724be79"],["D:/blog/public/css/index.css","9911b20a2e31dc1aa98c48e483335237"],["D:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/blog/public/index.html","2fa1c8bb639a016ca88cfbee5afe36b9"],["D:/blog/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["D:/blog/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["D:/blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/blog/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["D:/blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/blog/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/blog/public/page/2/index.html","c30f3344195fc00aca926853f13e07c1"],["D:/blog/public/page/3/index.html","20f45fb82310a867b7bc936336dcfbeb"],["D:/blog/public/page/4/index.html","e1be9ccf18fe1fff83aeebed9243c610"],["D:/blog/public/page/5/index.html","091eb0187ecb18286db4a875500b1c76"],["D:/blog/public/page/6/index.html","e9591e7b17ff855ed067f5f070975148"],["D:/blog/public/tags/PAT/index.html","6b2f0db60b0a92a8147a426a0908999e"],["D:/blog/public/tags/PAT/page/2/index.html","d0b7fd0ec14e51fa73cc104547b129df"],["D:/blog/public/tags/bfs/index.html","cb8f800ff5ef486e5c6a383504160d88"],["D:/blog/public/tags/dfs/index.html","8e3f5d408f680f51edd0611a7d8d5674"],["D:/blog/public/tags/dfs/page/2/index.html","00963d6e5f232dea5f7f1a509ec0d208"],["D:/blog/public/tags/dijkstra/index.html","315c68029570bb73e6532d0b87fa34fe"],["D:/blog/public/tags/english/index.html","e1e9e337630943136a6ffb7014415d40"],["D:/blog/public/tags/git/index.html","629ef54db0147e4d99036e906e921f1b"],["D:/blog/public/tags/index.html","c7ba6b8cfd39fffb89422554bdfcc701"],["D:/blog/public/tags/plan/index.html","0e213d7a6c01ec443763a9fadcc0a51a"],["D:/blog/public/tags/python/index.html","34ee4e214cd90f13299826dd478bbc67"],["D:/blog/public/tags/python语法/index.html","291326a6c91b358048bc25664b9caa10"],["D:/blog/public/tags/travel/index.html","0762b763bb3174e28b822b2df831bfe8"],["D:/blog/public/tags/win/index.html","62a3eaacd67e2154359aa3da79fa1252"],["D:/blog/public/tags/图/index.html","1d3ea65527d229561ce484ac0cb1586e"],["D:/blog/public/tags/图论/index.html","ea607c5f1113b6d1455642334e8b492f"],["D:/blog/public/tags/字符串/index.html","1fb9da84edbbd212f600b4049ffb86e8"],["D:/blog/public/tags/实践/index.html","b2e2b78ba4fbdb85eaf07785f114f94e"],["D:/blog/public/tags/并查集/index.html","8e28287375dfd807d83eab61eaf7f116"],["D:/blog/public/tags/排序/index.html","3b68737aa4f9a1f41647abd5c2dadc7b"],["D:/blog/public/tags/数学/index.html","12800cf49c17af5a52b96949b3836c12"],["D:/blog/public/tags/整理/index.html","5351ca90f8eda5fd2e87189c8134a9f7"],["D:/blog/public/tags/文本编辑/index.html","005bc2c380e53d6217d56ac503bdf656"],["D:/blog/public/tags/树/index.html","d53a867917e7faa4f73189f74f40d8b3"],["D:/blog/public/tags/竞赛/index.html","5394ea94c196522d65f680901dbdad61"],["D:/blog/public/tags/纪念日/index.html","102a1c259502ce57828dd9db94f4b444"],["D:/blog/public/tags/脚本/index.html","c915aa657253b81eb18bdf9c6e0456d4"],["D:/blog/public/tags/链表/index.html","480bdf2bc2876632cde3970d145e702b"]];
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







