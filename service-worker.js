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

var precacheConfig = [["D:/blog/public/2019/10/22/Markdown语法学习/index.html","15cc9141035b768480831d88b2d65080"],["D:/blog/public/2019/10/22/PAT-1122/index.html","a035c1fa5cb6d62b1b1313015b394195"],["D:/blog/public/2019/10/22/PAT计划/index.html","5ad4776a2139b810f67f0faee5492296"],["D:/blog/public/2019/10/22/一周年纪念/1.png","b922b2b5d70da4521554e351b799eafa"],["D:/blog/public/2019/10/22/一周年纪念/10.jpg","4ee6bc37ff3698fa570a938b2bd3cd8f"],["D:/blog/public/2019/10/22/一周年纪念/11.jpg","1eb8883718238d92b64c1d22aa0ad727"],["D:/blog/public/2019/10/22/一周年纪念/12.jpg","6f72da1105ecd7baec4b4ae55a95c4e5"],["D:/blog/public/2019/10/22/一周年纪念/13.png","9a7c7b6afec674eb08e5607057ecadf9"],["D:/blog/public/2019/10/22/一周年纪念/14.jpg","1c2a7133e420bc4b898cff3c3a67c3cd"],["D:/blog/public/2019/10/22/一周年纪念/15.png","9c39368c806a0cfa2e7d709132df9056"],["D:/blog/public/2019/10/22/一周年纪念/16.png","35d0b5720714b6bdc6d3a406196eff55"],["D:/blog/public/2019/10/22/一周年纪念/17.png","9e7284fb82f396c4810ef96f1b4fe4f8"],["D:/blog/public/2019/10/22/一周年纪念/19.jpg","8a64b1eb0e09baf650be35c430e1e35b"],["D:/blog/public/2019/10/22/一周年纪念/20.jpg","0903b15ae3093a3532017dc07d32e3ac"],["D:/blog/public/2019/10/22/一周年纪念/21.jpg","22b445ee7acb7233b44fc4a25d3ae663"],["D:/blog/public/2019/10/22/一周年纪念/22.jpg","efc11d26abeff3b665daa5d9f2391f15"],["D:/blog/public/2019/10/22/一周年纪念/23.png","234580cc98d43a9b6e76eea8ec82470d"],["D:/blog/public/2019/10/22/一周年纪念/24.png","2ba8d6c8d4be23e8c33d3fc0f4b4b4d6"],["D:/blog/public/2019/10/22/一周年纪念/25.png","5ab1f6e4156096f8ba58f66255bc3c0a"],["D:/blog/public/2019/10/22/一周年纪念/27.jpg","836de2238b33e122dfca7d9da44f27e3"],["D:/blog/public/2019/10/22/一周年纪念/28.png","9e80a6a4a5ddebfd511f53ea1e8267b0"],["D:/blog/public/2019/10/22/一周年纪念/29.jpg","04f2ec6d41985b0ed3e44f2361c7899f"],["D:/blog/public/2019/10/22/一周年纪念/3.jpg","412cd99e96d03326a84f0c0a84d1ec10"],["D:/blog/public/2019/10/22/一周年纪念/30.png","befd1520ca9f8db304c88e9d88278df8"],["D:/blog/public/2019/10/22/一周年纪念/31.png","c18c6d47b84e55829bcfe8e11fb63729"],["D:/blog/public/2019/10/22/一周年纪念/32.jpg","14d40f93919dc0c17c38c039f8a35cb1"],["D:/blog/public/2019/10/22/一周年纪念/33.jpg","4e615748f58a6f23602d4a7806e6422c"],["D:/blog/public/2019/10/22/一周年纪念/5.png","9941823b1349fbb055ca615b6e3d54de"],["D:/blog/public/2019/10/22/一周年纪念/6.jpg","1266f0dcd054f6bd16fb50de12b43b26"],["D:/blog/public/2019/10/22/一周年纪念/8.png","6e4467f160ae2401f89d866bd1e7da2d"],["D:/blog/public/2019/10/22/一周年纪念/9.jpg","1e90bb672bca5590d1a4e79e97431fb8"],["D:/blog/public/2019/10/22/一周年纪念/index.html","117a13ca4d5cd5fd1ff154fc66bb5539"],["D:/blog/public/2019/10/25/PAT-1142/index.html","5c51136025afaa382e0d02d11f0f6c25"],["D:/blog/public/2019/10/26/刷题技巧整理/index.html","689a32cd07c8150506d7f317a0205350"],["D:/blog/public/2019/10/26/算法笔记阅读/1.png","92150d33ef3bd6c65a9aaced8376a92c"],["D:/blog/public/2019/10/26/算法笔记阅读/2.png","cfccd02ede828f058d6097a5ea36231e"],["D:/blog/public/2019/10/26/算法笔记阅读/3.png","8829fd0644f4aa7c563ed6700448d1a5"],["D:/blog/public/2019/10/26/算法笔记阅读/4.png","9cd3a2412ecc95904bc4fa988104670d"],["D:/blog/public/2019/10/26/算法笔记阅读/5.png","2d944484cd483c4328cf23f83f283df4"],["D:/blog/public/2019/10/26/算法笔记阅读/6.png","e029e7b61a5b2af8a9adca3fe5c958c7"],["D:/blog/public/2019/10/26/算法笔记阅读/7.png","e3ea1a023a3cd92a0f71600be7356567"],["D:/blog/public/2019/10/26/算法笔记阅读/8.png","6867de9496f219814cfdc9065a3300f5"],["D:/blog/public/2019/10/26/算法笔记阅读/9.png","9edf64d883da58014326c3dfe069972b"],["D:/blog/public/2019/10/26/算法笔记阅读/index.html","6fe6c0e827e3771b0750462e63a92dd1"],["D:/blog/public/2019/10/29/PAT-1013/index.html","3c163e4924d83aa1135c32b9aaa5b525"],["D:/blog/public/2019/10/29/PAT-1034/index.html","8bd77f22d81ab13d8a6e63684ef29a69"],["D:/blog/public/2019/10/30/PAT-1021/index.html","79eec4bf96142af00f9b8c69708a50e6"],["D:/blog/public/2019/11/03/Mac折腾记录/index.html","05a10c8d39d9b57ea7927779b7b36d04"],["D:/blog/public/2019/11/04/VSCode使用/1.png","e8132b252da910da84d0d1ae36572702"],["D:/blog/public/2019/11/04/VSCode使用/2.png","3c8c0b6004e0d69eb0fe084e61359e9f"],["D:/blog/public/2019/11/04/VSCode使用/index.html","fe69856a8df03a27169feaddef7a6982"],["D:/blog/public/2019/11/05/PAT-1107/index.html","86ca536dd4421ded74711f9a32cddacc"],["D:/blog/public/2019/11/05/文件自动分类脚本/index.html","eff3c334dc991589c12359dceeb6250c"],["D:/blog/public/2019/11/06/PAT-1114/index.html","8e9c3f20f46b543605179b2c21c6f103"],["D:/blog/public/2019/11/06/python基础/index.html","e78da10e0d20971bb309516a96c2438b"],["D:/blog/public/2019/11/07/git学习/0.jpg","701e02bf0b2d71ab51b7e2b6aa973d52"],["D:/blog/public/2019/11/07/git学习/1.png","2adbbdf8d8bab5606af6279ef5612da2"],["D:/blog/public/2019/11/07/git学习/2.png","c6f039420a0f851eb424883511ac4e2f"],["D:/blog/public/2019/11/07/git学习/3.png","06f0d7d34075653ba25a18ea0fea8b7d"],["D:/blog/public/2019/11/07/git学习/4.png","cb8a9c11c8fd1326260bbc7c2c6a62ac"],["D:/blog/public/2019/11/07/git学习/index.html","da0e802fb875c6be484c12f04a3ded24"],["D:/blog/public/2019/11/13/PAT-1025/index.html","9551b720915bed9e4f4f5f727732b5c7"],["D:/blog/public/2019/11/14/H和T的成长回忆录/index.html","b094bde56ebc7611b0a33c3acb898e33"],["D:/blog/public/2019/11/14/PAT-1069/index.html","2e04d9549e02c5dc6f47ec65748384e9"],["D:/blog/public/2019/11/14/PAT-1093/index.html","5e5fc8d83380be7c3ed94d58dd9f916f"],["D:/blog/public/2019/11/14/PAT-1101/index.html","b6ff3c14060c2ce7387a345c2360dec9"],["D:/blog/public/2019/11/14/blog分类规划/index.html","4a2ae4a32533882486b5a2483b76c3f1"],["D:/blog/public/2019/11/14/北京游感/index.html","ae8947694161f5e6c92db1d2b5802658"],["D:/blog/public/2019/11/14/热爱生命/1.png","0b865b5a8c5ffc65ab33586bb50513b7"],["D:/blog/public/2019/11/14/热爱生命/index.html","735e88279d57dec191d8f65ec634dbcf"],["D:/blog/public/2019/11/14/随想-1/index.html","a76f773403ac267c20cac150112fc1e9"],["D:/blog/public/2019/11/14/随想-2/1.png","ba65a9551263d1c1cb9c1870d1ee8a29"],["D:/blog/public/2019/11/14/随想-2/index.html","1af7a88551dda768fd108642be311886"],["D:/blog/public/2019/11/15/PAT-1032/index.html","8f2abc30bd0140b476019586a32da01a"],["D:/blog/public/2019/11/15/PAT-1059/index.html","a5e2347be00705d9ef7a414f5f173259"],["D:/blog/public/2019/11/15/去南京/1.png","53d7c944f9a7326b86bd734f9d2d967c"],["D:/blog/public/2019/11/15/去南京/2.png","17208773d5c2ee30d094a597d4a8b9b6"],["D:/blog/public/2019/11/15/去南京/index.html","232b78f286466bf3d38db726598af60f"],["D:/blog/public/2019/11/16/PAT-1052/index.html","70ba38f6dd38ee56f847e1fa0a4bc03f"],["D:/blog/public/2019/11/16/连通块个数/index.html","b240434c3b62d7367da8e926ae129868"],["D:/blog/public/2019/11/16/迷宫问题/index.html","30b97e45a5356c50ea8254c8e6de5327"],["D:/blog/public/2019/11/17/Listening-training/index.html","efa37181cc843baa4a2b10ac26176134"],["D:/blog/public/2019/11/17/PAT-1020/index.html","b89c7c86c04b4fc657e02bd8d83b2ca9"],["D:/blog/public/2019/11/18/随想-3/index.html","06fd69738e3bfe8851dbfa860b6335b2"],["D:/blog/public/2019/11/19/PAT-1053/index.html","9e73ce081413e8dfacb7564c520814e9"],["D:/blog/public/2019/11/19/Win环境配置/1.png","c32e495ccfeb914740d76fdf84b2fda3"],["D:/blog/public/2019/11/19/Win环境配置/2.png","4cb6305070b92541ac6749688e6ddec6"],["D:/blog/public/2019/11/19/Win环境配置/3.png","da3b800653c68b7c463ee0b5598055e9"],["D:/blog/public/2019/11/19/Win环境配置/index.html","fcd1ea48766c4a0c3354a685b38e3184"],["D:/blog/public/2019/11/20/PAT-1043/index.html","4661dc014af1a0d6684d7d356f6bcdca"],["D:/blog/public/2019/11/22/PAT-1003/1.png","6fd7e183ac46df7222a1d2a2a4c9b12a"],["D:/blog/public/2019/11/22/PAT-1003/index.html","b1feaf9fb68752aef4e9c9bdadf2fa9d"],["D:/blog/public/2019/11/22/PAT-1018/index.html","5823a588bec96ebc44d9b2c8a995a4ec"],["D:/blog/public/2019/11/22/阅读管理/index.html","832f7217396dd79c2ca35bfc1341de6b"],["D:/blog/public/2019/11/23/ExcelToMarkdown/index.html","f46a14de593c39d8569312a41e219f4d"],["D:/blog/public/2019/11/23/PAT-1030/1.png","aecb20c8058c5af85e249217e120debe"],["D:/blog/public/2019/11/23/PAT-1030/index.html","3895fbedc38d94508d370202dac891f0"],["D:/blog/public/2019/11/23/四级选择填空高频词/index.html","76a03071a84fea6e53b0bd6a959f10e6"],["D:/blog/public/2019/11/24/PAT-1004/index.html","8225f99a21216ac1b9a06e4b336013a5"],["D:/blog/public/2019/11/24/PAT-1087/2.png","3a8111c12681b201c59e6a04840cf400"],["D:/blog/public/2019/11/24/PAT-1087/index.html","8bf5eaa75fa57aafc40e94765546f7d3"],["D:/blog/public/2019/11/25/Markdown编辑和预览/index.html","e0c4d02a7fca129694118e51f1140fa7"],["D:/blog/public/2019/11/25/PAT-1079/index.html","0feaca42fdb6908a57fd3a7c21cdf157"],["D:/blog/public/2019/11/25/PAT-1086/index.html","5875387007fcd92b5ac39ee5cbaa7bd8"],["D:/blog/public/2019/11/25/PAT-1090/index.html","8cfd73e7d2d228df901f5ed3a6da2952"],["D:/blog/public/2019/11/25/PAT自动签到/1.png","0131d4cb9e40bf24404e33de225bd771"],["D:/blog/public/2019/11/25/PAT自动签到/index.html","9e3fdfd5f0ab92ecb169cdf55849425c"],["D:/blog/public/2019/11/25/字幕文件处理/index.html","bce876da70fd6dcc6d85f650396b4fee"],["D:/blog/public/2019/11/25/用需求引导学习/index.html","1406c0d4c9c6f22cd304f7ae68d5925b"],["D:/blog/public/2019/11/26/PAT-1094/index.html","6cc21a56d413f36ccc8a7b9a322f45a0"],["D:/blog/public/2019/11/28/PAT-1012/index.html","0c7c3d0a53b1a68daf634a7bcbe3c754"],["D:/blog/public/2019/11/28/PAT-1102/index.html","057eb6a9c669b3ec8d0198475ae30947"],["D:/blog/public/archives/2019/10/index.html","9c6b429f35fda3e7fec280526780ad9b"],["D:/blog/public/archives/2019/11/index.html","acc8eb4d17a3cfdc07298c882d647edd"],["D:/blog/public/archives/2019/11/page/2/index.html","04e8f101f9b316c146d82f7b6e41f298"],["D:/blog/public/archives/2019/11/page/3/index.html","db96b2f3df589060bc83b057e9197d38"],["D:/blog/public/archives/2019/11/page/4/index.html","e417052697b033b2ebc50c6b00dcf202"],["D:/blog/public/archives/2019/11/page/5/index.html","e52fd61e66cd3e6595900abd1f456e9a"],["D:/blog/public/archives/2019/index.html","f08a8eef0f87bcc9adc49cc2f3516aea"],["D:/blog/public/archives/2019/page/2/index.html","a7eea9ec225a203b6775eb468ff1a0b3"],["D:/blog/public/archives/2019/page/3/index.html","a33ce76d2451d7dea8b3680929f4cfd3"],["D:/blog/public/archives/2019/page/4/index.html","5973b4cd261b6f2655d3c831ff8237c6"],["D:/blog/public/archives/2019/page/5/index.html","c79f41e39bd540cf3a5621ef388175c5"],["D:/blog/public/archives/2019/page/6/index.html","59267c0c6f1cec79ec040b16acff45ed"],["D:/blog/public/archives/index.html","34cd5a3dcd7c4d1df055211cd1283032"],["D:/blog/public/archives/page/2/index.html","c679b74cbc52114ecea56bff9dfdbbb0"],["D:/blog/public/archives/page/3/index.html","3575e3cb44f10248fb9f38ea71b5f738"],["D:/blog/public/archives/page/4/index.html","057dfa72b599aac0cc79ba47f6ef4c1b"],["D:/blog/public/archives/page/5/index.html","6c4454d03d29236f79a82250fdf03fff"],["D:/blog/public/archives/page/6/index.html","4d00224118c955b9a9af9a50b8e91f39"],["D:/blog/public/categories/code/index.html","86410d3f8ad98ee193cfd7402189acd1"],["D:/blog/public/categories/code/page/2/index.html","9d9e84bcee6f8b06e4333013f38cb06c"],["D:/blog/public/categories/code/page/3/index.html","325f429c46d96f6dce773c46b943a753"],["D:/blog/public/categories/code/page/4/index.html","80b278a7d92f57e85f1817f0cc408826"],["D:/blog/public/categories/index.html","7e78084659ff81e948eb29d969d771da"],["D:/blog/public/categories/life/index.html","a59ae425ad13f887c59be6e8b173ce63"],["D:/blog/public/categories/life/page/2/index.html","f8a6eeaf04e0d55d3efb46a4df2d451e"],["D:/blog/public/categories/note/index.html","09f23ac440692b8298b234033a0d0176"],["D:/blog/public/css/index.css","9911b20a2e31dc1aa98c48e483335237"],["D:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/blog/public/index.html","51390c8b258d3b616be004e6d486c6a2"],["D:/blog/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["D:/blog/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["D:/blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/blog/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["D:/blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/blog/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/blog/public/page/2/index.html","d8a32b4ca6e08d26ffeeb6fd7f19793a"],["D:/blog/public/page/3/index.html","7e8f487c145b1d973489a064b3c2252f"],["D:/blog/public/page/4/index.html","4d9f2c4cd554e5b86f911f4ba5222dbd"],["D:/blog/public/page/5/index.html","f13f0f0a8a3d9a142c401de96fba5b51"],["D:/blog/public/page/6/index.html","3478dc272fd3458b2074d152e71b00fc"],["D:/blog/public/tags/PAT/index.html","4b248bae77ce557bfc05383516783af8"],["D:/blog/public/tags/PAT/page/2/index.html","f59125a82b71698f44723d49447ba3a0"],["D:/blog/public/tags/bfs/index.html","ab8ff2c46a15e502eeceab7ee677a275"],["D:/blog/public/tags/dfs/index.html","9901ca052672fd91dbe61ad3aab716ac"],["D:/blog/public/tags/dfs/page/2/index.html","9b9535b5cd8a184a0371faa4234ecb7e"],["D:/blog/public/tags/dijkstra/index.html","d1b9da439155a2f2500cc03d21cd8e49"],["D:/blog/public/tags/english/index.html","43fbec612307b3aa4f642a3cd1ccc0f7"],["D:/blog/public/tags/git/index.html","eb1562371b98e4f07928bb73389b8457"],["D:/blog/public/tags/index.html","b15d10b4455ca71f0128f433cc1c7784"],["D:/blog/public/tags/plan/index.html","1573f8b7006b73c85dba66f3d0c076e9"],["D:/blog/public/tags/python/index.html","6800d49f02cb5ded19020ff313325006"],["D:/blog/public/tags/python语法/index.html","1b7cda42102e1f545cf048e6becdc927"],["D:/blog/public/tags/travel/index.html","a2e84bdb3765b5fd2d7a46a7eacaf32d"],["D:/blog/public/tags/win/index.html","946a1d422c17717d1b01b2623f50de46"],["D:/blog/public/tags/图/index.html","aed5ea5a6676fc059923433faf16e3a1"],["D:/blog/public/tags/图论/index.html","da4f77b215860f094a2b0e50d94c140f"],["D:/blog/public/tags/字符串/index.html","ec49a796c5d9c49c3d10f162daa7fd0c"],["D:/blog/public/tags/实践/index.html","396cdfa4da40c85ab2c34ce477951079"],["D:/blog/public/tags/并查集/index.html","900aafc0d050bfdc0c8380e144c70ada"],["D:/blog/public/tags/排序/index.html","453d315737cb19e40a309bd7ca92122b"],["D:/blog/public/tags/数学/index.html","1051c6f63c7dfadb8b917c9874ee2345"],["D:/blog/public/tags/整理/index.html","60edb04f65127eb4b76bbeb2dd98807c"],["D:/blog/public/tags/文本编辑/index.html","108b9ced783956f98b55aa333e9a90c8"],["D:/blog/public/tags/树/index.html","c610c04f79c8a020c4b1a0da53105be6"],["D:/blog/public/tags/竞赛/index.html","c13d3dd3166abe67f6b6b9b641486930"],["D:/blog/public/tags/纪念日/index.html","3330355ecc68da7342b00035477b8bdd"],["D:/blog/public/tags/脚本/index.html","502a9a67ce5f1adb38790d85a5b670f7"],["D:/blog/public/tags/链表/index.html","000fc25eeaa074e1763f0a9ae3bca7dd"]];
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







