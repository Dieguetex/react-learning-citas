(this.webpackJsonpcitas=this.webpackJsonpcitas||[]).push([[0],{11:function(e,a,t){e.exports=t(21)},16:function(e,a,t){},21:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),c=t.n(r),o=(t(16),t(10)),i=t(2),m=t(4),s=t(5),u=t(8),p=t.n(u),h=function(e){var a=e.crearCita,t=Object(n.useState)({mascota:"",propietario:"",fecha:"",hora:"",sintomas:""}),r=Object(i.a)(t,2),c=r[0],o=r[1],u=Object(n.useState)(!1),h=Object(i.a)(u,2),E=h[0],f=h[1],d=c.mascota,b=c.propietario,v=c.fecha,g=c.hora,N=c.sintomas,w=function(e){o(Object(s.a)(Object(s.a)({},c),{},Object(m.a)({},e.target.name,e.target.value)))};return l.a.createElement(n.Fragment,null,l.a.createElement("h2",null,"Crear Cita"),E?l.a.createElement("p",{className:"alerta-error"},"Todos los campos son obligatorios"):null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==d.trim()&&""!==b.trim()&&""!==v.trim()&&""!==g.trim()&&""!==N.trim()?(f(!1),c.id=p()(),a(c),o({mascota:"",propietario:"",fecha:"",hora:"",sintomas:""})):f(!0)}},l.a.createElement("label",null,"Nombre Mascota"),l.a.createElement("input",{type:"text",name:"mascota",className:"u-full-width",placeholder:"Nombre Mascota",onChange:w,value:d}),l.a.createElement("label",null,"Nombre Due\xf1o"),l.a.createElement("input",{type:"text",name:"propietario",className:"u-full-width",placeholder:"Nombre Due\xf1o de la Mascota",onChange:w,value:b}),l.a.createElement("label",null,"Fecha"),l.a.createElement("input",{type:"date",name:"fecha",className:"u-full-width",onChange:w,value:v}),l.a.createElement("label",null,"Hora"),l.a.createElement("input",{type:"time",name:"hora",className:"u-full-width",onChange:w,value:g}),l.a.createElement("label",null,"S\xedntomas"),l.a.createElement("textarea",{className:"u-full-width",name:"sintomas",onChange:w,value:N}),l.a.createElement("button",{type:"submit",className:"u-full-width button-primary"},"Agregar cita")))},E=function(e){var a=e.cita,t=e.eliminarCita;return l.a.createElement("div",{className:"cita"},l.a.createElement("p",null,"Mascota: ",l.a.createElement("span",null,a.mascota)),l.a.createElement("p",null,"Due\xf1o: ",l.a.createElement("span",null,a.propietario)),l.a.createElement("p",null,"Fecha: ",l.a.createElement("span",null,a.fecha)),l.a.createElement("p",null,"Hora: ",l.a.createElement("span",null,a.hora)),l.a.createElement("p",null,"Sitomas: ",l.a.createElement("span",null,a.sintomas)),l.a.createElement("button",{className:"button eliminar u-full-width",onClick:function(){return t(a.id)}},"Eliminar"))},f=t(9),d=t.n(f);h.propTypes={crearCita:d.a.func.isRequired};var b=function(){var e=JSON.parse(localStorage.getItem("citas"));e||(e=[]);var a=Object(n.useState)(e),t=Object(i.a)(a,2),r=t[0],c=t[1];Object(n.useEffect)((function(){localStorage.setItem("citas",JSON.stringify(r))}),[r]);var m=function(e){var a=r.filter((function(a){return a.id!==e}));c(a)},s=0===r.length?"No hay citas":"Administra tus citas";return l.a.createElement(n.Fragment,null,l.a.createElement("h1",null,"administrador de pacientes"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"one-half column"},l.a.createElement(h,{crearCita:function(e){c([].concat(Object(o.a)(r),[e]))}})),l.a.createElement("div",{className:"one-half column"},l.a.createElement("h2",null,s),r.map((function(e){return l.a.createElement(E,{key:e.id,cita:e,eliminarCita:m})}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.cdf60fcf.chunk.js.map