!function(){var e=document.querySelector(".dishes__slider"),o=document.getElementsByClassName("dishes__img").length,t=0,n=document.querySelector(".dishes__img").clientWidth,l=(o-1)*n,s=0,i=0;document.querySelector(".dishes__button--next").addEventListener("click",(function(){t+=n,console.log("firstoffset",t),t>l&&(t=0),e.style.left=-t+"px",document.querySelector(".dishes__button--next").blur()})),document.querySelector(".dishes__button--prev").addEventListener("click",(function(){(t-=n)<0&&(t=l),e.style.left=-t+"px",document.querySelector(".dishes__button--prev").blur()})),window.addEventListener("resize",(function(){console.log("beforResize",t),i=n,console.log("preSlyder",i),setTimeout((function(){n=document.querySelector(".dishes__img").clientWidth,console.log("stepSlider",n),l=(o-1)*n,console.log("positionSlyder",l),console.log("afterResize",t),s=t/i,console.log("position",s),t=n*s,console.log("offset",t),e.style.left=-t+"px",console.log("line",t)}),600)}))}();
//# sourceMappingURL=index.c1fa7e99.js.map
