(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=i(t);fetch(t.href,a)}})();const r=e=>new Intl.NumberFormat("es-ES",{style:"currency",currency:"EUR"}).format(e),b=(e,o=2)=>e.toLocaleString("es-ES",{minimumFractionDigits:o,maximumFractionDigits:o}),d=(e,o)=>Math.floor(Math.random()*(o-e+1))+e,R=(e,o,i=2)=>{const n=(Math.random()*(o-e)+e).toFixed(i);return parseFloat(n)},f=(e,o)=>`${e}-${(o+1).toString().padStart(2,"0")}`,S=e=>{const o=[];for(let i=0;i<e;i++){const n=d(10,200),t=Math.floor(n*(d(30,70)/100)),a=d(100,2e3)*100,s=n-t,c=a/s,l=Math.ceil(c),u=["Una empresa presenta la siguiente estructura de costes. Calcula el Umbral de Rentabilidad (Punto Muerto) en unidades físicas.","Dada la información de costes y precios, determina cuántas unidades debe vender la empresa para empezar a obtener beneficios.","Calcula la cantidad de equilibrio (Q*) para esta empresa basándote en sus costes fijos y margen de contribución.","¿Cuál es el volumen de ventas mínimas (en unidades) necesario para cubrir todos los costes?"],v=u[i%u.length];o.push({id:f("UR",i),category:"Análisis de Costes",title:"Cálculo del Umbral de Rentabilidad",question:v,data:{"Costes Fijos Totales (CF)":r(a),"Precio de Venta Unitario (P)":r(n),"Coste Variable Unitario (CVu)":r(t)},solution:`Q = ${b(l,0)} unidades`,explanation:`Fórmula: Q = CF / (P - CVu)
Q = ${a} / (${n} - ${t}) = ${a} / ${s} = ${b(c,2)}`,correctValue:l,valueType:"number"})}return o},D=e=>{const o=[];for(let i=0;i<e;i++){const n=Math.random()>.5,a=d(50,500)*1e3,s=Math.floor(a*(d(40,70)/100)),c=a-s,l=Math.floor(a*(d(30,60)/100)),u=Math.floor((a-l)*(d(20,50)/100)),v=a-l-u,p=c-v;if(n)o.push({id:f("FM",i),category:"Análisis Patrimonial",title:"Cálculo del Fondo de Maniobra",question:"Calcula el Fondo de Maniobra (FM) de la empresa.",data:{"Activo Corriente":r(c),"Pasivo Corriente":r(v)},solution:`${r(p)}`,explanation:`Fórmula: FM = AC - PC
FM = ${c} - ${v} = ${p}`,correctValue:p,valueType:"currency"});else{const m=["Calcula el Fondo de Maniobra por el método del Patrimonio Neto y Pasivo No Corriente.","Determina el Fondo de Maniobra utilizando la financiación a largo plazo y el activo inmovilizado.","Comprueba la estabilidad financiera calculando el FM desde la perspectiva de los capitales permanentes."],h=m[i%m.length];o.push({id:f("FM-L",i),category:"Análisis Patrimonial",title:"Fondo de Maniobra (Largo Plazo)",question:h,data:{"Patrimonio Neto":r(l),"Pasivo No Corriente":r(u),"Activo No Corriente":r(s)},solution:`${r(p)}`,explanation:`Fórmula: FM = (PN + Provisión Largo Plazo) - ANC
FM = (${l} + ${u}) - ${s} = ${p}`,correctValue:p,valueType:"currency"})}}return o},N=e=>{const o=[];for(let i=0;i<e;i++){const n=d(500,5e3)*100,t=Math.floor(n*(d(40,70)/100)),a=n-t,s=Math.floor(a*.9),c=Math.floor(a*.2),l=d(c/100,s/100)*100,u=a-l,v=a/u,p=["Calcula el Grado de Apalancamiento Operativo (GAO) para esta empresa.","Determina la sensibilidad del beneficio ante cambios en las ventas calculando el Apalancamiento Operativo.","¿Cuál es el GAO de esta compañía dado su nivel actual de ventas y estructura de costes?","Halla el multiplicador del beneficio (Apalancamiento Operativo) para un aumento en las ventas."],m=p[i%p.length];o.push({id:f("AO",i),category:"Análisis de Costes",title:"Apalancamiento Operativo",question:m,data:{Ventas:r(n),"Costes Variables":r(t),"Costes Fijos":r(l)},solution:`AO = ${b(v,2)}`,explanation:`Fórmula: AO = MC / Beneficio
AO = ${a} / ${u} = ${b(v,4)}`,correctValue:v,valueType:"number"})}return o},j=e=>{const o=[],i=["liquidez","tesoreria","disponibilidad","garantia","endeudamiento","calidad_deuda"];for(let n=0;n<e;n++){const t=i[n%i.length],a=d(100,1e4),s=d(10,50)*a,c=d(20,80)*a,l=d(30,100)*a,u=s+c+l,v=d(100,500)*a,p=u+v,m=Math.floor(p/d(120,250)*100),h=p-m,y=Math.floor(m*(d(30,80)/100));let $="",C="",M="",P={},x="",g=0;switch(t){case"liquidez":x="Ratio de Liquidez General";const I=["Calcula el Ratio de Liquidez General.","Determina la solvencia a corto plazo mediante el Ratio de Liquidez.","¿Cuál es la capacidad de la empresa para hacer frente a sus deudas a corto plazo con sus activos corrientes?"];$=I[n%I.length],P={"Activo Corriente":r(u),"Pasivo Corriente":r(y)},g=u/y,C=b(g,2),M=`Fórmula: AC / PC = ${u} / ${y} = ${g.toFixed(4)}`;break;case"tesoreria":x="Ratio de Tesorería";const E=["Calcula el Ratio de Tesorería (Acid Test).","Halla el coeficiente de tesorería (Acid Test) excluyendo las existencias.","Determina la capacidad de pago inmediata sin contar con la venta de stock (Acid Test)."];$=E[n%E.length],P={Realizable:r(c),Disponible:r(s),"Pasivo Corriente":r(y)},g=(c+s)/y,C=b(g,2),M=`Fórmula: (Realizable + Disponible) / PC = (${c} + ${s}) / ${y} = ${g.toFixed(4)}`;break;case"disponibilidad":x="Ratio de Disponibilidad";const V=["Calcula el Ratio de Disponibilidad.","¿Cuál es la disponibilidad inmediata de la empresa frente a sus deudas a corto plazo?","Determina el ratio más exigente de liquidez (Disponibilidad)."];$=V[n%V.length],P={Disponible:r(s),"Pasivo Corriente":r(y)},g=s/y,C=b(g,2),M=`Fórmula: Disponible / PC = ${s} / ${y} = ${g.toFixed(4)}`;break;case"garantia":x="Ratio de Garantía";const O=["Calcula el Ratio de Garantía.","Determina la solvencia total o garantía de la empresa frente a terceros.","¿Cuál es la distancia a la quiebra? Calcula el Ratio de Garantía."];$=O[n%O.length],P={"Activo Total":r(p),"Pasivo Total":r(m)},g=p/m,C=b(g,2),M=`Fórmula: Activo Total / Pasivo Total = ${p} / ${m} = ${g.toFixed(4)}`;break;case"endeudamiento":x="Ratio de Endeudamiento";const L=["Calcula el ratio de endeudamiento total.","Determina qué proporción de los recursos totales es financiada por deuda.","¿Cuál es el nivel de dependencia financiera externa (Ratio de Endeudamiento)?"];$=L[n%L.length],P={"Pasivo Total":r(m),"Patrimonio Neto":r(h)},g=m/(h+m),C=b(g,2),M=`Fórmula: Pasivo / (PN + Pasivo) = ${m} / (${h} + ${m}) = ${g.toFixed(4)}`;break;case"calidad_deuda":x="Ratio de Calidad de la Deuda";const z=["Calcula el ratio de Calidad de la Deuda.","¿Qué porcentaje de la deuda total vence a corto plazo? (Calidad de la Deuda).","Analiza la estructura de la deuda calculando su calidad."];$=z[n%z.length],P={"Pasivo Corriente":r(y),"Pasivo Total":r(m)},g=y/m,C=b(g,2),M=`Fórmula: Pasivo Corriente / Pasivo Total = ${y} / ${m} = ${g.toFixed(4)}`;break}o.push({id:f("RATIO",n),category:"Ratios Financieros y Patrimoniales",title:x,question:$,data:P,solution:C,explanation:M,correctValue:g,valueType:"number"})}return o},k=e=>{const o=[];for(let i=0;i<e;i++){const n=Math.random()>.5,t=d(100,1e3)*1e3,a=Math.floor(t*R(.4,.7)),s=Math.floor(t*R(.8,1.5)),c=Math.floor(s*R(.1,.25)),l=Math.floor(c*R(.1,.3)),v=Math.floor((c-l)*(1-.25));if(n){const p=c/t*100,m=["Calcula la Rentabilidad Económica (ROI).","Determina el rendimiento de los activos totales (ROI) antes de intereses e impuestos.","¿Cuál es la rentabilidad generada por el activo total de la empresa (ROI)?"],h=m[i%m.length];o.push({id:f("ROI",i),category:"Rentabilidad",title:"Cálculo del ROI",question:h,data:{"Activo Total":r(t),BAII:r(c)},solution:`${b(p)} %`,explanation:`Fórmula: (BAII / Activo) x 100
(${c} / ${t}) x 100 = ${b(p,2)} %`,correctValue:p,valueType:"percentage"})}else{const p=v/a*100,m=["Calcula la Rentabilidad Financiera (ROE).","Determina el rendimiento para los accionistas (ROE) basándote en el beneficio neto.","¿Cuál es la rentabilidad de los fondos propios (ROE) de esta empresa?"],h=m[i%m.length];o.push({id:f("ROE",i),category:"Rentabilidad",title:"Cálculo del ROE",question:h,data:{"Patrimonio Neto":r(a),"Beneficio Neto":r(v)},solution:`${b(p)} %`,explanation:`Fórmula: (BN / PN) x 100
(${v} / ${a}) x 100 = ${b(p,2)} %`,correctValue:p,valueType:"percentage"})}}return o},w=e=>{const o=[];for(let i=0;i<e;i++){const n=d(10,500)*1e3,t=Math.floor(n*(d(0,10)/100)),a=d(4,20),s=(n-t)/a,c=["Calcula la cuota de amortización anual lineal para la siguiente máquina.","Determina el gasto anual por depreciación de este activo usando el método lineal.","¿Cuál es la amortización anual contable de este bien según los datos facilitados?","Halla la cuota constante de amortización para este elemento del inmovilizado."],l=c[i%c.length];o.push({id:f("AM",i),category:"Gestión del Inmovilizado",title:"Amortización Lineal",question:l,data:{"Valor de Adquisición":r(n),"Valor Residual":r(t),"Vida Útil":`${a} años`},solution:r(s),explanation:`Fórmula: (V.Adq - V.Res) / Vida
(${n} - ${t}) / ${a} = ${b(s,2)}`,correctValue:s,valueType:"currency"})}return o},B=e=>{const o=[];for(let i=0;i<e;i++)if(Math.random()>.5){const t=d(5e3,5e4),a=d(3e3,45e3),s=t-a,c=s>0?"A PAGAR":"A COMPENSAR/DEVOLVER",l=["Calcula la liquidación trimestral del IVA (Modelo 303).","Determina el resultado de la declaración de IVA a ingresar o devolver.","Halla la cuota final de IVA a pagar a Hacienda (o a compensar) dados los siguientes datos.","Realiza el cálculo del IVA repercutido y soportado para obtener el resultado de la liquidación."],u=l[i%l.length];o.push({id:f("IVA",i),category:"Fiscalidad",title:"Liquidación de IVA",question:u,data:{"IVA Repercutido":r(t),"IVA Soportado":r(a)},solution:`${r(s)} (${c})`,explanation:`${t} - ${a} = ${s}`,correctValue:s,valueType:"currency"})}else{const t=d(1e4,1e6),a=t*.25,s=d(0,5e3),c=d(0,5e3),l=a-s-c,u=["Calcula la Cuota Diferencial del Impuesto sobre Sociedades.","Determina la cantidad final a ingresar o devolver por el Impuesto de Sociedades.","Halla la liquidación final del IS teniendo en cuenta las retenciones y pagos a cuenta."],v=u[i%u.length];o.push({id:f("IS",i),category:"Fiscalidad",title:"Cuota Diferencial IS",question:v,data:{"Base Imponible":r(t),Tipo:"25%",Deducciones:r(s),Retenciones:r(c)},solution:r(l),explanation:`CI=${a} -> CL=${a-s} -> CD=${l}`,correctValue:l,valueType:"currency"})}return o},G=e=>{const o=[],i=["global","almacenamiento","cobro"];for(let n=0;n<e;n++){const t=i[n%i.length];if(t==="global"){const a=d(10,40),s=d(5,20),c=d(10,30),l=d(30,90),u=d(30,90),v=a+s+c+l-u,p=["Calcula el Periodo Medio de Maduración Financiero (PMM).","Determina el ciclo de caja o maduración financiera de la empresa.","¿Cuántos días tarda la empresa en recuperar su inversión desde que paga a proveedores? (Calcula el PMM Financiero).","Halla el PMM Financiero a partir de los periodos medios de almacenamiento, fabricación, venta y pago."],m=p[n%p.length];o.push({id:f("PMM",n),category:"PMM",title:"Periodo Medio de Maduración",question:m,data:{PMa:`${a}`,PMf:`${s}`,PMv:`${c}`,PMc:`${l}`,PMp:`${u}`},solution:`${v} días`,explanation:`PMa+PMf+PMv+PMc - PMp = ${a}+${s}+${c}+${l}-${u} = ${v}`,correctValue:v,valueType:"number"})}else if(t==="almacenamiento"){const a=d(1e4,5e4),s=d(1e3,5e3),l=365/(a/s);o.push({id:f("PMM",n),category:"Análisis Financiero",title:"Cálculo PM Almacenamiento",question:"Calcula el PMa.",data:{Consumo:`${a}`,"Stock medio":`${s}`},solution:`${b(l,2)} días`,explanation:`365 / (Consumo/Stock) = ${b(l,2)}`,correctValue:l,valueType:"number"})}else{const a=d(5e4,2e5),s=d(1e4,4e4),l=365/(a/s);o.push({id:f("PMM",n),category:"Análisis Financiero",title:"Cálculo PM Cobro",question:"Calcula el PMc.",data:{Ventas:`${a}`,"Saldo Clientes":`${s}`},solution:`${b(l,2)} días`,explanation:`365 / (Ventas/Saldo) = ${b(l,2)}`,correctValue:l,valueType:"number"})}}return o},H=()=>[...S(20),...N(20),...D(20),...j(20),...k(20),...w(20),...B(20),...G(20)],U=[{id:"costes",title:"Análisis de Costes",content:`
      <h4 style="color:var(--accent-color); margin-bottom:10px;">Umbral de rentabilidad (Punto muerto)</h4>
      <p>Imagina que estás organizando una fiesta. Tienes unos gastos que vas a pagar sí o sí (el alquiler del local), llamados <strong>costes fijos</strong>. Luego, cada invitado te cuesta dinero en comida y bebida, eso son los <strong>costes variables</strong>.</p>
      <p>El <strong>Punto muerto</strong> es el número exacto de entradas que necesitas vender para no perder dinero. A partir de esa entrada extra, ¡todo es beneficio!</p>
      <div class="formula-box">Q = Costes fijos / (Precio - Coste variable unitario)</div>
      
      <h4 style="color:var(--accent-color); margin-top:20px; margin-bottom:10px;">Apalancamiento Operativo</h4>
      <p>Mide qué tan "sensibles" son tus beneficios a un aumento en las ventas. Si tienes muchos costes fijos (mucha maquinaria, poco personal), un pequeño aumento en ventas dispara tus beneficios. ¡Es como una palanca!</p>
    `},{id:"patrimonial",title:"Análisis Patrimonial",content:`
      <h4 style="color:var(--accent-color); margin-bottom:10px;">Fondo de maniobra (FM)</h4>
      <p>Es tu "colchón de seguridad" financiero a corto plazo. Responde a la pregunta: ¿Puedo pagar mis deudas inmediatas con el dinero que tengo o voy a cobrar pronto?</p>
      <p>Se calcula restando a lo que tienes (Activo corriente: caja, clientes...) lo que debes a corto plazo (Pasivo corriente).</p>
      <div class="formula-box">FM = Activo corriente - Pasivo corriente</div>
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
      <p><strong>ROI (Rentabilidad económica):</strong> Mide lo bueno que es tu negocio en sí mismo. "Por cada 100€ que invierto en máquinas y local, ¿cuánto beneficio saco?". No le importa de dónde viene el dinero.</p>
      <div class="formula-box">ROI = (BAII / Activo total) x 100</div>

      <p style="margin-top:15px;"><strong>ROE (Rentabilidad financiera):</strong> Esto es lo que le importa al dueño. "Por cada 100€ de MI bolsillo que puse, ¿cuánto gano?". Aquí sí influye si pediste un préstamo.</p>
      <div class="formula-box">ROE = (Beneficio neto / Patrimonio neto) x 100</div>
    `},{id:"pmm",title:"Periodo medio de maduración (PMM)",content:`
      <p>Es el tiempo que tarda tu dinero en "dar la vuelta".</p>
      <p>Desde que compras una materia prima, la almacenas, la fabricas, la vendes y... ¡finalmente cobras al cliente!</p>
      <p><strong>PMM económico:</strong> Todo el ciclo completo.</p>
      <p><strong>PMM financiero:</strong> Le restas el tiempo que tardas en pagar a tus proveedores. ¡Porque mientras no pagas, ese dinero sigue en tu bolsillo!</p>
      <div class="formula-box">PMM Fin = (PMa + PMf + PMv + PMc) - PMp</div>
    `},{id:"fiscal",title:"Fiscalidad y Amortizaciones",content:`
      <h4 style="color:var(--accent-color); margin-bottom:10px;">IVA</h4>
      <p>Tú eres un recaudador del estado. Cobras IVA cuando vendes (Repercutido) y pagas IVA cuando compras (Soportado). La diferencia es lo que le das a Hacienda.</p>
      
      <h4 style="color:var(--accent-color); margin-top:15px; margin-bottom:10px;">Amortización</h4>
      <p>Tus máquinas pierden valor con el tiempo (se hacen viejas). Contablemente, vamos guardando un poquito de dinero cada año como "gasto" para reflejar esa pérdida de valor.</p>
      <div class="formula-box">Cuota = (Precio compra - Valor residual) / Años de vida</div>
    `}];let F=[],A="",q="exercises";const Q=document.querySelector("#app"),_=()=>{F=H();const e=new Set(F.map(o=>o.category));e.size>0&&(A=Array.from(e)[0]),T()};window.validateExercise=(e,o,i)=>{const n=document.getElementById(`input-${e}`),t=document.getElementById(`feedback-${e}`),a=document.getElementById(`sol-${e}`),s=document.getElementById(`btn-${e}`);if(!n)return;const c=parseFloat(n.value.replace(",","."));let l=!1;if(i==="number"||i==="currency"||i==="percentage"){const u=Number(o),v=Math.max(.1,Math.abs(u*.05));!isNaN(c)&&Math.abs(c-u)<=v&&(l=!0)}else n.value.trim().toLowerCase()===String(o).toLowerCase()&&(l=!0);l?(t.innerHTML='<span style="color: #4ade80; font-weight:bold;">✅ ¡Correcto!</span>',t.classList.remove("hidden"),a.classList.remove("hidden"),s.style.display="none",n.disabled=!0,n.style.borderColor="#4ade80"):(t.innerHTML='<span style="color: #f87171; font-weight:bold;">❌ Incorrecto. Inténtalo de nuevo o revisa la solución.</span>',t.classList.remove("hidden"),n.style.borderColor="#f87171")};const K=()=>{const e=new Set(F.map(o=>o.category));return Array.from(e)},W=()=>F.filter(e=>e.category===A),Y=()=>{const e=K();return`
    <aside id="sidebar">
      <nav style="margin-top: 2rem;">
        <div style="margin-bottom: 2rem;">
            <button class="${q==="theory"?"active":""}" id="btn-theory" style="border: 1px solid var(--accent-color); color: var(--accent-color);">
               🎓 Aula Teórica
            </button>
        </div>

        <div style="margin-bottom:0.5rem; font-size:0.75rem; text-transform:uppercase; color:var(--text-muted); padding-left:10px;">Ejercicios</div>
        ${e.map(o=>`
          <button 
            class="${o===A&&q==="exercises"?"active":""}" 
            data-category="${o}"
          >
            ${o}
          </button>
        `).join("")}
      </nav>
      <div style="margin-top:auto; font-size:0.75rem; color:var(--text-muted); opacity:0.6;">
        v3.4 Professor Mode
      </div>
    </aside>
  `},J=e=>{const o=Object.entries(e.data).map(([t,a])=>`<div><span>${t}</span> <span>${a}</span></div>`).join(""),i=e.valueType==="percentage"?"Ej: 15.5":e.valueType==="currency"?"Ej: 5000":"Resultado",n=e.valueType==="percentage"?"%":e.valueType==="currency"?"€":"";return`
    <div class="exercise-card">
      <div class="exercise-header">
        <span class="exercise-id">${e.id}</span>
        <span class="exercise-category">${e.category}</span>
      </div>
      
      <h3>${e.title}</h3>
      <p class="exercise-question">${e.question}</p>
      
      <div class="exercise-data">
        ${o}
      </div>
      
      <div class="interaction-area" style="margin-top: auto;">
        <div style="display:flex; gap:10px; margin-bottom:10px; align-items:center;">
          <input type="number" id="input-${e.id}" placeholder="${i}" 
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
  `},X=()=>`
    <main>
      <div class="content-wrapper">
        <header>
          <h2>Aula Teórica</h2>
          <p class="intro-text">Repasa los conceptos clave antes de practicar.</p>
        </header>
        
        <div class="exercises-grid" style="grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));">
          ${U.map(e=>`
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
    `,Z=()=>{if(q==="theory")return X();const e=W();return`
    <main>
      <div class="content-wrapper">
        <header>
          <h2>${A}</h2>
          <p class="intro-text">Resuelve ${e.length} retos interactivos.</p>
        </header>
        
        <div class="exercises-grid">
          ${e.map(J).join("")}
        </div>
      </div>
    </main>
  `},T=()=>{Q.innerHTML=`
    ${Y()}
    ${Z()}
  `,document.querySelectorAll("aside nav button[data-category]").forEach(e=>{e.addEventListener("click",o=>{A=o.target.dataset.category||"",q="exercises",T(),document.querySelector("main")?.scrollTo({top:0,behavior:"smooth"})})}),document.getElementById("btn-theory")?.addEventListener("click",()=>{q="theory",T(),document.querySelector("main")?.scrollTo({top:0,behavior:"smooth"})})};_();
