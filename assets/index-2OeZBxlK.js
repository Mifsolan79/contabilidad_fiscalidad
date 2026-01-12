(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const e of a)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(a){const e={};return a.integrity&&(e.integrity=a.integrity),a.referrerPolicy&&(e.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?e.credentials="include":a.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(a){if(a.ep)return;a.ep=!0;const e=s(a);fetch(a.href,e)}})();const r=t=>new Intl.NumberFormat("es-ES",{style:"currency",currency:"EUR"}).format(t),$=(t,o=2)=>t.toLocaleString("es-ES",{minimumFractionDigits:o,maximumFractionDigits:o}),l=(t,o)=>Math.floor(Math.random()*(o-t+1))+t,F=(t,o,s=2)=>{const n=(Math.random()*(o-t)+t).toFixed(s);return parseFloat(n)},f=(t,o)=>`${t}-${(o+1).toString().padStart(2,"0")}`,V=t=>{const o=[];for(let s=0;s<t;s++){const n=l(10,200),a=Math.floor(n*(l(30,70)/100)),e=l(100,2e3)*100,i=n-a,d=e/i,c=Math.ceil(d);o.push({id:f("UR",s),category:"Análisis de Costes",title:"Cálculo del Umbral de Rentabilidad",question:"Una empresa presenta la siguiente estructura de costes. Calcula el Umbral de Rentabilidad (Punto Muerto) en unidades físicas.",data:{"Costes Fijos Totales (CF)":r(e),"Precio de Venta Unitario (P)":r(n),"Coste Variable Unitario (CVu)":r(a)},solution:`Q = ${$(c,0)} unidades`,explanation:`Fórmula: Q = CF / (P - CVu)
Q = ${e} / (${n} - ${a}) = ${e} / ${i} = ${$(d,2)}`,correctValue:c,valueType:"number"})}return o},E=t=>{const o=[];for(let s=0;s<t;s++){const n=Math.random()>.5,e=l(50,500)*1e3,i=Math.floor(e*(l(40,70)/100)),d=e-i,c=Math.floor(e*(l(30,60)/100)),p=Math.floor((e-c)*(l(20,50)/100)),m=e-c-p,u=d-m;n?o.push({id:f("FM",s),category:"Análisis Patrimonial",title:"Cálculo del Fondo de Maniobra",question:"Calcula el Fondo de Maniobra (FM) de la empresa.",data:{"Activo Corriente":r(d),"Pasivo Corriente":r(m)},solution:`${r(u)}`,explanation:`Fórmula: FM = AC - PC
FM = ${d} - ${m} = ${u}`,correctValue:u,valueType:"currency"}):o.push({id:f("FM",s),category:"Análisis Patrimonial",title:"Cálculo del Fondo de Maniobra (Vía LP)",question:"Calcula el Fondo de Maniobra utilizando los datos de los Capitales Permanentes.",data:{"Patrimonio Neto":r(c),"Pasivo No Corriente":r(p),"Activo No Corriente":r(i)},solution:`${r(u)}`,explanation:`Fórmula: FM = (PN + Provisión Largo Plazo) - ANC
FM = (${c} + ${p}) - ${i} = ${u}`,correctValue:u,valueType:"currency"})}return o},L=t=>{const o=[];for(let s=0;s<t;s++){const n=l(500,5e3)*100,a=Math.floor(n*(l(40,70)/100)),e=n-a,i=Math.floor(e*.9),d=Math.floor(e*.2),c=l(d/100,i/100)*100,p=e-c,m=e/p;o.push({id:f("AO",s),category:"Análisis de Costes",title:"Apalancamiento Operativo",question:"Dada la siguiente cuenta de resultados analítica, calcula el Apalancamiento Operativo (AO).",data:{Ventas:r(n),"Costes Variables":r(a),"Costes Fijos":r(c)},solution:`AO = ${$(m,2)}`,explanation:`Fórmula: AO = MC / Beneficio
AO = ${e} / ${p} = ${$(m,4)}`,correctValue:m,valueType:"number"})}return o},q=t=>{const o=[],s=["liquidez","tesoreria","disponibilidad","garantia","endeudamiento","calidad_deuda"];for(let n=0;n<t;n++){const a=s[n%s.length],e=l(100,1e4),i=l(10,50)*e,d=l(20,80)*e,c=l(30,100)*e,p=i+d+c,m=l(100,500)*e,u=p+m,y=Math.floor(u/l(120,250)*100),A=u-y,b=Math.floor(y*(l(30,80)/100));let g="",C="",h="",M={},P="",v=0;switch(a){case"liquidez":P="Ratio de Liquidez General",g="Calcula el Ratio de Liquidez General.",M={"Activo Corriente":r(p),"Pasivo Corriente":r(b)},v=p/b,C=$(v,2),h=`Fórmula: AC / PC = ${p} / ${b} = ${v.toFixed(4)}`;break;case"tesoreria":P="Ratio de Tesorería",g="Calcula el Ratio de Tesorería (Acid Test).",M={Realizable:r(d),Disponible:r(i),"Pasivo Corriente":r(b)},v=(d+i)/b,C=$(v,2),h=`Fórmula: (Realizable + Disponible) / PC = (${d} + ${i}) / ${b} = ${v.toFixed(4)}`;break;case"disponibilidad":P="Ratio de Disponibilidad",g="Calcula el Ratio de Disponibilidad.",M={Disponible:r(i),"Pasivo Corriente":r(b)},v=i/b,C=$(v,2),h=`Fórmula: Disponible / PC = ${i} / ${b} = ${v.toFixed(4)}`;break;case"garantia":P="Ratio de Garantía",g="Calcula el Ratio de Garantía.",M={"Activo Total":r(u),"Pasivo Total":r(y)},v=u/y,C=$(v,2),h=`Fórmula: Activo Total / Pasivo Total = ${u} / ${y} = ${v.toFixed(4)}`;break;case"endeudamiento":P="Ratio de Endeudamiento",g="Calcula el ratio de endeudamiento total.",M={"Pasivo Total":r(y),"Patrimonio Neto":r(A)},v=y/(A+y),C=$(v,2),h=`Fórmula: Pasivo / (PN + Pasivo) = ${y} / (${A} + ${y}) = ${v.toFixed(4)}`;break;case"calidad_deuda":P="Ratio de Calidad de la Deuda",g="Calcula el ratio de Calidad de la Deuda.",M={"Pasivo Corriente":r(b),"Pasivo Total":r(y)},v=b/y,C=$(v,2),h=`Fórmula: Pasivo Corriente / Pasivo Total = ${b} / ${y} = ${v.toFixed(4)}`;break}o.push({id:f("RATIO",n),category:"Ratios Financieros y Patrimoniales",title:P,question:g,data:M,solution:C,explanation:h,correctValue:v,valueType:"number"})}return o},I=t=>{const o=[];for(let s=0;s<t;s++){const n=Math.random()>.5,a=l(100,1e3)*1e3,e=Math.floor(a*F(.4,.7)),i=Math.floor(a*F(.8,1.5)),d=Math.floor(i*F(.1,.25)),c=Math.floor(d*F(.1,.3)),m=Math.floor((d-c)*(1-.25));if(n){const u=d/a*100;o.push({id:f("RENT",s),category:"Rentabilidad",title:"Rentabilidad Económica (ROI)",question:"Calcula el ROI (%).",data:{"Activo Total":r(a),BAII:r(d)},solution:`${$(u)} %`,explanation:`Fórmula: (BAII / Activo) x 100
(${d} / ${a}) x 100 = ${$(u,2)} %`,correctValue:u,valueType:"percentage"})}else{const u=m/e*100;o.push({id:f("RENT",s),category:"Rentabilidad",title:"Rentabilidad Financiera (ROE)",question:"Calcula el ROE (%).",data:{"Patrimonio Neto":r(e),"Beneficio Neto":r(m)},solution:`${$(u)} %`,explanation:`Fórmula: (BN / PN) x 100
(${m} / ${e}) x 100 = ${$(u,2)} %`,correctValue:u,valueType:"percentage"})}}return o},S=t=>{const o=[];for(let s=0;s<t;s++){const n=l(10,500)*1e3,a=Math.floor(n*(l(0,10)/100)),e=l(4,20),i=(n-a)/e;o.push({id:f("AMORT",s),category:"Gestión del Inmovilizado",title:"Cálculo de Amortización Lineal",question:"Calcula la cuota anual.",data:{"Valor de Adquisición":r(n),"Valor Residual":r(a),"Vida Útil":`${e} años`},solution:r(i),explanation:`Fórmula: (V.Adq - V.Res) / Vida
(${n} - ${a}) / ${e} = ${$(i,2)}`,correctValue:i,valueType:"currency"})}return o},N=t=>{const o=[];for(let s=0;s<t;s++)if(Math.random()>.5){const a=l(5e3,5e4),e=l(3e3,45e3),i=a-e,d=i>0?"A PAGAR":"A COMPENSAR/DEVOLVER";o.push({id:f("FISCAL",s),category:"Fiscalidad",title:"Liquidación de IVA",question:"Calcula el resultado de la liquidación (positivo o negativo).",data:{"IVA Repercutido":r(a),"IVA Soportado":r(e)},solution:`${r(i)} (${d})`,explanation:`${a} - ${e} = ${i}`,correctValue:i,valueType:"currency"})}else{const a=l(1e4,1e6),e=a*.25,i=l(0,5e3),d=l(0,5e3),c=e-i-d;o.push({id:f("FISCAL",s),category:"Fiscalidad",title:"Cuota Diferencial IS",question:"Calcula la Cuota Diferencial.",data:{"Base Imponible":r(a),Tipo:"25%",Deducciones:r(i),Retenciones:r(d)},solution:r(c),explanation:`CI=${e} -> CL=${e-i} -> CD=${c}`,correctValue:c,valueType:"currency"})}return o},O=t=>{const o=[],s=["global","almacenamiento","cobro"];for(let n=0;n<t;n++){const a=s[n%s.length];if(a==="global"){const e=l(10,40),i=l(5,20),d=l(10,30),c=l(30,90),p=l(30,90),m=e+i+d+c-p;o.push({id:f("PMM",n),category:"Análisis Financiero",title:"Cálculo PMM Financiero",question:"Calcula el Periodo Medio de Maduración Financiero.",data:{PMa:`${e}`,PMf:`${i}`,PMv:`${d}`,PMc:`${c}`,PMp:`${p}`},solution:`${m} días`,explanation:`PMa+PMf+PMv+PMc - PMp = ${e}+${i}+${d}+${c}-${p} = ${m}`,correctValue:m,valueType:"number"})}else if(a==="almacenamiento"){const e=l(1e4,5e4),i=l(1e3,5e3),c=365/(e/i);o.push({id:f("PMM",n),category:"Análisis Financiero",title:"Cálculo PM Almacenamiento",question:"Calcula el PMa.",data:{Consumo:`${e}`,"Stock medio":`${i}`},solution:`${$(c,2)} días`,explanation:`365 / (Consumo/Stock) = ${$(c,2)}`,correctValue:c,valueType:"number"})}else{const e=l(5e4,2e5),i=l(1e4,4e4),c=365/(e/i);o.push({id:f("PMM",n),category:"Análisis Financiero",title:"Cálculo PM Cobro",question:"Calcula el PMc.",data:{Ventas:`${e}`,"Saldo Clientes":`${i}`},solution:`${$(c,2)} días`,explanation:`365 / (Ventas/Saldo) = ${$(c,2)}`,correctValue:c,valueType:"number"})}}return o},D=()=>[...V(20),...L(20),...E(20),...q(20),...I(20),...S(20),...N(20),...O(20)];let T=[],x="Todos";const k=document.querySelector("#app"),z=()=>{T=D(),R()};window.validateExercise=(t,o,s)=>{const n=document.getElementById(`input-${t}`),a=document.getElementById(`feedback-${t}`),e=document.getElementById(`sol-${t}`),i=document.getElementById(`btn-${t}`);if(!n)return;const d=parseFloat(n.value.replace(",","."));let c=!1;if(s==="number"||s==="currency"||s==="percentage"){const p=Number(o),m=Math.max(.1,Math.abs(p*.05));!isNaN(d)&&Math.abs(d-p)<=m&&(c=!0)}else n.value.trim().toLowerCase()===String(o).toLowerCase()&&(c=!0);c?(a.innerHTML='<span style="color: #4ade80; font-weight:bold;">✅ ¡Correcto!</span>',a.classList.remove("hidden"),e.classList.remove("hidden"),i.style.display="none",n.disabled=!0,n.style.borderColor="#4ade80"):(a.innerHTML='<span style="color: #f87171; font-weight:bold;">❌ Incorrecto. Inténtalo de nuevo o revisa la solución.</span>',a.classList.remove("hidden"),e.classList.remove("hidden"),i.innerText="Ver Solución Completa",i.onclick=()=>{e.classList.remove("hidden"),i.style.display="none"},n.style.borderColor="#f87171")};const w=()=>{const t=new Set(T.map(o=>o.category));return["Todos",...Array.from(t)]},B=()=>x==="Todos"?T:T.filter(t=>t.category===x),j=()=>`
    <aside id="sidebar">
      <nav style="margin-top: 2rem;">
        ${w().map(o=>`
          <button 
            class="${o===x?"active":""}" 
            data-category="${o}"
          >
            ${o}
          </button>
        `).join("")}
      </nav>
      <div style="margin-top:auto; font-size:0.75rem; color:var(--text-muted); opacity:0.6;">
        v2.1 Interactive
      </div>
    </aside>
  `,U=t=>{const o=Object.entries(t.data).map(([a,e])=>`<div><span>${a}</span> <span>${e}</span></div>`).join(""),s=t.valueType==="percentage"?"Ej: 15.5":t.valueType==="currency"?"Ej: 5000":"Resultado",n=t.valueType==="percentage"?"%":t.valueType==="currency"?"€":"";return`
    <div class="exercise-card">
      <div class="exercise-header">
        <span class="exercise-id">${t.id}</span>
        <span class="exercise-category">${t.category}</span>
      </div>
      
      <h3>${t.title}</h3>
      <p class="exercise-question">${t.question}</p>
      
      <div class="exercise-data">
        ${o}
      </div>
      
      <div class="interaction-area" style="margin-top: auto;">
        <div style="display:flex; gap:10px; margin-bottom:10px; align-items:center;">
          <input type="number" id="input-${t.id}" placeholder="${s}" 
                 style="flex:1; padding:10px; border-radius:6px; border:1px solid rgba(255,255,255,0.1); background:rgba(0,0,0,0.3); color:white; font-family:var(--font-mono);">
          <span style="color:var(--text-secondary)">${n}</span>
        </div>
        
        <button id="btn-${t.id}" class="btn-reveal" 
          onclick="validateExercise('${t.id}', '${t.correctValue}', '${t.valueType}')">
          Comprobar
        </button>
        
        <div id="feedback-${t.id}" class="hidden" style="margin-top:10px; font-size:0.9rem;"></div>
        
        <div id="sol-${t.id}" class="solution-content hidden">
          <div class="solution-val">${t.solution}</div>
          ${t.explanation?`<div class="solution-expl">${t.explanation}</div>`:""}
        </div>
      </div>
    </div>
  `},G=()=>{const t=B();return`
    <main>
      <div class="content-wrapper">
        <header>
          <h2>${x}</h2>
          <p class="intro-text">Resuelve ${t.length} retos interactivos.</p>
        </header>
        
        <div class="exercises-grid">
          ${t.map(U).join("")}
        </div>
      </div>
    </main>
  `},R=()=>{k.innerHTML=`
    ${j()}
    ${G()}
  `,document.querySelectorAll("aside nav button").forEach(t=>{t.addEventListener("click",o=>{x=o.target.dataset.category||"Todos",R(),document.querySelector("main")?.scrollTo({top:0,behavior:"smooth"})})})};z();
