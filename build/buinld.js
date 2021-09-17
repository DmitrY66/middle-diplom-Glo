(()=>{"use strict";function e(e,n){if(e){if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(e,n):void 0}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var s,a,l,c,d,u,h,f,p,y,v,m,w,S,b,g,x,E,k,C;x=document.querySelector("#header > .container > .row > .col-xs-6 > .row > .col-sm-12 > .button > .btn"),E=document.querySelector(".header-modal"),k=document.querySelector(".overlay"),C=document.querySelector(".header-modal__close"),x.addEventListener("click",(function(e){e.preventDefault(),E.style.display="block",k.style.display="block",k.addEventListener("click",(function(){E.style.display="none",k.style.display="none"})),document.addEventListener("keydown",(function(e){"Escape"==e.code&&(E.style.display="none",k.style.display="none")}))})),C.addEventListener("click",(function(){E.style.display="none",k.style.display="none"})),new(function(){function o(e){var t=e.main,n=e.wrap,i=e.next,r=e.prev,s=e.infinity,a=void 0!==s&&s,l=e.position,c=void 0===l?0:l,d=e.slidesToShow,u=void 0===d?1:d,h=e.responsive,f=void 0===h?[]:h;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),this.main=document.querySelector(t),this.wrap=document.querySelector(n),this.slides=document.querySelector(n).children,this.next=document.querySelector(i),this.prev=document.querySelector(r),this.slidesToShow=u,this.options={position:c,infinity:a,widthSlide:Math.floor(100/this.slidesToShow),maxPosition:this.slides.length-this.slidesToShow},this.responsive=f}var i,r;return i=o,(r=[{key:"init",value:function(){this.addGloClass(),this.addStyle(),this.controlSlider(),this.responsive&&this.responseInit()}},{key:"addGloClass",value:function(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");var t,n=function(t,n){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=e(t))){o&&(t=o);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,l=!1;return{s:function(){o=o.call(t)},n:function(){var e=o.next();return a=e.done,e},e:function(e){l=!0,s=e},f:function(){try{a||null==o.return||o.return()}finally{if(l)throw s}}}}(this.slides);try{for(n.s();!(t=n.n()).done;)t.value.classList.add("glo-slider__item")}catch(e){n.e(e)}finally{n.f()}}},{key:"addStyle",value:function(){var e=document.getElementById("sliderCarousel-style");e||((e=document.createElement("style")).id="sliderCarousel-style"),e.textContent="\n        .glo-slider{\n          overflow: hidden !important;\n          width: 555px;\n          margin: 0 auto !important;\n          // background: black;\n        }\n        @media (max-width: 576px) {\n          .glo-slider{\n            width: 185px;\n          }\n        }\n        .glo-slider__wrap{\n          transition: transform 0.5s !important;\n          will-change: transform !important;\n          // background: red;\n        }\n        .glo-slider__item{\n          flex: 0 0 ".concat(this.options.widthSlide,"% !important;\n          margin: auto 0 !important;\n        }\n        "),document.head.appendChild(e)}},{key:"controlSlider",value:function(){this.next.addEventListener("click",this.nextSlider.bind(this)),this.prev.addEventListener("click",this.prevtSlider.bind(this))}},{key:"prevtSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"responseInit",value:function(){var n,o=this,i=this.slidesToShow,r=this.responsive.map((function(e){return e.breakpoint})),s=Math.max.apply(Math,function(e){if(Array.isArray(e))return t(e)}(n=r)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||e(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=function(){var e=document.documentElement.clientWidth;if(e<s)for(var t=0;t<r.length;t++)e<r[t]&&(o.slidesToShow=o.responsive[t].slideToShow,o.options.widthSlide=Math.floor(100/o.slidesToShow),o.addStyle());else o.slidesToShow=i,o.options.widthSlide=Math.floor(100/o.slidesToShow),o.addStyle()};a(),window.addEventListener("resize",a)}}])&&n(i.prototype,r),o}())({main:".benefits-inner",wrap:".benefits-wrap",prev:".benefits__arrow--left",next:".benefits__arrow--right",slidesToShow:3,infinity:!0,responsive:[{breakpoint:576,slideToShow:1}]}).init(),function(){var e=document.querySelector("#services > .container");document.querySelector("#services > .container .row").children[4].remove();var t=document.createElement("div");t.className="services-arrows",t.innerHTML='\n      <div class="services__arrow services__arrow--left">\n        <img src="images/benefits/left-arrow.svg" alt="">\n      </div>\n      <div class="services__arrow services__arrow--right">\n        <img src="images/benefits/right-arrow.svg" alt="">\n      </div>\n      ',e.appendChild(t),new(function(){function e(t){var n=t.main,o=t.wrap,i=t.next,r=t.prev,s=t.infinity,a=void 0!==s&&s,l=t.position,c=void 0===l?0:l,d=t.slidesToShow,u=void 0===d?1:d,h=t.responsive,f=void 0===h?[]:h;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.main=document.querySelector(n),this.wrap=document.querySelector(o),this.slides=document.querySelector(o).children,this.next=document.querySelector(i),this.prev=document.querySelector(r),this.slidesToShow=u,this.options={position:c,infinity:a,widthSlide:Math.floor(100/this.slidesToShow),maxPosition:this.slides.length-this.slidesToShow},this.responsive=f}var t,n;return t=e,(n=[{key:"init",value:function(){this.addGloClass(),this.addStyle(),this.controlSlider(),this.responsive&&this.responseInit()}},{key:"addGloClass",value:function(){this.main.classList.add("glo-service"),this.wrap.classList.add("glo-service__wrap");var e,t=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=o(e))){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){l=!0,s=e},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw s}}}}(this.slides);try{for(t.s();!(e=t.n()).done;)e.value.classList.add("glo-service__item")}catch(e){t.e(e)}finally{t.f()}}},{key:"addStyle",value:function(){var e=document.getElementById("serviceCarousel-style");e||((e=document.createElement("style")).id="serviceCarousel-style"),e.textContent="\n        .glo-service{\n          overflow: hidden !important;\n          margin: 0 auto !important;\n          // background: black;\n          \n        }\n        @media (max-width: 576px) {\n          .glo-service{\n            width: 100%;\n          }\n        }\n        .glo-service__wrap{\n          transition: transform 0.5s !important;\n          will-change: transform !important;\n          // background: red;\n          display: flex !important;\n        }\n        .glo-service__item{\n          flex: 0 0 ".concat(this.options.widthSlide,"% !important;\n          margin: auto 0 !important;\n        }\n        "),document.head.appendChild(e)}},{key:"controlSlider",value:function(){this.next.addEventListener("click",this.nextSlider.bind(this)),this.prev.addEventListener("click",this.prevtSlider.bind(this))}},{key:"prevtSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"responseInit",value:function(){var e,t=this,n=this.slidesToShow,r=this.responsive.map((function(e){return e.breakpoint})),s=Math.max.apply(Math,function(e){if(Array.isArray(e))return i(e)}(e=r)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||o(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=function(){var e=document.documentElement.clientWidth;if(e<s)for(var o=0;o<r.length;o++)e<r[o]&&(t.slidesToShow=t.responsive[o].slideToShow,t.options.widthSlide=Math.floor(100/t.slidesToShow),t.addStyle());else t.slidesToShow=n,t.options.widthSlide=Math.floor(100/t.slidesToShow),t.addStyle()};a(),window.addEventListener("resize",a)}}])&&r(t.prototype,n),e}())({main:"#services > .container",wrap:"#services > .container > .row",prev:".services__arrow--left",next:".services__arrow--right",slidesToShow:2,infinity:!0,responsive:[{breakpoint:576,slideToShow:1}]}).init()}(),function(){var e=document.querySelector("#services > .container .row"),t=document.querySelector(".services-modal"),n=document.querySelector(".overlay"),o=document.querySelector(".services-modal__close");e.addEventListener("click",(function(e){e.preventDefault(),e.target.closest(".service-button")&&(t.style.display="block",n.style.display="block")})),o.addEventListener("click",(function(){t.style.display="none",n.style.display="none"})),n.addEventListener("click",(function(){t.style.display="none",n.style.display="none"})),document.addEventListener("keydown",(function(e){"Escape"==e.code&&(t.style.display="none",n.style.display="none")}))}(),m="23 september  2021",w=document.querySelectorAll(".count_1 > span"),S=document.querySelectorAll(".count_2 > span"),b=document.querySelectorAll(".count_3 > span"),g=document.querySelectorAll(".count_4 > span"),function e(){var t,n,o,i,r=(t=(new Date(m).getTime()-(new Date).getTime())/1e3,n=Math.floor(t%60),o=Math.floor(t/60%60),i=Math.floor(t/60/60%24),{days:Math.floor(t/60/60/24),hours:i,minutes:o,seconds:n});r.seconds<10&&(r.seconds="0"+r.seconds),r.minutes<10&&(r.minutes="0"+r.minutes),r.hours<10&&(r.hours="0"+r.hours),r.days<10&&(r.days="0"+r.days),w.forEach((function(e){e.textContent=r.days})),S.forEach((function(e){e.textContent=r.hours})),b.forEach((function(e){e.textContent=r.minutes})),g.forEach((function(e){e.textContent=r.seconds}));var s=setInterval(e,1e3,m);(new Date).getTime()>=new Date(m).getTime()&&(clearInterval(s),w.forEach((function(e){e.textContent="00"})),S.forEach((function(e){e.textContent="00"})),b.forEach((function(e){e.textContent="00"})),g.forEach((function(e){e.textContent="00"})))}(),l=!1,c=!1,d=function(e){e.disabled=!0!==l||!0!==c},u=function(e){e.addEventListener("focusout",(function(){e.style.borderColor="",e.style.boxShadow=""}))},h=document.querySelectorAll("form"),f=h[0].querySelector("button"),p=h[1].querySelector("button"),y=h[5].querySelector("button"),v=h[6].querySelector("button"),f.disabled=!0,p.disabled=!0,document.querySelectorAll(".fancyboxModal").forEach((function(e){e.addEventListener("click",(function(){y.disabled=!0,v.disabled=!0}))})),h.forEach((function(e){e.addEventListener("input",(function(e){var t=e.target;t.matches('input[name="fio"]')&&(function(e){/^[а-яА-Яa-zA-Z\s]+$/.test(e.value)?(e.style.borderColor="green",e.style.boxShadow="0 0 8px green",l=!0):(e.style.borderColor="red",e.style.boxShadow="0 0 8px red",l=!1),""===e.value&&(e.placeholder="Имя русскими буквами",e.style.borderColor="green",e.style.boxShadow="0 0 8px green")}(t),u(t)),t.matches('input[name="phone"]')&&(function(e){/\+\d{1,16}$/.test(e.value)?(e.style.borderColor="green",e.style.boxShadow="0 0 8px green",c=!0):(e.style.borderColor="red",e.style.boxShadow="0 0 8px red",c=!1),""===e.value&&(e.placeholder="Образец: +00000000000",e.style.borderColor="green",e.style.boxShadow="0 0 8px green")}(t),u(t)),d(f),d(p),d(y),d(v)}))})),function(){var e="Что-то пошло не так!",t="Загрузка...",n="Спасибо! Мы скоро с Вами свяжемся!",o=document.createElement("div");o.textContent="Тут будет сообщение!",o.style.cssText="font-size: 1.6rem",o.style.background="#394f6a",o.style.color="#fff",o.style.textAlign="center",o.style.position="absolute",o.style.padding="4px 8px";var i=function(){var e=document.querySelectorAll("input"),t=document.querySelectorAll('button[type="submit"]');e.forEach((function(e){e.value=""})),t.forEach((function(e){e.disabled=!0}))},r=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};document.body.addEventListener("submit",(function(s){var a=s.target;if(a.closest("#order_1, #order_2")){s.preventDefault(),a.appendChild(o),o.textContent=t;var l=new FormData(a);if(document.querySelector("#calc-total")){var c={calcTotal:document.querySelector("#calc-total").value};l.forEach((function(e,t){c[t]=e})),r(c).then((function(e){if(200!==e.status)throw new Error("status network not 200");o.textContent=n})).then(i).catch((function(t){o.textContent=e,console.error("errorische",t)}))}else{var d={};l.forEach((function(e,t){d[t]=e})),r(d).then((function(e){if(200!==e.status)throw new Error("status network not 200");o.textContent=n})).then(i).catch((function(t){o.textContent=e,console.error("errorische",t)}))}}if(a.closest(".fancybox-skin")){s.preventDefault(),a.appendChild(o),o.textContent=t;var u=new FormData(a);if(document.querySelector("#calc-total")){var h={calcTotal:document.querySelector("#calc-total").value};u.forEach((function(e,t){h[t]=e})),r(h).then((function(e){if(200!==e.status)throw new Error("status network not 200");o.textContent=n})).then(i).catch((function(t){o.textContent=e,console.error("errorische",t)}))}else{var f={};u.forEach((function(e,t){f[t]=e})),r(f).then((function(e){if(200!==e.status)throw new Error("status network not 200");o.textContent=n})).then(i).catch((function(t){o.textContent=e,console.error("errorische",t)}))}}}))}(),function(){var e,t,n,o=document.querySelector(".overlay"),i=document.querySelectorAll(".sertificate-document"),r=function(e,t){return(e=document.createElement("div")).innerHTML="\n  <img src=".concat(t,' alt="">\n  <span class="services-modal__close">&#10006;</span>\n  '),e.className="sertDocMod",e.src=t,e.style.cssText="\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 100vh;\n  z-index: 9999;\n  display: none;\n  transition: all .5s linear 0s;\n  ",e.children[0].style.height="100vh",document.body.append(e),e},s=function(e){o.style.display="block",e.style.display="block",e.children[1].addEventListener("click",(function(){e.style.display="none",o.style.display="none"}))},a=function(e){o.addEventListener("click",(function(){o.style.display="none",e.style.display="none"}))};e=r(e,"images/documents/original/document4.jpg"),t=r(t,"images/documents/original/document4.jpg"),n=r(n,"images/documents/original/document4.jpg"),i[0].addEventListener("click",(function(t){t.preventDefault(),s(e),a(e)})),i[1].addEventListener("click",(function(e){e.preventDefault(),s(t),a(t)})),i[2].addEventListener("click",(function(e){e.preventDefault(),s(n),a(n)}))}(),s=document.querySelector(".smooth-scroll"),a=document.querySelector("#header"),s.style.display="none",window.addEventListener("scroll",(function(){var e=scrollY;e<600&&(s.style.display="none"),e>600&&(s.style.display="block")})),s.addEventListener("click",(function(){a.scrollIntoView({block:"start",behavior:"smooth"})})),function(){var e=document.querySelector("#calc");try{e.addEventListener("input",(function(e){var t=e.target;t.matches("input")&&(t.value=t.value.replace(/\D/g,""))}))}catch(e){}!function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,n=document.querySelector("#calc-type"),o=document.querySelector("#calc-type-material"),i=document.querySelector("#calc-input"),r=document.querySelector("#calc-total"),s=function(){var e=0;""!=i.value&&"--"!=n.value&&"--"!=o.value?(e=Math.round(+i.value*+n.value*+o.value*t),r.value=e):(r.placeholder="заполните все поля",r.value="заполните все поля")};try{e.addEventListener("change",(function(e){var t=e.target;(t.matches("select")||t.matches("input"))&&s()}))}catch(e){}}()}()})();