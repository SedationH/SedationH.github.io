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

var precacheConfig = [["D:/blog/public/2019/10/22/Markdown语法学习/index.html","c076013398b55ab5ed0220a4edb9191e"],["D:/blog/public/2019/10/22/PAT-1122/index.html","a29361f1d6e6df64e9380be534f4b2a7"],["D:/blog/public/2019/10/22/PAT计划/index.html","198fb888fcbdf5912d08913d11e3fb8e"],["D:/blog/public/2019/10/22/一周年纪念/1.png","b922b2b5d70da4521554e351b799eafa"],["D:/blog/public/2019/10/22/一周年纪念/10.jpg","4ee6bc37ff3698fa570a938b2bd3cd8f"],["D:/blog/public/2019/10/22/一周年纪念/11.jpg","1eb8883718238d92b64c1d22aa0ad727"],["D:/blog/public/2019/10/22/一周年纪念/12.jpg","6f72da1105ecd7baec4b4ae55a95c4e5"],["D:/blog/public/2019/10/22/一周年纪念/13.png","9a7c7b6afec674eb08e5607057ecadf9"],["D:/blog/public/2019/10/22/一周年纪念/14.jpg","1c2a7133e420bc4b898cff3c3a67c3cd"],["D:/blog/public/2019/10/22/一周年纪念/15.png","9c39368c806a0cfa2e7d709132df9056"],["D:/blog/public/2019/10/22/一周年纪念/16.png","35d0b5720714b6bdc6d3a406196eff55"],["D:/blog/public/2019/10/22/一周年纪念/17.png","9e7284fb82f396c4810ef96f1b4fe4f8"],["D:/blog/public/2019/10/22/一周年纪念/19.jpg","8a64b1eb0e09baf650be35c430e1e35b"],["D:/blog/public/2019/10/22/一周年纪念/20.jpg","0903b15ae3093a3532017dc07d32e3ac"],["D:/blog/public/2019/10/22/一周年纪念/21.jpg","22b445ee7acb7233b44fc4a25d3ae663"],["D:/blog/public/2019/10/22/一周年纪念/22.jpg","efc11d26abeff3b665daa5d9f2391f15"],["D:/blog/public/2019/10/22/一周年纪念/23.png","234580cc98d43a9b6e76eea8ec82470d"],["D:/blog/public/2019/10/22/一周年纪念/24.png","2ba8d6c8d4be23e8c33d3fc0f4b4b4d6"],["D:/blog/public/2019/10/22/一周年纪念/25.png","5ab1f6e4156096f8ba58f66255bc3c0a"],["D:/blog/public/2019/10/22/一周年纪念/27.jpg","836de2238b33e122dfca7d9da44f27e3"],["D:/blog/public/2019/10/22/一周年纪念/28.png","9e80a6a4a5ddebfd511f53ea1e8267b0"],["D:/blog/public/2019/10/22/一周年纪念/29.jpg","04f2ec6d41985b0ed3e44f2361c7899f"],["D:/blog/public/2019/10/22/一周年纪念/3.jpg","412cd99e96d03326a84f0c0a84d1ec10"],["D:/blog/public/2019/10/22/一周年纪念/30.png","befd1520ca9f8db304c88e9d88278df8"],["D:/blog/public/2019/10/22/一周年纪念/31.png","c18c6d47b84e55829bcfe8e11fb63729"],["D:/blog/public/2019/10/22/一周年纪念/32.jpg","14d40f93919dc0c17c38c039f8a35cb1"],["D:/blog/public/2019/10/22/一周年纪念/33.jpg","4e615748f58a6f23602d4a7806e6422c"],["D:/blog/public/2019/10/22/一周年纪念/5.png","9941823b1349fbb055ca615b6e3d54de"],["D:/blog/public/2019/10/22/一周年纪念/6.jpg","1266f0dcd054f6bd16fb50de12b43b26"],["D:/blog/public/2019/10/22/一周年纪念/8.png","6e4467f160ae2401f89d866bd1e7da2d"],["D:/blog/public/2019/10/22/一周年纪念/9.jpg","1e90bb672bca5590d1a4e79e97431fb8"],["D:/blog/public/2019/10/22/一周年纪念/index.html","30a5c8b5858518044530055a0fa6a286"],["D:/blog/public/2019/10/25/PAT-1142/index.html","dc16ae94fbe0b2c6703ba120e0bbf412"],["D:/blog/public/2019/10/26/刷题技巧整理/index.html","31e4d0fd8c180b402570ea88b9bcb966"],["D:/blog/public/2019/10/26/算法笔记阅读/1.png","92150d33ef3bd6c65a9aaced8376a92c"],["D:/blog/public/2019/10/26/算法笔记阅读/2.png","cfccd02ede828f058d6097a5ea36231e"],["D:/blog/public/2019/10/26/算法笔记阅读/3.png","8829fd0644f4aa7c563ed6700448d1a5"],["D:/blog/public/2019/10/26/算法笔记阅读/4.png","9cd3a2412ecc95904bc4fa988104670d"],["D:/blog/public/2019/10/26/算法笔记阅读/5.png","2d944484cd483c4328cf23f83f283df4"],["D:/blog/public/2019/10/26/算法笔记阅读/6.png","e029e7b61a5b2af8a9adca3fe5c958c7"],["D:/blog/public/2019/10/26/算法笔记阅读/7.png","e3ea1a023a3cd92a0f71600be7356567"],["D:/blog/public/2019/10/26/算法笔记阅读/8.png","6867de9496f219814cfdc9065a3300f5"],["D:/blog/public/2019/10/26/算法笔记阅读/9.png","9edf64d883da58014326c3dfe069972b"],["D:/blog/public/2019/10/26/算法笔记阅读/index.html","3a03c328226fb4a52356689baa71fc39"],["D:/blog/public/2019/10/29/PAT-1013/index.html","1eff94795c5f307b383fdc074bce3f50"],["D:/blog/public/2019/10/29/PAT-1034/index.html","9d5d92795168ec7e9d88fc4b9f9c2924"],["D:/blog/public/2019/10/30/PAT-1021/index.html","e78b4be140f7b688fb2859238b1e87b1"],["D:/blog/public/2019/11/03/Mac折腾记录/index.html","9d354c905c940cb4aa5dd7c5081e563f"],["D:/blog/public/2019/11/04/VSCode使用/1.png","e8132b252da910da84d0d1ae36572702"],["D:/blog/public/2019/11/04/VSCode使用/2.png","3c8c0b6004e0d69eb0fe084e61359e9f"],["D:/blog/public/2019/11/04/VSCode使用/index.html","fc1aab785770a762c8b00503cc6e6781"],["D:/blog/public/2019/11/05/PAT-1107/index.html","81702f53b17f725467298fb98f7c1630"],["D:/blog/public/2019/11/05/文件自动分类脚本/index.html","21be7ff169283d6d85644d124365f586"],["D:/blog/public/2019/11/06/PAT-1114/index.html","49d0932938d6899bd44c7f857c7e425d"],["D:/blog/public/2019/11/06/python基础/index.html","e4bd7cfc06f6bcfa32351f1aed60955b"],["D:/blog/public/2019/11/07/git学习/0.jpg","701e02bf0b2d71ab51b7e2b6aa973d52"],["D:/blog/public/2019/11/07/git学习/1.png","2adbbdf8d8bab5606af6279ef5612da2"],["D:/blog/public/2019/11/07/git学习/2.png","c6f039420a0f851eb424883511ac4e2f"],["D:/blog/public/2019/11/07/git学习/3.png","06f0d7d34075653ba25a18ea0fea8b7d"],["D:/blog/public/2019/11/07/git学习/4.png","cb8a9c11c8fd1326260bbc7c2c6a62ac"],["D:/blog/public/2019/11/07/git学习/index.html","7e67282cdff53bddf008e313e0b9aca8"],["D:/blog/public/2019/11/13/PAT-1025/index.html","bf32da175ed43fe4c1c6cfd3fa2d0337"],["D:/blog/public/2019/11/14/H和T的成长回忆录/index.html","bb345dd41ea14fbf8fd00043aa4776d7"],["D:/blog/public/2019/11/14/PAT-1069/index.html","5cb081dcd1c52bdcc59556587e99ec89"],["D:/blog/public/2019/11/14/PAT-1093/index.html","7c4df903e79e8ea3b5bef2e0b2f45a27"],["D:/blog/public/2019/11/14/PAT-1101/index.html","ac4e3c16876fc6e7b277f0f703e1b6ac"],["D:/blog/public/2019/11/14/blog分类规划/index.html","6d7ea8ab2353ca42f1ba07f392518eb7"],["D:/blog/public/2019/11/14/北京游感/index.html","6d1c0d6b5bd4829047c05218755cd6d4"],["D:/blog/public/2019/11/14/热爱生命/1.png","0b865b5a8c5ffc65ab33586bb50513b7"],["D:/blog/public/2019/11/14/热爱生命/index.html","e9593c03adb63ef5e2611d017f853df8"],["D:/blog/public/2019/11/14/随想-1/index.html","9b54e30d53e88946ab96f7e7b48e78ef"],["D:/blog/public/2019/11/14/随想-2/1.png","ba65a9551263d1c1cb9c1870d1ee8a29"],["D:/blog/public/2019/11/14/随想-2/index.html","231f9830fecaca475538d2188a4eaaf7"],["D:/blog/public/2019/11/15/PAT-1032/index.html","50eded1c291cc38a0e25db78f770b3fa"],["D:/blog/public/2019/11/15/PAT-1059/index.html","02f500f19770cb7b241d1a296cbcee29"],["D:/blog/public/2019/11/15/去南京/1.png","53d7c944f9a7326b86bd734f9d2d967c"],["D:/blog/public/2019/11/15/去南京/2.png","17208773d5c2ee30d094a597d4a8b9b6"],["D:/blog/public/2019/11/15/去南京/index.html","251eee984f9c36c49d076c9a3ec2e3de"],["D:/blog/public/2019/11/16/PAT-1052/index.html","c0e2b0bcd9fbf49ea41e84d84f29b746"],["D:/blog/public/2019/11/16/连通块个数/index.html","4a38d7b73e98bef382a5460142d625e8"],["D:/blog/public/2019/11/16/迷宫问题/index.html","a60018c952e2447cba733a19bf85309c"],["D:/blog/public/2019/11/17/Listening-training/index.html","da2d8a3a0270ff9b1c3fab34b4f438f1"],["D:/blog/public/2019/11/17/PAT-1020/index.html","8c955a6592d160ab3677a67ece832cd1"],["D:/blog/public/2019/11/18/随想-3/index.html","91323f5586ae48ee6b68cbcc603e74ff"],["D:/blog/public/2019/11/19/PAT-1053/index.html","0f9d7e1829618abd8ffe940697b87dd4"],["D:/blog/public/2019/11/19/Win环境配置/1.png","c32e495ccfeb914740d76fdf84b2fda3"],["D:/blog/public/2019/11/19/Win环境配置/2.png","4cb6305070b92541ac6749688e6ddec6"],["D:/blog/public/2019/11/19/Win环境配置/3.png","da3b800653c68b7c463ee0b5598055e9"],["D:/blog/public/2019/11/19/Win环境配置/index.html","ded5792262d69a5d721ca62f2f97d0fb"],["D:/blog/public/2019/11/20/PAT-1043/index.html","6121788a04d17052866704cf3cd13e4f"],["D:/blog/public/2019/11/22/PAT-1003/1.png","6fd7e183ac46df7222a1d2a2a4c9b12a"],["D:/blog/public/2019/11/22/PAT-1003/index.html","c3a83996632bd567401c872694139c90"],["D:/blog/public/2019/11/22/PAT-1018/index.html","c99a2ff8507c36663b8b2fc4c2d503a6"],["D:/blog/public/2019/11/22/阅读管理/index.html","a58742f233f5bf94b732c660925194c7"],["D:/blog/public/2019/11/23/ExcelToMarkdown/index.html","fda5f32c94a4658fe2c8fbaddcfd2ca6"],["D:/blog/public/2019/11/23/PAT-1030/1.png","aecb20c8058c5af85e249217e120debe"],["D:/blog/public/2019/11/23/PAT-1030/index.html","067dec79d8f96087b0fb837858dd53de"],["D:/blog/public/2019/11/23/四级选择填空高频词/index.html","ee6c9f711c7ac04b9005985a9f9cd3a8"],["D:/blog/public/2019/11/24/PAT-1004/index.html","642f0fc260883cf996113c2dc6661d3b"],["D:/blog/public/2019/11/24/PAT-1087/2.png","3a8111c12681b201c59e6a04840cf400"],["D:/blog/public/2019/11/24/PAT-1087/index.html","d0687190e87b159c32cc724b31017878"],["D:/blog/public/2019/11/25/Markdown编辑和预览/index.html","50016270ee0dbfb8888c061d31934f46"],["D:/blog/public/2019/11/25/PAT-1079/index.html","cb52c5325fc5acb280b93bcb30dd86fd"],["D:/blog/public/2019/11/25/PAT-1086/index.html","3a5e019350132d0329a8ff9f36014891"],["D:/blog/public/2019/11/25/PAT-1090/index.html","100d2ec2ec600140cc268a2e32010e5d"],["D:/blog/public/2019/11/25/PAT自动签到/1.png","0131d4cb9e40bf24404e33de225bd771"],["D:/blog/public/2019/11/25/PAT自动签到/index.html","2915fc1973d54ca0b7193718f1d756a3"],["D:/blog/public/2019/11/25/字幕文件处理/index.html","1b8ea33c59f13eb29827a758de9c1f12"],["D:/blog/public/2019/11/25/用需求引导学习/index.html","09158ab4ba34ab3232031074461b6311"],["D:/blog/public/2019/11/26/PAT-1094/index.html","429d58097eeb44bea330dd77e13992bb"],["D:/blog/public/2019/11/28/PAT-1012/index.html","8f1838740cd6ec61bfd8241d2b281372"],["D:/blog/public/2019/11/28/PAT-1102/index.html","901c035feaf5af89038c9b7e9e586a76"],["D:/blog/public/2019/11/28/道路思考/index.html","e411c9c7a6e77b0ce9e6630110fa9ccf"],["D:/blog/public/2019/11/30/随想-4/index.html","d3bfe862d9c2ce201e0c7513c4c50dce"],["D:/blog/public/2019/12/02/PAT考前准备/index.html","25adc50ed1c56d9cb84e1ef1bb3e3ed2"],["D:/blog/public/2019/12/03/PAT-1074/index.html","e326103124585c45b9de8fd0d1501916"],["D:/blog/public/2019/12/04/PAT-1115/index.html","b877afb43c1f52a46d9a04153b55dcfa"],["D:/blog/public/2019/12/10/test/index.html","98343a71ad87942168b1686278697259"],["D:/blog/public/archives/2019/10/index.html","62dbbbc14d670094070fdfc575f543a6"],["D:/blog/public/archives/2019/11/index.html","8f2aaa1e3088ba5b51d192e53c705b1f"],["D:/blog/public/archives/2019/11/page/2/index.html","65f979865deca897c508f9fbf3051655"],["D:/blog/public/archives/2019/11/page/3/index.html","aca40aa18f2af14c047b5ffc8ec1d4d5"],["D:/blog/public/archives/2019/11/page/4/index.html","75f996d6f7f44a7c1bd83b8b68e57955"],["D:/blog/public/archives/2019/11/page/5/index.html","fdf0858e9ea634a0f2a0dbc76a2c4b39"],["D:/blog/public/archives/2019/12/index.html","a02627e0b747d687ac2920161f38f524"],["D:/blog/public/archives/2019/index.html","1ca6517c6a54e209dc49e48b4c2ca7d7"],["D:/blog/public/archives/2019/page/2/index.html","6610c657ff1ff44d56c24987e00cc8b7"],["D:/blog/public/archives/2019/page/3/index.html","de4d1ebe492a31df1a87dacb505a7611"],["D:/blog/public/archives/2019/page/4/index.html","2c0453bec7f2bd9f721ac2b519f176e6"],["D:/blog/public/archives/2019/page/5/index.html","b82844499c65d0056590e8e9e7dbd254"],["D:/blog/public/archives/2019/page/6/index.html","5d23705f230e1e5226cfd7f5cd451da4"],["D:/blog/public/archives/2019/page/7/index.html","5361640bc64870eeb2152620ea8f8713"],["D:/blog/public/archives/index.html","e4ebe346185222c737941fea7fe20721"],["D:/blog/public/archives/page/2/index.html","3b447f1346751830e54e86662b5a4554"],["D:/blog/public/archives/page/3/index.html","e60d7985d30dd05ccdc397a3d9b9f7d1"],["D:/blog/public/archives/page/4/index.html","5da78359304dd81e23e9774adddc4ec7"],["D:/blog/public/archives/page/5/index.html","f13732d00e75d8b64b5e58f32fc5d90f"],["D:/blog/public/archives/page/6/index.html","4389383a633746d9001d6f4fa8a96eca"],["D:/blog/public/archives/page/7/index.html","aa74bef0cc8a4bdf1ba699e1880ab37d"],["D:/blog/public/categories/code/index.html","2142e531a8759471269b7435b9bc5be4"],["D:/blog/public/categories/code/page/2/index.html","97b91e1de69d65d79de6300a31b30430"],["D:/blog/public/categories/code/page/3/index.html","32a1decc52cbed1c391c195e7193bab2"],["D:/blog/public/categories/code/page/4/index.html","a08af47fc9ecf8345fb102804b163c9d"],["D:/blog/public/categories/code/page/5/index.html","354b20e0c16128b4b7159862f9fc9276"],["D:/blog/public/categories/index.html","4cf173bac774396ee5ad7404a3e27e38"],["D:/blog/public/categories/life/index.html","0dd925c59397bc908f07d8b7e757507f"],["D:/blog/public/categories/life/page/2/index.html","b9ae83bf1b46d0bb704d2ccdd0591891"],["D:/blog/public/categories/note/index.html","be5dd3beeed12f3117dad2ca497fee5d"],["D:/blog/public/css/index.css","9911b20a2e31dc1aa98c48e483335237"],["D:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/blog/public/index.html","06c36826fb88a6a3067009ee66f73c53"],["D:/blog/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["D:/blog/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["D:/blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/blog/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["D:/blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/blog/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/blog/public/page/2/index.html","05efe34131aef9521a0aa3dc4a929b3d"],["D:/blog/public/page/3/index.html","67456b5a3e60e0d7792e489c24896e57"],["D:/blog/public/page/4/index.html","4fa8925e9655869acb20c35c48c5798e"],["D:/blog/public/page/5/index.html","eeb2b390f24c0ce632a583e7950dfa8a"],["D:/blog/public/page/6/index.html","4ab7f18c1448ff7180f726b5f284f176"],["D:/blog/public/page/7/index.html","513a2f02d2f3abdac551b0874a553350"],["D:/blog/public/tags/PAT/index.html","1f4b812b053776cf15430ea1300b09e2"],["D:/blog/public/tags/PAT/page/2/index.html","9ce531b48d0bc8b7fc2f6c03db57375c"],["D:/blog/public/tags/bfs/index.html","116142129fe65ec1e960af576174d7dc"],["D:/blog/public/tags/dfs/index.html","58d9dcd6821a2a9fdb544a111bfacfc1"],["D:/blog/public/tags/dfs/page/2/index.html","10c5b78621a576972a461399888bc871"],["D:/blog/public/tags/dijkstra/index.html","e61ce99b1130597a8b4cc9dd57ac7162"],["D:/blog/public/tags/english/index.html","1b3a1cf387abb5383dd93568daa431fc"],["D:/blog/public/tags/git/index.html","ccd1c18b2dffb07d9362a90da3cb7dc4"],["D:/blog/public/tags/index.html","70a6287f0f13a6ce3773a14f6eb86cb3"],["D:/blog/public/tags/plan/index.html","073c9ee078890e9a8dc3ca8f342f7d28"],["D:/blog/public/tags/python/index.html","eac5af64844e8f67f9af7fcda73f8801"],["D:/blog/public/tags/python语法/index.html","c2c0c83d4c0ed427f548d877f925ddbc"],["D:/blog/public/tags/travel/index.html","a7f02838829183abeeb43e91595b4b53"],["D:/blog/public/tags/win/index.html","ba413126620ce045d07107c2c34be79e"],["D:/blog/public/tags/图/index.html","6ff6056c8bf4408fda4d5e97c9050857"],["D:/blog/public/tags/图论/index.html","e981661738c475cfbcc27370e7094a9b"],["D:/blog/public/tags/字符串/index.html","81d7fdcea3865b182147fcbe139c972a"],["D:/blog/public/tags/实践/index.html","ef9783c0282c364ad4d57742b1397a43"],["D:/blog/public/tags/并查集/index.html","93190e582696f900253d7d36a5f746c4"],["D:/blog/public/tags/排序/index.html","cfeaebe72a0d0cafdffb95f535368e64"],["D:/blog/public/tags/数学/index.html","840cb78de7e29597097fec0abf4a2860"],["D:/blog/public/tags/整理/index.html","05ff5988069f0cc6af998729b370f16a"],["D:/blog/public/tags/文本编辑/index.html","2006a845b5eae3ee1a1de95d419f0a1b"],["D:/blog/public/tags/树/index.html","c302fd0569d1618eeba402656ccddfc9"],["D:/blog/public/tags/竞赛/index.html","91fd8ccd38515830d19ca101da46684c"],["D:/blog/public/tags/纪念日/index.html","701045c8ee990222ac380a0602c3c6bb"],["D:/blog/public/tags/脚本/index.html","757d3aa87f186c44c2d261d2ef52f092"],["D:/blog/public/tags/链表/index.html","3fb4dc1b3b0d518de1f26f3ccc3e958f"]];
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







