!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("6JpON");r("h6c0i"),document.querySelector(".form").addEventListener("submit",(function(n){var t=function(n){var t,o,u=r+c*(n-1);(t=n,o=u,new Promise((function(e,n){var r=Math.random()>.3;setTimeout((function(){r?e("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms")):n("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}),o)}))).then((function(){e(i).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(u,"ms"))})).catch((function(){e(i).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(u,"ms"))}))};n.preventDefault();for(var o=n.currentTarget,r=Number(o.elements.delay.value),c=Number(o.elements.step.value),u=Number(o.elements.amount.value),a=1;a<=u;a+=1)t(a)}))}();
//# sourceMappingURL=03-promises.ee6c3ce1.js.map
