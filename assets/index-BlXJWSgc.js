(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const e of a)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const e={};return a.integrity&&(e.integrity=a.integrity),a.referrerPolicy&&(e.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?e.credentials="include":a.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(a){if(a.ep)return;a.ep=!0;const e=r(a);fetch(a.href,e)}})();const s=o=>new Intl.NumberFormat("es-ES",{style:"currency",currency:"EUR"}).format(o),u=(o,t=2)=>o.toLocaleString("es-ES",{minimumFractionDigits:t,maximumFractionDigits:t}),l=(o,t)=>Math.floor(Math.random()*(t-o+1))+o,A=(o,t,r=2)=>{const c=(Math.random()*(t-o)+o).toFixed(r);return parseFloat(c)},g=(o,t)=>`${o}-${(t+1).toString().padStart(2,"0")}`,L=o=>{const t=[];for(let r=0;r<o;r++){const c=l(10,200),a=Math.floor(c*(l(30,70)/100)),e=l(100,2e3)*100,i=c-a,n=e/i,d=Math.ceil(n);t.push({id:g("UR",r),category:"Análisis de Costes",title:"Cálculo del Umbral de Rentabilidad",question:"Una empresa presenta la siguiente estructura de costes. Calcula el Umbral de Rentabilidad (Punto Muerto) en unidades físicas.",data:{"Costes Fijos Totales (CF)":s(e),"Precio de Venta Unitario (P)":s(c),"Coste Variable Unitario (CVu)":s(a)},solution:`Q = ${u(d,0)} unidades`,explanation:`Fórmula: Q = CF / (P - CVu)
Q = ${e} / (${c} - ${a}) = ${e} / ${i} = ${u(n,2)}`})}return t},O=o=>{const t=[];for(let r=0;r<o;r++){const c=Math.random()>.5,e=l(50,500)*1e3,i=Math.floor(e*(l(40,70)/100)),n=e-i,d=Math.floor(e*(l(30,60)/100)),p=Math.floor((e-d)*(l(20,50)/100)),m=e-d-p,b=n-m;c?t.push({id:g("FM",r),category:"Análisis Patrimonial",title:"Cálculo del Fondo de Maniobra",question:"Calcula el Fondo de Maniobra de la empresa basándote en los siguientes datos del Activo y Pasivo Corriente.",data:{"Activo Corriente":s(n),"Pasivo Corriente":s(m)},solution:`${s(b)}`,explanation:`Fórmula: FM = AC - PC
FM = ${n} - ${m} = ${b}`}):t.push({id:g("FM",r),category:"Análisis Patrimonial",title:"Cálculo del Fondo de Maniobra (Vía Capitales Permanentes)",question:"Calcula el Fondo de Maniobra utilizando los datos de los Capitales Permanentes y el Activo No Corriente.",data:{"Patrimonio Neto":s(d),"Pasivo No Corriente":s(p),"Activo No Corriente":s(i)},solution:`${s(b)}`,explanation:`Fórmula: FM = (PN + Provisión Largo Plazo) - ANC
FM = (${d} + ${p}) - ${i} = ${d+p} - ${i} = ${b}`})}return t},z=o=>{const t=[];for(let r=0;r<o;r++){const c=l(500,5e3)*100,a=Math.floor(c*(l(40,70)/100)),e=c-a,i=Math.floor(e*.9),n=Math.floor(e*.2),d=l(n/100,i/100)*100,p=e-d,m=e/p;t.push({id:g("AO",r),category:"Análisis de Costes",title:"Apalancamiento Operativo",question:"Dada la siguiente cuenta de resultados analítica, calcula el Apalancamiento Operativo (AO). Interpretalo como la sensibilidad del beneficio ante cambios en las ventas.",data:{Ventas:s(c),"Costes Variables":s(a),"Costes Fijos":s(d)},solution:`AO = ${u(m,2)}`,explanation:`Fórmula: AO = (Ventas - CV) / (Ventas - CV - CF)
AO = (${c} - ${a}) / (${c} - ${a} - ${d})
AO = ${e} / ${p} = ${u(m,4)}`})}return t},D=o=>{const t=[],r=["liquidez","tesoreria","disponibilidad","garantia","endeudamiento","calidad_deuda"];for(let c=0;c<o;c++){const a=r[c%r.length],e=l(100,1e4),i=l(10,50)*e,n=l(20,80)*e,d=l(30,100)*e,p=i+n+d,m=l(100,500)*e,b=p+m,$=Math.floor(b/l(120,250)*100),x=b-$,f=Math.floor($*(l(30,80)/100));let v="",C="",P="",M={},y="";switch(a){case"liquidez":y="Ratio de Liquidez General",v="Calcula el Ratio de Liquidez General e interpreta si la empresa tiene capacidad para pagar sus deudas a corto plazo.",M={"Activo Corriente":s(p),"Pasivo Corriente":s(f)};const R=p/f;C=u(R,2),P=`Fórmula: AC / PC = ${p} / ${f} = ${R.toFixed(4)}`;break;case"tesoreria":y="Ratio de Tesorería (Acid Test)",v="Calcula el Ratio de Tesorería (Acid Test).",M={Realizable:s(n),Disponible:s(i),"Pasivo Corriente":s(f)};const E=(n+i)/f;C=u(E,2),P=`Fórmula: (Realizable + Disponible) / PC = (${n} + ${i}) / ${f} = ${E.toFixed(4)}`;break;case"disponibilidad":y="Ratio de Disponibilidad",v="Calcula el Ratio de Disponibilidad inmediata.",M={"Disponible (Tesorería)":s(i),"Pasivo Corriente":s(f)};const T=i/f;C=u(T,2),P=`Fórmula: Disponible / PC = ${i} / ${f} = ${T.toFixed(4)}`;break;case"garantia":y="Ratio de Garantía",v="Calcula el Ratio de Garantía (Solvencia a largo plazo) e interpreta la distancia a la quiebra.",M={"Activo Total":s(b),"Pasivo Total (Exigible)":s($)};const q=b/$;C=u(q,2),P=`Fórmula: Activo Total / Pasivo Total = ${b} / ${$} = ${q.toFixed(4)}`;break;case"endeudamiento":y="Ratio de Endeudamiento",v="Calcula el ratio de endeudamiento total.",M={"Pasivo Total":s($),"Patrimonio Neto":s(x)};const V=$/(x+$);C=u(V,2),P=`Fórmula: Pasivo / (PN + Pasivo) = ${$} / (${x} + ${$}) = ${V.toFixed(4)}`;break;case"calidad_deuda":y="Ratio de Calidad de la Deuda",v="Calcula el ratio de Calidad de la Deuda (cuanto menor, mejor calidad al ser más a l/p).",M={"Pasivo Corriente":s(f),"Pasivo Total":s($)};const S=f/$;C=u(S,2),P=`Fórmula: Pasivo Corriente / Pasivo Total = ${f} / ${$} = ${S.toFixed(4)}`;break}t.push({id:g("RATIO",c),category:"Ratios Financieros y Patrimoniales",title:y,question:v,data:M,solution:C,explanation:P})}return t},N=o=>{const t=[];for(let r=0;r<o;r++){const c=Math.random()>.5,a=l(100,1e3)*1e3,e=Math.floor(a*A(.4,.7)),i=Math.floor(a*A(.8,1.5)),n=Math.floor(i*A(.1,.25)),d=Math.floor(n*A(.1,.3)),m=Math.floor((n-d)*(1-.25));c?t.push({id:g("RENT",r),category:"Rentabilidad",title:"Rentabilidad Económica (ROI)",question:"Calcula la Rentabilidad Económica (ROI) de la empresa.",data:{"Activo Total":s(a),"BAII (Resultado Explotación)":s(n)},solution:`${u(n/a*100)} %`,explanation:`Fórmula: (BAII / Activo) x 100
(${n} / ${a}) x 100 = ${u(n/a*100,2)} %`}):t.push({id:g("RENT",r),category:"Rentabilidad",title:"Rentabilidad Financiera (ROE)",question:"Calcula la Rentabilidad Financiera (ROE) para los accionistas.",data:{"Patrimonio Neto":s(e),"Beneficio Neto":s(m)},solution:`${u(m/e*100)} %`,explanation:`Fórmula: (BN / PN) x 100
(${m} / ${e}) x 100 = ${u(m/e*100,2)} %`})}return t},k=o=>{const t=[];for(let r=0;r<o;r++){const c=l(10,500)*1e3,a=Math.floor(c*(l(0,10)/100)),e=l(4,20),i=(c-a)/e;t.push({id:g("AMORT",r),category:"Gestión del Inmovilizado",title:"Cálculo de Amortización Lineal",question:"Calcula la cuota de amortización anual lineal para un activo con los siguientes datos:",data:{"Valor de Adquisición":s(c),"Valor Residual":s(a),"Vida Útil":`${e} años`},solution:s(i),explanation:`Fórmula: (V. Adquisición - V. Residual) / Vida Útil
(${c} - ${a}) / ${e} = ${u(i,2)}`})}return t},w=o=>{const t=[];for(let r=0;r<o;r++)if(Math.random()>.5){const a=l(5e3,5e4),e=l(3e3,45e3),i=a-e,n=i>0?"A PAGAR":"A COMPENSAR/DEVOLVER";t.push({id:g("FISCAL",r),category:"Fiscalidad",title:"Liquidación de IVA (Modelo 303)",question:"Realiza la liquidación del IVA trimestral con los siguientes datos y determina si es a pagar o a compensar.",data:{"IVA Repercutido (Devengado)":s(a),"IVA Soportado (Deducible)":s(e)},solution:`${s(i)} (${n})`,explanation:`Fórmula: IVA Repercutido - IVA Soportado
${a} - ${e} = ${i} €`})}else{const a=l(1e4,1e6),e=a*.25,i=l(0,5e3),n=l(0,5e3),d=e-i-n;t.push({id:g("FISCAL",r),category:"Fiscalidad",title:"Cálculo Cuota Diferencial IS",question:"Calcula la Cuota Diferencial del Impuesto sobre Sociedades.",data:{"Base Imponible":s(a),"Tipo de Gravamen":"25%","Deducciones y Bonificaciones":s(i),"Retenciones y Pagos a Cuenta":s(n)},solution:s(d),explanation:`Cuota Íntegra = ${a} x 0.25 = ${e}
Cuota Líquida = ${e} - ${i} = ${e-i}
Cuota Diferencial = Cuota Líquida - Pagos a cuenta = ${e-i} - ${n} = ${d}`})}return t},j=o=>{const t=[],r=["global","almacenamiento","cobro","pago"];for(let c=0;c<o;c++){const a=r[c%r.length];if(a==="global"){const e=l(10,40),i=l(5,20),n=l(10,30),d=l(30,90),p=l(30,90);t.push({id:g("PMM",c),category:"Análisis Financiero",title:"Cálculo del PMM Económico y Financiero",question:"Dados los siguientes periodos medios (en días), calcula el Periodo Medio de Maduración Económico y el Financiero.",data:{"PM Almacenamiento (PMa)":`${e} días`,"PM Fabricación (PMf)":`${i} días`,"PM Venta (PMv)":`${n} días`,"PM Cobro (PMc)":`${d} días`,"PM Pago (PMp)":`${p} días`},solution:`PMM Ec: ${e+i+n+d} días | PMM Fin: ${e+i+n+d-p} días`,explanation:`PMM Económico = PMa + PMf + PMv + PMc = ${e+i+n+d}
PMM Financiero = PMM Económico - PMp = ${e+i+n+d} - ${p} = ${e+i+n+d-p}`})}else if(a==="almacenamiento"){const e=l(1e4,5e4),i=l(1e3,5e3),n=e/i,d=365/n;t.push({id:g("PMM",c),category:"Análisis Financiero",title:"Cálculo del Periodo Medio de Almacenamiento",question:"Calcula el periodo medio de almacenamiento.",data:{"Consumo anual de materias primas":u(e),"Stock medio de materias primas":u(i)},solution:`${u(d,2)} días`,explanation:`Rotación (na) = Consumo / Stock = ${u(n,2)}
PMa = 365 / na = 365 / ${u(n,2)} = ${u(d,2)}`})}else{const e=l(5e4,2e5),i=l(1e4,4e4),n=e/i,d=365/n;t.push({id:g("PMM",c),category:"Análisis Financiero",title:"Cálculo del Periodo Medio de Cobro",question:"Calcula el periodo medio de cobro a clientes.",data:{"Ventas a crédito":u(e),"Saldo medio de clientes":u(i)},solution:`${u(d,2)} días`,explanation:`Rotación (nc) = Ventas / Saldo = ${u(n,2)}
PMc = 365 / nc = 365 / ${u(n,2)} = ${u(d,2)}`})}}return t},G=()=>[...L(20),...z(20),...O(20),...D(20),...N(20),...k(20),...w(20),...j(20)];let F=[],h="Todos";const B=document.querySelector("#app"),U=()=>{F=G(),I()},Q=()=>{const o=new Set(F.map(t=>t.category));return["Todos",...Array.from(o)]},H=()=>h==="Todos"?F:F.filter(o=>o.category===h),_=()=>`
    <aside id="sidebar">
      <h1>
        <span style="font-size: 1.2em">📊</span>
        Ejercicios Finanzas
      </h1>
      <nav>
        ${Q().map(t=>`
          <button 
            class="${t===h?"active":""}" 
            data-category="${t}"
          >
            ${t}
          </button>
        `).join("")}
      </nav>
      <div style="margin-top: auto; color: var(--text-secondary); font-size: 0.8rem;">
         Generado dinámicamente<br>Versión 1.0
      </div>
    </aside>
  `,K=o=>{const t=Object.entries(o.data).map(([r,c])=>`<div><strong>${r}:</strong> ${c}</div>`).join("");return`
    <div class="exercise-card">
      <div class="exercise-header">
        <span class="exercise-id">${o.id}</span>
        <span style="font-size: 0.8rem; color: var(--accent-color)">${o.category}</span>
      </div>
      <div class="exercise-content">
        <h3>${o.title}</h3>
        <p style="margin: 0.5rem 0; color: #cbd5e1">${o.question}</p>
        
        <div class="exercise-data">
          ${t}
        </div>
      </div>
      
      <div class="solution-container">
        <button class="btn-reveal" onclick="document.getElementById('sol-${o.id}').classList.remove('hidden'); this.style.display='none'">
          Ver Solución
        </button>
        <div id="sol-${o.id}" class="solution-content hidden">
          <div><strong>Solución:</strong> ${o.solution}</div>
          ${o.explanation?`<div style="margin-top: 0.5rem; font-size: 0.9rem; color: #f8fafc; white-space: pre-wrap; word-break: break-word; line-height: 1.4; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 5px;">${o.explanation}</div>`:""}
        </div>
      </div>
    </div>
  `},W=()=>{const o=H();return`
    <main>
      <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2rem;">
        <div>
           <h2>${h}</h2>
           <p class="intro-text">Mostrando ${o.length} ejercicios prácticos generados.</p>
        </div>
        <button id="menu-toggle" style="display: none; background: none; border: none; color: white; font-size: 1.5rem;">☰</button>
      </div>
      
      <div class="exercises-grid">
        ${o.map(K).join("")}
      </div>
    </main>
  `},I=()=>{B.innerHTML=`
    ${_()}
    ${W()}
  `,document.querySelectorAll("aside nav button").forEach(o=>{o.addEventListener("click",t=>{h=t.target.dataset.category||"Todos",I(),window.scrollTo(0,0)})})};U();
