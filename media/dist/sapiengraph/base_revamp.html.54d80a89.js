var e,t,o,a,n,l,d,i,r,c,s,u,p,m,f,h,g,v;e=document.querySelectorAll(".svg-shim > svg"),/MSIE \d|Trident.*rv:/.test(navigator.userAgent)&&[].forEach.call(e,function(e){var t,o,a,n;t=window.getComputedStyle(e,null).getPropertyValue("color"),o="data:image/svg+xml,"+(o=(o=(o=(o=(o=(o=(o=(new XMLSerializer).serializeToString(e)).replace(/currentColor/g,t)).replace(/\s\s+/g," ")).replace(/</g,"%3C")).replace(/>/g,"%3E")).replace(/#/g,"%23")).replace(/"/g,"'")),(a=document.createElement("img")).src=o,a.alt="...",(n=e.parentNode).appendChild(a),n.removeChild(e)}),"undefined"!=typeof AOS&&AOS.init({duration:700,easing:"ease-out-quad",once:!0,startEvent:"load"}),t=document.querySelectorAll("[data-choices]"),"undefined"!=typeof Choices&&t&&[].forEach.call(t,function(e){var t,o;t=e.dataset.choices?JSON.parse(e.dataset.choices):{},o=Object.assign({searchEnabled:!1,classNames:{containerInner:e.className,list:"none",listSingle:"none",listDropdown:"dropdown-menu",itemChoice:"dropdown-item",activeState:"show",selectedState:"active"}},t),new Choices(e,o)}),function(){var e=document.querySelectorAll('[data-toggle="countup"]');function t(e){var t=e.dataset.from?+e.dataset.from:null,o=e.dataset.to?+e.dataset.to:null,a=e.dataset.decimals?+e.dataset.decimals:null,n=e.dataset.duration?+e.dataset.duration:null,l=e.dataset.options?JSON.parse(e.dataset.options):null,d=new CountUp(e,t,o,a,n,l);d.error?console.error(d.error):(d.start(),e.classList.add("counted"))}"undefined"!=typeof CountUp&&e&&[].forEach.call(e,function(e){"countup:in"!==e.getAttribute("data-aos-id")&&t(e)}),document.addEventListener("aos:in:countup:in",function(e){if(e.detail instanceof Element)t(e.detail);else{var o=document.querySelectorAll('.aos-animate[data-aos-id="countup:in"]:not(.counted)');[].forEach.call(o,function(e){t(e)})}})}(),o=document.querySelectorAll(".navbar-nav .dropdown, .navbar-nav .dropright"),a=["mouseenter"],n=["mouseleave","click"],[].forEach.call(o,function(e){var t=e.querySelector(".dropdown-menu");a.forEach(function(o){e.addEventListener(o,function(){window.innerWidth<992||(t.classList.add("showing"),setTimeout(function(){t.classList.remove("showing"),t.classList.add("show")},1))})}),n.forEach(function(o){e.addEventListener(o,function(e){window.innerWidth<992||t.classList.contains("show")&&("click"===e.type&&e.target.closest(".dropdown-menu form")||(t.classList.add("showing"),t.classList.remove("show"),setTimeout(function(){t.classList.remove("showing")},200)))})})}),l=document.querySelectorAll("[data-dropzone]"),"undefined"!=typeof Dropzone&&l&&(Dropzone.autoDiscover=!1,Dropzone.thumbnailWidth=null,Dropzone.thumbnailHeight=null,[].forEach.call(l,function(e){var t,o,a;t=void 0,o=e.dataset.dropzone?JSON.parse(e.dataset.dropzone):{},a=Object.assign({previewsContainer:e.querySelector(".dz-preview"),previewTemplate:e.querySelector(".dz-preview").innerHTML,init:function(){this.on("addedfile",function(e){1==o.maxFiles&&t&&this.removeFile(t),t=e})}},o),e.querySelector(".dz-preview").innerHTML="",new Dropzone(e,a)})),jQuery().fancybox&&($.fancybox.defaults.image.preload=!1,$.fancybox.defaults.toolbar=!1,$.fancybox.defaults.clickContent=!1),d=document.querySelectorAll(".highlight"),"undefined"!=typeof hljs&&d&&[].forEach.call(d,function(e){hljs.highlightBlock(e)}),i=$("[data-isotope]"),$("[data-filter]").on("click",function(){var e=$(this),t=e.data("filter");$(e.data("target")).isotope({filter:t})}),i.imagesLoaded().progress(function(){i.isotope("layout")}),r=document.querySelectorAll('[data-toggle="map"]'),"undefined"!=typeof mapboxgl&&r&&[].forEach.call(r,function(e){var t,o;t=e.dataset.options,o=Object.assign({container:e,style:"mapbox://styles/mapbox/light-v9",scrollZoom:!1,interactive:!1},t=t?JSON.parse(t):{}),mapboxgl.accessToken="pk.eyJ1IjoiZ29vZHRoZW1lcyIsImEiOiJjanU5eHR4N2cybDU5NGVwOHZwNGprb3E0In0.msdw9q16dh8v4azJXUdiXg",new mapboxgl.Map(o)}),$(document.querySelectorAll(".modal")).on({"show.bs.modal":function(){var e;e=window.innerWidth-document.documentElement.clientWidth,document.documentElement.style.overflow="hidden",document.body.style.paddingRight=e+"px"},"hidden.bs.modal":function(){document.documentElement.style.overflow="",document.body.style.paddingRight=""}}),c=document.querySelectorAll(".navbar-togglable"),s=document.querySelectorAll(".navbar-collapse"),u=["load","scroll"],p=!1,[].forEach.call(c,function(e){u.forEach(function(t){window.addEventListener(t,function(){var t;(t=window.pageYOffset)&&!p&&(e.classList.remove("navbar-dark"),e.classList.add("navbar-light"),e.classList.add("bg-white"),p=!0),t||(e.classList.remove("navbar-light"),e.classList.remove("bg-white"),e.classList.add("navbar-dark"),p=!1)})})}),[].forEach.call(s,function(e){$(e).on({"show.bs.collapse":function(){var e;e=window.innerWidth-document.documentElement.clientWidth,document.documentElement.style.overflow="hidden",document.body.style.paddingRight=e+"px"},"hidden.bs.collapse":function(){document.documentElement.style.overflow="",document.body.style.paddingRight=""}})}),(m=document.querySelectorAll('[data-toggle="popover"]'))&&$(m).popover({template:'<div class="popover" role="tooltip"><div class="arrow"></div><h6 class="popover-header text-uppercase"></h6><div class="popover-body"></div></div>'}),f=document.querySelector('[data-toggle="price"]'),"undefined"!=typeof CountUp&&f&&f.addEventListener("change",function(e){var t,o,a,n;o=(t=e.target).checked,a=t.dataset.target,n=document.querySelectorAll(a),[].forEach.call(n,function(e){var t=e.dataset.annual,a=e.dataset.monthly,n=e.dataset.decimals?e.dataset.decimals:null,l=e.dataset.duration?e.dataset.duration:1,d=e.dataset.options?JSON.parse(e.dataset.options):null,i=o?new CountUp(e,t,a,n,l,d):new CountUp(e,a,t,n,l,d);i.error?console.error(i.error):i.start()})}),h=document.querySelectorAll("[data-quill]"),"undefined"!=typeof Quill&&h&&[].forEach.call(h,function(e){var t;t=Object.assign({modules:{toolbar:[["bold","italic"],["link","blockquote","code","image"],[{list:"ordered"},{list:"bullet"}]]},theme:"snow"},e.dataset.quill?JSON.parse(e.dataset.quill):{}),new Quill(e,t)}),"undefined"!=typeof SmoothScroll&&new SmoothScroll('[data-toggle="smooth-scroll"]',{header:".navbar.fixed-top",offset:function(e,t){return t.dataset.offset?t.dataset.offset:24}}),(g=document.querySelectorAll('[data-toggle="tooltip"]'))&&$(g).tooltip(),v=document.querySelectorAll('[data-toggle="typed"]'),"undefined"!=typeof Typed&&v&&[].forEach.call(v,function(e){var t;t=e.dataset.options,new Typed(e,Object.assign({typeSpeed:40,backSpeed:40,backDelay:1e3,loop:!0},t=t?JSON.parse(t):{}))});
//# sourceMappingURL=base_revamp.html.54d80a89.js.map