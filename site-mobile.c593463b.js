(window.webpackJsonp_trillion_muld=window.webpackJsonp_trillion_muld||[]).push([[561],{136:(n,e,t)=>{"use strict";var r=t(784),a=t(316),o=t(131),l=t(442),i=t(779),c=t.n(i);function s(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n    &.muld-doc-demo-section {\n        box-sizing: border-box;\n        min-height: calc(100vh - 56px);\n        padding-bottom: 20px;\n    }\n"]);return s=function(){return n},n}function u(n){return r.createElement("section",{className:c()("muld-doc-demo-section",n.className)},n.children)}l.ZP.section(s());var d=t(450);function m(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n    &.mul-doc-demo-block {\n        .mul-doc-demo-block__title {\n            margin: 0;\n            padding: 32px 16px 16px;\n            color: ",";\n            font-weight: normal;\n            font-size: 14px;\n            line-height: 16px;\n        }\n\n        .mul-doc-demo-block__card {\n            margin: 12px 12px 0;\n            overflow: hidden;\n            border-radius: 8px;\n        }\n\n        .mul-doc-demo-block__title + .mul-doc-demo-block__card {\n            margin-top: 0;\n        }\n\n        &:first-of-type {\n            .mul-doc-demo-block__title {\n                padding-top: 20px;\n            }\n        }\n    }\n"]);return m=function(){return n},n}var f=l.ZP.div(m(),d.vK);function p(n){var e=n.card,t=n.title,a=n.children,o=e?r.createElement("div",{className:"mul-doc-demo-block__card"},e):a;return r.createElement(f,{className:"mul-doc-demo-block"},r.createElement("h2",{className:"mul-doc-demo-block__title"},t),o)}var b=/-(\w)/g;Object.prototype.hasOwnProperty;var g="zh-CN",h={"zh-CN":{save:"保存",confirm:"确认",cancel:"取消",delete:"删除",complete:"完成",loading:"加载中..."}};const _=function(){return h[g]};function v(n){var e=n.replace(b,(function(n,e){return e.toUpperCase()}))+".";return function(n){for(var t=_(),r=z(t,e+n)||z(t,n),a=arguments.length,o=new Array(a>1?a-1:0),l=1;l<a;l++)o[l-1]=arguments[l];return N(r)?r.apply(void 0,o):r}}function y(n){return function(e,t){return e&&"string"!=typeof e&&(t=e,e=""),""+(e=e?n+"__"+e:n)+function n(e,t){return t?"string"==typeof t?" "+e+"--"+t:Array.isArray(t)?t.reduce((function(t,r){return t+n(e,r)}),""):Object.keys(t).reduce((function(r,a){return r+(t[a]?n(e,a):"")}),""):""}(e,t)}}function E(n){return[y(n="mul-"+n),v(n)]}function x(n){if(w(n))return n=String(n),/^\d+(\.\d+)?$/.test(n)?n+"px":n}var k=function(n,e){return n.defaultProps=e,n};function w(n){return null!=n}function N(n){return"function"==typeof n}function z(n,e){var t=e.split("."),r=n;return t.forEach((function(n){r=w(r[n])?r[n]:""})),r}var j={loading_text_color:"#969799",loading_text_font_size:"14px",loading_spinner_color:"#c8c9cc",loading_spinner_size:"30px",loading_spinner_animation_duration:"0.8s"},O={button_mini_height:"24px",button_mini_font_size:"10px",button_small_height:"32px",button_small_font_size:"12px",button_normal_font_size:"14px",button_large_height:"50px",button_default_height:"44px",button_default_line_height:"1.2",button_default_font_size:"16px",button_default_color:"#323233",button_default_background_color:"#fff",button_default_border_color:"#ebedf0",button_primary_color:"#fff",button_primary_background_color:"#07c160",button_primary_border_color:"#07c160",button_info_color:"#fff",button_info_background_color:"#108ee9",button_info_border_color:"#108ee9",button_danger_color:"#fff",button_danger_background_color:"#fa220a",button_danger_border_color:"#fa220a",button_warning_color:"#fff",button_warning_background_color:"#ff976a",button_warning_border_color:"#ff976a",button_border_width:"1px",button_border_radius:"2px",button_round_border_radius:"999px",button_plain_background_color:"#fff",button_disabled_opacity:"0.5"};function P(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n    &.mul-loading {\n        position: relative;\n        color: ",";\n        font-size: 0;\n        vertical-align: middle;\n\n        .mul-loading__spinner {\n            position: relative;\n            display: inline-block;\n            width: ",";\n            max-width: 100%;\n            height: ",";\n            max-height: 100%;\n            vertical-align: middle;\n            animation: mul-rotate "," linear infinite;\n\n            &--spinner {\n                animation-timing-function: steps(12);\n\n                i {\n                    position: absolute;\n                    top: 0;\n                    left: 0;\n                    width: 100%;\n                    height: 100%;\n\n                    &::before {\n                        display: block;\n                        width: 2px;\n                        height: 25%;\n                        margin: 0 auto;\n                        background-color: currentColor;\n                        border-radius: 40%;\n                        content: ' ';\n                    }\n                    ","\n                }\n            }\n\n            &--circular {\n                animation-duration: 2s;\n            }\n        }\n\n        .mul-loading__circular {\n            display: block;\n            width: 100%;\n            height: 100%;\n\n            circle {\n                animation: mul-circular 1.5s ease-in-out infinite;\n                stroke: currentColor;\n                stroke-width: 3;\n                stroke-linecap: round;\n            }\n        }\n\n        .mul-loading__text {\n            display: inline-block;\n            margin-left: ",";\n            color: ",";\n            font-size: ",";\n            vertical-align: middle;\n        }\n\n        .mul-loading--vertical {\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n\n            .mul-loading__text {\n                margin: "," 0 0;\n            }\n        }\n    }\n\n    @keyframes mul-circular {\n        0% {\n            stroke-dasharray: 1, 200;\n            stroke-dashoffset: 0;\n        }\n\n        50% {\n            stroke-dasharray: 90, 150;\n            stroke-dashoffset: -40;\n        }\n\n        100% {\n            stroke-dasharray: 90, 150;\n            stroke-dashoffset: -120;\n        }\n    }\n"]);return P=function(){return n},n}var C=l.ZP.div(P(),j.loading_spinner_color,j.loading_spinner_size,j.loading_spinner_size,j.loading_spinner_animation_duration,function(){for(var n="",e=1;e<=12;)n+="\n            &:nth-of-type("+e+") {\n                transform: rotate("+30*e+"deg);\n                opacity: "+(1-.0625*(e-1))+"\n            }\n        ",e++;return n}(),"8px",j.loading_text_color,j.loading_text_font_size,"8px"),q=E("loading")[0];var S=function(n){var e=n.color,t=n.size,a=n.type,o={color:e};if(t){var l=x(t);o.width=l,o.height=l}return r.createElement(C,{className:q([a,{vertical:n.vertical}])},r.createElement("span",{className:q("spinner",a),style:o},function(n){if("spinner"===n.type){for(var e=[],t=0;t<12;t++)e.push(r.createElement("i",{key:t}));return e}return r.createElement("svg",{className:q("circular"),viewBox:"25 25 50 50"},r.createElement("circle",{cx:"50",cy:"50",r:"20",fill:"none"}))}(n)),function(n){var e=n.children;if(e){var t={};return n.textSize&&(t={fontSize:x(n.textSize)}),r.createElement("span",{className:q("text"),style:t},e)}}(n))};const L=k(r.memo(S),{type:"circular"});function J(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n    &.mul-button {\n        position: relative;\n        display: inline-block;\n        box-sizing: border-box;\n        height: ",";\n        margin: 0;\n        padding: 0;\n        font-size: ",";\n        line-height: ",";\n        text-align: center;\n        border-radius: ",";\n        cursor: pointer;\n        transition: opacity ",";\n        -webkit-appearance: none;\n\n        &::before {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            width: 100%;\n            height: 100%;\n            background-color: ",";\n            border: inherit;\n            border-color: ",";\n            border-radius: inherit; /* inherit parent's border radius */\n            transform: translate(-50%, -50%);\n            opacity: 0;\n            content: ' ';\n        }\n\n        &:active::before {\n            opacity: 0.1;\n        }\n\n        &--loading,\n        &--disabled {\n            &::before {\n                display: none;\n            }\n        }\n\n        &--default {\n            color: ",";\n            background-color: ",";\n            border: "," solid ",";\n        }\n\n        &--primary {\n            color: ",";\n            background-color: ",";\n            border: "," solid ",";\n        }\n\n        &--info {\n            color: ",";\n            background-color: ",";\n            border: "," solid ",";\n        }\n\n        &--danger {\n            color: ",";\n            background-color: ",";\n            border: "," solid ",";\n        }\n\n        &--warning {\n            color: ",";\n            background-color: ",";\n            border: "," solid ",";\n        }\n\n        &--plain {\n            background-color: ",";\n\n            &.mul-button--primary {\n                color: ",";\n            }\n\n            &.mul-button--info {\n                color: ",";\n            }\n\n            &.mul-button--danger {\n                color: ",";\n            }\n\n            &.mul-button--warning {\n                color: ",";\n            }\n        }\n\n        &--large {\n            width: 100%;\n            height: ",";\n        }\n\n        &--normal {\n            padding: 0 15px;\n            font-size: ",";\n        }\n\n        &--small {\n            height: ",";\n            padding: 0 ",";\n            font-size: ",";\n        }\n\n        &__loading {\n            color: inherit;\n            font-size: inherit;\n        }\n\n        &--mini {\n            height: ",";\n            padding: 0 ",";\n            font-size: ",";\n\n            & + .mul-button--mini {\n                margin-left: ",";\n            }\n        }\n\n        &--block {\n            display: block;\n            width: 100%;\n        }\n\n        &--disabled {\n            cursor: not-allowed;\n            opacity: ",";\n        }\n\n        &--loading {\n            cursor: default;\n        }\n\n        &--round {\n            border-radius: ",";\n        }\n\n        &--square {\n            border-radius: 0;\n        }\n\n        // align-items are ignored when flex container is a button in legacy safari\n        // see: https://bugs.webkit.org/show_bug.cgi?id=169700\n        &__content {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            height: 100%;\n        }\n\n        &__icon {\n            min-width: 1em;\n            font-size: 1.2em;\n            line-height: inherit;\n        }\n\n        &__icon + &__text,\n        &__loading + &__text {\n            margin-left: 5px;\n        }\n\n        &--hairline {\n            border-width: 0;\n\n            &::after {\n                border-color: inherit;\n                border-radius: 4px;\n            }\n\n            &.mul-button--round::after {\n                border-radius: ",";\n            }\n\n            &.mul-button--square::after {\n                border-radius: 0;\n            }\n        }\n    }\n"]);return J=function(){return n},n}var Z=l.ZP.button(J(),O.button_default_height,O.button_default_font_size,O.button_default_line_height,O.button_border_radius,"0.2s","#000","#000",O.button_default_color,O.button_default_background_color,O.button_border_width,O.button_default_border_color,O.button_primary_color,O.button_primary_background_color,O.button_border_width,O.button_primary_border_color,O.button_info_color,O.button_info_background_color,O.button_border_width,O.button_info_border_color,O.button_danger_color,O.button_danger_background_color,O.button_border_width,O.button_danger_border_color,O.button_warning_color,O.button_warning_background_color,O.button_border_width,O.button_warning_border_color,O.button_plain_background_color,O.button_primary_background_color,O.button_info_background_color,O.button_danger_background_color,O.button_warning_background_color,O.button_large_height,O.button_normal_font_size,O.button_small_height,"8px",O.button_small_font_size,O.button_mini_height,"4px",O.button_mini_font_size,"4px",O.button_disabled_opacity,O.button_round_border_radius,O.button_round_border_radius),X=E("button")[0],Y=function(n){n.icon;var e,t=n.type,a=n.color,o=n.plain,l=n.disabled,i=n.loading,s=n.hairline,u=n.loadingText,d=n.onClick,m=n.children,f={};a&&(f.color=o?a:"#fff",o||(f.background=a),-1!==a.indexOf("gradient")?f.border=0:f.borderColor=a);var p,b,g=[X([t,n.size,{plain:o,loading:i,disabled:l,hairline:s,block:n.block,round:n.round,square:n.square}]),(e={},e["mul-hairline--surround"]=s,e)];return r.createElement(Z,{style:f,className:c()(g),type:n.nativeType,disabled:l,onClick:function(n){l||i||d&&d(n)}},r.createElement("div",{className:X("content")},(b=[],i&&b.push(r.createElement(L,{key:"loading",className:X("loading"),size:n.loadingSize,type:n.loadingType,color:"currentColor"})),(p=i?u:n.text||m)&&b.push(r.createElement("span",{key:"text",className:X("text")},p)),b)))};const F=k(r.memo(Y),{tag:"button",type:"default",size:"normal",loadingSize:"20px"});function I(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n    &.demo-button {\n        .mul-button {\n            &--large {\n                margin-bottom: ",";\n            }\n\n            &--small,\n            &--normal:not(:last-child) {\n                margin-right: ",";\n            }\n        }\n\n        .mul-doc-demo-block {\n            padding: 0 ",";\n        }\n\n        .mul-doc-demo-block__title {\n            padding-left: 0;\n        }\n\n        .demo-button-row {\n            margin-bottom: ",";\n        }\n    }\n"]);return I=function(){return n},n}var R=(0,l.ZP)(u)(I(),"16px","16px","16px","12px"),T=r.createContext({gutter:void 0});var U=E("col")[0],A=function(n){var e,t=r.useContext(T).gutter,a=n.span,o=n.offset,l=n.tag,i=n.className,s=n.children,u={};return t&&(u.paddingLeft=Number(t)/2+"px",u.paddingRight=u.paddingLeft),r.createElement(l,{className:c()(U((e={},e[a]=a,e["offset-"+o]=o,e)),i),style:u},s)};const B=k(r.memo(A),{tag:"div"});var M=E("row")[0],D=function(n){var e,t=n.type,a=n.align,o=n.justify,l=n.tag,i=n.gutter,c=n.children,s="flex"===t,u={};return i&&(u.marginLeft="-"+Number(i)/2+"px",u.marginRight=u.marginLeft),r.createElement(T.Provider,{children:r.createElement(l,{className:M((e={flex:s},e["align-"+a]=s&&a,e["justify-"+o]=s&&o,e)),style:u},c),value:{gutter:i}})};const G=k(r.memo(D),{tag:"div",align:"top",justify:"start"});function H(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n    &.demo-col {\n        background: ",";\n\n        .mul-doc-demo-block {\n            padding: 0 ",";\n        }\n\n        .mul-doc-demo-block__title {\n            padding-left: 0;\n        }\n\n        .mul-col {\n            margin-bottom: 10px;\n            color: ",";\n            font-size: 13px;\n            line-height: 30px;\n            text-align: center;\n            background-clip: content-box;\n\n            &:nth-child(odd) {\n                background-color: #39a9ed;\n            }\n\n            &:nth-child(even) {\n                background-color: #66c6f2;\n            }\n        }\n    }\n"]);return H=function(){return n},n}var $=(0,l.ZP)(u)(H(),"#fff","16px","#fff");function K(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n    &.demo-loading {\n        background: ",";\n\n        .mul-loading {\n            display: inline-block;\n            margin: 5px 0 5px 20px;\n\n            &--vertical {\n                display: inline-flex;\n            }\n        }\n    }\n"]);return K=function(){return n},n}var V=(0,l.ZP)(u)(K(),"#fff");function Q(){return(Q=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}var W=function(n){var e=Q({},n.style),t=n.frame,a=n.padding,o=n.border,l=n.shadow,i=n.tag,c=void 0===i?"div":i,s=n.children,u=n.className;if(t){var d=t.width,m=t.height;e.width=d?d+"px":void 0,e.height=m?m+"px":void 0}if(a&&(e.padding=!0===a?"16px":a+"px"),o){var f=o.color,p=o.width,b=o.cornerRadius;e.border=p+"px solid "+f,e.borderRadius=void 0!==b?b+"px":void 0}if(void 0!==l){var g=l.color,h=l.radius,_=l.x,v=l.y;e.boxShadow=_+"px "+v+"px "+h+"px "+g}return r.createElement(c,{className:u,style:e},s)},nn={top:"flex-start",center:"center",bottom:"flex-end"},en={left:"flex-start",center:"center",right:"flex-end"},tn=function(n){if(n)return!0===n?"4px":n+"px"};E("group")[0];function rn(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n    &.mul-hstack {\n        &--spacing {\n            & > * {\n                margin-right: ",";\n            }\n            & > :last-child {\n                margin-right: 0;\n            }\n        }\n    }\n"]);return rn=function(){return n},n}function an(){return(an=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}var on=E("hstack")[0],ln=function(n){var e=n.alignX,t=n.alignY,a=n.spacing,o={display:"flex",flexDirection:"row",alignItems:"center",alignSelf:"stretch"};return e&&(o.justifyContent=en[e]),t&&(o.alignItems=nn[t]),r.createElement(cn,an({className:on({spacing:a})},n,{style:o}),n.children)},cn=(0,l.ZP)(W)(rn(),(function(n){return tn(n.spacing)})),sn=E("spacer")[0],un=function(n){return r.createElement("div",{className:sn(),style:{flexGrow:1}})};var dn;E("text")[0];!function(n){n[n.regular=400]="regular",n[n.medium=500]="medium",n[n.semibold=600]="semibold",n[n.bold=700]="bold"}(dn||(dn={}));function mn(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n    &.mul-vstack {\n        &--spacing {\n            & > * {\n                margin-bottom: ",";\n            }\n            & > :last-child {\n                margin-bottom: 0;\n            }\n        }\n    }\n"]);return mn=function(){return n},n}function fn(){return(fn=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}var pn=E("vstack")[0],bn=function(n){var e=n.alignX,t=n.alignY,a=n.spacing,o={display:"flex",flexDirection:"column",alignSelf:"stretch",flex:"1 1 auto",height:"100%"};return e&&(o.alignItems=en[e]),t&&(o.justifyContent=nn[t]),r.createElement(gn,fn({className:pn({spacing:a})},n,{style:o}),n.children)},gn=(0,l.ZP)(W)(mn(),(function(n){return tn(n.spacing)}));function hn(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n    &.demo-stack-layout {\n        background: ",";\n\n        .mul-doc-demo-block {\n            padding: 0 ",";\n        }\n\n        .mul-doc-demo-block__title {\n            padding-left: 0;\n        }\n\n        .mul-hstack {\n            /* margin-bottom: ","; */\n        }\n        .swift-panel {\n            height: 100px;\n            border: 1px solid #39a9ed;\n        \n            .swift-block {\n                margin-left: 0px; \n            }\n        }\n\n        .swift-block {\n            font-size: 13px;\n            line-height: 30px;\n            color: ",";\n            background-color: #39a9ed;\n            padding: 0px 10px;\n            margin-left: 1px;\n\n            &:first-child {\n                margin-left: 0px;\n            }\n        }\n    }\n"]);return hn=function(){return n},n}var _n=(0,l.ZP)(u)(hn(),"#fff","16px","16px","#fff");const vn={Button:function(){return r.createElement(R,{className:"demo-button"},r.createElement(p,{title:"按钮类型"},r.createElement("div",{className:"demo-button-row"},r.createElement(F,{type:"default"},"默认按钮"),r.createElement(F,{type:"primary"},"主要按钮"),r.createElement(F,{type:"info"},"信息按钮")),r.createElement(F,{type:"warning"},"警告按钮"),r.createElement(F,{type:"danger"},"危险按钮")),r.createElement(p,{title:"朴素按钮"},r.createElement(F,{plain:!0,type:"primary"},"朴素按钮"),r.createElement(F,{plain:!0,type:"info"},"朴素按钮")),r.createElement(p,{title:"细边框"},r.createElement(F,{plain:!0,hairline:!0,type:"primary"},"细边框按钮"),r.createElement(F,{plain:!0,hairline:!0,type:"info"},"细边框按钮")),r.createElement(p,{title:"禁用状态"},r.createElement(F,{disabled:!0,type:"primary"},"禁用状态"),r.createElement(F,{disabled:!0,type:"info"},"禁用状态")),r.createElement(p,{title:"加载状态"},r.createElement(F,{loading:!0,type:"primary"}),r.createElement(F,{loading:!0,type:"primary","loading-type":"spinner"}),r.createElement(F,{loading:!0,type:"info","loading-text":"加载中..."})),r.createElement(p,{title:"按钮形状"},r.createElement(F,{square:!0,type:"primary"},"方形按钮"),r.createElement(F,{round:!0,type:"info"},"圆形按钮")),r.createElement(p,{title:"图标按钮"},r.createElement(F,{icon:"star-o",type:"primary"}),r.createElement(F,{icon:"star-o",type:"primary"},"按钮"),r.createElement(F,{icon:"",type:"info"},"按钮")),r.createElement(p,{title:"按钮尺寸"},r.createElement(F,{type:"primary",size:"large"},"大号按钮"),r.createElement(F,{type:"primary",size:"normal"},"普通按钮"),r.createElement(F,{type:"primary",size:"small"},"小型按钮"),r.createElement(F,{type:"primary",size:"mini"},"迷你按钮")),r.createElement(p,{title:"块级元素"},r.createElement(F,{type:"primary",block:!0},"块级元素")),r.createElement(p,{title:"自定义颜色"},r.createElement(F,{color:"#7232dd"},"单色按钮"),r.createElement(F,{color:"#7232dd",plain:!0},"单色按钮"),r.createElement(F,{color:"linear-gradient(to right, #4bb0ff, #6149f6)"},"渐变色按钮")))},Col:function(){return r.createElement($,{className:"demo-col"},r.createElement(u,null,r.createElement(p,{title:"基础用法"},r.createElement(G,null,r.createElement(B,{span:"8"},"span: 8"),r.createElement(B,{span:"8"},"span: 8"),r.createElement(B,{span:"8"},"span: 8")),r.createElement(G,null,r.createElement(B,{span:"4"},"span: 4"),r.createElement(B,{span:"10",offset:"4"},"offset: 4, span: 10")),r.createElement(G,null,r.createElement(B,{offset:"12",span:"12"},"offset: 12, span: 12"))),r.createElement(p,{title:"设置列元素间距"},r.createElement(G,{gutter:"20"},r.createElement(B,{span:"8"},"span: 8"),r.createElement(B,{span:"8"},"span: 8"),r.createElement(B,{span:"8"},"span: 8"))),r.createElement(p,{title:"Flex 布局"},r.createElement(G,{type:"flex"},r.createElement(B,{span:"6"},"span: 6"),r.createElement(B,{span:"6"},"span: 6"),r.createElement(B,{span:"6"},"span: 6")),r.createElement(G,{type:"flex",justify:"center"},r.createElement(B,{span:"6"},"span: 6"),r.createElement(B,{span:"6"},"span: 6"),r.createElement(B,{span:"6"},"span: 6")),r.createElement(G,{type:"flex",justify:"end"},r.createElement(B,{span:"6"},"span: 6"),r.createElement(B,{span:"6"},"span: 6"),r.createElement(B,{span:"6"},"span: 6")),r.createElement(G,{type:"flex",justify:"space-between"},r.createElement(B,{span:"6"},"span: 6"),r.createElement(B,{span:"6"},"span: 6"),r.createElement(B,{span:"6"},"span: 6")),r.createElement(G,{type:"flex",justify:"space-around"},r.createElement(B,{span:"6"},"span: 6"),r.createElement(B,{span:"6"},"span: 6"),r.createElement(B,{span:"6"},"span: 6")))))},Loading:function(){return r.createElement(V,{className:"demo-loading"},r.createElement(u,null,r.createElement(p,{title:"加载类型"},r.createElement(L,null),r.createElement(L,{type:"spinner"})),r.createElement(p,{title:"自定义颜色"},r.createElement(L,{color:"#1989fa"}),r.createElement(L,{type:"spinner",color:"#1989fa"})),r.createElement(p,{title:"自定义大小"},r.createElement(L,{size:"24"}),r.createElement(L,{type:"spinner",size:"24"})),r.createElement(p,{title:"加载文案"},r.createElement(L,{size:"24px"},"加载中")),r.createElement(p,{title:"垂直排列"},r.createElement(L,{size:"24px",vertical:!0},"加载中"))))},StackLayout:function(){return r.createElement(_n,{className:"demo-stack-layout"},r.createElement(u,null,r.createElement(p,{title:"hstack"},r.createElement(ln,{padding:10,spacing:!0},r.createElement("div",{className:"swift-block"},"react"),r.createElement("div",{className:"swift-block"},"vue"),r.createElement("div",{className:"swift-block"},"angular"))),r.createElement(p,{title:"hstack-x-center"},r.createElement(ln,{alignX:"center",spacing:5},r.createElement("div",{className:"swift-block"},"react"),r.createElement("div",{className:"swift-block"},"vue"),r.createElement("div",{className:"swift-block"},"angular"))),r.createElement(p,{title:"hstack-x-right"},r.createElement(ln,{alignX:"right",spacing:10},r.createElement("div",{className:"swift-block"},"react"),r.createElement("div",{className:"swift-block"},"vue"),r.createElement("div",{className:"swift-block"},"angular"))),r.createElement(p,{title:"hstack-y-center"},r.createElement(ln,{alignX:"center",alignY:"center",spacing:10},r.createElement("div",{className:"swift-block"},"react"),r.createElement("div",{className:"swift-block"},"vue"),r.createElement("div",{className:"swift-block"},"angular"))),r.createElement(p,{title:"vstack"},r.createElement("div",{className:"swift-panel"},r.createElement(bn,{padding:20},r.createElement("div",{className:"swift-block"},"react")))),r.createElement(p,{title:"vstack-y-center"},r.createElement("div",{className:"swift-panel"},r.createElement(bn,{padding:20,spacing:10,alignY:"center"},r.createElement("div",{className:"swift-block"},"react"),r.createElement("div",{className:"swift-block"},"vue")))),r.createElement(p,{title:"vstack-x-y-center"},r.createElement("div",{className:"swift-panel"},r.createElement(bn,{alignX:"center",alignY:"center"},r.createElement("div",{className:"swift-block"},"react")))),r.createElement(p,{title:"vstack-x-center-y-bottom"},r.createElement("div",{className:"swift-panel"},r.createElement(bn,{alignX:"center",alignY:"bottom"},r.createElement("div",{className:"swift-block"},"react")))),r.createElement(p,{title:"spacer"},r.createElement(ln,null,r.createElement("div",{className:"swift-block"},"react"),r.createElement(un,null),r.createElement("div",{className:"swift-block"},"vue")))))}};var yn=t(431),En={defaultLang:"en-US",locales:{"zh-CN":{title:"Muld",description:"移动端组件库",logo:"https://chengfayun.com/static/icon/logo-1.svg",langLabel:"中文",links:[{logo:"https://chengfayun.com/static/icon/logo-cn.svg",url:"https://github.com/mulcloud/muld"}],nav:[{title:"基础组件",items:[{path:"button",title:"Button 按钮"},{path:"col",title:"Layout 布局"},{path:"stack-layout",title:"Stack 布局"}]},{title:"反馈组件",items:[{path:"loading",title:"Loading 加载"}]}]},"en-US":{title:"Muld",description:"Mobile UI Components built on React",logo:"https://chengfayun.com/static/icon/logo-1.svg",langLabel:"En",links:[{logo:"https://chengfayun.com/static/icon/logo-cn.svg",url:"https://github.com/mulcloud/muld"}],nav:[]}}},xn=En.locales,kn=En.defaultLang;(0,yn.GO)(kn);var wn=t(289),Nn=t(833),zn=t(74);function jn(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["",""]);return jn=function(){return n},n}var On=(0,l.vJ)(jn(),"\n    @keyframes mul-slide-up-enter {\n        from {\n            transform: translate3d(0, 100%, 0);\n        }\n    }\n\n    @keyframes mul-slide-up-leave {\n        to {\n            transform: translate3d(0, 100%, 0);\n        }\n    }\n\n    @keyframes mul-slide-down-enter {\n        from {\n            transform: translate3d(0, -100%, 0);\n        }\n    }\n\n    @keyframes mul-slide-down-leave {\n        to {\n            transform: translate3d(0, -100%, 0);\n        }\n    }\n\n    @keyframes mul-slide-left-enter {\n        from {\n            transform: translate3d(-100%, 0, 0);\n        }\n    }\n\n    @keyframes mul-slide-left-leave {\n        to {\n            transform: translate3d(-100%, 0, 0);\n        }\n    }\n\n    @keyframes mul-slide-right-enter {\n        from {\n            transform: translate3d(100%, 0, 0);\n        }\n    }\n\n    @keyframes mul-slide-right-leave {\n        to {\n            transform: translate3d(100%, 0, 0);\n        }\n    }\n\n    @keyframes mul-fade-in {\n        from {\n            opacity: 0;\n        }\n\n        to {\n            opacity: 1;\n        }\n    }\n\n    @keyframes mul-fade-out {\n        from {\n            opacity: 1;\n        }\n\n        to {\n            opacity: 0;\n        }\n    }\n\n    @keyframes mul-rotate {\n        from {\n            transform: rotate(0deg);\n        }\n\n        to {\n            transform: rotate(360deg);\n        }\n    }\n\n    .mul-fade-enter-active {\n        animation: 0.3s mul-fade-in both ease-out;\n    }\n    .mul-fade-leave-active {\n        animation: 0.3s mul-fade-out both ease-in;\n    }\n\n    .mul-slide-up-enter-active {\n        animation: mul-slide-up-enter 0.3s both\n            ease-out;\n    }\n\n    .mul-slide-up-leave-active {\n        animation: mul-slide-up-leave 0.3s both\n            ease-in;\n    }\n\n    .mul-slide-down-enter-active {\n        animation: mul-slide-down-enter 0.3s both\n            ease-out;\n    }\n\n    .mul-slide-down-leave-active {\n        animation: mul-slide-down-leave 0.3s both\n            ease-in;\n    }\n\n    .mul-slide-left-enter-active {\n        animation: mul-slide-left-enter 0.3s both\n            ease-out;\n    }\n\n    .mul-slide-left-leave-active {\n        animation: mul-slide-left-leave 0.3s both\n            ease-in;\n    }\n    .mul-slide-right-enter-active {\n        animation: mul-slide-right-enter 0.3s both\n            ease-out;\n    }\n\n    .mul-slide-right-leave-active {\n        animation: mul-slide-right-leave 0.3s both\n            ease-in;\n    }\n");function Pn(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["",""]);return Pn=function(){return n},n}var Cn,qn,Sn="\n    .mul-clearfix {\n        "+(void 0===Cn&&(Cn="&"),(qn={})[Cn+"::after"]={clear:"both",content:'""',display:"table"},qn+"\n    }\n"),Ln=(0,l.vJ)(Pn(),Sn);function Jn(n){return n?{display:"-webkit-box",overflow:"hidden",textOverflow:"ellipsis","-webkit-line-clamp":""+n,"-webkit-box-orient":"vertical"}:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}function Zn(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["",""]);return Zn=function(){return n},n}var Xn="\n    .mul-ellipsis {\n        "+Jn()+";\n    }\n\n    .mul-multi-ellipsis--l2 {\n        "+Jn(2)+";\n    }\n\n    .mul-multi-ellipsis--l3 {\n        "+Jn(3)+";\n    }\n",Yn=(0,l.vJ)(Zn(),Xn);function Fn(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["",""]);return Fn=function(){return n},n}var In,Rn="\n    [class*='mul-hairline'] {\n        &::after {\n            "+(void 0===In&&(In="#ebedf0"),"\n        position: absolute;\n        box-sizing: border-box;\n        content: ' ';\n        pointer-events: none;\n        top: -50%;\n        right: -50%;\n        bottom: -50%;\n        left: -50%;\n        border: 0 solid "+In+";\n        transform: scale(0.5);\n    ;\n        }\n    }\n\n    .mul-hairline {\n        &,\n        &--top,\n        &--left,\n        &--right,\n        &--bottom,\n        &--surround,\n        &--top-bottom {\n            position: relative;\n        }\n\n        &--top::after {\n            border-top-width: 1px;\n        }\n\n        &--left::after {\n            border-left-width: 1px;\n        }\n\n        &--right::after {\n            border-right-width: 1px;\n        }\n\n        &--bottom::after {\n            border-bottom-width: 1px;\n        }\n\n        &,\n        &-unset {\n            &--top-bottom::after {\n                border-width: 1px 0;\n            }\n        }\n\n        &--surround::after {\n            border-width: 1px;\n        }\n    }\n"),Tn=(0,l.vJ)(Fn(),Rn);function Un(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["",""]);return Un=function(){return n},n}var An=(0,l.vJ)(Un(),"\n    html {\n        -webkit-tap-highlight-color: transparent;\n    }\n\n    body {\n        margin: 0;\n    }\n\n    a {\n        text-decoration: none;\n    }\n\n    a,\n    input,\n    button,\n    textarea,\n    [class*='mul-'] {\n        &:focus {\n            outline: none;\n        }\n    }\n\n    ol,\n    ul {\n        margin: 0;\n        padding: 0;\n        list-style: none;\n    }\n\n    input,\n    button,\n    textarea {\n        color: inherit;\n        font: inherit;\n    }\n\n    input:-internal-autofill-selected {\n        box-shadow: inset 0 0 0 500px #fff !important;\n    }\n");function Bn(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["",""]);return Bn=function(){return n},n}var Mn=(0,l.vJ)(Bn(),"\n    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, \n    blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, \n    kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, \n    li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, \n    figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio,\n    video {\n        margin: 0;\n        padding: 0;\n        font: inherit;\n        font-size: 100%;\n        vertical-align: baseline;\n        border: 0;\n    }\n\n    html {\n        line-height: 1;\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    }\n    \n    ol,ul {\n        list-style: none;\n    }\n    \n    table {\n        border-collapse: collapse;\n        border-spacing: 0;\n    }\n    \n    caption, th, td {\n        font-weight: normal;\n        vertical-align: middle;\n    }\n\n    q, blockquote {\n        quotes: none;\n    }\n\n    q::before,\n    q::after,\n    blockquote::before,\n    blockquote::after {\n        content: '';\n        content: none;\n    }\n\n    a img {\n        border: none;\n    }\n\n    article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section,\n    summary {\n        display: block;\n    }\n\n    * {\n        box-sizing: border-box;\n    }\n\n    body {\n        color: #323233;\n        font-family: PingFang, Arial, Helvetica, 'Microsoft YaHei', Tohoma, sans-serif;\n        background-color: #f7f8fa;\n    }\n\n    a {\n        text-decoration: none;\n        background: transparent;\n    }\n\n    button,\n    input[type='number'],\n    input[type='text'],\n    input[type='password'],\n    input[type='email'],\n    input[type='search'],\n    select,\n    textarea {\n        margin: 0;\n        font-family: inherit;\n        -webkit-appearance: none;\n    }\n");function Dn(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["","",""]);return Dn=function(){return n},n}var Gn="\n    .mul-col {\n        float: left;\n        box-sizing: border-box;\n        min-height: 1px;\n        "+function(){for(var n="",e=1;e<=24;){var t=(100*e/24).toFixed(4);n+="&--"+e+" {\n            width: "+t+"%;\n        }\n        &--offset-"+e+" {\n            margin-left: "+t+"%;\n        }\n        ",e++}return n}()+"\n    }\n  ",Hn=(0,l.vJ)(Dn(),"\n    .mul-row {\n        &::after {\n            display: table;\n            clear: both;\n            content: '';\n        }\n\n        &--flex {\n            display: flex;\n\n            &::after {\n                display: none;\n            }\n        }\n\n        &--justify-center {\n            justify-content: center;\n        }\n\n        &--justify-end {\n            justify-content: flex-end;\n        }\n\n        &--justify-space-between {\n            justify-content: space-between;\n        }\n\n        &--justify-space-around {\n            justify-content: space-around;\n        }\n\n        &--align-center {\n            align-items: center;\n        }\n\n        &--align-bottom {\n            align-items: flex-end;\n        }\n    }\n",Gn);function $n(){return r.createElement(r.Fragment,null,r.createElement(Mn,null),r.createElement(An,null),r.createElement(On,null),r.createElement(Tn,null),r.createElement(Yn,null),r.createElement(Ln,null),r.createElement(Hn,null))}function Kn(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n    body {\n        min-width: 100vw;\n    }\n\n    ::-webkit-scrollbar {\n        width: 0;\n        background: transparent;\n    }\n"]);return Kn=function(){return n},n}function Vn(){var n,e,t;return(0,wn.V$)((n=[],e=Object.keys(vn),t=xn?Object.keys(xn):[],e.forEach((function(e){var a=(0,o.Y8)(e),l=vn[e];t.length?t.forEach((function(t){n.push({name:t+"/"+a,path:"/"+t+"/"+a,element:r.createElement(l,null),meta:{name:e,lang:t}})})):n.push({name:e,path:"/"+a,element:r.createElement(l,null),meta:{name:e}})})),n))}function Qn(){return r.createElement("div",null,r.createElement($n,null),r.createElement(zn.X,null),r.createElement(Wn,null),r.createElement(Nn.UT,null,r.createElement(Vn,null)))}var Wn=(0,l.vJ)(Kn());(0,a.render)(r.createElement(r.Fragment,null,r.createElement(Qn,null)),document.getElementById("app"))}},[[136,874,962]]]);