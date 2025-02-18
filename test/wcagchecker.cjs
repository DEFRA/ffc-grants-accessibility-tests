var K=Object.create;var P=Object.defineProperty;var tt=Object.getOwnPropertyDescriptor;var et=Object.getOwnPropertyNames;var st=Object.getPrototypeOf,at=Object.prototype.hasOwnProperty;var lt=(t,e)=>{for(var a in e)P(t,a,{get:e[a],enumerable:!0})},H=(t,e,a,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of et(e))!at.call(t,o)&&o!==a&&P(t,o,{get:()=>e[o],enumerable:!(l=tt(e,o))||l.enumerable});return t};var rt=(t,e,a)=>(a=t!=null?K(st(t)):{},H(e||!t||!t.__esModule?P(a,"default",{value:t,enumerable:!0}):a,t)),it=t=>H(P({},"__esModule",{value:!0}),t);var Ct={};lt(Ct,{analyse:()=>Z,getHtmlReportByCategory:()=>X,getHtmlReportByGuideLine:()=>q,init:()=>Q});module.exports=it(Ct);var U=require("date-fns");var m={jsonReportViolations:[],jsonReportStatistics:[],visitedPageUrls:new Map,startDateTime:"",isErrorFound:!1,jsRuleScript:"",axeViolations:[]};var T=()=>(0,U.format)(new Date,"dd-MM-yyyy HH:mm:ss");var R=()=>`.stats-chart-row {\r
display: block;\r
height: 25px\r
}\r
\r
.stats-chart-row-label {\r
font-size: 12px;\r
width: 50%;\r
float: left\r
}\r
\r
.stats-chart-row-value {\r
font-size: 12px;\r
float: right;\r
margin-left: 5px\r
}\r
\r
.stats-chart-row-value.color-high {\r
color: #f66\r
}\r
\r
.stats-chart-row-value.color-medium {\r
color: #eeb943\r
}\r
\r
.stats-chart-row-value.color-low {\r
color: #60c888\r
}\r
\r
.stats-chart-row-items {\r
font-size: 12px;\r
float: right\r
}\r
\r
.stats-chart-row-bar {\r
position: relative;\r
float: left;\r
height: 5px;\r
background-color: #4c608d;\r
width: 100%;\r
margin-bottom: 10px\r
}\r
\r
.stats-chart-row-bar-value {\r
position: absolute;\r
top: 0;\r
left: 0;\r
height: 5px\r
}\r
\r
.stats-chart-row-bar-value.color-high {\r
background-color: #f66\r
}\r
\r
.stats-chart-row-bar-value.color-medium {\r
background-color: #eeb943\r
}\r
\r
.stats-chart-row-bar-value.color-low {\r
background-color: #60c888\r
}\r
\r
.block-color {\r
background-color: #334670;\r
}\r
\r
.complaint-text {\r
font-size: 12px;\r
}\r
\r
.light-red{\r
background-color: #FFCCCB;\r
}`,z=async t=>{let e=await fetch(t);if(!e.ok)throw new Error(`Failed to fetch file: ${e.statusText}`);return e.text()},j=()=>{let t=[];return m.axeViolations.forEach(a=>{let l=Object.keys(a);a[l].forEach(r=>{r.nodes.forEach(s=>{let c=[];r.tags.forEach(x=>{x.includes("wcag")&&c.push(x)});let i=c.length>0?c.join(", "):"None",d=s.failureSummary,n=s.html.trim().replaceAll(/(\r\n|\n)/g,"").replaceAll(/ {2}/g,"").replaceAll(/&/g,"&amp;").replaceAll(/</g,"&lt;").replaceAll(/>/g,"&gt;").replaceAll(/"/g,"&quot;").replaceAll(/'/g,"&#039;"),u={URL:l[0],Title:r.id,Summary:r.description,Purpose:r.help,Actions:d,ElementXPath:n,Browser:"CHROME",Type:r.impact,Tool:"Axe",GuideLines:[{Name:"Axe Violation",GuidelineCode:"",GuidelineLink:r.helpUrl,GuidelineLevel:i}]};t.push(u)})})}),t},L=()=>{let t=[];return m.jsonReportViolations.forEach(e=>{let a=Object.keys(e),l=JSON.parse(e[a]);Object.keys(l).forEach(o=>{(o!=="feature"||o!=="structure"||o!=="aria")&&l[o].forEach(r=>{let s={URL:a[0],Title:r.data.title.trim().replace(/\r\n/g,""),Summary:r.data.summary.trim().replace(/\r\n/g,""),Purpose:r.data.purpose.trim().replace(/\r\n/g,""),Actions:r.data.actions.trim().replace(/\r\n/g,""),ElementXPath:r.itemXPath,Browser:"CHROME",Type:r.data.cat_code,Tool:"Cognizant WCAG Compliance Checker"};if(r.data.guidelines&&Object.keys(r.data.guidelines).length>0){let c=r.data.guidelines,i=[];Object.keys(c).forEach(d=>{i.push({Name:c[d].name,GuidelineCode:c[d].code,GuidelineLink:c[d].link,GuidelineLevel:c[d].level_name})}),s.GuideLines=i}t.push(s)})})}),t},k=()=>{let t=[];return m.jsonReportStatistics.forEach(e=>{let a=Object.keys(e),l=JSON.parse(e[a]),o={AllItemCount:l.allitemcount.toString(),TotalElements:l.totalelements.toString(),PageTitle:l.pagetitle.toString(),Error:l.error.toString(),Contrast:l.contrast.toString(),Alert:l.alert.toString(),URL:a[0]};t.push(o)}),t};var V=0,J=0,N='<head>   <title>Accessibility Test Run Report</title> <meta http-equiv="Content-Security-Policy" content="script-src https://cdn.jsdelivr.net/ \'unsafe-inline\';style-src https://cdn.jsdelivr.net/ \'unsafe-inline\'"> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"> <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script><style>${statisticsStyles}</style></head>',D='<div class="row mb-3">            <div class="col-4">             <div class="card">                 <div class="card-header h6 block-color text-white text-opacity-75">                     Total Pages                    </div>                 <div class="card-body text-center h6">                       ${TotalPages}                 </div>             </div>         </div>         <div class="col-4">             <div class="card">                 <div class="card-header h6 bg-danger bg-gradient text-white text-opacity-75">                     Critical Issues                    </div>                 <div class="card-body text-center h6">                     ${TotalCriticalIssues}                 </div>             </div>         </div>         <div class="col-4">              <div class="card">                 <div class="card-header h6 bg-warning bg-gradient text-white text-opacity-75">                     Medium Issues                  </div>                 <div class="card-body text-center h6">                     ${TotalMediumIssues}                   </div>             </div>         </div>     </div>',ot='<div class="col-4">                 <div class="card block-color text-white text-opacity-75">                     <div class="card-body">                         <div class="stats-chart-row">                             <div class="stats-chart-row-label"> Critical </div>                             <div class="stats-chart-row-value color-high"><span class="stat-percent"                                     tabindex="0">${highImpactsPercentage}</span>%</div>                             <div class="stats-chart-row-items"><span class="stat-item" tabindex="0">${highImpactsCount}</span>                                 <span class="stat-item-text" tabindex="0">items</span>                             </div>                             <div class="stats-chart-row-bar"> <span                                     class="stats-chart-row-bar-value color-high" style="width: ${highImpactsPercentage}%;"></span>                             </div>                         </div>                         <div class="stats-chart-row">                             <div class="stats-chart-row-label"> Medium </div>                             <div class="stats-chart-row-value color-medium"><span class="stat-percent"                                     tabindex="0">${mediumImpactsPercentage}</span>%</div>                             <div class="stats-chart-row-items"><span class="stat-item" tabindex="0">${mediumImpactsCount}</span>                                 <span class="stat-item-text" tabindex="0">items</span>                             </div>                             <div class="stats-chart-row-bar"> <span                                     class="stats-chart-row-bar-value color-medium" style="width: ${mediumImpactsPercentage}%;"></span>                             </div>                         </div>                         <div class="stats-chart-row">                             <div class="stats-chart-row-label"> Low </div>                             <div class="stats-chart-row-value color-low"><span class="stat-percent"                                     tabindex="0">${lowImpactsPercentage}</span>%</div>                             <div class="stats-chart-row-items"><span class="stat-item" tabindex="0">${lowImpactsCount}</span>                                 <span class="stat-item-text" tabindex="0">items</span>                             </div>                             <div class="stats-chart-row-bar"> <span                                     class="stats-chart-row-bar-value color-low" style="width: ${lowImpactsPercentage}%;"></span>                             </div></div></div></div></div>',ct='<div class="col-4">                 <div class="card block-color text-white text-opacity-75">                     <div class="card-body">                         <div class="h6">TOTAL</div>                         <span class="complaint-text">Total issues.</span>                         <br><br>                         <strong class="text-white text-opacity-75">${totalElements}</strong>                     </div>                 </div>             </div>',M='<div class="col-4">                 <div class="card block-color text-white text-opacity-75;">                     <div class="card-body">                         <div class="h6">${ComplaintTitle}</div>                         <span class="complaint-text">${ComplaintMessage}</span>                         <br><br>                         <strong class="text-white text-opacity-75">Errors: ${totalErrors}</strong>                     </div>                 </div>             </div>',nt='<div class="accordion" id="accordionPanelsStayOpen${index}">                 <div class="accordion-item">                 <div class="accordion-header" id="heading${index}">                 <div class="accordion-button text-white text-opacity-75 ${errorBgColor}" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${index}" aria-expanded="true" aria-controls="panelsStayOpen-collapse${index}">                     <div class="row col-12 g-2"><div class="col-10 text-start">${title}</div>                     <div class="col-2">${highImpactErrorCountMsg}</div></div></div></div>                 <div id="panelsStayOpen-collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}">                 <div class="accordion-body">                         <div class="fw-bold mt-3 text-secondary"><h3>${errorType}</h3></div><br>                         <div class="fw-bold mt-3 text-secondary">What It Means:</div>                         <div class="card-text mt-3">${summary}</div>                         <div class="fw-bold mt-3 text-secondary">Why It Matters:</div>                         <div class="card-text mt-3">${purpose}</div>                         <div class="fw-bold mt-3 text-secondary">How to Fix It:</div>                         <div class="card-text mt-3">${actions}</div>                         <div class="fw-bold mt-3 text-secondary">Standards and Guidelines:</div>                         <div class="card-text mt-3">${guideLineCheckList}</div>                         <div class="fw-bold mt-3 text-secondary">Item\'s XPath:</div>                         <ul class="mt-3"><small>${xpathlist}</small></ul>                 </div></div></div></div>',dt=t=>t.replaceAll("${TotalCriticalIssues}",V.toString()).replaceAll("${TotalMediumIssues}",J.toString()),pt=t=>{let e=t.length;return D=D.replaceAll("${TotalPages}",e.toString()),D},S=(t,e,a)=>{let l=[],o=t.filter(s=>s.Type===e),r={};return o.forEach(s=>{let c=s.Title;r[c]||(r[c]=[]),r[c].push(`<li>${s.ElementXPath}</li>`)}),Object.keys(r).forEach(s=>{let c=t.find(i=>i.Type===e&&i.Title===s);l.push(mt(c,r[s].join(""),e,a))}),l.join("")},mt=(t,e,a,l)=>{let o=[],r=(e.match(/<li>/g)||[]).length,s="",c="";switch(t.Type){case"error":case"contrast":case"critical":case"serious":s=`${r} high impact`,c="bg-danger bg-gradient",V+=r;break;case"alert":case"moderate":s=`${r} medium impact`,c="bg-warning",J+=r;break;default:s=`${r} low impact`,c="bg-success";break}let i="";t.GuideLines?t.GuideLines.forEach(p=>{p.GuidelineLevel&&(i+=`<a href="${p.GuidelineLink}">${p.GuidelineLevel} - ${p.GuidelineCode} - ${p.GuidelineLink}</a><br>`)}):i="NA";let d=a.replaceAll(/[().\-,\s]/g,""),n=t.Title.replaceAll(/[().\-,\s]/g,""),u=t.Title;t.Tool&&t.Tool==="Axe"&&(u=`Axe Violation: ${t.Title}`);let x=nt.replaceAll("${index}",`${d}_${t.Type}_${n}_${l}`).replaceAll("${title}",u).replaceAll("${errorType}",t.Title).replaceAll("${errorBgColor}",c).replaceAll("${highImpactErrorCountMsg}",s).replaceAll("${summary}",t.Summary).replaceAll("${purpose}",t.Purpose).replaceAll("${actions}",t.Actions).replaceAll("${guideLineCheckList}",i).replaceAll("${xpathlist}",e);return o.push(x),o.join("")},X=()=>{let t=[],e=T(),a=k(),l=L(),o=j(),r=l.concat(o);N=N.replaceAll("${statisticsStyles}",R()),t.push(`<!DOCTYPE html><html>${N}<body>`),t.push(`<h1 class="mt-4 mb-3"><center>Accessibility Test Run Report</center></h1><div class="container mt-4 bg-light shadow-lg"><div class="container-fluid p-3"><div class="text-secondary mb-4">Test Run: ${m.startDateTime} - ${e}</div>${pt(a)}</div></div>`);let s=0;return a.forEach((i,d)=>{let n=r.filter(h=>h.URL===i.URL),u=parseInt(i.Error),x=parseInt(i.Contrast),p=parseInt(i.Alert),v=parseInt(i.AllItemCount),w=n.filter(h=>h.Type==="serious"),$=n.filter(h=>h.Type==="critical"),b=n.filter(h=>h.Type==="moderate").length||0,y=(w.length||0)+($.length||0);u+=y,p+=b;let g=u+x;v+=y+b,t.push(`<div class="container mt-4 bg-light shadow-lg"><div class="container-fluid p-3"><h6 class="text-secondary">Page ${s+1} - ${i.URL}</h6><div class="row mt-3">`),M=g>0?M.replaceAll("${ComplaintTitle}","NOT COMPLIANT").replaceAll("${ComplaintMessage}","This page is at risk of an accessibility issues."):M.replaceAll("${ComplaintTitle}","COMPLIANT").replaceAll("${ComplaintMessage}","This page is not at risk of an accessibility issues."),t.push(M.replaceAll("${totalErrors}",g.toString())),t.push(ct.replaceAll("${totalElements}",v.toString()));let f=(g/v*100).toFixed(2),A=(p/v*100).toFixed(2),C=v-g-p,I=(parseFloat(100)-(parseFloat(f)+parseFloat(A))).toFixed(2),G=ot.replaceAll("${highImpactsPercentage}",f).replaceAll("${highImpactsCount}",g.toString()).replaceAll("${mediumImpactsPercentage}",A).replaceAll("${mediumImpactsCount}",p.toString()).replaceAll("${lowImpactsPercentage}",I).replaceAll("${lowImpactsCount}",C.toString());t.push(`${G}</div><br><div id="accordion">`),u>0&&t.push(S(n,"error",s)),x>0&&t.push(S(n,"contrast",s)),(w.length||0)>0&&t.push(S(n,"serious",s)),($.length||0)>0&&t.push(S(n,"critical",s)),p>0&&t.push(S(n,"alert",s)),b>0&&t.push(S(n,"moderate",s)),t.push("</div></div></div>"),s++}),t.push("</html>"),dt(t.join(""))};var B='<head>   <title>Accessibility Test Run Report</title> <meta http-equiv="Content-Security-Policy" content="script-src https://cdn.jsdelivr.net/ \'unsafe-inline\';style-src https://cdn.jsdelivr.net/ \'unsafe-inline\'"> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"> <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script><style>${statisticsStyles}</style></head>',F='<div class="row mb-3">            <div class="col-4">             <div class="card">                 <div class="card-header h6 block-color text-white text-opacity-75">                     Total Pages                    </div>                 <div class="card-body text-center h6">                       ${TotalPages}                 </div>             </div>         </div>         <div class="col-4">             <div class="card">                 <div class="card-header h6 bg-danger bg-gradient text-white text-opacity-75">                     Critical Issues                    </div>                 <div class="card-body text-center h6">                     ${TotalCriticalIssues}                 </div>             </div>         </div>         <div class="col-4">              <div class="card">                 <div class="card-header h6 bg-warning bg-gradient text-white text-opacity-75">                     Medium Issues                  </div>                 <div class="card-body text-center h6">                     ${TotalMediumIssues}                   </div>             </div>         </div>     </div>',ht='<div class="col-4">                 <div class="card block-color text-white text-opacity-75">                     <div class="card-body">                         <div class="stats-chart-row">                             <div class="stats-chart-row-label"> Critical </div>                             <div class="stats-chart-row-value color-high"><span class="stat-percent"                                     tabindex="0">${highImpactsPercentage}</span>%</div>                             <div class="stats-chart-row-items"><span class="stat-item" tabindex="0">${highImpactsCount}</span>                                 <span class="stat-item-text" tabindex="0">items</span>                             </div>                             <div class="stats-chart-row-bar"> <span                                     class="stats-chart-row-bar-value color-high" style="width: ${highImpactsPercentage}%;"></span>                             </div>                         </div>                         <div class="stats-chart-row">                             <div class="stats-chart-row-label"> Medium </div>                             <div class="stats-chart-row-value color-medium"><span class="stat-percent"                                     tabindex="0">${mediumImpactsPercentage}</span>%</div>                             <div class="stats-chart-row-items"><span class="stat-item" tabindex="0">${mediumImpactsCount}</span>                                 <span class="stat-item-text" tabindex="0">items</span>                             </div>                             <div class="stats-chart-row-bar"> <span                                     class="stats-chart-row-bar-value color-medium" style="width: ${mediumImpactsPercentage}%;"></span>                             </div>                         </div>                         <div class="stats-chart-row">                             <div class="stats-chart-row-label"> Low </div>                             <div class="stats-chart-row-value color-low"><span class="stat-percent"                                     tabindex="0">${lowImpactsPercentage}</span>%</div>                             <div class="stats-chart-row-items"><span class="stat-item" tabindex="0">${lowImpactsCount}</span>                                 <span class="stat-item-text" tabindex="0">items</span>                             </div>                             <div class="stats-chart-row-bar"> <span                                     class="stats-chart-row-bar-value color-low" style="width: ${lowImpactsPercentage}%;"></span>                             </div></div></div></div></div>',ut='<div class="col-4">                 <div class="card block-color text-white text-opacity-75">                     <div class="card-body">                         <div class="h6">TOTAL</div>                         <span class="complaint-text">Total issues.</span>                         <br><br>                         <strong class="text-white text-opacity-75">${totalElements}</strong>                     </div>                 </div>             </div>',O='<div class="col-4">                 <div class="card block-color text-white text-opacity-75;">                     <div class="card-body">                         <div class="h6">${ComplaintTitle}</div>                         <span class="complaint-text">${ComplaintMessage}</span>                         <br><br>                         <strong class="text-white text-opacity-75">Errors: ${totalErrors}</strong>                     </div>                 </div>             </div>',vt='<div class="accordion" id="accordionPanelsStayOpen${index}">                 <div class="accordion-item">                 <div class="accordion-header" id="heading${index}">                 <div class="accordion-button text-white text-opacity-75 ${errorBgColor}" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${index}" aria-expanded="true" aria-controls="panelsStayOpen-collapse${index}">                     <div class="row col-12 g-2"><div class="col-10 text-start">${title}</div>                     <div class="col-2">${highImpactErrorCountMsg}</div></div></div></div>                 <div id="panelsStayOpen-collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}">                 <div class="accordion-body">                         <div class="fw-bold mt-3 text-secondary"><h3>${errorType}</h3></div><br>                         <div class="fw-bold mt-3 text-secondary">What It Means:</div>                         <div class="card-text mt-3">${summary}</div>                         <div class="fw-bold mt-3 text-secondary">Why It Matters:</div>                         <div class="card-text mt-3">${purpose}</div>                         <div class="fw-bold mt-3 text-secondary">How to Fix It:</div>                         <div class="card-text mt-3">${actions}</div>                         <div class="fw-bold mt-3 text-secondary">Standards and Guidelines:</div>                         <div class="card-text mt-3">${guideLineCheckList}</div>                         <div class="fw-bold mt-3 text-secondary">Item\'s XPath:</div>                         <ul class="mt-3"><small>${xpathlist}</small></ul>                 </div></div></div></div>',_=0,W=0,q=()=>{let t=[],e=T(),a=k(),l=L(),o=j(),r=l.concat(o);B=B.replaceAll("${statisticsStyles}",R()),t.push(`<!DOCTYPE html><html>${B}<body>`),t.push(`<h1 class="mt-4 mb-3"><center>Accessibility Test Run Report</center></h1><div class="container mt-4 bg-light shadow-lg"><div class="container-fluid p-3"><div class="text-secondary mb-4">Test Run: ${m.startDateTime} - ${e}</div>${gt(a)}</div></div>`);let s=0;return a.forEach((i,d)=>{let n=r.filter(h=>h.URL===i.URL),u=parseInt(i.Error),x=parseInt(i.Contrast),p=parseInt(i.Alert),v=parseInt(i.AllItemCount),w=n.filter(h=>h.Type==="serious"),$=n.filter(h=>h.Type==="critical"),b=n.filter(h=>h.Type==="moderate").length||0,y=(w.length||0)+($.length||0);u+=y,p+=b;let g=u+x;v+=y+b,t.push(`<div class="container mt-4 bg-light shadow-lg"><div class="container-fluid p-3"><h6 class="text-secondary">Page ${s+1} - ${i.URL}</h6><div class="row mt-3">`),O=g>0?O.replaceAll("${ComplaintTitle}","NOT COMPLIANT").replaceAll("${ComplaintMessage}","This page is at risk of an accessibility issues."):O.replaceAll("${ComplaintTitle}","COMPLIANT").replaceAll("${ComplaintMessage}","This page is not at risk of an accessibility issues."),t.push(O.replaceAll("${totalErrors}",g.toString())),t.push(ut.replaceAll("${totalElements}",v.toString()));let f=(g/v*100).toFixed(2),A=(p/v*100).toFixed(2),C=v-g-p,I=(parseFloat(100)-(parseFloat(f)+parseFloat(A))).toFixed(2),G=ht.replaceAll("${highImpactsPercentage}",f).replaceAll("${highImpactsCount}",g.toString()).replaceAll("${mediumImpactsPercentage}",A).replaceAll("${mediumImpactsCount}",p.toString()).replaceAll("${lowImpactsPercentage}",I).replaceAll("${lowImpactsCount}",C.toString());t.push(`${G}</div><br><div id="accordion">`),u>0&&t.push(E(n,"error",s)),x>0&&t.push(E(n,"contrast",s)),(w.length||0)>0&&t.push(E(n,"serious",s)),($.length||0)>0&&t.push(E(n,"critical",s)),p>0&&t.push(E(n,"alert",s)),b>0&&t.push(E(n,"moderate",s)),t.push("</div></div></div>"),s++}),t.push("</html>"),xt(t.join(""))},gt=t=>{let e=t.length;return F=F.replaceAll("${TotalPages}",e.toString()),F},xt=t=>t.replaceAll("${TotalCriticalIssues}",_.toString()).replaceAll("${TotalMediumIssues}",W.toString()),E=(t,e,a)=>{let l=[],o=new Map,r=wt(t);t.forEach(s=>{if(s.Type===e)for(let[c,i]of r.entries())if(!o.has(i))o.set(i,`<li>${s.ElementXPath}</li>`);else{let d=o.get(i)+`<li>${s.ElementXPath}</li>`;o.set(i,d)}});for(let[s,c]of o.entries()){let i=bt(t,o,r,s,e,a);l.push(i)}return l.join("")},bt=(t,e,a,l,o,r)=>{let s="",i=t.filter(d=>d.Type===o&&d.GuideLines&&d.GuideLines.some(n=>n.Name+" - "+n.GuidelineLevel===l))[0];if(i){let d=i.Type,n=i.Title,u=i.Summary,x=i.Purpose,p=i.Actions,v=e.get(l),w=(v.match(/<li>/g)||[]).length,$=new Map,b="",y="";switch(d){case"critical":case"serious":case"error":case"contrast":b="bg-danger bg-gradient",y=w+" high impact",_+=w;break;case"moderate":case"alert":b="bg-warning",y=w+" medium impact",W+=w;break;default:b="bg-success",y=w+" low impact";break}for(let[C,I]of a.entries())l!=="None"&&I===l&&!$.has(C)&&$.set(C,`<a href="${C}">${I}</a>`);let g=[...$.values()].flat().join(""),f=l.replaceAll("(","").replaceAll(")","").replaceAll(".","").replaceAll("-","").replaceAll(" ","").replaceAll(",","-");s=vt.replaceAll("${index}",`${f}${d}_${r}`).replaceAll("${errorBgColor}",b).replaceAll("${title}",l).replaceAll("${errorType}",n).replaceAll("${summary}",u).replaceAll("${highImpactErrorCountMsg}",y).replaceAll("${purpose}",x).replaceAll("${actions}",p).replaceAll("${guideLineCheckList}",g).replaceAll("${xpathlist}",v)}return s},wt=t=>{let e=new Map;return t.forEach(a=>{let l=a.GuideLines;l&&(l.length<=0?e.set("NoGuidLines","None"):l.forEach(o=>{e.set(o.GuidelineLink,`${o.Name} - ${o.GuidelineLevel}`)}))}),e};var Y=rt(require("axe-core"),1),Q=async(t,waveScript)=>{m.startDateTime=T(),m.jsRuleScript=waveScript},Z=async(t,e)=>{let a=await t.getUrl();if(e){let l=e.trim();a=l.length>0?a+l:a}if(!m.visitedPageUrls.has(a)){m.visitedPageUrls.set(a,await t.getTitle()),await t.setTimeout({script:12e4}),await t.execute(m.jsRuleScript),await new Promise(s=>setTimeout(s,1e3)),await yt(t,a),await $t(t);let{source:l}=Y.default;await t.execute(l);let o={},r=await t.executeAsync((s,c)=>{axe.run(s,(i,d)=>{i&&c(i),c(JSON.parse(JSON.stringify(d)))})},o);await ft(a,r.violations)}},yt=async(t,e)=>{let a=await t.execute("return JSON.stringify(window.violations());"),l=await t.execute("return JSON.stringify(window.statistics());"),o={};o['"'+e+'"']=a,m.jsonReportViolations.push(o);let r={};r['"'+e+'"']=l,m.jsonReportStatistics.push(r)},$t=async t=>{await t.execute("window.hideAllIcons();");var e=`var nodes = document.getElementsByTagName("accxtn");\r
\r
for (var i = 0, len = nodes.length; i != len; ++i) {\r
   nodes[0].parentNode.removeChild(nodes[0]);\r
}var nodes = document.getElementsByClassName("wave5icon");\r
\r
for (var i = 0, len = nodes.length; i != len; ++i) {\r
   nodes[0].parentNode.removeChild(nodes[0]);\r
}var element = document.getElementById("wave_sidebar_container");\r
element.parentNode.removeChild(element);\r
var element = document.getElementById("wave5topbar");\r
element.parentNode.removeChild(element);\r
var element = document.getElementById("wave5bottombar");\r
element.parentNode.removeChild(element);\r
var element = document.getElementById("wave5_iconbox");\r
element.parentNode.removeChild(element);\r
`;await t.execute(e)},ft=async(t,e)=>{let a={};a['"'+t+'"']=e,m.axeViolations.push(a)};0&&(module.exports={analyse,getHtmlReportByCategory,getHtmlReportByGuideLine,init});
