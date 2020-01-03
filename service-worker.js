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

var precacheConfig = [["D:/blog/public/2019/10/22/Markdown语法学习/index.html","fbae54e1c6de5eca2f132a37b323c5a6"],["D:/blog/public/2019/10/22/PAT-1122/index.html","071196241e95046ffe895a17b7e95a9f"],["D:/blog/public/2019/10/22/PAT计划/index.html","81f88ccf1cdd6a2cac9080dcfd38bc49"],["D:/blog/public/2019/10/22/一周年纪念/1.png","b922b2b5d70da4521554e351b799eafa"],["D:/blog/public/2019/10/22/一周年纪念/10.jpg","4ee6bc37ff3698fa570a938b2bd3cd8f"],["D:/blog/public/2019/10/22/一周年纪念/11.jpg","1eb8883718238d92b64c1d22aa0ad727"],["D:/blog/public/2019/10/22/一周年纪念/12.jpg","6f72da1105ecd7baec4b4ae55a95c4e5"],["D:/blog/public/2019/10/22/一周年纪念/13.png","9a7c7b6afec674eb08e5607057ecadf9"],["D:/blog/public/2019/10/22/一周年纪念/14.jpg","1c2a7133e420bc4b898cff3c3a67c3cd"],["D:/blog/public/2019/10/22/一周年纪念/15.png","9c39368c806a0cfa2e7d709132df9056"],["D:/blog/public/2019/10/22/一周年纪念/16.png","35d0b5720714b6bdc6d3a406196eff55"],["D:/blog/public/2019/10/22/一周年纪念/17.png","9e7284fb82f396c4810ef96f1b4fe4f8"],["D:/blog/public/2019/10/22/一周年纪念/19.jpg","8a64b1eb0e09baf650be35c430e1e35b"],["D:/blog/public/2019/10/22/一周年纪念/20.jpg","0903b15ae3093a3532017dc07d32e3ac"],["D:/blog/public/2019/10/22/一周年纪念/21.jpg","22b445ee7acb7233b44fc4a25d3ae663"],["D:/blog/public/2019/10/22/一周年纪念/22.jpg","efc11d26abeff3b665daa5d9f2391f15"],["D:/blog/public/2019/10/22/一周年纪念/23.png","234580cc98d43a9b6e76eea8ec82470d"],["D:/blog/public/2019/10/22/一周年纪念/24.png","2ba8d6c8d4be23e8c33d3fc0f4b4b4d6"],["D:/blog/public/2019/10/22/一周年纪念/25.png","5ab1f6e4156096f8ba58f66255bc3c0a"],["D:/blog/public/2019/10/22/一周年纪念/27.jpg","836de2238b33e122dfca7d9da44f27e3"],["D:/blog/public/2019/10/22/一周年纪念/28.png","9e80a6a4a5ddebfd511f53ea1e8267b0"],["D:/blog/public/2019/10/22/一周年纪念/29.jpg","04f2ec6d41985b0ed3e44f2361c7899f"],["D:/blog/public/2019/10/22/一周年纪念/3.jpg","412cd99e96d03326a84f0c0a84d1ec10"],["D:/blog/public/2019/10/22/一周年纪念/30.png","befd1520ca9f8db304c88e9d88278df8"],["D:/blog/public/2019/10/22/一周年纪念/31.png","c18c6d47b84e55829bcfe8e11fb63729"],["D:/blog/public/2019/10/22/一周年纪念/32.jpg","14d40f93919dc0c17c38c039f8a35cb1"],["D:/blog/public/2019/10/22/一周年纪念/33.jpg","4e615748f58a6f23602d4a7806e6422c"],["D:/blog/public/2019/10/22/一周年纪念/5.png","9941823b1349fbb055ca615b6e3d54de"],["D:/blog/public/2019/10/22/一周年纪念/6.jpg","1266f0dcd054f6bd16fb50de12b43b26"],["D:/blog/public/2019/10/22/一周年纪念/8.png","6e4467f160ae2401f89d866bd1e7da2d"],["D:/blog/public/2019/10/22/一周年纪念/9.jpg","1e90bb672bca5590d1a4e79e97431fb8"],["D:/blog/public/2019/10/22/一周年纪念/index.html","626e44bfa467d99ee5d4d45a8865a93b"],["D:/blog/public/2019/10/25/PAT-1142/index.html","e14605ef44aaddf9d89e8e5e0bb3a128"],["D:/blog/public/2019/10/26/刷题技巧整理/index.html","dbfd095639aa672946a81fdc55ba1d6b"],["D:/blog/public/2019/10/26/算法笔记阅读/1.png","92150d33ef3bd6c65a9aaced8376a92c"],["D:/blog/public/2019/10/26/算法笔记阅读/2.png","cfccd02ede828f058d6097a5ea36231e"],["D:/blog/public/2019/10/26/算法笔记阅读/3.png","8829fd0644f4aa7c563ed6700448d1a5"],["D:/blog/public/2019/10/26/算法笔记阅读/4.png","9cd3a2412ecc95904bc4fa988104670d"],["D:/blog/public/2019/10/26/算法笔记阅读/5.png","2d944484cd483c4328cf23f83f283df4"],["D:/blog/public/2019/10/26/算法笔记阅读/6.png","e029e7b61a5b2af8a9adca3fe5c958c7"],["D:/blog/public/2019/10/26/算法笔记阅读/7.png","e3ea1a023a3cd92a0f71600be7356567"],["D:/blog/public/2019/10/26/算法笔记阅读/8.png","6867de9496f219814cfdc9065a3300f5"],["D:/blog/public/2019/10/26/算法笔记阅读/9.png","9edf64d883da58014326c3dfe069972b"],["D:/blog/public/2019/10/26/算法笔记阅读/index.html","6e1a48d59195c8983470f0e8a1b7023f"],["D:/blog/public/2019/10/29/PAT-1013/index.html","346eb745451be5eb83cfd359f114555d"],["D:/blog/public/2019/10/29/PAT-1034/index.html","d9c5f7044d0a518738e28cd89f86dfef"],["D:/blog/public/2019/10/30/PAT-1021/index.html","94263078503f4a869fe856cb300a3334"],["D:/blog/public/2019/11/03/Mac折腾记录/index.html","96c7ff7884bf5e7355ca391a9cf22fe2"],["D:/blog/public/2019/11/04/VSCode使用/1.png","e8132b252da910da84d0d1ae36572702"],["D:/blog/public/2019/11/04/VSCode使用/2.png","3c8c0b6004e0d69eb0fe084e61359e9f"],["D:/blog/public/2019/11/04/VSCode使用/index.html","80863a798e9693d90d3455e171f45d0d"],["D:/blog/public/2019/11/05/PAT-1107/index.html","bbe62617d68e6ed4cc95c0da78e1c286"],["D:/blog/public/2019/11/05/文件自动分类脚本/index.html","4e6d5dc50c9e64fca3315a014baacf2d"],["D:/blog/public/2019/11/06/PAT-1114/index.html","cd6b974960e64f3360fcffc7543647a4"],["D:/blog/public/2019/11/06/python基础/index.html","77ce566c175c20d4145ec1b27277d839"],["D:/blog/public/2019/11/07/git学习/0.jpg","701e02bf0b2d71ab51b7e2b6aa973d52"],["D:/blog/public/2019/11/07/git学习/1.png","2adbbdf8d8bab5606af6279ef5612da2"],["D:/blog/public/2019/11/07/git学习/2.png","c6f039420a0f851eb424883511ac4e2f"],["D:/blog/public/2019/11/07/git学习/3.png","06f0d7d34075653ba25a18ea0fea8b7d"],["D:/blog/public/2019/11/07/git学习/4.png","cb8a9c11c8fd1326260bbc7c2c6a62ac"],["D:/blog/public/2019/11/07/git学习/index.html","92340b6dd31291d030ee5aaed7b6dd23"],["D:/blog/public/2019/11/13/PAT-1025/index.html","031d405fffd6974db09b2020b816e926"],["D:/blog/public/2019/11/14/H和T的成长回忆录/index.html","cdbc6b32b9fe16b5bd4203690cb375df"],["D:/blog/public/2019/11/14/PAT-1069/index.html","082d34b2dd82bfdc248032548ac65529"],["D:/blog/public/2019/11/14/PAT-1093/index.html","60151d01a5109dc90760d110d6075ab3"],["D:/blog/public/2019/11/14/PAT-1101/index.html","4a17e0d60f4e7bd40e1ebc164e3b25d9"],["D:/blog/public/2019/11/14/blog分类规划/index.html","6f0f2c9223f6fb89db890ab552e2ab77"],["D:/blog/public/2019/11/14/北京游感/index.html","8a76ba318abd0d0a29d7309a919dadd4"],["D:/blog/public/2019/11/14/热爱生命/1.png","0b865b5a8c5ffc65ab33586bb50513b7"],["D:/blog/public/2019/11/14/热爱生命/index.html","79b1cb7ef0296457dbdffa75912c6173"],["D:/blog/public/2019/11/14/随想-1/index.html","f30aa93aa22c4672b4acad65f3b97218"],["D:/blog/public/2019/11/14/随想-2/1.png","ba65a9551263d1c1cb9c1870d1ee8a29"],["D:/blog/public/2019/11/14/随想-2/index.html","0a6edbbd755deb5ac2cf1faa08d0ae01"],["D:/blog/public/2019/11/15/PAT-1032/index.html","504f279b4e2a681a88c0a9eb2acbc050"],["D:/blog/public/2019/11/15/PAT-1059/index.html","4acbb972812eaefe19eefce035d4155e"],["D:/blog/public/2019/11/15/去南京/1.png","53d7c944f9a7326b86bd734f9d2d967c"],["D:/blog/public/2019/11/15/去南京/2.png","17208773d5c2ee30d094a597d4a8b9b6"],["D:/blog/public/2019/11/15/去南京/index.html","07188ad75396b81146bfa009a0970ed6"],["D:/blog/public/2019/11/16/PAT-1052/index.html","443cd76b1a78dedf696617698bfdb6a1"],["D:/blog/public/2019/11/16/连通块个数/index.html","96bc09f59d3bbce332903da30e5a5e40"],["D:/blog/public/2019/11/16/迷宫问题/index.html","fc56ce91ece42e7f9edefb755b943a95"],["D:/blog/public/2019/11/17/Listening-training/index.html","f1773a3fbf1c9007451fc215db25d935"],["D:/blog/public/2019/11/17/PAT-1020/index.html","246bc958b49ddec584553a28bf5c9dd9"],["D:/blog/public/2019/11/18/随想-3/index.html","e4e772415e402a54e049df69624b262d"],["D:/blog/public/2019/11/19/PAT-1053/index.html","591a3b76699be70c64394e3f906644c4"],["D:/blog/public/2019/11/19/Win环境配置/1.png","c32e495ccfeb914740d76fdf84b2fda3"],["D:/blog/public/2019/11/19/Win环境配置/2.png","4cb6305070b92541ac6749688e6ddec6"],["D:/blog/public/2019/11/19/Win环境配置/3.png","da3b800653c68b7c463ee0b5598055e9"],["D:/blog/public/2019/11/19/Win环境配置/index.html","101a0655528d1d0e323d9c779057f0ee"],["D:/blog/public/2019/11/20/PAT-1043/index.html","410c0cce32b6e23b88a6fd28bb01e10d"],["D:/blog/public/2019/11/22/PAT-1003/1.png","6fd7e183ac46df7222a1d2a2a4c9b12a"],["D:/blog/public/2019/11/22/PAT-1003/index.html","f98027483dcf2bbf76e3c0a1814fa282"],["D:/blog/public/2019/11/22/PAT-1018/index.html","5430205a2c9696846c7e74cf5a540903"],["D:/blog/public/2019/11/22/阅读管理/index.html","5800ae15e7b65b3506df2a7b052fb7bf"],["D:/blog/public/2019/11/23/ExcelToMarkdown/index.html","9665f8303e5292a9bbf530dafd034e4f"],["D:/blog/public/2019/11/23/PAT-1030/1.png","aecb20c8058c5af85e249217e120debe"],["D:/blog/public/2019/11/23/PAT-1030/index.html","334c6a7706e7fa2d543679aaf4a46d1f"],["D:/blog/public/2019/11/23/四级选择填空高频词/index.html","77b04cb593d2439e2d33fe04ee982d03"],["D:/blog/public/2019/11/24/PAT-1004/index.html","9fb7de3b5767cbda6c2f6436cf63d795"],["D:/blog/public/2019/11/24/PAT-1087/2.png","3a8111c12681b201c59e6a04840cf400"],["D:/blog/public/2019/11/24/PAT-1087/index.html","942459d8d886d318f41d04ccbed9cd19"],["D:/blog/public/2019/11/25/Markdown编辑和预览/index.html","4d5ad723dbb70669b6c15f0e77cdd5e0"],["D:/blog/public/2019/11/25/PAT-1079/index.html","61c46c749d4d4ff5d63a2cb5dae936ab"],["D:/blog/public/2019/11/25/PAT-1086/index.html","0344d759328497f4b4b426912fddf6ff"],["D:/blog/public/2019/11/25/PAT-1090/index.html","a329c4fc6f6341c5514a4458935ee85d"],["D:/blog/public/2019/11/25/PAT自动签到/1.png","0131d4cb9e40bf24404e33de225bd771"],["D:/blog/public/2019/11/25/PAT自动签到/index.html","e9299806cb1d4f318ac3c57e1846749d"],["D:/blog/public/2019/11/25/字幕文件处理/index.html","c4d983f5eaa6d6c726ae0a261ae1b7d1"],["D:/blog/public/2019/11/25/用需求引导学习/index.html","67b75da20eb951c3258a8bcb1417c650"],["D:/blog/public/2019/11/26/PAT-1094/index.html","1757da9ab290bffc3baee298e720e622"],["D:/blog/public/2019/11/28/PAT-1012/index.html","1368fece3f655045d3ad78c500059a9a"],["D:/blog/public/2019/11/28/PAT-1102/index.html","3a2ba9d4d4b00c037bb4221798a40df4"],["D:/blog/public/2019/11/28/道路思考/index.html","e38cce73a1db5ad03748a654acba0e5e"],["D:/blog/public/2019/11/30/随想-4/index.html","3b383647fffe505c5f1de46113451d42"],["D:/blog/public/2019/12/02/PAT考前准备/index.html","dd707273b7e1dfd87eb57892d3daf8d9"],["D:/blog/public/2019/12/03/PAT-1074/index.html","000ee004b2d6049def9117153b779da7"],["D:/blog/public/2019/12/04/PAT-1115/index.html","255c2a7dd2751a6bc50a9ac91439d49c"],["D:/blog/public/2019/12/10/test/index.html","104705e41885a8a5594fa4f34de2cb4e"],["D:/blog/public/2019/12/16/随想-5/index.html","c4de26b5fd738a2ecc9e9b82da74c7b7"],["D:/blog/public/2019/12/19/cplus面向对象复习/index.html","1c89c0ac1ecd6577fbb431e66fbd4760"],["D:/blog/public/2019/12/30/前端学习记录与规划/index.html","fe3d0039f197ebcc60466b2074d9a556"],["D:/blog/public/archives/2019/10/index.html","6375ab74369f463c7d39c070eeba5071"],["D:/blog/public/archives/2019/11/index.html","6a7888604f198c0c88ed02a54d2d1c45"],["D:/blog/public/archives/2019/11/page/2/index.html","3e2164d856fc8e1d2eb0529aff38169f"],["D:/blog/public/archives/2019/11/page/3/index.html","8e13f70310b12c37d9e6ac93798e13ec"],["D:/blog/public/archives/2019/11/page/4/index.html","b11a2d69714ae04e57dc70233c0db3c7"],["D:/blog/public/archives/2019/11/page/5/index.html","7f664458c115ebce5dc70ff420cb32c4"],["D:/blog/public/archives/2019/12/index.html","39c170a7745bad721f4653548395047e"],["D:/blog/public/archives/2019/index.html","55aa48684ead1fc5bc3c6a4a2d6f812a"],["D:/blog/public/archives/2019/page/2/index.html","9636d4d6cb7a974fe145c4a0dc2389dc"],["D:/blog/public/archives/2019/page/3/index.html","a9add881df0ec783233b3ecd312c6cb7"],["D:/blog/public/archives/2019/page/4/index.html","e16972dacc3030f46fb31d8ce1c7c366"],["D:/blog/public/archives/2019/page/5/index.html","41868b17499a7390022761108695a59f"],["D:/blog/public/archives/2019/page/6/index.html","90b4cb30247c850cf98a4d899048ac80"],["D:/blog/public/archives/2019/page/7/index.html","2eb182cad80a3187a6e63c90fef5cc8f"],["D:/blog/public/archives/index.html","08e569a849bc9072211e32621640604f"],["D:/blog/public/archives/page/2/index.html","5057e542cc236b356637796fc4add264"],["D:/blog/public/archives/page/3/index.html","c1ce37f48d6bfc8d523def7d9a835c68"],["D:/blog/public/archives/page/4/index.html","c0ad277059a4d10f2842f4992fe4fea1"],["D:/blog/public/archives/page/5/index.html","4528755f3fc124c6b5ed957568288dae"],["D:/blog/public/archives/page/6/index.html","5a49bbcbe94ebdff42d24f57445305f7"],["D:/blog/public/archives/page/7/index.html","acd22ae2b7d1d21c89dac1fae41d2faa"],["D:/blog/public/categories/code/index.html","6650aa1dc99543a7c8458a40e2fb6120"],["D:/blog/public/categories/code/page/2/index.html","964f7602fdd940d57d59cfd95e447b1e"],["D:/blog/public/categories/code/page/3/index.html","adfa017600adfe1c9fff73572b6af131"],["D:/blog/public/categories/code/page/4/index.html","60d3e7d4c1639ff54db575128df179c2"],["D:/blog/public/categories/code/page/5/index.html","aca412c6cdecaffa12194d73d3d0fb9b"],["D:/blog/public/categories/index.html","42783cb0784298fe43a6aa6d220c394a"],["D:/blog/public/categories/life/index.html","bd616bd2c553c05b2354fc5aeaa8102b"],["D:/blog/public/categories/life/page/2/index.html","c752b436932f9b706bd002a65f67b8c9"],["D:/blog/public/categories/note/index.html","91899f745283c87e3bc2865d3445ed77"],["D:/blog/public/categories/note/page/2/index.html","c5e6c0449a9d35bb1063f9427e022f52"],["D:/blog/public/css/index.css","9911b20a2e31dc1aa98c48e483335237"],["D:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/blog/public/index.html","b4d7afbe6bb719bc1730f8880f054b1c"],["D:/blog/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["D:/blog/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["D:/blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/blog/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["D:/blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/blog/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/blog/public/page/2/index.html","7d1a84e7ff6e7f329c3bae04a9ae8203"],["D:/blog/public/page/3/index.html","3bcd9e070ef88a9dc30d5b8c44233379"],["D:/blog/public/page/4/index.html","69a34f1d8a6b7ced91c8ef3d3491c5cd"],["D:/blog/public/page/5/index.html","c6e215fd8e9ec1cc0e476fe2633b2ead"],["D:/blog/public/page/6/index.html","200f8bd46abd0d150982e306afe2694c"],["D:/blog/public/page/7/index.html","94043286301ef68c3c988db1d05f5385"],["D:/blog/public/tags/PAT/index.html","b13fa8600a6ef07eb8f722e0ee14339f"],["D:/blog/public/tags/PAT/page/2/index.html","724cf55736eeed918174687498bb51af"],["D:/blog/public/tags/bfs/index.html","220369f361ce7900835cf2c7c4944e9e"],["D:/blog/public/tags/dfs/index.html","f6984fadbfa6b705bed4eed7239a5c14"],["D:/blog/public/tags/dfs/page/2/index.html","c8773f759755668fbdd00ceb39381247"],["D:/blog/public/tags/dijkstra/index.html","89438bb5ccc640a460e15ae678164bf9"],["D:/blog/public/tags/english/index.html","61e6495f4445abe2959cce45ba09f1c3"],["D:/blog/public/tags/git/index.html","9a6995df73ccd55461b0d01da3f84b83"],["D:/blog/public/tags/index.html","4cacc0684fade3210a91ca6f499c3f6d"],["D:/blog/public/tags/plan/index.html","472a98b408596518d393808e1b0a336d"],["D:/blog/public/tags/python/index.html","12d07b4dd1e41a900e7d840e6b54d7e6"],["D:/blog/public/tags/python语法/index.html","8252f4689ae045731f732ab1f1977ad4"],["D:/blog/public/tags/travel/index.html","d2588d5e86cba77353ecd653af79d40f"],["D:/blog/public/tags/win/index.html","df6c75edfe22e17e4fa5414834106141"],["D:/blog/public/tags/图/index.html","4ca70ee507df7fe720c2ea1c06562329"],["D:/blog/public/tags/图论/index.html","a82c43628c789bd3c635ed2d4cd1f5d9"],["D:/blog/public/tags/字符串/index.html","34a67ab93125684749934adf7fe72030"],["D:/blog/public/tags/实践/index.html","e96b38bfa94746defc954a5d291757cc"],["D:/blog/public/tags/并查集/index.html","f42694578199eea70f390743e8147738"],["D:/blog/public/tags/排序/index.html","5f0c070839547935355cc105a921e995"],["D:/blog/public/tags/数学/index.html","b47f05612c85e5e19c9455b727483ba7"],["D:/blog/public/tags/整理/index.html","a311d794e15105710aa90724a1d98127"],["D:/blog/public/tags/文本编辑/index.html","e9d8f7b971498fa6fc28e2cd09613d89"],["D:/blog/public/tags/树/index.html","484ae2d6876b14a33e38b07c0420608e"],["D:/blog/public/tags/竞赛/index.html","cdb51ba12f40847ab1be3146d6b1c7f0"],["D:/blog/public/tags/纪念日/index.html","d0f5fb4281850fbbdd06532ebf9a9ce8"],["D:/blog/public/tags/脚本/index.html","9df62c63ed4991ad6603cb216ace075c"],["D:/blog/public/tags/链表/index.html","c97e3f6f30f767fd0d42f61dcf962254"]];
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







