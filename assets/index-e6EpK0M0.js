(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerPolicy&&(e.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?e.credentials="include":n.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(n){if(n.ep)return;n.ep=!0;const e=i(n);fetch(n.href,e)}})();const l=a=>new Intl.NumberFormat("es-ES",{style:"currency",currency:"EUR"}).format(a),v=(a,t=2)=>a.toLocaleString("es-ES",{minimumFractionDigits:t,maximumFractionDigits:t}),d=(a,t)=>Math.floor(Math.random()*(t-a+1))+a,T=(a,t,i=2)=>{const o=(Math.random()*(t-a)+a).toFixed(i);return parseFloat(o)},y=(a,t)=>`${a}-${(t+1).toString().padStart(2,"0")}`,O=a=>{const t=[];for(let i=0;i<a;i++){const o=d(10,200),n=Math.floor(o*(d(30,70)/100)),e=d(100,2e3)*100,s=o-n,r=e/s,c=Math.ceil(r),u=["Una empresa presenta la siguiente estructura de costes. Calcula el Umbral de Rentabilidad (Punto Muerto) en unidades físicas.","Dada la información de costes y precios, determina cuántas unidades debe vender la empresa para empezar a obtener beneficios.","Calcula la cantidad de equilibrio (Q*) para esta empresa basándote en sus costes fijos y margen de contribución.","¿Cuál es el volumen de ventas mínimas (en unidades) necesario para cubrir todos los costes?"],g=u[i%u.length];t.push({id:y("UR",i),category:"Análisis de Costes",title:"Cálculo del Umbral de Rentabilidad",question:g,data:{"Costes Fijos Totales (CF)":l(e),"Precio de Venta Unitario (P)":l(o),"Coste Variable Unitario (CVu)":l(n)},solution:`Q = ${v(c,0)} unidades`,explanation:`Fórmula: Q = CF / (P - CVu)
Q = ${e} / (${o} - ${n}) = ${e} / ${s} = ${v(r,2)}`,correctValue:c,valueType:"number"})}return t},N=a=>{const t=[];for(let i=0;i<a;i++){const o=Math.random()>.5,e=d(50,500)*1e3,s=Math.floor(e*(d(40,70)/100)),r=e-s,c=Math.floor(e*(d(30,60)/100)),u=Math.floor((e-c)*(d(20,50)/100)),g=e-c-u,p=r-g;if(o)t.push({id:y("FM",i),category:"Análisis Patrimonial",title:"Cálculo del Fondo de Maniobra",question:"Calcula el Fondo de Maniobra (FM) de la empresa.",data:{"Activo Corriente":l(r),"Pasivo Corriente":l(g)},solution:`${l(p)}`,explanation:`Fórmula: FM = AC - PC
FM = ${r} - ${g} = ${p}`,correctValue:p,valueType:"currency"});else{const m=["Calcula el Fondo de Maniobra por el método del Patrimonio Neto y Pasivo No Corriente.","Determina el Fondo de Maniobra utilizando la financiación a largo plazo y el activo inmovilizado.","Comprueba la estabilidad financiera calculando el FM desde la perspectiva de los capitales permanentes."],$=m[i%m.length];t.push({id:y("FM-L",i),category:"Análisis Patrimonial",title:"Fondo de Maniobra (Largo Plazo)",question:$,data:{"Patrimonio Neto":l(c),"Pasivo No Corriente":l(u),"Activo No Corriente":l(s)},solution:`${l(p)}`,explanation:`Fórmula: FM = (PN + Provisión Largo Plazo) - ANC
FM = (${c} + ${u}) - ${s} = ${p}`,correctValue:p,valueType:"currency"})}}return t},k=a=>{const t=[];for(let i=0;i<a;i++){const o=d(500,5e3)*100,n=Math.floor(o*(d(40,70)/100)),e=o-n,s=Math.floor(e*.9),r=Math.floor(e*.2),c=d(r/100,s/100)*100,u=e-c,g=e/u,p=["Calcula el Grado de Apalancamiento Operativo (GAO) para esta empresa.","Determina la sensibilidad del beneficio ante cambios en las ventas calculando el Apalancamiento Operativo.","¿Cuál es el GAO de esta compañía dado su nivel actual de ventas y estructura de costes?","Halla el multiplicador del beneficio (Apalancamiento Operativo) para un aumento en las ventas."],m=p[i%p.length];t.push({id:y("AO",i),category:"Análisis de Costes",title:"Apalancamiento Operativo",question:m,data:{Ventas:l(o),"Costes Variables":l(n),"Costes Fijos":l(c)},solution:`AO = ${v(g,2)}`,explanation:`Fórmula: AO = MC / Beneficio
AO = ${e} / ${u} = ${v(g,4)}`,correctValue:g,valueType:"number"})}return t},j=a=>{const t=[],i=["liquidez","tesoreria","disponibilidad","garantia","endeudamiento","calidad_deuda","autonomia"];for(let o=0;o<a;o++){const n=i[o%i.length],e=d(100,1e4),s=d(10,50)*e,r=d(20,80)*e,c=d(30,100)*e,u=s+r+c,g=d(100,500)*e,p=u+g,m=Math.floor(p/d(120,250)*100),$=p-m,f=Math.floor(m*(d(30,80)/100));let h="",P="",M="",C={},x="",b=0;switch(n){case"liquidez":x="Ratio de Liquidez General";const V=["Calcula el Ratio de Liquidez General.","Determina la solvencia a corto plazo mediante el Ratio de Liquidez.","¿Cuál es la capacidad de la empresa para hacer frente a sus deudas a corto plazo con sus activos corrientes?"];h=V[o%V.length],C={"Activo Corriente":l(u),"Pasivo Corriente":l(f)},b=u/f,P=v(b,2),M=`Fórmula: AC / PC = ${u} / ${f} = ${b.toFixed(4)}`;break;case"tesoreria":x="Ratio de Tesorería";const F=["Calcula el Ratio de Tesorería (Acid Test).","Halla el coeficiente de tesorería (Acid Test) excluyendo las existencias.","Determina la capacidad de pago inmediata sin contar con la venta de stock (Acid Test)."];h=F[o%F.length],C={Realizable:l(r),Disponible:l(s),"Pasivo Corriente":l(f)},b=(r+s)/f,P=v(b,2),M=`Fórmula: (Realizable + Disponible) / PC = (${r} + ${s}) / ${f} = ${b.toFixed(4)}`;break;case"disponibilidad":x="Ratio de Disponibilidad";const E=["Calcula el Ratio de Disponibilidad.","¿Cuál es la disponibilidad inmediata de la empresa frente a sus deudas a corto plazo?","Determina el ratio más exigente de liquidez (Disponibilidad)."];h=E[o%E.length],C={Disponible:l(s),"Pasivo Corriente":l(f)},b=s/f,P=v(b,2),M=`Fórmula: Disponible / PC = ${s} / ${f} = ${b.toFixed(4)}`;break;case"garantia":x="Ratio de Garantía";const L=["Calcula el Ratio de Garantía.","Determina la solvencia total o garantía de la empresa frente a terceros.","¿Cuál es la distancia a la quiebra? Calcula el Ratio de Garantía."];h=L[o%L.length],C={"Activo Total":l(p),"Pasivo Total":l(m)},b=p/m,P=v(b,2),M=`Fórmula: Activo Total / Pasivo Total = ${p} / ${m} = ${b.toFixed(4)}`;break;case"endeudamiento":x="Ratio de Endeudamiento";const S=["Calcula el ratio de endeudamiento total.","Determina qué proporción de los recursos totales es financiada por deuda.","¿Cuál es el nivel de dependencia financiera externa (Ratio de Endeudamiento)?"];h=S[o%S.length],C={"Pasivo Total":l(m),"Patrimonio Neto":l($)},b=m/($+m),P=v(b,2),M=`Fórmula: Pasivo / (PN + Pasivo) = ${m} / (${$} + ${m}) = ${b.toFixed(4)}`;break;case"calidad_deuda":x="Ratio de Calidad de la Deuda";const z=["Calcula el ratio de Calidad de la Deuda.","¿Qué porcentaje de la deuda total vence a corto plazo? (Calidad de la Deuda).","Analiza la estructura de la deuda calculando su calidad."];h=z[o%z.length],C={"Pasivo Corriente":l(f),"Pasivo Total":l(m)},b=f/m,P=v(b,2),M=`Fórmula: Pasivo Corriente / Pasivo Total = ${f} / ${m} = ${b.toFixed(4)}`;break;case"autonomia":x="Ratio de Autonomía Financiera";const D=["Calcula el Ratio de Autonomía Financiera.","Determina la independencia financiera de la empresa."];h=D[o%D.length],C={"Patrimonio Neto":l($),"Pasivo Total":l(m)},b=$/m,P=v(b,2),M=`Fórmula: PN / Pasivo Total = ${$} / ${m} = ${b.toFixed(4)}`;break}t.push({id:y("RATIO",o),category:"Ratios Financieros y Patrimoniales",title:x,question:h,data:C,solution:P,explanation:M,correctValue:b,valueType:"number"})}return t},w=a=>{const t=[];for(let i=0;i<a;i++){const o=Math.random()>.5,n=d(100,1e3)*1e3,e=Math.floor(n*T(.4,.7)),s=Math.floor(n*T(.8,1.5)),r=Math.floor(s*T(.1,.25)),c=Math.floor(r*T(.1,.3)),g=Math.floor((r-c)*(1-.25));if(o){const p=r/n*100,m=["Calcula la Rentabilidad Económica (ROI).","Determina el rendimiento de los activos totales (ROI) antes de intereses e impuestos.","¿Cuál es la rentabilidad generada por el activo total de la empresa (ROI)?"],$=m[i%m.length];t.push({id:y("ROI",i),category:"Rentabilidad",title:"Cálculo del ROI",question:$,data:{"Activo Total":l(n),BAII:l(r)},solution:`${v(p)} %`,explanation:`Fórmula: (BAII / Activo) x 100
(${r} / ${n}) x 100 = ${v(p,2)} %`,correctValue:p,valueType:"percentage"})}else{const p=g/e*100,m=["Calcula la Rentabilidad Financiera (ROE).","Determina el rendimiento para los accionistas (ROE) basándote en el beneficio neto.","¿Cuál es la rentabilidad de los fondos propios (ROE) de esta empresa?"],$=m[i%m.length];t.push({id:y("ROE",i),category:"Rentabilidad",title:"Cálculo del ROE",question:$,data:{"Patrimonio Neto":l(e),"Beneficio Neto":l(g)},solution:`${v(p)} %`,explanation:`Fórmula: (BN / PN) x 100
(${g} / ${e}) x 100 = ${v(p,2)} %`,correctValue:p,valueType:"percentage"})}}return t},B=a=>{const t=[];for(let i=0;i<a;i++){const o=d(10,500)*1e3,n=Math.floor(o*(d(0,10)/100)),e=d(4,20),s=(o-n)/e,r=["Calcula la cuota de amortización anual lineal para la siguiente máquina.","Determina el gasto anual por depreciación de este activo usando el método lineal.","¿Cuál es la amortización anual contable de este bien según los datos facilitados?","Halla la cuota constante de amortización para este elemento del inmovilizado."],c=r[i%r.length];if(t.push({id:y("AM",i),category:"Gestión del Inmovilizado",title:"Amortización Lineal",question:c,data:{"Valor de Adquisición":l(o),"Valor Residual":l(n),"Vida Útil":`${e} años`},solution:l(s),explanation:`Fórmula: (V.Adq - V.Res) / Vida
(${o} - ${n}) / ${e} = ${v(s,2)}`,correctValue:s,valueType:"currency"}),i%3===0){const u=d(3,8),g=u*(u+1)/2,p=d(10,100)*1e3,m=d(1,u),$=u-m+1,f=p/g*$;t.push({id:y("AM-D",i),category:"Gestión del Inmovilizado",title:"Amortización Números Dígitos",question:`Calcula la cuota de amortización del año ${m} usando el método de números dígitos (decrecientes) para un bien con vida útil de ${u} años y valor amortizable de ${l(p)}.`,data:{"Valor Amortizable":l(p),"Vida Útil":`${u} años`,"Suma Dígitos":`${g}`},solution:l(f),explanation:`Cuota = (Valor / Suma) * Dígito
(${p} / ${g}) * ${$} = ${v(f,2)}`,correctValue:f,valueType:"currency"})}}return t},G=a=>{const t=[];for(let i=0;i<a;i++)if(Math.random()>.5){const n=d(5e3,5e4),e=d(3e3,45e3),s=n-e,r=s>0?"A PAGAR":"A COMPENSAR/DEVOLVER",c=["Calcula la liquidación trimestral del IVA (Modelo 303).","Determina el resultado de la declaración de IVA a ingresar o devolver.","Halla la cuota final de IVA a pagar a Hacienda (o a compensar) dados los siguientes datos.","Realiza el cálculo del IVA repercutido y soportado para obtener el resultado de la liquidación."],u=c[i%c.length];t.push({id:y("IVA",i),category:"Fiscalidad",title:"Liquidación de IVA",question:u,data:{"IVA Repercutido":l(n),"IVA Soportado":l(e)},solution:`${l(s)} (${r})`,explanation:`${n} - ${e} = ${s}`,correctValue:s,valueType:"currency"})}else{const n=d(1e4,1e6),e=n*.25,s=d(0,5e3),r=d(0,5e3),c=e-s-r,u=["Calcula la Cuota Diferencial del Impuesto sobre Sociedades.","Determina la cantidad final a ingresar o devolver por el Impuesto de Sociedades.","Halla la liquidación final del IS teniendo en cuenta las retenciones y pagos a cuenta."],g=u[i%u.length];t.push({id:y("IS",i),category:"Fiscalidad",title:"Cuota Diferencial IS",question:g,data:{"Base Imponible":l(n),Tipo:"25%",Deducciones:l(s),Retenciones:l(r)},solution:l(c),explanation:`CI=${e} -> CL=${e-s} -> CD=${c}`,correctValue:c,valueType:"currency"})}return t},H=a=>{const t=[],i=["global","almacenamiento","cobro"];for(let o=0;o<a;o++){const n=i[o%i.length];if(n==="global"){const e=d(10,40),s=d(5,20),r=d(10,30),c=d(30,90),u=d(30,90),g=e+s+r+c-u,p=["Calcula el Periodo Medio de Maduración Financiero (PMM).","Determina el ciclo de caja o maduración financiera de la empresa.","¿Cuántos días tarda la empresa en recuperar su inversión desde que paga a proveedores? (Calcula el PMM Financiero).","Halla el PMM Financiero a partir de los periodos medios de almacenamiento, fabricación, venta y pago."],m=p[o%p.length];t.push({id:y("PMM",o),category:"PMM",title:"Periodo Medio de Maduración",question:m,data:{PMa:`${e}`,PMf:`${s}`,PMv:`${r}`,PMc:`${c}`,PMp:`${u}`},solution:`${g} días`,explanation:`PMa+PMf+PMv+PMc - PMp = ${e}+${s}+${r}+${c}-${u} = ${g}`,correctValue:g,valueType:"number"})}else if(n==="almacenamiento"){const e=d(1e4,5e4),s=d(1e3,5e3),c=365/(e/s);t.push({id:y("PMM",o),category:"Análisis Financiero",title:"Cálculo PM Almacenamiento",question:"Calcula el PMa.",data:{Consumo:`${e}`,"Stock medio":`${s}`},solution:`${v(c,2)} días`,explanation:`365 / (Consumo/Stock) = ${v(c,2)}`,correctValue:c,valueType:"number"})}else{const e=d(5e4,2e5),s=d(1e4,4e4),c=365/(e/s);t.push({id:y("PMM",o),category:"Análisis Financiero",title:"Cálculo PM Cobro",question:"Calcula el PMc.",data:{Ventas:`${e}`,"Saldo Clientes":`${s}`},solution:`${v(c,2)} días`,explanation:`365 / (Ventas/Saldo) = ${v(c,2)}`,correctValue:c,valueType:"number"})}}return t},Q=a=>{const t=[];for(let i=0;i<a;i++){const o=d(10,100),n=d(10,50),e=d(10,100),s=d(n+5,n+20),r=o+e,c=o*n+e*s,u=c/r,g=["Calcula el Precio Medio Ponderado (PMP) tras las siguientes operaciones.","Determina el valor de valoración de existencias según el método PMP.","¿Cuál es el precio medio del stock en almacén tras la última compra (PMP)?"],p=g[i%g.length];t.push({id:y("INV",i),category:"Existencias",title:"Precio Medio Ponderado (PMP)",question:p,data:{"Existencia Inicial":`${o} u. a ${l(n)}`,Compra:`${e} u. a ${l(s)}`},solution:l(u),explanation:`PMP = (Valor Total) / (Cantidad Total)
((${o}*${n}) + (${e}*${s})) / (${o}+${e}) = ${c} / ${r} = ${v(u,2)}`,correctValue:u,valueType:"currency"})}return t},U=a=>{const t=[],i=["margin_sales","margin_purchase","commercial","industrial"];for(let o=0;o<a;o++){const n=i[o%i.length],e=d(10,100),s=Math.floor(e*(d(120,200)/100));if(n==="margin_sales"){const r=(s-e)/s*100;t.push({id:y("MAR",o),category:"Márgenes",title:"Margen sobre Ventas",question:"Calcula el porcentaje de margen sobre el precio de venta.",data:{"Precio Venta":l(s),"Coste Producto":l(e)},solution:`${v(r)} %`,explanation:`((Pv - Cp) / Pv) * 100
((${s} - ${e}) / ${s}) * 100 = ${v(r,2)} %`,correctValue:r,valueType:"percentage"})}else if(n==="margin_purchase"){const r=(s-e)/e*100;t.push({id:y("MAR",o),category:"Márgenes",title:"Margen sobre Compras",question:"Calcula el porcentaje de margen sobre el precio de coste (mark-up).",data:{"Precio Venta":l(s),"Coste Producto":l(e)},solution:`${v(r)} %`,explanation:`((Pv - Cp) / Cp) * 100
((${s} - ${e}) / ${e}) * 100 = ${v(r,2)} %`,correctValue:r,valueType:"percentage"})}else if(n==="commercial"){const r=s-e;t.push({id:y("MAR",o),category:"Márgenes",title:"Margen Comercial",question:"Calcula el margen comercial unitario (valor absoluto).",data:{"Precio Venta":l(s),"Coste Producto":l(e)},solution:l(r),explanation:`Pv - Cp = ${s} - ${e} = ${r}`,correctValue:r,valueType:"currency"})}else{const r=d(5e4,2e5),c=Math.floor(r*.6),u=r-c;t.push({id:y("MAR",o),category:"Márgenes",title:"Margen Industrial",question:"Calcula el Margen Industrial de la empresa.",data:{"Ingresos Totales":l(r),"Coste Productos Vendidos":l(c)},solution:l(u),explanation:`Ingresos - Coste Ventas = ${r} - ${c} = ${u}`,correctValue:u,valueType:"currency"})}}return t},_=()=>[...O(20),...k(20),...N(20),...j(20),...w(20),...B(20),...G(20),...H(20),...Q(20),...U(20)],K=[{id:"costes",title:"Análisis de Costes",content:`
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
    `}];let I=[],A="",q="exercises";const W=document.querySelector("#app"),Y=()=>{I=_();const a=new Set(I.map(t=>t.category));a.size>0&&(A=Array.from(a)[0]),R()};window.validateExercise=(a,t,i)=>{const o=document.getElementById(`input-${a}`),n=document.getElementById(`feedback-${a}`),e=document.getElementById(`sol-${a}`),s=document.getElementById(`btn-${a}`),r=document.getElementById(`btn-sol-${a}`);if(!o)return;const c=parseFloat(o.value.replace(",","."));let u=!1;if(i==="number"||i==="currency"||i==="percentage"){const g=Number(t),p=Math.max(.1,Math.abs(g*.05));!isNaN(c)&&Math.abs(c-g)<=p&&(u=!0)}else o.value.trim().toLowerCase()===String(t).toLowerCase()&&(u=!0);u?(n.innerHTML='<span style="color: #4ade80; font-weight:bold;">✅ ¡Correcto!</span>',n.classList.remove("hidden"),e.classList.remove("hidden"),s.style.display="none",r&&(r.style.display="none"),o.disabled=!0,o.style.borderColor="#4ade80"):(n.innerHTML='<span style="color: #f87171; font-weight:bold;">❌ Incorrecto. Inténtalo de nuevo o revisa la solución.</span>',n.classList.remove("hidden"),o.style.borderColor="#f87171",r&&(r.classList.remove("hidden"),r.style.display="inline-block"))};window.showSolution=a=>{const t=document.getElementById(`sol-${a}`),i=document.getElementById(`btn-${a}`),o=document.getElementById(`btn-sol-${a}`),n=document.getElementById(`feedback-${a}`),e=document.getElementById(`input-${a}`);t.classList.remove("hidden"),i&&(i.style.display="none"),o&&(o.style.display="none"),e&&(e.disabled=!0),n.innerHTML='<span style="color: #3b82f6; font-weight:bold;">ℹ️ Solución Revelada</span>',n.classList.remove("hidden")};const J=()=>{const a=new Set(I.map(t=>t.category));return Array.from(a)},X=()=>I.filter(a=>a.category===A),Z=()=>{const a=J();return`
    <aside id="sidebar">
      <nav style="margin-top: 2rem;">
        <div style="margin-bottom: 2rem;">
            <button class="${q==="theory"?"active":""}" id="btn-theory" style="border: 1px solid var(--accent-color); color: var(--accent-color);">
               🎓 Aula Teórica
            </button>
        </div>

        <div style="margin-bottom:0.5rem; font-size:0.75rem; text-transform:uppercase; color:var(--text-muted); padding-left:10px;">Ejercicios</div>
        ${a.map(t=>`
          <button 
            class="${t===A&&q==="exercises"?"active":""}" 
            data-category="${t}"
          >
            ${t}
          </button>
        `).join("")}
      </nav>

    </aside>
  `},ee=a=>{const t=Object.entries(a.data).map(([n,e])=>`<div><span>${n}</span> <span>${e}</span></div>`).join(""),i=a.valueType==="percentage"?"Ej: 15.5":a.valueType==="currency"?"Ej: 5000":"Resultado",o=a.valueType==="percentage"?"%":a.valueType==="currency"?"€":"";return`
    <div class="exercise-card">
      <div class="exercise-header">
        <span class="exercise-id">${a.id}</span>
        <span class="exercise-category">${a.category}</span>
      </div>
      
      <h3>${a.title}</h3>
      <p class="exercise-question">${a.question}</p>
      
      <div class="exercise-data">
        ${t}
      </div>
      
      <div class="interaction-area" style="margin-top: auto;">
        <div style="display:flex; gap:10px; margin-bottom:10px; align-items:center;">
          <input type="number" id="input-${a.id}" placeholder="${i}" 
                 style="flex:1; padding:10px; border-radius:6px; border:1px solid rgba(255,255,255,0.1); background:rgba(0,0,0,0.3); color:white; font-family:var(--font-mono);">
          <span style="color:var(--text-secondary)">${o}</span>
        </div>
        
        <div style="display: flex; gap: 10px;">
            <button id="btn-${a.id}" class="btn-reveal" 
              onclick="validateExercise('${a.id}', '${a.correctValue}', '${a.valueType}')">
              Comprobar
            </button>
            <button id="btn-sol-${a.id}" class="btn-reveal hidden" style="background-color: var(--text-muted);"
              onclick="showSolution('${a.id}')">
              Ver Solución
            </button>
        </div>
        
        <div id="feedback-${a.id}" class="hidden" style="margin-top:10px; font-size:0.9rem;"></div>
        
        <div id="sol-${a.id}" class="solution-content hidden">
          <div class="solution-val">${a.solution}</div>
          ${a.explanation?`<div class="solution-expl">${a.explanation}</div>`:""}
        </div>
      </div>
    </div>
  `},ae=()=>`
    <main>
      <div class="content-wrapper">
        <header>
          <h2>Aula Teórica</h2>
          <p class="intro-text">Repasa los conceptos clave antes de practicar.</p>
        </header>
        
        <div class="exercises-grid" style="grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));">
          ${K.map(a=>`
            <div class="exercise-card" style="border-color: rgba(6, 182, 212, 0.4);">
              <h3>${a.title}</h3>
              <div style="color: var(--text-secondary); line-height: 1.6;">
                ${a.content}
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </main>
    `,oe=()=>{if(q==="theory")return ae();const a=X();return`
    <main>
      <div class="content-wrapper">
        <header>
          <h2>${A}</h2>
          <p class="intro-text">Resuelve ${a.length} retos interactivos.</p>
        </header>
        
        <div class="exercises-grid">
          ${a.map(ee).join("")}
        </div>
      </div>
    </main>
  `},R=()=>{W.innerHTML=`
    ${Z()}
    ${oe()}
  `,document.querySelectorAll("aside nav button[data-category]").forEach(a=>{a.addEventListener("click",t=>{A=t.target.dataset.category||"",q="exercises",R(),document.querySelector("main")?.scrollTo({top:0,behavior:"smooth"})})}),document.getElementById("btn-theory")?.addEventListener("click",()=>{q="theory",R(),document.querySelector("main")?.scrollTo({top:0,behavior:"smooth"})})};Y();
