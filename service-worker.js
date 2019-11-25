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

var precacheConfig = [["D:/blog/public/2019/10/22/Markdown语法学习/index.html","49fde9990ea60bb05a6f278b5cc4813b"],["D:/blog/public/2019/10/22/PAT-1122/index.html","056706370d0a4d25e5e9673de075d24e"],["D:/blog/public/2019/10/22/PAT计划/index.html","da2054cd1047b4f64d0bf0fa4ed0a5fe"],["D:/blog/public/2019/10/22/一周年纪念/1.png","b922b2b5d70da4521554e351b799eafa"],["D:/blog/public/2019/10/22/一周年纪念/10.jpg","4ee6bc37ff3698fa570a938b2bd3cd8f"],["D:/blog/public/2019/10/22/一周年纪念/11.jpg","1eb8883718238d92b64c1d22aa0ad727"],["D:/blog/public/2019/10/22/一周年纪念/12.jpg","6f72da1105ecd7baec4b4ae55a95c4e5"],["D:/blog/public/2019/10/22/一周年纪念/13.png","9a7c7b6afec674eb08e5607057ecadf9"],["D:/blog/public/2019/10/22/一周年纪念/14.jpg","1c2a7133e420bc4b898cff3c3a67c3cd"],["D:/blog/public/2019/10/22/一周年纪念/15.png","9c39368c806a0cfa2e7d709132df9056"],["D:/blog/public/2019/10/22/一周年纪念/16.png","35d0b5720714b6bdc6d3a406196eff55"],["D:/blog/public/2019/10/22/一周年纪念/17.png","9e7284fb82f396c4810ef96f1b4fe4f8"],["D:/blog/public/2019/10/22/一周年纪念/19.jpg","8a64b1eb0e09baf650be35c430e1e35b"],["D:/blog/public/2019/10/22/一周年纪念/20.jpg","0903b15ae3093a3532017dc07d32e3ac"],["D:/blog/public/2019/10/22/一周年纪念/21.jpg","22b445ee7acb7233b44fc4a25d3ae663"],["D:/blog/public/2019/10/22/一周年纪念/22.jpg","efc11d26abeff3b665daa5d9f2391f15"],["D:/blog/public/2019/10/22/一周年纪念/23.png","234580cc98d43a9b6e76eea8ec82470d"],["D:/blog/public/2019/10/22/一周年纪念/24.png","2ba8d6c8d4be23e8c33d3fc0f4b4b4d6"],["D:/blog/public/2019/10/22/一周年纪念/25.png","5ab1f6e4156096f8ba58f66255bc3c0a"],["D:/blog/public/2019/10/22/一周年纪念/27.jpg","836de2238b33e122dfca7d9da44f27e3"],["D:/blog/public/2019/10/22/一周年纪念/28.png","9e80a6a4a5ddebfd511f53ea1e8267b0"],["D:/blog/public/2019/10/22/一周年纪念/29.jpg","04f2ec6d41985b0ed3e44f2361c7899f"],["D:/blog/public/2019/10/22/一周年纪念/3.jpg","412cd99e96d03326a84f0c0a84d1ec10"],["D:/blog/public/2019/10/22/一周年纪念/30.png","befd1520ca9f8db304c88e9d88278df8"],["D:/blog/public/2019/10/22/一周年纪念/31.png","c18c6d47b84e55829bcfe8e11fb63729"],["D:/blog/public/2019/10/22/一周年纪念/32.jpg","14d40f93919dc0c17c38c039f8a35cb1"],["D:/blog/public/2019/10/22/一周年纪念/33.jpg","4e615748f58a6f23602d4a7806e6422c"],["D:/blog/public/2019/10/22/一周年纪念/5.png","9941823b1349fbb055ca615b6e3d54de"],["D:/blog/public/2019/10/22/一周年纪念/6.jpg","1266f0dcd054f6bd16fb50de12b43b26"],["D:/blog/public/2019/10/22/一周年纪念/8.png","6e4467f160ae2401f89d866bd1e7da2d"],["D:/blog/public/2019/10/22/一周年纪念/9.jpg","1e90bb672bca5590d1a4e79e97431fb8"],["D:/blog/public/2019/10/22/一周年纪念/index.html","82e39f9afb5a082e229863dbe873a711"],["D:/blog/public/2019/10/25/PAT-1142/index.html","f7688e2b4b23713e648a8f916649df6a"],["D:/blog/public/2019/10/26/刷题技巧整理/index.html","9d2802ac3c32eea436966ff9b13785a3"],["D:/blog/public/2019/10/26/算法笔记阅读/1.png","92150d33ef3bd6c65a9aaced8376a92c"],["D:/blog/public/2019/10/26/算法笔记阅读/2.png","cfccd02ede828f058d6097a5ea36231e"],["D:/blog/public/2019/10/26/算法笔记阅读/3.png","8829fd0644f4aa7c563ed6700448d1a5"],["D:/blog/public/2019/10/26/算法笔记阅读/4.png","9cd3a2412ecc95904bc4fa988104670d"],["D:/blog/public/2019/10/26/算法笔记阅读/5.png","2d944484cd483c4328cf23f83f283df4"],["D:/blog/public/2019/10/26/算法笔记阅读/6.png","e029e7b61a5b2af8a9adca3fe5c958c7"],["D:/blog/public/2019/10/26/算法笔记阅读/7.png","e3ea1a023a3cd92a0f71600be7356567"],["D:/blog/public/2019/10/26/算法笔记阅读/8.png","6867de9496f219814cfdc9065a3300f5"],["D:/blog/public/2019/10/26/算法笔记阅读/9.png","9edf64d883da58014326c3dfe069972b"],["D:/blog/public/2019/10/26/算法笔记阅读/index.html","12669feb56e8654eb32c6fb1f0823129"],["D:/blog/public/2019/10/29/PAT-1013/index.html","77613a6d470a3d6a6a9d35c112849c24"],["D:/blog/public/2019/10/29/PAT-1034/index.html","2938003f012dcf9d567506550dbe32a2"],["D:/blog/public/2019/10/30/PAT-1021/index.html","049752cae1371e90812aff91738e7ec7"],["D:/blog/public/2019/11/03/Mac折腾记录/index.html","4322642e53066f207495541fe4bdfcc0"],["D:/blog/public/2019/11/04/VSCode使用/1.png","e8132b252da910da84d0d1ae36572702"],["D:/blog/public/2019/11/04/VSCode使用/2.png","3c8c0b6004e0d69eb0fe084e61359e9f"],["D:/blog/public/2019/11/04/VSCode使用/index.html","6a30ce2bfb2c47fc943fee5341b94ed3"],["D:/blog/public/2019/11/05/PAT-1107/index.html","03b0c10dbc371f44519d2c23390e8618"],["D:/blog/public/2019/11/05/文件自动分类脚本/index.html","da18a350d30accb61fbd4e16384798bc"],["D:/blog/public/2019/11/06/PAT-1114/index.html","d111f0219524a16e7ba9f57a1a604848"],["D:/blog/public/2019/11/06/python基础/index.html","6ce7d6ecfa1c1db842cca7f9f1556f0e"],["D:/blog/public/2019/11/07/git学习/0.jpg","701e02bf0b2d71ab51b7e2b6aa973d52"],["D:/blog/public/2019/11/07/git学习/1.png","2adbbdf8d8bab5606af6279ef5612da2"],["D:/blog/public/2019/11/07/git学习/2.png","c6f039420a0f851eb424883511ac4e2f"],["D:/blog/public/2019/11/07/git学习/3.png","06f0d7d34075653ba25a18ea0fea8b7d"],["D:/blog/public/2019/11/07/git学习/4.png","cb8a9c11c8fd1326260bbc7c2c6a62ac"],["D:/blog/public/2019/11/07/git学习/index.html","98c158c8f985a4bdc235ea93e2de5c04"],["D:/blog/public/2019/11/13/PAT-1025/index.html","8edcf27f9b0dc4e61c77b33203df88a5"],["D:/blog/public/2019/11/14/H和T的成长回忆录/index.html","432be5a3a5805907d83895278169576f"],["D:/blog/public/2019/11/14/PAT-1069/index.html","ccab1f03d363aff52ccaa31d9260fd1b"],["D:/blog/public/2019/11/14/PAT-1093/index.html","5cb051ab5a304409af66f21b1378c8bd"],["D:/blog/public/2019/11/14/PAT-1101/index.html","a8e0187020ce0b2683873c479b96aa3a"],["D:/blog/public/2019/11/14/blog分类规划/index.html","e73a802098ea5361d1edc91202d72cbd"],["D:/blog/public/2019/11/14/北京游感/index.html","afe3f00b8fa19d89a441be043572fcf2"],["D:/blog/public/2019/11/14/热爱生命/1.png","0b865b5a8c5ffc65ab33586bb50513b7"],["D:/blog/public/2019/11/14/热爱生命/index.html","f198a3edbcbea311615ed45b6ced79b9"],["D:/blog/public/2019/11/14/随想-1/index.html","8f22f9aa5ec91a79a0b4f69245956a3c"],["D:/blog/public/2019/11/14/随想-2/1.png","ba65a9551263d1c1cb9c1870d1ee8a29"],["D:/blog/public/2019/11/14/随想-2/index.html","77a5dab0283e6e1504edc880ef914d29"],["D:/blog/public/2019/11/15/PAT-1032/index.html","228eb87f9018bd8bcf8abde17aace8c2"],["D:/blog/public/2019/11/15/PAT-1059/index.html","7810694dd36069a019baecc464d7d2a7"],["D:/blog/public/2019/11/15/去南京/1.png","53d7c944f9a7326b86bd734f9d2d967c"],["D:/blog/public/2019/11/15/去南京/2.png","17208773d5c2ee30d094a597d4a8b9b6"],["D:/blog/public/2019/11/15/去南京/index.html","ae427b32af3d04b9c774a5495db3afb5"],["D:/blog/public/2019/11/16/PAT-1052/index.html","d91ca8792610036d630eaa484f2b297e"],["D:/blog/public/2019/11/16/连通块个数/index.html","d347ecd094de51ea69c0d014b5cc3afd"],["D:/blog/public/2019/11/16/迷宫问题/index.html","9ec9617d8e4402d59d561e1ffc7ed72b"],["D:/blog/public/2019/11/17/Listening-training/index.html","0d47fd620bb3d12bab34bfb5873d36bb"],["D:/blog/public/2019/11/17/PAT-1020/index.html","c8149a4751a6a4faa42dce702599b0e9"],["D:/blog/public/2019/11/18/随想-3/index.html","8a21288f0fef0c2dfd5ec2b76ee63de6"],["D:/blog/public/2019/11/19/PAT-1053/index.html","fcc5225df5104fe801711679d6572f22"],["D:/blog/public/2019/11/19/Win环境配置/1.png","c32e495ccfeb914740d76fdf84b2fda3"],["D:/blog/public/2019/11/19/Win环境配置/2.png","4cb6305070b92541ac6749688e6ddec6"],["D:/blog/public/2019/11/19/Win环境配置/3.png","da3b800653c68b7c463ee0b5598055e9"],["D:/blog/public/2019/11/19/Win环境配置/index.html","d521acdd53c0995a92f03dc6ec125813"],["D:/blog/public/2019/11/20/PAT-1043/index.html","a85f34d794ab4f4f8435e51cc52569f1"],["D:/blog/public/2019/11/22/PAT-1003/1.png","6fd7e183ac46df7222a1d2a2a4c9b12a"],["D:/blog/public/2019/11/22/PAT-1003/index.html","2a43472e05039cdea2988bba0eb534c1"],["D:/blog/public/2019/11/22/PAT-1018/index.html","ddb8d3f30d6627986f8a51fba423731b"],["D:/blog/public/2019/11/22/阅读管理/index.html","f321c17774bc1228503215e6a2697003"],["D:/blog/public/2019/11/23/ExcelToMarkdown/index.html","7f903fc194d95f8f2b1be68663740ef8"],["D:/blog/public/2019/11/23/PAT-1030/1.png","aecb20c8058c5af85e249217e120debe"],["D:/blog/public/2019/11/23/PAT-1030/index.html","4c0b627f0a28f7bac33df4b907d9e996"],["D:/blog/public/2019/11/23/四级选择填空高频词/index.html","2d2d274eaee3fc40468b0be5e21d593a"],["D:/blog/public/2019/11/24/PAT-1004/index.html","27ee5c93c0938e2f67c154b8863b149f"],["D:/blog/public/2019/11/24/PAT-1087/2.png","3a8111c12681b201c59e6a04840cf400"],["D:/blog/public/2019/11/24/PAT-1087/index.html","da813cf8b2b2b269b7144ade89536add"],["D:/blog/public/2019/11/25/Markdown编辑和预览/index.html","3ffcea833a628e6c3af2e4013b13bb26"],["D:/blog/public/2019/11/25/PAT-1079/index.html","3a61733fc6443b2f4e2c7a200c04a4bc"],["D:/blog/public/2019/11/25/PAT-1086/index.html","f6d5b78e903b00aaead54eb93682aa19"],["D:/blog/public/2019/11/25/PAT-1090/index.html","104fd33040506541730269a06f1da465"],["D:/blog/public/2019/11/25/PAT自动签到/index.html","9211cce78ee8318c127c7339ca77d035"],["D:/blog/public/2019/11/25/字幕文件处理/index.html","4709f9c8c2a8ebc2745820ad0f7ee5b9"],["D:/blog/public/2019/11/25/用需求引导学习/index.html","7638950830e574dc0a9ec3e8b9de30fd"],["D:/blog/public/archives/2019/10/index.html","6aff96bce310cad1db152d4ee633fd36"],["D:/blog/public/archives/2019/11/index.html","07fb091f5184a7dd6b6cc828d1279740"],["D:/blog/public/archives/2019/11/page/2/index.html","74316b242cbfa2cd0df7089b6fee74e8"],["D:/blog/public/archives/2019/11/page/3/index.html","4c2a1bb7abb701fe2517e411de84b68e"],["D:/blog/public/archives/2019/11/page/4/index.html","71eee931cca6918d9d58ef2f28e73dd1"],["D:/blog/public/archives/2019/11/page/5/index.html","bc24daf7b30d308a2d418d56dbb804ed"],["D:/blog/public/archives/2019/index.html","2a8110b7d5397c11a6838725b6b3f7a6"],["D:/blog/public/archives/2019/page/2/index.html","5a3efa0e21aa067bcb12931d77b12ca2"],["D:/blog/public/archives/2019/page/3/index.html","b2dfc3687a14dbc4dd050df0f92318f1"],["D:/blog/public/archives/2019/page/4/index.html","cc80e32cbf0bad54ce86db3333a7b88f"],["D:/blog/public/archives/2019/page/5/index.html","d0a7296d092b8d26259a4afc4e61e6bb"],["D:/blog/public/archives/2019/page/6/index.html","a6f207d5487af85d431131b54a4173d3"],["D:/blog/public/archives/index.html","96bd12dbaf0f06b0658d03a131066202"],["D:/blog/public/archives/page/2/index.html","67d25b2f35a869217f685774cbdba7d8"],["D:/blog/public/archives/page/3/index.html","6ee11a3a79db0d076bb2c1ef35509565"],["D:/blog/public/archives/page/4/index.html","dad9581b62cac08734a775ee8e256c16"],["D:/blog/public/archives/page/5/index.html","8982f01f59f2a35ca5fb50a1136140f2"],["D:/blog/public/archives/page/6/index.html","c5625d8a912ab142922f545bb99ef16d"],["D:/blog/public/categories/code/index.html","9ec3e5823f375f9cb6bc8fa46664aec7"],["D:/blog/public/categories/code/page/2/index.html","f352eabd2bc7a3d5e444f965d0fb032e"],["D:/blog/public/categories/code/page/3/index.html","7f95c98bde670a9e823566f7e958691e"],["D:/blog/public/categories/code/page/4/index.html","c7faecc40d8891bfcd093fd32180ae3b"],["D:/blog/public/categories/index.html","3922466b10d936888fc506ba58e0858f"],["D:/blog/public/categories/life/index.html","df02c01c2238139adb8966e63e42963b"],["D:/blog/public/categories/life/page/2/index.html","489158fc97d3b1b84081293df486e580"],["D:/blog/public/categories/note/index.html","1b16f071dbc62d9275e85400f1744307"],["D:/blog/public/css/index.css","9911b20a2e31dc1aa98c48e483335237"],["D:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/blog/public/index.html","4e8cb6c32eaf01e0feb858b7681c18af"],["D:/blog/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["D:/blog/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["D:/blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/blog/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["D:/blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/blog/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/blog/public/page/2/index.html","5d4e7a5b9dcd9601a5bf7413b4ef6c86"],["D:/blog/public/page/3/index.html","233a493bb2023b0ffa3f0a3a569791ae"],["D:/blog/public/page/4/index.html","76862415274e708a4075285c539f7572"],["D:/blog/public/page/5/index.html","71e389aaadc110ad363db8202ebcb9e7"],["D:/blog/public/page/6/index.html","e3ba36af73b5e294ffdffa23d701a47f"],["D:/blog/public/tags/PAT/index.html","2049397889a010c11bc5128995faef2f"],["D:/blog/public/tags/PAT/page/2/index.html","08924a8ba8ca95a38cfcb829a8a7b2ba"],["D:/blog/public/tags/bfs/index.html","9f70ac8e2de1be7dde89ed43a92a431d"],["D:/blog/public/tags/dfs/index.html","d3b24cb887544d56d329d4b53f5a02cb"],["D:/blog/public/tags/dijkstra/index.html","6713000809fff2518eb83b27ef902dee"],["D:/blog/public/tags/english/index.html","86b7080275f30d8a99b1c4758e214fe6"],["D:/blog/public/tags/git/index.html","c2834a6a9e21aebd2440af18e65ec54e"],["D:/blog/public/tags/index.html","985649e1206f605eb3391516159f3cec"],["D:/blog/public/tags/plan/index.html","4e5b53351f22ad8cf36ffbcdbf44913e"],["D:/blog/public/tags/python/index.html","05b0451d2a6d860076d4f1750bcd0567"],["D:/blog/public/tags/python语法/index.html","547e58ee728151ffe1d7de1f15b433b7"],["D:/blog/public/tags/travel/index.html","2bed4d333b9292efaac688c6d6f6ebef"],["D:/blog/public/tags/win/index.html","74b8f8f935798d0ffd06b2fa1e1bc094"],["D:/blog/public/tags/图/index.html","1d6f21e8663f57f318b5565c2c2b6a85"],["D:/blog/public/tags/图论/index.html","9e7631dd111b59de6500bb027a6369e3"],["D:/blog/public/tags/字符串/index.html","8e1b77735f6f917b21dd03b6eda945c4"],["D:/blog/public/tags/实践/index.html","11a53944f45cbbd09f2d65b4e5316777"],["D:/blog/public/tags/并查集/index.html","cd0eceacc056444befcaadb4f6b46500"],["D:/blog/public/tags/排序/index.html","244817a6abf837acf8024199f8962b81"],["D:/blog/public/tags/数学/index.html","6b849276db268a6610f8905117acc432"],["D:/blog/public/tags/整理/index.html","692041046a3f2ad89234d28a50669292"],["D:/blog/public/tags/文本编辑/index.html","6f38ecf31429d0f08555f72452bccc21"],["D:/blog/public/tags/树/index.html","12109b21b75595ca7664d3c48542c7a9"],["D:/blog/public/tags/竞赛/index.html","7c1ff0b2d7b578e8e273ace8b18f570f"],["D:/blog/public/tags/纪念日/index.html","6641fd69579a0a0c83d9fbd33a30cc13"],["D:/blog/public/tags/脚本/index.html","5a1f4c9bb634ec4a79f1552591593594"],["D:/blog/public/tags/链表/index.html","59703a9020c0e8350292119b468f6f0f"]];
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







