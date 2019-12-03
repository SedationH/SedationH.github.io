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

var precacheConfig = [["D:/blog/public/2019/10/22/Markdown语法学习/index.html","8733ce9166bb930c46d9b41d2e4fb116"],["D:/blog/public/2019/10/22/PAT-1122/index.html","1ced1cdee2e07aa356d3c111c22c2391"],["D:/blog/public/2019/10/22/PAT计划/index.html","cff4344168ac268b2687310c2b12a2ce"],["D:/blog/public/2019/10/22/一周年纪念/1.png","b922b2b5d70da4521554e351b799eafa"],["D:/blog/public/2019/10/22/一周年纪念/10.jpg","4ee6bc37ff3698fa570a938b2bd3cd8f"],["D:/blog/public/2019/10/22/一周年纪念/11.jpg","1eb8883718238d92b64c1d22aa0ad727"],["D:/blog/public/2019/10/22/一周年纪念/12.jpg","6f72da1105ecd7baec4b4ae55a95c4e5"],["D:/blog/public/2019/10/22/一周年纪念/13.png","9a7c7b6afec674eb08e5607057ecadf9"],["D:/blog/public/2019/10/22/一周年纪念/14.jpg","1c2a7133e420bc4b898cff3c3a67c3cd"],["D:/blog/public/2019/10/22/一周年纪念/15.png","9c39368c806a0cfa2e7d709132df9056"],["D:/blog/public/2019/10/22/一周年纪念/16.png","35d0b5720714b6bdc6d3a406196eff55"],["D:/blog/public/2019/10/22/一周年纪念/17.png","9e7284fb82f396c4810ef96f1b4fe4f8"],["D:/blog/public/2019/10/22/一周年纪念/19.jpg","8a64b1eb0e09baf650be35c430e1e35b"],["D:/blog/public/2019/10/22/一周年纪念/20.jpg","0903b15ae3093a3532017dc07d32e3ac"],["D:/blog/public/2019/10/22/一周年纪念/21.jpg","22b445ee7acb7233b44fc4a25d3ae663"],["D:/blog/public/2019/10/22/一周年纪念/22.jpg","efc11d26abeff3b665daa5d9f2391f15"],["D:/blog/public/2019/10/22/一周年纪念/23.png","234580cc98d43a9b6e76eea8ec82470d"],["D:/blog/public/2019/10/22/一周年纪念/24.png","2ba8d6c8d4be23e8c33d3fc0f4b4b4d6"],["D:/blog/public/2019/10/22/一周年纪念/25.png","5ab1f6e4156096f8ba58f66255bc3c0a"],["D:/blog/public/2019/10/22/一周年纪念/27.jpg","836de2238b33e122dfca7d9da44f27e3"],["D:/blog/public/2019/10/22/一周年纪念/28.png","9e80a6a4a5ddebfd511f53ea1e8267b0"],["D:/blog/public/2019/10/22/一周年纪念/29.jpg","04f2ec6d41985b0ed3e44f2361c7899f"],["D:/blog/public/2019/10/22/一周年纪念/3.jpg","412cd99e96d03326a84f0c0a84d1ec10"],["D:/blog/public/2019/10/22/一周年纪念/30.png","befd1520ca9f8db304c88e9d88278df8"],["D:/blog/public/2019/10/22/一周年纪念/31.png","c18c6d47b84e55829bcfe8e11fb63729"],["D:/blog/public/2019/10/22/一周年纪念/32.jpg","14d40f93919dc0c17c38c039f8a35cb1"],["D:/blog/public/2019/10/22/一周年纪念/33.jpg","4e615748f58a6f23602d4a7806e6422c"],["D:/blog/public/2019/10/22/一周年纪念/5.png","9941823b1349fbb055ca615b6e3d54de"],["D:/blog/public/2019/10/22/一周年纪念/6.jpg","1266f0dcd054f6bd16fb50de12b43b26"],["D:/blog/public/2019/10/22/一周年纪念/8.png","6e4467f160ae2401f89d866bd1e7da2d"],["D:/blog/public/2019/10/22/一周年纪念/9.jpg","1e90bb672bca5590d1a4e79e97431fb8"],["D:/blog/public/2019/10/22/一周年纪念/index.html","7dbaa2cc489a17cb3486d49a3a047082"],["D:/blog/public/2019/10/25/PAT-1142/index.html","f3151d762e648ea6e96ca514a2c34172"],["D:/blog/public/2019/10/26/刷题技巧整理/index.html","fce61188f80206c3f6ad5d39d5611e28"],["D:/blog/public/2019/10/26/算法笔记阅读/1.png","92150d33ef3bd6c65a9aaced8376a92c"],["D:/blog/public/2019/10/26/算法笔记阅读/2.png","cfccd02ede828f058d6097a5ea36231e"],["D:/blog/public/2019/10/26/算法笔记阅读/3.png","8829fd0644f4aa7c563ed6700448d1a5"],["D:/blog/public/2019/10/26/算法笔记阅读/4.png","9cd3a2412ecc95904bc4fa988104670d"],["D:/blog/public/2019/10/26/算法笔记阅读/5.png","2d944484cd483c4328cf23f83f283df4"],["D:/blog/public/2019/10/26/算法笔记阅读/6.png","e029e7b61a5b2af8a9adca3fe5c958c7"],["D:/blog/public/2019/10/26/算法笔记阅读/7.png","e3ea1a023a3cd92a0f71600be7356567"],["D:/blog/public/2019/10/26/算法笔记阅读/8.png","6867de9496f219814cfdc9065a3300f5"],["D:/blog/public/2019/10/26/算法笔记阅读/9.png","9edf64d883da58014326c3dfe069972b"],["D:/blog/public/2019/10/26/算法笔记阅读/index.html","08389122424de9f528395f9e6018ca1e"],["D:/blog/public/2019/10/29/PAT-1013/index.html","170a25c79a71da7ac1a4e80bf5b6af97"],["D:/blog/public/2019/10/29/PAT-1034/index.html","c9bae2b6d8f873f1524802e15c7f3c97"],["D:/blog/public/2019/10/30/PAT-1021/index.html","f03d87173ca72182c1b69917c6392c43"],["D:/blog/public/2019/11/03/Mac折腾记录/index.html","f40f2d6d4c8f666c404c445015c87e7e"],["D:/blog/public/2019/11/04/VSCode使用/1.png","e8132b252da910da84d0d1ae36572702"],["D:/blog/public/2019/11/04/VSCode使用/2.png","3c8c0b6004e0d69eb0fe084e61359e9f"],["D:/blog/public/2019/11/04/VSCode使用/index.html","a4aea1c4d9ab56e58f7e91f7fd38d6ef"],["D:/blog/public/2019/11/05/PAT-1107/index.html","b5b75144929fe1c82dbbe72046475780"],["D:/blog/public/2019/11/05/文件自动分类脚本/index.html","3e6c6feb7a58d81d21822d28747d814a"],["D:/blog/public/2019/11/06/PAT-1114/index.html","70153cd4b9abbb5922d9488dcbaf0ee1"],["D:/blog/public/2019/11/06/python基础/index.html","ade8483463056f49c0a5d95ebb821732"],["D:/blog/public/2019/11/07/git学习/0.jpg","701e02bf0b2d71ab51b7e2b6aa973d52"],["D:/blog/public/2019/11/07/git学习/1.png","2adbbdf8d8bab5606af6279ef5612da2"],["D:/blog/public/2019/11/07/git学习/2.png","c6f039420a0f851eb424883511ac4e2f"],["D:/blog/public/2019/11/07/git学习/3.png","06f0d7d34075653ba25a18ea0fea8b7d"],["D:/blog/public/2019/11/07/git学习/4.png","cb8a9c11c8fd1326260bbc7c2c6a62ac"],["D:/blog/public/2019/11/07/git学习/index.html","37ffff65f10a93d317f4a1b1415930de"],["D:/blog/public/2019/11/13/PAT-1025/index.html","1ff0936566e86f6b2d42396255ef0e05"],["D:/blog/public/2019/11/14/H和T的成长回忆录/index.html","22a066377aca873253886ad3dc29eedc"],["D:/blog/public/2019/11/14/PAT-1069/index.html","21211f3a32e26dcec20d6d9655d579f8"],["D:/blog/public/2019/11/14/PAT-1093/index.html","196413809f518c774f05a502d12f7ef2"],["D:/blog/public/2019/11/14/PAT-1101/index.html","2bca1ae7608e776831f2e1724965f81c"],["D:/blog/public/2019/11/14/blog分类规划/index.html","a67ee5fdc4e3949077e3e0ff97d8aebc"],["D:/blog/public/2019/11/14/北京游感/index.html","e7f4db3dbc972ba2efb102af04f94a67"],["D:/blog/public/2019/11/14/热爱生命/1.png","0b865b5a8c5ffc65ab33586bb50513b7"],["D:/blog/public/2019/11/14/热爱生命/index.html","3f7ffb152a4390976d6f95cac1cbf143"],["D:/blog/public/2019/11/14/随想-1/index.html","2b741e6ce4cbb45c0b480ff79f2621da"],["D:/blog/public/2019/11/14/随想-2/1.png","ba65a9551263d1c1cb9c1870d1ee8a29"],["D:/blog/public/2019/11/14/随想-2/index.html","4ea5fe1b4bf2df65a94c836e07ec6e40"],["D:/blog/public/2019/11/15/PAT-1032/index.html","a46a928996ab7b2c858f106e1b54fae2"],["D:/blog/public/2019/11/15/PAT-1059/index.html","1b98637642501384df7fa8fa52a68cec"],["D:/blog/public/2019/11/15/去南京/1.png","53d7c944f9a7326b86bd734f9d2d967c"],["D:/blog/public/2019/11/15/去南京/2.png","17208773d5c2ee30d094a597d4a8b9b6"],["D:/blog/public/2019/11/15/去南京/index.html","26bc75296642172991ededd87c790517"],["D:/blog/public/2019/11/16/PAT-1052/index.html","5435f7037710e93cc09b8c8d06c831bb"],["D:/blog/public/2019/11/16/连通块个数/index.html","c6f8e9e64513be84610f51271da6bc6d"],["D:/blog/public/2019/11/16/迷宫问题/index.html","5994fab5929f333f74444f9a58b9399b"],["D:/blog/public/2019/11/17/Listening-training/index.html","2f52f049338a7ae9805336d6637ee258"],["D:/blog/public/2019/11/17/PAT-1020/index.html","70dfcd3c7d8691f7cef1182c69d06fd4"],["D:/blog/public/2019/11/18/随想-3/index.html","0e50ab7a362ffa561e6468c4d9ed8341"],["D:/blog/public/2019/11/19/PAT-1053/index.html","76622ce4129f6378263e0de64f1246aa"],["D:/blog/public/2019/11/19/Win环境配置/1.png","c32e495ccfeb914740d76fdf84b2fda3"],["D:/blog/public/2019/11/19/Win环境配置/2.png","4cb6305070b92541ac6749688e6ddec6"],["D:/blog/public/2019/11/19/Win环境配置/3.png","da3b800653c68b7c463ee0b5598055e9"],["D:/blog/public/2019/11/19/Win环境配置/index.html","9dd1994a85a2ab6d40963c68fe2e4689"],["D:/blog/public/2019/11/20/PAT-1043/index.html","d9665dc527ad6fd87c15916d8dc0adf9"],["D:/blog/public/2019/11/22/PAT-1003/1.png","6fd7e183ac46df7222a1d2a2a4c9b12a"],["D:/blog/public/2019/11/22/PAT-1003/index.html","336a982a8402ff80d92ed1f4e8b8930b"],["D:/blog/public/2019/11/22/PAT-1018/index.html","51514d82712992d01652ff154f92043a"],["D:/blog/public/2019/11/22/阅读管理/index.html","512de1330885d7d5ae4b0e3d23c901db"],["D:/blog/public/2019/11/23/ExcelToMarkdown/index.html","d95802d36f33e75a9eb028cf36d916de"],["D:/blog/public/2019/11/23/PAT-1030/1.png","aecb20c8058c5af85e249217e120debe"],["D:/blog/public/2019/11/23/PAT-1030/index.html","c8e3d2fb468497b666800985fa38d646"],["D:/blog/public/2019/11/23/四级选择填空高频词/index.html","1c84ef04a55116f7bbce3c28dda91bad"],["D:/blog/public/2019/11/24/PAT-1004/index.html","d49d3c2cb67996e2478199e6ab0a0405"],["D:/blog/public/2019/11/24/PAT-1087/2.png","3a8111c12681b201c59e6a04840cf400"],["D:/blog/public/2019/11/24/PAT-1087/index.html","9d8600ca01f4b3dad05a68fbed7ea85f"],["D:/blog/public/2019/11/25/Markdown编辑和预览/index.html","b3109e70366fe0fef4dbfd2cfe29f94e"],["D:/blog/public/2019/11/25/PAT-1079/index.html","8557fbabbd07462343f48b791cca1bc2"],["D:/blog/public/2019/11/25/PAT-1086/index.html","a314902f62c7dbd4fedb1292563407e5"],["D:/blog/public/2019/11/25/PAT-1090/index.html","390246d56bcc432ea9dab41e4dfe7622"],["D:/blog/public/2019/11/25/PAT自动签到/1.png","0131d4cb9e40bf24404e33de225bd771"],["D:/blog/public/2019/11/25/PAT自动签到/index.html","d73bf7cc90e1cf651a0bd8033cecb6a5"],["D:/blog/public/2019/11/25/字幕文件处理/index.html","aba5db619ba5effb4f5d4ccbdd0267d0"],["D:/blog/public/2019/11/25/用需求引导学习/index.html","cf108c77becba8eb2601a871b23f819f"],["D:/blog/public/2019/11/26/PAT-1094/index.html","90c4d0bba2e21634a6a82bced479c879"],["D:/blog/public/2019/11/28/PAT-1012/index.html","8b931e79d7b4c69538e2c02eb75c2246"],["D:/blog/public/2019/11/28/PAT-1102/index.html","08c59cf85cfa2b3b6da620ffd22c0fdc"],["D:/blog/public/2019/11/28/道路思考/index.html","5be26cac75d810d6dbd0cdc855645092"],["D:/blog/public/2019/11/30/随想-4/index.html","ead07a953877af89e39d026a4ddb5585"],["D:/blog/public/2019/12/02/PAT考前准备/index.html","a9eba65716dd4df16b944e92f91e81e4"],["D:/blog/public/2019/12/03/PAT-1074/index.html","75f433f0fdc1c016be601c7725f00e84"],["D:/blog/public/archives/2019/10/index.html","7a370fc8611ef6fce3521c08a5689517"],["D:/blog/public/archives/2019/11/index.html","f5dab9774772f5ec23eb74c54b816987"],["D:/blog/public/archives/2019/11/page/2/index.html","b7908c49738d101488a5c5b203a130ca"],["D:/blog/public/archives/2019/11/page/3/index.html","7abaed34fcee320929e3aecdd51600f4"],["D:/blog/public/archives/2019/11/page/4/index.html","a5594e49608e1f065b02fae26fd81a13"],["D:/blog/public/archives/2019/11/page/5/index.html","8e8c5d3f0f5cd713e59fb9dfc396d9ee"],["D:/blog/public/archives/2019/12/index.html","5262c5c2719545c30a22fa1b08e926a5"],["D:/blog/public/archives/2019/index.html","61111e560164a40648b44d19058902e3"],["D:/blog/public/archives/2019/page/2/index.html","aed4e91445ce7e28cc58b10abf83c15b"],["D:/blog/public/archives/2019/page/3/index.html","b1b2702a6f712430b626e7bbc3126f75"],["D:/blog/public/archives/2019/page/4/index.html","86fcb65a644feb675559d8efcb331896"],["D:/blog/public/archives/2019/page/5/index.html","9f5021762e8f37b79c52a79a0ece153d"],["D:/blog/public/archives/2019/page/6/index.html","7296c85a1673233fdf6fc3dfb6a4bc37"],["D:/blog/public/archives/2019/page/7/index.html","f2628014762dce4cc066299d9f699104"],["D:/blog/public/archives/index.html","55bded76e15088ee450d67647da2eb97"],["D:/blog/public/archives/page/2/index.html","138da66182b46ccf43b6f667327957e0"],["D:/blog/public/archives/page/3/index.html","13bfe0d2147772e7b2dfd2d3908f8bcb"],["D:/blog/public/archives/page/4/index.html","6a533ce9d36720b091bf74abad9ea6a2"],["D:/blog/public/archives/page/5/index.html","2cf1c81293787ce2a93e66148ac8bfa2"],["D:/blog/public/archives/page/6/index.html","4026f2734676c3a1672223f53afd9f78"],["D:/blog/public/archives/page/7/index.html","6dfe1402c6333753597c8ede8ec4b22b"],["D:/blog/public/categories/code/index.html","6bf6c5c634e1f9c4f8102c70943253ec"],["D:/blog/public/categories/code/page/2/index.html","9df4e329c3ccde3536512f408d46fb52"],["D:/blog/public/categories/code/page/3/index.html","4e33d11c01ade3b2f1973abf872259c1"],["D:/blog/public/categories/code/page/4/index.html","034e9c1716ea14c85c0c9a2b93f25a7d"],["D:/blog/public/categories/index.html","24606b8e41113956a8b3264623b5f768"],["D:/blog/public/categories/life/index.html","f74de6b0509923f548598cf8f8e15ee0"],["D:/blog/public/categories/life/page/2/index.html","48b317ebfe3f94fb8617fbcfcb698f5e"],["D:/blog/public/categories/note/index.html","99b71de04ae11c2837bab31b9cc4f772"],["D:/blog/public/css/index.css","9911b20a2e31dc1aa98c48e483335237"],["D:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/blog/public/index.html","c0d4c81cd57c504df5c5cef4db74e1e4"],["D:/blog/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["D:/blog/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["D:/blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/blog/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["D:/blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/blog/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/blog/public/page/2/index.html","6ab37851e2d250084dd3799468e23b1d"],["D:/blog/public/page/3/index.html","cdd4891b9a2ec62365be07a14fafb495"],["D:/blog/public/page/4/index.html","8b69733a8089c2605721ee19d137cb4d"],["D:/blog/public/page/5/index.html","cf911179639a9b3df6874af49cc9874f"],["D:/blog/public/page/6/index.html","918408885b585d4e3108a48370e4261d"],["D:/blog/public/page/7/index.html","9c442dcb44ac1bc27a1abdc89076a3ff"],["D:/blog/public/tags/PAT/index.html","83ccde73079cfeab9edd1c37d12b8dee"],["D:/blog/public/tags/PAT/page/2/index.html","fb0e32a450cec6dcadb397b72aeaa247"],["D:/blog/public/tags/bfs/index.html","64a5059600e12b8f16c0f13278318e18"],["D:/blog/public/tags/dfs/index.html","60043027a6da496b528260ce3caa7071"],["D:/blog/public/tags/dfs/page/2/index.html","f0bc64637cec45546241d85567e3fee5"],["D:/blog/public/tags/dijkstra/index.html","9a43d1110f85c867707692ee6477ab2a"],["D:/blog/public/tags/english/index.html","5978c9283a5b135150f208764c4dc7b6"],["D:/blog/public/tags/git/index.html","53e530b81f2bdaac9a908b57e4bef979"],["D:/blog/public/tags/index.html","d5b4c2acd53a7717e825b4eb1b48eb92"],["D:/blog/public/tags/plan/index.html","4ac9a32171506734eb9e184da1f03803"],["D:/blog/public/tags/python/index.html","c98cc003626247ec0f55cb58a44e75bc"],["D:/blog/public/tags/python语法/index.html","2226222436dec62c3dbd6720064a1e1e"],["D:/blog/public/tags/travel/index.html","f82b78a677d84893be600a969ba7d377"],["D:/blog/public/tags/win/index.html","83ebce4014e34b1ab963757921970f9f"],["D:/blog/public/tags/图/index.html","e0bc806073ac5a6c783c1ca9334398e6"],["D:/blog/public/tags/图论/index.html","e007996f9dc4f394edd01cb2271d33ec"],["D:/blog/public/tags/字符串/index.html","6c0e6ea608b00c4a2e3a87ce3aa6929e"],["D:/blog/public/tags/实践/index.html","6be1865e6f03609b2d05afa72208fd66"],["D:/blog/public/tags/并查集/index.html","8b4fbb379b861ec9bb93f2d4c7676fb7"],["D:/blog/public/tags/排序/index.html","15f2391a6f0e480330cf19875199621c"],["D:/blog/public/tags/数学/index.html","180088f7255f9c351ff5e523e216ab5f"],["D:/blog/public/tags/整理/index.html","b841c9d64000ec03a97407f3697ea972"],["D:/blog/public/tags/文本编辑/index.html","4b8d079681253546cff54d2b331512e0"],["D:/blog/public/tags/树/index.html","8fe91fd7de023d838fbf5e72619f3afb"],["D:/blog/public/tags/竞赛/index.html","fcfbfa04d522901f94a07bfcbb3b2ebc"],["D:/blog/public/tags/纪念日/index.html","8abc52666cecfdb0a3dedf2ad1c8d9b7"],["D:/blog/public/tags/脚本/index.html","1d0d901525e3321da5d5dd214a4bed7e"],["D:/blog/public/tags/链表/index.html","9638970c290dc35c6ff8b9f3f87ab63c"]];
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







