!function(e,n){"use strict";var t=function(e,n){var t=e.find(".bdt-panel-slider");if(!t.length)return;var i=t.find(".swiper-container"),r=t.data("settings"),o=t.data("widget-settings");const d=elementorFrontend.utils.swiper;if(async function(){await new d(i,r);r.pauseOnHover&&n(i).hover((function(){this.swiper.autoplay.stop()}),(function(){this.swiper.autoplay.start()}))}(),1==o.mouseInteractivity){var a=n(o.id).find(".bdt-panel-slide-item");n(a).each((e,t)=>{var i=n(t).get(0);new Parallax(i,{selector:".bdt-panel-slide-thumb",hoverOnly:!0,pointerEvents:!0})})}};jQuery(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/bdt-panel-slider.default",t),elementorFrontend.hooks.addAction("frontend/element_ready/bdt-panel-slider.bdt-middle",t),elementorFrontend.hooks.addAction("frontend/element_ready/bdt-panel-slider.always-visible",t)}))}(jQuery,window.elementorFrontend);