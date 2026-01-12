(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerPolicy&&(e.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?e.credentials="include":o.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(o){if(o.ep)return;o.ep=!0;const e=r(o);fetch(o.href,e)}})();const s=t=>new Intl.NumberFormat("es-ES",{style:"currency",currency:"EUR"}).format(t),u=(t,a=2)=>t.toLocaleString("es-ES",{minimumFractionDigits:a,maximumFractionDigits:a}),l=(t,a)=>Math.floor(Math.random()*(a-t+1))+t,A=(t,a,r=2)=>{const c=(Math.random()*(a-t)+t).toFixed(r);return parseFloat(c)},P=(t,a)=>`${t}-${(a+1).toString().padStart(2,"0")}`,L=t=>{const a=[];for(let r=0;r<t;r++){const c=l(10,200),o=Math.floor(c*(l(30,70)/100)),e=l(100,2e3)*100,i=c-o,n=e/i,d=Math.ceil(n);a.push({id:P("UR",r),category:"Análisis de Costes",title:"Cálculo del Umbral de Rentabilidad",question:"Una empresa presenta la siguiente estructura de costes. Calcula el Umbral de Rentabilidad (Punto Muerto) en unidades físicas.",data:{"Costes Fijos Totales (CF)":s(e),"Precio de Venta Unitario (P)":s(c),"Coste Variable Unitario (CVu)":s(o)},solution:`Q = ${u(d,0)} unidades`,explanation:`Fórmula: Q = CF / (P - CVu)
Q = ${e} / (${c} - ${o}) = ${e} / ${i} = ${u(n,2)}`})}return a},O=t=>{const a=[];for(let r=0;r<t;r++){const c=Math.random()>.5,e=l(50,500)*1e3,i=Math.floor(e*(l(40,70)/100)),n=e-i,d=Math.floor(e*(l(30,60)/100)),p=Math.floor((e-d)*(l(20,50)/100)),m=e-d-p,g=n-m;c?a.push({id:P("FM",r),category:"Análisis Patrimonial",title:"Cálculo del Fondo de Maniobra",question:"Calcula el Fondo de Maniobra de la empresa basándote en los siguientes datos del Activo y Pasivo Corriente.",data:{"Activo Corriente":s(n),"Pasivo Corriente":s(m)},solution:`${s(g)}`,explanation:`Fórmula: FM = AC - PC
FM = ${n} - ${m} = ${g}`}):a.push({id:P("FM",r),category:"Análisis Patrimonial",title:"Cálculo del Fondo de Maniobra (Vía Capitales Permanentes)",question:"Calcula el Fondo de Maniobra utilizando los datos de los Capitales Permanentes y el Activo No Corriente.",data:{"Patrimonio Neto":s(d),"Pasivo No Corriente":s(p),"Activo No Corriente":s(i)},solution:`${s(g)}`,explanation:`Fórmula: FM = (PN + Provisión Largo Plazo) - ANC
FM = (${d} + ${p}) - ${i} = ${d+p} - ${i} = ${g}`})}return a},D=t=>{const a=[];for(let r=0;r<t;r++){const c=l(500,5e3)*100,o=Math.floor(c*(l(40,70)/100)),e=c-o,i=Math.floor(e*.9),n=Math.floor(e*.2),d=l(n/100,i/100)*100,p=e-d,m=e/p;a.push({id:P("AO",r),category:"Análisis de Costes",title:"Apalancamiento Operativo",question:"Dada la siguiente cuenta de resultados analítica, calcula el Apalancamiento Operativo (AO). Interpretalo como la sensibilidad del beneficio ante cambios en las ventas.",data:{Ventas:s(c),"Costes Variables":s(o),"Costes Fijos":s(d)},solution:`AO = ${u(m,2)}`,explanation:`Fórmula: AO = (Ventas - CV) / (Ventas - CV - CF)
AO = (${c} - ${o}) / (${c} - ${o} - ${d})
AO = ${e} / ${p} = ${u(m,4)}`})}return a},N=t=>{const a=[],r=["liquidez","tesoreria","disponibilidad","garantia","endeudamiento","calidad_deuda"];for(let c=0;c<t;c++){const o=r[c%r.length],e=l(100,1e4),i=l(10,50)*e,n=l(20,80)*e,d=l(30,100)*e,p=i+n+d,m=l(100,500)*e,g=p+m,$=Math.floor(g/l(120,250)*100),x=g-$,v=Math.floor($*(l(30,80)/100));let C="",b="",f="",M={},y="";switch(o){case"liquidez":y="Ratio de Liquidez General",C="Calcula el Ratio de Liquidez General e interpreta si la empresa tiene capacidad para pagar sus deudas a corto plazo.",M={"Activo Corriente":s(p),"Pasivo Corriente":s(v)};const R=p/v;b=u(R,2),f=`Fórmula: AC / PC = ${p} / ${v} = ${R.toFixed(4)}`;break;case"tesoreria":y="Ratio de Tesorería (Acid Test)",C="Calcula el Ratio de Tesorería (Acid Test).",M={Realizable:s(n),Disponible:s(i),"Pasivo Corriente":s(v)};const E=(n+i)/v;b=u(E,2),f=`Fórmula: (Realizable + Disponible) / PC = (${n} + ${i}) / ${v} = ${E.toFixed(4)}`;break;case"disponibilidad":y="Ratio de Disponibilidad",C="Calcula el Ratio de Disponibilidad inmediata.",M={"Disponible (Tesorería)":s(i),"Pasivo Corriente":s(v)};const T=i/v;b=u(T,2),f=`Fórmula: Disponible / PC = ${i} / ${v} = ${T.toFixed(4)}`;break;case"garantia":y="Ratio de Garantía",C="Calcula el Ratio de Garantía (Solvencia a largo plazo) e interpreta la distancia a la quiebra.",M={"Activo Total":s(g),"Pasivo Total (Exigible)":s($)};const q=g/$;b=u(q,2),f=`Fórmula: Activo Total / Pasivo Total = ${g} / ${$} = ${q.toFixed(4)}`;break;case"endeudamiento":y="Ratio de Endeudamiento",C="Calcula el ratio de endeudamiento total.",M={"Pasivo Total":s($),"Patrimonio Neto":s(x)};const V=$/(x+$);b=u(V,2),f=`Fórmula: Pasivo / (PN + Pasivo) = ${$} / (${x} + ${$}) = ${V.toFixed(4)}`;break;case"calidad_deuda":y="Ratio de Calidad de la Deuda",C="Calcula el ratio de Calidad de la Deuda (cuanto menor, mejor calidad al ser más a l/p).",M={"Pasivo Corriente":s(v),"Pasivo Total":s($)};const S=v/$;b=u(S,2),f=`Fórmula: Pasivo Corriente / Pasivo Total = ${v} / ${$} = ${S.toFixed(4)}`;break}a.push({id:P("RATIO",c),category:"Ratios Financieros y Patrimoniales",title:y,question:C,data:M,solution:b,explanation:f})}return a},z=t=>{const a=[];for(let r=0;r<t;r++){const c=Math.random()>.5,o=l(100,1e3)*1e3,e=Math.floor(o*A(.4,.7)),i=Math.floor(o*A(.8,1.5)),n=Math.floor(i*A(.1,.25)),d=Math.floor(n*A(.1,.3)),m=Math.floor((n-d)*(1-.25));c?a.push({id:P("RENT",r),category:"Rentabilidad",title:"Rentabilidad Económica (ROI)",question:"Calcula la Rentabilidad Económica (ROI) de la empresa.",data:{"Activo Total":s(o),"BAII (Resultado Explotación)":s(n)},solution:`${u(n/o*100)} %`,explanation:`Fórmula: (BAII / Activo) x 100
(${n} / ${o}) x 100 = ${u(n/o*100,2)} %`}):a.push({id:P("RENT",r),category:"Rentabilidad",title:"Rentabilidad Financiera (ROE)",question:"Calcula la Rentabilidad Financiera (ROE) para los accionistas.",data:{"Patrimonio Neto":s(e),"Beneficio Neto":s(m)},solution:`${u(m/e*100)} %`,explanation:`Fórmula: (BN / PN) x 100
(${m} / ${e}) x 100 = ${u(m/e*100,2)} %`})}return a},k=t=>{const a=[];for(let r=0;r<t;r++){const c=l(10,500)*1e3,o=Math.floor(c*(l(0,10)/100)),e=l(4,20),i=(c-o)/e;a.push({id:P("AMORT",r),category:"Gestión del Inmovilizado",title:"Cálculo de Amortización Lineal",question:"Calcula la cuota de amortización anual lineal para un activo con los siguientes datos:",data:{"Valor de Adquisición":s(c),"Valor Residual":s(o),"Vida Útil":`${e} años`},solution:s(i),explanation:`Fórmula: (V. Adquisición - V. Residual) / Vida Útil
(${c} - ${o}) / ${e} = ${u(i,2)}`})}return a},j=t=>{const a=[];for(let r=0;r<t;r++)if(Math.random()>.5){const o=l(5e3,5e4),e=l(3e3,45e3),i=o-e,n=i>0?"A PAGAR":"A COMPENSAR/DEVOLVER";a.push({id:P("FISCAL",r),category:"Fiscalidad",title:"Liquidación de IVA (Modelo 303)",question:"Realiza la liquidación del IVA trimestral con los siguientes datos y determina si es a pagar o a compensar.",data:{"IVA Repercutido (Devengado)":s(o),"IVA Soportado (Deducible)":s(e)},solution:`${s(i)} (${n})`,explanation:`Fórmula: IVA Repercutido - IVA Soportado
${o} - ${e} = ${i} €`})}else{const o=l(1e4,1e6),e=o*.25,i=l(0,5e3),n=l(0,5e3),d=e-i-n;a.push({id:P("FISCAL",r),category:"Fiscalidad",title:"Cálculo Cuota Diferencial IS",question:"Calcula la Cuota Diferencial del Impuesto sobre Sociedades.",data:{"Base Imponible":s(o),"Tipo de Gravamen":"25%","Deducciones y Bonificaciones":s(i),"Retenciones y Pagos a Cuenta":s(n)},solution:s(d),explanation:`Cuota Íntegra = ${o} x 0.25 = ${e}
Cuota Líquida = ${e} - ${i} = ${e-i}
Cuota Diferencial = Cuota Líquida - Pagos a cuenta = ${e-i} - ${n} = ${d}`})}return a},B=t=>{const a=[],r=["global","almacenamiento","cobro","pago"];for(let c=0;c<t;c++){const o=r[c%r.length];if(o==="global"){const e=l(10,40),i=l(5,20),n=l(10,30),d=l(30,90),p=l(30,90);a.push({id:P("PMM",c),category:"Análisis Financiero",title:"Cálculo del PMM Económico y Financiero",question:"Dados los siguientes periodos medios (en días), calcula el Periodo Medio de Maduración Económico y el Financiero.",data:{"PM Almacenamiento (PMa)":`${e} días`,"PM Fabricación (PMf)":`${i} días`,"PM Venta (PMv)":`${n} días`,"PM Cobro (PMc)":`${d} días`,"PM Pago (PMp)":`${p} días`},solution:`PMM Ec: ${e+i+n+d} días | PMM Fin: ${e+i+n+d-p} días`,explanation:`PMM Económico = PMa + PMf + PMv + PMc = ${e+i+n+d}
PMM Financiero = PMM Económico - PMp = ${e+i+n+d} - ${p} = ${e+i+n+d-p}`})}else if(o==="almacenamiento"){const e=l(1e4,5e4),i=l(1e3,5e3),n=e/i,d=365/n;a.push({id:P("PMM",c),category:"Análisis Financiero",title:"Cálculo del Periodo Medio de Almacenamiento",question:"Calcula el periodo medio de almacenamiento.",data:{"Consumo anual de materias primas":u(e),"Stock medio de materias primas":u(i)},solution:`${u(d,2)} días`,explanation:`Rotación (na) = Consumo / Stock = ${u(n,2)}
PMa = 365 / na = 365 / ${u(n,2)} = ${u(d,2)}`})}else{const e=l(5e4,2e5),i=l(1e4,4e4),n=e/i,d=365/n;a.push({id:P("PMM",c),category:"Análisis Financiero",title:"Cálculo del Periodo Medio de Cobro",question:"Calcula el periodo medio de cobro a clientes.",data:{"Ventas a crédito":u(e),"Saldo medio de clientes":u(i)},solution:`${u(d,2)} días`,explanation:`Rotación (nc) = Ventas / Saldo = ${u(n,2)}
PMc = 365 / nc = 365 / ${u(n,2)} = ${u(d,2)}`})}}return a},G=()=>[...L(20),...D(20),...O(20),...N(20),...z(20),...k(20),...j(20),...B(20)];let F=[],h="Todos";const U=document.querySelector("#app"),w=()=>{F=G(),I()},Q=()=>{const t=new Set(F.map(a=>a.category));return["Todos",...Array.from(t)]},H=()=>h==="Todos"?F:F.filter(t=>t.category===h),_=()=>`
    <aside id="sidebar">
      <h1>
        <span style="border-radius:50%; background:rgba(56,189,248,0.2); padding:8px; display:inline-flex;">📊</span>
        <span>Finanzas</span>
      </h1>
      <nav>
        ${Q().map(a=>`
          <button 
            class="${a===h?"active":""}" 
            data-category="${a}"
          >
            ${a}
          </button>
        `).join("")}
      </nav>
      <div style="margin-top:auto; font-size:0.75rem; color:var(--text-muted); opacity:0.6;">
        v1.2 Premium
      </div>
    </aside>
  `,K=t=>{const a=Object.entries(t.data).map(([r,c])=>`<div><span>${r}</span> <span>${c}</span></div>`).join("");return`
    <div class="exercise-card">
      <div class="exercise-header">
        <span class="exercise-id">${t.id}</span>
        <span class="exercise-category">${t.category}</span>
      </div>
      
      <h3>${t.title}</h3>
      <p class="exercise-question">${t.question}</p>
      
      <div class="exercise-data">
        ${a}
      </div>
      
      <div class="solution-container">
        <button class="btn-reveal" onclick="document.getElementById('sol-${t.id}').classList.remove('hidden'); this.style.display='none'">
          Ver Solución
        </button>
        <div id="sol-${t.id}" class="solution-content hidden">
          <div class="solution-val">${t.solution}</div>
          ${t.explanation?`<div class="solution-expl">${t.explanation}</div>`:""}
        </div>
      </div>
    </div>
  `},W=()=>{const t=H();return`
    <main>
      <div class="content-wrapper">
        <header>
          <h2>${h}</h2>
          <p class="intro-text">Practica con ${t.length} ejercicios generados dinámicamente.</p>
        </header>
        
        <div class="exercises-grid">
          ${t.map(K).join("")}
        </div>
      </div>
    </main>
  `},I=()=>{U.innerHTML=`
    ${_()}
    ${W()}
  `,document.querySelectorAll("aside nav button").forEach(t=>{t.addEventListener("click",a=>{h=a.target.dataset.category||"Todos",I(),document.querySelector("main")?.scrollTo({top:0,behavior:"smooth"})})})};w();
