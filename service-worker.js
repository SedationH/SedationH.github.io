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

var precacheConfig = [["D:/blog/public/2019/10/22/Markdown语法学习/index.html","84490303201ca0fb5c7e0fc1cbc17dbf"],["D:/blog/public/2019/10/22/PAT-1122/index.html","97c5f3192cde16ef0295ed74dfe7a11f"],["D:/blog/public/2019/10/22/PAT计划/index.html","950fb0e34fed8751788fd9bae4a2af82"],["D:/blog/public/2019/10/22/一周年纪念/1.png","b922b2b5d70da4521554e351b799eafa"],["D:/blog/public/2019/10/22/一周年纪念/10.jpg","4ee6bc37ff3698fa570a938b2bd3cd8f"],["D:/blog/public/2019/10/22/一周年纪念/11.jpg","1eb8883718238d92b64c1d22aa0ad727"],["D:/blog/public/2019/10/22/一周年纪念/12.jpg","6f72da1105ecd7baec4b4ae55a95c4e5"],["D:/blog/public/2019/10/22/一周年纪念/13.png","9a7c7b6afec674eb08e5607057ecadf9"],["D:/blog/public/2019/10/22/一周年纪念/14.jpg","1c2a7133e420bc4b898cff3c3a67c3cd"],["D:/blog/public/2019/10/22/一周年纪念/15.png","9c39368c806a0cfa2e7d709132df9056"],["D:/blog/public/2019/10/22/一周年纪念/16.png","35d0b5720714b6bdc6d3a406196eff55"],["D:/blog/public/2019/10/22/一周年纪念/17.png","9e7284fb82f396c4810ef96f1b4fe4f8"],["D:/blog/public/2019/10/22/一周年纪念/19.jpg","8a64b1eb0e09baf650be35c430e1e35b"],["D:/blog/public/2019/10/22/一周年纪念/20.jpg","0903b15ae3093a3532017dc07d32e3ac"],["D:/blog/public/2019/10/22/一周年纪念/21.jpg","22b445ee7acb7233b44fc4a25d3ae663"],["D:/blog/public/2019/10/22/一周年纪念/22.jpg","efc11d26abeff3b665daa5d9f2391f15"],["D:/blog/public/2019/10/22/一周年纪念/23.png","234580cc98d43a9b6e76eea8ec82470d"],["D:/blog/public/2019/10/22/一周年纪念/24.png","2ba8d6c8d4be23e8c33d3fc0f4b4b4d6"],["D:/blog/public/2019/10/22/一周年纪念/25.png","5ab1f6e4156096f8ba58f66255bc3c0a"],["D:/blog/public/2019/10/22/一周年纪念/27.jpg","836de2238b33e122dfca7d9da44f27e3"],["D:/blog/public/2019/10/22/一周年纪念/28.png","9e80a6a4a5ddebfd511f53ea1e8267b0"],["D:/blog/public/2019/10/22/一周年纪念/29.jpg","04f2ec6d41985b0ed3e44f2361c7899f"],["D:/blog/public/2019/10/22/一周年纪念/3.jpg","412cd99e96d03326a84f0c0a84d1ec10"],["D:/blog/public/2019/10/22/一周年纪念/30.png","befd1520ca9f8db304c88e9d88278df8"],["D:/blog/public/2019/10/22/一周年纪念/31.png","c18c6d47b84e55829bcfe8e11fb63729"],["D:/blog/public/2019/10/22/一周年纪念/32.jpg","14d40f93919dc0c17c38c039f8a35cb1"],["D:/blog/public/2019/10/22/一周年纪念/33.jpg","4e615748f58a6f23602d4a7806e6422c"],["D:/blog/public/2019/10/22/一周年纪念/5.png","9941823b1349fbb055ca615b6e3d54de"],["D:/blog/public/2019/10/22/一周年纪念/6.jpg","1266f0dcd054f6bd16fb50de12b43b26"],["D:/blog/public/2019/10/22/一周年纪念/8.png","6e4467f160ae2401f89d866bd1e7da2d"],["D:/blog/public/2019/10/22/一周年纪念/9.jpg","1e90bb672bca5590d1a4e79e97431fb8"],["D:/blog/public/2019/10/22/一周年纪念/index.html","9e730be0121c8c0b710d7590a38f4ae1"],["D:/blog/public/2019/10/25/PAT-1142/index.html","84f766a5dcd7e112da43fdfbf5cf70fb"],["D:/blog/public/2019/10/26/刷题技巧整理/index.html","14d251381c44f9760be45bc71e7aa077"],["D:/blog/public/2019/10/26/算法笔记阅读/1.png","92150d33ef3bd6c65a9aaced8376a92c"],["D:/blog/public/2019/10/26/算法笔记阅读/2.png","cfccd02ede828f058d6097a5ea36231e"],["D:/blog/public/2019/10/26/算法笔记阅读/3.png","8829fd0644f4aa7c563ed6700448d1a5"],["D:/blog/public/2019/10/26/算法笔记阅读/4.png","9cd3a2412ecc95904bc4fa988104670d"],["D:/blog/public/2019/10/26/算法笔记阅读/5.png","2d944484cd483c4328cf23f83f283df4"],["D:/blog/public/2019/10/26/算法笔记阅读/6.png","e029e7b61a5b2af8a9adca3fe5c958c7"],["D:/blog/public/2019/10/26/算法笔记阅读/7.png","e3ea1a023a3cd92a0f71600be7356567"],["D:/blog/public/2019/10/26/算法笔记阅读/8.png","6867de9496f219814cfdc9065a3300f5"],["D:/blog/public/2019/10/26/算法笔记阅读/9.png","9edf64d883da58014326c3dfe069972b"],["D:/blog/public/2019/10/26/算法笔记阅读/index.html","ba3e46220433d728ee6307c134730b53"],["D:/blog/public/2019/10/29/PAT-1013/index.html","8875faf6a261fd470cdf21f502d49594"],["D:/blog/public/2019/10/29/PAT-1034/index.html","7d910e7faab539b8c4a55003a88c4269"],["D:/blog/public/2019/10/30/PAT-1021/index.html","f3c17f80189e54749240b44f221e1dc6"],["D:/blog/public/2019/11/03/Mac折腾记录/index.html","acbb413f891573c9aaf876838b2b7fd3"],["D:/blog/public/2019/11/04/VSCode使用/1.png","e8132b252da910da84d0d1ae36572702"],["D:/blog/public/2019/11/04/VSCode使用/2.png","3c8c0b6004e0d69eb0fe084e61359e9f"],["D:/blog/public/2019/11/04/VSCode使用/index.html","56d864e99ea4dae60e435aa7e11668a6"],["D:/blog/public/2019/11/05/PAT-1107/index.html","ba1ae01a6d5d077ba691d345963cc594"],["D:/blog/public/2019/11/05/文件自动分类脚本/index.html","3449fd8ecb9b58364a95e3ec38447929"],["D:/blog/public/2019/11/06/PAT-1114/index.html","f0462ee47d412110ff97eb83c4df937d"],["D:/blog/public/2019/11/06/python基础/index.html","a741818d73cab47ab1b3d74143b6362c"],["D:/blog/public/2019/11/07/git学习/0.jpg","701e02bf0b2d71ab51b7e2b6aa973d52"],["D:/blog/public/2019/11/07/git学习/1.png","2adbbdf8d8bab5606af6279ef5612da2"],["D:/blog/public/2019/11/07/git学习/2.png","c6f039420a0f851eb424883511ac4e2f"],["D:/blog/public/2019/11/07/git学习/3.png","06f0d7d34075653ba25a18ea0fea8b7d"],["D:/blog/public/2019/11/07/git学习/4.png","cb8a9c11c8fd1326260bbc7c2c6a62ac"],["D:/blog/public/2019/11/07/git学习/index.html","89e8ab7d5fe80e65a7568e310503e25e"],["D:/blog/public/2019/11/13/PAT-1025/index.html","af6dd656b87260bbafc94b650fa609c8"],["D:/blog/public/2019/11/14/H和T的成长回忆录/index.html","7098a2275bc2b8e93e61aeb4cb8d33ab"],["D:/blog/public/2019/11/14/PAT-1069/index.html","e8c996faabb0b34b7eaa2f98619dd14a"],["D:/blog/public/2019/11/14/PAT-1093/index.html","3c7850e7dd95073be849e8fba7e65f7c"],["D:/blog/public/2019/11/14/PAT-1101/index.html","00f38dd6bf13392c84f158463890f9a7"],["D:/blog/public/2019/11/14/blog分类规划/index.html","5e69797b22698ad1b5b00f2705a7b614"],["D:/blog/public/2019/11/14/北京游感/index.html","2ca811eb2fa249e6d37dcbe72225e2d6"],["D:/blog/public/2019/11/14/热爱生命/1.png","0b865b5a8c5ffc65ab33586bb50513b7"],["D:/blog/public/2019/11/14/热爱生命/index.html","a1c736a38cceba2d4fab4637b4228268"],["D:/blog/public/2019/11/14/随想-1/index.html","4c27af147cc8cff097f2e6a6cde3e969"],["D:/blog/public/2019/11/14/随想-2/1.png","ba65a9551263d1c1cb9c1870d1ee8a29"],["D:/blog/public/2019/11/14/随想-2/index.html","8da98e8176fc6581cfe37b404d6aedc1"],["D:/blog/public/2019/11/15/PAT-1032/index.html","3a063979a0356f65de50234aea365bdc"],["D:/blog/public/2019/11/15/PAT-1059/index.html","17c64c6940123c6bef70f513899d8bf9"],["D:/blog/public/2019/11/15/去南京/1.png","53d7c944f9a7326b86bd734f9d2d967c"],["D:/blog/public/2019/11/15/去南京/2.png","17208773d5c2ee30d094a597d4a8b9b6"],["D:/blog/public/2019/11/15/去南京/index.html","7462883f6f70fa3b5c9d5439c15bcc1e"],["D:/blog/public/2019/11/16/PAT-1052/index.html","3ea8480fe5adcb629f9383a05c19d3ca"],["D:/blog/public/2019/11/16/连通块个数/index.html","5054fb70f04990f6f0e9491c698c9096"],["D:/blog/public/2019/11/16/迷宫问题/index.html","a3fdcc93cf150973b4391652acde2b96"],["D:/blog/public/2019/11/17/Listening-training/index.html","4e8168086dcec3fae762ea16c1b6811e"],["D:/blog/public/2019/11/17/PAT-1020/index.html","0e58b55da950b1a50a451f6bd6ac173c"],["D:/blog/public/2019/11/18/随想-3/index.html","1b3ad78dbfb4c2097fbb1d11819cdee6"],["D:/blog/public/2019/11/19/PAT-1053/index.html","ae76acd844d681c3000eff23013826fe"],["D:/blog/public/2019/11/19/Win环境配置/1.png","c32e495ccfeb914740d76fdf84b2fda3"],["D:/blog/public/2019/11/19/Win环境配置/2.png","4cb6305070b92541ac6749688e6ddec6"],["D:/blog/public/2019/11/19/Win环境配置/3.png","da3b800653c68b7c463ee0b5598055e9"],["D:/blog/public/2019/11/19/Win环境配置/index.html","5630ba84e999ed1c915529f8a6dafcbb"],["D:/blog/public/2019/11/20/PAT-1043/index.html","99accf2f1b1b68e3855636238cb2ae1f"],["D:/blog/public/2019/11/22/PAT-1003/1.png","6fd7e183ac46df7222a1d2a2a4c9b12a"],["D:/blog/public/2019/11/22/PAT-1003/index.html","4aab9ba11b9628e2e89dce806b035c06"],["D:/blog/public/2019/11/22/PAT-1018/index.html","fe77f028d5a6ff38fdec490581816d61"],["D:/blog/public/2019/11/22/阅读管理/index.html","33ba60b331759912a37a1336520c01c0"],["D:/blog/public/2019/11/23/ExcelToMarkdown/index.html","ebb7286e36280e7b0c2501670aab557e"],["D:/blog/public/2019/11/23/PAT-1030/1.png","aecb20c8058c5af85e249217e120debe"],["D:/blog/public/2019/11/23/PAT-1030/index.html","01cacd1ea8c0805e75e5b7a8077897e6"],["D:/blog/public/2019/11/23/四级选择填空高频词/index.html","02b228da5870b1be661b11c4460cca02"],["D:/blog/public/2019/11/24/PAT-1004/index.html","a875bd454029c540a304338778d19005"],["D:/blog/public/2019/11/24/PAT-1087/2.png","3a8111c12681b201c59e6a04840cf400"],["D:/blog/public/2019/11/24/PAT-1087/index.html","ab35fb31db4a22e676baa4b841d29e90"],["D:/blog/public/2019/11/25/Markdown编辑和预览/index.html","c82532d09a7e9e0a662068b18df3c2e4"],["D:/blog/public/2019/11/25/PAT-1079/index.html","734e6d75ae610139d3ab69bdb458ca89"],["D:/blog/public/2019/11/25/PAT-1086/index.html","6edb56ef8b5375d7f18ea2b2492d9190"],["D:/blog/public/2019/11/25/PAT-1090/index.html","f2d8e4bbe0f8e2a62ad4addead630715"],["D:/blog/public/2019/11/25/PAT自动签到/1.png","0131d4cb9e40bf24404e33de225bd771"],["D:/blog/public/2019/11/25/PAT自动签到/index.html","fda6cba0e1d3c59fa5847f0f143366f4"],["D:/blog/public/2019/11/25/字幕文件处理/index.html","19d85000c95592c4758120bb2ab40e53"],["D:/blog/public/2019/11/25/用需求引导学习/index.html","a20780706f3fa17a168cf1a5ac7c57d1"],["D:/blog/public/2019/11/26/PAT-1094/index.html","b002837ed7233b6c872f8dbb03fbb519"],["D:/blog/public/2019/11/28/PAT-1012/index.html","aea26d6f7fa9a7a037b4ee18005b1a0f"],["D:/blog/public/2019/11/28/PAT-1102/index.html","b75d54523527e277ca33d071d4f960df"],["D:/blog/public/2019/11/28/道路思考/index.html","2045ebd8ee67b4f06de5086d64c9a484"],["D:/blog/public/2019/11/30/随想-4/index.html","3c3599f34b53ebfa28d1589c5ffcc280"],["D:/blog/public/2019/12/02/PAT考前准备/index.html","6bc6a379f206f91f172d7c60aa856516"],["D:/blog/public/2019/12/03/PAT-1074/index.html","47b8e9a78b7c42e725c4a0d62fb241da"],["D:/blog/public/2019/12/04/PAT-1115/index.html","8086c58abc281b7003cb749a665830bd"],["D:/blog/public/2019/12/10/test/index.html","498b470177206b7123cb9adf815de4bf"],["D:/blog/public/2019/12/16/随想-5/index.html","9bdcc518a2a65ea639d81d718207ca6d"],["D:/blog/public/archives/2019/10/index.html","ad5f63e0c4caa9473e73556bd7e0e8d0"],["D:/blog/public/archives/2019/11/index.html","d24e3a88438ff0504424940481e8ae3a"],["D:/blog/public/archives/2019/11/page/2/index.html","8d7f4aed8b495e9e62ec66d7b47563e4"],["D:/blog/public/archives/2019/11/page/3/index.html","8536afd5c1502131231fa75b5bc5ce1b"],["D:/blog/public/archives/2019/11/page/4/index.html","56fbb846487ecad6256310328ff9bfe8"],["D:/blog/public/archives/2019/11/page/5/index.html","06c1a3e4bd63e8b5ec9408f65b910aee"],["D:/blog/public/archives/2019/12/index.html","f962a135caab17d2284927e6d28a65d3"],["D:/blog/public/archives/2019/index.html","627fea8686d13b868147ddfddccc551f"],["D:/blog/public/archives/2019/page/2/index.html","c7a8ff788d1466bdc3fcaea341ad18ab"],["D:/blog/public/archives/2019/page/3/index.html","b0805f130d1596bc84f1e7f7ca7f3136"],["D:/blog/public/archives/2019/page/4/index.html","5b1b6ff9b63264a9d4db1e90d5192cec"],["D:/blog/public/archives/2019/page/5/index.html","d2bfb6a273f21709715dab33519c5022"],["D:/blog/public/archives/2019/page/6/index.html","fd42b78631d2fbf5608b32e3f56b0f5b"],["D:/blog/public/archives/2019/page/7/index.html","3b612921d3bb2c0aa8a54f1e168bfee3"],["D:/blog/public/archives/index.html","ec3e394bf4d57d7591f0e553d3b95250"],["D:/blog/public/archives/page/2/index.html","c4f6a9088ba9976a964eaf1ef2441f67"],["D:/blog/public/archives/page/3/index.html","23532517b59d09ce38536f61ffd842ac"],["D:/blog/public/archives/page/4/index.html","9a64cc916dac743e416d8fd466fc7a19"],["D:/blog/public/archives/page/5/index.html","c9080741b557a968a964783b2f5e60e0"],["D:/blog/public/archives/page/6/index.html","3929d52360a7ddd5904f3ec001ef26a0"],["D:/blog/public/archives/page/7/index.html","3563f35518eefa9cf0cfdd716d1f6822"],["D:/blog/public/categories/code/index.html","7101073da47da23a3b2f165ba9c2fbdf"],["D:/blog/public/categories/code/page/2/index.html","b8ec9110608771aec33babb467e11e7d"],["D:/blog/public/categories/code/page/3/index.html","6f04f397ce47cd510e32a8aafa09c9da"],["D:/blog/public/categories/code/page/4/index.html","85988edbe384d7c8898f327c87104484"],["D:/blog/public/categories/code/page/5/index.html","e0d3af21a17ed57f76d8a6d1e177bdbf"],["D:/blog/public/categories/index.html","769f2793d7ea3adcd711ad8a12276025"],["D:/blog/public/categories/life/index.html","82bff3a9b4bddae40b4ee0d010df93d0"],["D:/blog/public/categories/life/page/2/index.html","ff36689c8824fe1afc9b574eef15469f"],["D:/blog/public/categories/note/index.html","4d582bf434f022df7c1642f1004a118f"],["D:/blog/public/css/index.css","9911b20a2e31dc1aa98c48e483335237"],["D:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/blog/public/index.html","c7695c325b299e38baf467423db6da06"],["D:/blog/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["D:/blog/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["D:/blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/blog/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["D:/blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/blog/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/blog/public/page/2/index.html","67492dcc62ec39d2210f618c661f1e31"],["D:/blog/public/page/3/index.html","cf945868d2f75a151afacad779f63ac8"],["D:/blog/public/page/4/index.html","8884c433319dcbd1eaae1e2bfb92fc6d"],["D:/blog/public/page/5/index.html","5395df5bf177b3b80ec5f44c41eac17b"],["D:/blog/public/page/6/index.html","8def3e61dda2156914cc3fd42cee4ed4"],["D:/blog/public/page/7/index.html","95553e98df0675140114266256f06e72"],["D:/blog/public/tags/PAT/index.html","37848d34d272b7c28bcf6c410e78716f"],["D:/blog/public/tags/PAT/page/2/index.html","eac32e264b7e9807de3e6eab46ee5063"],["D:/blog/public/tags/bfs/index.html","e7dff91addcc34780111557921db3669"],["D:/blog/public/tags/dfs/index.html","b389eaec2e43473cadddb1e3648bc209"],["D:/blog/public/tags/dfs/page/2/index.html","dec4046f74fa93d0f76d06e310e6973a"],["D:/blog/public/tags/dijkstra/index.html","831ea499a41daf037242ee5f54c4894b"],["D:/blog/public/tags/english/index.html","9a2a196d2ad954d7350e6736c5a985cf"],["D:/blog/public/tags/git/index.html","91170cb89d9f25f741bddc418c49d3cd"],["D:/blog/public/tags/index.html","27863cef062215b6ccb6dd1199d563e5"],["D:/blog/public/tags/plan/index.html","e9c244eef0fe39104f850503d05e1d65"],["D:/blog/public/tags/python/index.html","a7b78fe8e076ccd74ecf06595959da73"],["D:/blog/public/tags/python语法/index.html","cc1d076c78575018f05e88ce030dbcc8"],["D:/blog/public/tags/travel/index.html","e896669643311cf05378e22c8814d5f2"],["D:/blog/public/tags/win/index.html","7d4f35f1c891c22c85639edd48b5000f"],["D:/blog/public/tags/图/index.html","cfb2dc3fd8114354da390468006f9216"],["D:/blog/public/tags/图论/index.html","a7af7850af0348f55ff41cf40df30999"],["D:/blog/public/tags/字符串/index.html","542b5a29e61d03646fd84bdd98f71325"],["D:/blog/public/tags/实践/index.html","8989f8f138fe966af3c7befef2c4efcd"],["D:/blog/public/tags/并查集/index.html","c77ec1d044fb6018222a1ec856676779"],["D:/blog/public/tags/排序/index.html","22b17d9f25a09165653bade5334c57ce"],["D:/blog/public/tags/数学/index.html","97842bfbe62a7868da1df2fdd4df607b"],["D:/blog/public/tags/整理/index.html","f6fa7b7059bf17955fe535f62b8a8f5a"],["D:/blog/public/tags/文本编辑/index.html","3a64cef5d932b75f36f10ef93657bc9c"],["D:/blog/public/tags/树/index.html","596a209e76de23b6e9bc920998674778"],["D:/blog/public/tags/竞赛/index.html","1ede0e694c2badb169673781d5891c45"],["D:/blog/public/tags/纪念日/index.html","ab37ad7d48b068394869ee55e2b75bd8"],["D:/blog/public/tags/脚本/index.html","e47c5b7282ea4013d77e93ce75933d37"],["D:/blog/public/tags/链表/index.html","6eada887952794ed216920b2432b8d7f"]];
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







