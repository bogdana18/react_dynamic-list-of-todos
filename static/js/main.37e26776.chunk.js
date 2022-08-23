(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(5),a=c.n(s),n=c(2),l=c(1),i=(c(10),c(11),c(4)),o=c.n(i),d=c(0),j=function(e){var t=e.todos,c=e.onTodoSelect,s=e.selectedTodo;return Object(d.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:" "})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){return Object(d.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(d.jsx)("td",{className:"is-vcentered",children:e.id}),Object(d.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(d.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("td",{className:"is-vcentered is-expanded",children:Object(d.jsx)("p",{className:o()(e.completed?"has-text-success":"has-text-danger"),children:e.title})}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:Object(d.jsx)("button",{"data-cy":"selectButton",className:"button",onClick:function(){c(e)},type:"button",children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:o()("far",s&&s.id===e.id?"fa-eye-slash":"fa-eye")})})})})]},e.id)}))})]})},r=function(e){var t=e.todos,c=e.onFilterTodo,s=Object(l.useState)(""),a=Object(n.a)(s,2),i=a[0],o=a[1],j=Object(l.useState)(t),r=Object(n.a)(j,2),b=r[0],h=r[1];Object(l.useEffect)((function(){c(b.filter((function(e){return e.title.toLowerCase().includes(i.toLowerCase())})))}),[i,b]);return Object(d.jsxs)("form",{className:"field has-addons",children:[Object(d.jsx)("p",{className:"control",children:Object(d.jsx)("span",{className:"select",children:Object(d.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){!function(e){switch(e){case"all":h(t);break;case"active":h(t.filter((function(e){return!1===e.completed})));break;case"completed":h(t.filter((function(e){return!0===e.completed})))}}(e.target.value)},children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"active",children:"Active"}),Object(d.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(d.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(d.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:i,onChange:function(e){o(e.target.value)}}),Object(d.jsx)("span",{className:"icon is-left",children:Object(d.jsx)("i",{className:"fas fa-magnifying-glass"})}),i&&Object(d.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(d.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return o("")}})})]})]})};function b(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=1e3,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(13);var h=function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})},u=function(e){var t=e.selectedTodo,c=e.onClose,s=Object(l.useState)(null),a=Object(n.a)(s,2),i=a[0],o=a[1];return Object(l.useEffect)((function(){var e;(e=t.userId,b("/users/".concat(e))).then(o)}),[]),Object(d.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(d.jsx)("div",{className:"modal-background"}),i?Object(d.jsxs)("div",{className:"modal-card",children:[Object(d.jsxs)("header",{className:"modal-card-head",children:[Object(d.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",t.id]}),Object(d.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(d.jsxs)("div",{className:"modal-card-body",children:[Object(d.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(d.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(d.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(d.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(d.jsx)("a",{href:"mailto:".concat(i.email),children:i.name})]})]})]}):Object(d.jsx)(h,{})]})},m=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)([]),i=Object(n.a)(a,2),o=i[0],m=i[1],O=Object(l.useState)(null),x=Object(n.a)(O,2),f=x[0],p=x[1],N=Object(l.useState)(!1),v=Object(n.a)(N,2),y=v[0],g=v[1];Object(l.useEffect)((function(){b("/todos").then((function(e){s(e),m(e),g(!0)}))}),[]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("h1",{className:"title",children:"Todos:"}),y?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(r,{todos:c,onFilterTodo:m})}),Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(j,{todos:o,selectedTodo:f,onTodoSelect:function(e){!function(e){p(e)}(e)}})})]}):Object(d.jsx)(h,{})]})})}),f&&Object(d.jsx)(u,{selectedTodo:f,onClose:function(){p(null)}})]})};a.a.render(Object(d.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.37e26776.chunk.js.map