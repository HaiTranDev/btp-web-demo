(this["webpackJsonpbtp-fe"]=this["webpackJsonpbtp-fe"]||[]).push([[5],{201:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),r=n(121),i=n(4),o=Object(a.memo)((function(e){var t=e.title,n=e.children;return Object(i.jsxs)(r.a,{children:[Object(i.jsxs)("title",{children:["BTP - ",t]}),n]})}));o.displayName="Helmet"},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return z}));var a,r=n(10),i=n(26),o=n(23),c=n(30),s=n(9),d=n(0),l=n(332),u=n(325),p=n(51),b=n(13),m=n.p+"static/media/prev-icon.99206fe9.svg",x=n.p+"static/media/blue-prev-icon.29c12a67.svg",g=n.p+"static/media/union.8eae41b2.svg",h=n.p+"static/media/blue-fast-forward.0a6e85de.svg",j=n(4),f=b.a.primaryBrandLight,w=b.a.primaryBrandBG,O=b.a.primaryBrandBase,v=s.c.div.withConfig({displayName:"Pagination__Wrapper",componentId:"sc-1ncufvp-0"})(["margin-top:24px;display:flex;align-items:center;justify-content:center;.fast-forward{height:36px;width:36px;background-color:transparent;border:1px solid ",";border-radius:4px;margin-right:8px;background:transparent center / 37% no-repeat url('","');:hover{border-color:",";background-image:url('","');}}.fast-forward__next{margin-right:0;margin-left:8px;transform:rotate(180deg);}"],f,g,O,h),k=Object(s.c)(u.a).withConfig({displayName:"Pagination__StyledPagination",componentId:"sc-1ncufvp-1"})(["display:inline-flex;align-items:center;& > li:not(:last-child){margin-right:8px;text-align:center;}> .ant-pagination-item,> .ant-pagination-prev,> .ant-pagination-next,> .ant-pagination-jump-next,> .ant-pagination-jump-prev{display:inline-flex;align-items:center;justify-content:center;cursor:pointer !important;",";color:",";transition:none;background-color:transparent;border:1px solid ",";border-radius:4px;min-width:unset;height:36px;width:36px;> a{color:inherit;padding:0;width:100%;}.ant-pagination-item-container{svg{display:none;}.ant-pagination-item-ellipsis{color:",";}}button.ant-pagination-item-link{display:none;}:hover{border-color:",";color:",";.ant-pagination-item-ellipsis{color:",";}}:active{background-color:rgba(84,101,255,0.2);}&.ant-pagination-item-active{color:",";background-color:",";border-color:",";}}> .ant-pagination-jump-next,> .ant-pagination-jump-prev{.anticon{opacity:0 !important;}:hover,:focus{.ant-pagination-item-ellipsis{opacity:1;}}.ant-pagination-item-ellipsis{color:",";}}> .ant-pagination-prev,> .ant-pagination-next{position:relative;:after{content:'';position:absolute;width:6.67px;height:11.67px;background:transparent center / cover no-repeat url('","');}:hover{:after{background-image:url('","');}}&.ant-pagination-next{:after{transform:rotate(180deg);}}}"],p.b.smBold,f,f,f,O,O,O,w,O,O,f,m,x),y=function(e){var t=e.current,n=e.total,a=e.pageSize,i=e.setCurrent,c=Object(o.a)(e,["current","total","pageSize","setCurrent"]),s=Math.ceil(n/a);return Object(j.jsxs)(v,{children:[Object(j.jsx)("button",{className:"fast-forward fast-forward__prev",onClick:function(){i(1)}}),Object(j.jsx)(k,Object(r.a)({current:t,total:n,pageSize:a},c)),Object(j.jsx)("button",{className:"fast-forward fast-forward__next",onClick:function(){i(s)}})]})},N=n(47),C=n(74),S=n(31);function T(e,t,n){var a,r,i,o,c=e[n],s=t[n],d=/(\d+)|(\D+)/g,l=/\d/,u=/^0/;if("number"==typeof c||"number"==typeof s)return isNaN(c)?1:isNaN(s)?-1:c-s;if((a=String(c).toLowerCase())===(r=String(s).toLowerCase()))return 0;if(!l.test(a)||!l.test(r))return a>r?1:-1;for(a=a.match(d),r=r.match(d);a.length&&r.length;)if((i=a.shift())!==(o=r.shift()))return l.test(i)&&l.test(o)?i.replace(u,".0")-o.replace(u,".0"):i>o?1:-1;return a.length-r.length}function _(e,t){return"desc"===e?function(e,n){return T(e,n,t)}:function(e,n){return-T(e,n,t)}}function I(e,t){var n=e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var a=t(e[0],n[0]);return 0!==a?a:e[1]-n[1]})),n.map((function(e){return e[0]}))}var D,B=Object(s.c)(l.a).withConfig({displayName:"Table__TableStyled",componentId:"tyj4a5-0"})(["width:100%;> .ant-spin-nested-loading{position:relative;.ant-spin{position:absolute;display:grid;place-items:center;z-index:4;width:100%;height:100%;}.ant-spin-blur{opacity:0.5;user-select:none;}}.ant-table-placeholder{display:none;}.ant-table-tbody{background-color:",";","}.ant-table-thead > tr > th{background:",";","}.ant-table-thead > tr > th,.ant-table-tbody > tr > td{height:48px;border:none;border-bottom:1px solid ",";padding:11.5px 14px;word-break:break-all;text-align:left;}.ant-table-thead,.ant-table-tbody{& > tr.ant-table-row-hover:not(.ant-table-expanded-row) > td,& > tr:hover:not(.ant-table-expanded-row) > td{background:",";}}table{border-spacing:0;}",";"],(function(e){return e.backgroundColor}),(function(e){return"sm"===e.bodyText?N.b.sm:N.b.md}),(function(e){return e.headerColor}),(function(e){return"sm"===e.headerText?N.b.sm:N.b.md}),b.a.grayLine,(function(e){return e.hoverColor}),S.a.md(a||(a=Object(c.a)(["\n    .ant-table-content {\n      overflow-x: auto;\n    }\n  "])))),z=function(e){var t=e.headerColor,n=e.headerText,a=e.backgroundColor,c=e.bodyText,s=e.children,l=e.hoverColor,u=e.pagination,p=void 0===u?{}:u,b=e.columns,m=e.loading,x=e.getItemsHandler,g=e.sortOptions,h=void 0===g?{}:g,f=e.dataSource,w=Object(o.a)(e,["headerColor","headerText","backgroundColor","bodyText","children","hoverColor","pagination","columns","loading","getItemsHandler","sortOptions","dataSource"]),O=Object(d.useState)(!1),v=Object(i.a)(O,2),k=v[0],N=v[1],S=Object(d.useState)(1),T=Object(i.a)(S,2),z=T[0],L=T[1],A=p.totalItem,P=p.limit,U=h.order,E=h.orderBy;return Object(d.useEffect)((function(){x&&x(z)()}),[z]),Object(d.useEffect)((function(){m?D=setTimeout((function(){m&&N(!0)}),500):(clearTimeout(D),N(!1))}),[m]),Object(j.jsxs)("div",{className:"table-component",children:[Object(j.jsx)(B,Object(r.a)(Object(r.a)({headerColor:t,headerText:n,backgroundColor:a,bodyText:c,hoverColor:l,columns:b,dataSource:U?I(f,_(U,E)):f,loading:k&&{indicator:Object(j.jsx)(C.a,{size:"25px",borderSize:"3px"})},pagination:!1},w),{},{children:s})),A&&P<A?Object(j.jsx)(y,{pageSize:P,onChange:function(e){L(e)},setCurrent:L,current:z,total:A,showSizeChanger:!1,showLessItems:!0}):""]})};z.defaultProps={headerText:"sm",bodyText:"sm",hoverColor:b.a.grayBG}},336:function(e,t,n){"use strict";n.r(t);var a,r,i,o=n(26),c=n(30),s=n(9),d=n(0),l=n(201),u=n(208),p=n(148),b=n(94),m=n(22),x=n(79),g=n(13),h=n(31),j=n(74),f=n(60),w=n(37),O=n(4),v=s.c.div.withConfig({displayName:"NetwotkDetails__Wrapper",componentId:"wqsod2-0"})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:16px;margin-top:13px;max-height:70vh;overflow-x:auto;",";::-webkit-scrollbar{width:4px;}::-webkit-scrollbar-track{background:transparent;}::-webkit-scrollbar-thumb{background:#57565a;}"],h.a.md(a||(a=Object(c.a)(["\n    grid-template-columns: 1fr;\n    max-height: 100vh;\n  "])))),k=s.c.div.withConfig({displayName:"NetwotkDetails__NetworkWrapper",componentId:"wqsod2-1"})(["padding:16px 32px 20px;border-radius:4px;background-color:",";.uppercase{text-transform:uppercase;}.all-time,.one-day{display:flex;justify-content:space-between;.plain-text.xs{margin-top:5px;color:",";}.values{text-align:right;}}.all-time{margin-top:19px;}.devider{border-bottom:solid 1px ",";margin:12px 0;}"],g.a.brandSecondaryBase,g.a.grayScaleSubText,g.a.grayLine),y=function(e){var t=e.detail,n=void 0===t?{}:t,a=n.nameToken,r=n.volume24h,i=n.volume24hUSD,o=n.volumeAlTimeUSD,c=n.volumeAllTime;return Object(O.jsxs)(k,{children:[Object(O.jsx)(m.d,{className:"md uppercase",children:a}),Object(O.jsxs)("div",{className:"all-time",children:[Object(O.jsx)(m.d,{className:"sm",children:"All time"}),Object(O.jsxs)("div",{className:"values",children:[Object(O.jsxs)(m.d,{className:"sm uppercase",children:[Object(w.c)(c)," ",a]}),Object(O.jsxs)(m.d,{className:"xs",children:["= $",Object(w.d)(o)]})]})]}),Object(O.jsx)("div",{className:"devider"}),Object(O.jsxs)("div",{className:"one-day",children:[Object(O.jsx)(m.d,{className:"sm",children:"24 hour"}),Object(O.jsxs)("div",{className:"values",children:[Object(O.jsxs)(m.d,{className:"sm uppercase",children:[Object(w.c)(r)," ",a]}),Object(O.jsxs)(m.d,{className:"xs",children:["= $",Object(w.d)(i)]})]})]})]})},N=function(e){var t=e.currentNetworkID,n=Object(d.useState)(!0),a=Object(o.a)(n,2),r=a[0],i=a[1],c=Object(f.b)((function(e){return{networkDetails:e.network.selectNetworkDetails}})).networkDetails,s=void 0===c?[]:c,l=Object(f.a)((function(e){var t=e.network;return{getNetworkDetails:t.getNetworkDetails,setNetworkDetails:t.setNetworkDetails}})),u=l.getNetworkDetails,p=l.setNetworkDetails;return Object(d.useEffect)((function(){return t&&u(t).then((function(){return i(!1)})),function(){p([])}}),[u,t,p]),Object(O.jsx)(O.Fragment,{children:r?Object(O.jsx)(j.a,{size:"40px",borderSize:"3px"}):Object(O.jsx)(v,{children:s.map((function(e){return Object(O.jsx)(y,{detail:e},e.nameToken)}))})})},C=n(47),S=function(e){var t=e.iconUrl,n=e.name,a=e.url;return Object(O.jsxs)(p.b,{className:"middle",children:[Object(O.jsx)(b.a,{className:"network-icon",iconURL:t,size:"s"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"network-name",children:n}),Object(O.jsx)("a",{href:"https://".concat(a),target:"_blank",rel:"noreferrer",className:"url",children:a})]})]})},T=[{title:"#",dataIndex:"index",render:function(e,t,n){return n+1},width:"64px",align:"center"},{title:"Network",dataIndex:"name",render:function(e,t){return Object(O.jsx)(S,{iconUrl:"http://54.251.114.18:8000/v1"+t.pathLogo.substring(1),name:e,url:t.url})},width:"288px"},{title:"Volume (24hr)",dataIndex:"usd24h",render:function(e){return Object(w.d)(e)},width:"256px"},{title:"Volume (All time)",dataIndex:"usdAllTime",render:function(e){return Object(w.d)(e)},width:"256px"},{title:"Mint fee",dataIndex:"mintFee",render:function(e){return Object(w.d)(e)},width:"128px"},{title:"Burn fee",dataIndex:"burnFee",render:function(e){return Object(w.d)(e)},width:"128px"}],_=s.c.div.withConfig({displayName:"NetworkPage__NetworkStyled",componentId:"sc-167ns6x-0"})(["max-width:1120px;margin:auto;.main{display:flex;justify-content:center;.content{width:1120px;","}}.header-text{padding:48px 0 50px 0;","}.network-icon{margin-right:12px;}.url{",";color:",";}.network-name{height:20px;margin-bottom:8px;}.ant-table-tbody > tr > td{padding:10px 14px 9px;}"],h.a.md(r||(r=Object(c.a)(["\n      width: ",";\n    "])),"".concat(window.screen.width,"px")),h.a.md(i||(i=Object(c.a)(["\n      padding: 20px 0 20px 20px;\n    "]))),C.b.sm,g.a.tertiaryBase);t.default=function(){var e=Object(d.useState)(null),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(d.useState)(!0),i=Object(o.a)(r,2),c=i[0],s=i[1],p=Object(f.b)((function(e){return{networks:e.network.selectNetwotks}})).networks,b=Object(f.a)((function(e){return{getNetworks:e.network.getNetworks}})).getNetworks;return Object(d.useEffect)((function(){b().then((function(){s(!1)}))}),[b]),Object(O.jsxs)(_,{children:[Object(O.jsx)(l.a,{title:"Network"}),Object(O.jsxs)("div",{className:"content",children:[Object(O.jsx)(m.a,{className:"md bold",children:"Networks"}),Object(O.jsx)(u.a,{rowKey:"id",loading:c&&0===p.length,columns:T,dataSource:p,pagination:!1,headerColor:g.a.grayAccent,backgroundColor:g.a.darkBG,bodyText:"md",onRow:function(e){return{onClick:function(){a(e.id)}}}})]}),n&&Object(O.jsx)(x.a,{display:n,width:"736px",title:"Curve",setDisplay:a,children:Object(O.jsx)(N,{currentNetworkID:n})})]})}}}]);
//# sourceMappingURL=5.1c8a0705.chunk.js.map