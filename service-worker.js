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

var precacheConfig = [["D:/blog/public/2019/10/22/Markdown语法学习/index.html","b99b3273c1c3d3d13b34136e6422065d"],["D:/blog/public/2019/10/22/PAT-1122/index.html","cd41f66a447508da36626b2222896696"],["D:/blog/public/2019/10/22/PAT计划/index.html","a774a71be2492c9d8707354e7968b7a0"],["D:/blog/public/2019/10/22/一周年纪念/1.png","b922b2b5d70da4521554e351b799eafa"],["D:/blog/public/2019/10/22/一周年纪念/10.jpg","4ee6bc37ff3698fa570a938b2bd3cd8f"],["D:/blog/public/2019/10/22/一周年纪念/11.jpg","1eb8883718238d92b64c1d22aa0ad727"],["D:/blog/public/2019/10/22/一周年纪念/12.jpg","6f72da1105ecd7baec4b4ae55a95c4e5"],["D:/blog/public/2019/10/22/一周年纪念/13.png","9a7c7b6afec674eb08e5607057ecadf9"],["D:/blog/public/2019/10/22/一周年纪念/14.jpg","1c2a7133e420bc4b898cff3c3a67c3cd"],["D:/blog/public/2019/10/22/一周年纪念/15.png","9c39368c806a0cfa2e7d709132df9056"],["D:/blog/public/2019/10/22/一周年纪念/16.png","35d0b5720714b6bdc6d3a406196eff55"],["D:/blog/public/2019/10/22/一周年纪念/17.png","9e7284fb82f396c4810ef96f1b4fe4f8"],["D:/blog/public/2019/10/22/一周年纪念/19.jpg","8a64b1eb0e09baf650be35c430e1e35b"],["D:/blog/public/2019/10/22/一周年纪念/20.jpg","0903b15ae3093a3532017dc07d32e3ac"],["D:/blog/public/2019/10/22/一周年纪念/21.jpg","22b445ee7acb7233b44fc4a25d3ae663"],["D:/blog/public/2019/10/22/一周年纪念/22.jpg","efc11d26abeff3b665daa5d9f2391f15"],["D:/blog/public/2019/10/22/一周年纪念/23.png","234580cc98d43a9b6e76eea8ec82470d"],["D:/blog/public/2019/10/22/一周年纪念/24.png","2ba8d6c8d4be23e8c33d3fc0f4b4b4d6"],["D:/blog/public/2019/10/22/一周年纪念/25.png","5ab1f6e4156096f8ba58f66255bc3c0a"],["D:/blog/public/2019/10/22/一周年纪念/27.jpg","836de2238b33e122dfca7d9da44f27e3"],["D:/blog/public/2019/10/22/一周年纪念/28.png","9e80a6a4a5ddebfd511f53ea1e8267b0"],["D:/blog/public/2019/10/22/一周年纪念/29.jpg","04f2ec6d41985b0ed3e44f2361c7899f"],["D:/blog/public/2019/10/22/一周年纪念/3.jpg","412cd99e96d03326a84f0c0a84d1ec10"],["D:/blog/public/2019/10/22/一周年纪念/30.png","befd1520ca9f8db304c88e9d88278df8"],["D:/blog/public/2019/10/22/一周年纪念/31.png","c18c6d47b84e55829bcfe8e11fb63729"],["D:/blog/public/2019/10/22/一周年纪念/32.jpg","14d40f93919dc0c17c38c039f8a35cb1"],["D:/blog/public/2019/10/22/一周年纪念/33.jpg","4e615748f58a6f23602d4a7806e6422c"],["D:/blog/public/2019/10/22/一周年纪念/5.png","9941823b1349fbb055ca615b6e3d54de"],["D:/blog/public/2019/10/22/一周年纪念/6.jpg","1266f0dcd054f6bd16fb50de12b43b26"],["D:/blog/public/2019/10/22/一周年纪念/8.png","6e4467f160ae2401f89d866bd1e7da2d"],["D:/blog/public/2019/10/22/一周年纪念/9.jpg","1e90bb672bca5590d1a4e79e97431fb8"],["D:/blog/public/2019/10/22/一周年纪念/index.html","6700275034ea2d3f3855bd3b477d9c82"],["D:/blog/public/2019/10/25/PAT-1142/index.html","3b043de20140b9c0548812bfeaadd9aa"],["D:/blog/public/2019/10/26/刷题技巧整理/index.html","accf6582dbfda8f0c4a8e7816cc0ef5b"],["D:/blog/public/2019/10/26/算法笔记阅读/1.png","92150d33ef3bd6c65a9aaced8376a92c"],["D:/blog/public/2019/10/26/算法笔记阅读/2.png","cfccd02ede828f058d6097a5ea36231e"],["D:/blog/public/2019/10/26/算法笔记阅读/3.png","8829fd0644f4aa7c563ed6700448d1a5"],["D:/blog/public/2019/10/26/算法笔记阅读/4.png","9cd3a2412ecc95904bc4fa988104670d"],["D:/blog/public/2019/10/26/算法笔记阅读/5.png","2d944484cd483c4328cf23f83f283df4"],["D:/blog/public/2019/10/26/算法笔记阅读/6.png","e029e7b61a5b2af8a9adca3fe5c958c7"],["D:/blog/public/2019/10/26/算法笔记阅读/7.png","e3ea1a023a3cd92a0f71600be7356567"],["D:/blog/public/2019/10/26/算法笔记阅读/8.png","6867de9496f219814cfdc9065a3300f5"],["D:/blog/public/2019/10/26/算法笔记阅读/9.png","9edf64d883da58014326c3dfe069972b"],["D:/blog/public/2019/10/26/算法笔记阅读/index.html","105669a0d73a73eeb2fddd481efcc525"],["D:/blog/public/2019/10/29/PAT-1013/index.html","90f2f9626a915779e7ee652189554f1f"],["D:/blog/public/2019/10/29/PAT-1034/index.html","80e0f740bce59d43ac3a8d3eaeae8e43"],["D:/blog/public/2019/10/30/PAT-1021/index.html","12f0177264a2b063e17fd46808bb7fa5"],["D:/blog/public/2019/11/03/Mac折腾记录/index.html","4bc56f00b8aeaefcbf1583fff750b630"],["D:/blog/public/2019/11/04/VSCode使用/1.png","e8132b252da910da84d0d1ae36572702"],["D:/blog/public/2019/11/04/VSCode使用/2.png","3c8c0b6004e0d69eb0fe084e61359e9f"],["D:/blog/public/2019/11/04/VSCode使用/index.html","8dc3bcf0de0b587e56ad65958d453638"],["D:/blog/public/2019/11/05/PAT-1107/index.html","e56e7d31a52c82cd3a41ae10113def2c"],["D:/blog/public/2019/11/05/文件自动分类脚本/index.html","2a7b8343150ebe0460b7a1aadaa7e602"],["D:/blog/public/2019/11/06/PAT-1114/index.html","57bc1b350a9fb82c994d7ed806ef0efe"],["D:/blog/public/2019/11/06/python基础/index.html","2eb492508a70676b60337de79c3148cc"],["D:/blog/public/2019/11/07/git学习/0.jpg","701e02bf0b2d71ab51b7e2b6aa973d52"],["D:/blog/public/2019/11/07/git学习/1.png","2adbbdf8d8bab5606af6279ef5612da2"],["D:/blog/public/2019/11/07/git学习/2.png","c6f039420a0f851eb424883511ac4e2f"],["D:/blog/public/2019/11/07/git学习/3.png","06f0d7d34075653ba25a18ea0fea8b7d"],["D:/blog/public/2019/11/07/git学习/4.png","cb8a9c11c8fd1326260bbc7c2c6a62ac"],["D:/blog/public/2019/11/07/git学习/index.html","21636080eb9738bc8e005aabd8fbec15"],["D:/blog/public/2019/11/13/PAT-1025/index.html","8026f0a4882d9d37527b856fb6bdc453"],["D:/blog/public/2019/11/14/H和T的成长回忆录/index.html","2ad76c5456b40e13b76e325f98d9465f"],["D:/blog/public/2019/11/14/PAT-1069/index.html","8c35d17d131f6bdcf628ab8ad606d17b"],["D:/blog/public/2019/11/14/PAT-1093/index.html","8599608399228a8dd02dbab135eae550"],["D:/blog/public/2019/11/14/PAT-1101/index.html","b2f5d59888d9f31e99ee94f9a0b23376"],["D:/blog/public/2019/11/14/blog分类规划/index.html","9f1062933e01d9aad03f0b8e1591ce51"],["D:/blog/public/2019/11/14/北京游感/index.html","98cf8f1fd4a7fb96f59f601772c5d658"],["D:/blog/public/2019/11/14/热爱生命/1.png","0b865b5a8c5ffc65ab33586bb50513b7"],["D:/blog/public/2019/11/14/热爱生命/index.html","8fa2da8acea9fdfeaf280c3e2cd34fe7"],["D:/blog/public/2019/11/14/随想-1/index.html","f924c9e0be0f458cb2dd3a5bc220031b"],["D:/blog/public/2019/11/14/随想-2/1.png","ba65a9551263d1c1cb9c1870d1ee8a29"],["D:/blog/public/2019/11/14/随想-2/index.html","a1e0b49803223dab14f7998eff172bef"],["D:/blog/public/2019/11/15/PAT-1032/index.html","5eb900e679bb42c26e980ed4b737ec23"],["D:/blog/public/2019/11/15/PAT-1059/index.html","a21881f5e629d5a8e9a1c0bc14fb2fa0"],["D:/blog/public/2019/11/15/去南京/1.png","53d7c944f9a7326b86bd734f9d2d967c"],["D:/blog/public/2019/11/15/去南京/2.png","17208773d5c2ee30d094a597d4a8b9b6"],["D:/blog/public/2019/11/15/去南京/index.html","77922f9be9b4d90479671801340428a4"],["D:/blog/public/2019/11/16/PAT-1052/index.html","4d4a675e6dc57de205d30b27df03a4bd"],["D:/blog/public/2019/11/16/连通块个数/index.html","c72f9d6c149b19f232ad623e1c25d8a5"],["D:/blog/public/2019/11/16/迷宫问题/index.html","9b1bc87c986fe8be44bcfceae020166d"],["D:/blog/public/2019/11/17/Listening-training/index.html","54d91505d6c14d1eef424edeafd1d3f9"],["D:/blog/public/2019/11/17/PAT-1020/index.html","e0fa6150573c8a2aa3aab91aae248bf9"],["D:/blog/public/2019/11/18/随想-3/index.html","f7b5b3b7e6853bb2e8733d04fdc9ad42"],["D:/blog/public/2019/11/19/PAT-1053/index.html","2e588e1856367e75c75d70510f4a59f0"],["D:/blog/public/2019/11/19/Win环境配置/1.png","c32e495ccfeb914740d76fdf84b2fda3"],["D:/blog/public/2019/11/19/Win环境配置/2.png","4cb6305070b92541ac6749688e6ddec6"],["D:/blog/public/2019/11/19/Win环境配置/3.png","da3b800653c68b7c463ee0b5598055e9"],["D:/blog/public/2019/11/19/Win环境配置/index.html","c80f66b62900594366924004fca9b2db"],["D:/blog/public/2019/11/20/PAT-1043/index.html","9714f6efd6f9ff9e3b9718900b65191f"],["D:/blog/public/2019/11/22/PAT-1003/1.png","6fd7e183ac46df7222a1d2a2a4c9b12a"],["D:/blog/public/2019/11/22/PAT-1003/index.html","bb211ca4a86e207dd8265feb271cc859"],["D:/blog/public/2019/11/22/PAT-1018/index.html","abccd6e365b6b495c578696001630147"],["D:/blog/public/2019/11/22/阅读管理/index.html","087eaf0412b28a70f02bead33cffc8c0"],["D:/blog/public/2019/11/23/ExcelToMarkdown/index.html","2bddfeb2ddf77afc39b2f5e91ff1196b"],["D:/blog/public/2019/11/23/PAT-1030/1.png","aecb20c8058c5af85e249217e120debe"],["D:/blog/public/2019/11/23/PAT-1030/index.html","5a815cad91ff8a63f62675ac35da2905"],["D:/blog/public/2019/11/23/四级选择填空高频词/index.html","8597d8773f7d097c2e10402ad3d7b989"],["D:/blog/public/archives/2019/10/index.html","77a4425d38b7407f20f8eea363e6194d"],["D:/blog/public/archives/2019/11/index.html","759d7404600e729ad7c6c847f603e70f"],["D:/blog/public/archives/2019/11/page/2/index.html","bb69f66b361b73154657d2f1edd45a05"],["D:/blog/public/archives/2019/11/page/3/index.html","ae66b670ea1f4c2d11fa1f8f01c21af0"],["D:/blog/public/archives/2019/11/page/4/index.html","d3375faa7393b23c3be213124591cda0"],["D:/blog/public/archives/2019/index.html","70deeab19fd97cf65b609d94e9b5a56f"],["D:/blog/public/archives/2019/page/2/index.html","96791808f2fc242fa55f62d02c9dd11d"],["D:/blog/public/archives/2019/page/3/index.html","0768e79008bd5f2d01a542d3dd38ff46"],["D:/blog/public/archives/2019/page/4/index.html","a116ddcc3300aa87cf2377928a9a8494"],["D:/blog/public/archives/2019/page/5/index.html","74277aed8f3a2177d453f4722d176436"],["D:/blog/public/archives/index.html","b69e2b722172c050efe5e240a48443a2"],["D:/blog/public/archives/page/2/index.html","fdabae49dd60852416ed17596883688c"],["D:/blog/public/archives/page/3/index.html","94c9a7a322a95a8a9b090635b6097d51"],["D:/blog/public/archives/page/4/index.html","bf32a5e57285cac08b82b372dd3d20f8"],["D:/blog/public/archives/page/5/index.html","a5c6418df67ae90ebdd4dbbb16e5305a"],["D:/blog/public/categories/code/index.html","a9602604721d3948db8d06d4f8d1a94c"],["D:/blog/public/categories/code/page/2/index.html","6d24ba3a937ebf9fabe62633d5902f00"],["D:/blog/public/categories/code/page/3/index.html","a2662d8b49725d2d258dc5e160cb16fe"],["D:/blog/public/categories/index.html","31102f101373a8d054f2164d65351677"],["D:/blog/public/categories/life/index.html","7549f34866e58e78e99d9b4fd27e3915"],["D:/blog/public/categories/life/page/2/index.html","07e40cf392fb55de77c4d12398556aa4"],["D:/blog/public/categories/note/index.html","ba1bd3efa9ac5d276e5d37eec201b9c8"],["D:/blog/public/css/index.css","9911b20a2e31dc1aa98c48e483335237"],["D:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/blog/public/index.html","35859c76a2498b508d545b4383b522b5"],["D:/blog/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["D:/blog/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["D:/blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/blog/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["D:/blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/blog/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/blog/public/page/2/index.html","c20e95329717e98714bce9414a99a45a"],["D:/blog/public/page/3/index.html","4031f197823126ef9d4304e0e4fe827b"],["D:/blog/public/page/4/index.html","1cbb0973b65248417c980afc78f19c03"],["D:/blog/public/page/5/index.html","23cf0e302f658262f643cf0cc3d77286"],["D:/blog/public/tags/PAT/index.html","d4569ea9386a14d11efd733aa686abf5"],["D:/blog/public/tags/PAT/page/2/index.html","f56432a3baa7e2b4f8436055b6ddadd9"],["D:/blog/public/tags/bfs/index.html","52a07ec6acfcc8a3e034d3d138968622"],["D:/blog/public/tags/dfs/index.html","5378a2a2519a59d889348bc373272143"],["D:/blog/public/tags/dijkstra/index.html","d0a33bd1dba2b89fb127280f6a573f08"],["D:/blog/public/tags/english/index.html","95bba754c432a09607606dc3cc8c1a35"],["D:/blog/public/tags/git/index.html","321a052e3e2ab7890c251fe77324ef90"],["D:/blog/public/tags/index.html","1c44c56843a537a4c82455f8ec7ef2f7"],["D:/blog/public/tags/plan/index.html","481e16c54c4733c7081c0f182cab3c9e"],["D:/blog/public/tags/python/index.html","04da5739bf9d3d1cf33fa722e2d1e425"],["D:/blog/public/tags/python语法/index.html","7cc677b82fc4530244d415ef34430e60"],["D:/blog/public/tags/travel/index.html","e8da9ce0564a977a675e88402fb445e1"],["D:/blog/public/tags/win/index.html","284ff27237bfbc85b618de7b366f3418"],["D:/blog/public/tags/图/index.html","70d2949ca7466fcdedce97facba7116e"],["D:/blog/public/tags/图论/index.html","fe9ed44788d38164ba9304dad9534044"],["D:/blog/public/tags/字符串/index.html","8fce58790ac94f53360d5530cb1eaa18"],["D:/blog/public/tags/并查集/index.html","ed8e9349eb1cae3f40da95ef02a4c793"],["D:/blog/public/tags/排序/index.html","1f5126f5e9ed95cfc24dc398eb5a1545"],["D:/blog/public/tags/数学/index.html","f23da370b55480fa96869d8226d9e333"],["D:/blog/public/tags/整理/index.html","b210c0c9b2796fdf636774eedfff7134"],["D:/blog/public/tags/文本编辑/index.html","444273c3571e802f5c5d17b3f5729eae"],["D:/blog/public/tags/树/index.html","a8ab8a40b3a44089e881d150603c8afb"],["D:/blog/public/tags/竞赛/index.html","f5ca6a38363741ac106bbcca78df0632"],["D:/blog/public/tags/纪念日/index.html","f31460fa53ad7acc0ab8f7ed050bcfda"],["D:/blog/public/tags/脚本/index.html","0585669e649bd7120e1007a3cce50af8"],["D:/blog/public/tags/链表/index.html","2f13a32f68840dd7a0f40422c09fe2dd"]];
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







