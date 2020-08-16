!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e():"function"==typeof define&&define.amd?define(e):e()}(0,function(){"use strict";var t,p=(function(t,e){function n(t,e){return e.querySelector(t)}(e=t.exports=function(t,e){return n(t,e=e||document)}).all=function(t,e){return(e=e||document).querySelectorAll(t)},e.engine=function(t){if(!t.one)throw new Error(".one callback required");if(!t.all)throw new Error(".all callback required");return n=t.one,e.all=t.all,e}}(t={exports:{}},t.exports),t.exports);p.all,p.engine;try{var a=p}catch(t){a=p}var e=Element.prototype,o=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector,d=function(t,e){if(!t||1!==t.nodeType)return!1;if(o)return o.call(t,e);for(var n=a.all(e,t.parentNode),i=0;i<n.length;++i)if(n[i]==t)return!0;return!1};try{var i=d}catch(t){i=d}var u=function(t,e,n){n=n||document.documentElement;for(;t&&t!==n;){if(i(t,e))return t;t=t.parentNode}return i(t,e)?t:null};!function(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&i.firstChild?i.insertBefore(a,i.firstChild):i.appendChild(a),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t))}}(".docsify-pagination-container{display:flex;flex-wrap:wrap;justify-content:space-between;overflow:hidden;margin:5em 0 1em;border-top:1px solid rgba(0,0,0,.07)}.pagination-item{margin-top:2.5em}.pagination-item a,.pagination-item a:hover{text-decoration:none}.pagination-item a{color:currentColor}.pagination-item a:hover .pagination-item-title{text-decoration:underline}.pagination-item:not(:last-child) a .pagination-item-label,.pagination-item:not(:last-child) a .pagination-item-subtitle,.pagination-item:not(:last-child) a .pagination-item-title{opacity:.3;transition:all .2s}.pagination-item:last-child .pagination-item-label,.pagination-item:not(:last-child) a:hover .pagination-item-label{opacity:.6}.pagination-item:not(:last-child) a:hover .pagination-item-title{opacity:1}.pagination-item-label{font-size:.8em}.pagination-item-label>*{line-height:1;vertical-align:middle}.pagination-item-label svg{height:.8em;width:auto;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1px}.pagination-item--next{text-align:right}.pagination-item--next svg{margin-left:.5em}.pagination-item--previous svg{margin-right:.5em}.pagination-item-title{font-size:1.6em}.pagination-item-subtitle{text-transform:uppercase;opacity:.3}");var r=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},l=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}(),c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},f={HASH:"hash",HISTORY:"history"},s=function(t){return{previousText:"PREVIOUS",nextText:"NEXT",crossChapter:!1,crossChapterText:!1,routerMode:t.routerMode||f.HASH}},h="docsify-pagination-container";function g(t){return Array.prototype.slice.call(t)}function m(t){return t.href?t:p("a",t)}function v(e,t){return 1===arguments.length?function(t){return v(e,t)}:decodeURIComponent(t.getAttribute("href").split("?")[0])===decodeURIComponent(e)}var y=function(){function n(t){var e;(r(this,n),t)&&(this.chapter=(e=u(t,"div > ul > li"),p("p",e)),this.hyperlink=m(t))}return l(n,[{key:"toJSON",value:function(){if(this.hyperlink)return{name:this.hyperlink.innerText,href:this.hyperlink.getAttribute("href"),chapterName:this.chapter&&this.chapter.innerText||""}}}]),n}();var x={container:function(){return'<div class="'+h+'"></div>'},inner:function(t,e){var n=document.createElement("script");return n.type="text/javascript",n.src="https://static.addtoany.com/menu/page.js",document.body.appendChild(n),[t.prev&&'\n        <div class="pagination-item pagination-item--previous">\n          <a href="'+t.prev.href+'">\n            <div class="pagination-item-label">\n              <svg class="icon" width="10" height="16" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg">\n                <polyline fill="none" vector-effect="non-scaling-stroke" points="8,2 2,8 8,14"/>\n              </svg>\n              <span>'+e.previousText+'</span>\n            </div>\n            <div class="pagination-item-title">'+t.prev.name+"</div>\n      ",t.prev&&e.crossChapterText&&'<div class="pagination-item-subtitle">'+t.prev.chapterName+"</div>",t.prev&&"</a>\n        </div>\n      ",'\n      <div class="a2a_kit a2a_kit_size_32 a2a_default_style" style="margin-top:40px;padding-right: 80px;width:100%;position:absolute">\n          <div>\n            <div style="width: 100%;display: flex;justify-content: center;">\n              <a class="a2a_dd" href="https://www.addtoany.com/share"></a>\n              <a class="a2a_button_wechat"></a>\n              <a class="a2a_button_sina_weibo"></a>\n              <a class="a2a_button_qzone"></a>\n              <a class="a2a_button_douban"></a>\n              <a class="a2a_button_facebook"></a>\n              <a class="a2a_button_twitter"></a>\n              <a class="a2a_button_email"></a>\n              <a class="a2a_button_copy_link"></a>\n            </div>\n          </div>\n          <div>\n            <div style="width: 100%;display: flex;justify-content: center;">\n            由 <a href="https://docsify.js.org" target="_blank" style="color: inherit; font-weight: bold;margin-top: 8px; text-decoration: none;"> docsify</a> 强力驱动 | <a href="https://blog.l0v0.com" target="_blank" style="color: inherit; font-weight: bold;margin-top: 8px; text-decoration: none;">智伤帝</a></div>\n          </div>\n      </div>\n      <div style="height:96px"></div>\n      ',t.next&&'\n        <div class="pagination-item pagination-item--next">\n          <a href="'+t.next.href+'">\n            <div class="pagination-item-label">\n              <span>'+e.nextText+'</span>\n              <svg width="10" height="16" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg">\n                <polyline fill="none" vector-effect="non-scaling-stroke" points="2,2 8,8 2,14"/>\n              </svg>\n            </div>\n            <div class="pagination-item-title">'+t.next.name+"</div>\n      ",t.next&&e.crossChapterText&&'<div class="pagination-item-subtitle">'+t.next.chapterName+"</div>",t.next&&"</a>\n        </div>\n      "].filter(Boolean).join("")}};window.$docsify=window.$docsify||{},window.$docsify.plugins=[function(t,e){var n=c({},s(e.config),e.config.pagination||{});function i(){var t=p("."+h);t&&(t.innerHTML=x.inner(function(t,e){var n=e.crossChapter,i=e.routerMode;try{var a=i===f.HISTORY?t.route.path:"#"+t.route.path,o=g(p.all(".sidebar li a")).filter(function(t){return!d(t,".section-link")}),r=o.find(v(a)),l=g((u(r,"ul")||{}).children).filter(function(t){return"LI"===t.tagName.toUpperCase()}),c=n?o.findIndex(v(a)):l.findIndex(function(t){var e=m(t);return e&&v(a,e)}),s=n?o:l;return{prev:new y(s[c-1]).toJSON(),next:new y(s[c+1]).toJSON()}}catch(t){return{}}}(e,n),n))}t.afterEach(function(t){return t+x.container()}),t.doneEach(function(){return i()})}].concat(window.$docsify.plugins||[])});