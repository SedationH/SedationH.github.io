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

var precacheConfig = [["D:/blog/public/2019/10/22/Markdown语法学习/index.html","1d2022821c21ee1f3d4f9e9605f6e15b"],["D:/blog/public/2019/10/22/PAT-1122/index.html","bb347fab4be7308fe727cc8e21aefa4e"],["D:/blog/public/2019/10/22/PAT计划/index.html","e6a01b950427f1f917cde3de2c2dcae8"],["D:/blog/public/2019/10/22/一周年纪念/1.png","b922b2b5d70da4521554e351b799eafa"],["D:/blog/public/2019/10/22/一周年纪念/10.jpg","4ee6bc37ff3698fa570a938b2bd3cd8f"],["D:/blog/public/2019/10/22/一周年纪念/11.jpg","1eb8883718238d92b64c1d22aa0ad727"],["D:/blog/public/2019/10/22/一周年纪念/12.jpg","6f72da1105ecd7baec4b4ae55a95c4e5"],["D:/blog/public/2019/10/22/一周年纪念/13.png","9a7c7b6afec674eb08e5607057ecadf9"],["D:/blog/public/2019/10/22/一周年纪念/14.jpg","1c2a7133e420bc4b898cff3c3a67c3cd"],["D:/blog/public/2019/10/22/一周年纪念/15.png","9c39368c806a0cfa2e7d709132df9056"],["D:/blog/public/2019/10/22/一周年纪念/16.png","35d0b5720714b6bdc6d3a406196eff55"],["D:/blog/public/2019/10/22/一周年纪念/17.png","9e7284fb82f396c4810ef96f1b4fe4f8"],["D:/blog/public/2019/10/22/一周年纪念/19.jpg","8a64b1eb0e09baf650be35c430e1e35b"],["D:/blog/public/2019/10/22/一周年纪念/20.jpg","0903b15ae3093a3532017dc07d32e3ac"],["D:/blog/public/2019/10/22/一周年纪念/21.jpg","22b445ee7acb7233b44fc4a25d3ae663"],["D:/blog/public/2019/10/22/一周年纪念/22.jpg","efc11d26abeff3b665daa5d9f2391f15"],["D:/blog/public/2019/10/22/一周年纪念/23.png","234580cc98d43a9b6e76eea8ec82470d"],["D:/blog/public/2019/10/22/一周年纪念/24.png","2ba8d6c8d4be23e8c33d3fc0f4b4b4d6"],["D:/blog/public/2019/10/22/一周年纪念/25.png","5ab1f6e4156096f8ba58f66255bc3c0a"],["D:/blog/public/2019/10/22/一周年纪念/27.jpg","836de2238b33e122dfca7d9da44f27e3"],["D:/blog/public/2019/10/22/一周年纪念/28.png","9e80a6a4a5ddebfd511f53ea1e8267b0"],["D:/blog/public/2019/10/22/一周年纪念/29.jpg","04f2ec6d41985b0ed3e44f2361c7899f"],["D:/blog/public/2019/10/22/一周年纪念/3.jpg","412cd99e96d03326a84f0c0a84d1ec10"],["D:/blog/public/2019/10/22/一周年纪念/30.png","befd1520ca9f8db304c88e9d88278df8"],["D:/blog/public/2019/10/22/一周年纪念/31.png","c18c6d47b84e55829bcfe8e11fb63729"],["D:/blog/public/2019/10/22/一周年纪念/32.jpg","14d40f93919dc0c17c38c039f8a35cb1"],["D:/blog/public/2019/10/22/一周年纪念/33.jpg","4e615748f58a6f23602d4a7806e6422c"],["D:/blog/public/2019/10/22/一周年纪念/5.png","9941823b1349fbb055ca615b6e3d54de"],["D:/blog/public/2019/10/22/一周年纪念/6.jpg","1266f0dcd054f6bd16fb50de12b43b26"],["D:/blog/public/2019/10/22/一周年纪念/8.png","6e4467f160ae2401f89d866bd1e7da2d"],["D:/blog/public/2019/10/22/一周年纪念/9.jpg","1e90bb672bca5590d1a4e79e97431fb8"],["D:/blog/public/2019/10/22/一周年纪念/index.html","f3d35f8a05659fdb8c8b7f142c1aa87f"],["D:/blog/public/2019/10/25/PAT-1142/index.html","6e64952bb2f3ffe89a0ecc4be46dc722"],["D:/blog/public/2019/10/26/刷题技巧整理/index.html","0f3d4f2d8ab047be4b3c965afe1a1355"],["D:/blog/public/2019/10/26/算法笔记阅读/1.png","92150d33ef3bd6c65a9aaced8376a92c"],["D:/blog/public/2019/10/26/算法笔记阅读/2.png","cfccd02ede828f058d6097a5ea36231e"],["D:/blog/public/2019/10/26/算法笔记阅读/3.png","8829fd0644f4aa7c563ed6700448d1a5"],["D:/blog/public/2019/10/26/算法笔记阅读/4.png","9cd3a2412ecc95904bc4fa988104670d"],["D:/blog/public/2019/10/26/算法笔记阅读/5.png","2d944484cd483c4328cf23f83f283df4"],["D:/blog/public/2019/10/26/算法笔记阅读/6.png","e029e7b61a5b2af8a9adca3fe5c958c7"],["D:/blog/public/2019/10/26/算法笔记阅读/7.png","e3ea1a023a3cd92a0f71600be7356567"],["D:/blog/public/2019/10/26/算法笔记阅读/8.png","6867de9496f219814cfdc9065a3300f5"],["D:/blog/public/2019/10/26/算法笔记阅读/9.png","9edf64d883da58014326c3dfe069972b"],["D:/blog/public/2019/10/26/算法笔记阅读/index.html","3fa4a8218792e0530140c1d2dcba51a3"],["D:/blog/public/2019/10/29/PAT-1013/index.html","7e1b037f298322a0d15fcfd6b9e5a4c1"],["D:/blog/public/2019/10/29/PAT-1034/index.html","21e8f668441950814b6f0bb35aebcb88"],["D:/blog/public/2019/10/30/PAT-1021/index.html","17f2bb580212c50b1695b98f1726beae"],["D:/blog/public/2019/11/03/Mac折腾记录/index.html","62e9f1285cb05ab7ff20bddf8974c7af"],["D:/blog/public/2019/11/04/VSCode使用/1.png","e8132b252da910da84d0d1ae36572702"],["D:/blog/public/2019/11/04/VSCode使用/2.png","3c8c0b6004e0d69eb0fe084e61359e9f"],["D:/blog/public/2019/11/04/VSCode使用/index.html","645adbd138311eab6dbebab44e2b7287"],["D:/blog/public/2019/11/05/PAT-1107/index.html","9022d58c81a751958fa377b4d71c2e2d"],["D:/blog/public/2019/11/05/文件自动分类脚本/index.html","ccbae5e1391375be5668cdab5381874f"],["D:/blog/public/2019/11/06/PAT-1114/index.html","83129ecb1d5214fc57c65518c8b9de84"],["D:/blog/public/2019/11/06/python基础/index.html","806215db9554bee109102524ca919370"],["D:/blog/public/2019/11/07/git学习/0.jpg","701e02bf0b2d71ab51b7e2b6aa973d52"],["D:/blog/public/2019/11/07/git学习/1.png","2adbbdf8d8bab5606af6279ef5612da2"],["D:/blog/public/2019/11/07/git学习/2.png","c6f039420a0f851eb424883511ac4e2f"],["D:/blog/public/2019/11/07/git学习/3.png","06f0d7d34075653ba25a18ea0fea8b7d"],["D:/blog/public/2019/11/07/git学习/4.png","cb8a9c11c8fd1326260bbc7c2c6a62ac"],["D:/blog/public/2019/11/07/git学习/index.html","0d97ce445a8e6725e9e0b12d288007f7"],["D:/blog/public/2019/11/13/PAT-1025/index.html","d6b0ea442477190de6b81b8dc6d224fa"],["D:/blog/public/2019/11/14/H和T的成长回忆录/index.html","45549f28000b3a0f8c6492c1744a5162"],["D:/blog/public/2019/11/14/PAT-1069/index.html","c16f9487d95da9e0ee4bea8047a73b85"],["D:/blog/public/2019/11/14/PAT-1093/index.html","64e3a59809772f413236e7fd81fc0d38"],["D:/blog/public/2019/11/14/PAT-1101/index.html","d62cbee5ce3fe2cfb1b38887b74f5a33"],["D:/blog/public/2019/11/14/blog分类规划/index.html","7ee96451e49841c7e0273903bc1d2214"],["D:/blog/public/2019/11/14/北京游感/index.html","1089d41c8b12049a5e07566f27a02986"],["D:/blog/public/2019/11/14/热爱生命/1.png","0b865b5a8c5ffc65ab33586bb50513b7"],["D:/blog/public/2019/11/14/热爱生命/index.html","f2605d55e5f0be7dbc3385a41c6dfcbd"],["D:/blog/public/2019/11/14/随想-1/index.html","1fabbe25ebbeaafbb92ec5056c258f7d"],["D:/blog/public/2019/11/14/随想-2/1.png","ba65a9551263d1c1cb9c1870d1ee8a29"],["D:/blog/public/2019/11/14/随想-2/index.html","b2a4d8711c558baa7b4314e8e5146a10"],["D:/blog/public/2019/11/15/PAT-1032/index.html","c0fa98231dae42b40aeb74e0ccc65029"],["D:/blog/public/2019/11/15/PAT-1059/index.html","633e3ff8d78334b641c4dcb516d30450"],["D:/blog/public/2019/11/15/去南京/1.png","53d7c944f9a7326b86bd734f9d2d967c"],["D:/blog/public/2019/11/15/去南京/2.png","17208773d5c2ee30d094a597d4a8b9b6"],["D:/blog/public/2019/11/15/去南京/index.html","ce6e572c320e10641ea62c1c0cb8cf85"],["D:/blog/public/2019/11/16/PAT-1052/index.html","39ca624356b05b3b1b523d82182148b4"],["D:/blog/public/2019/11/16/连通块个数/index.html","84b70fb25fec3d0ceaefe7f58e63003b"],["D:/blog/public/2019/11/16/迷宫问题/index.html","c2775ef75b2f9bea953cadbe5b69b57a"],["D:/blog/public/2019/11/17/Listening-training/index.html","7a00713abc596e641a523d704f05caf2"],["D:/blog/public/2019/11/17/PAT-1020/index.html","74a573d51efa98d34a5e5f50480ee0b5"],["D:/blog/public/2019/11/18/随想-3/index.html","4fb9d871855d668a9eeeb6810a521e72"],["D:/blog/public/2019/11/19/PAT-1053/index.html","c801782f2502bd9fe1b078dc8cc74e5e"],["D:/blog/public/2019/11/19/Win环境配置/1.png","c32e495ccfeb914740d76fdf84b2fda3"],["D:/blog/public/2019/11/19/Win环境配置/2.png","4cb6305070b92541ac6749688e6ddec6"],["D:/blog/public/2019/11/19/Win环境配置/3.png","da3b800653c68b7c463ee0b5598055e9"],["D:/blog/public/2019/11/19/Win环境配置/index.html","89f7141cb6e9577c34c9e545a2a64be3"],["D:/blog/public/2019/11/20/PAT-1043/index.html","6c52deb2700f430a647a87126a6335bd"],["D:/blog/public/2019/11/22/PAT-1003/1.png","6fd7e183ac46df7222a1d2a2a4c9b12a"],["D:/blog/public/2019/11/22/PAT-1003/index.html","2442c264f39039fc076760c2d7a20f45"],["D:/blog/public/2019/11/22/PAT-1018/index.html","dd6d40385583fadd9da1b25fbd4a7bb9"],["D:/blog/public/2019/11/22/阅读管理/index.html","4be5ec52ad716d86274c0a321c521600"],["D:/blog/public/2019/11/23/ExcelToMarkdown/index.html","35129044808f67da75587c7abbb9a5dd"],["D:/blog/public/2019/11/23/PAT-1030/1.png","aecb20c8058c5af85e249217e120debe"],["D:/blog/public/2019/11/23/PAT-1030/index.html","396a1fe2b187dc5b0b9b6f05a8570bea"],["D:/blog/public/2019/11/23/四级选择填空高频词/index.html","f31999339ea790a349e3ae9fb80b9407"],["D:/blog/public/2019/11/24/PAT-1004/index.html","f5615301263639d622d26e2b966a423c"],["D:/blog/public/2019/11/24/PAT-1087/2.png","3a8111c12681b201c59e6a04840cf400"],["D:/blog/public/2019/11/24/PAT-1087/index.html","f733c117ed300b3d5d55b4f76c1968eb"],["D:/blog/public/2019/11/25/Markdown编辑和预览/index.html","2d517bcd777d45a13c0798a94da58fc5"],["D:/blog/public/2019/11/25/PAT-1079/index.html","4d8128c93053b08618d0fa45beb13be2"],["D:/blog/public/2019/11/25/PAT-1086/index.html","cdf91bd71611271117d4aa3870aca468"],["D:/blog/public/2019/11/25/PAT-1090/index.html","083c8fd7b9e4cfcc818812c51bc07a21"],["D:/blog/public/2019/11/25/PAT自动签到/1.png","0131d4cb9e40bf24404e33de225bd771"],["D:/blog/public/2019/11/25/PAT自动签到/index.html","9f39c8add3413cdd4321831b3f2f3c7e"],["D:/blog/public/2019/11/25/字幕文件处理/index.html","fbef3174516ee4ccf9d96aebfa25c0fb"],["D:/blog/public/2019/11/25/用需求引导学习/index.html","9031cb717907fd2a0b90d06408295ac6"],["D:/blog/public/2019/11/26/PAT-1094/index.html","7c058f276c9c5394043eb3de9bb0560a"],["D:/blog/public/2019/11/28/PAT-1012/index.html","e7eeeb57f6f2ed864ec2770ee706b9a7"],["D:/blog/public/2019/11/28/PAT-1102/index.html","0819888e245e8579bc3c75eed86ac002"],["D:/blog/public/2019/11/28/道路思考/index.html","f2bfa115a1b4b8a28b5bdc13ba91bbc7"],["D:/blog/public/2019/11/30/随想-4/index.html","38a32c25a4eddd3ac6f359e1161fe379"],["D:/blog/public/2019/12/02/PAT考前准备/index.html","0394cb43654c9d405d224acea151b44e"],["D:/blog/public/2019/12/03/PAT-1074/index.html","46b683b3c60699e8c27986df3b97d2e1"],["D:/blog/public/2019/12/04/PAT-1115/index.html","449019c6a472b8313c62a600701fd201"],["D:/blog/public/2019/12/10/test/index.html","9e636e203277aa00ebde29cc08539518"],["D:/blog/public/2019/12/16/随想-5/index.html","4651e58168c86a457056df0c2754a0f1"],["D:/blog/public/2019/12/19/cplus面向对象复习/index.html","aff93497d2184deccfbd502f9f68e38a"],["D:/blog/public/2019/12/30/前端学习记录与规划/index.html","75ab66e88e7da81492e6731b5c8442ad"],["D:/blog/public/2020/01/15/npm总结/index.html","569ce67bd03ee2156589e6ef9b295a6d"],["D:/blog/public/2020/01/15/课程表项目/1.png","0140062a02b8b105d92bff1b33543798"],["D:/blog/public/2020/01/15/课程表项目/index.html","b6e9bafff342ef3764795def415f12e0"],["D:/blog/public/2020/01/20/mock数据模拟/1.png","1b3e790f2719f4f89eb0be809b8bc423"],["D:/blog/public/2020/01/20/mock数据模拟/index.html","059912ed98d8226b3283f6693a8e1077"],["D:/blog/public/archives/2019/10/index.html","3af3d99709e9387bac0805e034e51a0b"],["D:/blog/public/archives/2019/11/index.html","784b99b9b671e124a6cb22e8f178d471"],["D:/blog/public/archives/2019/11/page/2/index.html","fae7a615c96a2eb84d31109605757f0f"],["D:/blog/public/archives/2019/11/page/3/index.html","29c9d73a8e569935a04da8447717c263"],["D:/blog/public/archives/2019/11/page/4/index.html","2298ecc923f69d531b9f3fcfaf7deb43"],["D:/blog/public/archives/2019/11/page/5/index.html","7b07908e8539e2ffa31ad76b509fafaa"],["D:/blog/public/archives/2019/12/index.html","56ec424797f8109cb28aed794a38a8d1"],["D:/blog/public/archives/2019/index.html","acdcd9451bcedc69e7fd7df3cf80f1ae"],["D:/blog/public/archives/2019/page/2/index.html","89706f1150a26cd8a53e49bf4b62ab0a"],["D:/blog/public/archives/2019/page/3/index.html","61837e4b5e17ed7d045cf84cfebd556d"],["D:/blog/public/archives/2019/page/4/index.html","d38ada685ecc3fe7f0c521752ad9f799"],["D:/blog/public/archives/2019/page/5/index.html","ab52bdd985ec74893d95487eaa13c28c"],["D:/blog/public/archives/2019/page/6/index.html","87eb7191ff0fddc12a0a1a8e391e60cf"],["D:/blog/public/archives/2019/page/7/index.html","3f341c051fe0e54a7ef45798df1613a0"],["D:/blog/public/archives/2020/01/index.html","79f615e9c6eba6a11a48e9570f05dea0"],["D:/blog/public/archives/2020/index.html","611051e3abadd2630cc9b50f6379f6e9"],["D:/blog/public/archives/index.html","4308e0348642f07490e85c5cdd3c55fb"],["D:/blog/public/archives/page/2/index.html","1f03ce1f687632c55b10a2a2122d6c44"],["D:/blog/public/archives/page/3/index.html","7f3072940344bfbf746301ee249cb53c"],["D:/blog/public/archives/page/4/index.html","76d89b13c1ce2b846fc7ac4e626252a5"],["D:/blog/public/archives/page/5/index.html","c663fefda8d44fa34a66f1a48096ed5f"],["D:/blog/public/archives/page/6/index.html","f6d42fafc959ff614a78de30823469d6"],["D:/blog/public/archives/page/7/index.html","4e2184711c434ff01fd2728051603c35"],["D:/blog/public/categories/code/index.html","c51fafc236a8f9cb7130e2cfe3cd5997"],["D:/blog/public/categories/code/page/2/index.html","cfa43228c5f39a9297e3cbdd066e3e65"],["D:/blog/public/categories/code/page/3/index.html","7f0cff148a908ceb3cdb34bde95e8f2f"],["D:/blog/public/categories/code/page/4/index.html","8adc47be0e3d1f1b1e53a4fe961094ec"],["D:/blog/public/categories/code/page/5/index.html","143a0a44f0667c53801fe69f30f56f68"],["D:/blog/public/categories/index.html","1fa5099fe96034c1470c16b00927e07a"],["D:/blog/public/categories/life/index.html","287f3addc42774f5d6b8f0652bc6c588"],["D:/blog/public/categories/life/page/2/index.html","efe8f177024bbed6d0c35d3779466c3c"],["D:/blog/public/categories/note/index.html","4ff1699fec90f16809709802a69e81eb"],["D:/blog/public/categories/note/page/2/index.html","afeb0fd65de267aa6ae1eabfd8b87155"],["D:/blog/public/css/index.css","9911b20a2e31dc1aa98c48e483335237"],["D:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/blog/public/index.html","9bfca9f1ef311a468d6e369605f8d7bc"],["D:/blog/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["D:/blog/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["D:/blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/blog/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["D:/blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/blog/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/blog/public/page/2/index.html","beadc78d146965d9b4b88f5582b0cc5a"],["D:/blog/public/page/3/index.html","dc949fa8c8f2510e99f1e90269b8476f"],["D:/blog/public/page/4/index.html","c2bb30130a54128a0354b14e2b1acad2"],["D:/blog/public/page/5/index.html","32472e5e8b3bf89d825dc654de073f99"],["D:/blog/public/page/6/index.html","10f717910821e6bbfd8288fdcab5cb1e"],["D:/blog/public/page/7/index.html","f8e603d81f9409b611f296bd28e349ef"],["D:/blog/public/tags/PAT/index.html","a31203a62e7b4502521ebe4da8ac6c67"],["D:/blog/public/tags/PAT/page/2/index.html","5ef567ed1171f4ca15ee35bb001ce6a5"],["D:/blog/public/tags/bfs/index.html","a3ce86b8e86234ce1cb6be2e23663f60"],["D:/blog/public/tags/dfs/index.html","a0d845a7e89ea9e073b99d98c50cb457"],["D:/blog/public/tags/dfs/page/2/index.html","8f0ca8d721a1dd3e1df8bd316d8a81b2"],["D:/blog/public/tags/dijkstra/index.html","c654a678aa7e7800f88fc82c75274060"],["D:/blog/public/tags/english/index.html","51fdeb6283b2ad812b759fc8c4abc493"],["D:/blog/public/tags/git/index.html","7654f6f96b07d49568706761c3089a17"],["D:/blog/public/tags/index.html","61c96ad72a3caed057207a61757c2b0b"],["D:/blog/public/tags/plan/index.html","eb9f8796822ee24570ebb7bd0aafbeca"],["D:/blog/public/tags/python/index.html","3de4ae41354abe4483db0d845b9a1e46"],["D:/blog/public/tags/python语法/index.html","6a5402b5d6d489512d0067ad703e02a1"],["D:/blog/public/tags/travel/index.html","307a1a1d4c814cca8f3645c78ae68108"],["D:/blog/public/tags/win/index.html","ed8371724069a4eba4763aecb25e5dc9"],["D:/blog/public/tags/图/index.html","69e5074e075cde663fde69e0664fae6f"],["D:/blog/public/tags/图论/index.html","4a1c3d6363cbbadea121d048b8b6ffea"],["D:/blog/public/tags/字符串/index.html","0646782da1a0690cc43b86e0cece17f8"],["D:/blog/public/tags/实践/index.html","527a22ed0ea395deaa16a159295388b1"],["D:/blog/public/tags/并查集/index.html","1d03932176810bbbb7b1b99fae7ee683"],["D:/blog/public/tags/排序/index.html","82e1cc13a3e63d1a35dd14e0928a1e65"],["D:/blog/public/tags/数学/index.html","1f46452e540dfb74ec98c4c8c7aecc94"],["D:/blog/public/tags/整理/index.html","dca87a24faf7fa87bbbcc5beb4177836"],["D:/blog/public/tags/文本编辑/index.html","3c39c2d0ebb7ec9863dd2d9774145802"],["D:/blog/public/tags/树/index.html","efebd2c7528600096dcccd2f833ed2bc"],["D:/blog/public/tags/竞赛/index.html","4ea94a5a00cd2390c5dba301cf547463"],["D:/blog/public/tags/纪念日/index.html","089eca12fdbedbaa927284d244380f48"],["D:/blog/public/tags/脚本/index.html","2837c0b6d0de03f7206f47c7f41ed547"],["D:/blog/public/tags/链表/index.html","12fb063360354523271382068346710b"]];
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







