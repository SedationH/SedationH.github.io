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

var precacheConfig = [["D:/blog/public/2019/10/22/Markdown语法学习/index.html","a2fc1d3d70b81c4a6011ea79fd51b81c"],["D:/blog/public/2019/10/22/PAT-1122/index.html","1089f9de867da4b10c2c0461db9000f9"],["D:/blog/public/2019/10/22/PAT计划/index.html","f176c4f3ddfa62ce90cd78f631f4e9ef"],["D:/blog/public/2019/10/22/一周年纪念/1.png","b922b2b5d70da4521554e351b799eafa"],["D:/blog/public/2019/10/22/一周年纪念/10.jpg","4ee6bc37ff3698fa570a938b2bd3cd8f"],["D:/blog/public/2019/10/22/一周年纪念/11.jpg","1eb8883718238d92b64c1d22aa0ad727"],["D:/blog/public/2019/10/22/一周年纪念/12.jpg","6f72da1105ecd7baec4b4ae55a95c4e5"],["D:/blog/public/2019/10/22/一周年纪念/13.png","9a7c7b6afec674eb08e5607057ecadf9"],["D:/blog/public/2019/10/22/一周年纪念/14.jpg","1c2a7133e420bc4b898cff3c3a67c3cd"],["D:/blog/public/2019/10/22/一周年纪念/15.png","9c39368c806a0cfa2e7d709132df9056"],["D:/blog/public/2019/10/22/一周年纪念/16.png","35d0b5720714b6bdc6d3a406196eff55"],["D:/blog/public/2019/10/22/一周年纪念/17.png","9e7284fb82f396c4810ef96f1b4fe4f8"],["D:/blog/public/2019/10/22/一周年纪念/19.jpg","8a64b1eb0e09baf650be35c430e1e35b"],["D:/blog/public/2019/10/22/一周年纪念/20.jpg","0903b15ae3093a3532017dc07d32e3ac"],["D:/blog/public/2019/10/22/一周年纪念/21.jpg","22b445ee7acb7233b44fc4a25d3ae663"],["D:/blog/public/2019/10/22/一周年纪念/22.jpg","efc11d26abeff3b665daa5d9f2391f15"],["D:/blog/public/2019/10/22/一周年纪念/23.png","234580cc98d43a9b6e76eea8ec82470d"],["D:/blog/public/2019/10/22/一周年纪念/24.png","2ba8d6c8d4be23e8c33d3fc0f4b4b4d6"],["D:/blog/public/2019/10/22/一周年纪念/25.png","5ab1f6e4156096f8ba58f66255bc3c0a"],["D:/blog/public/2019/10/22/一周年纪念/27.jpg","836de2238b33e122dfca7d9da44f27e3"],["D:/blog/public/2019/10/22/一周年纪念/28.png","9e80a6a4a5ddebfd511f53ea1e8267b0"],["D:/blog/public/2019/10/22/一周年纪念/29.jpg","04f2ec6d41985b0ed3e44f2361c7899f"],["D:/blog/public/2019/10/22/一周年纪念/3.jpg","412cd99e96d03326a84f0c0a84d1ec10"],["D:/blog/public/2019/10/22/一周年纪念/30.png","befd1520ca9f8db304c88e9d88278df8"],["D:/blog/public/2019/10/22/一周年纪念/31.png","c18c6d47b84e55829bcfe8e11fb63729"],["D:/blog/public/2019/10/22/一周年纪念/32.jpg","14d40f93919dc0c17c38c039f8a35cb1"],["D:/blog/public/2019/10/22/一周年纪念/33.jpg","4e615748f58a6f23602d4a7806e6422c"],["D:/blog/public/2019/10/22/一周年纪念/5.png","9941823b1349fbb055ca615b6e3d54de"],["D:/blog/public/2019/10/22/一周年纪念/6.jpg","1266f0dcd054f6bd16fb50de12b43b26"],["D:/blog/public/2019/10/22/一周年纪念/8.png","6e4467f160ae2401f89d866bd1e7da2d"],["D:/blog/public/2019/10/22/一周年纪念/9.jpg","1e90bb672bca5590d1a4e79e97431fb8"],["D:/blog/public/2019/10/22/一周年纪念/index.html","4d2fce8df9a2ff986e4f75b4cac7bae2"],["D:/blog/public/2019/10/25/PAT-1142/index.html","e7f6dd1c490d31b35977a60a8d87bbee"],["D:/blog/public/2019/10/26/刷题技巧整理/index.html","7ae6d3b9624c8f2189eeac9bc24456f0"],["D:/blog/public/2019/10/26/算法笔记阅读/1.png","92150d33ef3bd6c65a9aaced8376a92c"],["D:/blog/public/2019/10/26/算法笔记阅读/2.png","cfccd02ede828f058d6097a5ea36231e"],["D:/blog/public/2019/10/26/算法笔记阅读/3.png","8829fd0644f4aa7c563ed6700448d1a5"],["D:/blog/public/2019/10/26/算法笔记阅读/4.png","9cd3a2412ecc95904bc4fa988104670d"],["D:/blog/public/2019/10/26/算法笔记阅读/5.png","2d944484cd483c4328cf23f83f283df4"],["D:/blog/public/2019/10/26/算法笔记阅读/6.png","e029e7b61a5b2af8a9adca3fe5c958c7"],["D:/blog/public/2019/10/26/算法笔记阅读/7.png","e3ea1a023a3cd92a0f71600be7356567"],["D:/blog/public/2019/10/26/算法笔记阅读/8.png","6867de9496f219814cfdc9065a3300f5"],["D:/blog/public/2019/10/26/算法笔记阅读/9.png","9edf64d883da58014326c3dfe069972b"],["D:/blog/public/2019/10/26/算法笔记阅读/index.html","e9648e3ec7af9bce0e8154eb20bc11d0"],["D:/blog/public/2019/10/29/PAT-1013/index.html","fe92130100a512d92e49684439f37a34"],["D:/blog/public/2019/10/29/PAT-1034/index.html","c7ea77669bab1279de61eaef6e8fbe8f"],["D:/blog/public/2019/10/30/PAT-1021/index.html","1b092adf0a47feedd6fca795aff6bb12"],["D:/blog/public/2019/11/03/Mac折腾记录/index.html","7d2e117fd95f923a793340e0f0277ceb"],["D:/blog/public/2019/11/04/VSCode使用/1.png","e8132b252da910da84d0d1ae36572702"],["D:/blog/public/2019/11/04/VSCode使用/2.png","3c8c0b6004e0d69eb0fe084e61359e9f"],["D:/blog/public/2019/11/04/VSCode使用/index.html","9c909efe449e5612cce843da77ec31b5"],["D:/blog/public/2019/11/05/PAT-1107/index.html","542bf693461cb00eaf03941ad91be116"],["D:/blog/public/2019/11/05/文件自动分类脚本/index.html","a20d5259c4a0bd0bd458cc93a410c1de"],["D:/blog/public/2019/11/06/PAT-1114/index.html","bd1f107ae6d3e8e333d1104e84210cba"],["D:/blog/public/2019/11/06/python基础/index.html","da078814fea96345c97ffe94fbbd2f6b"],["D:/blog/public/2019/11/07/git学习/0.jpg","701e02bf0b2d71ab51b7e2b6aa973d52"],["D:/blog/public/2019/11/07/git学习/1.png","2adbbdf8d8bab5606af6279ef5612da2"],["D:/blog/public/2019/11/07/git学习/2.png","c6f039420a0f851eb424883511ac4e2f"],["D:/blog/public/2019/11/07/git学习/3.png","06f0d7d34075653ba25a18ea0fea8b7d"],["D:/blog/public/2019/11/07/git学习/4.png","cb8a9c11c8fd1326260bbc7c2c6a62ac"],["D:/blog/public/2019/11/07/git学习/index.html","3266422b970203c7d60f34640980f48d"],["D:/blog/public/2019/11/13/PAT-1025/index.html","ba9096035e0cc60c02e3898774e6c6b2"],["D:/blog/public/2019/11/14/H和T的成长回忆录/index.html","c2f4ce8d0450e26248d48d9a74e294fd"],["D:/blog/public/2019/11/14/PAT-1069/index.html","543b146fa33711aa04835ace9fd55ce3"],["D:/blog/public/2019/11/14/PAT-1093/index.html","f0406e3b06258ccf7ceae1220f266e3e"],["D:/blog/public/2019/11/14/PAT-1101/index.html","13f3e1c53f6bc78b310d436e5ab72888"],["D:/blog/public/2019/11/14/blog分类规划/index.html","7d8e68a09576900c088207fbc8613bff"],["D:/blog/public/2019/11/14/北京游感/index.html","e6cdd6d84d2715c78864a473c6b41cea"],["D:/blog/public/2019/11/14/热爱生命/1.png","0b865b5a8c5ffc65ab33586bb50513b7"],["D:/blog/public/2019/11/14/热爱生命/index.html","db7530cdee288d1c1a9482f5d49a6628"],["D:/blog/public/2019/11/14/随想-1/index.html","37e5faf2e26ce12db09f7a53dceaecd2"],["D:/blog/public/2019/11/14/随想-2/1.png","ba65a9551263d1c1cb9c1870d1ee8a29"],["D:/blog/public/2019/11/14/随想-2/index.html","003e9ab9d398cdf5c3a4c77e9fba8a9d"],["D:/blog/public/2019/11/15/PAT-1032/index.html","bf63d335a1173dd55d3e565d0af47932"],["D:/blog/public/2019/11/15/PAT-1059/index.html","947eaa2f138e7d568b84cc3abd4dad69"],["D:/blog/public/2019/11/15/去南京/1.png","53d7c944f9a7326b86bd734f9d2d967c"],["D:/blog/public/2019/11/15/去南京/2.png","17208773d5c2ee30d094a597d4a8b9b6"],["D:/blog/public/2019/11/15/去南京/index.html","1f1e12baa7c6ca04779bbbf94409b9bf"],["D:/blog/public/2019/11/16/PAT-1052/index.html","7f4873cb89a7f55290ca1b24ed5334f6"],["D:/blog/public/2019/11/16/连通块个数/index.html","3c0b18f564829e1b1464b1cc45e2b10a"],["D:/blog/public/2019/11/16/迷宫问题/index.html","1deb30f961e4db0d5b59b44dd13ff3d7"],["D:/blog/public/2019/11/17/Listening-training/index.html","44324a9b798df9886b24418563bee512"],["D:/blog/public/2019/11/17/PAT-1020/index.html","ac8cdc5d6e9a1c4bddd6946c2861c585"],["D:/blog/public/2019/11/18/随想-3/index.html","3602c19be6ce726a1283835c01e5da7b"],["D:/blog/public/2019/11/19/PAT-1053/index.html","bbb4b6c49fb51576f9bfc45802e92be4"],["D:/blog/public/2019/11/19/Win环境配置/1.png","c32e495ccfeb914740d76fdf84b2fda3"],["D:/blog/public/2019/11/19/Win环境配置/2.png","4cb6305070b92541ac6749688e6ddec6"],["D:/blog/public/2019/11/19/Win环境配置/3.png","da3b800653c68b7c463ee0b5598055e9"],["D:/blog/public/2019/11/19/Win环境配置/index.html","b8d6a012c7639254302be1327503120e"],["D:/blog/public/2019/11/20/PAT-1043/index.html","4f9c1777fdd749dd9f26aa7ead744a31"],["D:/blog/public/2019/11/22/PAT-1003/1.png","6fd7e183ac46df7222a1d2a2a4c9b12a"],["D:/blog/public/2019/11/22/PAT-1003/index.html","d08155abe6ed1e79eca80564beabf49f"],["D:/blog/public/2019/11/22/PAT-1018/index.html","e8cd6a2d595ffd1cecd0d82f28ea756e"],["D:/blog/public/2019/11/22/阅读管理/index.html","b9036fdc7b7d3583d07658c85e731500"],["D:/blog/public/2019/11/23/ExcelToMarkdown/index.html","ad74b03ab3cee0116d64166d8e26ba5d"],["D:/blog/public/2019/11/23/PAT-1030/1.png","aecb20c8058c5af85e249217e120debe"],["D:/blog/public/2019/11/23/PAT-1030/index.html","bd86b756f9c70d28aa4c593834fd270b"],["D:/blog/public/2019/11/23/四级选择填空高频词/index.html","7f4ef202a73de3adb4923fc665082e05"],["D:/blog/public/2019/11/24/PAT-1004/index.html","764f5fcc93fd2c24f0489203f93bdca7"],["D:/blog/public/2019/11/24/PAT-1087/2.png","3a8111c12681b201c59e6a04840cf400"],["D:/blog/public/2019/11/24/PAT-1087/index.html","c94881cf5a524fd0f12ce82d4f05f41d"],["D:/blog/public/2019/11/25/Markdown编辑和预览/index.html","6e47ade77ffe2c550c54095a171326e7"],["D:/blog/public/2019/11/25/PAT-1079/index.html","c4f6c34181a21ad50828f7d76a8c161b"],["D:/blog/public/2019/11/25/PAT-1086/index.html","aa27a734d951f628748b052350785769"],["D:/blog/public/2019/11/25/PAT-1090/index.html","6eebb7732ff8257bf4f1a6ab9381ae29"],["D:/blog/public/2019/11/25/PAT自动签到/1.png","0131d4cb9e40bf24404e33de225bd771"],["D:/blog/public/2019/11/25/PAT自动签到/index.html","9fc4b7989cca4889c507e1ca5c97fba7"],["D:/blog/public/2019/11/25/字幕文件处理/index.html","5f337c1ce106e921a7ccdb1a20cebf14"],["D:/blog/public/2019/11/25/用需求引导学习/index.html","2ed808c3ce3e31535849eece096956f5"],["D:/blog/public/2019/11/26/PAT-1094/index.html","b1df159a5e2fd678db9fdf2c08423cf6"],["D:/blog/public/2019/11/28/PAT-1012/index.html","4bb488967d2a2e6c6814e5d99b47bf31"],["D:/blog/public/2019/11/28/PAT-1102/index.html","7a120daba6cf9b86b2e1e4133a3e5220"],["D:/blog/public/2019/11/28/道路思考/index.html","c7e6fc17d49f131a7b8ea23e0f0dfc4e"],["D:/blog/public/archives/2019/10/index.html","a3d922698f497c32a3b0dcaed3541151"],["D:/blog/public/archives/2019/11/index.html","43646cec68fac065b4607f74d58b2b7b"],["D:/blog/public/archives/2019/11/page/2/index.html","86c315d5fd01195f95c7039e529286d1"],["D:/blog/public/archives/2019/11/page/3/index.html","a680177a40e3900139ed6b7174e81916"],["D:/blog/public/archives/2019/11/page/4/index.html","32aa7245dbec55f52059a2ccf41e7309"],["D:/blog/public/archives/2019/11/page/5/index.html","1e4f7bab54297b218ca0f5eee8747709"],["D:/blog/public/archives/2019/index.html","66a7430a79a30f70b0851fe9fa169002"],["D:/blog/public/archives/2019/page/2/index.html","61bec718988982331dc42503f3478eab"],["D:/blog/public/archives/2019/page/3/index.html","6db6be49600c76a023ff2b03ee2e9dad"],["D:/blog/public/archives/2019/page/4/index.html","cf7d25b44e321461d3d0ccd1b3e35e6e"],["D:/blog/public/archives/2019/page/5/index.html","5bb20a9c93e46838ba9811eee746cec1"],["D:/blog/public/archives/2019/page/6/index.html","27adb316e03b34988a4d4ebc1c900c8b"],["D:/blog/public/archives/index.html","d679bf97774e8d84e45dab3e0a703670"],["D:/blog/public/archives/page/2/index.html","e78b7a9af4912666acfb33e9b139da81"],["D:/blog/public/archives/page/3/index.html","4019185a26fb246374910c884876b5d7"],["D:/blog/public/archives/page/4/index.html","14de92db9ab5bca1ec259d661106cb71"],["D:/blog/public/archives/page/5/index.html","9d0537cc1aa5b7c319782571b8e67b5e"],["D:/blog/public/archives/page/6/index.html","cee587e11d0e20efb030ea492d52ff27"],["D:/blog/public/categories/code/index.html","e20e9dacdea32f1ebcf05ef417044359"],["D:/blog/public/categories/code/page/2/index.html","202f445822b667ad2936c3bcff31d5c7"],["D:/blog/public/categories/code/page/3/index.html","1ea2f23d12929db027fcc1a8d97511d8"],["D:/blog/public/categories/code/page/4/index.html","30e70913f5425a4f7ee5ef00ec449819"],["D:/blog/public/categories/index.html","d626931d1a26d2ae0cdf1ecb0b8b0fe9"],["D:/blog/public/categories/life/index.html","b20c6e738d5a3a88ffc7304cdab2eca2"],["D:/blog/public/categories/life/page/2/index.html","2364c0392a3077539c6d1510956cdeb5"],["D:/blog/public/categories/note/index.html","5dff19dcad4cd4c81fdb5984b3f781e7"],["D:/blog/public/css/index.css","9911b20a2e31dc1aa98c48e483335237"],["D:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/blog/public/index.html","1b8e917db5489028de09e1b694645e2c"],["D:/blog/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["D:/blog/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["D:/blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/blog/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["D:/blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/blog/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/blog/public/page/2/index.html","4012da5b546b1334c02f18951c3cfe84"],["D:/blog/public/page/3/index.html","0d4ee17944779969e3abd82a16fd87a4"],["D:/blog/public/page/4/index.html","4ad3f43ae8634c2cf7545ccb95553bc0"],["D:/blog/public/page/5/index.html","abfa9440a759bd8b7ac17fdca698c3d0"],["D:/blog/public/page/6/index.html","1326feedd4273e07c988dd0abba33036"],["D:/blog/public/tags/PAT/index.html","c0edc3609b0e9ab121cc55201294f72c"],["D:/blog/public/tags/PAT/page/2/index.html","38c7ec78b67f93d95d34d214b44ae138"],["D:/blog/public/tags/bfs/index.html","6a2dcee3de0642555d32c2ccba0ce348"],["D:/blog/public/tags/dfs/index.html","3f771cbd05a864da1a5d8e479554f56e"],["D:/blog/public/tags/dfs/page/2/index.html","529e095c2abc595f2b4bc0e82e541139"],["D:/blog/public/tags/dijkstra/index.html","75d6f89c087373ea4dabb58f122282e9"],["D:/blog/public/tags/english/index.html","20a801b4b4572e8d8e16b7180cd9f32e"],["D:/blog/public/tags/git/index.html","8c84c70c4a2763572b6584099e983802"],["D:/blog/public/tags/index.html","cff68d8774fccef0f7b871da1888147e"],["D:/blog/public/tags/plan/index.html","dbe1d16ab35865a18142bf55ba5a4ec3"],["D:/blog/public/tags/python/index.html","56c3d6e2c8e16f3059d5e70c97d37f75"],["D:/blog/public/tags/python语法/index.html","46c7b6d5dc2fc82d572f34d2321bf96c"],["D:/blog/public/tags/travel/index.html","d4e44cfb0a1af1a6bc4d352c66526c10"],["D:/blog/public/tags/win/index.html","2a8b48a0bb12e2bd054dfd05a2210666"],["D:/blog/public/tags/图/index.html","ded7b5221b9b3fd33cee61ab587b5a5b"],["D:/blog/public/tags/图论/index.html","a42520cc4cca874a88c77b710349e268"],["D:/blog/public/tags/字符串/index.html","cdd6543f3bb529303675c33cd339c62d"],["D:/blog/public/tags/实践/index.html","9c93495886742fe503e93fc9207fa804"],["D:/blog/public/tags/并查集/index.html","89ca05aa41ec35bc58c7f76af523322c"],["D:/blog/public/tags/排序/index.html","44636543b1db2f1e0e30b4fea8dca706"],["D:/blog/public/tags/数学/index.html","a5bdcc07e40455ce76c299edcbd1ffdc"],["D:/blog/public/tags/整理/index.html","54cfecdb4747b50b1d0f7441679ff83c"],["D:/blog/public/tags/文本编辑/index.html","722d2c7048fe603e94c071b469f996de"],["D:/blog/public/tags/树/index.html","c6b84cbe162ab39d3d0ffdb5f451ed12"],["D:/blog/public/tags/竞赛/index.html","1f80c332a72c9cf52f99225401cda814"],["D:/blog/public/tags/纪念日/index.html","f3d6151450ef077f2d6ef41de0f1cc27"],["D:/blog/public/tags/脚本/index.html","b6589555bc79eca7d83018c1b6604ae7"],["D:/blog/public/tags/链表/index.html","c98484ab658df3ea2626601a18fa0d09"]];
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







