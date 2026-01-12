(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const r=e=>new Intl.NumberFormat("es-ES",{style:"currency",currency:"EUR"}).format(e),g=(e,t=2)=>e.toLocaleString("es-ES",{minimumFractionDigits:t,maximumFractionDigits:t}),l=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,F=(e,t,s=2)=>{const n=(Math.random()*(t-e)+e).toFixed(s);return parseFloat(n)},y=(e,t)=>`${e}-${(t+1).toString().padStart(2,"0")}`,E=e=>{const t=[];for(let s=0;s<e;s++){const n=l(10,200),a=Math.floor(n*(l(30,70)/100)),o=l(100,2e3)*100,i=n-a,d=o/i,c=Math.ceil(d);t.push({id:y("UR",s),category:"Análisis de Costes",title:"Cálculo del Umbral de Rentabilidad",question:"Una empresa presenta la siguiente estructura de costes. Calcula el Umbral de Rentabilidad (Punto Muerto) en unidades físicas.",data:{"Costes Fijos Totales (CF)":r(o),"Precio de Venta Unitario (P)":r(n),"Coste Variable Unitario (CVu)":r(a)},solution:`Q = ${g(c,0)} unidades`,explanation:`Fórmula: Q = CF / (P - CVu)
Q = ${o} / (${n} - ${a}) = ${o} / ${i} = ${g(d,2)}`,correctValue:c,valueType:"number"})}return t},V=e=>{const t=[];for(let s=0;s<e;s++){const n=Math.random()>.5,o=l(50,500)*1e3,i=Math.floor(o*(l(40,70)/100)),d=o-i,c=Math.floor(o*(l(30,60)/100)),p=Math.floor((o-c)*(l(20,50)/100)),m=o-c-p,u=d-m;n?t.push({id:y("FM",s),category:"Análisis Patrimonial",title:"Cálculo del Fondo de Maniobra",question:"Calcula el Fondo de Maniobra (FM) de la empresa.",data:{"Activo Corriente":r(d),"Pasivo Corriente":r(m)},solution:`${r(u)}`,explanation:`Fórmula: FM = AC - PC
FM = ${d} - ${m} = ${u}`,correctValue:u,valueType:"currency"}):t.push({id:y("FM",s),category:"Análisis Patrimonial",title:"Cálculo del Fondo de Maniobra (Vía LP)",question:"Calcula el Fondo de Maniobra utilizando los datos de los Capitales Permanentes.",data:{"Patrimonio Neto":r(c),"Pasivo No Corriente":r(p),"Activo No Corriente":r(i)},solution:`${r(u)}`,explanation:`Fórmula: FM = (PN + Provisión Largo Plazo) - ANC
FM = (${c} + ${p}) - ${i} = ${u}`,correctValue:u,valueType:"currency"})}return t},I=e=>{const t=[];for(let s=0;s<e;s++){const n=l(500,5e3)*100,a=Math.floor(n*(l(40,70)/100)),o=n-a,i=Math.floor(o*.9),d=Math.floor(o*.2),c=l(d/100,i/100)*100,p=o-c,m=o/p;t.push({id:y("AO",s),category:"Análisis de Costes",title:"Apalancamiento Operativo",question:"Dada la siguiente cuenta de resultados analítica, calcula el Apalancamiento Operativo (AO).",data:{Ventas:r(n),"Costes Variables":r(a),"Costes Fijos":r(c)},solution:`AO = ${g(m,2)}`,explanation:`Fórmula: AO = MC / Beneficio
AO = ${o} / ${p} = ${g(m,4)}`,correctValue:m,valueType:"number"})}return t},L=e=>{const t=[],s=["liquidez","tesoreria","disponibilidad","garantia","endeudamiento","calidad_deuda"];for(let n=0;n<e;n++){const a=s[n%s.length],o=l(100,1e4),i=l(10,50)*o,d=l(20,80)*o,c=l(30,100)*o,p=i+d+c,m=l(100,500)*o,u=p+m,b=Math.floor(u/l(120,250)*100),q=u-b,f=Math.floor(b*(l(30,80)/100));let $="",h="",C="",M={},P="",v=0;switch(a){case"liquidez":P="Ratio de Liquidez General",$="Calcula el Ratio de Liquidez General.",M={"Activo Corriente":r(p),"Pasivo Corriente":r(f)},v=p/f,h=g(v,2),C=`Fórmula: AC / PC = ${p} / ${f} = ${v.toFixed(4)}`;break;case"tesoreria":P="Ratio de Tesorería",$="Calcula el Ratio de Tesorería (Acid Test).",M={Realizable:r(d),Disponible:r(i),"Pasivo Corriente":r(f)},v=(d+i)/f,h=g(v,2),C=`Fórmula: (Realizable + Disponible) / PC = (${d} + ${i}) / ${f} = ${v.toFixed(4)}`;break;case"disponibilidad":P="Ratio de Disponibilidad",$="Calcula el Ratio de Disponibilidad.",M={Disponible:r(i),"Pasivo Corriente":r(f)},v=i/f,h=g(v,2),C=`Fórmula: Disponible / PC = ${i} / ${f} = ${v.toFixed(4)}`;break;case"garantia":P="Ratio de Garantía",$="Calcula el Ratio de Garantía.",M={"Activo Total":r(u),"Pasivo Total":r(b)},v=u/b,h=g(v,2),C=`Fórmula: Activo Total / Pasivo Total = ${u} / ${b} = ${v.toFixed(4)}`;break;case"endeudamiento":P="Ratio de Endeudamiento",$="Calcula el ratio de endeudamiento total.",M={"Pasivo Total":r(b),"Patrimonio Neto":r(q)},v=b/(q+b),h=g(v,2),C=`Fórmula: Pasivo / (PN + Pasivo) = ${b} / (${q} + ${b}) = ${v.toFixed(4)}`;break;case"calidad_deuda":P="Ratio de Calidad de la Deuda",$="Calcula el ratio de Calidad de la Deuda.",M={"Pasivo Corriente":r(f),"Pasivo Total":r(b)},v=f/b,h=g(v,2),C=`Fórmula: Pasivo Corriente / Pasivo Total = ${f} / ${b} = ${v.toFixed(4)}`;break}t.push({id:y("RATIO",n),category:"Ratios Financieros y Patrimoniales",title:P,question:$,data:M,solution:h,explanation:C,correctValue:v,valueType:"number"})}return t},S=e=>{const t=[];for(let s=0;s<e;s++){const n=Math.random()>.5,a=l(100,1e3)*1e3,o=Math.floor(a*F(.4,.7)),i=Math.floor(a*F(.8,1.5)),d=Math.floor(i*F(.1,.25)),c=Math.floor(d*F(.1,.3)),m=Math.floor((d-c)*(1-.25));if(n){const u=d/a*100;t.push({id:y("RENT",s),category:"Rentabilidad",title:"Rentabilidad Económica (ROI)",question:"Calcula el ROI (%).",data:{"Activo Total":r(a),BAII:r(d)},solution:`${g(u)} %`,explanation:`Fórmula: (BAII / Activo) x 100
(${d} / ${a}) x 100 = ${g(u,2)} %`,correctValue:u,valueType:"percentage"})}else{const u=m/o*100;t.push({id:y("RENT",s),category:"Rentabilidad",title:"Rentabilidad Financiera (ROE)",question:"Calcula el ROE (%).",data:{"Patrimonio Neto":r(o),"Beneficio Neto":r(m)},solution:`${g(u)} %`,explanation:`Fórmula: (BN / PN) x 100
(${m} / ${o}) x 100 = ${g(u,2)} %`,correctValue:u,valueType:"percentage"})}}return t},O=e=>{const t=[];for(let s=0;s<e;s++){const n=l(10,500)*1e3,a=Math.floor(n*(l(0,10)/100)),o=l(4,20),i=(n-a)/o;t.push({id:y("AMORT",s),category:"Gestión del Inmovilizado",title:"Cálculo de Amortización Lineal",question:"Calcula la cuota anual.",data:{"Valor de Adquisición":r(n),"Valor Residual":r(a),"Vida Útil":`${o} años`},solution:r(i),explanation:`Fórmula: (V.Adq - V.Res) / Vida
(${n} - ${a}) / ${o} = ${g(i,2)}`,correctValue:i,valueType:"currency"})}return t},N=e=>{const t=[];for(let s=0;s<e;s++)if(Math.random()>.5){const a=l(5e3,5e4),o=l(3e3,45e3),i=a-o,d=i>0?"A PAGAR":"A COMPENSAR/DEVOLVER";t.push({id:y("FISCAL",s),category:"Fiscalidad",title:"Liquidación de IVA",question:"Calcula el resultado de la liquidación (positivo o negativo).",data:{"IVA Repercutido":r(a),"IVA Soportado":r(o)},solution:`${r(i)} (${d})`,explanation:`${a} - ${o} = ${i}`,correctValue:i,valueType:"currency"})}else{const a=l(1e4,1e6),o=a*.25,i=l(0,5e3),d=l(0,5e3),c=o-i-d;t.push({id:y("FISCAL",s),category:"Fiscalidad",title:"Cuota Diferencial IS",question:"Calcula la Cuota Diferencial.",data:{"Base Imponible":r(a),Tipo:"25%",Deducciones:r(i),Retenciones:r(d)},solution:r(c),explanation:`CI=${o} -> CL=${o-i} -> CD=${c}`,correctValue:c,valueType:"currency"})}return t},z=e=>{const t=[],s=["global","almacenamiento","cobro"];for(let n=0;n<e;n++){const a=s[n%s.length];if(a==="global"){const o=l(10,40),i=l(5,20),d=l(10,30),c=l(30,90),p=l(30,90),m=o+i+d+c-p;t.push({id:y("PMM",n),category:"Análisis Financiero",title:"Cálculo PMM Financiero",question:"Calcula el Periodo Medio de Maduración Financiero.",data:{PMa:`${o}`,PMf:`${i}`,PMv:`${d}`,PMc:`${c}`,PMp:`${p}`},solution:`${m} días`,explanation:`PMa+PMf+PMv+PMc - PMp = ${o}+${i}+${d}+${c}-${p} = ${m}`,correctValue:m,valueType:"number"})}else if(a==="almacenamiento"){const o=l(1e4,5e4),i=l(1e3,5e3),c=365/(o/i);t.push({id:y("PMM",n),category:"Análisis Financiero",title:"Cálculo PM Almacenamiento",question:"Calcula el PMa.",data:{Consumo:`${o}`,"Stock medio":`${i}`},solution:`${g(c,2)} días`,explanation:`365 / (Consumo/Stock) = ${g(c,2)}`,correctValue:c,valueType:"number"})}else{const o=l(5e4,2e5),i=l(1e4,4e4),c=365/(o/i);t.push({id:y("PMM",n),category:"Análisis Financiero",title:"Cálculo PM Cobro",question:"Calcula el PMc.",data:{Ventas:`${o}`,"Saldo Clientes":`${i}`},solution:`${g(c,2)} días`,explanation:`365 / (Ventas/Saldo) = ${g(c,2)}`,correctValue:c,valueType:"number"})}}return t},D=()=>[...E(20),...I(20),...V(20),...L(20),...S(20),...O(20),...N(20),...z(20)],j=[{id:"costes",title:"Análisis de Costes",content:`
      <h4 style="color:var(--accent-color); margin-bottom:10px;">Umbral de Rentabilidad (Punto Muerto)</h4>
      <p>Imagina que estás organizando una fiesta. Tienes unos gastos que vas a pagar sí o sí (el alquiler del local), llamados <strong>Costes Fijos</strong>. Luego, cada invitado te cuesta dinero en comida y bebida, eso son los <strong>Costes Variables</strong>.</p>
      <p>El <strong>Punto Muerto</strong> es el número exacto de entradas que necesitas vender para no perder dinero. A partir de esa entrada extra, ¡todo es beneficio!</p>
      <div class="formula-box">Q = Costes Fijos / (Precio - Coste Variable Unitario)</div>
      
      <h4 style="color:var(--accent-color); margin-top:20px; margin-bottom:10px;">Apalancamiento Operativo</h4>
      <p>Mide qué tan "sensibles" son tus beneficios a un aumento en las ventas. Si tienes muchos costes fijos (mucha maquinaria, poco personal), un pequeño aumento en ventas dispara tus beneficios. ¡Es como una palanca!</p>
    `},{id:"patrimonial",title:"Análisis Patrimonial",content:`
      <h4 style="color:var(--accent-color); margin-bottom:10px;">Fondo de Maniobra (FM)</h4>
      <p>Es tu "colchón de seguridad" financiero a corto plazo. Responde a la pregunta: ¿Puedo pagar mis deudas inmediatas con el dinero que tengo o voy a cobrar pronto?</p>
      <p>Se calcula restando a lo que tienes (Activo Corriente: caja, clientes...) lo que debes a corto plazo (Pasivo Corriente).</p>
      <div class="formula-box">FM = Activo Corriente - Pasivo Corriente</div>
      <p><strong>Lo ideal:</strong> Que sea positivo. Si es negativo, ¡peligro! Podrías no tener dinero para pagar a tus proveedores mañana.</p>
    `},{id:"ratios",title:"Ratios Financieros",content:`
      <h4 style="color:var(--accent-color); margin-bottom:10px;">Salud Financiera</h4>
      <p>Los ratios son como los análisis de sangre de una empresa. Nos dicen si está sana.</p>
      <ul>
        <li><strong>Liquidez:</strong> ¿Tienes dinero para pagar ya? (Ideal: 1.5 - 2)</li>
        <li><strong>Tesoría (Acid Test):</strong> ¿Y si no vendes nada de tu stock, podrías pagar? (Ideal: ~1)</li>
        <li><strong>Garantía:</strong> Si la empresa quiebra hoy, ¿tus bienes cubren tus deudas? (Ideal: 1.5 - 2.5)</li>
        <li><strong>Endeudamiento:</strong> ¿Cuánto de lo que tienes es tuyo y cuánto es del banco? (Ideal: < 0.6)</li>
      </ul>
    `},{id:"rentabilidad",title:"Rentabilidad",content:`
      <h4 style="color:var(--accent-color); margin-bottom:10px;">ROI vs ROE</h4>
      <p><strong>ROI (Rentabilidad Económica):</strong> Mide lo bueno que es tu negocio en sí mismo. "Por cada 100€ que invierto en máquinas y local, ¿cuánto beneficio saco?". No le importa de dónde viene el dinero.</p>
      <div class="formula-box">ROI = (BAII / Activo Total) x 100</div>

      <p style="margin-top:15px;"><strong>ROE (Rentabilidad Financiera):</strong> Esto es lo que le importa al dueño. "Por cada 100€ de MI bolsillo que puse, ¿cuánto gano?". Aquí sí influye si pediste un préstamo.</p>
      <div class="formula-box">ROE = (Beneficio Neto / Patrimonio Neto) x 100</div>
    `},{id:"pmm",title:"Periodo Medio de Maduración (PMM)",content:`
      <p>Es el tiempo que tarda tu dinero en "dar la vuelta".</p>
      <p>Desde que compras una materia prima, la almacenas, la fabricas, la vendes y... ¡finalmente cobras al cliente!</p>
      <p><strong>PMM Económico:</strong> Todo el ciclo completo.</p>
      <p><strong>PMM Financiero:</strong> Le restas el tiempo que tardas en pagar a tus proveedores. ¡Porque mientras no pagas, ese dinero sigue en tu bolsillo!</p>
      <div class="formula-box">PMM Fin = (PMa + PMf + PMv + PMc) - PMp</div>
    `},{id:"fiscal",title:"Fiscalidad y Amortizaciones",content:`
      <h4 style="color:var(--accent-color); margin-bottom:10px;">IVA</h4>
      <p>Tú eres un recaudador del estado. Cobras IVA cuando vendes (Repercutido) y pagas IVA cuando compras (Soportado). La diferencia es lo que le das a Hacienda.</p>
      
      <h4 style="color:var(--accent-color); margin-top:15px; margin-bottom:10px;">Amortización</h4>
      <p>Tus máquinas pierden valor con el tiempo (se hacen viejas). Contablemente, vamos guardando un poquito de dinero cada año como "gasto" para reflejar esa pérdida de valor.</p>
      <div class="formula-box">Cuota = (Precio Compra - Valor Residual) / Años de Vida</div>
    `}];let T=[],x="Todos",A="exercises";const k=document.querySelector("#app"),w=()=>{T=D(),R()};window.validateExercise=(e,t,s)=>{const n=document.getElementById(`input-${e}`),a=document.getElementById(`feedback-${e}`),o=document.getElementById(`sol-${e}`),i=document.getElementById(`btn-${e}`);if(!n)return;const d=parseFloat(n.value.replace(",","."));let c=!1;if(s==="number"||s==="currency"||s==="percentage"){const p=Number(t),m=Math.max(.1,Math.abs(p*.05));!isNaN(d)&&Math.abs(d-p)<=m&&(c=!0)}else n.value.trim().toLowerCase()===String(t).toLowerCase()&&(c=!0);c?(a.innerHTML='<span style="color: #4ade80; font-weight:bold;">✅ ¡Correcto!</span>',a.classList.remove("hidden"),o.classList.remove("hidden"),i.style.display="none",n.disabled=!0,n.style.borderColor="#4ade80"):(a.innerHTML='<span style="color: #f87171; font-weight:bold;">❌ Incorrecto. Inténtalo de nuevo o revisa la solución.</span>',a.classList.remove("hidden"),n.style.borderColor="#f87171")};const B=()=>{const e=new Set(T.map(t=>t.category));return["Todos",...Array.from(e)]},U=()=>x==="Todos"?T:T.filter(e=>e.category===x),G=()=>{const e=B();return`
    <aside id="sidebar">
      <nav style="margin-top: 2rem;">
        <div style="margin-bottom: 2rem;">
            <button class="${A==="theory"?"active":""}" id="btn-theory" style="border: 1px solid var(--accent-color); color: var(--accent-color);">
               🎓 Aula Teórica
            </button>
        </div>

        <div style="margin-bottom:0.5rem; font-size:0.75rem; text-transform:uppercase; color:var(--text-muted); padding-left:10px;">Ejercicios</div>
        ${e.map(t=>`
          <button 
            class="${t===x&&A==="exercises"?"active":""}" 
            data-category="${t}"
          >
            ${t}
          </button>
        `).join("")}
      </nav>
      <div style="margin-top:auto; font-size:0.75rem; color:var(--text-muted); opacity:0.6;">
        v3.4 Professor Mode
      </div>
    </aside>
  `},H=e=>{const t=Object.entries(e.data).map(([a,o])=>`<div><span>${a}</span> <span>${o}</span></div>`).join(""),s=e.valueType==="percentage"?"Ej: 15.5":e.valueType==="currency"?"Ej: 5000":"Resultado",n=e.valueType==="percentage"?"%":e.valueType==="currency"?"€":"";return`
    <div class="exercise-card">
      <div class="exercise-header">
        <span class="exercise-id">${e.id}</span>
        <span class="exercise-category">${e.category}</span>
      </div>
      
      <h3>${e.title}</h3>
      <p class="exercise-question">${e.question}</p>
      
      <div class="exercise-data">
        ${t}
      </div>
      
      <div class="interaction-area" style="margin-top: auto;">
        <div style="display:flex; gap:10px; margin-bottom:10px; align-items:center;">
          <input type="number" id="input-${e.id}" placeholder="${s}" 
                 style="flex:1; padding:10px; border-radius:6px; border:1px solid rgba(255,255,255,0.1); background:rgba(0,0,0,0.3); color:white; font-family:var(--font-mono);">
          <span style="color:var(--text-secondary)">${n}</span>
        </div>
        
        <button id="btn-${e.id}" class="btn-reveal" 
          onclick="validateExercise('${e.id}', '${e.correctValue}', '${e.valueType}')">
          Comprobar
        </button>
        
        <div id="feedback-${e.id}" class="hidden" style="margin-top:10px; font-size:0.9rem;"></div>
        
        <div id="sol-${e.id}" class="solution-content hidden">
          <div class="solution-val">${e.solution}</div>
          ${e.explanation?`<div class="solution-expl">${e.explanation}</div>`:""}
        </div>
      </div>
    </div>
  `},Q=()=>`
    <main>
      <div class="content-wrapper">
        <header>
          <h2>Aula Teórica</h2>
          <p class="intro-text">Repasa los conceptos clave antes de practicar.</p>
        </header>
        
        <div class="exercises-grid" style="grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));">
          ${j.map(e=>`
            <div class="exercise-card" style="border-color: rgba(6, 182, 212, 0.4);">
              <h3>${e.title}</h3>
              <div style="color: var(--text-secondary); line-height: 1.6;">
                ${e.content}
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </main>
    `,_=()=>{if(A==="theory")return Q();const e=U();return`
    <main>
      <div class="content-wrapper">
        <header>
          <h2>${x}</h2>
          <p class="intro-text">Resuelve ${e.length} retos interactivos.</p>
        </header>
        
        <div class="exercises-grid">
          ${e.map(H).join("")}
        </div>
      </div>
    </main>
  `},R=()=>{k.innerHTML=`
    ${G()}
    ${_()}
  `,document.querySelectorAll("aside nav button[data-category]").forEach(e=>{e.addEventListener("click",t=>{x=t.target.dataset.category||"Todos",A="exercises",R(),document.querySelector("main")?.scrollTo({top:0,behavior:"smooth"})})}),document.getElementById("btn-theory")?.addEventListener("click",()=>{A="theory",R(),document.querySelector("main")?.scrollTo({top:0,behavior:"smooth"})})};w();
