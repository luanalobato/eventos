
<!DOCTYPE html>
<html lang="pt">
<head>
  
  <meta charset='utf-8'>
  <meta name="viewport" content="width=device-width, initial-scale=1" id="wixDesktopViewport" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="generator" content="Wix.com Website Builder"/>

  <link rel="icon" sizes="192x192" href="https://static.parastorage.com/client/pfavico.ico" type="image/x-icon"/>
  <link rel="shortcut icon" href="https://static.parastorage.com/client/pfavico.ico" type="image/x-icon"/>
  <link rel="apple-touch-icon" href="https://static.parastorage.com/client/pfavico.ico" type="image/x-icon"/>

  <!-- Safari Pinned Tab Icon -->
  <!-- <link rel="mask-icon" href="https://static.parastorage.com/client/pfavico.ico"> -->

  <!-- Original trials -->
  

  <!-- Legacy Polyfills -->
  <script nomodule="" src="https://static.parastorage.com/unpkg/core-js-bundle@3.2.1/minified.js"></script>
  <script nomodule="" src="https://static.parastorage.com/unpkg/focus-within-polyfill@5.0.9/dist/focus-within-polyfill.js"></script>

  <script nomodule="" src="https://polyfill-fastly.io/v3/polyfill.min.js?features=fetch"></script>

  <!-- Performance API Polyfills -->
  <script>
  (function () {
    var noop = function noop() {};
    if ("performance" in window === false) {
      window.performance = {};
    }
    window.performance.mark = performance.mark || noop;
    window.performance.measure = performance.measure || noop;
    if ("now" in window.performance === false) {
      var nowOffset = Date.now();
      if (performance.timing && performance.timing.navigationStart) {
        nowOffset = performance.timing.navigationStart;
      }
      window.performance.now = function now() {
        return Date.now() - nowOffset;
      };
    }
  })();
  </script>

  <!-- Globals Definitions -->
  <script>
    (function () {
      var now = Date.now()
      window.initialTimestamps = {
        initialTimestamp: now,
        initialRequestTimestamp: Math.round(performance.timeOrigin ? performance.timeOrigin : now - performance.now())
      }

      window.thunderboltTag = "QA_READY"
      window.thunderboltVersion = "1.14829.0"
    })();
  </script>

    



  <!-- Essential Viewer Model -->
  <script type="application/json" id="wix-essential-viewer-model">{"fleetConfig":{"fleetName":"thunderbolt-renderer-gradual","type":"Rollout","code":1},"mode":{"qa":false,"enableTestApi":false,"debug":false,"ssrIndicator":false,"ssrOnly":false,"siteAssetsFallback":"enable"},"componentsLibrariesTopology":[{"artifactId":"editor-elements","namespace":"wixui","url":"https:\/\/static.parastorage.com\/services\/editor-elements\/1.13031.0"},{"artifactId":"editor-elements","namespace":"dsgnsys","url":"https:\/\/static.parastorage.com\/services\/editor-elements\/1.13031.0"}],"siteFeaturesConfigs":{"sessionManager":{"isRunningInDifferentSiteContext":false}},"language":{"userLanguage":"pt"},"siteAssets":{"clientTopology":{"mediaRootUrl":"https:\/\/static.wixstatic.com","staticMediaUrl":"https:\/\/static.wixstatic.com\/media","moduleRepoUrl":"https:\/\/static.parastorage.com\/unpkg","fileRepoUrl":"https:\/\/static.parastorage.com\/services","siteAssetsUrl":"https:\/\/siteassets.parastorage.com","pageJsonServerUrls":["https:\/\/pages.parastorage.com","https:\/\/staticorigin.wixstatic.com","https:\/\/www.sheminimalist.com","https:\/\/fallback.wix.com\/wix-html-editor-pages-webapp\/page"],"pathOfTBModulesInFileRepoForFallback":"wix-thunderbolt\/dist\/"}},"siteFeatures":["assetsLoader","businessLogger","captcha","clickHandlerRegistrar","commonConfig","componentsLoader","componentsRegistry","consentPolicy","cyclicTabbing","environmentWixCodeSdk","environment","locationWixCodeSdk","navigationManager","navigationPhases","ooi","pages","panorama","renderer","reporter","router","scrollRestoration","seoWixCodeSdk","seo","sessionManager","siteMembersWixCodeSdk","siteMembers","siteScrollBlocker","siteWixCodeSdk","stores","structureApi","thunderboltInitializer","tpaCommons","translations","usedPlatformApis","warmupData","windowMessageRegistrar","windowWixCodeSdk","wixEmbedsApi","componentsReact","platform"],"site":{"externalBaseUrl":"https:\/\/www.sheminimalist.com","isSEO":false},"media":{"staticMediaUrl":"https:\/\/static.wixstatic.com\/media","mediaRootUrl":"https:\/\/static.wixstatic.com\/","staticVideoUrl":"https:\/\/video.wixstatic.com\/"},"requestUrl":"https:\/\/www.sheminimalist.com\/","rollout":{"siteAssetsVersionsRollout":false,"isDACRollout":0,"isTBRollout":true},"commonConfig":{"brand":"wix","host":"VIEWER","bsi":"","consentPolicy":{},"consentPolicyHeader":{},"siteRevision":"4","renderingFlow":"NONE","language":"pt","locale":"pt-br"},"interactionSampleRatio":0.01,"dynamicModelUrl":"https:\/\/www.sheminimalist.com\/_api\/v2\/dynamicmodel","accessTokensUrl":"https:\/\/www.sheminimalist.com\/_api\/v1\/access-tokens","isExcludedFromSecurityExperiments":false,"experiments":{"specs.thunderbolt.hardenClientGlobals_Array_URL_JSON":true,"specs.thunderbolt.hardenClientGlobals_Text":true,"specs.thunderbolt.hardenWindowOpen":true,"specs.thunderbolt.removeWixEmbedsAppToken":true}}</script>
  <script>window.viewerModel = JSON.parse(document.getElementById('wix-essential-viewer-model').textContent)</script>

  
    <script data-url="https://static.parastorage.com/services/wix-thunderbolt/dist/handleAccessTokens.inline.5a67b563.bundle.min.js">!function(){"use strict";const e=e=>"string"==typeof e?decodeURIComponent(e).toLowerCase().trimStart():e,t="client-session-bind",o="client-binding",s="tbReady",r="security_overrideGlobals",n=[t,o,"svSession","smSession","server-session-bind","wixSession2"].map((e=>e.toLowerCase())),i=Object.getOwnPropertyDescriptor(Document.prototype,"cookie"),{isExcludedFromSecurityExperiments:c,experiments:a,siteFeaturesConfigs:d,accessTokensUrl:l}=window.viewerModel,m=l,u=document.cookie.split(";").map((e=>e.trim())).filter((e=>e.startsWith(t)))[0]?.split("=")[1],p={};if(u&&(p[o]=u,(()=>{const e=`${t}=; domain=${location.hostname}; max-age=0; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;i.set.call(document,e)})()),a["specs.thunderbolt.hardenFetchAndXHR"]&&!c){let w=fetch;function f(e){const{logger:t}=e.detail;try{window.tb.init({fetch:w,fetchHeaders:p})}catch(e){const o=new Error("TB003");t.captureError(o,{tags:{feature:"thunderbolt-security"}}),t.meter(`${r}_${o.message}`,{paramsOverrides:{evid:"26",errorType:r,eventString:o.message}}),window?.viewerModel?.mode.debug&&console.error(e)}finally{removeEventListener(s,f),w=fetch}}addEventListener(s,f)}else window.fetchDynamicModel=()=>d.sessionManager.isRunningInDifferentSiteContext?Promise.resolve({}):fetch(m,{credentials:"same-origin",headers:p}).then((function(e){if(!e.ok)throw new Error(`[${e.status}]${e.statusText}`);return e.json()})),window.dynamicModelPromise=window.fetchDynamicModel();a["specs.thunderbolt.hardenCookieAccess"]&&Object.defineProperty(document,"cookie",{get(){return i.get.call(document).split(";").filter((t=>{const o=e(t.split("=")[0]);return!n.map((e=>e.toLowerCase())).includes(o)})).join(";").trimStart()},set(t){const o=e(t.split(";")[0]);n.every((e=>!o.startsWith(e.toLowerCase())))&&i.set.call(document,t)},enumerable:!0,configurable:!1})}();
//# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/handleAccessTokens.inline.5a67b563.bundle.min.js.map</script>
  

  <script>
    window.commonConfig = viewerModel.commonConfig
    
  </script>


  <!-- initCustomElements -->
  <meta name="wix-dynamic-custom-elements" content="DropDownMenu">

  <!-- Initial CSS -->
  <style data-url="https://static.parastorage.com/services/wix-thunderbolt/dist/main.c063b4f9.min.css">body.device-mobile-optimized{overflow-x:hidden;overflow-y:scroll}body.device-mobile-optimized:not(.responsive) #SITE_CONTAINER{margin-left:auto;margin-right:auto;overflow-x:visible;position:relative;width:320px}body.device-mobile-optimized:not(.responsive):not(.blockSiteScrolling) #SITE_CONTAINER{margin-top:0}body.device-mobile-optimized>*{max-width:100%!important}body.device-mobile-optimized #site-root{overflow-x:hidden;overflow-y:hidden}@supports(overflow:clip){body.device-mobile-optimized #site-root{overflow-x:clip;overflow-y:clip}}body.device-mobile-non-optimized:not(.removeWrappers) #SITE_CONTAINER #site-root{overflow-x:hidden;overflow-y:auto}body.device-mobile-non-optimized.removeWrappers #site-root{overflow-x:clip}body.device-mobile-non-optimized.fullScreenMode{background-color:#5f6360}body.device-mobile-non-optimized.fullScreenMode #MOBILE_ACTIONS_MENU,body.device-mobile-non-optimized.fullScreenMode #SITE_BACKGROUND,body.device-mobile-non-optimized.fullScreenMode #site-root,body.fullScreenMode #WIX_ADS{visibility:hidden}body.fullScreenMode{overflow-x:hidden!important;overflow-y:hidden!important}body.fullScreenMode.device-mobile-optimized #TINY_MENU{opacity:0;pointer-events:none}body.fullScreenMode-scrollable.device-mobile-optimized{overflow-x:hidden!important;overflow-y:auto!important}body.fullScreenMode-scrollable.device-mobile-optimized #masterPage,body.fullScreenMode-scrollable.device-mobile-optimized #site-root{overflow-x:hidden!important;overflow-y:hidden!important}body.fullScreenMode-scrollable.device-mobile-optimized #SITE_BACKGROUND,body.fullScreenMode-scrollable.device-mobile-optimized #masterPage{height:auto!important}body.fullScreenMode-scrollable.device-mobile-optimized #masterPage.mesh-layout{height:0!important}body.blockSiteScrolling,body.siteScrollingBlocked{position:fixed;width:100%}body.blockSiteScrolling #SITE_CONTAINER{margin-top:calc(var(--blocked-site-scroll-margin-top)*-1)}body.blockSiteScrolling:not(.responsive) #WIX_ADS{margin-top:var(--blocked-site-scroll-margin-top)}@keyframes slide-horizontal-new{0%{transform:translateX(100%)}}@keyframes slide-horizontal-old{80%{opacity:1}to{opacity:0;transform:translateX(-100%)}}@keyframes slide-vertical-new{0%{transform:translateY(-100%)}}@keyframes slide-vertical-old{80%{opacity:1}to{opacity:0;transform:translateY(100%)}}@keyframes out-in-new{0%{opacity:0}}@keyframes out-in-old{to{opacity:0}}html[data-page-transition=SlideHorizontal]::view-transition-old(page-group){animation:slide-horizontal-old .6s cubic-bezier(.83,0,.17,1) forwards;mix-blend-mode:normal}html[data-page-transition=SlideHorizontal]::view-transition-new(page-group){animation:slide-horizontal-new .6s cubic-bezier(.83,0,.17,1) backwards;mix-blend-mode:normal}html[data-page-transition=SlideVertical]::view-transition-old(page-group){animation:slide-vertical-old .6s cubic-bezier(.83,0,.17,1) forwards;mix-blend-mode:normal}html[data-page-transition=SlideVertical]::view-transition-new(page-group){animation:slide-vertical-new .6s cubic-bezier(.83,0,.17,1) backwards;mix-blend-mode:normal}html[data-page-transition=OutIn]::view-transition-old(page-group){animation:out-in-old .35s cubic-bezier(.64,0,.78,0) forwards}html[data-page-transition=OutIn]::view-transition-new(page-group){animation:out-in-new .35s cubic-bezier(.22,1,.36,1) .35s backwards}@media(prefers-reduced-motion:reduce){::view-transition-group(*),::view-transition-new(*),::view-transition-old(*){animation:none!important}}body,html{background:transparent;border:0;margin:0;outline:0;padding:0;vertical-align:baseline}body{--scrollbar-width:0px;font-family:Arial,Helvetica,sans-serif;font-size:10px}body,html{height:100%}body{overflow-x:auto;overflow-y:scroll}body:not(.responsive) #site-root{min-width:var(--site-width);width:100%}body:not([data-js-loaded]) [data-hide-prejs]{visibility:hidden}#SITE_CONTAINER{position:relative}:root{--one-unit:1vw;--section-max-width:9999px}@supports(-webkit-appearance:none) and (stroke-color:transparent){:root{--safari-sticky-fix:opacity}}@supports(container-type:inline-size){:root{--one-unit:1cqw}}[id^=oldHoverBox-]{mix-blend-mode:plus-lighter;transition:opacity .5s ease,visibility .5s ease}[data-mesh-id$=inlineContent-gridContainer]:has(>[id^=oldHoverBox-]){isolation:isolate}</style>
<style data-url="https://static.parastorage.com/services/wix-thunderbolt/dist/main.renderer.30f71ad7.min.css">a,abbr,acronym,address,applet,b,big,blockquote,button,caption,center,cite,code,dd,del,dfn,div,dl,dt,em,fieldset,font,footer,form,h1,h2,h3,h4,h5,h6,header,i,iframe,img,ins,kbd,label,legend,li,nav,object,ol,p,pre,q,s,samp,section,small,span,strike,strong,sub,sup,table,tbody,td,tfoot,th,thead,title,tr,tt,u,ul,var{background:transparent;border:0;margin:0;outline:0;padding:0;vertical-align:baseline}input,select,textarea{box-sizing:border-box;font-family:Helvetica,Arial,sans-serif}ol,ul{list-style:none}blockquote,q{quotes:none}ins{text-decoration:none}del{text-decoration:line-through}table{border-collapse:collapse;border-spacing:0}a{cursor:pointer;text-decoration:none}.testStyles{overflow-y:hidden}.reset-button{-webkit-appearance:none;background:none;border:0;color:inherit;font:inherit;line-height:normal;outline:0;overflow:visible;padding:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}:focus{outline:none}#site-root{margin:0 auto;min-height:100%;position:relative;top:var(--wix-ads-height)}#site-root img:not([src]){visibility:hidden}#site-root svg img:not([src]){visibility:visible}.auto-generated-link{color:inherit}#SCROLL_TO_BOTTOM,#SCROLL_TO_TOP{height:0}.has-click-trigger{cursor:pointer}.fullScreenOverlay{bottom:0;display:flex;justify-content:center;left:0;overflow-y:hidden;position:fixed;right:0;top:-60px;z-index:1005}.fullScreenOverlay>.fullScreenOverlayContent{bottom:0;left:0;margin:0 auto;overflow:hidden;position:absolute;right:0;top:60px;transform:translateZ(0)}[data-mesh-id$=centeredContent],[data-mesh-id$=form],[data-mesh-id$=inlineContent]{pointer-events:none;position:relative}[data-mesh-id$=-gridWrapper],[data-mesh-id$=-rotated-wrapper]{pointer-events:none}[data-mesh-id$=-gridContainer]>*,[data-mesh-id$=-rotated-wrapper]>*,[data-mesh-id$=inlineContent]>:not([data-mesh-id$=-gridContainer]){pointer-events:auto}.device-mobile-optimized #masterPage.mesh-layout #SOSP_CONTAINER_CUSTOM_ID{grid-area:2/1/3/2;-ms-grid-row:2;position:relative}#masterPage.mesh-layout{-ms-grid-rows:max-content max-content min-content max-content;-ms-grid-columns:100%;align-items:start;display:-ms-grid;display:grid;grid-template-columns:100%;grid-template-rows:max-content max-content min-content max-content;justify-content:stretch}#masterPage.mesh-layout #PAGES_CONTAINER,#masterPage.mesh-layout #SITE_FOOTER-placeholder,#masterPage.mesh-layout #SITE_FOOTER_WRAPPER,#masterPage.mesh-layout #SITE_HEADER-placeholder,#masterPage.mesh-layout #SITE_HEADER_WRAPPER,#masterPage.mesh-layout #SOSP_CONTAINER_CUSTOM_ID[data-state~=mobileView],#masterPage.mesh-layout #soapAfterPagesContainer,#masterPage.mesh-layout #soapBeforePagesContainer{-ms-grid-row-align:start;-ms-grid-column-align:start;-ms-grid-column:1}#masterPage.mesh-layout #SITE_HEADER-placeholder,#masterPage.mesh-layout #SITE_HEADER_WRAPPER{grid-area:1/1/2/2;-ms-grid-row:1}#masterPage.mesh-layout #PAGES_CONTAINER,#masterPage.mesh-layout #soapAfterPagesContainer,#masterPage.mesh-layout #soapBeforePagesContainer{grid-area:3/1/4/2;-ms-grid-row:3}#masterPage.mesh-layout #soapAfterPagesContainer,#masterPage.mesh-layout #soapBeforePagesContainer{width:100%}#masterPage.mesh-layout #PAGES_CONTAINER{align-self:stretch}#masterPage.mesh-layout main#PAGES_CONTAINER{display:block}#masterPage.mesh-layout #SITE_FOOTER-placeholder,#masterPage.mesh-layout #SITE_FOOTER_WRAPPER{grid-area:4/1/5/2;-ms-grid-row:4}#masterPage.mesh-layout #SITE_PAGES,#masterPage.mesh-layout [data-mesh-id=PAGES_CONTAINERcenteredContent],#masterPage.mesh-layout [data-mesh-id=PAGES_CONTAINERinlineContent]{height:100%}#masterPage.mesh-layout.desktop>*{width:100%}#masterPage.mesh-layout #PAGES_CONTAINER,#masterPage.mesh-layout #SITE_FOOTER_WRAPPER,#masterPage.mesh-layout #SITE_HEADER_WRAPPER,#masterPage.mesh-layout #SITE_PAGES,#masterPage.mesh-layout #masterPageinlineContent,#masterPage.mesh-layout:not(.one-doc) #SITE_FOOTER,#masterPage.mesh-layout:not(.one-doc) #SITE_HEADER{position:relative}#masterPage.mesh-layout.remove-wrappers #SITE_HEADER{grid-area:1/1/2/2}#masterPage.mesh-layout.remove-wrappers #SITE_FOOTER{grid-area:4/1/5/2}[data-z-counter]{z-index:0}[data-z-counter="0"]{z-index:auto}.wixSiteProperties{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:root{--wst-button-color-fill-primary:rgb(var(--color_48));--wst-button-color-border-primary:rgb(var(--color_49));--wst-button-color-text-primary:rgb(var(--color_50));--wst-button-color-fill-primary-hover:rgb(var(--color_51));--wst-button-color-border-primary-hover:rgb(var(--color_52));--wst-button-color-text-primary-hover:rgb(var(--color_53));--wst-button-color-fill-primary-disabled:rgb(var(--color_54));--wst-button-color-border-primary-disabled:rgb(var(--color_55));--wst-button-color-text-primary-disabled:rgb(var(--color_56));--wst-button-color-fill-secondary:rgb(var(--color_57));--wst-button-color-border-secondary:rgb(var(--color_58));--wst-button-color-text-secondary:rgb(var(--color_59));--wst-button-color-fill-secondary-hover:rgb(var(--color_60));--wst-button-color-border-secondary-hover:rgb(var(--color_61));--wst-button-color-text-secondary-hover:rgb(var(--color_62));--wst-button-color-fill-secondary-disabled:rgb(var(--color_63));--wst-button-color-border-secondary-disabled:rgb(var(--color_64));--wst-button-color-text-secondary-disabled:rgb(var(--color_65));--wst-color-fill-base-1:rgb(var(--color_36));--wst-color-fill-base-2:rgb(var(--color_37));--wst-color-fill-base-shade-1:rgb(var(--color_38));--wst-color-fill-base-shade-2:rgb(var(--color_39));--wst-color-fill-base-shade-3:rgb(var(--color_40));--wst-color-fill-accent-1:rgb(var(--color_41));--wst-color-fill-accent-2:rgb(var(--color_42));--wst-color-fill-accent-3:rgb(var(--color_43));--wst-color-fill-accent-4:rgb(var(--color_44));--wst-color-fill-background-primary:rgb(var(--color_11));--wst-color-fill-background-secondary:rgb(var(--color_12));--wst-color-text-primary:rgb(var(--color_15));--wst-color-text-secondary:rgb(var(--color_14));--wst-color-action:rgb(var(--color_18));--wst-color-disabled:rgb(var(--color_39));--wst-color-title:rgb(var(--color_45));--wst-color-subtitle:rgb(var(--color_46));--wst-color-line:rgb(var(--color_47));--wst-font-style-h2:var(--font_2);--wst-font-style-h3:var(--font_3);--wst-font-style-h4:var(--font_4);--wst-font-style-h5:var(--font_5);--wst-font-style-h6:var(--font_6);--wst-font-style-body-large:var(--font_7);--wst-font-style-body-medium:var(--font_8);--wst-font-style-body-small:var(--font_9);--wst-font-style-body-x-small:var(--font_10)}</style>

  <meta name="format-detection" content="telephone=no">
  <meta name="skype_toolbar" content="skype_toolbar_parser_compatible">
  
  

  <!-- Overriding Globals JS Head -->
  
    
      <script data-url="https://static.parastorage.com/services/wix-thunderbolt/dist/overrideGlobals.inline.15d3b9a0.bundle.min.js">!function(){"use strict";const e=e=>"string"==typeof e?decodeURIComponent(e).toLowerCase().trimStart():e,t=(e,t,r,o)=>{"object"==typeof t&&"function"==typeof t.get&&"function"==typeof t.set?Object.defineProperty(r||globalThis,e,{get:t.get,set:t.set,configurable:!1,enumerable:o||!1}):Object.defineProperty(r||globalThis,e,{value:t,writable:!1,configurable:!1,enumerable:o||!1})},r=()=>{const e=globalThis.open,t=document.open,r=(t,r,o)=>{const n="string"!=typeof t,s=e.call(window,t,r,o);return n||((c=t).startsWith("//")&&/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g.test(`${location.protocol}:${c}`)&&(c=`${location.protocol}${c}`),!c.startsWith("http")||new URL(c).hostname===location.hostname)?{}:s;var c};defineStrictProperty("open",r,globalThis,!0),defineStrictProperty("open",((e,o,n)=>e?r(e,o,n):t.call(document,e,o,n)),document,!0)},o=document.createElement,n=(t,r)=>{const n=o.call(document,t,r),s=Element.prototype.setAttribute,c=Element.prototype.setAttributeNS;if("iframe"===e(t)){globalThis.defineStrictProperty("srcdoc",{get:()=>{},set:()=>{console.error("`srcdoc` is not allowed in iframe elements.")}},n,!1);const e=function(e,t){"srcdoc"!==e.toLowerCase()?s.call(n,e,t):console.error("`srcdoc` attribute is not allowed to be set.")},t=function(e,t,r){"srcdoc"!==t.toLowerCase()?c.call(n,e,t,r):console.error("`srcdoc` attribute is not allowed to be set.")};n.setAttribute=e,n.setAttributeNS=t}return n},s="client-binding",c="security_overrideGlobals",i=["/_api/v1/access-tokens","/_api/v2/dynamicmodel"],a=e=>(e instanceof Headers?e.forEach(((t,r)=>{decodeURIComponent(r).toLowerCase()===s&&e.delete(r)})):Object.keys(e).forEach((t=>{decodeURIComponent(t).toLowerCase()===s&&delete e[t]})),e),l=t=>{let r=!0;const o=(e=>{let t,r;if(globalThis.Request&&e instanceof Request)t=e.url;else{if("function"!=typeof e?.toString)throw new Error("Unsupported type for url");t=e.toString()}try{return new URL(t).pathname}catch(e){return r=t.replace(/#.+/gi,"").split("?").shift(),r.startsWith("/")?r:`/${r}`}})(t),n=e(o);return i.some((e=>n.includes(e)))&&(r=!1),r},d=(e=globalThis)=>{const t=fetch;e.defineStrictProperty("fetch",(function(){const r=(o=arguments,globalThis.Request&&o[0]instanceof Request&&o[0]?.headers?a(o[0].headers):o[1]?.headers&&a(o[1].headers),o);var o;return l(arguments[0])?t.apply(e,Array.from(r)):new Promise(((e,t)=>{const r=new Error("TB002");window.fedops?.reportError(r,c),t(r)}))}))};performance.mark("overrideGlobals started");const{isExcludedFromSecurityExperiments:p,experiments:u}=window.viewerModel;try{((e=globalThis)=>{Object.defineProperty(e,"defineStrictProperty",{value:t,writable:!1,enumerable:!1,configurable:!1})})(),u["specs.thunderbolt.hardenWindowOpen"]&&r(),u["specs.thunderbolt.hardenIFrames"]&&!p&&globalThis.defineStrictProperty("createElement",n,document,!0),u["specs.thunderbolt.hardenFetchAndXHR"]&&!p&&(d(),((e=globalThis)=>{const t=XMLHttpRequest;e.defineStrictProperty("XMLHttpRequest",(function(){const e=new t,r=e.open,o=e.setRequestHeader;return e.open=function(){if(arguments.length<2||l(arguments[1]))return r.apply(e,Array.from(arguments));{const e=new Error("TB002");throw window.fedops?.reportError(e,c),e}},e.setRequestHeader=function(t,r){decodeURIComponent(t).toLowerCase()!==s&&o.call(e,t,r)},e}))})()),(e=>{let t=[];const{experiments:r}=window.viewerModel;r["specs.thunderbolt.hardenClientGlobals_Text"]&&(t=t.concat(["TextEncoder","TextDecoder"])),r["specs.thunderbolt.hardenClientGlobals_EventTarget"]&&!e&&(t=t.concat(["XMLHttpRequestEventTarget","EventTarget"])),r["specs.thunderbolt.hardenClientGlobals_Array_URL_JSON"]&&(t=t.concat(["Array","URL","JSON"])),r["specs.thunderbolt.hardenClientGlobals_EventListener"]&&!e&&(t=t.concat(["addEventListener","removeEventListener"])),r["specs.thunderbolt.hardenEncodingDecoding"]&&(t=t.concat(["encodeURI","encodeURIComponent","decodeURI","decodeURIComponent"])),r["specs.thunderbolt.hardenStringAndNumber"]&&(t=t.concat(["String","Number"])),r["specs.thunderbolt.hardenObject"]&&t.push("Object"),t.forEach((t=>{const r=Object.freeze(globalThis[t]);r.hasOwnProperty("prototype")&&"Array"!==t&&Object.freeze(r.prototype),["addEventListener","removeEventListener"].includes(t)&&!e&&globalThis.defineStrictProperty(t,document[t],document,!0),globalThis.defineStrictProperty(t,globalThis[t],globalThis,!0)}))})(p),u["specs.thunderbolt.hardenTimeout"]&&!p&&(defineStrictProperty("preventStringArgument",((e,t,r)=>{const o=r||globalThis,n=o[e];defineStrictProperty(e,(function(){const r=Array.from(arguments);if("string"!=typeof r[t])return n.apply(o,r);console.warn(`Calling ${e} with a String Argument at index ${t} is not allowed`)}),o)})),preventStringArgument("setTimeout",0),preventStringArgument("setInterval",0))}catch(e){window?.viewerModel?.mode.debug&&console.error(e);const t=new Error("TB006");window.fedops?.reportError(t,"security_overrideGlobals"),window.Sentry?window.Sentry.captureException(t):globalThis.defineStrictProperty("sentryBuffer",[t],window,!1)}performance.mark("overrideGlobals ended")}();
//# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/overrideGlobals.inline.15d3b9a0.bundle.min.js.map</script>
    
  

  

  
      <!--pageHtmlEmbeds.head start-->
      <script type="wix/htmlEmbeds" id="pageHtmlEmbeds.head start"></script>
    
      <script type="wix/htmlEmbeds" id="pageHtmlEmbeds.head end"></script>
      <!--pageHtmlEmbeds.head end-->
  

  <!-- head performance data start -->
  
  <!-- head performance data end -->
  

    

<meta http-equiv="X-Wix-Meta-Site-Id" content="6b0a6bee-31a6-429c-a658-14585b8be08e">
<meta http-equiv="X-Wix-Application-Instance-Id" content="bc3481f0-99f4-4688-a477-89ad817126b6">

    <meta http-equiv="X-Wix-Published-Version" content="4"/>



    <meta http-equiv="etag" content="bug"/>

<!-- render-head end -->

<style data-href="https://static.parastorage.com/services/editor-elements-library/dist/thunderbolt/rb_wixui.thunderbolt_bootstrap-responsive.22c38c29.min.css">.r4OX7l,.xTjc1A{box-sizing:border-box;height:100%;overflow:visible;position:relative;width:auto}.r4OX7l[data-state~=header] a,.r4OX7l[data-state~=header] div,[data-state~=header].xTjc1A a,[data-state~=header].xTjc1A div{cursor:default!important}.r4OX7l .UiHgGh,.xTjc1A .UiHgGh{display:inline-block;height:100%;width:100%}.xTjc1A{--display:inline-block;cursor:pointer;display:var(--display);font:var(--fnt,var(--font_1))}.xTjc1A .yRj2ms{padding:0 var(--pad,5px)}.xTjc1A .JS76Uv{color:rgb(var(--txt,var(--color_15,color_15)));display:inline-block;padding:0 10px;transition:var(--trans,color .4s ease 0s)}.xTjc1A[data-state~=drop]{display:block;width:100%}.xTjc1A[data-state~=drop] .JS76Uv{padding:0 .5em}.xTjc1A[data-state~=link]:hover .JS76Uv,.xTjc1A[data-state~=over] .JS76Uv{color:rgb(var(--txth,var(--color_14,color_14)));transition:var(--trans,color .4s ease 0s)}.xTjc1A[data-state~=selected] .JS76Uv{color:rgb(var(--txts,var(--color_14,color_14)));transition:var(--trans,color .4s ease 0s)}.NHM1d1{overflow-x:hidden}.NHM1d1 .R_TAzU{display:flex;flex-direction:column;height:100%;width:100%}.NHM1d1 .R_TAzU .aOF1ks{flex:1}.NHM1d1 .R_TAzU .y7qwii{height:calc(100% - (var(--menuTotalBordersY, 0px)));overflow:visible;white-space:nowrap;width:calc(100% - (var(--menuTotalBordersX, 0px)))}.NHM1d1 .R_TAzU .y7qwii .Tg1gOB{display:inline-block}.NHM1d1 .R_TAzU .y7qwii .mvZ3NH{display:block;width:100%}.NHM1d1 .h3jCPd{display:block;opacity:1;z-index:99999}.NHM1d1 .h3jCPd .wkJ2fp{display:inherit;overflow:visible;visibility:inherit;white-space:nowrap;width:auto}.NHM1d1 .h3jCPd.DlGBN0{transition:visibility;transition-delay:.2s;visibility:visible}.NHM1d1 .h3jCPd .p90CkU{display:inline-block}.NHM1d1 .vh74Xw{display:none}.XwCBRN>nav{bottom:0;left:0;right:0;top:0}.XwCBRN .h3jCPd,.XwCBRN .y7qwii,.XwCBRN>nav{position:absolute}.XwCBRN .h3jCPd{margin-top:7px;visibility:hidden}.XwCBRN .h3jCPd[data-dropMode=dropUp]{margin-bottom:7px;margin-top:0}.XwCBRN .wkJ2fp{background-color:rgba(var(--bgDrop,var(--color_11,color_11)),var(--alpha-bgDrop,1));border-radius:var(--rd,0);box-shadow:var(--shd,0 1px 4px rgba(0,0,0,.6))}.P0dCOY .PJ4KCX{background-color:rgba(var(--bg,var(--color_11,color_11)),var(--alpha-bg,1));bottom:0;left:0;overflow:hidden;position:absolute;right:0;top:0}.d7EBK2{border-radius:var(--overflow-wrapper-border-radius)}</style>
<style data-href="https://static.parastorage.com/services/editor-elements-library/dist/thunderbolt/rb_wixui.thunderbolt_bootstrap.adc9d802.min.css">.J6KGih{cursor:pointer}.sNF2R0{opacity:0}.hLoBV3{transition:opacity var(--transition-duration) cubic-bezier(.37,0,.63,1)}.Rdf41z,.hLoBV3{opacity:1}.ftlZWo{transition:opacity var(--transition-duration) cubic-bezier(.37,0,.63,1)}.ATGlOr,.ftlZWo{opacity:0}.KQSXD0{transition:opacity var(--transition-duration) cubic-bezier(.64,0,.78,0)}.KQSXD0,.pagQKE{opacity:1}._6zG5H{opacity:0;transition:opacity var(--transition-duration) cubic-bezier(.22,1,.36,1)}.BB49uC{transform:translateX(100%)}.j9xE1V{transition:transform var(--transition-duration) cubic-bezier(.87,0,.13,1)}.ICs7Rs,.j9xE1V{transform:translateX(0)}.DxijZJ{transition:transform var(--transition-duration) cubic-bezier(.87,0,.13,1)}.B5kjYq,.DxijZJ{transform:translateX(-100%)}.cJijIV{transition:transform var(--transition-duration) cubic-bezier(.87,0,.13,1)}.cJijIV,.hOxaWM{transform:translateX(0)}.T9p3fN{transform:translateX(100%);transition:transform var(--transition-duration) cubic-bezier(.87,0,.13,1)}.qDxYJm{transform:translateY(100%)}.aA9V0P{transition:transform var(--transition-duration) cubic-bezier(.87,0,.13,1)}.YPXPAS,.aA9V0P{transform:translateY(0)}.Xf2zsA{transition:transform var(--transition-duration) cubic-bezier(.87,0,.13,1)}.Xf2zsA,.y7Kt7s{transform:translateY(-100%)}.EeUgMu{transition:transform var(--transition-duration) cubic-bezier(.87,0,.13,1)}.EeUgMu,.fdHrtm{transform:translateY(0)}.WIFaG4{transform:translateY(100%);transition:transform var(--transition-duration) cubic-bezier(.87,0,.13,1)}body:not(.responsive) .JsJXaX{overflow-x:clip}[data-view-transition=page-transition] .JsJXaX{view-transition-name:page-group}.AnQkDU{display:grid;grid-template-columns:1fr;grid-template-rows:1fr;height:100%}.AnQkDU>div{align-self:stretch!important;grid-area:1/1/2/2;justify-self:stretch!important}.StylableButton2545352419__root{-archetype:box;border:none;box-sizing:border-box;cursor:pointer;display:block;height:100%;min-height:10px;min-width:10px;padding:0;touch-action:manipulation;width:100%}.StylableButton2545352419__root[disabled]{pointer-events:none}.StylableButton2545352419__root:not(:hover):not([disabled]).StylableButton2545352419--hasBackgroundColor{background-color:var(--corvid-background-color)!important}.StylableButton2545352419__root:hover:not([disabled]).StylableButton2545352419--hasHoverBackgroundColor{background-color:var(--corvid-hover-background-color)!important}.StylableButton2545352419__root:not(:hover)[disabled].StylableButton2545352419--hasDisabledBackgroundColor{background-color:var(--corvid-disabled-background-color)!important}.StylableButton2545352419__root:not(:hover):not([disabled]).StylableButton2545352419--hasBorderColor{border-color:var(--corvid-border-color)!important}.StylableButton2545352419__root:hover:not([disabled]).StylableButton2545352419--hasHoverBorderColor{border-color:var(--corvid-hover-border-color)!important}.StylableButton2545352419__root:not(:hover)[disabled].StylableButton2545352419--hasDisabledBorderColor{border-color:var(--corvid-disabled-border-color)!important}.StylableButton2545352419__root.StylableButton2545352419--hasBorderRadius{border-radius:var(--corvid-border-radius)!important}.StylableButton2545352419__root.StylableButton2545352419--hasBorderWidth{border-width:var(--corvid-border-width)!important}.StylableButton2545352419__root:not(:hover):not([disabled]).StylableButton2545352419--hasColor,.StylableButton2545352419__root:not(:hover):not([disabled]).StylableButton2545352419--hasColor .StylableButton2545352419__label{color:var(--corvid-color)!important}.StylableButton2545352419__root:hover:not([disabled]).StylableButton2545352419--hasHoverColor,.StylableButton2545352419__root:hover:not([disabled]).StylableButton2545352419--hasHoverColor .StylableButton2545352419__label{color:var(--corvid-hover-color)!important}.StylableButton2545352419__root:not(:hover)[disabled].StylableButton2545352419--hasDisabledColor,.StylableButton2545352419__root:not(:hover)[disabled].StylableButton2545352419--hasDisabledColor .StylableButton2545352419__label{color:var(--corvid-disabled-color)!important}.StylableButton2545352419__link{-archetype:box;box-sizing:border-box;color:#000;text-decoration:none}.StylableButton2545352419__container{align-items:center;display:flex;flex-basis:auto;flex-direction:row;flex-grow:1;height:100%;justify-content:center;overflow:hidden;transition:all .2s ease,visibility 0s;width:100%}.StylableButton2545352419__label{-archetype:text;-controller-part-type:LayoutChildDisplayDropdown,LayoutFlexChildSpacing(first);max-width:100%;min-width:1.8em;overflow:hidden;text-align:center;text-overflow:ellipsis;transition:inherit;white-space:nowrap}.StylableButton2545352419__root.StylableButton2545352419--isMaxContent .StylableButton2545352419__label{text-overflow:unset}.StylableButton2545352419__root.StylableButton2545352419--isWrapText .StylableButton2545352419__label{min-width:10px;overflow-wrap:break-word;white-space:break-spaces;word-break:break-word}.StylableButton2545352419__icon{-archetype:icon;-controller-part-type:LayoutChildDisplayDropdown,LayoutFlexChildSpacing(last);flex-shrink:0;height:50px;min-width:1px;transition:inherit}.StylableButton2545352419__icon.StylableButton2545352419--override{display:block!important}.StylableButton2545352419__icon svg,.StylableButton2545352419__icon>span{display:flex;height:inherit;width:inherit}.StylableButton2545352419__root:not(:hover):not([disalbed]).StylableButton2545352419--hasIconColor .StylableButton2545352419__icon svg{fill:var(--corvid-icon-color)!important;stroke:var(--corvid-icon-color)!important}.StylableButton2545352419__root:hover:not([disabled]).StylableButton2545352419--hasHoverIconColor .StylableButton2545352419__icon svg{fill:var(--corvid-hover-icon-color)!important;stroke:var(--corvid-hover-icon-color)!important}.StylableButton2545352419__root:not(:hover)[disabled].StylableButton2545352419--hasDisabledIconColor .StylableButton2545352419__icon svg{fill:var(--corvid-disabled-icon-color)!important;stroke:var(--corvid-disabled-icon-color)!important}.a9YhBi{bottom:0;left:0;position:absolute;right:0;top:0}.dX12nb{cursor:pointer}.AKxYR5{-webkit-tap-highlight-color:rgba(0,0,0,0);fill:var(--corvid-fill-color,var(--fill));fill-opacity:var(--fill-opacity);stroke:var(--corvid-stroke-color,var(--stroke));stroke-opacity:var(--stroke-opacity);stroke-width:var(--stroke-width);filter:var(--drop-shadow,none);opacity:var(--opacity);transform:var(--flip)}.AKxYR5,.AKxYR5 svg{bottom:0;left:0;position:absolute;right:0;top:0}.AKxYR5 svg{height:var(--svg-calculated-height,100%);margin:auto;padding:var(--svg-calculated-padding,0);width:var(--svg-calculated-width,100%)}.AKxYR5 svg:not([data-type=ugc]){overflow:visible}.VZYmYf *{vector-effect:non-scaling-stroke}@supports(-webkit-hyphens:none){.AKxYR5.vv0uGt{will-change:filter}}.HcOXKn{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%}ol.font_100,ul.font_100{color:#080808;font-family:"Arial, Helvetica, sans-serif",serif;font-size:10px;font-style:normal;font-variant:normal;font-weight:400;letter-spacing:normal;line-height:normal;margin:0;text-decoration:none}ol.font_100 li,ul.font_100 li{margin-bottom:12px}ol.wix-list-text-align,ul.wix-list-text-align{list-style-position:inside}ol.wix-list-text-align h1,ol.wix-list-text-align h2,ol.wix-list-text-align h3,ol.wix-list-text-align h4,ol.wix-list-text-align h5,ol.wix-list-text-align h6,ol.wix-list-text-align p,ul.wix-list-text-align h1,ul.wix-list-text-align h2,ul.wix-list-text-align h3,ul.wix-list-text-align h4,ul.wix-list-text-align h5,ul.wix-list-text-align h6,ul.wix-list-text-align p{display:inline}.ONIxfn{cursor:pointer}.WUKwEB{clip:rect(0 0 0 0);border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.QxJLC3 [data-attr-richtext-marker=true]{display:block}.QxJLC3 [data-attr-richtext-marker=true] table{border-collapse:collapse;margin:15px 0;width:100%}.QxJLC3 [data-attr-richtext-marker=true] table td{padding:12px;position:relative}.QxJLC3 [data-attr-richtext-marker=true] table td:after{border-bottom:1px solid currentColor;border-left:1px solid currentColor;bottom:0;content:"";left:0;opacity:.2;position:absolute;right:0;top:0}.QxJLC3 [data-attr-richtext-marker=true] table tr td:last-child:after{border-right:1px solid currentColor}.QxJLC3 [data-attr-richtext-marker=true] table tr:first-child td:after{border-top:1px solid currentColor}@supports(-webkit-appearance:none) and (stroke-color:transparent){.lq2cno>*>:first-child{vertical-align:top}}@supports(-webkit-touch-callout:none){.lq2cno>*>:first-child{vertical-align:top}}.SlP1QZ :is(p,h1,h2,h3,h4,h5,h6,blockquote,ul,ol) [class$=rich-text__text],.SlP1QZ :is(p,h1,h2,h3,h4,h5,h6,blockquote,ul,ol)[class$=rich-text__text]{color:var(--corvid-color,currentColor)}.SlP1QZ :is(p,h1,h2,h3,h4,h5,h6,blockquote,ul,ol) span[style*=color]{color:var(--corvid-color,currentColor)!important}.uGVkMG{direction:var(--text-direction);min-height:var(--min-height);min-width:var(--min-width)}.uGVkMG .edKzOf{word-wrap:break-word;height:100%;overflow-wrap:break-word;position:relative;width:100%}.uGVkMG .edKzOf ul{list-style:disc inside}.uGVkMG .edKzOf li{margin-bottom:12px}.SxM0TO blockquote,.SxM0TO h1,.SxM0TO h2,.SxM0TO h3,.SxM0TO h4,.SxM0TO h5,.SxM0TO h6,.SxM0TO p{letter-spacing:normal;line-height:normal}.nJYhU3{min-height:var(--min-height);min-width:var(--min-width)}.nJYhU3 .edKzOf{word-wrap:break-word;height:100%;overflow-wrap:break-word;position:relative;width:100%}.nJYhU3 .edKzOf ol,.nJYhU3 .edKzOf ul{letter-spacing:normal;line-height:normal;margin-inline-start:.5em;padding-inline-start:1.3em}.nJYhU3 .edKzOf ul{list-style-type:disc}.nJYhU3 .edKzOf ol{list-style-type:decimal}.nJYhU3 .edKzOf ol ul,.nJYhU3 .edKzOf ul ul{line-height:normal;list-style-type:circle}.nJYhU3 .edKzOf ol ol ul,.nJYhU3 .edKzOf ol ul ul,.nJYhU3 .edKzOf ul ol ul,.nJYhU3 .edKzOf ul ul ul{line-height:normal;list-style-type:square}.nJYhU3 .edKzOf li{font-style:inherit;font-weight:inherit;letter-spacing:normal;line-height:inherit}.nJYhU3 .edKzOf h1,.nJYhU3 .edKzOf h2,.nJYhU3 .edKzOf h3,.nJYhU3 .edKzOf h4,.nJYhU3 .edKzOf h5,.nJYhU3 .edKzOf h6,.nJYhU3 .edKzOf p{letter-spacing:normal;line-height:normal;margin-block:0;margin:0}.nJYhU3 .edKzOf a{color:inherit}.SxM0TO,.c9GqVL{word-wrap:break-word;direction:var(--text-direction);min-height:var(--min-height);min-width:var(--min-width);mix-blend-mode:var(--blendMode,normal);overflow-wrap:break-word;pointer-events:none;text-align:start;text-shadow:var(--textOutline,0 0 transparent),var(--textShadow,0 0 transparent);text-transform:var(--textTransform,"none")}.SxM0TO>*,.c9GqVL>*{pointer-events:auto}.SxM0TO li,.c9GqVL li{font-style:inherit;font-weight:inherit;letter-spacing:normal;line-height:inherit}.SxM0TO ol,.SxM0TO ul,.c9GqVL ol,.c9GqVL ul{letter-spacing:normal;line-height:normal;margin-inline-end:0;margin-inline-start:.5em}.SxM0TO:not(.YQcXTT) ol,.SxM0TO:not(.YQcXTT) ul,.c9GqVL:not(.YQcXTT) ol,.c9GqVL:not(.YQcXTT) ul{padding-inline-end:0;padding-inline-start:1.3em}.SxM0TO ul,.c9GqVL ul{list-style-type:disc}.SxM0TO ol,.c9GqVL ol{list-style-type:decimal}.SxM0TO ol ul,.SxM0TO ul ul,.c9GqVL ol ul,.c9GqVL ul ul{list-style-type:circle}.SxM0TO ol ol ul,.SxM0TO ol ul ul,.SxM0TO ul ol ul,.SxM0TO ul ul ul,.c9GqVL ol ol ul,.c9GqVL ol ul ul,.c9GqVL ul ol ul,.c9GqVL ul ul ul{list-style-type:square}.SxM0TO blockquote,.SxM0TO h1,.SxM0TO h2,.SxM0TO h3,.SxM0TO h4,.SxM0TO h5,.SxM0TO h6,.SxM0TO p,.c9GqVL blockquote,.c9GqVL h1,.c9GqVL h2,.c9GqVL h3,.c9GqVL h4,.c9GqVL h5,.c9GqVL h6,.c9GqVL p{margin-block:0;margin:0}.SxM0TO a,.c9GqVL a{color:inherit}.YQcXTT li{margin-inline-end:0;margin-inline-start:1.3em}.Vd6aQZ{overflow:hidden;padding:0;pointer-events:none;white-space:nowrap}.mHZSwn{display:none}.lvxhkV{bottom:0;left:0;position:absolute;right:0;top:0;width:100%}.QJjwEo{transform:translateY(-100%);transition:.2s ease-in}.kdBXfh{transition:.2s}.MP52zt{opacity:0;transition:.2s ease-in}.MP52zt.Bhu9m5{z-index:-1!important}.LVP8Wf{opacity:1;transition:.2s}.VrZrC0{height:auto}.VrZrC0,.cKxVkc{position:relative;width:100%}:host(:not(.device-mobile-optimized)) .vlM3HR,body:not(.device-mobile-optimized) .vlM3HR{margin-left:calc((100% - var(--site-width))/2);width:var(--site-width)}.AT7o0U[data-focuscycled=active]{outline:1px solid transparent}.AT7o0U[data-focuscycled=active]:not(:focus-within){outline:2px solid transparent;transition:outline .01s ease}.AT7o0U .vlM3HR{bottom:0;left:0;position:absolute;right:0;top:0}.HlRz5e{display:block;height:100%;width:100%}.HlRz5e img{max-width:var(--wix-img-max-width,100%)}.HlRz5e[data-animate-blur] img{filter:blur(9px);transition:filter .8s ease-in}.HlRz5e[data-animate-blur] img[data-load-done]{filter:none}.I5zqsT{display:block;height:100%;width:100%}.WzbAF8 .mpGTIt .O6KwRn{display:var(--item-display);height:var(--item-size);margin:var(--item-margin);width:var(--item-size)}.WzbAF8 .mpGTIt .O6KwRn:last-child{margin:0}.WzbAF8 .mpGTIt .O6KwRn .oRtuWN{display:block}.WzbAF8 .mpGTIt .O6KwRn .oRtuWN .YaS0jR{height:var(--item-size);width:var(--item-size)}.WzbAF8 .mpGTIt{height:100%;position:absolute;white-space:nowrap;width:100%}:host(.device-mobile-optimized) .WzbAF8 .mpGTIt,body.device-mobile-optimized .WzbAF8 .mpGTIt{white-space:normal}.big2ZD{display:grid;grid-template-columns:1fr;grid-template-rows:1fr;height:calc(100% - var(--wix-ads-height));left:0;margin-top:var(--wix-ads-height);position:fixed;top:0;width:100%}.SHHiV9,.big2ZD{pointer-events:none;z-index:var(--pinned-layer-in-container,var(--above-all-in-container))}</style>
<style data-href="https://static.parastorage.com/services/editor-elements-library/dist/thunderbolt/rb_wixui.thunderbolt[FiveGridLine_SolidLine].23b2f23d.min.css">.aVng1S{border-top:var(--lnw,2px) solid rgba(var(--brd,var(--color_15,color_15)),var(--alpha-brd,1));box-sizing:border-box;height:0}</style>
<style data-href="https://static.parastorage.com/services/editor-elements-library/dist/thunderbolt/rb_wixui.thunderbolt[GoogleMap].b7b29521.min.css">.c36GfP .gwyB6z{bottom:0;left:0;position:absolute;right:0;top:0}.qFjBwF{background:rgba(var(--brd,var(--color_15,color_15)),var(--alpha-brd,1));box-shadow:var(--shd,0 1px 4px rgba(0,0,0,.6))}.qFjBwF,.qFjBwF .gwyB6z{border-radius:var(--rd,0)}.qFjBwF .gwyB6z{bottom:var(--brw,0);display:inline-block;left:var(--brw,0);-webkit-mask-image:radial-gradient(circle,#fff,#000);mask-image:radial-gradient(circle,#fff,#000);overflow:hidden;position:absolute;right:var(--brw,0);top:var(--brw,0)}.D_LINF .gwyB6z{bottom:9px;left:9px;position:absolute;right:9px;top:9px}.D_LINF .J8D75x{background-image:url(https://static.parastorage.com/services/editor-elements-library/dist/thunderbolt/media/sloppyframe.d2412ec4.png);background-repeat:no-repeat;bottom:0;left:0;position:absolute;right:0;top:0}.D_LINF .KH6hFC{background-position:0 0;bottom:3px;right:3px}.D_LINF .Czan88{background-position:100% 100%;left:3px;top:3px}.sp0Pug{background-color:rgba(var(--brd,var(--color_15,color_15)),var(--alpha-brd,1));border-radius:var(--rd,0);box-shadow:var(--shd,0 1px 4px rgba(0,0,0,.6))}.sp0Pug .gwyB6z{bottom:var(--brw,0);left:var(--brw,0);overflow:hidden;position:absolute;right:var(--brw,0);top:var(--brw,0)}.sp0Pug .gDJxCg{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUoAAAAaCAYAAADR0BVGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAACIFJREFUeNrsnOuS2ygQhRuBnWTf/1k3O5aA/QNbJ8enQfJkapMJXeWyrPul+TjdjRzsmgUxvbXpYGaxfTaYTmZ2a597+/5Cn69t2b1NfzWzbzTvrzadYH5q2+O+Uzvunc7lDucU27q4HM85nLwfta1bzeyAeWo9M7O9fZe2foDlxcxy+53bukebLmb2ZmYPM/unffY2f2+ft7Y+/v7etu/bHm3bA/bff/flfZ+5/eZPhk+B6X4NBab7d7/G6kxf8b3gTHc/xO9t4JfdN/nTfWMDX0vNBxP42FdY/qVt9w388Ub+2fd5Ax/v227UVmK7pgjX0O9VavOsrWuOv/Z5CXz0il/zMy7gl+gDD1r+AN/Z22/0zwf42sPM/m4+2Od/Bx9/gM+/0Qf3vZNvsl+yH9pF37P0Tkiik24ETXbKbfIJ4kEVuOn/tOkbNMLeeBM47Y0cLzrnEcHpAp2LUSPb6Nw6TO5tnQOuuztkXye043QnqgQjfrA7LNsBnOhIbwBPXPeN9vFGkEWQ7rDsgPtc6HwOmH8Q1BUUq/gwHD1HrQOf834zNAP5IH8jfBIAMQkfSeAnXwB0CEKEHUIxwu8IAqGvh0IgAvgi7YMBf4Pz79v259KXYQfe4VqbD9xEeyvU2Rn4AT5b7LgLATPT8h18DjvZNwdweA74fGfciOR3BbbDawt0X4ymfxooZ865OWqSp28CYOzQrLQOghj2lgykO91EPgY3IgPnMoKiEQDZQSJsh5AJcN47bVsEmDJArwhFyeoRHbDvn6F5DJxYTSvgeUrRTsJw1nvXF3zvTAc+g6gNlKcCLHaqajqKCArhGMDvsUNHlcnbbrB9FOBmkXGD+ZVg3+9BFp1BcDqxAtsVao+VwMRRRgEfrSRqdhGxFIKX6tzw/vZjJEctZmJIeK/vpYvOGcT3iPTbQNEpOFbRS20UsvYeFIHLob/6vcFDC7C/Sje1kqIt4mFnguFIIT4EYHeC5iHCml0ALgvAsfLmkCM7Sq8IB5sB72y4XO1jrL4DqDbxYw+wKnIKjkhgv0uOeNiEWkyUEooEUITjTbSn+0SBIkRxn4HacRSdSiWVVmF5oXZbB78P6sQPEgeZtgtOOgWVJLbR6HTcCFNOmYUzvpVe7MFn4c4ovOZGmCE3V+giOjASfG8UOkVHLaBjc6NHFXg4gDwEpDBkrSJUzk4eJ4tw1oR6PCj0OURYwdNGDjkKdT8aZL+KfTTIw8VoK5KwCM50It9NQmWaSBNEJ/8eRSgfKIXAsE4OMBOpU+5cCvmuEh4HddKHyIVj7rEQH4zEjseZSqBV56vSPPUVUHr5oBEkgwhnvAQ7XvgB4UIliByOGq2kXI16DXN6lkygG+XldgHOMoDh7oS6nNcxgnUeFIPqBHrLfh0Q1xehGwb5WAy3cX50orc0ACYXMRmMtxP52jBQnnwNnCcsBNUi0kO7KBB5eUvV2WxwnDBQx+qZubBML0DSU49B5D42UUXmm4e/N1JJ2MNGCBU8J6t0Y6tTmVVwLATIQqDEYgbnV7C4pMLk7OT0gggLlv150B0B9qBoTLXHOAjnA8EOgZcItpgzTU6aYKMiaBTV+UDtvjrpnIOiycPJXSJouY4QKAzfBkwpJzo4Cct0ITluE+XofQcnX3DQfgx6g11UnKOjRk1Uy7OTbOaqnVe5O0h1IggLqeAiCjomKsNV3NPL1bdlf5wFBzLoO4eIrriQg+kqDPVZ0KhRACqii0J5qtqAxxYeElec3LqJiE4JjgD82ChC3Qa8MJGnfGqP6YUK4izsDgOaqzF32Z6H5KhjbuLGqyStGr7AYXZ2FGUm1RjsueJbBoWQM+O1FhCXfUS+NduP1d6thbCjoXycEqukNqOjKKMIx9U6r7TfKpaVicLktjdj0xlA/gDLq8ODgo3HsiEUuVLGlXKjB6dOHMdFKdLzUBaz52E43s3NYlkGpVvoeAz8Zct+RZjOwkwj5cltqwNTqcUOQLPnMambPQ9bMnsecqVC3CpEEl8LXg8Pa+NquQm1qQThuwechwkcR5bhogvk+6KTDxjlaxB63lgoVIaBch9cIebKHALdU4orLF722YzBE4TKyqQ0gz2/kKHSbJgbrfZct1BtmOHqcYfZwKNKlEo9I/6m7T0NgDV7K8JIyamL64DDga78cIJQhwzNTMvMgWlxZLval9cbz94WWbbss4Xz3pjZ4rR/VJaqzuCF+QpSal8mVGgVEMuCDSpVlp12HCb34r9jp4laPDO6PRDkuIfBJOtuz4nV4PRyZn5hhC+Uh94EB+Q2uGnLli0biwYj8cHhPKsz9QaQgiRC1py0nOIFg1GNN569JHEmcgzpxM0KJw5U6ILUMIaN8iDm9Fyequx5CXN6P7xBGPpn59yWLVv2OkSLgNZGy6qNx1kmey7AmOk6hopUZ1Ac/f/A6HVb80LvV+S6US5DqU6vis3vT9sg/Ma3dIqNq8kqx+lVopctW/a6FfPHLzMoVfiOOUxeVxV/1Jt9dZAqYAFlE1AObVaomb0Ly6oxODkIJZ25N7KBVOZxVWdyLcuWLft/bVbnUMOIRsMDzXRV20sHjNTj6L8MToHQBj3A6IJHAPYGXHsnulHPVWwVWpYt+4zg5Gq6UTg+Y8aINSbEmNn1Mc71TGX7TM8QJoA9m1Advb1yivzLli37bYDpia96UciFCfCu/n6aP/t/v7M9w5ntgkN3m+QLtgvrLlu27PcAZZiovtG6KhS3GewuRqI/rBNfhOJsOcMsXAQx7yss31q27NOCslyEahhEpK/+s9Nwebx4cbNlKjQOJ06wnjz+UpPLln0uYP6sP2NWbDjzqmL9GQe/sn2dXHh478kuW7bsjwXqVXao4UkvcybUuhi1bNmyZSPb1i1YtmzZsgXKZcuWLVugXLZs2bKPtH8HADJQ9p+EtD02AAAAAElFTkSuQmCC);background-repeat:no-repeat;bottom:-26px;height:26px;position:absolute;width:165px}.sp0Pug .H78pyp{background-position:0 0;left:-20px}.sp0Pug .QvNeFb{background-position:100% 0;right:-20px}</style>
<style data-href="https://static.parastorage.com/services/editor-elements-library/dist/thunderbolt/rb_wixui.thunderbolt[TextInput].e16b1470.min.css">.KvoMHf.ErucfC[type=number]::-webkit-inner-spin-button{-webkit-appearance:none;-moz-appearance:none;margin:0}.KvoMHf[disabled]{pointer-events:none}.MpKiNN{--display:flex;direction:var(--direction);display:var(--display);flex-direction:column;min-height:25px;position:relative;text-align:var(--align,start)}.MpKiNN .pUnTVX{height:var(--inputHeight);position:relative}.MpKiNN .eXvLsN{align-items:center;display:flex;font:var(--fntprefix,normal normal normal 16px/1.4em helvetica-w01-roman);justify-content:center;left:0;max-height:100%;min-height:100%;position:absolute;top:0;width:50px}.MpKiNN .KvoMHf,.MpKiNN .eXvLsN{color:var(--corvid-color,rgb(var(--txt,var(--color_15,color_15))))}.MpKiNN .KvoMHf{-webkit-appearance:none;-moz-appearance:none;background-color:var(--corvid-background-color,rgba(var(--bg,255,255,255),var(--alpha-bg,1)));border-color:var(--corvid-border-color,rgba(var(--brd,227,227,227),var(--alpha-brd,1)));border-radius:var(--corvid-border-radius,var(--rd,0));border-style:solid;border-width:var(--corvid-border-width,var(--brw,1px));box-shadow:var(--shd,0 0 0 transparent);box-sizing:border-box!important;direction:var(--inputDirection,"inherit");font:var(--fnt,var(--font_8));margin:0;max-width:100%;min-height:var(--inputHeight);padding:var(--textPadding);padding-inline-end:var(--textPadding_end);padding-inline-start:var(--textPadding_start);text-align:var(--inputAlign,"inherit");text-overflow:ellipsis;width:100%}.MpKiNN .KvoMHf[type=number]{-webkit-appearance:textfield;-moz-appearance:textfield;width:100%}.MpKiNN .KvoMHf::-moz-placeholder{color:rgb(var(--txt2,var(--color_15,color_15)))}.MpKiNN .KvoMHf:-ms-input-placeholder{color:rgb(var(--txt2,var(--color_15,color_15)))}.MpKiNN .KvoMHf::placeholder{color:rgb(var(--txt2,var(--color_15,color_15)))}.MpKiNN .KvoMHf:hover{background-color:rgba(var(--bgh,255,255,255),var(--alpha-bgh,1));border-color:rgba(var(--brdh,163,217,246),var(--alpha-brdh,1));border-style:solid;border-width:var(--brwh,1px)}.MpKiNN .KvoMHf:disabled{background-color:rgba(var(--bgd,204,204,204),var(--alpha-bgd,1));border-color:rgba(var(--brdd,163,217,246),var(--alpha-brdd,1));border-style:solid;border-width:var(--brwd,1px);color:rgb(var(--txtd,255,255,255))}.MpKiNN:not(.LyB02C) .KvoMHf:focus{background-color:rgba(var(--bgf,255,255,255),var(--alpha-bgf,1));border-color:rgba(var(--brdf,163,217,246),var(--alpha-brdf,1));border-style:solid;border-width:var(--brwf,1px)}.MpKiNN.LyB02C .KvoMHf:invalid{background-color:rgba(var(--bge,255,255,255),var(--alpha-bge,1));border-color:rgba(var(--brde,163,217,246),var(--alpha-brde,1));border-style:solid;border-width:var(--brwe,1px)}.MpKiNN.LyB02C .KvoMHf:not(:invalid):focus{background-color:rgba(var(--bgf,255,255,255),var(--alpha-bgf,1));border-color:rgba(var(--brdf,163,217,246),var(--alpha-brdf,1));border-style:solid;border-width:var(--brwf,1px)}.MpKiNN .wPeA6j{display:none}.MpKiNN.qzvPmW .wPeA6j{color:rgb(var(--txtlbl,var(--color_15,color_15)));direction:var(--labelDirection,inherit);display:inline-block;font:var(--fntlbl,var(--font_8));line-height:1;margin-bottom:var(--labelMarginBottom);padding-inline-end:var(--labelPadding_end);padding-inline-start:var(--labelPadding_start);text-align:var(--labelAlign,inherit);word-break:break-word}.MpKiNN.qzvPmW.lPl_oN .wPeA6j:after{color:rgba(var(--txtlblrq,0,0,0),var(--alpha-txtlblrq,0));content:" *";display:var(--requiredIndicationDisplay,none)}.ZXdXNL{--display:flex;direction:var(--direction);display:var(--display);flex-direction:column;justify-content:var(--align,start);text-align:var(--align,start)}.ZXdXNL.Bedjyp{height:inherit;min-height:inherit}.ZXdXNL .pUnTVX{display:flex;flex:1;flex-direction:column;position:relative}.ZXdXNL .eXvLsN{align-items:center;display:flex;font:var(--fntprefix,normal normal normal 16px/1.4em helvetica-w01-roman);justify-content:center;left:0;max-height:100%;position:absolute;top:0;width:50px}.ZXdXNL .KvoMHf,.ZXdXNL .eXvLsN{color:var(--corvid-color,rgb(var(--txt,var(--color_15,color_15))));min-height:100%}.ZXdXNL .KvoMHf{-webkit-appearance:none;-moz-appearance:none;background-color:var(--corvid-background-color,rgba(var(--bg,255,255,255),var(--alpha-bg,1)));border-color:var(--corvid-border-color,rgba(var(--brd,227,227,227),var(--alpha-brd,1)));border-radius:var(--corvid-border-radius,var(--rd,0));border-style:solid;border-width:var(--corvid-border-width,var(--brw,1px));box-shadow:var(--shd,0 0 0 transparent);box-sizing:border-box!important;direction:var(--inputDirection,"inherit");flex:1;font:var(--fnt,var(--font_8));margin:0;padding:var(--textPadding);padding-inline-end:var(--textPadding_end);padding-inline-start:var(--textPadding_start);text-align:var(--inputAlign,"inherit");text-overflow:ellipsis;width:100%}.ZXdXNL .KvoMHf[type=number]{-webkit-appearance:textfield;-moz-appearance:textfield}.ZXdXNL .KvoMHf::-moz-placeholder{color:rgb(var(--txt2,var(--color_15,color_15)))}.ZXdXNL .KvoMHf:-ms-input-placeholder{color:rgb(var(--txt2,var(--color_15,color_15)))}.ZXdXNL .KvoMHf::placeholder{color:rgb(var(--txt2,var(--color_15,color_15)))}.ZXdXNL .KvoMHf:hover{background-color:rgba(var(--bgh,255,255,255),var(--alpha-bgh,1));border-color:rgba(var(--brdh,163,217,246),var(--alpha-brdh,1));border-style:solid;border-width:var(--brwh,1px)}.ZXdXNL .KvoMHf:disabled{background-color:rgba(var(--bgd,204,204,204),var(--alpha-bgd,1));border-color:rgba(var(--brdd,163,217,246),var(--alpha-brdd,1));border-style:solid;border-width:var(--brwd,1px);color:rgb(var(--txtd,255,255,255))}.ZXdXNL:not(.LyB02C) .KvoMHf:focus{background-color:rgba(var(--bgf,255,255,255),var(--alpha-bgf,1));border-color:rgba(var(--brdf,163,217,246),var(--alpha-brdf,1));border-style:solid;border-width:var(--brwf,1px)}.ZXdXNL.LyB02C .KvoMHf:invalid{background-color:rgba(var(--bge,255,255,255),var(--alpha-bge,1));border-color:rgba(var(--brde,163,217,246),var(--alpha-brde,1));border-style:solid;border-width:var(--brwe,1px)}.ZXdXNL.LyB02C .KvoMHf:not(:invalid):focus{background-color:rgba(var(--bgf,255,255,255),var(--alpha-bgf,1));border-color:rgba(var(--brdf,163,217,246),var(--alpha-brdf,1));border-style:solid;border-width:var(--brwf,1px)}.ZXdXNL .wPeA6j{display:none}.ZXdXNL.qzvPmW .wPeA6j{color:rgb(var(--txtlbl,var(--color_15,color_15)));direction:var(--labelDirection,inherit);display:inline-block;font:var(--fntlbl,var(--font_8));line-height:1;margin-bottom:var(--labelMarginBottom);padding-inline-end:var(--labelPadding_end);padding-inline-start:var(--labelPadding_start);text-align:var(--labelAlign,inherit);word-break:break-word}.ZXdXNL.qzvPmW.lPl_oN .wPeA6j:after{color:rgba(var(--txtlblrq,0,0,0),var(--alpha-txtlblrq,0));content:" *";display:var(--requiredIndicationDisplay,none)}.TLWrjM{align-items:center;color:rgb(var(--errorTextColor,#ff4040));direction:var(--errorDirection);display:flex;flex-direction:row;gap:4px;justify-content:var(--errorAlign,inherit);padding:8px 0 0}.TLWrjM .GIPQqH{flex:none;flex-grow:0;order:0}.TLWrjM .JNgJbf{display:inline-block;flex-grow:0;font:var(--errorTextFont,var(--font_8));line-height:1;order:1;word-break:break-word}</style>
<style data-href="https://static.parastorage.com/services/editor-elements-library/dist/thunderbolt/rb_wixui.thunderbolt_bootstrap-classic.e7a8de9b.min.css">.PlZyDq{touch-action:manipulation}.uDW_Qe{align-items:center;box-sizing:border-box;display:flex;justify-content:var(--label-align);min-width:100%;text-align:initial;width:-moz-max-content;width:max-content}.uDW_Qe:before{max-width:var(--margin-start,0)}.uDW_Qe:after,.uDW_Qe:before{align-self:stretch;content:"";flex-grow:1}.uDW_Qe:after{max-width:var(--margin-end,0)}.FubTgk{height:100%}.FubTgk .uDW_Qe{border-radius:var(--corvid-border-radius,var(--rd,0));bottom:0;box-shadow:var(--shd,0 1px 4px rgba(0,0,0,.6));left:0;position:absolute;right:0;top:0;transition:var(--trans1,border-color .4s ease 0s,background-color .4s ease 0s)}.FubTgk .uDW_Qe:link,.FubTgk .uDW_Qe:visited{border-color:transparent}.FubTgk .l7_2fn{color:var(--corvid-color,rgb(var(--txt,var(--color_15,color_15))));font:var(--fnt,var(--font_5));margin:0;position:relative;transition:var(--trans2,color .4s ease 0s);white-space:nowrap}.FubTgk[aria-disabled=false] .uDW_Qe{background-color:var(--corvid-background-color,rgba(var(--bg,var(--color_17,color_17)),var(--alpha-bg,1)));border:solid var(--corvid-border-color,rgba(var(--brd,var(--color_15,color_15)),var(--alpha-brd,1))) var(--corvid-border-width,var(--brw,0));cursor:pointer!important}:host(.device-mobile-optimized) .FubTgk[aria-disabled=false]:active .uDW_Qe,body.device-mobile-optimized .FubTgk[aria-disabled=false]:active .uDW_Qe{background-color:var(--corvid-hover-background-color,rgba(var(--bgh,var(--color_18,color_18)),var(--alpha-bgh,1)));border-color:var(--corvid-hover-border-color,rgba(var(--brdh,var(--color_15,color_15)),var(--alpha-brdh,1)))}:host(.device-mobile-optimized) .FubTgk[aria-disabled=false]:active .l7_2fn,body.device-mobile-optimized .FubTgk[aria-disabled=false]:active .l7_2fn{color:var(--corvid-hover-color,rgb(var(--txth,var(--color_15,color_15))))}:host(:not(.device-mobile-optimized)) .FubTgk[aria-disabled=false]:hover .uDW_Qe,body:not(.device-mobile-optimized) .FubTgk[aria-disabled=false]:hover .uDW_Qe{background-color:var(--corvid-hover-background-color,rgba(var(--bgh,var(--color_18,color_18)),var(--alpha-bgh,1)));border-color:var(--corvid-hover-border-color,rgba(var(--brdh,var(--color_15,color_15)),var(--alpha-brdh,1)))}:host(:not(.device-mobile-optimized)) .FubTgk[aria-disabled=false]:hover .l7_2fn,body:not(.device-mobile-optimized) .FubTgk[aria-disabled=false]:hover .l7_2fn{color:var(--corvid-hover-color,rgb(var(--txth,var(--color_15,color_15))))}.FubTgk[aria-disabled=true] .uDW_Qe{background-color:var(--corvid-disabled-background-color,rgba(var(--bgd,204,204,204),var(--alpha-bgd,1)));border-color:var(--corvid-disabled-border-color,rgba(var(--brdd,204,204,204),var(--alpha-brdd,1)));border-style:solid;border-width:var(--corvid-border-width,var(--brw,0))}.FubTgk[aria-disabled=true] .l7_2fn{color:var(--corvid-disabled-color,rgb(var(--txtd,255,255,255)))}.uUxqWY{align-items:center;box-sizing:border-box;display:flex;justify-content:var(--label-align);min-width:100%;text-align:initial;width:-moz-max-content;width:max-content}.uUxqWY:before{max-width:var(--margin-start,0)}.uUxqWY:after,.uUxqWY:before{align-self:stretch;content:"";flex-grow:1}.uUxqWY:after{max-width:var(--margin-end,0)}.Vq4wYb[aria-disabled=false] .uUxqWY{cursor:pointer}:host(.device-mobile-optimized) .Vq4wYb[aria-disabled=false]:active .wJVzSK,body.device-mobile-optimized .Vq4wYb[aria-disabled=false]:active .wJVzSK{color:var(--corvid-hover-color,rgb(var(--txth,var(--color_15,color_15))));transition:var(--trans,color .4s ease 0s)}:host(:not(.device-mobile-optimized)) .Vq4wYb[aria-disabled=false]:hover .wJVzSK,body:not(.device-mobile-optimized) .Vq4wYb[aria-disabled=false]:hover .wJVzSK{color:var(--corvid-hover-color,rgb(var(--txth,var(--color_15,color_15))));transition:var(--trans,color .4s ease 0s)}.Vq4wYb .uUxqWY{bottom:0;left:0;position:absolute;right:0;top:0}.Vq4wYb .wJVzSK{color:var(--corvid-color,rgb(var(--txt,var(--color_15,color_15))));font:var(--fnt,var(--font_5));transition:var(--trans,color .4s ease 0s);white-space:nowrap}.Vq4wYb[aria-disabled=true] .wJVzSK{color:var(--corvid-disabled-color,rgb(var(--txtd,255,255,255)))}:host(:not(.device-mobile-optimized)) .CohWsy,body:not(.device-mobile-optimized) .CohWsy{display:flex}:host(:not(.device-mobile-optimized)) .V5AUxf,body:not(.device-mobile-optimized) .V5AUxf{-moz-column-gap:var(--margin);column-gap:var(--margin);display:flex;flex-direction:var(--items-direction);margin:0 auto;position:relative;width:calc(100% - var(--padding)*2)}:host(:not(.device-mobile-optimized)) .V5AUxf>*,body:not(.device-mobile-optimized) .V5AUxf>*{flex:var(--column-flex) 1 0%;left:0;margin-bottom:var(--padding);margin-top:var(--padding);min-width:0;position:relative;top:0}:host(.device-mobile-optimized) .V5AUxf,body.device-mobile-optimized .V5AUxf{display:block;padding:var(--padding) 0;position:relative}:host(.device-mobile-optimized) .V5AUxf>*,body.device-mobile-optimized .V5AUxf>*{margin-bottom:var(--margin);position:relative}:host(.device-mobile-optimized) .V5AUxf>:first-child,body.device-mobile-optimized .V5AUxf>:first-child{margin-top:var(--firstChildMarginTop,0)}:host(.device-mobile-optimized) .V5AUxf>:last-child,body.device-mobile-optimized .V5AUxf>:last-child{margin-bottom:var(--lastChildMarginBottom)}.LIhNy3{backface-visibility:hidden}.HlRz5e{display:block;height:100%;width:100%}.HlRz5e img{max-width:var(--wix-img-max-width,100%)}.HlRz5e[data-animate-blur] img{filter:blur(9px);transition:filter .8s ease-in}.HlRz5e[data-animate-blur] img[data-load-done]{filter:none}._1hLNj{display:block}._1hLNj,.if7Vw2{height:100%;width:100%}.if7Vw2{left:0;-webkit-mask-image:var(--mask-image,none);mask-image:var(--mask-image,none);-webkit-mask-position:var(--mask-position,0);mask-position:var(--mask-position,0);-webkit-mask-repeat:var(--mask-repeat,no-repeat);mask-repeat:var(--mask-repeat,no-repeat);-webkit-mask-size:var(--mask-size,100%);mask-size:var(--mask-size,100%);overflow:hidden;pointer-events:var(--fill-layer-background-media-pointer-events);position:absolute;top:0}.if7Vw2.f0uTJH{clip:rect(0,auto,auto,0)}.if7Vw2 .i1tH8h{height:100%;position:absolute;top:0;width:100%}.if7Vw2 .DXi4PB{height:var(--fill-layer-image-height,100%);opacity:var(--fill-layer-image-opacity)}.if7Vw2 .DXi4PB img{height:100%;width:100%}@supports(-webkit-hyphens:none){.if7Vw2.f0uTJH{clip:auto;-webkit-clip-path:inset(0)}}.wG8dni{height:100%}.tcElKx{background-color:var(--bg-overlay-color);background-image:var(--bg-gradient);transition:var(--inherit-transition)}.ImALHf,.Ybjs9b{opacity:var(--fill-layer-video-opacity)}.UWmm3w{bottom:var(--media-padding-bottom);height:var(--media-padding-height);position:absolute;top:var(--media-padding-top);width:100%}.Yjj1af{transform:scale(var(--scale,1));transition:var(--transform-duration,transform 0s)}.ImALHf{height:100%;position:relative;width:100%}._uqPqy{-webkit-clip-path:var(--fill-layer-clip);clip-path:var(--fill-layer-clip)}._uqPqy,.eKyYhK{position:absolute;top:0}._uqPqy,.eKyYhK,.x0mqQS img{height:100%;width:100%}.pnCr6P{opacity:0}.blf7sp,.pnCr6P{position:absolute;top:0}.blf7sp{height:0;left:0;overflow:hidden;width:0}.rWP3Gv{left:0;pointer-events:var(--fill-layer-background-media-pointer-events);position:var(--fill-layer-background-media-position)}.Tr4n3d,.rWP3Gv,.wRqk6s{height:100%;top:0;width:100%}.wRqk6s{position:absolute}.Tr4n3d{background-color:var(--fill-layer-background-overlay-color);opacity:var(--fill-layer-background-overlay-blend-opacity-fallback,1);position:var(--fill-layer-background-overlay-position);transform:var(--fill-layer-background-overlay-transform)}@supports(mix-blend-mode:overlay){.Tr4n3d{mix-blend-mode:var(--fill-layer-background-overlay-blend-mode);opacity:var(--fill-layer-background-overlay-blend-opacity,1)}}.VXAmO2{--divider-pin-height__:min(1,calc(var(--divider-layers-pin-factor__) + 1));--divider-pin-layer-height__:var(--divider-layers-pin-factor__);--divider-pin-border__:min(1,calc(var(--divider-layers-pin-factor__) / -1 + 1));height:calc(var(--divider-height__) + var(--divider-pin-height__)*var(--divider-layers-size__)*var(--divider-layers-y__))}.VXAmO2,.VXAmO2 .dy3w_9{left:0;position:absolute;width:100%}.VXAmO2 .dy3w_9{--divider-layer-i__:var(--divider-layer-i,0);background-position:left calc(50% + var(--divider-offset-x__) + var(--divider-layers-x__)*var(--divider-layer-i__)) bottom;background-repeat:repeat-x;border-bottom-style:solid;border-bottom-width:calc(var(--divider-pin-border__)*var(--divider-layer-i__)*var(--divider-layers-y__));height:calc(var(--divider-height__) + var(--divider-pin-layer-height__)*var(--divider-layer-i__)*var(--divider-layers-y__));opacity:calc(1 - var(--divider-layer-i__)/(var(--divider-layer-i__) + 1))}.UORcXs{--divider-height__:var(--divider-top-height,auto);--divider-offset-x__:var(--divider-top-offset-x,0px);--divider-layers-size__:var(--divider-top-layers-size,0);--divider-layers-y__:var(--divider-top-layers-y,0px);--divider-layers-x__:var(--divider-top-layers-x,0px);--divider-layers-pin-factor__:var(--divider-top-layers-pin-factor,0);border-top:var(--divider-top-padding,0) solid var(--divider-top-color,currentColor);opacity:var(--divider-top-opacity,1);top:0;transform:var(--divider-top-flip,scaleY(-1))}.UORcXs .dy3w_9{background-image:var(--divider-top-image,none);background-size:var(--divider-top-size,contain);border-color:var(--divider-top-color,currentColor);bottom:0;filter:var(--divider-top-filter,none)}.UORcXs .dy3w_9[data-divider-layer="1"]{display:var(--divider-top-layer-1-display,block)}.UORcXs .dy3w_9[data-divider-layer="2"]{display:var(--divider-top-layer-2-display,block)}.UORcXs .dy3w_9[data-divider-layer="3"]{display:var(--divider-top-layer-3-display,block)}.Io4VUz{--divider-height__:var(--divider-bottom-height,auto);--divider-offset-x__:var(--divider-bottom-offset-x,0px);--divider-layers-size__:var(--divider-bottom-layers-size,0);--divider-layers-y__:var(--divider-bottom-layers-y,0px);--divider-layers-x__:var(--divider-bottom-layers-x,0px);--divider-layers-pin-factor__:var(--divider-bottom-layers-pin-factor,0);border-bottom:var(--divider-bottom-padding,0) solid var(--divider-bottom-color,currentColor);bottom:0;opacity:var(--divider-bottom-opacity,1);transform:var(--divider-bottom-flip,none)}.Io4VUz .dy3w_9{background-image:var(--divider-bottom-image,none);background-size:var(--divider-bottom-size,contain);border-color:var(--divider-bottom-color,currentColor);bottom:0;filter:var(--divider-bottom-filter,none)}.Io4VUz .dy3w_9[data-divider-layer="1"]{display:var(--divider-bottom-layer-1-display,block)}.Io4VUz .dy3w_9[data-divider-layer="2"]{display:var(--divider-bottom-layer-2-display,block)}.Io4VUz .dy3w_9[data-divider-layer="3"]{display:var(--divider-bottom-layer-3-display,block)}.YzqVVZ{overflow:visible;position:relative}.mwF7X1{backface-visibility:hidden}.YGilLk{cursor:pointer}.I5zqsT{display:block}.I5zqsT,.MW5IWV{height:100%;width:100%}.MW5IWV{left:0;-webkit-mask-image:var(--mask-image,none);mask-image:var(--mask-image,none);-webkit-mask-position:var(--mask-position,0);mask-position:var(--mask-position,0);-webkit-mask-repeat:var(--mask-repeat,no-repeat);mask-repeat:var(--mask-repeat,no-repeat);-webkit-mask-size:var(--mask-size,100%);mask-size:var(--mask-size,100%);overflow:hidden;pointer-events:var(--fill-layer-background-media-pointer-events);position:absolute;top:0}.MW5IWV.N3eg0s{clip:rect(0,auto,auto,0)}.MW5IWV .Kv1aVt{height:100%;position:absolute;top:0;width:100%}.MW5IWV .dLPlxY{height:var(--fill-layer-image-height,100%);opacity:var(--fill-layer-image-opacity)}.MW5IWV .dLPlxY img{height:100%;width:100%}@supports(-webkit-hyphens:none){.MW5IWV.N3eg0s{clip:auto;-webkit-clip-path:inset(0)}}.VgO9Yg{height:100%}.LWbAav{background-color:var(--bg-overlay-color);background-image:var(--bg-gradient);transition:var(--inherit-transition)}.K_YxMd,.yK6aSC{opacity:var(--fill-layer-video-opacity)}.NGjcJN{bottom:var(--media-padding-bottom);height:var(--media-padding-height);position:absolute;top:var(--media-padding-top);width:100%}.mNGsUM{transform:scale(var(--scale,1));transition:var(--transform-duration,transform 0s)}.K_YxMd{height:100%;position:relative;width:100%}.bX9O_S{-webkit-clip-path:var(--fill-layer-clip);clip-path:var(--fill-layer-clip)}.Z_wCwr,.bX9O_S{position:absolute;top:0}.Jxk_UL img,.Z_wCwr,.bX9O_S{height:100%;width:100%}.K8MSra{opacity:0}.K8MSra,.YTb3b4{position:absolute;top:0}.YTb3b4{height:0;left:0;overflow:hidden;width:0}.SUz0WK{left:0;pointer-events:var(--fill-layer-background-media-pointer-events);position:var(--fill-layer-background-media-position)}.FNxOn5,.SUz0WK,.m4khSP{height:100%;top:0;width:100%}.FNxOn5{position:absolute}.m4khSP{background-color:var(--fill-layer-background-overlay-color);opacity:var(--fill-layer-background-overlay-blend-opacity-fallback,1);position:var(--fill-layer-background-overlay-position);transform:var(--fill-layer-background-overlay-transform)}@supports(mix-blend-mode:overlay){.m4khSP{mix-blend-mode:var(--fill-layer-background-overlay-blend-mode);opacity:var(--fill-layer-background-overlay-blend-opacity,1)}}._C0cVf{bottom:0;left:0;position:absolute;right:0;top:0;width:100%}.hFwGTD{transform:translateY(-100%);transition:.2s ease-in}.IQgXoP{transition:.2s}.Nr3Nid{opacity:0;transition:.2s ease-in}.Nr3Nid.l4oO6c{z-index:-1!important}.iQuoC4{opacity:1;transition:.2s}.CJF7A2{height:auto}.CJF7A2,.U4Bvut{position:relative;width:100%}:host(:not(.device-mobile-optimized)) .G5K6X8,body:not(.device-mobile-optimized) .G5K6X8{margin-left:calc((100% - var(--site-width))/2);width:var(--site-width)}.xU8fqS[data-focuscycled=active]{outline:1px solid transparent}.xU8fqS[data-focuscycled=active]:not(:focus-within){outline:2px solid transparent;transition:outline .01s ease}.xU8fqS ._4XcTfy{background-color:var(--screenwidth-corvid-background-color,rgba(var(--bg,var(--color_11,color_11)),var(--alpha-bg,1)));border-bottom:var(--brwb,0) solid var(--screenwidth-corvid-border-color,rgba(var(--brd,var(--color_15,color_15)),var(--alpha-brd,1)));border-top:var(--brwt,0) solid var(--screenwidth-corvid-border-color,rgba(var(--brd,var(--color_15,color_15)),var(--alpha-brd,1)));bottom:0;box-shadow:var(--shd,0 0 5px rgba(0,0,0,.7));left:0;position:absolute;right:0;top:0}.xU8fqS .gUbusX{background-color:rgba(var(--bgctr,var(--color_11,color_11)),var(--alpha-bgctr,1));border-radius:var(--rd,0);bottom:var(--brwb,0);top:var(--brwt,0)}.xU8fqS .G5K6X8,.xU8fqS .gUbusX{left:0;position:absolute;right:0}.xU8fqS .G5K6X8{bottom:0;top:0}:host(.device-mobile-optimized) .xU8fqS .G5K6X8,body.device-mobile-optimized .xU8fqS .G5K6X8{left:10px;right:10px}.SPY_vo{pointer-events:none}.BmZ5pC{min-height:calc(100vh - var(--wix-ads-height));min-width:var(--site-width);position:var(--bg-position);top:var(--wix-ads-height)}.BmZ5pC,.nTOEE9{height:100%;width:100%}.nTOEE9{overflow:hidden;position:relative}.nTOEE9.sqUyGm:hover{cursor:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmMWUzNTlkMS1hYjZhLTNkNDctYmM0ZC03MWMyZDYyMWNmNDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODM3MEUzMUU4OTAyMTFFMzk3Q0FCMkFEODdDNzUzMjQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODM3MEUzMUQ4OTAyMTFFMzk3Q0FCMkFEODdDNzUzMjQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk0ZTkyMTRlLThiNDQtNjc0My04MWZiLTZlYjIzYTA2ZjcwNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpmMWUzNTlkMS1hYjZhLTNkNDctYmM0ZC03MWMyZDYyMWNmNDgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4bqsJgAAACF0lEQVR42mJgQAd8fHz/gdRvRigfxGEACCA4YvwPBMgCbgABBGOAJP6LiooiZBUUFMCC7969Awk6AQQQA1bAxMTUOnXq1P8/f/78j2zdf5BDQDgoKAgiyMgItv0/1AkozlgJlHwPpDWB+AhAACFL1EJVwvBPIGZHd8P/OXPmgI0F2YdmxXQUhX///sVQqK2tDVL4DFkhF8zK2NjY/4aGhshOOMJAJAB5ZjdAADGQCpiB4Cear3uwKQR74vv372BPLFq0CKZ4GnLcdMGiFtnXmzZtQo0Bdnb2r/b29nBFMIwUjkxghby8vHfFxMQwTMQWp0YggZcvX/5HBpqamhgKQdafAQnq6en9j4+P/4/me150nzsCPfYOKrkWKvYCymcjJozPgqIYIMAYcUjKAnEcELsDbVECOpkNiO8B+buAeCEQ3yUqFllYWNYh+4Obm/u/ubn5f0tLy//QPIqM90ATHVagDHTJH5BCfn7+/xcvXvyPC9y7d+8/KHqghv4FYj0M04BxeAOkQEhI6P+vX79QDECOeBj49+/ffzk5OZih91FyP4gAGiIDooH5hIGVlRUsAXQpGMMAMh+Y1xksLCzg5QxGrAFzwAxY2GzYsIGgC48cOYIclsuwBiIbG9sCmCJFRcX/+/fvxwi/EydOwIoDGH6JLQEiA26ga1egxSY2vAUpkcKKEV5iCwVOIObBU8w8RzLYgYHaAAACg5CxaxSLgwAAAABJRU5ErkJggg==),auto}.nTOEE9.C_JY0G:hover{cursor:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmMWUzNTlkMS1hYjZhLTNkNDctYmM0ZC03MWMyZDYyMWNmNDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0I4QkNGQTI4OTAyMTFFMzg0RDlBRkM5NDA5QjczRTEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0I4QkNGQTE4OTAyMTFFMzg0RDlBRkM5NDA5QjczRTEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk0ZTkyMTRlLThiNDQtNjc0My04MWZiLTZlYjIzYTA2ZjcwNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpmMWUzNTlkMS1hYjZhLTNkNDctYmM0ZC03MWMyZDYyMWNmNDgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7hiSPZAAACGklEQVR42mJgQAd8fHz/gdRvRigfxGEACCA4YvwPBMgCbgABBGOAJP6LiooiZBUUFMCC7969Awk6AQQQA1bAxMTUOnXq1P8/f/78j2zdf5BDQDgoKAgiyMgItv0/1AkozlgJlHwPpDWB+AhAACFL1EJVwvBPIGZHd8P/OXPm/EcHUA3TURT+/fsXQ6G2tjZI4TNkhVwwK2NjY/8bGhoiO+EIA5EA5JndAAHEQCpgBoKfaL7uwaYQHLrfv38He2LRokUwxdOQ46YLFrXIYNOmTagxwM7O/tXe3h4sCYs3EEYKRyawQl5e3rtiYmL/sQH0ODUCCbx8+RJFkaamJoZCkPVnQIJ6enr/4+Pj/6P5nhfd545Aj72DSq6Fir2A8tmICeOzoCgGCDBGHJKyQBwHxO5AW5SATmYD4ntA/i4gXgjEd4mKRRYWlnXI/uDm5v5vbm7+39LS8j80jyLjPdBEhxUoA13yB6SQn5///8WLF//jAvfu3fsPih6ooX+BWA/DNGAc3gApEBIS+v/r16//hMC/f//+y8nJwQy9j2wWC4gAGiIDooH5hIGVlRUsAXQpVq98/PgRVBAwWFhYMDx69AhczkBj7RdyFpgBC5sNGzYQdOGRI0eQw3IZVpvZ2NgWwBQpKir+379/P4ZBJ06cgBUHMPwSWwJEBtxA165Ai01seAtSIoUVI7zEFgqcQMyDp5h5jmSwAwO1AQBU5q033XYWQwAAAABJRU5ErkJggg==),auto}.RZQnmg{background-color:rgb(var(--color_11));border-radius:300px;bottom:0;cursor:pointer;height:40px;margin:16px 16px;opacity:0;pointer-events:none;position:absolute;right:0;width:40px}.RZQnmg path{fill:rgb(var(--color_12))}.RZQnmg:focus{cursor:auto;opacity:1;pointer-events:auto}.rYiAuL{cursor:pointer}.gSXewE{height:0;left:0;overflow:hidden;top:0;width:0}.OJQ_3L,.gSXewE{position:absolute}.OJQ_3L{background-color:rgb(var(--color_11));border-radius:300px;bottom:0;cursor:pointer;height:40px;margin:16px 16px;opacity:0;pointer-events:none;right:0;width:40px}.OJQ_3L path{fill:rgb(var(--color_12))}.OJQ_3L:focus{cursor:auto;opacity:1;pointer-events:auto}.j7pOnl{box-sizing:border-box;height:100%;width:100%}.BI8PVQ{min-height:var(--image-min-height);min-width:var(--image-min-width)}.BI8PVQ img,img.BI8PVQ{filter:var(--filter-effect-svg-url);-webkit-mask-image:var(--mask-image,none);mask-image:var(--mask-image,none);-webkit-mask-position:var(--mask-position,0);mask-position:var(--mask-position,0);-webkit-mask-repeat:var(--mask-repeat,no-repeat);mask-repeat:var(--mask-repeat,no-repeat);-webkit-mask-size:var(--mask-size,100% 100%);mask-size:var(--mask-size,100% 100%);-o-object-position:var(--object-position);object-position:var(--object-position)}.MazNVa{left:var(--left,auto);position:var(--position-fixed,static);top:var(--top,auto);z-index:var(--z-index,auto)}.MazNVa .BI8PVQ img{box-shadow:0 0 0 #000;position:static;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.MazNVa .j7pOnl{display:block;overflow:hidden}.MazNVa .BI8PVQ{overflow:hidden}.c7cMWz{bottom:0;left:0;position:absolute;right:0;top:0}.FVGvCX{height:auto;position:relative;width:100%}body:not(.responsive) .zK7MhX{align-self:start;grid-area:1/1/1/1;height:100%;justify-self:stretch;left:0;position:relative}:host(:not(.device-mobile-optimized)) .c7cMWz,body:not(.device-mobile-optimized) .c7cMWz{margin-left:calc((100% - var(--site-width))/2);width:var(--site-width)}.fEm0Bo .c7cMWz{background-color:rgba(var(--bg,var(--color_11,color_11)),var(--alpha-bg,1));overflow:hidden}:host(.device-mobile-optimized) .c7cMWz,body.device-mobile-optimized .c7cMWz{left:10px;right:10px}.PFkO7r{bottom:0;left:0;position:absolute;right:0;top:0}.HT5ybB{height:auto;position:relative;width:100%}body:not(.responsive) .dBAkHi{align-self:start;grid-area:1/1/1/1;height:100%;justify-self:stretch;left:0;position:relative}:host(:not(.device-mobile-optimized)) .PFkO7r,body:not(.device-mobile-optimized) .PFkO7r{margin-left:calc((100% - var(--site-width))/2);width:var(--site-width)}:host(.device-mobile-optimized) .PFkO7r,body.device-mobile-optimized .PFkO7r{left:10px;right:10px}</style>
<style data-href="https://static.parastorage.com/services/editor-elements-library/dist/thunderbolt/rb_wixui.thunderbolt[FormContainer_FormContainerSkin].bbc5b359.min.css">.JVi7i2,.hrbzfT{background-color:var(--corvid-background-color,rgba(var(--bg,0,0,0),var(--alpha-bg,0)));border:solid var(--corvid-border-color,rgba(var(--brd,227,227,227),var(--alpha-brd,1))) var(--corvid-border-width,var(--brw,0));border-radius:var(--corvid-border-radius,var(--rd,0));box-shadow:var(--shd,0 0 0 transparent)}.d3n4V3{height:100%;left:-var(--corvid-border-width,var(--brw,0));position:absolute;top:-var(--corvid-border-width,var(--brw,0));width:100%}</style>
<style data-href="https://static.parastorage.com/services/editor-elements-library/dist/thunderbolt/rb_wixui.thunderbolt[SkipToContentButton].39deac6a.min.css">.LHrbPP{background:#fff;border-radius:24px;color:#116dff;cursor:pointer;font-family:Helvetica,Arial,メイリオ,meiryo,ヒラギノ角ゴ pro w3,hiragino kaku gothic pro,sans-serif;font-size:14px;height:0;left:50%;margin-left:-94px;opacity:0;padding:0 24px 0 24px;pointer-events:none;position:absolute;top:60px;width:0;z-index:9999}.LHrbPP:focus{border:2px solid;height:40px;opacity:1;pointer-events:auto;width:auto}</style>
<style data-href="https://static.parastorage.com/services/editor-elements-library/dist/thunderbolt/rb_wixui.thunderbolt[ClassicSection].1a2cb873.min.css">.MW5IWV{height:100%;left:0;-webkit-mask-image:var(--mask-image,none);mask-image:var(--mask-image,none);-webkit-mask-position:var(--mask-position,0);mask-position:var(--mask-position,0);-webkit-mask-repeat:var(--mask-repeat,no-repeat);mask-repeat:var(--mask-repeat,no-repeat);-webkit-mask-size:var(--mask-size,100%);mask-size:var(--mask-size,100%);overflow:hidden;pointer-events:var(--fill-layer-background-media-pointer-events);position:absolute;top:0;width:100%}.MW5IWV.N3eg0s{clip:rect(0,auto,auto,0)}.MW5IWV .Kv1aVt{height:100%;position:absolute;top:0;width:100%}.MW5IWV .dLPlxY{height:var(--fill-layer-image-height,100%);opacity:var(--fill-layer-image-opacity)}.MW5IWV .dLPlxY img{height:100%;width:100%}@supports(-webkit-hyphens:none){.MW5IWV.N3eg0s{clip:auto;-webkit-clip-path:inset(0)}}.VgO9Yg{height:100%}.LWbAav{background-color:var(--bg-overlay-color);background-image:var(--bg-gradient);transition:var(--inherit-transition)}.K_YxMd,.yK6aSC{opacity:var(--fill-layer-video-opacity)}.NGjcJN{bottom:var(--media-padding-bottom);height:var(--media-padding-height);position:absolute;top:var(--media-padding-top);width:100%}.mNGsUM{transform:scale(var(--scale,1));transition:var(--transform-duration,transform 0s)}.K_YxMd{height:100%;position:relative;width:100%}.Oqnisf{overflow:visible}.Oqnisf .MW5IWV .LWbAav{background-color:var(--section-corvid-background-color,var(--bg-overlay-color))}.cM88eO{backface-visibility:hidden}.YtfWHd{left:0;position:absolute;top:0}.HlRz5e{display:block;height:100%;width:100%}.HlRz5e img{max-width:var(--wix-img-max-width,100%)}.HlRz5e[data-animate-blur] img{filter:blur(9px);transition:filter .8s ease-in}.HlRz5e[data-animate-blur] img[data-load-done]{filter:none}.I5zqsT{display:block;height:100%;width:100%}.bX9O_S{-webkit-clip-path:var(--fill-layer-clip);clip-path:var(--fill-layer-clip)}.Z_wCwr,.bX9O_S{position:absolute;top:0}.Jxk_UL img,.Z_wCwr,.bX9O_S{height:100%;width:100%}.K8MSra{opacity:0}.K8MSra,.YTb3b4{position:absolute;top:0}.YTb3b4{height:0;left:0;overflow:hidden;width:0}.SUz0WK{left:0;pointer-events:var(--fill-layer-background-media-pointer-events);position:var(--fill-layer-background-media-position)}.FNxOn5,.SUz0WK,.m4khSP{height:100%;top:0;width:100%}.FNxOn5{position:absolute}.m4khSP{background-color:var(--fill-layer-background-overlay-color);opacity:var(--fill-layer-background-overlay-blend-opacity-fallback,1);position:var(--fill-layer-background-overlay-position);transform:var(--fill-layer-background-overlay-transform)}@supports(mix-blend-mode:overlay){.m4khSP{mix-blend-mode:var(--fill-layer-background-overlay-blend-mode);opacity:var(--fill-layer-background-overlay-blend-opacity,1)}}.dkukWC{--divider-pin-height__:min(1,calc(var(--divider-layers-pin-factor__) + 1));--divider-pin-layer-height__:var(--divider-layers-pin-factor__);--divider-pin-border__:min(1,calc(var(--divider-layers-pin-factor__) / -1 + 1));height:calc(var(--divider-height__) + var(--divider-pin-height__)*var(--divider-layers-size__)*var(--divider-layers-y__))}.dkukWC,.dkukWC .FRCqDF{left:0;position:absolute;width:100%}.dkukWC .FRCqDF{--divider-layer-i__:var(--divider-layer-i,0);background-position:left calc(50% + var(--divider-offset-x__) + var(--divider-layers-x__)*var(--divider-layer-i__)) bottom;background-repeat:repeat-x;border-bottom-style:solid;border-bottom-width:calc(var(--divider-pin-border__)*var(--divider-layer-i__)*var(--divider-layers-y__));height:calc(var(--divider-height__) + var(--divider-pin-layer-height__)*var(--divider-layer-i__)*var(--divider-layers-y__));opacity:calc(1 - var(--divider-layer-i__)/(var(--divider-layer-i__) + 1))}.xnZvZH{--divider-height__:var(--divider-top-height,auto);--divider-offset-x__:var(--divider-top-offset-x,0px);--divider-layers-size__:var(--divider-top-layers-size,0);--divider-layers-y__:var(--divider-top-layers-y,0px);--divider-layers-x__:var(--divider-top-layers-x,0px);--divider-layers-pin-factor__:var(--divider-top-layers-pin-factor,0);border-top:var(--divider-top-padding,0) solid var(--divider-top-color,currentColor);opacity:var(--divider-top-opacity,1);top:0;transform:var(--divider-top-flip,scaleY(-1))}.xnZvZH .FRCqDF{background-image:var(--divider-top-image,none);background-size:var(--divider-top-size,contain);border-color:var(--divider-top-color,currentColor);bottom:0;filter:var(--divider-top-filter,none)}.xnZvZH .FRCqDF[data-divider-layer="1"]{display:var(--divider-top-layer-1-display,block)}.xnZvZH .FRCqDF[data-divider-layer="2"]{display:var(--divider-top-layer-2-display,block)}.xnZvZH .FRCqDF[data-divider-layer="3"]{display:var(--divider-top-layer-3-display,block)}.MBOSCN{--divider-height__:var(--divider-bottom-height,auto);--divider-offset-x__:var(--divider-bottom-offset-x,0px);--divider-layers-size__:var(--divider-bottom-layers-size,0);--divider-layers-y__:var(--divider-bottom-layers-y,0px);--divider-layers-x__:var(--divider-bottom-layers-x,0px);--divider-layers-pin-factor__:var(--divider-bottom-layers-pin-factor,0);border-bottom:var(--divider-bottom-padding,0) solid var(--divider-bottom-color,currentColor);bottom:0;opacity:var(--divider-bottom-opacity,1);transform:var(--divider-bottom-flip,none)}.MBOSCN .FRCqDF{background-image:var(--divider-bottom-image,none);background-size:var(--divider-bottom-size,contain);border-color:var(--divider-bottom-color,currentColor);bottom:0;filter:var(--divider-bottom-filter,none)}.MBOSCN .FRCqDF[data-divider-layer="1"]{display:var(--divider-bottom-layer-1-display,block)}.MBOSCN .FRCqDF[data-divider-layer="2"]{display:var(--divider-bottom-layer-2-display,block)}.MBOSCN .FRCqDF[data-divider-layer="3"]{display:var(--divider-bottom-layer-3-display,block)}</style>
<style data-href="https://static.parastorage.com/services/editor-elements-library/dist/thunderbolt/rb_wixui.thunderbolt[Container_DefaultAreaSkin].83571854.min.css">.J6KGih{cursor:pointer}.KaEeLN{--container-corvid-border-color:rgba(var(--brd,var(--color_15,color_15)),var(--alpha-brd,1));--container-corvid-border-size:var(--brw,1px);--container-corvid-background-color:rgba(var(--bg,var(--color_11,color_11)),var(--alpha-bg,1));--backdrop-filter:$backdrop-filter}.uYj0Sg{-webkit-backdrop-filter:var(--backdrop-filter,none);backdrop-filter:var(--backdrop-filter,none);background-color:var(--container-corvid-background-color,rgba(var(--bg,var(--color_11,color_11)),var(--alpha-bg,1)));background-image:var(--bg-gradient,none);border:var(--container-corvid-border-width,var(--brw,1px)) solid var(--container-corvid-border-color,rgba(var(--brd,var(--color_15,color_15)),var(--alpha-brd,1)));border-radius:var(--rd,5px);bottom:0;box-shadow:var(--shd,0 1px 4px rgba(0,0,0,.6));left:0;position:absolute;right:0;top:0}</style>
<style data-href="https://static.parastorage.com/services/wix-thunderbolt/dist/TPABaseComponent.27e1e284.chunk.min.css">.OQ8Tzd,.nKphmK{overflow:hidden}.nKphmK{height:100%;position:relative;width:100%}.nKphmK:-ms-fullscreen{min-height:auto!important}.nKphmK:fullscreen{min-height:auto!important}.pvlz2w{visibility:hidden}</style>
<style data-href="https://static.parastorage.com/services/wix-thunderbolt/dist/group_7.bae0ce0c.chunk.min.css">.TWFxr5{height:auto!important}.May50y{overflow:hidden!important}</style>
<title>Página Inicial | Lista De Tarefas 1</title>
  <link rel="canonical" href="https://www.sheminimalist.com"/>
  <meta name="robots" content="noindex"/>
  <meta property="og:title" content="Página Inicial | Lista De Tarefas 1"/>
  <meta property="og:url" content="https://www.sheminimalist.com"/>
  <meta property="og:site_name" content="Lista De Tarefas 1"/>
  <meta property="og:type" content="website"/>
  <script type="application/ld+json">{"@context":"https://schema.org/","@type":"WebSite","name":"Lista De Tarefas 1","url":"https://www.sheminimalist.com"}</script>
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:title" content="Página Inicial | Lista De Tarefas 1"/>
<style rel="stylesheet" data-href="https://static.parastorage.com/services/events-viewer/1.3110.0/widgetViewerWidget.min.css">.ssMTJqm.oGbuooN--madefor,.sxe4Qt4.oMchY0K--madefor{--wbu-font-stack:var(--wix-font-stack);--wbu-font-weight-regular:var(--wix-font-weight-regular);--wbu-font-weight-medium:var(--wix-font-weight-medium);--wbu-font-weight-bold:var(--wix-font-weight-bold)}.S2Q_Li{margin-top:20px}.S2Q_Li,.lZm73x{display:flex;justify-content:center;width:100%}.lZm73x{align-items:center;border:1px solid rgb(var(--wix-color-5),.3);flex-direction:column;max-width:940px;padding:64px 24px;text-align:center}.G6CZ_8{color:rgb(var(--wix-color-5));font:var(--wix-font-Body-M);font-size:20px;line-height:1.4;margin-bottom:15px}.KYOjGv{color:rgb(var(--wix-color-5))}.KYOjGv,.KfA2EQ{font:var(--wix-font-Body-M);font-size:16px;line-height:1.5}.KfA2EQ{border:1px solid rgb(var(--wix-color-8));color:rgb(var(--wix-color-8));cursor:pointer;margin-top:32px;padding:8px 16px}@media(max-width:1044px){.lZm73x{margin:0 20px}}@media(max-width:750px){.lZm73x{padding:40px 24px}}._SbO6q{font-size:16px;height:100%;min-height:20px;overflow:hidden}._SbO6q *{box-sizing:border-box}.ZTYKRB{overflow:visible}</style>
<style rel="stylesheet" data-href="https://static.parastorage.com/services/events-viewer/1.3110.0/widgetViewerWidget.min.css">.ssMTJqm.oGbuooN--madefor,.sxe4Qt4.oMchY0K--madefor{--wbu-font-stack:var(--wix-font-stack);--wbu-font-weight-regular:var(--wix-font-weight-regular);--wbu-font-weight-medium:var(--wix-font-weight-medium);--wbu-font-weight-bold:var(--wix-font-weight-bold)}.S2Q_Li{margin-top:20px}.S2Q_Li,.lZm73x{display:flex;justify-content:center;width:100%}.lZm73x{align-items:center;border:1px solid rgb(var(--wix-color-5),.3);flex-direction:column;max-width:940px;padding:64px 24px;text-align:center}.G6CZ_8{color:rgb(var(--wix-color-5));font:var(--wix-font-Body-M);font-size:20px;line-height:1.4;margin-bottom:15px}.KYOjGv{color:rgb(var(--wix-color-5))}.KYOjGv,.KfA2EQ{font:var(--wix-font-Body-M);font-size:16px;line-height:1.5}.KfA2EQ{border:1px solid rgb(var(--wix-color-8));color:rgb(var(--wix-color-8));cursor:pointer;margin-top:32px;padding:8px 16px}@media(max-width:1044px){.lZm73x{margin:0 20px}}@media(max-width:750px){.lZm73x{padding:40px 24px}}._SbO6q{font-size:16px;height:100%;min-height:20px;overflow:hidden}._SbO6q *{box-sizing:border-box}.ZTYKRB{overflow:visible}</style>
<!-- Loadable Component comp-jnmtd6qs -->
<style data-href="https://static.parastorage.com/services/events-viewer/1.3110.0/client-viewer/5431.chunk.min.css">.seduTAo,.soEpjwf{outline:0}.sk16e2z{display:inline-flex;flex-direction:row}.s__4s5Aa9,.s__5LWWvH{align-items:center;display:flex;overflow:hidden;position:relative}.s__5LWWvH{aspect-ratio:1;border-radius:50%;justify-content:center;letter-spacing:0;text-align:center}.srxDUbR{--wix-ui-tpa-wow-image-border-radius:calc(50 * 1%);font-size:medium;height:100%;width:100%}.sIce1Hx:before,.sYFGzBI:before{height:100%;position:absolute;width:100%}.sIce1Hx:before{align-items:center;content:attr(data-initials);display:flex;justify-content:center}.sYFGzBI:before{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3Cstyle%3E.cls-anonymous-icon{fill:%23969696}%3C/style%3E%3C/defs%3E%3Cellipse class='cls-anonymous-icon' cx='103.7' cy='74.3' rx='38.3' ry='38.7'/%3E%3Cpath style='fill:none' d='M0 0h200v200H0z'/%3E%3Cpath class='cls-anonymous-icon' d='M188.4 200c-7.4-43.6-44.2-76.8-88.4-76.8S19 156.4 11.6 200Z'/%3E%3C/svg%3E");content:""}.sif9Lvj{align-items:center;cursor:pointer;display:inline-flex}.sHICw9H,.sw5N_H7{flex-shrink:0}.sif9Lvj.oVxUPr7--disabled{cursor:default}.sif9Lvj[disabled]{pointer-events:none}.sr3x_Jq{--Text1297168438-primary-color:rgb(var(--wix-ui-tpa-text-main-text-color,var(--wix-color-5)));--Text1297168438-secondary-color:rgb(var(--wix-ui-tpa-text-main-text-color,var(--wix-color-4)))}.sr3x_Jq.onmsXom---priority-7-primary{color:var(--wut-text-color,var(--Text1297168438-primary-color))}.sr3x_Jq.onmsXom---priority-9-secondary{color:var(--wut-placeholder-color,var(--Text1297168438-secondary-color))}.sr3x_Jq.onmsXom---typography-10-smallTitle{font-family:var(--wix-ui-tpa-text-main-text-font-family,var(--wix-font-Page-title-family));font-size:var(--wix-ui-tpa-text-main-text-font-size,24px);font-style:var(--wix-ui-tpa-text-main-text-font-style,var(--wix-font-Page-title-style));font-variant:var(--wix-ui-tpa-text-main-text-font-variant,var(--wix-font-Page-title-variant));font-weight:var(--wix-ui-tpa-text-main-text-font-weight,var(--wix-font-Page-title-weight));line-height:var(--wix-ui-tpa-text-main-text-font-line-height,1.33em);text-decoration:var(--wix-ui-tpa-text-main-text-font-text-decoration,var(--wix-font-Page-title-text-decoration))}.sr3x_Jq.onmsXom---typography-11-runningText{line-height:var(--wix-ui-tpa-text-main-text-font-line-height,1.5em)}.sr3x_Jq.onmsXom---typography-11-runningText,.sr3x_Jq.onmsXom---typography-8-listText{font-family:var(--wix-ui-tpa-text-main-text-font-family,var(--wix-font-Body-M-family));font-size:var(--wix-ui-tpa-text-main-text-font-size,16px);font-style:var(--wix-ui-tpa-text-main-text-font-style,var(--wix-font-Body-M-style));font-variant:var(--wix-ui-tpa-text-main-text-font-variant,var(--wix-font-Body-M-variant));font-weight:var(--wix-ui-tpa-text-main-text-font-weight,var(--wix-font-Body-M-weight));text-decoration:var(--wix-ui-tpa-text-main-text-font-text-decoration,var(--wix-font-Body-M-text-decoration))}.sr3x_Jq.onmsXom---typography-8-listText{line-height:var(--wix-ui-tpa-text-main-text-font-line-height,2em)}.sr3x_Jq.onmsXom---typography-10-largeTitle{font-family:var(--wix-ui-tpa-text-main-text-font-family,var(--wix-font-Heading-M-family));font-size:var(--wix-ui-tpa-text-main-text-font-size,32px);font-style:var(--wix-ui-tpa-text-main-text-font-style,var(--wix-font-Heading-M-style));font-variant:var(--wix-ui-tpa-text-main-text-font-variant,var(--wix-font-Heading-M-variant));font-weight:var(--wix-ui-tpa-text-main-text-font-weight,var(--wix-font-Heading-M-weight));line-height:var(--wix-ui-tpa-text-main-text-font-line-height,1.25em);text-decoration:var(--wix-ui-tpa-text-main-text-font-text-decoration,var(--wix-font-Heading-M-text-decoration))}.sr3x_Jq.onmsXom--mobile.onmsXom---typography-10-smallTitle{font-family:var(--wix-ui-tpa-text-main-text-font-family,var(--wix-font-Page-title-family));font-size:var(--wix-ui-tpa-text-main-text-font-size,20px);font-style:var(--wix-ui-tpa-text-main-text-font-style,var(--wix-font-Page-title-style));font-variant:var(--wix-ui-tpa-text-main-text-font-variant,var(--wix-font-Page-title-variant));font-weight:var(--wix-ui-tpa-text-main-text-font-weight,var(--wix-font-Page-title-weight));line-height:var(--wix-ui-tpa-text-main-text-font-line-height,1.4em);text-decoration:var(--wix-ui-tpa-text-main-text-font-text-decoration,var(--wix-font-Page-title-text-decoration))}.sr3x_Jq.onmsXom--mobile.onmsXom---typography-11-runningText{line-height:var(--wix-ui-tpa-text-main-text-font-line-height,1.42em)}.sr3x_Jq.onmsXom--mobile.onmsXom---typography-11-runningText,.sr3x_Jq.onmsXom--mobile.onmsXom---typography-8-listText{font-family:var(--wix-ui-tpa-text-main-text-font-family,var(--wix-font-Body-M-family));font-size:var(--wix-ui-tpa-text-main-text-font-size,14px);font-style:var(--wix-ui-tpa-text-main-text-font-style,var(--wix-font-Body-M-style));font-variant:var(--wix-ui-tpa-text-main-text-font-variant,var(--wix-font-Body-M-variant));font-weight:var(--wix-ui-tpa-text-main-text-font-weight,var(--wix-font-Body-M-weight));text-decoration:var(--wix-ui-tpa-text-main-text-font-text-decoration,var(--wix-font-Body-M-text-decoration))}.sr3x_Jq.onmsXom--mobile.onmsXom---typography-8-listText{line-height:var(--wix-ui-tpa-text-main-text-font-line-height,1.72em)}.sr3x_Jq.onmsXom--mobile.onmsXom---typography-10-largeTitle{font-family:var(--wix-ui-tpa-text-main-text-font-family,var(--wix-font-Heading-M-family));font-size:var(--wix-ui-tpa-text-main-text-font-size,24px);font-style:var(--wix-ui-tpa-text-main-text-font-style,var(--wix-font-Heading-M-style));font-variant:var(--wix-ui-tpa-text-main-text-font-variant,var(--wix-font-Heading-M-variant));font-weight:var(--wix-ui-tpa-text-main-text-font-weight,var(--wix-font-Heading-M-weight));line-height:var(--wix-ui-tpa-text-main-text-font-line-height,1.33em);text-decoration:var(--wix-ui-tpa-text-main-text-font-text-decoration,var(--wix-font-Heading-M-text-decoration))}.sSJb9TI{clip:rect(1px,1px,1px,1px)!important;border:0!important;-webkit-clip-path:inset(50%)!important;clip-path:inset(50%)!important;height:1px!important;margin:-1px!important;overflow:hidden!important;padding:0!important;position:absolute!important;white-space:nowrap!important;width:1px!important}.sFqMrFy{--Spinner824016625-diameter:var(--wix-ui-tpa-spinner-diameter,50px);animation:Spinner824016625__rotate 2s linear infinite;height:var(--Spinner824016625-diameter);left:auto;top:auto;width:var(--Spinner824016625-diameter)}.s__0IZGD6{stroke:rgb(var(--wix-ui-tpa-spinner-path-color,var(--wix-color-5)));animation:Spinner824016625__dash 1.5s ease-in-out infinite}.sFqMrFy.o__450uKE--centered{left:calc(50% - var(--Spinner824016625-diameter)/2);position:absolute;top:calc(50% - var(--Spinner824016625-diameter)/2)}.sFqMrFy.o__450uKE--static,.sFqMrFy.o__450uKE--static .s__0IZGD6{animation:none}@keyframes Spinner824016625__rotate{to{transform:rotate(1turn)}}@keyframes Spinner824016625__dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}to{stroke-dasharray:90,150;stroke-dashoffset:-124}}.sKLwRHO{background-color:#d8d8d8}.sKLwRHO .srxDUbR,.sKLwRHO:before{color:#979797;font-family:Madefor,Helvetica Neue,Helvetica,Arial,メイリオ,meiryo,ヒラギノ角ゴ pro w3,hiragino kaku gothic pro,sans-serif;font-weight:500}.sKLwRHO.oYmzR2y---size-6-xLarge{font-size:20px;height:60px;width:60px}.sKLwRHO.oYmzR2y---size-5-large{font-size:18px;height:52px;width:52px}.sKLwRHO.oYmzR2y---size-6-medium{font-size:12px;height:36px;width:36px}.sKLwRHO.oYmzR2y---size-5-small{font-size:9px;height:28px;width:28px}.sKLwRHO.oYmzR2y---size-6-xSmall{font-size:7px;height:20px;width:20px}.sKLwRHO.oYmzR2y---size-7-xxSmall{font-size:5px;height:16px;width:16px}.s__2Q3iK3{--WowImage1821133350-transparent:0,0,0,0;display:flex;height:100%;position:relative}.s__2Q3iK3.ofvh9i8--forceImageContain.ofvh9i8---resize-7-contain{width:100%}.s__2Q3iK3.ofvh9i8--forceImageContain.ofvh9i8---resize-7-contain>*{align-items:center;border:inherit;border-radius:inherit;display:flex;justify-content:center}.s__2Q3iK3.ofvh9i8--forceImageContain.ofvh9i8---resize-7-contain img{border:inherit;border-radius:inherit;height:unset!important;max-height:100%;max-width:100%;width:unset!important}.s__2Q3iK3.ofvh9i8--forceImageContain.ofvh9i8---resize-7-contain.ofvh9i8--verticalContainer img{width:min(var(--wut-source-width,100%),100%)!important}.s__2Q3iK3.ofvh9i8--forceImageContain.ofvh9i8---resize-7-contain.ofvh9i8--horizontalContainer img{height:min(var(--wut-source-height,100%),100%)!important}.s__2Q3iK3.ofvh9i8--noImage{background-color:rgb(var(--wix-color-5),.2)}.s__2Q3iK3 img{vertical-align:middle}.s__2Q3iK3.ofvh9i8--focalPoint img{object-position:var(--WowImage1821133350-focalPointX,0) var(--WowImage1821133350-focalPointY,0)}.s__2Q3iK3.ofvh9i8---resize-7-contain .s__5SKJ9H{object-fit:contain}.s__2Q3iK3.ofvh9i8---resize-5-cover .s__5SKJ9H{object-fit:cover}.s__2Q3iK3.ofvh9i8--fluid .s__5SKJ9H{height:100%;overflow:hidden;width:100%}.s__2Q3iK3:not(.ofvh9i8--stretchImage){align-items:center}.s__2Q3iK3.ofvh9i8--fluid:not(.ofvh9i8--stretchImage) .s__5SKJ9H,.s__2Q3iK3:not(.ofvh9i8--stretchImage) .s__5SKJ9H{height:min(var(--wut-source-height,100%),100%);margin:0 auto;width:min(var(--wut-source-width,100%),100%)}.s__2Q3iK3.ofvh9i8---hoverEffect-4-zoom{overflow:hidden}.s__2Q3iK3.ofvh9i8---hoverEffect-4-zoom .s__5SKJ9H{overflow:initial;transform:scale(calc(100/107)) translate(-3.5%,-3.5%);transition:all .5s cubic-bezier(.18,.73,.63,1)}.s__2Q3iK3.ofvh9i8---hoverEffect-4-zoom:hover .s__5SKJ9H{transform:scale(1) translate(-3.5%,-3.5%)}.s__2Q3iK3.ofvh9i8---hoverEffect-6-darken:hover .s__5SKJ9H{filter:brightness(85%) contrast(115%)}.s__2Q3iK3:not(.ofvh9i8--isError){background-color:rgb(var(--wix-ui-tpa-wow-image-background-color,var(--WowImage1821133350-transparent)));border:var(--wix-ui-tpa-wow-image-border-width,0) solid rgb(var(--wix-ui-tpa-wow-image-border-color,var(--WowImage1821133350-transparent)));border-radius:var(--wix-ui-tpa-wow-image-border-radius,0);overflow:hidden}.s__2Q3iK3:not(.ofvh9i8--isError).ofvh9i8--noImage{background-color:rgb(var(--wix-ui-tpa-wow-image-background-color,var(--wix-color-5),.2))}.s__2Q3iK3 .s__5SKJ9H{opacity:var(--wix-ui-tpa-wow-image-image-opacity,1)}.s__2Q3iK3.ofvh9i8--isError{background-color:rgb(var(--wix-color-2));position:relative}.s__2Q3iK3.ofvh9i8--isError img{display:none}.s__2Q3iK3 .sMOe22c{align-items:center;background:rgb(0,0,0,.6);display:flex;flex-direction:column;height:100%;justify-content:center;position:absolute;width:100%;z-index:1}.sY02ebc{--wix-ui-tpa-text-main-text-color:var(--wix-color-1),1;--wix-ui-tpa-text-main-text-color-rgb:var(--wix-color-1);--wix-ui-tpa-text-main-text-color-opacity:1;--wix-ui-tpa-text-main-text-font-text-decoration:var(--wix-ui-tpa-picker-font-style-text-decoration,var(--wix-font-Body-M-text-decoration));--wix-ui-tpa-text-main-text-font-line-height:var(--wix-ui-tpa-picker-font-style-line-height,1.5em);--wix-ui-tpa-text-main-text-font-family:var(--wix-ui-tpa-picker-font-style-family,var(--wix-font-Body-M-family));--wix-ui-tpa-text-main-text-font-size:var(--wix-ui-tpa-picker-font-style-size,14px);--wix-ui-tpa-text-main-text-font-style:var(--wix-ui-tpa-picker-font-style-style,var(--wix-font-Body-M-style));--wix-ui-tpa-text-main-text-font-variant:var(--wix-ui-tpa-picker-font-style-variant,var(--wix-font-Body-M-variant));--wix-ui-tpa-text-main-text-font-weight:var(--wix-ui-tpa-picker-font-style-weight,var(--wix-font-Body-M-weight))}.sVIeY60{clip:rect(1px,1px,1px,1px)!important;border:0!important;-webkit-clip-path:inset(50%)!important;clip-path:inset(50%)!important;height:1px!important;margin:-1px!important;overflow:hidden!important;padding:0!important;position:absolute!important;white-space:nowrap!important;width:1px!important}.sNhHPgD{color:rgb(var(--wix-color-1))}.s__3_4n6K{background-color:rgb(0,0,0,.6);display:none;height:100%;left:0;position:absolute;top:0;width:100%}.s__2Q3iK3.ofvh9i8--loadSpinner:not(.ofvh9i8--loaded) .s__3_4n6K{display:block}.soryhx4 .s__0IZGD6{stroke:#fff}.sR2mOpr{background-color:transparent;border:0;font-size:var(--wix-ui-tpa-text-button-main-text-font-size,16px);line-height:var(--wix-ui-tpa-text-button-main-text-font-line-height,1.5em);padding:0;text-decoration:none}.sR2mOpr,.sR2mOpr.o__9yQGZy--mobile{font-family:var(--wix-ui-tpa-text-button-main-text-font-family,var(--wix-font-Body-M-family));font-style:var(--wix-ui-tpa-text-button-main-text-font-style,var(--wix-font-Body-M-style));font-variant:var(--wix-ui-tpa-text-button-main-text-font-variant,var(--wix-font-Body-M-variant));font-weight:var(--wix-ui-tpa-text-button-main-text-font-weight,var(--wix-font-Body-M-weight));text-decoration:var(--wix-ui-tpa-text-button-main-text-font-text-decoration,var(--wix-font-Body-M-text-decoration))}.sR2mOpr.o__9yQGZy--mobile{font-size:var(--wix-ui-tpa-text-button-main-text-font-size,14px);line-height:var(--wix-ui-tpa-text-button-main-text-font-line-height,1.44em)}.sR2mOpr.o__9yQGZy---priority-7-primary{color:rgb(var(--wix-ui-tpa-text-button-main-text-color,var(--wix-color-8)))}.sR2mOpr.o__9yQGZy---priority-7-primary.onodcdP--focus,.sR2mOpr.o__9yQGZy---priority-7-primary:active,.sR2mOpr.o__9yQGZy---priority-7-primary:hover{color:rgb(var(--wix-ui-tpa-text-button-main-text-color-rgb,var(--wix-color-8)),calc(var(--wix-ui-tpa-text-button-main-text-color-opacity, 1)*.7))}.sR2mOpr.o__9yQGZy---priority-9-secondary{color:rgb(var(--wix-ui-tpa-text-button-main-text-color,var(--wix-color-5)))}.sR2mOpr.o__9yQGZy---priority-9-secondary.onodcdP--focus,.sR2mOpr.o__9yQGZy---priority-9-secondary:active,.sR2mOpr.o__9yQGZy---priority-9-secondary:hover{color:rgb(var(--wix-ui-tpa-text-button-main-text-color-rgb,var(--wix-color-5)),calc(var(--wix-ui-tpa-text-button-main-text-color-opacity, 1)*.7))}.sR2mOpr.o__9yQGZy---priority-4-link{color:rgb(var(--wix-ui-tpa-text-button-main-text-color,var(--wix-color-5)));text-decoration:underline}.sR2mOpr.o__9yQGZy---priority-4-link.onodcdP--focus,.sR2mOpr.o__9yQGZy---priority-4-link:active,.sR2mOpr.o__9yQGZy---priority-4-link:hover{color:rgb(var(--wix-ui-tpa-text-button-main-text-color-rgb,var(--wix-color-5)),calc(var(--wix-ui-tpa-text-button-main-text-color-opacity, 1)*.7))}.sR2mOpr.o__9yQGZy---priority-4-link.oVxUPr7--disabled,.sR2mOpr.o__9yQGZy---priority-7-primary.oVxUPr7--disabled,.sR2mOpr.o__9yQGZy---priority-9-secondary.oVxUPr7--disabled{color:rgb(var(--wix-color-3))}.skW7NNK svg{height:1.5em;margin:calc(-1*(1.5em/4)) 0;width:1.5em}.skW7NNK svg:not([fill=currentColor]) path{stroke:currentColor;fill:none}.sBeFvEj:before,.s_DdBRK:after{content:"";display:inline-block;height:1px;width:4px}.s__2Ub3w5{display:inline-flex;flex-direction:row}.s__2Ub3w5.odQThDl---size-5-large .sasnKd5,.s__2Ub3w5.odQThDl---size-6-xLarge .sasnKd5{padding-left:14px}.s__2Ub3w5.odQThDl---size-6-medium .sasnKd5{padding-left:12px}.s__2Ub3w5.odQThDl---size-5-small .sasnKd5{padding-left:10px}.s__2Ub3w5.odQThDl---size-6-xSmall .sasnKd5{padding-left:6px}.s__2Ub3w5.odQThDl---size-7-xxSmall .sasnKd5{padding-left:4px}.s__2Ub3w5.odQThDl---size-5-large .sx38xyu,.s__2Ub3w5.odQThDl---size-6-xLarge .sx38xyu{margin-left:-14px}.s__2Ub3w5.odQThDl---size-6-medium .sx38xyu{margin-left:-12px}.s__2Ub3w5.odQThDl---size-5-small .sx38xyu{margin-left:-10px}.s__2Ub3w5.odQThDl---size-6-xSmall .sx38xyu{margin-left:-6px}.s__2Ub3w5.odQThDl---size-7-xxSmall .sx38xyu{margin-left:-4px}.s__2Ub3w5 .socOxOb{border:1px solid;border-color:rgb(var(--wix-ui-tpa-avatar-group-avatar-border-color,var(--wix-color-1)))}.s__2Ub3w5.odQThDl---size-5-large .socOxOb,.s__2Ub3w5.odQThDl---size-5-small .socOxOb,.s__2Ub3w5.odQThDl---size-6-medium .socOxOb,.s__2Ub3w5.odQThDl---size-6-xLarge .socOxOb{border-width:2px}.sdqm4ud{align-items:center;display:flex}.odQThDl---size-5-large .sdqm4ud:before,.odQThDl---size-5-small .sdqm4ud:before,.odQThDl---size-6-medium .sdqm4ud:before,.odQThDl---size-6-xLarge .sdqm4ud:before{content:"\A0";width:12px}.odQThDl---size-6-xSmall .sdqm4ud:before{content:"\A0";width:10px}.odQThDl---size-7-xxSmall .sdqm4ud:before{content:"\A0";width:8px}.s__2Ub3w5.odQThDl---size-5-large .sc6KPy1,.s__2Ub3w5.odQThDl---size-5-small .sc6KPy1,.s__2Ub3w5.odQThDl---size-6-medium .sc6KPy1{--wix-ui-tpa-text-button-main-text-color:var(--wix-ui-tpa-avatar-group-text-button-color,var(--wix-color-5));--wix-ui-tpa-text-button-main-text-color-rgb:var(--wix-ui-tpa-avatar-group-text-button-color-rgb,var(--wix-color-5));--wix-ui-tpa-text-button-main-text-color-opacity:var(--wix-ui-tpa-avatar-group-text-button-color-opacity);--wix-ui-tpa-text-button-main-text-font-text-decoration:var(--wix-ui-tpa-avatar-group-text-button-font-text-decoration);--wix-ui-tpa-text-button-main-text-font-line-height:var(--wix-ui-tpa-avatar-group-text-button-font-line-height);--wix-ui-tpa-text-button-main-text-font-family:var(--wix-ui-tpa-avatar-group-text-button-font-family);--wix-ui-tpa-text-button-main-text-font-size:var(--wix-ui-tpa-avatar-group-text-button-font-size);--wix-ui-tpa-text-button-main-text-font-style:var(--wix-ui-tpa-avatar-group-text-button-font-style);--wix-ui-tpa-text-button-main-text-font-variant:var(--wix-ui-tpa-avatar-group-text-button-font-variant);--wix-ui-tpa-text-button-main-text-font-weight:var(--wix-ui-tpa-avatar-group-text-button-font-weight)}.s__2Ub3w5.odQThDl---size-6-xSmall .sc6KPy1,.s__2Ub3w5.odQThDl---size-7-xxSmall .sc6KPy1{--wix-ui-tpa-text-button-main-text-color:var(--wix-ui-tpa-avatar-group-text-button-color,var(--wix-color-5));--wix-ui-tpa-text-button-main-text-color-rgb:var(--wix-ui-tpa-avatar-group-text-button-color-rgb,var(--wix-color-5));--wix-ui-tpa-text-button-main-text-color-opacity:var(--wix-ui-tpa-avatar-group-text-button-color-opacity);--wix-ui-tpa-text-button-main-text-font-text-decoration:var(--wix-ui-tpa-avatar-group-text-button-font-text-decoration,var(--wix-font-Body-M-text-decoration));--wix-ui-tpa-text-button-main-text-font-line-height:var(--wix-ui-tpa-avatar-group-text-button-font-line-height,1.44em);--wix-ui-tpa-text-button-main-text-font-family:var(--wix-ui-tpa-avatar-group-text-button-font-family,var(--wix-font-Body-M-family));--wix-ui-tpa-text-button-main-text-font-size:var(--wix-ui-tpa-avatar-group-text-button-font-size,14px);--wix-ui-tpa-text-button-main-text-font-style:var(--wix-ui-tpa-avatar-group-text-button-font-style,var(--wix-font-Body-M-style));--wix-ui-tpa-text-button-main-text-font-variant:var(--wix-ui-tpa-avatar-group-text-button-font-variant,var(--wix-font-Body-M-variant));--wix-ui-tpa-text-button-main-text-font-weight:var(--wix-ui-tpa-avatar-group-text-button-font-weight,var(--wix-font-Body-M-weight))}.L5u5gG{display:block;height:100%;width:100%}.L5u5gG img{max-width:var(--wix-img-max-width,100%)}.L5u5gG[data-animate-blur] img{filter:blur(9px);transition:filter .8s ease-in}.L5u5gG[data-animate-blur] img[data-load-done]{filter:none}</style><style data-href="https://static.parastorage.com/services/events-viewer/1.3110.0/client-viewer/SingleEvent.chunk.min.css">.sFpJVMj{--wix-ui-tpa-wow-image-background-color:255,255,255,0;--wix-ui-tpa-wow-image-background-color-rgb:255,255,255;--wix-ui-tpa-wow-image-background-color-opacity:0;--wix-ui-tpa-wow-image-image-opacity:calc(var(--multiImageOpacity, var(--listImageOpacity)) * 1%)}.sKV14Kk{--wix-ui-tpa-wow-image-background-color:255,255,255,0;--wix-ui-tpa-wow-image-background-color-rgb:255,255,255;--wix-ui-tpa-wow-image-background-color-opacity:0;--wix-ui-tpa-wow-image-image-opacity:calc(var(--multiImageOpacity) * 1%)}.scW1S6m{--wix-ui-tpa-wow-image-background-color:255,255,255,0;--wix-ui-tpa-wow-image-background-color-rgb:255,255,255;--wix-ui-tpa-wow-image-background-color-opacity:0;--wix-ui-tpa-wow-image-image-opacity:calc(var(--imageOpacity) * 1%)}.sdphgnc{display:inline-block}.sJnAwq6{cursor:pointer}.evStylesPresetV2 .s_k8Bou,.evStylesPresetV2 .slxYmAh{--wix-ui-tpa-avatar-group-avatar-border-color:255,255,255,1;--wix-ui-tpa-avatar-group-avatar-border-color-rgb:255,255,255;--wix-ui-tpa-avatar-group-avatar-border-color-opacity:1;--wix-ui-tpa-avatar-group-text-button-color:var(--linkColorV2);--wix-ui-tpa-avatar-group-text-button-color-rgb:var(--linkColorV2-rgb);--wix-ui-tpa-avatar-group-text-button-color-opacity:var(--linkColorV2-opacity);--wix-ui-tpa-avatar-group-text-button-font-text-decoration:var(--linkFontV2-text-decoration);--wix-ui-tpa-avatar-group-text-button-font-line-height:var(--linkFontV2-line-height);--wix-ui-tpa-avatar-group-text-button-font-family:var(--linkFontV2-family);--wix-ui-tpa-avatar-group-text-button-font-size:var(--linkFontV2-size);--wix-ui-tpa-avatar-group-text-button-font-style:var(--linkFontV2-style);--wix-ui-tpa-avatar-group-text-button-font-variant:var(--linkFontV2-variant);--wix-ui-tpa-avatar-group-text-button-font-weight:var(--linkFontV2-weight)}.evClassicPreset .s_k8Bou{--wix-ui-tpa-avatar-group-avatar-border-color:255,255,255,1;--wix-ui-tpa-avatar-group-avatar-border-color-rgb:255,255,255;--wix-ui-tpa-avatar-group-avatar-border-color-opacity:1;--wix-ui-tpa-avatar-group-text-button-color:var(--listContentTextColor);--wix-ui-tpa-avatar-group-text-button-color-rgb:var(--listContentTextColor-rgb);--wix-ui-tpa-avatar-group-text-button-color-opacity:var(--listContentTextColor-opacity);--wix-ui-tpa-avatar-group-text-button-font-text-decoration:var(--listContentTextFont-text-decoration);--wix-ui-tpa-avatar-group-text-button-font-line-height:var(--listContentTextFont-line-height);--wix-ui-tpa-avatar-group-text-button-font-family:var(--listContentTextFont-family);--wix-ui-tpa-avatar-group-text-button-font-size:var(--listContentTextFont-size);--wix-ui-tpa-avatar-group-text-button-font-style:var(--listContentTextFont-style);--wix-ui-tpa-avatar-group-text-button-font-variant:var(--listContentTextFont-variant);--wix-ui-tpa-avatar-group-text-button-font-weight:var(--listContentTextFont-weight)}.evClassicPreset .slxYmAh{--wix-ui-tpa-avatar-group-avatar-border-color:255,255,255,1;--wix-ui-tpa-avatar-group-avatar-border-color-rgb:255,255,255;--wix-ui-tpa-avatar-group-avatar-border-color-opacity:1;--wix-ui-tpa-avatar-group-text-button-color:var(--listHeaderTitleColor);--wix-ui-tpa-avatar-group-text-button-color-rgb:var(--listHeaderTitleColor-rgb);--wix-ui-tpa-avatar-group-text-button-color-opacity:var(--listHeaderTitleColor-opacity);--wix-ui-tpa-avatar-group-text-button-font-text-decoration:var(--listHeaderLocationFont-text-decoration);--wix-ui-tpa-avatar-group-text-button-font-line-height:var(--listHeaderLocationFont-line-height);--wix-ui-tpa-avatar-group-text-button-font-family:var(--listHeaderLocationFont-family);--wix-ui-tpa-avatar-group-text-button-font-size:var(--listHeaderLocationFont-size);--wix-ui-tpa-avatar-group-text-button-font-style:var(--listHeaderLocationFont-style);--wix-ui-tpa-avatar-group-text-button-font-variant:var(--listHeaderLocationFont-variant);--wix-ui-tpa-avatar-group-text-button-font-weight:var(--listHeaderLocationFont-weight)}.smKzSt2{--wix-ui-tpa-avatar-group-avatar-border-color:255,255,255,1;--wix-ui-tpa-avatar-group-avatar-border-color-rgb:255,255,255;--wix-ui-tpa-avatar-group-avatar-border-color-opacity:1;--wix-ui-tpa-avatar-group-text-button-color:var(--textsColor);--wix-ui-tpa-avatar-group-text-button-color-rgb:var(--textsColor-rgb);--wix-ui-tpa-avatar-group-text-button-color-opacity:var(--textsColor-opacity);--wix-ui-tpa-avatar-group-text-button-font-text-decoration:var(--compactTextsFont-text-decoration);--wix-ui-tpa-avatar-group-text-button-font-line-height:var(--compactTextsFont-line-height);--wix-ui-tpa-avatar-group-text-button-font-family:var(--compactTextsFont-family);--wix-ui-tpa-avatar-group-text-button-font-size:var(--compactTextsFont-size);--wix-ui-tpa-avatar-group-text-button-font-style:var(--compactTextsFont-style);--wix-ui-tpa-avatar-group-text-button-font-variant:var(--compactTextsFont-variant);--wix-ui-tpa-avatar-group-text-button-font-weight:var(--compactTextsFont-weight)}.slcQHRg{--wix-ui-tpa-avatar-group-avatar-border-color:255,255,255,1;--wix-ui-tpa-avatar-group-avatar-border-color-rgb:255,255,255;--wix-ui-tpa-avatar-group-avatar-border-color-opacity:1;--wix-ui-tpa-avatar-group-text-button-color:var(--calendarCellEventNameColor);--wix-ui-tpa-avatar-group-text-button-color-rgb:var(--calendarCellEventNameColor-rgb);--wix-ui-tpa-avatar-group-text-button-color-opacity:var(--calendarCellEventNameColor-opacity);--wix-ui-tpa-avatar-group-text-button-font-text-decoration:var(--calendarCellEventNameFont-text-decoration);--wix-ui-tpa-avatar-group-text-button-font-line-height:var(--calendarCellEventNameFont-line-height);--wix-ui-tpa-avatar-group-text-button-font-family:var(--calendarCellEventNameFont-family);--wix-ui-tpa-avatar-group-text-button-font-size:var(--calendarCellEventNameFont-size);--wix-ui-tpa-avatar-group-text-button-font-style:var(--calendarCellEventNameFont-style);--wix-ui-tpa-avatar-group-text-button-font-variant:var(--calendarCellEventNameFont-variant);--wix-ui-tpa-avatar-group-text-button-font-weight:var(--calendarCellEventNameFont-weight)}.sRCouJq{--wix-ui-tpa-avatar-group-avatar-border-color:255,255,255,1;--wix-ui-tpa-avatar-group-avatar-border-color-rgb:255,255,255;--wix-ui-tpa-avatar-group-avatar-border-color-opacity:1;--wix-ui-tpa-avatar-group-text-button-color:var(--onImageTextsColor);--wix-ui-tpa-avatar-group-text-button-color-rgb:var(--onImageTextsColor-rgb);--wix-ui-tpa-avatar-group-text-button-color-opacity:var(--onImageTextsColor-opacity);--wix-ui-tpa-avatar-group-text-button-font-text-decoration:var(--compactTextsFont-text-decoration);--wix-ui-tpa-avatar-group-text-button-font-line-height:var(--compactTextsFont-line-height);--wix-ui-tpa-avatar-group-text-button-font-family:var(--compactTextsFont-family);--wix-ui-tpa-avatar-group-text-button-font-size:var(--compactTextsFont-size);--wix-ui-tpa-avatar-group-text-button-font-style:var(--compactTextsFont-style);--wix-ui-tpa-avatar-group-text-button-font-variant:var(--compactTextsFont-variant);--wix-ui-tpa-avatar-group-text-button-font-weight:var(--compactTextsFont-weight)}.evClassicPreset .sntR6_E{font-size:14px!important}.Ce1nzG{align-items:center;display:inline-flex;font:var(--wix-font-Body-M);font-size:14px;height:24px;max-width:100%;overflow:hidden;padding:0 16px;-webkit-text-decoration:var(--wix-font-Body-M-text-decoration);text-decoration:var(--wix-font-Body-M-text-decoration);white-space:nowrap}.CaN4vz{background:rgb(var(--soldOutRibbonBackgroundColor));color:rgb(var(--soldOutRibbonTextColor));font:var(--soldOutRibbonFont);-webkit-text-decoration:var(--soldOutRibbonFont-text-decoration);text-decoration:var(--soldOutRibbonFont-text-decoration)}.QBNkB1{background:rgb(var(--rsvpClosedRibbonBackgroundColor));color:rgb(var(--rsvpClosedRibbonTextColor));font:var(--rsvpClosedRibbonFont);-webkit-text-decoration:var(--rsvpClosedRibbonFont-text-decoration);text-decoration:var(--rsvpClosedRibbonFont-text-decoration)}.mILZ4x{background:rgb(var(--joinWaitlistRibbonBackgroundColor));color:rgb(var(--joinWaitlistRibbonTextColor));font:var(--joinWaitlistRibbonFont);-webkit-text-decoration:var(--joinWaitlistRibbonFont-text-decoration);text-decoration:var(--joinWaitlistRibbonFont-text-decoration)}.yc9I6P{border:1px solid rgb(var(--membershipRibbonBorderColor));color:rgb(var(--membershipRibbonTextColor));font:var(--membershipRibbonFont);-webkit-text-decoration:var(--membershipRibbonFont-text-decoration);text-decoration:var(--membershipRibbonFont-text-decoration)}.y5d1PN,.yc9I6P{background:transparent}.y5d1PN{border:1px solid rgb(var(--recurringRibbonBorderColor));color:rgb(var(--recurringRibbonTextColor));font:var(--recurringRibbonFont);-webkit-text-decoration:var(--recurringRibbonFont-text-decoration);text-decoration:var(--recurringRibbonFont-text-decoration)}.B4WYyN{border:1px solid rgb(var(--membershipRibbonBorderColor));color:rgb(var(--membershipRibbonTextColor));font:var(--membershipRibbonFont);-webkit-text-decoration:var(--membershipRibbonFont-text-decoration);text-decoration:var(--membershipRibbonFont-text-decoration)}.B4WYyN,.OSNkXE{background:transparent}.OSNkXE{border:1px solid rgb(var(--recurringRibbonBorderColor));color:rgb(var(--recurringRibbonTextColor));font:var(--recurringRibbonFont);-webkit-text-decoration:var(--recurringRibbonFont-text-decoration);text-decoration:var(--recurringRibbonFont-text-decoration)}.x73ahn{overflow:hidden;text-overflow:ellipsis}.UOHdIx{align-items:center;display:flex}.bu16Av{margin-bottom:calc(0px + -.25em);margin-top:calc(0px + -.25em)}.AinsX6,.bu16Av{line-height:1.5!important}._8yxZW9{white-space:pre-wrap}.LjZg6p{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.jHIfl5,.sXIz18{align-items:center;display:flex}.TGstrW{border-inline-end:1px solid;flex-shrink:0;height:.8em}.sXIz18{white-space:nowrap}.sXIz18 .pMI2qb,.sXIz18 .xixIN8{overflow:hidden;text-overflow:ellipsis}.sXIz18 .pMI2qb{flex-shrink:0;max-width:80%}.sXIz18 .TGstrW{margin:0 10px}.jHIfl5{flex-wrap:wrap}.jHIfl5 .yheNnz{align-items:center;display:flex}.jHIfl5 .xixIN8{word-break:break-word}.jHIfl5 .TGstrW{margin:0 12px}.FA264N{color:rgb(var(--textsColor))}.FA264N,.z2yURz{font:var(--compactTextsFont);-webkit-text-decoration:var(--compactTextsFont-text-decoration);text-decoration:var(--compactTextsFont-text-decoration)}.z2yURz{color:rgb(var(--onImageTextsColor))}.KbGbQs,.eventsRtl .MYiaAc{justify-content:flex-start}.VAfwU8{justify-content:center}.MYiaAc,.eventsRtl .KbGbQs{justify-content:flex-end}.WQ6Du6 .TGstrW,.WQ6Du6 .pMI2qb{display:none}.WQ6Du6 .xixIN8{max-width:100%}.RxeCbi .TGstrW,.RxeCbi .xixIN8{display:none}.RxeCbi .pMI2qb{max-width:100%}.tu5Atz{font-size:18px!important}.kKuXKf{margin-bottom:12px}.RaIPqr,.kKuXKf{letter-spacing:1px}.RaIPqr{margin-inline-end:24px}.LE4lF8{font-size:16px;white-space:nowrap}.DdDzW9{color:inherit;cursor:pointer;display:inline-block}.iguBq3{align-items:center;display:flex}.IuNIzI{color:rgb(var(--shareIconsColorV2))}.n5TTun{font-size:18px!important}.W2ZNnD{color:rgb(var(--countdownColor));font:var(--countdownFont);-webkit-text-decoration:var(--countdownFont-text-decoration);text-decoration:var(--countdownFont-text-decoration)}.kVDYpL{color:rgb(var(--onImageCountdownColor))}.DZBm0d{margin:0 auto 0 0}.DCTXbr{margin:0 auto}.hQAwYk{margin:0 0 0 auto}.Gangn7{background-color:rgb(var(--onImageDividerColor))}.njGJnp{background-color:rgb(var(--dividerColor))}.aYgk9v{align-self:center;display:flex;justify-content:center;margin:0 70px;width:10px}._ZEaNS{display:block;margin-bottom:36px;margin-top:36px}.qBCPEN{margin:12px 0}.yiOH0x{display:inline-block;max-width:100%}.CEmW4c{color:rgb(var(--labelsColor));font:var(--labelsFont);-webkit-text-decoration:var(--labelsFont-text-decoration);text-decoration:var(--labelsFont-text-decoration)}.Qkp9SJ{color:rgb(var(--textsColor));font:var(--textsFont);-webkit-text-decoration:var(--textsFont-text-decoration);text-decoration:var(--textsFont-text-decoration)}.aBMIsr{color:rgb(var(--onImageLabelsColor))}._aZdmE{color:rgb(var(--onImageTextsColor))}.MTGpiK .CEmW4c{line-height:1.5!important;margin-bottom:calc(24px + -.25em);margin-top:calc(0px + -.25em)}.WjL3Rv{display:flex}.WjL3Rv .CEmW4c{line-height:1.5!important;margin-bottom:calc(46px + -.25em);margin-top:calc(0px + -.25em)}.WjL3Rv .yiOH0x{display:block}.wE4qwT.gyKVk7 .CEmW4c{font-size:20px!important}.wE4qwT.gyKVk7 .yiOH0x{font-size:16px!important}.wE4qwT.WjL3Rv .CEmW4c{line-height:1.5!important;margin-bottom:calc(24px + -.25em);margin-top:calc(0px + -.25em)}@media(min-width:501px){.WjL3Rv.kTgOYg,.eventsRtl .WjL3Rv.UaQiqY{justify-content:flex-start}.WjL3Rv.PB_sYE{justify-content:center}.WjL3Rv.PB_sYE .j3AQS4,.WjL3Rv.PB_sYE .qj3g_a{flex-basis:50%;flex-grow:1}.WjL3Rv.UaQiqY,.eventsRtl .WjL3Rv.kTgOYg{justify-content:flex-end}.WjL3Rv.UaQiqY:not(.TM5zWC):not(.KFhXYl) .j3AQS4,.WjL3Rv.UaQiqY:not(.TM5zWC):not(.KFhXYl) .qj3g_a,.WjL3Rv.kTgOYg:not(.TM5zWC):not(.KFhXYl) .j3AQS4,.WjL3Rv.kTgOYg:not(.TM5zWC):not(.KFhXYl) .qj3g_a{max-width:calc(50% - 70px - 10px/2)}.WjL3Rv.bcdqU4:not(.KFhXYl) .qj3g_a{margin-inline-end:150px}._ZEaNS{display:none}}@media(max-width:500px){.WjL3Rv{flex-direction:column}.WjL3Rv.bcdqU4:not(.KFhXYl) .qj3g_a{margin-bottom:72px!important}.aYgk9v{display:none}}.KubSJS{font-size:16px!important}.QwxLu3{color:rgb(var(--descriptionColor));font:var(--descriptionFont);-webkit-text-decoration:var(--descriptionFont-text-decoration);text-decoration:var(--descriptionFont-text-decoration)}.wdExWB{color:rgb(var(--onImageDescriptionColor))}.sNp9JN{height:100%;overflow:hidden;position:absolute;top:0;width:100%}.nI6aye{background-color:rgb(var(--multiImageBackgroundColor,var(--listImageBackgroundColor)))}.IH1M3w{background-color:rgb(var(--multiImageBackgroundColor,var(--wix-color-8)))}.Frxj4Q{background-color:rgb(var(--imageBackgroundColor))}.bkBcmF{display:var(--singleContainImageVisibility)!important}.WHyOMh{display:var(--singleCoverImageVisibility)!important}.PSH0XH{display:var(--multiContainImageVisibility)!important}.p7b1HW{display:var(--multiCoverImageVisibility)!important}.P7eGiM,.PN7j9D{background-clip:content-box;border:inherit;border-color:transparent;inset-inline-end:0;position:absolute;top:0}.P7eGiM{background-color:rgb(var(--imageBackgroundColor));height:100%;width:100%}.OOq_F5{flex-grow:1}.YWAUac{margin-bottom:24px}:where(.DjQEyU){color:inherit;text-decoration:inherit}.xAH0mk{display:inline-block}._MlcyF{width:100%}.NBw1Kz{color:rgb(var(--labelsColor));line-height:1.5!important;font:var(--labelsFont);margin-bottom:calc(24px + -.25em);margin-top:calc(0px + -.25em);-webkit-text-decoration:var(--labelsFont-text-decoration);text-decoration:var(--labelsFont-text-decoration)}.P4qjxu{color:rgb(var(--onImageLabelsColor))}.BoD93f{background-color:rgb(var(--singleButtonBackgroundColor));border-color:rgb(var(--singleButtonBorderColor));border-radius:calc(var(--singleButtonBorderRadius)*1px);border-style:solid;border-width:calc(var(--singleButtonBorderWidth)*1px);color:rgb(var(--singleButtonColor));cursor:pointer;font:var(--singleButtonFont);overflow:visible;padding:10px 30px;position:relative;-webkit-text-decoration:var(--singleButtonFont-text-decoration);text-decoration:var(--singleButtonFont-text-decoration);white-space:nowrap}.BoD93f.CKLKOJ{background-color:rgb(var(--singleOnImageButtonBackgroundColor));border-color:rgb(var(--singleOnImageButtonBorderColor));color:rgb(var(--singleOnImageButtonColor))}.BoD93f:hover{opacity:.7}.zLSZXO{align-items:center;display:inline-flex;justify-content:center;margin:auto}.QQZ4S5{visibility:hidden}.bEXKbn.DwnNru .NBw1Kz{font-size:20px!important}.bEXKbn.DwnNru .BoD93f{font-size:14px!important}.bEXKbn .BoD93f{max-width:260px;min-height:44px;min-width:60px;padding:0 30px;text-overflow:ellipsis}.IOLuL5{word-wrap:break-word;border-style:solid;display:flex;height:100%}.C7DkT1{display:flex;flex-direction:column;padding:0 42px;position:relative}.KvGTRc{width:100%}.Cn5PoW{margin-bottom:40px}.pe2Vf2{text-align:center}.jtzhoi{text-align:left}.HVPDhL{text-align:right}.PeGSNm{justify-content:center}.QbRhOm{justify-content:flex-start;padding-top:54px}.VxPqyJ{justify-content:flex-end;padding-bottom:54px}.GgNVPA{background-color:rgb(var(--backgroundColor));border-color:rgb(var(--borderColor));border-width:calc(var(--borderWidth)*1px)}.jn_rBu{background-color:transparent;border-width:0}.jn_rBu .C7DkT1{align-items:center;justify-content:center;padding:0!important;text-align:center}.sDsJJj{background-color:transparent}.vuIcQd .C7DkT1{flex-grow:0;padding:42px 10px}.kaDLYn path{fill:rgb(var(--textsColor))}.O6BMPb path{fill:rgb(var(--onImageTextsColor))}.VkuaAp{margin:0 auto 20px;max-width:240px}.jtzhoi .VkuaAp{margin:0 auto 20px 0}.HVPDhL .VkuaAp{margin:0 0 20px auto}.iFiqaE{font-size:34px!important}.EdMH8t{color:rgb(var(--titleColor));font:var(--titleFont);-webkit-text-decoration:var(--titleFont-text-decoration);text-decoration:var(--titleFont-text-decoration)}.kFjtai{color:rgb(var(--onImageTitleColor))}</style><script id="comp-jnmtd6qs__LOADABLE_REQUIRED_CHUNKS__" type="application/json">[1679,5431,1721]</script><script id="comp-jnmtd6qs__LOADABLE_REQUIRED_CHUNKS___ext" type="application/json">{"namedChunks":["SingleEvent"]}</script><script async="" data-chunk="SingleEvent" src="https://static.parastorage.com/services/events-viewer/1.3110.0/client-viewer/1679.chunk.min.js"></script><script async="" data-chunk="SingleEvent" src="https://static.parastorage.com/services/events-viewer/1.3110.0/client-viewer/5431.chunk.min.js"></script><script async="" data-chunk="SingleEvent" src="https://static.parastorage.com/services/events-viewer/1.3110.0/client-viewer/SingleEvent.chunk.min.js"></script>
<!-- Loadable Component comp-jnmuwc3w -->
<style data-href="https://static.parastorage.com/services/events-viewer/1.3110.0/client-viewer/EmptyState.chunk.min.css">.ZzIjyO{color:rgb(var(--eventTitleColorV2));font:var(--eventTitleFontV2);-webkit-text-decoration:var(--eventTitleFontV2-text-decoration);text-decoration:var(--eventTitleFontV2-text-decoration)}.WB2TcF{color:rgb(var(--hoveredEventTitleColorV2));font:var(--hoveredEventTitleFontV2);-webkit-text-decoration:var(--hoveredEventTitleFontV2-text-decoration);text-decoration:var(--hoveredEventTitleFontV2-text-decoration)}.wuF7QO{color:rgb(var(--eventDateColorV2));font:var(--eventDateFontV2);-webkit-text-decoration:var(--eventDateFontV2-text-decoration);text-decoration:var(--eventDateFontV2-text-decoration)}.NIub45{color:rgb(var(--hoveredEventDateColorV2));font:var(--hoveredEventDateFontV2);-webkit-text-decoration:var(--hoveredEventDateFontV2-text-decoration);text-decoration:var(--hoveredEventDateFontV2-text-decoration)}.Y6dRY1{color:rgb(var(--eventLocationColorV2));font:var(--eventLocationFontV2);-webkit-text-decoration:var(--eventLocationFontV2-text-decoration);text-decoration:var(--eventLocationFontV2-text-decoration)}.Mf2mGo{color:rgb(var(--hoveredEventLocationColorV2));font:var(--hoveredEventLocationFontV2);-webkit-text-decoration:var(--hoveredEventLocationFontV2-text-decoration);text-decoration:var(--hoveredEventLocationFontV2-text-decoration)}.fIoCmq{color:rgb(var(--hoveredEventDescriptionColor));font:var(--hoveredEventDescriptionFontV2);-webkit-text-decoration:var(--hoveredEventDescriptionFontV2-text-decoration);text-decoration:var(--hoveredEventDescriptionFontV2-text-decoration)}.uUEaop{color:rgb(var(--linkColorV2));font:var(--linkFontV2);-webkit-text-decoration:var(--linkFontV2-text-decoration);text-decoration:var(--linkFontV2-text-decoration)}.Rl55Tb *{transition:none!important}.yIpRkq{background-color:rgb(var(--cardBackgroundColor));border-color:rgb(var(--cardBorderColor));border-style:solid;border-width:calc(var(--cardBorderWidth)*1px);display:block;font:var(--listHeaderTitleFont);line-height:1.2em!important;max-width:calc(var(--CARD_MAX_WIDTH)*1px);min-width:calc(var(--CARD_MIN_WIDTH)*1px);-webkit-text-decoration:var(--listHeaderTitleFont-text-decoration);text-decoration:var(--listHeaderTitleFont-text-decoration)}.evStylesPresetV2 .OHq53Z{color:rgb(var(--eventTitleColorV2));font:var(--eventTitleFontV2);line-height:1.2!important;-webkit-text-decoration:var(--eventTitleFontV2-text-decoration);text-decoration:var(--eventTitleFontV2-text-decoration)}.evStylesPresetV2 .zamixh{color:rgb(var(--hoveredEventDescriptionColor));font:var(--hoveredEventDescriptionFontV2);-webkit-text-decoration:var(--hoveredEventDescriptionFontV2-text-decoration);text-decoration:var(--hoveredEventDescriptionFontV2-text-decoration)}.evStylesPresetV2 .T_AzqV{color:rgb(var(--eventDateColorV2));font:var(--eventDateFontV2);-webkit-text-decoration:var(--eventDateFontV2-text-decoration);text-decoration:var(--eventDateFontV2-text-decoration)}.evStylesPresetV2 .a5byPV{color:rgb(var(--eventLocationColorV2));font:var(--eventLocationFontV2);-webkit-text-decoration:var(--eventLocationFontV2-text-decoration);text-decoration:var(--eventLocationFontV2-text-decoration)}.evStylesPresetV2 .n3J80t.S2kRMd .OHq53Z,.evStylesPresetV2 .n3J80t:focus .OHq53Z,.evStylesPresetV2 .n3J80t:hover .OHq53Z{color:rgb(var(--hoveredEventTitleColorV2));font:var(--hoveredEventTitleFontV2);-webkit-text-decoration:var(--hoveredEventTitleFontV2-text-decoration);text-decoration:var(--hoveredEventTitleFontV2-text-decoration)}.evStylesPresetV2 .n3J80t.S2kRMd .T_AzqV,.evStylesPresetV2 .n3J80t:focus .T_AzqV,.evStylesPresetV2 .n3J80t:hover .T_AzqV{color:rgb(var(--hoveredEventDateColorV2));font:var(--hoveredEventDateFontV2);-webkit-text-decoration:var(--hoveredEventDateFontV2-text-decoration);text-decoration:var(--hoveredEventDateFontV2-text-decoration)}.evStylesPresetV2 .n3J80t.S2kRMd .a5byPV,.evStylesPresetV2 .n3J80t:focus .a5byPV,.evStylesPresetV2 .n3J80t:hover .a5byPV{color:rgb(var(--hoveredEventLocationColorV2));font:var(--hoveredEventLocationFontV2);-webkit-text-decoration:var(--hoveredEventLocationFontV2-text-decoration);text-decoration:var(--hoveredEventLocationFontV2-text-decoration)}.evClassicPreset .OHq53Z{color:rgb(var(--listHeaderTitleColor));font:var(--listHeaderTitleFont);line-height:1.2!important;-webkit-text-decoration:var(--listHeaderTitleFont-text-decoration);text-decoration:var(--listHeaderTitleFont-text-decoration)}.evClassicPreset .zamixh{font-size:calc(var(--cardDescriptionFontSize)*1px)}.n3J80t.S2kRMd .kfC_4T,.n3J80t:focus .kfC_4T,.n3J80t:hover .kfC_4T{height:0;padding-top:0}.n3J80t.S2kRMd .yuONQy,.n3J80t:focus .yuONQy,.n3J80t:hover .yuONQy{display:block;max-height:none}.n3J80t.S2kRMd .HqEbWK,.n3J80t:focus .HqEbWK,.n3J80t:hover .HqEbWK{height:0;opacity:0;overflow:hidden;transition:opacity 0s;visibility:hidden}.n3J80t.S2kRMd .din_g1,.n3J80t:focus .din_g1,.n3J80t:hover .din_g1{margin-bottom:30px}.n3J80t.S2kRMd .l8kN2j,.n3J80t:focus .l8kN2j,.n3J80t:hover .l8kN2j{opacity:1;overflow:visible;visibility:visible}.n3J80t.S2kRMd .XQpnAl,.n3J80t:focus .XQpnAl,.n3J80t:hover .XQpnAl{font-size:calc(var(--cardLocationAndDateFontSize)*1px)}.mq7Mp3{display:flex;flex-direction:column;height:100%;text-align:var(--listTextAlignment)}.kfC_4T{overflow:hidden;position:relative;transition:padding-top .5s}.QCJakZ{position:absolute;top:0;width:100%}.EO4zd9{padding-top:calc(var(--listImageAspectRatio)*1%)}.j2Owzh{-ms-overflow-style:-ms-autohiding-scrollbar;overflow-x:clip;overflow-y:visible;padding:0 30px;transition:padding .5s}.j2Owzh::-webkit-scrollbar{width:17px}.j2Owzh::-webkit-scrollbar-track{background-color:transparent}.j2Owzh::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:#ededed;border-color:transparent;border-radius:7px;border-style:solid;border-width:0 6px}.Rz7J9y{width:auto}.yuONQy{word-wrap:break-word;-webkit-line-clamp:2;/*! autoprefixer: ignore next */-webkit-box-orient:vertical;display:-webkit-box;margin-bottom:.5em;max-height:2.4em;overflow:hidden}.HqEbWK{display:var(--cardShortDateLocationVisibility);height:auto;margin-top:12px;opacity:1;transition:opacity .5s}.din_g1{display:var(--cardFullDateLocationVisibility)}.l8kN2j{height:0;opacity:0;overflow:hidden;transition:opacity .5s;visibility:hidden}.soFaaO{word-wrap:break-word;display:var(--listAdditionalInfoVisibility)}.xIRXBd{margin-top:auto}.qjjLS3{display:var(--listMembersVisibility);height:52px;line-height:0;margin-bottom:-18px;padding:24px 30px 18px 30px}.FSt5JW{margin-bottom:30px}.MizEne{display:var(--listDescriptionVisibility);margin-bottom:2em;white-space:pre-wrap}.tNMQKh{padding:42px calc(30px*var(--isListTextAlignmentRight)) 42px calc(30px*var(--isListTextAlignmentLeft))}.kfC_4T{display:var(--listImageVisibility)}.FSt5JW{display:var(--cardHoveredFullDateLocationVisibility)}.q88C3l{display:var(--listSocialBarVisibility)}.QuPLQ5 .j2Owzh{margin-top:24px}.Wprg5l{color:rgb(var(--listHeaderTitleColor))}.XQpnAl{font:var(--listHeaderLocationFont);line-height:1.5!important;-webkit-text-decoration:var(--listHeaderLocationFont-text-decoration);text-decoration:var(--listHeaderLocationFont-text-decoration)}.k4C_Xy{display:inline-block;font-size:0;line-height:1;margin-bottom:20px;max-width:200px}.XCiQHg{background-color:rgba(var(--cardsBackgroundColor))}.afiZLA{--columns:min(var(--cardsPerRow),var(--eventsCount));cursor:default;margin:0 auto;max-width:calc(var(--CARD_MAX_WIDTH)*var(--columns)*1px);text-align:center}.tfCiE0{display:grid;gap:calc(var(--cardMargins)*1px);grid-auto-rows:auto;grid-template-columns:repeat(var(--columns),1fr);padding:calc(var(--cardMargins)*1px)}.USInog{padding:0 calc(var(--cardMargins)*1px) calc(var(--cardMargins)*1px) calc(var(--cardMargins)*1px)}.a1O8Os{word-wrap:break-word;cursor:default;overflow:hidden}.a1O8Os::-webkit-scrollbar-track{background-color:transparent}.a1O8Os::-webkit-scrollbar-thumb{border-radius:20px}.a1O8Os::-webkit-scrollbar{width:5px}.iM2jMk::-webkit-scrollbar-thumb{background-color:rgb(var(--wix-color-2))}.Ubk1UG{background-color:rgb(var(--cardBackgroundColor))}.AjaWjx{background-color:rgb(var(--listBackgroundColor));border-color:rgb(var(--listBorderColor));border-style:solid;border-width:calc(var(--listBorderWidth)*1px)}.s3EfrL{margin:24px 0}.IOLuL5{word-wrap:break-word;border-style:solid;display:flex;height:100%}.C7DkT1{display:flex;flex-direction:column;padding:0 42px;position:relative}.KvGTRc{width:100%}.Cn5PoW{margin-bottom:40px}.pe2Vf2{text-align:center}.jtzhoi{text-align:left}.HVPDhL{text-align:right}.PeGSNm{justify-content:center}.QbRhOm{justify-content:flex-start;padding-top:54px}.VxPqyJ{justify-content:flex-end;padding-bottom:54px}.GgNVPA{background-color:rgb(var(--backgroundColor));border-color:rgb(var(--borderColor));border-width:calc(var(--borderWidth)*1px)}.jn_rBu{background-color:transparent;border-width:0}.jn_rBu .C7DkT1{align-items:center;justify-content:center;padding:0!important;text-align:center}.sDsJJj{background-color:transparent}.vuIcQd .C7DkT1{flex-grow:0;padding:42px 10px}.kaDLYn path{fill:rgb(var(--textsColor))}.O6BMPb path{fill:rgb(var(--onImageTextsColor))}.VkuaAp{margin:0 auto 20px;max-width:240px}.jtzhoi .VkuaAp{margin:0 auto 20px 0}.HVPDhL .VkuaAp{margin:0 0 20px auto}.iFiqaE{font-size:34px!important}.EdMH8t{color:rgb(var(--titleColor));font:var(--titleFont);-webkit-text-decoration:var(--titleFont-text-decoration);text-decoration:var(--titleFont-text-decoration)}.kFjtai{color:rgb(var(--onImageTitleColor))}.M3QfA1{border-style:solid;font-size:26px!important;line-height:1.5!important;padding:60px 30px;text-align:center}</style><script id="comp-jnmuwc3w__LOADABLE_REQUIRED_CHUNKS__" type="application/json">[1801]</script><script id="comp-jnmuwc3w__LOADABLE_REQUIRED_CHUNKS___ext" type="application/json">{"namedChunks":["EmptyState"]}</script><script async="" data-chunk="EmptyState" src="https://static.parastorage.com/services/events-viewer/1.3110.0/client-viewer/EmptyState.chunk.min.js"></script>
<!-- Loadable Component comp-jnmw33vq -->
<style data-href="https://static.parastorage.com/services/events-viewer/1.3110.0/client-viewer/5431.chunk.min.css">.seduTAo,.soEpjwf{outline:0}.sk16e2z{display:inline-flex;flex-direction:row}.s__4s5Aa9,.s__5LWWvH{align-items:center;display:flex;overflow:hidden;position:relative}.s__5LWWvH{aspect-ratio:1;border-radius:50%;justify-content:center;letter-spacing:0;text-align:center}.srxDUbR{--wix-ui-tpa-wow-image-border-radius:calc(50 * 1%);font-size:medium;height:100%;width:100%}.sIce1Hx:before,.sYFGzBI:before{height:100%;position:absolute;width:100%}.sIce1Hx:before{align-items:center;content:attr(data-initials);display:flex;justify-content:center}.sYFGzBI:before{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3Cstyle%3E.cls-anonymous-icon{fill:%23969696}%3C/style%3E%3C/defs%3E%3Cellipse class='cls-anonymous-icon' cx='103.7' cy='74.3' rx='38.3' ry='38.7'/%3E%3Cpath style='fill:none' d='M0 0h200v200H0z'/%3E%3Cpath class='cls-anonymous-icon' d='M188.4 200c-7.4-43.6-44.2-76.8-88.4-76.8S19 156.4 11.6 200Z'/%3E%3C/svg%3E");content:""}.sif9Lvj{align-items:center;cursor:pointer;display:inline-flex}.sHICw9H,.sw5N_H7{flex-shrink:0}.sif9Lvj.oVxUPr7--disabled{cursor:default}.sif9Lvj[disabled]{pointer-events:none}.sr3x_Jq{--Text1297168438-primary-color:rgb(var(--wix-ui-tpa-text-main-text-color,var(--wix-color-5)));--Text1297168438-secondary-color:rgb(var(--wix-ui-tpa-text-main-text-color,var(--wix-color-4)))}.sr3x_Jq.onmsXom---priority-7-primary{color:var(--wut-text-color,var(--Text1297168438-primary-color))}.sr3x_Jq.onmsXom---priority-9-secondary{color:var(--wut-placeholder-color,var(--Text1297168438-secondary-color))}.sr3x_Jq.onmsXom---typography-10-smallTitle{font-family:var(--wix-ui-tpa-text-main-text-font-family,var(--wix-font-Page-title-family));font-size:var(--wix-ui-tpa-text-main-text-font-size,24px);font-style:var(--wix-ui-tpa-text-main-text-font-style,var(--wix-font-Page-title-style));font-variant:var(--wix-ui-tpa-text-main-text-font-variant,var(--wix-font-Page-title-variant));font-weight:var(--wix-ui-tpa-text-main-text-font-weight,var(--wix-font-Page-title-weight));line-height:var(--wix-ui-tpa-text-main-text-font-line-height,1.33em);text-decoration:var(--wix-ui-tpa-text-main-text-font-text-decoration,var(--wix-font-Page-title-text-decoration))}.sr3x_Jq.onmsXom---typography-11-runningText{line-height:var(--wix-ui-tpa-text-main-text-font-line-height,1.5em)}.sr3x_Jq.onmsXom---typography-11-runningText,.sr3x_Jq.onmsXom---typography-8-listText{font-family:var(--wix-ui-tpa-text-main-text-font-family,var(--wix-font-Body-M-family));font-size:var(--wix-ui-tpa-text-main-text-font-size,16px);font-style:var(--wix-ui-tpa-text-main-text-font-style,var(--wix-font-Body-M-style));font-variant:var(--wix-ui-tpa-text-main-text-font-variant,var(--wix-font-Body-M-variant));font-weight:var(--wix-ui-tpa-text-main-text-font-weight,var(--wix-font-Body-M-weight));text-decoration:var(--wix-ui-tpa-text-main-text-font-text-decoration,var(--wix-font-Body-M-text-decoration))}.sr3x_Jq.onmsXom---typography-8-listText{line-height:var(--wix-ui-tpa-text-main-text-font-line-height,2em)}.sr3x_Jq.onmsXom---typography-10-largeTitle{font-family:var(--wix-ui-tpa-text-main-text-font-family,var(--wix-font-Heading-M-family));font-size:var(--wix-ui-tpa-text-main-text-font-size,32px);font-style:var(--wix-ui-tpa-text-main-text-font-style,var(--wix-font-Heading-M-style));font-variant:var(--wix-ui-tpa-text-main-text-font-variant,var(--wix-font-Heading-M-variant));font-weight:var(--wix-ui-tpa-text-main-text-font-weight,var(--wix-font-Heading-M-weight));line-height:var(--wix-ui-tpa-text-main-text-font-line-height,1.25em);text-decoration:var(--wix-ui-tpa-text-main-text-font-text-decoration,var(--wix-font-Heading-M-text-decoration))}.sr3x_Jq.onmsXom--mobile.onmsXom---typography-10-smallTitle{font-family:var(--wix-ui-tpa-text-main-text-font-family,var(--wix-font-Page-title-family));font-size:var(--wix-ui-tpa-text-main-text-font-size,20px);font-style:var(--wix-ui-tpa-text-main-text-font-style,var(--wix-font-Page-title-style));font-variant:var(--wix-ui-tpa-text-main-text-font-variant,var(--wix-font-Page-title-variant));font-weight:var(--wix-ui-tpa-text-main-text-font-weight,var(--wix-font-Page-title-weight));line-height:var(--wix-ui-tpa-text-main-text-font-line-height,1.4em);text-decoration:var(--wix-ui-tpa-text-main-text-font-text-decoration,var(--wix-font-Page-title-text-decoration))}.sr3x_Jq.onmsXom--mobile.onmsXom---typography-11-runningText{line-height:var(--wix-ui-tpa-text-main-text-font-line-height,1.42em)}.sr3x_Jq.onmsXom--mobile.onmsXom---typography-11-runningText,.sr3x_Jq.onmsXom--mobile.onmsXom---typography-8-listText{font-family:var(--wix-ui-tpa-text-main-text-font-family,var(--wix-font-Body-M-family));font-size:var(--wix-ui-tpa-text-main-text-font-size,14px);font-style:var(--wix-ui-tpa-text-main-text-font-style,var(--wix-font-Body-M-style));font-variant:var(--wix-ui-tpa-text-main-text-font-variant,var(--wix-font-Body-M-variant));font-weight:var(--wix-ui-tpa-text-main-text-font-weight,var(--wix-font-Body-M-weight));text-decoration:var(--wix-ui-tpa-text-main-text-font-text-decoration,var(--wix-font-Body-M-text-decoration))}.sr3x_Jq.onmsXom--mobile.onmsXom---typography-8-listText{line-height:var(--wix-ui-tpa-text-main-text-font-line-height,1.72em)}.sr3x_Jq.onmsXom--mobile.onmsXom---typography-10-largeTitle{font-family:var(--wix-ui-tpa-text-main-text-font-family,var(--wix-font-Heading-M-family));font-size:var(--wix-ui-tpa-text-main-text-font-size,24px);font-style:var(--wix-ui-tpa-text-main-text-font-style,var(--wix-font-Heading-M-style));font-variant:var(--wix-ui-tpa-text-main-text-font-variant,var(--wix-font-Heading-M-variant));font-weight:var(--wix-ui-tpa-text-main-text-font-weight,var(--wix-font-Heading-M-weight));line-height:var(--wix-ui-tpa-text-main-text-font-line-height,1.33em);text-decoration:var(--wix-ui-tpa-text-main-text-font-text-decoration,var(--wix-font-Heading-M-text-decoration))}.sSJb9TI{clip:rect(1px,1px,1px,1px)!important;border:0!important;-webkit-clip-path:inset(50%)!important;clip-path:inset(50%)!important;height:1px!important;margin:-1px!important;overflow:hidden!important;padding:0!important;position:absolute!important;white-space:nowrap!important;width:1px!important}.sFqMrFy{--Spinner824016625-diameter:var(--wix-ui-tpa-spinner-diameter,50px);animation:Spinner824016625__rotate 2s linear infinite;height:var(--Spinner824016625-diameter);left:auto;top:auto;width:var(--Spinner824016625-diameter)}.s__0IZGD6{stroke:rgb(var(--wix-ui-tpa-spinner-path-color,var(--wix-color-5)));animation:Spinner824016625__dash 1.5s ease-in-out infinite}.sFqMrFy.o__450uKE--centered{left:calc(50% - var(--Spinner824016625-diameter)/2);position:absolute;top:calc(50% - var(--Spinner824016625-diameter)/2)}.sFqMrFy.o__450uKE--static,.sFqMrFy.o__450uKE--static .s__0IZGD6{animation:none}@keyframes Spinner824016625__rotate{to{transform:rotate(1turn)}}@keyframes Spinner824016625__dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}to{stroke-dasharray:90,150;stroke-dashoffset:-124}}.sKLwRHO{background-color:#d8d8d8}.sKLwRHO .srxDUbR,.sKLwRHO:before{color:#979797;font-family:Madefor,Helvetica Neue,Helvetica,Arial,メイリオ,meiryo,ヒラギノ角ゴ pro w3,hiragino kaku gothic pro,sans-serif;font-weight:500}.sKLwRHO.oYmzR2y---size-6-xLarge{font-size:20px;height:60px;width:60px}.sKLwRHO.oYmzR2y---size-5-large{font-size:18px;height:52px;width:52px}.sKLwRHO.oYmzR2y---size-6-medium{font-size:12px;height:36px;width:36px}.sKLwRHO.oYmzR2y---size-5-small{font-size:9px;height:28px;width:28px}.sKLwRHO.oYmzR2y---size-6-xSmall{font-size:7px;height:20px;width:20px}.sKLwRHO.oYmzR2y---size-7-xxSmall{font-size:5px;height:16px;width:16px}.s__2Q3iK3{--WowImage1821133350-transparent:0,0,0,0;display:flex;height:100%;position:relative}.s__2Q3iK3.ofvh9i8--forceImageContain.ofvh9i8---resize-7-contain{width:100%}.s__2Q3iK3.ofvh9i8--forceImageContain.ofvh9i8---resize-7-contain>*{align-items:center;border:inherit;border-radius:inherit;display:flex;justify-content:center}.s__2Q3iK3.ofvh9i8--forceImageContain.ofvh9i8---resize-7-contain img{border:inherit;border-radius:inherit;height:unset!important;max-height:100%;max-width:100%;width:unset!important}.s__2Q3iK3.ofvh9i8--forceImageContain.ofvh9i8---resize-7-contain.ofvh9i8--verticalContainer img{width:min(var(--wut-source-width,100%),100%)!important}.s__2Q3iK3.ofvh9i8--forceImageContain.ofvh9i8---resize-7-contain.ofvh9i8--horizontalContainer img{height:min(var(--wut-source-height,100%),100%)!important}.s__2Q3iK3.ofvh9i8--noImage{background-color:rgb(var(--wix-color-5),.2)}.s__2Q3iK3 img{vertical-align:middle}.s__2Q3iK3.ofvh9i8--focalPoint img{object-position:var(--WowImage1821133350-focalPointX,0) var(--WowImage1821133350-focalPointY,0)}.s__2Q3iK3.ofvh9i8---resize-7-contain .s__5SKJ9H{object-fit:contain}.s__2Q3iK3.ofvh9i8---resize-5-cover .s__5SKJ9H{object-fit:cover}.s__2Q3iK3.ofvh9i8--fluid .s__5SKJ9H{height:100%;overflow:hidden;width:100%}.s__2Q3iK3:not(.ofvh9i8--stretchImage){align-items:center}.s__2Q3iK3.ofvh9i8--fluid:not(.ofvh9i8--stretchImage) .s__5SKJ9H,.s__2Q3iK3:not(.ofvh9i8--stretchImage) .s__5SKJ9H{height:min(var(--wut-source-height,100%),100%);margin:0 auto;width:min(var(--wut-source-width,100%),100%)}.s__2Q3iK3.ofvh9i8---hoverEffect-4-zoom{overflow:hidden}.s__2Q3iK3.ofvh9i8---hoverEffect-4-zoom .s__5SKJ9H{overflow:initial;transform:scale(calc(100/107)) translate(-3.5%,-3.5%);transition:all .5s cubic-bezier(.18,.73,.63,1)}.s__2Q3iK3.ofvh9i8---hoverEffect-4-zoom:hover .s__5SKJ9H{transform:scale(1) translate(-3.5%,-3.5%)}.s__2Q3iK3.ofvh9i8---hoverEffect-6-darken:hover .s__5SKJ9H{filter:brightness(85%) contrast(115%)}.s__2Q3iK3:not(.ofvh9i8--isError){background-color:rgb(var(--wix-ui-tpa-wow-image-background-color,var(--WowImage1821133350-transparent)));border:var(--wix-ui-tpa-wow-image-border-width,0) solid rgb(var(--wix-ui-tpa-wow-image-border-color,var(--WowImage1821133350-transparent)));border-radius:var(--wix-ui-tpa-wow-image-border-radius,0);overflow:hidden}.s__2Q3iK3:not(.ofvh9i8--isError).ofvh9i8--noImage{background-color:rgb(var(--wix-ui-tpa-wow-image-background-color,var(--wix-color-5),.2))}.s__2Q3iK3 .s__5SKJ9H{opacity:var(--wix-ui-tpa-wow-image-image-opacity,1)}.s__2Q3iK3.ofvh9i8--isError{background-color:rgb(var(--wix-color-2));position:relative}.s__2Q3iK3.ofvh9i8--isError img{display:none}.s__2Q3iK3 .sMOe22c{align-items:center;background:rgb(0,0,0,.6);display:flex;flex-direction:column;height:100%;justify-content:center;position:absolute;width:100%;z-index:1}.sY02ebc{--wix-ui-tpa-text-main-text-color:var(--wix-color-1),1;--wix-ui-tpa-text-main-text-color-rgb:var(--wix-color-1);--wix-ui-tpa-text-main-text-color-opacity:1;--wix-ui-tpa-text-main-text-font-text-decoration:var(--wix-ui-tpa-picker-font-style-text-decoration,var(--wix-font-Body-M-text-decoration));--wix-ui-tpa-text-main-text-font-line-height:var(--wix-ui-tpa-picker-font-style-line-height,1.5em);--wix-ui-tpa-text-main-text-font-family:var(--wix-ui-tpa-picker-font-style-family,var(--wix-font-Body-M-family));--wix-ui-tpa-text-main-text-font-size:var(--wix-ui-tpa-picker-font-style-size,14px);--wix-ui-tpa-text-main-text-font-style:var(--wix-ui-tpa-picker-font-style-style,var(--wix-font-Body-M-style));--wix-ui-tpa-text-main-text-font-variant:var(--wix-ui-tpa-picker-font-style-variant,var(--wix-font-Body-M-variant));--wix-ui-tpa-text-main-text-font-weight:var(--wix-ui-tpa-picker-font-style-weight,var(--wix-font-Body-M-weight))}.sVIeY60{clip:rect(1px,1px,1px,1px)!important;border:0!important;-webkit-clip-path:inset(50%)!important;clip-path:inset(50%)!important;height:1px!important;margin:-1px!important;overflow:hidden!important;padding:0!important;position:absolute!important;white-space:nowrap!important;width:1px!important}.sNhHPgD{color:rgb(var(--wix-color-1))}.s__3_4n6K{background-color:rgb(0,0,0,.6);display:none;height:100%;left:0;position:absolute;top:0;width:100%}.s__2Q3iK3.ofvh9i8--loadSpinner:not(.ofvh9i8--loaded) .s__3_4n6K{display:block}.soryhx4 .s__0IZGD6{stroke:#fff}.sR2mOpr{background-color:transparent;border:0;font-size:var(--wix-ui-tpa-text-button-main-text-font-size,16px);line-height:var(--wix-ui-tpa-text-button-main-text-font-line-height,1.5em);padding:0;text-decoration:none}.sR2mOpr,.sR2mOpr.o__9yQGZy--mobile{font-family:var(--wix-ui-tpa-text-button-main-text-font-family,var(--wix-font-Body-M-family));font-style:var(--wix-ui-tpa-text-button-main-text-font-style,var(--wix-font-Body-M-style));font-variant:var(--wix-ui-tpa-text-button-main-text-font-variant,var(--wix-font-Body-M-variant));font-weight:var(--wix-ui-tpa-text-button-main-text-font-weight,var(--wix-font-Body-M-weight));text-decoration:var(--wix-ui-tpa-text-button-main-text-font-text-decoration,var(--wix-font-Body-M-text-decoration))}.sR2mOpr.o__9yQGZy--mobile{font-size:var(--wix-ui-tpa-text-button-main-text-font-size,14px);line-height:var(--wix-ui-tpa-text-button-main-text-font-line-height,1.44em)}.sR2mOpr.o__9yQGZy---priority-7-primary{color:rgb(var(--wix-ui-tpa-text-button-main-text-color,var(--wix-color-8)))}.sR2mOpr.o__9yQGZy---priority-7-primary.onodcdP--focus,.sR2mOpr.o__9yQGZy---priority-7-primary:active,.sR2mOpr.o__9yQGZy---priority-7-primary:hover{color:rgb(var(--wix-ui-tpa-text-button-main-text-color-rgb,var(--wix-color-8)),calc(var(--wix-ui-tpa-text-button-main-text-color-opacity, 1)*.7))}.sR2mOpr.o__9yQGZy---priority-9-secondary{color:rgb(var(--wix-ui-tpa-text-button-main-text-color,var(--wix-color-5)))}.sR2mOpr.o__9yQGZy---priority-9-secondary.onodcdP--focus,.sR2mOpr.o__9yQGZy---priority-9-secondary:active,.sR2mOpr.o__9yQGZy---priority-9-secondary:hover{color:rgb(var(--wix-ui-tpa-text-button-main-text-color-rgb,var(--wix-color-5)),calc(var(--wix-ui-tpa-text-button-main-text-color-opacity, 1)*.7))}.sR2mOpr.o__9yQGZy---priority-4-link{color:rgb(var(--wix-ui-tpa-text-button-main-text-color,var(--wix-color-5)));text-decoration:underline}.sR2mOpr.o__9yQGZy---priority-4-link.onodcdP--focus,.sR2mOpr.o__9yQGZy---priority-4-link:active,.sR2mOpr.o__9yQGZy---priority-4-link:hover{color:rgb(var(--wix-ui-tpa-text-button-main-text-color-rgb,var(--wix-color-5)),calc(var(--wix-ui-tpa-text-button-main-text-color-opacity, 1)*.7))}.sR2mOpr.o__9yQGZy---priority-4-link.oVxUPr7--disabled,.sR2mOpr.o__9yQGZy---priority-7-primary.oVxUPr7--disabled,.sR2mOpr.o__9yQGZy---priority-9-secondary.oVxUPr7--disabled{color:rgb(var(--wix-color-3))}.skW7NNK svg{height:1.5em;margin:calc(-1*(1.5em/4)) 0;width:1.5em}.skW7NNK svg:not([fill=currentColor]) path{stroke:currentColor;fill:none}.sBeFvEj:before,.s_DdBRK:after{content:"";display:inline-block;height:1px;width:4px}.s__2Ub3w5{display:inline-flex;flex-direction:row}.s__2Ub3w5.odQThDl---size-5-large .sasnKd5,.s__2Ub3w5.odQThDl---size-6-xLarge .sasnKd5{padding-left:14px}.s__2Ub3w5.odQThDl---size-6-medium .sasnKd5{padding-left:12px}.s__2Ub3w5.odQThDl---size-5-small .sasnKd5{padding-left:10px}.s__2Ub3w5.odQThDl---size-6-xSmall .sasnKd5{padding-left:6px}.s__2Ub3w5.odQThDl---size-7-xxSmall .sasnKd5{padding-left:4px}.s__2Ub3w5.odQThDl---size-5-large .sx38xyu,.s__2Ub3w5.odQThDl---size-6-xLarge .sx38xyu{margin-left:-14px}.s__2Ub3w5.odQThDl---size-6-medium .sx38xyu{margin-left:-12px}.s__2Ub3w5.odQThDl---size-5-small .sx38xyu{margin-left:-10px}.s__2Ub3w5.odQThDl---size-6-xSmall .sx38xyu{margin-left:-6px}.s__2Ub3w5.odQThDl---size-7-xxSmall .sx38xyu{margin-left:-4px}.s__2Ub3w5 .socOxOb{border:1px solid;border-color:rgb(var(--wix-ui-tpa-avatar-group-avatar-border-color,var(--wix-color-1)))}.s__2Ub3w5.odQThDl---size-5-large .socOxOb,.s__2Ub3w5.odQThDl---size-5-small .socOxOb,.s__2Ub3w5.odQThDl---size-6-medium .socOxOb,.s__2Ub3w5.odQThDl---size-6-xLarge .socOxOb{border-width:2px}.sdqm4ud{align-items:center;display:flex}.odQThDl---size-5-large .sdqm4ud:before,.odQThDl---size-5-small .sdqm4ud:before,.odQThDl---size-6-medium .sdqm4ud:before,.odQThDl---size-6-xLarge .sdqm4ud:before{content:"\A0";width:12px}.odQThDl---size-6-xSmall .sdqm4ud:before{content:"\A0";width:10px}.odQThDl---size-7-xxSmall .sdqm4ud:before{content:"\A0";width:8px}.s__2Ub3w5.odQThDl---size-5-large .sc6KPy1,.s__2Ub3w5.odQThDl---size-5-small .sc6KPy1,.s__2Ub3w5.odQThDl---size-6-medium .sc6KPy1{--wix-ui-tpa-text-button-main-text-color:var(--wix-ui-tpa-avatar-group-text-button-color,var(--wix-color-5));--wix-ui-tpa-text-button-main-text-color-rgb:var(--wix-ui-tpa-avatar-group-text-button-color-rgb,var(--wix-color-5));--wix-ui-tpa-text-button-main-text-color-opacity:var(--wix-ui-tpa-avatar-group-text-button-color-opacity);--wix-ui-tpa-text-button-main-text-font-text-decoration:var(--wix-ui-tpa-avatar-group-text-button-font-text-decoration);--wix-ui-tpa-text-button-main-text-font-line-height:var(--wix-ui-tpa-avatar-group-text-button-font-line-height);--wix-ui-tpa-text-button-main-text-font-family:var(--wix-ui-tpa-avatar-group-text-button-font-family);--wix-ui-tpa-text-button-main-text-font-size:var(--wix-ui-tpa-avatar-group-text-button-font-size);--wix-ui-tpa-text-button-main-text-font-style:var(--wix-ui-tpa-avatar-group-text-button-font-style);--wix-ui-tpa-text-button-main-text-font-variant:var(--wix-ui-tpa-avatar-group-text-button-font-variant);--wix-ui-tpa-text-button-main-text-font-weight:var(--wix-ui-tpa-avatar-group-text-button-font-weight)}.s__2Ub3w5.odQThDl---size-6-xSmall .sc6KPy1,.s__2Ub3w5.odQThDl---size-7-xxSmall .sc6KPy1{--wix-ui-tpa-text-button-main-text-color:var(--wix-ui-tpa-avatar-group-text-button-color,var(--wix-color-5));--wix-ui-tpa-text-button-main-text-color-rgb:var(--wix-ui-tpa-avatar-group-text-button-color-rgb,var(--wix-color-5));--wix-ui-tpa-text-button-main-text-color-opacity:var(--wix-ui-tpa-avatar-group-text-button-color-opacity);--wix-ui-tpa-text-button-main-text-font-text-decoration:var(--wix-ui-tpa-avatar-group-text-button-font-text-decoration,var(--wix-font-Body-M-text-decoration));--wix-ui-tpa-text-button-main-text-font-line-height:var(--wix-ui-tpa-avatar-group-text-button-font-line-height,1.44em);--wix-ui-tpa-text-button-main-text-font-family:var(--wix-ui-tpa-avatar-group-text-button-font-family,var(--wix-font-Body-M-family));--wix-ui-tpa-text-button-main-text-font-size:var(--wix-ui-tpa-avatar-group-text-button-font-size,14px);--wix-ui-tpa-text-button-main-text-font-style:var(--wix-ui-tpa-avatar-group-text-button-font-style,var(--wix-font-Body-M-style));--wix-ui-tpa-text-button-main-text-font-variant:var(--wix-ui-tpa-avatar-group-text-button-font-variant,var(--wix-font-Body-M-variant));--wix-ui-tpa-text-button-main-text-font-weight:var(--wix-ui-tpa-avatar-group-text-button-font-weight,var(--wix-font-Body-M-weight))}.L5u5gG{display:block;height:100%;width:100%}.L5u5gG img{max-width:var(--wix-img-max-width,100%)}.L5u5gG[data-animate-blur] img{filter:blur(9px);transition:filter .8s ease-in}.L5u5gG[data-animate-blur] img[data-load-done]{filter:none}</style><style data-href="https://static.parastorage.com/services/events-viewer/1.3110.0/client-viewer/SingleEvent.chunk.min.css">.sFpJVMj{--wix-ui-tpa-wow-image-background-color:255,255,255,0;--wix-ui-tpa-wow-image-background-color-rgb:255,255,255;--wix-ui-tpa-wow-image-background-color-opacity:0;--wix-ui-tpa-wow-image-image-opacity:calc(var(--multiImageOpacity, var(--listImageOpacity)) * 1%)}.sKV14Kk{--wix-ui-tpa-wow-image-background-color:255,255,255,0;--wix-ui-tpa-wow-image-background-color-rgb:255,255,255;--wix-ui-tpa-wow-image-background-color-opacity:0;--wix-ui-tpa-wow-image-image-opacity:calc(var(--multiImageOpacity) * 1%)}.scW1S6m{--wix-ui-tpa-wow-image-background-color:255,255,255,0;--wix-ui-tpa-wow-image-background-color-rgb:255,255,255;--wix-ui-tpa-wow-image-background-color-opacity:0;--wix-ui-tpa-wow-image-image-opacity:calc(var(--imageOpacity) * 1%)}.sdphgnc{display:inline-block}.sJnAwq6{cursor:pointer}.evStylesPresetV2 .s_k8Bou,.evStylesPresetV2 .slxYmAh{--wix-ui-tpa-avatar-group-avatar-border-color:255,255,255,1;--wix-ui-tpa-avatar-group-avatar-border-color-rgb:255,255,255;--wix-ui-tpa-avatar-group-avatar-border-color-opacity:1;--wix-ui-tpa-avatar-group-text-button-color:var(--linkColorV2);--wix-ui-tpa-avatar-group-text-button-color-rgb:var(--linkColorV2-rgb);--wix-ui-tpa-avatar-group-text-button-color-opacity:var(--linkColorV2-opacity);--wix-ui-tpa-avatar-group-text-button-font-text-decoration:var(--linkFontV2-text-decoration);--wix-ui-tpa-avatar-group-text-button-font-line-height:var(--linkFontV2-line-height);--wix-ui-tpa-avatar-group-text-button-font-family:var(--linkFontV2-family);--wix-ui-tpa-avatar-group-text-button-font-size:var(--linkFontV2-size);--wix-ui-tpa-avatar-group-text-button-font-style:var(--linkFontV2-style);--wix-ui-tpa-avatar-group-text-button-font-variant:var(--linkFontV2-variant);--wix-ui-tpa-avatar-group-text-button-font-weight:var(--linkFontV2-weight)}.evClassicPreset .s_k8Bou{--wix-ui-tpa-avatar-group-avatar-border-color:255,255,255,1;--wix-ui-tpa-avatar-group-avatar-border-color-rgb:255,255,255;--wix-ui-tpa-avatar-group-avatar-border-color-opacity:1;--wix-ui-tpa-avatar-group-text-button-color:var(--listContentTextColor);--wix-ui-tpa-avatar-group-text-button-color-rgb:var(--listContentTextColor-rgb);--wix-ui-tpa-avatar-group-text-button-color-opacity:var(--listContentTextColor-opacity);--wix-ui-tpa-avatar-group-text-button-font-text-decoration:var(--listContentTextFont-text-decoration);--wix-ui-tpa-avatar-group-text-button-font-line-height:var(--listContentTextFont-line-height);--wix-ui-tpa-avatar-group-text-button-font-family:var(--listContentTextFont-family);--wix-ui-tpa-avatar-group-text-button-font-size:var(--listContentTextFont-size);--wix-ui-tpa-avatar-group-text-button-font-style:var(--listContentTextFont-style);--wix-ui-tpa-avatar-group-text-button-font-variant:var(--listContentTextFont-variant);--wix-ui-tpa-avatar-group-text-button-font-weight:var(--listContentTextFont-weight)}.evClassicPreset .slxYmAh{--wix-ui-tpa-avatar-group-avatar-border-color:255,255,255,1;--wix-ui-tpa-avatar-group-avatar-border-color-rgb:255,255,255;--wix-ui-tpa-avatar-group-avatar-border-color-opacity:1;--wix-ui-tpa-avatar-group-text-button-color:var(--listHeaderTitleColor);--wix-ui-tpa-avatar-group-text-button-color-rgb:var(--listHeaderTitleColor-rgb);--wix-ui-tpa-avatar-group-text-button-color-opacity:var(--listHeaderTitleColor-opacity);--wix-ui-tpa-avatar-group-text-button-font-text-decoration:var(--listHeaderLocationFont-text-decoration);--wix-ui-tpa-avatar-group-text-button-font-line-height:var(--listHeaderLocationFont-line-height);--wix-ui-tpa-avatar-group-text-button-font-family:var(--listHeaderLocationFont-family);--wix-ui-tpa-avatar-group-text-button-font-size:var(--listHeaderLocationFont-size);--wix-ui-tpa-avatar-group-text-button-font-style:var(--listHeaderLocationFont-style);--wix-ui-tpa-avatar-group-text-button-font-variant:var(--listHeaderLocationFont-variant);--wix-ui-tpa-avatar-group-text-button-font-weight:var(--listHeaderLocationFont-weight)}.smKzSt2{--wix-ui-tpa-avatar-group-avatar-border-color:255,255,255,1;--wix-ui-tpa-avatar-group-avatar-border-color-rgb:255,255,255;--wix-ui-tpa-avatar-group-avatar-border-color-opacity:1;--wix-ui-tpa-avatar-group-text-button-color:var(--textsColor);--wix-ui-tpa-avatar-group-text-button-color-rgb:var(--textsColor-rgb);--wix-ui-tpa-avatar-group-text-button-color-opacity:var(--textsColor-opacity);--wix-ui-tpa-avatar-group-text-button-font-text-decoration:var(--compactTextsFont-text-decoration);--wix-ui-tpa-avatar-group-text-button-font-line-height:var(--compactTextsFont-line-height);--wix-ui-tpa-avatar-group-text-button-font-family:var(--compactTextsFont-family);--wix-ui-tpa-avatar-group-text-button-font-size:var(--compactTextsFont-size);--wix-ui-tpa-avatar-group-text-button-font-style:var(--compactTextsFont-style);--wix-ui-tpa-avatar-group-text-button-font-variant:var(--compactTextsFont-variant);--wix-ui-tpa-avatar-group-text-button-font-weight:var(--compactTextsFont-weight)}.slcQHRg{--wix-ui-tpa-avatar-group-avatar-border-color:255,255,255,1;--wix-ui-tpa-avatar-group-avatar-border-color-rgb:255,255,255;--wix-ui-tpa-avatar-group-avatar-border-color-opacity:1;--wix-ui-tpa-avatar-group-text-button-color:var(--calendarCellEventNameColor);--wix-ui-tpa-avatar-group-text-button-color-rgb:var(--calendarCellEventNameColor-rgb);--wix-ui-tpa-avatar-group-text-button-color-opacity:var(--calendarCellEventNameColor-opacity);--wix-ui-tpa-avatar-group-text-button-font-text-decoration:var(--calendarCellEventNameFont-text-decoration);--wix-ui-tpa-avatar-group-text-button-font-line-height:var(--calendarCellEventNameFont-line-height);--wix-ui-tpa-avatar-group-text-button-font-family:var(--calendarCellEventNameFont-family);--wix-ui-tpa-avatar-group-text-button-font-size:var(--calendarCellEventNameFont-size);--wix-ui-tpa-avatar-group-text-button-font-style:var(--calendarCellEventNameFont-style);--wix-ui-tpa-avatar-group-text-button-font-variant:var(--calendarCellEventNameFont-variant);--wix-ui-tpa-avatar-group-text-button-font-weight:var(--calendarCellEventNameFont-weight)}.sRCouJq{--wix-ui-tpa-avatar-group-avatar-border-color:255,255,255,1;--wix-ui-tpa-avatar-group-avatar-border-color-rgb:255,255,255;--wix-ui-tpa-avatar-group-avatar-border-color-opacity:1;--wix-ui-tpa-avatar-group-text-button-color:var(--onImageTextsColor);--wix-ui-tpa-avatar-group-text-button-color-rgb:var(--onImageTextsColor-rgb);--wix-ui-tpa-avatar-group-text-button-color-opacity:var(--onImageTextsColor-opacity);--wix-ui-tpa-avatar-group-text-button-font-text-decoration:var(--compactTextsFont-text-decoration);--wix-ui-tpa-avatar-group-text-button-font-line-height:var(--compactTextsFont-line-height);--wix-ui-tpa-avatar-group-text-button-font-family:var(--compactTextsFont-family);--wix-ui-tpa-avatar-group-text-button-font-size:var(--compactTextsFont-size);--wix-ui-tpa-avatar-group-text-button-font-style:var(--compactTextsFont-style);--wix-ui-tpa-avatar-group-text-button-font-variant:var(--compactTextsFont-variant);--wix-ui-tpa-avatar-group-text-button-font-weight:var(--compactTextsFont-weight)}.evClassicPreset .sntR6_E{font-size:14px!important}.Ce1nzG{align-items:center;display:inline-flex;font:var(--wix-font-Body-M);font-size:14px;height:24px;max-width:100%;overflow:hidden;padding:0 16px;-webkit-text-decoration:var(--wix-font-Body-M-text-decoration);text-decoration:var(--wix-font-Body-M-text-decoration);white-space:nowrap}.CaN4vz{background:rgb(var(--soldOutRibbonBackgroundColor));color:rgb(var(--soldOutRibbonTextColor));font:var(--soldOutRibbonFont);-webkit-text-decoration:var(--soldOutRibbonFont-text-decoration);text-decoration:var(--soldOutRibbonFont-text-decoration)}.QBNkB1{background:rgb(var(--rsvpClosedRibbonBackgroundColor));color:rgb(var(--rsvpClosedRibbonTextColor));font:var(--rsvpClosedRibbonFont);-webkit-text-decoration:var(--rsvpClosedRibbonFont-text-decoration);text-decoration:var(--rsvpClosedRibbonFont-text-decoration)}.mILZ4x{background:rgb(var(--joinWaitlistRibbonBackgroundColor));color:rgb(var(--joinWaitlistRibbonTextColor));font:var(--joinWaitlistRibbonFont);-webkit-text-decoration:var(--joinWaitlistRibbonFont-text-decoration);text-decoration:var(--joinWaitlistRibbonFont-text-decoration)}.yc9I6P{border:1px solid rgb(var(--membershipRibbonBorderColor));color:rgb(var(--membershipRibbonTextColor));font:var(--membershipRibbonFont);-webkit-text-decoration:var(--membershipRibbonFont-text-decoration);text-decoration:var(--membershipRibbonFont-text-decoration)}.y5d1PN,.yc9I6P{background:transparent}.y5d1PN{border:1px solid rgb(var(--recurringRibbonBorderColor));color:rgb(var(--recurringRibbonTextColor));font:var(--recurringRibbonFont);-webkit-text-decoration:var(--recurringRibbonFont-text-decoration);text-decoration:var(--recurringRibbonFont-text-decoration)}.B4WYyN{border:1px solid rgb(var(--membershipRibbonBorderColor));color:rgb(var(--membershipRibbonTextColor));font:var(--membershipRibbonFont);-webkit-text-decoration:var(--membershipRibbonFont-text-decoration);text-decoration:var(--membershipRibbonFont-text-decoration)}.B4WYyN,.OSNkXE{background:transparent}.OSNkXE{border:1px solid rgb(var(--recurringRibbonBorderColor));color:rgb(var(--recurringRibbonTextColor));font:var(--recurringRibbonFont);-webkit-text-decoration:var(--recurringRibbonFont-text-decoration);text-decoration:var(--recurringRibbonFont-text-decoration)}.x73ahn{overflow:hidden;text-overflow:ellipsis}.UOHdIx{align-items:center;display:flex}.bu16Av{margin-bottom:calc(0px + -.25em);margin-top:calc(0px + -.25em)}.AinsX6,.bu16Av{line-height:1.5!important}._8yxZW9{white-space:pre-wrap}.LjZg6p{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.jHIfl5,.sXIz18{align-items:center;display:flex}.TGstrW{border-inline-end:1px solid;flex-shrink:0;height:.8em}.sXIz18{white-space:nowrap}.sXIz18 .pMI2qb,.sXIz18 .xixIN8{overflow:hidden;text-overflow:ellipsis}.sXIz18 .pMI2qb{flex-shrink:0;max-width:80%}.sXIz18 .TGstrW{margin:0 10px}.jHIfl5{flex-wrap:wrap}.jHIfl5 .yheNnz{align-items:center;display:flex}.jHIfl5 .xixIN8{word-break:break-word}.jHIfl5 .TGstrW{margin:0 12px}.FA264N{color:rgb(var(--textsColor))}.FA264N,.z2yURz{font:var(--compactTextsFont);-webkit-text-decoration:var(--compactTextsFont-text-decoration);text-decoration:var(--compactTextsFont-text-decoration)}.z2yURz{color:rgb(var(--onImageTextsColor))}.KbGbQs,.eventsRtl .MYiaAc{justify-content:flex-start}.VAfwU8{justify-content:center}.MYiaAc,.eventsRtl .KbGbQs{justify-content:flex-end}.WQ6Du6 .TGstrW,.WQ6Du6 .pMI2qb{display:none}.WQ6Du6 .xixIN8{max-width:100%}.RxeCbi .TGstrW,.RxeCbi .xixIN8{display:none}.RxeCbi .pMI2qb{max-width:100%}.tu5Atz{font-size:18px!important}.kKuXKf{margin-bottom:12px}.RaIPqr,.kKuXKf{letter-spacing:1px}.RaIPqr{margin-inline-end:24px}.LE4lF8{font-size:16px;white-space:nowrap}.DdDzW9{color:inherit;cursor:pointer;display:inline-block}.iguBq3{align-items:center;display:flex}.IuNIzI{color:rgb(var(--shareIconsColorV2))}.n5TTun{font-size:18px!important}.W2ZNnD{color:rgb(var(--countdownColor));font:var(--countdownFont);-webkit-text-decoration:var(--countdownFont-text-decoration);text-decoration:var(--countdownFont-text-decoration)}.kVDYpL{color:rgb(var(--onImageCountdownColor))}.DZBm0d{margin:0 auto 0 0}.DCTXbr{margin:0 auto}.hQAwYk{margin:0 0 0 auto}.Gangn7{background-color:rgb(var(--onImageDividerColor))}.njGJnp{background-color:rgb(var(--dividerColor))}.aYgk9v{align-self:center;display:flex;justify-content:center;margin:0 70px;width:10px}._ZEaNS{display:block;margin-bottom:36px;margin-top:36px}.qBCPEN{margin:12px 0}.yiOH0x{display:inline-block;max-width:100%}.CEmW4c{color:rgb(var(--labelsColor));font:var(--labelsFont);-webkit-text-decoration:var(--labelsFont-text-decoration);text-decoration:var(--labelsFont-text-decoration)}.Qkp9SJ{color:rgb(var(--textsColor));font:var(--textsFont);-webkit-text-decoration:var(--textsFont-text-decoration);text-decoration:var(--textsFont-text-decoration)}.aBMIsr{color:rgb(var(--onImageLabelsColor))}._aZdmE{color:rgb(var(--onImageTextsColor))}.MTGpiK .CEmW4c{line-height:1.5!important;margin-bottom:calc(24px + -.25em);margin-top:calc(0px + -.25em)}.WjL3Rv{display:flex}.WjL3Rv .CEmW4c{line-height:1.5!important;margin-bottom:calc(46px + -.25em);margin-top:calc(0px + -.25em)}.WjL3Rv .yiOH0x{display:block}.wE4qwT.gyKVk7 .CEmW4c{font-size:20px!important}.wE4qwT.gyKVk7 .yiOH0x{font-size:16px!important}.wE4qwT.WjL3Rv .CEmW4c{line-height:1.5!important;margin-bottom:calc(24px + -.25em);margin-top:calc(0px + -.25em)}@media(min-width:501px){.WjL3Rv.kTgOYg,.eventsRtl .WjL3Rv.UaQiqY{justify-content:flex-start}.WjL3Rv.PB_sYE{justify-content:center}.WjL3Rv.PB_sYE .j3AQS4,.WjL3Rv.PB_sYE .qj3g_a{flex-basis:50%;flex-grow:1}.WjL3Rv.UaQiqY,.eventsRtl .WjL3Rv.kTgOYg{justify-content:flex-end}.WjL3Rv.UaQiqY:not(.TM5zWC):not(.KFhXYl) .j3AQS4,.WjL3Rv.UaQiqY:not(.TM5zWC):not(.KFhXYl) .qj3g_a,.WjL3Rv.kTgOYg:not(.TM5zWC):not(.KFhXYl) .j3AQS4,.WjL3Rv.kTgOYg:not(.TM5zWC):not(.KFhXYl) .qj3g_a{max-width:calc(50% - 70px - 10px/2)}.WjL3Rv.bcdqU4:not(.KFhXYl) .qj3g_a{margin-inline-end:150px}._ZEaNS{display:none}}@media(max-width:500px){.WjL3Rv{flex-direction:column}.WjL3Rv.bcdqU4:not(.KFhXYl) .qj3g_a{margin-bottom:72px!important}.aYgk9v{display:none}}.KubSJS{font-size:16px!important}.QwxLu3{color:rgb(var(--descriptionColor));font:var(--descriptionFont);-webkit-text-decoration:var(--descriptionFont-text-decoration);text-decoration:var(--descriptionFont-text-decoration)}.wdExWB{color:rgb(var(--onImageDescriptionColor))}.sNp9JN{height:100%;overflow:hidden;position:absolute;top:0;width:100%}.nI6aye{background-color:rgb(var(--multiImageBackgroundColor,var(--listImageBackgroundColor)))}.IH1M3w{background-color:rgb(var(--multiImageBackgroundColor,var(--wix-color-8)))}.Frxj4Q{background-color:rgb(var(--imageBackgroundColor))}.bkBcmF{display:var(--singleContainImageVisibility)!important}.WHyOMh{display:var(--singleCoverImageVisibility)!important}.PSH0XH{display:var(--multiContainImageVisibility)!important}.p7b1HW{display:var(--multiCoverImageVisibility)!important}.P7eGiM,.PN7j9D{background-clip:content-box;border:inherit;border-color:transparent;inset-inline-end:0;position:absolute;top:0}.P7eGiM{background-color:rgb(var(--imageBackgroundColor));height:100%;width:100%}.OOq_F5{flex-grow:1}.YWAUac{margin-bottom:24px}:where(.DjQEyU){color:inherit;text-decoration:inherit}.xAH0mk{display:inline-block}._MlcyF{width:100%}.NBw1Kz{color:rgb(var(--labelsColor));line-height:1.5!important;font:var(--labelsFont);margin-bottom:calc(24px + -.25em);margin-top:calc(0px + -.25em);-webkit-text-decoration:var(--labelsFont-text-decoration);text-decoration:var(--labelsFont-text-decoration)}.P4qjxu{color:rgb(var(--onImageLabelsColor))}.BoD93f{background-color:rgb(var(--singleButtonBackgroundColor));border-color:rgb(var(--singleButtonBorderColor));border-radius:calc(var(--singleButtonBorderRadius)*1px);border-style:solid;border-width:calc(var(--singleButtonBorderWidth)*1px);color:rgb(var(--singleButtonColor));cursor:pointer;font:var(--singleButtonFont);overflow:visible;padding:10px 30px;position:relative;-webkit-text-decoration:var(--singleButtonFont-text-decoration);text-decoration:var(--singleButtonFont-text-decoration);white-space:nowrap}.BoD93f.CKLKOJ{background-color:rgb(var(--singleOnImageButtonBackgroundColor));border-color:rgb(var(--singleOnImageButtonBorderColor));color:rgb(var(--singleOnImageButtonColor))}.BoD93f:hover{opacity:.7}.zLSZXO{align-items:center;display:inline-flex;justify-content:center;margin:auto}.QQZ4S5{visibility:hidden}.bEXKbn.DwnNru .NBw1Kz{font-size:20px!important}.bEXKbn.DwnNru .BoD93f{font-size:14px!important}.bEXKbn .BoD93f{max-width:260px;min-height:44px;min-width:60px;padding:0 30px;text-overflow:ellipsis}.IOLuL5{word-wrap:break-word;border-style:solid;display:flex;height:100%}.C7DkT1{display:flex;flex-direction:column;padding:0 42px;position:relative}.KvGTRc{width:100%}.Cn5PoW{margin-bottom:40px}.pe2Vf2{text-align:center}.jtzhoi{text-align:left}.HVPDhL{text-align:right}.PeGSNm{justify-content:center}.QbRhOm{justify-content:flex-start;padding-top:54px}.VxPqyJ{justify-content:flex-end;padding-bottom:54px}.GgNVPA{background-color:rgb(var(--backgroundColor));border-color:rgb(var(--borderColor));border-width:calc(var(--borderWidth)*1px)}.jn_rBu{background-color:transparent;border-width:0}.jn_rBu .C7DkT1{align-items:center;justify-content:center;padding:0!important;text-align:center}.sDsJJj{background-color:transparent}.vuIcQd .C7DkT1{flex-grow:0;padding:42px 10px}.kaDLYn path{fill:rgb(var(--textsColor))}.O6BMPb path{fill:rgb(var(--onImageTextsColor))}.VkuaAp{margin:0 auto 20px;max-width:240px}.jtzhoi .VkuaAp{margin:0 auto 20px 0}.HVPDhL .VkuaAp{margin:0 0 20px auto}.iFiqaE{font-size:34px!important}.EdMH8t{color:rgb(var(--titleColor));font:var(--titleFont);-webkit-text-decoration:var(--titleFont-text-decoration);text-decoration:var(--titleFont-text-decoration)}.kFjtai{color:rgb(var(--onImageTitleColor))}</style><script id="comp-jnmw33vq__LOADABLE_REQUIRED_CHUNKS__" type="application/json">[1679,5431,1721]</script><script id="comp-jnmw33vq__LOADABLE_REQUIRED_CHUNKS___ext" type="application/json">{"namedChunks":["SingleEvent"]}</script><script async="" data-chunk="SingleEvent" src="https://static.parastorage.com/services/events-viewer/1.3110.0/client-viewer/1679.chunk.min.js"></script><script async="" data-chunk="SingleEvent" src="https://static.parastorage.com/services/events-viewer/1.3110.0/client-viewer/5431.chunk.min.js"></script><script async="" data-chunk="SingleEvent" src="https://static.parastorage.com/services/events-viewer/1.3110.0/client-viewer/SingleEvent.chunk.min.js"></script>
<!-- Loadable Component comp-jnmw58uo -->
<style data-href="https://static.parastorage.com/services/events-viewer/1.3110.0/client-viewer/5431.chunk.min.css">.seduTAo,.soEpjwf{outline:0}.sk16e2z{display:inline-flex;flex-direction:row}.s__4s5Aa9,.s__5LWWvH{align-items:center;display:flex;overflow:hidden;position:relative}.s__5LWWvH{aspect-ratio:1;border-radius:50%;justify-content:center;letter-spacing:0;text-align:center}.srxDUbR{--wix-ui-tpa-wow-image-border-radius:calc(50 * 1%);font-size:medium;height:100%;width:100%}.sIce1Hx:before,.sYFGzBI:before{height:100%;position:absolute;width:100%}.sIce1Hx:before{align-items:center;content:attr(data-initials);display:flex;justify-content:center}.sYFGzBI:before{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3Cstyle%3E.cls-anonymous-icon{fill:%23969696}%3C/style%3E%3C/defs%3E%3Cellipse class='cls-anonymous-icon' cx='103.7' cy='74.3' rx='38.3' ry='38.7'/%3E%3Cpath style='fill:none' d='M0 0h200v200H0z'/%3E%3Cpath class='cls-anonymous-icon' d='M188.4 200c-7.4-43.6-44.2-76.8-88.4-76.8S19 156.4 11.6 200Z'/%3E%3C/svg%3E");content:""}.sif9Lvj{align-items:center;cursor:pointer;display:inline-flex}.sHICw9H,.sw5N_H7{flex-shrink:0}.sif9Lvj.oVxUPr7--disabled{cursor:default}.sif9Lvj[disabled]{pointer-events:none}.sr3x_Jq{--Text1297168438-primary-color:rgb(var(--wix-ui-tpa-text-main-text-color,var(--wix-color-5)));--Text1297168438-secondary-color:rgb(var(--wix-ui-tpa-text-main-text-color,var(--wix-color-4)))}.sr3x_Jq.onmsXom---priority-7-primary{color:var(--wut-text-color,var(--Text1297168438-primary-color))}.sr3x_Jq.onmsXom---priority-9-secondary{color:var(--wut-placeholder-color,var(--Text1297168438-secondary-color))}.sr3x_Jq.onmsXom---typography-10-smallTitle{font-family:var(--wix-ui-tpa-text-main-text-font-family,var(--wix-font-Page-title-family));font-size:var(--wix-ui-tpa-text-main-text-font-size,24px);font-style:var(--wix-ui-tpa-text-main-text-font-style,var(--wix-font-Page-title-style));font-variant:var(--wix-ui-tpa-text-main-text-font-variant,var(--wix-font-Page-title-variant));font-weight:var(--wix-ui-tpa-text-main-text-font-weight,var(--wix-font-Page-title-weight));line-height:var(--wix-ui-tpa-text-main-text-font-line-height,1.33em);text-decoration:var(--wix-ui-tpa-text-main-text-font-text-decoration,var(--wix-font-Page-title-text-decoration))}.sr3x_Jq.onmsXom---typography-11-runningText{line-height:var(--wix-ui-tpa-text-main-text-font-line-height,1.5em)}.sr3x_Jq.onmsXom---typography-11-runningText,.sr3x_Jq.onmsXom---typography-8-listText{font-family:var(--wix-ui-tpa-text-main-text-font-family,var(--wix-font-Body-M-family));font-size:var(--wix-ui-tpa-text-main-text-font-size,16px);font-style:var(--wix-ui-tpa-text-main-text-font-style,var(--wix-font-Body-M-style));font-variant:var(--wix-ui-tpa-text-main-text-font-variant,var(--wix-font-Body-M-variant));font-weight:var(--wix-ui-tpa-text-main-text-font-weight,var(--wix-font-Body-M-weight));text-decoration:var(--wix-ui-tpa-text-main-text-font-text-decoration,var(--wix-font-Body-M-text-decoration))}.sr3x_Jq.onmsXom---typography-8-listText{line-height:var(--wix-ui-tpa-text-main-text-font-line-height,2em)}.sr3x_Jq.onmsXom---typography-10-largeTitle{font-family:var(--wix-ui-tpa-text-main-text-font-family,var(--wix-font-Heading-M-family));font-size:var(--wix-ui-tpa-text-main-text-font-size,32px);font-style:var(--wix-ui-tpa-text-main-text-font-style,var(--wix-font-Heading-M-style));font-variant:var(--wix-ui-tpa-text-main-text-font-variant,var(--wix-font-Heading-M-variant));font-weight:var(--wix-ui-tpa-text-main-text-font-weight,var(--wix-font-Heading-M-weight));line-height:var(--wix-ui-tpa-text-main-text-font-line-height,1.25em);text-decoration:var(--wix-ui-tpa-text-main-text-font-text-decoration,var(--wix-font-Heading-M-text-decoration))}.sr3x_Jq.onmsXom--mobile.onmsXom---typography-10-smallTitle{font-family:var(--wix-ui-tpa-text-main-text-font-family,var(--wix-font-Page-title-family));font-size:var(--wix-ui-tpa-text-main-text-font-size,20px);font-style:var(--wix-ui-tpa-text-main-text-font-style,var(--wix-font-Page-title-style));font-variant:var(--wix-ui-tpa-text-main-text-font-variant,var(--wix-font-Page-title-variant));font-weight:var(--wix-ui-tpa-text-main-text-font-weight,var(--wix-font-Page-title-weight));line-height:var(--wix-ui-tpa-text-main-text-font-line-height,1.4em);text-decoration:var(--wix-ui-tpa-text-main-text-font-text-decoration,var(--wix-font-Page-title-text-decoration))}.sr3x_Jq.onmsXom--mobile.onmsXom---typography-11-runningText{line-height:var(--wix-ui-tpa-text-main-text-font-line-height,1.42em)}.sr3x_Jq.onmsXom--mobile.onmsXom---typography-11-runningText,.sr3x_Jq.onmsXom--mobile.onmsXom---typography-8-listText{font-family:var(--wix-ui-tpa-text-main-text-font-family,var(--wix-font-Body-M-family));font-size:var(--wix-ui-tpa-text-main-text-font-size,14px);font-style:var(--wix-ui-tpa-text-main-text-font-style,var(--wix-font-Body-M-style));font-variant:var(--wix-ui-tpa-text-main-text-font-variant,var(--wix-font-Body-M-variant));font-weight:var(--wix-ui-tpa-text-main-text-font-weight,var(--wix-font-Body-M-weight));text-decoration:var(--wix-ui-tpa-text-main-text-font-text-decoration,var(--wix-font-Body-M-text-decoration))}.sr3x_Jq.onmsXom--mobile.onmsXom---typography-8-listText{line-height:var(--wix-ui-tpa-text-main-text-font-line-height,1.72em)}.sr3x_Jq.onmsXom--mobile.onmsXom---typography-10-largeTitle{font-family:var(--wix-ui-tpa-text-main-text-font-family,var(--wix-font-Heading-M-family));font-size:var(--wix-ui-tpa-text-main-text-font-size,24px);font-style:var(--wix-ui-tpa-text-main-text-font-style,var(--wix-font-Heading-M-style));font-variant:var(--wix-ui-tpa-text-main-text-font-variant,var(--wix-font-Heading-M-variant));font-weight:var(--wix-ui-tpa-text-main-text-font-weight,var(--wix-font-Heading-M-weight));line-height:var(--wix-ui-tpa-text-main-text-font-line-height,1.33em);text-decoration:var(--wix-ui-tpa-text-main-text-font-text-decoration,var(--wix-font-Heading-M-text-decoration))}.sSJb9TI{clip:rect(1px,1px,1px,1px)!important;border:0!important;-webkit-clip-path:inset(50%)!important;clip-path:inset(50%)!important;height:1px!important;margin:-1px!important;overflow:hidden!important;padding:0!important;position:absolute!important;white-space:nowrap!important;width:1px!important}.sFqMrFy{--Spinner824016625-diameter:var(--wix-ui-tpa-spinner-diameter,50px);animation:Spinner824016625__rotate 2s linear infinite;height:var(--Spinner824016625-diameter);left:auto;top:auto;width:var(--Spinner824016625-diameter)}.s__0IZGD6{stroke:rgb(var(--wix-ui-tpa-spinner-path-color,var(--wix-color-5)));animation:Spinner824016625__dash 1.5s ease-in-out infinite}.sFqMrFy.o__450uKE--centered{left:calc(50% - var(--Spinner824016625-diameter)/2);position:absolute;top:calc(50% - var(--Spinner824016625-diameter)/2)}.sFqMrFy.o__450uKE--static,.sFqMrFy.o__450uKE--static .s__0IZGD6{animation:none}@keyframes Spinner824016625__rotate{to{transform:rotate(1turn)}}@keyframes Spinner824016625__dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}to{stroke-dasharray:90,150;stroke-dashoffset:-124}}.sKLwRHO{background-color:#d8d8d8}.sKLwRHO .srxDUbR,.sKLwRHO:before{color:#979797;font-family:Madefor,Helvetica Neue,Helvetica,Arial,メイリオ,meiryo,ヒラギノ角ゴ pro w3,hiragino kaku gothic pro,sans-serif;font-weight:500}.sKLwRHO.oYmzR2y---size-6-xLarge{font-size:20px;height:60px;width:60px}.sKLwRHO.oYmzR2y---size-5-large{font-size:18px;height:52px;width:52px}.sKLwRHO.oYmzR2y---size-6-medium{font-size:12px;height:36px;width:36px}.sKLwRHO.oYmzR2y---size-5-small{font-size:9px;height:28px;width:28px}.sKLwRHO.oYmzR2y---size-6-xSmall{font-size:7px;height:20px;width:20px}.sKLwRHO.oYmzR2y---size-7-xxSmall{font-size:5px;height:16px;width:16px}.s__2Q3iK3{--WowImage1821133350-transparent:0,0,0,0;display:flex;height:100%;position:relative}.s__2Q3iK3.ofvh9i8--forceImageContain.ofvh9i8---resize-7-contain{width:100%}.s__2Q3iK3.ofvh9i8--forceImageContain.ofvh9i8---resize-7-contain>*{align-items:center;border:inherit;border-radius:inherit;display:flex;justify-content:center}.s__2Q3iK3.ofvh9i8--forceImageContain.ofvh9i8---resize-7-contain img{border:inherit;border-radius:inherit;height:unset!important;max-height:100%;max-width:100%;width:unset!important}.s__2Q3iK3.ofvh9i8--forceImageContain.ofvh9i8---resize-7-contain.ofvh9i8--verticalContainer img{width:min(var(--wut-source-width,100%),100%)!important}.s__2Q3iK3.ofvh9i8--forceImageContain.ofvh9i8---resize-7-contain.ofvh9i8--horizontalContainer img{height:min(var(--wut-source-height,100%),100%)!important}.s__2Q3iK3.ofvh9i8--noImage{background-color:rgb(var(--wix-color-5),.2)}.s__2Q3iK3 img{vertical-align:middle}.s__2Q3iK3.ofvh9i8--focalPoint img{object-position:var(--WowImage1821133350-focalPointX,0) var(--WowImage1821133350-focalPointY,0)}.s__2Q3iK3.ofvh9i8---resize-7-contain .s__5SKJ9H{object-fit:contain}.s__2Q3iK3.ofvh9i8---resize-5-cover .s__5SKJ9H{object-fit:cover}.s__2Q3iK3.ofvh9i8--fluid .s__5SKJ9H{height:100%;overflow:hidden;width:100%}.s__2Q3iK3:not(.ofvh9i8--stretchImage){align-items:center}.s__2Q3iK3.ofvh9i8--fluid:not(.ofvh9i8--stretchImage) .s__5SKJ9H,.s__2Q3iK3:not(.ofvh9i8--stretchImage) .s__5SKJ9H{height:min(var(--wut-source-height,100%),100%);margin:0 auto;width:min(var(--wut-source-width,100%),100%)}.s__2Q3iK3.ofvh9i8---hoverEffect-4-zoom{overflow:hidden}.s__2Q3iK3.ofvh9i8---hoverEffect-4-zoom .s__5SKJ9H{overflow:initial;transform:scale(calc(100/107)) translate(-3.5%,-3.5%);transition:all .5s cubic-bezier(.18,.73,.63,1)}.s__2Q3iK3.ofvh9i8---hoverEffect-4-zoom:hover .s__5SKJ9H{transform:scale(1) translate(-3.5%,-3.5%)}.s__2Q3iK3.ofvh9i8---hoverEffect-6-darken:hover .s__5SKJ9H{filter:brightness(85%) contrast(115%)}.s__2Q3iK3:not(.ofvh9i8--isError){background-color:rgb(var(--wix-ui-tpa-wow-image-background-color,var(--WowImage1821133350-transparent)));border:var(--wix-ui-tpa-wow-image-border-width,0) solid rgb(var(--wix-ui-tpa-wow-image-border-color,var(--WowImage1821133350-transparent)));border-radius:var(--wix-ui-tpa-wow-image-border-radius,0);overflow:hidden}.s__2Q3iK3:not(.ofvh9i8--isError).ofvh9i8--noImage{background-color:rgb(var(--wix-ui-tpa-wow-image-background-color,var(--wix-color-5),.2))}.s__2Q3iK3 .s__5SKJ9H{opacity:var(--wix-ui-tpa-wow-image-image-opacity,1)}.s__2Q3iK3.ofvh9i8--isError{background-color:rgb(var(--wix-color-2));position:relative}.s__2Q3iK3.ofvh9i8--isError img{display:none}.s__2Q3iK3 .sMOe22c{align-items:center;background:rgb(0,0,0,.6);display:flex;flex-direction:column;height:100%;justify-content:center;position:absolute;width:100%;z-index:1}.sY02ebc{--wix-ui-tpa-text-main-text-color:var(--wix-color-1),1;--wix-ui-tpa-text-main-text-color-rgb:var(--wix-color-1);--wix-ui-tpa-text-main-text-color-opacity:1;--wix-ui-tpa-text-main-text-font-text-decoration:var(--wix-ui-tpa-picker-font-style-text-decoration,var(--wix-font-Body-M-text-decoration));--wix-ui-tpa-text-main-text-font-line-height:var(--wix-ui-tpa-picker-font-style-line-height,1.5em);--wix-ui-tpa-text-main-text-font-family:var(--wix-ui-tpa-picker-font-style-family,var(--wix-font-Body-M-family));--wix-ui-tpa-text-main-text-font-size:var(--wix-ui-tpa-picker-font-style-size,14px);--wix-ui-tpa-text-main-text-font-style:var(--wix-ui-tpa-picker-font-style-style,var(--wix-font-Body-M-style));--wix-ui-tpa-text-main-text-font-variant:var(--wix-ui-tpa-picker-font-style-variant,var(--wix-font-Body-M-variant));--wix-ui-tpa-text-main-text-font-weight:var(--wix-ui-tpa-picker-font-style-weight,var(--wix-font-Body-M-weight))}.sVIeY60{clip:rect(1px,1px,1px,1px)!important;border:0!important;-webkit-clip-path:inset(50%)!important;clip-path:inset(50%)!important;height:1px!important;margin:-1px!important;overflow:hidden!important;padding:0!important;position:absolute!important;white-space:nowrap!important;width:1px!important}.sNhHPgD{color:rgb(var(--wix-color-1))}.s__3_4n6K{background-color:rgb(0,0,0,.6);display:none;height:100%;left:0;position:absolute;top:0;width:100%}.s__2Q3iK3.ofvh9i8--loadSpinner:not(.ofvh9i8--loaded) .s__3_4n6K{display:block}.soryhx4 .s__0IZGD6{stroke:#fff}.sR2mOpr{background-color:transparent;border:0;font-size:var(--wix-ui-tpa-text-button-main-text-font-size,16px);line-height:var(--wix-ui-tpa-text-button-main-text-font-line-height,1.5em);padding:0;text-decoration:none}.sR2mOpr,.sR2mOpr.o__9yQGZy--mobile{font-family:var(--wix-ui-tpa-text-button-main-text-font-family,var(--wix-font-Body-M-family));font-style:var(--wix-ui-tpa-text-button-main-text-font-style,var(--wix-font-Body-M-style));font-variant:var(--wix-ui-tpa-text-button-main-text-font-variant,var(--wix-font-Body-M-variant));font-weight:var(--wix-ui-tpa-text-button-main-text-font-weight,var(--wix-font-Body-M-weight));text-decoration:var(--wix-ui-tpa-text-button-main-text-font-text-decoration,var(--wix-font-Body-M-text-decoration))}.sR2mOpr.o__9yQGZy--mobile{font-size:var(--wix-ui-tpa-text-button-main-text-font-size,14px);line-height:var(--wix-ui-tpa-text-button-main-text-font-line-height,1.44em)}.sR2mOpr.o__9yQGZy---priority-7-primary{color:rgb(var(--wix-ui-tpa-text-button-main-text-color,var(--wix-color-8)))}.sR2mOpr.o__9yQGZy---priority-7-primary.onodcdP--focus,.sR2mOpr.o__9yQGZy---priority-7-primary:active,.sR2mOpr.o__9yQGZy---priority-7-primary:hover{color:rgb(var(--wix-ui-tpa-text-button-main-text-color-rgb,var(--wix-color-8)),calc(var(--wix-ui-tpa-text-button-main-text-color-opacity, 1)*.7))}.sR2mOpr.o__9yQGZy---priority-9-secondary{color:rgb(var(--wix-ui-tpa-text-button-main-text-color,var(--wix-color-5)))}.sR2mOpr.o__9yQGZy---priority-9-secondary.onodcdP--focus,.sR2mOpr.o__9yQGZy---priority-9-secondary:active,.sR2mOpr.o__9yQGZy---priority-9-secondary:hover{color:rgb(var(--wix-ui-tpa-text-button-main-text-color-rgb,var(--wix-color-5)),calc(var(--wix-ui-tpa-text-button-main-text-color-opacity, 1)*.7))}.sR2mOpr.o__9yQGZy---priority-4-link{color:rgb(var(--wix-ui-tpa-text-button-main-text-color,var(--wix-color-5)));text-decoration:underline}.sR2mOpr.o__9yQGZy---priority-4-link.onodcdP--focus,.sR2mOpr.o__9yQGZy---priority-4-link:active,.sR2mOpr.o__9yQGZy---priority-4-link:hover{color:rgb(var(--wix-ui-tpa-text-button-main-text-color-rgb,var(--wix-color-5)),calc(var(--wix-ui-tpa-text-button-main-text-color-opacity, 1)*.7))}.sR2mOpr.o__9yQGZy---priority-4-link.oVxUPr7--disabled,.sR2mOpr.o__9yQGZy---priority-7-primary.oVxUPr7--disabled,.sR2mOpr.o__9yQGZy---priority-9-secondary.oVxUPr7--disabled{color:rgb(var(--wix-color-3))}.skW7NNK svg{height:1.5em;margin:calc(-1*(1.5em/4)) 0;width:1.5em}.skW7NNK svg:not([fill=currentColor]) path{stroke:currentColor;fill:none}.sBeFvEj:before,.s_DdBRK:after{content:"";display:inline-block;height:1px;width:4px}.s__2Ub3w5{display:inline-flex;flex-direction:row}.s__2Ub3w5.odQThDl---size-5-large .sasnKd5,.s__2Ub3w5.odQThDl---size-6-xLarge .sasnKd5{padding-left:14px}.s__2Ub3w5.odQThDl---size-6-medium .sasnKd5{padding-left:12px}.s__2Ub3w5.odQThDl---size-5-small .sasnKd5{padding-left:10px}.s__2Ub3w5.odQThDl---size-6-xSmall .sasnKd5{padding-left:6px}.s__2Ub3w5.odQThDl---size-7-xxSmall .sasnKd5{padding-left:4px}.s__2Ub3w5.odQThDl---size-5-large .sx38xyu,.s__2Ub3w5.odQThDl---size-6-xLarge .sx38xyu{margin-left:-14px}.s__2Ub3w5.odQThDl---size-6-medium .sx38xyu{margin-left:-12px}.s__2Ub3w5.odQThDl---size-5-small .sx38xyu{margin-left:-10px}.s__2Ub3w5.odQThDl---size-6-xSmall .sx38xyu{margin-left:-6px}.s__2Ub3w5.odQThDl---size-7-xxSmall .sx38xyu{margin-left:-4px}.s__2Ub3w5 .socOxOb{border:1px solid;border-color:rgb(var(--wix-ui-tpa-avatar-group-avatar-border-color,var(--wix-color-1)))}.s__2Ub3w5.odQThDl---size-5-large .socOxOb,.s__2Ub3w5.odQThDl---size-5-small .socOxOb,.s__2Ub3w5.odQThDl---size-6-medium .socOxOb,.s__2Ub3w5.odQThDl---size-6-xLarge .socOxOb{border-width:2px}.sdqm4ud{align-items:center;display:flex}.odQThDl---size-5-large .sdqm4ud:before,.odQThDl---size-5-small .sdqm4ud:before,.odQThDl---size-6-medium .sdqm4ud:before,.odQThDl---size-6-xLarge .sdqm4ud:before{content:"\A0";width:12px}.odQThDl---size-6-xSmall .sdqm4ud:before{content:"\A0";width:10px}.odQThDl---size-7-xxSmall .sdqm4ud:before{content:"\A0";width:8px}.s__2Ub3w5.odQThDl---size-5-large .sc6KPy1,.s__2Ub3w5.odQThDl---size-5-small .sc6KPy1,.s__2Ub3w5.odQThDl---size-6-medium .sc6KPy1{--wix-ui-tpa-text-button-main-text-color:var(--wix-ui-tpa-avatar-group-text-button-color,var(--wix-color-5));--wix-ui-tpa-text-button-main-text-color-rgb:var(--wix-ui-tpa-avatar-group-text-button-color-rgb,var(--wix-color-5));--wix-ui-tpa-text-button-main-text-color-opacity:var(--wix-ui-tpa-avatar-group-text-button-color-opacity);--wix-ui-tpa-text-button-main-text-font-text-decoration:var(--wix-ui-tpa-avatar-group-text-button-font-text-decoration);--wix-ui-tpa-text-button-main-text-font-line-height:var(--wix-ui-tpa-avatar-group-text-button-font-line-height);--wix-ui-tpa-text-button-main-text-font-family:var(--wix-ui-tpa-avatar-group-text-button-font-family);--wix-ui-tpa-text-button-main-text-font-size:var(--wix-ui-tpa-avatar-group-text-button-font-size);--wix-ui-tpa-text-button-main-text-font-style:var(--wix-ui-tpa-avatar-group-text-button-font-style);--wix-ui-tpa-text-button-main-text-font-variant:var(--wix-ui-tpa-avatar-group-text-button-font-variant);--wix-ui-tpa-text-button-main-text-font-weight:var(--wix-ui-tpa-avatar-group-text-button-font-weight)}.s__2Ub3w5.odQThDl---size-6-xSmall .sc6KPy1,.s__2Ub3w5.odQThDl---size-7-xxSmall .sc6KPy1{--wix-ui-tpa-text-button-main-text-color:var(--wix-ui-tpa-avatar-group-text-button-color,var(--wix-color-5));--wix-ui-tpa-text-button-main-text-color-rgb:var(--wix-ui-tpa-avatar-group-text-button-color-rgb,var(--wix-color-5));--wix-ui-tpa-text-button-main-text-color-opacity:var(--wix-ui-tpa-avatar-group-text-button-color-opacity);--wix-ui-tpa-text-button-main-text-font-text-decoration:var(--wix-ui-tpa-avatar-group-text-button-font-text-decoration,var(--wix-font-Body-M-text-decoration));--wix-ui-tpa-text-button-main-text-font-line-height:var(--wix-ui-tpa-avatar-group-text-button-font-line-height,1.44em);--wix-ui-tpa-text-button-main-text-font-family:var(--wix-ui-tpa-avatar-group-text-button-font-family,var(--wix-font-Body-M-family));--wix-ui-tpa-text-button-main-text-font-size:var(--wix-ui-tpa-avatar-group-text-button-font-size,14px);--wix-ui-tpa-text-button-main-text-font-style:var(--wix-ui-tpa-avatar-group-text-button-font-style,var(--wix-font-Body-M-style));--wix-ui-tpa-text-button-main-text-font-variant:var(--wix-ui-tpa-avatar-group-text-button-font-variant,var(--wix-font-Body-M-variant));--wix-ui-tpa-text-button-main-text-font-weight:var(--wix-ui-tpa-avatar-group-text-button-font-weight,var(--wix-font-Body-M-weight))}.L5u5gG{display:block;height:100%;width:100%}.L5u5gG img{max-width:var(--wix-img-max-width,100%)}.L5u5gG[data-animate-blur] img{filter:blur(9px);transition:filter .8s ease-in}.L5u5gG[data-animate-blur] img[data-load-done]{filter:none}</style><style data-href="https://static.parastorage.com/services/events-viewer/1.3110.0/client-viewer/SingleEvent.chunk.min.css">.sFpJVMj{--wix-ui-tpa-wow-image-background-color:255,255,255,0;--wix-ui-tpa-wow-image-background-color-rgb:255,255,255;--wix-ui-tpa-wow-image-background-color-opacity:0;--wix-ui-tpa-wow-image-image-opacity:calc(var(--multiImageOpacity, var(--listImageOpacity)) * 1%)}.sKV14Kk{--wix-ui-tpa-wow-image-background-color:255,255,255,0;--wix-ui-tpa-wow-image-background-color-rgb:255,255,255;--wix-ui-tpa-wow-image-background-color-opacity:0;--wix-ui-tpa-wow-image-image-opacity:calc(var(--multiImageOpacity) * 1%)}.scW1S6m{--wix-ui-tpa-wow-image-background-color:255,255,255,0;--wix-ui-tpa-wow-image-background-color-rgb:255,255,255;--wix-ui-tpa-wow-image-background-color-opacity:0;--wix-ui-tpa-wow-image-image-opacity:calc(var(--imageOpacity) * 1%)}.sdphgnc{display:inline-block}.sJnAwq6{cursor:pointer}.evStylesPresetV2 .s_k8Bou,.evStylesPresetV2 .slxYmAh{--wix-ui-tpa-avatar-group-avatar-border-color:255,255,255,1;--wix-ui-tpa-avatar-group-avatar-border-color-rgb:255,255,255;--wix-ui-tpa-avatar-group-avatar-border-color-opacity:1;--wix-ui-tpa-avatar-group-text-button-color:var(--linkColorV2);--wix-ui-tpa-avatar-group-text-button-color-rgb:var(--linkColorV2-rgb);--wix-ui-tpa-avatar-group-text-button-color-opacity:var(--linkColorV2-opacity);--wix-ui-tpa-avatar-group-text-button-font-text-decoration:var(--linkFontV2-text-decoration);--wix-ui-tpa-avatar-group-text-button-font-line-height:var(--linkFontV2-line-height);--wix-ui-tpa-avatar-group-text-button-font-family:var(--linkFontV2-family);--wix-ui-tpa-avatar-group-text-button-font-size:var(--linkFontV2-size);--wix-ui-tpa-avatar-group-text-button-font-style:var(--linkFontV2-style);--wix-ui-tpa-avatar-group-text-button-font-variant:var(--linkFontV2-variant);--wix-ui-tpa-avatar-group-text-button-font-weight:var(--linkFontV2-weight)}.evClassicPreset .s_k8Bou{--wix-ui-tpa-avatar-group-avatar-border-color:255,255,255,1;--wix-ui-tpa-avatar-group-avatar-border-color-rgb:255,255,255;--wix-ui-tpa-avatar-group-avatar-border-color-opacity:1;--wix-ui-tpa-avatar-group-text-button-color:var(--listContentTextColor);--wix-ui-tpa-avatar-group-text-button-color-rgb:var(--listContentTextColor-rgb);--wix-ui-tpa-avatar-group-text-button-color-opacity:var(--listContentTextColor-opacity);--wix-ui-tpa-avatar-group-text-button-font-text-decoration:var(--listContentTextFont-text-decoration);--wix-ui-tpa-avatar-group-text-button-font-line-height:var(--listContentTextFont-line-height);--wix-ui-tpa-avatar-group-text-button-font-family:var(--listContentTextFont-family);--wix-ui-tpa-avatar-group-text-button-font-size:var(--listContentTextFont-size);--wix-ui-tpa-avatar-group-text-button-font-style:var(--listContentTextFont-style);--wix-ui-tpa-avatar-group-text-button-font-variant:var(--listContentTextFont-variant);--wix-ui-tpa-avatar-group-text-button-font-weight:var(--listContentTextFont-weight)}.evClassicPreset .slxYmAh{--wix-ui-tpa-avatar-group-avatar-border-color:255,255,255,1;--wix-ui-tpa-avatar-group-avatar-border-color-rgb:255,255,255;--wix-ui-tpa-avatar-group-avatar-border-color-opacity:1;--wix-ui-tpa-avatar-group-text-button-color:var(--listHeaderTitleColor);--wix-ui-tpa-avatar-group-text-button-color-rgb:var(--listHeaderTitleColor-rgb);--wix-ui-tpa-avatar-group-text-button-color-opacity:var(--listHeaderTitleColor-opacity);--wix-ui-tpa-avatar-group-text-button-font-text-decoration:var(--listHeaderLocationFont-text-decoration);--wix-ui-tpa-avatar-group-text-button-font-line-height:var(--listHeaderLocationFont-line-height);--wix-ui-tpa-avatar-group-text-button-font-family:var(--listHeaderLocationFont-family);--wix-ui-tpa-avatar-group-text-button-font-size:var(--listHeaderLocationFont-size);--wix-ui-tpa-avatar-group-text-button-font-style:var(--listHeaderLocationFont-style);--wix-ui-tpa-avatar-group-text-button-font-variant:var(--listHeaderLocationFont-variant);--wix-ui-tpa-avatar-group-text-button-font-weight:var(--listHeaderLocationFont-weight)}.smKzSt2{--wix-ui-tpa-avatar-group-avatar-border-color:255,255,255,1;--wix-ui-tpa-avatar-group-avatar-border-color-rgb:255,255,255;--wix-ui-tpa-avatar-group-avatar-border-color-opacity:1;--wix-ui-tpa-avatar-group-text-button-color:var(--textsColor);--wix-ui-tpa-avatar-group-text-button-color-rgb:var(--textsColor-rgb);--wix-ui-tpa-avatar-group-text-button-color-opacity:var(--textsColor-opacity);--wix-ui-tpa-avatar-group-text-button-font-text-decoration:var(--compactTextsFont-text-decoration);--wix-ui-tpa-avatar-group-text-button-font-line-height:var(--compactTextsFont-line-height);--wix-ui-tpa-avatar-group-text-button-font-family:var(--compactTextsFont-family);--wix-ui-tpa-avatar-group-text-button-font-size:var(--compactTextsFont-size);--wix-ui-tpa-avatar-group-text-button-font-style:var(--compactTextsFont-style);--wix-ui-tpa-avatar-group-text-button-font-variant:var(--compactTextsFont-variant);--wix-ui-tpa-avatar-group-text-button-font-weight:var(--compactTextsFont-weight)}.slcQHRg{--wix-ui-tpa-avatar-group-avatar-border-color:255,255,255,1;--wix-ui-tpa-avatar-group-avatar-border-color-rgb:255,255,255;--wix-ui-tpa-avatar-group-avatar-border-color-opacity:1;--wix-ui-tpa-avatar-group-text-button-color:var(--calendarCellEventNameColor);--wix-ui-tpa-avatar-group-text-button-color-rgb:var(--calendarCellEventNameColor-rgb);--wix-ui-tpa-avatar-group-text-button-color-opacity:var(--calendarCellEventNameColor-opacity);--wix-ui-tpa-avatar-group-text-button-font-text-decoration:var(--calendarCellEventNameFont-text-decoration);--wix-ui-tpa-avatar-group-text-button-font-line-height:var(--calendarCellEventNameFont-line-height);--wix-ui-tpa-avatar-group-text-button-font-family:var(--calendarCellEventNameFont-family);--wix-ui-tpa-avatar-group-text-button-font-size:var(--calendarCellEventNameFont-size);--wix-ui-tpa-avatar-group-text-button-font-style:var(--calendarCellEventNameFont-style);--wix-ui-tpa-avatar-group-text-button-font-variant:var(--calendarCellEventNameFont-variant);--wix-ui-tpa-avatar-group-text-button-font-weight:var(--calendarCellEventNameFont-weight)}.sRCouJq{--wix-ui-tpa-avatar-group-avatar-border-color:255,255,255,1;--wix-ui-tpa-avatar-group-avatar-border-color-rgb:255,255,255;--wix-ui-tpa-avatar-group-avatar-border-color-opacity:1;--wix-ui-tpa-avatar-group-text-button-color:var(--onImageTextsColor);--wix-ui-tpa-avatar-group-text-button-color-rgb:var(--onImageTextsColor-rgb);--wix-ui-tpa-avatar-group-text-button-color-opacity:var(--onImageTextsColor-opacity);--wix-ui-tpa-avatar-group-text-button-font-text-decoration:var(--compactTextsFont-text-decoration);--wix-ui-tpa-avatar-group-text-button-font-line-height:var(--compactTextsFont-line-height);--wix-ui-tpa-avatar-group-text-button-font-family:var(--compactTextsFont-family);--wix-ui-tpa-avatar-group-text-button-font-size:var(--compactTextsFont-size);--wix-ui-tpa-avatar-group-text-button-font-style:var(--compactTextsFont-style);--wix-ui-tpa-avatar-group-text-button-font-variant:var(--compactTextsFont-variant);--wix-ui-tpa-avatar-group-text-button-font-weight:var(--compactTextsFont-weight)}.evClassicPreset .sntR6_E{font-size:14px!important}.Ce1nzG{align-items:center;display:inline-flex;font:var(--wix-font-Body-M);font-size:14px;height:24px;max-width:100%;overflow:hidden;padding:0 16px;-webkit-text-decoration:var(--wix-font-Body-M-text-decoration);text-decoration:var(--wix-font-Body-M-text-decoration);white-space:nowrap}.CaN4vz{background:rgb(var(--soldOutRibbonBackgroundColor));color:rgb(var(--soldOutRibbonTextColor));font:var(--soldOutRibbonFont);-webkit-text-decoration:var(--soldOutRibbonFont-text-decoration);text-decoration:var(--soldOutRibbonFont-text-decoration)}.QBNkB1{background:rgb(var(--rsvpClosedRibbonBackgroundColor));color:rgb(var(--rsvpClosedRibbonTextColor));font:var(--rsvpClosedRibbonFont);-webkit-text-decoration:var(--rsvpClosedRibbonFont-text-decoration);text-decoration:var(--rsvpClosedRibbonFont-text-decoration)}.mILZ4x{background:rgb(var(--joinWaitlistRibbonBackgroundColor));color:rgb(var(--joinWaitlistRibbonTextColor));font:var(--joinWaitlistRibbonFont);-webkit-text-decoration:var(--joinWaitlistRibbonFont-text-decoration);text-decoration:var(--joinWaitlistRibbonFont-text-decoration)}.yc9I6P{border:1px solid rgb(var(--membershipRibbonBorderColor));color:rgb(var(--membershipRibbonTextColor));font:var(--membershipRibbonFont);-webkit-text-decoration:var(--membershipRibbonFont-text-decoration);text-decoration:var(--membershipRibbonFont-text-decoration)}.y5d1PN,.yc9I6P{background:transparent}.y5d1PN{border:1px solid rgb(var(--recurringRibbonBorderColor));color:rgb(var(--recurringRibbonTextColor));font:var(--recurringRibbonFont);-webkit-text-decoration:var(--recurringRibbonFont-text-decoration);text-decoration:var(--recurringRibbonFont-text-decoration)}.B4WYyN{border:1px solid rgb(var(--membershipRibbonBorderColor));color:rgb(var(--membershipRibbonTextColor));font:var(--membershipRibbonFont);-webkit-text-decoration:var(--membershipRibbonFont-text-decoration);text-decoration:var(--membershipRibbonFont-text-decoration)}.B4WYyN,.OSNkXE{background:transparent}.OSNkXE{border:1px solid rgb(var(--recurringRibbonBorderColor));color:rgb(var(--recurringRibbonTextColor));font:var(--recurringRibbonFont);-webkit-text-decoration:var(--recurringRibbonFont-text-decoration);text-decoration:var(--recurringRibbonFont-text-decoration)}.x73ahn{overflow:hidden;text-overflow:ellipsis}.UOHdIx{align-items:center;display:flex}.bu16Av{margin-bottom:calc(0px + -.25em);margin-top:calc(0px + -.25em)}.AinsX6,.bu16Av{line-height:1.5!important}._8yxZW9{white-space:pre-wrap}.LjZg6p{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.jHIfl5,.sXIz18{align-items:center;display:flex}.TGstrW{border-inline-end:1px solid;flex-shrink:0;height:.8em}.sXIz18{white-space:nowrap}.sXIz18 .pMI2qb,.sXIz18 .xixIN8{overflow:hidden;text-overflow:ellipsis}.sXIz18 .pMI2qb{flex-shrink:0;max-width:80%}.sXIz18 .TGstrW{margin:0 10px}.jHIfl5{flex-wrap:wrap}.jHIfl5 .yheNnz{align-items:center;display:flex}.jHIfl5 .xixIN8{word-break:break-word}.jHIfl5 .TGstrW{margin:0 12px}.FA264N{color:rgb(var(--textsColor))}.FA264N,.z2yURz{font:var(--compactTextsFont);-webkit-text-decoration:var(--compactTextsFont-text-decoration);text-decoration:var(--compactTextsFont-text-decoration)}.z2yURz{color:rgb(var(--onImageTextsColor))}.KbGbQs,.eventsRtl .MYiaAc{justify-content:flex-start}.VAfwU8{justify-content:center}.MYiaAc,.eventsRtl .KbGbQs{justify-content:flex-end}.WQ6Du6 .TGstrW,.WQ6Du6 .pMI2qb{display:none}.WQ6Du6 .xixIN8{max-width:100%}.RxeCbi .TGstrW,.RxeCbi .xixIN8{display:none}.RxeCbi .pMI2qb{max-width:100%}.tu5Atz{font-size:18px!important}.kKuXKf{margin-bottom:12px}.RaIPqr,.kKuXKf{letter-spacing:1px}.RaIPqr{margin-inline-end:24px}.LE4lF8{font-size:16px;white-space:nowrap}.DdDzW9{color:inherit;cursor:pointer;display:inline-block}.iguBq3{align-items:center;display:flex}.IuNIzI{color:rgb(var(--shareIconsColorV2))}.n5TTun{font-size:18px!important}.W2ZNnD{color:rgb(var(--countdownColor));font:var(--countdownFont);-webkit-text-decoration:var(--countdownFont-text-decoration);text-decoration:var(--countdownFont-text-decoration)}.kVDYpL{color:rgb(var(--onImageCountdownColor))}.DZBm0d{margin:0 auto 0 0}.DCTXbr{margin:0 auto}.hQAwYk{margin:0 0 0 auto}.Gangn7{background-color:rgb(var(--onImageDividerColor))}.njGJnp{background-color:rgb(var(--dividerColor))}.aYgk9v{align-self:center;display:flex;justify-content:center;margin:0 70px;width:10px}._ZEaNS{display:block;margin-bottom:36px;margin-top:36px}.qBCPEN{margin:12px 0}.yiOH0x{display:inline-block;max-width:100%}.CEmW4c{color:rgb(var(--labelsColor));font:var(--labelsFont);-webkit-text-decoration:var(--labelsFont-text-decoration);text-decoration:var(--labelsFont-text-decoration)}.Qkp9SJ{color:rgb(var(--textsColor));font:var(--textsFont);-webkit-text-decoration:var(--textsFont-text-decoration);text-decoration:var(--textsFont-text-decoration)}.aBMIsr{color:rgb(var(--onImageLabelsColor))}._aZdmE{color:rgb(var(--onImageTextsColor))}.MTGpiK .CEmW4c{line-height:1.5!important;margin-bottom:calc(24px + -.25em);margin-top:calc(0px + -.25em)}.WjL3Rv{display:flex}.WjL3Rv .CEmW4c{line-height:1.5!important;margin-bottom:calc(46px + -.25em);margin-top:calc(0px + -.25em)}.WjL3Rv .yiOH0x{display:block}.wE4qwT.gyKVk7 .CEmW4c{font-size:20px!important}.wE4qwT.gyKVk7 .yiOH0x{font-size:16px!important}.wE4qwT.WjL3Rv .CEmW4c{line-height:1.5!important;margin-bottom:calc(24px + -.25em);margin-top:calc(0px + -.25em)}@media(min-width:501px){.WjL3Rv.kTgOYg,.eventsRtl .WjL3Rv.UaQiqY{justify-content:flex-start}.WjL3Rv.PB_sYE{justify-content:center}.WjL3Rv.PB_sYE .j3AQS4,.WjL3Rv.PB_sYE .qj3g_a{flex-basis:50%;flex-grow:1}.WjL3Rv.UaQiqY,.eventsRtl .WjL3Rv.kTgOYg{justify-content:flex-end}.WjL3Rv.UaQiqY:not(.TM5zWC):not(.KFhXYl) .j3AQS4,.WjL3Rv.UaQiqY:not(.TM5zWC):not(.KFhXYl) .qj3g_a,.WjL3Rv.kTgOYg:not(.TM5zWC):not(.KFhXYl) .j3AQS4,.WjL3Rv.kTgOYg:not(.TM5zWC):not(.KFhXYl) .qj3g_a{max-width:calc(50% - 70px - 10px/2)}.WjL3Rv.bcdqU4:not(.KFhXYl) .qj3g_a{margin-inline-end:150px}._ZEaNS{display:none}}@media(max-width:500px){.WjL3Rv{flex-direction:column}.WjL3Rv.bcdqU4:not(.KFhXYl) .qj3g_a{margin-bottom:72px!important}.aYgk9v{display:none}}.KubSJS{font-size:16px!important}.QwxLu3{color:rgb(var(--descriptionColor));font:var(--descriptionFont);-webkit-text-decoration:var(--descriptionFont-text-decoration);text-decoration:var(--descriptionFont-text-decoration)}.wdExWB{color:rgb(var(--onImageDescriptionColor))}.sNp9JN{height:100%;overflow:hidden;position:absolute;top:0;width:100%}.nI6aye{background-color:rgb(var(--multiImageBackgroundColor,var(--listImageBackgroundColor)))}.IH1M3w{background-color:rgb(var(--multiImageBackgroundColor,var(--wix-color-8)))}.Frxj4Q{background-color:rgb(var(--imageBackgroundColor))}.bkBcmF{display:var(--singleContainImageVisibility)!important}.WHyOMh{display:var(--singleCoverImageVisibility)!important}.PSH0XH{display:var(--multiContainImageVisibility)!important}.p7b1HW{display:var(--multiCoverImageVisibility)!important}.P7eGiM,.PN7j9D{background-clip:content-box;border:inherit;border-color:transparent;inset-inline-end:0;position:absolute;top:0}.P7eGiM{background-color:rgb(var(--imageBackgroundColor));height:100%;width:100%}.OOq_F5{flex-grow:1}.YWAUac{margin-bottom:24px}:where(.DjQEyU){color:inherit;text-decoration:inherit}.xAH0mk{display:inline-block}._MlcyF{width:100%}.NBw1Kz{color:rgb(var(--labelsColor));line-height:1.5!important;font:var(--labelsFont);margin-bottom:calc(24px + -.25em);margin-top:calc(0px + -.25em);-webkit-text-decoration:var(--labelsFont-text-decoration);text-decoration:var(--labelsFont-text-decoration)}.P4qjxu{color:rgb(var(--onImageLabelsColor))}.BoD93f{background-color:rgb(var(--singleButtonBackgroundColor));border-color:rgb(var(--singleButtonBorderColor));border-radius:calc(var(--singleButtonBorderRadius)*1px);border-style:solid;border-width:calc(var(--singleButtonBorderWidth)*1px);color:rgb(var(--singleButtonColor));cursor:pointer;font:var(--singleButtonFont);overflow:visible;padding:10px 30px;position:relative;-webkit-text-decoration:var(--singleButtonFont-text-decoration);text-decoration:var(--singleButtonFont-text-decoration);white-space:nowrap}.BoD93f.CKLKOJ{background-color:rgb(var(--singleOnImageButtonBackgroundColor));border-color:rgb(var(--singleOnImageButtonBorderColor));color:rgb(var(--singleOnImageButtonColor))}.BoD93f:hover{opacity:.7}.zLSZXO{align-items:center;display:inline-flex;justify-content:center;margin:auto}.QQZ4S5{visibility:hidden}.bEXKbn.DwnNru .NBw1Kz{font-size:20px!important}.bEXKbn.DwnNru .BoD93f{font-size:14px!important}.bEXKbn .BoD93f{max-width:260px;min-height:44px;min-width:60px;padding:0 30px;text-overflow:ellipsis}.IOLuL5{word-wrap:break-word;border-style:solid;display:flex;height:100%}.C7DkT1{display:flex;flex-direction:column;padding:0 42px;position:relative}.KvGTRc{width:100%}.Cn5PoW{margin-bottom:40px}.pe2Vf2{text-align:center}.jtzhoi{text-align:left}.HVPDhL{text-align:right}.PeGSNm{justify-content:center}.QbRhOm{justify-content:flex-start;padding-top:54px}.VxPqyJ{justify-content:flex-end;padding-bottom:54px}.GgNVPA{background-color:rgb(var(--backgroundColor));border-color:rgb(var(--borderColor));border-width:calc(var(--borderWidth)*1px)}.jn_rBu{background-color:transparent;border-width:0}.jn_rBu .C7DkT1{align-items:center;justify-content:center;padding:0!important;text-align:center}.sDsJJj{background-color:transparent}.vuIcQd .C7DkT1{flex-grow:0;padding:42px 10px}.kaDLYn path{fill:rgb(var(--textsColor))}.O6BMPb path{fill:rgb(var(--onImageTextsColor))}.VkuaAp{margin:0 auto 20px;max-width:240px}.jtzhoi .VkuaAp{margin:0 auto 20px 0}.HVPDhL .VkuaAp{margin:0 0 20px auto}.iFiqaE{font-size:34px!important}.EdMH8t{color:rgb(var(--titleColor));font:var(--titleFont);-webkit-text-decoration:var(--titleFont-text-decoration);text-decoration:var(--titleFont-text-decoration)}.kFjtai{color:rgb(var(--onImageTitleColor))}</style><script id="comp-jnmw58uo__LOADABLE_REQUIRED_CHUNKS__" type="application/json">[1679,5431,1721]</script><script id="comp-jnmw58uo__LOADABLE_REQUIRED_CHUNKS___ext" type="application/json">{"namedChunks":["SingleEvent"]}</script><script async="" data-chunk="SingleEvent" src="https://static.parastorage.com/services/events-viewer/1.3110.0/client-viewer/1679.chunk.min.js"></script><script async="" data-chunk="SingleEvent" src="https://static.parastorage.com/services/events-viewer/1.3110.0/client-viewer/5431.chunk.min.js"></script><script async="" data-chunk="SingleEvent" src="https://static.parastorage.com/services/events-viewer/1.3110.0/client-viewer/SingleEvent.chunk.min.js"></script>
<style id="css_masterPage">
	

@font-face {font-family: 'playfair display'; font-style: italic; font-weight: 700; src: url('//static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/playfairdisplay/v18/nuFnD-vYSZviVYUb_rj3ij__anPXDTngOWwu6zRmFqWF_ljR.woff2') format('woff2'); unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;font-display: swap;
}
@font-face {font-family: 'playfair display'; font-style: italic; font-weight: 400; src: url('//static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/playfairdisplay/v18/nuFkD-vYSZviVYUb_rj3ij__anPXDTnojUk7yRZrPJ-M.woff2') format('woff2'); unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;font-display: swap;
}
@font-face {font-family: 'playfair display'; font-style: normal; font-weight: 400; src: url('//static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/playfairdisplay/v18/nuFiD-vYSZviVYUb_rj3ij__anPXDTPYgEM86xRbPQ.woff2') format('woff2'); unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;font-display: swap;
}
@font-face {font-family: 'playfair display'; font-style: normal; font-weight: 700; src: url('//static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/playfairdisplay/v18/nuFlD-vYSZviVYUb_rj3ij__anPXBYf9lWEe5j5hNKe1_w.woff2') format('woff2'); unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;font-display: swap;
}
@font-face {font-family: 'playfair display'; font-style: italic; font-weight: 700; src: url('//static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/playfairdisplay/v18/nuFnD-vYSZviVYUb_rj3ij__anPXDTngOWwu4DRmFqWF_ljR.woff2') format('woff2'); unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;font-display: swap;
}
@font-face {font-family: 'playfair display'; font-style: italic; font-weight: 400; src: url('//static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/playfairdisplay/v18/nuFkD-vYSZviVYUb_rj3ij__anPXDTnohkk7yRZrPJ-M.woff2') format('woff2'); unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;font-display: swap;
}
@font-face {font-family: 'playfair display'; font-style: normal; font-weight: 400; src: url('//static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/playfairdisplay/v18/nuFiD-vYSZviVYUb_rj3ij__anPXDTjYgEM86xRbPQ.woff2') format('woff2'); unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;font-display: swap;
}
@font-face {font-family: 'playfair display'; font-style: normal; font-weight: 700; src: url('//static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/playfairdisplay/v18/nuFlD-vYSZviVYUb_rj3ij__anPXBYf9lWoe5j5hNKe1_w.woff2') format('woff2'); unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;font-display: swap;
}
@font-face {font-family: 'playfair display'; font-style: italic; font-weight: 700; src: url('//static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/playfairdisplay/v18/nuFnD-vYSZviVYUb_rj3ij__anPXDTngOWwu6jRmFqWF_ljR.woff2') format('woff2'); unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;font-display: swap;
}
@font-face {font-family: 'playfair display'; font-style: italic; font-weight: 400; src: url('//static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/playfairdisplay/v18/nuFkD-vYSZviVYUb_rj3ij__anPXDTnojEk7yRZrPJ-M.woff2') format('woff2'); unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;font-display: swap;
}
@font-face {font-family: 'playfair display'; font-style: normal; font-weight: 400; src: url('//static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/playfairdisplay/v18/nuFiD-vYSZviVYUb_rj3ij__anPXDTLYgEM86xRbPQ.woff2') format('woff2'); unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;font-display: swap;
}
@font-face {font-family: 'playfair display'; font-style: normal; font-weight: 700; src: url('//static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/playfairdisplay/v18/nuFlD-vYSZviVYUb_rj3ij__anPXBYf9lWAe5j5hNKe1_w.woff2') format('woff2'); unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;font-display: swap;
}
@font-face {font-family: 'playfair display'; font-style: italic; font-weight: 700; src: url('//static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/playfairdisplay/v18/nuFnD-vYSZviVYUb_rj3ij__anPXDTngOWwu5DRmFqWF_g.woff2') format('woff2'); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;font-display: swap;
}
@font-face {font-family: 'playfair display'; font-style: italic; font-weight: 400; src: url('//static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/playfairdisplay/v18/nuFkD-vYSZviVYUb_rj3ij__anPXDTnogkk7yRZrPA.woff2') format('woff2'); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;font-display: swap;
}
@font-face {font-family: 'playfair display'; font-style: normal; font-weight: 400; src: url('//static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/playfairdisplay/v18/nuFiD-vYSZviVYUb_rj3ij__anPXDTzYgEM86xQ.woff2') format('woff2'); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;font-display: swap;
}
@font-face {font-family: 'playfair display'; font-style: normal; font-weight: 700; src: url('//static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/playfairdisplay/v18/nuFlD-vYSZviVYUb_rj3ij__anPXBYf9lW4e5j5hNKc.woff2') format('woff2'); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;font-display: swap;
}@font-face {font-family: 'din-next-w01-light'; font-style: normal; font-weight: 400; src: url('//static.parastorage.com/fonts/v2/eca8b0cd-45d8-43cf-aee7-ca462bc5497c/v1/din-next-w10-light.woff2') format('woff2'); unicode-range: U+0401-040C, U+040E-044F, U+0451-045C, U+045E-045F, U+0490-0491, U+2116;font-display: swap;
}
@font-face {font-family: 'din-next-w01-light'; font-style: normal; font-weight: 400; src: url('//static.parastorage.com/fonts/v2/eca8b0cd-45d8-43cf-aee7-ca462bc5497c/v1/din-next-w02-light.woff2') format('woff2'); unicode-range: U+000D, U+0100-010F, U+0111-0130, U+0132-0151, U+0154-015F, U+0162-0177, U+0179-017C, U+01FA-01FF, U+0218-021B, U+0237, U+02C9, U+02D8-02D9, U+02DB, U+02DD, U+0394, U+03A9, U+03C0, U+1E80-1E85, U+1EF2-1EF3, U+2070, U+2074-2079, U+2080-2089, U+2113, U+2126, U+212E, U+2153-2154, U+215B-215E, U+2202, U+2206, U+220F, U+2211-2212, U+2215, U+2219-221A, U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+F8FF, U+FB00-FB04;font-display: swap;
}
@font-face {font-family: 'din-next-w01-light'; font-style: normal; font-weight: 400; src: url('//static.parastorage.com/fonts/v2/eca8b0cd-45d8-43cf-aee7-ca462bc5497c/v1/din-next-w01-light.woff2') format('woff2'); unicode-range: U+0020-007E, U+00A0-00FF, U+0110, U+0131, U+0152-0153, U+0160-0161, U+0178, U+017D-017E, U+0192, U+02C6-02C7, U+02DA, U+02DC, U+03BC, U+2013-2014, U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+20AC, U+2122;font-display: swap;
}@font-face {font-family: 'avenir-lt-w01_35-light1475496'; font-style: normal; font-weight: 400; src: url('//static.parastorage.com/fonts/v2/af36905f-3c92-4ef9-b0c1-f91432f16ac1/v1/avenir-lt-w05_35-light.woff2') format('woff2'); unicode-range: U+0100-012B, U+012E-0130, U+0132-0137, U+0139-0149, U+014C-0151, U+0154-015F, U+0162-0177, U+0179-017C, U+0218-021B, U+02C9, U+02D8-02D9, U+02DB, U+02DD, U+0394, U+03A9, U+03BC, U+03C0, U+1E9E, U+20B9-20BA, U+20BC-20BD, U+2113, U+2126, U+212E, U+2202, U+2206, U+220F, U+2211-2212, U+2215, U+2219-221A, U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+F8FF, U+FB01-FB02;font-display: swap;
}
@font-face {font-family: 'avenir-lt-w01_35-light1475496'; font-style: normal; font-weight: 400; src: url('//static.parastorage.com/fonts/v2/af36905f-3c92-4ef9-b0c1-f91432f16ac1/v1/avenir-lt-w01_35-light1475496.woff2') format('woff2'); unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00FF, U+0131, U+0152-0153, U+0160-0161, U+0178, U+017D-017E, U+0192, U+0237, U+02C6-02C7, U+02DA, U+02DC, U+2013-2014, U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+20AC, U+2122;font-display: swap;
}@font-face {font-family: 'proxima-n-w01-reg'; font-style: normal; font-weight: 400; src: url('//static.parastorage.com/fonts/v2/c24fcada-6239-48bc-8b88-9288338191c9/v1/proxima-n-w05-reg.woff2') format('woff2'); unicode-range: U+0000, U+0100-010F, U+0111-0130, U+0132-0151, U+0154-015F, U+0162-0177, U+0179-017C, U+017F, U+018F, U+019D, U+01A0-01A1, U+01AF-01B0, U+01E6-01E7, U+01EA-01EB, U+01FA-01FF, U+0218-021B, U+0232-0233, U+0237, U+0259, U+0272, U+02B0, U+02BB-02BC, U+02C9, U+02CB, U+02D8-02D9, U+02DB, U+02DD, U+0374-0375, U+037E, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03CE, U+03D7, U+0400-045F, U+0472-0475, U+048A-04FF, U+0510-0513, U+051C-051D, U+0524-0527, U+052E-052F, U+1E02-1E03, U+1E0A-1E0B, U+1E1E-1E1F, U+1E22-1E23, U+1E56-1E57, U+1E60-1E61, U+1E6A-1E6B, U+1E80-1E85, U+1E9E, U+1EA0-1EF9, U+2000-200A, U+2015, U+201B, U+2032-2033, U+203D-203E, U+2070, U+2074-2079, U+207D-2089, U+208D-208E, U+20A1, U+20A3-20A4, U+20A6-20AB, U+20B4, U+20B8-20BA, U+20BC-20BD, U+2113, U+2116-2117, U+2120, U+2126, U+212E, U+2153-2154, U+215B-215E, U+2190-2193, U+2202, U+2206, U+220F, U+2211-2212, U+2215, U+2219-221A, U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+22B2-22B3, U+22C5, U+2318, U+25A0, U+25B2, U+25BC, U+25CA, U+25CF, U+2605, U+2610-2611, U+2666, U+2713, U+2E18, U+E004-E005, U+F43A-F43B, U+F460-F473, U+F498-F49F, U+F4C6-F4C7, U+F4CC-F4CD, U+F4D2-F4D7, U+F50A-F50B, U+F50E-F533, U+F536-F539, U+F53C-F53F, U+F637, U+F6C3, U+F6DD, U+F6DF-F6F3, U+F8FF, U+FB00-FB04;font-display: swap;
}
@font-face {font-family: 'proxima-n-w01-reg'; font-style: normal; font-weight: 400; src: url('//static.parastorage.com/fonts/v2/c24fcada-6239-48bc-8b88-9288338191c9/v1/proxima-n-w01-reg.woff2') format('woff2'); unicode-range: U+000D, U+0020-007E, U+00A0-00FF, U+0110, U+0131, U+0152-0153, U+0160-0161, U+0178, U+017D-017E, U+0192, U+02C6-02C7, U+02DA, U+02DC, U+2013-2014, U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+20AC, U+2122, U+F656-F659;font-display: swap;
}@font-face {font-family: 'avenir-lt-w01_85-heavy1475544'; font-style: normal; font-weight: 400; src: url('//static.parastorage.com/fonts/v2/74290729-59ae-4129-87d0-2eec3974dce1/v1/avenir-lt-w05_85-heavy.woff2') format('woff2'); unicode-range: U+0100-012B, U+012E-0130, U+0132-0137, U+0139-0149, U+014C-0151, U+0154-015F, U+0162-0177, U+0179-017C, U+0218-021B, U+02C9, U+02D8-02D9, U+02DB, U+02DD, U+0394, U+03A9, U+03BC, U+03C0, U+1E9E, U+20B9-20BA, U+20BC-20BD, U+2113, U+2126, U+212E, U+2202, U+2206, U+220F, U+2211-2212, U+2215, U+2219-221A, U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+F8FF, U+FB01-FB02;font-display: swap;
}
@font-face {font-family: 'avenir-lt-w01_85-heavy1475544'; font-style: normal; font-weight: 400; src: url('//static.parastorage.com/fonts/v2/74290729-59ae-4129-87d0-2eec3974dce1/v1/avenir-lt-w01_85-heavy1475544.woff2') format('woff2'); unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00FF, U+0131, U+0152-0153, U+0160-0161, U+0178, U+017D-017E, U+0192, U+0237, U+02C6-02C7, U+02DA, U+02DC, U+2013-2014, U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+20AC, U+2122;font-display: swap;
}@font-face {font-family: 'helvetica-w01-bold'; font-style: normal; font-weight: 400; src: url('//static.parastorage.com/fonts/v2/2f12de04-5ca4-4ada-9e66-a958673b12b5/v1/helvetica-lt-w10-bold.woff2') format('woff2'); unicode-range: U+0000, U+0401-040C, U+040E-044F, U+0451-045C, U+045E-045F, U+0490-0491, U+2116;font-display: swap;
}
@font-face {font-family: 'helvetica-w01-bold'; font-style: normal; font-weight: 400; src: url('//static.parastorage.com/fonts/v2/2f12de04-5ca4-4ada-9e66-a958673b12b5/v1/helvetica-w02-bold.woff2') format('woff2'); unicode-range: U+0100-012B, U+012E-0130, U+0132-0137, U+0139-0149, U+014C-0151, U+0154-015F, U+0162-0177, U+0179-017C, U+0218-021B, U+0237, U+02C9, U+02D8-02D9, U+02DB, U+02DD, U+0394, U+03A9, U+03BC, U+03C0, U+2044, U+2113, U+2126, U+212E, U+2202, U+2206, U+220F, U+2211-2212, U+2215, U+2219-221A, U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+E301-E304, U+E306-E30D, U+FB01-FB02;font-display: swap;
}
@font-face {font-family: 'helvetica-w01-bold'; font-style: normal; font-weight: 400; src: url('//static.parastorage.com/fonts/v2/2f12de04-5ca4-4ada-9e66-a958673b12b5/v1/helvetica-w01-bold.woff2') format('woff2'); unicode-range: U+000D, U+0020-007E, U+00A0-00FF, U+0131, U+0152-0153, U+0160-0161, U+0178, U+017D-017E, U+0192, U+02C6-02C7, U+02DA, U+02DC, U+2013-2014, U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A, U+20AC, U+2122;font-display: swap;
}@font-face {font-family: 'helvetica-w01-roman'; font-style: normal; font-weight: 400; src: url('//static.parastorage.com/fonts/v2/2af1bf48-e783-4da8-9fa0-599dde29f2d5/v1/helvetica-lt-w10-roman.woff2') format('woff2'); unicode-range: U+0000, U+000D, U+0020-007E, U+00A0, U+00A4, U+00A6-00A7, U+00A9, U+00AB-00AE, U+00B0-00B1, U+00B5-00B7, U+00BB, U+0401-040C, U+040E-044F, U+0451-045C, U+045E-045F, U+0490-0491, U+2013-2014, U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A, U+20AC, U+2116, U+2122;font-display: swap;
}
@font-face {font-family: 'helvetica-w01-roman'; font-style: normal; font-weight: 400; src: url('//static.parastorage.com/fonts/v2/2af1bf48-e783-4da8-9fa0-599dde29f2d5/v1/helvetica-w02-roman.woff2') format('woff2'); unicode-range: U+000D, U+0020-007E, U+00A0-012B, U+012E-0137, U+0139-0149, U+014C-017E, U+0192, U+0218-021B, U+0237, U+02C6-02C7, U+02C9, U+02D8-02DD, U+0394, U+03A9, U+03BC, U+03C0, U+2013-2014, U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+20AC, U+2113, U+2122, U+2126, U+212E, U+2202, U+2206, U+220F, U+2211-2212, U+2215, U+2219-221A, U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+E301-E304, U+E306-E30D, U+FB01-FB02;font-display: swap;
}
@font-face {font-family: 'helvetica-w01-roman'; font-style: normal; font-weight: 400; src: url('//static.parastorage.com/fonts/v2/2af1bf48-e783-4da8-9fa0-599dde29f2d5/v1/helvetica-w01-roman.woff2') format('woff2'); unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-012B, U+012E-0137, U+0139-0149, U+014C-017E, U+0192, U+0218-021B, U+0237, U+02C6-02C7, U+02C9, U+02D8-02DD, U+0394, U+03A9, U+03BC, U+03C0, U+0401-040C, U+040E-044F, U+0451-045C, U+045E-045F, U+0462-0463, U+0472-0475, U+0490-0491, U+04D9, U+1E9E, U+2013-2014, U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+20AC, U+20B9-20BA, U+20BC-20BD, U+2113, U+2116, U+2122, U+2126, U+212E, U+2202, U+2206, U+220F, U+2211-2212, U+2215, U+2219-221A, U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+E300-E30D, U+F6C5, U+F6C9-F6D8, U+F8FF, U+FB01-FB02;font-display: swap;
}#masterPage:not(.landingPage) #PAGES_CONTAINER{margin-top:0px;margin-bottom:0px;}#masterPage.landingPage #SITE_FOOTER{display:none;}#masterPage.landingPage #comp-jnleunge{display:none;}#masterPage.landingPage #comp-jnlfh3q2{display:none;}#masterPage.landingPage #comp-jnn3udz3{display:none;}#masterPage.landingPage #comp-jnmtd6qs{display:none;}#masterPage.landingPage #SITE_HEADER{display:none;}#masterPage.landingPage #SITE_HEADER-placeholder{display:none;}#masterPage.landingPage #SITE_FOOTER-placeholder{display:none;}#SITE_CONTAINER.focus-ring-active :not(.has-custom-focus):not(.ignore-focus):not([tabindex="-1"]):focus, #SITE_CONTAINER.focus-ring-active :not(.has-custom-focus):not(.ignore-focus):not([tabindex="-1"]):focus ~ .wixSdkShowFocusOnSibling{--focus-ring-box-shadow:0 0 0 1px #ffffff, 0 0 0 3px #116dff;box-shadow:var(--focus-ring-box-shadow) !important;z-index:1;}.has-inner-focus-ring{--focus-ring-box-shadow:inset 0 0 0 1px #ffffff, inset 0 0 0 3px #116dff !important;}#masterPage{left:0;margin-left:0;width:100%;min-width:0;}#SITE_FOOTER{--pinned-layer-in-container:50;--above-all-in-container:49;}#PAGES_CONTAINER{--pinned-layer-in-container:51;--above-all-in-container:49;}#comp-jnleunge{--pinned-layer-in-container:52;--above-all-in-container:49;}#comp-jnlfh3q2-pinned-layer{z-index:calc(var(--pinned-layers-in-page, 0) + 53);--above-all-in-container:10000;}#comp-jnn3udz3-pinned-layer{z-index:calc(var(--pinned-layers-in-page, 0) + 54);--above-all-in-container:10000;}#comp-jnn87ivp-pinned-layer{z-index:calc(var(--pinned-layers-in-page, 0) + 55);--above-all-in-container:10000;}#comp-jnmtd6qs-pinned-layer{z-index:calc(var(--pinned-layers-in-page, 0) + 56);--above-all-in-container:10000;}#SITE_HEADER{z-index:49;--above-all-in-container:10000;}[id="soapAfterPagesContainer"].page-without-sosp [data-mesh-id=soapAfterPagesContainerinlineContent]{height:auto;width:100%;position:static;min-height:auto;padding-bottom:0px;box-sizing:border-box;}[id="soapAfterPagesContainer"].page-without-sosp [data-mesh-id=soapAfterPagesContainerinlineContent-gridContainer] > [id="comp-jnleunge"]{position:absolute;top:20px;left:102px;margin-left:calc((100% - 980px) * 0.5);}[id="soapAfterPagesContainer"].page-with-sosp [data-mesh-id=soapAfterPagesContainerinlineContent]{height:auto;width:100%;position:static;min-height:auto;padding-bottom:0px;box-sizing:border-box;}[id="soapAfterPagesContainer"].page-with-sosp [data-mesh-id=soapAfterPagesContainerinlineContent-gridContainer] > [id="comp-jnleunge"]{position:absolute;top:20px;left:102px;margin-left:calc((100% - 980px) * 0.5);}#comp-jnlfh3q2{justify-self:end;margin-right:166px;align-self:start;margin-top:20px;position:absolute;grid-area:1 / 1 / 2 / 2;pointer-events:auto;}#comp-jnn3udz3{justify-self:start;margin-left:50px;align-self:start;margin-top:9px;position:absolute;grid-area:1 / 1 / 2 / 2;pointer-events:auto;}#comp-jnn87ivp{justify-self:end;align-self:end;position:absolute;grid-area:1 / 1 / 2 / 2;pointer-events:auto;}#comp-jnmtd6qs{justify-self:end;align-self:start;position:absolute;grid-area:1 / 1 / 2 / 2;pointer-events:auto;}:root,:host, .spxThemeOverride, .max-width-container{--color_0:255,255,255;--color_1:255,255,255;--color_2:0,0,0;--color_3:237,28,36;--color_4:0,136,203;--color_5:255,203,5;--color_6:114,114,114;--color_7:176,176,176;--color_8:255,255,255;--color_9:114,114,114;--color_10:176,176,176;--color_11:255,255,255;--color_12:201,209,222;--color_13:115,131,156;--color_14:58,73,97;--color_15:12,29,57;--color_16:218,176,255;--color_17:199,137,254;--color_18:144,19,254;--color_19:96,13,169;--color_20:48,6,85;--color_21:250,196,186;--color_22:245,166,151;--color_23:240,85,55;--color_24:160,57,37;--color_25:80,28,18;--color_26:254,233,195;--color_27:252,222,165;--color_28:251,191,77;--color_29:167,127,51;--color_30:84,64,26;--color_31:179,241,212;--color_32:139,228,186;--color_33:47,214,136;--color_34:31,143,91;--color_35:16,71,45;--color_36:255,255,255;--color_37:12,29,57;--color_38:201,209,222;--color_39:115,131,156;--color_40:58,73,97;--color_41:144,19,254;--color_42:199,137,254;--color_43:115,131,156;--color_44:255,255,255;--color_45:12,29,57;--color_46:12,29,57;--color_47:58,73,97;--color_48:144,19,254;--color_49:144,19,254;--color_50:255,255,255;--color_51:255,255,255;--color_52:144,19,254;--color_53:144,19,254;--color_54:115,131,156;--color_55:115,131,156;--color_56:255,255,255;--color_57:255,255,255;--color_58:144,19,254;--color_59:144,19,254;--color_60:144,19,254;--color_61:144,19,254;--color_62:255,255,255;--color_63:255,255,255;--color_64:115,131,156;--color_65:115,131,156;--font_0:normal normal normal 90px/1.4em 'playfair display',serif;--font_1:normal normal normal 16px/1.4em din-next-w01-light,sans-serif;--font_2:normal normal normal 50px/1.4em 'playfair display',serif;--font_3:normal normal normal 30px/1.4em 'playfair display',serif;--font_4:normal normal normal 25px/1.4em 'playfair display',serif;--font_5:normal normal bold 25px/1.4em avenir-lt-w01_35-light1475496,sans-serif;--font_6:normal normal normal 22px/1.4em proxima-n-w01-reg,sans-serif;--font_7:normal normal normal 17px/1.4em avenir-lt-w01_35-light1475496,sans-serif;--font_8:normal normal normal 18px/1.4em avenir-lt-w01_35-light1475496,sans-serif;--font_9:normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;--font_10:normal normal normal 12px/1.4em din-next-w01-light,sans-serif;--wix-ads-height:0px;--sticky-offset:0px;--wix-ads-top-height:0px;--site-width:980px;--above-all-z-index:100000;--portals-z-index:100001;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;--minViewportSize:320;--maxViewportSize:1920;--theme-spx-ratio:1px;--scaling-factor:min((100 * var(--one-unit)), var(--section-max-width));--customScaleViewportLimit:clamp(var(--minViewportSize) * 1px, 100 * var(--one-unit), min(var(--section-max-width), var(--maxViewportSize) * 1px));}.font_0{font:var(--font_0);color:rgb(var(--color_15));letter-spacing:0em;}.font_1{font:var(--font_1);color:rgb(var(--color_14));letter-spacing:0em;}.font_2{font:var(--font_2);color:rgb(var(--color_15));letter-spacing:0em;}.font_3{font:var(--font_3);color:rgb(var(--color_15));letter-spacing:0em;}.font_4{font:var(--font_4);color:rgb(var(--color_15));letter-spacing:0em;}.font_5{font:var(--font_5);color:rgb(var(--color_15));letter-spacing:0em;}.font_6{font:var(--font_6);color:rgb(var(--color_15));letter-spacing:0em;}.font_7{font:var(--font_7);color:rgb(var(--color_18));letter-spacing:0em;}.font_8{font:var(--font_8);color:rgb(var(--color_15));letter-spacing:0em;}.font_9{font:var(--font_9);color:rgb(var(--color_15));letter-spacing:0em;}.font_10{font:var(--font_10);color:rgb(var(--color_14));letter-spacing:0em;}.color_0{color:rgb(var(--color_0));}.color_1{color:rgb(var(--color_1));}.color_2{color:rgb(var(--color_2));}.color_3{color:rgb(var(--color_3));}.color_4{color:rgb(var(--color_4));}.color_5{color:rgb(var(--color_5));}.color_6{color:rgb(var(--color_6));}.color_7{color:rgb(var(--color_7));}.color_8{color:rgb(var(--color_8));}.color_9{color:rgb(var(--color_9));}.color_10{color:rgb(var(--color_10));}.color_11{color:rgb(var(--color_11));}.color_12{color:rgb(var(--color_12));}.color_13{color:rgb(var(--color_13));}.color_14{color:rgb(var(--color_14));}.color_15{color:rgb(var(--color_15));}.color_16{color:rgb(var(--color_16));}.color_17{color:rgb(var(--color_17));}.color_18{color:rgb(var(--color_18));}.color_19{color:rgb(var(--color_19));}.color_20{color:rgb(var(--color_20));}.color_21{color:rgb(var(--color_21));}.color_22{color:rgb(var(--color_22));}.color_23{color:rgb(var(--color_23));}.color_24{color:rgb(var(--color_24));}.color_25{color:rgb(var(--color_25));}.color_26{color:rgb(var(--color_26));}.color_27{color:rgb(var(--color_27));}.color_28{color:rgb(var(--color_28));}.color_29{color:rgb(var(--color_29));}.color_30{color:rgb(var(--color_30));}.color_31{color:rgb(var(--color_31));}.color_32{color:rgb(var(--color_32));}.color_33{color:rgb(var(--color_33));}.color_34{color:rgb(var(--color_34));}.color_35{color:rgb(var(--color_35));}.color_36{color:rgb(var(--color_36));}.color_37{color:rgb(var(--color_37));}.color_38{color:rgb(var(--color_38));}.color_39{color:rgb(var(--color_39));}.color_40{color:rgb(var(--color_40));}.color_41{color:rgb(var(--color_41));}.color_42{color:rgb(var(--color_42));}.color_43{color:rgb(var(--color_43));}.color_44{color:rgb(var(--color_44));}.color_45{color:rgb(var(--color_45));}.color_46{color:rgb(var(--color_46));}.color_47{color:rgb(var(--color_47));}.color_48{color:rgb(var(--color_48));}.color_49{color:rgb(var(--color_49));}.color_50{color:rgb(var(--color_50));}.color_51{color:rgb(var(--color_51));}.color_52{color:rgb(var(--color_52));}.color_53{color:rgb(var(--color_53));}.color_54{color:rgb(var(--color_54));}.color_55{color:rgb(var(--color_55));}.color_56{color:rgb(var(--color_56));}.color_57{color:rgb(var(--color_57));}.color_58{color:rgb(var(--color_58));}.color_59{color:rgb(var(--color_59));}.color_60{color:rgb(var(--color_60));}.color_61{color:rgb(var(--color_61));}.color_62{color:rgb(var(--color_62));}.color_63{color:rgb(var(--color_63));}.color_64{color:rgb(var(--color_64));}.color_65{color:rgb(var(--color_65));}.backcolor_0{background-color:rgb(var(--color_0));}.backcolor_1{background-color:rgb(var(--color_1));}.backcolor_2{background-color:rgb(var(--color_2));}.backcolor_3{background-color:rgb(var(--color_3));}.backcolor_4{background-color:rgb(var(--color_4));}.backcolor_5{background-color:rgb(var(--color_5));}.backcolor_6{background-color:rgb(var(--color_6));}.backcolor_7{background-color:rgb(var(--color_7));}.backcolor_8{background-color:rgb(var(--color_8));}.backcolor_9{background-color:rgb(var(--color_9));}.backcolor_10{background-color:rgb(var(--color_10));}.backcolor_11{background-color:rgb(var(--color_11));}.backcolor_12{background-color:rgb(var(--color_12));}.backcolor_13{background-color:rgb(var(--color_13));}.backcolor_14{background-color:rgb(var(--color_14));}.backcolor_15{background-color:rgb(var(--color_15));}.backcolor_16{background-color:rgb(var(--color_16));}.backcolor_17{background-color:rgb(var(--color_17));}.backcolor_18{background-color:rgb(var(--color_18));}.backcolor_19{background-color:rgb(var(--color_19));}.backcolor_20{background-color:rgb(var(--color_20));}.backcolor_21{background-color:rgb(var(--color_21));}.backcolor_22{background-color:rgb(var(--color_22));}.backcolor_23{background-color:rgb(var(--color_23));}.backcolor_24{background-color:rgb(var(--color_24));}.backcolor_25{background-color:rgb(var(--color_25));}.backcolor_26{background-color:rgb(var(--color_26));}.backcolor_27{background-color:rgb(var(--color_27));}.backcolor_28{background-color:rgb(var(--color_28));}.backcolor_29{background-color:rgb(var(--color_29));}.backcolor_30{background-color:rgb(var(--color_30));}.backcolor_31{background-color:rgb(var(--color_31));}.backcolor_32{background-color:rgb(var(--color_32));}.backcolor_33{background-color:rgb(var(--color_33));}.backcolor_34{background-color:rgb(var(--color_34));}.backcolor_35{background-color:rgb(var(--color_35));}.backcolor_36{background-color:rgb(var(--color_36));}.backcolor_37{background-color:rgb(var(--color_37));}.backcolor_38{background-color:rgb(var(--color_38));}.backcolor_39{background-color:rgb(var(--color_39));}.backcolor_40{background-color:rgb(var(--color_40));}.backcolor_41{background-color:rgb(var(--color_41));}.backcolor_42{background-color:rgb(var(--color_42));}.backcolor_43{background-color:rgb(var(--color_43));}.backcolor_44{background-color:rgb(var(--color_44));}.backcolor_45{background-color:rgb(var(--color_45));}.backcolor_46{background-color:rgb(var(--color_46));}.backcolor_47{background-color:rgb(var(--color_47));}.backcolor_48{background-color:rgb(var(--color_48));}.backcolor_49{background-color:rgb(var(--color_49));}.backcolor_50{background-color:rgb(var(--color_50));}.backcolor_51{background-color:rgb(var(--color_51));}.backcolor_52{background-color:rgb(var(--color_52));}.backcolor_53{background-color:rgb(var(--color_53));}.backcolor_54{background-color:rgb(var(--color_54));}.backcolor_55{background-color:rgb(var(--color_55));}.backcolor_56{background-color:rgb(var(--color_56));}.backcolor_57{background-color:rgb(var(--color_57));}.backcolor_58{background-color:rgb(var(--color_58));}.backcolor_59{background-color:rgb(var(--color_59));}.backcolor_60{background-color:rgb(var(--color_60));}.backcolor_61{background-color:rgb(var(--color_61));}.backcolor_62{background-color:rgb(var(--color_62));}.backcolor_63{background-color:rgb(var(--color_63));}.backcolor_64{background-color:rgb(var(--color_64));}.backcolor_65{background-color:rgb(var(--color_65));}#SITE_FOOTER{--bg:var(--color_15);--shd:none;--brwt:0px;--brd:160,160,159;--brwb:0px;--bgctr:var(--color_15);--rd:0px;--alpha-bg:1;--alpha-bgctr:1;--alpha-brd:1;--boxShadowToggleOn-shd:none;--backdrop-filter:none;}#SITE_FOOTER{left:0;margin-left:0;width:100%;min-width:0;}[data-mesh-id=SITE_FOOTERinlineContent]{height:auto;width:100%;}[data-mesh-id=SITE_FOOTERinlineContent-gridContainer]{position:static;display:grid;height:auto;width:100%;min-height:auto;grid-template-rows:repeat(11, min-content) 1fr;grid-template-columns:100%;}[data-mesh-id=SITE_FOOTERinlineContent-gridContainer] > [id="comp-jnlrllcc"]{position:relative;margin:100px 0px -15px calc((100% - 980px) * 0.5);left:21px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=SITE_FOOTERinlineContent-gridContainer] > [id="comp-jnlrpeii"]{position:relative;margin:11px 0px 58px calc((100% - 980px) * 0.5);left:471px;grid-area:2 / 1 / 3 / 2;justify-self:start;align-self:start;}[data-mesh-id=SITE_FOOTERinlineContent-gridContainer] > [id="comp-jnlrpejf"]{position:relative;margin:0px 0px 54px calc((100% - 980px) * 0.5);left:567px;grid-area:2 / 1 / 3 / 2;justify-self:start;align-self:start;}[data-mesh-id=SITE_FOOTERinlineContent-gridContainer] > [id="comp-jnls3h32"]{position:relative;margin:0px 0px 66px calc((100% - 980px) * 0.5);left:0px;grid-area:3 / 1 / 4 / 2;justify-self:start;align-self:start;}[data-mesh-id=SITE_FOOTERinlineContent-gridContainer] > [id="comp-jnleli4f"]{position:relative;margin:4px 0px 20px calc((100% - 980px) * 0.5);left:21px;grid-area:4 / 1 / 5 / 2;justify-self:start;align-self:start;}[data-mesh-id=SITE_FOOTERinlineContent-gridContainer] > [id="comp-jnlem0bk"]{position:relative;margin:0px 0px 12px calc((100% - 980px) * 0.5);left:21px;grid-area:5 / 1 / 6 / 2;justify-self:start;align-self:start;}[data-mesh-id=SITE_FOOTERinlineContent-gridContainer] > [id="comp-jnlegt8b"]{position:relative;margin:4px 0px 20px calc((100% - 980px) * 0.5);left:240px;grid-area:4 / 1 / 5 / 2;justify-self:start;align-self:start;}[data-mesh-id=SITE_FOOTERinlineContent-gridContainer] > [id="comp-jnlegt9b"]{position:relative;margin:0px 0px 37px calc((100% - 980px) * 0.5);left:240px;grid-area:5 / 1 / 6 / 2;justify-self:start;align-self:start;}[data-mesh-id=SITE_FOOTERinlineContent-gridContainer] > [id="comp-jnlei0zj"]{position:relative;margin:4px 0px 20px calc((100% - 980px) * 0.5);left:456px;grid-area:4 / 1 / 5 / 2;justify-self:start;align-self:start;}[data-mesh-id=SITE_FOOTERinlineContent-gridContainer] > [id="comp-jnmw58uo"]{position:relative;margin:0px 0px -16px calc((100% - 980px) * 0.5);left:729px;grid-area:4 / 1 / 5 / 2;justify-self:start;align-self:start;}[data-mesh-id=SITE_FOOTERinlineContent-gridContainer] > [id="comp-jnlei10c"]{position:relative;margin:0px 0px 70px calc((100% - 980px) * 0.5);left:456px;grid-area:6 / 1 / 7 / 2;justify-self:start;align-self:start;}[data-mesh-id=SITE_FOOTERinlineContent-gridContainer] > [id="comp-jnlel6tk"]{position:relative;margin:0px 0px 55px calc((100% - 980px) * 0.5);left:0px;grid-area:7 / 1 / 8 / 2;justify-self:start;align-self:start;}[data-mesh-id=SITE_FOOTERinlineContent-gridContainer] > [id="comp-jnlencwp"]{position:relative;margin:0px 0px 9px calc((100% - 980px) * 0.5);left:21px;grid-area:8 / 1 / 9 / 2;justify-self:start;align-self:start;}[data-mesh-id=SITE_FOOTERinlineContent-gridContainer] > [id="comp-jnlf5nxk"]{position:relative;margin:0px 0px 39px calc((100% - 980px) * 0.5);left:21px;grid-area:9 / 1 / 10 / 2;justify-self:start;align-self:start;}[data-mesh-id=SITE_FOOTERinlineContent-gridContainer] > [id="comp-jnleunnx"]{position:relative;margin:0px 0px 10px calc((100% - 980px) * 0.5);left:0px;grid-area:10 / 1 / 11 / 2;justify-self:start;align-self:start;}[data-mesh-id=SITE_FOOTERinlineContent-gridContainer] > [id="comp-jnleovy6"]{position:relative;margin:15px 0px 10px calc((100% - 980px) * 0.5);left:801px;grid-area:10 / 1 / 11 / 2;justify-self:start;align-self:start;}[data-mesh-id=SITE_FOOTERinlineContent-gridContainer] > [id="comp-jnkfpusy"]{position:relative;margin:0px 0 0 0;left:0;grid-area:11 / 1 / 12 / 2;justify-self:stretch;align-self:start;}[data-mesh-id=SITE_FOOTERinlineContent-gridContainer] > [id="comp-jnlmlsag"]{position:relative;margin:0px 0px 0px calc((100% - 980px) * 0.5);left:0px;grid-area:12 / 1 / 13 / 2;justify-self:start;align-self:start;}#SITE_FOOTER{--shc-mutated-brightness:6,15,29;--bg-overlay-color:rgb(var(--color_15));--bg-gradient:none;}#comp-jnlrllcc{--blendMode:normal;--textShadow:0px 0px transparent;--textOutline:0px 0px transparent;}#comp-jnlrllcc{width:452px;height:auto;}#comp-jnlrpeii{--lnw:1px;--brd:var(--color_18);--alpha-brd:1;}#comp-jnlrpeii{width:69px;height:5px;}#comp-jnlrpeii{transform-origin:center 0.5px;}#comp-jnlrpejf{width:360px;height:auto;}#comp-jnlrpejf{--min-height:12px;}#comp-jnls3h32{--lnw:1px;--brd:var(--color_14);--alpha-brd:1;}#comp-jnls3h32{width:981px;height:5px;}#comp-jnls3h32{transform-origin:center 0.5px;}#comp-jnleli4f{width:150px;height:auto;}#comp-jnlem0bk{width:207px;height:auto;}#comp-jnlegt8b{width:150px;height:auto;}#comp-jnlegt9b{--blendMode:normal;--textShadow:0px 0px transparent;--textOutline:0px 0px transparent;}#comp-jnlegt9b{width:201px;height:auto;}#comp-jnlei0zj{width:150px;height:auto;}#comp-jnmw58uo{width:225px;height:73px;}.comp-jnmw58uo {
				--wix-direction: ltr;
--imageGridPosition: 5;
--widgetLayout: 2;
--imageScaling: 2;
--alignment: 2;
--dateMarginBottom: 62;
--buttonsStyle: 1;
--rsvpMarginBottom: 0;
--cardsPerRow: 3;
--descriptionMarginBottom: 42;
--listLayout: 3;
--verticalImagePosition: 1;
--dateAndLocationMarginBottom: 54;
--imagePosition: 2;
--countdownMarginBottom: 60;
--imageWidth: 50;
--listAlignment: 2;
--roundedButtonsBorderRadius: 100;
--listImageLayout: 1;
--oneButtonWidth: 223;
--imageRatio: 1;
--widgetType: 1;
--buttonHeight: 73;
--titleMarginBottom: 68;
--contentAlignment: 2;
--locationMarginBottom: 62;
--buttonsBorderRadius: 4;
--cardLocationAndDateFontSize: 16;
--cardDescriptionFontSize: 15;
--listHeaderTitleFontSizeCompactMobile: 16;
--listDateFontSizeCompactMobile: 14;
--listLocationFontSizeCompactMobile: 14;
--listHeaderTitleFontSizeMobile: 20;
--listDateFontSizeMobile: 16;
--listContentTextFontSizeMobile: 16;
--listGeneralTitleFontSizeMobile: 28;
--mobileListLayout: 1;
--listButtonFontSizeMobile: 16;
--listButtonFontSizeCompactMobile: 14;
--cardBorderWidth: 1;
--borderWidth: 0;
--todayButtonBorderWidth: 1;
--todayButtonBorderRadius: 0;
--listRoundedButtonBorderRadius: 100;
--listBorderWidth: 0;
--calendarCellBorderWidth: 1;
--calendarBorderWidth: 0;
--buttonsBorderWidth: 1;
--todayRoundedButtonBorderRadius: 100;
--listButtonBorderRadius: 0;
--listButtonBorderWidth: 1;
--calendarDetailsTitleTextSize: 16;
--calendarDetailsDateLocationTextSize: 14;
--calendarDetailsDescriptionTextSize: 14;
--multiImageScaling: 2;
--locationAndDateFormat: 1;
--listLocationAndDateFormat: 1;
--cardLocationAndDateFormat: 1;
--verticalDividerWidth: 1;
--verticalDividerHeight: 94;
--horizontalDividerWidth: 20;
--horizontalDividerHeight: 1;
--compactHorizontalDividerWidth: 36;
--compactHorizontalDividerHeight: 1;
--imageOpacity: 70;
--listButtonStyle: 1;
--cardMargins: 20;
--sideBySideLayoutMargins: 30;
--listImageOpacity: 100;
--listImageWidth: 50;
--listDividerWidth: 1;
--listStripWidth: 20;
--calendarWeekStartDay: 1;
--calendarListTextSize: 14;
--calendarListDividerWidth: 1;
--todayButtonStyle: 2;
--listContentTextFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--cardDescriptionFont: normal normal normal 16px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--calendarMonthFont: normal normal normal 18px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--calendarWeekdaysFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--calendarDayNumberFont: normal normal normal 24px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--calendarCellEventNameFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--todayHollowButtonFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--todayButtonFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--ribbonFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--soldOutRibbonFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--rsvpClosedRibbonFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--joinWaitlistRibbonFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--membershipRibbonFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--recurringRibbonFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--compactTextsFont: normal normal normal 24px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--eventDescriptionFontV2: normal normal normal 16px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--listImageBackgroundColor: 144,19,254;
--listImageBackgroundColor-rgb: 144,19,254;
--listImageBackgroundColor-opacity: 1;
--backgroundColor: 255,255,255;
--backgroundColor-rgb: 255,255,255;
--backgroundColor-opacity: 1;
--cardBackgroundColor: 255,255,255;
--cardBackgroundColor-rgb: 255,255,255;
--cardBackgroundColor-opacity: 1;
--listGeneralTitleColor: 12,29,57;
--listGeneralTitleColor-rgb: 12,29,57;
--listGeneralTitleColor-opacity: 1;
--textsColor: 12,29,57;
--textsColor-rgb: 12,29,57;
--textsColor-opacity: 1;
--cardBorderColor: 201,209,222;
--cardBorderColor-rgb: 201,209,222;
--cardBorderColor-opacity: 1;
--labelsColor: 12,29,57;
--labelsColor-rgb: 12,29,57;
--labelsColor-opacity: 1;
--listButtonBorderColor: 144,19,254;
--listButtonBorderColor-rgb: 144,19,254;
--listButtonBorderColor-opacity: 1;
--listHeaderTitleColor: 12,29,57;
--listHeaderTitleColor-rgb: 12,29,57;
--listHeaderTitleColor-opacity: 1;
--buttonsBorderColor: 144,19,254,0;
--buttonsBorderColor-rgb: 144,19,254;
--buttonsBorderColor-opacity: 0;
--buttonsBackgroundColor: 144,19,254;
--buttonsBackgroundColor-rgb: 144,19,254;
--buttonsBackgroundColor-opacity: 1;
--imageBackgroundColor: 12,29,57;
--imageBackgroundColor-rgb: 12,29,57;
--imageBackgroundColor-opacity: 1;
--dividerColor: 12,29,57;
--dividerColor-rgb: 12,29,57;
--dividerColor-opacity: 1;
--descriptionColor: 12,29,57;
--descriptionColor-rgb: 12,29,57;
--descriptionColor-opacity: 1;
--fullButtonsFontColor: 255,255,255;
--fullButtonsFontColor-rgb: 255,255,255;
--fullButtonsFontColor-opacity: 1;
--hollowButtonsFontColor: 12,29,57;
--hollowButtonsFontColor-rgb: 12,29,57;
--hollowButtonsFontColor-opacity: 1;
--borderColor: 201,209,222;
--borderColor-rgb: 201,209,222;
--borderColor-opacity: 1;
--listFullButtonFontColor: 255,255,255;
--listFullButtonFontColor-rgb: 255,255,255;
--listFullButtonFontColor-opacity: 1;
--listHollowButtonFontColor: 144,19,254;
--listHollowButtonFontColor-rgb: 144,19,254;
--listHollowButtonFontColor-opacity: 1;
--titleColor: 12,29,57;
--titleColor-rgb: 12,29,57;
--titleColor-opacity: 1;
--countdownColor: 12,29,57;
--countdownColor-rgb: 12,29,57;
--countdownColor-opacity: 1;
--cardsBackgroundColor: 255,255,255,0;
--cardsBackgroundColor-rgb: 255,255,255;
--cardsBackgroundColor-opacity: 0;
--listButtonBackgroundColor: 144,19,254;
--listButtonBackgroundColor-rgb: 144,19,254;
--listButtonBackgroundColor-opacity: 1;
--listContentTitleColor: 144,19,254;
--listContentTitleColor-rgb: 144,19,254;
--listContentTitleColor-opacity: 1;
--listHeaderDateTimeColor: 12,29,57;
--listHeaderDateTimeColor-rgb: 12,29,57;
--listHeaderDateTimeColor-opacity: 1;
--listContentTextColor: 12,29,57;
--listContentTextColor-rgb: 12,29,57;
--listContentTextColor-opacity: 1;
--listHeaderLocationColor: 12,29,57;
--listHeaderLocationColor-rgb: 12,29,57;
--listHeaderLocationColor-opacity: 1;
--calendarCellBackground: 255,255,255;
--calendarCellBackground-rgb: 255,255,255;
--calendarCellBackground-opacity: 1;
--calendarBorderColor: 201,209,222;
--calendarBorderColor-rgb: 201,209,222;
--calendarBorderColor-opacity: 1;
--calendarMainActiveColor: 144,19,254;
--calendarMainActiveColor-rgb: 144,19,254;
--calendarMainActiveColor-opacity: 1;
--calendarMonthColor: 12,29,57;
--calendarMonthColor-rgb: 12,29,57;
--calendarMonthColor-opacity: 1;
--calendarWeekdaysColor: 12,29,57;
--calendarWeekdaysColor-rgb: 12,29,57;
--calendarWeekdaysColor-opacity: 1;
--calendarDayNumberColor: 12,29,57;
--calendarDayNumberColor-rgb: 12,29,57;
--calendarDayNumberColor-opacity: 1;
--calendarCellEventNameColor: 12,29,57;
--calendarCellEventNameColor-rgb: 12,29,57;
--calendarCellEventNameColor-opacity: 1;
--todayHollowButtonColor: 144,19,254;
--todayHollowButtonColor-rgb: 144,19,254;
--todayHollowButtonColor-opacity: 1;
--todayButtonColor: 255,255,255;
--todayButtonColor-rgb: 255,255,255;
--todayButtonColor-opacity: 1;
--ribbonTextColor: 255,255,255;
--ribbonTextColor-rgb: 255,255,255;
--ribbonTextColor-opacity: 1;
--soldOutRibbonTextColor: 255,255,255;
--soldOutRibbonTextColor-rgb: 255,255,255;
--soldOutRibbonTextColor-opacity: 1;
--rsvpClosedRibbonTextColor: 255,255,255;
--rsvpClosedRibbonTextColor-rgb: 255,255,255;
--rsvpClosedRibbonTextColor-opacity: 1;
--joinWaitlistRibbonTextColor: 255,255,255;
--joinWaitlistRibbonTextColor-rgb: 255,255,255;
--joinWaitlistRibbonTextColor-opacity: 1;
--membershipRibbonTextColor: 12,29,57;
--membershipRibbonTextColor-rgb: 12,29,57;
--membershipRibbonTextColor-opacity: 1;
--recurringRibbonTextColor: 12,29,57;
--recurringRibbonTextColor-rgb: 12,29,57;
--recurringRibbonTextColor-opacity: 1;
--onImageHollowButtonsFontColor: 255,255,255;
--onImageHollowButtonsFontColor-rgb: 255,255,255;
--onImageHollowButtonsFontColor-opacity: 1;
--onImageFullButtonsFontColor: 12,29,57;
--onImageFullButtonsFontColor-rgb: 12,29,57;
--onImageFullButtonsFontColor-opacity: 1;
--onImageCountdownColor: 255,255,255;
--onImageCountdownColor-rgb: 255,255,255;
--onImageCountdownColor-opacity: 1;
--onImageTitleColor: 255,255,255;
--onImageTitleColor-rgb: 255,255,255;
--onImageTitleColor-opacity: 1;
--onImageDescriptionColor: 255,255,255;
--onImageDescriptionColor-rgb: 255,255,255;
--onImageDescriptionColor-opacity: 1;
--onImageLabelsColor: 255,255,255;
--onImageLabelsColor-rgb: 255,255,255;
--onImageLabelsColor-opacity: 1;
--onImageTextsColor: 255,255,255;
--onImageTextsColor-rgb: 255,255,255;
--onImageTextsColor-opacity: 1;
--calendarCellBorderColor: 201,209,222;
--calendarCellBorderColor-rgb: 201,209,222;
--calendarCellBorderColor-opacity: 1;
--calendarPastDaysBackground: 201,209,222,0.1;
--calendarPastDaysBackground-rgb: 201,209,222;
--calendarPastDaysBackground-opacity: 0.1;
--todayButtonBackgroundColor: 144,19,254;
--todayButtonBackgroundColor-rgb: 144,19,254;
--todayButtonBackgroundColor-opacity: 1;
--todayButtonBorderColor: 144,19,254;
--todayButtonBorderColor-rgb: 144,19,254;
--todayButtonBorderColor-opacity: 1;
--ribbonBackgroundColor: 246,77,67;
--ribbonBackgroundColor-rgb: 246,77,67;
--ribbonBackgroundColor-opacity: 1;
--listBackgroundColor: 255,255,255;
--listBackgroundColor-rgb: 255,255,255;
--listBackgroundColor-opacity: 1;
--listBorderColor: 201,209,222;
--listBorderColor-rgb: 201,209,222;
--listBorderColor-opacity: 1;
--listDividerColor: 201,209,222;
--listDividerColor-rgb: 201,209,222;
--listDividerColor-opacity: 1;
--soldOutRibbonBackgroundColor: 246,77,67;
--soldOutRibbonBackgroundColor-rgb: 246,77,67;
--soldOutRibbonBackgroundColor-opacity: 1;
--rsvpClosedRibbonBackgroundColor: 246,77,67;
--rsvpClosedRibbonBackgroundColor-rgb: 246,77,67;
--rsvpClosedRibbonBackgroundColor-opacity: 1;
--joinWaitlistRibbonBackgroundColor: 246,77,67;
--joinWaitlistRibbonBackgroundColor-rgb: 246,77,67;
--joinWaitlistRibbonBackgroundColor-opacity: 1;
--membershipRibbonBorderColor: 12,29,57;
--membershipRibbonBorderColor-rgb: 12,29,57;
--membershipRibbonBorderColor-opacity: 1;
--recurringRibbonBorderColor: 12,29,57;
--recurringRibbonBorderColor-rgb: 12,29,57;
--recurringRibbonBorderColor-opacity: 1;
--onImageButtonsBorderColor: 255,255,255;
--onImageButtonsBorderColor-rgb: 255,255,255;
--onImageButtonsBorderColor-opacity: 1;
--onImageButtonsBackgroundColor: 255,255,255;
--onImageButtonsBackgroundColor-rgb: 255,255,255;
--onImageButtonsBackgroundColor-opacity: 1;
--onImageDividerColor: 255,255,255;
--onImageDividerColor-rgb: 255,255,255;
--onImageDividerColor-opacity: 1;
--calendarBackgroundColor: 255,255,255,0;
--calendarBackgroundColor-rgb: 255,255,255;
--calendarBackgroundColor-opacity: 0;
--listLoadMoreContainerBackgroundColor: var(--cardBackgroundColor);
--listLoadMoreContainerBackgroundColor-rgb: var(--cardBackgroundColor-rgb);
--listLoadMoreContainerBackgroundColor-opacity: var(--cardBackgroundColor-opacity);
--eventTitleColorV2: 12,29,57;
--eventTitleColorV2-rgb: 12,29,57;
--eventTitleColorV2-opacity: 1;
--eventDateColorV2: 12,29,57;
--eventDateColorV2-rgb: 12,29,57;
--eventDateColorV2-opacity: 1;
--eventLocationColorV2: 12,29,57;
--eventLocationColorV2-rgb: 12,29,57;
--eventLocationColorV2-opacity: 1;
--eventDescriptionColorV2: 12,29,57;
--eventDescriptionColorV2-rgb: 12,29,57;
--eventDescriptionColorV2-opacity: 1;
--linkColorV2: 12,29,57;
--linkColorV2-rgb: 12,29,57;
--linkColorV2-opacity: 1;
--shareIconsColorV2: 12,29,57;
--shareIconsColorV2-rgb: 12,29,57;
--shareIconsColorV2-opacity: 1;
--hoveredEventTitleColorV2: 12,29,57;
--hoveredEventTitleColorV2-rgb: 12,29,57;
--hoveredEventTitleColorV2-opacity: 1;
--hoveredEventDateColorV2: 12,29,57;
--hoveredEventDateColorV2-rgb: 12,29,57;
--hoveredEventDateColorV2-opacity: 1;
--hoveredEventLocationColorV2: 12,29,57;
--hoveredEventLocationColorV2-rgb: 12,29,57;
--hoveredEventLocationColorV2-opacity: 1;
--hoveredEventDescriptionColor: 12,29,57;
--hoveredEventDescriptionColor-rgb: 12,29,57;
--hoveredEventDescriptionColor-opacity: 1;
--listHeaderLocationFont: normal normal normal 16/20px avenir-lt-w01_35-light1475496,sans-serif;
--listHeaderLocationFont-style: normal;
--listHeaderLocationFont-variant: normal;
--listHeaderLocationFont-weight: normal;
--listHeaderLocationFont-size: 16;
--listHeaderLocationFont-line-height: 20px;
--listHeaderLocationFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--listHeaderLocationFont-text-decoration: none;
--descriptionFont: normal normal normal 15/18px avenir-lt-w01_35-light1475496,sans-serif;
--descriptionFont-style: normal;
--descriptionFont-variant: normal;
--descriptionFont-weight: normal;
--descriptionFont-size: 15;
--descriptionFont-line-height: 18px;
--descriptionFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--descriptionFont-text-decoration: none;
--listGeneralTitleFont: normal normal normal 36/45px proxima-n-w01-reg,sans-serif;
--listGeneralTitleFont-style: normal;
--listGeneralTitleFont-variant: normal;
--listGeneralTitleFont-weight: normal;
--listGeneralTitleFont-size: 36;
--listGeneralTitleFont-line-height: 45px;
--listGeneralTitleFont-family: proxima-n-w01-reg,sans-serif;
--listGeneralTitleFont-text-decoration: none;
--countdownFont: normal normal normal 20/25px avenir-lt-w01_35-light1475496,sans-serif;
--countdownFont-style: normal;
--countdownFont-variant: normal;
--countdownFont-weight: normal;
--countdownFont-size: 20;
--countdownFont-line-height: 25px;
--countdownFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--countdownFont-text-decoration: none;
--listHollowButtonFont: normal normal normal 16/20px avenir-lt-w01_35-light1475496,sans-serif;
--listHollowButtonFont-style: normal;
--listHollowButtonFont-variant: normal;
--listHollowButtonFont-weight: normal;
--listHollowButtonFont-size: 16;
--listHollowButtonFont-line-height: 20px;
--listHollowButtonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--listHollowButtonFont-text-decoration: none;
--hollowButtonsFont: normal normal normal 16/20px avenir-lt-w01_35-light1475496,sans-serif;
--hollowButtonsFont-style: normal;
--hollowButtonsFont-variant: normal;
--hollowButtonsFont-weight: normal;
--hollowButtonsFont-size: 16;
--hollowButtonsFont-line-height: 20px;
--hollowButtonsFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--hollowButtonsFont-text-decoration: none;
--labelsFont: normal normal normal 16/20px avenir-lt-w01_35-light1475496,sans-serif;
--labelsFont-style: normal;
--labelsFont-variant: normal;
--labelsFont-weight: normal;
--labelsFont-size: 16;
--labelsFont-line-height: 20px;
--labelsFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--labelsFont-text-decoration: none;
--listHeaderTitleFont: normal normal normal 26/32px avenir-lt-w01_35-light1475496,sans-serif;
--listHeaderTitleFont-style: normal;
--listHeaderTitleFont-variant: normal;
--listHeaderTitleFont-weight: normal;
--listHeaderTitleFont-size: 26;
--listHeaderTitleFont-line-height: 32px;
--listHeaderTitleFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--listHeaderTitleFont-text-decoration: none;
--listFullButtonFont: normal normal normal 16/20px avenir-lt-w01_35-light1475496,sans-serif;
--listFullButtonFont-style: normal;
--listFullButtonFont-variant: normal;
--listFullButtonFont-weight: normal;
--listFullButtonFont-size: 16;
--listFullButtonFont-line-height: 20px;
--listFullButtonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--listFullButtonFont-text-decoration: none;
--fullButtonsFont: normal normal normal 16/20px avenir-lt-w01_85-heavy1475544,sans-serif;
--fullButtonsFont-style: normal;
--fullButtonsFont-variant: normal;
--fullButtonsFont-weight: normal;
--fullButtonsFont-size: 16;
--fullButtonsFont-line-height: 20px;
--fullButtonsFont-family: avenir-lt-w01_85-heavy1475544,sans-serif;
--fullButtonsFont-text-decoration: none;
--titleFont: normal normal normal 46/57px "playfair display",serif;
--titleFont-style: normal;
--titleFont-variant: normal;
--titleFont-weight: normal;
--titleFont-size: 46;
--titleFont-line-height: 57px;
--titleFont-family: "playfair display",serif;
--titleFont-text-decoration: none;
--textsFont: normal normal normal 15/18px avenir-lt-w01_35-light1475496,sans-serif;
--textsFont-style: normal;
--textsFont-variant: normal;
--textsFont-weight: normal;
--textsFont-size: 15;
--textsFont-line-height: 18px;
--textsFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--textsFont-text-decoration: none;
--listHeaderDateTimeFont: normal normal normal 16px/32px avenir-lt-w01_35-light1475496,sans-serif;
--listHeaderDateTimeFont-style: normal;
--listHeaderDateTimeFont-variant: normal;
--listHeaderDateTimeFont-weight: normal;
--listHeaderDateTimeFont-size: 16px;
--listHeaderDateTimeFont-line-height: 32px;
--listHeaderDateTimeFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--listHeaderDateTimeFont-text-decoration: none;
--listContentTextFont-style: normal;
--listContentTextFont-variant: normal;
--listContentTextFont-weight: normal;
--listContentTextFont-size: 14px;
--listContentTextFont-line-height: 1.4em;
--listContentTextFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--listContentTextFont-text-decoration: none;
--cardDescriptionFont-style: normal;
--cardDescriptionFont-variant: normal;
--cardDescriptionFont-weight: normal;
--cardDescriptionFont-size: 16px;
--cardDescriptionFont-line-height: 1.4em;
--cardDescriptionFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--cardDescriptionFont-text-decoration: none;
--calendarMonthFont-style: normal;
--calendarMonthFont-variant: normal;
--calendarMonthFont-weight: normal;
--calendarMonthFont-size: 18px;
--calendarMonthFont-line-height: 1.4em;
--calendarMonthFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--calendarMonthFont-text-decoration: none;
--calendarWeekdaysFont-style: normal;
--calendarWeekdaysFont-variant: normal;
--calendarWeekdaysFont-weight: normal;
--calendarWeekdaysFont-size: 14px;
--calendarWeekdaysFont-line-height: 1.4em;
--calendarWeekdaysFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--calendarWeekdaysFont-text-decoration: none;
--calendarDayNumberFont-style: normal;
--calendarDayNumberFont-variant: normal;
--calendarDayNumberFont-weight: normal;
--calendarDayNumberFont-size: 24px;
--calendarDayNumberFont-line-height: 1.4em;
--calendarDayNumberFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--calendarDayNumberFont-text-decoration: none;
--calendarCellEventNameFont-style: normal;
--calendarCellEventNameFont-variant: normal;
--calendarCellEventNameFont-weight: normal;
--calendarCellEventNameFont-size: 14px;
--calendarCellEventNameFont-line-height: 1.4em;
--calendarCellEventNameFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--calendarCellEventNameFont-text-decoration: none;
--todayHollowButtonFont-style: normal;
--todayHollowButtonFont-variant: normal;
--todayHollowButtonFont-weight: normal;
--todayHollowButtonFont-size: 14px;
--todayHollowButtonFont-line-height: 1.4em;
--todayHollowButtonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--todayHollowButtonFont-text-decoration: none;
--todayButtonFont-style: normal;
--todayButtonFont-variant: normal;
--todayButtonFont-weight: normal;
--todayButtonFont-size: 14px;
--todayButtonFont-line-height: 1.4em;
--todayButtonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--todayButtonFont-text-decoration: none;
--ribbonFont-style: normal;
--ribbonFont-variant: normal;
--ribbonFont-weight: normal;
--ribbonFont-size: 14px;
--ribbonFont-line-height: 1.4em;
--ribbonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--ribbonFont-text-decoration: none;
--soldOutRibbonFont-style: normal;
--soldOutRibbonFont-variant: normal;
--soldOutRibbonFont-weight: normal;
--soldOutRibbonFont-size: 14px;
--soldOutRibbonFont-line-height: 1.4em;
--soldOutRibbonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--soldOutRibbonFont-text-decoration: none;
--rsvpClosedRibbonFont-style: normal;
--rsvpClosedRibbonFont-variant: normal;
--rsvpClosedRibbonFont-weight: normal;
--rsvpClosedRibbonFont-size: 14px;
--rsvpClosedRibbonFont-line-height: 1.4em;
--rsvpClosedRibbonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--rsvpClosedRibbonFont-text-decoration: none;
--joinWaitlistRibbonFont-style: normal;
--joinWaitlistRibbonFont-variant: normal;
--joinWaitlistRibbonFont-weight: normal;
--joinWaitlistRibbonFont-size: 14px;
--joinWaitlistRibbonFont-line-height: 1.4em;
--joinWaitlistRibbonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--joinWaitlistRibbonFont-text-decoration: none;
--membershipRibbonFont-style: normal;
--membershipRibbonFont-variant: normal;
--membershipRibbonFont-weight: normal;
--membershipRibbonFont-size: 14px;
--membershipRibbonFont-line-height: 1.4em;
--membershipRibbonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--membershipRibbonFont-text-decoration: none;
--recurringRibbonFont-style: normal;
--recurringRibbonFont-variant: normal;
--recurringRibbonFont-weight: normal;
--recurringRibbonFont-size: 14px;
--recurringRibbonFont-line-height: 1.4em;
--recurringRibbonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--recurringRibbonFont-text-decoration: none;
--compactTextsFont-style: normal;
--compactTextsFont-variant: normal;
--compactTextsFont-weight: normal;
--compactTextsFont-size: 24px;
--compactTextsFont-line-height: 1.4em;
--compactTextsFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--compactTextsFont-text-decoration: none;
--listTitleFontV2: normal normal normal 36/45px proxima-n-w01-reg,sans-serif;
--listTitleFontV2-style: normal;
--listTitleFontV2-variant: normal;
--listTitleFontV2-weight: normal;
--listTitleFontV2-size: 36;
--listTitleFontV2-line-height: 45px;
--listTitleFontV2-family: proxima-n-w01-reg,sans-serif;
--listTitleFontV2-text-decoration: none;
--eventTitleFontV2: normal normal normal 26/32px avenir-lt-w01_35-light1475496,sans-serif;
--eventTitleFontV2-style: normal;
--eventTitleFontV2-variant: normal;
--eventTitleFontV2-weight: normal;
--eventTitleFontV2-size: 26;
--eventTitleFontV2-line-height: 32px;
--eventTitleFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--eventTitleFontV2-text-decoration: none;
--eventDateFontV2: normal normal normal 16/20px avenir-lt-w01_35-light1475496,sans-serif;
--eventDateFontV2-style: normal;
--eventDateFontV2-variant: normal;
--eventDateFontV2-weight: normal;
--eventDateFontV2-size: 16;
--eventDateFontV2-line-height: 20px;
--eventDateFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--eventDateFontV2-text-decoration: none;
--eventLocationFontV2: normal normal normal 16/20px avenir-lt-w01_35-light1475496,sans-serif;
--eventLocationFontV2-style: normal;
--eventLocationFontV2-variant: normal;
--eventLocationFontV2-weight: normal;
--eventLocationFontV2-size: 16;
--eventLocationFontV2-line-height: 20px;
--eventLocationFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--eventLocationFontV2-text-decoration: none;
--eventDescriptionFontV2-style: normal;
--eventDescriptionFontV2-variant: normal;
--eventDescriptionFontV2-weight: normal;
--eventDescriptionFontV2-size: 16px;
--eventDescriptionFontV2-line-height: 1.4em;
--eventDescriptionFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--eventDescriptionFontV2-text-decoration: none;
--linkFontV2: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--linkFontV2-style: normal;
--linkFontV2-variant: normal;
--linkFontV2-weight: normal;
--linkFontV2-size: 14px;
--linkFontV2-line-height: 1.4em;
--linkFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--linkFontV2-text-decoration: underline;
--listFullButtonFontV2: normal normal normal 16/20px avenir-lt-w01_35-light1475496,sans-serif;
--listFullButtonFontV2-style: normal;
--listFullButtonFontV2-variant: normal;
--listFullButtonFontV2-weight: normal;
--listFullButtonFontV2-size: 16;
--listFullButtonFontV2-line-height: 20px;
--listFullButtonFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--listFullButtonFontV2-text-decoration: none;
--listHollowButtonFontV2: normal normal normal 16/20px avenir-lt-w01_35-light1475496,sans-serif;
--listHollowButtonFontV2-style: normal;
--listHollowButtonFontV2-variant: normal;
--listHollowButtonFontV2-weight: normal;
--listHollowButtonFontV2-size: 16;
--listHollowButtonFontV2-line-height: 20px;
--listHollowButtonFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--listHollowButtonFontV2-text-decoration: none;
--hoveredEventTitleFontV2: normal normal normal 26/32px avenir-lt-w01_35-light1475496,sans-serif;
--hoveredEventTitleFontV2-style: normal;
--hoveredEventTitleFontV2-variant: normal;
--hoveredEventTitleFontV2-weight: normal;
--hoveredEventTitleFontV2-size: 26;
--hoveredEventTitleFontV2-line-height: 32px;
--hoveredEventTitleFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--hoveredEventTitleFontV2-text-decoration: none;
--hoveredEventDateFontV2: normal normal normal 16px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--hoveredEventDateFontV2-style: normal;
--hoveredEventDateFontV2-variant: normal;
--hoveredEventDateFontV2-weight: normal;
--hoveredEventDateFontV2-size: 16px;
--hoveredEventDateFontV2-line-height: 1.4em;
--hoveredEventDateFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--hoveredEventDateFontV2-text-decoration: none;
--hoveredEventLocationFontV2: normal normal normal 16px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--hoveredEventLocationFontV2-style: normal;
--hoveredEventLocationFontV2-variant: normal;
--hoveredEventLocationFontV2-weight: normal;
--hoveredEventLocationFontV2-size: 16px;
--hoveredEventLocationFontV2-line-height: 1.4em;
--hoveredEventLocationFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--hoveredEventLocationFontV2-text-decoration: none;
--hoveredEventDescriptionFontV2: normal normal normal 15px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--hoveredEventDescriptionFontV2-style: normal;
--hoveredEventDescriptionFontV2-variant: normal;
--hoveredEventDescriptionFontV2-weight: normal;
--hoveredEventDescriptionFontV2-size: 15px;
--hoveredEventDescriptionFontV2-line-height: 1.4em;
--hoveredEventDescriptionFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--hoveredEventDescriptionFontV2-text-decoration: none;
--CARD_MAX_WIDTH: 700;
--CARD_MIN_WIDTH: 200;
--listMainTitleVisibility: block;
--listFullDateVisibility: block;
--listLocationVisibility: block;
--listVenueNameVisibility: block;
--listDateVisibility: block;
--listImageVisibility: block;
--listDescriptionVisibility: block;
--listSocialBarVisibility: none;
--listMembersVisibility: block;
--listSocialBarVisibilityFlex: none;
--listShortDateLocationDividerVisibility: initial;
--listShortDateLocationAlignment: center;
--listShortDateLocationDateWidth: 80%;
--listTextAlignment: center;
--listImageAspectRatio: 100;
--listImageIsSquare: 1;
--listAdditionalInfoVisibility: block;
--listAdditionalInfoVisibilityArrow: inline-flex;
--isListTextAlignmentLeft: 0;
--isListTextAlignmentRight: 0;
--sideBySideRibbonLeftMargin: auto;
--sideBySideRibbonRightMargin: auto;
--sideBySideImageDirectionEven: row;
--sideBySideImageDirectionOdd: row;
--sideBySideMinimumItemWidth: 480px;
--sideBySideTitleBottomMargin: 0.5em;
--sideBySideFullDateLocationBottomMargin: 30px;
--sideBySideShortDateLocationVisibility: block;
--sideBySideFullDateLocationVisibility: none;
--cardShortDateLocationVisibility: block;
--cardFullDateLocationVisibility: none;
--cardHoveredFullDateLocationVisibility: block;
--listLayoutTitleLocationVisibility: block;
--listLayoutTitleLocationTitleWidth: 90%;
--multiContainImageVisibility: none;
--multiCoverImageVisibility: flex;
--singleContainImageVisibility: none;
--singleCoverImageVisibility: flex;
--calendarEventTitleLineClamp: 2;
--eventSpacing: 30;
--singleButtonFont: var(--fullButtonsFont);
--singleButtonFont-text-decoration: var(--fullButtonsFont-text-decoration);
--singleButtonFont-line-height: var(--fullButtonsFont-line-height);
--singleButtonFont-family: var(--fullButtonsFont-family);
--singleButtonFont-style: var(--fullButtonsFont-style);
--singleButtonFont-size: var(--fullButtonsFont-size);
--singleButtonFont-variant: var(--fullButtonsFont-variant);
--singleButtonFont-weight: var(--fullButtonsFont-weight);
--singleButtonColor: var(--fullButtonsFontColor);
--singleButtonColor-rgb: var(--fullButtonsFontColor-rgb);
--singleButtonColor-opacity: var(--fullButtonsFontColor-opacity);
--singleOnImageButtonColor: var(--onImageFullButtonsFontColor);
--singleOnImageButtonColor-rgb: var(--onImageFullButtonsFontColor-rgb);
--singleOnImageButtonColor-opacity: var(--onImageFullButtonsFontColor-opacity);
--singleButtonBackgroundColor: var(--buttonsBackgroundColor);
--singleButtonBackgroundColor-rgb: var(--buttonsBackgroundColor-rgb);
--singleButtonBackgroundColor-opacity: var(--buttonsBackgroundColor-opacity);
--singleOnImageButtonBackgroundColor: var(--onImageButtonsBackgroundColor);
--singleOnImageButtonBackgroundColor-rgb: var(--onImageButtonsBackgroundColor-rgb);
--singleOnImageButtonBackgroundColor-opacity: var(--onImageButtonsBackgroundColor-opacity);
--singleButtonBorderColor: 0, 0, 0, 0;
--singleButtonBorderColor-rgb: 0, 0, 0;
--singleButtonBorderColor-opacity: 0;
--singleOnImageButtonBorderColor: 0, 0, 0, 0;
--singleOnImageButtonBorderColor-rgb: 0, 0, 0;
--singleOnImageButtonBorderColor-opacity: 0;
--singleButtonBorderWidth: 0;
--singleButtonBorderRadius: var(--buttonsBorderRadius);
--multiButtonFont: var(--listFullButtonFontV2);
--multiButtonFont-text-decoration: var(--listFullButtonFontV2-text-decoration);
--multiButtonFont-line-height: var(--listFullButtonFontV2-line-height);
--multiButtonFont-family: var(--listFullButtonFontV2-family);
--multiButtonFont-style: var(--listFullButtonFontV2-style);
--multiButtonFont-size: var(--listFullButtonFontV2-size);
--multiButtonFont-variant: var(--listFullButtonFontV2-variant);
--multiButtonFont-weight: var(--listFullButtonFontV2-weight);
--multiButtonColor: var(--listFullButtonFontColor);
--multiButtonColor-rgb: var(--listFullButtonFontColor-rgb);
--multiButtonColor-opacity: var(--listFullButtonFontColor-opacity);
--multiButtonBackgroundColor: var(--listButtonBackgroundColor);
--multiButtonBackgroundColor-rgb: var(--listButtonBackgroundColor-rgb);
--multiButtonBackgroundColor-opacity: var(--listButtonBackgroundColor-opacity);
--multiButtonBorderColor: 0, 0, 0, 0;
--multiButtonBorderColor-rgb: 0, 0, 0;
--multiButtonBorderColor-opacity: 0;
--multiButtonBorderWidth: 0;
--multiButtonBorderRadius: var(--listButtonBorderRadius);
--listLoadMoreContainerBorderColor: 0, 0, 0, 0;
--listLoadMoreContainerBorderColor-rgb: 0, 0, 0;
--listLoadMoreContainerBorderColor-opacity: 0;
--listLoadMoreContainerBorderWidth: 0;
--listLoadMoreMobileFontSize: var(--listButtonFontSizeMobile);
--todayButtonResolvedFont: var(--todayHollowButtonFont);
--todayButtonResolvedFont-text-decoration: var(--todayHollowButtonFont-text-decoration);
--todayButtonResolvedFont-line-height: var(--todayHollowButtonFont-line-height);
--todayButtonResolvedFont-family: var(--todayHollowButtonFont-family);
--todayButtonResolvedFont-style: var(--todayHollowButtonFont-style);
--todayButtonResolvedFont-size: var(--todayHollowButtonFont-size);
--todayButtonResolvedFont-variant: var(--todayHollowButtonFont-variant);
--todayButtonResolvedFont-weight: var(--todayHollowButtonFont-weight);
--todayButtonResolvedColor: var(--todayHollowButtonColor);
--todayButtonResolvedColor-rgb: var(--todayHollowButtonColor-rgb);
--todayButtonResolvedColor-opacity: var(--todayHollowButtonColor-opacity);
--todayButtonResolvedBackgroundColor: 0, 0, 0, 0;
--todayButtonResolvedBackgroundColor-rgb: 0, 0, 0;
--todayButtonResolvedBackgroundColor-opacity: 0;
--todayButtonResolvedBorderColor: var(--todayButtonBorderColor);
--todayButtonResolvedBorderColor-rgb: var(--todayButtonBorderColor-rgb);
--todayButtonResolvedBorderColor-opacity: var(--todayButtonBorderColor-opacity);
--todayButtonResolvedBorderWidth: var(--todayButtonBorderWidth);
--todayButtonResolvedBorderRadius: var(--todayButtonBorderRadius);
				--wix-color-1: 255,255,255;
--wix-color-2: 201,209,222;
--wix-color-3: 115,131,156;
--wix-color-4: 58,73,97;
--wix-color-5: 12,29,57;
--wix-color-6: 218,176,255;
--wix-color-7: 199,137,254;
--wix-color-8: 144,19,254;
--wix-color-9: 96,13,169;
--wix-color-10: 48,6,85;
--wix-color-11: 250,196,186;
--wix-color-12: 245,166,151;
--wix-color-13: 240,85,55;
--wix-color-14: 160,57,37;
--wix-color-15: 80,28,18;
--wix-color-16: 254,233,195;
--wix-color-17: 252,222,165;
--wix-color-18: 251,191,77;
--wix-color-19: 167,127,51;
--wix-color-20: 84,64,26;
--wix-color-21: 179,241,212;
--wix-color-22: 139,228,186;
--wix-color-23: 47,214,136;
--wix-color-24: 31,143,91;
--wix-color-25: 16,71,45;
--wix-color-26: 255,255,255;
--wix-color-27: 12,29,57;
--wix-color-28: 201,209,222;
--wix-color-29: 115,131,156;
--wix-color-30: 58,73,97;
--wix-color-31: 144,19,254;
--wix-color-32: 199,137,254;
--wix-color-33: 115,131,156;
--wix-color-34: 255,255,255;
--wix-color-35: 12,29,57;
--wix-color-36: 12,29,57;
--wix-color-37: 58,73,97;
--wix-color-38: 144,19,254;
--wix-color-39: 144,19,254;
--wix-color-40: 255,255,255;
--wix-color-41: 255,255,255;
--wix-color-42: 144,19,254;
--wix-color-43: 144,19,254;
--wix-color-44: 115,131,156;
--wix-color-45: 115,131,156;
--wix-color-46: 255,255,255;
--wix-color-47: 255,255,255;
--wix-color-48: 144,19,254;
--wix-color-49: 144,19,254;
--wix-color-50: 144,19,254;
--wix-color-51: 144,19,254;
--wix-color-52: 255,255,255;
--wix-color-53: 255,255,255;
--wix-color-54: 115,131,156;
--wix-color-55: 115,131,156;
--wix-font-Title: normal normal normal 90px/1.4em "playfair display",serif;
--wix-font-Title-style: normal;
--wix-font-Title-variant: normal;
--wix-font-Title-weight: normal;
--wix-font-Title-size: 90px;
--wix-font-Title-line-height: 1.4em;
--wix-font-Title-family: "playfair display",serif;
--wix-font-Title-text-decoration: none;
--wix-font-Menu: normal normal normal 16px/1.4em din-next-w01-light,sans-serif;
--wix-font-Menu-style: normal;
--wix-font-Menu-variant: normal;
--wix-font-Menu-weight: normal;
--wix-font-Menu-size: 16px;
--wix-font-Menu-line-height: 1.4em;
--wix-font-Menu-family: din-next-w01-light,sans-serif;
--wix-font-Menu-text-decoration: none;
--wix-font-Page-title: normal normal normal 50px/1.4em "playfair display",serif;
--wix-font-Page-title-style: normal;
--wix-font-Page-title-variant: normal;
--wix-font-Page-title-weight: normal;
--wix-font-Page-title-size: 50px;
--wix-font-Page-title-line-height: 1.4em;
--wix-font-Page-title-family: "playfair display",serif;
--wix-font-Page-title-text-decoration: none;
--wix-font-Heading-XL: normal normal normal 30px/1.4em "playfair display",serif;
--wix-font-Heading-XL-style: normal;
--wix-font-Heading-XL-variant: normal;
--wix-font-Heading-XL-weight: normal;
--wix-font-Heading-XL-size: 30px;
--wix-font-Heading-XL-line-height: 1.4em;
--wix-font-Heading-XL-family: "playfair display",serif;
--wix-font-Heading-XL-text-decoration: none;
--wix-font-Heading-L: normal normal normal 25px/1.4em "playfair display",serif;
--wix-font-Heading-L-style: normal;
--wix-font-Heading-L-variant: normal;
--wix-font-Heading-L-weight: normal;
--wix-font-Heading-L-size: 25px;
--wix-font-Heading-L-line-height: 1.4em;
--wix-font-Heading-L-family: "playfair display",serif;
--wix-font-Heading-L-text-decoration: none;
--wix-font-Heading-M: normal normal bold 25px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--wix-font-Heading-M-style: normal;
--wix-font-Heading-M-variant: normal;
--wix-font-Heading-M-weight: bold;
--wix-font-Heading-M-size: 25px;
--wix-font-Heading-M-line-height: 1.4em;
--wix-font-Heading-M-family: avenir-lt-w01_35-light1475496,sans-serif;
--wix-font-Heading-M-text-decoration: none;
--wix-font-Heading-S: normal normal normal 22px/1.4em proxima-n-w01-reg,sans-serif;
--wix-font-Heading-S-style: normal;
--wix-font-Heading-S-variant: normal;
--wix-font-Heading-S-weight: normal;
--wix-font-Heading-S-size: 22px;
--wix-font-Heading-S-line-height: 1.4em;
--wix-font-Heading-S-family: proxima-n-w01-reg,sans-serif;
--wix-font-Heading-S-text-decoration: none;
--wix-font-Body-L: normal normal normal 17px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--wix-font-Body-L-style: normal;
--wix-font-Body-L-variant: normal;
--wix-font-Body-L-weight: normal;
--wix-font-Body-L-size: 17px;
--wix-font-Body-L-line-height: 1.4em;
--wix-font-Body-L-family: avenir-lt-w01_35-light1475496,sans-serif;
--wix-font-Body-L-text-decoration: none;
--wix-font-Body-M: normal normal normal 18px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--wix-font-Body-M-style: normal;
--wix-font-Body-M-variant: normal;
--wix-font-Body-M-weight: normal;
--wix-font-Body-M-size: 18px;
--wix-font-Body-M-line-height: 1.4em;
--wix-font-Body-M-family: avenir-lt-w01_35-light1475496,sans-serif;
--wix-font-Body-M-text-decoration: none;
--wix-font-Body-S: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--wix-font-Body-S-style: normal;
--wix-font-Body-S-variant: normal;
--wix-font-Body-S-weight: normal;
--wix-font-Body-S-size: 14px;
--wix-font-Body-S-line-height: 1.4em;
--wix-font-Body-S-family: avenir-lt-w01_35-light1475496,sans-serif;
--wix-font-Body-S-text-decoration: none;
--wix-font-Body-XS: normal normal normal 12px/1.4em din-next-w01-light,sans-serif;
--wix-font-Body-XS-style: normal;
--wix-font-Body-XS-variant: normal;
--wix-font-Body-XS-weight: normal;
--wix-font-Body-XS-size: 12px;
--wix-font-Body-XS-line-height: 1.4em;
--wix-font-Body-XS-family: din-next-w01-light,sans-serif;
--wix-font-Body-XS-text-decoration: none;
--wix-font-LIGHT: normal normal normal 12px/1.4em HelveticaNeueW01-45Ligh;
--wix-font-LIGHT-style: normal;
--wix-font-LIGHT-variant: normal;
--wix-font-LIGHT-weight: normal;
--wix-font-LIGHT-size: 12px;
--wix-font-LIGHT-line-height: 1.4em;
--wix-font-LIGHT-family: HelveticaNeueW01-45Ligh;
--wix-font-LIGHT-text-decoration: none;
--wix-font-MEDIUM: normal normal normal 12px/1.4em HelveticaNeueW01-55Roma;
--wix-font-MEDIUM-style: normal;
--wix-font-MEDIUM-variant: normal;
--wix-font-MEDIUM-weight: normal;
--wix-font-MEDIUM-size: 12px;
--wix-font-MEDIUM-line-height: 1.4em;
--wix-font-MEDIUM-family: HelveticaNeueW01-55Roma;
--wix-font-MEDIUM-text-decoration: none;
--wix-font-STRONG: normal normal normal 12px/1.4em HelveticaNeueW01-65Medi;
--wix-font-STRONG-style: normal;
--wix-font-STRONG-variant: normal;
--wix-font-STRONG-weight: normal;
--wix-font-STRONG-size: 12px;
--wix-font-STRONG-line-height: 1.4em;
--wix-font-STRONG-family: HelveticaNeueW01-65Medi;
--wix-font-STRONG-text-decoration: none;
		}










#comp-jnlei10c{width:270px;height:auto;}#comp-jnlei10c{--min-height:56px;}#comp-jnlel6tk{--lnw:1px;--brd:var(--color_14);--alpha-brd:1;}#comp-jnlel6tk{width:981px;height:5px;}#comp-jnlel6tk{transform-origin:center 0.5px;}#comp-jnlencwp{width:251px;height:auto;}#comp-jnlf5nxk{width:498px;height:auto;}#comp-jnleunnx{--rd:0px;--shd:0 0 0 rgba(0, 0, 0, 0);--bg:var(--color_15);--alpha-bg:1;--brd:227,227,227;--alpha-brd:1;--brw:0px;}#comp-jnleunnx{width:635px;}[data-mesh-id=comp-jnleunnxinlineContent]{height:auto;width:635px;}[data-mesh-id=comp-jnleunnxinlineContent-gridContainer]{position:static;display:grid;height:auto;width:100%;min-height:auto;grid-template-rows:min-content 1fr;grid-template-columns:100%;}[data-mesh-id=comp-jnleunnxinlineContent-gridContainer] > [id="comp-jnleuonn"]{position:relative;margin:12px 0px 11px 0;left:14px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnleunnxinlineContent-gridContainer] > [id="comp-jnleuonb"]{position:relative;margin:12px 0px 11px 0;left:348px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnleunnxinlineContent-gridContainer] > [id="comp-jnleuon7"]{position:relative;margin:0px 0px 7px 0;left:191px;grid-area:2 / 1 / 3 / 2;justify-self:start;align-self:start;}#comp-jnleuonn{--errorTextColor:255,64,64;--alpha-errorTextColor:1;--errorTextFont:var(--font_8);--shd:none;--rd:4px 4px 4px 4px;--fnt:var(--font_7);--brw:1px;--bg:var(--color_15);--txt:var(--color_11);--alpha-txt:1;--brd:var(--color_11);--txt2:var(--color_12);--alpha-txt2:1;--brwh:1px;--bgh:var(--color_14);--brdh:var(--color_14);--brwf:1px;--bgf:var(--color_14);--brdf:var(--color_14);--brwe:1px;--bge:var(--color_14);--brde:255,64,64;--trns:opacity 0.5s ease 0s, border 0.5s ease 0s, color 0.5s ease 0s;--bgd:255,255,255;--txtd:219,219,219;--alpha-txtd:1;--brwd:1px;--brdd:219,219,219;--alpha-brdd:1;--fntlbl:var(--font_7);--txtlbl:var(--color_12);--alpha-txtlbl:1;--txtlblrq:0,0,0;--alpha-txtlblrq:0;--fntprefix:normal normal normal 16px/1.4em helvetica-w01-roman,helvetica-w02-roman,helvetica-lt-w10-roman,sans-serif;--alpha-bg:1;--alpha-bgd:1;--alpha-bge:1;--alpha-bgf:1;--alpha-bgh:1;--alpha-brd:1;--alpha-brde:1;--alpha-brdf:1;--alpha-brdh:1;--boxShadowToggleOn-shd:none;}#comp-jnleuonn{width:321px;height:56px;}#comp-jnleuonn{--fnt:normal normal normal 17px/1.4em avenir-lt-w01_35-light1475496,sans-serif;--fntlbl:normal normal normal 17px/1.4em avenir-lt-w01_35-light1475496,sans-serif;--direction:inherit;--align:start;--labelDirection:inherit;--inputDirection:inherit;--errorDirection:inherit;--requiredIndicationDisplay:none;--labelMarginBottom:14px;--textPadding:3px;--textPadding_start:19px;--textPadding_end:3px;--labelPadding_start:0px;--labelPadding_end:20px;height:auto;--inputHeight:56px;}#comp-jnleuonb{--rd:4px 4px 4px 4px;--trans1:border-color 0.4s ease 0s, background-color 0.4s ease 0s;--shd:none;--fnt:var(--font_8);--trans2:color 0.4s ease 0s;--txt:var(--color_11);--brw:1px;--bg:180,90,211;--brd:var(--color_11);--bgh:var(--color_18);--brdh:var(--color_12);--txth:var(--color_11);--bgd:204,204,204;--alpha-bgd:1;--brdd:204,204,204;--alpha-brdd:1;--txtd:255,255,255;--alpha-txtd:1;--alpha-bg:0;--alpha-bgh:1;--alpha-brd:1;--alpha-brdh:0;--alpha-txt:1;--alpha-txth:1;--boxShadowToggleOn-shd:none;}#comp-jnleuonb{width:162px;height:56px;}#comp-jnleuonb{--shc-mutated-brightness:90,45,106;--margin-start:0px;--margin-end:0px;--fnt:normal normal normal 18px/1.4em avenir-lt-w01_35-light1475496,sans-serif;--label-align:center;--label-text-align:center;}#comp-jnleuon7{width:321px;height:auto;}#comp-jnleovy6{width:165px;height:30px;}#comp-jnleovy6{--item-size:30px;--item-margin:0px 15px 0px 0px;--item-display:inline-block;width:165px;height:30px;}#comp-jnkfpusy{width:100%;left:0;margin-left:0;min-width:initial;height:287px;}#comp-jnlmlsag{left:0;margin-left:0;width:100%;min-width:980px;}[data-mesh-id=comp-jnlmlsbyinlineContent]{height:auto;width:100%;}[data-mesh-id=comp-jnlmlsbyinlineContent-gridContainer]{position:static;display:grid;height:auto;width:100%;min-height:auto;grid-template-rows:1fr;grid-template-columns:100%;}[data-mesh-id=comp-jnlmlsbyinlineContent-gridContainer] > [id="comp-jnleey72"]{position:relative;margin:24px 0px 25px calc((100% - 980px) * 0.5);left:33px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}#comp-jnlmlsag{--bg-overlay-color:transparent;--bg-gradient:none;--padding:0px;--margin:0px;min-width:980px;--firstChildMarginTop:-1px;--lastChildMarginBottom:-1px;--items-direction:row;}#comp-jnlmlsby{width:980px;}#comp-jnlmlsby{--bg-overlay-color:rgb(var(--color_18));--bg-gradient:none;width:100%;--column-width:980px;--column-flex:980;}#comp-jnleey72{width:720px;height:auto;}#comp-jnleey72{--min-height:16px;}#PAGES_CONTAINER{left:0;margin-left:0;width:100%;min-width:0;}#SITE_PAGES{left:0;margin-left:0;width:100%;min-width:0;}#SITE_PAGES{--transition-duration:700ms;}#comp-jnlfh3q2{--menuTotalBordersX:0px;--menuTotalBordersY:0px;--bgDrop:var(--color_36);--rd:0px;--shd:none;--fnt:normal normal 700 16px/1.4em avenir-lt-w01_85-heavy1475544,avenir-lt-w05_85-heavy,sans-serif;--pad:5px;--txt:var(--color_36);--trans:color 0.4s ease 0s;--txth:var(--color_42);--txts:var(--color_42);--alpha-bgDrop:0;--alpha-txt:1;--alpha-txth:1;--alpha-txts:1;--boxShadowToggleOn-shd:none;}#comp-jnlfh3q2{width:741px;height:50px;}#comp-jnlfh3q2{--menuTotalBordersY:0px;--menuTotalBordersX:0px;}#comp-jnn3udz3{width:216px;height:auto;}#comp-jnn3udz3{--min-height:42px;}#comp-jnn87ivp{width:94px;height:94px;}#comp-jnmtd6qs{width:149px;height:92px;}.comp-jnmtd6qs {
				--wix-direction: ltr;
--imageGridPosition: 5;
--widgetLayout: 2;
--imageScaling: 2;
--alignment: 2;
--dateMarginBottom: 62;
--buttonsStyle: 1;
--rsvpMarginBottom: 0;
--cardsPerRow: 3;
--descriptionMarginBottom: 42;
--listLayout: 3;
--verticalImagePosition: 1;
--dateAndLocationMarginBottom: 54;
--imagePosition: 2;
--countdownMarginBottom: 60;
--imageWidth: 50;
--listAlignment: 2;
--roundedButtonsBorderRadius: 100;
--listImageLayout: 1;
--oneButtonWidth: 142;
--imageRatio: 1;
--widgetType: 1;
--buttonHeight: 92;
--titleMarginBottom: 68;
--contentAlignment: 2;
--locationMarginBottom: 62;
--buttonsBorderRadius: 0;
--cardLocationAndDateFontSize: 16;
--cardDescriptionFontSize: 15;
--listHeaderTitleFontSizeCompactMobile: 16;
--listDateFontSizeCompactMobile: 14;
--listLocationFontSizeCompactMobile: 14;
--listHeaderTitleFontSizeMobile: 20;
--listDateFontSizeMobile: 16;
--listContentTextFontSizeMobile: 16;
--listGeneralTitleFontSizeMobile: 28;
--mobileListLayout: 1;
--listButtonFontSizeMobile: 16;
--listButtonFontSizeCompactMobile: 14;
--cardBorderWidth: 1;
--borderWidth: 0;
--todayButtonBorderWidth: 1;
--todayButtonBorderRadius: 0;
--listRoundedButtonBorderRadius: 100;
--listBorderWidth: 0;
--calendarCellBorderWidth: 1;
--calendarBorderWidth: 0;
--buttonsBorderWidth: 1;
--todayRoundedButtonBorderRadius: 100;
--listButtonBorderRadius: 0;
--listButtonBorderWidth: 1;
--calendarDetailsTitleTextSize: 16;
--calendarDetailsDateLocationTextSize: 14;
--calendarDetailsDescriptionTextSize: 14;
--multiImageScaling: 2;
--locationAndDateFormat: 1;
--listLocationAndDateFormat: 1;
--cardLocationAndDateFormat: 1;
--verticalDividerWidth: 1;
--verticalDividerHeight: 94;
--horizontalDividerWidth: 20;
--horizontalDividerHeight: 1;
--compactHorizontalDividerWidth: 36;
--compactHorizontalDividerHeight: 1;
--imageOpacity: 70;
--listButtonStyle: 1;
--cardMargins: 20;
--sideBySideLayoutMargins: 30;
--listImageOpacity: 100;
--listImageWidth: 50;
--listDividerWidth: 1;
--listStripWidth: 20;
--calendarWeekStartDay: 1;
--calendarListTextSize: 14;
--calendarListDividerWidth: 1;
--todayButtonStyle: 2;
--listContentTextFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--cardDescriptionFont: normal normal normal 16px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--calendarMonthFont: normal normal normal 18px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--calendarWeekdaysFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--calendarDayNumberFont: normal normal normal 24px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--calendarCellEventNameFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--todayHollowButtonFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--todayButtonFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--ribbonFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--soldOutRibbonFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--rsvpClosedRibbonFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--joinWaitlistRibbonFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--membershipRibbonFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--recurringRibbonFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--compactTextsFont: normal normal normal 24px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--eventDescriptionFontV2: normal normal normal 16px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--listImageBackgroundColor: 144,19,254;
--listImageBackgroundColor-rgb: 144,19,254;
--listImageBackgroundColor-opacity: 1;
--backgroundColor: 255,255,255;
--backgroundColor-rgb: 255,255,255;
--backgroundColor-opacity: 1;
--cardBackgroundColor: 255,255,255;
--cardBackgroundColor-rgb: 255,255,255;
--cardBackgroundColor-opacity: 1;
--listGeneralTitleColor: 12,29,57;
--listGeneralTitleColor-rgb: 12,29,57;
--listGeneralTitleColor-opacity: 1;
--textsColor: 12,29,57;
--textsColor-rgb: 12,29,57;
--textsColor-opacity: 1;
--cardBorderColor: 201,209,222;
--cardBorderColor-rgb: 201,209,222;
--cardBorderColor-opacity: 1;
--labelsColor: 12,29,57;
--labelsColor-rgb: 12,29,57;
--labelsColor-opacity: 1;
--listButtonBorderColor: 144,19,254;
--listButtonBorderColor-rgb: 144,19,254;
--listButtonBorderColor-opacity: 1;
--listHeaderTitleColor: 12,29,57;
--listHeaderTitleColor-rgb: 12,29,57;
--listHeaderTitleColor-opacity: 1;
--buttonsBorderColor: 144,19,254,0;
--buttonsBorderColor-rgb: 144,19,254;
--buttonsBorderColor-opacity: 0;
--buttonsBackgroundColor: 144,19,254;
--buttonsBackgroundColor-rgb: 144,19,254;
--buttonsBackgroundColor-opacity: 1;
--imageBackgroundColor: 12,29,57;
--imageBackgroundColor-rgb: 12,29,57;
--imageBackgroundColor-opacity: 1;
--dividerColor: 12,29,57;
--dividerColor-rgb: 12,29,57;
--dividerColor-opacity: 1;
--descriptionColor: 12,29,57;
--descriptionColor-rgb: 12,29,57;
--descriptionColor-opacity: 1;
--fullButtonsFontColor: 255,255,255;
--fullButtonsFontColor-rgb: 255,255,255;
--fullButtonsFontColor-opacity: 1;
--hollowButtonsFontColor: 12,29,57;
--hollowButtonsFontColor-rgb: 12,29,57;
--hollowButtonsFontColor-opacity: 1;
--borderColor: 201,209,222;
--borderColor-rgb: 201,209,222;
--borderColor-opacity: 1;
--listFullButtonFontColor: 255,255,255;
--listFullButtonFontColor-rgb: 255,255,255;
--listFullButtonFontColor-opacity: 1;
--listHollowButtonFontColor: 144,19,254;
--listHollowButtonFontColor-rgb: 144,19,254;
--listHollowButtonFontColor-opacity: 1;
--titleColor: 12,29,57;
--titleColor-rgb: 12,29,57;
--titleColor-opacity: 1;
--countdownColor: 12,29,57;
--countdownColor-rgb: 12,29,57;
--countdownColor-opacity: 1;
--cardsBackgroundColor: 255,255,255,0;
--cardsBackgroundColor-rgb: 255,255,255;
--cardsBackgroundColor-opacity: 0;
--listButtonBackgroundColor: 144,19,254;
--listButtonBackgroundColor-rgb: 144,19,254;
--listButtonBackgroundColor-opacity: 1;
--listContentTitleColor: 144,19,254;
--listContentTitleColor-rgb: 144,19,254;
--listContentTitleColor-opacity: 1;
--listHeaderDateTimeColor: 12,29,57;
--listHeaderDateTimeColor-rgb: 12,29,57;
--listHeaderDateTimeColor-opacity: 1;
--listContentTextColor: 12,29,57;
--listContentTextColor-rgb: 12,29,57;
--listContentTextColor-opacity: 1;
--listHeaderLocationColor: 12,29,57;
--listHeaderLocationColor-rgb: 12,29,57;
--listHeaderLocationColor-opacity: 1;
--calendarCellBackground: 255,255,255;
--calendarCellBackground-rgb: 255,255,255;
--calendarCellBackground-opacity: 1;
--calendarBorderColor: 201,209,222;
--calendarBorderColor-rgb: 201,209,222;
--calendarBorderColor-opacity: 1;
--calendarMainActiveColor: 144,19,254;
--calendarMainActiveColor-rgb: 144,19,254;
--calendarMainActiveColor-opacity: 1;
--calendarMonthColor: 12,29,57;
--calendarMonthColor-rgb: 12,29,57;
--calendarMonthColor-opacity: 1;
--calendarWeekdaysColor: 12,29,57;
--calendarWeekdaysColor-rgb: 12,29,57;
--calendarWeekdaysColor-opacity: 1;
--calendarDayNumberColor: 12,29,57;
--calendarDayNumberColor-rgb: 12,29,57;
--calendarDayNumberColor-opacity: 1;
--calendarCellEventNameColor: 12,29,57;
--calendarCellEventNameColor-rgb: 12,29,57;
--calendarCellEventNameColor-opacity: 1;
--todayHollowButtonColor: 144,19,254;
--todayHollowButtonColor-rgb: 144,19,254;
--todayHollowButtonColor-opacity: 1;
--todayButtonColor: 255,255,255;
--todayButtonColor-rgb: 255,255,255;
--todayButtonColor-opacity: 1;
--ribbonTextColor: 255,255,255;
--ribbonTextColor-rgb: 255,255,255;
--ribbonTextColor-opacity: 1;
--soldOutRibbonTextColor: 255,255,255;
--soldOutRibbonTextColor-rgb: 255,255,255;
--soldOutRibbonTextColor-opacity: 1;
--rsvpClosedRibbonTextColor: 255,255,255;
--rsvpClosedRibbonTextColor-rgb: 255,255,255;
--rsvpClosedRibbonTextColor-opacity: 1;
--joinWaitlistRibbonTextColor: 255,255,255;
--joinWaitlistRibbonTextColor-rgb: 255,255,255;
--joinWaitlistRibbonTextColor-opacity: 1;
--membershipRibbonTextColor: 12,29,57;
--membershipRibbonTextColor-rgb: 12,29,57;
--membershipRibbonTextColor-opacity: 1;
--recurringRibbonTextColor: 12,29,57;
--recurringRibbonTextColor-rgb: 12,29,57;
--recurringRibbonTextColor-opacity: 1;
--onImageHollowButtonsFontColor: 255,255,255;
--onImageHollowButtonsFontColor-rgb: 255,255,255;
--onImageHollowButtonsFontColor-opacity: 1;
--onImageFullButtonsFontColor: 12,29,57;
--onImageFullButtonsFontColor-rgb: 12,29,57;
--onImageFullButtonsFontColor-opacity: 1;
--onImageCountdownColor: 255,255,255;
--onImageCountdownColor-rgb: 255,255,255;
--onImageCountdownColor-opacity: 1;
--onImageTitleColor: 255,255,255;
--onImageTitleColor-rgb: 255,255,255;
--onImageTitleColor-opacity: 1;
--onImageDescriptionColor: 255,255,255;
--onImageDescriptionColor-rgb: 255,255,255;
--onImageDescriptionColor-opacity: 1;
--onImageLabelsColor: 255,255,255;
--onImageLabelsColor-rgb: 255,255,255;
--onImageLabelsColor-opacity: 1;
--onImageTextsColor: 255,255,255;
--onImageTextsColor-rgb: 255,255,255;
--onImageTextsColor-opacity: 1;
--calendarCellBorderColor: 201,209,222;
--calendarCellBorderColor-rgb: 201,209,222;
--calendarCellBorderColor-opacity: 1;
--calendarPastDaysBackground: 201,209,222,0.1;
--calendarPastDaysBackground-rgb: 201,209,222;
--calendarPastDaysBackground-opacity: 0.1;
--todayButtonBackgroundColor: 144,19,254;
--todayButtonBackgroundColor-rgb: 144,19,254;
--todayButtonBackgroundColor-opacity: 1;
--todayButtonBorderColor: 144,19,254;
--todayButtonBorderColor-rgb: 144,19,254;
--todayButtonBorderColor-opacity: 1;
--ribbonBackgroundColor: 246,77,67;
--ribbonBackgroundColor-rgb: 246,77,67;
--ribbonBackgroundColor-opacity: 1;
--listBackgroundColor: 255,255,255;
--listBackgroundColor-rgb: 255,255,255;
--listBackgroundColor-opacity: 1;
--listBorderColor: 201,209,222;
--listBorderColor-rgb: 201,209,222;
--listBorderColor-opacity: 1;
--listDividerColor: 201,209,222;
--listDividerColor-rgb: 201,209,222;
--listDividerColor-opacity: 1;
--soldOutRibbonBackgroundColor: 246,77,67;
--soldOutRibbonBackgroundColor-rgb: 246,77,67;
--soldOutRibbonBackgroundColor-opacity: 1;
--rsvpClosedRibbonBackgroundColor: 246,77,67;
--rsvpClosedRibbonBackgroundColor-rgb: 246,77,67;
--rsvpClosedRibbonBackgroundColor-opacity: 1;
--joinWaitlistRibbonBackgroundColor: 246,77,67;
--joinWaitlistRibbonBackgroundColor-rgb: 246,77,67;
--joinWaitlistRibbonBackgroundColor-opacity: 1;
--membershipRibbonBorderColor: 12,29,57;
--membershipRibbonBorderColor-rgb: 12,29,57;
--membershipRibbonBorderColor-opacity: 1;
--recurringRibbonBorderColor: 12,29,57;
--recurringRibbonBorderColor-rgb: 12,29,57;
--recurringRibbonBorderColor-opacity: 1;
--onImageButtonsBorderColor: 255,255,255;
--onImageButtonsBorderColor-rgb: 255,255,255;
--onImageButtonsBorderColor-opacity: 1;
--onImageButtonsBackgroundColor: 255,255,255;
--onImageButtonsBackgroundColor-rgb: 255,255,255;
--onImageButtonsBackgroundColor-opacity: 1;
--onImageDividerColor: 255,255,255;
--onImageDividerColor-rgb: 255,255,255;
--onImageDividerColor-opacity: 1;
--calendarBackgroundColor: 255,255,255,0;
--calendarBackgroundColor-rgb: 255,255,255;
--calendarBackgroundColor-opacity: 0;
--listLoadMoreContainerBackgroundColor: var(--cardBackgroundColor);
--listLoadMoreContainerBackgroundColor-rgb: var(--cardBackgroundColor-rgb);
--listLoadMoreContainerBackgroundColor-opacity: var(--cardBackgroundColor-opacity);
--eventTitleColorV2: 12,29,57;
--eventTitleColorV2-rgb: 12,29,57;
--eventTitleColorV2-opacity: 1;
--eventDateColorV2: 12,29,57;
--eventDateColorV2-rgb: 12,29,57;
--eventDateColorV2-opacity: 1;
--eventLocationColorV2: 12,29,57;
--eventLocationColorV2-rgb: 12,29,57;
--eventLocationColorV2-opacity: 1;
--eventDescriptionColorV2: 12,29,57;
--eventDescriptionColorV2-rgb: 12,29,57;
--eventDescriptionColorV2-opacity: 1;
--linkColorV2: 12,29,57;
--linkColorV2-rgb: 12,29,57;
--linkColorV2-opacity: 1;
--shareIconsColorV2: 12,29,57;
--shareIconsColorV2-rgb: 12,29,57;
--shareIconsColorV2-opacity: 1;
--hoveredEventTitleColorV2: 12,29,57;
--hoveredEventTitleColorV2-rgb: 12,29,57;
--hoveredEventTitleColorV2-opacity: 1;
--hoveredEventDateColorV2: 12,29,57;
--hoveredEventDateColorV2-rgb: 12,29,57;
--hoveredEventDateColorV2-opacity: 1;
--hoveredEventLocationColorV2: 12,29,57;
--hoveredEventLocationColorV2-rgb: 12,29,57;
--hoveredEventLocationColorV2-opacity: 1;
--hoveredEventDescriptionColor: 12,29,57;
--hoveredEventDescriptionColor-rgb: 12,29,57;
--hoveredEventDescriptionColor-opacity: 1;
--listHeaderLocationFont: normal normal normal 16/20px avenir-lt-w01_35-light1475496,sans-serif;
--listHeaderLocationFont-style: normal;
--listHeaderLocationFont-variant: normal;
--listHeaderLocationFont-weight: normal;
--listHeaderLocationFont-size: 16;
--listHeaderLocationFont-line-height: 20px;
--listHeaderLocationFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--listHeaderLocationFont-text-decoration: none;
--descriptionFont: normal normal normal 15/18px avenir-lt-w01_35-light1475496,sans-serif;
--descriptionFont-style: normal;
--descriptionFont-variant: normal;
--descriptionFont-weight: normal;
--descriptionFont-size: 15;
--descriptionFont-line-height: 18px;
--descriptionFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--descriptionFont-text-decoration: none;
--listGeneralTitleFont: normal normal normal 36/45px proxima-n-w01-reg,sans-serif;
--listGeneralTitleFont-style: normal;
--listGeneralTitleFont-variant: normal;
--listGeneralTitleFont-weight: normal;
--listGeneralTitleFont-size: 36;
--listGeneralTitleFont-line-height: 45px;
--listGeneralTitleFont-family: proxima-n-w01-reg,sans-serif;
--listGeneralTitleFont-text-decoration: none;
--countdownFont: normal normal normal 20/25px avenir-lt-w01_35-light1475496,sans-serif;
--countdownFont-style: normal;
--countdownFont-variant: normal;
--countdownFont-weight: normal;
--countdownFont-size: 20;
--countdownFont-line-height: 25px;
--countdownFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--countdownFont-text-decoration: none;
--listHollowButtonFont: normal normal normal 16/20px avenir-lt-w01_35-light1475496,sans-serif;
--listHollowButtonFont-style: normal;
--listHollowButtonFont-variant: normal;
--listHollowButtonFont-weight: normal;
--listHollowButtonFont-size: 16;
--listHollowButtonFont-line-height: 20px;
--listHollowButtonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--listHollowButtonFont-text-decoration: none;
--hollowButtonsFont: normal normal normal 16/20px avenir-lt-w01_35-light1475496,sans-serif;
--hollowButtonsFont-style: normal;
--hollowButtonsFont-variant: normal;
--hollowButtonsFont-weight: normal;
--hollowButtonsFont-size: 16;
--hollowButtonsFont-line-height: 20px;
--hollowButtonsFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--hollowButtonsFont-text-decoration: none;
--labelsFont: normal normal normal 16/20px avenir-lt-w01_35-light1475496,sans-serif;
--labelsFont-style: normal;
--labelsFont-variant: normal;
--labelsFont-weight: normal;
--labelsFont-size: 16;
--labelsFont-line-height: 20px;
--labelsFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--labelsFont-text-decoration: none;
--listHeaderTitleFont: normal normal normal 26/32px avenir-lt-w01_35-light1475496,sans-serif;
--listHeaderTitleFont-style: normal;
--listHeaderTitleFont-variant: normal;
--listHeaderTitleFont-weight: normal;
--listHeaderTitleFont-size: 26;
--listHeaderTitleFont-line-height: 32px;
--listHeaderTitleFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--listHeaderTitleFont-text-decoration: none;
--listFullButtonFont: normal normal normal 16/20px avenir-lt-w01_35-light1475496,sans-serif;
--listFullButtonFont-style: normal;
--listFullButtonFont-variant: normal;
--listFullButtonFont-weight: normal;
--listFullButtonFont-size: 16;
--listFullButtonFont-line-height: 20px;
--listFullButtonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--listFullButtonFont-text-decoration: none;
--fullButtonsFont: normal normal normal 16/20px avenir-lt-w01_85-heavy1475544,sans-serif;
--fullButtonsFont-style: normal;
--fullButtonsFont-variant: normal;
--fullButtonsFont-weight: normal;
--fullButtonsFont-size: 16;
--fullButtonsFont-line-height: 20px;
--fullButtonsFont-family: avenir-lt-w01_85-heavy1475544,sans-serif;
--fullButtonsFont-text-decoration: none;
--titleFont: normal normal normal 46/57px "playfair display",serif;
--titleFont-style: normal;
--titleFont-variant: normal;
--titleFont-weight: normal;
--titleFont-size: 46;
--titleFont-line-height: 57px;
--titleFont-family: "playfair display",serif;
--titleFont-text-decoration: none;
--textsFont: normal normal normal 15/18px avenir-lt-w01_35-light1475496,sans-serif;
--textsFont-style: normal;
--textsFont-variant: normal;
--textsFont-weight: normal;
--textsFont-size: 15;
--textsFont-line-height: 18px;
--textsFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--textsFont-text-decoration: none;
--listHeaderDateTimeFont: normal normal normal 16px/32px avenir-lt-w01_35-light1475496,sans-serif;
--listHeaderDateTimeFont-style: normal;
--listHeaderDateTimeFont-variant: normal;
--listHeaderDateTimeFont-weight: normal;
--listHeaderDateTimeFont-size: 16px;
--listHeaderDateTimeFont-line-height: 32px;
--listHeaderDateTimeFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--listHeaderDateTimeFont-text-decoration: none;
--listContentTextFont-style: normal;
--listContentTextFont-variant: normal;
--listContentTextFont-weight: normal;
--listContentTextFont-size: 14px;
--listContentTextFont-line-height: 1.4em;
--listContentTextFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--listContentTextFont-text-decoration: none;
--cardDescriptionFont-style: normal;
--cardDescriptionFont-variant: normal;
--cardDescriptionFont-weight: normal;
--cardDescriptionFont-size: 16px;
--cardDescriptionFont-line-height: 1.4em;
--cardDescriptionFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--cardDescriptionFont-text-decoration: none;
--calendarMonthFont-style: normal;
--calendarMonthFont-variant: normal;
--calendarMonthFont-weight: normal;
--calendarMonthFont-size: 18px;
--calendarMonthFont-line-height: 1.4em;
--calendarMonthFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--calendarMonthFont-text-decoration: none;
--calendarWeekdaysFont-style: normal;
--calendarWeekdaysFont-variant: normal;
--calendarWeekdaysFont-weight: normal;
--calendarWeekdaysFont-size: 14px;
--calendarWeekdaysFont-line-height: 1.4em;
--calendarWeekdaysFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--calendarWeekdaysFont-text-decoration: none;
--calendarDayNumberFont-style: normal;
--calendarDayNumberFont-variant: normal;
--calendarDayNumberFont-weight: normal;
--calendarDayNumberFont-size: 24px;
--calendarDayNumberFont-line-height: 1.4em;
--calendarDayNumberFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--calendarDayNumberFont-text-decoration: none;
--calendarCellEventNameFont-style: normal;
--calendarCellEventNameFont-variant: normal;
--calendarCellEventNameFont-weight: normal;
--calendarCellEventNameFont-size: 14px;
--calendarCellEventNameFont-line-height: 1.4em;
--calendarCellEventNameFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--calendarCellEventNameFont-text-decoration: none;
--todayHollowButtonFont-style: normal;
--todayHollowButtonFont-variant: normal;
--todayHollowButtonFont-weight: normal;
--todayHollowButtonFont-size: 14px;
--todayHollowButtonFont-line-height: 1.4em;
--todayHollowButtonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--todayHollowButtonFont-text-decoration: none;
--todayButtonFont-style: normal;
--todayButtonFont-variant: normal;
--todayButtonFont-weight: normal;
--todayButtonFont-size: 14px;
--todayButtonFont-line-height: 1.4em;
--todayButtonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--todayButtonFont-text-decoration: none;
--ribbonFont-style: normal;
--ribbonFont-variant: normal;
--ribbonFont-weight: normal;
--ribbonFont-size: 14px;
--ribbonFont-line-height: 1.4em;
--ribbonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--ribbonFont-text-decoration: none;
--soldOutRibbonFont-style: normal;
--soldOutRibbonFont-variant: normal;
--soldOutRibbonFont-weight: normal;
--soldOutRibbonFont-size: 14px;
--soldOutRibbonFont-line-height: 1.4em;
--soldOutRibbonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--soldOutRibbonFont-text-decoration: none;
--rsvpClosedRibbonFont-style: normal;
--rsvpClosedRibbonFont-variant: normal;
--rsvpClosedRibbonFont-weight: normal;
--rsvpClosedRibbonFont-size: 14px;
--rsvpClosedRibbonFont-line-height: 1.4em;
--rsvpClosedRibbonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--rsvpClosedRibbonFont-text-decoration: none;
--joinWaitlistRibbonFont-style: normal;
--joinWaitlistRibbonFont-variant: normal;
--joinWaitlistRibbonFont-weight: normal;
--joinWaitlistRibbonFont-size: 14px;
--joinWaitlistRibbonFont-line-height: 1.4em;
--joinWaitlistRibbonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--joinWaitlistRibbonFont-text-decoration: none;
--membershipRibbonFont-style: normal;
--membershipRibbonFont-variant: normal;
--membershipRibbonFont-weight: normal;
--membershipRibbonFont-size: 14px;
--membershipRibbonFont-line-height: 1.4em;
--membershipRibbonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--membershipRibbonFont-text-decoration: none;
--recurringRibbonFont-style: normal;
--recurringRibbonFont-variant: normal;
--recurringRibbonFont-weight: normal;
--recurringRibbonFont-size: 14px;
--recurringRibbonFont-line-height: 1.4em;
--recurringRibbonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--recurringRibbonFont-text-decoration: none;
--compactTextsFont-style: normal;
--compactTextsFont-variant: normal;
--compactTextsFont-weight: normal;
--compactTextsFont-size: 24px;
--compactTextsFont-line-height: 1.4em;
--compactTextsFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--compactTextsFont-text-decoration: none;
--listTitleFontV2: normal normal normal 36/45px proxima-n-w01-reg,sans-serif;
--listTitleFontV2-style: normal;
--listTitleFontV2-variant: normal;
--listTitleFontV2-weight: normal;
--listTitleFontV2-size: 36;
--listTitleFontV2-line-height: 45px;
--listTitleFontV2-family: proxima-n-w01-reg,sans-serif;
--listTitleFontV2-text-decoration: none;
--eventTitleFontV2: normal normal normal 26/32px avenir-lt-w01_35-light1475496,sans-serif;
--eventTitleFontV2-style: normal;
--eventTitleFontV2-variant: normal;
--eventTitleFontV2-weight: normal;
--eventTitleFontV2-size: 26;
--eventTitleFontV2-line-height: 32px;
--eventTitleFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--eventTitleFontV2-text-decoration: none;
--eventDateFontV2: normal normal normal 16/20px avenir-lt-w01_35-light1475496,sans-serif;
--eventDateFontV2-style: normal;
--eventDateFontV2-variant: normal;
--eventDateFontV2-weight: normal;
--eventDateFontV2-size: 16;
--eventDateFontV2-line-height: 20px;
--eventDateFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--eventDateFontV2-text-decoration: none;
--eventLocationFontV2: normal normal normal 16/20px avenir-lt-w01_35-light1475496,sans-serif;
--eventLocationFontV2-style: normal;
--eventLocationFontV2-variant: normal;
--eventLocationFontV2-weight: normal;
--eventLocationFontV2-size: 16;
--eventLocationFontV2-line-height: 20px;
--eventLocationFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--eventLocationFontV2-text-decoration: none;
--eventDescriptionFontV2-style: normal;
--eventDescriptionFontV2-variant: normal;
--eventDescriptionFontV2-weight: normal;
--eventDescriptionFontV2-size: 16px;
--eventDescriptionFontV2-line-height: 1.4em;
--eventDescriptionFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--eventDescriptionFontV2-text-decoration: none;
--linkFontV2: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--linkFontV2-style: normal;
--linkFontV2-variant: normal;
--linkFontV2-weight: normal;
--linkFontV2-size: 14px;
--linkFontV2-line-height: 1.4em;
--linkFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--linkFontV2-text-decoration: underline;
--listFullButtonFontV2: normal normal normal 16/20px avenir-lt-w01_35-light1475496,sans-serif;
--listFullButtonFontV2-style: normal;
--listFullButtonFontV2-variant: normal;
--listFullButtonFontV2-weight: normal;
--listFullButtonFontV2-size: 16;
--listFullButtonFontV2-line-height: 20px;
--listFullButtonFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--listFullButtonFontV2-text-decoration: none;
--listHollowButtonFontV2: normal normal normal 16/20px avenir-lt-w01_35-light1475496,sans-serif;
--listHollowButtonFontV2-style: normal;
--listHollowButtonFontV2-variant: normal;
--listHollowButtonFontV2-weight: normal;
--listHollowButtonFontV2-size: 16;
--listHollowButtonFontV2-line-height: 20px;
--listHollowButtonFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--listHollowButtonFontV2-text-decoration: none;
--hoveredEventTitleFontV2: normal normal normal 26/32px avenir-lt-w01_35-light1475496,sans-serif;
--hoveredEventTitleFontV2-style: normal;
--hoveredEventTitleFontV2-variant: normal;
--hoveredEventTitleFontV2-weight: normal;
--hoveredEventTitleFontV2-size: 26;
--hoveredEventTitleFontV2-line-height: 32px;
--hoveredEventTitleFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--hoveredEventTitleFontV2-text-decoration: none;
--hoveredEventDateFontV2: normal normal normal 16px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--hoveredEventDateFontV2-style: normal;
--hoveredEventDateFontV2-variant: normal;
--hoveredEventDateFontV2-weight: normal;
--hoveredEventDateFontV2-size: 16px;
--hoveredEventDateFontV2-line-height: 1.4em;
--hoveredEventDateFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--hoveredEventDateFontV2-text-decoration: none;
--hoveredEventLocationFontV2: normal normal normal 16px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--hoveredEventLocationFontV2-style: normal;
--hoveredEventLocationFontV2-variant: normal;
--hoveredEventLocationFontV2-weight: normal;
--hoveredEventLocationFontV2-size: 16px;
--hoveredEventLocationFontV2-line-height: 1.4em;
--hoveredEventLocationFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--hoveredEventLocationFontV2-text-decoration: none;
--hoveredEventDescriptionFontV2: normal normal normal 15px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--hoveredEventDescriptionFontV2-style: normal;
--hoveredEventDescriptionFontV2-variant: normal;
--hoveredEventDescriptionFontV2-weight: normal;
--hoveredEventDescriptionFontV2-size: 15px;
--hoveredEventDescriptionFontV2-line-height: 1.4em;
--hoveredEventDescriptionFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--hoveredEventDescriptionFontV2-text-decoration: none;
--CARD_MAX_WIDTH: 700;
--CARD_MIN_WIDTH: 200;
--listMainTitleVisibility: block;
--listFullDateVisibility: block;
--listLocationVisibility: block;
--listVenueNameVisibility: block;
--listDateVisibility: block;
--listImageVisibility: block;
--listDescriptionVisibility: block;
--listSocialBarVisibility: none;
--listMembersVisibility: block;
--listSocialBarVisibilityFlex: none;
--listShortDateLocationDividerVisibility: initial;
--listShortDateLocationAlignment: center;
--listShortDateLocationDateWidth: 80%;
--listTextAlignment: center;
--listImageAspectRatio: 100;
--listImageIsSquare: 1;
--listAdditionalInfoVisibility: block;
--listAdditionalInfoVisibilityArrow: inline-flex;
--isListTextAlignmentLeft: 0;
--isListTextAlignmentRight: 0;
--sideBySideRibbonLeftMargin: auto;
--sideBySideRibbonRightMargin: auto;
--sideBySideImageDirectionEven: row;
--sideBySideImageDirectionOdd: row;
--sideBySideMinimumItemWidth: 480px;
--sideBySideTitleBottomMargin: 0.5em;
--sideBySideFullDateLocationBottomMargin: 30px;
--sideBySideShortDateLocationVisibility: block;
--sideBySideFullDateLocationVisibility: none;
--cardShortDateLocationVisibility: block;
--cardFullDateLocationVisibility: none;
--cardHoveredFullDateLocationVisibility: block;
--listLayoutTitleLocationVisibility: block;
--listLayoutTitleLocationTitleWidth: 90%;
--multiContainImageVisibility: none;
--multiCoverImageVisibility: flex;
--singleContainImageVisibility: none;
--singleCoverImageVisibility: flex;
--calendarEventTitleLineClamp: 2;
--eventSpacing: 30;
--singleButtonFont: var(--fullButtonsFont);
--singleButtonFont-text-decoration: var(--fullButtonsFont-text-decoration);
--singleButtonFont-line-height: var(--fullButtonsFont-line-height);
--singleButtonFont-family: var(--fullButtonsFont-family);
--singleButtonFont-style: var(--fullButtonsFont-style);
--singleButtonFont-size: var(--fullButtonsFont-size);
--singleButtonFont-variant: var(--fullButtonsFont-variant);
--singleButtonFont-weight: var(--fullButtonsFont-weight);
--singleButtonColor: var(--fullButtonsFontColor);
--singleButtonColor-rgb: var(--fullButtonsFontColor-rgb);
--singleButtonColor-opacity: var(--fullButtonsFontColor-opacity);
--singleOnImageButtonColor: var(--onImageFullButtonsFontColor);
--singleOnImageButtonColor-rgb: var(--onImageFullButtonsFontColor-rgb);
--singleOnImageButtonColor-opacity: var(--onImageFullButtonsFontColor-opacity);
--singleButtonBackgroundColor: var(--buttonsBackgroundColor);
--singleButtonBackgroundColor-rgb: var(--buttonsBackgroundColor-rgb);
--singleButtonBackgroundColor-opacity: var(--buttonsBackgroundColor-opacity);
--singleOnImageButtonBackgroundColor: var(--onImageButtonsBackgroundColor);
--singleOnImageButtonBackgroundColor-rgb: var(--onImageButtonsBackgroundColor-rgb);
--singleOnImageButtonBackgroundColor-opacity: var(--onImageButtonsBackgroundColor-opacity);
--singleButtonBorderColor: 0, 0, 0, 0;
--singleButtonBorderColor-rgb: 0, 0, 0;
--singleButtonBorderColor-opacity: 0;
--singleOnImageButtonBorderColor: 0, 0, 0, 0;
--singleOnImageButtonBorderColor-rgb: 0, 0, 0;
--singleOnImageButtonBorderColor-opacity: 0;
--singleButtonBorderWidth: 0;
--singleButtonBorderRadius: var(--buttonsBorderRadius);
--multiButtonFont: var(--listFullButtonFontV2);
--multiButtonFont-text-decoration: var(--listFullButtonFontV2-text-decoration);
--multiButtonFont-line-height: var(--listFullButtonFontV2-line-height);
--multiButtonFont-family: var(--listFullButtonFontV2-family);
--multiButtonFont-style: var(--listFullButtonFontV2-style);
--multiButtonFont-size: var(--listFullButtonFontV2-size);
--multiButtonFont-variant: var(--listFullButtonFontV2-variant);
--multiButtonFont-weight: var(--listFullButtonFontV2-weight);
--multiButtonColor: var(--listFullButtonFontColor);
--multiButtonColor-rgb: var(--listFullButtonFontColor-rgb);
--multiButtonColor-opacity: var(--listFullButtonFontColor-opacity);
--multiButtonBackgroundColor: var(--listButtonBackgroundColor);
--multiButtonBackgroundColor-rgb: var(--listButtonBackgroundColor-rgb);
--multiButtonBackgroundColor-opacity: var(--listButtonBackgroundColor-opacity);
--multiButtonBorderColor: 0, 0, 0, 0;
--multiButtonBorderColor-rgb: 0, 0, 0;
--multiButtonBorderColor-opacity: 0;
--multiButtonBorderWidth: 0;
--multiButtonBorderRadius: var(--listButtonBorderRadius);
--listLoadMoreContainerBorderColor: 0, 0, 0, 0;
--listLoadMoreContainerBorderColor-rgb: 0, 0, 0;
--listLoadMoreContainerBorderColor-opacity: 0;
--listLoadMoreContainerBorderWidth: 0;
--listLoadMoreMobileFontSize: var(--listButtonFontSizeMobile);
--todayButtonResolvedFont: var(--todayHollowButtonFont);
--todayButtonResolvedFont-text-decoration: var(--todayHollowButtonFont-text-decoration);
--todayButtonResolvedFont-line-height: var(--todayHollowButtonFont-line-height);
--todayButtonResolvedFont-family: var(--todayHollowButtonFont-family);
--todayButtonResolvedFont-style: var(--todayHollowButtonFont-style);
--todayButtonResolvedFont-size: var(--todayHollowButtonFont-size);
--todayButtonResolvedFont-variant: var(--todayHollowButtonFont-variant);
--todayButtonResolvedFont-weight: var(--todayHollowButtonFont-weight);
--todayButtonResolvedColor: var(--todayHollowButtonColor);
--todayButtonResolvedColor-rgb: var(--todayHollowButtonColor-rgb);
--todayButtonResolvedColor-opacity: var(--todayHollowButtonColor-opacity);
--todayButtonResolvedBackgroundColor: 0, 0, 0, 0;
--todayButtonResolvedBackgroundColor-rgb: 0, 0, 0;
--todayButtonResolvedBackgroundColor-opacity: 0;
--todayButtonResolvedBorderColor: var(--todayButtonBorderColor);
--todayButtonResolvedBorderColor-rgb: var(--todayButtonBorderColor-rgb);
--todayButtonResolvedBorderColor-opacity: var(--todayButtonBorderColor-opacity);
--todayButtonResolvedBorderWidth: var(--todayButtonBorderWidth);
--todayButtonResolvedBorderRadius: var(--todayButtonBorderRadius);
				--wix-color-1: 255,255,255;
--wix-color-2: 201,209,222;
--wix-color-3: 115,131,156;
--wix-color-4: 58,73,97;
--wix-color-5: 12,29,57;
--wix-color-6: 218,176,255;
--wix-color-7: 199,137,254;
--wix-color-8: 144,19,254;
--wix-color-9: 96,13,169;
--wix-color-10: 48,6,85;
--wix-color-11: 250,196,186;
--wix-color-12: 245,166,151;
--wix-color-13: 240,85,55;
--wix-color-14: 160,57,37;
--wix-color-15: 80,28,18;
--wix-color-16: 254,233,195;
--wix-color-17: 252,222,165;
--wix-color-18: 251,191,77;
--wix-color-19: 167,127,51;
--wix-color-20: 84,64,26;
--wix-color-21: 179,241,212;
--wix-color-22: 139,228,186;
--wix-color-23: 47,214,136;
--wix-color-24: 31,143,91;
--wix-color-25: 16,71,45;
--wix-color-26: 255,255,255;
--wix-color-27: 12,29,57;
--wix-color-28: 201,209,222;
--wix-color-29: 115,131,156;
--wix-color-30: 58,73,97;
--wix-color-31: 144,19,254;
--wix-color-32: 199,137,254;
--wix-color-33: 115,131,156;
--wix-color-34: 255,255,255;
--wix-color-35: 12,29,57;
--wix-color-36: 12,29,57;
--wix-color-37: 58,73,97;
--wix-color-38: 144,19,254;
--wix-color-39: 144,19,254;
--wix-color-40: 255,255,255;
--wix-color-41: 255,255,255;
--wix-color-42: 144,19,254;
--wix-color-43: 144,19,254;
--wix-color-44: 115,131,156;
--wix-color-45: 115,131,156;
--wix-color-46: 255,255,255;
--wix-color-47: 255,255,255;
--wix-color-48: 144,19,254;
--wix-color-49: 144,19,254;
--wix-color-50: 144,19,254;
--wix-color-51: 144,19,254;
--wix-color-52: 255,255,255;
--wix-color-53: 255,255,255;
--wix-color-54: 115,131,156;
--wix-color-55: 115,131,156;
--wix-font-Title: normal normal normal 90px/1.4em "playfair display",serif;
--wix-font-Title-style: normal;
--wix-font-Title-variant: normal;
--wix-font-Title-weight: normal;
--wix-font-Title-size: 90px;
--wix-font-Title-line-height: 1.4em;
--wix-font-Title-family: "playfair display",serif;
--wix-font-Title-text-decoration: none;
--wix-font-Menu: normal normal normal 16px/1.4em din-next-w01-light,sans-serif;
--wix-font-Menu-style: normal;
--wix-font-Menu-variant: normal;
--wix-font-Menu-weight: normal;
--wix-font-Menu-size: 16px;
--wix-font-Menu-line-height: 1.4em;
--wix-font-Menu-family: din-next-w01-light,sans-serif;
--wix-font-Menu-text-decoration: none;
--wix-font-Page-title: normal normal normal 50px/1.4em "playfair display",serif;
--wix-font-Page-title-style: normal;
--wix-font-Page-title-variant: normal;
--wix-font-Page-title-weight: normal;
--wix-font-Page-title-size: 50px;
--wix-font-Page-title-line-height: 1.4em;
--wix-font-Page-title-family: "playfair display",serif;
--wix-font-Page-title-text-decoration: none;
--wix-font-Heading-XL: normal normal normal 30px/1.4em "playfair display",serif;
--wix-font-Heading-XL-style: normal;
--wix-font-Heading-XL-variant: normal;
--wix-font-Heading-XL-weight: normal;
--wix-font-Heading-XL-size: 30px;
--wix-font-Heading-XL-line-height: 1.4em;
--wix-font-Heading-XL-family: "playfair display",serif;
--wix-font-Heading-XL-text-decoration: none;
--wix-font-Heading-L: normal normal normal 25px/1.4em "playfair display",serif;
--wix-font-Heading-L-style: normal;
--wix-font-Heading-L-variant: normal;
--wix-font-Heading-L-weight: normal;
--wix-font-Heading-L-size: 25px;
--wix-font-Heading-L-line-height: 1.4em;
--wix-font-Heading-L-family: "playfair display",serif;
--wix-font-Heading-L-text-decoration: none;
--wix-font-Heading-M: normal normal bold 25px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--wix-font-Heading-M-style: normal;
--wix-font-Heading-M-variant: normal;
--wix-font-Heading-M-weight: bold;
--wix-font-Heading-M-size: 25px;
--wix-font-Heading-M-line-height: 1.4em;
--wix-font-Heading-M-family: avenir-lt-w01_35-light1475496,sans-serif;
--wix-font-Heading-M-text-decoration: none;
--wix-font-Heading-S: normal normal normal 22px/1.4em proxima-n-w01-reg,sans-serif;
--wix-font-Heading-S-style: normal;
--wix-font-Heading-S-variant: normal;
--wix-font-Heading-S-weight: normal;
--wix-font-Heading-S-size: 22px;
--wix-font-Heading-S-line-height: 1.4em;
--wix-font-Heading-S-family: proxima-n-w01-reg,sans-serif;
--wix-font-Heading-S-text-decoration: none;
--wix-font-Body-L: normal normal normal 17px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--wix-font-Body-L-style: normal;
--wix-font-Body-L-variant: normal;
--wix-font-Body-L-weight: normal;
--wix-font-Body-L-size: 17px;
--wix-font-Body-L-line-height: 1.4em;
--wix-font-Body-L-family: avenir-lt-w01_35-light1475496,sans-serif;
--wix-font-Body-L-text-decoration: none;
--wix-font-Body-M: normal normal normal 18px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--wix-font-Body-M-style: normal;
--wix-font-Body-M-variant: normal;
--wix-font-Body-M-weight: normal;
--wix-font-Body-M-size: 18px;
--wix-font-Body-M-line-height: 1.4em;
--wix-font-Body-M-family: avenir-lt-w01_35-light1475496,sans-serif;
--wix-font-Body-M-text-decoration: none;
--wix-font-Body-S: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--wix-font-Body-S-style: normal;
--wix-font-Body-S-variant: normal;
--wix-font-Body-S-weight: normal;
--wix-font-Body-S-size: 14px;
--wix-font-Body-S-line-height: 1.4em;
--wix-font-Body-S-family: avenir-lt-w01_35-light1475496,sans-serif;
--wix-font-Body-S-text-decoration: none;
--wix-font-Body-XS: normal normal normal 12px/1.4em din-next-w01-light,sans-serif;
--wix-font-Body-XS-style: normal;
--wix-font-Body-XS-variant: normal;
--wix-font-Body-XS-weight: normal;
--wix-font-Body-XS-size: 12px;
--wix-font-Body-XS-line-height: 1.4em;
--wix-font-Body-XS-family: din-next-w01-light,sans-serif;
--wix-font-Body-XS-text-decoration: none;
--wix-font-LIGHT: normal normal normal 12px/1.4em HelveticaNeueW01-45Ligh;
--wix-font-LIGHT-style: normal;
--wix-font-LIGHT-variant: normal;
--wix-font-LIGHT-weight: normal;
--wix-font-LIGHT-size: 12px;
--wix-font-LIGHT-line-height: 1.4em;
--wix-font-LIGHT-family: HelveticaNeueW01-45Ligh;
--wix-font-LIGHT-text-decoration: none;
--wix-font-MEDIUM: normal normal normal 12px/1.4em HelveticaNeueW01-55Roma;
--wix-font-MEDIUM-style: normal;
--wix-font-MEDIUM-variant: normal;
--wix-font-MEDIUM-weight: normal;
--wix-font-MEDIUM-size: 12px;
--wix-font-MEDIUM-line-height: 1.4em;
--wix-font-MEDIUM-family: HelveticaNeueW01-55Roma;
--wix-font-MEDIUM-text-decoration: none;
--wix-font-STRONG: normal normal normal 12px/1.4em HelveticaNeueW01-65Medi;
--wix-font-STRONG-style: normal;
--wix-font-STRONG-variant: normal;
--wix-font-STRONG-weight: normal;
--wix-font-STRONG-size: 12px;
--wix-font-STRONG-line-height: 1.4em;
--wix-font-STRONG-family: HelveticaNeueW01-65Medi;
--wix-font-STRONG-text-decoration: none;
		}










#masterPage:not(.landingPage){--top-offset:0px;--header-height:99px;}#masterPage.landingPage{--top-offset:0px;}#SITE_HEADER{--boxShadowToggleOn-shd:none;--shd:0.00px 1.00px 4px 0px rgba(0,0,0,0.6);--alpha-brd:1;--brd:var(--color_36);--backdrop-filter:none;--rd:0px 0px 0px 0px;--brwt:0px;--brwb:0px;}#SITE_HEADER{left:0;margin-left:0;width:100%;min-width:0;}[data-mesh-id=SITE_HEADERinlineContent]{height:auto;width:100%;position:static;min-height:99px;}#SITE_HEADER{--bg-overlay-color:transparent;--bg-gradient:none;}</style>
<style id="css_c1dmp">@font-face {font-family: 'avenir-lt-w01_35-light1475496'; font-style: normal; font-weight: 400; src: url('//static.parastorage.com/fonts/v2/af36905f-3c92-4ef9-b0c1-f91432f16ac1/v1/avenir-lt-w05_35-light.woff2') format('woff2'); unicode-range: U+0100-012B, U+012E-0130, U+0132-0137, U+0139-0149, U+014C-0151, U+0154-015F, U+0162-0177, U+0179-017C, U+0218-021B, U+02C9, U+02D8-02D9, U+02DB, U+02DD, U+0394, U+03A9, U+03BC, U+03C0, U+1E9E, U+20B9-20BA, U+20BC-20BD, U+2113, U+2126, U+212E, U+2202, U+2206, U+220F, U+2211-2212, U+2215, U+2219-221A, U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+F8FF, U+FB01-FB02;font-display: swap;
}
@font-face {font-family: 'avenir-lt-w01_35-light1475496'; font-style: normal; font-weight: 400; src: url('//static.parastorage.com/fonts/v2/af36905f-3c92-4ef9-b0c1-f91432f16ac1/v1/avenir-lt-w01_35-light1475496.woff2') format('woff2'); unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00FF, U+0131, U+0152-0153, U+0160-0161, U+0178, U+017D-017E, U+0192, U+0237, U+02C6-02C7, U+02DA, U+02DC, U+2013-2014, U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+20AC, U+2122;font-display: swap;
}@font-face {font-family: 'proxima-n-w01-reg'; font-style: normal; font-weight: 400; src: url('//static.parastorage.com/fonts/v2/c24fcada-6239-48bc-8b88-9288338191c9/v1/proxima-n-w05-reg.woff2') format('woff2'); unicode-range: U+0000, U+0100-010F, U+0111-0130, U+0132-0151, U+0154-015F, U+0162-0177, U+0179-017C, U+017F, U+018F, U+019D, U+01A0-01A1, U+01AF-01B0, U+01E6-01E7, U+01EA-01EB, U+01FA-01FF, U+0218-021B, U+0232-0233, U+0237, U+0259, U+0272, U+02B0, U+02BB-02BC, U+02C9, U+02CB, U+02D8-02D9, U+02DB, U+02DD, U+0374-0375, U+037E, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03CE, U+03D7, U+0400-045F, U+0472-0475, U+048A-04FF, U+0510-0513, U+051C-051D, U+0524-0527, U+052E-052F, U+1E02-1E03, U+1E0A-1E0B, U+1E1E-1E1F, U+1E22-1E23, U+1E56-1E57, U+1E60-1E61, U+1E6A-1E6B, U+1E80-1E85, U+1E9E, U+1EA0-1EF9, U+2000-200A, U+2015, U+201B, U+2032-2033, U+203D-203E, U+2070, U+2074-2079, U+207D-2089, U+208D-208E, U+20A1, U+20A3-20A4, U+20A6-20AB, U+20B4, U+20B8-20BA, U+20BC-20BD, U+2113, U+2116-2117, U+2120, U+2126, U+212E, U+2153-2154, U+215B-215E, U+2190-2193, U+2202, U+2206, U+220F, U+2211-2212, U+2215, U+2219-221A, U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+22B2-22B3, U+22C5, U+2318, U+25A0, U+25B2, U+25BC, U+25CA, U+25CF, U+2605, U+2610-2611, U+2666, U+2713, U+2E18, U+E004-E005, U+F43A-F43B, U+F460-F473, U+F498-F49F, U+F4C6-F4C7, U+F4CC-F4CD, U+F4D2-F4D7, U+F50A-F50B, U+F50E-F533, U+F536-F539, U+F53C-F53F, U+F637, U+F6C3, U+F6DD, U+F6DF-F6F3, U+F8FF, U+FB00-FB04;font-display: swap;
}
@font-face {font-family: 'proxima-n-w01-reg'; font-style: normal; font-weight: 400; src: url('//static.parastorage.com/fonts/v2/c24fcada-6239-48bc-8b88-9288338191c9/v1/proxima-n-w01-reg.woff2') format('woff2'); unicode-range: U+000D, U+0020-007E, U+00A0-00FF, U+0110, U+0131, U+0152-0153, U+0160-0161, U+0178, U+017D-017E, U+0192, U+02C6-02C7, U+02DA, U+02DC, U+2013-2014, U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+20AC, U+2122, U+F656-F659;font-display: swap;
}@font-face {font-family: 'avenir-lt-w01_85-heavy1475544'; font-style: normal; font-weight: 400; src: url('//static.parastorage.com/fonts/v2/74290729-59ae-4129-87d0-2eec3974dce1/v1/avenir-lt-w05_85-heavy.woff2') format('woff2'); unicode-range: U+0100-012B, U+012E-0130, U+0132-0137, U+0139-0149, U+014C-0151, U+0154-015F, U+0162-0177, U+0179-017C, U+0218-021B, U+02C9, U+02D8-02D9, U+02DB, U+02DD, U+0394, U+03A9, U+03BC, U+03C0, U+1E9E, U+20B9-20BA, U+20BC-20BD, U+2113, U+2126, U+212E, U+2202, U+2206, U+220F, U+2211-2212, U+2215, U+2219-221A, U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+F8FF, U+FB01-FB02;font-display: swap;
}
@font-face {font-family: 'avenir-lt-w01_85-heavy1475544'; font-style: normal; font-weight: 400; src: url('//static.parastorage.com/fonts/v2/74290729-59ae-4129-87d0-2eec3974dce1/v1/avenir-lt-w01_85-heavy1475544.woff2') format('woff2'); unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00FF, U+0131, U+0152-0153, U+0160-0161, U+0178, U+017D-017E, U+0192, U+0237, U+02C6-02C7, U+02DA, U+02DC, U+2013-2014, U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+20AC, U+2122;font-display: swap;
}@font-face {font-family: 'playfair display'; font-style: italic; font-weight: 700; src: url('//static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/playfairdisplay/v18/nuFnD-vYSZviVYUb_rj3ij__anPXDTngOWwu6zRmFqWF_ljR.woff2') format('woff2'); unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;font-display: swap;
}
@font-face {font-family: 'playfair display'; font-style: italic; font-weight: 400; src: url('//static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/playfairdisplay/v18/nuFkD-vYSZviVYUb_rj3ij__anPXDTnojUk7yRZrPJ-M.woff2') format('woff2'); unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;font-display: swap;
}
@font-face {font-family: 'playfair display'; font-style: normal; font-weight: 400; src: url('//static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/playfairdisplay/v18/nuFiD-vYSZviVYUb_rj3ij__anPXDTPYgEM86xRbPQ.woff2') format('woff2'); unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;font-display: swap;
}
@font-face {font-family: 'playfair display'; font-style: normal; font-weight: 700; src: url('//static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/playfairdisplay/v18/nuFlD-vYSZviVYUb_rj3ij__anPXBYf9lWEe5j5hNKe1_w.woff2') format('woff2'); unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;font-display: swap;
}
@font-face {font-family: 'playfair display'; font-style: italic; font-weight: 700; src: url('//static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/playfairdisplay/v18/nuFnD-vYSZviVYUb_rj3ij__anPXDTngOWwu4DRmFqWF_ljR.woff2') format('woff2'); unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;font-display: swap;
}
@font-face {font-family: 'playfair display'; font-style: italic; font-weight: 400; src: url('//static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/playfairdisplay/v18/nuFkD-vYSZviVYUb_rj3ij__anPXDTnohkk7yRZrPJ-M.woff2') format('woff2'); unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;font-display: swap;
}
@font-face {font-family: 'playfair display'; font-style: normal; font-weight: 400; src: url('//static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/playfairdisplay/v18/nuFiD-vYSZviVYUb_rj3ij__anPXDTjYgEM86xRbPQ.woff2') format('woff2'); unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;font-display: swap;
}
@font-face {font-family: 'playfair display'; font-style: normal; font-weight: 700; src: url('//static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/playfairdisplay/v18/nuFlD-vYSZviVYUb_rj3ij__anPXBYf9lWoe5j5hNKe1_w.woff2') format('woff2'); unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;font-display: swap;
}
@font-face {font-family: 'playfair display'; font-style: italic; font-weight: 700; src: url('//static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/playfairdisplay/v18/nuFnD-vYSZviVYUb_rj3ij__anPXDTngOWwu6jRmFqWF_ljR.woff2') format('woff2'); unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;font-display: swap;
}
@font-face {font-family: 'playfair display'; font-style: italic; font-weight: 400; src: url('//static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/playfairdisplay/v18/nuFkD-vYSZviVYUb_rj3ij__anPXDTnojEk7yRZrPJ-M.woff2') format('woff2'); unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;font-display: swap;
}
@font-face {font-family: 'playfair display'; font-style: normal; font-weight: 400; src: url('//static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/playfairdisplay/v18/nuFiD-vYSZviVYUb_rj3ij__anPXDTLYgEM86xRbPQ.woff2') format('woff2'); unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;font-display: swap;
}
@font-face {font-family: 'playfair display'; font-style: normal; font-weight: 700; src: url('//static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/playfairdisplay/v18/nuFlD-vYSZviVYUb_rj3ij__anPXBYf9lWAe5j5hNKe1_w.woff2') format('woff2'); unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;font-display: swap;
}
@font-face {font-family: 'playfair display'; font-style: italic; font-weight: 700; src: url('//static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/playfairdisplay/v18/nuFnD-vYSZviVYUb_rj3ij__anPXDTngOWwu5DRmFqWF_g.woff2') format('woff2'); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;font-display: swap;
}
@font-face {font-family: 'playfair display'; font-style: italic; font-weight: 400; src: url('//static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/playfairdisplay/v18/nuFkD-vYSZviVYUb_rj3ij__anPXDTnogkk7yRZrPA.woff2') format('woff2'); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;font-display: swap;
}
@font-face {font-family: 'playfair display'; font-style: normal; font-weight: 400; src: url('//static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/playfairdisplay/v18/nuFiD-vYSZviVYUb_rj3ij__anPXDTzYgEM86xQ.woff2') format('woff2'); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;font-display: swap;
}
@font-face {font-family: 'playfair display'; font-style: normal; font-weight: 700; src: url('//static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/playfairdisplay/v18/nuFlD-vYSZviVYUb_rj3ij__anPXBYf9lW4e5j5hNKc.woff2') format('woff2'); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;font-display: swap;
}#c1dmp{left:0;margin-left:0;width:100%;min-width:0;}#comp-jnk25096-pinned-layer{z-index:calc(var(--pinned-layer-in-container, 0) + 0);}#masterPage{--pinned-layers-in-page:1;}[data-mesh-id=Containerc1dmpinlineContent]{height:auto;width:100%;}[data-mesh-id=Containerc1dmpinlineContent-gridContainer]{position:static;display:grid;height:auto;width:100%;min-height:40px;grid-template-rows:repeat(2, min-content) 1fr;grid-template-columns:100%;padding-bottom:0px;box-sizing:border-box;}[data-mesh-id=Containerc1dmpinlineContent-gridContainer] > [id="comp-lvl19jm2"]{position:relative;margin:0px 0px 0 calc((100% - 980px) * 0.5);left:0px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=Containerc1dmpinlineContent-gridContainer] > [id="comp-lvl19jm3"]{position:relative;margin:0px 0px 0 calc((100% - 980px) * 0.5);left:0px;grid-area:2 / 1 / 3 / 2;justify-self:start;align-self:start;}[data-mesh-id=Containerc1dmpinlineContent-gridContainer] > [id="comp-lvl19jm4"]{position:relative;margin:0px 0px 0 calc((100% - 980px) * 0.5);left:0px;grid-area:3 / 1 / 4 / 2;justify-self:start;align-self:start;}#comp-jnk25096{justify-self:end;margin-right:111px;align-self:center;margin-bottom:240px;position:absolute;grid-area:1 / 1 / 2 / 2;pointer-events:auto;}#comp-lvl19jm2{left:0;margin-left:0;width:100%;min-width:0;}[data-mesh-id=comp-lvl19jm2inlineContent]{height:auto;width:100%;display:flex;}[data-mesh-id=comp-lvl19jm2inlineContent-gridContainer]{position:static;display:grid;height:auto;width:100%;min-height:auto;margin-top:-98px;margin-bottom:-1px;grid-template-rows:1fr;grid-template-columns:100%;}[data-mesh-id=comp-lvl19jm2inlineContent-gridContainer] > [id="comp-jnk0xbql"]{position:relative;margin:0px 0px 0px calc((100% - 980px) * 0.5);left:0px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}#comp-jnk0xbql{left:0;margin-left:0;width:100%;min-width:980px;}[data-mesh-id=comp-jnk0xbswinlineContent]{height:auto;width:100%;}[data-mesh-id=comp-jnk0xbswinlineContent-gridContainer]{position:static;display:grid;height:auto;width:100%;min-height:1265px;grid-template-rows:repeat(3, min-content) 1fr;grid-template-columns:100%;}[data-mesh-id=comp-jnk0xbswinlineContent-gridContainer] > [id="comp-jnk1qp12"]{position:relative;margin:292px 0px 50px calc((100% - 980px) * 0.5);left:21px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnk0xbswinlineContent-gridContainer] > [id="comp-jnk1znbc"]{position:relative;margin:15px 0px 10px calc((100% - 980px) * 0.5);left:24px;grid-area:2 / 1 / 3 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnk0xbswinlineContent-gridContainer] > [id="comp-jnk1xqnd"]{position:relative;margin:0px 0px 10px calc((100% - 980px) * 0.5);left:141px;grid-area:2 / 1 / 3 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnk0xbswinlineContent-gridContainer] > [id="comp-jnk2g9kl"]{position:relative;margin:0px 0px 10px calc((100% - 980px) * 0.5);left:366px;grid-area:4 / 1 / 5 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnk0xbswinlineContent-gridContainer] > [id="comp-jnmuwc3w"]{position:relative;margin:0px 0px 10px calc((100% - 980px) * 0.5);left:725px;grid-area:4 / 1 / 5 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnk0xbswinlineContent-wedge-4]{visibility:hidden;height:849px;width:0;grid-area:1 / 1 / 4 / 2;}#comp-jnk0xbsw{width:980px;}#comp-jnk1qp12{--blendMode:normal;--textShadow:0px 0px transparent;--textOutline:0px 0px transparent;}@media (prefers-reduced-motion: no-preference) {#comp-jnk1qp12:not([data-motion-enter="done"]){opacity:0;}}#comp-jnk1qp12{width:939px;height:auto;}#comp-jnk1znbc{--lnw:1px;--brd:var(--color_18);--alpha-brd:1;}@media (prefers-reduced-motion: no-preference) {#comp-jnk1znbc:not([data-motion-enter="done"]){opacity:0;}}#comp-jnk1znbc{width:90px;height:5px;}@media (prefers-reduced-motion: no-preference) {#comp-jnk1xqnd:not([data-motion-enter="done"]){opacity:0;}}#comp-jnk1xqnd{width:401px;height:auto;}#comp-jnk2g9kl{--brw:1px;--brd:var(--color_12);--bg:var(--color_11);--rd:4px 4px 0px 0px;--shd:none;--gradient:none;--alpha-bg:0;--alpha-brd:1;--boxShadowToggleOn-shd:none;--bg-gradient:none;}#comp-jnk2g9kl{width:350px;}[data-mesh-id=comp-jnk2g9klinlineContent]{height:auto;width:350px;}[data-mesh-id=comp-jnk2g9klinlineContent-gridContainer]{position:static;display:grid;height:auto;width:100%;min-height:auto;grid-template-rows:1fr;grid-template-columns:100%;}[data-mesh-id="comp-jnk2iqwu-rotated-wrapper"] > [id="comp-jnk2iqwu"]{position:relative;left:120px;top:38px;}[data-mesh-id=comp-jnk2g9klinlineContent-gridContainer] > [id="comp-jnk2wu3w"]{position:relative;margin:30px 0px 10px 0;left:35px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnk2iqwu-rotated-wrapper]{position:static;height:80px;width:0;margin:1px 0px 42px 0;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnk2g9klinlineContent-gridContainer] > [id="comp-jnk2mudq"]{position:relative;margin:30px 0px 53px 0;left:204px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}#comp-jnk2wu3w{--blendMode:normal;--textShadow:0px 0px transparent;--textOutline:0px 0px transparent;}#comp-jnk2wu3w{width:128px;height:auto;}#comp-jnk2iqwu{--lnw:1px;--brd:var(--color_12);--alpha-brd:1;}#comp-jnk2iqwu{width:80px;height:5px;transform:rotate(270deg);--comp-rotate-z:270deg;}#comp-jnk2mudq{--blendMode:normal;--textShadow:0px 0px transparent;--textOutline:0px 0px transparent;}#comp-jnk2mudq{width:140px;height:auto;}#comp-jnmuwc3w{width:235px;height:81px;}#comp-jnk25096{width:30px;height:162px;}#comp-lvl19jm3{left:0;margin-left:0;width:100%;min-width:0;}[data-mesh-id=comp-lvl19jm3inlineContent]{height:auto;width:100%;}[data-mesh-id=comp-lvl19jm3inlineContent-gridContainer]{position:static;display:grid;height:auto;width:100%;min-height:auto;grid-template-rows:repeat(5, min-content) 1fr;grid-template-columns:100%;}[data-mesh-id=comp-lvl19jm3inlineContent-gridContainer] > [id="comp-jnk1hb83"]{position:relative;margin:0px 0px 0 calc((100% - 980px) * 0.5);left:0px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-lvl19jm3inlineContent-gridContainer] > [id="comp-jnlflmbd"]{position:relative;margin:18px 0 10px 0;left:0;grid-area:1 / 1 / 2 / 2;justify-self:stretch;align-self:start;}[data-mesh-id=comp-lvl19jm3inlineContent-gridContainer] > [id="comp-jnka9ey2"]{position:relative;margin:0px 0px 0 calc((100% - 980px) * 0.5);left:0px;grid-area:2 / 1 / 3 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-lvl19jm3inlineContent-gridContainer] > [id="comp-jnkf3qg1"]{position:relative;margin:0px 0px 0px calc((100% - 980px) * 0.5);left:0px;grid-area:6 / 1 / 7 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-lvl19jm3inlineContent-gridContainer] > [id="comp-jnlfnpc0"]{position:relative;margin:206px 0 10px 0;left:0;grid-area:4 / 1 / 5 / 2;justify-self:stretch;align-self:start;}[data-mesh-id=comp-lvl19jm3inlineContent-gridContainer] > [id="comp-jnkai0mw"]{position:relative;margin:0px 0px -122px calc((100% - 980px) * 0.5);left:0px;grid-area:4 / 1 / 5 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-lvl19jm3inlineContent-gridContainer] > [id="comp-jnlfoh59"]{position:relative;margin:113px 0 10px 0;left:0;grid-area:6 / 1 / 7 / 2;justify-self:stretch;align-self:start;}[data-mesh-id=comp-lvl19jm3inlineContent-gridContainer] > [id="comp-jnkf2fkj"]{position:relative;margin:0px 0px -102px calc((100% - 980px) * 0.5);left:-48px;grid-area:5 / 1 / 6 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-lvl19jm3inlineContent-gridContainer] > [id="comp-jnkafupw"]{position:relative;margin:0px 0px -3px calc((100% - 980px) * 0.5);left:0px;grid-area:3 / 1 / 4 / 2;justify-self:start;align-self:start;}#comp-jnk1hb83{left:0;margin-left:0;width:100%;min-width:980px;}[data-mesh-id=comp-jnk1hb92inlineContent]{height:auto;width:100%;}[data-mesh-id=comp-jnk1hb92inlineContent-gridContainer]{position:static;display:grid;height:auto;width:100%;min-height:auto;grid-template-rows:repeat(2, min-content) 1fr;grid-template-columns:100%;}[data-mesh-id=comp-jnk1hb92inlineContent-gridContainer] > [id="comp-jnk5ap05"]{position:relative;margin:116px 0px 10px calc((100% - 980px) * 0.5);left:21px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnk1hb92inlineContent-gridContainer] > [id="comp-jnk6dqq1"]{position:relative;margin:141px 0px 10px calc((100% - 980px) * 0.5);left:489px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnk1hb92inlineContent-gridContainer] > [id="comp-jnu2f0tk"]{position:relative;margin:150px 0px 10px calc((100% - 980px) * 0.5);left:534px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnk1hb92inlineContent-gridContainer] > [id="comp-jnk6df2n"]{position:relative;margin:141px 0px 10px calc((100% - 980px) * 0.5);left:621px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnk1hb92inlineContent-gridContainer] > [id="comp-jnk1m472"]{position:relative;margin:0px 0px 0px calc((100% - 980px) * 0.5);left:-48px;grid-area:3 / 1 / 4 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnk1hb92inlineContent-wedge-3]{visibility:hidden;height:290px;width:0;grid-area:1 / 1 / 3 / 2;}#comp-jnk1hb92{width:980px;}#comp-jnk5ap05{width:402px;height:auto;}#comp-jnk6dqq1{width:45px;height:auto;}#comp-jnu2f0tk{--lnw:1px;--brd:var(--color_18);--alpha-brd:1;}#comp-jnu2f0tk{width:66px;height:5px;}#comp-jnk6df2n{width:339px;height:auto;}#comp-jnk1m472{--brw:0px;--brd:var(--color_15);--bg:var(--color_11);--rd:0px 0px 0px 0px;--shd:none;--gradient:none;--alpha-bg:1;--alpha-brd:1;--boxShadowToggleOn-shd:none;--bg-gradient:none;}#comp-jnk1m472{width:1077px;}[data-mesh-id=comp-jnk1m472inlineContent]{height:auto;width:1077px;}[data-mesh-id=comp-jnk1m472inlineContent-gridContainer]{position:static;display:grid;height:auto;width:100%;min-height:auto;grid-template-rows:repeat(5, min-content) 1fr;grid-template-columns:100%;}[data-mesh-id="comp-jnk5fpi3-rotated-wrapper"] > [id="comp-jnk5fpi3"]{position:relative;left:86px;top:8px;}[data-mesh-id="comp-jnk5cl1q-rotated-wrapper"] > [id="comp-jnk5cl1q"]{position:relative;left:77px;top:27px;}[data-mesh-id="comp-jnn6hwdv-rotated-wrapper"] > [id="comp-jnn6hwdv"]{position:relative;left:11px;top:73px;}[data-mesh-id=comp-jnk5fpi3-rotated-wrapper]{position:static;height:36px;width:0;margin:0px 0px -10px 0;grid-area:3 / 1 / 4 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnk5cl1q-rotated-wrapper]{position:static;height:58px;width:0;margin:15px 0px 30px 0;grid-area:4 / 1 / 5 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnn6hwdv-rotated-wrapper]{position:static;height:186px;width:0;margin:0px 0px 56px 0;grid-area:6 / 1 / 7 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnk1m472inlineContent-gridContainer] > [id="comp-jnk5ywhn"]{position:relative;margin:68px 0px -150px 0;left:228px;grid-area:1 / 1 / 6 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnk1m472inlineContent-gridContainer] > [id="comp-jnk5ljj2"]{position:relative;margin:84px 0px 13px 0;left:572px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnk1m472inlineContent-gridContainer] > [id="comp-jnmu6mek"]{position:relative;margin:0px 0px -13px 0;left:573px;grid-area:2 / 1 / 3 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnk1m472inlineContent-gridContainer] > [id="comp-jnmtvh9l"]{position:relative;margin:0px 0px -15px 0;left:573px;grid-area:4 / 1 / 5 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnk1m472inlineContent-gridContainer] > [id="comp-jnk61vw3"]{position:relative;margin:98px 0px 10px 0;left:573px;grid-area:6 / 1 / 7 / 2;justify-self:start;align-self:start;}#comp-jnk5fpi3{width:36px;height:auto;transform:rotate(90deg);--comp-rotate-z:90deg;}#comp-jnk5cl1q{--lnw:1px;--brd:var(--color_18);--alpha-brd:1;}#comp-jnk5cl1q{width:58px;height:5px;transform:rotate(90deg);--comp-rotate-z:90deg;}#comp-jnn6hwdv{width:186px;height:auto;transform:rotate(90deg);--comp-rotate-z:90deg;}#comp-jnk5ywhn{--contentPaddingLeft:0px;--contentPaddingRight:0px;--contentPaddingTop:0px;--contentPaddingBottom:0px;}@media (prefers-reduced-motion: no-preference) {#comp-jnk5ywhn:not([data-motion-enter="done"]){opacity:0;}}#comp-jnk5ywhn{width:221px;height:375px;}#comp-jnk5ljj2{--blendMode:normal;--textShadow:0px 0px transparent;--textOutline:0px 0px transparent;}#comp-jnk5ljj2{width:312px;height:auto;}#comp-jnmu6mek{width:320px;height:auto;}#comp-jnmtvh9l{--blendMode:normal;--textShadow:0px 0px transparent;--textOutline:0px 0px transparent;}#comp-jnmtvh9l{width:365px;height:auto;}#comp-jnk61vw3{--brw:1px;--brd:var(--color_12);--bg:var(--color_11);--rd:4px 4px 0px 0px;--shd:none;--gradient:none;--alpha-bg:0;--alpha-brd:1;--boxShadowToggleOn-shd:none;--bg-gradient:none;}#comp-jnk61vw3{width:246px;}[data-mesh-id=comp-jnk61vw3inlineContent]{height:auto;width:246px;}[data-mesh-id=comp-jnk61vw3inlineContent-gridContainer]{position:static;display:grid;height:auto;width:100%;min-height:auto;grid-template-rows:1fr;grid-template-columns:100%;}[data-mesh-id="comp-jnk64fbf-rotated-wrapper"] > [id="comp-jnk64fbf"]{position:relative;left:93px;top:27px;}[data-mesh-id="comp-jnk65a8d-rotated-wrapper"] > [id="comp-jnk65a8d"]{position:relative;left:152px;top:31px;}[data-mesh-id="comp-jnk65neo-rotated-wrapper"] > [id="comp-jnk65neo"]{position:relative;left:92px;top:31px;}[data-mesh-id=comp-jnk64fbf-rotated-wrapper]{position:static;height:60px;width:0;margin:2px 0px 8px 0;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnk65a8d-rotated-wrapper]{position:static;height:66px;width:0;margin:2px 0px 2px 0;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnk65neo-rotated-wrapper]{position:static;height:66px;width:0;margin:2px 0px 2px 0;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnk61vw3inlineContent-gridContainer] > [id="comp-jnk5dns4"]{position:relative;margin:21px 0px 32px 0;left:14px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnk61vw3inlineContent-gridContainer] > [id="comp-jnk68xzh"]{position:relative;margin:14px 0px 26px 0;left:140px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}#comp-jnk64fbf{--lnw:1px;--brd:var(--color_11);--alpha-brd:1;}#comp-jnk64fbf{width:60px;height:6px;transform:rotate(90deg);--comp-rotate-z:90deg;}#comp-jnk65a8d{--lnw:1px;--brd:var(--color_12);--alpha-brd:1;}#comp-jnk65a8d{width:66px;height:5px;transform:rotate(90deg);--comp-rotate-z:90deg;}#comp-jnk65neo{--lnw:1px;--brd:var(--color_12);--alpha-brd:1;}#comp-jnk65neo{width:66px;height:5px;transform:rotate(90deg);--comp-rotate-z:90deg;}#comp-jnk5dns4{width:101px;height:auto;}#comp-jnk68xzh{width:87px;height:30px;}#comp-jnlflmbd{width:100%;left:0;margin-left:0;min-width:initial;height:21px;}#comp-jnka9ey2{left:0;margin-left:0;width:100%;min-width:980px;}[data-mesh-id=comp-jnka9ez5inlineContent]{height:auto;width:100%;}[data-mesh-id=comp-jnka9ez5inlineContent-gridContainer]{position:static;display:grid;height:auto;width:100%;min-height:auto;grid-template-rows:1fr;grid-template-columns:100%;}[data-mesh-id=comp-jnka9ez5inlineContent-gridContainer] > [id="comp-jnka9ezh"]{position:relative;margin:0px 0px 0px calc((100% - 980px) * 0.5);left:-48px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}#comp-jnka9ez5{width:980px;}#comp-jnka9ezh{--brw:0px;--brd:var(--color_15);--bg:var(--color_11);--rd:0px 0px 0px 0px;--shd:none;--gradient:none;--alpha-bg:1;--alpha-brd:1;--boxShadowToggleOn-shd:none;--bg-gradient:none;}#comp-jnka9ezh{width:1077px;}[data-mesh-id=comp-jnka9ezhinlineContent]{height:auto;width:1077px;}[data-mesh-id=comp-jnka9ezhinlineContent-gridContainer]{position:static;display:grid;height:auto;width:100%;min-height:auto;grid-template-rows:repeat(5, min-content) 1fr;grid-template-columns:100%;}[data-mesh-id="comp-jnka9ezj-rotated-wrapper"] > [id="comp-jnka9ezj"]{position:relative;left:951px;top:8px;}[data-mesh-id="comp-jnka9ezl-rotated-wrapper"] > [id="comp-jnka9ezl"]{position:relative;left:935px;top:34px;}[data-mesh-id="comp-jnn6eyvh-rotated-wrapper"] > [id="comp-jnn6eyvh"]{position:relative;left:878px;top:81px;}[data-mesh-id=comp-jnka9ezhinlineContent-gridContainer] > [id="comp-jnka9ezr"]{position:relative;margin:77px 0px 7px 0;left:170px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnka9ezhinlineContent-gridContainer] > [id="comp-jnmu7zwz"]{position:relative;margin:3px 0px 9px 0;left:171px;grid-area:2 / 1 / 3 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnka9ezhinlineContent-gridContainer] > [id="comp-jnka9ezt"]{position:relative;margin:3px 0px -28px 0;left:171px;grid-area:3 / 1 / 4 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnka9ezhinlineContent-gridContainer] > [id="comp-jnka9ezv"]{position:relative;margin:0px 0px 68px 0;left:171px;grid-area:6 / 1 / 7 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnka9ezhinlineContent-gridContainer] > [id="comp-jnka9ezp"]{position:relative;margin:68px 0px -159px 0;left:629px;grid-area:1 / 1 / 5 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnka9ezj-rotated-wrapper]{position:static;height:35px;width:0;margin:0px 0px 17px 0;grid-area:2 / 1 / 3 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnka9ezl-rotated-wrapper]{position:static;height:72px;width:0;margin:0px 0px 21px 0;grid-area:3 / 1 / 4 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnn6eyvh-rotated-wrapper]{position:static;height:182px;width:0;margin:0px 0px -67px 0;grid-area:5 / 1 / 6 / 2;justify-self:start;align-self:start;}#comp-jnka9ezr{--blendMode:normal;--textShadow:0px 0px transparent;--textOutline:0px 0px transparent;}#comp-jnka9ezr{width:312px;height:auto;}#comp-jnmu7zwz{width:251px;height:auto;}#comp-jnka9ezt{--blendMode:normal;--textShadow:0px 0px transparent;--textOutline:0px 0px transparent;}#comp-jnka9ezt{width:365px;height:auto;}#comp-jnka9ezv{--brw:1px;--brd:var(--color_12);--bg:var(--color_11);--rd:4px 4px 0px 0px;--shd:none;--gradient:none;--alpha-bg:0;--alpha-brd:1;--boxShadowToggleOn-shd:none;--bg-gradient:none;}#comp-jnka9ezv{width:246px;}[data-mesh-id=comp-jnka9ezvinlineContent]{height:auto;width:246px;}[data-mesh-id=comp-jnka9ezvinlineContent-gridContainer]{position:static;display:grid;height:auto;width:100%;min-height:auto;grid-template-rows:1fr;grid-template-columns:100%;}[data-mesh-id="comp-jnka9f05-rotated-wrapper"] > [id="comp-jnka9f05"]{position:relative;left:93px;top:27px;}[data-mesh-id="comp-jnka9f08-rotated-wrapper"] > [id="comp-jnka9f08"]{position:relative;left:152px;top:31px;}[data-mesh-id="comp-jnka9f0a-rotated-wrapper"] > [id="comp-jnka9f0a"]{position:relative;left:92px;top:31px;}[data-mesh-id=comp-jnka9f05-rotated-wrapper]{position:static;height:60px;width:0;margin:2px 0px 8px 0;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnka9f08-rotated-wrapper]{position:static;height:66px;width:0;margin:2px 0px 2px 0;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnka9f0a-rotated-wrapper]{position:static;height:66px;width:0;margin:2px 0px 2px 0;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnka9ezvinlineContent-gridContainer] > [id="comp-jnka9f0c"]{position:relative;margin:21px 0px 32px 0;left:14px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnka9ezvinlineContent-gridContainer] > [id="comp-jnka9f0f"]{position:relative;margin:14px 0px 26px 0;left:141px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}#comp-jnka9f05{--lnw:1px;--brd:var(--color_11);--alpha-brd:1;}#comp-jnka9f05{width:60px;height:6px;transform:rotate(90deg);--comp-rotate-z:90deg;}#comp-jnka9f08{--lnw:1px;--brd:var(--color_12);--alpha-brd:1;}#comp-jnka9f08{width:66px;height:5px;transform:rotate(90deg);--comp-rotate-z:90deg;}#comp-jnka9f0a{--lnw:1px;--brd:var(--color_12);--alpha-brd:1;}#comp-jnka9f0a{width:66px;height:5px;transform:rotate(90deg);--comp-rotate-z:90deg;}#comp-jnka9f0c{width:89px;height:auto;}#comp-jnka9f0f{width:87px;height:30px;}#comp-jnka9ezp{--contentPaddingLeft:0px;--contentPaddingRight:0px;--contentPaddingTop:0px;--contentPaddingBottom:0px;}@media (prefers-reduced-motion: no-preference) {#comp-jnka9ezp:not([data-motion-enter="done"]){opacity:0;}}#comp-jnka9ezp{width:216px;height:360px;}#comp-jnka9ezj{width:35px;height:auto;transform:rotate(90deg);--comp-rotate-z:90deg;}#comp-jnka9ezl{--lnw:1px;--brd:var(--color_18);--alpha-brd:1;}#comp-jnka9ezl{width:72px;height:5px;transform:rotate(90deg);--comp-rotate-z:90deg;}#comp-jnn6eyvh{width:182px;height:auto;transform:rotate(90deg);--comp-rotate-z:90deg;}#comp-jnkf3qg1{left:0;margin-left:0;width:100%;min-width:980px;}[data-mesh-id=comp-jnkf3qi7inlineContent]{height:auto;width:100%;position:static;min-height:818px;}[data-mesh-id=comp-jnkfh4i3inlineContent]{height:auto;width:100%;}[data-mesh-id=comp-jnkfh4i3inlineContent-gridContainer]{position:static;display:grid;height:auto;width:100%;min-height:818px;grid-template-rows:repeat(2, min-content) 1fr;grid-template-columns:100%;}[data-mesh-id=comp-jnkfh4i3inlineContent-gridContainer] > [id="comp-jnkfotle"]{position:relative;margin:263px 0px 20px calc((100% - 490px) * 0.5);left:36px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkfh4i3inlineContent-gridContainer] > [id="comp-jnldxsca"]{position:relative;margin:11px 0px 10px calc((100% - 490px) * 0.5);left:36px;grid-area:2 / 1 / 3 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkfh4i3inlineContent-gridContainer] > [id="comp-jnldxsbd"]{position:relative;margin:0px 0px 34px calc((100% - 490px) * 0.5);left:115px;grid-area:2 / 1 / 3 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkfh4i3inlineContent-gridContainer] > [id="comp-jnldu9k0"]{position:relative;margin:0px 0px 10px calc((100% - 490px) * 0.5);left:36px;grid-area:3 / 1 / 4 / 2;justify-self:start;align-self:start;}#comp-jnkf3qi7{width:490px;}#comp-jnkfh4i3{width:490px;}#comp-jnkfotle{width:392px;height:auto;}#comp-jnldxsca{--lnw:1px;--brd:var(--color_18);--alpha-brd:1;}#comp-jnldxsca{width:72px;height:5px;}#comp-jnldxsbd{width:348px;height:auto;}#comp-jnldu9k0{width:410px;height:auto;}#comp-jnlfnpc0{width:100%;left:0;margin-left:0;min-width:initial;height:21px;}#comp-jnkai0mw{left:0;margin-left:0;width:100%;min-width:980px;}[data-mesh-id=comp-jnkai0o2inlineContent]{height:auto;width:100%;}[data-mesh-id=comp-jnkai0o2inlineContent-gridContainer]{position:static;display:grid;height:auto;width:100%;min-height:1087px;grid-template-rows:repeat(10, min-content) 1fr;grid-template-columns:100%;}[data-mesh-id="comp-jnkeuhdz-rotated-wrapper"] > [id="comp-jnkeuhdz"]{position:relative;left:222px;top:15px;}[data-mesh-id="comp-jnkeujs1-rotated-wrapper"] > [id="comp-jnkeujs1"]{position:relative;left:222px;top:15px;}[data-mesh-id="comp-jnkeumin-rotated-wrapper"] > [id="comp-jnkeumin"]{position:relative;left:222px;top:15px;}[data-mesh-id="comp-jnkeup61-rotated-wrapper"] > [id="comp-jnkeup61"]{position:relative;left:222px;top:15px;}[data-mesh-id="comp-jnketvbk-rotated-wrapper"] > [id="comp-jnketvbk"]{position:relative;left:222px;top:15px;}[data-mesh-id=comp-jnkai0o2inlineContent-gridContainer] > [id="comp-jnkeix36"]{position:relative;margin:258px 0px 10px calc((100% - 980px) * 0.5);left:129px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkai0o2inlineContent-gridContainer] > [id="comp-jnkelgvc"]{position:relative;margin:298px 0px 10px calc((100% - 980px) * 0.5);left:324px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkai0o2inlineContent-gridContainer] > [id="comp-jnkejs6f"]{position:relative;margin:287px 0px 10px calc((100% - 980px) * 0.5);left:504px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkeuhdz-rotated-wrapper]{position:static;height:36px;width:0;margin:9px 0px 39px calc((100% - 980px) * 0.5);grid-area:3 / 1 / 4 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkai0o2inlineContent-gridContainer] > [id="comp-jnlluglb"]{position:relative;margin:0px 0px 44px calc((100% - 980px) * 0.5);left:126px;grid-area:3 / 1 / 4 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkai0o2inlineContent-gridContainer] > [id="comp-jnkez8vq"]{position:relative;margin:10px 0px 45px calc((100% - 980px) * 0.5);left:273px;grid-area:3 / 1 / 4 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkai0o2inlineContent-gridContainer] > [id="comp-jnkemyy9"]{position:relative;margin:0px 0px 23px calc((100% - 980px) * 0.5);left:0px;grid-area:4 / 1 / 5 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkeujs1-rotated-wrapper]{position:static;height:36px;width:0;margin:8px 0px 44px calc((100% - 980px) * 0.5);grid-area:5 / 1 / 6 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkai0o2inlineContent-gridContainer] > [id="comp-jnllw6m6"]{position:relative;margin:0px 0px 48px calc((100% - 980px) * 0.5);left:126px;grid-area:5 / 1 / 6 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkai0o2inlineContent-gridContainer] > [id="comp-jnkezjbz"]{position:relative;margin:11px 0px 48px calc((100% - 980px) * 0.5);left:273px;grid-area:5 / 1 / 6 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkai0o2inlineContent-gridContainer] > [id="comp-jnkeo3qr"]{position:relative;margin:0px 0px 24px calc((100% - 980px) * 0.5);left:0px;grid-area:6 / 1 / 7 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkeumin-rotated-wrapper]{position:static;height:36px;width:0;margin:11px 0px 43px calc((100% - 980px) * 0.5);grid-area:7 / 1 / 8 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkai0o2inlineContent-gridContainer] > [id="comp-jnllwddv"]{position:relative;margin:0px 0px 50px calc((100% - 980px) * 0.5);left:126px;grid-area:7 / 1 / 8 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkai0o2inlineContent-gridContainer] > [id="comp-jnkezu0m"]{position:relative;margin:11px 0px 50px calc((100% - 980px) * 0.5);left:273px;grid-area:7 / 1 / 8 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkai0o2inlineContent-gridContainer] > [id="comp-jnkeo9qf"]{position:relative;margin:0px 0px 23px calc((100% - 980px) * 0.5);left:0px;grid-area:8 / 1 / 9 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkeup61-rotated-wrapper]{position:static;height:36px;width:0;margin:11px 0px 46px calc((100% - 980px) * 0.5);grid-area:9 / 1 / 10 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkai0o2inlineContent-gridContainer] > [id="comp-jnllwx99"]{position:relative;margin:0px 0px 53px calc((100% - 980px) * 0.5);left:126px;grid-area:9 / 1 / 10 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkai0o2inlineContent-gridContainer] > [id="comp-jnkf7wtn"]{position:relative;margin:11px 0px 53px calc((100% - 980px) * 0.5);left:273px;grid-area:9 / 1 / 10 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkai0o2inlineContent-gridContainer] > [id="comp-jnkeoaw3"]{position:relative;margin:0px 0px 28px calc((100% - 980px) * 0.5);left:0px;grid-area:10 / 1 / 11 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkai0o2inlineContent-gridContainer] > [id="comp-jnkesiw4"]{position:relative;margin:0px 0px 10px calc((100% - 980px) * 0.5);left:126px;grid-area:11 / 1 / 12 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnketvbk-rotated-wrapper]{position:static;height:36px;width:0;margin:11px 0px 10px calc((100% - 980px) * 0.5);grid-area:11 / 1 / 12 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkai0o2inlineContent-gridContainer] > [id="comp-jnkexx0y"]{position:relative;margin:8px 0px 10px calc((100% - 980px) * 0.5);left:273px;grid-area:11 / 1 / 12 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkai0o2inlineContent-wedge-3]{visibility:hidden;height:407px;width:0;grid-area:1 / 1 / 3 / 2;}#comp-jnkai0o2{width:980px;}#comp-jnkeix36{width:197px;height:auto;}#comp-jnkelgvc{--lnw:1px;--brd:var(--color_18);--alpha-brd:1;}#comp-jnkelgvc{width:156px;height:5px;}#comp-jnkejs6f{width:246px;height:auto;}#comp-jnkeuhdz{--lnw:1px;--brd:var(--color_14);--alpha-brd:1;}#comp-jnkeuhdz{width:36px;height:6px;transform:rotate(90deg);--comp-rotate-z:90deg;}#comp-jnlluglb{width:108px;height:auto;}#comp-jnkez8vq{width:312px;height:auto;}#comp-jnkemyy9{--lnw:1px;--brd:var(--color_14);--alpha-brd:1;}#comp-jnkemyy9{width:981px;height:5px;}#comp-jnkeujs1{--lnw:1px;--brd:var(--color_14);--alpha-brd:1;}#comp-jnkeujs1{width:36px;height:6px;transform:rotate(90deg);--comp-rotate-z:90deg;}#comp-jnllw6m6{width:108px;height:auto;}#comp-jnkezjbz{width:312px;height:auto;}#comp-jnkeo3qr{--lnw:1px;--brd:var(--color_14);--alpha-brd:1;}#comp-jnkeo3qr{width:981px;height:5px;}#comp-jnkeumin{--lnw:1px;--brd:var(--color_14);--alpha-brd:1;}#comp-jnkeumin{width:36px;height:6px;transform:rotate(90deg);--comp-rotate-z:90deg;}#comp-jnllwddv{width:108px;height:auto;}#comp-jnkezu0m{width:312px;height:auto;}#comp-jnkeo9qf{--lnw:1px;--brd:var(--color_14);--alpha-brd:1;}#comp-jnkeo9qf{width:981px;height:5px;}#comp-jnkeup61{--lnw:1px;--brd:var(--color_14);--alpha-brd:1;}#comp-jnkeup61{width:36px;height:6px;transform:rotate(90deg);--comp-rotate-z:90deg;}#comp-jnllwx99{width:108px;height:auto;}#comp-jnkf7wtn{width:312px;height:auto;}#comp-jnkeoaw3{--lnw:1px;--brd:var(--color_14);--alpha-brd:1;}#comp-jnkeoaw3{width:981px;height:5px;}#comp-jnkesiw4{width:108px;height:auto;}#comp-jnketvbk{--lnw:1px;--brd:var(--color_14);--alpha-brd:1;}#comp-jnketvbk{width:36px;height:6px;transform:rotate(90deg);--comp-rotate-z:90deg;}#comp-jnkexx0y{width:312px;height:auto;}#comp-jnlfoh59{width:100%;left:0;margin-left:0;min-width:initial;height:21px;}#comp-jnkf2fkj{--brw:0px;--brd:var(--color_15);--bg:var(--color_11);--rd:0px 0px 0px 0px;--shd:none;--gradient:none;--alpha-bg:1;--alpha-brd:1;--boxShadowToggleOn-shd:none;--bg-gradient:none;}#comp-jnkf2fkj{width:1077px;}[data-mesh-id=comp-jnkf2fkjinlineContent]{height:auto;width:1077px;}[data-mesh-id=comp-jnkf2fkjinlineContent-gridContainer]{position:static;display:grid;height:auto;width:100%;min-height:auto;grid-template-rows:min-content 1fr;grid-template-columns:100%;}[data-mesh-id="comp-jnkfb1pv-rotated-wrapper"] > [id="comp-jnkfb1pv"]{position:relative;left:168px;top:53px;}[data-mesh-id="comp-jnkf9i2c-rotated-wrapper"] > [id="comp-jnkf9i2c"]{position:relative;left:404px;top:53px;}[data-mesh-id=comp-jnkf2fkjinlineContent-gridContainer] > [id="comp-jnkfa87i"]{position:relative;margin:34px 0px 54px 0;left:53px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkfb1pv-rotated-wrapper]{position:static;height:111px;width:0;margin:59px 0px 12px 0;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkf2fkjinlineContent-gridContainer] > [id="comp-jnkfbetl"]{position:relative;margin:34px 0px 54px 0;left:269px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkf9i2c-rotated-wrapper]{position:static;height:111px;width:0;margin:59px 0px 12px 0;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkf2fkjinlineContent-gridContainer] > [id="comp-jnkf7fnl"]{position:relative;margin:34px 0px 54px 0;left:497px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkf2fkjinlineContent-gridContainer] > [id="comp-jnkfabw2"]{position:relative;margin:0px 0px 63px 0;left:68px;grid-area:2 / 1 / 3 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkf2fkjinlineContent-gridContainer] > [id="comp-jnkfbj9f"]{position:relative;margin:0px 0px 63px 0;left:236px;grid-area:2 / 1 / 3 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkf2fkjinlineContent-gridContainer] > [id="comp-jnkf00u6"]{position:relative;margin:0px 0px 63px 0;left:479px;grid-area:2 / 1 / 3 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkf2fkjinlineContent-gridContainer] > [id="comp-jnmw33vq"]{position:relative;margin:58px 0px 43px 0;left:771px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}#comp-jnkfa87i{width:144px;height:auto;}#comp-jnkfb1pv{--lnw:1px;--brd:var(--color_18);--alpha-brd:1;}#comp-jnkfb1pv{width:111px;height:5px;transform:rotate(90deg);--comp-rotate-z:90deg;}#comp-jnkfbetl{width:144px;height:auto;}#comp-jnkf9i2c{--lnw:1px;--brd:var(--color_18);--alpha-brd:1;}#comp-jnkf9i2c{width:111px;height:5px;transform:rotate(90deg);--comp-rotate-z:90deg;}#comp-jnkf7fnl{width:174px;height:auto;}#comp-jnkfabw2{width:117px;height:auto;}#comp-jnkfbj9f{width:210px;height:auto;}#comp-jnkf00u6{width:210px;height:auto;}#comp-jnmw33vq{width:235px;height:81px;}#comp-jnkafupw{left:0;margin-left:0;width:100%;min-width:980px;}[data-mesh-id=comp-jnkafur3inlineContent]{height:auto;width:100%;display:flex;}[data-mesh-id=comp-jnkafur3inlineContent-gridContainer]{position:static;display:grid;height:auto;width:100%;min-height:auto;margin-bottom:-157px;grid-template-rows:min-content 1fr;grid-template-columns:100%;}[data-mesh-id=comp-jnkafur3inlineContent-gridContainer] > [id="comp-jnkafure"]{position:relative;margin:0px 0px 0 calc((100% - 980px) * 0.5);left:-48px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkafur3inlineContent-gridContainer] > [id="comp-jnkati8o"]{position:relative;margin:0px 0px 0px calc((100% - 980px) * 0.5);left:-48px;grid-area:2 / 1 / 3 / 2;justify-self:start;align-self:start;}#comp-jnkafur3{width:980px;}#comp-jnkafure{--brw:0px;--brd:var(--color_15);--bg:var(--color_11);--rd:0px 0px 0px 0px;--shd:none;--gradient:none;--alpha-bg:1;--alpha-brd:1;--boxShadowToggleOn-shd:none;--bg-gradient:none;}#comp-jnkafure{width:1077px;}[data-mesh-id=comp-jnkafureinlineContent]{height:auto;width:1077px;}[data-mesh-id=comp-jnkafureinlineContent-gridContainer]{position:static;display:grid;height:auto;width:100%;min-height:auto;grid-template-rows:repeat(4, min-content) 1fr;grid-template-columns:100%;}[data-mesh-id="comp-jnkafurf-rotated-wrapper"] > [id="comp-jnkafurf"]{position:relative;left:86px;top:8px;}[data-mesh-id="comp-jnkafurm-rotated-wrapper"] > [id="comp-jnkafurm"]{position:relative;left:69px;top:33px;}[data-mesh-id="comp-jnn6d3gh-rotated-wrapper"] > [id="comp-jnn6d3gh"]{position:relative;left:8px;top:78px;}[data-mesh-id=comp-jnkafurf-rotated-wrapper]{position:static;height:36px;width:0;margin:0px 0px 6px 0;grid-area:2 / 1 / 3 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkafurm-rotated-wrapper]{position:static;height:71px;width:0;margin:0px 0px 31px 0;grid-area:3 / 1 / 4 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnn6d3gh-rotated-wrapper]{position:static;height:195px;width:0;margin:0px 0px 60px 0;grid-area:5 / 1 / 6 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkafureinlineContent-gridContainer] > [id="comp-jnkafurr"]{position:relative;margin:68px 0px -171px 0;left:228px;grid-area:1 / 1 / 5 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkafureinlineContent-gridContainer] > [id="comp-jnkafurt"]{position:relative;margin:78px 0px 10px 0;left:572px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkafureinlineContent-gridContainer] > [id="comp-jnmufz7r"]{position:relative;margin:2px 0px 11px 0;left:573px;grid-area:2 / 1 / 3 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkafureinlineContent-gridContainer] > [id="comp-jnkafurv"]{position:relative;margin:0px 0px -16px 0;left:573px;grid-area:3 / 1 / 4 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkafureinlineContent-gridContainer] > [id="comp-jnkafurx"]{position:relative;margin:100px 0px 10px 0;left:573px;grid-area:5 / 1 / 6 / 2;justify-self:start;align-self:start;}#comp-jnkafurf{width:36px;height:auto;transform:rotate(90deg);--comp-rotate-z:90deg;}#comp-jnkafurm{--lnw:1px;--brd:var(--color_18);--alpha-brd:1;}#comp-jnkafurm{width:71px;height:5px;transform:rotate(90deg);--comp-rotate-z:90deg;}#comp-jnn6d3gh{width:195px;height:auto;transform:rotate(90deg);--comp-rotate-z:90deg;}#comp-jnkafurr{--contentPaddingLeft:0px;--contentPaddingRight:0px;--contentPaddingTop:0px;--contentPaddingBottom:0px;}@media (prefers-reduced-motion: no-preference) {#comp-jnkafurr:not([data-motion-enter="done"]){opacity:0;}}#comp-jnkafurr{width:221px;height:375px;}#comp-jnkafurt{--blendMode:normal;--textShadow:0px 0px transparent;--textOutline:0px 0px transparent;}#comp-jnkafurt{width:312px;height:auto;}#comp-jnmufz7r{width:251px;height:auto;}#comp-jnkafurv{--blendMode:normal;--textShadow:0px 0px transparent;--textOutline:0px 0px transparent;}#comp-jnkafurv{width:365px;height:auto;}#comp-jnkafurx{--brw:1px;--brd:var(--color_12);--bg:var(--color_11);--rd:4px 4px 0px 0px;--shd:none;--gradient:none;--alpha-bg:0;--alpha-brd:1;--boxShadowToggleOn-shd:none;--bg-gradient:none;}#comp-jnkafurx{width:246px;}[data-mesh-id=comp-jnkafurxinlineContent]{height:auto;width:246px;}[data-mesh-id=comp-jnkafurxinlineContent-gridContainer]{position:static;display:grid;height:auto;width:100%;min-height:auto;grid-template-rows:1fr;grid-template-columns:100%;}[data-mesh-id="comp-jnkafurz-rotated-wrapper"] > [id="comp-jnkafurz"]{position:relative;left:93px;top:27px;}[data-mesh-id="comp-jnkafus1-rotated-wrapper"] > [id="comp-jnkafus1"]{position:relative;left:152px;top:31px;}[data-mesh-id="comp-jnkafus3-rotated-wrapper"] > [id="comp-jnkafus3"]{position:relative;left:92px;top:31px;}[data-mesh-id=comp-jnkafurz-rotated-wrapper]{position:static;height:60px;width:0;margin:2px 0px 6px 0;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkafus1-rotated-wrapper]{position:static;height:66px;width:0;margin:2px 0px 0px 0;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkafus3-rotated-wrapper]{position:static;height:66px;width:0;margin:2px 0px 0px 0;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkafurxinlineContent-gridContainer] > [id="comp-jnkafus6"]{position:relative;margin:21px 0px 30px 0;left:14px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkafurxinlineContent-gridContainer] > [id="comp-jnkafus8"]{position:relative;margin:14px 0px 24px 0;left:141px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}#comp-jnkafurz{--lnw:1px;--brd:var(--color_11);--alpha-brd:1;}#comp-jnkafurz{width:60px;height:6px;transform:rotate(90deg);--comp-rotate-z:90deg;}#comp-jnkafus1{--lnw:1px;--brd:var(--color_12);--alpha-brd:1;}#comp-jnkafus1{width:66px;height:5px;transform:rotate(90deg);--comp-rotate-z:90deg;}#comp-jnkafus3{--lnw:1px;--brd:var(--color_12);--alpha-brd:1;}#comp-jnkafus3{width:66px;height:5px;transform:rotate(90deg);--comp-rotate-z:90deg;}#comp-jnkafus6{width:101px;height:auto;}#comp-jnkafus8{width:87px;height:30px;}#comp-jnkati8o{--brw:0px;--brd:var(--color_15);--bg:var(--color_11);--rd:0px 0px 0px 0px;--shd:none;--gradient:none;--alpha-bg:1;--alpha-brd:1;--boxShadowToggleOn-shd:none;--bg-gradient:none;}#comp-jnkati8o{width:1077px;}[data-mesh-id=comp-jnkati8oinlineContent]{height:auto;width:1077px;}[data-mesh-id=comp-jnkati8oinlineContent-gridContainer]{position:static;display:grid;height:auto;width:100%;min-height:auto;grid-template-rows:repeat(5, min-content) 1fr;grid-template-columns:100%;}[data-mesh-id="comp-jnkatia1-rotated-wrapper"] > [id="comp-jnkatia1"]{position:relative;left:951px;top:8px;}[data-mesh-id="comp-jnkatia4-rotated-wrapper"] > [id="comp-jnkatia4"]{position:relative;left:944px;top:23px;}[data-mesh-id="comp-jnn6kdun-rotated-wrapper"] > [id="comp-jnn6kdun"]{position:relative;left:869px;top:91px;}[data-mesh-id=comp-jnkati8oinlineContent-gridContainer] > [id="comp-jnkati99"]{position:relative;margin:71px 0px 13px 0;left:170px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkati8oinlineContent-gridContainer] > [id="comp-jnu14wot"]{position:relative;margin:0px 0px -13px 0;left:171px;grid-area:2 / 1 / 3 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkati8oinlineContent-gridContainer] > [id="comp-jnkati9b"]{position:relative;margin:0px 0px -36px 0;left:171px;grid-area:4 / 1 / 5 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkati8oinlineContent-gridContainer] > [id="comp-jnkati9e"]{position:relative;margin:66px 0px 10px 0;left:171px;grid-area:5 / 1 / 6 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkati8oinlineContent-gridContainer] > [id="comp-jnkati9y"]{position:relative;margin:68px 0px 10px 0;left:629px;grid-area:1 / 1 / 7 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkatia1-rotated-wrapper]{position:static;height:35px;width:0;margin:0px 0px -9px 0;grid-area:3 / 1 / 4 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkatia4-rotated-wrapper]{position:static;height:51px;width:0;margin:18px 0px 13px 0;grid-area:4 / 1 / 5 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnn6kdun-rotated-wrapper]{position:static;height:202px;width:0;margin:0px 0px 68px 0;grid-area:5 / 1 / 6 / 2;justify-self:start;align-self:start;}#comp-jnkati99{--blendMode:normal;--textShadow:0px 0px transparent;--textOutline:0px 0px transparent;}#comp-jnkati99{width:312px;height:auto;}#comp-jnu14wot{width:320px;height:auto;}#comp-jnkati9b{--blendMode:normal;--textShadow:0px 0px transparent;--textOutline:0px 0px transparent;}#comp-jnkati9b{width:365px;height:auto;}#comp-jnkati9e{--brw:1px;--brd:var(--color_12);--bg:var(--color_11);--rd:4px 4px 0px 0px;--shd:none;--gradient:none;--alpha-bg:0;--alpha-brd:1;--boxShadowToggleOn-shd:none;--bg-gradient:none;}#comp-jnkati9e{width:246px;}[data-mesh-id=comp-jnkati9einlineContent]{height:auto;width:246px;}[data-mesh-id=comp-jnkati9einlineContent-gridContainer]{position:static;display:grid;height:auto;width:100%;min-height:auto;grid-template-rows:1fr;grid-template-columns:100%;}[data-mesh-id="comp-jnkati9h-rotated-wrapper"] > [id="comp-jnkati9h"]{position:relative;left:93px;top:27px;}[data-mesh-id="comp-jnkati9j-rotated-wrapper"] > [id="comp-jnkati9j"]{position:relative;left:153px;top:31px;}[data-mesh-id="comp-jnkati9m-rotated-wrapper"] > [id="comp-jnkati9m"]{position:relative;left:92px;top:31px;}[data-mesh-id=comp-jnkati9h-rotated-wrapper]{position:static;height:60px;width:0;margin:2px 0px 6px 0;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkati9j-rotated-wrapper]{position:static;height:66px;width:0;margin:1px 0px 1px 0;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkati9m-rotated-wrapper]{position:static;height:66px;width:0;margin:2px 0px 0px 0;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkati9einlineContent-gridContainer] > [id="comp-jnkati9o"]{position:relative;margin:21px 0px 30px 0;left:14px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnkati9einlineContent-gridContainer] > [id="comp-jnkati9r"]{position:relative;margin:14px 0px 24px 0;left:141px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}#comp-jnkati9h{--lnw:1px;--brd:var(--color_11);--alpha-brd:1;}#comp-jnkati9h{width:60px;height:6px;transform:rotate(90deg);--comp-rotate-z:90deg;}#comp-jnkati9j{--lnw:1px;--brd:var(--color_12);--alpha-brd:1;}#comp-jnkati9j{width:66px;height:5px;transform:rotate(90deg);--comp-rotate-z:90deg;}#comp-jnkati9m{--lnw:1px;--brd:var(--color_12);--alpha-brd:1;}#comp-jnkati9m{width:66px;height:5px;transform:rotate(90deg);--comp-rotate-z:90deg;}#comp-jnkati9o{width:101px;height:auto;}#comp-jnkati9r{width:87px;height:30px;}#comp-jnkati9y{--contentPaddingLeft:0px;--contentPaddingRight:0px;--contentPaddingTop:0px;--contentPaddingBottom:0px;}@media (prefers-reduced-motion: no-preference) {#comp-jnkati9y:not([data-motion-enter="done"]){opacity:0;}}#comp-jnkati9y{width:219px;height:375px;}#comp-jnkatia1{width:35px;height:auto;transform:rotate(90deg);--comp-rotate-z:90deg;}#comp-jnkatia4{--lnw:1px;--brd:var(--color_18);--alpha-brd:1;}#comp-jnkatia4{width:51px;height:5px;transform:rotate(90deg);--comp-rotate-z:90deg;}#comp-jnn6kdun{width:202px;height:auto;transform:rotate(90deg);--comp-rotate-z:90deg;}#comp-lvl19jm4{left:0;margin-left:0;width:100%;min-width:0;}[data-mesh-id=comp-lvl19jm4inlineContent]{height:auto;width:100%;}[data-mesh-id=comp-lvl19jm4inlineContent-gridContainer]{position:static;display:grid;height:auto;width:100%;min-height:auto;grid-template-rows:1fr;grid-template-columns:100%;}[data-mesh-id=comp-lvl19jm4inlineContent-gridContainer] > [id="comp-jnlcpf5e"]{position:relative;margin:0px 0px 0px calc((100% - 980px) * 0.5);left:0px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-lvl19jm4inlineContent-gridContainer] > [id="comp-jnlfp4fi"]{position:relative;margin:477px 0 1px 0;left:0;grid-area:1 / 1 / 2 / 2;justify-self:stretch;align-self:start;}#comp-jnlcpf5e{left:0;margin-left:0;width:100%;min-width:980px;}[data-mesh-id=comp-jnlcpf6zinlineContent]{height:auto;width:100%;}[data-mesh-id=comp-jnlcpf6zinlineContent-gridContainer]{position:static;display:grid;height:auto;width:100%;min-height:499px;grid-template-rows:repeat(2, min-content) 1fr;grid-template-columns:100%;}[data-mesh-id=comp-jnlcpf6zinlineContent-gridContainer] > [id="comp-jnldqj1w"]{position:relative;margin:112px 0px 10px calc((100% - 980px) * 0.5);left:30px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnlcpf6zinlineContent-gridContainer] > [id="comp-jnlnmsl4"]{position:relative;margin:152px 0px 10px calc((100% - 980px) * 0.5);left:396px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnlcpf6zinlineContent-gridContainer] > [id="comp-jnlnmsm3"]{position:relative;margin:141px 0px 10px calc((100% - 980px) * 0.5);left:492px;grid-area:1 / 1 / 2 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnlcpf6zinlineContent-gridContainer] > [id="comp-jnlcyg3c"]{position:relative;margin:11px 0px 10px calc((100% - 980px) * 0.5);left:30px;grid-area:3 / 1 / 4 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnlcpf6zinlineContent-gridContainer] > [id="comp-jnlcyg3d"]{position:relative;margin:8px 0px 10px calc((100% - 980px) * 0.5);left:234px;grid-area:3 / 1 / 4 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnlcpf6zinlineContent-gridContainer] > [id="comp-jnlcyg3e"]{position:relative;margin:0px 0px 10px calc((100% - 980px) * 0.5);left:510px;grid-area:3 / 1 / 4 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnlcpf6zinlineContent-gridContainer] > [id="comp-jnlcyg3a"]{position:relative;margin:8px 0px 10px calc((100% - 980px) * 0.5);left:705px;grid-area:3 / 1 / 4 / 2;justify-self:start;align-self:start;}[data-mesh-id=comp-jnlcpf6zinlineContent-wedge-3]{visibility:hidden;height:296px;width:0;grid-area:1 / 1 / 3 / 2;}#comp-jnlcpf6z{width:980px;}#comp-jnldqj1w{width:368px;height:auto;}#comp-jnlnmsl4{--lnw:1px;--brd:var(--color_11);--alpha-brd:1;}#comp-jnlnmsl4{width:66px;height:5px;}#comp-jnlnmsm3{width:335px;height:auto;}#comp-jnlcyg3c{width:105px;height:24px;}#comp-jnlcyg3d{width:181px;height:34px;}#comp-jnlcyg3e{width:93px;height:47px;}#comp-jnlcyg3a{width:235px;height:29px;}#comp-jnlfp4fi{width:100%;left:0;margin-left:0;min-width:initial;height:21px;}</style>
<style id="compCssMappers_c1dmp">
	

#c1dmp{width:auto;min-height:40px;}#pageBackground_c1dmp{--bg-position:absolute;--fill-layer-background-overlay-color:transparent;--fill-layer-background-overlay-position:absolute;--bg-overlay-color:rgb(var(--color_15));--bg-gradient:none;}#comp-lvl19jm2{--bg-overlay-color:transparent;--bg-gradient:none;min-width:980px;}#comp-jnk0xbql{--bg-overlay-color:transparent;--bg-gradient:none;--padding:0px;--margin:0px;min-width:980px;--firstChildMarginTop:-1px;--lastChildMarginBottom:-1px;--items-direction:row;}#comp-jnk0xbsw{--fill-layer-image-opacity:0.2;--fill-layer-background-media-position:fixed;--fill-layer-background-media-pointer-events:none;--bg-overlay-color:rgba(var(--color_15), 0.92);--bg-gradient:none;width:100%;--column-width:980px;--column-flex:980;}#comp-jnk1qp12{--min-height:150px;}#comp-jnk1znbc{transform-origin:center 0.5px;}#comp-jnk2g9kl{--shc-mutated-brightness:128,128,128;}#comp-jnk2iqwu{transform-origin:center 0.5px;}.comp-jnmuwc3w {
				--wix-direction: ltr;
--imageGridPosition: 5;
--widgetLayout: 2;
--imageScaling: 2;
--alignment: 2;
--dateMarginBottom: 62;
--buttonsStyle: 1;
--rsvpMarginBottom: 0;
--cardsPerRow: 3;
--descriptionMarginBottom: 42;
--listLayout: 3;
--verticalImagePosition: 1;
--dateAndLocationMarginBottom: 54;
--imagePosition: 2;
--countdownMarginBottom: 60;
--imageWidth: 50;
--listAlignment: 2;
--roundedButtonsBorderRadius: 100;
--listImageLayout: 1;
--oneButtonWidth: 233;
--imageRatio: 1;
--widgetType: 1;
--buttonHeight: 81;
--titleMarginBottom: 68;
--contentAlignment: 2;
--locationMarginBottom: 62;
--buttonsBorderRadius: 4;
--cardLocationAndDateFontSize: 16;
--cardDescriptionFontSize: 15;
--listHeaderTitleFontSizeCompactMobile: 16;
--listDateFontSizeCompactMobile: 14;
--listLocationFontSizeCompactMobile: 14;
--listHeaderTitleFontSizeMobile: 20;
--listDateFontSizeMobile: 16;
--listContentTextFontSizeMobile: 16;
--listGeneralTitleFontSizeMobile: 28;
--mobileListLayout: 1;
--listButtonFontSizeMobile: 16;
--listButtonFontSizeCompactMobile: 14;
--cardBorderWidth: 1;
--borderWidth: 0;
--todayButtonBorderWidth: 1;
--todayButtonBorderRadius: 0;
--listRoundedButtonBorderRadius: 100;
--listBorderWidth: 0;
--calendarCellBorderWidth: 1;
--calendarBorderWidth: 0;
--buttonsBorderWidth: 1;
--todayRoundedButtonBorderRadius: 100;
--listButtonBorderRadius: 0;
--listButtonBorderWidth: 1;
--calendarDetailsTitleTextSize: 16;
--calendarDetailsDateLocationTextSize: 14;
--calendarDetailsDescriptionTextSize: 14;
--multiImageScaling: 2;
--locationAndDateFormat: 1;
--listLocationAndDateFormat: 1;
--cardLocationAndDateFormat: 1;
--verticalDividerWidth: 1;
--verticalDividerHeight: 94;
--horizontalDividerWidth: 20;
--horizontalDividerHeight: 1;
--compactHorizontalDividerWidth: 36;
--compactHorizontalDividerHeight: 1;
--imageOpacity: 70;
--listButtonStyle: 1;
--cardMargins: 20;
--sideBySideLayoutMargins: 30;
--listImageOpacity: 100;
--listImageWidth: 50;
--listDividerWidth: 1;
--listStripWidth: 20;
--calendarWeekStartDay: 1;
--calendarListTextSize: 14;
--calendarListDividerWidth: 1;
--todayButtonStyle: 2;
--listContentTextFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--cardDescriptionFont: normal normal normal 16px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--calendarMonthFont: normal normal normal 18px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--calendarWeekdaysFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--calendarDayNumberFont: normal normal normal 24px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--calendarCellEventNameFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--todayHollowButtonFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--todayButtonFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--ribbonFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--soldOutRibbonFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--rsvpClosedRibbonFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--joinWaitlistRibbonFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--membershipRibbonFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--recurringRibbonFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--compactTextsFont: normal normal normal 24px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--eventDescriptionFontV2: normal normal normal 16px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--listImageBackgroundColor: 144,19,254;
--listImageBackgroundColor-rgb: 144,19,254;
--listImageBackgroundColor-opacity: 1;
--backgroundColor: 255,255,255;
--backgroundColor-rgb: 255,255,255;
--backgroundColor-opacity: 1;
--cardBackgroundColor: 255,255,255;
--cardBackgroundColor-rgb: 255,255,255;
--cardBackgroundColor-opacity: 1;
--listGeneralTitleColor: 12,29,57;
--listGeneralTitleColor-rgb: 12,29,57;
--listGeneralTitleColor-opacity: 1;
--textsColor: 12,29,57;
--textsColor-rgb: 12,29,57;
--textsColor-opacity: 1;
--cardBorderColor: 201,209,222;
--cardBorderColor-rgb: 201,209,222;
--cardBorderColor-opacity: 1;
--labelsColor: 12,29,57;
--labelsColor-rgb: 12,29,57;
--labelsColor-opacity: 1;
--listButtonBorderColor: 144,19,254;
--listButtonBorderColor-rgb: 144,19,254;
--listButtonBorderColor-opacity: 1;
--listHeaderTitleColor: 12,29,57;
--listHeaderTitleColor-rgb: 12,29,57;
--listHeaderTitleColor-opacity: 1;
--buttonsBorderColor: 144,19,254,0;
--buttonsBorderColor-rgb: 144,19,254;
--buttonsBorderColor-opacity: 0;
--buttonsBackgroundColor: 255,255,255;
--buttonsBackgroundColor-rgb: 255,255,255;
--buttonsBackgroundColor-opacity: 1;
--imageBackgroundColor: 12,29,57;
--imageBackgroundColor-rgb: 12,29,57;
--imageBackgroundColor-opacity: 1;
--dividerColor: 12,29,57;
--dividerColor-rgb: 12,29,57;
--dividerColor-opacity: 1;
--descriptionColor: 12,29,57;
--descriptionColor-rgb: 12,29,57;
--descriptionColor-opacity: 1;
--fullButtonsFontColor: 12,29,57;
--fullButtonsFontColor-rgb: 12,29,57;
--fullButtonsFontColor-opacity: 1;
--hollowButtonsFontColor: 12,29,57;
--hollowButtonsFontColor-rgb: 12,29,57;
--hollowButtonsFontColor-opacity: 1;
--borderColor: 201,209,222;
--borderColor-rgb: 201,209,222;
--borderColor-opacity: 1;
--listFullButtonFontColor: 255,255,255;
--listFullButtonFontColor-rgb: 255,255,255;
--listFullButtonFontColor-opacity: 1;
--listHollowButtonFontColor: 144,19,254;
--listHollowButtonFontColor-rgb: 144,19,254;
--listHollowButtonFontColor-opacity: 1;
--titleColor: 12,29,57;
--titleColor-rgb: 12,29,57;
--titleColor-opacity: 1;
--countdownColor: 12,29,57;
--countdownColor-rgb: 12,29,57;
--countdownColor-opacity: 1;
--cardsBackgroundColor: 255,255,255,0;
--cardsBackgroundColor-rgb: 255,255,255;
--cardsBackgroundColor-opacity: 0;
--listButtonBackgroundColor: 144,19,254;
--listButtonBackgroundColor-rgb: 144,19,254;
--listButtonBackgroundColor-opacity: 1;
--listContentTitleColor: 144,19,254;
--listContentTitleColor-rgb: 144,19,254;
--listContentTitleColor-opacity: 1;
--listHeaderDateTimeColor: 12,29,57;
--listHeaderDateTimeColor-rgb: 12,29,57;
--listHeaderDateTimeColor-opacity: 1;
--listContentTextColor: 12,29,57;
--listContentTextColor-rgb: 12,29,57;
--listContentTextColor-opacity: 1;
--listHeaderLocationColor: 12,29,57;
--listHeaderLocationColor-rgb: 12,29,57;
--listHeaderLocationColor-opacity: 1;
--calendarCellBackground: 255,255,255;
--calendarCellBackground-rgb: 255,255,255;
--calendarCellBackground-opacity: 1;
--calendarBorderColor: 201,209,222;
--calendarBorderColor-rgb: 201,209,222;
--calendarBorderColor-opacity: 1;
--calendarMainActiveColor: 144,19,254;
--calendarMainActiveColor-rgb: 144,19,254;
--calendarMainActiveColor-opacity: 1;
--calendarMonthColor: 12,29,57;
--calendarMonthColor-rgb: 12,29,57;
--calendarMonthColor-opacity: 1;
--calendarWeekdaysColor: 12,29,57;
--calendarWeekdaysColor-rgb: 12,29,57;
--calendarWeekdaysColor-opacity: 1;
--calendarDayNumberColor: 12,29,57;
--calendarDayNumberColor-rgb: 12,29,57;
--calendarDayNumberColor-opacity: 1;
--calendarCellEventNameColor: 12,29,57;
--calendarCellEventNameColor-rgb: 12,29,57;
--calendarCellEventNameColor-opacity: 1;
--todayHollowButtonColor: 144,19,254;
--todayHollowButtonColor-rgb: 144,19,254;
--todayHollowButtonColor-opacity: 1;
--todayButtonColor: 255,255,255;
--todayButtonColor-rgb: 255,255,255;
--todayButtonColor-opacity: 1;
--ribbonTextColor: 255,255,255;
--ribbonTextColor-rgb: 255,255,255;
--ribbonTextColor-opacity: 1;
--soldOutRibbonTextColor: 255,255,255;
--soldOutRibbonTextColor-rgb: 255,255,255;
--soldOutRibbonTextColor-opacity: 1;
--rsvpClosedRibbonTextColor: 255,255,255;
--rsvpClosedRibbonTextColor-rgb: 255,255,255;
--rsvpClosedRibbonTextColor-opacity: 1;
--joinWaitlistRibbonTextColor: 255,255,255;
--joinWaitlistRibbonTextColor-rgb: 255,255,255;
--joinWaitlistRibbonTextColor-opacity: 1;
--membershipRibbonTextColor: 12,29,57;
--membershipRibbonTextColor-rgb: 12,29,57;
--membershipRibbonTextColor-opacity: 1;
--recurringRibbonTextColor: 12,29,57;
--recurringRibbonTextColor-rgb: 12,29,57;
--recurringRibbonTextColor-opacity: 1;
--onImageHollowButtonsFontColor: 255,255,255;
--onImageHollowButtonsFontColor-rgb: 255,255,255;
--onImageHollowButtonsFontColor-opacity: 1;
--onImageFullButtonsFontColor: 12,29,57;
--onImageFullButtonsFontColor-rgb: 12,29,57;
--onImageFullButtonsFontColor-opacity: 1;
--onImageCountdownColor: 255,255,255;
--onImageCountdownColor-rgb: 255,255,255;
--onImageCountdownColor-opacity: 1;
--onImageTitleColor: 255,255,255;
--onImageTitleColor-rgb: 255,255,255;
--onImageTitleColor-opacity: 1;
--onImageDescriptionColor: 255,255,255;
--onImageDescriptionColor-rgb: 255,255,255;
--onImageDescriptionColor-opacity: 1;
--onImageLabelsColor: 255,255,255;
--onImageLabelsColor-rgb: 255,255,255;
--onImageLabelsColor-opacity: 1;
--onImageTextsColor: 255,255,255;
--onImageTextsColor-rgb: 255,255,255;
--onImageTextsColor-opacity: 1;
--calendarCellBorderColor: 201,209,222;
--calendarCellBorderColor-rgb: 201,209,222;
--calendarCellBorderColor-opacity: 1;
--calendarPastDaysBackground: 201,209,222,0.1;
--calendarPastDaysBackground-rgb: 201,209,222;
--calendarPastDaysBackground-opacity: 0.1;
--todayButtonBackgroundColor: 144,19,254;
--todayButtonBackgroundColor-rgb: 144,19,254;
--todayButtonBackgroundColor-opacity: 1;
--todayButtonBorderColor: 144,19,254;
--todayButtonBorderColor-rgb: 144,19,254;
--todayButtonBorderColor-opacity: 1;
--ribbonBackgroundColor: 246,77,67;
--ribbonBackgroundColor-rgb: 246,77,67;
--ribbonBackgroundColor-opacity: 1;
--listBackgroundColor: 255,255,255;
--listBackgroundColor-rgb: 255,255,255;
--listBackgroundColor-opacity: 1;
--listBorderColor: 201,209,222;
--listBorderColor-rgb: 201,209,222;
--listBorderColor-opacity: 1;
--listDividerColor: 201,209,222;
--listDividerColor-rgb: 201,209,222;
--listDividerColor-opacity: 1;
--soldOutRibbonBackgroundColor: 246,77,67;
--soldOutRibbonBackgroundColor-rgb: 246,77,67;
--soldOutRibbonBackgroundColor-opacity: 1;
--rsvpClosedRibbonBackgroundColor: 246,77,67;
--rsvpClosedRibbonBackgroundColor-rgb: 246,77,67;
--rsvpClosedRibbonBackgroundColor-opacity: 1;
--joinWaitlistRibbonBackgroundColor: 246,77,67;
--joinWaitlistRibbonBackgroundColor-rgb: 246,77,67;
--joinWaitlistRibbonBackgroundColor-opacity: 1;
--membershipRibbonBorderColor: 12,29,57;
--membershipRibbonBorderColor-rgb: 12,29,57;
--membershipRibbonBorderColor-opacity: 1;
--recurringRibbonBorderColor: 12,29,57;
--recurringRibbonBorderColor-rgb: 12,29,57;
--recurringRibbonBorderColor-opacity: 1;
--onImageButtonsBorderColor: 255,255,255;
--onImageButtonsBorderColor-rgb: 255,255,255;
--onImageButtonsBorderColor-opacity: 1;
--onImageButtonsBackgroundColor: 255,255,255;
--onImageButtonsBackgroundColor-rgb: 255,255,255;
--onImageButtonsBackgroundColor-opacity: 1;
--onImageDividerColor: 255,255,255;
--onImageDividerColor-rgb: 255,255,255;
--onImageDividerColor-opacity: 1;
--calendarBackgroundColor: 255,255,255,0;
--calendarBackgroundColor-rgb: 255,255,255;
--calendarBackgroundColor-opacity: 0;
--listLoadMoreContainerBackgroundColor: var(--cardBackgroundColor);
--listLoadMoreContainerBackgroundColor-rgb: var(--cardBackgroundColor-rgb);
--listLoadMoreContainerBackgroundColor-opacity: var(--cardBackgroundColor-opacity);
--eventTitleColorV2: 12,29,57;
--eventTitleColorV2-rgb: 12,29,57;
--eventTitleColorV2-opacity: 1;
--eventDateColorV2: 12,29,57;
--eventDateColorV2-rgb: 12,29,57;
--eventDateColorV2-opacity: 1;
--eventLocationColorV2: 12,29,57;
--eventLocationColorV2-rgb: 12,29,57;
--eventLocationColorV2-opacity: 1;
--eventDescriptionColorV2: 12,29,57;
--eventDescriptionColorV2-rgb: 12,29,57;
--eventDescriptionColorV2-opacity: 1;
--linkColorV2: 12,29,57;
--linkColorV2-rgb: 12,29,57;
--linkColorV2-opacity: 1;
--shareIconsColorV2: 12,29,57;
--shareIconsColorV2-rgb: 12,29,57;
--shareIconsColorV2-opacity: 1;
--hoveredEventTitleColorV2: 12,29,57;
--hoveredEventTitleColorV2-rgb: 12,29,57;
--hoveredEventTitleColorV2-opacity: 1;
--hoveredEventDateColorV2: 12,29,57;
--hoveredEventDateColorV2-rgb: 12,29,57;
--hoveredEventDateColorV2-opacity: 1;
--hoveredEventLocationColorV2: 12,29,57;
--hoveredEventLocationColorV2-rgb: 12,29,57;
--hoveredEventLocationColorV2-opacity: 1;
--hoveredEventDescriptionColor: 12,29,57;
--hoveredEventDescriptionColor-rgb: 12,29,57;
--hoveredEventDescriptionColor-opacity: 1;
--listHeaderLocationFont: normal normal normal 16/20px avenir-lt-w01_35-light1475496,sans-serif;
--listHeaderLocationFont-style: normal;
--listHeaderLocationFont-variant: normal;
--listHeaderLocationFont-weight: normal;
--listHeaderLocationFont-size: 16;
--listHeaderLocationFont-line-height: 20px;
--listHeaderLocationFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--listHeaderLocationFont-text-decoration: none;
--descriptionFont: normal normal normal 15/18px avenir-lt-w01_35-light1475496,sans-serif;
--descriptionFont-style: normal;
--descriptionFont-variant: normal;
--descriptionFont-weight: normal;
--descriptionFont-size: 15;
--descriptionFont-line-height: 18px;
--descriptionFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--descriptionFont-text-decoration: none;
--listGeneralTitleFont: normal normal normal 36/45px proxima-n-w01-reg,sans-serif;
--listGeneralTitleFont-style: normal;
--listGeneralTitleFont-variant: normal;
--listGeneralTitleFont-weight: normal;
--listGeneralTitleFont-size: 36;
--listGeneralTitleFont-line-height: 45px;
--listGeneralTitleFont-family: proxima-n-w01-reg,sans-serif;
--listGeneralTitleFont-text-decoration: none;
--countdownFont: normal normal normal 20/25px avenir-lt-w01_35-light1475496,sans-serif;
--countdownFont-style: normal;
--countdownFont-variant: normal;
--countdownFont-weight: normal;
--countdownFont-size: 20;
--countdownFont-line-height: 25px;
--countdownFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--countdownFont-text-decoration: none;
--listHollowButtonFont: normal normal normal 16/20px avenir-lt-w01_35-light1475496,sans-serif;
--listHollowButtonFont-style: normal;
--listHollowButtonFont-variant: normal;
--listHollowButtonFont-weight: normal;
--listHollowButtonFont-size: 16;
--listHollowButtonFont-line-height: 20px;
--listHollowButtonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--listHollowButtonFont-text-decoration: none;
--hollowButtonsFont: normal normal normal 16/20px avenir-lt-w01_35-light1475496,sans-serif;
--hollowButtonsFont-style: normal;
--hollowButtonsFont-variant: normal;
--hollowButtonsFont-weight: normal;
--hollowButtonsFont-size: 16;
--hollowButtonsFont-line-height: 20px;
--hollowButtonsFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--hollowButtonsFont-text-decoration: none;
--labelsFont: normal normal normal 16/20px avenir-lt-w01_35-light1475496,sans-serif;
--labelsFont-style: normal;
--labelsFont-variant: normal;
--labelsFont-weight: normal;
--labelsFont-size: 16;
--labelsFont-line-height: 20px;
--labelsFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--labelsFont-text-decoration: none;
--listHeaderTitleFont: normal normal normal 26/32px avenir-lt-w01_35-light1475496,sans-serif;
--listHeaderTitleFont-style: normal;
--listHeaderTitleFont-variant: normal;
--listHeaderTitleFont-weight: normal;
--listHeaderTitleFont-size: 26;
--listHeaderTitleFont-line-height: 32px;
--listHeaderTitleFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--listHeaderTitleFont-text-decoration: none;
--listFullButtonFont: normal normal normal 16/20px avenir-lt-w01_35-light1475496,sans-serif;
--listFullButtonFont-style: normal;
--listFullButtonFont-variant: normal;
--listFullButtonFont-weight: normal;
--listFullButtonFont-size: 16;
--listFullButtonFont-line-height: 20px;
--listFullButtonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--listFullButtonFont-text-decoration: none;
--fullButtonsFont: normal normal normal 16/20px avenir-lt-w01_85-heavy1475544,sans-serif;
--fullButtonsFont-style: normal;
--fullButtonsFont-variant: normal;
--fullButtonsFont-weight: normal;
--fullButtonsFont-size: 16;
--fullButtonsFont-line-height: 20px;
--fullButtonsFont-family: avenir-lt-w01_85-heavy1475544,sans-serif;
--fullButtonsFont-text-decoration: none;
--titleFont: normal normal normal 46/57px "playfair display",serif;
--titleFont-style: normal;
--titleFont-variant: normal;
--titleFont-weight: normal;
--titleFont-size: 46;
--titleFont-line-height: 57px;
--titleFont-family: "playfair display",serif;
--titleFont-text-decoration: none;
--textsFont: normal normal normal 15/18px avenir-lt-w01_35-light1475496,sans-serif;
--textsFont-style: normal;
--textsFont-variant: normal;
--textsFont-weight: normal;
--textsFont-size: 15;
--textsFont-line-height: 18px;
--textsFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--textsFont-text-decoration: none;
--listHeaderDateTimeFont: normal normal normal 16px/32px avenir-lt-w01_35-light1475496,sans-serif;
--listHeaderDateTimeFont-style: normal;
--listHeaderDateTimeFont-variant: normal;
--listHeaderDateTimeFont-weight: normal;
--listHeaderDateTimeFont-size: 16px;
--listHeaderDateTimeFont-line-height: 32px;
--listHeaderDateTimeFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--listHeaderDateTimeFont-text-decoration: none;
--listContentTextFont-style: normal;
--listContentTextFont-variant: normal;
--listContentTextFont-weight: normal;
--listContentTextFont-size: 14px;
--listContentTextFont-line-height: 1.4em;
--listContentTextFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--listContentTextFont-text-decoration: none;
--cardDescriptionFont-style: normal;
--cardDescriptionFont-variant: normal;
--cardDescriptionFont-weight: normal;
--cardDescriptionFont-size: 16px;
--cardDescriptionFont-line-height: 1.4em;
--cardDescriptionFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--cardDescriptionFont-text-decoration: none;
--calendarMonthFont-style: normal;
--calendarMonthFont-variant: normal;
--calendarMonthFont-weight: normal;
--calendarMonthFont-size: 18px;
--calendarMonthFont-line-height: 1.4em;
--calendarMonthFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--calendarMonthFont-text-decoration: none;
--calendarWeekdaysFont-style: normal;
--calendarWeekdaysFont-variant: normal;
--calendarWeekdaysFont-weight: normal;
--calendarWeekdaysFont-size: 14px;
--calendarWeekdaysFont-line-height: 1.4em;
--calendarWeekdaysFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--calendarWeekdaysFont-text-decoration: none;
--calendarDayNumberFont-style: normal;
--calendarDayNumberFont-variant: normal;
--calendarDayNumberFont-weight: normal;
--calendarDayNumberFont-size: 24px;
--calendarDayNumberFont-line-height: 1.4em;
--calendarDayNumberFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--calendarDayNumberFont-text-decoration: none;
--calendarCellEventNameFont-style: normal;
--calendarCellEventNameFont-variant: normal;
--calendarCellEventNameFont-weight: normal;
--calendarCellEventNameFont-size: 14px;
--calendarCellEventNameFont-line-height: 1.4em;
--calendarCellEventNameFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--calendarCellEventNameFont-text-decoration: none;
--todayHollowButtonFont-style: normal;
--todayHollowButtonFont-variant: normal;
--todayHollowButtonFont-weight: normal;
--todayHollowButtonFont-size: 14px;
--todayHollowButtonFont-line-height: 1.4em;
--todayHollowButtonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--todayHollowButtonFont-text-decoration: none;
--todayButtonFont-style: normal;
--todayButtonFont-variant: normal;
--todayButtonFont-weight: normal;
--todayButtonFont-size: 14px;
--todayButtonFont-line-height: 1.4em;
--todayButtonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--todayButtonFont-text-decoration: none;
--ribbonFont-style: normal;
--ribbonFont-variant: normal;
--ribbonFont-weight: normal;
--ribbonFont-size: 14px;
--ribbonFont-line-height: 1.4em;
--ribbonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--ribbonFont-text-decoration: none;
--soldOutRibbonFont-style: normal;
--soldOutRibbonFont-variant: normal;
--soldOutRibbonFont-weight: normal;
--soldOutRibbonFont-size: 14px;
--soldOutRibbonFont-line-height: 1.4em;
--soldOutRibbonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--soldOutRibbonFont-text-decoration: none;
--rsvpClosedRibbonFont-style: normal;
--rsvpClosedRibbonFont-variant: normal;
--rsvpClosedRibbonFont-weight: normal;
--rsvpClosedRibbonFont-size: 14px;
--rsvpClosedRibbonFont-line-height: 1.4em;
--rsvpClosedRibbonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--rsvpClosedRibbonFont-text-decoration: none;
--joinWaitlistRibbonFont-style: normal;
--joinWaitlistRibbonFont-variant: normal;
--joinWaitlistRibbonFont-weight: normal;
--joinWaitlistRibbonFont-size: 14px;
--joinWaitlistRibbonFont-line-height: 1.4em;
--joinWaitlistRibbonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--joinWaitlistRibbonFont-text-decoration: none;
--membershipRibbonFont-style: normal;
--membershipRibbonFont-variant: normal;
--membershipRibbonFont-weight: normal;
--membershipRibbonFont-size: 14px;
--membershipRibbonFont-line-height: 1.4em;
--membershipRibbonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--membershipRibbonFont-text-decoration: none;
--recurringRibbonFont-style: normal;
--recurringRibbonFont-variant: normal;
--recurringRibbonFont-weight: normal;
--recurringRibbonFont-size: 14px;
--recurringRibbonFont-line-height: 1.4em;
--recurringRibbonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--recurringRibbonFont-text-decoration: none;
--compactTextsFont-style: normal;
--compactTextsFont-variant: normal;
--compactTextsFont-weight: normal;
--compactTextsFont-size: 24px;
--compactTextsFont-line-height: 1.4em;
--compactTextsFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--compactTextsFont-text-decoration: none;
--listTitleFontV2: normal normal normal 36/45px proxima-n-w01-reg,sans-serif;
--listTitleFontV2-style: normal;
--listTitleFontV2-variant: normal;
--listTitleFontV2-weight: normal;
--listTitleFontV2-size: 36;
--listTitleFontV2-line-height: 45px;
--listTitleFontV2-family: proxima-n-w01-reg,sans-serif;
--listTitleFontV2-text-decoration: none;
--eventTitleFontV2: normal normal normal 26/32px avenir-lt-w01_35-light1475496,sans-serif;
--eventTitleFontV2-style: normal;
--eventTitleFontV2-variant: normal;
--eventTitleFontV2-weight: normal;
--eventTitleFontV2-size: 26;
--eventTitleFontV2-line-height: 32px;
--eventTitleFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--eventTitleFontV2-text-decoration: none;
--eventDateFontV2: normal normal normal 16/20px avenir-lt-w01_35-light1475496,sans-serif;
--eventDateFontV2-style: normal;
--eventDateFontV2-variant: normal;
--eventDateFontV2-weight: normal;
--eventDateFontV2-size: 16;
--eventDateFontV2-line-height: 20px;
--eventDateFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--eventDateFontV2-text-decoration: none;
--eventLocationFontV2: normal normal normal 16/20px avenir-lt-w01_35-light1475496,sans-serif;
--eventLocationFontV2-style: normal;
--eventLocationFontV2-variant: normal;
--eventLocationFontV2-weight: normal;
--eventLocationFontV2-size: 16;
--eventLocationFontV2-line-height: 20px;
--eventLocationFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--eventLocationFontV2-text-decoration: none;
--eventDescriptionFontV2-style: normal;
--eventDescriptionFontV2-variant: normal;
--eventDescriptionFontV2-weight: normal;
--eventDescriptionFontV2-size: 16px;
--eventDescriptionFontV2-line-height: 1.4em;
--eventDescriptionFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--eventDescriptionFontV2-text-decoration: none;
--linkFontV2: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--linkFontV2-style: normal;
--linkFontV2-variant: normal;
--linkFontV2-weight: normal;
--linkFontV2-size: 14px;
--linkFontV2-line-height: 1.4em;
--linkFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--linkFontV2-text-decoration: underline;
--listFullButtonFontV2: normal normal normal 16/20px avenir-lt-w01_35-light1475496,sans-serif;
--listFullButtonFontV2-style: normal;
--listFullButtonFontV2-variant: normal;
--listFullButtonFontV2-weight: normal;
--listFullButtonFontV2-size: 16;
--listFullButtonFontV2-line-height: 20px;
--listFullButtonFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--listFullButtonFontV2-text-decoration: none;
--listHollowButtonFontV2: normal normal normal 16/20px avenir-lt-w01_35-light1475496,sans-serif;
--listHollowButtonFontV2-style: normal;
--listHollowButtonFontV2-variant: normal;
--listHollowButtonFontV2-weight: normal;
--listHollowButtonFontV2-size: 16;
--listHollowButtonFontV2-line-height: 20px;
--listHollowButtonFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--listHollowButtonFontV2-text-decoration: none;
--hoveredEventTitleFontV2: normal normal normal 26/32px avenir-lt-w01_35-light1475496,sans-serif;
--hoveredEventTitleFontV2-style: normal;
--hoveredEventTitleFontV2-variant: normal;
--hoveredEventTitleFontV2-weight: normal;
--hoveredEventTitleFontV2-size: 26;
--hoveredEventTitleFontV2-line-height: 32px;
--hoveredEventTitleFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--hoveredEventTitleFontV2-text-decoration: none;
--hoveredEventDateFontV2: normal normal normal 16px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--hoveredEventDateFontV2-style: normal;
--hoveredEventDateFontV2-variant: normal;
--hoveredEventDateFontV2-weight: normal;
--hoveredEventDateFontV2-size: 16px;
--hoveredEventDateFontV2-line-height: 1.4em;
--hoveredEventDateFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--hoveredEventDateFontV2-text-decoration: none;
--hoveredEventLocationFontV2: normal normal normal 16px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--hoveredEventLocationFontV2-style: normal;
--hoveredEventLocationFontV2-variant: normal;
--hoveredEventLocationFontV2-weight: normal;
--hoveredEventLocationFontV2-size: 16px;
--hoveredEventLocationFontV2-line-height: 1.4em;
--hoveredEventLocationFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--hoveredEventLocationFontV2-text-decoration: none;
--hoveredEventDescriptionFontV2: normal normal normal 15px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--hoveredEventDescriptionFontV2-style: normal;
--hoveredEventDescriptionFontV2-variant: normal;
--hoveredEventDescriptionFontV2-weight: normal;
--hoveredEventDescriptionFontV2-size: 15px;
--hoveredEventDescriptionFontV2-line-height: 1.4em;
--hoveredEventDescriptionFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--hoveredEventDescriptionFontV2-text-decoration: none;
--CARD_MAX_WIDTH: 700;
--CARD_MIN_WIDTH: 200;
--listMainTitleVisibility: block;
--listFullDateVisibility: block;
--listLocationVisibility: block;
--listVenueNameVisibility: block;
--listDateVisibility: block;
--listImageVisibility: block;
--listDescriptionVisibility: block;
--listSocialBarVisibility: none;
--listMembersVisibility: block;
--listSocialBarVisibilityFlex: none;
--listShortDateLocationDividerVisibility: initial;
--listShortDateLocationAlignment: center;
--listShortDateLocationDateWidth: 80%;
--listTextAlignment: center;
--listImageAspectRatio: 100;
--listImageIsSquare: 1;
--listAdditionalInfoVisibility: block;
--listAdditionalInfoVisibilityArrow: inline-flex;
--isListTextAlignmentLeft: 0;
--isListTextAlignmentRight: 0;
--sideBySideRibbonLeftMargin: auto;
--sideBySideRibbonRightMargin: auto;
--sideBySideImageDirectionEven: row;
--sideBySideImageDirectionOdd: row;
--sideBySideMinimumItemWidth: 480px;
--sideBySideTitleBottomMargin: 0.5em;
--sideBySideFullDateLocationBottomMargin: 30px;
--sideBySideShortDateLocationVisibility: block;
--sideBySideFullDateLocationVisibility: none;
--cardShortDateLocationVisibility: block;
--cardFullDateLocationVisibility: none;
--cardHoveredFullDateLocationVisibility: block;
--listLayoutTitleLocationVisibility: block;
--listLayoutTitleLocationTitleWidth: 90%;
--multiContainImageVisibility: none;
--multiCoverImageVisibility: flex;
--singleContainImageVisibility: none;
--singleCoverImageVisibility: flex;
--calendarEventTitleLineClamp: 2;
--eventSpacing: 30;
--singleButtonFont: var(--fullButtonsFont);
--singleButtonFont-text-decoration: var(--fullButtonsFont-text-decoration);
--singleButtonFont-line-height: var(--fullButtonsFont-line-height);
--singleButtonFont-family: var(--fullButtonsFont-family);
--singleButtonFont-style: var(--fullButtonsFont-style);
--singleButtonFont-size: var(--fullButtonsFont-size);
--singleButtonFont-variant: var(--fullButtonsFont-variant);
--singleButtonFont-weight: var(--fullButtonsFont-weight);
--singleButtonColor: var(--fullButtonsFontColor);
--singleButtonColor-rgb: var(--fullButtonsFontColor-rgb);
--singleButtonColor-opacity: var(--fullButtonsFontColor-opacity);
--singleOnImageButtonColor: var(--onImageFullButtonsFontColor);
--singleOnImageButtonColor-rgb: var(--onImageFullButtonsFontColor-rgb);
--singleOnImageButtonColor-opacity: var(--onImageFullButtonsFontColor-opacity);
--singleButtonBackgroundColor: var(--buttonsBackgroundColor);
--singleButtonBackgroundColor-rgb: var(--buttonsBackgroundColor-rgb);
--singleButtonBackgroundColor-opacity: var(--buttonsBackgroundColor-opacity);
--singleOnImageButtonBackgroundColor: var(--onImageButtonsBackgroundColor);
--singleOnImageButtonBackgroundColor-rgb: var(--onImageButtonsBackgroundColor-rgb);
--singleOnImageButtonBackgroundColor-opacity: var(--onImageButtonsBackgroundColor-opacity);
--singleButtonBorderColor: 0, 0, 0, 0;
--singleButtonBorderColor-rgb: 0, 0, 0;
--singleButtonBorderColor-opacity: 0;
--singleOnImageButtonBorderColor: 0, 0, 0, 0;
--singleOnImageButtonBorderColor-rgb: 0, 0, 0;
--singleOnImageButtonBorderColor-opacity: 0;
--singleButtonBorderWidth: 0;
--singleButtonBorderRadius: var(--buttonsBorderRadius);
--multiButtonFont: var(--listFullButtonFontV2);
--multiButtonFont-text-decoration: var(--listFullButtonFontV2-text-decoration);
--multiButtonFont-line-height: var(--listFullButtonFontV2-line-height);
--multiButtonFont-family: var(--listFullButtonFontV2-family);
--multiButtonFont-style: var(--listFullButtonFontV2-style);
--multiButtonFont-size: var(--listFullButtonFontV2-size);
--multiButtonFont-variant: var(--listFullButtonFontV2-variant);
--multiButtonFont-weight: var(--listFullButtonFontV2-weight);
--multiButtonColor: var(--listFullButtonFontColor);
--multiButtonColor-rgb: var(--listFullButtonFontColor-rgb);
--multiButtonColor-opacity: var(--listFullButtonFontColor-opacity);
--multiButtonBackgroundColor: var(--listButtonBackgroundColor);
--multiButtonBackgroundColor-rgb: var(--listButtonBackgroundColor-rgb);
--multiButtonBackgroundColor-opacity: var(--listButtonBackgroundColor-opacity);
--multiButtonBorderColor: 0, 0, 0, 0;
--multiButtonBorderColor-rgb: 0, 0, 0;
--multiButtonBorderColor-opacity: 0;
--multiButtonBorderWidth: 0;
--multiButtonBorderRadius: var(--listButtonBorderRadius);
--listLoadMoreContainerBorderColor: 0, 0, 0, 0;
--listLoadMoreContainerBorderColor-rgb: 0, 0, 0;
--listLoadMoreContainerBorderColor-opacity: 0;
--listLoadMoreContainerBorderWidth: 0;
--listLoadMoreMobileFontSize: var(--listButtonFontSizeMobile);
--todayButtonResolvedFont: var(--todayHollowButtonFont);
--todayButtonResolvedFont-text-decoration: var(--todayHollowButtonFont-text-decoration);
--todayButtonResolvedFont-line-height: var(--todayHollowButtonFont-line-height);
--todayButtonResolvedFont-family: var(--todayHollowButtonFont-family);
--todayButtonResolvedFont-style: var(--todayHollowButtonFont-style);
--todayButtonResolvedFont-size: var(--todayHollowButtonFont-size);
--todayButtonResolvedFont-variant: var(--todayHollowButtonFont-variant);
--todayButtonResolvedFont-weight: var(--todayHollowButtonFont-weight);
--todayButtonResolvedColor: var(--todayHollowButtonColor);
--todayButtonResolvedColor-rgb: var(--todayHollowButtonColor-rgb);
--todayButtonResolvedColor-opacity: var(--todayHollowButtonColor-opacity);
--todayButtonResolvedBackgroundColor: 0, 0, 0, 0;
--todayButtonResolvedBackgroundColor-rgb: 0, 0, 0;
--todayButtonResolvedBackgroundColor-opacity: 0;
--todayButtonResolvedBorderColor: var(--todayButtonBorderColor);
--todayButtonResolvedBorderColor-rgb: var(--todayButtonBorderColor-rgb);
--todayButtonResolvedBorderColor-opacity: var(--todayButtonBorderColor-opacity);
--todayButtonResolvedBorderWidth: var(--todayButtonBorderWidth);
--todayButtonResolvedBorderRadius: var(--todayButtonBorderRadius);
				--wix-color-1: 255,255,255;
--wix-color-2: 201,209,222;
--wix-color-3: 115,131,156;
--wix-color-4: 58,73,97;
--wix-color-5: 12,29,57;
--wix-color-6: 218,176,255;
--wix-color-7: 199,137,254;
--wix-color-8: 144,19,254;
--wix-color-9: 96,13,169;
--wix-color-10: 48,6,85;
--wix-color-11: 250,196,186;
--wix-color-12: 245,166,151;
--wix-color-13: 240,85,55;
--wix-color-14: 160,57,37;
--wix-color-15: 80,28,18;
--wix-color-16: 254,233,195;
--wix-color-17: 252,222,165;
--wix-color-18: 251,191,77;
--wix-color-19: 167,127,51;
--wix-color-20: 84,64,26;
--wix-color-21: 179,241,212;
--wix-color-22: 139,228,186;
--wix-color-23: 47,214,136;
--wix-color-24: 31,143,91;
--wix-color-25: 16,71,45;
--wix-color-26: 255,255,255;
--wix-color-27: 12,29,57;
--wix-color-28: 201,209,222;
--wix-color-29: 115,131,156;
--wix-color-30: 58,73,97;
--wix-color-31: 144,19,254;
--wix-color-32: 199,137,254;
--wix-color-33: 115,131,156;
--wix-color-34: 255,255,255;
--wix-color-35: 12,29,57;
--wix-color-36: 12,29,57;
--wix-color-37: 58,73,97;
--wix-color-38: 144,19,254;
--wix-color-39: 144,19,254;
--wix-color-40: 255,255,255;
--wix-color-41: 255,255,255;
--wix-color-42: 144,19,254;
--wix-color-43: 144,19,254;
--wix-color-44: 115,131,156;
--wix-color-45: 115,131,156;
--wix-color-46: 255,255,255;
--wix-color-47: 255,255,255;
--wix-color-48: 144,19,254;
--wix-color-49: 144,19,254;
--wix-color-50: 144,19,254;
--wix-color-51: 144,19,254;
--wix-color-52: 255,255,255;
--wix-color-53: 255,255,255;
--wix-color-54: 115,131,156;
--wix-color-55: 115,131,156;
--wix-font-Title: normal normal normal 90px/1.4em "playfair display",serif;
--wix-font-Title-style: normal;
--wix-font-Title-variant: normal;
--wix-font-Title-weight: normal;
--wix-font-Title-size: 90px;
--wix-font-Title-line-height: 1.4em;
--wix-font-Title-family: "playfair display",serif;
--wix-font-Title-text-decoration: none;
--wix-font-Menu: normal normal normal 16px/1.4em din-next-w01-light,sans-serif;
--wix-font-Menu-style: normal;
--wix-font-Menu-variant: normal;
--wix-font-Menu-weight: normal;
--wix-font-Menu-size: 16px;
--wix-font-Menu-line-height: 1.4em;
--wix-font-Menu-family: din-next-w01-light,sans-serif;
--wix-font-Menu-text-decoration: none;
--wix-font-Page-title: normal normal normal 50px/1.4em "playfair display",serif;
--wix-font-Page-title-style: normal;
--wix-font-Page-title-variant: normal;
--wix-font-Page-title-weight: normal;
--wix-font-Page-title-size: 50px;
--wix-font-Page-title-line-height: 1.4em;
--wix-font-Page-title-family: "playfair display",serif;
--wix-font-Page-title-text-decoration: none;
--wix-font-Heading-XL: normal normal normal 30px/1.4em "playfair display",serif;
--wix-font-Heading-XL-style: normal;
--wix-font-Heading-XL-variant: normal;
--wix-font-Heading-XL-weight: normal;
--wix-font-Heading-XL-size: 30px;
--wix-font-Heading-XL-line-height: 1.4em;
--wix-font-Heading-XL-family: "playfair display",serif;
--wix-font-Heading-XL-text-decoration: none;
--wix-font-Heading-L: normal normal normal 25px/1.4em "playfair display",serif;
--wix-font-Heading-L-style: normal;
--wix-font-Heading-L-variant: normal;
--wix-font-Heading-L-weight: normal;
--wix-font-Heading-L-size: 25px;
--wix-font-Heading-L-line-height: 1.4em;
--wix-font-Heading-L-family: "playfair display",serif;
--wix-font-Heading-L-text-decoration: none;
--wix-font-Heading-M: normal normal bold 25px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--wix-font-Heading-M-style: normal;
--wix-font-Heading-M-variant: normal;
--wix-font-Heading-M-weight: bold;
--wix-font-Heading-M-size: 25px;
--wix-font-Heading-M-line-height: 1.4em;
--wix-font-Heading-M-family: avenir-lt-w01_35-light1475496,sans-serif;
--wix-font-Heading-M-text-decoration: none;
--wix-font-Heading-S: normal normal normal 22px/1.4em proxima-n-w01-reg,sans-serif;
--wix-font-Heading-S-style: normal;
--wix-font-Heading-S-variant: normal;
--wix-font-Heading-S-weight: normal;
--wix-font-Heading-S-size: 22px;
--wix-font-Heading-S-line-height: 1.4em;
--wix-font-Heading-S-family: proxima-n-w01-reg,sans-serif;
--wix-font-Heading-S-text-decoration: none;
--wix-font-Body-L: normal normal normal 17px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--wix-font-Body-L-style: normal;
--wix-font-Body-L-variant: normal;
--wix-font-Body-L-weight: normal;
--wix-font-Body-L-size: 17px;
--wix-font-Body-L-line-height: 1.4em;
--wix-font-Body-L-family: avenir-lt-w01_35-light1475496,sans-serif;
--wix-font-Body-L-text-decoration: none;
--wix-font-Body-M: normal normal normal 18px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--wix-font-Body-M-style: normal;
--wix-font-Body-M-variant: normal;
--wix-font-Body-M-weight: normal;
--wix-font-Body-M-size: 18px;
--wix-font-Body-M-line-height: 1.4em;
--wix-font-Body-M-family: avenir-lt-w01_35-light1475496,sans-serif;
--wix-font-Body-M-text-decoration: none;
--wix-font-Body-S: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--wix-font-Body-S-style: normal;
--wix-font-Body-S-variant: normal;
--wix-font-Body-S-weight: normal;
--wix-font-Body-S-size: 14px;
--wix-font-Body-S-line-height: 1.4em;
--wix-font-Body-S-family: avenir-lt-w01_35-light1475496,sans-serif;
--wix-font-Body-S-text-decoration: none;
--wix-font-Body-XS: normal normal normal 12px/1.4em din-next-w01-light,sans-serif;
--wix-font-Body-XS-style: normal;
--wix-font-Body-XS-variant: normal;
--wix-font-Body-XS-weight: normal;
--wix-font-Body-XS-size: 12px;
--wix-font-Body-XS-line-height: 1.4em;
--wix-font-Body-XS-family: din-next-w01-light,sans-serif;
--wix-font-Body-XS-text-decoration: none;
--wix-font-LIGHT: normal normal normal 12px/1.4em HelveticaNeueW01-45Ligh;
--wix-font-LIGHT-style: normal;
--wix-font-LIGHT-variant: normal;
--wix-font-LIGHT-weight: normal;
--wix-font-LIGHT-size: 12px;
--wix-font-LIGHT-line-height: 1.4em;
--wix-font-LIGHT-family: HelveticaNeueW01-45Ligh;
--wix-font-LIGHT-text-decoration: none;
--wix-font-MEDIUM: normal normal normal 12px/1.4em HelveticaNeueW01-55Roma;
--wix-font-MEDIUM-style: normal;
--wix-font-MEDIUM-variant: normal;
--wix-font-MEDIUM-weight: normal;
--wix-font-MEDIUM-size: 12px;
--wix-font-MEDIUM-line-height: 1.4em;
--wix-font-MEDIUM-family: HelveticaNeueW01-55Roma;
--wix-font-MEDIUM-text-decoration: none;
--wix-font-STRONG: normal normal normal 12px/1.4em HelveticaNeueW01-65Medi;
--wix-font-STRONG-style: normal;
--wix-font-STRONG-variant: normal;
--wix-font-STRONG-weight: normal;
--wix-font-STRONG-size: 12px;
--wix-font-STRONG-line-height: 1.4em;
--wix-font-STRONG-family: HelveticaNeueW01-65Medi;
--wix-font-STRONG-text-decoration: none;
		}










#comp-jnk25096{--item-size:30px;--item-margin:0px 0px 14px 0px;--item-display:block;width:30px;height:162px;}#comp-lvl19jm3{--bg-overlay-color:transparent;--bg-gradient:none;min-width:980px;}#comp-jnk1hb83{--bg-overlay-color:transparent;--bg-gradient:none;--padding:0px;--margin:0px;min-width:980px;--firstChildMarginTop:-1px;--lastChildMarginBottom:-1px;--items-direction:row;}#comp-jnk1hb92{--bg-overlay-color:rgb(var(--color_12));--bg-gradient:none;width:100%;--column-width:980px;--column-flex:980;}#comp-jnu2f0tk{transform-origin:center 0.5px;}#comp-jnk1m472{--shc-mutated-brightness:128,128,128;}#comp-jnk5cl1q{transform-origin:center 0.5px;}#comp-jnk5ywhn{--height:375px;--width:221px;}#comp-jnmu6mek{--min-height:29px;}#comp-jnmtvh9l{--min-height:118px;}#comp-jnk61vw3{--shc-mutated-brightness:128,128,128;}#comp-jnk64fbf{transform-origin:center 0.5px;}#comp-jnk65a8d{transform-origin:center 0.5px;}#comp-jnk65neo{transform-origin:center 0.5px;}#comp-jnk68xzh{--item-size:30px;--item-margin:0px 27px 0px 0px;--item-display:inline-block;width:87px;height:30px;}#comp-jnka9ey2{--bg-overlay-color:transparent;--bg-gradient:none;--padding:0px;--margin:0px;min-width:980px;--firstChildMarginTop:-1px;--lastChildMarginBottom:-1px;--items-direction:row;}#comp-jnka9ez5{--bg-overlay-color:rgb(var(--color_12));--bg-gradient:none;width:100%;--column-width:980px;--column-flex:980;}#comp-jnka9ezh{--shc-mutated-brightness:128,128,128;}#comp-jnmu7zwz{--min-height:29px;}#comp-jnka9ezt{--min-height:118px;}#comp-jnka9ezv{--shc-mutated-brightness:128,128,128;}#comp-jnka9f05{transform-origin:center 0.5px;}#comp-jnka9f08{transform-origin:center 0.5px;}#comp-jnka9f0a{transform-origin:center 0.5px;}#comp-jnka9f0f{--item-size:30px;--item-margin:0px 27px 0px 0px;--item-display:inline-block;width:87px;height:30px;}#comp-jnka9ezp{--height:360px;--width:216px;}#comp-jnka9ezl{transform-origin:center 0.5px;}#comp-jnkf3qg1{--bg-overlay-color:rgb(var(--color_12));--bg-gradient:none;--padding:0px;--margin:0px;min-width:980px;--firstChildMarginTop:-1px;--lastChildMarginBottom:-1px;--items-direction:row;}#comp-jnkf3qi7{--fill-layer-image-opacity:0.59;--fill-layer-background-media-position:fixed;--fill-layer-background-media-pointer-events:none;--bg-overlay-color:rgba(var(--color_15), 0.89);--bg-gradient:none;width:100%;--column-width:490px;--column-flex:490;}#comp-jnkfh4i3{--bg-overlay-color:rgb(var(--color_12));--bg-gradient:none;width:100%;--column-width:490px;--column-flex:490;}#comp-jnldxsca{transform-origin:center 0.5px;}#comp-jnldxsbd{--min-height:53px;}#comp-jnldu9k0{--min-height:118px;}#comp-jnkai0mw{--bg-overlay-color:transparent;--bg-gradient:none;--padding:0px;--margin:0px;min-width:980px;--firstChildMarginTop:-1px;--lastChildMarginBottom:-1px;--items-direction:row;}#comp-jnkai0o2{--bg-overlay-color:rgb(var(--color_15));--bg-gradient:none;width:100%;--column-width:980px;--column-flex:980;}#comp-jnkelgvc{transform-origin:center 0.5px;}#comp-jnkeuhdz{transform-origin:center 0.5px;}#comp-jnkemyy9{transform-origin:center 0.5px;}#comp-jnkeujs1{transform-origin:center 0.5px;}#comp-jnkeo3qr{transform-origin:center 0.5px;}#comp-jnkeumin{transform-origin:center 0.5px;}#comp-jnkeo9qf{transform-origin:center 0.5px;}#comp-jnkeup61{transform-origin:center 0.5px;}#comp-jnkeoaw3{transform-origin:center 0.5px;}#comp-jnketvbk{transform-origin:center 0.5px;}#comp-jnkf2fkj{--shc-mutated-brightness:128,128,128;}#comp-jnkfb1pv{transform-origin:center 0.5px;}#comp-jnkf9i2c{transform-origin:center 0.5px;}.comp-jnmw33vq {
				--wix-direction: ltr;
--imageGridPosition: 5;
--widgetLayout: 2;
--imageScaling: 2;
--alignment: 2;
--dateMarginBottom: 62;
--buttonsStyle: 1;
--rsvpMarginBottom: 0;
--cardsPerRow: 3;
--descriptionMarginBottom: 42;
--listLayout: 3;
--verticalImagePosition: 1;
--dateAndLocationMarginBottom: 54;
--imagePosition: 2;
--countdownMarginBottom: 60;
--imageWidth: 50;
--listAlignment: 2;
--roundedButtonsBorderRadius: 100;
--listImageLayout: 1;
--oneButtonWidth: 233;
--imageRatio: 1;
--widgetType: 1;
--buttonHeight: 81;
--titleMarginBottom: 68;
--contentAlignment: 2;
--locationMarginBottom: 62;
--buttonsBorderRadius: 4;
--cardLocationAndDateFontSize: 16;
--cardDescriptionFontSize: 15;
--listHeaderTitleFontSizeCompactMobile: 16;
--listDateFontSizeCompactMobile: 14;
--listLocationFontSizeCompactMobile: 14;
--listHeaderTitleFontSizeMobile: 20;
--listDateFontSizeMobile: 16;
--listContentTextFontSizeMobile: 16;
--listGeneralTitleFontSizeMobile: 28;
--mobileListLayout: 1;
--listButtonFontSizeMobile: 16;
--listButtonFontSizeCompactMobile: 14;
--cardBorderWidth: 1;
--borderWidth: 0;
--todayButtonBorderWidth: 1;
--todayButtonBorderRadius: 0;
--listRoundedButtonBorderRadius: 100;
--listBorderWidth: 0;
--calendarCellBorderWidth: 1;
--calendarBorderWidth: 0;
--buttonsBorderWidth: 1;
--todayRoundedButtonBorderRadius: 100;
--listButtonBorderRadius: 0;
--listButtonBorderWidth: 1;
--calendarDetailsTitleTextSize: 16;
--calendarDetailsDateLocationTextSize: 14;
--calendarDetailsDescriptionTextSize: 14;
--multiImageScaling: 2;
--locationAndDateFormat: 1;
--listLocationAndDateFormat: 1;
--cardLocationAndDateFormat: 1;
--verticalDividerWidth: 1;
--verticalDividerHeight: 94;
--horizontalDividerWidth: 20;
--horizontalDividerHeight: 1;
--compactHorizontalDividerWidth: 36;
--compactHorizontalDividerHeight: 1;
--imageOpacity: 70;
--listButtonStyle: 1;
--cardMargins: 20;
--sideBySideLayoutMargins: 30;
--listImageOpacity: 100;
--listImageWidth: 50;
--listDividerWidth: 1;
--listStripWidth: 20;
--calendarWeekStartDay: 1;
--calendarListTextSize: 14;
--calendarListDividerWidth: 1;
--todayButtonStyle: 2;
--listContentTextFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--cardDescriptionFont: normal normal normal 16px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--calendarMonthFont: normal normal normal 18px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--calendarWeekdaysFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--calendarDayNumberFont: normal normal normal 24px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--calendarCellEventNameFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--todayHollowButtonFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--todayButtonFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--ribbonFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--soldOutRibbonFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--rsvpClosedRibbonFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--joinWaitlistRibbonFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--membershipRibbonFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--recurringRibbonFont: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--compactTextsFont: normal normal normal 24px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--eventDescriptionFontV2: normal normal normal 16px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--listImageBackgroundColor: 144,19,254;
--listImageBackgroundColor-rgb: 144,19,254;
--listImageBackgroundColor-opacity: 1;
--backgroundColor: 255,255,255;
--backgroundColor-rgb: 255,255,255;
--backgroundColor-opacity: 1;
--cardBackgroundColor: 255,255,255;
--cardBackgroundColor-rgb: 255,255,255;
--cardBackgroundColor-opacity: 1;
--listGeneralTitleColor: 12,29,57;
--listGeneralTitleColor-rgb: 12,29,57;
--listGeneralTitleColor-opacity: 1;
--textsColor: 12,29,57;
--textsColor-rgb: 12,29,57;
--textsColor-opacity: 1;
--cardBorderColor: 201,209,222;
--cardBorderColor-rgb: 201,209,222;
--cardBorderColor-opacity: 1;
--labelsColor: 12,29,57;
--labelsColor-rgb: 12,29,57;
--labelsColor-opacity: 1;
--listButtonBorderColor: 144,19,254;
--listButtonBorderColor-rgb: 144,19,254;
--listButtonBorderColor-opacity: 1;
--listHeaderTitleColor: 12,29,57;
--listHeaderTitleColor-rgb: 12,29,57;
--listHeaderTitleColor-opacity: 1;
--buttonsBorderColor: 144,19,254,0;
--buttonsBorderColor-rgb: 144,19,254;
--buttonsBorderColor-opacity: 0;
--buttonsBackgroundColor: 144,19,254;
--buttonsBackgroundColor-rgb: 144,19,254;
--buttonsBackgroundColor-opacity: 1;
--imageBackgroundColor: 12,29,57;
--imageBackgroundColor-rgb: 12,29,57;
--imageBackgroundColor-opacity: 1;
--dividerColor: 12,29,57;
--dividerColor-rgb: 12,29,57;
--dividerColor-opacity: 1;
--descriptionColor: 12,29,57;
--descriptionColor-rgb: 12,29,57;
--descriptionColor-opacity: 1;
--fullButtonsFontColor: 255,255,255;
--fullButtonsFontColor-rgb: 255,255,255;
--fullButtonsFontColor-opacity: 1;
--hollowButtonsFontColor: 12,29,57;
--hollowButtonsFontColor-rgb: 12,29,57;
--hollowButtonsFontColor-opacity: 1;
--borderColor: 201,209,222;
--borderColor-rgb: 201,209,222;
--borderColor-opacity: 1;
--listFullButtonFontColor: 255,255,255;
--listFullButtonFontColor-rgb: 255,255,255;
--listFullButtonFontColor-opacity: 1;
--listHollowButtonFontColor: 144,19,254;
--listHollowButtonFontColor-rgb: 144,19,254;
--listHollowButtonFontColor-opacity: 1;
--titleColor: 12,29,57;
--titleColor-rgb: 12,29,57;
--titleColor-opacity: 1;
--countdownColor: 12,29,57;
--countdownColor-rgb: 12,29,57;
--countdownColor-opacity: 1;
--cardsBackgroundColor: 255,255,255,0;
--cardsBackgroundColor-rgb: 255,255,255;
--cardsBackgroundColor-opacity: 0;
--listButtonBackgroundColor: 144,19,254;
--listButtonBackgroundColor-rgb: 144,19,254;
--listButtonBackgroundColor-opacity: 1;
--listContentTitleColor: 144,19,254;
--listContentTitleColor-rgb: 144,19,254;
--listContentTitleColor-opacity: 1;
--listHeaderDateTimeColor: 12,29,57;
--listHeaderDateTimeColor-rgb: 12,29,57;
--listHeaderDateTimeColor-opacity: 1;
--listContentTextColor: 12,29,57;
--listContentTextColor-rgb: 12,29,57;
--listContentTextColor-opacity: 1;
--listHeaderLocationColor: 12,29,57;
--listHeaderLocationColor-rgb: 12,29,57;
--listHeaderLocationColor-opacity: 1;
--calendarCellBackground: 255,255,255;
--calendarCellBackground-rgb: 255,255,255;
--calendarCellBackground-opacity: 1;
--calendarBorderColor: 201,209,222;
--calendarBorderColor-rgb: 201,209,222;
--calendarBorderColor-opacity: 1;
--calendarMainActiveColor: 144,19,254;
--calendarMainActiveColor-rgb: 144,19,254;
--calendarMainActiveColor-opacity: 1;
--calendarMonthColor: 12,29,57;
--calendarMonthColor-rgb: 12,29,57;
--calendarMonthColor-opacity: 1;
--calendarWeekdaysColor: 12,29,57;
--calendarWeekdaysColor-rgb: 12,29,57;
--calendarWeekdaysColor-opacity: 1;
--calendarDayNumberColor: 12,29,57;
--calendarDayNumberColor-rgb: 12,29,57;
--calendarDayNumberColor-opacity: 1;
--calendarCellEventNameColor: 12,29,57;
--calendarCellEventNameColor-rgb: 12,29,57;
--calendarCellEventNameColor-opacity: 1;
--todayHollowButtonColor: 144,19,254;
--todayHollowButtonColor-rgb: 144,19,254;
--todayHollowButtonColor-opacity: 1;
--todayButtonColor: 255,255,255;
--todayButtonColor-rgb: 255,255,255;
--todayButtonColor-opacity: 1;
--ribbonTextColor: 255,255,255;
--ribbonTextColor-rgb: 255,255,255;
--ribbonTextColor-opacity: 1;
--soldOutRibbonTextColor: 255,255,255;
--soldOutRibbonTextColor-rgb: 255,255,255;
--soldOutRibbonTextColor-opacity: 1;
--rsvpClosedRibbonTextColor: 255,255,255;
--rsvpClosedRibbonTextColor-rgb: 255,255,255;
--rsvpClosedRibbonTextColor-opacity: 1;
--joinWaitlistRibbonTextColor: 255,255,255;
--joinWaitlistRibbonTextColor-rgb: 255,255,255;
--joinWaitlistRibbonTextColor-opacity: 1;
--membershipRibbonTextColor: 12,29,57;
--membershipRibbonTextColor-rgb: 12,29,57;
--membershipRibbonTextColor-opacity: 1;
--recurringRibbonTextColor: 12,29,57;
--recurringRibbonTextColor-rgb: 12,29,57;
--recurringRibbonTextColor-opacity: 1;
--onImageHollowButtonsFontColor: 255,255,255;
--onImageHollowButtonsFontColor-rgb: 255,255,255;
--onImageHollowButtonsFontColor-opacity: 1;
--onImageFullButtonsFontColor: 12,29,57;
--onImageFullButtonsFontColor-rgb: 12,29,57;
--onImageFullButtonsFontColor-opacity: 1;
--onImageCountdownColor: 255,255,255;
--onImageCountdownColor-rgb: 255,255,255;
--onImageCountdownColor-opacity: 1;
--onImageTitleColor: 255,255,255;
--onImageTitleColor-rgb: 255,255,255;
--onImageTitleColor-opacity: 1;
--onImageDescriptionColor: 255,255,255;
--onImageDescriptionColor-rgb: 255,255,255;
--onImageDescriptionColor-opacity: 1;
--onImageLabelsColor: 255,255,255;
--onImageLabelsColor-rgb: 255,255,255;
--onImageLabelsColor-opacity: 1;
--onImageTextsColor: 255,255,255;
--onImageTextsColor-rgb: 255,255,255;
--onImageTextsColor-opacity: 1;
--calendarCellBorderColor: 201,209,222;
--calendarCellBorderColor-rgb: 201,209,222;
--calendarCellBorderColor-opacity: 1;
--calendarPastDaysBackground: 201,209,222,0.1;
--calendarPastDaysBackground-rgb: 201,209,222;
--calendarPastDaysBackground-opacity: 0.1;
--todayButtonBackgroundColor: 144,19,254;
--todayButtonBackgroundColor-rgb: 144,19,254;
--todayButtonBackgroundColor-opacity: 1;
--todayButtonBorderColor: 144,19,254;
--todayButtonBorderColor-rgb: 144,19,254;
--todayButtonBorderColor-opacity: 1;
--ribbonBackgroundColor: 246,77,67;
--ribbonBackgroundColor-rgb: 246,77,67;
--ribbonBackgroundColor-opacity: 1;
--listBackgroundColor: 255,255,255;
--listBackgroundColor-rgb: 255,255,255;
--listBackgroundColor-opacity: 1;
--listBorderColor: 201,209,222;
--listBorderColor-rgb: 201,209,222;
--listBorderColor-opacity: 1;
--listDividerColor: 201,209,222;
--listDividerColor-rgb: 201,209,222;
--listDividerColor-opacity: 1;
--soldOutRibbonBackgroundColor: 246,77,67;
--soldOutRibbonBackgroundColor-rgb: 246,77,67;
--soldOutRibbonBackgroundColor-opacity: 1;
--rsvpClosedRibbonBackgroundColor: 246,77,67;
--rsvpClosedRibbonBackgroundColor-rgb: 246,77,67;
--rsvpClosedRibbonBackgroundColor-opacity: 1;
--joinWaitlistRibbonBackgroundColor: 246,77,67;
--joinWaitlistRibbonBackgroundColor-rgb: 246,77,67;
--joinWaitlistRibbonBackgroundColor-opacity: 1;
--membershipRibbonBorderColor: 12,29,57;
--membershipRibbonBorderColor-rgb: 12,29,57;
--membershipRibbonBorderColor-opacity: 1;
--recurringRibbonBorderColor: 12,29,57;
--recurringRibbonBorderColor-rgb: 12,29,57;
--recurringRibbonBorderColor-opacity: 1;
--onImageButtonsBorderColor: 255,255,255;
--onImageButtonsBorderColor-rgb: 255,255,255;
--onImageButtonsBorderColor-opacity: 1;
--onImageButtonsBackgroundColor: 255,255,255;
--onImageButtonsBackgroundColor-rgb: 255,255,255;
--onImageButtonsBackgroundColor-opacity: 1;
--onImageDividerColor: 255,255,255;
--onImageDividerColor-rgb: 255,255,255;
--onImageDividerColor-opacity: 1;
--calendarBackgroundColor: 255,255,255,0;
--calendarBackgroundColor-rgb: 255,255,255;
--calendarBackgroundColor-opacity: 0;
--listLoadMoreContainerBackgroundColor: var(--cardBackgroundColor);
--listLoadMoreContainerBackgroundColor-rgb: var(--cardBackgroundColor-rgb);
--listLoadMoreContainerBackgroundColor-opacity: var(--cardBackgroundColor-opacity);
--eventTitleColorV2: 12,29,57;
--eventTitleColorV2-rgb: 12,29,57;
--eventTitleColorV2-opacity: 1;
--eventDateColorV2: 12,29,57;
--eventDateColorV2-rgb: 12,29,57;
--eventDateColorV2-opacity: 1;
--eventLocationColorV2: 12,29,57;
--eventLocationColorV2-rgb: 12,29,57;
--eventLocationColorV2-opacity: 1;
--eventDescriptionColorV2: 12,29,57;
--eventDescriptionColorV2-rgb: 12,29,57;
--eventDescriptionColorV2-opacity: 1;
--linkColorV2: 12,29,57;
--linkColorV2-rgb: 12,29,57;
--linkColorV2-opacity: 1;
--shareIconsColorV2: 12,29,57;
--shareIconsColorV2-rgb: 12,29,57;
--shareIconsColorV2-opacity: 1;
--hoveredEventTitleColorV2: 12,29,57;
--hoveredEventTitleColorV2-rgb: 12,29,57;
--hoveredEventTitleColorV2-opacity: 1;
--hoveredEventDateColorV2: 12,29,57;
--hoveredEventDateColorV2-rgb: 12,29,57;
--hoveredEventDateColorV2-opacity: 1;
--hoveredEventLocationColorV2: 12,29,57;
--hoveredEventLocationColorV2-rgb: 12,29,57;
--hoveredEventLocationColorV2-opacity: 1;
--hoveredEventDescriptionColor: 12,29,57;
--hoveredEventDescriptionColor-rgb: 12,29,57;
--hoveredEventDescriptionColor-opacity: 1;
--listHeaderLocationFont: normal normal normal 16/20px avenir-lt-w01_35-light1475496,sans-serif;
--listHeaderLocationFont-style: normal;
--listHeaderLocationFont-variant: normal;
--listHeaderLocationFont-weight: normal;
--listHeaderLocationFont-size: 16;
--listHeaderLocationFont-line-height: 20px;
--listHeaderLocationFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--listHeaderLocationFont-text-decoration: none;
--descriptionFont: normal normal normal 15/18px avenir-lt-w01_35-light1475496,sans-serif;
--descriptionFont-style: normal;
--descriptionFont-variant: normal;
--descriptionFont-weight: normal;
--descriptionFont-size: 15;
--descriptionFont-line-height: 18px;
--descriptionFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--descriptionFont-text-decoration: none;
--listGeneralTitleFont: normal normal normal 36/45px proxima-n-w01-reg,sans-serif;
--listGeneralTitleFont-style: normal;
--listGeneralTitleFont-variant: normal;
--listGeneralTitleFont-weight: normal;
--listGeneralTitleFont-size: 36;
--listGeneralTitleFont-line-height: 45px;
--listGeneralTitleFont-family: proxima-n-w01-reg,sans-serif;
--listGeneralTitleFont-text-decoration: none;
--countdownFont: normal normal normal 20/25px avenir-lt-w01_35-light1475496,sans-serif;
--countdownFont-style: normal;
--countdownFont-variant: normal;
--countdownFont-weight: normal;
--countdownFont-size: 20;
--countdownFont-line-height: 25px;
--countdownFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--countdownFont-text-decoration: none;
--listHollowButtonFont: normal normal normal 16/20px avenir-lt-w01_35-light1475496,sans-serif;
--listHollowButtonFont-style: normal;
--listHollowButtonFont-variant: normal;
--listHollowButtonFont-weight: normal;
--listHollowButtonFont-size: 16;
--listHollowButtonFont-line-height: 20px;
--listHollowButtonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--listHollowButtonFont-text-decoration: none;
--hollowButtonsFont: normal normal normal 16/20px avenir-lt-w01_35-light1475496,sans-serif;
--hollowButtonsFont-style: normal;
--hollowButtonsFont-variant: normal;
--hollowButtonsFont-weight: normal;
--hollowButtonsFont-size: 16;
--hollowButtonsFont-line-height: 20px;
--hollowButtonsFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--hollowButtonsFont-text-decoration: none;
--labelsFont: normal normal normal 16/20px avenir-lt-w01_35-light1475496,sans-serif;
--labelsFont-style: normal;
--labelsFont-variant: normal;
--labelsFont-weight: normal;
--labelsFont-size: 16;
--labelsFont-line-height: 20px;
--labelsFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--labelsFont-text-decoration: none;
--listHeaderTitleFont: normal normal normal 26/32px avenir-lt-w01_35-light1475496,sans-serif;
--listHeaderTitleFont-style: normal;
--listHeaderTitleFont-variant: normal;
--listHeaderTitleFont-weight: normal;
--listHeaderTitleFont-size: 26;
--listHeaderTitleFont-line-height: 32px;
--listHeaderTitleFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--listHeaderTitleFont-text-decoration: none;
--listFullButtonFont: normal normal normal 16/20px avenir-lt-w01_35-light1475496,sans-serif;
--listFullButtonFont-style: normal;
--listFullButtonFont-variant: normal;
--listFullButtonFont-weight: normal;
--listFullButtonFont-size: 16;
--listFullButtonFont-line-height: 20px;
--listFullButtonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--listFullButtonFont-text-decoration: none;
--fullButtonsFont: normal normal normal 16/20px avenir-lt-w01_85-heavy1475544,sans-serif;
--fullButtonsFont-style: normal;
--fullButtonsFont-variant: normal;
--fullButtonsFont-weight: normal;
--fullButtonsFont-size: 16;
--fullButtonsFont-line-height: 20px;
--fullButtonsFont-family: avenir-lt-w01_85-heavy1475544,sans-serif;
--fullButtonsFont-text-decoration: none;
--titleFont: normal normal normal 46/57px "playfair display",serif;
--titleFont-style: normal;
--titleFont-variant: normal;
--titleFont-weight: normal;
--titleFont-size: 46;
--titleFont-line-height: 57px;
--titleFont-family: "playfair display",serif;
--titleFont-text-decoration: none;
--textsFont: normal normal normal 15/18px avenir-lt-w01_35-light1475496,sans-serif;
--textsFont-style: normal;
--textsFont-variant: normal;
--textsFont-weight: normal;
--textsFont-size: 15;
--textsFont-line-height: 18px;
--textsFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--textsFont-text-decoration: none;
--listHeaderDateTimeFont: normal normal normal 16px/32px avenir-lt-w01_35-light1475496,sans-serif;
--listHeaderDateTimeFont-style: normal;
--listHeaderDateTimeFont-variant: normal;
--listHeaderDateTimeFont-weight: normal;
--listHeaderDateTimeFont-size: 16px;
--listHeaderDateTimeFont-line-height: 32px;
--listHeaderDateTimeFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--listHeaderDateTimeFont-text-decoration: none;
--listContentTextFont-style: normal;
--listContentTextFont-variant: normal;
--listContentTextFont-weight: normal;
--listContentTextFont-size: 14px;
--listContentTextFont-line-height: 1.4em;
--listContentTextFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--listContentTextFont-text-decoration: none;
--cardDescriptionFont-style: normal;
--cardDescriptionFont-variant: normal;
--cardDescriptionFont-weight: normal;
--cardDescriptionFont-size: 16px;
--cardDescriptionFont-line-height: 1.4em;
--cardDescriptionFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--cardDescriptionFont-text-decoration: none;
--calendarMonthFont-style: normal;
--calendarMonthFont-variant: normal;
--calendarMonthFont-weight: normal;
--calendarMonthFont-size: 18px;
--calendarMonthFont-line-height: 1.4em;
--calendarMonthFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--calendarMonthFont-text-decoration: none;
--calendarWeekdaysFont-style: normal;
--calendarWeekdaysFont-variant: normal;
--calendarWeekdaysFont-weight: normal;
--calendarWeekdaysFont-size: 14px;
--calendarWeekdaysFont-line-height: 1.4em;
--calendarWeekdaysFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--calendarWeekdaysFont-text-decoration: none;
--calendarDayNumberFont-style: normal;
--calendarDayNumberFont-variant: normal;
--calendarDayNumberFont-weight: normal;
--calendarDayNumberFont-size: 24px;
--calendarDayNumberFont-line-height: 1.4em;
--calendarDayNumberFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--calendarDayNumberFont-text-decoration: none;
--calendarCellEventNameFont-style: normal;
--calendarCellEventNameFont-variant: normal;
--calendarCellEventNameFont-weight: normal;
--calendarCellEventNameFont-size: 14px;
--calendarCellEventNameFont-line-height: 1.4em;
--calendarCellEventNameFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--calendarCellEventNameFont-text-decoration: none;
--todayHollowButtonFont-style: normal;
--todayHollowButtonFont-variant: normal;
--todayHollowButtonFont-weight: normal;
--todayHollowButtonFont-size: 14px;
--todayHollowButtonFont-line-height: 1.4em;
--todayHollowButtonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--todayHollowButtonFont-text-decoration: none;
--todayButtonFont-style: normal;
--todayButtonFont-variant: normal;
--todayButtonFont-weight: normal;
--todayButtonFont-size: 14px;
--todayButtonFont-line-height: 1.4em;
--todayButtonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--todayButtonFont-text-decoration: none;
--ribbonFont-style: normal;
--ribbonFont-variant: normal;
--ribbonFont-weight: normal;
--ribbonFont-size: 14px;
--ribbonFont-line-height: 1.4em;
--ribbonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--ribbonFont-text-decoration: none;
--soldOutRibbonFont-style: normal;
--soldOutRibbonFont-variant: normal;
--soldOutRibbonFont-weight: normal;
--soldOutRibbonFont-size: 14px;
--soldOutRibbonFont-line-height: 1.4em;
--soldOutRibbonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--soldOutRibbonFont-text-decoration: none;
--rsvpClosedRibbonFont-style: normal;
--rsvpClosedRibbonFont-variant: normal;
--rsvpClosedRibbonFont-weight: normal;
--rsvpClosedRibbonFont-size: 14px;
--rsvpClosedRibbonFont-line-height: 1.4em;
--rsvpClosedRibbonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--rsvpClosedRibbonFont-text-decoration: none;
--joinWaitlistRibbonFont-style: normal;
--joinWaitlistRibbonFont-variant: normal;
--joinWaitlistRibbonFont-weight: normal;
--joinWaitlistRibbonFont-size: 14px;
--joinWaitlistRibbonFont-line-height: 1.4em;
--joinWaitlistRibbonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--joinWaitlistRibbonFont-text-decoration: none;
--membershipRibbonFont-style: normal;
--membershipRibbonFont-variant: normal;
--membershipRibbonFont-weight: normal;
--membershipRibbonFont-size: 14px;
--membershipRibbonFont-line-height: 1.4em;
--membershipRibbonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--membershipRibbonFont-text-decoration: none;
--recurringRibbonFont-style: normal;
--recurringRibbonFont-variant: normal;
--recurringRibbonFont-weight: normal;
--recurringRibbonFont-size: 14px;
--recurringRibbonFont-line-height: 1.4em;
--recurringRibbonFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--recurringRibbonFont-text-decoration: none;
--compactTextsFont-style: normal;
--compactTextsFont-variant: normal;
--compactTextsFont-weight: normal;
--compactTextsFont-size: 24px;
--compactTextsFont-line-height: 1.4em;
--compactTextsFont-family: avenir-lt-w01_35-light1475496,sans-serif;
--compactTextsFont-text-decoration: none;
--listTitleFontV2: normal normal normal 36/45px proxima-n-w01-reg,sans-serif;
--listTitleFontV2-style: normal;
--listTitleFontV2-variant: normal;
--listTitleFontV2-weight: normal;
--listTitleFontV2-size: 36;
--listTitleFontV2-line-height: 45px;
--listTitleFontV2-family: proxima-n-w01-reg,sans-serif;
--listTitleFontV2-text-decoration: none;
--eventTitleFontV2: normal normal normal 26/32px avenir-lt-w01_35-light1475496,sans-serif;
--eventTitleFontV2-style: normal;
--eventTitleFontV2-variant: normal;
--eventTitleFontV2-weight: normal;
--eventTitleFontV2-size: 26;
--eventTitleFontV2-line-height: 32px;
--eventTitleFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--eventTitleFontV2-text-decoration: none;
--eventDateFontV2: normal normal normal 16/20px avenir-lt-w01_35-light1475496,sans-serif;
--eventDateFontV2-style: normal;
--eventDateFontV2-variant: normal;
--eventDateFontV2-weight: normal;
--eventDateFontV2-size: 16;
--eventDateFontV2-line-height: 20px;
--eventDateFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--eventDateFontV2-text-decoration: none;
--eventLocationFontV2: normal normal normal 16/20px avenir-lt-w01_35-light1475496,sans-serif;
--eventLocationFontV2-style: normal;
--eventLocationFontV2-variant: normal;
--eventLocationFontV2-weight: normal;
--eventLocationFontV2-size: 16;
--eventLocationFontV2-line-height: 20px;
--eventLocationFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--eventLocationFontV2-text-decoration: none;
--eventDescriptionFontV2-style: normal;
--eventDescriptionFontV2-variant: normal;
--eventDescriptionFontV2-weight: normal;
--eventDescriptionFontV2-size: 16px;
--eventDescriptionFontV2-line-height: 1.4em;
--eventDescriptionFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--eventDescriptionFontV2-text-decoration: none;
--linkFontV2: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--linkFontV2-style: normal;
--linkFontV2-variant: normal;
--linkFontV2-weight: normal;
--linkFontV2-size: 14px;
--linkFontV2-line-height: 1.4em;
--linkFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--linkFontV2-text-decoration: underline;
--listFullButtonFontV2: normal normal normal 16/20px avenir-lt-w01_35-light1475496,sans-serif;
--listFullButtonFontV2-style: normal;
--listFullButtonFontV2-variant: normal;
--listFullButtonFontV2-weight: normal;
--listFullButtonFontV2-size: 16;
--listFullButtonFontV2-line-height: 20px;
--listFullButtonFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--listFullButtonFontV2-text-decoration: none;
--listHollowButtonFontV2: normal normal normal 16/20px avenir-lt-w01_35-light1475496,sans-serif;
--listHollowButtonFontV2-style: normal;
--listHollowButtonFontV2-variant: normal;
--listHollowButtonFontV2-weight: normal;
--listHollowButtonFontV2-size: 16;
--listHollowButtonFontV2-line-height: 20px;
--listHollowButtonFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--listHollowButtonFontV2-text-decoration: none;
--hoveredEventTitleFontV2: normal normal normal 26/32px avenir-lt-w01_35-light1475496,sans-serif;
--hoveredEventTitleFontV2-style: normal;
--hoveredEventTitleFontV2-variant: normal;
--hoveredEventTitleFontV2-weight: normal;
--hoveredEventTitleFontV2-size: 26;
--hoveredEventTitleFontV2-line-height: 32px;
--hoveredEventTitleFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--hoveredEventTitleFontV2-text-decoration: none;
--hoveredEventDateFontV2: normal normal normal 16px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--hoveredEventDateFontV2-style: normal;
--hoveredEventDateFontV2-variant: normal;
--hoveredEventDateFontV2-weight: normal;
--hoveredEventDateFontV2-size: 16px;
--hoveredEventDateFontV2-line-height: 1.4em;
--hoveredEventDateFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--hoveredEventDateFontV2-text-decoration: none;
--hoveredEventLocationFontV2: normal normal normal 16px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--hoveredEventLocationFontV2-style: normal;
--hoveredEventLocationFontV2-variant: normal;
--hoveredEventLocationFontV2-weight: normal;
--hoveredEventLocationFontV2-size: 16px;
--hoveredEventLocationFontV2-line-height: 1.4em;
--hoveredEventLocationFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--hoveredEventLocationFontV2-text-decoration: none;
--hoveredEventDescriptionFontV2: normal normal normal 15px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--hoveredEventDescriptionFontV2-style: normal;
--hoveredEventDescriptionFontV2-variant: normal;
--hoveredEventDescriptionFontV2-weight: normal;
--hoveredEventDescriptionFontV2-size: 15px;
--hoveredEventDescriptionFontV2-line-height: 1.4em;
--hoveredEventDescriptionFontV2-family: avenir-lt-w01_35-light1475496,sans-serif;
--hoveredEventDescriptionFontV2-text-decoration: none;
--CARD_MAX_WIDTH: 700;
--CARD_MIN_WIDTH: 200;
--listMainTitleVisibility: block;
--listFullDateVisibility: block;
--listLocationVisibility: block;
--listVenueNameVisibility: block;
--listDateVisibility: block;
--listImageVisibility: block;
--listDescriptionVisibility: block;
--listSocialBarVisibility: none;
--listMembersVisibility: block;
--listSocialBarVisibilityFlex: none;
--listShortDateLocationDividerVisibility: initial;
--listShortDateLocationAlignment: center;
--listShortDateLocationDateWidth: 80%;
--listTextAlignment: center;
--listImageAspectRatio: 100;
--listImageIsSquare: 1;
--listAdditionalInfoVisibility: block;
--listAdditionalInfoVisibilityArrow: inline-flex;
--isListTextAlignmentLeft: 0;
--isListTextAlignmentRight: 0;
--sideBySideRibbonLeftMargin: auto;
--sideBySideRibbonRightMargin: auto;
--sideBySideImageDirectionEven: row;
--sideBySideImageDirectionOdd: row;
--sideBySideMinimumItemWidth: 480px;
--sideBySideTitleBottomMargin: 0.5em;
--sideBySideFullDateLocationBottomMargin: 30px;
--sideBySideShortDateLocationVisibility: block;
--sideBySideFullDateLocationVisibility: none;
--cardShortDateLocationVisibility: block;
--cardFullDateLocationVisibility: none;
--cardHoveredFullDateLocationVisibility: block;
--listLayoutTitleLocationVisibility: block;
--listLayoutTitleLocationTitleWidth: 90%;
--multiContainImageVisibility: none;
--multiCoverImageVisibility: flex;
--singleContainImageVisibility: none;
--singleCoverImageVisibility: flex;
--calendarEventTitleLineClamp: 2;
--eventSpacing: 30;
--singleButtonFont: var(--fullButtonsFont);
--singleButtonFont-text-decoration: var(--fullButtonsFont-text-decoration);
--singleButtonFont-line-height: var(--fullButtonsFont-line-height);
--singleButtonFont-family: var(--fullButtonsFont-family);
--singleButtonFont-style: var(--fullButtonsFont-style);
--singleButtonFont-size: var(--fullButtonsFont-size);
--singleButtonFont-variant: var(--fullButtonsFont-variant);
--singleButtonFont-weight: var(--fullButtonsFont-weight);
--singleButtonColor: var(--fullButtonsFontColor);
--singleButtonColor-rgb: var(--fullButtonsFontColor-rgb);
--singleButtonColor-opacity: var(--fullButtonsFontColor-opacity);
--singleOnImageButtonColor: var(--onImageFullButtonsFontColor);
--singleOnImageButtonColor-rgb: var(--onImageFullButtonsFontColor-rgb);
--singleOnImageButtonColor-opacity: var(--onImageFullButtonsFontColor-opacity);
--singleButtonBackgroundColor: var(--buttonsBackgroundColor);
--singleButtonBackgroundColor-rgb: var(--buttonsBackgroundColor-rgb);
--singleButtonBackgroundColor-opacity: var(--buttonsBackgroundColor-opacity);
--singleOnImageButtonBackgroundColor: var(--onImageButtonsBackgroundColor);
--singleOnImageButtonBackgroundColor-rgb: var(--onImageButtonsBackgroundColor-rgb);
--singleOnImageButtonBackgroundColor-opacity: var(--onImageButtonsBackgroundColor-opacity);
--singleButtonBorderColor: 0, 0, 0, 0;
--singleButtonBorderColor-rgb: 0, 0, 0;
--singleButtonBorderColor-opacity: 0;
--singleOnImageButtonBorderColor: 0, 0, 0, 0;
--singleOnImageButtonBorderColor-rgb: 0, 0, 0;
--singleOnImageButtonBorderColor-opacity: 0;
--singleButtonBorderWidth: 0;
--singleButtonBorderRadius: var(--buttonsBorderRadius);
--multiButtonFont: var(--listFullButtonFontV2);
--multiButtonFont-text-decoration: var(--listFullButtonFontV2-text-decoration);
--multiButtonFont-line-height: var(--listFullButtonFontV2-line-height);
--multiButtonFont-family: var(--listFullButtonFontV2-family);
--multiButtonFont-style: var(--listFullButtonFontV2-style);
--multiButtonFont-size: var(--listFullButtonFontV2-size);
--multiButtonFont-variant: var(--listFullButtonFontV2-variant);
--multiButtonFont-weight: var(--listFullButtonFontV2-weight);
--multiButtonColor: var(--listFullButtonFontColor);
--multiButtonColor-rgb: var(--listFullButtonFontColor-rgb);
--multiButtonColor-opacity: var(--listFullButtonFontColor-opacity);
--multiButtonBackgroundColor: var(--listButtonBackgroundColor);
--multiButtonBackgroundColor-rgb: var(--listButtonBackgroundColor-rgb);
--multiButtonBackgroundColor-opacity: var(--listButtonBackgroundColor-opacity);
--multiButtonBorderColor: 0, 0, 0, 0;
--multiButtonBorderColor-rgb: 0, 0, 0;
--multiButtonBorderColor-opacity: 0;
--multiButtonBorderWidth: 0;
--multiButtonBorderRadius: var(--listButtonBorderRadius);
--listLoadMoreContainerBorderColor: 0, 0, 0, 0;
--listLoadMoreContainerBorderColor-rgb: 0, 0, 0;
--listLoadMoreContainerBorderColor-opacity: 0;
--listLoadMoreContainerBorderWidth: 0;
--listLoadMoreMobileFontSize: var(--listButtonFontSizeMobile);
--todayButtonResolvedFont: var(--todayHollowButtonFont);
--todayButtonResolvedFont-text-decoration: var(--todayHollowButtonFont-text-decoration);
--todayButtonResolvedFont-line-height: var(--todayHollowButtonFont-line-height);
--todayButtonResolvedFont-family: var(--todayHollowButtonFont-family);
--todayButtonResolvedFont-style: var(--todayHollowButtonFont-style);
--todayButtonResolvedFont-size: var(--todayHollowButtonFont-size);
--todayButtonResolvedFont-variant: var(--todayHollowButtonFont-variant);
--todayButtonResolvedFont-weight: var(--todayHollowButtonFont-weight);
--todayButtonResolvedColor: var(--todayHollowButtonColor);
--todayButtonResolvedColor-rgb: var(--todayHollowButtonColor-rgb);
--todayButtonResolvedColor-opacity: var(--todayHollowButtonColor-opacity);
--todayButtonResolvedBackgroundColor: 0, 0, 0, 0;
--todayButtonResolvedBackgroundColor-rgb: 0, 0, 0;
--todayButtonResolvedBackgroundColor-opacity: 0;
--todayButtonResolvedBorderColor: var(--todayButtonBorderColor);
--todayButtonResolvedBorderColor-rgb: var(--todayButtonBorderColor-rgb);
--todayButtonResolvedBorderColor-opacity: var(--todayButtonBorderColor-opacity);
--todayButtonResolvedBorderWidth: var(--todayButtonBorderWidth);
--todayButtonResolvedBorderRadius: var(--todayButtonBorderRadius);
				--wix-color-1: 255,255,255;
--wix-color-2: 201,209,222;
--wix-color-3: 115,131,156;
--wix-color-4: 58,73,97;
--wix-color-5: 12,29,57;
--wix-color-6: 218,176,255;
--wix-color-7: 199,137,254;
--wix-color-8: 144,19,254;
--wix-color-9: 96,13,169;
--wix-color-10: 48,6,85;
--wix-color-11: 250,196,186;
--wix-color-12: 245,166,151;
--wix-color-13: 240,85,55;
--wix-color-14: 160,57,37;
--wix-color-15: 80,28,18;
--wix-color-16: 254,233,195;
--wix-color-17: 252,222,165;
--wix-color-18: 251,191,77;
--wix-color-19: 167,127,51;
--wix-color-20: 84,64,26;
--wix-color-21: 179,241,212;
--wix-color-22: 139,228,186;
--wix-color-23: 47,214,136;
--wix-color-24: 31,143,91;
--wix-color-25: 16,71,45;
--wix-color-26: 255,255,255;
--wix-color-27: 12,29,57;
--wix-color-28: 201,209,222;
--wix-color-29: 115,131,156;
--wix-color-30: 58,73,97;
--wix-color-31: 144,19,254;
--wix-color-32: 199,137,254;
--wix-color-33: 115,131,156;
--wix-color-34: 255,255,255;
--wix-color-35: 12,29,57;
--wix-color-36: 12,29,57;
--wix-color-37: 58,73,97;
--wix-color-38: 144,19,254;
--wix-color-39: 144,19,254;
--wix-color-40: 255,255,255;
--wix-color-41: 255,255,255;
--wix-color-42: 144,19,254;
--wix-color-43: 144,19,254;
--wix-color-44: 115,131,156;
--wix-color-45: 115,131,156;
--wix-color-46: 255,255,255;
--wix-color-47: 255,255,255;
--wix-color-48: 144,19,254;
--wix-color-49: 144,19,254;
--wix-color-50: 144,19,254;
--wix-color-51: 144,19,254;
--wix-color-52: 255,255,255;
--wix-color-53: 255,255,255;
--wix-color-54: 115,131,156;
--wix-color-55: 115,131,156;
--wix-font-Title: normal normal normal 90px/1.4em "playfair display",serif;
--wix-font-Title-style: normal;
--wix-font-Title-variant: normal;
--wix-font-Title-weight: normal;
--wix-font-Title-size: 90px;
--wix-font-Title-line-height: 1.4em;
--wix-font-Title-family: "playfair display",serif;
--wix-font-Title-text-decoration: none;
--wix-font-Menu: normal normal normal 16px/1.4em din-next-w01-light,sans-serif;
--wix-font-Menu-style: normal;
--wix-font-Menu-variant: normal;
--wix-font-Menu-weight: normal;
--wix-font-Menu-size: 16px;
--wix-font-Menu-line-height: 1.4em;
--wix-font-Menu-family: din-next-w01-light,sans-serif;
--wix-font-Menu-text-decoration: none;
--wix-font-Page-title: normal normal normal 50px/1.4em "playfair display",serif;
--wix-font-Page-title-style: normal;
--wix-font-Page-title-variant: normal;
--wix-font-Page-title-weight: normal;
--wix-font-Page-title-size: 50px;
--wix-font-Page-title-line-height: 1.4em;
--wix-font-Page-title-family: "playfair display",serif;
--wix-font-Page-title-text-decoration: none;
--wix-font-Heading-XL: normal normal normal 30px/1.4em "playfair display",serif;
--wix-font-Heading-XL-style: normal;
--wix-font-Heading-XL-variant: normal;
--wix-font-Heading-XL-weight: normal;
--wix-font-Heading-XL-size: 30px;
--wix-font-Heading-XL-line-height: 1.4em;
--wix-font-Heading-XL-family: "playfair display",serif;
--wix-font-Heading-XL-text-decoration: none;
--wix-font-Heading-L: normal normal normal 25px/1.4em "playfair display",serif;
--wix-font-Heading-L-style: normal;
--wix-font-Heading-L-variant: normal;
--wix-font-Heading-L-weight: normal;
--wix-font-Heading-L-size: 25px;
--wix-font-Heading-L-line-height: 1.4em;
--wix-font-Heading-L-family: "playfair display",serif;
--wix-font-Heading-L-text-decoration: none;
--wix-font-Heading-M: normal normal bold 25px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--wix-font-Heading-M-style: normal;
--wix-font-Heading-M-variant: normal;
--wix-font-Heading-M-weight: bold;
--wix-font-Heading-M-size: 25px;
--wix-font-Heading-M-line-height: 1.4em;
--wix-font-Heading-M-family: avenir-lt-w01_35-light1475496,sans-serif;
--wix-font-Heading-M-text-decoration: none;
--wix-font-Heading-S: normal normal normal 22px/1.4em proxima-n-w01-reg,sans-serif;
--wix-font-Heading-S-style: normal;
--wix-font-Heading-S-variant: normal;
--wix-font-Heading-S-weight: normal;
--wix-font-Heading-S-size: 22px;
--wix-font-Heading-S-line-height: 1.4em;
--wix-font-Heading-S-family: proxima-n-w01-reg,sans-serif;
--wix-font-Heading-S-text-decoration: none;
--wix-font-Body-L: normal normal normal 17px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--wix-font-Body-L-style: normal;
--wix-font-Body-L-variant: normal;
--wix-font-Body-L-weight: normal;
--wix-font-Body-L-size: 17px;
--wix-font-Body-L-line-height: 1.4em;
--wix-font-Body-L-family: avenir-lt-w01_35-light1475496,sans-serif;
--wix-font-Body-L-text-decoration: none;
--wix-font-Body-M: normal normal normal 18px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--wix-font-Body-M-style: normal;
--wix-font-Body-M-variant: normal;
--wix-font-Body-M-weight: normal;
--wix-font-Body-M-size: 18px;
--wix-font-Body-M-line-height: 1.4em;
--wix-font-Body-M-family: avenir-lt-w01_35-light1475496,sans-serif;
--wix-font-Body-M-text-decoration: none;
--wix-font-Body-S: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
--wix-font-Body-S-style: normal;
--wix-font-Body-S-variant: normal;
--wix-font-Body-S-weight: normal;
--wix-font-Body-S-size: 14px;
--wix-font-Body-S-line-height: 1.4em;
--wix-font-Body-S-family: avenir-lt-w01_35-light1475496,sans-serif;
--wix-font-Body-S-text-decoration: none;
--wix-font-Body-XS: normal normal normal 12px/1.4em din-next-w01-light,sans-serif;
--wix-font-Body-XS-style: normal;
--wix-font-Body-XS-variant: normal;
--wix-font-Body-XS-weight: normal;
--wix-font-Body-XS-size: 12px;
--wix-font-Body-XS-line-height: 1.4em;
--wix-font-Body-XS-family: din-next-w01-light,sans-serif;
--wix-font-Body-XS-text-decoration: none;
--wix-font-LIGHT: normal normal normal 12px/1.4em HelveticaNeueW01-45Ligh;
--wix-font-LIGHT-style: normal;
--wix-font-LIGHT-variant: normal;
--wix-font-LIGHT-weight: normal;
--wix-font-LIGHT-size: 12px;
--wix-font-LIGHT-line-height: 1.4em;
--wix-font-LIGHT-family: HelveticaNeueW01-45Ligh;
--wix-font-LIGHT-text-decoration: none;
--wix-font-MEDIUM: normal normal normal 12px/1.4em HelveticaNeueW01-55Roma;
--wix-font-MEDIUM-style: normal;
--wix-font-MEDIUM-variant: normal;
--wix-font-MEDIUM-weight: normal;
--wix-font-MEDIUM-size: 12px;
--wix-font-MEDIUM-line-height: 1.4em;
--wix-font-MEDIUM-family: HelveticaNeueW01-55Roma;
--wix-font-MEDIUM-text-decoration: none;
--wix-font-STRONG: normal normal normal 12px/1.4em HelveticaNeueW01-65Medi;
--wix-font-STRONG-style: normal;
--wix-font-STRONG-variant: normal;
--wix-font-STRONG-weight: normal;
--wix-font-STRONG-size: 12px;
--wix-font-STRONG-line-height: 1.4em;
--wix-font-STRONG-family: HelveticaNeueW01-65Medi;
--wix-font-STRONG-text-decoration: none;
		}










#comp-jnkafupw{--bg-overlay-color:transparent;--bg-gradient:none;--padding:0px;--margin:0px;min-width:980px;--firstChildMarginTop:-1px;--lastChildMarginBottom:-1px;--items-direction:row;}#comp-jnkafur3{--bg-overlay-color:rgb(var(--color_12));--bg-gradient:none;width:100%;--column-width:980px;--column-flex:980;}#comp-jnkafure{--shc-mutated-brightness:128,128,128;}#comp-jnkafurm{transform-origin:center 0.5px;}#comp-jnkafurr{--height:375px;--width:221px;}#comp-jnmufz7r{--min-height:29px;}#comp-jnkafurv{--min-height:118px;}#comp-jnkafurx{--shc-mutated-brightness:128,128,128;}#comp-jnkafurz{transform-origin:center 0.5px;}#comp-jnkafus1{transform-origin:center 0.5px;}#comp-jnkafus3{transform-origin:center 0.5px;}#comp-jnkafus8{--item-size:30px;--item-margin:0px 27px 0px 0px;--item-display:inline-block;width:87px;height:30px;}#comp-jnkati8o{--shc-mutated-brightness:128,128,128;}#comp-jnu14wot{--min-height:29px;}#comp-jnkati9b{--min-height:118px;}#comp-jnkati9e{--shc-mutated-brightness:128,128,128;}#comp-jnkati9h{transform-origin:center 0.5px;}#comp-jnkati9j{transform-origin:center 0.5px;}#comp-jnkati9m{transform-origin:center 0.5px;}#comp-jnkati9r{--item-size:30px;--item-margin:0px 27px 0px 0px;--item-display:inline-block;width:87px;height:30px;}#comp-jnkati9y{--height:375px;--width:219px;}#comp-jnkatia4{transform-origin:center 0.5px;}#comp-lvl19jm4{--bg-overlay-color:transparent;--bg-gradient:none;min-width:980px;}#comp-jnlcpf5e{--bg-overlay-color:transparent;--bg-gradient:none;--padding:0px;--margin:0px;min-width:980px;--firstChildMarginTop:-1px;--lastChildMarginBottom:-1px;--items-direction:row;}#comp-jnlcpf6z{--bg-overlay-color:rgb(var(--color_18));--bg-gradient:none;width:100%;--column-width:980px;--column-flex:980;}#comp-jnlnmsl4{transform-origin:center 0.5px;}#comp-jnlnmsm3{--min-height:12px;}#comp-jnlcyg3c{--opacity:1;}#comp-jnlcyg3d{--opacity:1;}#comp-jnlcyg3e{--opacity:1;}#comp-jnlcyg3a{--opacity:1;}</style>

</head>
<body class='' >
<script type="text/javascript">
    var bodyCacheable = true;
    
    var exclusionReason = {"shouldRender":true,"forced":false};
    var ssrInfo = {"cacheExclusionReason":"","renderBodyTime":1640,"renderTimeStamp":1732456638572}
</script>





    <!--pageHtmlEmbeds.bodyStart start-->
    <script type="wix/htmlEmbeds" id="pageHtmlEmbeds.bodyStart start"></script>
    
    <script type="wix/htmlEmbeds" id="pageHtmlEmbeds.bodyStart end"></script>
    <!--pageHtmlEmbeds.bodyStart end-->




<script id="wix-first-paint">
    if (window.ResizeObserver &&
        (!window.PerformanceObserver || !PerformanceObserver.supportedEntryTypes || PerformanceObserver.supportedEntryTypes.indexOf('paint') === -1)) {
        new ResizeObserver(function (entries, observer) {
            entries.some(function (entry) {
                var contentRect = entry.contentRect;
                if (contentRect.width > 0 && contentRect.height > 0) {
                    requestAnimationFrame(function (now) {
                        window.wixFirstPaint = now;
                        dispatchEvent(new CustomEvent('wixFirstPaint'));
                    });
                    observer.disconnect();
                    return true;
                }
            });
        }).observe(document.body);
    }
</script>









<div id="SITE_CONTAINER"><style id="STYLE_OVERRIDES_ID">#comp-jnleuon7{visibility:hidden !important;}</style><div id="main_MF" class="main_MF"><div id="SCROLL_TO_TOP" class="Vd6aQZ ignore-focus SCROLL_TO_TOP" tabindex="-1" role="region" aria-label="top of page"><span class="mHZSwn">top of page</span></div><div id="BACKGROUND_GROUP" class="backgroundGroup_c1dmp BACKGROUND_GROUP"><div id="BACKGROUND_GROUP_TRANSITION_GROUP"><div id="pageBackground_c1dmp" data-media-height-override-type="" data-media-position-override="false" class="pageBackground_c1dmp BmZ5pC"><div id="bgLayers_pageBackground_c1dmp" data-hook="bgLayers" data-motion-part="BG_LAYER" class="MW5IWV"><div data-testid="colorUnderlay" class="LWbAav Kv1aVt"></div><div id="bgMedia_pageBackground_c1dmp" data-motion-part="BG_MEDIA" class="VgO9Yg"></div><div data-testid="bgOverlay" class="m4khSP"></div></div></div></div></div><div id="site-root" class="site-root"><div id="masterPage" class="mesh-layout remove-wrappers masterPage css-editing-scope"><div id="pinnedTopLeft" class="pinnedTopLeft"><div id="comp-jnn3udz3-pinned-layer" class="comp-jnn3udz3-pinned-layer big2ZD"><div id="comp-jnn3udz3" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnn3udz3 wixui-rich-text" data-testid="richTextElement"><p class="font_7 wixui-rich-text__text" style="font-size:17px;"><span class="color_41 wixui-rich-text__text"><a href="https://www.sheminimalist.com" target="_self" class="wixui-rich-text__text"><span class="color_41 wixui-rich-text__text"><span style="color:rgb(255, 255, 255); font-family:playfair display,serif; font-size:35px;" class="wixui-rich-text__text">EAT</span><span style="font-family:helvetica-w01-bold,helvetica-w02-bold,helvetica-lt-w10-bold,sans-serif; font-size:49px; letter-spacing:0.05em;" class="wixui-rich-text__text">.</span></span></a></span></p></div></div></div><div id="pinnedTopRight" class="pinnedTopRight"><div id="comp-jnlfh3q2-pinned-layer" class="comp-jnlfh3q2-pinned-layer big2ZD"><wix-dropdown-menu id="comp-jnlfh3q2" class="XwCBRN NHM1d1 comp-jnlfh3q2 wixui-dropdown-menu hidden-during-prewarmup" tabIndex="-1" dir="ltr" data-stretch-buttons-to-menu-width="false" data-same-width-buttons="false" data-num-items="5" data-menuborder-y="0" data-menubtn-border="0" data-ribbon-els="0" data-label-pad="0" data-ribbon-extra="0" data-dropalign="right"><nav class="R_TAzU" id="comp-jnlfh3q2navContainer" aria-label="Site"><ul class="y7qwii" id="comp-jnlfh3q2itemsContainer" style="text-align:right" data-marginallchildren="true"><li id="comp-jnlfh3q20" data-direction="ltr" data-listposition="center" data-data-id="bmi23nr" data-state="menu selected  link" data-index="0" class="Tg1gOB wixui-dropdown-menu__item xTjc1A"><a data-testid="linkElement" href="https://www.sheminimalist.com" target="_self" class="UiHgGh" aria-haspopup="false"><div class="yRj2ms"><div class="" style="text-align:left"><p class="JS76Uv" style="text-align:left" id="comp-jnlfh3q20label">Página Inicial</p></div></div></a></li><li id="comp-jnlfh3q21" data-direction="ltr" data-listposition="center" data-data-id="dataItem-jnlfvvqh" data-state="menu false  link" data-index="1" class="Tg1gOB wixui-dropdown-menu__item xTjc1A"><a data-testid="linkElement" data-anchor="dataItem-jnlflmcu" href="https://www.sheminimalist.com" target="_self" class="UiHgGh" aria-haspopup="false"><div class="yRj2ms"><div class="" style="text-align:left"><p class="JS76Uv" style="text-align:left" id="comp-jnlfh3q21label">Palestrantes</p></div></div></a></li><li id="comp-jnlfh3q22" data-direction="ltr" data-listposition="center" data-data-id="dataItem-jnlfwmh9" data-state="menu false  link" data-index="2" class="Tg1gOB wixui-dropdown-menu__item xTjc1A"><a data-testid="linkElement" data-anchor="dataItem-jnlfnpds" href="https://www.sheminimalist.com" target="_self" class="UiHgGh" aria-haspopup="false"><div class="yRj2ms"><div class="" style="text-align:left"><p class="JS76Uv" style="text-align:left" id="comp-jnlfh3q22label">Agenda</p></div></div></a></li><li id="comp-jnlfh3q23" data-direction="ltr" data-listposition="center" data-data-id="dataItem-jnlfx77b" data-state="menu false  link" data-index="3" class="Tg1gOB wixui-dropdown-menu__item xTjc1A"><a data-testid="linkElement" data-anchor="dataItem-jnlfoh6r" href="https://www.sheminimalist.com" target="_self" class="UiHgGh" aria-haspopup="false"><div class="yRj2ms"><div class="" style="text-align:left"><p class="JS76Uv" style="text-align:left" id="comp-jnlfh3q23label">Local</p></div></div></a></li><li id="comp-jnlfh3q24" data-direction="ltr" data-listposition="right" data-data-id="dataItem-jnlfybsk" data-state="menu false  link" data-index="4" class="Tg1gOB wixui-dropdown-menu__item xTjc1A"><a data-testid="linkElement" data-anchor="dataItem-jnlfp4hg" href="https://www.sheminimalist.com" target="_self" class="UiHgGh" aria-haspopup="false"><div class="yRj2ms"><div class="" style="text-align:left"><p class="JS76Uv" style="text-align:left" id="comp-jnlfh3q24label">Contato</p></div></div></a></li><li id="comp-jnlfh3q2__more__" data-direction="ltr" data-listposition="right" data-state="menu false  header" data-index="__more__" data-dropdown="false" class="p90CkU xTjc1A"><div data-testid="linkElement" class="UiHgGh" tabindex="0" aria-haspopup="false"><div class="yRj2ms"><div class="" style="text-align:left"><p class="JS76Uv" style="text-align:left" id="comp-jnlfh3q2__more__label">Mais</p></div></div></div></li></ul><div class="h3jCPd" id="comp-jnlfh3q2dropWrapper" data-dropalign="right" data-dropdown-shown="false"><ul class="wkJ2fp wixui-dropdown-menu__submenu" id="comp-jnlfh3q2moreContainer"></ul></div><div style="display:none" id="comp-jnlfh3q2navContainer-hiddenA11ySubMenuIndication">Use tab to navigate through the menu items.</div></nav></wix-dropdown-menu></div><div id="comp-jnmtd6qs-pinned-layer" class="comp-jnmtd6qs-pinned-layer big2ZD"><!--$--><div id="comp-jnmtd6qs" class="TWFxr5 "><div class="comp-jnmtd6qs"><style>.comp-jnmtd6qs ._SbO6q {
    --eventsCount: 2;
  }
  </style><div id="wix-events-widget" class="_SbO6q evClassicPreset ZTYKRB" dir="ltr" data-hook="EVENTS_ROOT_NODE"><div class="IOLuL5 jn_rBu" id="ev-frame"><div style="width:100%;height:100%" id="ev-content-container" data-hook="ev-content-container" class="C7DkT1 pe2Vf2 PeGSNm"><div id="ev-content" class="KvGTRc"><div></div><div style="margin-bottom:0"><div id="ev-rsvp-button" class="xAH0mk"><a tabindex="0" data-hook="ev-rsvp-button" style="min-width:142px;min-height:92px" class="DjQEyU BoD93f AinsX6 zLSZXO" href="https://www.sheminimalist.com/events/evento-exclusivo-unicsul" rel="">Ingressos</a></div></div></div></div></div></div></div></div><!--/$--></div></div><header id="SITE_HEADER" class="AT7o0U SITE_HEADER wixui-header" tabindex="-1"><div class="lvxhkV"></div><div class="cKxVkc"><div class="vlM3HR"></div><div class="VrZrC0"><div data-mesh-id="SITE_HEADERinlineContent" data-testid="inline-content" class=""><div data-mesh-id="SITE_HEADERinlineContent-gridContainer" data-testid="mesh-container-content"></div></div></div></div></header><main id="PAGES_CONTAINER" class="PAGES_CONTAINER" tabindex="-1" data-main-content="true"><div id="SITE_PAGES" class="JsJXaX SITE_PAGES"><div id="SITE_PAGES_TRANSITION_GROUP" class="AnQkDU"><div id="c1dmp" class="dBAkHi c1dmp"><div class="PFkO7r wixui-page" data-testid="page-bg"></div><div class="HT5ybB"><div id="pagePinnedMiddleRight-c1dmp" class="pagePinnedMiddleRight-c1dmp"><div id="comp-jnk25096-pinned-layer" class="comp-jnk25096-pinned-layer big2ZD"><div id="comp-jnk25096" class="comp-jnk25096 WzbAF8"><ul class="mpGTIt" aria-label="Redes sociais"><li id="dataItem-jnk2509x1-comp-jnk25096" class="O6KwRn"><a data-testid="linkElement" href="http://www.facebook.com/WixPortugues" target="_blank" class="oRtuWN" aria-label="Ícone do Facebook Branco"><wow-image id="img_0_comp-jnk25096" class="HlRz5e YaS0jR" data-image-info="{&quot;containerId&quot;:&quot;dataItem-jnk2509x1-comp-jnk25096&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;encoding&quot;:&quot;AVIF&quot;,&quot;imageData&quot;:{&quot;width&quot;:200,&quot;height&quot;:200,&quot;uri&quot;:&quot;23fd2a2be53141ed810f4d3dcdcd01fa.png&quot;,&quot;name&quot;:&quot;&quot;,&quot;displayMode&quot;:&quot;fill&quot;}}" data-motion-part="BG_IMG" data-bg-effect-name="" data-has-ssr-src="" style="--wix-img-max-width:max(200px, 100%)"><img alt="Ícone do Facebook Branco"/></wow-image></a></li><li id="dataItem-jnk2509x11-comp-jnk25096" class="O6KwRn"><a data-testid="linkElement" href="https://www.instagram.com/wix" target="_blank" class="oRtuWN" aria-label="Ícone do Instagram Branco"><wow-image id="img_1_comp-jnk25096" class="HlRz5e YaS0jR" data-image-info="{&quot;containerId&quot;:&quot;dataItem-jnk2509x11-comp-jnk25096&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;encoding&quot;:&quot;AVIF&quot;,&quot;imageData&quot;:{&quot;width&quot;:200,&quot;height&quot;:200,&quot;uri&quot;:&quot;81af6121f84c41a5b4391d7d37fce12a.png&quot;,&quot;name&quot;:&quot;&quot;,&quot;displayMode&quot;:&quot;fill&quot;}}" data-motion-part="BG_IMG" data-bg-effect-name="" data-has-ssr-src="" style="--wix-img-max-width:max(200px, 100%)"><img alt="Ícone do Instagram Branco"/></wow-image></a></li><li id="dataItem-jnk2509x3-comp-jnk25096" class="O6KwRn"><a data-testid="linkElement" href="https://twitter.com/WixBR" target="_blank" class="oRtuWN" aria-label="Ícone do Twitter Branco"><wow-image id="img_2_comp-jnk25096" class="HlRz5e YaS0jR" data-image-info="{&quot;containerId&quot;:&quot;dataItem-jnk2509x3-comp-jnk25096&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;encoding&quot;:&quot;AVIF&quot;,&quot;imageData&quot;:{&quot;width&quot;:200,&quot;height&quot;:200,&quot;uri&quot;:&quot;01ab6619093f45388d66736ec22e5885.png&quot;,&quot;name&quot;:&quot;&quot;,&quot;displayMode&quot;:&quot;fill&quot;}}" data-motion-part="BG_IMG" data-bg-effect-name="" data-has-ssr-src="" style="--wix-img-max-width:max(200px, 100%)"><img alt="Ícone do Twitter Branco"/></wow-image></a></li><li id="dataItem-jnk26ez3-comp-jnk25096" class="O6KwRn"><a data-testid="linkElement" href="https://www.linkedin.com/company/wix-com" target="_blank" class="oRtuWN" aria-label="Ícone do Linkedin Branco"><wow-image id="img_3_comp-jnk25096" class="HlRz5e YaS0jR" data-image-info="{&quot;containerId&quot;:&quot;dataItem-jnk26ez3-comp-jnk25096&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;encoding&quot;:&quot;AVIF&quot;,&quot;imageData&quot;:{&quot;width&quot;:200,&quot;height&quot;:200,&quot;uri&quot;:&quot;7528824071724d12a3e6c31eee0b40d4.png&quot;,&quot;name&quot;:&quot;&quot;,&quot;displayMode&quot;:&quot;fill&quot;}}" data-motion-part="BG_IMG" data-bg-effect-name="" data-has-ssr-src="" style="--wix-img-max-width:max(200px, 100%)"><img alt="Ícone do Linkedin Branco"/></wow-image></a></li></ul></div></div></div><div id="Containerc1dmp" class="Containerc1dmp SPY_vo"><div data-mesh-id="Containerc1dmpinlineContent" data-testid="inline-content" class=""><div data-mesh-id="Containerc1dmpinlineContent-gridContainer" data-testid="mesh-container-content"><section id="comp-lvl19jm2" tabindex="-1" class="Oqnisf comp-lvl19jm2 wixui-section" data-block-level-container="ClassicSection"><div id="bgLayers_comp-lvl19jm2" data-hook="bgLayers" data-motion-part="BG_LAYER" class="MW5IWV"><div data-testid="colorUnderlay" class="LWbAav Kv1aVt"></div><div id="bgMedia_comp-lvl19jm2" data-motion-part="BG_MEDIA" class="VgO9Yg"></div></div><div data-mesh-id="comp-lvl19jm2inlineContent" data-testid="inline-content" class=""><div data-mesh-id="comp-lvl19jm2inlineContent-gridContainer" data-testid="mesh-container-content"><section id="comp-jnk0xbql" class="comp-jnk0xbql CohWsy wixui-column-strip"><div id="bgLayers_comp-jnk0xbql" data-hook="bgLayers" data-motion-part="BG_LAYER" class="if7Vw2"><div data-testid="colorUnderlay" class="tcElKx i1tH8h"></div><div id="bgMedia_comp-jnk0xbql" data-motion-part="BG_MEDIA" class="wG8dni"></div></div><div data-testid="columns" class="V5AUxf"><div id="comp-jnk0xbsw" class="comp-jnk0xbsw YzqVVZ wixui-column-strip__column"><div id="bgLayers_comp-jnk0xbsw" data-hook="bgLayers" data-motion-part="BG_LAYER" class="MW5IWV N3eg0s"><div data-testid="colorUnderlay" class="LWbAav Kv1aVt"></div><wix-bg-media id="bgMedia_comp-jnk0xbsw" class="SUz0WK" data-container-id="comp-jnk0xbsw" data-container-size="0, 0" data-page-id="c1dmp" data-bg-effect-name="BgParallax" data-motion-part="BG_MEDIA"><wow-image id="img_comp-jnk0xbsw" class="HlRz5e Kv1aVt dLPlxY mNGsUM bgImage" data-image-info="{&quot;containerId&quot;:&quot;comp-jnk0xbsw&quot;,&quot;alignType&quot;:&quot;center&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;targetWidth&quot;:980,&quot;targetHeight&quot;:1265,&quot;isLQIP&quot;:true,&quot;encoding&quot;:&quot;AVIF&quot;,&quot;imageData&quot;:{&quot;width&quot;:3000,&quot;height&quot;:2000,&quot;uri&quot;:&quot;4951af_262a739393664e518f147d34f34255c3~mv2_d_3000_2000_s_2.jpg&quot;,&quot;name&quot;:&quot;&quot;,&quot;displayMode&quot;:&quot;fill&quot;}}" data-motion-part="BG_IMG" data-bg-effect-name="BgParallax" data-has-ssr-src="true"><img src="https://static.wixstatic.com/media/4951af_262a739393664e518f147d34f34255c3~mv2_d_3000_2000_s_2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/4951af_262a739393664e518f147d34f34255c3~mv2_d_3000_2000_s_2.jpg" alt="" style="width:100%;height:100%;object-fit:cover;object-position:50% 50%" width="980" height="1265"/></wow-image></wix-bg-media></div><div data-mesh-id="comp-jnk0xbswinlineContent" data-testid="inline-content" class="mwF7X1"><div data-mesh-id="comp-jnk0xbswinlineContent-gridContainer" data-testid="mesh-container-content"><div id="comp-jnk1qp12" class="HcOXKn c9GqVL QxJLC3 lq2cno comp-jnk1qp12 wixui-rich-text" data-testid="richTextElement"><h1 class="font_0 wixui-rich-text__text" style="line-height:1.2em; font-size:90px;"><span style="letter-spacing:-0.02em;" class="wixui-rich-text__text"><span class="color_11 wixui-rich-text__text">Workshop de Estudantes Formandos de 2025</span></span></h1></div><div id="comp-jnk1znbc" class="comp-jnk1znbc aVng1S wixui-horizontal-line"></div><div id="comp-jnk1xqnd" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnk1xqnd wixui-rich-text" data-testid="richTextElement"><p class="font_5 wixui-rich-text__text" style="font-size:25px;"><span class="color_11 wixui-rich-text__text"><span style="letter-spacing:0.03em;" class="wixui-rich-text__text">Fique por Dentro das Últimas Novidades</span></span></p></div><div id="comp-jnk2g9kl" class="KaEeLN comp-jnk2g9kl"><div class="uYj0Sg wixui-box" data-testid="container-bg"></div><div data-mesh-id="comp-jnk2g9klinlineContent" data-testid="inline-content" class=""><div data-mesh-id="comp-jnk2g9klinlineContent-gridContainer" data-testid="mesh-container-content"><div id="comp-jnk2wu3w" class="HcOXKn c9GqVL QxJLC3 lq2cno comp-jnk2wu3w wixui-rich-text" data-testid="richTextElement"><p class="font_7 wixui-rich-text__text" style="line-height:normal; font-size:17px;"><span class="color_12 wixui-rich-text__text"><span style="letter-spacing:0.05em;" class="wixui-rich-text__text"><span style="font-family:avenir-lt-w01_35-light1475496,sans-serif;" class="wixui-rich-text__text">01 de Julho</span></span></span></p></div><div data-mesh-id="comp-jnk2iqwu-rotated-wrapper"><div id="comp-jnk2iqwu" class="comp-jnk2iqwu aVng1S wixui-horizontal-line"></div></div><div id="comp-jnk2mudq" class="HcOXKn c9GqVL QxJLC3 lq2cno comp-jnk2mudq wixui-rich-text" data-testid="richTextElement"><p class="font_7 wixui-rich-text__text" style="line-height:normal; font-size:17px;"><span class="color_12 wixui-rich-text__text"><span style="letter-spacing:0.06em;" class="wixui-rich-text__text">Universidade Cruzeiro do Sul</span></span></p></div></div></div></div><!--$--><div id="comp-jnmuwc3w" class="TWFxr5 "><div class="comp-jnmuwc3w"><style>.comp-jnmuwc3w ._SbO6q {
    --eventsCount: 0;
  }
  </style><div id="wix-events-widget" class="_SbO6q evClassicPreset ZTYKRB" dir="ltr" data-hook="EVENTS_ROOT_NODE"><div class="M3QfA1 GgNVPA EdMH8t">Não há eventos no momento</div></div></div></div><!--/$--><div data-mesh-id="comp-jnk0xbswinlineContent-wedge-4"></div></div></div></div></div></section></div></div></section><section id="comp-lvl19jm3" tabindex="-1" class="Oqnisf comp-lvl19jm3 wixui-section" data-block-level-container="ClassicSection"><div id="bgLayers_comp-lvl19jm3" data-hook="bgLayers" data-motion-part="BG_LAYER" class="MW5IWV"><div data-testid="colorUnderlay" class="LWbAav Kv1aVt"></div><div id="bgMedia_comp-lvl19jm3" data-motion-part="BG_MEDIA" class="VgO9Yg"></div></div><div data-mesh-id="comp-lvl19jm3inlineContent" data-testid="inline-content" class=""><div data-mesh-id="comp-lvl19jm3inlineContent-gridContainer" data-testid="mesh-container-content"><section id="comp-jnk1hb83" class="comp-jnk1hb83 CohWsy wixui-column-strip"><div id="bgLayers_comp-jnk1hb83" data-hook="bgLayers" data-motion-part="BG_LAYER" class="if7Vw2"><div data-testid="colorUnderlay" class="tcElKx i1tH8h"></div><div id="bgMedia_comp-jnk1hb83" data-motion-part="BG_MEDIA" class="wG8dni"></div></div><div data-testid="columns" class="V5AUxf"><div id="comp-jnk1hb92" class="comp-jnk1hb92 YzqVVZ wixui-column-strip__column"><div id="bgLayers_comp-jnk1hb92" data-hook="bgLayers" data-motion-part="BG_LAYER" class="MW5IWV"><div data-testid="colorUnderlay" class="LWbAav Kv1aVt"></div><div id="bgMedia_comp-jnk1hb92" data-motion-part="BG_MEDIA" class="VgO9Yg"></div></div><div data-mesh-id="comp-jnk1hb92inlineContent" data-testid="inline-content" class=""><div data-mesh-id="comp-jnk1hb92inlineContent-gridContainer" data-testid="mesh-container-content"><div id="comp-jnk5ap05" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnk5ap05 wixui-rich-text" data-testid="richTextElement"><h2 class="font_2 wixui-rich-text__text" style="font-size:50px;"><span class="color_15 wixui-rich-text__text">Os Palestrantes</span></h2></div><div id="comp-jnk6dqq1" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnk6dqq1 wixui-rich-text" data-testid="richTextElement"><p class="font_7 wixui-rich-text__text" style="font-size:17px;"><span class="color_18 wixui-rich-text__text"><span style="letter-spacing:0.1em;" class="wixui-rich-text__text">04</span></span></p></div><div id="comp-jnu2f0tk" class="comp-jnu2f0tk aVng1S wixui-horizontal-line"></div><div id="comp-jnk6df2n" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnk6df2n wixui-rich-text" data-testid="richTextElement"><p class="font_7 wixui-rich-text__text" style="font-size:17px;"><span style="letter-spacing:0.1em;" class="wixui-rich-text__text">ESPECIALISTAS DO MERCADO</span></p></div><div id="comp-jnk1m472" class="KaEeLN comp-jnk1m472"><div class="uYj0Sg wixui-box" data-testid="container-bg"></div><div data-mesh-id="comp-jnk1m472inlineContent" data-testid="inline-content" class=""><div data-mesh-id="comp-jnk1m472inlineContent-gridContainer" data-testid="mesh-container-content"><div data-mesh-id="comp-jnk5fpi3-rotated-wrapper"><div id="comp-jnk5fpi3" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnk5fpi3 wixui-rich-text" data-testid="richTextElement"><p class="font_7 wixui-rich-text__text" style="font-size:17px;"><span class="color_18 wixui-rich-text__text"><span style="letter-spacing:0.1em;" class="wixui-rich-text__text">01</span></span></p></div></div><div data-mesh-id="comp-jnk5cl1q-rotated-wrapper"><div id="comp-jnk5cl1q" class="comp-jnk5cl1q aVng1S wixui-horizontal-line"></div></div><div data-mesh-id="comp-jnn6hwdv-rotated-wrapper"><div id="comp-jnn6hwdv" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnn6hwdv wixui-rich-text" data-testid="richTextElement"><p class="font_7 wixui-rich-text__text" style="font-size:17px;"><span class="color_18 wixui-rich-text__text"><span style="font-weight:400;" class="wixui-rich-text__text">Desenvolvedor de Software</span></span></p></div></div><div id="comp-jnk5ywhn" class="MazNVa comp-jnk5ywhn wixui-image"><div data-testid="linkElement" class="j7pOnl"><wow-image id="img_comp-jnk5ywhn" class="HlRz5e BI8PVQ" data-image-info="{&quot;containerId&quot;:&quot;comp-jnk5ywhn&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;targetWidth&quot;:221,&quot;targetHeight&quot;:375,&quot;isLQIP&quot;:true,&quot;encoding&quot;:&quot;AVIF&quot;,&quot;imageData&quot;:{&quot;width&quot;:219,&quot;height&quot;:372,&quot;uri&quot;:&quot;4951af_aaca23b991a34d4db1ab4ebf800a5378~mv2.png&quot;,&quot;name&quot;:&quot;shutterstock_725291137 _new.png&quot;,&quot;displayMode&quot;:&quot;fill&quot;}}" data-motion-part="BG_IMG" data-bg-effect-name="" data-has-ssr-src="true"><img src="https://static.wixstatic.com/media/4951af_aaca23b991a34d4db1ab4ebf800a5378~mv2.png/v1/fill/w_55,h_94,al_c,q_85,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/shutterstock_725291137%20_new.png" alt="shutterstock_725291137 _new.png" style="width:100%;height:100%;object-fit:cover;object-position:50% 50%" width="221" height="375" loading="lazy"/></wow-image></div></div><div id="comp-jnk5ljj2" class="HcOXKn c9GqVL QxJLC3 lq2cno comp-jnk5ljj2 wixui-rich-text" data-testid="richTextElement"><h3 class="font_3 wixui-rich-text__text" style="line-height:normal; font-size:30px;"><span style="letter-spacing:normal;" class="wixui-rich-text__text">Joana Silva</span></h3></div><div id="comp-jnmu6mek" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnmu6mek wixui-rich-text" data-testid="richTextElement"><p class="font_7 wixui-rich-text__text" style="font-size:17px;"><span class="color_13 wixui-rich-text__text"><span style="font-style:normal;" class="wixui-rich-text__text"><span style="font-family:avenir-lt-w01_35-light1475496,sans-serif;" class="wixui-rich-text__text"><span style="font-weight:400;" class="wixui-rich-text__text"><span style="font-size:17px;" class="wixui-rich-text__text">Inovações em Desenvolvimento de Software</span></span></span></span></span></p></div><div id="comp-jnmtvh9l" class="HcOXKn c9GqVL QxJLC3 lq2cno comp-jnmtvh9l wixui-rich-text" data-testid="richTextElement"><p class="font_8 wixui-rich-text__text" style="line-height:1.6em; font-size:18px;"><span style="letter-spacing:0.02em;" class="wixui-rich-text__text"><span class="color_14 wixui-rich-text__text">H&aacute; 20 anos no mercado de tecnologia, ir&aacute; apresentar as principais tend&ecirc;ncias do mercado.</span></span></p></div><div id="comp-jnk61vw3" class="KaEeLN comp-jnk61vw3"><div class="uYj0Sg wixui-box" data-testid="container-bg"></div><div data-mesh-id="comp-jnk61vw3inlineContent" data-testid="inline-content" class=""><div data-mesh-id="comp-jnk61vw3inlineContent-gridContainer" data-testid="mesh-container-content"><div data-mesh-id="comp-jnk64fbf-rotated-wrapper"><div id="comp-jnk64fbf" class="comp-jnk64fbf aVng1S wixui-horizontal-line"></div></div><div data-mesh-id="comp-jnk65a8d-rotated-wrapper"><div id="comp-jnk65a8d" class="comp-jnk65a8d aVng1S wixui-horizontal-line"></div></div><div data-mesh-id="comp-jnk65neo-rotated-wrapper"><div id="comp-jnk65neo" class="comp-jnk65neo aVng1S wixui-horizontal-line"></div></div><div id="comp-jnk5dns4" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnk5dns4 wixui-rich-text" data-testid="richTextElement"><p class="font_9 wixui-rich-text__text" style="text-align:center; font-size:14px;"><span class="color_18 wixui-rich-text__text">SAIBA MAIS</span></p></div><div id="comp-jnk68xzh" class="comp-jnk68xzh WzbAF8"><ul class="mpGTIt" aria-label="Redes sociais"><li id="dataItem-jnk6b45w-comp-jnk68xzh" class="O6KwRn"><a data-testid="linkElement" href="https://twitter.com/WixBR" target="_blank" class="oRtuWN" aria-label="Ícone do Twitter Preto"><wow-image id="img_0_comp-jnk68xzh" class="HlRz5e YaS0jR" data-image-info="{&quot;containerId&quot;:&quot;dataItem-jnk6b45w-comp-jnk68xzh&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;encoding&quot;:&quot;AVIF&quot;,&quot;imageData&quot;:{&quot;width&quot;:200,&quot;height&quot;:200,&quot;uri&quot;:&quot;c7d035ba85f6486680c2facedecdcf4d.png&quot;,&quot;name&quot;:&quot;&quot;,&quot;displayMode&quot;:&quot;fill&quot;}}" data-motion-part="BG_IMG" data-bg-effect-name="" data-has-ssr-src="" style="--wix-img-max-width:max(200px, 100%)"><img alt="Ícone do Twitter Preto"/></wow-image></a></li><li id="dataItem-jnk68y0d3-comp-jnk68xzh" class="O6KwRn"><a data-testid="linkElement" href="https://www.linkedin.com/company/wix-com" target="_blank" class="oRtuWN" aria-label="Ícone do Linkedin Preto"><wow-image id="img_1_comp-jnk68xzh" class="HlRz5e YaS0jR" data-image-info="{&quot;containerId&quot;:&quot;dataItem-jnk68y0d3-comp-jnk68xzh&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;encoding&quot;:&quot;AVIF&quot;,&quot;imageData&quot;:{&quot;width&quot;:200,&quot;height&quot;:200,&quot;uri&quot;:&quot;6ea5b4a88f0b4f91945b40499aa0af00.png&quot;,&quot;name&quot;:&quot;&quot;,&quot;displayMode&quot;:&quot;fill&quot;}}" data-motion-part="BG_IMG" data-bg-effect-name="" data-has-ssr-src="" style="--wix-img-max-width:max(200px, 100%)"><img alt="Ícone do Linkedin Preto"/></wow-image></a></li></ul></div></div></div></div></div></div></div><div data-mesh-id="comp-jnk1hb92inlineContent-wedge-3"></div></div></div></div></div></section><div id="comp-jnlflmbd" class="Vd6aQZ ignore-focus comp-jnlflmbd" tabindex="-1" role="region" aria-label="Palestrantes"><div id="palestrantes"></div><span class="mHZSwn">Palestrantes</span></div><section id="comp-jnka9ey2" class="comp-jnka9ey2 CohWsy wixui-column-strip"><div id="bgLayers_comp-jnka9ey2" data-hook="bgLayers" data-motion-part="BG_LAYER" class="if7Vw2"><div data-testid="colorUnderlay" class="tcElKx i1tH8h"></div><div id="bgMedia_comp-jnka9ey2" data-motion-part="BG_MEDIA" class="wG8dni"></div></div><div data-testid="columns" class="V5AUxf"><div id="comp-jnka9ez5" class="comp-jnka9ez5 YzqVVZ wixui-column-strip__column"><div id="bgLayers_comp-jnka9ez5" data-hook="bgLayers" data-motion-part="BG_LAYER" class="MW5IWV"><div data-testid="colorUnderlay" class="LWbAav Kv1aVt"></div><div id="bgMedia_comp-jnka9ez5" data-motion-part="BG_MEDIA" class="VgO9Yg"></div></div><div data-mesh-id="comp-jnka9ez5inlineContent" data-testid="inline-content" class=""><div data-mesh-id="comp-jnka9ez5inlineContent-gridContainer" data-testid="mesh-container-content"><div id="comp-jnka9ezh" class="KaEeLN comp-jnka9ezh"><div class="uYj0Sg wixui-box" data-testid="container-bg"></div><div data-mesh-id="comp-jnka9ezhinlineContent" data-testid="inline-content" class=""><div data-mesh-id="comp-jnka9ezhinlineContent-gridContainer" data-testid="mesh-container-content"><div id="comp-jnka9ezr" class="HcOXKn c9GqVL QxJLC3 lq2cno comp-jnka9ezr wixui-rich-text" data-testid="richTextElement"><h3 class="font_3 wixui-rich-text__text" style="line-height:normal; font-size:30px;"><span style="letter-spacing:normal;" class="wixui-rich-text__text">Mariano Santos</span></h3></div><div id="comp-jnmu7zwz" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnmu7zwz wixui-rich-text" data-testid="richTextElement"><p class="font_7 wixui-rich-text__text" style="font-size:17px;"><span class="color_13 wixui-rich-text__text"><span style="font-style:normal;" class="wixui-rich-text__text"><span style="font-family:avenir-lt-w01_35-light1475496,sans-serif;" class="wixui-rich-text__text"><span style="font-weight:400;" class="wixui-rich-text__text"><span style="font-size:17px;" class="wixui-rich-text__text">Tendências em Inteligência Artificial</span></span></span></span></span></p></div><div id="comp-jnka9ezt" class="HcOXKn c9GqVL QxJLC3 lq2cno comp-jnka9ezt wixui-rich-text" data-testid="richTextElement"><p class="font_8 wixui-rich-text__text" style="line-height:1.6em; font-size:18px;"><span class="color_14 wixui-rich-text__text"><span style="letter-spacing:0.02em;" class="wixui-rich-text__text">Dicas e orienta&ccedil;&otilde;es a quem quer trabalhar na &aacute;rea de Intelig&ecirc;ncia Artificial.</span></span></p></div><div id="comp-jnka9ezv" class="KaEeLN comp-jnka9ezv"><div class="uYj0Sg wixui-box" data-testid="container-bg"></div><div data-mesh-id="comp-jnka9ezvinlineContent" data-testid="inline-content" class=""><div data-mesh-id="comp-jnka9ezvinlineContent-gridContainer" data-testid="mesh-container-content"><div data-mesh-id="comp-jnka9f05-rotated-wrapper"><div id="comp-jnka9f05" class="comp-jnka9f05 aVng1S wixui-horizontal-line"></div></div><div data-mesh-id="comp-jnka9f08-rotated-wrapper"><div id="comp-jnka9f08" class="comp-jnka9f08 aVng1S wixui-horizontal-line"></div></div><div data-mesh-id="comp-jnka9f0a-rotated-wrapper"><div id="comp-jnka9f0a" class="comp-jnka9f0a aVng1S wixui-horizontal-line"></div></div><div id="comp-jnka9f0c" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnka9f0c wixui-rich-text" data-testid="richTextElement"><p class="font_9 wixui-rich-text__text" style="text-align:center; font-size:14px;"><span class="color_18 wixui-rich-text__text">SAIBA MAIS</span></p></div><div id="comp-jnka9f0f" class="comp-jnka9f0f WzbAF8"><ul class="mpGTIt" aria-label="Redes sociais"><li id="dataItem-jnka9f0f2-comp-jnka9f0f" class="O6KwRn"><a data-testid="linkElement" href="https://twitter.com/WixBR" target="_blank" class="oRtuWN" aria-label="Ícone do Twitter Preto"><wow-image id="img_0_comp-jnka9f0f" class="HlRz5e YaS0jR" data-image-info="{&quot;containerId&quot;:&quot;dataItem-jnka9f0f2-comp-jnka9f0f&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;encoding&quot;:&quot;AVIF&quot;,&quot;imageData&quot;:{&quot;width&quot;:200,&quot;height&quot;:200,&quot;uri&quot;:&quot;c7d035ba85f6486680c2facedecdcf4d.png&quot;,&quot;name&quot;:&quot;&quot;,&quot;displayMode&quot;:&quot;fill&quot;}}" data-motion-part="BG_IMG" data-bg-effect-name="" data-has-ssr-src="" style="--wix-img-max-width:max(200px, 100%)"><img alt="Ícone do Twitter Preto"/></wow-image></a></li><li id="dataItem-jnka9f0f3-comp-jnka9f0f" class="O6KwRn"><a data-testid="linkElement" href="https://www.linkedin.com/company/wix-com" target="_blank" class="oRtuWN" aria-label="Ícone do Linkedin Preto"><wow-image id="img_1_comp-jnka9f0f" class="HlRz5e YaS0jR" data-image-info="{&quot;containerId&quot;:&quot;dataItem-jnka9f0f3-comp-jnka9f0f&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;encoding&quot;:&quot;AVIF&quot;,&quot;imageData&quot;:{&quot;width&quot;:200,&quot;height&quot;:200,&quot;uri&quot;:&quot;6ea5b4a88f0b4f91945b40499aa0af00.png&quot;,&quot;name&quot;:&quot;&quot;,&quot;displayMode&quot;:&quot;fill&quot;}}" data-motion-part="BG_IMG" data-bg-effect-name="" data-has-ssr-src="" style="--wix-img-max-width:max(200px, 100%)"><img alt="Ícone do Linkedin Preto"/></wow-image></a></li></ul></div></div></div></div><div id="comp-jnka9ezp" class="MazNVa comp-jnka9ezp wixui-image"><div data-testid="linkElement" class="j7pOnl"><wow-image id="img_comp-jnka9ezp" class="HlRz5e BI8PVQ" data-image-info="{&quot;containerId&quot;:&quot;comp-jnka9ezp&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;targetWidth&quot;:216,&quot;targetHeight&quot;:360,&quot;isLQIP&quot;:true,&quot;encoding&quot;:&quot;AVIF&quot;,&quot;imageData&quot;:{&quot;width&quot;:215,&quot;height&quot;:372,&quot;uri&quot;:&quot;4951af_d0a49fb7f33f4cc19cb89aa97c953dc1~mv2.png&quot;,&quot;name&quot;:&quot;shutterstock_725291137 copy 12.png&quot;,&quot;displayMode&quot;:&quot;fill&quot;}}" data-motion-part="BG_IMG" data-bg-effect-name="" data-has-ssr-src="true"><img src="https://static.wixstatic.com/media/4951af_d0a49fb7f33f4cc19cb89aa97c953dc1~mv2.png/v1/fill/w_52,h_90,al_c,q_85,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/shutterstock_725291137%20copy%2012.png" alt="shutterstock_725291137 copy 12.png" style="width:100%;height:100%;object-fit:cover;object-position:50% 50%" width="216" height="360" loading="lazy"/></wow-image></div></div><div data-mesh-id="comp-jnka9ezj-rotated-wrapper"><div id="comp-jnka9ezj" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnka9ezj wixui-rich-text" data-testid="richTextElement"><p class="font_7 wixui-rich-text__text" style="font-size:17px;"><span class="color_18 wixui-rich-text__text"><span style="letter-spacing:0.1em;" class="wixui-rich-text__text">02</span></span></p></div></div><div data-mesh-id="comp-jnka9ezl-rotated-wrapper"><div id="comp-jnka9ezl" class="comp-jnka9ezl aVng1S wixui-horizontal-line"></div></div><div data-mesh-id="comp-jnn6eyvh-rotated-wrapper"><div id="comp-jnn6eyvh" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnn6eyvh wixui-rich-text" data-testid="richTextElement"><p class="font_7 wixui-rich-text__text" style="font-size:17px;"><span class="color_18 wixui-rich-text__text"><span style="font-weight:400;" class="wixui-rich-text__text">Engenheiro de Dados</span></span></p></div></div></div></div></div></div></div></div></div></section><section id="comp-jnkf3qg1" class="comp-jnkf3qg1 CohWsy wixui-column-strip"><div id="bgLayers_comp-jnkf3qg1" data-hook="bgLayers" data-motion-part="BG_LAYER" class="if7Vw2"><div data-testid="colorUnderlay" class="tcElKx i1tH8h"></div><div id="bgMedia_comp-jnkf3qg1" data-motion-part="BG_MEDIA" class="wG8dni"></div></div><div data-testid="columns" class="V5AUxf"><div id="comp-jnkf3qi7" class="comp-jnkf3qi7 YzqVVZ wixui-column-strip__column"><div id="bgLayers_comp-jnkf3qi7" data-hook="bgLayers" data-motion-part="BG_LAYER" class="MW5IWV N3eg0s"><div data-testid="colorUnderlay" class="LWbAav Kv1aVt"></div><wix-bg-media id="bgMedia_comp-jnkf3qi7" class="SUz0WK" data-container-id="comp-jnkf3qi7" data-container-size="0, 0" data-page-id="c1dmp" data-bg-effect-name="BgParallax" data-motion-part="BG_MEDIA"><wow-image id="img_comp-jnkf3qi7" class="HlRz5e Kv1aVt dLPlxY mNGsUM bgImage" data-image-info="{&quot;containerId&quot;:&quot;comp-jnkf3qi7&quot;,&quot;alignType&quot;:&quot;center&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;targetWidth&quot;:490,&quot;targetHeight&quot;:818,&quot;isLQIP&quot;:true,&quot;encoding&quot;:&quot;AVIF&quot;,&quot;imageData&quot;:{&quot;width&quot;:3792,&quot;height&quot;:4740,&quot;uri&quot;:&quot;4951af_1c00d2331a44464a9b6cc8cdb8b80970~mv2_d_3792_4740_s_4_2.jpg&quot;,&quot;name&quot;:&quot;&quot;,&quot;displayMode&quot;:&quot;fill&quot;}}" data-motion-part="BG_IMG" data-bg-effect-name="BgParallax" data-has-ssr-src="true"><img src="https://static.wixstatic.com/media/4951af_1c00d2331a44464a9b6cc8cdb8b80970~mv2_d_3792_4740_s_4_2.jpg/v1/fill/w_123,h_153,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/4951af_1c00d2331a44464a9b6cc8cdb8b80970~mv2_d_3792_4740_s_4_2.jpg" alt="" style="width:100%;height:100%;object-fit:cover;object-position:50% 50%" width="490" height="818"/></wow-image></wix-bg-media></div><div data-mesh-id="comp-jnkf3qi7inlineContent" data-testid="inline-content" class="mwF7X1"><div data-mesh-id="comp-jnkf3qi7inlineContent-gridContainer" data-testid="mesh-container-content"></div></div></div><div id="comp-jnkfh4i3" class="comp-jnkfh4i3 YzqVVZ wixui-column-strip__column"><div id="bgLayers_comp-jnkfh4i3" data-hook="bgLayers" data-motion-part="BG_LAYER" class="MW5IWV"><div data-testid="colorUnderlay" class="LWbAav Kv1aVt"></div><div id="bgMedia_comp-jnkfh4i3" data-motion-part="BG_MEDIA" class="VgO9Yg"></div></div><div data-mesh-id="comp-jnkfh4i3inlineContent" data-testid="inline-content" class=""><div data-mesh-id="comp-jnkfh4i3inlineContent-gridContainer" data-testid="mesh-container-content"><div id="comp-jnkfotle" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnkfotle wixui-rich-text" data-testid="richTextElement"><h2 class="font_2 wixui-rich-text__text" style="font-size:50px;"><span class="color_15 wixui-rich-text__text">O Local</span></h2></div><div id="comp-jnldxsca" class="comp-jnldxsca aVng1S wixui-horizontal-line"></div><div id="comp-jnldxsbd" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnldxsbd wixui-rich-text" data-testid="richTextElement"><p class="font_7 wixui-rich-text__text" style="line-height:1.3em; font-size:17px;"><span class="color_14 wixui-rich-text__text">Av. Universitária, 1000<br class="wixui-rich-text__text">Cidade ABC - UF - CEP: 12345-678</span></p></div><div id="comp-jnldu9k0" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnldu9k0 wixui-rich-text" data-testid="richTextElement"><p class="font_8 wixui-rich-text__text" style="line-height:1.7em; font-size:18px;"><span class="color_14 wixui-rich-text__text"><span style="letter-spacing:0.02em;" class="wixui-rich-text__text">Insira uma descrição sobre o local do evento, destacando sua comodidade e facilidade de acesso para os participantes.</span></span></p></div></div></div></div></div></section><div id="comp-jnlfnpc0" class="Vd6aQZ ignore-focus comp-jnlfnpc0" tabindex="-1" role="region" aria-label="Agenda"><div id="agenda"></div><span class="mHZSwn">Agenda</span></div><section id="comp-jnkai0mw" class="comp-jnkai0mw CohWsy wixui-column-strip"><div id="bgLayers_comp-jnkai0mw" data-hook="bgLayers" data-motion-part="BG_LAYER" class="if7Vw2"><div data-testid="colorUnderlay" class="tcElKx i1tH8h"></div><div id="bgMedia_comp-jnkai0mw" data-motion-part="BG_MEDIA" class="wG8dni"></div></div><div data-testid="columns" class="V5AUxf"><div id="comp-jnkai0o2" class="comp-jnkai0o2 YzqVVZ wixui-column-strip__column"><div id="bgLayers_comp-jnkai0o2" data-hook="bgLayers" data-motion-part="BG_LAYER" class="MW5IWV"><div data-testid="colorUnderlay" class="LWbAav Kv1aVt"></div><div id="bgMedia_comp-jnkai0o2" data-motion-part="BG_MEDIA" class="VgO9Yg"></div></div><div data-mesh-id="comp-jnkai0o2inlineContent" data-testid="inline-content" class=""><div data-mesh-id="comp-jnkai0o2inlineContent-gridContainer" data-testid="mesh-container-content"><div id="comp-jnkeix36" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnkeix36 wixui-rich-text" data-testid="richTextElement"><h2 class="font_2 wixui-rich-text__text" style="font-size:50px;"><span class="color_11 wixui-rich-text__text">Agenda</span></h2></div><div id="comp-jnkelgvc" class="comp-jnkelgvc aVng1S wixui-horizontal-line"></div><div id="comp-jnkejs6f" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnkejs6f wixui-rich-text" data-testid="richTextElement"><p class="font_7 wixui-rich-text__text" style="font-size:17px;"><span class="color_18 wixui-rich-text__text"><span style="letter-spacing:0.1em;" class="wixui-rich-text__text">10 DE NOVEMBRO</span></span></p></div><div data-mesh-id="comp-jnkeuhdz-rotated-wrapper"><div id="comp-jnkeuhdz" class="comp-jnkeuhdz aVng1S wixui-horizontal-line"></div></div><div id="comp-jnlluglb" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnlluglb wixui-rich-text" data-testid="richTextElement"><p class="font_5 wixui-rich-text__text" style="font-size:30px;"><span style="letter-spacing:0.03em;" class="wixui-rich-text__text"><span style="font-size:30px;" class="wixui-rich-text__text"><span class="color_11 wixui-rich-text__text"><span style="font-family:playfair display,serif;" class="wixui-rich-text__text">09:00</span></span></span></span></p></div><div id="comp-jnkez8vq" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnkez8vq wixui-rich-text" data-testid="richTextElement"><p class="font_5 wixui-rich-text__text" style="font-size:25px;"><span class="color_12 wixui-rich-text__text"><span style="font-family:avenir-lt-w01_35-light1475496,sans-serif;" class="wixui-rich-text__text">Credenciamento</span></span></p></div><div id="comp-jnkemyy9" class="comp-jnkemyy9 aVng1S wixui-horizontal-line"></div><div data-mesh-id="comp-jnkeujs1-rotated-wrapper"><div id="comp-jnkeujs1" class="comp-jnkeujs1 aVng1S wixui-horizontal-line"></div></div><div id="comp-jnllw6m6" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnllw6m6 wixui-rich-text" data-testid="richTextElement"><p class="font_5 wixui-rich-text__text" style="font-size:30px;"><span style="letter-spacing:0.03em;" class="wixui-rich-text__text"><span style="font-size:30px;" class="wixui-rich-text__text"><span class="color_11 wixui-rich-text__text"><span style="font-family:playfair display,serif;" class="wixui-rich-text__text">10:00</span></span></span></span></p></div><div id="comp-jnkezjbz" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnkezjbz wixui-rich-text" data-testid="richTextElement"><p class="font_5 wixui-rich-text__text" style="font-size:25px;"><span class="color_12 wixui-rich-text__text"><span style="font-family:avenir-lt-w01_35-light1475496,sans-serif;" class="wixui-rich-text__text">Cerimônia de Abertura</span></span></p></div><div id="comp-jnkeo3qr" class="comp-jnkeo3qr aVng1S wixui-horizontal-line"></div><div data-mesh-id="comp-jnkeumin-rotated-wrapper"><div id="comp-jnkeumin" class="comp-jnkeumin aVng1S wixui-horizontal-line"></div></div><div id="comp-jnllwddv" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnllwddv wixui-rich-text" data-testid="richTextElement"><p class="font_5 wixui-rich-text__text" style="font-size:30px;"><span style="letter-spacing:0.03em;" class="wixui-rich-text__text"><span style="font-size:30px;" class="wixui-rich-text__text"><span class="color_11 wixui-rich-text__text"><span style="font-family:playfair display,serif;" class="wixui-rich-text__text">11:00</span></span></span></span></p></div><div id="comp-jnkezu0m" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnkezu0m wixui-rich-text" data-testid="richTextElement"><p class="font_5 wixui-rich-text__text" style="font-size:25px;"><span class="color_12 wixui-rich-text__text"><span style="font-family:avenir-lt-w01_35-light1475496,sans-serif;" class="wixui-rich-text__text">Palestras</span></span></p></div><div id="comp-jnkeo9qf" class="comp-jnkeo9qf aVng1S wixui-horizontal-line"></div><div data-mesh-id="comp-jnkeup61-rotated-wrapper"><div id="comp-jnkeup61" class="comp-jnkeup61 aVng1S wixui-horizontal-line"></div></div><div id="comp-jnllwx99" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnllwx99 wixui-rich-text" data-testid="richTextElement"><p class="font_5 wixui-rich-text__text" style="font-size:30px;"><span style="letter-spacing:0.03em;" class="wixui-rich-text__text"><span style="font-size:30px;" class="wixui-rich-text__text"><span class="color_11 wixui-rich-text__text"><span style="font-family:playfair display,serif;" class="wixui-rich-text__text">13:00</span></span></span></span></p></div><div id="comp-jnkf7wtn" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnkf7wtn wixui-rich-text" data-testid="richTextElement"><p class="font_5 wixui-rich-text__text" style="font-size:25px;"><span class="color_12 wixui-rich-text__text"><span style="font-family:avenir-lt-w01_35-light1475496,sans-serif;" class="wixui-rich-text__text">Almoço</span></span></p></div><div id="comp-jnkeoaw3" class="comp-jnkeoaw3 aVng1S wixui-horizontal-line"></div><div id="comp-jnkesiw4" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnkesiw4 wixui-rich-text" data-testid="richTextElement"><p class="font_5 wixui-rich-text__text" style="font-size:30px;"><span style="letter-spacing:0.03em;" class="wixui-rich-text__text"><span style="font-size:30px;" class="wixui-rich-text__text"><span class="color_11 wixui-rich-text__text"><span style="font-family:playfair display,serif;" class="wixui-rich-text__text">14:00</span></span></span></span></p></div><div data-mesh-id="comp-jnketvbk-rotated-wrapper"><div id="comp-jnketvbk" class="comp-jnketvbk aVng1S wixui-horizontal-line"></div></div><div id="comp-jnkexx0y" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnkexx0y wixui-rich-text" data-testid="richTextElement"><p class="font_5 wixui-rich-text__text" style="font-size:25px;"><span class="color_12 wixui-rich-text__text"><span style="font-family:avenir-lt-w01_35-light1475496,sans-serif;" class="wixui-rich-text__text">Workshops</span></span></p></div><div data-mesh-id="comp-jnkai0o2inlineContent-wedge-3"></div></div></div></div></div></section><div id="comp-jnlfoh59" class="Vd6aQZ ignore-focus comp-jnlfoh59" tabindex="-1" role="region" aria-label="O Local"><div id="olocal"></div><span class="mHZSwn">O Local</span></div><div id="comp-jnkf2fkj" class="KaEeLN comp-jnkf2fkj"><div class="uYj0Sg wixui-box" data-testid="container-bg"></div><div data-mesh-id="comp-jnkf2fkjinlineContent" data-testid="inline-content" class=""><div data-mesh-id="comp-jnkf2fkjinlineContent-gridContainer" data-testid="mesh-container-content"><div id="comp-jnkfa87i" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnkfa87i wixui-rich-text" data-testid="richTextElement"><h2 class="font_2 wixui-rich-text__text" style="font-size:70px; text-align:center;"><span class="color_15 wixui-rich-text__text"><span style="font-size:70px;" class="wixui-rich-text__text">01</span></span></h2></div><div data-mesh-id="comp-jnkfb1pv-rotated-wrapper"><div id="comp-jnkfb1pv" class="comp-jnkfb1pv aVng1S wixui-horizontal-line"></div></div><div id="comp-jnkfbetl" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnkfbetl wixui-rich-text" data-testid="richTextElement"><h2 class="font_2 wixui-rich-text__text" style="font-size:70px; text-align:center;"><span class="color_15 wixui-rich-text__text"><span style="font-size:70px;" class="wixui-rich-text__text">04</span></span></h2></div><div data-mesh-id="comp-jnkf9i2c-rotated-wrapper"><div id="comp-jnkf9i2c" class="comp-jnkf9i2c aVng1S wixui-horizontal-line"></div></div><div id="comp-jnkf7fnl" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnkf7fnl wixui-rich-text" data-testid="richTextElement"><h2 class="font_2 wixui-rich-text__text" style="font-size:70px; text-align:center;"><span class="color_15 wixui-rich-text__text"><span style="font-size:70px;" class="wixui-rich-text__text">300</span></span></h2></div><div id="comp-jnkfabw2" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnkfabw2 wixui-rich-text" data-testid="richTextElement"><h5 class="font_5 wixui-rich-text__text" style="font-size:18px; text-align:center;"><span style="letter-spacing:0.03em;" class="wixui-rich-text__text"><span style="font-size:18px;" class="wixui-rich-text__text"><span class="color_13 wixui-rich-text__text"><span style="font-family:avenir-lt-w01_35-light1475496,sans-serif;" class="wixui-rich-text__text">DIA</span></span></span></span></h5></div><div id="comp-jnkfbj9f" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnkfbj9f wixui-rich-text" data-testid="richTextElement"><h5 class="font_5 wixui-rich-text__text" style="font-size:18px; line-height:1.2em; text-align:center;"><span style="letter-spacing:0.03em;" class="wixui-rich-text__text"><span style="font-size:18px;" class="wixui-rich-text__text"><span class="color_13 wixui-rich-text__text"><span style="font-family:avenir-lt-w01_35-light1475496,sans-serif;" class="wixui-rich-text__text">PALESTRANTES</span></span></span></span></h5></div><div id="comp-jnkf00u6" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnkf00u6 wixui-rich-text" data-testid="richTextElement"><h5 class="font_5 wixui-rich-text__text" style="font-size:18px; text-align:center;"><span style="letter-spacing:0.03em;" class="wixui-rich-text__text"><span style="font-size:18px;" class="wixui-rich-text__text"><span class="color_13 wixui-rich-text__text"><span style="font-family:avenir-lt-w01_35-light1475496,sans-serif;" class="wixui-rich-text__text">PARTICIPANTES</span></span></span></span></h5></div><!--$--><div id="comp-jnmw33vq" class="TWFxr5 "><div class="comp-jnmw33vq"><style>.comp-jnmw33vq ._SbO6q {
    --eventsCount: 2;
  }
  </style><div id="wix-events-widget" class="_SbO6q evClassicPreset ZTYKRB" dir="ltr" data-hook="EVENTS_ROOT_NODE"><div class="IOLuL5 jn_rBu" id="ev-frame"><div style="width:100%;height:100%" id="ev-content-container" data-hook="ev-content-container" class="C7DkT1 pe2Vf2 PeGSNm"><div id="ev-content" class="KvGTRc"><div></div><div style="margin-bottom:0"><div id="ev-rsvp-button" class="xAH0mk"><a tabindex="0" data-hook="ev-rsvp-button" style="min-width:233px;min-height:81px" class="DjQEyU BoD93f AinsX6 zLSZXO" href="https://www.sheminimalist.com/events/evento-exclusivo-unicsul" rel="">Comprar Ingressos</a></div></div></div></div></div></div></div></div><!--/$--></div></div></div><section id="comp-jnkafupw" class="comp-jnkafupw CohWsy wixui-column-strip"><div id="bgLayers_comp-jnkafupw" data-hook="bgLayers" data-motion-part="BG_LAYER" class="if7Vw2"><div data-testid="colorUnderlay" class="tcElKx i1tH8h"></div><div id="bgMedia_comp-jnkafupw" data-motion-part="BG_MEDIA" class="wG8dni"></div></div><div data-testid="columns" class="V5AUxf"><div id="comp-jnkafur3" class="comp-jnkafur3 YzqVVZ wixui-column-strip__column"><div id="bgLayers_comp-jnkafur3" data-hook="bgLayers" data-motion-part="BG_LAYER" class="MW5IWV"><div data-testid="colorUnderlay" class="LWbAav Kv1aVt"></div><div id="bgMedia_comp-jnkafur3" data-motion-part="BG_MEDIA" class="VgO9Yg"></div></div><div data-mesh-id="comp-jnkafur3inlineContent" data-testid="inline-content" class=""><div data-mesh-id="comp-jnkafur3inlineContent-gridContainer" data-testid="mesh-container-content"><div id="comp-jnkafure" class="KaEeLN comp-jnkafure"><div class="uYj0Sg wixui-box" data-testid="container-bg"></div><div data-mesh-id="comp-jnkafureinlineContent" data-testid="inline-content" class=""><div data-mesh-id="comp-jnkafureinlineContent-gridContainer" data-testid="mesh-container-content"><div data-mesh-id="comp-jnkafurf-rotated-wrapper"><div id="comp-jnkafurf" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnkafurf wixui-rich-text" data-testid="richTextElement"><p class="font_7 wixui-rich-text__text" style="font-size:17px;"><span class="color_18 wixui-rich-text__text"><span style="letter-spacing:0.1em;" class="wixui-rich-text__text">03</span></span></p></div></div><div data-mesh-id="comp-jnkafurm-rotated-wrapper"><div id="comp-jnkafurm" class="comp-jnkafurm aVng1S wixui-horizontal-line"></div></div><div data-mesh-id="comp-jnn6d3gh-rotated-wrapper"><div id="comp-jnn6d3gh" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnn6d3gh wixui-rich-text" data-testid="richTextElement"><p class="font_7 wixui-rich-text__text" style="font-size:17px;"><span class="color_18 wixui-rich-text__text"><span style="font-weight:400;" class="wixui-rich-text__text">Designer de Experiência do Usuário</span></span></p></div></div><div id="comp-jnkafurr" class="MazNVa comp-jnkafurr wixui-image"><div data-testid="linkElement" class="j7pOnl"><wow-image id="img_comp-jnkafurr" class="HlRz5e BI8PVQ" data-image-info="{&quot;containerId&quot;:&quot;comp-jnkafurr&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;targetWidth&quot;:221,&quot;targetHeight&quot;:375,&quot;isLQIP&quot;:true,&quot;encoding&quot;:&quot;AVIF&quot;,&quot;imageData&quot;:{&quot;width&quot;:219,&quot;height&quot;:372,&quot;uri&quot;:&quot;4951af_17c33fba6250421ba7ada3669b194f44~mv2.png&quot;,&quot;name&quot;:&quot;shutterstock_725291137 copy 9.png&quot;,&quot;displayMode&quot;:&quot;fill&quot;}}" data-motion-part="BG_IMG" data-bg-effect-name="" data-has-ssr-src="true"><img src="https://static.wixstatic.com/media/4951af_17c33fba6250421ba7ada3669b194f44~mv2.png/v1/fill/w_55,h_94,al_c,q_85,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/shutterstock_725291137%20copy%209.png" alt="shutterstock_725291137 copy 9.png" style="width:100%;height:100%;object-fit:cover;object-position:50% 50%" width="221" height="375" loading="lazy"/></wow-image></div></div><div id="comp-jnkafurt" class="HcOXKn c9GqVL QxJLC3 lq2cno comp-jnkafurt wixui-rich-text" data-testid="richTextElement"><h3 class="font_3 wixui-rich-text__text" style="line-height:normal; font-size:30px;"><span style="letter-spacing:normal;" class="wixui-rich-text__text">Carlo Oliveira</span></h3></div><div id="comp-jnmufz7r" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnmufz7r wixui-rich-text" data-testid="richTextElement"><p class="font_7 wixui-rich-text__text" style="font-size:17px;"><span class="color_13 wixui-rich-text__text"><span style="font-style:normal;" class="wixui-rich-text__text"><span style="font-family:avenir-lt-w01_35-light1475496,sans-serif;" class="wixui-rich-text__text"><span style="font-weight:400;" class="wixui-rich-text__text"><span style="font-size:17px;" class="wixui-rich-text__text">Inovação no Design de Produto</span></span></span></span></span></p></div><div id="comp-jnkafurv" class="HcOXKn c9GqVL QxJLC3 lq2cno comp-jnkafurv wixui-rich-text" data-testid="richTextElement"><p class="font_8 wixui-rich-text__text" style="font-size:18px; line-height:1.6em;"><span class="color_14 wixui-rich-text__text"><span style="font-size:18px;" class="wixui-rich-text__text"><span style="letter-spacing:0.02em;" class="wixui-rich-text__text">Como est&aacute; o mercado de design e insights que far&atilde;o um perfil se destacar.</span></span></span></p></div><div id="comp-jnkafurx" class="KaEeLN comp-jnkafurx"><div class="uYj0Sg wixui-box" data-testid="container-bg"></div><div data-mesh-id="comp-jnkafurxinlineContent" data-testid="inline-content" class=""><div data-mesh-id="comp-jnkafurxinlineContent-gridContainer" data-testid="mesh-container-content"><div data-mesh-id="comp-jnkafurz-rotated-wrapper"><div id="comp-jnkafurz" class="comp-jnkafurz aVng1S wixui-horizontal-line"></div></div><div data-mesh-id="comp-jnkafus1-rotated-wrapper"><div id="comp-jnkafus1" class="comp-jnkafus1 aVng1S wixui-horizontal-line"></div></div><div data-mesh-id="comp-jnkafus3-rotated-wrapper"><div id="comp-jnkafus3" class="comp-jnkafus3 aVng1S wixui-horizontal-line"></div></div><div id="comp-jnkafus6" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnkafus6 wixui-rich-text" data-testid="richTextElement"><p class="font_9 wixui-rich-text__text" style="text-align:center; font-size:14px;"><span class="color_18 wixui-rich-text__text">SAIBA MAIS</span></p></div><div id="comp-jnkafus8" class="comp-jnkafus8 WzbAF8"><ul class="mpGTIt" aria-label="Redes sociais"><li id="dataItem-jnkafus91-comp-jnkafus8" class="O6KwRn"><a data-testid="linkElement" href="https://twitter.com/WixBR" target="_blank" class="oRtuWN" aria-label="Ícone do Twitter Preto"><wow-image id="img_0_comp-jnkafus8" class="HlRz5e YaS0jR" data-image-info="{&quot;containerId&quot;:&quot;dataItem-jnkafus91-comp-jnkafus8&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;encoding&quot;:&quot;AVIF&quot;,&quot;imageData&quot;:{&quot;width&quot;:200,&quot;height&quot;:200,&quot;uri&quot;:&quot;c7d035ba85f6486680c2facedecdcf4d.png&quot;,&quot;name&quot;:&quot;&quot;,&quot;displayMode&quot;:&quot;fill&quot;}}" data-motion-part="BG_IMG" data-bg-effect-name="" data-has-ssr-src="" style="--wix-img-max-width:max(200px, 100%)"><img alt="Ícone do Twitter Preto"/></wow-image></a></li><li id="dataItem-jnkafus92-comp-jnkafus8" class="O6KwRn"><a data-testid="linkElement" href="https://www.linkedin.com/company/wix-com" target="_blank" class="oRtuWN" aria-label="Ícone do Linkedin Preto"><wow-image id="img_1_comp-jnkafus8" class="HlRz5e YaS0jR" data-image-info="{&quot;containerId&quot;:&quot;dataItem-jnkafus92-comp-jnkafus8&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;encoding&quot;:&quot;AVIF&quot;,&quot;imageData&quot;:{&quot;width&quot;:200,&quot;height&quot;:200,&quot;uri&quot;:&quot;6ea5b4a88f0b4f91945b40499aa0af00.png&quot;,&quot;name&quot;:&quot;&quot;,&quot;displayMode&quot;:&quot;fill&quot;}}" data-motion-part="BG_IMG" data-bg-effect-name="" data-has-ssr-src="" style="--wix-img-max-width:max(200px, 100%)"><img alt="Ícone do Linkedin Preto"/></wow-image></a></li></ul></div></div></div></div></div></div></div><div id="comp-jnkati8o" class="KaEeLN comp-jnkati8o"><div class="uYj0Sg wixui-box" data-testid="container-bg"></div><div data-mesh-id="comp-jnkati8oinlineContent" data-testid="inline-content" class=""><div data-mesh-id="comp-jnkati8oinlineContent-gridContainer" data-testid="mesh-container-content"><div id="comp-jnkati99" class="HcOXKn c9GqVL QxJLC3 lq2cno comp-jnkati99 wixui-rich-text" data-testid="richTextElement"><h3 class="font_3 wixui-rich-text__text" style="line-height:normal; font-size:30px;"><span style="letter-spacing:normal;" class="wixui-rich-text__text">Daniela Costa</span></h3></div><div id="comp-jnu14wot" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnu14wot wixui-rich-text" data-testid="richTextElement"><p class="font_7 wixui-rich-text__text" style="font-size:17px;"><span class="color_13 wixui-rich-text__text"><span style="font-style:normal;" class="wixui-rich-text__text"><span style="font-family:avenir-lt-w01_35-light1475496,sans-serif;" class="wixui-rich-text__text"><span style="font-weight:400;" class="wixui-rich-text__text"><span style="font-size:17px;" class="wixui-rich-text__text">Desafios da Cibersegurança</span></span></span></span></span></p></div><div id="comp-jnkati9b" class="HcOXKn c9GqVL QxJLC3 lq2cno comp-jnkati9b wixui-rich-text" data-testid="richTextElement"><p class="font_8 wixui-rich-text__text" style="line-height:1.6em; font-size:18px;"><span class="color_14 wixui-rich-text__text"><span style="letter-spacing:0.02em;" class="wixui-rich-text__text">Como a &aacute;rea pode ser desafiadora e interessante. Perfis mais buscados para a &aacute;rea.</span></span></p></div><div id="comp-jnkati9e" class="KaEeLN comp-jnkati9e"><div class="uYj0Sg wixui-box" data-testid="container-bg"></div><div data-mesh-id="comp-jnkati9einlineContent" data-testid="inline-content" class=""><div data-mesh-id="comp-jnkati9einlineContent-gridContainer" data-testid="mesh-container-content"><div data-mesh-id="comp-jnkati9h-rotated-wrapper"><div id="comp-jnkati9h" class="comp-jnkati9h aVng1S wixui-horizontal-line"></div></div><div data-mesh-id="comp-jnkati9j-rotated-wrapper"><div id="comp-jnkati9j" class="comp-jnkati9j aVng1S wixui-horizontal-line"></div></div><div data-mesh-id="comp-jnkati9m-rotated-wrapper"><div id="comp-jnkati9m" class="comp-jnkati9m aVng1S wixui-horizontal-line"></div></div><div id="comp-jnkati9o" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnkati9o wixui-rich-text" data-testid="richTextElement"><p class="font_9 wixui-rich-text__text" style="text-align:center; font-size:14px;"><span class="color_18 wixui-rich-text__text">SAIBA MAIS</span></p></div><div id="comp-jnkati9r" class="comp-jnkati9r WzbAF8"><ul class="mpGTIt" aria-label="Redes sociais"><li id="dataItem-jnkati9r2-comp-jnkati9r" class="O6KwRn"><a data-testid="linkElement" href="https://twitter.com/WixBR" target="_blank" class="oRtuWN" aria-label="Ícone do Twitter Preto"><wow-image id="img_0_comp-jnkati9r" class="HlRz5e YaS0jR" data-image-info="{&quot;containerId&quot;:&quot;dataItem-jnkati9r2-comp-jnkati9r&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;encoding&quot;:&quot;AVIF&quot;,&quot;imageData&quot;:{&quot;width&quot;:200,&quot;height&quot;:200,&quot;uri&quot;:&quot;c7d035ba85f6486680c2facedecdcf4d.png&quot;,&quot;name&quot;:&quot;&quot;,&quot;displayMode&quot;:&quot;fill&quot;}}" data-motion-part="BG_IMG" data-bg-effect-name="" data-has-ssr-src="" style="--wix-img-max-width:max(200px, 100%)"><img alt="Ícone do Twitter Preto"/></wow-image></a></li><li id="dataItem-jnkati9r3-comp-jnkati9r" class="O6KwRn"><a data-testid="linkElement" href="https://www.linkedin.com/company/wix-com" target="_blank" class="oRtuWN" aria-label="Ícone do Linkedin Preto"><wow-image id="img_1_comp-jnkati9r" class="HlRz5e YaS0jR" data-image-info="{&quot;containerId&quot;:&quot;dataItem-jnkati9r3-comp-jnkati9r&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;encoding&quot;:&quot;AVIF&quot;,&quot;imageData&quot;:{&quot;width&quot;:200,&quot;height&quot;:200,&quot;uri&quot;:&quot;6ea5b4a88f0b4f91945b40499aa0af00.png&quot;,&quot;name&quot;:&quot;&quot;,&quot;displayMode&quot;:&quot;fill&quot;}}" data-motion-part="BG_IMG" data-bg-effect-name="" data-has-ssr-src="" style="--wix-img-max-width:max(200px, 100%)"><img alt="Ícone do Linkedin Preto"/></wow-image></a></li></ul></div></div></div></div><div id="comp-jnkati9y" class="MazNVa comp-jnkati9y wixui-image"><div data-testid="linkElement" class="j7pOnl"><wow-image id="img_comp-jnkati9y" class="HlRz5e BI8PVQ" data-image-info="{&quot;containerId&quot;:&quot;comp-jnkati9y&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;targetWidth&quot;:219,&quot;targetHeight&quot;:375,&quot;isLQIP&quot;:true,&quot;encoding&quot;:&quot;AVIF&quot;,&quot;imageData&quot;:{&quot;width&quot;:219,&quot;height&quot;:372,&quot;uri&quot;:&quot;4951af_a75001bf8ac94c0ea356b5200d61d5d5~mv2.png&quot;,&quot;name&quot;:&quot;shutterstock_725291137 copy 11.png&quot;,&quot;displayMode&quot;:&quot;fill&quot;}}" data-motion-part="BG_IMG" data-bg-effect-name="" data-has-ssr-src="true"><img src="https://static.wixstatic.com/media/4951af_a75001bf8ac94c0ea356b5200d61d5d5~mv2.png/v1/fill/w_55,h_93,al_c,q_85,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/shutterstock_725291137%20copy%2011.png" alt="shutterstock_725291137 copy 11.png" style="width:100%;height:100%;object-fit:cover;object-position:50% 50%" width="219" height="375" loading="lazy"/></wow-image></div></div><div data-mesh-id="comp-jnkatia1-rotated-wrapper"><div id="comp-jnkatia1" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnkatia1 wixui-rich-text" data-testid="richTextElement"><p class="font_7 wixui-rich-text__text" style="font-size:17px;"><span class="color_18 wixui-rich-text__text"><span style="letter-spacing:0.1em;" class="wixui-rich-text__text">04</span></span></p></div></div><div data-mesh-id="comp-jnkatia4-rotated-wrapper"><div id="comp-jnkatia4" class="comp-jnkatia4 aVng1S wixui-horizontal-line"></div></div><div data-mesh-id="comp-jnn6kdun-rotated-wrapper"><div id="comp-jnn6kdun" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnn6kdun wixui-rich-text" data-testid="richTextElement"><p class="font_7 wixui-rich-text__text" style="font-size:17px;"><span class="color_18 wixui-rich-text__text"><span style="font-weight:400;" class="wixui-rich-text__text">Engenheiro de Software</span></span></p></div></div></div></div></div></div></div></div></div></section></div></div></section><section id="comp-lvl19jm4" tabindex="-1" class="Oqnisf comp-lvl19jm4 wixui-section" data-block-level-container="ClassicSection"><div id="bgLayers_comp-lvl19jm4" data-hook="bgLayers" data-motion-part="BG_LAYER" class="MW5IWV"><div data-testid="colorUnderlay" class="LWbAav Kv1aVt"></div><div id="bgMedia_comp-lvl19jm4" data-motion-part="BG_MEDIA" class="VgO9Yg"></div></div><div data-mesh-id="comp-lvl19jm4inlineContent" data-testid="inline-content" class=""><div data-mesh-id="comp-lvl19jm4inlineContent-gridContainer" data-testid="mesh-container-content"><section id="comp-jnlcpf5e" class="comp-jnlcpf5e CohWsy wixui-column-strip"><div id="bgLayers_comp-jnlcpf5e" data-hook="bgLayers" data-motion-part="BG_LAYER" class="if7Vw2"><div data-testid="colorUnderlay" class="tcElKx i1tH8h"></div><div id="bgMedia_comp-jnlcpf5e" data-motion-part="BG_MEDIA" class="wG8dni"></div></div><div data-testid="columns" class="V5AUxf"><div id="comp-jnlcpf6z" class="comp-jnlcpf6z YzqVVZ wixui-column-strip__column"><div id="bgLayers_comp-jnlcpf6z" data-hook="bgLayers" data-motion-part="BG_LAYER" class="MW5IWV"><div data-testid="colorUnderlay" class="LWbAav Kv1aVt"></div><div id="bgMedia_comp-jnlcpf6z" data-motion-part="BG_MEDIA" class="VgO9Yg"></div></div><div data-mesh-id="comp-jnlcpf6zinlineContent" data-testid="inline-content" class=""><div data-mesh-id="comp-jnlcpf6zinlineContent-gridContainer" data-testid="mesh-container-content"><div id="comp-jnldqj1w" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnldqj1w wixui-rich-text" data-testid="richTextElement"><h2 class="font_2 wixui-rich-text__text" style="font-size:50px;"><span class="color_11 wixui-rich-text__text">Apoiadores</span></h2></div><div id="comp-jnlnmsl4" class="comp-jnlnmsl4 aVng1S wixui-horizontal-line"></div><div id="comp-jnlnmsm3" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnlnmsm3 wixui-rich-text" data-testid="richTextElement"><p class="font_7 wixui-rich-text__text" style="font-size:17px;"><span class="color_11 wixui-rich-text__text"><span style="letter-spacing:0.07em;" class="wixui-rich-text__text">APOIANDO O FUTURO DA TECNOLOGIA</span></span></p></div><div id="comp-jnlcyg3c" class="comp-jnlcyg3c wixui-vector-image"><a data-testid="linkElement" href="https://pt.wix.com/templateslp/links" target="_blank" class="a9YhBi"><div data-testid="svgRoot-comp-jnlcyg3c" class="AKxYR5 VZYmYf comp-jnlcyg3c"><?xml version="1.0" encoding="UTF-8"?>
<svg preserveAspectRatio="xMidYMid meet" data-bbox="0 0 66.81 15.782" viewBox="0 0 66.81 15.782" xmlns="http://www.w3.org/2000/svg" data-type="color" role=presentation aria-hidden=true><defs><style>#comp-jnlcyg3c svg [data-color="1"] {fill: #FFFFFF;}</style></defs>
    <g>
        <path d="M19.17 4.05h4.77v1.29a3.07 3.07 0 0 1 2.77-1.59 3.54 3.54 0 0 1 .95.11l-.39 4.21a3.58 3.58 0 0 0-.53-.1h-.52a2.15 2.15 0 0 0-1.55.56 1.85 1.85 0 0 0-.58 1.37v5.48h-5zm21 5.76v1.05h-7.6a1.06 1.06 0 0 0 .21.54 1.74 1.74 0 0 0 .45.4 1.79 1.79 0 0 0 .6.26 2.59 2.59 0 0 0 .68.09 2.32 2.32 0 0 0 1.14-.25 2.14 2.14 0 0 0 .7-.55l3.52 1.79a5.22 5.22 0 0 1-2.18 1.93 7.37 7.37 0 0 1-3.31.71 7.48 7.48 0 0 1-2.39-.39 6.17 6.17 0 0 1-2-1.15 5.55 5.55 0 0 1-1.42-1.9 6.1 6.1 0 0 1-.54-2.64 6.19 6.19 0 0 1 .49-2.52 5.61 5.61 0 0 1 1.35-1.91 6.1 6.1 0 0 1 2-1.22 7.14 7.14 0 0 1 2.46-.42 6.16 6.16 0 0 1 2.43.46 5.33 5.33 0 0 1 1.87 1.28 5.84 5.84 0 0 1 1.22 2 7.08 7.08 0 0 1 .28 2.44zM35.85 8.2a1.24 1.24 0 0 0-.44-1 1.72 1.72 0 0 0-1.19-.39 1.7 1.7 0 0 0-1.22.46 1.63 1.63 0 0 0-.52.93zm6-4.15h4.85V5.3A3.43 3.43 0 0 1 48 4.22a4 4 0 0 1 2-.47 4.12 4.12 0 0 1 2 .43 3.61 3.61 0 0 1 1.24 1.11 4.16 4.16 0 0 1 .64 1.51A8 8 0 0 1 54 8.48v6.87h-5v-6a2.1 2.1 0 0 0-.26-1.21 1 1 0 0 0-.81-.34 1 1 0 0 0-.8.4 1.79 1.79 0 0 0-.32 1.15v6h-5zm20.3 4.13a.89.89 0 0 0-.35-.77 1.66 1.66 0 0 0-.94-.24 2.91 2.91 0 0 0-1.3.29 5.48 5.48 0 0 0-1.08.67L56 5.69a7.16 7.16 0 0 1 2.45-1.53 8.11 8.11 0 0 1 2.92-.53 6.8 6.8 0 0 1 2.63.45 4 4 0 0 1 1.7 1.24 4.7 4.7 0 0 1 .86 1.85 9.41 9.41 0 0 1 .25 2.23v5.95h-4.49v-.91a2.39 2.39 0 0 1-1.22.93 4.84 4.84 0 0 1-1.55.28 5 5 0 0 1-1.36-.2 3.67 3.67 0 0 1-1.27-.62 3.21 3.21 0 0 1-.92-1.12 3.46 3.46 0 0 1-.42-1.71 2.94 2.94 0 0 1 .61-1.92 4.15 4.15 0 0 1 1.56-1.16 7.51 7.51 0 0 1 2.11-.57 18.2 18.2 0 0 1 2.29-.15zm0 2.49a5.64 5.64 0 0 0-1.76.23.88.88 0 0 0-.66.88.65.65 0 0 0 .11.4.87.87 0 0 0 .27.27 1.61 1.61 0 0 0 .38.16 1.33 1.33 0 0 0 .38.05 1.48 1.48 0 0 0 1.13-.45 1.6 1.6 0 0 0 .43-1.16v-.38zM11.33 0H6L4.32 4.34h3.8l4.3 11h4.91zM0 15.35h9.75L6.38 6.71h-3z" fill="#231f20" data-color="1"/>
    </g>
</svg>
</div></a></div><div id="comp-jnlcyg3d" class="comp-jnlcyg3d wixui-vector-image"><a data-testid="linkElement" href="https://pt.wix.com/templateslp/links" target="_blank" class="a9YhBi"><div data-testid="svgRoot-comp-jnlcyg3d" class="AKxYR5 VZYmYf comp-jnlcyg3d"><?xml version="1.0" encoding="UTF-8"?>
<svg preserveAspectRatio="xMidYMid meet" data-bbox="0 0 106.961 20.071" viewBox="0 0 106.961 20.071" xmlns="http://www.w3.org/2000/svg" data-type="color" role=presentation aria-hidden=true><defs><style>#comp-jnlcyg3d svg [data-color="1"] {fill: #FFFFFF;}</style></defs>
    <g>
        <path d="M30.35 9.74a3.39 3.39 0 0 0-1.07-.52 2.47 2.47 0 0 0-.64-.12 3.19 3.19 0 0 0 1.11-.34 3.33 3.33 0 0 0 .86-.66 2.79 2.79 0 0 0 .56-.9 3 3 0 0 0 .2-1.08 4.09 4.09 0 0 0-.23-1.33 3.06 3.06 0 0 0-.74-1.16 3.74 3.74 0 0 0-1.4-.87 6 6 0 0 0-2.1-.31h-5.6v14h5.61a7.35 7.35 0 0 0 2-.25 4.44 4.44 0 0 0 1.54-.76 3.34 3.34 0 0 0 1-1.22 3.79 3.79 0 0 0 .36-1.69 3.16 3.16 0 0 0-.44-1.74 3.68 3.68 0 0 0-1.02-1.05zm-8.19-6.55h4.75a6.4 6.4 0 0 1 1.34.14 3.28 3.28 0 0 1 1.13.46 2.48 2.48 0 0 1 .79.85 2.61 2.61 0 0 1 .29 1.28A2.66 2.66 0 0 1 29.58 8a3.89 3.89 0 0 1-2.67.8h-4.75zm7.7 11.73a4.83 4.83 0 0 1-2.95.8h-4.75V9.55h4.75a8.48 8.48 0 0 1 1.4.13 4.18 4.18 0 0 1 1.3.46 2.78 2.78 0 0 1 .95.92 2.66 2.66 0 0 1 .37 1.48 2.75 2.75 0 0 1-1.07 2.38zm11.38.79a.66.66 0 0 1-.2-.29A1.59 1.59 0 0 1 41 15V8.73a2.39 2.39 0 0 0-.83-1.88 4.09 4.09 0 0 0-2.66-.71 4.29 4.29 0 0 0-2.86.86 3.31 3.31 0 0 0-1.07 2.51h.75a2.67 2.67 0 0 1 .91-2 3.44 3.44 0 0 1 2.19-.66 4.89 4.89 0 0 1 1.3.15 2.56 2.56 0 0 1 .86.43 1.93 1.93 0 0 1 .49.63 2 2 0 0 1 .16.77 5.35 5.35 0 0 1-.06.88 1 1 0 0 1-.3.58 1.54 1.54 0 0 1-.69.35 6.49 6.49 0 0 1-1.27.19l-1.16.1a12 12 0 0 0-1.26.19 4 4 0 0 0-1.2.47 2.54 2.54 0 0 0-1.25 2.32 2.56 2.56 0 0 0 .89 2.09 3.89 3.89 0 0 0 2.49.7 4.65 4.65 0 0 0 1.33-.18 4 4 0 0 0 1.09-.52 3.82 3.82 0 0 0 .82-.72 3.1 3.1 0 0 0 .51-.85V15a2.67 2.67 0 0 0 .05.58 1.11 1.11 0 0 0 .18.46.9.9 0 0 0 .4.31 1.8 1.8 0 0 0 .72.12 2.09 2.09 0 0 0 .61-.08v-.62a5 5 0 0 1-.55.05.63.63 0 0 1-.35-.11zm-1-3.1a5.13 5.13 0 0 1-.11.76 3.29 3.29 0 0 1-.5 1.16 3.55 3.55 0 0 1-1.14 1.06 3.8 3.8 0 0 1-2 .46 3.11 3.11 0 0 1-1.94-.54 1.93 1.93 0 0 1-.71-1.66 2.2 2.2 0 0 1 .27-1.15 2.16 2.16 0 0 1 .72-.69 3.33 3.33 0 0 1 1-.37c.37-.07.73-.12 1.1-.16l1.26-.12a10.24 10.24 0 0 0 1.24-.18 1.45 1.45 0 0 0 .84-.45zm10-6.24h.84l-4.35 11.17c-.21.5-.4.93-.58 1.29a2.12 2.12 0 0 1-.59.79 1.93 1.93 0 0 1-.94.39 13.37 13.37 0 0 1-1.42.06v-.64a5.06 5.06 0 0 0 1.26-.13 2 2 0 0 0 .84-.52 2.52 2.52 0 0 0 .45-.8c.16-.38.36-.91.59-1.58l-4.22-10H43l3.75 9.21zm11.04-3.92h.86l-5.24 14h-1l-5.22-14h.9l4.81 13.27zm1.51 3.92h.74v10.09h-.74zm0-3.92h.74v2h-.74zM73.25 7.6a4 4 0 0 0-1.36-1.07A4.33 4.33 0 0 0 70 6.14a4.38 4.38 0 0 0-2 .44 4.18 4.18 0 0 0-1.42 1.18 5.1 5.1 0 0 0-.86 1.71 7.11 7.11 0 0 0-.28 2 7.52 7.52 0 0 0 .27 2.05 4.77 4.77 0 0 0 .84 1.65 4 4 0 0 0 1.39 1.1 4.59 4.59 0 0 0 2 .4 4.43 4.43 0 0 0 2.94-.94 4.5 4.5 0 0 0 1.44-2.71h-.75a4.09 4.09 0 0 1-1.22 2.21 3.51 3.51 0 0 1-2.4.79 3.64 3.64 0 0 1-1.62-.35 3.31 3.31 0 0 1-1.16-1 4.24 4.24 0 0 1-.7-1.41 5.85 5.85 0 0 1-.24-1.69v-.11h8.17a1.7 1.7 0 0 1 0-.21 1.85 1.85 0 0 0 0-.23 6.26 6.26 0 0 0-.29-1.91 4.72 4.72 0 0 0-.86-1.51zm-7 3.27a6.13 6.13 0 0 1 .32-1.53A3.89 3.89 0 0 1 67.25 8a3.58 3.58 0 0 1 1.16-.9A3.51 3.51 0 0 1 70 6.79a3.32 3.32 0 0 1 1.51.33 3.48 3.48 0 0 1 1.12.88 4 4 0 0 1 .7 1.3 5.66 5.66 0 0 1 .27 1.56zM88 6.37h.82l-3.21 10.09h-.92l-2.76-9.14-2.83 9.14h-.94L75 6.37h.8l2.85 9.23 2.75-9.23h1l2.76 9.23zm2.53 8.07h1v2h-1zm4.52-12h.74v2h-.74zm0 3.92h.74v10.1h-.74zm11.61 3a5 5 0 0 0-.9-1.68 4.09 4.09 0 0 0-1.45-1.15 4.9 4.9 0 0 0-4 0 4.18 4.18 0 0 0-1.45 1.15A5 5 0 0 0 98 9.39a6.69 6.69 0 0 0-.3 2 6.8 6.8 0 0 0 .3 2 5 5 0 0 0 .89 1.68 4.67 4.67 0 0 0 5.42 1.14 4.43 4.43 0 0 0 1.45-1.14 5 5 0 0 0 .9-1.68 6.8 6.8 0 0 0 .3-2 6.69 6.69 0 0 0-.27-2zm-.7 3.76a4.75 4.75 0 0 1-.75 1.49 3.65 3.65 0 0 1-1.21 1 3.86 3.86 0 0 1-3.34 0 3.69 3.69 0 0 1-1.22-1 5 5 0 0 1-.74-1.49 5.84 5.84 0 0 1-.26-1.73 6 6 0 0 1 .26-1.74 4.78 4.78 0 0 1 .74-1.48 3.57 3.57 0 0 1 1.22-1 3.86 3.86 0 0 1 3.34 0 3.54 3.54 0 0 1 1.21 1 4.59 4.59 0 0 1 .79 1.51 6 6 0 0 1 .25 1.74 5.84 5.84 0 0 1-.25 1.73zM0 16.33h16.33V0H0zM.5.82l7.42 6.92v8.09H.5zm7.92 15V7.88h7.41v8zm7.41-8.45H8.26L.89.5h14.94z" fill="#231f20" data-color="1"/>
    </g>
</svg>
</div></a></div><div id="comp-jnlcyg3e" class="comp-jnlcyg3e wixui-vector-image"><a data-testid="linkElement" href="https://pt.wix.com/templateslp/links" target="_blank" class="a9YhBi"><div data-testid="svgRoot-comp-jnlcyg3e" class="AKxYR5 VZYmYf comp-jnlcyg3e"><?xml version="1.0" encoding="UTF-8"?>
<svg preserveAspectRatio="xMidYMid meet" data-bbox="0 0 38.52 19.31" viewBox="0 0 38.52 19.31" xmlns="http://www.w3.org/2000/svg" data-type="color" role=presentation aria-hidden=true><defs><style>#comp-jnlcyg3e svg [data-color="1"] {fill: #FFFFFF;}</style></defs>
    <g>
        <path d="M8.34 6.23A4.4 4.4 0 0 1 4.4 8.61 4.38 4.38 0 0 1 0 4.31 4.39 4.39 0 0 1 4.4 0a4.45 4.45 0 0 1 3.93 2.36l-1.94.87a2.26 2.26 0 1 0-2 3.33 2.22 2.22 0 0 0 2-1.18zM12 .16v8.3H9.83V.16zm2.23 0h4.13c1.79 0 2.69 1 2.69 2.29a1.86 1.86 0 0 1-1 1.74 2 2 0 0 1 1.38 1.93c0 1.37-1 2.34-2.7 2.34h-4.54zm2.13 1.93v1.32h1.76c.57 0 .78-.26.78-.66a.61.61 0 0 0-.67-.66zm0 3v1.44h2.13c.57 0 .79-.31.79-.74s-.22-.72-.79-.72zM23.05.16h6.37v2.06h-4.24v1.19h3.48v1.93h-3.48V6.4h4.24v2.06h-6.37zm12.2 0a2.85 2.85 0 0 1 3.11 3A2.91 2.91 0 0 1 36.72 6l1.8 2.51H36l-1.6-2.28h-1.08v2.23H31.2V.16zm-1.93 1.93v2.22h1.81a1 1 0 0 0 1.17-1.1 1 1 0 0 0-1.17-1.12zM.39 10.8h6.16v2.06h-4v1.47H5.9v1.93H2.51v2.84H.39zm25.36-.16H12.22A4.39 4.39 0 0 0 7.82 15a4.39 4.39 0 0 0 4.4 4.31h13.53a4.39 4.39 0 0 0 4.4-4.31 4.39 4.39 0 0 0-4.4-4.36zm0 6.56H12.22a2.26 2.26 0 0 1 0-4.51h13.53a2.26 2.26 0 0 1 0 4.51zm12.7-6.4l-2.78 4.13 2.85 4.17h-2.59l-1.54-2.28-1.53 2.28h-2.59l2.85-4.17-2.78-4.13h2.51l1.54 2.27 1.55-2.27z" fill="#231f20" data-color="1"/>
    </g>
</svg>
</div></a></div><div id="comp-jnlcyg3a" class="comp-jnlcyg3a wixui-vector-image"><a data-testid="linkElement" href="https://pt.wix.com/templateslp/links" target="_blank" class="a9YhBi"><div data-testid="svgRoot-comp-jnlcyg3a" class="AKxYR5 VZYmYf comp-jnlcyg3a"><?xml version="1.0" encoding="UTF-8"?>
<svg preserveAspectRatio="xMidYMid meet" data-bbox="0 0 99.003 12.48" viewBox="0 0 99.003 12.48" xmlns="http://www.w3.org/2000/svg" data-type="color" role=presentation aria-hidden=true><defs><style>#comp-jnlcyg3a svg [data-color="1"] {fill: #FFFFFF;}</style></defs>
    <g>
        <path d="M32.45 9.93a3.5 3.5 0 0 1-.56.66 3.89 3.89 0 0 1-.76.55 4.07 4.07 0 0 1-1 .37 4.56 4.56 0 0 1-1.14.14 5 5 0 0 1-1.92-.36 4.47 4.47 0 0 1-2.5-2.52 5.24 5.24 0 0 1-.35-1.92 5.06 5.06 0 0 1 .36-1.93 4.52 4.52 0 0 1 2.55-2.52A5 5 0 0 1 29 2a4.6 4.6 0 0 1 1 .11 4.21 4.21 0 0 1 .91.29 3.73 3.73 0 0 1 .78.46 2.74 2.74 0 0 1 .58.6l-.77.57a3 3 0 0 0-.38-.44 2.39 2.39 0 0 0-.57-.39 3.64 3.64 0 0 0-.7-.27 3.12 3.12 0 0 0-.82-.1 3.72 3.72 0 0 0-1.6.32 3.46 3.46 0 0 0-1.19.87 3.68 3.68 0 0 0-.75 1.27 4.49 4.49 0 0 0-.26 1.52 4.35 4.35 0 0 0 .27 1.52 3.64 3.64 0 0 0 .75 1.26 3.5 3.5 0 0 0 1.2.87 3.66 3.66 0 0 0 1.58.32 3.55 3.55 0 0 0 1.5-.32 2.85 2.85 0 0 0 1.19-1zm2.48-3.56a1.82 1.82 0 0 1 .81-.84A2.49 2.49 0 0 1 37 5.22a2.14 2.14 0 0 1 1.72.68 2.75 2.75 0 0 1 .58 1.81v3.71h-.88V8.07a4.49 4.49 0 0 0-.08-.86 1.91 1.91 0 0 0-.34-.67 1.34 1.34 0 0 0-.51-.43 1.82 1.82 0 0 0-.75-.11 1.6 1.6 0 0 0-.68.15 1.63 1.63 0 0 0-.59.43 2.1 2.1 0 0 0-.41.74 3 3 0 0 0-.16 1.05v3.1H34V1.65h.88v4.72zm9.89 1.14a1.54 1.54 0 0 0-.41-1.17 1.7 1.7 0 0 0-1.2-.34 2.6 2.6 0 0 0-1 .2 2.56 2.56 0 0 0-.79.51l-.49-.58a3 3 0 0 1 1-.62 3.79 3.79 0 0 1 1.39-.24 3.05 3.05 0 0 1 .92.13 2.28 2.28 0 0 1 .75.41 1.86 1.86 0 0 1 .5.69 2.35 2.35 0 0 1 .18 1v3.38c0 .25 0 .46.08.63H45c0-.15 0-.31-.07-.48a4.32 4.32 0 0 1 0-.5 2.65 2.65 0 0 1-.94.87 2.86 2.86 0 0 1-1.26.26 2.94 2.94 0 0 1-.71-.09 2.12 2.12 0 0 1-.68-.32 1.84 1.84 0 0 1-.5-.57 1.74 1.74 0 0 1-.2-.86 1.6 1.6 0 0 1 .36-1.1 2 2 0 0 1 .86-.72 5.47 5.47 0 0 1 1.37-.26q.77-.04 1.59-.04zm-.26.89h-1.09a4.84 4.84 0 0 0-1 .18 1.77 1.77 0 0 0-.73.4.88.88 0 0 0-.29.68 1.08 1.08 0 0 0 .13.54 1 1 0 0 0 .33.36 1.35 1.35 0 0 0 .46.19 2.07 2.07 0 0 0 .5.06 2 2 0 0 0 .83-.16 1.84 1.84 0 0 0 .61-.44 2 2 0 0 0 .37-.64 2.13 2.13 0 0 0 .13-.76V8.4zm6.57-1.59a1.59 1.59 0 0 0-.59-.62 1.68 1.68 0 0 0-.9-.24 1.82 1.82 0 0 0-.46.06 1.31 1.31 0 0 0-.42.16 1 1 0 0 0-.29.3.83.83 0 0 0-.11.43.74.74 0 0 0 .35.65 3.28 3.28 0 0 0 1.1.38 3.72 3.72 0 0 1 1.58.64 1.39 1.39 0 0 1 .51 1.13 1.78 1.78 0 0 1-.2.87 1.71 1.71 0 0 1-.52.58 2.31 2.31 0 0 1-.73.33 3.81 3.81 0 0 1-.82.09 3.24 3.24 0 0 1-1.33-.28 2.47 2.47 0 0 1-1.06-.89l.7-.52a1.82 1.82 0 0 0 .68.67 1.89 1.89 0 0 0 1 .27 2.5 2.5 0 0 0 .55-.05 1.12 1.12 0 0 0 .45-.18.9.9 0 0 0 .31-.33.94.94 0 0 0 .07-.49.78.78 0 0 0-.46-.72 6.14 6.14 0 0 0-1.33-.45 5 5 0 0 1-.57-.16 2 2 0 0 1-.56-.28 1.6 1.6 0 0 1-.43-.47 1.42 1.42 0 0 1-.13-.69 1.62 1.62 0 0 1 .18-.79 1.49 1.49 0 0 1 .49-.54 2.19 2.19 0 0 1 .69-.32 3 3 0 0 1 .8-.1 2.83 2.83 0 0 1 1.23.28 2 2 0 0 1 .89.8zm8 1.41v.19a1.8 1.8 0 0 1 0 .22h-5a2.44 2.44 0 0 0 .18.85 2.1 2.1 0 0 0 .47.7 2.27 2.27 0 0 0 .7.47 2 2 0 0 0 .86.17 2.14 2.14 0 0 0 1.18-.31 2.42 2.42 0 0 0 .76-.73l.66.51a3.25 3.25 0 0 1-1.2 1 3.44 3.44 0 0 1-1.4.29 3.24 3.24 0 0 1-1.25-.24 2.78 2.78 0 0 1-1-.66 3.05 3.05 0 0 1-.66-1 3.28 3.28 0 0 1-.23-1.26 3.3 3.3 0 0 1 .23-1.27 2.92 2.92 0 0 1 1.61-1.67 3 3 0 0 1 1.2-.24 3.11 3.11 0 0 1 1.26.24 2.58 2.58 0 0 1 .9.64 2.89 2.89 0 0 1 .55 1 3.68 3.68 0 0 1 .2 1.1zm-.89-.29a2.18 2.18 0 0 0-.55-1.41A1.86 1.86 0 0 0 56.25 6a2 2 0 0 0-.81.17 2 2 0 0 0-.66.44 2 2 0 0 0-.45.63 2.14 2.14 0 0 0-.2.74zm2.82-5.66h2.73a5.51 5.51 0 0 1 1 .11 3 3 0 0 1 1 .38 2 2 0 0 1 .68.71 2.24 2.24 0 0 1 .27 1.14 1.91 1.91 0 0 1-.45 1.26 2 2 0 0 1-1.18.7 2.44 2.44 0 0 1 1.48.69 2.17 2.17 0 0 1 .58 1.6 2.4 2.4 0 0 1-.23 1 2.36 2.36 0 0 1-.68.8 3.22 3.22 0 0 1-1.07.51 5.15 5.15 0 0 1-1.42.18h-2.69zm.93 4h1.88a3.23 3.23 0 0 0 .68-.08 2 2 0 0 0 .62-.26 1.57 1.57 0 0 0 .46-.5 1.5 1.5 0 0 0 .17-.76 1.46 1.46 0 0 0-.17-.75 1.38 1.38 0 0 0-.47-.49 1.91 1.91 0 0 0-.7-.28 3.89 3.89 0 0 0-.85-.09H62zm0 4.34h1.74a4.34 4.34 0 0 0 1-.1 2.47 2.47 0 0 0 .8-.31 1.7 1.7 0 0 0 .55-.55 1.67 1.67 0 0 0 .2-.83 1.53 1.53 0 0 0-.61-1.34A2.91 2.91 0 0 0 63.91 7H62zm7-4.55v-.7h.84V6.4a2.15 2.15 0 0 1 1.94-1.19h.58l-.11.84h-.26a2.19 2.19 0 0 0-.36 0 1.86 1.86 0 0 0-.67.13 1.54 1.54 0 0 0-.57.41 1.92 1.92 0 0 0-.38.71 3.17 3.17 0 0 0-.15 1v3.09H69V6.07zM77.2 7.5a1.54 1.54 0 0 0-.41-1.17A1.7 1.7 0 0 0 75.58 6a2.6 2.6 0 0 0-1 .2 2.56 2.56 0 0 0-.79.51l-.49-.58a3 3 0 0 1 1-.62 3.79 3.79 0 0 1 1.39-.24 3 3 0 0 1 .91.13 2.1 2.1 0 0 1 .75.41 1.78 1.78 0 0 1 .51.69 2.35 2.35 0 0 1 .18 1v3.38c0 .25 0 .46.08.63h-.79l-.06-.48a4.32 4.32 0 0 1 0-.5 2.65 2.65 0 0 1-.94.87 2.86 2.86 0 0 1-1.26.26 3.08 3.08 0 0 1-.72-.09 2.07 2.07 0 0 1-.67-.32 1.84 1.84 0 0 1-.5-.57 1.74 1.74 0 0 1-.2-.86 1.65 1.65 0 0 1 .35-1.1 2.09 2.09 0 0 1 1-.61 5.38 5.38 0 0 1 1.37-.26q.77-.06 1.59-.06zm-.26.89h-1.09a4.6 4.6 0 0 0-1 .18 1.77 1.77 0 0 0-.73.4.88.88 0 0 0-.29.68 1 1 0 0 0 .13.54 1 1 0 0 0 .32.36 1.54 1.54 0 0 0 .46.19 2.22 2.22 0 0 0 .51.06 2 2 0 0 0 .83-.16 1.78 1.78 0 0 0 1-1.08 2.13 2.13 0 0 0 .13-.76v-.4zm3.62-3v1.04a1.93 1.93 0 0 1 .84-.86 2.4 2.4 0 0 1 1.22-.33 2.16 2.16 0 0 1 1.73.68A2.74 2.74 0 0 1 85 7.71v3.71h-.88V8.07a4.54 4.54 0 0 0-.12-.86 1.92 1.92 0 0 0-.27-.67 1.24 1.24 0 0 0-.5-.43 1.87 1.87 0 0 0-.8-.16 1.56 1.56 0 0 0-.67.15 1.63 1.63 0 0 0-.59.43 2.1 2.1 0 0 0-.41.74 3 3 0 0 0-.16 1.05v3.1h-.88V5.37zm11.17 5a2.46 2.46 0 0 1-1 .88 3 3 0 0 1-1.27.29 3.3 3.3 0 0 1-1.29-.24 2.9 2.9 0 0 1-1.61-1.68 3.27 3.27 0 0 1-.23-1.25 3.28 3.28 0 0 1 .23-1.26 3 3 0 0 1 .63-1 3 3 0 0 1 1-.68 3.3 3.3 0 0 1 1.29-.24 2.89 2.89 0 0 1 1.27.3 2.43 2.43 0 0 1 1 .9V1.65h.88v9.77h-.88v-1zm-4.48-2a3 3 0 0 0 .15.95 2.56 2.56 0 0 0 .45.77 2 2 0 0 0 .72.52 2.43 2.43 0 0 0 1 .18 2.21 2.21 0 0 0 1.66-.69 2.36 2.36 0 0 0 .49-.77 2.82 2.82 0 0 0 0-1.93 2.47 2.47 0 0 0-.49-.77 2.26 2.26 0 0 0-.73-.52 2.41 2.41 0 0 0-.97-.13 2.27 2.27 0 0 0-1 .2 2 2 0 0 0-.72.52 2.49 2.49 0 0 0-.45.78 2.91 2.91 0 0 0-.12.9zm11-1.59a1.56 1.56 0 0 0-.58-.62 1.73 1.73 0 0 0-.9-.24 1.89 1.89 0 0 0-.47.06 1.35 1.35 0 0 0-.41.16.92.92 0 0 0-.29.3.83.83 0 0 0-.11.43.74.74 0 0 0 .35.65 3.28 3.28 0 0 0 1.1.38 3.72 3.72 0 0 1 1.58.64A1.39 1.39 0 0 1 99 9.7a1.78 1.78 0 0 1-.2.87 1.82 1.82 0 0 1-.52.58 2.26 2.26 0 0 1-.74.33 3.72 3.72 0 0 1-.81.09 3.32 3.32 0 0 1-1.34-.28 2.44 2.44 0 0 1-1-.89l.61-.52a1.93 1.93 0 0 0 .69.67 1.89 1.89 0 0 0 1 .27 2.36 2.36 0 0 0 .54-.05 1.11 1.11 0 0 0 .46-.18.9.9 0 0 0 .31-.33 1 1 0 0 0 .11-.49.77.77 0 0 0-.46-.72 5.84 5.84 0 0 0-1.32-.45 5 5 0 0 1-.57-.16 2 2 0 0 1-.57-.28 1.71 1.71 0 0 1-.42-.47 1.42 1.42 0 0 1-.18-.69 1.62 1.62 0 0 1 .18-.79 1.49 1.49 0 0 1 .49-.54 2.19 2.19 0 0 1 .74-.35 3 3 0 0 1 .8-.1 2.76 2.76 0 0 1 1.2.28 2 2 0 0 1 .9.8zm-88.6-.12a2.9 2.9 0 1 0 2.9 2.89 2.89 2.89 0 0 0-2.9-2.89zm-6.75 0a2.9 2.9 0 1 0 2.9 2.89 2.89 2.89 0 0 0-2.9-2.89zm13.5 0a2.9 2.9 0 1 0 2.9 2.89 2.89 2.89 0 0 0-2.9-2.89zM9.65 0a2.9 2.9 0 1 0 2.9 2.9A2.9 2.9 0 0 0 9.65 0zm6.75 5.8a2.9 2.9 0 1 0-2.9-2.9 2.9 2.9 0 0 0 2.9 2.9z" fill="#231f20" data-color="1"/>
    </g>
</svg>
</div></a></div><div data-mesh-id="comp-jnlcpf6zinlineContent-wedge-3"></div></div></div></div></div></section><div id="comp-jnlfp4fi" class="Vd6aQZ ignore-focus comp-jnlfp4fi" tabindex="-1" role="region" aria-label="Contate-nos"><div id="contatenos"></div><span class="mHZSwn">Contate-nos</span></div></div></div></section></div></div></div></div></div></div></div></main><div id="soapAfterPagesContainer" class="soapAfterPagesContainer page-without-sosp"><div data-mesh-id="soapAfterPagesContainerinlineContent" data-testid="inline-content" class=""><div data-mesh-id="soapAfterPagesContainerinlineContent-gridContainer" data-testid="mesh-container-content"><div id="comp-jnleunge" style="display:none"></div></div></div></div><div id="pinnedBottomRight" class="pinnedBottomRight"><div id="comp-jnn87ivp-pinned-layer" class="comp-jnn87ivp-pinned-layer big2ZD"><div id="comp-jnn87ivp" class="OQ8Tzd comp-jnn87ivp pvlz2w"><iframe class="nKphmK" title="Wix Chat" aria-label="Wix Chat" scrolling="no" allowfullscreen="" allowtransparency="true" allowvr="true" frameBorder="0" allow="clipboard-write;autoplay;camera;microphone;geolocation;vr"></iframe></div></div></div><footer id="SITE_FOOTER" class="xU8fqS SITE_FOOTER wixui-footer" tabindex="-1"><div class="_C0cVf"><div class="_4XcTfy" data-testid="screenWidthContainerBg"></div></div><div class="U4Bvut"><div class="G5K6X8"><div class="gUbusX" data-testid="screenWidthContainerBgCenter"></div></div><div class="CJF7A2"><div data-mesh-id="SITE_FOOTERinlineContent" data-testid="inline-content" class=""><div data-mesh-id="SITE_FOOTERinlineContent-gridContainer" data-testid="mesh-container-content"><div id="comp-jnlrllcc" class="HcOXKn c9GqVL QxJLC3 lq2cno comp-jnlrllcc wixui-rich-text" data-testid="richTextElement"><h2 class="font_2 wixui-rich-text__text" style="font-size:50px; line-height:normal;"><span style="letter-spacing:normal;" class="wixui-rich-text__text"><span style="font-size:50px;" class="wixui-rich-text__text"><span class="color_11 wixui-rich-text__text">Workshop formandos 2025</span></span></span></h2></div><div id="comp-jnlrpeii" class="comp-jnlrpeii aVng1S wixui-horizontal-line"></div><div id="comp-jnlrpejf" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnlrpejf wixui-rich-text" data-testid="richTextElement"><p class="font_7 wixui-rich-text__text" style="font-size:17px;"><span class="color_18 wixui-rich-text__text">FIQUE &Agrave; FRENTE DA IND&Uacute;STRIA</span></p></div><div id="comp-jnls3h32" class="comp-jnls3h32 aVng1S wixui-horizontal-line"></div><div id="comp-jnleli4f" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnleli4f wixui-rich-text" data-testid="richTextElement"><h4 class="font_4 wixui-rich-text__text" style="font-size:25px;"><span class="color_11 wixui-rich-text__text"><span style="letter-spacing:0.05em;" class="wixui-rich-text__text">O Que</span></span></h4></div><div id="comp-jnlem0bk" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnlem0bk wixui-rich-text" data-testid="richTextElement"><p class="font_8 wixui-rich-text__text" style="line-height:1.4em; font-size:18px;"><span style="letter-spacing:-0.01em;" class="wixui-rich-text__text"><span class="color_13 wixui-rich-text__text">Encontro Anual de Tecnologia de 2035</span></span></p></div><div id="comp-jnlegt8b" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnlegt8b wixui-rich-text" data-testid="richTextElement"><h4 class="font_4 wixui-rich-text__text" style="font-size:25px;"><span class="color_11 wixui-rich-text__text"><span style="font-size:25px;" class="wixui-rich-text__text"><span style="letter-spacing:0.03em;" class="wixui-rich-text__text">Quando</span></span></span></h4></div><div id="comp-jnlegt9b" class="HcOXKn c9GqVL QxJLC3 lq2cno comp-jnlegt9b wixui-rich-text" data-testid="richTextElement"><p class="font_8 wixui-rich-text__text" style="line-height:1.4em; font-size:18px;"><span style="letter-spacing:-0.01em;" class="wixui-rich-text__text"><span class="color_13 wixui-rich-text__text">1 de julho de 2025</span></span></p></div><div id="comp-jnlei0zj" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnlei0zj wixui-rich-text" data-testid="richTextElement"><h4 class="font_4 wixui-rich-text__text" style="font-size:25px;"><span class="color_11 wixui-rich-text__text"><span style="font-size:25px;" class="wixui-rich-text__text"><span style="letter-spacing:0.03em;" class="wixui-rich-text__text">Onde</span></span></span></h4></div><!--$--><div id="comp-jnmw58uo" class="TWFxr5 "><div class="comp-jnmw58uo"><style>.comp-jnmw58uo ._SbO6q {
    --eventsCount: 2;
  }
  </style><div id="wix-events-widget" class="_SbO6q evClassicPreset ZTYKRB" dir="ltr" data-hook="EVENTS_ROOT_NODE"><div class="IOLuL5 jn_rBu" id="ev-frame"><div style="width:100%;height:100%" id="ev-content-container" data-hook="ev-content-container" class="C7DkT1 pe2Vf2 PeGSNm"><div id="ev-content" class="KvGTRc"><div></div><div style="margin-bottom:0"><div id="ev-rsvp-button" class="xAH0mk"><a tabindex="0" data-hook="ev-rsvp-button" style="min-width:223px;min-height:73px" class="DjQEyU BoD93f AinsX6 zLSZXO" href="https://www.sheminimalist.com/events/evento-exclusivo-unicsul" rel="">Comprar Ingressos</a></div></div></div></div></div></div></div></div><!--/$--><div id="comp-jnlei10c" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnlei10c wixui-rich-text" data-testid="richTextElement"><p class="font_8 wixui-rich-text__text" style="font-size:18px;"><span style="letter-spacing:-0.01em;" class="wixui-rich-text__text"><span class="color_13 wixui-rich-text__text">Av. Bernardino de Campos, 98 </span></span></p>

<p class="font_8 wixui-rich-text__text" style="font-size:18px;"><span style="letter-spacing:-0.01em;" class="wixui-rich-text__text"><span class="color_13 wixui-rich-text__text">S&atilde;o Paulo - SP -&nbsp;12345-678</span></span></p></div><div id="comp-jnlel6tk" class="comp-jnlel6tk aVng1S wixui-horizontal-line"></div><div id="comp-jnlencwp" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnlencwp wixui-rich-text" data-testid="richTextElement"><h4 class="font_4 wixui-rich-text__text" style="font-size:25px;"><span class="color_11 wixui-rich-text__text"><span style="font-size:25px;" class="wixui-rich-text__text"><span style="letter-spacing:0.03em;" class="wixui-rich-text__text">Contate-nos</span></span></span></h4></div><div id="comp-jnlf5nxk" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnlf5nxk wixui-rich-text" data-testid="richTextElement"><p class="font_8 wixui-rich-text__text" style="font-size:18px;"><span class="color_13 wixui-rich-text__text">Para mais informa&ccedil;&otilde;es, entre em contato</span></p></div><form id="comp-jnleunnx" class="JVi7i2 comp-jnleunnx wixui-form"><div data-mesh-id="comp-jnleunnxinlineContent" data-testid="inline-content" class=""><div data-mesh-id="comp-jnleunnxinlineContent-gridContainer" data-testid="mesh-container-content"><div id="comp-jnleuonn" class="MpKiNN comp-jnleuonn wixui-text-input lPl_oN"><div class="pUnTVX"><input name="email" id="input_comp-jnleuonn" class="KvoMHf has-custom-focus wixui-text-input__input" type="email" placeholder="Seu endereço de email" required="" aria-required="true" aria-invalid="true" maxLength="250" autoComplete="off" aria-label="Seu endereço de email" value=""/></div></div><div class="comp-jnleuonb FubTgk" id="comp-jnleuonb" aria-disabled="false"><button aria-disabled="false" data-testid="buttonElement" class="uDW_Qe wixui-button PlZyDq"><span class="l7_2fn wixui-button__label">Enviar</span></button></div><div id="comp-jnleuon7" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnleuon7 wixui-rich-text" data-testid="richTextElement"><p class="font_8 wixui-rich-text__text" style="text-align:right; font-size:18px;"><span class="color_18 wixui-rich-text__text">Obrigado por enviar!</span></p></div></div></div></form><div id="comp-jnleovy6" class="comp-jnleovy6 WzbAF8"><ul class="mpGTIt" aria-label="Redes sociais"><li id="dataItem-jnleovz31-comp-jnleovy6" class="O6KwRn"><a data-testid="linkElement" href="http://www.facebook.com/WixPortugues" target="_blank" class="oRtuWN" aria-label="Ícone do Facebook Branco"><wow-image id="img_0_comp-jnleovy6" class="HlRz5e YaS0jR" data-image-info="{&quot;containerId&quot;:&quot;dataItem-jnleovz31-comp-jnleovy6&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;encoding&quot;:&quot;AVIF&quot;,&quot;imageData&quot;:{&quot;width&quot;:200,&quot;height&quot;:200,&quot;uri&quot;:&quot;23fd2a2be53141ed810f4d3dcdcd01fa.png&quot;,&quot;name&quot;:&quot;&quot;,&quot;displayMode&quot;:&quot;fill&quot;}}" data-motion-part="BG_IMG" data-bg-effect-name="" data-has-ssr-src="" style="--wix-img-max-width:max(200px, 100%)"><img alt="Ícone do Facebook Branco"/></wow-image></a></li><li id="dataItem-jnleovz311-comp-jnleovy6" class="O6KwRn"><a data-testid="linkElement" href="https://www.instagram.com/wix" target="_blank" class="oRtuWN" aria-label="Ícone do Instagram Branco"><wow-image id="img_1_comp-jnleovy6" class="HlRz5e YaS0jR" data-image-info="{&quot;containerId&quot;:&quot;dataItem-jnleovz311-comp-jnleovy6&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;encoding&quot;:&quot;AVIF&quot;,&quot;imageData&quot;:{&quot;width&quot;:200,&quot;height&quot;:200,&quot;uri&quot;:&quot;81af6121f84c41a5b4391d7d37fce12a.png&quot;,&quot;name&quot;:&quot;&quot;,&quot;displayMode&quot;:&quot;fill&quot;}}" data-motion-part="BG_IMG" data-bg-effect-name="" data-has-ssr-src="" style="--wix-img-max-width:max(200px, 100%)"><img alt="Ícone do Instagram Branco"/></wow-image></a></li><li id="dataItem-jnleovz33-comp-jnleovy6" class="O6KwRn"><a data-testid="linkElement" href="https://twitter.com/WixBR" target="_blank" class="oRtuWN" aria-label="Ícone do Twitter Branco"><wow-image id="img_2_comp-jnleovy6" class="HlRz5e YaS0jR" data-image-info="{&quot;containerId&quot;:&quot;dataItem-jnleovz33-comp-jnleovy6&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;encoding&quot;:&quot;AVIF&quot;,&quot;imageData&quot;:{&quot;width&quot;:200,&quot;height&quot;:200,&quot;uri&quot;:&quot;01ab6619093f45388d66736ec22e5885.png&quot;,&quot;name&quot;:&quot;&quot;,&quot;displayMode&quot;:&quot;fill&quot;}}" data-motion-part="BG_IMG" data-bg-effect-name="" data-has-ssr-src="" style="--wix-img-max-width:max(200px, 100%)"><img alt="Ícone do Twitter Branco"/></wow-image></a></li><li id="dataItem-jnles9b1-comp-jnleovy6" class="O6KwRn"><a data-testid="linkElement" href="https://www.linkedin.com/company/wix-com" target="_blank" class="oRtuWN" aria-label="Ícone do Linkedin Branco"><wow-image id="img_3_comp-jnleovy6" class="HlRz5e YaS0jR" data-image-info="{&quot;containerId&quot;:&quot;dataItem-jnles9b1-comp-jnleovy6&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;encoding&quot;:&quot;AVIF&quot;,&quot;imageData&quot;:{&quot;width&quot;:200,&quot;height&quot;:200,&quot;uri&quot;:&quot;7528824071724d12a3e6c31eee0b40d4.png&quot;,&quot;name&quot;:&quot;&quot;,&quot;displayMode&quot;:&quot;fill&quot;}}" data-motion-part="BG_IMG" data-bg-effect-name="" data-has-ssr-src="" style="--wix-img-max-width:max(200px, 100%)"><img alt="Ícone do Linkedin Branco"/></wow-image></a></li></ul></div><div id="comp-jnkfpusy" class="c36GfP comp-jnkfpusy wixui-google-map" tabindex="0"></div><section id="comp-jnlmlsag" class="comp-jnlmlsag CohWsy wixui-column-strip"><div id="bgLayers_comp-jnlmlsag" data-hook="bgLayers" data-motion-part="BG_LAYER" class="if7Vw2"><div data-testid="colorUnderlay" class="tcElKx i1tH8h"></div><div id="bgMedia_comp-jnlmlsag" data-motion-part="BG_MEDIA" class="wG8dni"></div></div><div data-testid="columns" class="V5AUxf"><div id="comp-jnlmlsby" class="comp-jnlmlsby YzqVVZ wixui-column-strip__column"><div id="bgLayers_comp-jnlmlsby" data-hook="bgLayers" data-motion-part="BG_LAYER" class="MW5IWV"><div data-testid="colorUnderlay" class="LWbAav Kv1aVt"></div><div id="bgMedia_comp-jnlmlsby" data-motion-part="BG_MEDIA" class="VgO9Yg"></div></div><div data-mesh-id="comp-jnlmlsbyinlineContent" data-testid="inline-content" class=""><div data-mesh-id="comp-jnlmlsbyinlineContent-gridContainer" data-testid="mesh-container-content"><div id="comp-jnleey72" class="HcOXKn SxM0TO QxJLC3 lq2cno comp-jnleey72 wixui-rich-text" data-testid="richTextElement"><p class="font_9 wixui-rich-text__text" style="line-height:1.5em; font-size:14px;"><span style="letter-spacing:0.01em;" class="wixui-rich-text__text"><span class="color_11 wixui-rich-text__text">&copy; 2035 por EAT. Orgulhosamente criado com <span style="text-decoration:underline;" class="wixui-rich-text__text"><a href="http://wix.com?utm_campaign=vir_created_with" target="_blank" rel="noreferrer noopener" class="wixui-rich-text__text">Wix.com</a></span></span></span></p></div></div></div></div></div></section></div></div></div></div></footer></div></div><div id="SCROLL_TO_BOTTOM" class="Vd6aQZ ignore-focus SCROLL_TO_BOTTOM" tabindex="-1" role="region" aria-label="bottom of page"><span class="mHZSwn">bottom of page</span></div></div></div>


    <script type="application/json" id="wix-fedops">{"data":{"site":{"metaSiteId":"6b0a6bee-31a6-429c-a658-14585b8be08e","userId":"60c39eea-e8ba-4af7-a1b1-def89b656fe0","siteId":"bc3481f0-99f4-4688-a477-89ad817126b6","externalBaseUrl":"https:\/\/www.sheminimalist.com","siteRevision":4,"siteType":"UGC","dc":"virginia-pub","isResponsive":false,"editorName":"Unknown","sessionId":"afe03957-4d77-47c8-a439-657f1ac41cbc","isSEO":false,"appNameForBiEvents":"thunderbolt"},"rollout":{"siteAssetsVersionsRollout":false,"isDACRollout":0,"isTBRollout":true},"fleetConfig":{"fleetName":"thunderbolt-renderer-gradual","type":"Rollout","code":1},"requestUrl":"https:\/\/www.sheminimalist.com\/","isInSEO":false,"platformOnSite":true}}</script>
    <script>window.fedops = JSON.parse(document.getElementById('wix-fedops').textContent)</script>
    <script id='sendFedopsLoadStarted'>
		!function(){function e(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function r(e,r,t){return(r=function(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var t=function(e){var r,t,n,o=!1;if(null===(r=window.viewerModel)||void 0===r||!/\(iP(hone|ad|od);/i.test(null===(t=window)||void 0===t||null===(n=t.navigator)||void 0===n?void 0:n.userAgent))try{o=navigator.sendBeacon(e)}catch(e){}o||((new Image).src=e)};var n=window.fedops.data,o=n.site,i=n.rollout,a=n.fleetConfig,s=n.requestUrl,c=n.isInSEO,d=n.frogOnUserDomain;shouldReportErrorOnlyInPanorama=n.shouldReportErrorOnlyInPanorama;var u=function(e){var r=e.navigator.userAgent;return/instagram.+google\/google/i.test(r)?"":/bot|google(?!play)|phantom|crawl|spider|headless|slurp|facebookexternal|Lighthouse|PTST|^mozilla\/4\.0$|^\s*$/i.test(r)?"ua":""}(window)||function(){try{if(window.self===window.top)return""}catch(e){}return"iframe"}()||function(){var e;if(!Function.prototype.bind)return"bind";var r=window,t=r.document,n=r.navigator;if(!t||!n)return"document";var o=n.webdriver,i=n.userAgent,a=n.plugins,s=n.languages;if(o)return"webdriver";if(!a||Array.isArray(a))return"plugins";if(null!==(e=Object.getOwnPropertyDescriptor(a,"0"))&&void 0!==e&&e.writable)return"plugins-extra";if(!i)return"userAgent";if(i.indexOf("Snapchat")>0&&t.hidden)return"Snapchat";if(!s||0===s.length||!Object.isFrozen(s))return"languages";try{throw Error()}catch(e){if(e instanceof Error){var c=e.stack;if(c&&/ (\(internal\/)|(\(?file:\/)/.test(c))return"stack"}}return""}()||(c?"seo":""),l=!!u,p=function(t,n){var o,i="none",a=t.match(/ssr-caching="?cache[,#]\s*desc=([\w-]+)(?:[,#]\s*varnish=(\w+))?(?:[,#]\s*dc[,#]\s*desc=([\w-]+))?(?:"|;|$)/);if(!a&&window.PerformanceServerTiming){var s=function(e){var r,t;try{r=e()}catch(e){r=[]}var n=[];return r.forEach((function(e){switch(e.name){case"cache":n[1]=e.description;break;case"varnish":n[2]=e.description;break;case"dc":t=e.description}})),{microPop:t,matches:n}}(n);o=s.microPop,a=s.matches}if(a&&a.length&&(i=`${a[1]},${a[2]||"none"}`,o||(o=a[3])),"none"===i){var c="undefined"!=typeof performance?performance.timing:null;c&&c.responseStart-c.requestStart==0&&(i="browser")}return function(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}({caching:i,isCached:i.includes("hit")},o?{microPop:o}:{})}(document.cookie,(function(){return performance.getEntriesByType("navigation")[0].serverTiming||[]})),f=p.isCached,m=p.caching,v=p.microPop,w={WixSite:1,UGC:2,Template:3}[o.siteType]||0,g="Studio"===o.editorName?"wix-studio":o.isResponsive?"thunderbolt-responsive":"thunderbolt",h=i.isDACRollout,b=i.siteAssetsVersionsRollout,y=h?1:0,x=b?1:0,O=0===a.code||1===a.code?a.code:null,S=2===a.code,P=Date.now()-window.initialTimestamps.initialTimestamp,T=Math.round(performance.now()),_=document.visibilityState,j=window,E=j.fedops,I=j.addEventListener,k=j.thunderboltVersion;E.apps=E.apps||{},E.apps[g]={startLoadTime:T},E.sessionId=o.sessionId,E.vsi="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var r=16*Math.random()|0;return("x"===e?r:3&r|8).toString(16)})),E.is_cached=f,E.phaseStarted=D(28),E.phaseEnded=D(22),performance.mark("[cache] "+m+(v?" ["+v+"]":"")),E.reportError=function(e,r="load"){var t=(null==e?void 0:e.reason)||(null==e?void 0:e.message);t?(shouldReportErrorOnlyInPanorama||R(26,`&errorInfo=${t}&errorType=${r}`),$({error:{name:r,message:t,stack:e?.stack}})):e.preventDefault()},I("error",E.reportError),I("unhandledrejection",E.reportError);var A=!1;function R(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!s.includes("suppressbi=true")){var n=(d?o.externalBaseUrl.replace(/^https?:\/\//,"")+"/_frog":"//frog.wix.com")+"/bolt-performance?src=72&evid="+e+"&appName="+g+"&is_rollout="+O+"&is_company_network="+S+"&is_sav_rollout="+x+"&is_dac_rollout="+y+"&dc="+o.dc+(v?"&microPop="+v:"")+"&is_cached="+f+"&msid="+o.metaSiteId+"&session_id="+window.fedops.sessionId+"&ish="+l+"&isb="+l+(l?"&isbr="+u:"")+"&vsi="+window.fedops.vsi+"&caching="+m+(A?",browser_cache":"")+"&pv="+_+"&pn=1&v="+k+"&url="+encodeURIComponent(s)+"&st="+w+`&ts=${P}&tsn=${T}`+r;t(n)}}function $({transaction:e,error:r}){const t=[{fullArtifactId:"com.wixpress.html-client.wix-thunderbolt",componentId:g,platform:"viewer",msid:window.fedops.data.site.metaSiteId,sessionId:window.fedops.sessionId,sessionTime:Date.now()-window.initialTimestamps.initialTimestamp,logLevel:r?"ERROR":"INFO",message:r?.message??(e?.name&&`${e.name} START`),errorName:r?.name,errorStack:r?.stack,transactionName:e?.name,transactionAction:e&&"START",isSsr:!1,dataCenter:o.dc,isCached:!!f,isRollout:!!O,isHeadless:!!l,isDacRollout:!!y,isSavRollout:!!x,isCompanyNetwork:!!S}];try{const e=JSON.stringify({messages:t});return navigator.sendBeacon("https://panorama.wixapps.net/api/v1/bulklog",e)}catch(e){console.error(e)}}function D(e){return function(r,t){var n=`&name=${r}&duration=${Date.now()-P}`,o=t&&t.paramsOverrides?Object.keys(t.paramsOverrides).map((function(e){return e+"="+t.paramsOverrides[e]})).join("&"):"";R(e,o?`${n}&${o}`:n)}}I("pageshow",(function(e){e.persisted&&(A||(A=!0,E.is_cached=!0))}),!0),window.__browser_deprecation__||(R(21,`&platformOnSite=${window.fedops.data.platformOnSite}`),$({transaction:{name:"PANORAMA_COMPONENT_LOAD"}}))}();
    </script>

    <!-- Polyfills check -->
    <script>
		if (
			typeof Promise === 'undefined' ||
			typeof Set === 'undefined' ||
			typeof Object.assign === 'undefined' ||
			typeof Array.from === 'undefined' ||
			typeof Symbol === 'undefined'
		) {
			// send bi in order to detect the browsers in which polyfills are not working
			window.fedops.phaseStarted('missing_polyfills')
		}
    </script>


<!-- initCustomElements # 1-->
<script data-url="https://static.parastorage.com/services/wix-thunderbolt/dist/webpack-runtime.8d1fc073.bundle.min.js">!function(){"use strict";var e,o,n,r,t,i={},a={};function d(e){var o=a[e];if(void 0!==o)return o.exports;var n=a[e]={id:e,loaded:!1,exports:{}};return i[e].call(n.exports,n,n.exports,d),n.loaded=!0,n.exports}d.m=i,e=[],d.O=function(o,n,r,t){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],t=e[u][2];for(var a=!0,s=0;s<n.length;s++)(!1&t||i>=t)&&Object.keys(d.O).every((function(e){return d.O[e](n[s])}))?n.splice(s--,1):(a=!1,t<i&&(i=t));if(a){e.splice(u--,1);var c=r();void 0!==c&&(o=c)}}return o}t=t||0;for(var u=e.length;u>0&&e[u-1][2]>t;u--)e[u]=e[u-1];e[u]=[n,r,t]},d.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(o,{a:o}),o},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},d.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var t=Object.create(null);d.r(t);var i={};o=o||[null,n({}),n([]),n(n)];for(var a=2&r&&e;"object"==typeof a&&!~o.indexOf(a);a=n(a))Object.getOwnPropertyNames(a).forEach((function(o){i[o]=function(){return e[o]}}));return i.default=function(){return e},d.d(t,i),t},d.d=function(e,o){for(var n in o)d.o(o,n)&&!d.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},d.f={},d.e=function(e){return Promise.all(Object.keys(d.f).reduce((function(o,n){return d.f[n](e,o),o}),[]))},d.u=function(e){return 671===e?"thunderbolt-commons.b7a35b00.bundle.min.js":592===e?"fastdom.inline.fbeb22f8.bundle.min.js":996===e?"render-indicator.inline.e7c7eae0.bundle.min.js":8398===e?"custom-element-utils.inline.867d0d19.bundle.min.js":({34:"FontFaces",40:"wixEcomFrontendWixCodeSdk",46:"TPAPopup",161:"wix-seo-events-page-structured-data-index",200:"wix-seo-reviews-component-index",266:"group_3",316:"windowScroll",349:"wix-seo-breadcrumbs-component-index",350:"wix-seo-static-page-v2-index",359:"group_48",407:"wix-seo-SEO_DEFAULT",481:"wix-seo-forum-category-index",541:"TPAUnavailableMessageOverlay",569:"assetsLoader",693:"triggersAndReactions",695:"animationsWixCodeSdk",711:"passwordProtectedPage",740:"group_43",789:"wix-seo-images-component-index",851:"group_2",970:"tpaWidgetNativeDeadComp",974:"animations",1021:"wix-seo-portfolio-collections-index",1171:"platformPubsub",1184:"group_18",1232:"group_9",1274:"ooi",1305:"seo-api",1494:"wix-seo-groups-post-index",1499:"wix-seo-protected-page-index",1501:"builderComponent",1530:"wix-seo-bookings-form-index",1560:"TPABaseComponent",1579:"wix-seo-services-component-index",1632:"SiteStyles",1922:"widgetWixCodeSdk",1991:"tpaModuleProvider",2040:"debug",2077:"wix-seo-search-page-index",2177:"group_11",2179:"AppPart2",2313:"group_46",2358:"wix-seo-blog-post-index",2396:"merge-mappers",2516:"presenceApi",2545:"thunderbolt-components-registry",2594:"tpaCommons",2624:"group_21",2635:"group_22",2646:"platform",2694:"group_38",2705:"group_37",2816:"wix-seo-blog-category-index",2865:"Repeater_FixedColumns",3002:"svgLoader",3006:"wix-seo-paginated-component-index",3092:"group_50",3096:"wix-seo-stores-gallery-component-index",3119:"Repeater_FluidColumns",3272:"FontRulersContainer",3286:"wix-seo-stores-product-schema-presets-index",3495:"wix-seo-blog-tags-index",3499:"wix-seo-restaurants-menu-component-index",3511:"environmentWixCodeSdk",3542:"dynamicPages",3605:"cyclicTabbing",3659:"componentsqaapi",3660:"group_5",3671:"group_6",3682:"TPAWorker",3689:"seo-api-converters",3780:"wix-seo-schedule-page-index",3909:"motion",3930:"mobileFullScreen",3993:"group_19",4047:"wix-seo-events-list-component-index",4066:"TPAPreloaderOverlay",4134:"group_41",4206:"santa-platform-utils",4245:"testApi",4303:"widget",4456:"group_29",4493:"remoteStructureRenderer",4526:"group_30",4551:"wix-seo-members-area-profile-tabs-index",4655:"reporter-api",4676:"wix-seo-events-page-index",4708:"routerFetch",4773:"quickActionBar",4874:"wix-seo-stores-category-index",5097:"motionEffects",5114:"wix-seo-bookings-calendar-index",5116:"wix-seo-wix-data-page-item-index",5122:"group_45",5133:"group_42",5148:"router",5168:"wixDomSanitizer",5219:"wix-seo-static-page-index",5221:"stores",5307:"wix-seo-blog-hashtags-index",5377:"onloadCompsBehaviors",5433:"group_20",5444:"group_25",5445:"protectedPages",5503:"group_39",5625:"group_8",5648:"wix-seo-members-area-profile-index",5739:"externalComponent",5901:"group_51",5966:"group_49",5998:"stickyToComponent",6099:"group_35",6137:"BuilderPathsContainer",6178:"searchBox",6304:"wix-seo-gift-card-index",6384:"dashboardWixCodeSdk",6441:"wix-seo-restaurants-menu-page-index",6469:"group_4",6505:"editorElementsDynamicTheme",6510:"tslib.inline",6578:"renderIndicator",6739:"presence-lazy",6821:"becky-css",6850:"componentsLoader",6851:"wix-seo-forum-post-index",6935:"module-executor",6943:"group_40",7030:"feedback",7116:"scrollToAnchor",7171:"siteMembers",7230:"popups",7265:"group_28",7331:"RemoteRefDeadComp",7393:"vsm-css",7457:"group_0",7471:"wix-seo-bookings-service-index",7513:"wix-seo-stores-sub-category-index",7547:"AppPart",7562:"usedPlatformApis",7920:"group_47",7931:"group_44",8039:"containerSlider",8104:"tpa",8149:"GhostComp",8242:"group_23",8253:"group_24",8368:"wix-seo-programs-component-index",8380:"group_14",8423:"customCss",8519:"qaApi",8595:"wix-seo-challenges-page-index",8735:"wix-seo-static-page-v2-schema-presets-index",8791:"wix-seo-events-page-calculated-index",8838:"group_27",8840:"ByocStyles",8908:"group_32",8919:"group_31",8934:"panorama",8981:"wix-seo-groups-page-index",9040:"wix-seo-restaurants-order-page-index",9090:"clientSdk",9098:"wix-seo-video-component-index",9131:"wix-seo-payment-page-index",9141:"wix-seo-pro-gallery-item-index",9166:"wix-seo-portfolio-projects-index",9203:"wix-seo-thank-you-page-index",9219:"group_13",9278:"group_7",9341:"editorWixCodeSdk",9368:"group_10",9506:"wix-seo-members-area-author-profile-index",9507:"TPAModal",9533:"wix-seo-stores-product-index",9764:"wix-seo-pricing-plans-index",9822:"businessManager",9896:"group_36",9948:"wix-seo-blog-archive-index"}[e]||e)+"."+{34:"ef96c275",40:"0cc7f309",46:"25cd7240",161:"a0b2fc46",200:"10691d97",266:"f7160947",316:"ee0b59df",349:"f4f1ac53",350:"014ac761",359:"37f253bd",407:"1dd38d2f",481:"30fd8c34",490:"b6f2be6d",541:"1c56d534",569:"a89ec09e",693:"66bcbb0c",695:"0f7330c1",711:"1d2bf9a9",740:"593412c3",789:"759c18b6",851:"6c9fdcc0",970:"48e46885",974:"4ec0657c",993:"1af976e6",1021:"a81dc90a",1171:"236f41ee",1184:"1410c866",1232:"eaffbc8e",1274:"a116b4fd",1305:"ccfc8780",1437:"41b16acd",1494:"dbd4bc17",1499:"7d8ce975",1501:"2518730a",1530:"69c98f04",1560:"70544b41",1579:"a376d5b0",1619:"fcc1e235",1632:"a075fc9c",1922:"8752e4ce",1991:"6b9598f8",2040:"4e59686e",2077:"99fb09f3",2177:"6887a8d6",2179:"6edde50a",2313:"286df541",2358:"46dcfa66",2396:"ccb3dda4",2516:"852c4fdc",2545:"bf2fd22d",2594:"1b788520",2624:"bd9023c1",2635:"c72c096c",2646:"db48ebfa",2694:"0437e39e",2705:"41a8197c",2816:"ab0d32ce",2865:"a1217057",3002:"7fc2715c",3006:"ea2aebf0",3092:"acfa329d",3096:"df8f046c",3119:"9fbbbe9a",3272:"5a7bdbdc",3286:"35353b32",3495:"de5b81ec",3499:"4164187c",3511:"7690a40b",3542:"78745900",3605:"76c1f149",3659:"e52cbf68",3660:"c5d093b8",3671:"1d87bc3e",3682:"d4312ae4",3689:"2f0703f6",3780:"74c3ce54",3909:"1c6b25b2",3930:"548b75c4",3970:"ed686049",3993:"7fd5a859",4047:"0ccd3b42",4066:"8c009349",4134:"01e6cb7c",4206:"d0940920",4245:"945bb0ec",4303:"745a5867",4456:"cf3f7ea5",4493:"491e06a3",4526:"878cdc90",4551:"13fa8928",4655:"b56a03fd",4676:"a3358426",4708:"a578e82e",4773:"ed00935c",4874:"6b8ba119",4945:"8d1478e2",5049:"ac85cc01",5097:"e3cc5347",5114:"87f7512c",5116:"8d3a31cb",5122:"9ec687ae",5133:"46d4bcd5",5148:"a5287863",5168:"ec1b1b1c",5219:"b25ed766",5221:"5896c8a4",5307:"d9442b1e",5377:"4508895f",5433:"ceae795e",5444:"a6dc06b8",5445:"0014c834",5503:"f998017c",5625:"baf7261b",5648:"2bc79b7b",5739:"4cfa3982",5901:"c0238250",5966:"59859d7b",5998:"eb4a0977",6099:"27e68b0e",6137:"691f2882",6178:"e643f152",6304:"e257cea9",6384:"ada92001",6441:"71582123",6469:"ba376d66",6505:"e3aecc44",6510:"4901af4a",6578:"e47df9c0",6739:"1f29b6f7",6821:"f9f7bced",6850:"f7c40481",6851:"c0b59b99",6935:"aab51657",6943:"42a25e81",7030:"255bbff9",7116:"3bd0f78e",7171:"55bcda3b",7230:"efc78062",7265:"80fe286a",7331:"8542ddfa",7393:"5ac06c00",7457:"591a3770",7471:"a82fe650",7513:"4bc4f1e5",7547:"1c7e3318",7562:"c3e70464",7920:"33ecf404",7931:"0f559da0",8039:"4d732a78",8104:"2287343c",8149:"b50695fd",8242:"3eeabd9c",8253:"f856184a",8368:"4a3a4b9a",8380:"f675f369",8423:"ce5f1485",8519:"af328557",8595:"5d6cf9ae",8735:"2740d21e",8791:"031fbaaf",8838:"ec3d04ab",8840:"8874baab",8869:"a8ab00bc",8908:"1081b645",8919:"82d70b0a",8934:"051dc072",8981:"aed7074b",9040:"353f99cc",9090:"30bb4512",9098:"908c214d",9131:"b2555831",9141:"f2555790",9166:"e5e83bc0",9203:"9592e074",9219:"fa93d2d5",9278:"66354232",9341:"268e432b",9368:"84c521e3",9506:"6d2d01d0",9507:"60d51756",9533:"a005c333",9764:"1ce46641",9822:"d02346fa",9839:"bb61fb83",9896:"6ed9a539",9948:"23bb47f9"}[e]+".chunk.min.js"},d.miniCssF=function(e){return 996===e?"render-indicator.inline.044c11cb.min.css":{46:"TPAPopup",541:"TPAUnavailableMessageOverlay",970:"tpaWidgetNativeDeadComp",1560:"TPABaseComponent",2179:"AppPart2",2865:"Repeater_FixedColumns",3119:"Repeater_FluidColumns",3272:"FontRulersContainer",4066:"TPAPreloaderOverlay",7547:"AppPart",9278:"group_7",9507:"TPAModal"}[e]+"."+{46:"7e7f441d",541:"fb1e5320",970:"edad7c2d",1560:"27e1e284",2179:"0a2601ec",2865:"9abcda74",3119:"2b7b96dd",3272:"2b93f1ca",4066:"6dbffa0c",7547:"34a92bc1",9278:"bae0ce0c",9507:"52dc3d33"}[e]+".chunk.min.css"},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},r={},t="_wix_thunderbolt_app:",d.l=function(e,o,n,i){if(r[e])r[e].push(o);else{var a,s;if(void 0!==n)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var f=c[u];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==t+n){a=f;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,d.nc&&a.setAttribute("nonce",d.nc),a.setAttribute("data-webpack",t+n),a.src=e,0!==a.src.indexOf(window.location.origin+"/")&&(a.crossOrigin="anonymous")),r[e]=[o];var p=function(o,n){a.onerror=a.onload=null,clearTimeout(b);var t=r[e];if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),t&&t.forEach((function(e){return e(n)})),o)return o(n)},b=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),s&&document.head.appendChild(a)}},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},d.p="https://static.parastorage.com/services/wix-thunderbolt/dist/",function(){if("undefined"!=typeof document){var e=function(e){return new Promise((function(o,n){var r=d.miniCssF(e),t=d.p+r;if(function(e,o){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var t=(a=n[r]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(t===e||t===o))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){var a;if((t=(a=i[r]).getAttribute("data-href"))===e||t===o)return a}}(r,t))return o();!function(e,o,n,r,t){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onerror=i.onload=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var a=n&&("load"===n.type?"missing":n.type),d=n&&n.target&&n.target.href||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=d,i.parentNode&&i.parentNode.removeChild(i),t(s)}},i.href=o,0!==i.href.indexOf(window.location.origin+"/")&&(i.crossOrigin="anonymous"),n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i)}(e,t,null,o,n)}))},o={7311:0};d.f.miniCss=function(n,r){o[n]?r.push(o[n]):0!==o[n]&&{46:1,541:1,970:1,996:1,1560:1,2179:1,2865:1,3119:1,3272:1,4066:1,7547:1,9278:1,9507:1}[n]&&r.push(o[n]=e(n).then((function(){o[n]=0}),(function(e){throw delete o[n],e})))}}}(),function(){var e={7311:0};d.f.j=function(o,n){var r=d.o(e,o)?e[o]:void 0;if(0!==r)if(r)n.push(r[2]);else if(7311!=o){var t=new Promise((function(n,t){r=e[o]=[n,t]}));n.push(r[2]=t);var i=d.p+d.u(o),a=new Error;d.l(i,(function(n){if(d.o(e,o)&&(0!==(r=e[o])&&(e[o]=void 0),r)){var t=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;a.message="Loading chunk "+o+" failed.\n("+t+": "+i+")",a.name="ChunkLoadError",a.type=t,a.request=i,r[1](a)}}),"chunk-"+o,o)}else e[o]=0},d.O.j=function(o){return 0===e[o]};var o=function(o,n){var r,t,i=n[0],a=n[1],s=n[2],c=0;if(i.some((function(o){return 0!==e[o]}))){for(r in a)d.o(a,r)&&(d.m[r]=a[r]);if(s)var u=s(d)}for(o&&o(n);c<i.length;c++)t=i[c],d.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return d.O(u)},n=self.webpackJsonp__wix_thunderbolt_app=self.webpackJsonp__wix_thunderbolt_app||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}()}();
//# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/webpack-runtime.8d1fc073.bundle.min.js.map</script>
<script data-url="https://static.parastorage.com/services/wix-thunderbolt/dist/fastdom.inline.fbeb22f8.bundle.min.js">(self.webpackJsonp__wix_thunderbolt_app=self.webpackJsonp__wix_thunderbolt_app||[]).push([[592],{17709:function(t,e,n){var i;!function(e){"use strict";var r=function(){},s=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.msRequestAnimationFrame||function(t){return setTimeout(t,16)};function a(){var t=this;t.reads=[],t.writes=[],t.raf=s.bind(e),r("initialized",t)}function u(t){t.scheduled||(t.scheduled=!0,t.raf(o.bind(null,t)),r("flush scheduled"))}function o(t){r("flush");var e,n=t.writes,i=t.reads;try{r("flushing reads",i.length),t.runTasks(i),r("flushing writes",n.length),t.runTasks(n)}catch(t){e=t}if(t.scheduled=!1,(i.length||n.length)&&u(t),e){if(r("task errored",e.message),!t.catch)throw e;t.catch(e)}}function c(t,e){var n=t.indexOf(e);return!!~n&&!!t.splice(n,1)}a.prototype={constructor:a,runTasks:function(t){var e;for(r("run tasks");e=t.shift();)e()},measure:function(t,e){r("measure");var n=e?t.bind(e):t;return this.reads.push(n),u(this),n},mutate:function(t,e){r("mutate");var n=e?t.bind(e):t;return this.writes.push(n),u(this),n},clear:function(t){return r("clear",t),c(this.reads,t)||c(this.writes,t)},extend:function(t){if(r("extend",t),"object"!=typeof t)throw new Error("expected object");var e=Object.create(this);return function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])}(e,t),e.fastdom=this,e.initialize&&e.initialize(),e},catch:null};var h=e.fastdom=e.fastdom||new a;void 0===(i=function(){return h}.call(h,n,h,t))||(t.exports=i)}("undefined"!=typeof window?window:void 0!==this?this:globalThis)}}]);
//# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/fastdom.inline.fbeb22f8.bundle.min.js.map</script>
<script data-url="https://static.parastorage.com/services/wix-thunderbolt/dist/custom-element-utils.inline.867d0d19.bundle.min.js">"use strict";(self.webpackJsonp__wix_thunderbolt_app=self.webpackJsonp__wix_thunderbolt_app||[]).push([[8398],{22538:function(t,e,i){i.r(e),i.d(e,{STATIC_MEDIA_URL:function(){return jt},alignTypes:function(){return _},fileType:function(){return O},fittingTypes:function(){return h},getData:function(){return Bt},getFileExtension:function(){return B},getPlaceholder:function(){return Ht},getResponsiveImageProps:function(){return zt},htmlTag:function(){return l},isWEBP:function(){return P},populateGlobalFeatureSupport:function(){return Q},sdk:function(){return Zt},upscaleMethods:function(){return g}});const n="v1",a=2,r=1920,o=1920,c=1e3,s=1e3,h={SCALE_TO_FILL:"fill",SCALE_TO_FIT:"fit",STRETCH:"stretch",ORIGINAL_SIZE:"original_size",TILE:"tile",TILE_HORIZONTAL:"tile_horizontal",TILE_VERTICAL:"tile_vertical",FIT_AND_TILE:"fit_and_tile",LEGACY_STRIP_TILE:"legacy_strip_tile",LEGACY_STRIP_TILE_HORIZONTAL:"legacy_strip_tile_horizontal",LEGACY_STRIP_TILE_VERTICAL:"legacy_strip_tile_vertical",LEGACY_STRIP_SCALE_TO_FILL:"legacy_strip_fill",LEGACY_STRIP_SCALE_TO_FIT:"legacy_strip_fit",LEGACY_STRIP_FIT_AND_TILE:"legacy_strip_fit_and_tile",LEGACY_STRIP_ORIGINAL_SIZE:"legacy_strip_original_size",LEGACY_ORIGINAL_SIZE:"actual_size",LEGACY_FIT_WIDTH:"fitWidth",LEGACY_FIT_HEIGHT:"fitHeight",LEGACY_FULL:"full",LEGACY_BG_FIT_AND_TILE:"legacy_tile",LEGACY_BG_FIT_AND_TILE_HORIZONTAL:"legacy_tile_horizontal",LEGACY_BG_FIT_AND_TILE_VERTICAL:"legacy_tile_vertical",LEGACY_BG_NORMAL:"legacy_normal"},u={FIT:"fit",FILL:"fill",FILL_FOCAL:"fill_focal",CROP:"crop",LEGACY_CROP:"legacy_crop",LEGACY_FILL:"legacy_fill"},_={CENTER:"center",TOP:"top",TOP_LEFT:"top_left",TOP_RIGHT:"top_right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom_left",BOTTOM_RIGHT:"bottom_right",LEFT:"left",RIGHT:"right"},T={[_.CENTER]:{x:.5,y:.5},[_.TOP_LEFT]:{x:0,y:0},[_.TOP_RIGHT]:{x:1,y:0},[_.TOP]:{x:.5,y:0},[_.BOTTOM_LEFT]:{x:0,y:1},[_.BOTTOM_RIGHT]:{x:1,y:1},[_.BOTTOM]:{x:.5,y:1},[_.RIGHT]:{x:1,y:.5},[_.LEFT]:{x:0,y:.5}},d={center:"c",top:"t",top_left:"tl",top_right:"tr",bottom:"b",bottom_left:"bl",bottom_right:"br",left:"l",right:"r"},l={BG:"bg",IMG:"img",SVG:"svg"},g={AUTO:"auto",CLASSIC:"classic",SUPER:"super"},I={classic:1,super:2},L={radius:"0.66",amount:"1.00",threshold:"0.01"},p={uri:"",css:{img:{},container:{}},attr:{img:{},container:{}},transformed:!1},E=25e6,f=[1.5,2,4],m={HIGH:{size:196e4,quality:90,maxUpscale:1},MEDIUM:{size:36e4,quality:85,maxUpscale:1},LOW:{size:16e4,quality:80,maxUpscale:1.2},TINY:{size:0,quality:80,maxUpscale:1.4}},A={HIGH:"HIGH",MEDIUM:"MEDIUM",LOW:"LOW",TINY:"TINY"},G={CONTRAST:"contrast",BRIGHTNESS:"brightness",SATURATION:"saturation",HUE:"hue",BLUR:"blur"},O={JPG:"jpg",JPEG:"jpeg",JPE:"jpe",PNG:"png",WEBP:"webp",WIX_ICO_MP:"wix_ico_mp",WIX_MP:"wix_mp",GIF:"gif",SVG:"svg",UNRECOGNIZED:"unrecognized"},R={AVIF:"AVIF",PAVIF:"PAVIF"};O.JPG,O.JPEG,O.JPE,O.PNG,O.GIF,O.WEBP;function w(t,...e){return function(...i){const n=i[i.length-1]||{},a=[t[0]];return e.forEach((function(e,r){const o=Number.isInteger(e)?i[e]:n[e];a.push(o,t[r+1])})),a.join("")}}function b(t){return t[t.length-1]}const M=[O.PNG,O.JPEG,O.JPG,O.JPE,O.WIX_ICO_MP,O.WIX_MP,O.WEBP],C=[O.JPEG,O.JPG,O.JPE];function F(t,e,i){return i&&e&&!(!(n=e.id)||!n.trim()||"none"===n.toLowerCase())&&Object.values(h).includes(t);var n}function N(t,e,i){return function(t,e,i=!1){return!(P(t)&&e&&!i)}(t,e,i)&&(function(t){return M.includes(B(t))}(t)||function(t,e=!1){return y(t)&&e}(t,i))&&!/(^https?)|(^data)|(^\/\/)/.test(t)}function S(t){return B(t)===O.PNG}function P(t){return B(t)===O.WEBP}function y(t){return B(t)===O.GIF}const k=["/","\\","?","<",">","|","\u201c",":",'"'].map(encodeURIComponent),x=["\\.","\\*"],Y="_";function H(t){return function(t){return C.includes(B(t))}(t)?O.JPG:S(t)?O.PNG:P(t)?O.WEBP:y(t)?O.GIF:O.UNRECOGNIZED}function B(t){return(/[.]([^.]+)$/.exec(t)&&/[.]([^.]+)$/.exec(t)[1]||"").toLowerCase()}function U(t,e,i,n,a){let r;return r=a===u.FILL?function(t,e,i,n){return Math.max(i/t,n/e)}(t,e,i,n):a===u.FIT?function(t,e,i,n){return Math.min(i/t,n/e)}(t,e,i,n):1,r}function $(t,e,i,n,a,r){t=t||n.width,e=e||n.height;const{scaleFactor:o,width:c,height:s}=function(t,e,i,n,a){let r,o=i,c=n;if(r=U(t,e,i,n,a),a===u.FIT&&(o=t*r,c=e*r),o&&c&&o*c>E){const i=Math.sqrt(E/(o*c));o*=i,c*=i,r=U(t,e,o,c,a)}return{scaleFactor:r,width:o,height:c}}(t,e,n.width*a,n.height*a,i);return function(t,e,i,n,a,r,o){const{optimizedScaleFactor:c,upscaleMethodValue:s,forceUSM:h}=function(t,e,i,n){if("auto"===n)return function(t,e){const i=z(t,e);return{optimizedScaleFactor:m[i].maxUpscale,upscaleMethodValue:I.classic,forceUSM:!1}}(t,e);if("super"===n)return function(t){return{optimizedScaleFactor:b(f),upscaleMethodValue:I.super,forceUSM:!(f.includes(t)||t>b(f))}}(i);return function(t,e){const i=z(t,e);return{optimizedScaleFactor:m[i].maxUpscale,upscaleMethodValue:I.classic,forceUSM:!1}}(t,e)}(t,e,r,a);let _=i,T=n;if(r<=c)return{width:_,height:T,scaleFactor:r,upscaleMethodValue:s,forceUSM:h,cssUpscaleNeeded:!1};switch(o){case u.FILL:_=i*(c/r),T=n*(c/r);break;case u.FIT:_=t*c,T=e*c}return{width:_,height:T,scaleFactor:c,upscaleMethodValue:s,forceUSM:h,cssUpscaleNeeded:!0}}(t,e,c,s,r,o,i)}function v(t,e,i,n){const a=V(i)||function(t=_.CENTER){return T[t]}(n);return{x:Math.max(0,Math.min(t.width-e.width,a.x*t.width-e.width/2)),y:Math.max(0,Math.min(t.height-e.height,a.y*t.height-e.height/2)),width:Math.min(t.width,e.width),height:Math.min(t.height,e.height)}}function D(t){return t.alignment&&d[t.alignment]||d[_.CENTER]}function V(t){let e;return!t||"number"!=typeof t.x||isNaN(t.x)||"number"!=typeof t.y||isNaN(t.y)||(e={x:Z(Math.max(0,Math.min(100,t.x))/100,2),y:Z(Math.max(0,Math.min(100,t.y))/100,2)}),e}function z(t,e){const i=t*e;return i>m[A.HIGH].size?A.HIGH:i>m[A.MEDIUM].size?A.MEDIUM:i>m[A.LOW].size?A.LOW:A.TINY}function Z(t,e){const i=Math.pow(10,e||0);return(t*i/i).toFixed(e)}function j(t){return t&&t.upscaleMethod&&g[t.upscaleMethod.toUpperCase()]||g.AUTO}function W(t,e){return B(t)===O.GIF||B(t)===O.WEBP&&e}const q={isMobile:!1},J=function(t){return q[t]},X=function(t,e){q[t]=e};function Q(){if("undefined"!=typeof window&&"undefined"!=typeof navigator){const t=window.matchMedia&&window.matchMedia("(max-width: 767px)").matches,e=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);X("isMobile",t&&e)}}function K(t,e){const i={css:{container:{}}},{css:n}=i,{fittingType:a}=t;switch(a){case h.ORIGINAL_SIZE:case h.LEGACY_ORIGINAL_SIZE:case h.LEGACY_STRIP_ORIGINAL_SIZE:n.container.backgroundSize="auto",n.container.backgroundRepeat="no-repeat";break;case h.SCALE_TO_FIT:case h.LEGACY_STRIP_SCALE_TO_FIT:n.container.backgroundSize="contain",n.container.backgroundRepeat="no-repeat";break;case h.STRETCH:n.container.backgroundSize="100% 100%",n.container.backgroundRepeat="no-repeat";break;case h.SCALE_TO_FILL:case h.LEGACY_STRIP_SCALE_TO_FILL:n.container.backgroundSize="cover",n.container.backgroundRepeat="no-repeat";break;case h.TILE_HORIZONTAL:case h.LEGACY_STRIP_TILE_HORIZONTAL:n.container.backgroundSize="auto",n.container.backgroundRepeat="repeat-x";break;case h.TILE_VERTICAL:case h.LEGACY_STRIP_TILE_VERTICAL:n.container.backgroundSize="auto",n.container.backgroundRepeat="repeat-y";break;case h.TILE:case h.LEGACY_STRIP_TILE:n.container.backgroundSize="auto",n.container.backgroundRepeat="repeat";break;case h.LEGACY_STRIP_FIT_AND_TILE:n.container.backgroundSize="contain",n.container.backgroundRepeat="repeat";break;case h.FIT_AND_TILE:case h.LEGACY_BG_FIT_AND_TILE:n.container.backgroundSize="auto",n.container.backgroundRepeat="repeat";break;case h.LEGACY_BG_FIT_AND_TILE_HORIZONTAL:n.container.backgroundSize="auto",n.container.backgroundRepeat="repeat-x";break;case h.LEGACY_BG_FIT_AND_TILE_VERTICAL:n.container.backgroundSize="auto",n.container.backgroundRepeat="repeat-y";break;case h.LEGACY_BG_NORMAL:n.container.backgroundSize="auto",n.container.backgroundRepeat="no-repeat"}switch(e.alignment){case _.CENTER:n.container.backgroundPosition="center center";break;case _.LEFT:n.container.backgroundPosition="left center";break;case _.RIGHT:n.container.backgroundPosition="right center";break;case _.TOP:n.container.backgroundPosition="center top";break;case _.BOTTOM:n.container.backgroundPosition="center bottom";break;case _.TOP_RIGHT:n.container.backgroundPosition="right top";break;case _.TOP_LEFT:n.container.backgroundPosition="left top";break;case _.BOTTOM_RIGHT:n.container.backgroundPosition="right bottom";break;case _.BOTTOM_LEFT:n.container.backgroundPosition="left bottom"}return i}const tt={[_.CENTER]:"center",[_.TOP]:"top",[_.TOP_LEFT]:"top left",[_.TOP_RIGHT]:"top right",[_.BOTTOM]:"bottom",[_.BOTTOM_LEFT]:"bottom left",[_.BOTTOM_RIGHT]:"bottom right",[_.LEFT]:"left",[_.RIGHT]:"right"},et={position:"absolute",top:"auto",right:"auto",bottom:"auto",left:"auto"};function it(t,e){const i={css:{container:{},img:{}}},{css:n}=i,{fittingType:a}=t,r=e.alignment;switch(n.container.position="relative",a){case h.ORIGINAL_SIZE:case h.LEGACY_ORIGINAL_SIZE:t.parts&&t.parts.length?(n.img.width=t.parts[0].width,n.img.height=t.parts[0].height):(n.img.width=t.src.width,n.img.height=t.src.height);break;case h.SCALE_TO_FIT:case h.LEGACY_FIT_WIDTH:case h.LEGACY_FIT_HEIGHT:case h.LEGACY_FULL:n.img.width=e.width,n.img.height=e.height,n.img.objectFit="contain",n.img.objectPosition=tt[r]||"unset";break;case h.LEGACY_BG_NORMAL:n.img.width="100%",n.img.height="100%",n.img.objectFit="none",n.img.objectPosition=tt[r]||"unset";break;case h.STRETCH:n.img.width=e.width,n.img.height=e.height,n.img.objectFit="fill";break;case h.SCALE_TO_FILL:n.img.width=e.width,n.img.height=e.height,n.img.objectFit="cover"}if("number"==typeof n.img.width&&"number"==typeof n.img.height&&(n.img.width!==e.width||n.img.height!==e.height)){const t=Math.round((e.height-n.img.height)/2),i=Math.round((e.width-n.img.width)/2);Object.assign(n.img,et,function(t,e,i){return{[_.TOP_LEFT]:{top:0,left:0},[_.TOP_RIGHT]:{top:0,right:0},[_.TOP]:{top:0,left:e},[_.BOTTOM_LEFT]:{bottom:0,left:0},[_.BOTTOM_RIGHT]:{bottom:0,right:0},[_.BOTTOM]:{bottom:0,left:e},[_.RIGHT]:{top:t,right:0},[_.LEFT]:{top:t,left:0},[_.CENTER]:{width:i.width,height:i.height,objectFit:"none"}}}(t,i,e)[r])}return i}function nt(t,e){const i={css:{container:{}},attr:{container:{},img:{}}},{css:n,attr:a}=i,{fittingType:r}=t,o=e.alignment,{width:c,height:s}=t.src;let T;switch(n.container.position="relative",r){case h.ORIGINAL_SIZE:case h.LEGACY_ORIGINAL_SIZE:case h.TILE:t.parts&&t.parts.length?(a.img.width=t.parts[0].width,a.img.height=t.parts[0].height):(a.img.width=c,a.img.height=s),a.img.preserveAspectRatio="xMidYMid slice";break;case h.SCALE_TO_FIT:case h.LEGACY_FIT_WIDTH:case h.LEGACY_FIT_HEIGHT:case h.LEGACY_FULL:a.img.width="100%",a.img.height="100%",a.img.transform="",a.img.preserveAspectRatio="";break;case h.STRETCH:a.img.width=e.width,a.img.height=e.height,a.img.x=0,a.img.y=0,a.img.transform="",a.img.preserveAspectRatio="none";break;case h.SCALE_TO_FILL:N(t.src.id)?(a.img.width=e.width,a.img.height=e.height):(T=function(t,e,i,n,a){const r=U(t,e,i,n,a);return{width:Math.round(t*r),height:Math.round(e*r)}}(c,s,e.width,e.height,u.FILL),a.img.width=T.width,a.img.height=T.height),a.img.x=0,a.img.y=0,a.img.transform="",a.img.preserveAspectRatio="xMidYMid slice"}if("number"==typeof a.img.width&&"number"==typeof a.img.height&&(a.img.width!==e.width||a.img.height!==e.height)){let t,i,n=0,c=0;r===h.TILE?(t=e.width%a.img.width,i=e.height%a.img.height):(t=e.width-a.img.width,i=e.height-a.img.height);const s=Math.round(t/2),u=Math.round(i/2);switch(o){case _.TOP_LEFT:n=0,c=0;break;case _.TOP:n=s,c=0;break;case _.TOP_RIGHT:n=t,c=0;break;case _.LEFT:n=0,c=u;break;case _.CENTER:n=s,c=u;break;case _.RIGHT:n=t,c=u;break;case _.BOTTOM_LEFT:n=0,c=i;break;case _.BOTTOM:n=s,c=i;break;case _.BOTTOM_RIGHT:n=t,c=i}a.img.x=n,a.img.y=c}return a.container.width=e.width,a.container.height=e.height,a.container.viewBox=[0,0,e.width,e.height].join(" "),i}function at(t,e,i){let n;switch(e.crop&&(n=function(t,e){const i=Math.max(0,Math.min(t.width,e.x+e.width)-Math.max(0,e.x)),n=Math.max(0,Math.min(t.height,e.y+e.height)-Math.max(0,e.y));return i&&n&&(t.width!==i||t.height!==n)?{x:Math.max(0,e.x),y:Math.max(0,e.y),width:i,height:n}:null}(e,e.crop),n&&(t.src.width=n.width,t.src.height=n.height,t.src.isCropped=!0,t.parts.push(ot(n)))),t.fittingType){case h.SCALE_TO_FIT:case h.LEGACY_FIT_WIDTH:case h.LEGACY_FIT_HEIGHT:case h.LEGACY_FULL:case h.FIT_AND_TILE:case h.LEGACY_BG_FIT_AND_TILE:case h.LEGACY_BG_FIT_AND_TILE_HORIZONTAL:case h.LEGACY_BG_FIT_AND_TILE_VERTICAL:case h.LEGACY_BG_NORMAL:t.parts.push(rt(t,i));break;case h.SCALE_TO_FILL:t.parts.push(function(t,e){const i=$(t.src.width,t.src.height,u.FILL,e,t.devicePixelRatio,t.upscaleMethod),n=V(t.focalPoint);return{transformType:n?u.FILL_FOCAL:u.FILL,width:Math.round(i.width),height:Math.round(i.height),alignment:D(e),focalPointX:n&&n.x,focalPointY:n&&n.y,upscale:i.scaleFactor>1,forceUSM:i.forceUSM,scaleFactor:i.scaleFactor,cssUpscaleNeeded:i.cssUpscaleNeeded,upscaleMethodValue:i.upscaleMethodValue}}(t,i));break;case h.STRETCH:t.parts.push(function(t,e){const i=U(t.src.width,t.src.height,e.width,e.height,u.FILL),n={...e};return n.width=t.src.width*i,n.height=t.src.height*i,rt(t,n)}(t,i));break;case h.TILE_HORIZONTAL:case h.TILE_VERTICAL:case h.TILE:case h.LEGACY_ORIGINAL_SIZE:case h.ORIGINAL_SIZE:n=v(t.src,i,t.focalPoint,i.alignment),t.src.isCropped?(Object.assign(t.parts[0],n),t.src.width=n.width,t.src.height=n.height):t.parts.push(ot(n));break;case h.LEGACY_STRIP_TILE_HORIZONTAL:case h.LEGACY_STRIP_TILE_VERTICAL:case h.LEGACY_STRIP_TILE:case h.LEGACY_STRIP_ORIGINAL_SIZE:t.parts.push(function(t){return{transformType:u.LEGACY_CROP,width:Math.round(t.width),height:Math.round(t.height),alignment:D(t),upscale:!1,forceUSM:!1,scaleFactor:1,cssUpscaleNeeded:!1}}(i));break;case h.LEGACY_STRIP_SCALE_TO_FIT:case h.LEGACY_STRIP_FIT_AND_TILE:t.parts.push(function(t){return{transformType:u.FIT,width:Math.round(t.width),height:Math.round(t.height),upscale:!1,forceUSM:!0,scaleFactor:1,cssUpscaleNeeded:!1}}(i));break;case h.LEGACY_STRIP_SCALE_TO_FILL:t.parts.push(function(t){return{transformType:u.LEGACY_FILL,width:Math.round(t.width),height:Math.round(t.height),alignment:D(t),upscale:!1,forceUSM:!0,scaleFactor:1,cssUpscaleNeeded:!1}}(i))}}function rt(t,e){const i=$(t.src.width,t.src.height,u.FIT,e,t.devicePixelRatio,t.upscaleMethod);return{transformType:!t.src.width||!t.src.height?u.FIT:u.FILL,width:Math.round(i.width),height:Math.round(i.height),alignment:d.center,upscale:i.scaleFactor>1,forceUSM:i.forceUSM,scaleFactor:i.scaleFactor,cssUpscaleNeeded:i.cssUpscaleNeeded,upscaleMethodValue:i.upscaleMethodValue}}function ot(t){return{transformType:u.CROP,x:Math.round(t.x),y:Math.round(t.y),width:Math.round(t.width),height:Math.round(t.height),upscale:!1,forceUSM:!1,scaleFactor:1,cssUpscaleNeeded:!1}}function ct(t,e){e=e||{},t.quality=function(t,e){const i=t.fileType===O.PNG,n=t.fileType===O.JPG,a=t.fileType===O.WEBP,r=n||i||a;if(r){const n=b(t.parts),a=(o=n.width,c=n.height,m[z(o,c)].quality);let r=e.quality&&e.quality>=5&&e.quality<=90?e.quality:a;return r=i?r+5:r,r}var o,c;return 0}(t,e),t.progressive=function(t){return!1!==t.progressive}(e),t.watermark=function(t){return t.watermark}(e),t.autoEncode=e.autoEncode??!0,t.encoding=e?.encoding,t.unsharpMask=function(t,e){if(function(t){const e="number"==typeof(t=t||{}).radius&&!isNaN(t.radius)&&t.radius>=.1&&t.radius<=500,i="number"==typeof t.amount&&!isNaN(t.amount)&&t.amount>=0&&t.amount<=10,n="number"==typeof t.threshold&&!isNaN(t.threshold)&&t.threshold>=0&&t.threshold<=255;return e&&i&&n}(e.unsharpMask))return{radius:Z(e.unsharpMask?.radius,2),amount:Z(e.unsharpMask?.amount,2),threshold:Z(e.unsharpMask?.threshold,2)};if(("number"!=typeof(i=(i=e.unsharpMask)||{}).radius||isNaN(i.radius)||0!==i.radius||"number"!=typeof i.amount||isNaN(i.amount)||0!==i.amount||"number"!=typeof i.threshold||isNaN(i.threshold)||0!==i.threshold)&&function(t){const e=b(t.parts);return!(e.scaleFactor>=1)||e.forceUSM||e.transformType===u.FIT}(t))return L;var i;return}(t,e),t.filters=function(t){const e=t.filters||{},i={};st(e[G.CONTRAST],-100,100)&&(i[G.CONTRAST]=e[G.CONTRAST]);st(e[G.BRIGHTNESS],-100,100)&&(i[G.BRIGHTNESS]=e[G.BRIGHTNESS]);st(e[G.SATURATION],-100,100)&&(i[G.SATURATION]=e[G.SATURATION]);st(e[G.HUE],-180,180)&&(i[G.HUE]=e[G.HUE]);st(e[G.BLUR],0,100)&&(i[G.BLUR]=e[G.BLUR]);return i}(e)}function st(t,e,i){return"number"==typeof t&&!isNaN(t)&&0!==t&&t>=e&&t<=i}function ht(t,e,i,n){const r=function(t){return t?.isSEOBot??!1}(n),o=H(e.id),c=function(t,e){const i=/\.([^.]*)$/,n=new RegExp(`(${k.concat(x).join("|")})`,"g");if(e&&e.length){let t=e;const a=e.match(i);return a&&M.includes(a[1])&&(t=e.replace(i,"")),encodeURIComponent(t).replace(n,Y)}const a=t.match(/\/(.*?)$/);return(a?a[1]:t).replace(i,"")}(e.id,e.name),s=r?1:function(t){return Math.min(t.pixelAspectRatio||1,a)}(i),h=B(e.id),u=h,_=N(e.id,n?.hasAnimation,n?.allowAnimatedTransform),T={fileName:c,fileExtension:h,fileType:o,fittingType:t,preferredExtension:u,src:{id:e.id,width:e.width,height:e.height,isCropped:!1,isAnimated:W(e.id,n?.hasAnimation)},focalPoint:{x:e.focalPoint&&e.focalPoint.x,y:e.focalPoint&&e.focalPoint.y},parts:[],devicePixelRatio:s,quality:0,upscaleMethod:j(n),progressive:!0,watermark:"",unsharpMask:{},filters:{},transformed:_};return _&&(at(T,e,i),ct(T,n)),T}function ut(t,e,i){const n={...i},a=J("isMobile");switch(t){case h.LEGACY_BG_FIT_AND_TILE:case h.LEGACY_BG_FIT_AND_TILE_HORIZONTAL:case h.LEGACY_BG_FIT_AND_TILE_VERTICAL:case h.LEGACY_BG_NORMAL:const t=a?c:r,i=a?s:o;n.width=Math.min(t,e.width),n.height=Math.min(i,Math.round(n.width/(e.width/e.height))),n.pixelAspectRatio=1}return n}const _t=w`fit/w_${"width"},h_${"height"}`,Tt=w`fill/w_${"width"},h_${"height"},al_${"alignment"}`,dt=w`fill/w_${"width"},h_${"height"},fp_${"focalPointX"}_${"focalPointY"}`,lt=w`crop/x_${"x"},y_${"y"},w_${"width"},h_${"height"}`,gt=w`crop/w_${"width"},h_${"height"},al_${"alignment"}`,It=w`fill/w_${"width"},h_${"height"},al_${"alignment"}`,Lt=w`,lg_${"upscaleMethodValue"}`,pt=w`,q_${"quality"}`,Et=w`,quality_auto`,ft=w`,usm_${"radius"}_${"amount"}_${"threshold"}`,mt=w`,bl`,At=w`,wm_${"watermark"}`,Gt={[G.CONTRAST]:w`,con_${"contrast"}`,[G.BRIGHTNESS]:w`,br_${"brightness"}`,[G.SATURATION]:w`,sat_${"saturation"}`,[G.HUE]:w`,hue_${"hue"}`,[G.BLUR]:w`,blur_${"blur"}`},Ot=w`,enc_auto`,Rt=w`,enc_avif`,wt=w`,enc_pavif`,bt=w`,pstr`;function Mt(t,e,i,a={},r){if(N(e.id,a?.hasAnimation,a?.allowAnimatedTransform)){if(P(e.id)){const{alignment:n,...o}=i;e.focalPoint={x:void 0,y:void 0},delete e?.crop,r=ht(t,e,o,a)}else r=r||ht(t,e,i,a);return function(t){const e=[];t.parts.forEach((t=>{switch(t.transformType){case u.CROP:e.push(lt(t));break;case u.LEGACY_CROP:e.push(gt(t));break;case u.LEGACY_FILL:let i=It(t);t.upscale&&(i+=Lt(t)),e.push(i);break;case u.FIT:let n=_t(t);t.upscale&&(n+=Lt(t)),e.push(n);break;case u.FILL:let a=Tt(t);t.upscale&&(a+=Lt(t)),e.push(a);break;case u.FILL_FOCAL:let r=dt(t);t.upscale&&(r+=Lt(t)),e.push(r)}}));let i=e.join("/");return t.quality&&(i+=pt(t)),t.unsharpMask&&(i+=ft(t.unsharpMask)),t.progressive||(i+=mt(t)),t.watermark&&(i+=At(t)),t.filters&&(i+=Object.keys(t.filters).map((e=>Gt[e](t.filters))).join("")),t.fileType!==O.GIF&&(t.encoding===R.AVIF?(i+=Rt(t),i+=Et(t)):t.encoding===R.PAVIF?(i+=wt(t),i+=Et(t)):t.autoEncode&&(i+=Ot(t))),t.src?.isAnimated&&t.transformed&&(i+=bt(t)),`${t.src.id}/${n}/${i}/${t.fileName}.${t.preferredExtension}`}(r)}return e.id}const Ct={[_.CENTER]:"50% 50%",[_.TOP_LEFT]:"0% 0%",[_.TOP_RIGHT]:"100% 0%",[_.TOP]:"50% 0%",[_.BOTTOM_LEFT]:"0% 100%",[_.BOTTOM_RIGHT]:"100% 100%",[_.BOTTOM]:"50% 100%",[_.RIGHT]:"100% 50%",[_.LEFT]:"0% 50%"},Ft=Object.entries(Ct).reduce(((t,[e,i])=>(t[i]=e,t)),{}),Nt=[h.TILE,h.TILE_HORIZONTAL,h.TILE_VERTICAL,h.LEGACY_BG_FIT_AND_TILE,h.LEGACY_BG_FIT_AND_TILE_HORIZONTAL,h.LEGACY_BG_FIT_AND_TILE_VERTICAL],St=[h.LEGACY_ORIGINAL_SIZE,h.ORIGINAL_SIZE,h.LEGACY_BG_NORMAL];function Pt(t,e,{width:i,height:n}){return t===h.TILE&&e.width>i&&e.height>n}function yt(t,{width:e,height:i}){if(!e||!i){const n=e||Math.min(980,t.width),a=n/t.width;return{width:n,height:i||t.height*a}}return{width:e,height:i}}function kt(t,e,i,n="center"){const a={img:{},container:{}};if(t===h.SCALE_TO_FILL){const t=e.focalPoint&&function(t){const e=`${t.x}% ${t.y}%`;return Ft[e]||""}(e.focalPoint),r=t||n;e.focalPoint&&!t?a.img={objectPosition:xt(e,i,e.focalPoint)}:a.img={objectPosition:Ct[r]}}else[h.LEGACY_ORIGINAL_SIZE,h.ORIGINAL_SIZE].includes(t)?a.img={objectFit:"none",top:"auto",left:"auto",right:"auto",bottom:"auto"}:Nt.includes(t)&&(a.container={backgroundSize:`${e.width}px ${e.height}px`});return a}function xt(t,e,i){const{width:n,height:a}=t,{width:r,height:o}=e,{x:c,y:s}=i;if(!r||!o)return`${c}% ${s}%`;const h=Math.max(r/n,o/a),u=n*h,_=a*h,T=Math.max(0,Math.min(u-r,u*(c/100)-r/2)),d=Math.max(0,Math.min(_-o,_*(s/100)-o/2));return`${T&&Math.floor(T/(u-r)*100)}% ${d&&Math.floor(d/(_-o)*100)}%`}const Yt={width:"100%",height:"100%"};function Ht(t,e,i,n={}){const{autoEncode:a=!0,isSEOBot:r,shouldLoadHQImage:o,hasAnimation:c,allowAnimatedTransform:s,encoding:u}=n;if(!F(t,e,i))return p;const _=void 0===s||s,T=N(e.id,c,_);if(!T||o)return Bt(t,e,i,{...n,autoEncode:a,useSrcset:T});const d={...i,...yt(e,i)},{alignment:l,htmlTag:g}=d,I=Pt(t,e,d),L=function(t,e,{width:i,height:n},a=!1){if(a)return{width:i,height:n};const r=!St.includes(t),o=Pt(t,e,{width:i,height:n}),c=!o&&Nt.includes(t),s=c?e.width:i,h=c?e.height:n,u=r?function(t,e){return t>900?e?.05:.15:t>500?e?.1:.18:t>200?.25:1}(s,S(e.id)):1;return{width:o?1920:s*u,height:h*u}}(t,e,d,r),E=function(t,e,i){return i?0:Nt.includes(e)?1:t>200?2:3}(d.width,t,r),f=function(t,e){const i=Nt.includes(t)&&!e;return t===h.SCALE_TO_FILL||i?h.SCALE_TO_FIT:t}(t,I),m=kt(t,e,i,l),{uri:A}=Bt(f,e,{...L,alignment:l,htmlTag:g},{autoEncode:a,filters:E?{blur:E}:{},hasAnimation:c,allowAnimatedTransform:_,encoding:u}),{attr:G={},css:O}=Bt(t,e,{...d,alignment:l,htmlTag:g},{});return O.img=O.img||{},O.container=O.container||{},Object.assign(O.img,m.img,Yt),Object.assign(O.container,m.container),{uri:A,css:O,attr:G,transformed:!0}}function Bt(t,e,i,n){let a={};if(F(t,e,i)){const r=ut(t,e,i),o=ht(t,e,r,n);a.uri=Mt(t,e,r,n,o),n?.useSrcset&&(a.srcset=function(t,e,i,n,a){const r=i.pixelAspectRatio||1;return{dpr:[`${1===r?a.uri:Mt(t,e,{...i,pixelAspectRatio:1},n)} 1x`,`${2===r?a.uri:Mt(t,e,{...i,pixelAspectRatio:2},n)} 2x`]}}(t,e,r,n,a)),Object.assign(a,function(t,e){let i;return i=e.htmlTag===l.BG?K:e.htmlTag===l.SVG?nt:it,i(t,e)}(o,r),{transformed:o.transformed})}else a=p;return a}function Ut(t,e,i,n){if(F(t,e,i)){const a=ut(t,e,i);return{uri:Mt(t,e,a,n||{},ht(t,e,a,n))}}return{uri:""}}const $t="https://static.wixstatic.com/media/",vt=/^media\//i,Dt="undefined"!=typeof window?window.devicePixelRatio:1,Vt=(t,e)=>{const i=e&&e.baseHostURL;return i?`${i}${t}`:(t=>vt.test(t)?`https://static.wixstatic.com/${t}`:`${$t}${t}`)(t)};Q();const zt=(t,e,i)=>{const{displayMode:n,uri:a,width:r,height:o,name:c,crop:s,focalPoint:h,alignType:u,quality:_,upscaleMethod:T,hasAnimation:d,allowAnimatedTransform:l}=t,{srcset:g,css:I}=Bt(n,{id:a,width:r,height:o,name:c,crop:s,focalPoint:h},{width:e,height:i,alignment:u},{focalPoint:h,name:c,quality:_?.quality,upscaleMethod:T,hasAnimation:d,allowAnimatedTransform:l,useSrcset:!0});return{srcset:g?.dpr?.map((t=>/^[a-z]+:/.test(t)?t:`${jt}${t}`)).join(", ")||"",css:I}};Q();const Zt={getScaleToFitImageURL:function(t,e,i,n,a,r){const o=Ut(h.SCALE_TO_FIT,{id:t,width:e,height:i,name:r&&r.name},{width:n,height:a,htmlTag:l.IMG,alignment:_.CENTER,pixelAspectRatio:r?.devicePixelRatio??Dt},r);return Vt(o.uri,r)},getScaleToFillImageURL:function(t,e,i,n,a,r){const o=Ut(h.SCALE_TO_FILL,{id:t,width:e,height:i,name:r&&r.name,focalPoint:{x:r&&r.focalPoint&&r.focalPoint.x,y:r&&r.focalPoint&&r.focalPoint.y}},{width:n,height:a,htmlTag:l.IMG,alignment:_.CENTER,pixelAspectRatio:r?.devicePixelRatio??Dt},r);return Vt(o.uri,r)},getCropImageURL:function(t,e,i,n,a,r,o,c,s,u){const T=Ut(h.SCALE_TO_FILL,{id:t,width:e,height:i,name:u&&u.name,crop:{x:n,y:a,width:r,height:o}},{width:c,height:s,htmlTag:l.IMG,alignment:_.CENTER,pixelAspectRatio:u?.devicePixelRatio??Dt},u);return Vt(T.uri,u)}},jt=$t},30284:function(t,e,i){i.d(e,{vO:function(){return _},$A:function(){return O},Nk:function(){return h},bQ:function(){return Mt},QC:function(){return H}});const n="v1",a=2,r=1920,o=1920,c=1e3,s=1e3,h={SCALE_TO_FILL:"fill",SCALE_TO_FIT:"fit",STRETCH:"stretch",ORIGINAL_SIZE:"original_size",TILE:"tile",TILE_HORIZONTAL:"tile_horizontal",TILE_VERTICAL:"tile_vertical",FIT_AND_TILE:"fit_and_tile",LEGACY_STRIP_TILE:"legacy_strip_tile",LEGACY_STRIP_TILE_HORIZONTAL:"legacy_strip_tile_horizontal",LEGACY_STRIP_TILE_VERTICAL:"legacy_strip_tile_vertical",LEGACY_STRIP_SCALE_TO_FILL:"legacy_strip_fill",LEGACY_STRIP_SCALE_TO_FIT:"legacy_strip_fit",LEGACY_STRIP_FIT_AND_TILE:"legacy_strip_fit_and_tile",LEGACY_STRIP_ORIGINAL_SIZE:"legacy_strip_original_size",LEGACY_ORIGINAL_SIZE:"actual_size",LEGACY_FIT_WIDTH:"fitWidth",LEGACY_FIT_HEIGHT:"fitHeight",LEGACY_FULL:"full",LEGACY_BG_FIT_AND_TILE:"legacy_tile",LEGACY_BG_FIT_AND_TILE_HORIZONTAL:"legacy_tile_horizontal",LEGACY_BG_FIT_AND_TILE_VERTICAL:"legacy_tile_vertical",LEGACY_BG_NORMAL:"legacy_normal"},u={FIT:"fit",FILL:"fill",FILL_FOCAL:"fill_focal",CROP:"crop",LEGACY_CROP:"legacy_crop",LEGACY_FILL:"legacy_fill"},_={CENTER:"center",TOP:"top",TOP_LEFT:"top_left",TOP_RIGHT:"top_right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom_left",BOTTOM_RIGHT:"bottom_right",LEFT:"left",RIGHT:"right"},T={[_.CENTER]:{x:.5,y:.5},[_.TOP_LEFT]:{x:0,y:0},[_.TOP_RIGHT]:{x:1,y:0},[_.TOP]:{x:.5,y:0},[_.BOTTOM_LEFT]:{x:0,y:1},[_.BOTTOM_RIGHT]:{x:1,y:1},[_.BOTTOM]:{x:.5,y:1},[_.RIGHT]:{x:1,y:.5},[_.LEFT]:{x:0,y:.5}},d={center:"c",top:"t",top_left:"tl",top_right:"tr",bottom:"b",bottom_left:"bl",bottom_right:"br",left:"l",right:"r"},l={BG:"bg",IMG:"img",SVG:"svg"},g={AUTO:"auto",CLASSIC:"classic",SUPER:"super"},I={classic:1,super:2},L={radius:"0.66",amount:"1.00",threshold:"0.01"},p={uri:"",css:{img:{},container:{}},attr:{img:{},container:{}},transformed:!1},E=25e6,f=[1.5,2,4],m={HIGH:{size:196e4,quality:90,maxUpscale:1},MEDIUM:{size:36e4,quality:85,maxUpscale:1},LOW:{size:16e4,quality:80,maxUpscale:1.2},TINY:{size:0,quality:80,maxUpscale:1.4}},A={HIGH:"HIGH",MEDIUM:"MEDIUM",LOW:"LOW",TINY:"TINY"},G={CONTRAST:"contrast",BRIGHTNESS:"brightness",SATURATION:"saturation",HUE:"hue",BLUR:"blur"},O={JPG:"jpg",JPEG:"jpeg",JPE:"jpe",PNG:"png",WEBP:"webp",WIX_ICO_MP:"wix_ico_mp",WIX_MP:"wix_mp",GIF:"gif",SVG:"svg",UNRECOGNIZED:"unrecognized"},R={AVIF:"AVIF",PAVIF:"PAVIF"};O.JPG,O.JPEG,O.JPE,O.PNG,O.GIF,O.WEBP;function w(t,...e){return function(...i){const n=i[i.length-1]||{},a=[t[0]];return e.forEach((function(e,r){const o=Number.isInteger(e)?i[e]:n[e];a.push(o,t[r+1])})),a.join("")}}function b(t){return t[t.length-1]}const M=[O.PNG,O.JPEG,O.JPG,O.JPE,O.WIX_ICO_MP,O.WIX_MP,O.WEBP],C=[O.JPEG,O.JPG,O.JPE];function F(t,e,i){return i&&e&&!(!(n=e.id)||!n.trim()||"none"===n.toLowerCase())&&Object.values(h).includes(t);var n}function N(t,e,i){return function(t,e,i=!1){return!(S(t)&&e&&!i)}(t,e,i)&&(function(t){return M.includes(H(t))}(t)||function(t,e=!1){return P(t)&&e}(t,i))&&!/(^https?)|(^data)|(^\/\/)/.test(t)}function S(t){return H(t)===O.WEBP}function P(t){return H(t)===O.GIF}const y=["/","\\","?","<",">","|","\u201c",":",'"'].map(encodeURIComponent),k=["\\.","\\*"],x="_";function Y(t){return function(t){return C.includes(H(t))}(t)?O.JPG:function(t){return H(t)===O.PNG}(t)?O.PNG:S(t)?O.WEBP:P(t)?O.GIF:O.UNRECOGNIZED}function H(t){return(/[.]([^.]+)$/.exec(t)&&/[.]([^.]+)$/.exec(t)[1]||"").toLowerCase()}function B(t,e,i,n,a){let r;return r=a===u.FILL?function(t,e,i,n){return Math.max(i/t,n/e)}(t,e,i,n):a===u.FIT?function(t,e,i,n){return Math.min(i/t,n/e)}(t,e,i,n):1,r}function U(t,e,i,n,a,r){t=t||n.width,e=e||n.height;const{scaleFactor:o,width:c,height:s}=function(t,e,i,n,a){let r,o=i,c=n;if(r=B(t,e,i,n,a),a===u.FIT&&(o=t*r,c=e*r),o&&c&&o*c>E){const i=Math.sqrt(E/(o*c));o*=i,c*=i,r=B(t,e,o,c,a)}return{scaleFactor:r,width:o,height:c}}(t,e,n.width*a,n.height*a,i);return function(t,e,i,n,a,r,o){const{optimizedScaleFactor:c,upscaleMethodValue:s,forceUSM:h}=function(t,e,i,n){if("auto"===n)return function(t,e){const i=V(t,e);return{optimizedScaleFactor:m[i].maxUpscale,upscaleMethodValue:I.classic,forceUSM:!1}}(t,e);if("super"===n)return function(t){return{optimizedScaleFactor:b(f),upscaleMethodValue:I.super,forceUSM:!(f.includes(t)||t>b(f))}}(i);return function(t,e){const i=V(t,e);return{optimizedScaleFactor:m[i].maxUpscale,upscaleMethodValue:I.classic,forceUSM:!1}}(t,e)}(t,e,r,a);let _=i,T=n;if(r<=c)return{width:_,height:T,scaleFactor:r,upscaleMethodValue:s,forceUSM:h,cssUpscaleNeeded:!1};switch(o){case u.FILL:_=i*(c/r),T=n*(c/r);break;case u.FIT:_=t*c,T=e*c}return{width:_,height:T,scaleFactor:c,upscaleMethodValue:s,forceUSM:h,cssUpscaleNeeded:!0}}(t,e,c,s,r,o,i)}function $(t,e,i,n){const a=D(i)||function(t=_.CENTER){return T[t]}(n);return{x:Math.max(0,Math.min(t.width-e.width,a.x*t.width-e.width/2)),y:Math.max(0,Math.min(t.height-e.height,a.y*t.height-e.height/2)),width:Math.min(t.width,e.width),height:Math.min(t.height,e.height)}}function v(t){return t.alignment&&d[t.alignment]||d[_.CENTER]}function D(t){let e;return!t||"number"!=typeof t.x||isNaN(t.x)||"number"!=typeof t.y||isNaN(t.y)||(e={x:z(Math.max(0,Math.min(100,t.x))/100,2),y:z(Math.max(0,Math.min(100,t.y))/100,2)}),e}function V(t,e){const i=t*e;return i>m[A.HIGH].size?A.HIGH:i>m[A.MEDIUM].size?A.MEDIUM:i>m[A.LOW].size?A.LOW:A.TINY}function z(t,e){const i=Math.pow(10,e||0);return(t*i/i).toFixed(e)}function Z(t){return t&&t.upscaleMethod&&g[t.upscaleMethod.toUpperCase()]||g.AUTO}function j(t,e){return H(t)===O.GIF||H(t)===O.WEBP&&e}const W={isMobile:!1},q=function(t){return W[t]};function J(){if("undefined"!=typeof window&&"undefined"!=typeof navigator){const e=window.matchMedia&&window.matchMedia("(max-width: 767px)").matches,i=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);t=e&&i,W["isMobile"]=t}var t}function X(t,e){const i={css:{container:{}}},{css:n}=i,{fittingType:a}=t;switch(a){case h.ORIGINAL_SIZE:case h.LEGACY_ORIGINAL_SIZE:case h.LEGACY_STRIP_ORIGINAL_SIZE:n.container.backgroundSize="auto",n.container.backgroundRepeat="no-repeat";break;case h.SCALE_TO_FIT:case h.LEGACY_STRIP_SCALE_TO_FIT:n.container.backgroundSize="contain",n.container.backgroundRepeat="no-repeat";break;case h.STRETCH:n.container.backgroundSize="100% 100%",n.container.backgroundRepeat="no-repeat";break;case h.SCALE_TO_FILL:case h.LEGACY_STRIP_SCALE_TO_FILL:n.container.backgroundSize="cover",n.container.backgroundRepeat="no-repeat";break;case h.TILE_HORIZONTAL:case h.LEGACY_STRIP_TILE_HORIZONTAL:n.container.backgroundSize="auto",n.container.backgroundRepeat="repeat-x";break;case h.TILE_VERTICAL:case h.LEGACY_STRIP_TILE_VERTICAL:n.container.backgroundSize="auto",n.container.backgroundRepeat="repeat-y";break;case h.TILE:case h.LEGACY_STRIP_TILE:n.container.backgroundSize="auto",n.container.backgroundRepeat="repeat";break;case h.LEGACY_STRIP_FIT_AND_TILE:n.container.backgroundSize="contain",n.container.backgroundRepeat="repeat";break;case h.FIT_AND_TILE:case h.LEGACY_BG_FIT_AND_TILE:n.container.backgroundSize="auto",n.container.backgroundRepeat="repeat";break;case h.LEGACY_BG_FIT_AND_TILE_HORIZONTAL:n.container.backgroundSize="auto",n.container.backgroundRepeat="repeat-x";break;case h.LEGACY_BG_FIT_AND_TILE_VERTICAL:n.container.backgroundSize="auto",n.container.backgroundRepeat="repeat-y";break;case h.LEGACY_BG_NORMAL:n.container.backgroundSize="auto",n.container.backgroundRepeat="no-repeat"}switch(e.alignment){case _.CENTER:n.container.backgroundPosition="center center";break;case _.LEFT:n.container.backgroundPosition="left center";break;case _.RIGHT:n.container.backgroundPosition="right center";break;case _.TOP:n.container.backgroundPosition="center top";break;case _.BOTTOM:n.container.backgroundPosition="center bottom";break;case _.TOP_RIGHT:n.container.backgroundPosition="right top";break;case _.TOP_LEFT:n.container.backgroundPosition="left top";break;case _.BOTTOM_RIGHT:n.container.backgroundPosition="right bottom";break;case _.BOTTOM_LEFT:n.container.backgroundPosition="left bottom"}return i}const Q={[_.CENTER]:"center",[_.TOP]:"top",[_.TOP_LEFT]:"top left",[_.TOP_RIGHT]:"top right",[_.BOTTOM]:"bottom",[_.BOTTOM_LEFT]:"bottom left",[_.BOTTOM_RIGHT]:"bottom right",[_.LEFT]:"left",[_.RIGHT]:"right"},K={position:"absolute",top:"auto",right:"auto",bottom:"auto",left:"auto"};function tt(t,e){const i={css:{container:{},img:{}}},{css:n}=i,{fittingType:a}=t,r=e.alignment;switch(n.container.position="relative",a){case h.ORIGINAL_SIZE:case h.LEGACY_ORIGINAL_SIZE:t.parts&&t.parts.length?(n.img.width=t.parts[0].width,n.img.height=t.parts[0].height):(n.img.width=t.src.width,n.img.height=t.src.height);break;case h.SCALE_TO_FIT:case h.LEGACY_FIT_WIDTH:case h.LEGACY_FIT_HEIGHT:case h.LEGACY_FULL:n.img.width=e.width,n.img.height=e.height,n.img.objectFit="contain",n.img.objectPosition=Q[r]||"unset";break;case h.LEGACY_BG_NORMAL:n.img.width="100%",n.img.height="100%",n.img.objectFit="none",n.img.objectPosition=Q[r]||"unset";break;case h.STRETCH:n.img.width=e.width,n.img.height=e.height,n.img.objectFit="fill";break;case h.SCALE_TO_FILL:n.img.width=e.width,n.img.height=e.height,n.img.objectFit="cover"}if("number"==typeof n.img.width&&"number"==typeof n.img.height&&(n.img.width!==e.width||n.img.height!==e.height)){const t=Math.round((e.height-n.img.height)/2),i=Math.round((e.width-n.img.width)/2);Object.assign(n.img,K,function(t,e,i){return{[_.TOP_LEFT]:{top:0,left:0},[_.TOP_RIGHT]:{top:0,right:0},[_.TOP]:{top:0,left:e},[_.BOTTOM_LEFT]:{bottom:0,left:0},[_.BOTTOM_RIGHT]:{bottom:0,right:0},[_.BOTTOM]:{bottom:0,left:e},[_.RIGHT]:{top:t,right:0},[_.LEFT]:{top:t,left:0},[_.CENTER]:{width:i.width,height:i.height,objectFit:"none"}}}(t,i,e)[r])}return i}function et(t,e){const i={css:{container:{}},attr:{container:{},img:{}}},{css:n,attr:a}=i,{fittingType:r}=t,o=e.alignment,{width:c,height:s}=t.src;let T;switch(n.container.position="relative",r){case h.ORIGINAL_SIZE:case h.LEGACY_ORIGINAL_SIZE:case h.TILE:t.parts&&t.parts.length?(a.img.width=t.parts[0].width,a.img.height=t.parts[0].height):(a.img.width=c,a.img.height=s),a.img.preserveAspectRatio="xMidYMid slice";break;case h.SCALE_TO_FIT:case h.LEGACY_FIT_WIDTH:case h.LEGACY_FIT_HEIGHT:case h.LEGACY_FULL:a.img.width="100%",a.img.height="100%",a.img.transform="",a.img.preserveAspectRatio="";break;case h.STRETCH:a.img.width=e.width,a.img.height=e.height,a.img.x=0,a.img.y=0,a.img.transform="",a.img.preserveAspectRatio="none";break;case h.SCALE_TO_FILL:N(t.src.id)?(a.img.width=e.width,a.img.height=e.height):(T=function(t,e,i,n,a){const r=B(t,e,i,n,a);return{width:Math.round(t*r),height:Math.round(e*r)}}(c,s,e.width,e.height,u.FILL),a.img.width=T.width,a.img.height=T.height),a.img.x=0,a.img.y=0,a.img.transform="",a.img.preserveAspectRatio="xMidYMid slice"}if("number"==typeof a.img.width&&"number"==typeof a.img.height&&(a.img.width!==e.width||a.img.height!==e.height)){let t,i,n=0,c=0;r===h.TILE?(t=e.width%a.img.width,i=e.height%a.img.height):(t=e.width-a.img.width,i=e.height-a.img.height);const s=Math.round(t/2),u=Math.round(i/2);switch(o){case _.TOP_LEFT:n=0,c=0;break;case _.TOP:n=s,c=0;break;case _.TOP_RIGHT:n=t,c=0;break;case _.LEFT:n=0,c=u;break;case _.CENTER:n=s,c=u;break;case _.RIGHT:n=t,c=u;break;case _.BOTTOM_LEFT:n=0,c=i;break;case _.BOTTOM:n=s,c=i;break;case _.BOTTOM_RIGHT:n=t,c=i}a.img.x=n,a.img.y=c}return a.container.width=e.width,a.container.height=e.height,a.container.viewBox=[0,0,e.width,e.height].join(" "),i}function it(t,e,i){let n;switch(e.crop&&(n=function(t,e){const i=Math.max(0,Math.min(t.width,e.x+e.width)-Math.max(0,e.x)),n=Math.max(0,Math.min(t.height,e.y+e.height)-Math.max(0,e.y));return i&&n&&(t.width!==i||t.height!==n)?{x:Math.max(0,e.x),y:Math.max(0,e.y),width:i,height:n}:null}(e,e.crop),n&&(t.src.width=n.width,t.src.height=n.height,t.src.isCropped=!0,t.parts.push(at(n)))),t.fittingType){case h.SCALE_TO_FIT:case h.LEGACY_FIT_WIDTH:case h.LEGACY_FIT_HEIGHT:case h.LEGACY_FULL:case h.FIT_AND_TILE:case h.LEGACY_BG_FIT_AND_TILE:case h.LEGACY_BG_FIT_AND_TILE_HORIZONTAL:case h.LEGACY_BG_FIT_AND_TILE_VERTICAL:case h.LEGACY_BG_NORMAL:t.parts.push(nt(t,i));break;case h.SCALE_TO_FILL:t.parts.push(function(t,e){const i=U(t.src.width,t.src.height,u.FILL,e,t.devicePixelRatio,t.upscaleMethod),n=D(t.focalPoint);return{transformType:n?u.FILL_FOCAL:u.FILL,width:Math.round(i.width),height:Math.round(i.height),alignment:v(e),focalPointX:n&&n.x,focalPointY:n&&n.y,upscale:i.scaleFactor>1,forceUSM:i.forceUSM,scaleFactor:i.scaleFactor,cssUpscaleNeeded:i.cssUpscaleNeeded,upscaleMethodValue:i.upscaleMethodValue}}(t,i));break;case h.STRETCH:t.parts.push(function(t,e){const i=B(t.src.width,t.src.height,e.width,e.height,u.FILL),n={...e};return n.width=t.src.width*i,n.height=t.src.height*i,nt(t,n)}(t,i));break;case h.TILE_HORIZONTAL:case h.TILE_VERTICAL:case h.TILE:case h.LEGACY_ORIGINAL_SIZE:case h.ORIGINAL_SIZE:n=$(t.src,i,t.focalPoint,i.alignment),t.src.isCropped?(Object.assign(t.parts[0],n),t.src.width=n.width,t.src.height=n.height):t.parts.push(at(n));break;case h.LEGACY_STRIP_TILE_HORIZONTAL:case h.LEGACY_STRIP_TILE_VERTICAL:case h.LEGACY_STRIP_TILE:case h.LEGACY_STRIP_ORIGINAL_SIZE:t.parts.push(function(t){return{transformType:u.LEGACY_CROP,width:Math.round(t.width),height:Math.round(t.height),alignment:v(t),upscale:!1,forceUSM:!1,scaleFactor:1,cssUpscaleNeeded:!1}}(i));break;case h.LEGACY_STRIP_SCALE_TO_FIT:case h.LEGACY_STRIP_FIT_AND_TILE:t.parts.push(function(t){return{transformType:u.FIT,width:Math.round(t.width),height:Math.round(t.height),upscale:!1,forceUSM:!0,scaleFactor:1,cssUpscaleNeeded:!1}}(i));break;case h.LEGACY_STRIP_SCALE_TO_FILL:t.parts.push(function(t){return{transformType:u.LEGACY_FILL,width:Math.round(t.width),height:Math.round(t.height),alignment:v(t),upscale:!1,forceUSM:!0,scaleFactor:1,cssUpscaleNeeded:!1}}(i))}}function nt(t,e){const i=U(t.src.width,t.src.height,u.FIT,e,t.devicePixelRatio,t.upscaleMethod);return{transformType:!t.src.width||!t.src.height?u.FIT:u.FILL,width:Math.round(i.width),height:Math.round(i.height),alignment:d.center,upscale:i.scaleFactor>1,forceUSM:i.forceUSM,scaleFactor:i.scaleFactor,cssUpscaleNeeded:i.cssUpscaleNeeded,upscaleMethodValue:i.upscaleMethodValue}}function at(t){return{transformType:u.CROP,x:Math.round(t.x),y:Math.round(t.y),width:Math.round(t.width),height:Math.round(t.height),upscale:!1,forceUSM:!1,scaleFactor:1,cssUpscaleNeeded:!1}}function rt(t,e){e=e||{},t.quality=function(t,e){const i=t.fileType===O.PNG,n=t.fileType===O.JPG,a=t.fileType===O.WEBP,r=n||i||a;if(r){const n=b(t.parts),a=(o=n.width,c=n.height,m[V(o,c)].quality);let r=e.quality&&e.quality>=5&&e.quality<=90?e.quality:a;return r=i?r+5:r,r}var o,c;return 0}(t,e),t.progressive=function(t){return!1!==t.progressive}(e),t.watermark=function(t){return t.watermark}(e),t.autoEncode=e.autoEncode??!0,t.encoding=e?.encoding,t.unsharpMask=function(t,e){if(function(t){const e="number"==typeof(t=t||{}).radius&&!isNaN(t.radius)&&t.radius>=.1&&t.radius<=500,i="number"==typeof t.amount&&!isNaN(t.amount)&&t.amount>=0&&t.amount<=10,n="number"==typeof t.threshold&&!isNaN(t.threshold)&&t.threshold>=0&&t.threshold<=255;return e&&i&&n}(e.unsharpMask))return{radius:z(e.unsharpMask?.radius,2),amount:z(e.unsharpMask?.amount,2),threshold:z(e.unsharpMask?.threshold,2)};if(("number"!=typeof(i=(i=e.unsharpMask)||{}).radius||isNaN(i.radius)||0!==i.radius||"number"!=typeof i.amount||isNaN(i.amount)||0!==i.amount||"number"!=typeof i.threshold||isNaN(i.threshold)||0!==i.threshold)&&function(t){const e=b(t.parts);return!(e.scaleFactor>=1)||e.forceUSM||e.transformType===u.FIT}(t))return L;var i;return}(t,e),t.filters=function(t){const e=t.filters||{},i={};ot(e[G.CONTRAST],-100,100)&&(i[G.CONTRAST]=e[G.CONTRAST]);ot(e[G.BRIGHTNESS],-100,100)&&(i[G.BRIGHTNESS]=e[G.BRIGHTNESS]);ot(e[G.SATURATION],-100,100)&&(i[G.SATURATION]=e[G.SATURATION]);ot(e[G.HUE],-180,180)&&(i[G.HUE]=e[G.HUE]);ot(e[G.BLUR],0,100)&&(i[G.BLUR]=e[G.BLUR]);return i}(e)}function ot(t,e,i){return"number"==typeof t&&!isNaN(t)&&0!==t&&t>=e&&t<=i}function ct(t,e,i,n){const r=function(t){return t?.isSEOBot??!1}(n),o=Y(e.id),c=function(t,e){const i=/\.([^.]*)$/,n=new RegExp(`(${y.concat(k).join("|")})`,"g");if(e&&e.length){let t=e;const a=e.match(i);return a&&M.includes(a[1])&&(t=e.replace(i,"")),encodeURIComponent(t).replace(n,x)}const a=t.match(/\/(.*?)$/);return(a?a[1]:t).replace(i,"")}(e.id,e.name),s=r?1:function(t){return Math.min(t.pixelAspectRatio||1,a)}(i),h=H(e.id),u=h,_=N(e.id,n?.hasAnimation,n?.allowAnimatedTransform),T={fileName:c,fileExtension:h,fileType:o,fittingType:t,preferredExtension:u,src:{id:e.id,width:e.width,height:e.height,isCropped:!1,isAnimated:j(e.id,n?.hasAnimation)},focalPoint:{x:e.focalPoint&&e.focalPoint.x,y:e.focalPoint&&e.focalPoint.y},parts:[],devicePixelRatio:s,quality:0,upscaleMethod:Z(n),progressive:!0,watermark:"",unsharpMask:{},filters:{},transformed:_};return _&&(it(T,e,i),rt(T,n)),T}function st(t,e,i){const n={...i},a=q("isMobile");switch(t){case h.LEGACY_BG_FIT_AND_TILE:case h.LEGACY_BG_FIT_AND_TILE_HORIZONTAL:case h.LEGACY_BG_FIT_AND_TILE_VERTICAL:case h.LEGACY_BG_NORMAL:const t=a?c:r,i=a?s:o;n.width=Math.min(t,e.width),n.height=Math.min(i,Math.round(n.width/(e.width/e.height))),n.pixelAspectRatio=1}return n}const ht=w`fit/w_${"width"},h_${"height"}`,ut=w`fill/w_${"width"},h_${"height"},al_${"alignment"}`,_t=w`fill/w_${"width"},h_${"height"},fp_${"focalPointX"}_${"focalPointY"}`,Tt=w`crop/x_${"x"},y_${"y"},w_${"width"},h_${"height"}`,dt=w`crop/w_${"width"},h_${"height"},al_${"alignment"}`,lt=w`fill/w_${"width"},h_${"height"},al_${"alignment"}`,gt=w`,lg_${"upscaleMethodValue"}`,It=w`,q_${"quality"}`,Lt=w`,quality_auto`,pt=w`,usm_${"radius"}_${"amount"}_${"threshold"}`,Et=w`,bl`,ft=w`,wm_${"watermark"}`,mt={[G.CONTRAST]:w`,con_${"contrast"}`,[G.BRIGHTNESS]:w`,br_${"brightness"}`,[G.SATURATION]:w`,sat_${"saturation"}`,[G.HUE]:w`,hue_${"hue"}`,[G.BLUR]:w`,blur_${"blur"}`},At=w`,enc_auto`,Gt=w`,enc_avif`,Ot=w`,enc_pavif`,Rt=w`,pstr`;function wt(t,e,i,a={},r){if(N(e.id,a?.hasAnimation,a?.allowAnimatedTransform)){if(S(e.id)){const{alignment:n,...o}=i;e.focalPoint={x:void 0,y:void 0},delete e?.crop,r=ct(t,e,o,a)}else r=r||ct(t,e,i,a);return function(t){const e=[];t.parts.forEach((t=>{switch(t.transformType){case u.CROP:e.push(Tt(t));break;case u.LEGACY_CROP:e.push(dt(t));break;case u.LEGACY_FILL:let i=lt(t);t.upscale&&(i+=gt(t)),e.push(i);break;case u.FIT:let n=ht(t);t.upscale&&(n+=gt(t)),e.push(n);break;case u.FILL:let a=ut(t);t.upscale&&(a+=gt(t)),e.push(a);break;case u.FILL_FOCAL:let r=_t(t);t.upscale&&(r+=gt(t)),e.push(r)}}));let i=e.join("/");return t.quality&&(i+=It(t)),t.unsharpMask&&(i+=pt(t.unsharpMask)),t.progressive||(i+=Et(t)),t.watermark&&(i+=ft(t)),t.filters&&(i+=Object.keys(t.filters).map((e=>mt[e](t.filters))).join("")),t.fileType!==O.GIF&&(t.encoding===R.AVIF?(i+=Gt(t),i+=Lt(t)):t.encoding===R.PAVIF?(i+=Ot(t),i+=Lt(t)):t.autoEncode&&(i+=At(t))),t.src?.isAnimated&&t.transformed&&(i+=Rt(t)),`${t.src.id}/${n}/${i}/${t.fileName}.${t.preferredExtension}`}(r)}return e.id}const bt={[_.CENTER]:"50% 50%",[_.TOP_LEFT]:"0% 0%",[_.TOP_RIGHT]:"100% 0%",[_.TOP]:"50% 0%",[_.BOTTOM_LEFT]:"0% 100%",[_.BOTTOM_RIGHT]:"100% 100%",[_.BOTTOM]:"50% 100%",[_.RIGHT]:"100% 50%",[_.LEFT]:"0% 50%"};Object.entries(bt).reduce(((t,[e,i])=>(t[i]=e,t)),{}),h.TILE,h.TILE_HORIZONTAL,h.TILE_VERTICAL,h.LEGACY_BG_FIT_AND_TILE,h.LEGACY_BG_FIT_AND_TILE_HORIZONTAL,h.LEGACY_BG_FIT_AND_TILE_VERTICAL,h.LEGACY_ORIGINAL_SIZE,h.ORIGINAL_SIZE,h.LEGACY_BG_NORMAL;function Mt(t,e,i,n){let a={};if(F(t,e,i)){const r=st(t,e,i),o=ct(t,e,r,n);a.uri=wt(t,e,r,n,o),n?.useSrcset&&(a.srcset=function(t,e,i,n,a){const r=i.pixelAspectRatio||1;return{dpr:[`${1===r?a.uri:wt(t,e,{...i,pixelAspectRatio:1},n)} 1x`,`${2===r?a.uri:wt(t,e,{...i,pixelAspectRatio:2},n)} 2x`]}}(t,e,r,n,a)),Object.assign(a,function(t,e){let i;return i=e.htmlTag===l.BG?X:e.htmlTag===l.SVG?et:tt,i(t,e)}(o,r),{transformed:o.transformed})}else a=p;return a}"undefined"!=typeof window&&window.devicePixelRatio;J();J()},58307:function(t,e,i){i.d(e,{WD:function(){return n.WD},Wp:function(){return a.Wp},c$:function(){return a.c$},eC:function(){return a.eC},g7:function(){return a.g7},xX:function(){return n.xX}});var n=i(46209),a=i(42658)}}]);
//# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/custom-element-utils.inline.867d0d19.bundle.min.js.map</script>
<script async="" src="https://static.parastorage.com/services/wix-thunderbolt/dist/8875.e26292eb.bundle.min.js"></script>
<script data-url="https://static.parastorage.com/services/wix-thunderbolt/dist/initCustomElements.inline.5dd4addc.bundle.min.js">"use strict";(self.webpackJsonp__wix_thunderbolt_app=self.webpackJsonp__wix_thunderbolt_app||[]).push([[6916,974],{41217:function(e,t,i){i.d(t,{Io:function(){return r},Rb:function(){return o},_b:function(){return n},kU:function(){return s}});function n(e,t,i,n,r){return(r-e)*(n-i)/(t-e)+i}function r(e,t){let[i,n]=e,[r,s]=t;return Math.sqrt((r-i)**2+(s-n)**2)}function s(e){return e*Math.PI/180}function o(e,t,i){void 0===e&&(e=[0,0]),void 0===t&&(t=[0,0]),void 0===i&&(i=0);return(360+i+180*Math.atan2(t[1]-e[1],t[0]-e[0])/Math.PI)%360}},14002:function(e,t,i){var n={};i.r(n),i.d(n,{BackgroundParallax:function(){return u},BackgroundParallaxZoom:function(){return d},BackgroundReveal:function(){return l},BgCloseUp:function(){return h},BgExpand:function(){return m},BgFabeBack:function(){return g},BgFadeIn:function(){return f},BgFadeOut:function(){return v},BgFake3D:function(){return p},BgPanLeft:function(){return w},BgPanRight:function(){return b},BgParallax:function(){return M},BgPullBack:function(){return y},BgReveal:function(){return x},BgRotate:function(){return E},BgShrink:function(){return S},BgSkew:function(){return D},BgUnwind:function(){return R},BgZoomIn:function(){return P},BgZoomOut:function(){return O},ImageParallax:function(){return I},ImageReveal:function(){return L}});var r=i(17709),s=i.n(r),o=i(41217);const a=(e,t)=>({width:e,height:t}),c=(e,t,i)=>({width:e,height:Math.max(t,i)});const u={hasParallax:!0,getMediaDimensions:c},d={hasParallax:!0,getMediaDimensions:c},l={hasParallax:!0,getMediaDimensions:c},h={getMediaDimensions:a},m={getMediaDimensions:a},g={getMediaDimensions:a},f={getMediaDimensions:a},v={getMediaDimensions:a},p={hasParallax:!0,getMediaDimensions:c},w={getMediaDimensions:(e,t)=>({width:1.2*e,height:t})},b={getMediaDimensions:(e,t)=>({width:1.2*e,height:t})},M={hasParallax:!0,getMediaDimensions:c},y={getMediaDimensions:a},x={hasParallax:!0,getMediaDimensions:c},E={getMediaDimensions:(e,t)=>function(e,t,i){const n=(0,o.kU)(i),r=Math.hypot(e,t)/2,s=Math.acos(e/2/r),a=e*Math.abs(Math.cos(n))+t*Math.abs(Math.sin(n)),c=e*Math.abs(Math.sin(n))+t*Math.abs(Math.cos(n));return{width:Math.ceil(n<s?a:2*r),height:Math.ceil(n<(0,o.kU)(90)-s?c:2*r)}}(e,t,22)},S={getMediaDimensions:a},D={getMediaDimensions:(e,t)=>function(e,t,i){const n=(0,o.kU)(i);return{width:e,height:e*Math.tan(n)+t}}(e,t,20)},R={getMediaDimensions:a},P={hasParallax:!0,getMediaDimensions:c},O={getMediaDimensions:(e,t)=>({width:1.15*e,height:1.15*t})},I={getMediaDimensions:(e,t)=>({width:e,height:1.5*t})},L={getMediaDimensions:(e,t,i)=>({width:e,height:i})};var B=i(22538),C=i(58223);var A={imageClientApi:B,...{init:function(e,t=window){!
/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */function(e){if(void 0===e.Reflect||void 0===e.customElements||e.customElements.hasOwnProperty("polyfillWrapFlushCallback"))return;const t=e.HTMLElement;e.HTMLElement=function(){return e.Reflect.construct(t,[],this.constructor)},e.HTMLElement.prototype=t.prototype,e.HTMLElement.prototype.constructor=e.HTMLElement,e.Object.setPrototypeOf(e.HTMLElement,t),e.Object.defineProperty(e.HTMLElement,"name",{value:t.name})}(t);const i={registry:new Set,observe(e){i.registry.add(e)},unobserve(e){i.registry.delete(e)}};e.windowResizeService.init((0,C.vk)((()=>i.registry.forEach((e=>e.reLayout())))),t);const n=(0,C.Aq)(),r=(e,i)=>{void 0===t.customElements.get(e)&&t.customElements.define(e,i)},s=(0,C.yO)({resizeService:n},t);return t.customElementNamespace={WixElement:s},r("wix-element",s),{contextWindow:t,defineWixBgMedia:e=>{const n=(0,C.NL)(s,{windowResizeService:i,...e},t);r("wix-bg-media",n)},defineMultiColumnRepeaterElement:()=>{const e=(0,C._o)();r(C.KU,e)}}}}},H=i(30284);const k={columnCount:1,columns:1,fontWeight:1,lineHeight:1,opacity:1,zIndex:1,zoom:1},U=(e,t)=>(Array.isArray(t)?t:[t]).reduce(((t,i)=>{const n=e[i];return void 0!==n?Object.assign(t,{[i]:n}):t}),{}),W=(e,t)=>e&&t&&Object.keys(t).forEach((i=>{const n=i,r=t[n];void 0!==r?e.style[n]=((e,t)=>"number"!=typeof t||k[e]?t.toString():`${t}px`)(n,r):e.style.removeProperty(n)})),z=(e,t,i)=>{if(!e.targetWidth||!e.targetHeight||!e.imageData.uri)return{uri:"",css:{},transformed:!1};const{imageData:n}=e,r=e.displayMode||H.Nk.SCALE_TO_FILL,s=Object.assign(U(n,["upscaleMethod"]),U(e,["filters","encoding"]),e.quality||n.quality,{hasAnimation:e?.hasAnimation||n?.hasAnimation}),o=e.imageData.devicePixelRatio||t.devicePixelRatio,a=_(o),c=Object.assign(U(n,["width","height","crop","name","focalPoint"]),{id:n.uri}),u={width:e.targetWidth,height:e.targetHeight,htmlTag:i||"img",pixelAspectRatio:a,alignment:e.alignType||H.vO.CENTER},d=(0,H.bQ)(r,c,u,s);return d.uri=T(d.uri,t.staticMediaUrl,t.mediaRootUrl),d},T=(e,t,i)=>{if(/(^https?)|(^data)|(^blob)|(^\/\/)/.test(e))return e;let n=`${t}/`;return e&&(/^micons\//.test(e)?n=i:"ico"===/[^.]+$/.exec(e)?.[0]&&(n=n.replace("media","ficons"))),n+e},_=e=>{const t=window.location.search.split("&").map((e=>e.split("="))).find((e=>e[0]?.toLowerCase().includes("devicepixelratio")));return(t?.[1]?Number(t[1]):null)||e||1},q=e=>e.getAttribute("src"),j=80;var $={measure:function(e,t,i,{containerElm:n,bgEffect:r="none",sourceSets:s},o){const a=i.image,c=i[e],u=(d=o.getScreenHeightOverride?.(),d||document.documentElement.clientHeight||window.innerHeight||0);var d;const l=n?.dataset.mediaHeightOverrideType,h=r&&"none"!==r||s&&s.some((e=>e.scrollEffect)),m=n&&h?n:c,g=window.getComputedStyle(c).getPropertyValue("--bg-scrub-effect"),{width:f,height:v}=o.getMediaDimensionsByEffect?.(g||r,m.offsetWidth,m.offsetHeight,u)||{width:c.offsetWidth,height:c.offsetHeight};if(s&&(t.sourceSetsTargetHeights=function(e,t,i,n,r){const s={};return e.forEach((({mediaQuery:e,scrollEffect:o})=>{s[e]=r.getMediaDimensionsByEffect(o,t,i,n).height})),s}(s,m.offsetWidth,m.offsetHeight,u,o)),!a)return;const p=q(a);g&&(t.top=.5*(c.offsetHeight-v),t.left=.5*(c.offsetWidth-f)),t.width=f,t.height=function(e,t){return"fixed"===t||"viewport"===t?document.documentElement.clientHeight+j:e}(v,l),t.screenHeight=u,t.imgSrc=p,t.boundingRect=c.getBoundingClientRect(),t.mediaHeightOverrideType=l,t.srcset=a.srcset},patch:function(e,t,i,n,r,s,o,a,c){if(!Object.keys(t).length)return;const{imageData:u}=n,d=i[e],l=i.image;a&&(u.devicePixelRatio=1);const h=n.targetScale||1,m={...n,...!n.skipMeasure&&{targetWidth:(t.width||0)*h,targetHeight:(t.height||0)*h},displayMode:u.displayMode},g=z(m,r,"img"),f=g?.css?.img||{},v=function(e,t,i,n,r){const s=function(e,t=1){return 1!==t?{...e,width:"100%",height:"100%"}:e}(t,n);if(r&&(delete s.height,s.width="100%"),!e)return s;const o={...s};return"fill"===i?(o.position="absolute",o.top="0"):"fit"===i&&(o.height="100%"),"fixed"===e&&(o["will-change"]="transform"),o.objectPosition&&(o.objectPosition=t.objectPosition.replace(/(center|bottom)$/,"top")),o}(t.mediaHeightOverrideType,f,u.displayMode,h,o);W(l,v),(t.top||t.left)&&W(d,{top:`${t.top}px`,left:`${t.left}px`});const p=g?.uri||"",w=u?.hasAnimation||n?.hasAnimation,b=function(e,t,i){const{sourceSets:n}=t;if(!n||!n.length)return;const r={};return n.forEach((({mediaQuery:n,crop:s,focalPoint:o})=>{const a={...t,targetHeight:(e.sourceSetsTargetHeights||{})[n]||0,imageData:{...t.imageData,crop:s,focalPoint:o}},c=z(a,i,"img");r[n]=c.uri||""})),r}(t,m,r);if(c&&(l.dataset.ssrSrcDone="true"),n.isLQIP&&n.lqipTransition&&!("transitioned"in d.dataset)&&(d.dataset.transitioned="",l.complete?l.onload=function(){l.dataset.loadDone=""}:l.onload=function(){l.complete?l.dataset.loadDone="":l.onload=function(){l.dataset.loadDone=""}}),s){((e,t)=>(0,H.QC)(e)===H.$A.GIF||(0,H.QC)(e)===H.$A.WEBP&&t)(u.uri,w)?(l.setAttribute("fetchpriority","low"),l.setAttribute("loading","lazy"),l.setAttribute("decoding","async")):l.setAttribute("fetchpriority","high"),l.currentSrc!==p&&l.setAttribute("src",p);t.srcset&&!t.srcset.split(", ").some((e=>e.split(" ")[0]===p))&&l.setAttribute("srcset",p),i.picture&&m.sourceSets&&Array.from(i.picture.querySelectorAll("source")).forEach((e=>{const t=e.media||"",i=b?.[t];e.srcset!==i&&e.setAttribute("srcset",i||"")}))}}};const N={parallax:"ImageParallax",fixed:"ImageReveal"};var F=function(e,t,i){return class extends i.HTMLElement{constructor(){super(),this.childListObserver=null,this.timeoutId=null}attributeChangedCallback(e,t){t&&this.reLayout()}connectedCallback(){t.disableImagesLazyLoading?this.reLayout():this.observeIntersect()}disconnectedCallback(){this.unobserveResize(),this.unobserveIntersect(),this.unobserveChildren()}static get observedAttributes(){return["data-image-info"]}reLayout(){const n={},r={},s=this.getAttribute("id"),o=JSON.parse(this.dataset.imageInfo||""),a="true"===this.dataset.isResponsive,{bgEffectName:c}=this.dataset,{scrollEffect:u}=o.imageData,{sourceSets:d}=o,l=c||u&&N[u];d&&d.length&&d.forEach((e=>{e.scrollEffect&&(e.scrollEffect=N[e.scrollEffect])})),n[s]=this,o.containerId&&(n[o.containerId]=i.document.getElementById(`${o.containerId}`));const h=o.containerId?n[o.containerId]:void 0;if(n.image=this.querySelector("img"),n.picture=this.querySelector("picture"),!n.image){const e=this;return void this.observeChildren(e)}this.unobserveChildren(),this.observeChildren(this),e.mutationService.measure((()=>{$.measure(s,r,n,{containerElm:h,bgEffect:l,sourceSets:d},e)}));const m=(i,c)=>{e.mutationService.mutate((()=>{$.patch(s,r,n,o,t,i,a,l,c)}))},g=n.image,f=this.dataset.hasSsrSrc&&!g.dataset.ssrSrcDone;!q(g)||f?m(!0,!0):this.debounceImageLoad(m)}debounceImageLoad(e){clearTimeout(this.timeoutId),this.timeoutId=i.setTimeout((()=>{e(!0)}),250),e(!1)}observeResize(){e.resizeService?.observe(this)}unobserveResize(){e.resizeService?.unobserve(this)}observeIntersect(){e.intersectionService?.observe(this)}unobserveIntersect(){e.intersectionService?.unobserve(this)}observeChildren(e){this.childListObserver||(this.childListObserver=new i.MutationObserver((()=>{this.reLayout()}))),this.childListObserver.observe(e,{childList:!0})}unobserveChildren(){this.childListObserver&&(this.childListObserver.disconnect(),this.childListObserver=null)}}};function Q(e={},t=null,i={}){if("undefined"==typeof window)return;const n={staticMediaUrl:"https://static.wixstatic.com/media",mediaRootUrl:"https://static.wixstatic.com",experiments:{},devicePixelRatio:/iemobile/i.test(navigator.userAgent)?Math.round(window.screen.availWidth/(window.screen.width||window.document.documentElement.clientWidth)):window.devicePixelRatio,...i},r=function(e,t){const i="wow-image";if(void 0===(e=e||window).customElements.get(i)){let n,r;return e.ResizeObserver&&(n=new e.ResizeObserver((e=>e.map((e=>e.target.reLayout()))))),e.IntersectionObserver&&(r=new IntersectionObserver((e=>e.map((e=>{if(e.isIntersecting){const t=e.target;t.unobserveIntersect(),t.observeResize()}return e}))),{rootMargin:"150% 100%"})),function(o){const a=F({resizeService:n,intersectionService:r,mutationService:s(),...t},o,e);e.customElements.define(i,a)}}}(t,e);r&&r(n)}const V=()=>({getSiteScale:()=>{const e=document.querySelector("#site-root");return e?e.getBoundingClientRect().width/e.offsetWidth:1}}),J=()=>{const e={init:e=>new ResizeObserver(e)},t={init:e=>window.addEventListener("resize",e)},i=V();return A.init({resizeService:e,windowResizeService:t,siteService:i})},Z=(e,t,i,r)=>{const{getMediaDimensions:s,...o}=n[e]||{};return s?{...s(t,i,r),...o}:{width:t,height:i,...o}},{experiments:G,media:K,requestUrl:X}=window.viewerModel;((e,t,i,n)=>{const{environmentConsts:r,wixCustomElements:o,media:a,requestUrl:c,mediaServices:u}=((e,t,i,n)=>{const r={staticMediaUrl:e.media.staticMediaUrl,mediaRootUrl:e.media.mediaRootUrl,experiments:{},isViewerMode:!0,devicePixelRatio:/iemobile/i.test(navigator.userAgent)?Math.round(window.screen.availWidth/(window.screen.width||window.document.documentElement.clientWidth)):window.devicePixelRatio,...n},o={mutationService:s(),isExperimentOpen:t=>Boolean(e.experiments[t]),siteService:V()},a={getMediaDimensionsByEffect:Z,...o,...i};return{...e,wixCustomElements:t||J(),services:o,environmentConsts:r,mediaServices:a}})(e,t,i,n),d=o?.contextWindow||window;d.wixCustomElements=o,Object.assign(d.customElementNamespace,{mediaServices:u,environmentConsts:r,requestUrl:c,staticVideoUrl:a.staticVideoUrl}),Q({...u},o.contextWindow,r),o.defineWixBgMedia(u),o.defineMultiColumnRepeaterElement(),window.__imageClientApi__=A.imageClientApi})({experiments:G,media:K,requestUrl:X})}},function(e){e.O(0,[592,8398,8875],(function(){return t=14002,e(e.s=t);var t}));e.O()}]);
//# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/initCustomElements.inline.5dd4addc.bundle.min.js.map</script>


<!-- preloading pre-scripts -->

    
    <link href="https://siteassets.parastorage.com/pages/pages/thunderbolt?beckyExperiments=.DatePickerPortal%2C.TextInputAutoFillFix%2C.WRichTextVerticalTextNowidth%2C.buttonUdp%2C.fetchBlocksDevCenterWidgetIds%2C.fiveGridLineStudioSkins%2C.fixDisabledLinkButtonStyles%2C.fixRatingsInputLeftShift%2C.imageEncodingAVIF%2C.minMaxInCheckboxGroup%2C.motionFeature%2C.removeHeaderFooterWrappers%2C.updateRichTextSemanticClassNamesOnCorvid%2C.useInternalBlocksRefType%2C.useSvgLoaderFeature&blocksBuilderManifestGeneratorVersion=1.92.0&contentType=application%2Fjson&deviceType=Desktop&dfCk=6&dfVersion=1.4131.0&disableStaticPagesUrlHierarchy=false&editorName=Unknown&experiments=dm_deleteLayoutOverridesForRefComponents%2Cdm_fixAnchorUrlFragment%2Cdm_removeTpaChildren%2Cspecs.thunderbolt.use_data_fixed_pages_upstream&externalBaseUrl=https%3A%2F%2Fwww.sheminimalist.com&fileId=a57c037f.bundle.min&formFactor=desktop&hasTPAWorkerOnSite=false&isHttps=true&isInSeo=false&isMultilingualEnabled=false&isPremiumDomain=true&isTrackClicksAnalyticsEnabled=false&isUrlMigrated=true&isWixCodeOnPage=false&isWixCodeOnSite=false&language=pt&languageResolutionMethod=QueryParam&metaSiteId=6b0a6bee-31a6-429c-a658-14585b8be08e&module=thunderbolt-features&oneDocEnabled=true&originalLanguage=pt&pageId=60c39e_9b9f31926d16b8ebb173dccf2ae2b348_4.json&quickActionsMenuEnabled=false&registryLibrariesTopology=%5B%7B%22artifactId%22%3A%22editor-elements%22%2C%22namespace%22%3A%22wixui%22%2C%22url%22%3A%22https%3A%2F%2Fstatic.parastorage.com%2Fservices%2Feditor-elements%2F1.13031.0%22%7D%2C%7B%22artifactId%22%3A%22editor-elements%22%2C%22namespace%22%3A%22dsgnsys%22%2C%22url%22%3A%22https%3A%2F%2Fstatic.parastorage.com%2Fservices%2Feditor-elements%2F1.13031.0%22%7D%5D&remoteWidgetStructureBuilderVersion=1.251.0&siteId=bc3481f0-99f4-4688-a477-89ad817126b6&siteRevision=4&staticHTMLComponentUrl=https%3A%2F%2Fwww-sheminimalist-com.filesusr.com%2F&useSandboxInHTMLComp=false&viewMode=desktop" id="features_masterPage" as="fetch" position="post-scripts" rel="preload" crossorigin="anonymous"></link>

    
    <link href="https://siteassets.parastorage.com/pages/pages/thunderbolt?beckyExperiments=.DatePickerPortal%2C.TextInputAutoFillFix%2C.WRichTextVerticalTextNowidth%2C.buttonUdp%2C.fetchBlocksDevCenterWidgetIds%2C.fiveGridLineStudioSkins%2C.fixDisabledLinkButtonStyles%2C.fixRatingsInputLeftShift%2C.imageEncodingAVIF%2C.minMaxInCheckboxGroup%2C.motionFeature%2C.removeHeaderFooterWrappers%2C.updateRichTextSemanticClassNamesOnCorvid%2C.useInternalBlocksRefType%2C.useSvgLoaderFeature&blocksBuilderManifestGeneratorVersion=1.92.0&contentType=application%2Fjson&deviceType=Desktop&dfCk=6&dfVersion=1.4131.0&disableStaticPagesUrlHierarchy=false&editorName=Unknown&experiments=dm_deleteLayoutOverridesForRefComponents%2Cdm_fixAnchorUrlFragment%2Cdm_removeTpaChildren%2Cspecs.thunderbolt.use_data_fixed_pages_upstream&externalBaseUrl=https%3A%2F%2Fwww.sheminimalist.com&fileId=a57c037f.bundle.min&formFactor=desktop&hasTPAWorkerOnSite=false&isHttps=true&isInSeo=false&isMultilingualEnabled=false&isPremiumDomain=true&isTrackClicksAnalyticsEnabled=false&isUrlMigrated=true&isWixCodeOnPage=false&isWixCodeOnSite=false&language=pt&languageResolutionMethod=QueryParam&metaSiteId=6b0a6bee-31a6-429c-a658-14585b8be08e&module=thunderbolt-features&oneDocEnabled=true&originalLanguage=pt&pageId=60c39e_e54174729ffa0b7d1e45e9a40fb874c9_4.json&quickActionsMenuEnabled=false&registryLibrariesTopology=%5B%7B%22artifactId%22%3A%22editor-elements%22%2C%22namespace%22%3A%22wixui%22%2C%22url%22%3A%22https%3A%2F%2Fstatic.parastorage.com%2Fservices%2Feditor-elements%2F1.13031.0%22%7D%2C%7B%22artifactId%22%3A%22editor-elements%22%2C%22namespace%22%3A%22dsgnsys%22%2C%22url%22%3A%22https%3A%2F%2Fstatic.parastorage.com%2Fservices%2Feditor-elements%2F1.13031.0%22%7D%5D&remoteWidgetStructureBuilderVersion=1.251.0&siteId=bc3481f0-99f4-4688-a477-89ad817126b6&siteRevision=4&staticHTMLComponentUrl=https%3A%2F%2Fwww-sheminimalist-com.filesusr.com%2F&useSandboxInHTMLComp=false&viewMode=desktop" id="features_c1dmp" as="fetch" position="post-scripts" rel="preload" crossorigin="anonymous"></link>

    
    <link href="https://siteassets.parastorage.com/pages/pages/thunderbolt?beckyExperiments=.DatePickerPortal%2C.TextInputAutoFillFix%2C.WRichTextVerticalTextNowidth%2C.buttonUdp%2C.fetchBlocksDevCenterWidgetIds%2C.fiveGridLineStudioSkins%2C.fixDisabledLinkButtonStyles%2C.fixRatingsInputLeftShift%2C.minMaxInCheckboxGroup%2C.updateRichTextSemanticClassNamesOnCorvid%2C.useInternalBlocksRefType&blocksBuilderManifestGeneratorVersion=1.92.0&contentType=application%2Fjson&dfCk=6&dfVersion=1.4131.0&editorName=Unknown&experiments=dm_deleteLayoutOverridesForRefComponents%2Cdm_fixAnchorUrlFragment%2Cdm_removeTpaChildren%2Cspecs.thunderbolt.use_data_fixed_pages_upstream&externalBaseUrl=https%3A%2F%2Fwww.sheminimalist.com&fileId=48976be2.bundle.min&formFactor=desktop&hasTPAWorkerOnSite=false&isHttps=true&isInSeo=false&isPremiumDomain=true&isUrlMigrated=true&isWixCodeOnPage=false&isWixCodeOnSite=false&language=pt&metaSiteId=6b0a6bee-31a6-429c-a658-14585b8be08e&module=thunderbolt-platform&oneDocEnabled=true&originalLanguage=pt&pageId=60c39e_9b9f31926d16b8ebb173dccf2ae2b348_4.json&quickActionsMenuEnabled=false&registryLibrariesTopology=%5B%7B%22artifactId%22%3A%22editor-elements%22%2C%22namespace%22%3A%22wixui%22%2C%22url%22%3A%22https%3A%2F%2Fstatic.parastorage.com%2Fservices%2Feditor-elements%2F1.13031.0%22%7D%2C%7B%22artifactId%22%3A%22editor-elements%22%2C%22namespace%22%3A%22dsgnsys%22%2C%22url%22%3A%22https%3A%2F%2Fstatic.parastorage.com%2Fservices%2Feditor-elements%2F1.13031.0%22%7D%5D&remoteWidgetStructureBuilderVersion=1.251.0&siteId=bc3481f0-99f4-4688-a477-89ad817126b6&siteRevision=4&staticHTMLComponentUrl=https%3A%2F%2Fwww-sheminimalist-com.filesusr.com%2F&viewMode=desktop" id="platform_masterPage" as="fetch" position="post-scripts" rel="preload" crossorigin="anonymous"></link>

    
    <link href="https://siteassets.parastorage.com/pages/pages/thunderbolt?beckyExperiments=.DatePickerPortal%2C.TextInputAutoFillFix%2C.WRichTextVerticalTextNowidth%2C.buttonUdp%2C.fetchBlocksDevCenterWidgetIds%2C.fiveGridLineStudioSkins%2C.fixDisabledLinkButtonStyles%2C.fixRatingsInputLeftShift%2C.minMaxInCheckboxGroup%2C.updateRichTextSemanticClassNamesOnCorvid%2C.useInternalBlocksRefType&blocksBuilderManifestGeneratorVersion=1.92.0&contentType=application%2Fjson&dfCk=6&dfVersion=1.4131.0&editorName=Unknown&experiments=dm_deleteLayoutOverridesForRefComponents%2Cdm_fixAnchorUrlFragment%2Cdm_removeTpaChildren%2Cspecs.thunderbolt.use_data_fixed_pages_upstream&externalBaseUrl=https%3A%2F%2Fwww.sheminimalist.com&fileId=48976be2.bundle.min&formFactor=desktop&hasTPAWorkerOnSite=false&isHttps=true&isInSeo=false&isPremiumDomain=true&isUrlMigrated=true&isWixCodeOnPage=false&isWixCodeOnSite=false&language=pt&metaSiteId=6b0a6bee-31a6-429c-a658-14585b8be08e&module=thunderbolt-platform&oneDocEnabled=true&originalLanguage=pt&pageId=60c39e_e54174729ffa0b7d1e45e9a40fb874c9_4.json&quickActionsMenuEnabled=false&registryLibrariesTopology=%5B%7B%22artifactId%22%3A%22editor-elements%22%2C%22namespace%22%3A%22wixui%22%2C%22url%22%3A%22https%3A%2F%2Fstatic.parastorage.com%2Fservices%2Feditor-elements%2F1.13031.0%22%7D%2C%7B%22artifactId%22%3A%22editor-elements%22%2C%22namespace%22%3A%22dsgnsys%22%2C%22url%22%3A%22https%3A%2F%2Fstatic.parastorage.com%2Fservices%2Feditor-elements%2F1.13031.0%22%7D%5D&remoteWidgetStructureBuilderVersion=1.251.0&siteId=bc3481f0-99f4-4688-a477-89ad817126b6&siteRevision=4&staticHTMLComponentUrl=https%3A%2F%2Fwww-sheminimalist-com.filesusr.com%2F&viewMode=desktop" id="platform_c1dmp" as="fetch" position="post-scripts" rel="preload" crossorigin="anonymous"></link>



    <script id="sentry">
      (function(c,t,u,n,p,l,y,z,v){if(c[l] && c[l].mute) {return;}function e(b){if(!w){w=!0;var d=t.getElementsByTagName(u)[0],a=t.createElement(u);a.src=z;a.crossorigin="anonymous";a.addEventListener("load",function(){try{c[n]=q;c[p]=r;var a=c[l],d=a.init;a.init=function(a){for(var b in a)Object.prototype.hasOwnProperty.call(a,b)&&(v[b]=a[b]);d(v)};B(b,a)}catch(A){console.error(A)}});d.parentNode.insertBefore(a,d)}}function B(b,d){try{for(var a=0;a<b.length;a++)if("function"===typeof b[a])b[a]();var f=m.data,g=!1,h=!1;for(a=0;a<f.length;a++)if(f[a].f){h=!0;var e=f[a];!1===g&&"init"!==e.f&&d.init();g=!0;d[e.f].apply(d,e.a)}!1===h&&d.init();var k=c[n],l=c[p];for(a=0;a<f.length;a++)f[a].e&&k?k.apply(c,f[a].e):f[a].p&&l&&l.apply(c,[f[a].p])}catch(C){console.error(C)}}for(var g=!0,x=!1,k=0;k<document.scripts.length;k++)if(-1<document.scripts[k].src.indexOf(y)){g="no"!==document.scripts[k].getAttribute("data-lazy");break}var w=!1,h=[],m=function(b){(b.e||b.p||b.f&&-1<b.f.indexOf("capture")||b.f&&-1<b.f.indexOf("showReportDialog"))&&g&&e(h);m.data.push(b)};m.data=[];c[l]={onLoad:function(b){h.push(b);g&&!x||e(h)},forceLoad:function(){x=!0;g&&setTimeout(function(){e(h)})}};"init addBreadcrumb captureMessage captureException captureEvent configureScope withScope showReportDialog".split(" ").forEach(function(b){c[l][b]=function(){m({f:b,a:arguments})}});var q=c[n];c[n]=function(b,d,a,f,e){m({e:[].slice.call(arguments)});q&&q.apply(c,arguments)};var r=c[p];c[p]=function(b){m({p:b.reason});r&&r.apply(c,arguments)};g||setTimeout(function(){e(h)})})(window,document,"script","onerror","onunhandledrejection","Sentry","605a7baede844d278b89dc95ae0a9123","https://browser.sentry-cdn.com/6.18.2/bundle.min.js",{"dsn":"https://605a7baede844d278b89dc95ae0a9123@sentry-next.wixpress.com/68", "beforeBreadcrumb": function(b){window.onBeforeSentryBreadcrumb && window.onBeforeSentryBreadcrumb(b)}});
    </script>




<script>
	window.resolveExternalsRegistryPromise = null
    const externalRegistryPromise = new Promise((r) => window.resolveExternalsRegistryPromise = r)
    window.resolveExternalsRegistryModule = (name) => externalRegistryPromise.then(() => window.externalsRegistry[name].onload())
</script>
<script data-url="https://static.parastorage.com/services/wix-thunderbolt/dist/externals-registry.inline.cf90b611.bundle.min.js">"use strict";(self.webpackJsonp__wix_thunderbolt_app=self.webpackJsonp__wix_thunderbolt_app||[]).push([[9420],{42243:function(){window.__imageClientApi__=window.__imageClientApi__||{sdk:{}};const{lodash:e,react:o,reactDOM:n,imageClientApi:a,clientSdk:i}=window.externalsRegistry={lodash:{},react:{},reactDOM:{},imageClientApi:{},clientSdk:{}};a.loaded=new Promise((e=>{a.onload=e})),e.loaded=new Promise((o=>{e.onload=o})),i.loaded=new Promise((e=>{i.onload=e})),window.ReactDOM||(window.reactDOMReference=window.ReactDOM={loading:!0}),n.loaded=new Promise((e=>{n.onload=()=>{Object.assign(window.reactDOMReference||{},window.ReactDOM,{loading:!1}),e()}})),window.React||(window.reactReference=window.React={loading:!0}),o.loaded=new Promise((e=>{o.onload=()=>{Object.assign(window.reactReference||{},window.React,{loading:!1}),e()}})),window.reactAndReactDOMLoaded=Promise.all([o.loaded,n.loaded]),window.resolveExternalsRegistryPromise()}},function(e){var o;o=42243,e(e.s=o)}]);
//# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/externals-registry.inline.cf90b611.bundle.min.js.map</script>

<!-- Add the rest of the ViewerModel -->
<script type="application/json" id="wix-viewer-model">{"siteAssetsTestModuleVersion":"1.334.0","requestUrl":"https:\/\/www.sheminimalist.com\/","siteFeatures":["assetsLoader","businessLogger","captcha","clickHandlerRegistrar","commonConfig","componentsLoader","componentsRegistry","consentPolicy","cyclicTabbing","environmentWixCodeSdk","environment","locationWixCodeSdk","navigationManager","navigationPhases","ooi","pages","panorama","renderer","reporter","router","scrollRestoration","seoWixCodeSdk","seo","sessionManager","siteMembersWixCodeSdk","siteMembers","siteScrollBlocker","siteWixCodeSdk","stores","structureApi","thunderboltInitializer","tpaCommons","translations","usedPlatformApis","warmupData","windowMessageRegistrar","windowWixCodeSdk","wixEmbedsApi","componentsReact","platform"],"site":{"metaSiteId":"6b0a6bee-31a6-429c-a658-14585b8be08e","userId":"60c39eea-e8ba-4af7-a1b1-def89b656fe0","siteId":"bc3481f0-99f4-4688-a477-89ad817126b6","externalBaseUrl":"https:\/\/www.sheminimalist.com","siteRevision":4,"siteType":"UGC","dc":"virginia-pub","isResponsive":false,"editorName":"Unknown","sessionId":"afe03957-4d77-47c8-a439-657f1ac41cbc","isSEO":false,"appNameForBiEvents":"thunderbolt"},"isMobileDevice":false,"viewMode":"desktop","formFactor":"desktop","deviceInfo":{"deviceClass":"Desktop"},"media":{"staticMediaUrl":"https:\/\/static.wixstatic.com\/media","mediaRootUrl":"https:\/\/static.wixstatic.com\/","staticVideoUrl":"https:\/\/video.wixstatic.com\/"},"language":{"userLanguage":"pt","userLanguageResolutionMethod":"QueryParam","siteLanguage":"pt","isMultilingualEnabled":false,"directionByLanguage":"ltr"},"mode":{"qa":false,"enableTestApi":false,"debug":false,"ssrIndicator":false,"ssrOnly":false,"siteAssetsFallback":"enable"},"siteFeaturesConfigs":{"assetsLoader":{"isStylableComponentInStructure":false},"componentsRegistry":{"librariesTopology":[{"artifactId":"editor-elements","namespace":"wixui","url":"https:\/\/static.parastorage.com\/services\/editor-elements\/1.13031.0"},{"artifactId":"editor-elements","namespace":"dsgnsys","url":"https:\/\/static.parastorage.com\/services\/editor-elements\/1.13031.0"}]},"consentPolicy":{"isWixSite":false},"dataWixCodeSdk":{"gridAppId":"29ef1316-dc15-49ec-bc5d-98874aa0dc8c","environment":"LIVE","cloudDataUrlWithExternalBase":"https:\/\/www.sheminimalist.com\/_api\/cloud-data"},"elementorySupportWixCodeSdk":{"baseUrl":"https:\/\/www.sheminimalist.com\/_api\/wix-code-public-dispatcher-ng\/siteview","relativePath":"\/\/_api\/wix-code-public-dispatcher-ng\/siteview","gridAppId":"29ef1316-dc15-49ec-bc5d-98874aa0dc8c","viewMode":"site","siteRevision":4},"environmentWixCodeSdk":{},"environment":{"editorType":"","domain":"sheminimalist.com","previewMode":false},"fedopsWixCodeSdk":{"isWixSite":false,"shouldReportFedops":false},"locationWixCodeSdk":{"routersConfigMap":{},"urlMappings":null},"onloadCompsBehaviors":{},"ooiTpaSharedConfig":{"imageSpriteUrl":"https:\/\/static.parastorage.com\/services\/santa-resources\/resources\/viewer\/editorUI\/fonts.v19.png","wixStaticFontsLinks":["https:\/\/static.parastorage.com\/services\/fonts-data\/dist\/6eedcb314db991b442fd.css?raw","https:\/\/static.parastorage.com\/services\/fonts-data\/dist\/b90d5b337f79413a57d3.css?raw",""]},"ooi":{"ooiComponentsData":{"a74ee1f5-74e3-4612-8fac-8ba5ae2cacaf":{"sentryDsn":"https:\/\/88170cb0c9d64f94b5821ca7fd2d55a4@sentry-next.wixpress.com\/860","componentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/widgetViewerWidget.bundle.min.js","widgetId":"a74ee1f5-74e3-4612-8fac-8ba5ae2cacaf","noCssComponentUrl":"","staticBaseUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0","isLoadable":true,"isServerBundled":false,"loadStaticCssWithLink":true,"isModuleFederated":false},"14d2abc2-5350-6322-487d-8c16ff833c8a":{"sentryDsn":"https:\/\/88170cb0c9d64f94b5821ca7fd2d55a4@sentry-next.wixpress.com\/860","componentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/details-pageViewerWidget.bundle.min.js","widgetId":"14d2abc2-5350-6322-487d-8c16ff833c8a","noCssComponentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/details-pageViewerWidgetNoCss.bundle.min.js","staticBaseUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0","isLoadable":true,"isServerBundled":false,"loadStaticCssWithLink":true,"isModuleFederated":false},"1440e92d-47d8-69be-ade7-e6de40127106":{"sentryDsn":"https:\/\/88170cb0c9d64f94b5821ca7fd2d55a4@sentry-next.wixpress.com\/860","componentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/widgetViewerWidget.bundle.min.js","widgetId":"1440e92d-47d8-69be-ade7-e6de40127106","noCssComponentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/widgetViewerWidgetNoCss.bundle.min.js","staticBaseUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0","isLoadable":true,"isServerBundled":false,"loadStaticCssWithLink":true,"isModuleFederated":false},"405eb115-a694-4e2b-abaa-e4762808bb93":{"sentryDsn":"https:\/\/88170cb0c9d64f94b5821ca7fd2d55a4@sentry-next.wixpress.com\/860","componentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/members-pageViewerWidget.bundle.min.js","widgetId":"405eb115-a694-4e2b-abaa-e4762808bb93","noCssComponentUrl":"","staticBaseUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0","isLoadable":true,"isServerBundled":false,"loadStaticCssWithLink":true,"isModuleFederated":false},"29ad290c-8529-4204-8fcf-41ef46e0d3b0":{"sentryDsn":"https:\/\/88170cb0c9d64f94b5821ca7fd2d55a4@sentry-next.wixpress.com\/860","componentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/scheduleViewerWidget.bundle.min.js","widgetId":"29ad290c-8529-4204-8fcf-41ef46e0d3b0","noCssComponentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/scheduleViewerWidgetNoCss.bundle.min.js","staticBaseUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0","isLoadable":true,"isServerBundled":false,"loadStaticCssWithLink":true,"isModuleFederated":false}},"viewMode":"Site","formFactor":"Desktop","blogMobileComponentUrl":"undefinedfeed-page-mobile-viewer.bundle.min.js"},"renderer":{"disabledComponents":{}},"reporter":{"userId":"60c39eea-e8ba-4af7-a1b1-def89b656fe0","metaSiteId":"6b0a6bee-31a6-429c-a658-14585b8be08e","isPremium":true,"isFBServerEventsAppProvisioned":false,"dynamicPagesIds":[]},"router":{"baseUrl":"https:\/\/www.sheminimalist.com","mainPageId":"c1dmp","pagesMap":{"hulu5":{"pageId":"hulu5","title":"Calendário","pageUriSEO":"agenda","pageJsonFileName":"60c39e_a88f93874adeb2a6077465b8df10d3d0_2"},"spgi1":{"pageId":"spgi1","title":"Informações do evento","pageUriSEO":"events","pageJsonFileName":"60c39e_123fd9954fe55a9f94cbc9685f1ab03e_2"},"c1dmp":{"pageId":"c1dmp","title":"Página Inicial","pageUriSEO":"pagina-inicial","pageJsonFileName":"60c39e_e54174729ffa0b7d1e45e9a40fb874c9_4"}},"disableStaticPagesUrlHierarchy":false,"routes":{".\/agenda":{"type":"Static","pageId":"hulu5"},".\/events":{"type":"Static","pageId":"spgi1"},".\/pagina-inicial":{"type":"Static","pageId":"c1dmp"},".\/":{"type":"Static","pageId":"c1dmp"}},"pageIdToPrefix":{},"isWixSite":false},"searchWixCodeSdk":{"language":"pt"},"seo":{"context":{"siteName":"Lista De Tarefas 1","siteUrl":"https:\/\/www.sheminimalist.com","domain":"sheminimalist.com","indexSite":false,"defaultUrl":"https:\/\/www.sheminimalist.com\/","currLangIsOriginal":true,"homePageTitle":"Página Inicial","businessName":"Eventos","businesLocale":"pt-br","currency":"BRL","experiments":{"specs.seo.EnableFaqSD":"false"},"platformAppsExperiments":{"140603ad-af8d-84a5-2c80-a0f60cb47351":{"specs.events.ui.UpdatePaymentMethodEnabled":"true","specs.events.ui.CategoryIdVeloUpdate":"true","specs.events.ui.EventDetailsSlotsViewer":"true","specs.events.ui.RicosViewer":"true","specs.events.ui.SettingsPanelUpdatedTranslations":"true","specs.events.ui.AddPageTitles":"true","specs.events.ui.UseWarmupState":"true","specs.events.ui.CssPerBreakpointIndications":"false","specs.events.ui.ExpressCheckout":"true","specs.events.ui.TicketMoreInfoButtonSetting":"true","specs.events.ui.UpdateDisplayEventsLabel":"true","specs.events.ui.StudioCompatibilitySettingsPanels":"false","specs.events.ui.UpdatedCheckoutSummary":"true","specs.events.ui.FixContentOrder":"true","specs.events.ui.MemberOnlyEventError":"true","specs.events.ui.SausageIntegration":"false","specs.events.ui.RsvpDynamicMessages":"false","specs.events.ui.PlanTicketsDesign":"true","specs.events.ui.FixPaidPlans":"true","specs.events.ui.ListDateLocationFormatSetting":"false","specs.events.ui.saveADITextsInDs":"true","specs.events.ui.WidgetSEOTags":"false","specs.events.ui.NewPolicyFontColor":"true","specs.events.ui.GetRichContentByEventId":"true","specs.events.ui.UpdatedClassicAddPanel":"false","specs.events.ui.DisableLoginHandlerOnInit":"true","specs.events.ui.PageAsDefaultComponent":"true","specs.seatings.ui.PlanNotFromReservationsService":"false","specs.events.ui.UpdateOrderSuccessContent":"true","specs.events.ui.DonationKeyboardMode":"true","specs.events.ui.UseGuestsService":"false","specs.events.ui.EventDetailsSlots":"true","specs.events.ui.SeeAllGuestsLink":"true","specs.events.ui.GiftCardsViewer":"false","specs.events.ui.DonationInputFix":"true","specs.events.ui.UseOrderPageUrl":"true","specs.events.ui.DisableMobileFontOverrides":"false"},"14ce1214-b278-a7e4-1373-00cebd1bef7c":{"specs.forms.EnableFormsInBlog":"true"},"675bbcef-18d8-41f5-800e-131ec9e08762":{"specs.wixCode.LoadWithImportAMDModule":"true","specs.wixCode.LoadNamespacesPerPage":"false","specs.wixcode.ViewerExperimentOwnerScopeTest":"true","specs.wixCode.resolveMissingPlatformNamespaces":"false","specs.wixcode.ViewerExperimentTest":"false"}}},"userPatterns":[],"metaTags":[{"name":"fb_admins_meta_tag","value":"","property":false}],"customHeadTags":"","isInSEO":false,"hasBlogAmp":false,"mainPageId":"c1dmp"},"sessionManager":{"sessionModel":{},"appsInstances":{},"dynamicModelApiUrl":"https:\/\/www.sheminimalist.com\/_api\/v2\/dynamicmodel","accessTokensApiUrl":"https:\/\/www.sheminimalist.com\/_api\/v1\/access-tokens","expiryTimeoutOverride":0,"isRunningInDifferentSiteContext":false},"siteMembersWixCodeSdk":{"isPreviewMode":false,"isEditMode":false,"smToken":"","smcollectionId":"6b0a6bee-31a6-429c-a658-14585b8be08e"},"siteMembers":{"collectionExposure":"Public","smcollectionId":"6b0a6bee-31a6-429c-a658-14585b8be08e","smToken":"","protectedHomepage":false,"isTemplate":false,"loginSocialBarOnSite":false,"isCommunityInstalled":false},"siteWixCodeSdk":{"fontFaceServerUrl":"https:\/\/serverless.parastorage.com\/_serverless\/site-sdk-server\/v1\/style","siteDisplayName":"Lista De Tarefas 1","siteRevision":4,"regionalSettings":"pt-br","language":"pt","prefetchPageResourcesEnabled":false,"currency":"BRL","mainPageId":"c1dmp","pageIdToPrefix":{},"routerPrefixes":{},"timezone":"America\/Sao_Paulo","pageIdToTitle":{"hulu5":"Calendário","spgi1":"Informações do evento","c1dmp":"Página Inicial"},"urlMappings":null,"viewMode":"Site"},"tpaCommons":{"widgetsClientSpecMapData":{"141995eb-c700-8487-6366-a482f7432e2b":{"widgetUrl":"https:\/\/so-feed.codev.wixapps.net\/widget","mobileUrl":"https:\/\/so-feed.codev.wixapps.net\/widget","tpaWidgetId":"shoutout_feed","appPage":{},"applicationId":24,"appDefinitionName":"ShoutOut (Legacy)","appDefinitionId":"135c3d92-0fea-1f9d-2ba5-2a1dfb04297e","isWixTPA":true,"allowScrolling":false},"a74ee1f5-74e3-4612-8fac-8ba5ae2cacaf":{"widgetUrl":"https:\/\/editor.wixapps.net\/render\/prod\/editor\/events-viewer\/1.3110.0\/widget","mobileUrl":"https:\/\/editor.wixapps.net\/render\/prod\/editor\/events-viewer\/1.3110.0\/widget","tpaWidgetId":"a74ee1f5-74e3-4612-8fac-8ba5ae2cacaf","appPage":{"id":"Event List","name":"Event List","defaultPage":"","hidden":false,"multiInstanceEnabled":false,"order":1,"indexable":true,"fullPage":false,"landingPageInMobile":false,"hideFromMenu":false},"applicationId":4302,"appDefinitionName":"Wix Events & Tickets","appDefinitionId":"140603ad-af8d-84a5-2c80-a0f60cb47351","isWixTPA":true,"allowScrolling":false},"14d2abc2-5350-6322-487d-8c16ff833c8a":{"widgetUrl":"https:\/\/editor.wixapps.net\/render\/prod\/editor\/events-viewer\/1.3110.0\/details-page","mobileUrl":"https:\/\/editor.wixapps.net\/render\/prod\/editor\/events-viewer\/1.3110.0\/details-page","appPage":{"id":"events","name":"Event Details","defaultPage":"","hidden":true,"multiInstanceEnabled":false,"order":1,"indexable":true,"fullPage":false,"landingPageInMobile":false,"hideFromMenu":false},"applicationId":4302,"appDefinitionName":"Wix Events & Tickets","appDefinitionId":"140603ad-af8d-84a5-2c80-a0f60cb47351","isWixTPA":true,"allowScrolling":false},"1440e92d-47d8-69be-ade7-e6de40127106":{"widgetUrl":"https:\/\/editor.wixapps.net\/render\/prod\/editor\/events-viewer\/1.3110.0\/widget","mobileUrl":"https:\/\/editor.wixapps.net\/render\/prod\/editor\/events-viewer\/1.3110.0\/widget","tpaWidgetId":"wix_events","appPage":{},"applicationId":4302,"appDefinitionName":"Wix Events & Tickets","appDefinitionId":"140603ad-af8d-84a5-2c80-a0f60cb47351","isWixTPA":true,"allowScrolling":false},"405eb115-a694-4e2b-abaa-e4762808bb93":{"widgetUrl":"https:\/\/editor.wixapps.net\/render\/prod\/editor\/events-viewer\/1.3110.0\/members-page","mobileUrl":"https:\/\/editor.wixapps.net\/render\/prod\/editor\/events-viewer\/1.3110.0\/members-page","appPage":{"id":"events_members_page","name":"Events","defaultPage":"","hidden":true,"multiInstanceEnabled":false,"order":2,"indexable":true,"fullPage":false,"landingPageInMobile":false,"hideFromMenu":false},"applicationId":4302,"appDefinitionName":"Wix Events & Tickets","appDefinitionId":"140603ad-af8d-84a5-2c80-a0f60cb47351","isWixTPA":true,"allowScrolling":false},"29ad290c-8529-4204-8fcf-41ef46e0d3b0":{"widgetUrl":"https:\/\/editor.wixapps.net\/render\/prod\/editor\/events-viewer\/1.3110.0\/schedule","mobileUrl":"https:\/\/editor.wixapps.net\/render\/prod\/editor\/events-viewer\/1.3110.0\/schedule","tpaWidgetId":"agenda-page","appPage":{"id":"Schedule","name":"Schedule","defaultPage":"","hidden":true,"multiInstanceEnabled":false,"order":1,"indexable":true,"fullPage":false,"landingPageInMobile":false,"hideFromMenu":false},"applicationId":4302,"appDefinitionName":"Wix Events & Tickets","appDefinitionId":"140603ad-af8d-84a5-2c80-a0f60cb47351","isWixTPA":true,"allowScrolling":false},"14517f3f-ffc5-eced-f592-980aaa0bbb5c":{"widgetUrl":"https:\/\/engage.wixapps.net\/chat-widget-server\/renderChatWidget\/index","tpaWidgetId":"wix_visitors","appPage":{},"applicationId":5509,"appDefinitionName":"Wix Chat","appDefinitionId":"14517e1a-3ff0-af98-408e-2bd6953c36a2","isWixTPA":true,"allowScrolling":false}},"appsClientSpecMapData":{"135c3d92-0fea-1f9d-2ba5-2a1dfb04297e":{"applicationId":24,"widgets":{"141995eb-c700-8487-6366-a482f7432e2b":{"widgetUrl":"https:\/\/so-feed.codev.wixapps.net\/widget","widgetId":"141995eb-c700-8487-6366-a482f7432e2b","refreshOnWidthChange":true,"mobileUrl":"https:\/\/so-feed.codev.wixapps.net\/widget","published":true,"mobilePublished":true,"seoEnabled":true,"preFetch":false,"shouldBeStretchedByDefault":false,"shouldBeStretchedByDefaultMobile":false,"componentFields":{},"tpaWidgetId":"shoutout_feed","default":true}},"appDefinitionName":"ShoutOut (Legacy)","appFields":{"premiumBundle":{"parentAppSlug":"ee21fe60-48c5-45e9-95f4-6ca8f9b1c9d9","parentAppId":"ee21fe60-48c5-45e9-95f4-6ca8f9b1c9d9"},"permissionsEnforced":false,"blocksPermissionsEnforced":false,"isStandalone":true,"semanticVersion":"^0.0.0"},"isWixTPA":true},"140603ad-af8d-84a5-2c80-a0f60cb47351":{"applicationId":4302,"widgets":{"a74ee1f5-74e3-4612-8fac-8ba5ae2cacaf":{"widgetUrl":"https:\/\/editor.wixapps.net\/render\/prod\/editor\/events-viewer\/1.3110.0\/widget","widgetId":"a74ee1f5-74e3-4612-8fac-8ba5ae2cacaf","refreshOnWidthChange":true,"mobileUrl":"https:\/\/editor.wixapps.net\/render\/prod\/editor\/events-viewer\/1.3110.0\/widget","appPage":{"id":"Event List","name":"Event List","defaultPage":"","hidden":false,"multiInstanceEnabled":false,"order":1,"indexable":true,"fullPage":false,"landingPageInMobile":false,"hideFromMenu":false},"published":true,"mobilePublished":true,"seoEnabled":false,"shouldBeStretchedByDefault":true,"shouldBeStretchedByDefaultMobile":true,"componentFields":{"mobileSettingsEnabled":true,"linkable":true,"viewer":{"errorReporting":{"url":"https:\/\/88170cb0c9d64f94b5821ca7fd2d55a4@sentry-next.wixpress.com\/860"}},"controllerUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/widgetController.bundle.min.js","noCssComponentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/widgetViewerWidgetNoCss.bundle.min.js","componentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/widgetViewerWidget.bundle.min.js","isLoadable":true,"ssrCacheExcluded":"false","ooiInEditor":true,"cssPerBreakpoint":true},"tpaWidgetId":"a74ee1f5-74e3-4612-8fac-8ba5ae2cacaf","default":true},"14d2abc2-5350-6322-487d-8c16ff833c8a":{"widgetUrl":"https:\/\/editor.wixapps.net\/render\/prod\/editor\/events-viewer\/1.3110.0\/details-page","widgetId":"14d2abc2-5350-6322-487d-8c16ff833c8a","refreshOnWidthChange":true,"mobileUrl":"https:\/\/editor.wixapps.net\/render\/prod\/editor\/events-viewer\/1.3110.0\/details-page","appPage":{"id":"events","name":"Event Details","defaultPage":"","hidden":true,"multiInstanceEnabled":false,"order":1,"indexable":true,"fullPage":false,"landingPageInMobile":false,"hideFromMenu":false},"published":true,"mobilePublished":true,"seoEnabled":true,"preFetch":false,"shouldBeStretchedByDefault":true,"shouldBeStretchedByDefaultMobile":false,"componentFields":{"useSsrSeo":true,"mobileSettingsEnabled":true,"subPages":[{"key":"wix.events.sub_pages.event","enumerable":true,"hideFromFloatingNavBar":true}],"linkable":true,"viewer":{"errorReporting":{"url":"https:\/\/88170cb0c9d64f94b5821ca7fd2d55a4@sentry-next.wixpress.com\/860"}},"controllerUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/details-pageController.bundle.min.js","noCssComponentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/details-pageViewerWidgetNoCss.bundle.min.js","componentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/details-pageViewerWidget.bundle.min.js","isLoadable":true,"ssrCacheExcluded":"false","ooiInEditor":true,"cssPerBreakpoint":true,"outOfIframeData":{"slots":{"outOfIframeData":{"slots":[{"slotRole":"header","pluginInterfaces":["EVENT_DETAILS"]},{"slotRole":"details","pluginInterfaces":["EVENT_DETAILS"]}]}}}},"default":false},"1440e92d-47d8-69be-ade7-e6de40127106":{"widgetUrl":"https:\/\/editor.wixapps.net\/render\/prod\/editor\/events-viewer\/1.3110.0\/widget","widgetId":"1440e92d-47d8-69be-ade7-e6de40127106","refreshOnWidthChange":true,"mobileUrl":"https:\/\/editor.wixapps.net\/render\/prod\/editor\/events-viewer\/1.3110.0\/widget","published":true,"mobilePublished":true,"seoEnabled":true,"preFetch":false,"shouldBeStretchedByDefault":false,"shouldBeStretchedByDefaultMobile":true,"componentFields":{"componentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/widgetViewerWidget.bundle.min.js","useSsrSeo":true,"viewer":{"errorReporting":{"url":"https:\/\/88170cb0c9d64f94b5821ca7fd2d55a4@sentry-next.wixpress.com\/860"}},"controllerUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/widgetController.bundle.min.js","noCssComponentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/widgetViewerWidgetNoCss.bundle.min.js","isLoadable":true,"ssrCacheExcluded":"false","mobileHelpId":"a0621ef7-79ef-4a32-a376-1258506a5d2a","mobileSettingsEnabled":true,"ooiInEditor":true,"cssPerBreakpoint":true},"tpaWidgetId":"wix_events","default":false},"405eb115-a694-4e2b-abaa-e4762808bb93":{"widgetUrl":"https:\/\/editor.wixapps.net\/render\/prod\/editor\/events-viewer\/1.3110.0\/members-page","widgetId":"405eb115-a694-4e2b-abaa-e4762808bb93","refreshOnWidthChange":true,"mobileUrl":"https:\/\/editor.wixapps.net\/render\/prod\/editor\/events-viewer\/1.3110.0\/members-page","appPage":{"id":"events_members_page","name":"Events","defaultPage":"","hidden":true,"multiInstanceEnabled":false,"order":2,"indexable":true,"fullPage":false,"landingPageInMobile":false,"hideFromMenu":false},"published":true,"mobilePublished":true,"seoEnabled":false,"preFetch":false,"shouldBeStretchedByDefault":false,"shouldBeStretchedByDefaultMobile":true,"componentFields":{"componentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/members-pageViewerWidget.bundle.min.js","linkable":true,"viewer":{"errorReporting":{"url":"https:\/\/88170cb0c9d64f94b5821ca7fd2d55a4@sentry-next.wixpress.com\/860"}},"controllerUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/members-pageController.bundle.min.js","noCssComponentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/members-pageViewerWidgetNoCss.bundle.min.js","isLoadable":true,"ssrCacheExcluded":"false","ooiInEditor":true,"cssPerBreakpoint":true},"default":false},"29ad290c-8529-4204-8fcf-41ef46e0d3b0":{"widgetUrl":"https:\/\/editor.wixapps.net\/render\/prod\/editor\/events-viewer\/1.3110.0\/schedule","widgetId":"29ad290c-8529-4204-8fcf-41ef46e0d3b0","refreshOnWidthChange":true,"mobileUrl":"https:\/\/editor.wixapps.net\/render\/prod\/editor\/events-viewer\/1.3110.0\/schedule","appPage":{"id":"Schedule","name":"Schedule","defaultPage":"","hidden":true,"multiInstanceEnabled":false,"order":1,"indexable":true,"fullPage":false,"landingPageInMobile":false,"hideFromMenu":false},"published":true,"mobilePublished":true,"seoEnabled":false,"shouldBeStretchedByDefault":true,"shouldBeStretchedByDefaultMobile":true,"componentFields":{"linkable":true,"viewer":{"errorReporting":{"url":"https:\/\/88170cb0c9d64f94b5821ca7fd2d55a4@sentry-next.wixpress.com\/860"}},"controllerUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/scheduleController.bundle.min.js","noCssComponentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/scheduleViewerWidgetNoCss.bundle.min.js","componentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/scheduleViewerWidget.bundle.min.js","isLoadable":true,"ssrCacheExcluded":"false","ooiInEditor":true,"cssPerBreakpoint":true},"tpaWidgetId":"agenda-page","default":false}},"appDefinitionName":"Wix Events & Tickets","appFields":{"platform":{"viewerScriptUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/viewerScript.bundle.min.js","editorScriptUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/editorScript.bundle.min.js","baseUrls":{"baseUrl":"https:\/\/events.wixapps.net\/_api\/wix-one-events-server","staticsBaseUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0"},"baseUrlsTemplate":{"staticsBaseUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0"},"margins":{"desktop":{"top":{},"right":{},"bottom":{},"left":{}},"tablet":{"top":{},"right":{},"bottom":{},"left":{}},"mobile":{"top":{},"right":{},"bottom":{},"left":{}}},"height":{"desktop":{},"tablet":{},"mobile":{}},"docking":{"desktop":{},"tablet":{},"mobile":{}},"errorReporting":{"url":"https:\/\/88170cb0c9d64f94b5821ca7fd2d55a4@sentry-next.wixpress.com\/860"},"width":{"desktop":{},"tablet":{},"mobile":{}},"viewer":{"errorReporting":{"url":"https:\/\/88170cb0c9d64f94b5821ca7fd2d55a4@sentry-next.wixpress.com\/860"}},"ooiInEditor":true},"appConfig":{"siteConfig":{"siteStructureApi":"wixArtifactId:com.wixpress.wix-events-web"},"namespace":"wix.events"},"permissionsEnforced":false,"blocksPermissionsEnforced":false,"isStandalone":true,"semanticVersion":"^0.0.0"},"isWixTPA":true},"14517e1a-3ff0-af98-408e-2bd6953c36a2":{"applicationId":5509,"widgets":{"14517f3f-ffc5-eced-f592-980aaa0bbb5c":{"widgetUrl":"https:\/\/engage.wixapps.net\/chat-widget-server\/renderChatWidget\/index","widgetId":"14517f3f-ffc5-eced-f592-980aaa0bbb5c","refreshOnWidthChange":true,"gluedOptions":{"placement":"BOTTOM_RIGHT","verticalMargin":0,"horizontalMargin":0},"published":true,"mobilePublished":true,"seoEnabled":true,"preFetch":false,"shouldBeStretchedByDefault":false,"shouldBeStretchedByDefaultMobile":false,"componentFields":{"iframeWithPlatform":true},"tpaWidgetId":"wix_visitors","default":true}},"appDefinitionName":"Wix Chat","appFields":{"platform":{"optionalApplication":true,"viewerScriptUrl":"https:\/\/static.parastorage.com\/services\/chat-worker\/1.1239.0\/viewer-script.bundle.min.js","margins":{"desktop":{"top":{},"right":{},"bottom":{},"left":{}},"tablet":{"top":{},"right":{},"bottom":{},"left":{}},"mobile":{"top":{},"right":{},"bottom":{},"left":{}}},"height":{"desktop":{},"tablet":{},"mobile":{}},"editorScriptUrl":"https:\/\/static.parastorage.com\/services\/chat-worker\/1.1239.0\/editor-script.bundle.min.js","isStretched":{},"docking":{"desktop":{},"tablet":{},"mobile":{}},"errorReporting":{},"width":{"desktop":{},"tablet":{},"mobile":{}},"viewer":{"errorReporting":{}}},"mostPopularPackage":"Sales","premiumBundle":{"parentAppSlug":"ee21fe60-48c5-45e9-95f4-6ca8f9b1c9d9","parentAppId":"ee21fe60-48c5-45e9-95f4-6ca8f9b1c9d9"},"featuresForNewPackagePicker":[{"forPackages":[{"value":"50","packageId":"Professional"},{"value":"150","packageId":"Sales"},{"value":"Unlimited","packageId":"Teams"}]},{"forPackages":[{"value":"true","packageId":"Professional"},{"value":"true","packageId":"Sales"},{"value":"true","packageId":"Teams"}]},{"forPackages":[{"value":"true","packageId":"Professional"},{"value":"true","packageId":"Sales"},{"value":"true","packageId":"Teams"}]},{"forPackages":[{"value":"true","packageId":"Professional"},{"value":"true","packageId":"Sales"},{"value":"true","packageId":"Teams"}]},{"forPackages":[{"value":"true","packageId":"Professional"},{"value":"true","packageId":"Sales"},{"value":"true","packageId":"Teams"}]},{"forPackages":[{"value":"true","packageId":"Professional"},{"value":"true","packageId":"Sales"},{"value":"true","packageId":"Teams"}]},{"forPackages":[{"value":"true","packageId":"Professional"},{"value":"true","packageId":"Sales"},{"value":"true","packageId":"Teams"}]},{"forPackages":[{"value":"true","packageId":"Professional"},{"value":"true","packageId":"Sales"},{"value":"true","packageId":"Teams"}]},{"forPackages":[{"value":"true","packageId":"Sales"},{"value":"true","packageId":"Teams"}]},{"forPackages":[{"value":"true","packageId":"Teams"}]}],"permissionsEnforced":false,"blocksPermissionsEnforced":false,"isStandalone":true,"semanticVersion":"^0.0.0"},"isWixTPA":true}},"previewMode":false,"siteRevision":4,"userFileDomainUrl":"filesusr.com","metaSiteId":"6b0a6bee-31a6-429c-a658-14585b8be08e","isPremiumDomain":true,"routersConfig":{},"routerByPrefix":{},"pageIdToPrefix":{},"viewMode":"site","editorOrSite":"site","externalBaseUrl":"https:\/\/www.sheminimalist.com","tpaModalConfig":{"wixTPAs":{"139ef4fa-c108-8f9a-c7be-d5f492a2c939":true,"14b89688-9b25-5214-d1cb-a3fb9683618b":true,"7efa9936-86f7-44c6-880b-7bae4e044a3d":true,"13ee94c1-b635-8505-3391-97919052c16f":true,"55cd9036-36bb-480b-8ddc-afda3cb2eb8d":true,"35aec784-bbec-4e6e-abcb-d3d724af52cf":true,"8ea9df15-9ff6-4acf-bbb8-8d3a69ae5841":true,"14d7032a-0a65-5270-cca7-30f599708fed":true,"edd04d8e-3c81-46d7-b176-39b076fe7bbd":true,"141fbfae-511e-6817-c9f0-48993a7547d1":true,"d70b68e2-8d77-4e0c-9c00-c292d6e0025e":true,"146c0d71-352e-4464-9a03-2e868aabe7b9":true,"307ba931-689c-4b55-bb1d-6a382bad9222":true,"ea2821fc-7d97-40a9-9f75-772f29178430":true,"9bead16f-1c73-4cda-b6c4-28cff46988db":true,"1480c568-5cbd-9392-5604-1148f5faffa0":true,"94bc563b-675f-41ad-a2a6-5494f211c47b":true,"14e12b04-943e-fd32-456d-70b1820a2ff2":true,"14bca956-e09f-f4d6-14d7-466cb3f09103":true,"135c3d92-0fea-1f9d-2ba5-2a1dfb04297e":true,"150ae7ee-c74a-eecd-d3d7-2112895b988a":true,"f123e8f1-4350-4c9b-b269-04adfadda977":true,"64e6bcf3-b6e2-456a-81f9-b0cfbdd5c2c3":true,"4b10fcce-732d-4be3-9d46-801d271acda9":true,"14ce1214-b278-a7e4-1373-00cebd1bef7c":true,"140603ad-af8d-84a5-2c80-a0f60cb47351":true,"14517e1a-3ff0-af98-408e-2bd6953c36a2":true}},"appSectionParams":{},"requestUrl":"https:\/\/www.sheminimalist.com\/","isMobileView":false,"deviceType":"desktop","isMobileDevice":false,"extras":{"currency":"BRL"},"tpaDebugParams":{"debugApp":null,"petri_ovr":null},"locale":"pt","timeZone":"America\/Sao_Paulo","shouldRenderTPAsIframe":true,"debug":false,"regionalLanguage":"pt","appsClientSpecMapByApplicationId":{"24":{"widgets":{"141995eb-c700-8487-6366-a482f7432e2b":{"widgetUrl":"https:\/\/so-feed.codev.wixapps.net\/widget","widgetId":"141995eb-c700-8487-6366-a482f7432e2b","refreshOnWidthChange":true,"mobileUrl":"https:\/\/so-feed.codev.wixapps.net\/widget","published":true,"mobilePublished":true,"seoEnabled":true,"preFetch":false,"shouldBeStretchedByDefault":false,"shouldBeStretchedByDefaultMobile":false,"componentFields":{},"tpaWidgetId":"shoutout_feed","default":true}},"applicationId":24,"appDefinitionName":"ShoutOut (Legacy)"},"4302":{"widgets":{"a74ee1f5-74e3-4612-8fac-8ba5ae2cacaf":{"widgetUrl":"https:\/\/editor.wixapps.net\/render\/prod\/editor\/events-viewer\/1.3110.0\/widget","widgetId":"a74ee1f5-74e3-4612-8fac-8ba5ae2cacaf","refreshOnWidthChange":true,"mobileUrl":"https:\/\/editor.wixapps.net\/render\/prod\/editor\/events-viewer\/1.3110.0\/widget","appPage":{"id":"Event List","name":"Event List","defaultPage":"","hidden":false,"multiInstanceEnabled":false,"order":1,"indexable":true,"fullPage":false,"landingPageInMobile":false,"hideFromMenu":false},"published":true,"mobilePublished":true,"seoEnabled":false,"shouldBeStretchedByDefault":true,"shouldBeStretchedByDefaultMobile":true,"componentFields":{"mobileSettingsEnabled":true,"linkable":true,"viewer":{"errorReporting":{"url":"https:\/\/88170cb0c9d64f94b5821ca7fd2d55a4@sentry-next.wixpress.com\/860"}},"controllerUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/widgetController.bundle.min.js","noCssComponentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/widgetViewerWidgetNoCss.bundle.min.js","componentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/widgetViewerWidget.bundle.min.js","isLoadable":true,"ssrCacheExcluded":"false","ooiInEditor":true,"cssPerBreakpoint":true},"tpaWidgetId":"a74ee1f5-74e3-4612-8fac-8ba5ae2cacaf","default":true},"14d2abc2-5350-6322-487d-8c16ff833c8a":{"widgetUrl":"https:\/\/editor.wixapps.net\/render\/prod\/editor\/events-viewer\/1.3110.0\/details-page","widgetId":"14d2abc2-5350-6322-487d-8c16ff833c8a","refreshOnWidthChange":true,"mobileUrl":"https:\/\/editor.wixapps.net\/render\/prod\/editor\/events-viewer\/1.3110.0\/details-page","appPage":{"id":"events","name":"Event Details","defaultPage":"","hidden":true,"multiInstanceEnabled":false,"order":1,"indexable":true,"fullPage":false,"landingPageInMobile":false,"hideFromMenu":false},"published":true,"mobilePublished":true,"seoEnabled":true,"preFetch":false,"shouldBeStretchedByDefault":true,"shouldBeStretchedByDefaultMobile":false,"componentFields":{"useSsrSeo":true,"mobileSettingsEnabled":true,"subPages":[{"key":"wix.events.sub_pages.event","enumerable":true,"hideFromFloatingNavBar":true}],"linkable":true,"viewer":{"errorReporting":{"url":"https:\/\/88170cb0c9d64f94b5821ca7fd2d55a4@sentry-next.wixpress.com\/860"}},"controllerUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/details-pageController.bundle.min.js","noCssComponentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/details-pageViewerWidgetNoCss.bundle.min.js","componentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/details-pageViewerWidget.bundle.min.js","isLoadable":true,"ssrCacheExcluded":"false","ooiInEditor":true,"cssPerBreakpoint":true,"outOfIframeData":{"slots":{"outOfIframeData":{"slots":[{"slotRole":"header","pluginInterfaces":["EVENT_DETAILS"]},{"slotRole":"details","pluginInterfaces":["EVENT_DETAILS"]}]}}}},"default":false},"1440e92d-47d8-69be-ade7-e6de40127106":{"widgetUrl":"https:\/\/editor.wixapps.net\/render\/prod\/editor\/events-viewer\/1.3110.0\/widget","widgetId":"1440e92d-47d8-69be-ade7-e6de40127106","refreshOnWidthChange":true,"mobileUrl":"https:\/\/editor.wixapps.net\/render\/prod\/editor\/events-viewer\/1.3110.0\/widget","published":true,"mobilePublished":true,"seoEnabled":true,"preFetch":false,"shouldBeStretchedByDefault":false,"shouldBeStretchedByDefaultMobile":true,"componentFields":{"componentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/widgetViewerWidget.bundle.min.js","useSsrSeo":true,"viewer":{"errorReporting":{"url":"https:\/\/88170cb0c9d64f94b5821ca7fd2d55a4@sentry-next.wixpress.com\/860"}},"controllerUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/widgetController.bundle.min.js","noCssComponentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/widgetViewerWidgetNoCss.bundle.min.js","isLoadable":true,"ssrCacheExcluded":"false","mobileHelpId":"a0621ef7-79ef-4a32-a376-1258506a5d2a","mobileSettingsEnabled":true,"ooiInEditor":true,"cssPerBreakpoint":true},"tpaWidgetId":"wix_events","default":false},"405eb115-a694-4e2b-abaa-e4762808bb93":{"widgetUrl":"https:\/\/editor.wixapps.net\/render\/prod\/editor\/events-viewer\/1.3110.0\/members-page","widgetId":"405eb115-a694-4e2b-abaa-e4762808bb93","refreshOnWidthChange":true,"mobileUrl":"https:\/\/editor.wixapps.net\/render\/prod\/editor\/events-viewer\/1.3110.0\/members-page","appPage":{"id":"events_members_page","name":"Events","defaultPage":"","hidden":true,"multiInstanceEnabled":false,"order":2,"indexable":true,"fullPage":false,"landingPageInMobile":false,"hideFromMenu":false},"published":true,"mobilePublished":true,"seoEnabled":false,"preFetch":false,"shouldBeStretchedByDefault":false,"shouldBeStretchedByDefaultMobile":true,"componentFields":{"componentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/members-pageViewerWidget.bundle.min.js","linkable":true,"viewer":{"errorReporting":{"url":"https:\/\/88170cb0c9d64f94b5821ca7fd2d55a4@sentry-next.wixpress.com\/860"}},"controllerUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/members-pageController.bundle.min.js","noCssComponentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/members-pageViewerWidgetNoCss.bundle.min.js","isLoadable":true,"ssrCacheExcluded":"false","ooiInEditor":true,"cssPerBreakpoint":true},"default":false},"29ad290c-8529-4204-8fcf-41ef46e0d3b0":{"widgetUrl":"https:\/\/editor.wixapps.net\/render\/prod\/editor\/events-viewer\/1.3110.0\/schedule","widgetId":"29ad290c-8529-4204-8fcf-41ef46e0d3b0","refreshOnWidthChange":true,"mobileUrl":"https:\/\/editor.wixapps.net\/render\/prod\/editor\/events-viewer\/1.3110.0\/schedule","appPage":{"id":"Schedule","name":"Schedule","defaultPage":"","hidden":true,"multiInstanceEnabled":false,"order":1,"indexable":true,"fullPage":false,"landingPageInMobile":false,"hideFromMenu":false},"published":true,"mobilePublished":true,"seoEnabled":false,"shouldBeStretchedByDefault":true,"shouldBeStretchedByDefaultMobile":true,"componentFields":{"linkable":true,"viewer":{"errorReporting":{"url":"https:\/\/88170cb0c9d64f94b5821ca7fd2d55a4@sentry-next.wixpress.com\/860"}},"controllerUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/scheduleController.bundle.min.js","noCssComponentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/scheduleViewerWidgetNoCss.bundle.min.js","componentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/scheduleViewerWidget.bundle.min.js","isLoadable":true,"ssrCacheExcluded":"false","ooiInEditor":true,"cssPerBreakpoint":true},"tpaWidgetId":"agenda-page","default":false}},"applicationId":4302,"appDefinitionName":"Wix Events & Tickets"},"5509":{"widgets":{"14517f3f-ffc5-eced-f592-980aaa0bbb5c":{"widgetUrl":"https:\/\/engage.wixapps.net\/chat-widget-server\/renderChatWidget\/index","widgetId":"14517f3f-ffc5-eced-f592-980aaa0bbb5c","refreshOnWidthChange":true,"gluedOptions":{"placement":"BOTTOM_RIGHT","verticalMargin":0,"horizontalMargin":0},"published":true,"mobilePublished":true,"seoEnabled":true,"preFetch":false,"shouldBeStretchedByDefault":false,"shouldBeStretchedByDefaultMobile":false,"componentFields":{"iframeWithPlatform":true},"tpaWidgetId":"wix_visitors","default":true}},"applicationId":5509,"appDefinitionName":"Wix Chat"}}},"windowWixCodeSdk":{"locale":"pt-br","isMobileFriendly":true,"formFactor":"Desktop","pageIdToRouterAppDefinitionId":{}},"wixEmbedsApi":{"isAdminPage":false},"platform":{"sdksStaticPaths":{"mainSdks":"https:\/\/static.parastorage.com\/services\/wix-thunderbolt\/dist\/mainSdks.2a6e0007.chunk.min.js","nonMainSdks":"https:\/\/static.parastorage.com\/services\/wix-thunderbolt\/dist\/nonMainSdks.7e385ab4.chunk.min.js"},"landingPageId":"c1dmp","isChancePlatformOnLandingPage":true,"clientWorkerUrl":"https:\/\/static.parastorage.com\/services\/wix-thunderbolt\/dist\/clientWorker.378569fe.bundle.min.js","bootstrapData":{"isMobileView":false,"isMobileAppBuilder":false,"appsSpecData":{"14ce1214-b278-a7e4-1373-00cebd1bef7c":{"appDefinitionId":"14ce1214-b278-a7e4-1373-00cebd1bef7c","type":"public","instanceId":"343229d9-e6ee-4f95-83e7-c3207e0eb3da","appDefinitionName":"Wix Forms & Payments","isWixTPA":true,"isModuleFederated":false},"675bbcef-18d8-41f5-800e-131ec9e08762":{"appDefinitionId":"675bbcef-18d8-41f5-800e-131ec9e08762","type":"siteextension","instanceId":"b605c9f7-193a-47d1-9aa5-7f7bd55d5d56","isModuleFederated":false},"140603ad-af8d-84a5-2c80-a0f60cb47351":{"appDefinitionId":"140603ad-af8d-84a5-2c80-a0f60cb47351","type":"public","instanceId":"30e9f079-2e6a-4672-a1de-0da61d619910","appDefinitionName":"Wix Events & Tickets","isWixTPA":true,"isModuleFederated":false},"14517e1a-3ff0-af98-408e-2bd6953c36a2":{"appDefinitionId":"14517e1a-3ff0-af98-408e-2bd6953c36a2","type":"public","instanceId":"983826d3-e323-4507-b08a-026434fa5f32","appDefinitionName":"Wix Chat","isWixTPA":true,"isModuleFederated":false},"dataBinding":{"appDefinitionId":"dataBinding","type":"application","instanceId":"b605c9f7-193a-47d1-9aa5-7f7bd55d5d56","appDefinitionName":"Data Binding","isWixTPA":true,"isModuleFederated":false}},"appsUrlData":{"14ce1214-b278-a7e4-1373-00cebd1bef7c":{"appDefId":"14ce1214-b278-a7e4-1373-00cebd1bef7c","appDefName":"Wix Forms & Payments","viewerScriptUrl":"https:\/\/static.parastorage.com\/services\/forms-viewer\/1.878.0\/viewerScript.bundle.min.js","baseUrls":{},"widgets":{}},"140603ad-af8d-84a5-2c80-a0f60cb47351":{"appDefId":"140603ad-af8d-84a5-2c80-a0f60cb47351","appDefName":"Wix Events & Tickets","viewerScriptUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/viewerScript.bundle.min.js","baseUrls":{"baseUrl":"https:\/\/events.wixapps.net\/_api\/wix-one-events-server","staticsBaseUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0"},"errorReportingUrl":"https:\/\/88170cb0c9d64f94b5821ca7fd2d55a4@sentry-next.wixpress.com\/860","widgets":{"a74ee1f5-74e3-4612-8fac-8ba5ae2cacaf":{"controllerUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/widgetController.bundle.min.js","componentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/widgetViewerWidget.bundle.min.js","noCssComponentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/widgetViewerWidgetNoCss.bundle.min.js","errorReportingUrl":"https:\/\/88170cb0c9d64f94b5821ca7fd2d55a4@sentry-next.wixpress.com\/860","widgetId":"a74ee1f5-74e3-4612-8fac-8ba5ae2cacaf","cssPerBreakpoint":true},"14d2abc2-5350-6322-487d-8c16ff833c8a":{"controllerUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/details-pageController.bundle.min.js","componentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/details-pageViewerWidget.bundle.min.js","noCssComponentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/details-pageViewerWidgetNoCss.bundle.min.js","errorReportingUrl":"https:\/\/88170cb0c9d64f94b5821ca7fd2d55a4@sentry-next.wixpress.com\/860","widgetId":"14d2abc2-5350-6322-487d-8c16ff833c8a","cssPerBreakpoint":true},"1440e92d-47d8-69be-ade7-e6de40127106":{"controllerUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/widgetController.bundle.min.js","componentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/widgetViewerWidget.bundle.min.js","noCssComponentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/widgetViewerWidgetNoCss.bundle.min.js","errorReportingUrl":"https:\/\/88170cb0c9d64f94b5821ca7fd2d55a4@sentry-next.wixpress.com\/860","widgetId":"1440e92d-47d8-69be-ade7-e6de40127106","cssPerBreakpoint":true},"405eb115-a694-4e2b-abaa-e4762808bb93":{"controllerUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/members-pageController.bundle.min.js","componentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/members-pageViewerWidget.bundle.min.js","noCssComponentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/members-pageViewerWidgetNoCss.bundle.min.js","errorReportingUrl":"https:\/\/88170cb0c9d64f94b5821ca7fd2d55a4@sentry-next.wixpress.com\/860","widgetId":"405eb115-a694-4e2b-abaa-e4762808bb93","cssPerBreakpoint":true},"29ad290c-8529-4204-8fcf-41ef46e0d3b0":{"controllerUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/scheduleController.bundle.min.js","componentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/scheduleViewerWidget.bundle.min.js","noCssComponentUrl":"https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/scheduleViewerWidgetNoCss.bundle.min.js","errorReportingUrl":"https:\/\/88170cb0c9d64f94b5821ca7fd2d55a4@sentry-next.wixpress.com\/860","widgetId":"29ad290c-8529-4204-8fcf-41ef46e0d3b0","cssPerBreakpoint":true}}},"14517e1a-3ff0-af98-408e-2bd6953c36a2":{"appDefId":"14517e1a-3ff0-af98-408e-2bd6953c36a2","appDefName":"Wix Chat","viewerScriptUrl":"https:\/\/static.parastorage.com\/services\/chat-worker\/1.1239.0\/viewer-script.bundle.min.js","baseUrls":{},"widgets":{"14517f3f-ffc5-eced-f592-980aaa0bbb5c":{"controllerUrl":"","componentUrl":"","noCssComponentUrl":"","widgetId":"14517f3f-ffc5-eced-f592-980aaa0bbb5c"}}},"dataBinding":{"appDefId":"dataBinding","appDefName":"Data Binding","viewerScriptUrl":"https:\/\/static.parastorage.com\/services\/dbsm-viewer-app\/1.8519.0\/app.js","baseUrls":{},"widgets":{}},"675bbcef-18d8-41f5-800e-131ec9e08762":{"appDefId":"675bbcef-18d8-41f5-800e-131ec9e08762","viewerScriptUrl":"https:\/\/static.parastorage.com\/services\/wix-code-viewer-app\/1.1479.725\/app.js","baseUrls":{},"widgets":{}}},"blocksBootstrapData":{"blocksAppsData":{},"experiments":{},"experimentsQueryParams":"analyze-imported-namespaces=true&init-platform-api-provider=true&get-app-def-id-from-package-name=false&disable-yarn-pnp-mode=undefined&bundler-traffic-to-aws=true&bundler-typescript-analysis=true"},"window":{"csrfToken":"1732385869|eAbcXcRYvJ8V"},"location":{"externalBaseUrl":"https:\/\/www.sheminimalist.com","isPremiumDomain":true,"metaSiteId":"6b0a6bee-31a6-429c-a658-14585b8be08e","userFileDomainUrl":"filesusr.com"},"bi":{"ownerId":"60c39eea-e8ba-4af7-a1b1-def89b656fe0","isMobileFriendly":true,"isPreview":false,"requestId":"1732456636.802202033563202724512"},"platformAPIData":{"routersConfigMap":{}},"wixCodeBootstrapData":{"wixCodeAppDefinitionId":"675bbcef-18d8-41f5-800e-131ec9e08762","wixCodeInstanceId":"b605c9f7-193a-47d1-9aa5-7f7bd55d5d56","wixCloudBaseDomain":"wix-code.com","dbsmViewerApp":"https:\/\/static.parastorage.com\/services\/dbsm-viewer-app\/1.8519.0","wixCodePlatformBaseUrl":"https:\/\/static.parastorage.com\/services\/wix-code-platform\/1.1097.93","wixCodeModel":{"appData":{"codeAppId":"29ef1316-dc15-49ec-bc5d-98874aa0dc8c"},"signedAppRenderInfo":"6f1c3277725aa5411762acb28e5b172320a13223.eyJncmlkQXBwSWQiOiIyOWVmMTMxNi1kYzE1LTQ5ZWMtYmM1ZC05ODg3NGFhMGRjOGMiLCJodG1sU2l0ZUlkIjoiYmMzNDgxZjAtOTlmNC00Njg4LWE0NzctODlhZDgxNzEyNmI2IiwiZGVtb0lkIjpudWxsLCJzaWduRGF0ZSI6MTczMjQ1NjYzNjkyMn0="},"wixCodePageIds":{},"elementorySupport":{"baseUrl":"https:\/\/www.sheminimalist.com\/_api\/wix-code-public-dispatcher-ng\/siteview"},"codePackagesData":[]},"autoFrontendModulesBaseUrl":"https:\/\/static.parastorage.com\/services\/auto-frontend-modules\/1.6238.0","disabledPlatformApps":{},"widgetsClientSpecMapData":{"14ce1214-b278-a7e4-1373-00cebd1bef7c":{},"675bbcef-18d8-41f5-800e-131ec9e08762":{},"140603ad-af8d-84a5-2c80-a0f60cb47351":{"a74ee1f5-74e3-4612-8fac-8ba5ae2cacaf":{"widgetName":"a74ee1f5-74e3-4612-8fac-8ba5ae2cacaf","componentFields":{}},"14d2abc2-5350-6322-487d-8c16ff833c8a":{"widgetName":"events","componentFields":{}},"1440e92d-47d8-69be-ade7-e6de40127106":{"widgetName":"wix_events","componentFields":{}},"405eb115-a694-4e2b-abaa-e4762808bb93":{"widgetName":"events_members_page","componentFields":{}},"29ad290c-8529-4204-8fcf-41ef46e0d3b0":{"widgetName":"agenda-page","componentFields":{}}},"14517e1a-3ff0-af98-408e-2bd6953c36a2":{"14517f3f-ffc5-eced-f592-980aaa0bbb5c":{"widgetName":"wix_visitors","componentFields":{}}},"dataBinding":{}},"essentials":{"appsConductedExperiments":{"140603ad-af8d-84a5-2c80-a0f60cb47351":{"specs.events.ui.UpdatePaymentMethodEnabled":"true","specs.events.ui.CategoryIdVeloUpdate":"true","specs.events.ui.EventDetailsSlotsViewer":"true","specs.events.ui.RicosViewer":"true","specs.events.ui.SettingsPanelUpdatedTranslations":"true","specs.events.ui.AddPageTitles":"true","specs.events.ui.UseWarmupState":"true","specs.events.ui.CssPerBreakpointIndications":"false","specs.events.ui.ExpressCheckout":"true","specs.events.ui.TicketMoreInfoButtonSetting":"true","specs.events.ui.UpdateDisplayEventsLabel":"true","specs.events.ui.StudioCompatibilitySettingsPanels":"false","specs.events.ui.UpdatedCheckoutSummary":"true","specs.events.ui.FixContentOrder":"true","specs.events.ui.MemberOnlyEventError":"true","specs.events.ui.SausageIntegration":"false","specs.events.ui.RsvpDynamicMessages":"false","specs.events.ui.PlanTicketsDesign":"true","specs.events.ui.FixPaidPlans":"true","specs.events.ui.ListDateLocationFormatSetting":"false","specs.events.ui.saveADITextsInDs":"true","specs.events.ui.WidgetSEOTags":"false","specs.events.ui.NewPolicyFontColor":"true","specs.events.ui.GetRichContentByEventId":"true","specs.events.ui.UpdatedClassicAddPanel":"false","specs.events.ui.DisableLoginHandlerOnInit":"true","specs.events.ui.PageAsDefaultComponent":"true","specs.seatings.ui.PlanNotFromReservationsService":"false","specs.events.ui.UpdateOrderSuccessContent":"true","specs.events.ui.DonationKeyboardMode":"true","specs.events.ui.UseGuestsService":"false","specs.events.ui.EventDetailsSlots":"true","specs.events.ui.SeeAllGuestsLink":"true","specs.events.ui.GiftCardsViewer":"false","specs.events.ui.DonationInputFix":"true","specs.events.ui.UseOrderPageUrl":"true","specs.events.ui.DisableMobileFontOverrides":"false"},"14ce1214-b278-a7e4-1373-00cebd1bef7c":{"specs.forms.EnableFormsInBlog":"true"},"675bbcef-18d8-41f5-800e-131ec9e08762":{"specs.wixCode.LoadWithImportAMDModule":"true","specs.wixCode.LoadNamespacesPerPage":"false","specs.wixcode.ViewerExperimentOwnerScopeTest":"true","specs.wixCode.resolveMissingPlatformNamespaces":"false","specs.wixcode.ViewerExperimentTest":"false"}}},"forceEmptySdks":false,"appDefIdToIsMigratedToGetPlatformApi":{"14ce1214-b278-a7e4-1373-00cebd1bef7c":false,"675bbcef-18d8-41f5-800e-131ec9e08762":false,"140603ad-af8d-84a5-2c80-a0f60cb47351":false,"14517e1a-3ff0-af98-408e-2bd6953c36a2":false,"dataBinding":false}},"appsScripts":{"urls":{"140603ad-af8d-84a5-2c80-a0f60cb47351":["https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/viewerScript.bundle.min.js","https:\/\/static.parastorage.com\/services\/events-viewer\/1.3110.0\/widgetController.bundle.min.js"],"14517e1a-3ff0-af98-408e-2bd6953c36a2":["https:\/\/static.parastorage.com\/services\/chat-worker\/1.1239.0\/viewer-script.bundle.min.js"],"14ce1214-b278-a7e4-1373-00cebd1bef7c":["https:\/\/static.parastorage.com\/services\/forms-viewer\/1.878.0\/viewerScript.bundle.min.js"]},"scope":"page"},"debug":{"disablePlatform":false,"disableSnapshots":false,"enableSnapshots":false}}},"siteAssets":{"dataFixersParams":{"experiments":{"specs.thunderbolt.use_data_fixed_pages_upstream":true,"dm_deleteLayoutOverridesForRefComponents":true,"dm_fixAnchorUrlFragment":true,"dm_removeTpaChildren":true},"dfVersion":"1.4131.0","isHttps":true,"isUrlMigrated":true,"metaSiteId":"6b0a6bee-31a6-429c-a658-14585b8be08e","quickActionsMenuEnabled":false,"siteId":"bc3481f0-99f4-4688-a477-89ad817126b6","siteRevision":4,"v":3,"cacheVersions":{"dataFixer":6},"oneDocEnabled":true},"modulesParams":{"features":{"moduleName":"thunderbolt-features","contentType":"application\/json","resourceType":"features","languageResolutionMethod":"QueryParam","isMultilingualEnabled":false,"externalBaseUrl":"https:\/\/www.sheminimalist.com","useSandboxInHTMLComp":false,"disableStaticPagesUrlHierarchy":false,"aboveTheFoldSectionsNum":null,"isTrackClicksAnalyticsEnabled":false,"isSocialElementsBlocked":false},"platform":{"moduleName":"thunderbolt-platform","contentType":"application\/json","resourceType":"platform","externalBaseUrl":"https:\/\/www.sheminimalist.com","staticHTMLComponentUrl":"https:\/\/www-sheminimalist-com.filesusr.com\/"},"css":{"moduleName":"thunderbolt-css","contentType":"application\/json","resourceType":"css","shouldRunVsm":true,"shouldRunCssInBrowser":false,"shouldGetCssResultObject":false,"stylableMetadataURLs":["editor-elements-library.thunderbolt.865fc6c994ff3f2728e930f33e261badbecb35c5","editor-elements-design-systems.thunderbolt.918d07b779d3bf8f14f7909843f7d97a765b4809"],"ooiVersions":"1440e92d-47d8-69be-ade7-e6de40127106%3Dp.events-viewer%2F1.3110.0%2FwidgetViewerWidgetNoCss.%3B14d2abc2-5350-6322-487d-8c16ff833c8a%3Dp.events-viewer%2F1.3110.0%2Fdetails-pageViewerWidgetNoCss.%3B29ad290c-8529-4204-8fcf-41ef46e0d3b0%3Dp.events-viewer%2F1.3110.0%2FscheduleViewerWidgetNoCss."},"cssMappers":{"moduleName":"thunderbolt-css-mappers","contentType":"application\/json","resourceType":"cssMappers","shouldRunVsm":true,"shouldRunCssInBrowser":false,"shouldGetCssResultObject":false,"stylableMetadataURLs":["editor-elements-library.thunderbolt.865fc6c994ff3f2728e930f33e261badbecb35c5","editor-elements-design-systems.thunderbolt.918d07b779d3bf8f14f7909843f7d97a765b4809"],"ooiVersions":"1440e92d-47d8-69be-ade7-e6de40127106%3Dp.events-viewer%2F1.3110.0%2FwidgetViewerWidgetNoCss.%3B14d2abc2-5350-6322-487d-8c16ff833c8a%3Dp.events-viewer%2F1.3110.0%2Fdetails-pageViewerWidgetNoCss.%3B29ad290c-8529-4204-8fcf-41ef46e0d3b0%3Dp.events-viewer%2F1.3110.0%2FscheduleViewerWidgetNoCss."},"siteMap":{"moduleName":"thunderbolt-site-map","contentType":"application\/json","resourceType":"siteMap"},"mobileAppBuilder":{"moduleName":"thunderbolt-mobile-app-builder","resourceType":"mobileAppBuilder","contentType":"application\/json"}},"clientTopology":{"mediaRootUrl":"https:\/\/static.wixstatic.com","staticMediaUrl":"https:\/\/static.wixstatic.com\/media","moduleRepoUrl":"https:\/\/static.parastorage.com\/unpkg","fileRepoUrl":"https:\/\/static.parastorage.com\/services","siteAssetsUrl":"https:\/\/siteassets.parastorage.com","pageJsonServerUrls":["https:\/\/pages.parastorage.com","https:\/\/staticorigin.wixstatic.com","https:\/\/www.sheminimalist.com","https:\/\/fallback.wix.com\/wix-html-editor-pages-webapp\/page"],"pathOfTBModulesInFileRepoForFallback":"wix-thunderbolt\/dist\/"},"siteScopeParams":{"rendererType":null,"wixCodePageIds":[],"hasTPAWorkerOnSite":false,"formFactor":"desktop","viewMode":"desktop","freemiumBanner":false,"coBrandingBanner":false,"dayfulBanner":false,"mobileActionsMenu":false,"isWixSite":false,"editorName":"Unknown","urlFormatModel":{"format":"slash","forbiddenPageUriSEOs":["app","apps","_api","robots.txt","sitemap.xml","feed.xml","sites"],"pageIdToResolvedUriSEO":{}},"pageJsonFileNames":{"hulu5":"60c39e_a88f93874adeb2a6077465b8df10d3d0_2.json","spgi1":"60c39e_123fd9954fe55a9f94cbc9685f1ab03e_2.json","c1dmp":"60c39e_e54174729ffa0b7d1e45e9a40fb874c9_4.json","masterPage":"60c39e_9b9f31926d16b8ebb173dccf2ae2b348_4.json"},"protectedPageIds":[],"routersInfo":{"configMap":{}},"isPremiumDomain":true,"disableSiteAssetsCache":false,"migratingToOoiWidgetIds":"","siteRevisionConfig":{},"registryLibrariesTopology":[{"artifactId":"editor-elements","namespace":"wixui","url":"https:\/\/static.parastorage.com\/services\/editor-elements\/1.13031.0"},{"artifactId":"editor-elements","namespace":"dsgnsys","url":"https:\/\/static.parastorage.com\/services\/editor-elements\/1.13031.0"}],"isInSeo":false,"language":"pt","originalLanguage":"pt","appDefinitionIdToSiteRevision":{},"builderWidgetsIds":{},"isClientSdkOnSite":false},"beckyExperiments":{"specs.thunderbolt.fetchBlocksDevCenterWidgetIds":true,"specs.thunderbolt.useInternalBlocksRefType":true,"specs.thunderbolt.supportSpxInEEMappers":true,"specs.thunderbolt.fixDisabledLinkButtonStyles":true,"specs.thunderbolt.one_cell_grid_display_flex":true,"specs.thunderbolt.DatePickerPortal":true,"specs.thunderbolt.updateRichTextSemanticClassNamesOnCorvid":true,"specs.thunderbolt.DDMenuMigrateCssCarmiMapper":true,"specs.thunderbolt.buttonUdp":true,"specs.thunderbolt.defaultDisplayBlock":true,"specs.thunderbolt.fontsFromExternal":true,"specs.thunderbolt.removeHeaderFooterWrappers":true,"specs.thunderbolt.fixRatingsInputLeftShift":true,"specs.thunderbolt.minMaxInCheckboxGroup":true,"specs.thunderbolt.fiveGridLineStudioSkins":true,"specs.thunderbolt.motionFeature":true,"specs.thunderbolt.useSvgLoaderFeature":true,"specs.thunderbolt.pageLayoutFixChrome130":true,"specs.thunderbolt.noHeightOnTextMask":true,"specs.thunderbolt.WRichTextVerticalTextNowidth":true,"specs.thunderbolt.imageEncodingAVIF":true,"specs.thunderbolt.ooiCssAsLinkTag":true,"specs.thunderbolt.TextInputAutoFillFix":true},"manifests":{"node":{"modulesToHashes":{"thunderbolt-features":"a57c037f.bundle.min","thunderbolt-platform":"48976be2.bundle.min","thunderbolt-css":"42bd1938.bundle.min","thunderbolt-site-map":"36e164ce.bundle.min","thunderbolt-mobile-app-builder":"58ea54f3.bundle.min","thunderbolt-byref":"695df3c7.bundle.min","thunderbolt-remote-structure":"fb738823.bundle.min","thunderbolt-css-mappers":"42bd1938.bundle.min"}},"web":{"modulesToHashes":{"thunderbolt-features":"2743092b.bundle.min","thunderbolt-platform":"7279fc59.bundle.min","thunderbolt-css":"5a11bbeb.bundle.min","thunderbolt-site-map":"9d1d8a5a.bundle.min","thunderbolt-mobile-app-builder":"5bf65dd7.bundle.min","thunderbolt-byref":"6e28e88f.bundle.min","thunderbolt-remote-structure":"3bb88b1d.bundle.min","thunderbolt-css-mappers":"fcc5c176.bundle.min","webpack-runtime":"22519d38.bundle.min"},"webpackRuntimeBundle":"22519d38.bundle.min"},"webWorker":{"modulesToHashes":{"thunderbolt-features":"15acf3fd.bundle.min","thunderbolt-platform":"4f6eb3ea.bundle.min","thunderbolt-css":"cd659f75.bundle.min","thunderbolt-site-map":"4bea29a0.bundle.min","thunderbolt-mobile-app-builder":"b304522f.bundle.min","thunderbolt-byref":"ac49035b.bundle.min","thunderbolt-remote-structure":"62f7bafa.bundle.min","thunderbolt-css-mappers":"cd659f75.bundle.min"}}},"staticHTMLComponentUrl":"https:\/\/www-sheminimalist-com.filesusr.com\/","remoteWidgetStructureBuilderVersion":"1.251.0","blocksBuilderManifestGeneratorVersion":"1.92.0"},"experiments":{"specs.thunderbolt.fetchBlocksDevCenterWidgetIds":true,"specs.thunderbolt.inMemoryPaypalAuthToken":true,"specs.thunderbolt.roundBordersInResponsiveContainer":true,"specs.thunderbolt.useInternalBlocksRefType":true,"specs.thunderbolt.compCssMappers_catharsis":true,"specs.thunderbolt.userAsFactory":true,"specs.thunderbolt.getMemberDetailsFromMembersNg":true,"specs.thunderbolt.UseEEImpress":true,"specs.thunderbolt.loadNonMainSdksOnlyIfUsed":true,"specs.thunderbolt.fixTextInputRaceCondition":true,"specs.thunderbolt.supportSpxInEEMappers":true,"specs.thunderbolt.fixDisabledLinkButtonStyles":true,"specs.thunderbolt.UseEcomFemBi":true,"specs.thunderbolt.one_cell_grid_display_flex":true,"specs.thunderbolt.maxWidthInCustomScale":true,"specs.thunderbolt.readWidgetPresetsFromMasterPage":true,"specs.thunderbolt.supportPositionDesignVar":true,"specs.thunderbolt.hardenWindowOpen":true,"specs.thunderbolt.viewerStateManager":true,"specs.thunderbolt.fedops_enableSampleRateForAppNames":true,"specs.thunderbolt.excludeInstanceFromQueryParams":true,"specs.thunderbolt.fixClassNameOverride":true,"specs.thunderbolt.ComponentsRegistryFixAnonymousDefine":true,"specs.thunderbolt.addTooltipToCopyLinkButton":true,"specs.thunderbolt.hardenClientGlobals_Text":true,"specs.thunderbolt.SetNoCacheOnAppError":true,"specs.thunderbolt.bundlerTrafficToAws":true,"specs.thunderbolt.reactScriptSyncLoading":true,"specs.thunderbolt.edixIsInFirstFold":true,"specs.thunderbolt.skipCarmiCalculationForNonCssMappersRequest":true,"specs.thunderbolt.wixRealtimeGetAppTokenFromPlatformUtils":true,"specs.thunderbolt.newLoginFlowOnProtectedCollection":true,"specs.thunderbolt.elementorySupportRemoveCommonConfigHeader":true,"specs.thunderbolt.mergeSkinDefaultsFromRegistry":true,"specs.thunderbolt.deprecatewixperf":true,"specs.thunderbolt.useNewRegisterLogin":true,"specs.thunderbolt.DatePickerPortal":true,"specs.thunderbolt.ooi_register_with_components_registrar":true,"specs.thunderbolt.preventApplySessionTokenInSSR":true,"specs.thunderbolt.ShouldUseNewIAMSocialFlow":true,"specs.thunderbolt.splitCssMappersToNewSAM":true,"specs.thunderbolt.useIAMEnabledConnections":true,"specs.thunderbolt.use_data_fixed_pages_upstream":true,"specs.thunderbolt.FixRgbToHex":true,"specs.thunderbolt.facebookVideoPlayerDimensions":true,"specs.thunderbolt.useElementoryRelativePath":true,"specs.thunderbolt.ooiInComponentsRegistry":true,"specs.thunderbolt.FixSitePasswordURL":true,"specs.thunderbolt.scrollBlockerPackage":true,"specs.thunderbolt.fixVectorImageShouldScaleStroke":true,"specs.thunderbolt.native_css_mappers_video":true,"specs.thunderbolt.ooiCssModelNotInCarmi":true,"specs.thunderbolt.updateRichTextSemanticClassNamesOnCorvid":true,"specs.thunderbolt.enableClientSdk":true,"specs.thunderbolt.shouldFetchLoginUrlByClientId":true,"specs.thunderbolt.shouldLoadGoogleSdkEarly":true,"specs.thunderbolt.hardenClientGlobals_Array_URL_JSON":true,"specs.thunderbolt.siteScrollBlockerWithoutVar":true,"specs.thunderbolt.moveInitCustomElementsAfterSiteContainer":true,"specs.thunderbolt.shouldUseMemberPrivacySettingsService":true,"specs.thunderbolt.DDMenuMigrateCssCarmiMapper":true,"specs.thunderbolt.buttonUdp":true,"specs.thunderbolt.alwaysApplySessionTokenOnIAM":true,"specs.thunderbolt.UseBlocksSignedInstance":true,"specs.thunderbolt.enableSignUpPrivacyNoteType":true,"specs.thunderbolt.defaultDisplayBlock":true,"specs.thunderbolt.anchorScrollToStickyComponent":true,"specs.thunderbolt.veloWixMembersAmbassadorV2":true,"specs.thunderbolt.customElemCollapsedheight":true,"specs.thunderbolt.megaMenuMouseLeave":true,"specs.thunderbolt.UseWixDataGetRequests":true,"specs.thunderbolt.WRichTextVerticalAlignTopSafariAndIOS":true,"specs.thunderbolt.fontsFromExternal":true,"specs.thunderbolt.removeHeaderFooterWrappers":true,"specs.thunderbolt.fixRatingsInputLeftShift":true,"specs.thunderbolt.UseWixDataItemService":true,"specs.thunderbolt.splitLinkUtils":true,"specs.thunderbolt.comp_designCss_selectorToCss_Mappers_catharsis":true,"specs.thunderbolt.UseCloudDataUrlWithBaseExternalUrl":true,"specs.thunderbolt.minMaxInCheckboxGroup":true,"specs.thunderbolt.splitCssRequest":true,"specs.thunderbolt.allowExternalAppsInReact18":true,"specs.promote.ar.reportEcomPlatformPurchaseEvents":true,"specs.thunderbolt.useIAMPlatform":true,"specs.thunderbolt.fiveGridLineStudioSkins":true,"specs.thunderbolt.newComponentsWrapper":true,"specs.thunderbolt.TPA3DGalleryEEUrl":true,"specs.thunderbolt.motionFeature":true,"specs.thunderbolt.updateLoginSocialBarMenuItemsSDKData":true,"specs.thunderbolt.carouselGalleryImageFitting":true,"specs.thunderbolt.enableCustomElements":true,"specs.thunderbolt.useSvgLoaderFeature":true,"specs.thunderbolt.ooi_lazy_load_components":true,"specs.thunderbolt.pageLayoutFixChrome130":true,"specs.thunderbolt.loginSocialBarEnableUrlChangeListeners":true,"specs.thunderbolt.buttonUdp_loggedIn":true,"specs.thunderbolt.InitPlatformApiProvider":true,"specs.thunderbolt.noHeightOnTextMask":true,"specs.thunderbolt.allowRoutingBlockerManager":true,"specs.thunderbolt.skipReactionWhenNavigate":true,"specs.thunderbolt.WRichTextVerticalTextNowidth":true,"specs.thunderbolt.appLoadInPanorama":true,"specs.thunderbolt.imageEncodingAVIF":true,"displayWixAdsNewVersion":true,"specs.thunderbolt.BundlerTypescriptListExportedFunctions":true,"specs.thunderbolt.smModalsShouldWaitForAppDidMount":true,"specs.thunderbolt.ooi_css_optimization":true,"specs.thunderbolt.SharedPanoramaGlobalConfig":true,"specs.thunderbolt.fixGapBelowTextboxonMobileSite":true,"specs.ShouldForceCaptchaVerificationOnSignupSpec":"Disabled","specs.ShouldForceCaptchaVerificationOnLoginSpec":"Disabled","specs.thunderbolt.allowSanitizeSvgInSSR":true,"specs.thunderbolt.skipLivePreviewRefreshOnSetProps":true,"specs.thunderbolt.editorElementsRegistryEnsureComponentLoaderFix":true,"specs.thunderbolt.rerenderComponentsWhenPropsBeingUpdatedWhileInFirstRender":true,"specs.thunderbolt.moveFedopsLoadStartToBody":true,"specs.thunderbolt.fixResponsiveBoxContainerLayoutClass":true,"specs.thunderbolt.shouldFetchLogoutUrlByClientId":true,"specs.thunderbolt.pagesCssInHead":true,"specs.thunderbolt.removeWixEmbedsAppToken":true,"specs.thunderbolt.ooiCssAsLinkTag":true,"specs.thunderbolt.convertBirthdateToISOString":true,"specs.thunderbolt.WixCodeAnalyzeImportedNamespaces":true,"specs.thunderbolt.getAppTokenForCustomElement":true,"specs.thunderbolt.send_script_resources_to_bi":true,"specs.thunderbolt.allowAnimatedImageTransform":true,"specs.thunderbolt.send_unused_preloads_to_bi":true,"specs.thunderbolt.newAuthorizedPagesFlow":true,"specs.thunderbolt.reportPanelViewerInstanceInitialize":true,"specs.thunderbolt.Panorama":true,"specs.thunderbolt.fetchCurrentMemberFromMembersNg":true,"specs.thunderbolt.logoutOnIAM":true,"specs.thunderbolt.newSpxResolving":true,"specs.thunderbolt.TextInputAutoFillFix":true},"fleetConfig":{"fleetName":"thunderbolt-renderer-gradual","type":"Rollout","code":1},"dynamicModelUrl":"https:\/\/www.sheminimalist.com\/_api\/v2\/dynamicmodel","accessTokensUrl":"https:\/\/www.sheminimalist.com\/_api\/v1\/access-tokens","rollout":{"siteAssetsVersionsRollout":false,"isDACRollout":0,"isTBRollout":true},"commonConfig":{"brand":"wix","host":"VIEWER","bsi":"","consentPolicy":{},"consentPolicyHeader":{},"siteRevision":"4","renderingFlow":"NONE","language":"pt","locale":"pt-br"},"componentsLibrariesTopology":[{"artifactId":"editor-elements","namespace":"wixui","url":"https:\/\/static.parastorage.com\/services\/editor-elements\/1.13031.0"},{"artifactId":"editor-elements","namespace":"dsgnsys","url":"https:\/\/static.parastorage.com\/services\/editor-elements\/1.13031.0"}],"anywhereConfig":{},"interactionSampleRatio":0.01,"rendererType":null,"isPartialRouteMatching":false,"isExcludedFromSecurityExperiments":false,"react18Compatible":true,"react18HydrationBlackListWidgets":[]}</script>
<script>window.viewerModel = JSON.parse(document.getElementById('wix-viewer-model').textContent)</script>
<!-- renderIndicator -->


<!-- used platform apis start -->
<script type="application/json" id="used-platform-apis-data">["location","window","site","seo","user"]</script>
<script>window.usedPlatformApis = JSON.parse(document.getElementById('used-platform-apis-data').textContent)</script>
<!-- used platform apis end -->

<!-- Business Manager -->

<!-- initCustomElements #2 -->

    <script data-url="https://static.parastorage.com/services/wix-thunderbolt/dist/wixDropdownWrapper.inline.085dd038.bundle.min.js">"use strict";(self.webpackJsonp__wix_thunderbolt_app=self.webpackJsonp__wix_thunderbolt_app||[]).push([[1308],{72757:function(n,t,p){(0,p(58223).Rr)()}},function(n){n.O(0,[592,8398,8875],(function(){return t=72757,n(n.s=t);var t}));n.O()}]);
//# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/wixDropdownWrapper.inline.085dd038.bundle.min.js.map</script>

<script data-url="https://static.parastorage.com/services/wix-thunderbolt/dist/lazyCustomElementWrapper.inline.db3bffcb.bundle.min.js">"use strict";(self.webpackJsonp__wix_thunderbolt_app=self.webpackJsonp__wix_thunderbolt_app||[]).push([[4198],{98700:function(e,n,t){var o=t(58223),i=t(20826);((e=window)=>{const{mediaServices:n,environmentConsts:t,requestUrl:r,staticVideoUrl:s}=e.customElementNamespace;(0,o.EH)(e,n,{...t,prefersReducedMotion:(0,i.O)(window,r),staticVideoUrl:s}),(0,o.jh)(e),(0,o.p7)(e,n,t)})(),window.resolveExternalsRegistryModule("imageClientApi")},20826:function(e,n,t){t.d(n,{O:function(){return o}});const o=(e,n="")=>n.toLowerCase().includes("forcereducedmotion")||Boolean(e?.matchMedia("(prefers-reduced-motion: reduce)").matches)}},function(e){e.O(0,[592,8398,8875],(function(){return n=98700,e(e.s=n);var n}));e.O()}]);
//# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/lazyCustomElementWrapper.inline.db3bffcb.bundle.min.js.map</script>

<!-- initial scripts -->
<script data-url="https://static.parastorage.com/services/wix-thunderbolt/dist/createPlatformWorker.inline.64e2d04b.bundle.min.js">"use strict";(self.webpackJsonp__wix_thunderbolt_app=self.webpackJsonp__wix_thunderbolt_app||[]).push([[3169],{11682:function(e,t,r){r.r(t),r.d(t,{platformWorkerPromise:function(){return l}});const{viewerModel:{siteAssets:{clientTopology:s},siteFeatures:a,siteFeaturesConfigs:{platform:o},site:{externalBaseUrl:p}},usedPlatformApis:c}=window,i=Worker&&a.includes("platform"),l=i?(async()=>{const e="platform_create-worker started";performance.mark(e);const{clientWorkerUrl:t,appsScripts:r,bootstrapData:a,sdksStaticPaths:i}=o,{appsSpecData:l,appDefIdToIsMigratedToGetPlatformApi:n,forceEmptySdks:d}=a,m=t.startsWith("http://localhost:")||t.startsWith("https://bo.wix.com/suricate/")||document.baseURI!==location.href?(e=>{const t=new Blob([`importScripts('${e}');`],{type:"application/javascript"});return URL.createObjectURL(t)})(t):t.replace(s.fileRepoUrl,`${p}/_partials`),f=new Worker(m),u=Object.keys(r.urls).filter((e=>!l[e]?.isModuleFederated)).reduce(((e,t)=>(e[t]=r.urls[t],e)),{});if(i&&i.mainSdks&&i.nonMainSdks){Object.values(n).every((e=>e))||d?f.postMessage({type:"preloadNamespaces",namespaces:c}):f.postMessage({type:"preloadAllNamespaces",sdksStaticPaths:i})}f.postMessage({type:"platformScriptsToPreload",appScriptsUrls:u});const k="platform_create-worker ended";return performance.mark(k),performance.measure("Create Platform Web Worker",e,k),f})():Promise.resolve()}},function(e){var t;t=11682,e(e.s=t)}]);
//# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/createPlatformWorker.inline.64e2d04b.bundle.min.js.map</script>
<script data-url="https://static.parastorage.com/services/wix-thunderbolt/dist/windowMessageRegister.inline.5ef3f048.bundle.min.js">"use strict";(self.webpackJsonp__wix_thunderbolt_app=self.webpackJsonp__wix_thunderbolt_app||[]).push([[8800],{1643:function(){!function(n){const e=new Set,a=[],t=n=>{const a=[];e.forEach((e=>{n.canHandleEvent(e)&&a.push(e)})),a.forEach((a=>{e.delete(a),n.handleEvent(a)}))};n.addEventListener("message",(n=>{const s={source:n.source,data:n.data,origin:n.origin},d=a.find((n=>n.canHandleEvent(s)));d?(t(d),d.handleEvent(s)):e.add(s)})),n._addWindowMessageHandler=n=>{a.push(n),t(n)}}(window)}},function(n){var e;e=1643,n(n.s=e)}]);
//# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/windowMessageRegister.inline.5ef3f048.bundle.min.js.map</script>
<script async="" src="https://static.parastorage.com/services/wix-thunderbolt/dist/thunderbolt-commons.b7a35b00.bundle.min.js"></script>
<script data-url="https://static.parastorage.com/services/wix-thunderbolt/dist/bi-common.inline.e837043d.bundle.min.js">"use strict";(self.webpackJsonp__wix_thunderbolt_app=self.webpackJsonp__wix_thunderbolt_app||[]).push([[507],{27037:function(e,t,r){r.d(t,{h:function(){return i}});var o=r(65672);const n=({useBatch:e=!0,publishMethod:t=o.PublishMethods.Auto,endpoint:r,muteBi:n=!1,biStore:i,sessionManager:s,fetch:a,factory:c})=>c({useBatch:e,publishMethod:t,endpoint:r,...i.frogUrlOverride?{host:i.frogUrlOverride.replace(/^https?:\/\//,"")+"/_frog"}:{}}).setMuted(n).withUoUContext({msid:i.msid}).withNonEssentialContext({visitorId:()=>s.getVisitorId(),siteMemberId:()=>s.getSiteMemberId()}).updateDefaults({vsi:i.viewerSessionId,_av:`thunderbolt-${i.viewerVersion}`,isb:i.is_headless,...i.is_headless&&{isbr:i.is_headless_reason}}),i={createBaseBiLoggerFactory:n,createBiLoggerFactoryForFedops:e=>{const{biStore:{session_id:t,initialTimestamp:r,initialRequestTimestamp:o,dc:i,microPop:s,is_headless:a,isCached:c,pageData:u,rolloutData:d,caching:p,checkVisibility:l=(()=>""),viewerVersion:m,requestUrl:f,st:h,isSuccessfulSSR:I},muteBi:S=!1}=e;return n({...e,muteBi:S}).updateDefaults({ts:()=>Date.now()-r,tsn:()=>function({initialRequestTimestamp:e}){return"undefined"==typeof window?Math.round(performance.now()+(performance.timeOrigin-e)):Math.round(performance.now())}({initialRequestTimestamp:o}),dc:i,microPop:s,caching:p,session_id:t,st:h,url:f||u.pageUrl,ish:a,pn:u.pageNumber,isFirstNavigation:1===u.pageNumber,pv:l,pageId:u.pageId,isServerSide:!1,isSuccessfulSSR:I,is_lightbox:u.isLightbox,is_cached:c,is_sav_rollout:d.siteAssetsVersionsRollout?1:0,is_dac_rollout:d.isDACRollout?1:0,v:m})}}},36451:function(e,t,r){r.d(t,{W:function(){return d}});var o=r(76022),n=r(5189),i=r(76542),s=r(75967),a=r(66715),c=r(76904),u=r(23184);const d=({biLoggerFactory:e,customParams:t={},phasesConfig:r="SEND_ON_FINISH",appName:d="thunderbolt",presetType:p=o.u.BOLT,reportBlackbox:l=!1,paramsOverrides:m={},factory:f,muteThunderboltEvents:h=!1,experiments:I={},monitoringData:S})=>{const g=f(d,{presetType:p,phasesConfig:r,isPersistent:!0,isServerSide:!1,reportBlackbox:l,customParams:t,biLoggerFactory:e,paramsOverrides:m,enableSampleRateForAppNames:(0,c.k)("specs.thunderbolt.fedops_enableSampleRateForAppNames",I)??("undefined"!=typeof window&&(0,c.k)("specs.thunderbolt.fedops_enableSampleRateForAppNames",window?.viewerModel?.experiments))}),{interactionStarted:A,interactionEnded:N,appLoadingPhaseStart:R,appLoadingPhaseFinish:_,appLoadStarted:v,appLoaded:b}=g,E=(0,c.k)("specs.thunderbolt.fedopsMuteErrors",I),w=()=>"undefined"==typeof window,T=e=>e?.evid&&26===parseInt(e.evid,10),O=(()=>{const e=(0,a.n)();S?.viewerSessionId&&e.setSessionId(S.viewerSessionId);const r=S?.metaSiteId??"",o=S?.dc??"",n=!!S?.isHeadless,c=!!S?.isCached,u=!!S?.rolloutData?.isTBRollout,l=!!S?.rolloutData?.isDACRollout,m=!!S?.rolloutData?.siteAssetsVersionsRollout;return(0,i.V)({baseParams:{platform:s.OD.Viewer,msid:r,fullArtifactId:"com.wixpress.html-client.wix-thunderbolt",componentId:d},pluginParams:{useBatch:!0},data:{dataCenter:o,isHeadless:n,isCached:c,isRollout:u,isDacRollout:l,isSavRollout:m,isSsr:!1,presetType:p,customParams:t},reporterOptions:{fetchFn:fetch}}).withGlobalConfig(e).client()})(),D=e=>{O&&!w()&&(e?O.reportLoadStart():O.reportLoadFinish())},y=(e,t)=>{if(!O)return;const r=e.replaceAll(" ","_");t?O.transaction(r).start():O.transaction(r).finish()},B=(e,t,r)=>"react-native"!==u.env.RENDERER_BUILD&&(T(r)?E:!((e,t,r)=>{const i=t?.siteAssetsModule??"";return!(p===o.u.BOLT)||n.EQ.has(e)||r&&["thunderbolt-css","thunderbolt-features","thunderbolt-platform"].includes(i)})(e,r,t)),C=(e,t,r,o)=>{if(n.iy.has(d))return!0;if(B(e,t,o))return!1;if(o?.siteAssetsModule)return!0;const i=!!r?.appId&&!n.S_.has(r.appId),s=n.S2.has(e),a=n.wV.has(e);return s||i||!a&&!h};return g.interactionStarted=(e,t)=>{if(T(t?.paramsOverrides)?((e={})=>{if(!O)return;const{errorInfo:t,errorType:r}=e,o=new Error(t);O?.errorMonitor().reportError(o,{errorName:r,environment:"Viewer"})})(t?.paramsOverrides):w()||y(e,!0),C(e,!0,void 0,t?.paramsOverrides))return A.call(g,e,t);try{performance.mark(`${e} started`)}catch{}return{timeoutId:0}},g.interactionEnded=(e,t)=>{if(w()||y(e,!1),C(e,!0,void 0,t?.paramsOverrides))N.call(g,e,t);else try{performance.mark(`${e} ended`)}catch{}},g.appLoadingPhaseStart=(e,t)=>{if(y(e,!0),C(e,!1,t))R.call(g,e,t);else try{performance.mark(`${e} started`)}catch{}},g.appLoadingPhaseFinish=(e,t,r)=>{if(y(e,!1),C(e,!1,t))_.call(g,e,t,r);else try{performance.mark(`${e} finished`)}catch{}},g.appLoadStarted=e=>{D(!0),v.call(g,e)},g.appLoaded=e=>{D(!1),b.call(g,e)},g}},58839:function(e,t,r){r.d(t,{c:function(){return o}});const o=e=>{const t="thunderbolt-commons";return{reportAsyncWithCustomKey:(r,o,n)=>e.reportAsyncWithCustomKey(r,t,o,n),runAsyncAndReport:(r,o)=>e.runAsyncAndReport(r,t,o),runAndReport:(r,o)=>e.runAndReport(r,t,o),reportError:r=>{e.captureError(r,{tags:{feature:t,clientMetricsReporterError:!0}})},meter:(t,r)=>{e.meter(t,r)},histogram:(e,t)=>{}}}},97056:function(e,t,r){r.r(t),r.d(t,{createBiReporter:function(){return s},site:function(){return a}});var o=r(9492),n=r(63590);const i=(...e)=>console.log("[TB] ",...e);function s(e=i,t=i,r=(()=>{}),o=i,n=i){return{reportBI:e,sendBeat:t,setDynamicSessionData:r,reportPageNavigation:o,reportPageNavigationDone:n}}const a=({biReporter:e,wixBiSession:t,viewerModel:r})=>i=>{i(o.O$).toConstantValue(t),i(o.u6).toConstantValue(e),i(o.lR).toConstantValue((0,n.f)(r))}},25196:function(e,t,r){var o,n;r.d(t,{lF:function(){return o},mY:function(){return i},w4:function(){return n}}),function(e){e[e.START=1]="START",e[e.VISIBLE=2]="VISIBLE",e[e.PAGE_FINISH=33]="PAGE_FINISH",e[e.FIRST_CDN_RESPONSE=4]="FIRST_CDN_RESPONSE",e[e.TBD=-1]="TBD",e[e.PAGE_NAVIGATION=101]="PAGE_NAVIGATION",e[e.PAGE_NAVIGATION_DONE=103]="PAGE_NAVIGATION_DONE"}(o||(o={})),function(e){e[e.NAVIGATION=1]="NAVIGATION",e[e.DYNAMIC_REDIRECT=2]="DYNAMIC_REDIRECT",e[e.INNER_ROUTE=3]="INNER_ROUTE",e[e.NAVIGATION_ERROR=4]="NAVIGATION_ERROR",e[e.CANCELED=5]="CANCELED"}(n||(n={}));const i={1:"page-navigation",2:"page-navigation-redirect",3:"page-navigation-inner-route",4:"navigation-error",5:"navigation-canceled"}},9492:function(e,t,r){r.d(t,{O$:function(){return n},lR:function(){return i},u6:function(){return o}});const o=Symbol.for("BI"),n=Symbol.for("WixBiSessionSymbol"),i=Symbol.for("appName")}}]);
//# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/bi-common.inline.e837043d.bundle.min.js.map</script>
<script async="" src="https://static.parastorage.com/services/wix-thunderbolt/dist/main.d98de0fd.bundle.min.js"></script>
<script async="" src="https://static.parastorage.com/services/wix-thunderbolt/dist/main.renderer.1d21f023.bundle.min.js"></script>
<!-- lodash script -->
<script async="" onload="resolveExternalsRegistryModule('lodash')" src="https://static.parastorage.com/unpkg/lodash@4.17.21/lodash.min.js"></script>
<!-- react -->
<script crossorigin="" onload="resolveExternalsRegistryModule('react')" src="https://static.parastorage.com/unpkg/react@18.3.1/umd/react.production.min.js"></script>
<!-- react-dom -->
<script crossorigin="" defer="" onload="resolveExternalsRegistryModule('reactDOM')" src="https://static.parastorage.com/unpkg/react-dom@18.3.1/umd/react-dom.production.min.js"></script>
<!-- scriptTagsToPreload -->
<link href="https://static.parastorage.com/services/events-viewer/1.3110.0/widgetViewerWidgetNoCss.bundle.min.js" rel="preload" as="fetch" crossorigin="anonymous"></link>
<link href="https://static.parastorage.com/services/events-viewer/1.3110.0/widgetViewerWidgetNoCss.bundle.min.js" rel="preload" as="fetch" crossorigin="anonymous"></link>


    <!-- Old Browsers Deprecation -->
    <script async="" src="https://static.parastorage.com/services/wix-thunderbolt/dist/browser-deprecation.bundle.es5.js"></script>


<!-- bi -->
<script>
    window.clientSideRender = false;
</script>
<!-- bi -->
<script data-url="https://static.parastorage.com/services/wix-thunderbolt/dist/bi.inline.b203996e.bundle.min.js">"use strict";(self.webpackJsonp__wix_thunderbolt_app=self.webpackJsonp__wix_thunderbolt_app||[]).push([[4017],{16992:function(e,i,n){n.d(i,{K:function(){return m}});var t=n(25196);const r=e=>{let i=!1;if(!/\(iP(hone|ad|od);/i.test(window?.navigator?.userAgent))try{i=navigator.sendBeacon(e)}catch(e){}i||((new Image).src=e)},s=null;function o([e,i]){return i!==s&&`${e}=${i}`}function a(){const e=document.cookie.match(/_wixCIDX=([^;]*)/);return e&&e[1]}function c(e){if(!e)return s;const i=new URL(decodeURIComponent(e));return i.search="?",encodeURIComponent(i.href)}var d=function(e,{eventType:i,ts:n,tts:t,extra:r=""},d,u){const l=function(e){const i=e.split("&").reduce(((e,i)=>{const[n,t]=i.split("=");return{...e,[n]:t}}),{});return(e,n)=>void 0!==i[e]?i[e]:n}(r),p=(m=d,e=>void 0===m[e]?s:m[e]);var m;let w=!0;const f=window?.consentPolicyManager;if(f){const e=f.getCurrentConsentPolicy();if(e){const{policy:i}=e;w=!(i.functional&&i.analytics)}}const g=p("requestUrl"),h={src:"29",evid:"3",viewer_name:p("viewerName"),caching:p("caching"),client_id:w?s:a(),dc:p("dc"),microPop:p("microPop"),et:i,event_name:e?encodeURIComponent(e):s,is_cached:p("isCached"),is_platform_loaded:p("is_platform_loaded"),is_rollout:p("is_rollout"),ism:p("isMesh"),isp:0,isjp:p("isjp"),iss:p("isServerSide"),ssr_fb:p("fallbackReason"),ita:l("ita",d.checkVisibility()?"1":"0"),mid:w?s:u?.siteMemberId||s,msid:p("msId"),pid:l("pid",s),pn:l("pn","1"),ref:document.referrer&&!w?encodeURIComponent(document.referrer):s,sar:w?s:l("sar",screen.availWidth?`${screen.availWidth}x${screen.availHeight}`:s),sessionId:w&&f?s:p("sessionId"),siterev:d.siteRevision||d.siteCacheRevision?`${d.siteRevision}-${d.siteCacheRevision}`:s,sr:w?s:l("sr",screen.width?`${screen.width}x${screen.height}`:s),st:p("st"),ts:n,tts:t,url:w?c(g):g,v:window?.thunderboltVersion||"0.0.0",vid:w?s:u?.visitorId||s,bsi:w?s:u?.bsi||s,vsi:p("viewerSessionId"),wor:w||!window.outerWidth?s:`${window.outerWidth}x${window.outerHeight}`,wr:w?s:l("wr",window.innerWidth?`${window.innerWidth}x${window.innerHeight}`:s),_brandId:d.commonConfig?.brand||s,nt:l("nt",s)};return`https://frog.wix.com/bt?${Object.entries(h).map(o).filter(Boolean).join("&")}`};const u=(e,i)=>{let n,t="none",r=e.match(/ssr-caching="?cache[,#]\s*desc=([\w-]+)(?:[,#]\s*varnish=(\w+))?(?:[,#]\s*dc[,#]\s*desc=([\w-]+))?(?:"|;|$)/);if(!r&&window.PerformanceServerTiming){const e=(e=>{let i,n;try{i=e()}catch(e){i=[]}const t=[];return i.forEach((e=>{switch(e.name){case"cache":t[1]=e.description;break;case"varnish":t[2]=e.description;break;case"dc":n=e.description}})),{microPop:n,matches:t}})(i);n=e.microPop,r=e.matches}if(r&&r.length&&(t=`${r[1]},${r[2]||"none"}`,n||(n=r[3])),"none"===t){const e="undefined"!=typeof performance?performance.timing:null;e&&e.responseStart-e.requestStart==0&&(t="browser")}return{caching:t,isCached:t.includes("hit"),...n?{microPop:n}:{}}},l={WixSite:1,UGC:2,Template:3};var p=()=>{const{fedops:e,viewerModel:{siteFeaturesConfigs:i,requestUrl:n,site:t,fleetConfig:r,commonConfig:s,interactionSampleRatio:o},clientSideRender:a,santaRenderingError:c}=window,d=(({requestUrl:e,interactionSampleRatio:i})=>{const n=new URL(e).searchParams;return n.has("sampleEvents")?"true"===n.get("sampleEvents"):Math.random()<(i?1-i:.9)})({requestUrl:n,interactionSampleRatio:o}),p=(e=>{const{userAgent:i}=e.navigator;return/instagram.+google\/google/i.test(i)?"":/bot|google(?!play)|phantom|crawl|spider|headless|slurp|facebookexternal|Lighthouse|PTST|^mozilla\/4\.0$|^\s*$/i.test(i)?"ua":""})(window)||(()=>{try{if(window.self===window.top)return""}catch(e){}return"iframe"})()||(()=>{if(!Function.prototype.bind)return"bind";const{document:e,navigator:i}=window;if(!e||!i)return"document";const{webdriver:n,userAgent:t,plugins:r,languages:s}=i;if(n)return"webdriver";if(!r||Array.isArray(r))return"plugins";if(Object.getOwnPropertyDescriptor(r,"0")?.writable)return"plugins-extra";if(!t)return"userAgent";if(t.indexOf("Snapchat")>0&&e.hidden)return"Snapchat";if(!s||0===s.length||!Object.isFrozen(s))return"languages";try{throw Error()}catch(e){if(e instanceof Error){const{stack:i}=e;if(i&&/ (\(internal\/)|(\(?file:\/)/.test(i))return"stack"}}return""})()||(({seo:e})=>e?.isInSEO?"seo":"")(i);return{suppressbi:n.includes("suppressbi=true"),initialTimestamp:window.initialTimestamps.initialTimestamp,initialRequestTimestamp:window.initialTimestamps.initialRequestTimestamp,viewerSessionId:e.vsi,viewerName:t.appNameForBiEvents,siteRevision:String(t.siteRevision),msId:t.metaSiteId,is_rollout:0===r.code||1===r.code?r.code:null,is_platform_loaded:0,requestUrl:encodeURIComponent(n),sessionId:String(t.sessionId),btype:p,isjp:!!p,dc:t.dc,siteCacheRevision:"__siteCacheRevision__",checkVisibility:(()=>{let e=!0;function i(){e=e&&!0!==document.hidden}return document.addEventListener("visibilitychange",i,{passive:!0}),i(),()=>(i(),e)})(),...u(document.cookie,(()=>[...performance.getEntriesByType("navigation")[0].serverTiming||[]])),isMesh:1,st:l[t.siteType]||0,commonConfig:s,muteThunderboltEvents:d,isServerSide:a?0:1,isSuccessfulSSR:!a,fallbackReason:c?.errorInfo}};const m=function(){const e=p(),i={};let n=1;const s=(t,s,o={})=>{const a=Date.now(),c=Math.round(performance.now()),u=a-e.initialTimestamp;if(function(e,i){if(i&&performance.mark){const n=`${i} (beat ${e})`;performance.mark(n)}}(t,s),e.suppressbi||window.__browser_deprecation__)return;const{pageId:l,pageNumber:p=n,navigationType:m}=o;let w=`&pn=${p}`;l&&(w+=`&pid=${l}`),m&&(w+=`&nt=${m}`);const f=d(s,{eventType:t,ts:u,tts:c,extra:w},e,i);r(f)};return{sendBeat:s,reportBI:function(e,i){!function(e,i){const n=i?`${e} - ${i}`:e,t="end"===i?`${e} - start`:null;performance.mark(n),performance.measure&&t&&performance.measure(`\u2b50${e}`,t,n)}(e,i)},wixBiSession:e,sendBeacon:r,setDynamicSessionData:({visitorId:e,siteMemberId:n,bsi:t})=>{i.visitorId=e||i.visitorId,i.siteMemberId=n||i.siteMemberId,i.bsi=t||i.bsi},reportPageNavigation:function(e){n+=1,s(t.lF.PAGE_NAVIGATION,"page navigation start",{pageId:e,pageNumber:n})},reportPageNavigationDone:function(e,i){s(t.lF.PAGE_NAVIGATION_DONE,"page navigation complete",{pageId:e,pageNumber:n,navigationType:i}),i!==t.w4.DYNAMIC_REDIRECT&&i!==t.w4.NAVIGATION_ERROR&&i!==t.w4.CANCELED||(n-=1)}}}();window.bi=m,window.bi.wixBiSession.isServerSide=window.clientSideRender?0:1,window.bi.wixBiSession.isSuccessfulSSR=!window.clientSideRender,window.clientSideRender&&(window.bi.wixBiSession.fallbackReason=window.santaRenderingError?.errorInfo),m.sendBeat(1,"Init")}},function(e){e.O(0,[507],(function(){return i=16992,e(e.s=i);var i}));e.O()}]);
//# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/bi.inline.b203996e.bundle.min.js.map</script>
<script data-url="https://static.parastorage.com/services/wix-thunderbolt/dist/sendBeat12.inline.1d5ac45a.bundle.min.js">"use strict";(self.webpackJsonp__wix_thunderbolt_app=self.webpackJsonp__wix_thunderbolt_app||[]).push([[7257,4017],{42466:function(e,i,n){n(16992).K.sendBeat(12,"Partially visible",{pageId:window.firstPageId})},16992:function(e,i,n){n.d(i,{K:function(){return m}});var t=n(25196);const r=e=>{let i=!1;if(!/\(iP(hone|ad|od);/i.test(window?.navigator?.userAgent))try{i=navigator.sendBeacon(e)}catch(e){}i||((new Image).src=e)},s=null;function o([e,i]){return i!==s&&`${e}=${i}`}function a(){const e=document.cookie.match(/_wixCIDX=([^;]*)/);return e&&e[1]}function c(e){if(!e)return s;const i=new URL(decodeURIComponent(e));return i.search="?",encodeURIComponent(i.href)}var d=function(e,{eventType:i,ts:n,tts:t,extra:r=""},d,u){const l=function(e){const i=e.split("&").reduce(((e,i)=>{const[n,t]=i.split("=");return{...e,[n]:t}}),{});return(e,n)=>void 0!==i[e]?i[e]:n}(r),p=(m=d,e=>void 0===m[e]?s:m[e]);var m;let w=!0;const f=window?.consentPolicyManager;if(f){const e=f.getCurrentConsentPolicy();if(e){const{policy:i}=e;w=!(i.functional&&i.analytics)}}const g=p("requestUrl"),h={src:"29",evid:"3",viewer_name:p("viewerName"),caching:p("caching"),client_id:w?s:a(),dc:p("dc"),microPop:p("microPop"),et:i,event_name:e?encodeURIComponent(e):s,is_cached:p("isCached"),is_platform_loaded:p("is_platform_loaded"),is_rollout:p("is_rollout"),ism:p("isMesh"),isp:0,isjp:p("isjp"),iss:p("isServerSide"),ssr_fb:p("fallbackReason"),ita:l("ita",d.checkVisibility()?"1":"0"),mid:w?s:u?.siteMemberId||s,msid:p("msId"),pid:l("pid",s),pn:l("pn","1"),ref:document.referrer&&!w?encodeURIComponent(document.referrer):s,sar:w?s:l("sar",screen.availWidth?`${screen.availWidth}x${screen.availHeight}`:s),sessionId:w&&f?s:p("sessionId"),siterev:d.siteRevision||d.siteCacheRevision?`${d.siteRevision}-${d.siteCacheRevision}`:s,sr:w?s:l("sr",screen.width?`${screen.width}x${screen.height}`:s),st:p("st"),ts:n,tts:t,url:w?c(g):g,v:window?.thunderboltVersion||"0.0.0",vid:w?s:u?.visitorId||s,bsi:w?s:u?.bsi||s,vsi:p("viewerSessionId"),wor:w||!window.outerWidth?s:`${window.outerWidth}x${window.outerHeight}`,wr:w?s:l("wr",window.innerWidth?`${window.innerWidth}x${window.innerHeight}`:s),_brandId:d.commonConfig?.brand||s,nt:l("nt",s)};return`https://frog.wix.com/bt?${Object.entries(h).map(o).filter(Boolean).join("&")}`};const u=(e,i)=>{let n,t="none",r=e.match(/ssr-caching="?cache[,#]\s*desc=([\w-]+)(?:[,#]\s*varnish=(\w+))?(?:[,#]\s*dc[,#]\s*desc=([\w-]+))?(?:"|;|$)/);if(!r&&window.PerformanceServerTiming){const e=(e=>{let i,n;try{i=e()}catch(e){i=[]}const t=[];return i.forEach((e=>{switch(e.name){case"cache":t[1]=e.description;break;case"varnish":t[2]=e.description;break;case"dc":n=e.description}})),{microPop:n,matches:t}})(i);n=e.microPop,r=e.matches}if(r&&r.length&&(t=`${r[1]},${r[2]||"none"}`,n||(n=r[3])),"none"===t){const e="undefined"!=typeof performance?performance.timing:null;e&&e.responseStart-e.requestStart==0&&(t="browser")}return{caching:t,isCached:t.includes("hit"),...n?{microPop:n}:{}}},l={WixSite:1,UGC:2,Template:3};var p=()=>{const{fedops:e,viewerModel:{siteFeaturesConfigs:i,requestUrl:n,site:t,fleetConfig:r,commonConfig:s,interactionSampleRatio:o},clientSideRender:a,santaRenderingError:c}=window,d=(({requestUrl:e,interactionSampleRatio:i})=>{const n=new URL(e).searchParams;return n.has("sampleEvents")?"true"===n.get("sampleEvents"):Math.random()<(i?1-i:.9)})({requestUrl:n,interactionSampleRatio:o}),p=(e=>{const{userAgent:i}=e.navigator;return/instagram.+google\/google/i.test(i)?"":/bot|google(?!play)|phantom|crawl|spider|headless|slurp|facebookexternal|Lighthouse|PTST|^mozilla\/4\.0$|^\s*$/i.test(i)?"ua":""})(window)||(()=>{try{if(window.self===window.top)return""}catch(e){}return"iframe"})()||(()=>{if(!Function.prototype.bind)return"bind";const{document:e,navigator:i}=window;if(!e||!i)return"document";const{webdriver:n,userAgent:t,plugins:r,languages:s}=i;if(n)return"webdriver";if(!r||Array.isArray(r))return"plugins";if(Object.getOwnPropertyDescriptor(r,"0")?.writable)return"plugins-extra";if(!t)return"userAgent";if(t.indexOf("Snapchat")>0&&e.hidden)return"Snapchat";if(!s||0===s.length||!Object.isFrozen(s))return"languages";try{throw Error()}catch(e){if(e instanceof Error){const{stack:i}=e;if(i&&/ (\(internal\/)|(\(?file:\/)/.test(i))return"stack"}}return""})()||(({seo:e})=>e?.isInSEO?"seo":"")(i);return{suppressbi:n.includes("suppressbi=true"),initialTimestamp:window.initialTimestamps.initialTimestamp,initialRequestTimestamp:window.initialTimestamps.initialRequestTimestamp,viewerSessionId:e.vsi,viewerName:t.appNameForBiEvents,siteRevision:String(t.siteRevision),msId:t.metaSiteId,is_rollout:0===r.code||1===r.code?r.code:null,is_platform_loaded:0,requestUrl:encodeURIComponent(n),sessionId:String(t.sessionId),btype:p,isjp:!!p,dc:t.dc,siteCacheRevision:"__siteCacheRevision__",checkVisibility:(()=>{let e=!0;function i(){e=e&&!0!==document.hidden}return document.addEventListener("visibilitychange",i,{passive:!0}),i(),()=>(i(),e)})(),...u(document.cookie,(()=>[...performance.getEntriesByType("navigation")[0].serverTiming||[]])),isMesh:1,st:l[t.siteType]||0,commonConfig:s,muteThunderboltEvents:d,isServerSide:a?0:1,isSuccessfulSSR:!a,fallbackReason:c?.errorInfo}};const m=function(){const e=p(),i={};let n=1;const s=(t,s,o={})=>{const a=Date.now(),c=Math.round(performance.now()),u=a-e.initialTimestamp;if(function(e,i){if(i&&performance.mark){const n=`${i} (beat ${e})`;performance.mark(n)}}(t,s),e.suppressbi||window.__browser_deprecation__)return;const{pageId:l,pageNumber:p=n,navigationType:m}=o;let w=`&pn=${p}`;l&&(w+=`&pid=${l}`),m&&(w+=`&nt=${m}`);const f=d(s,{eventType:t,ts:u,tts:c,extra:w},e,i);r(f)};return{sendBeat:s,reportBI:function(e,i){!function(e,i){const n=i?`${e} - ${i}`:e,t="end"===i?`${e} - start`:null;performance.mark(n),performance.measure&&t&&performance.measure(`\u2b50${e}`,t,n)}(e,i)},wixBiSession:e,sendBeacon:r,setDynamicSessionData:({visitorId:e,siteMemberId:n,bsi:t})=>{i.visitorId=e||i.visitorId,i.siteMemberId=n||i.siteMemberId,i.bsi=t||i.bsi},reportPageNavigation:function(e){n+=1,s(t.lF.PAGE_NAVIGATION,"page navigation start",{pageId:e,pageNumber:n})},reportPageNavigationDone:function(e,i){s(t.lF.PAGE_NAVIGATION_DONE,"page navigation complete",{pageId:e,pageNumber:n,navigationType:i}),i!==t.w4.DYNAMIC_REDIRECT&&i!==t.w4.NAVIGATION_ERROR&&i!==t.w4.CANCELED||(n-=1)}}}();window.bi=m,window.bi.wixBiSession.isServerSide=window.clientSideRender?0:1,window.bi.wixBiSession.isSuccessfulSSR=!window.clientSideRender,window.clientSideRender&&(window.bi.wixBiSession.fallbackReason=window.santaRenderingError?.errorInfo),m.sendBeat(1,"Init")}},function(e){e.O(0,[507],(function(){return i=42466,e(e.s=i);var i}));e.O()}]);
//# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/sendBeat12.inline.1d5ac45a.bundle.min.js.map</script>
<script>
    window.firstPageId = 'c1dmp'

    if (window.requestCloseWelcomeScreen) {
        window.requestCloseWelcomeScreen()
    }
	if (!window.__browser_deprecation__) {
		window.fedops.phaseStarted('partially_visible', {paramsOverrides: { pageId: firstPageId, isSuccessfulSSR: !clientSideRender }})
	}
</script>


    <script defer="" src="https://static.parastorage.com/services/tag-manager-client/1.875.0/siteTags.bundle.min.js"></script>









    <!--pageHtmlEmbeds.bodyEnd start-->
    <script type="wix/htmlEmbeds" id="pageHtmlEmbeds.bodyEnd start"></script>
    
    <script type="wix/htmlEmbeds" id="pageHtmlEmbeds.bodyEnd end"></script>
    <!--pageHtmlEmbeds.bodyEnd end-->


<!-- warmup data start -->
<script type="application/json" id="wix-warmup-data">{"platform":{"ssrPropsUpdates":[{"comp-jnleuon7":{"hidden":true},"comp-jnleuonn":{"isValid":false,"maxLength":250}}],"ssrStyleUpdates":[{"comp-jnleuon7":{"visibility":"hidden !important"}}],"ssrStructureUpdates":[]},"pages":{"compIdToTypeMap":{"comp-jnleunge":"AppController","comp-jnlfh3q2":"DropDownMenu","comp-jnn3udz3":"WRichText","comp-jnn87ivp":"TPAGluedWidget","comp-jnlrllcc":"WRichText","comp-jnlrpeii":"FiveGridLine","comp-jnlrpejf":"WRichText","comp-jnls3h32":"FiveGridLine","comp-jnleli4f":"WRichText","comp-jnlem0bk":"WRichText","comp-jnlegt8b":"WRichText","comp-jnlegt9b":"WRichText","comp-jnlei0zj":"WRichText","comp-jnlei10c":"WRichText","comp-jnlel6tk":"FiveGridLine","comp-jnlencwp":"WRichText","comp-jnlf5nxk":"WRichText","comp-jnleovy6":"LinkBar","comp-jnkfpusy":"GoogleMap","comp-jnleuonn":"TextInput","comp-jnleuonb":"SiteButton","comp-jnleuon7":"WRichText","comp-jnleey72":"WRichText","masterPage":"MasterPage","SITE_FOOTER":"FooterContainer","PAGES_CONTAINER":"PagesContainer","comp-jnmtd6qs":"tpaWidgetNative","SITE_HEADER":"HeaderContainer","comp-jnmw58uo":"tpaWidgetNative","comp-jnleunnx":"FormContainer","comp-jnlmlsag":"StripColumnsContainer","SITE_PAGES":"PageGroup","comp-jnlmlsby":"Column","BACKGROUND_GROUP":"BackgroundGroup","SCROLL_TO_TOP":"Anchor","SCROLL_TO_BOTTOM":"Anchor","comp-jnn3udz3-pinned-layer":"PinnedLayer","pinnedTopLeft":"DivWithChildren","comp-jnlfh3q2-pinned-layer":"PinnedLayer","comp-jnmtd6qs-pinned-layer":"PinnedLayer","pinnedTopRight":"DivWithChildren","soapAfterPagesContainer":"MeshGroup","comp-jnn87ivp-pinned-layer":"PinnedLayer","pinnedBottomRight":"DivWithChildren","SKIP_TO_CONTENT_BTN":"SkipToContentButton","comp-jnk25096":"LinkBar","comp-jnlflmbd":"Anchor","comp-jnlfnpc0":"Anchor","comp-jnlfoh59":"Anchor","comp-jnlfp4fi":"Anchor","comp-jnkfa87i":"WRichText","comp-jnkfb1pv":"FiveGridLine","comp-jnkfbetl":"WRichText","comp-jnkf9i2c":"FiveGridLine","comp-jnkf7fnl":"WRichText","comp-jnkfabw2":"WRichText","comp-jnkfbj9f":"WRichText","comp-jnkf00u6":"WRichText","comp-jnk1qp12":"WRichText","comp-jnk1znbc":"FiveGridLine","comp-jnk1xqnd":"WRichText","comp-jnk5ap05":"WRichText","comp-jnk6dqq1":"WRichText","comp-jnu2f0tk":"FiveGridLine","comp-jnk6df2n":"WRichText","comp-jnkfotle":"WRichText","comp-jnldxsca":"FiveGridLine","comp-jnldxsbd":"WRichText","comp-jnldu9k0":"WRichText","comp-jnkeix36":"WRichText","comp-jnkelgvc":"FiveGridLine","comp-jnkejs6f":"WRichText","comp-jnkeuhdz":"FiveGridLine","comp-jnlluglb":"WRichText","comp-jnkez8vq":"WRichText","comp-jnkemyy9":"FiveGridLine","comp-jnkeujs1":"FiveGridLine","comp-jnllw6m6":"WRichText","comp-jnkezjbz":"WRichText","comp-jnkeo3qr":"FiveGridLine","comp-jnkeumin":"FiveGridLine","comp-jnllwddv":"WRichText","comp-jnkezu0m":"WRichText","comp-jnkeo9qf":"FiveGridLine","comp-jnkeup61":"FiveGridLine","comp-jnllwx99":"WRichText","comp-jnkf7wtn":"WRichText","comp-jnkeoaw3":"FiveGridLine","comp-jnkesiw4":"WRichText","comp-jnketvbk":"FiveGridLine","comp-jnkexx0y":"WRichText","comp-jnldqj1w":"WRichText","comp-jnlnmsl4":"FiveGridLine","comp-jnlnmsm3":"WRichText","comp-jnlcyg3c":"VectorImage","comp-jnlcyg3d":"VectorImage","comp-jnlcyg3e":"VectorImage","comp-jnlcyg3a":"VectorImage","comp-jnk2wu3w":"WRichText","comp-jnk2iqwu":"FiveGridLine","comp-jnk2mudq":"WRichText","comp-jnk5fpi3":"WRichText","comp-jnk5cl1q":"FiveGridLine","comp-jnn6hwdv":"WRichText","comp-jnk5ywhn":"WPhoto","comp-jnk5ljj2":"WRichText","comp-jnmu6mek":"WRichText","comp-jnmtvh9l":"WRichText","comp-jnka9ezr":"WRichText","comp-jnmu7zwz":"WRichText","comp-jnka9ezt":"WRichText","comp-jnka9ezp":"WPhoto","comp-jnka9ezj":"WRichText","comp-jnka9ezl":"FiveGridLine","comp-jnn6eyvh":"WRichText","comp-jnkafurf":"WRichText","comp-jnkafurm":"FiveGridLine","comp-jnn6d3gh":"WRichText","comp-jnkafurr":"WPhoto","comp-jnkafurt":"WRichText","comp-jnmufz7r":"WRichText","comp-jnkafurv":"WRichText","comp-jnkati99":"WRichText","comp-jnu14wot":"WRichText","comp-jnkati9b":"WRichText","comp-jnkati9y":"WPhoto","comp-jnkatia1":"WRichText","comp-jnkatia4":"FiveGridLine","comp-jnn6kdun":"WRichText","comp-jnk64fbf":"FiveGridLine","comp-jnk65a8d":"FiveGridLine","comp-jnk65neo":"FiveGridLine","comp-jnk5dns4":"WRichText","comp-jnk68xzh":"LinkBar","comp-jnka9f05":"FiveGridLine","comp-jnka9f08":"FiveGridLine","comp-jnka9f0a":"FiveGridLine","comp-jnka9f0c":"WRichText","comp-jnka9f0f":"LinkBar","comp-jnkafurz":"FiveGridLine","comp-jnkafus1":"FiveGridLine","comp-jnkafus3":"FiveGridLine","comp-jnkafus6":"WRichText","comp-jnkafus8":"LinkBar","comp-jnkati9h":"FiveGridLine","comp-jnkati9j":"FiveGridLine","comp-jnkati9m":"FiveGridLine","comp-jnkati9o":"WRichText","comp-jnkati9r":"LinkBar","pageBackground_c1dmp":"PageBackground","c1dmp":"Page","comp-lvl19jm2":"ClassicSection","comp-lvl19jm3":"ClassicSection","comp-lvl19jm4":"ClassicSection","comp-jnk0xbql":"StripColumnsContainer","comp-jnk1hb83":"StripColumnsContainer","comp-jnka9ey2":"StripColumnsContainer","comp-jnkf3qg1":"StripColumnsContainer","comp-jnkai0mw":"StripColumnsContainer","comp-jnkf2fkj":"Container","comp-jnkafupw":"StripColumnsContainer","comp-jnlcpf5e":"StripColumnsContainer","comp-jnk0xbsw":"Column","comp-jnk1hb92":"Column","comp-jnka9ez5":"Column","comp-jnkf3qi7":"Column","comp-jnkfh4i3":"Column","comp-jnkai0o2":"Column","comp-jnmw33vq":"tpaWidgetNative","comp-jnkafur3":"Column","comp-jnlcpf6z":"Column","comp-jnk2g9kl":"Container","comp-jnmuwc3w":"tpaWidgetNative","comp-jnk1m472":"Container","comp-jnka9ezh":"Container","comp-jnkafure":"Container","comp-jnkati8o":"Container","comp-jnk61vw3":"Container","comp-jnka9ezv":"Container","comp-jnkafurx":"Container","comp-jnkati9e":"Container","comp-jnk25096-pinned-layer":"PinnedLayer","pagePinnedMiddleRight-c1dmp":"DivWithChildren","Containerc1dmp":"Group","DYNAMIC_STRUCTURE_CONTAINER":"DynamicStructureContainer","site-root":"DivWithChildren","main_MF":"DivWithChildren","c1dmp_wrapper":"PageMountUnmount","c1dmp_wrapper_background":"PageMountUnmount"}},"appsWarmupData":{"140603ad-af8d-84a5-2c80-a0f60cb47351":{"widgetcomp-jnmuwc3w":{"events":{"events":[],"hasMore":false,"moreLoading":false,"filterType":0},"siteSettings":{"locale":"","firstEventCreated":true,"ticketed":false,"language":"","premium":"Auto","ticketingOptions":{"wixServiceFee":true,"delayedPaymentsCaptureConfig":{"enabled":false,"action":0,"delayInHours":144}},"appState":"ENABLED","demo":true,"settings":{"pagesType":1,"firstTimeCompleted":true}},"multilingual":{"currentLanguage":"","isEnabled":false,"isPrimaryLanguage":true},"component":{"id":"comp-jnmuwc3w","settings":{"cardLocationAndDateFontSize":16,"cardDescriptionFontSize":15,"listHeaderTitleFontSizeCompactMobile":16,"listDateFontSizeCompactMobile":14,"listLocationFontSizeCompactMobile":14,"listHeaderTitleFontSizeMobile":20,"listDateFontSizeMobile":16,"listContentTextFontSizeMobile":16,"listGeneralTitleFontSizeMobile":28,"listLayout":3,"mobileListLayout":1,"listButtonFontSizeMobile":16,"listButtonFontSizeCompactMobile":14,"cardBorderWidth":1,"borderWidth":0,"todayButtonBorderWidth":1,"todayButtonBorderRadius":0,"listRoundedButtonBorderRadius":100,"listBorderWidth":0,"calendarCellBorderWidth":1,"calendarBorderWidth":0,"buttonsBorderWidth":1,"todayRoundedButtonBorderRadius":100,"listButtonBorderRadius":0,"listButtonBorderWidth":1,"calendarDetailsTitleTextSize":16,"calendarDetailsDateLocationTextSize":14,"calendarDetailsDescriptionTextSize":14,"widgetType":2,"widgetLayout":1,"alignment":2,"contentAlignment":2,"listAlignment":2,"imageScaling":2,"multiImageScaling":2,"imageRatio":1,"listImageLayout":1,"locationAndDateFormat":1,"listLocationAndDateFormat":1,"cardsPerRow":3,"cardLocationAndDateFormat":1,"buttonsStyle":1,"buttonsBorderRadius":0,"roundedButtonsBorderRadius":100,"buttonHeight":44,"oneButtonWidth":140,"verticalDividerWidth":1,"verticalDividerHeight":94,"horizontalDividerWidth":20,"horizontalDividerHeight":1,"compactHorizontalDividerWidth":36,"compactHorizontalDividerHeight":1,"countdownMarginBottom":30,"titleMarginBottom":36,"descriptionMarginBottom":42,"dateMarginBottom":42,"locationMarginBottom":54,"dateAndLocationMarginBottom":54,"rsvpMarginBottom":30,"imageWidth":50,"imageOpacity":70,"listButtonStyle":1,"cardMargins":20,"sideBySideLayoutMargins":30,"listImageOpacity":100,"listImageWidth":50,"listDividerWidth":1,"listStripWidth":20,"calendarWeekStartDay":1,"calendarListTextSize":14,"calendarListDividerWidth":1,"todayButtonStyle":2,"showImage":true,"showCountdown":false,"showOfferRibbon":true,"showRecurringRibbon":true,"showTitle":true,"showDescription":false,"showDate":true,"showLocation":true,"showShareOptions":true,"showFullDividers":true,"showHorizontalDividers":true,"showCompactDividers":true,"showLabels":true,"showRSVPTitle":false,"showMembers":false,"listShowMainTitle":true,"listShowDate":true,"listShowVenueName":true,"listShowFullDate":true,"listShowLocation":true,"listShowDescription":true,"listShowSocialShare":false,"listShowImage":true,"listShowAdditionalInfo":true,"listShowMembers":true,"showRibbon":false}},"memberLoggedIn":false,"owner":false,"instance":{"instance":"KoavMeKvM70Hc0FmSHDCl9Zlnd_PypUeZIvCmpNksG8.eyJpbnN0YW5jZUlkIjoiMzBlOWYwNzktMmU2YS00NjcyLWExZGUtMGRhNjFkNjE5OTEwIiwiYXBwRGVmSWQiOiIxNDA2MDNhZC1hZjhkLTg0YTUtMmM4MC1hMGY2MGNiNDczNTEiLCJtZXRhU2l0ZUlkIjoiNmIwYTZiZWUtMzFhNi00MjljLWE2NTgtMTQ1ODViOGJlMDhlIiwic2lnbkRhdGUiOiIyMDI0LTExLTI0VDEzOjU3OjE2LjkxN1oiLCJkZW1vTW9kZSI6ZmFsc2UsImJpVG9rZW4iOiI1YmUzOWI5Ny0xZmNjLTA0ZWUtMDc4Ni0xOWZlNDZlYTc5OWUiLCJzaXRlT3duZXJJZCI6IjYwYzM5ZWVhLWU4YmEtNGFmNy1hMWIxLWRlZjg5YjY1NmZlMCIsImNhY2hlIjp0cnVlfQ","instanceId":"30e9f079-2e6a-4672-a1de-0da61d619910","appDefId":"140603ad-af8d-84a5-2c80-a0f60cb47351","metaSiteId":"6b0a6bee-31a6-429c-a658-14585b8be08e","signDate":"2024-11-24T13:57:16.917Z","demoMode":false,"biToken":"5be39b97-1fcc-04ee-0786-19fe46ea799e","siteOwnerId":"60c39eea-e8ba-4af7-a1b1-def89b656fe0","cache":true,"visitorId":null,"msid":"6b0a6bee-31a6-429c-a658-14585b8be08e","siteIsTemplate":false},"calendarLayout":{"loadedPages":[]},"dates":{"events":{},"common":{},"calendar":{}},"installedApps":{"schedule":true,"groups":false,"paidPlans":false,"giftCards":false}},"widgetcomp-jnmtd6qs":{"events":{"events":[{"id":"ad474de7-7ef9-4cb6-9a1c-b3869eb1571d","location":{"name":"Local a ser definido","type":0,"tbd":true},"scheduling":{"config":{"scheduleTbd":false,"startDate":"2025-07-01T22:00:00.000Z","endDate":"2025-07-02T02:00:00.000Z","timeZoneId":"America\/Sao_Paulo","endDateHidden":false,"showTimeZone":false,"recurrences":{"occurrences":[],"status":0}},"formatted":"July 1, 2025, 7:00 – 11:00 PM","startDateFormatted":"July 1, 2025","startTimeFormatted":"7:00 PM","endDateFormatted":"July 1, 2025","endTimeFormatted":"11:00 PM"},"title":"Evento exclusivo Unicsul","description":"Workshop dos graduandos 2025 Unicsul","about":"","mainImage":{"id":"60c39e_b74c0b33b3dc40e3aeff8ad550058db4~mv2.png","url":"https:\/\/static.wixstatic.com\/media\/60c39e_b74c0b33b3dc40e3aeff8ad550058db4~mv2.png","height":225,"width":225},"slug":"evento-exclusivo-unicsul","language":"pt","created":"2024-11-20T23:15:12.302Z","modified":"2024-11-23T18:21:46.000Z","status":0,"registration":{"type":1,"status":3,"rsvpCollection":{"config":{"rsvpStatusOptions":0,"waitlist":false}},"ticketing":{"config":{"guestAssignedTickets":false,"ticketLimitPerOrder":50,"reservationDurationInMinutes":20},"soldOut":true},"restrictedTo":0,"initialType":1},"calendarLinks":{"google":"http:\/\/calendar.google.com\/calendar\/render?action=TEMPLATE&text=Evento+exclusivo+Unicsul&dates=20250701T220000Z%2F20250702T020000Z&location=&details=Workshop+dos+graduandos+2025+Unicsul%0A%0AEvento+exclusivo+Unicsul%0AJuly+1%2C+2025%2C+7%3A00+%E2%80%93+11%3A00+PM%0ALocal+a+ser+definido","ics":"https:\/\/www.wixevents.com\/media\/v2\/calendar?token=JWS.eyJraWQiOiJpb21iOUJ0eSIsImFsZyI6IkhTMjU2In0.eyJkYXRhIjoie1wiaW5zdGFuY2VJZFwiOlwiMzBlOWYwNzktMmU2YS00NjcyLWExZGUtMGRhNjFkNjE5OTEwXCIsXCJldmVudElkXCI6e1widmFsdWVcIjpcImFkNDc0ZGU3LTdlZjktNGNiNi05YTFjLWIzODY5ZWIxNTcxZFwifSxcIm9jTGlua1wiOm51bGx9IiwiaWF0IjoxNzMyNDU2NjM4fQ.HZkqhz0zH45SfMMBzcs3faJ8Mvr1Cbyf0IsvVF01h-8"},"instanceId":"30e9f079-2e6a-4672-a1de-0da61d619910","guestListConfig":{"publicGuestList":true},"userId":"60c39eea-e8ba-4af7-a1b1-def89b656fe0","onlineConferencing":{"providerName":""},"assignedContactsLabel":"custom.evento-exclusivo-unicsul-7-1-25-7-00-pm","categories":[],"eventDisplaySettings":{},"labellingSettings":{"assignedContactsLabelDeleted":false}},{"id":"b5657600-2737-401b-a717-73aefb4c6bbf","location":{"name":"Local do evento a ser definido. ","type":0,"tbd":true},"scheduling":{"config":{"scheduleTbd":false,"startDate":"2025-07-01T22:00:00.000Z","endDate":"2025-07-02T02:00:00.000Z","timeZoneId":"America\/Sao_Paulo","endDateHidden":true,"showTimeZone":false,"recurrences":{"occurrences":[],"status":0}},"formatted":"July 1, 2025 at 7:00 PM","startDateFormatted":"July 1, 2025","startTimeFormatted":"7:00 PM","endDateFormatted":"","endTimeFormatted":""},"title":"Eventos","description":"","about":"","slug":"eventos","language":"en","created":"2024-11-20T23:10:35.996Z","modified":"2024-11-23T18:00:09.000Z","status":0,"registration":{"type":1,"status":3,"rsvpCollection":{"config":{"rsvpStatusOptions":0,"waitlist":false}},"ticketing":{"config":{"guestAssignedTickets":false,"ticketLimitPerOrder":50,"reservationDurationInMinutes":20},"soldOut":true},"restrictedTo":0,"initialType":1},"calendarLinks":{"google":"http:\/\/calendar.google.com\/calendar\/render?action=TEMPLATE&text=Eventos&dates=20250701T220000Z%2F20250702T020000Z&location=&details=Eventos%0AJuly+1%2C+2025+at+7%3A00+PM%0ALocal+do+evento+a+ser+definido.","ics":"https:\/\/www.wixevents.com\/media\/v2\/calendar?token=JWS.eyJraWQiOiJpb21iOUJ0eSIsImFsZyI6IkhTMjU2In0.eyJkYXRhIjoie1wiaW5zdGFuY2VJZFwiOlwiMzBlOWYwNzktMmU2YS00NjcyLWExZGUtMGRhNjFkNjE5OTEwXCIsXCJldmVudElkXCI6e1widmFsdWVcIjpcImI1NjU3NjAwLTI3MzctNDAxYi1hNzE3LTczYWVmYjRjNmJiZlwifSxcIm9jTGlua1wiOm51bGx9IiwiaWF0IjoxNzMyNDU2NjM4fQ.YoIIFzMPeRJQn4H3p6XMSRgZ6Ad0PSW5fXBX8KZAGj4"},"instanceId":"30e9f079-2e6a-4672-a1de-0da61d619910","guestListConfig":{"publicGuestList":true},"userId":"60c39eea-e8ba-4af7-a1b1-def89b656fe0","onlineConferencing":{"providerName":""},"assignedContactsLabel":"custom.eventos-7-1-25-7-00-pm","categories":[],"eventDisplaySettings":{},"labellingSettings":{"assignedContactsLabelDeleted":false}}],"hasMore":false,"moreLoading":false,"filterType":0},"siteSettings":{"locale":"","firstEventCreated":true,"ticketed":false,"language":"","premium":"Auto","ticketingOptions":{"wixServiceFee":true,"delayedPaymentsCaptureConfig":{"enabled":false,"action":0,"delayInHours":144}},"appState":"ENABLED","demo":true,"settings":{"pagesType":1,"firstTimeCompleted":true}},"multilingual":{"currentLanguage":"","isEnabled":false,"isPrimaryLanguage":true},"component":{"id":"comp-jnmtd6qs","settings":{"cardLocationAndDateFontSize":16,"cardDescriptionFontSize":15,"listHeaderTitleFontSizeCompactMobile":16,"listDateFontSizeCompactMobile":14,"listLocationFontSizeCompactMobile":14,"listHeaderTitleFontSizeMobile":20,"listDateFontSizeMobile":16,"listContentTextFontSizeMobile":16,"listGeneralTitleFontSizeMobile":28,"listLayout":3,"mobileListLayout":1,"listButtonFontSizeMobile":16,"listButtonFontSizeCompactMobile":14,"cardBorderWidth":1,"borderWidth":0,"todayButtonBorderWidth":1,"todayButtonBorderRadius":0,"listRoundedButtonBorderRadius":100,"listBorderWidth":0,"calendarCellBorderWidth":1,"calendarBorderWidth":0,"buttonsBorderWidth":1,"todayRoundedButtonBorderRadius":100,"listButtonBorderRadius":0,"listButtonBorderWidth":1,"calendarDetailsTitleTextSize":16,"calendarDetailsDateLocationTextSize":14,"calendarDetailsDescriptionTextSize":14,"widgetType":2,"widgetLayout":1,"alignment":2,"contentAlignment":2,"listAlignment":2,"imageScaling":2,"multiImageScaling":2,"imageRatio":1,"listImageLayout":1,"locationAndDateFormat":1,"listLocationAndDateFormat":1,"cardsPerRow":3,"cardLocationAndDateFormat":1,"buttonsStyle":1,"buttonsBorderRadius":0,"roundedButtonsBorderRadius":100,"buttonHeight":44,"oneButtonWidth":140,"verticalDividerWidth":1,"verticalDividerHeight":94,"horizontalDividerWidth":20,"horizontalDividerHeight":1,"compactHorizontalDividerWidth":36,"compactHorizontalDividerHeight":1,"countdownMarginBottom":30,"titleMarginBottom":36,"descriptionMarginBottom":42,"dateMarginBottom":42,"locationMarginBottom":54,"dateAndLocationMarginBottom":54,"rsvpMarginBottom":30,"imageWidth":50,"imageOpacity":70,"listButtonStyle":1,"cardMargins":20,"sideBySideLayoutMargins":30,"listImageOpacity":100,"listImageWidth":50,"listDividerWidth":1,"listStripWidth":20,"calendarWeekStartDay":1,"calendarListTextSize":14,"calendarListDividerWidth":1,"todayButtonStyle":2,"showImage":true,"showCountdown":false,"showOfferRibbon":true,"showRecurringRibbon":true,"showTitle":true,"showDescription":false,"showDate":true,"showLocation":true,"showShareOptions":true,"showFullDividers":true,"showHorizontalDividers":true,"showCompactDividers":true,"showLabels":true,"showRSVPTitle":false,"showMembers":false,"listShowMainTitle":true,"listShowDate":true,"listShowVenueName":true,"listShowFullDate":true,"listShowLocation":true,"listShowDescription":true,"listShowSocialShare":false,"listShowImage":true,"listShowAdditionalInfo":true,"listShowMembers":true,"showRibbon":false}},"memberLoggedIn":false,"owner":false,"instance":{"instance":"KoavMeKvM70Hc0FmSHDCl9Zlnd_PypUeZIvCmpNksG8.eyJpbnN0YW5jZUlkIjoiMzBlOWYwNzktMmU2YS00NjcyLWExZGUtMGRhNjFkNjE5OTEwIiwiYXBwRGVmSWQiOiIxNDA2MDNhZC1hZjhkLTg0YTUtMmM4MC1hMGY2MGNiNDczNTEiLCJtZXRhU2l0ZUlkIjoiNmIwYTZiZWUtMzFhNi00MjljLWE2NTgtMTQ1ODViOGJlMDhlIiwic2lnbkRhdGUiOiIyMDI0LTExLTI0VDEzOjU3OjE2LjkxN1oiLCJkZW1vTW9kZSI6ZmFsc2UsImJpVG9rZW4iOiI1YmUzOWI5Ny0xZmNjLTA0ZWUtMDc4Ni0xOWZlNDZlYTc5OWUiLCJzaXRlT3duZXJJZCI6IjYwYzM5ZWVhLWU4YmEtNGFmNy1hMWIxLWRlZjg5YjY1NmZlMCIsImNhY2hlIjp0cnVlfQ","instanceId":"30e9f079-2e6a-4672-a1de-0da61d619910","appDefId":"140603ad-af8d-84a5-2c80-a0f60cb47351","metaSiteId":"6b0a6bee-31a6-429c-a658-14585b8be08e","signDate":"2024-11-24T13:57:16.917Z","demoMode":false,"biToken":"5be39b97-1fcc-04ee-0786-19fe46ea799e","siteOwnerId":"60c39eea-e8ba-4af7-a1b1-def89b656fe0","cache":true,"visitorId":null,"msid":"6b0a6bee-31a6-429c-a658-14585b8be08e","siteIsTemplate":false},"calendarLayout":{"loadedPages":[]},"dates":{"events":{"ad474de7-7ef9-4cb6-9a1c-b3869eb1571d":{"utcOffset":-180,"startDateISOFormatNotUTC":"2025-07-01T19:00:00-03:00","endDateISOFormatNotUTC":"2025-07-01T23:00:00-03:00","monthDay":"01","weekDay":"ter.","month":"jul.","fullDate":"01 de jul. de 2025, 19:00 – 23:00","shortStartDate":"ter., 01 de jul.","startDate":"01 de jul. de 2025, 19:00","startTime":"19:00","daysLeft":219,"day":"01","year":"2025","yearMonth":"jul. de 2025"},"b5657600-2737-401b-a717-73aefb4c6bbf":{"utcOffset":-180,"startDateISOFormatNotUTC":"2025-07-01T19:00:00-03:00","endDateISOFormatNotUTC":"2025-07-01T23:00:00-03:00","monthDay":"01","weekDay":"ter.","month":"jul.","fullDate":"01 de jul. de 2025, 19:00","shortStartDate":"ter., 01 de jul.","startDate":"01 de jul. de 2025, 19:00","startTime":"19:00","daysLeft":219,"day":"01","year":"2025","yearMonth":"jul. de 2025"}},"common":{},"calendar":{}},"installedApps":{"schedule":true,"groups":false,"paidPlans":false,"giftCards":false}},"widgetcomp-jnmw33vq":{"events":{"events":[{"id":"ad474de7-7ef9-4cb6-9a1c-b3869eb1571d","location":{"name":"Local a ser definido","type":0,"tbd":true},"scheduling":{"config":{"scheduleTbd":false,"startDate":"2025-07-01T22:00:00.000Z","endDate":"2025-07-02T02:00:00.000Z","timeZoneId":"America\/Sao_Paulo","endDateHidden":false,"showTimeZone":false,"recurrences":{"occurrences":[],"status":0}},"formatted":"July 1, 2025, 7:00 – 11:00 PM","startDateFormatted":"July 1, 2025","startTimeFormatted":"7:00 PM","endDateFormatted":"July 1, 2025","endTimeFormatted":"11:00 PM"},"title":"Evento exclusivo Unicsul","description":"Workshop dos graduandos 2025 Unicsul","about":"","mainImage":{"id":"60c39e_b74c0b33b3dc40e3aeff8ad550058db4~mv2.png","url":"https:\/\/static.wixstatic.com\/media\/60c39e_b74c0b33b3dc40e3aeff8ad550058db4~mv2.png","height":225,"width":225},"slug":"evento-exclusivo-unicsul","language":"pt","created":"2024-11-20T23:15:12.302Z","modified":"2024-11-23T18:21:46.000Z","status":0,"registration":{"type":1,"status":3,"rsvpCollection":{"config":{"rsvpStatusOptions":0,"waitlist":false}},"ticketing":{"config":{"guestAssignedTickets":false,"ticketLimitPerOrder":50,"reservationDurationInMinutes":20},"soldOut":true},"restrictedTo":0,"initialType":1},"calendarLinks":{"google":"http:\/\/calendar.google.com\/calendar\/render?action=TEMPLATE&text=Evento+exclusivo+Unicsul&dates=20250701T220000Z%2F20250702T020000Z&location=&details=Workshop+dos+graduandos+2025+Unicsul%0A%0AEvento+exclusivo+Unicsul%0AJuly+1%2C+2025%2C+7%3A00+%E2%80%93+11%3A00+PM%0ALocal+a+ser+definido","ics":"https:\/\/www.wixevents.com\/media\/v2\/calendar?token=JWS.eyJraWQiOiJpb21iOUJ0eSIsImFsZyI6IkhTMjU2In0.eyJkYXRhIjoie1wiaW5zdGFuY2VJZFwiOlwiMzBlOWYwNzktMmU2YS00NjcyLWExZGUtMGRhNjFkNjE5OTEwXCIsXCJldmVudElkXCI6e1widmFsdWVcIjpcImFkNDc0ZGU3LTdlZjktNGNiNi05YTFjLWIzODY5ZWIxNTcxZFwifSxcIm9jTGlua1wiOm51bGx9IiwiaWF0IjoxNzMyNDU2NjM4fQ.HZkqhz0zH45SfMMBzcs3faJ8Mvr1Cbyf0IsvVF01h-8"},"instanceId":"30e9f079-2e6a-4672-a1de-0da61d619910","guestListConfig":{"publicGuestList":true},"userId":"60c39eea-e8ba-4af7-a1b1-def89b656fe0","onlineConferencing":{"providerName":""},"assignedContactsLabel":"custom.evento-exclusivo-unicsul-7-1-25-7-00-pm","categories":[],"eventDisplaySettings":{},"labellingSettings":{"assignedContactsLabelDeleted":false}},{"id":"b5657600-2737-401b-a717-73aefb4c6bbf","location":{"name":"Local do evento a ser definido. ","type":0,"tbd":true},"scheduling":{"config":{"scheduleTbd":false,"startDate":"2025-07-01T22:00:00.000Z","endDate":"2025-07-02T02:00:00.000Z","timeZoneId":"America\/Sao_Paulo","endDateHidden":true,"showTimeZone":false,"recurrences":{"occurrences":[],"status":0}},"formatted":"July 1, 2025 at 7:00 PM","startDateFormatted":"July 1, 2025","startTimeFormatted":"7:00 PM","endDateFormatted":"","endTimeFormatted":""},"title":"Eventos","description":"","about":"","slug":"eventos","language":"en","created":"2024-11-20T23:10:35.996Z","modified":"2024-11-23T18:00:09.000Z","status":0,"registration":{"type":1,"status":3,"rsvpCollection":{"config":{"rsvpStatusOptions":0,"waitlist":false}},"ticketing":{"config":{"guestAssignedTickets":false,"ticketLimitPerOrder":50,"reservationDurationInMinutes":20},"soldOut":true},"restrictedTo":0,"initialType":1},"calendarLinks":{"google":"http:\/\/calendar.google.com\/calendar\/render?action=TEMPLATE&text=Eventos&dates=20250701T220000Z%2F20250702T020000Z&location=&details=Eventos%0AJuly+1%2C+2025+at+7%3A00+PM%0ALocal+do+evento+a+ser+definido.","ics":"https:\/\/www.wixevents.com\/media\/v2\/calendar?token=JWS.eyJraWQiOiJpb21iOUJ0eSIsImFsZyI6IkhTMjU2In0.eyJkYXRhIjoie1wiaW5zdGFuY2VJZFwiOlwiMzBlOWYwNzktMmU2YS00NjcyLWExZGUtMGRhNjFkNjE5OTEwXCIsXCJldmVudElkXCI6e1widmFsdWVcIjpcImI1NjU3NjAwLTI3MzctNDAxYi1hNzE3LTczYWVmYjRjNmJiZlwifSxcIm9jTGlua1wiOm51bGx9IiwiaWF0IjoxNzMyNDU2NjM4fQ.YoIIFzMPeRJQn4H3p6XMSRgZ6Ad0PSW5fXBX8KZAGj4"},"instanceId":"30e9f079-2e6a-4672-a1de-0da61d619910","guestListConfig":{"publicGuestList":true},"userId":"60c39eea-e8ba-4af7-a1b1-def89b656fe0","onlineConferencing":{"providerName":""},"assignedContactsLabel":"custom.eventos-7-1-25-7-00-pm","categories":[],"eventDisplaySettings":{},"labellingSettings":{"assignedContactsLabelDeleted":false}}],"hasMore":false,"moreLoading":false,"filterType":0},"siteSettings":{"locale":"","firstEventCreated":true,"ticketed":false,"language":"","premium":"Auto","ticketingOptions":{"wixServiceFee":true,"delayedPaymentsCaptureConfig":{"enabled":false,"action":0,"delayInHours":144}},"appState":"ENABLED","demo":true,"settings":{"pagesType":1,"firstTimeCompleted":true}},"multilingual":{"currentLanguage":"","isEnabled":false,"isPrimaryLanguage":true},"component":{"id":"comp-jnmw33vq","settings":{"cardLocationAndDateFontSize":16,"cardDescriptionFontSize":15,"listHeaderTitleFontSizeCompactMobile":16,"listDateFontSizeCompactMobile":14,"listLocationFontSizeCompactMobile":14,"listHeaderTitleFontSizeMobile":20,"listDateFontSizeMobile":16,"listContentTextFontSizeMobile":16,"listGeneralTitleFontSizeMobile":28,"listLayout":3,"mobileListLayout":1,"listButtonFontSizeMobile":16,"listButtonFontSizeCompactMobile":14,"cardBorderWidth":1,"borderWidth":0,"todayButtonBorderWidth":1,"todayButtonBorderRadius":0,"listRoundedButtonBorderRadius":100,"listBorderWidth":0,"calendarCellBorderWidth":1,"calendarBorderWidth":0,"buttonsBorderWidth":1,"todayRoundedButtonBorderRadius":100,"listButtonBorderRadius":0,"listButtonBorderWidth":1,"calendarDetailsTitleTextSize":16,"calendarDetailsDateLocationTextSize":14,"calendarDetailsDescriptionTextSize":14,"widgetType":2,"widgetLayout":1,"alignment":2,"contentAlignment":2,"listAlignment":2,"imageScaling":2,"multiImageScaling":2,"imageRatio":1,"listImageLayout":1,"locationAndDateFormat":1,"listLocationAndDateFormat":1,"cardsPerRow":3,"cardLocationAndDateFormat":1,"buttonsStyle":1,"buttonsBorderRadius":0,"roundedButtonsBorderRadius":100,"buttonHeight":44,"oneButtonWidth":140,"verticalDividerWidth":1,"verticalDividerHeight":94,"horizontalDividerWidth":20,"horizontalDividerHeight":1,"compactHorizontalDividerWidth":36,"compactHorizontalDividerHeight":1,"countdownMarginBottom":30,"titleMarginBottom":36,"descriptionMarginBottom":42,"dateMarginBottom":42,"locationMarginBottom":54,"dateAndLocationMarginBottom":54,"rsvpMarginBottom":30,"imageWidth":50,"imageOpacity":70,"listButtonStyle":1,"cardMargins":20,"sideBySideLayoutMargins":30,"listImageOpacity":100,"listImageWidth":50,"listDividerWidth":1,"listStripWidth":20,"calendarWeekStartDay":1,"calendarListTextSize":14,"calendarListDividerWidth":1,"todayButtonStyle":2,"showImage":true,"showCountdown":false,"showOfferRibbon":true,"showRecurringRibbon":true,"showTitle":true,"showDescription":false,"showDate":true,"showLocation":true,"showShareOptions":true,"showFullDividers":true,"showHorizontalDividers":true,"showCompactDividers":true,"showLabels":true,"showRSVPTitle":false,"showMembers":false,"listShowMainTitle":true,"listShowDate":true,"listShowVenueName":true,"listShowFullDate":true,"listShowLocation":true,"listShowDescription":true,"listShowSocialShare":false,"listShowImage":true,"listShowAdditionalInfo":true,"listShowMembers":true,"showRibbon":false}},"memberLoggedIn":false,"owner":false,"instance":{"instance":"KoavMeKvM70Hc0FmSHDCl9Zlnd_PypUeZIvCmpNksG8.eyJpbnN0YW5jZUlkIjoiMzBlOWYwNzktMmU2YS00NjcyLWExZGUtMGRhNjFkNjE5OTEwIiwiYXBwRGVmSWQiOiIxNDA2MDNhZC1hZjhkLTg0YTUtMmM4MC1hMGY2MGNiNDczNTEiLCJtZXRhU2l0ZUlkIjoiNmIwYTZiZWUtMzFhNi00MjljLWE2NTgtMTQ1ODViOGJlMDhlIiwic2lnbkRhdGUiOiIyMDI0LTExLTI0VDEzOjU3OjE2LjkxN1oiLCJkZW1vTW9kZSI6ZmFsc2UsImJpVG9rZW4iOiI1YmUzOWI5Ny0xZmNjLTA0ZWUtMDc4Ni0xOWZlNDZlYTc5OWUiLCJzaXRlT3duZXJJZCI6IjYwYzM5ZWVhLWU4YmEtNGFmNy1hMWIxLWRlZjg5YjY1NmZlMCIsImNhY2hlIjp0cnVlfQ","instanceId":"30e9f079-2e6a-4672-a1de-0da61d619910","appDefId":"140603ad-af8d-84a5-2c80-a0f60cb47351","metaSiteId":"6b0a6bee-31a6-429c-a658-14585b8be08e","signDate":"2024-11-24T13:57:16.917Z","demoMode":false,"biToken":"5be39b97-1fcc-04ee-0786-19fe46ea799e","siteOwnerId":"60c39eea-e8ba-4af7-a1b1-def89b656fe0","cache":true,"visitorId":null,"msid":"6b0a6bee-31a6-429c-a658-14585b8be08e","siteIsTemplate":false},"calendarLayout":{"loadedPages":[]},"dates":{"events":{"ad474de7-7ef9-4cb6-9a1c-b3869eb1571d":{"utcOffset":-180,"startDateISOFormatNotUTC":"2025-07-01T19:00:00-03:00","endDateISOFormatNotUTC":"2025-07-01T23:00:00-03:00","monthDay":"01","weekDay":"ter.","month":"jul.","fullDate":"01 de jul. de 2025, 19:00 – 23:00","shortStartDate":"ter., 01 de jul.","startDate":"01 de jul. de 2025, 19:00","startTime":"19:00","daysLeft":219,"day":"01","year":"2025","yearMonth":"jul. de 2025"},"b5657600-2737-401b-a717-73aefb4c6bbf":{"utcOffset":-180,"startDateISOFormatNotUTC":"2025-07-01T19:00:00-03:00","endDateISOFormatNotUTC":"2025-07-01T23:00:00-03:00","monthDay":"01","weekDay":"ter.","month":"jul.","fullDate":"01 de jul. de 2025, 19:00","shortStartDate":"ter., 01 de jul.","startDate":"01 de jul. de 2025, 19:00","startTime":"19:00","daysLeft":219,"day":"01","year":"2025","yearMonth":"jul. de 2025"}},"common":{},"calendar":{}},"installedApps":{"schedule":true,"groups":false,"paidPlans":false,"giftCards":false}},"widgetcomp-jnmw58uo":{"events":{"events":[{"id":"ad474de7-7ef9-4cb6-9a1c-b3869eb1571d","location":{"name":"Local a ser definido","type":0,"tbd":true},"scheduling":{"config":{"scheduleTbd":false,"startDate":"2025-07-01T22:00:00.000Z","endDate":"2025-07-02T02:00:00.000Z","timeZoneId":"America\/Sao_Paulo","endDateHidden":false,"showTimeZone":false,"recurrences":{"occurrences":[],"status":0}},"formatted":"July 1, 2025, 7:00 – 11:00 PM","startDateFormatted":"July 1, 2025","startTimeFormatted":"7:00 PM","endDateFormatted":"July 1, 2025","endTimeFormatted":"11:00 PM"},"title":"Evento exclusivo Unicsul","description":"Workshop dos graduandos 2025 Unicsul","about":"","mainImage":{"id":"60c39e_b74c0b33b3dc40e3aeff8ad550058db4~mv2.png","url":"https:\/\/static.wixstatic.com\/media\/60c39e_b74c0b33b3dc40e3aeff8ad550058db4~mv2.png","height":225,"width":225},"slug":"evento-exclusivo-unicsul","language":"pt","created":"2024-11-20T23:15:12.302Z","modified":"2024-11-23T18:21:46.000Z","status":0,"registration":{"type":1,"status":3,"rsvpCollection":{"config":{"rsvpStatusOptions":0,"waitlist":false}},"ticketing":{"config":{"guestAssignedTickets":false,"ticketLimitPerOrder":50,"reservationDurationInMinutes":20},"soldOut":true},"restrictedTo":0,"initialType":1},"calendarLinks":{"google":"http:\/\/calendar.google.com\/calendar\/render?action=TEMPLATE&text=Evento+exclusivo+Unicsul&dates=20250701T220000Z%2F20250702T020000Z&location=&details=Workshop+dos+graduandos+2025+Unicsul%0A%0AEvento+exclusivo+Unicsul%0AJuly+1%2C+2025%2C+7%3A00+%E2%80%93+11%3A00+PM%0ALocal+a+ser+definido","ics":"https:\/\/www.wixevents.com\/media\/v2\/calendar?token=JWS.eyJraWQiOiJpb21iOUJ0eSIsImFsZyI6IkhTMjU2In0.eyJkYXRhIjoie1wiaW5zdGFuY2VJZFwiOlwiMzBlOWYwNzktMmU2YS00NjcyLWExZGUtMGRhNjFkNjE5OTEwXCIsXCJldmVudElkXCI6e1widmFsdWVcIjpcImFkNDc0ZGU3LTdlZjktNGNiNi05YTFjLWIzODY5ZWIxNTcxZFwifSxcIm9jTGlua1wiOm51bGx9IiwiaWF0IjoxNzMyNDU2NjM4fQ.HZkqhz0zH45SfMMBzcs3faJ8Mvr1Cbyf0IsvVF01h-8"},"instanceId":"30e9f079-2e6a-4672-a1de-0da61d619910","guestListConfig":{"publicGuestList":true},"userId":"60c39eea-e8ba-4af7-a1b1-def89b656fe0","onlineConferencing":{"providerName":""},"assignedContactsLabel":"custom.evento-exclusivo-unicsul-7-1-25-7-00-pm","categories":[],"eventDisplaySettings":{},"labellingSettings":{"assignedContactsLabelDeleted":false}},{"id":"b5657600-2737-401b-a717-73aefb4c6bbf","location":{"name":"Local do evento a ser definido. ","type":0,"tbd":true},"scheduling":{"config":{"scheduleTbd":false,"startDate":"2025-07-01T22:00:00.000Z","endDate":"2025-07-02T02:00:00.000Z","timeZoneId":"America\/Sao_Paulo","endDateHidden":true,"showTimeZone":false,"recurrences":{"occurrences":[],"status":0}},"formatted":"July 1, 2025 at 7:00 PM","startDateFormatted":"July 1, 2025","startTimeFormatted":"7:00 PM","endDateFormatted":"","endTimeFormatted":""},"title":"Eventos","description":"","about":"","slug":"eventos","language":"en","created":"2024-11-20T23:10:35.996Z","modified":"2024-11-23T18:00:09.000Z","status":0,"registration":{"type":1,"status":3,"rsvpCollection":{"config":{"rsvpStatusOptions":0,"waitlist":false}},"ticketing":{"config":{"guestAssignedTickets":false,"ticketLimitPerOrder":50,"reservationDurationInMinutes":20},"soldOut":true},"restrictedTo":0,"initialType":1},"calendarLinks":{"google":"http:\/\/calendar.google.com\/calendar\/render?action=TEMPLATE&text=Eventos&dates=20250701T220000Z%2F20250702T020000Z&location=&details=Eventos%0AJuly+1%2C+2025+at+7%3A00+PM%0ALocal+do+evento+a+ser+definido.","ics":"https:\/\/www.wixevents.com\/media\/v2\/calendar?token=JWS.eyJraWQiOiJpb21iOUJ0eSIsImFsZyI6IkhTMjU2In0.eyJkYXRhIjoie1wiaW5zdGFuY2VJZFwiOlwiMzBlOWYwNzktMmU2YS00NjcyLWExZGUtMGRhNjFkNjE5OTEwXCIsXCJldmVudElkXCI6e1widmFsdWVcIjpcImI1NjU3NjAwLTI3MzctNDAxYi1hNzE3LTczYWVmYjRjNmJiZlwifSxcIm9jTGlua1wiOm51bGx9IiwiaWF0IjoxNzMyNDU2NjM4fQ.YoIIFzMPeRJQn4H3p6XMSRgZ6Ad0PSW5fXBX8KZAGj4"},"instanceId":"30e9f079-2e6a-4672-a1de-0da61d619910","guestListConfig":{"publicGuestList":true},"userId":"60c39eea-e8ba-4af7-a1b1-def89b656fe0","onlineConferencing":{"providerName":""},"assignedContactsLabel":"custom.eventos-7-1-25-7-00-pm","categories":[],"eventDisplaySettings":{},"labellingSettings":{"assignedContactsLabelDeleted":false}}],"hasMore":false,"moreLoading":false,"filterType":0},"siteSettings":{"locale":"","firstEventCreated":true,"ticketed":false,"language":"","premium":"Auto","ticketingOptions":{"wixServiceFee":true,"delayedPaymentsCaptureConfig":{"enabled":false,"action":0,"delayInHours":144}},"appState":"ENABLED","demo":true,"settings":{"pagesType":1,"firstTimeCompleted":true}},"multilingual":{"currentLanguage":"","isEnabled":false,"isPrimaryLanguage":true},"component":{"id":"comp-jnmw58uo","settings":{"cardLocationAndDateFontSize":16,"cardDescriptionFontSize":15,"listHeaderTitleFontSizeCompactMobile":16,"listDateFontSizeCompactMobile":14,"listLocationFontSizeCompactMobile":14,"listHeaderTitleFontSizeMobile":20,"listDateFontSizeMobile":16,"listContentTextFontSizeMobile":16,"listGeneralTitleFontSizeMobile":28,"listLayout":3,"mobileListLayout":1,"listButtonFontSizeMobile":16,"listButtonFontSizeCompactMobile":14,"cardBorderWidth":1,"borderWidth":0,"todayButtonBorderWidth":1,"todayButtonBorderRadius":0,"listRoundedButtonBorderRadius":100,"listBorderWidth":0,"calendarCellBorderWidth":1,"calendarBorderWidth":0,"buttonsBorderWidth":1,"todayRoundedButtonBorderRadius":100,"listButtonBorderRadius":0,"listButtonBorderWidth":1,"calendarDetailsTitleTextSize":16,"calendarDetailsDateLocationTextSize":14,"calendarDetailsDescriptionTextSize":14,"widgetType":2,"widgetLayout":1,"alignment":2,"contentAlignment":2,"listAlignment":2,"imageScaling":2,"multiImageScaling":2,"imageRatio":1,"listImageLayout":1,"locationAndDateFormat":1,"listLocationAndDateFormat":1,"cardsPerRow":3,"cardLocationAndDateFormat":1,"buttonsStyle":1,"buttonsBorderRadius":0,"roundedButtonsBorderRadius":100,"buttonHeight":44,"oneButtonWidth":140,"verticalDividerWidth":1,"verticalDividerHeight":94,"horizontalDividerWidth":20,"horizontalDividerHeight":1,"compactHorizontalDividerWidth":36,"compactHorizontalDividerHeight":1,"countdownMarginBottom":30,"titleMarginBottom":36,"descriptionMarginBottom":42,"dateMarginBottom":42,"locationMarginBottom":54,"dateAndLocationMarginBottom":54,"rsvpMarginBottom":30,"imageWidth":50,"imageOpacity":70,"listButtonStyle":1,"cardMargins":20,"sideBySideLayoutMargins":30,"listImageOpacity":100,"listImageWidth":50,"listDividerWidth":1,"listStripWidth":20,"calendarWeekStartDay":1,"calendarListTextSize":14,"calendarListDividerWidth":1,"todayButtonStyle":2,"showImage":true,"showCountdown":false,"showOfferRibbon":true,"showRecurringRibbon":true,"showTitle":true,"showDescription":false,"showDate":true,"showLocation":true,"showShareOptions":true,"showFullDividers":true,"showHorizontalDividers":true,"showCompactDividers":true,"showLabels":true,"showRSVPTitle":false,"showMembers":false,"listShowMainTitle":true,"listShowDate":true,"listShowVenueName":true,"listShowFullDate":true,"listShowLocation":true,"listShowDescription":true,"listShowSocialShare":false,"listShowImage":true,"listShowAdditionalInfo":true,"listShowMembers":true,"showRibbon":false}},"memberLoggedIn":false,"owner":false,"instance":{"instance":"KoavMeKvM70Hc0FmSHDCl9Zlnd_PypUeZIvCmpNksG8.eyJpbnN0YW5jZUlkIjoiMzBlOWYwNzktMmU2YS00NjcyLWExZGUtMGRhNjFkNjE5OTEwIiwiYXBwRGVmSWQiOiIxNDA2MDNhZC1hZjhkLTg0YTUtMmM4MC1hMGY2MGNiNDczNTEiLCJtZXRhU2l0ZUlkIjoiNmIwYTZiZWUtMzFhNi00MjljLWE2NTgtMTQ1ODViOGJlMDhlIiwic2lnbkRhdGUiOiIyMDI0LTExLTI0VDEzOjU3OjE2LjkxN1oiLCJkZW1vTW9kZSI6ZmFsc2UsImJpVG9rZW4iOiI1YmUzOWI5Ny0xZmNjLTA0ZWUtMDc4Ni0xOWZlNDZlYTc5OWUiLCJzaXRlT3duZXJJZCI6IjYwYzM5ZWVhLWU4YmEtNGFmNy1hMWIxLWRlZjg5YjY1NmZlMCIsImNhY2hlIjp0cnVlfQ","instanceId":"30e9f079-2e6a-4672-a1de-0da61d619910","appDefId":"140603ad-af8d-84a5-2c80-a0f60cb47351","metaSiteId":"6b0a6bee-31a6-429c-a658-14585b8be08e","signDate":"2024-11-24T13:57:16.917Z","demoMode":false,"biToken":"5be39b97-1fcc-04ee-0786-19fe46ea799e","siteOwnerId":"60c39eea-e8ba-4af7-a1b1-def89b656fe0","cache":true,"visitorId":null,"msid":"6b0a6bee-31a6-429c-a658-14585b8be08e","siteIsTemplate":false},"calendarLayout":{"loadedPages":[]},"dates":{"events":{"ad474de7-7ef9-4cb6-9a1c-b3869eb1571d":{"utcOffset":-180,"startDateISOFormatNotUTC":"2025-07-01T19:00:00-03:00","endDateISOFormatNotUTC":"2025-07-01T23:00:00-03:00","monthDay":"01","weekDay":"ter.","month":"jul.","fullDate":"01 de jul. de 2025, 19:00 – 23:00","shortStartDate":"ter., 01 de jul.","startDate":"01 de jul. de 2025, 19:00","startTime":"19:00","daysLeft":219,"day":"01","year":"2025","yearMonth":"jul. de 2025"},"b5657600-2737-401b-a717-73aefb4c6bbf":{"utcOffset":-180,"startDateISOFormatNotUTC":"2025-07-01T19:00:00-03:00","endDateISOFormatNotUTC":"2025-07-01T23:00:00-03:00","monthDay":"01","weekDay":"ter.","month":"jul.","fullDate":"01 de jul. de 2025, 19:00","shortStartDate":"ter., 01 de jul.","startDate":"01 de jul. de 2025, 19:00","startTime":"19:00","daysLeft":219,"day":"01","year":"2025","yearMonth":"jul. de 2025"}},"common":{},"calendar":{}},"installedApps":{"schedule":true,"groups":false,"paidPlans":false,"giftCards":false}}}},"ooi":{"failedInSsr":{}}}</script>
<!-- warmup data end -->





</body>
</html>
