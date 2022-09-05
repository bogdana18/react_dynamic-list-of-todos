(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s,a=c(5),n=c.n(a),l=c(2),i=c(1),d=(c(10),c(11),c(3)),r=c.n(d),o=(c(12),c(0)),j=function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})},b=function(e){var t=e.selectedTodoId,c=e.selectedTodo,s=e.filteredList;return Object(o.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:s.map((function(e){return e?Object(o.jsxs)("tr",{"data-cy":"todo",className:r()(c&&c.id===e.id&&"has-background-info-light"),children:[Object(o.jsx)("td",{className:"is-vcentered",children:e.id}),Object(o.jsx)("td",{className:"is-vcentered",children:Object(o.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(o.jsx)("i",{className:r()(e.completed&&"fas fa-check")})})}),Object(o.jsx)("td",{className:"is-vcentered is-expanded",children:Object(o.jsx)("p",{className:r()(e.completed?"has-text-success":"has-text-danger"),children:e.title})}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:Object(o.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return t(e.id)},children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:r()((null===c||void 0===c?void 0:c.id)===e.id?"far fa-eye-slash":"far fa-eye")})})})})]},e.id):Object(o.jsx)(j,{})}))})]})};!function(e){e.NONE="all",e.COMPLETED="completed",e.ACTIVE="active"}(s||(s={}));var u=function(e){var t=e.query,c=e.setQuery,a=e.filter,n=e.setFilter;return Object(o.jsxs)("form",{className:"field has-addons",children:[Object(o.jsx)("p",{className:"control",children:Object(o.jsx)("span",{className:"select",children:Object(o.jsxs)("select",{"data-cy":"statusSelect",value:a,onChange:function(e){var t=e.target;return n(t.value)},children:[Object(o.jsx)("option",{value:s.NONE,children:"All"}),Object(o.jsx)("option",{value:s.ACTIVE,children:"Active"}),Object(o.jsx)("option",{value:s.COMPLETED,children:"Completed"})]})})}),Object(o.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){c(e.target.value)}}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(o.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(o.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})};function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=1e3,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var O=function(e){var t=e.selectedTodo,c=e.setTodoId,s=Object(i.useState)(null),a=Object(l.a)(s,2),n=a[0],d=a[1];return Object(i.useEffect)((function(){var e;(e=t.userId,h("/users/".concat(e))).then(d)}),[]),Object(o.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(o.jsx)("div",{className:"modal-background"}),null==t||null===n?Object(o.jsx)(j,{}):Object(o.jsxs)("div",{className:"modal-card",children:[Object(o.jsxs)("header",{className:"modal-card-head",children:[Object(o.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",t.id]}),Object(o.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){c(0)}})]}),Object(o.jsxs)("div",{className:"modal-card-body",children:[Object(o.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(o.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(o.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(o.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(o.jsx)("a",{href:"mailto:".concat(n.email),children:n.name})]})]})]})]})},m=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)(0),d=Object(l.a)(n,2),r=d[0],m=d[1],x=Object(i.useState)(!0),f=Object(l.a)(x,2),N=f[0],p=f[1],v=Object(i.useState)(""),y=Object(l.a)(v,2),g=y[0],T=y[1],E=Object(i.useState)(s.NONE),C=Object(l.a)(E,2),k=C[0],I=C[1],w=c.find((function(e){return e.id===r})),L=c.filter((function(e){return e.title.toLowerCase().includes(g.toLowerCase())})).filter((function(e){switch(k){case s.ACTIVE:return!e.completed;case s.COMPLETED:return e.completed;default:return e}}));return Object(i.useEffect)((function(){h("/todos").then(a).finally((function(){return p(!1)}))}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("h1",{className:"title",children:"Todos:"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(u,{setFilter:I,filter:k,query:g,setQuery:T})}),Object(o.jsxs)("div",{className:"block",children:[N&&Object(o.jsx)(j,{}),Object(o.jsx)(b,{selectedTodoId:m,selectedTodo:w,filteredList:L})]})]})})}),w&&Object(o.jsx)(O,{selectedTodo:w,setTodoId:m})]})};n.a.render(Object(o.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.606c4d0f.chunk.js.map