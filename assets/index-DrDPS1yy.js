(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const e of i)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function s(i){const e={};return i.integrity&&(e.integrity=i.integrity),i.referrerPolicy&&(e.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?e.credentials="include":i.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function t(i){if(i.ep)return;i.ep=!0;const e=s(i);fetch(i.href,e)}})();const r=a=>new Intl.NumberFormat("es-ES",{style:"currency",currency:"EUR"}).format(a),v=(a,o=2)=>a.toLocaleString("es-ES",{minimumFractionDigits:o,maximumFractionDigits:o}),d=(a,o)=>Math.floor(Math.random()*(o-a+1))+a,T=(a,o,s=2)=>{const t=(Math.random()*(o-a)+a).toFixed(s);return parseFloat(t)},y=(a,o)=>`${a}-${(o+1).toString().padStart(2,"0")}`,S=a=>{const o=[];for(let s=0;s<a;s++){const t=d(10,200),i=Math.floor(t*(d(30,70)/100)),e=d(100,2e3)*100,n=t-i,l=e/n,c=Math.ceil(l),u=["Una empresa presenta la siguiente estructura de costes. Calcula el Umbral de Rentabilidad (Punto Muerto) en unidades físicas.","Dada la información de costes y precios, determina cuántas unidades debe vender la empresa para empezar a obtener beneficios.","Calcula la cantidad de equilibrio (Q*) para esta empresa basándote en sus costes fijos y margen de contribución.","¿Cuál es el volumen de ventas mínimas (en unidades) necesario para cubrir todos los costes?"],g=u[s%u.length];o.push({id:y("UR",s),category:"Análisis de Costes",title:"Cálculo del Umbral de Rentabilidad",question:g,data:{"Costes Fijos Totales (CF)":r(e),"Precio de Venta Unitario (P)":r(t),"Coste Variable Unitario (CVu)":r(i)},solution:`Q = ${v(c,0)} unidades`,explanation:`Fórmula: Q = CF / (P - CVu)
Q = ${e} / (${t} - ${i}) = ${e} / ${n} = ${v(l,2)}`,correctValue:c,valueType:"number"})}return o},N=a=>{const o=[];for(let s=0;s<a;s++){const t=Math.random()>.5,e=d(50,500)*1e3,n=Math.floor(e*(d(40,70)/100)),l=e-n,c=Math.floor(e*(d(30,60)/100)),u=Math.floor((e-c)*(d(20,50)/100)),g=e-c-u,p=l-g;if(t)o.push({id:y("FM",s),category:"Análisis Patrimonial",title:"Cálculo del Fondo de Maniobra",question:"Calcula el Fondo de Maniobra (FM) de la empresa.",data:{"Activo Corriente":r(l),"Pasivo Corriente":r(g)},solution:`${r(p)}`,explanation:`Fórmula: FM = AC - PC
FM = ${l} - ${g} = ${p}`,correctValue:p,valueType:"currency"});else{const m=["Calcula el Fondo de Maniobra por el método del Patrimonio Neto y Pasivo No Corriente.","Determina el Fondo de Maniobra utilizando la financiación a largo plazo y el activo inmovilizado.","Comprueba la estabilidad financiera calculando el FM desde la perspectiva de los capitales permanentes."],f=m[s%m.length];o.push({id:y("FM-L",s),category:"Análisis Patrimonial",title:"Fondo de Maniobra (Largo Plazo)",question:f,data:{"Patrimonio Neto":r(c),"Pasivo No Corriente":r(u),"Activo No Corriente":r(n)},solution:`${r(p)}`,explanation:`Fórmula: FM = (PN + Provisión Largo Plazo) - ANC
FM = (${c} + ${u}) - ${n} = ${p}`,correctValue:p,valueType:"currency"})}}return o},j=a=>{const o=[];for(let s=0;s<a;s++){const t=d(500,5e3)*100,i=Math.floor(t*(d(40,70)/100)),e=t-i,n=Math.floor(e*.9),l=Math.floor(e*.2),c=d(l/100,n/100)*100,u=e-c,g=e/u,p=["Calcula el Grado de Apalancamiento Operativo (GAO) para esta empresa.","Determina la sensibilidad del beneficio ante cambios en las ventas calculando el Apalancamiento Operativo.","¿Cuál es el GAO de esta compañía dado su nivel actual de ventas y estructura de costes?","Halla el multiplicador del beneficio (Apalancamiento Operativo) para un aumento en las ventas."],m=p[s%p.length];o.push({id:y("AO",s),category:"Análisis de Costes",title:"Apalancamiento Operativo",question:m,data:{Ventas:r(t),"Costes Variables":r(i),"Costes Fijos":r(c)},solution:`AO = ${v(g,2)}`,explanation:`Fórmula: AO = MC / Beneficio
AO = ${e} / ${u} = ${v(g,4)}`,correctValue:g,valueType:"number"})}return o},k=a=>{const o=[],s=["liquidez","tesoreria","disponibilidad","garantia","endeudamiento","calidad_deuda","autonomia"];for(let t=0;t<a;t++){const i=s[t%s.length],e=d(100,1e4),n=d(10,50)*e,l=d(20,80)*e,c=d(30,100)*e,u=n+l+c,g=d(100,500)*e,p=u+g,m=Math.floor(p/d(120,250)*100),f=p-m,$=Math.floor(m*(d(30,80)/100));let h="",P="",M="",C={},x="",b=0;switch(i){case"liquidez":x="Ratio de Liquidez General";const F=["Calcula el Ratio de Liquidez General.","Determina la solvencia a corto plazo mediante el Ratio de Liquidez.","¿Cuál es la capacidad de la empresa para hacer frente a sus deudas a corto plazo con sus activos corrientes?"];h=F[t%F.length],C={"Activo Corriente":r(u),"Pasivo Corriente":r($)},b=u/$,P=v(b,2),M=`Fórmula: AC / PC = ${u} / ${$} = ${b.toFixed(4)}`;break;case"tesoreria":x="Ratio de Tesorería";const I=["Calcula el Ratio de Tesorería (Acid Test).","Halla el coeficiente de tesorería (Acid Test) excluyendo las existencias.","Determina la capacidad de pago inmediata sin contar con la venta de stock (Acid Test)."];h=I[t%I.length],C={Realizable:r(l),Disponible:r(n),"Pasivo Corriente":r($)},b=(l+n)/$,P=v(b,2),M=`Fórmula: (Realizable + Disponible) / PC = (${l} + ${n}) / ${$} = ${b.toFixed(4)}`;break;case"disponibilidad":x="Ratio de Disponibilidad";const E=["Calcula el Ratio de Disponibilidad.","¿Cuál es la disponibilidad inmediata de la empresa frente a sus deudas a corto plazo?","Determina el ratio más exigente de liquidez (Disponibilidad)."];h=E[t%E.length],C={Disponible:r(n),"Pasivo Corriente":r($)},b=n/$,P=v(b,2),M=`Fórmula: Disponible / PC = ${n} / ${$} = ${b.toFixed(4)}`;break;case"garantia":x="Ratio de Garantía";const z=["Calcula el Ratio de Garantía.","Determina la solvencia total o garantía de la empresa frente a terceros.","¿Cuál es la distancia a la quiebra? Calcula el Ratio de Garantía."];h=z[t%z.length],C={"Activo Total":r(p),"Pasivo Total":r(m)},b=p/m,P=v(b,2),M=`Fórmula: Activo Total / Pasivo Total = ${p} / ${m} = ${b.toFixed(4)}`;break;case"endeudamiento":x="Ratio de Endeudamiento";const D=["Calcula el ratio de endeudamiento total.","Determina qué proporción de los recursos totales es financiada por deuda.","¿Cuál es el nivel de dependencia financiera externa (Ratio de Endeudamiento)?"];h=D[t%D.length],C={"Pasivo Total":r(m),"Patrimonio Neto":r(f)},b=m/(f+m),P=v(b,2),M=`Fórmula: Pasivo / (PN + Pasivo) = ${m} / (${f} + ${m}) = ${b.toFixed(4)}`;break;case"calidad_deuda":x="Ratio de Calidad de la Deuda";const O=["Calcula el ratio de Calidad de la Deuda.","¿Qué porcentaje de la deuda total vence a corto plazo? (Calidad de la Deuda).","Analiza la estructura de la deuda calculando su calidad."];h=O[t%O.length],C={"Pasivo Corriente":r($),"Pasivo Total":r(m)},b=$/m,P=v(b,2),M=`Fórmula: Pasivo Corriente / Pasivo Total = ${$} / ${m} = ${b.toFixed(4)}`;break;case"autonomia":x="Ratio de Autonomía Financiera";const L=["Calcula el Ratio de Autonomía Financiera.","Determina la independencia financiera de la empresa."];h=L[t%L.length],C={"Patrimonio Neto":r(f),"Pasivo Total":r(m)},b=f/m,P=v(b,2),M=`Fórmula: PN / Pasivo Total = ${f} / ${m} = ${b.toFixed(4)}`;break}o.push({id:y("RATIO",t),category:"Ratios Financieros y Patrimoniales",title:x,question:h,data:C,solution:P,explanation:M,correctValue:b,valueType:"number"})}return o},w=a=>{const o=[];for(let s=0;s<a;s++){const t=Math.random()>.5,i=d(100,1e3)*1e3,e=Math.floor(i*T(.4,.7)),n=Math.floor(i*T(.8,1.5)),l=Math.floor(n*T(.1,.25)),c=Math.floor(l*T(.1,.3)),g=Math.floor((l-c)*(1-.25));if(t){const p=l/i*100,m=["Calcula la Rentabilidad Económica (ROI).","Determina el rendimiento de los activos totales (ROI) antes de intereses e impuestos.","¿Cuál es la rentabilidad generada por el activo total de la empresa (ROI)?"],f=m[s%m.length];o.push({id:y("ROI",s),category:"Rentabilidad",title:"Cálculo del ROI",question:f,data:{"Activo Total":r(i),BAII:r(l)},solution:`${v(p)} %`,explanation:`Fórmula: (BAII / Activo) x 100
(${l} / ${i}) x 100 = ${v(p,2)} %`,correctValue:p,valueType:"percentage"})}else{const p=g/e*100,m=["Calcula la Rentabilidad Financiera (ROE).","Determina el rendimiento para los accionistas (ROE) basándote en el beneficio neto.","¿Cuál es la rentabilidad de los fondos propios (ROE) de esta empresa?"],f=m[s%m.length];o.push({id:y("ROE",s),category:"Rentabilidad",title:"Cálculo del ROE",question:f,data:{"Patrimonio Neto":r(e),"Beneficio Neto":r(g)},solution:`${v(p)} %`,explanation:`Fórmula: (BN / PN) x 100
(${g} / ${e}) x 100 = ${v(p,2)} %`,correctValue:p,valueType:"percentage"})}}return o},B=a=>{const o=[];for(let s=0;s<a;s++){const t=d(10,500)*1e3,i=Math.floor(t*(d(0,10)/100)),e=d(4,20),n=(t-i)/e,l=["Calcula la cuota de amortización anual lineal para la siguiente máquina.","Determina el gasto anual por depreciación de este activo usando el método lineal.","¿Cuál es la amortización anual contable de este bien según los datos facilitados?","Halla la cuota constante de amortización para este elemento del inmovilizado."],c=l[s%l.length];if(o.push({id:y("AM",s),category:"Gestión del Inmovilizado",title:"Amortización Lineal",question:c,data:{"Valor de Adquisición":r(t),"Valor Residual":r(i),"Vida Útil":`${e} años`},solution:r(n),explanation:`Fórmula: (V.Adq - V.Res) / Vida
(${t} - ${i}) / ${e} = ${v(n,2)}`,correctValue:n,valueType:"currency"}),s%3===0){const u=d(3,8),g=u*(u+1)/2,p=d(10,100)*1e3,m=d(1,u),f=u-m+1,$=p/g*f;o.push({id:y("AM-D",s),category:"Gestión del Inmovilizado",title:"Amortización Números Dígitos",question:`Calcula la cuota de amortización del año ${m} usando el método de números dígitos (decrecientes) para un bien con vida útil de ${u} años y valor amortizable de ${r(p)}.`,data:{"Valor Amortizable":r(p),"Vida Útil":`${u} años`,"Suma Dígitos":`${g}`},solution:r($),explanation:`Cuota = (Valor / Suma) * Dígito
(${p} / ${g}) * ${f} = ${v($,2)}`,correctValue:$,valueType:"currency"})}}return o},G=a=>{const o=[];for(let s=0;s<a;s++)if(Math.random()>.5){const i=d(5e3,5e4),e=d(3e3,45e3),n=i-e,l=n>0?"A PAGAR":"A COMPENSAR/DEVOLVER",c=["Calcula la liquidación trimestral del IVA (Modelo 303).","Determina el resultado de la declaración de IVA a ingresar o devolver.","Halla la cuota final de IVA a pagar a Hacienda (o a compensar) dados los siguientes datos.","Realiza el cálculo del IVA repercutido y soportado para obtener el resultado de la liquidación."],u=c[s%c.length];o.push({id:y("IVA",s),category:"Fiscalidad",title:"Liquidación de IVA",question:u,data:{"IVA Repercutido":r(i),"IVA Soportado":r(e)},solution:`${r(n)} (${l})`,explanation:`${i} - ${e} = ${n}`,correctValue:n,valueType:"currency"})}else{const i=d(1e4,1e6),e=i*.25,n=d(0,5e3),l=d(0,5e3),c=e-n-l,u=["Calcula la Cuota Diferencial del Impuesto sobre Sociedades.","Determina la cantidad final a ingresar o devolver por el Impuesto de Sociedades.","Halla la liquidación final del IS teniendo en cuenta las retenciones y pagos a cuenta."],g=u[s%u.length];o.push({id:y("IS",s),category:"Fiscalidad",title:"Cuota Diferencial IS",question:g,data:{"Base Imponible":r(i),Tipo:"25%",Deducciones:r(n),Retenciones:r(l)},solution:r(c),explanation:`CI=${e} -> CL=${e-n} -> CD=${c}`,correctValue:c,valueType:"currency"})}return o},H=a=>{const o=[],s=["global","almacenamiento","cobro"];for(let t=0;t<a;t++){const i=s[t%s.length];if(i==="global"){const e=d(10,40),n=d(5,20),l=d(10,30),c=d(30,90),u=d(30,90),g=e+n+l+c-u,p=["Calcula el Periodo Medio de Maduración Financiero (PMM).","Determina el ciclo de caja o maduración financiera de la empresa.","¿Cuántos días tarda la empresa en recuperar su inversión desde que paga a proveedores? (Calcula el PMM Financiero).","Halla el PMM Financiero a partir de los periodos medios de almacenamiento, fabricación, venta y pago."],m=p[t%p.length];o.push({id:y("PMM",t),category:"PMM",title:"Periodo Medio de Maduración",question:m,data:{PMa:`${e}`,PMf:`${n}`,PMv:`${l}`,PMc:`${c}`,PMp:`${u}`},solution:`${g} días`,explanation:`PMa+PMf+PMv+PMc - PMp = ${e}+${n}+${l}+${c}-${u} = ${g}`,correctValue:g,valueType:"number"})}else if(i==="almacenamiento"){const e=d(1e4,5e4),n=d(1e3,5e3),c=365/(e/n);o.push({id:y("PMM",t),category:"Análisis Financiero",title:"Cálculo PM Almacenamiento",question:"Calcula el PMa.",data:{Consumo:`${e}`,"Stock medio":`${n}`},solution:`${v(c,2)} días`,explanation:`365 / (Consumo/Stock) = ${v(c,2)}`,correctValue:c,valueType:"number"})}else{const e=d(5e4,2e5),n=d(1e4,4e4),c=365/(e/n);o.push({id:y("PMM",t),category:"Análisis Financiero",title:"Cálculo PM Cobro",question:"Calcula el PMc.",data:{Ventas:`${e}`,"Saldo Clientes":`${n}`},solution:`${v(c,2)} días`,explanation:`365 / (Ventas/Saldo) = ${v(c,2)}`,correctValue:c,valueType:"number"})}}return o},Q=a=>{const o=[];for(let s=0;s<a;s++){const t=d(10,100),i=d(10,50),e=d(10,100),n=d(i+5,i+20),l=t+e,c=t*i+e*n,u=c/l,g=["Calcula el Precio Medio Ponderado (PMP) tras las siguientes operaciones.","Determina el valor de valoración de existencias según el método PMP.","¿Cuál es el precio medio del stock en almacén tras la última compra (PMP)?"],p=g[s%g.length];o.push({id:y("INV",s),category:"Existencias",title:"Precio Medio Ponderado (PMP)",question:p,data:{"Existencia Inicial":`${t} u. a ${r(i)}`,Compra:`${e} u. a ${r(n)}`},solution:r(u),explanation:`PMP = (Valor Total) / (Cantidad Total)
((${t}*${i}) + (${e}*${n})) / (${t}+${e}) = ${c} / ${l} = ${v(u,2)}`,correctValue:u,valueType:"currency"})}return o},U=a=>{const o=[],s=["margin_sales","margin_purchase","commercial","industrial"];for(let t=0;t<a;t++){const i=s[t%s.length],e=d(10,100),n=Math.floor(e*(d(120,200)/100));if(i==="margin_sales"){const l=(n-e)/n*100;o.push({id:y("MAR",t),category:"Márgenes",title:"Margen sobre Ventas",question:"Calcula el porcentaje de margen sobre el precio de venta.",data:{"Precio Venta":r(n),"Coste Producto":r(e)},solution:`${v(l)} %`,explanation:`((Pv - Cp) / Pv) * 100
((${n} - ${e}) / ${n}) * 100 = ${v(l,2)} %`,correctValue:l,valueType:"percentage"})}else if(i==="margin_purchase"){const l=(n-e)/e*100;o.push({id:y("MAR",t),category:"Márgenes",title:"Margen sobre Compras",question:"Calcula el porcentaje de margen sobre el precio de coste (mark-up).",data:{"Precio Venta":r(n),"Coste Producto":r(e)},solution:`${v(l)} %`,explanation:`((Pv - Cp) / Cp) * 100
((${n} - ${e}) / ${e}) * 100 = ${v(l,2)} %`,correctValue:l,valueType:"percentage"})}else if(i==="commercial"){const l=n-e;o.push({id:y("MAR",t),category:"Márgenes",title:"Margen Comercial",question:"Calcula el margen comercial unitario (valor absoluto).",data:{"Precio Venta":r(n),"Coste Producto":r(e)},solution:r(l),explanation:`Pv - Cp = ${n} - ${e} = ${l}`,correctValue:l,valueType:"currency"})}else{const l=d(5e4,2e5),c=Math.floor(l*.6),u=l-c;o.push({id:y("MAR",t),category:"Márgenes",title:"Margen Industrial",question:"Calcula el Margen Industrial de la empresa.",data:{"Ingresos Totales":r(l),"Coste Productos Vendidos":r(c)},solution:r(u),explanation:`Ingresos - Coste Ventas = ${l} - ${c} = ${u}`,correctValue:u,valueType:"currency"})}}return o},_=()=>[...S(20),...j(20),...N(20),...k(20),...w(20),...B(20),...G(20),...H(20),...Q(20),...U(20)],K=[{id:"costes",title:"Análisis de Costes",content:`
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
    `}];let R=[],A="",q="exercises";const W=document.querySelector("#app"),Y=()=>{R=_();const a=new Set(R.map(o=>o.category));a.size>0&&(A=Array.from(a)[0]),V()};window.validateExercise=(a,o,s)=>{const t=document.getElementById(`input-${a}`),i=document.getElementById(`feedback-${a}`),e=document.getElementById(`sol-${a}`),n=document.getElementById(`btn-${a}`);if(!t)return;const l=parseFloat(t.value.replace(",","."));let c=!1;if(s==="number"||s==="currency"||s==="percentage"){const u=Number(o),g=Math.max(.1,Math.abs(u*.05));!isNaN(l)&&Math.abs(l-u)<=g&&(c=!0)}else t.value.trim().toLowerCase()===String(o).toLowerCase()&&(c=!0);c?(i.innerHTML='<span style="color: #4ade80; font-weight:bold;">✅ ¡Correcto!</span>',i.classList.remove("hidden"),e.classList.remove("hidden"),n.style.display="none",t.disabled=!0,t.style.borderColor="#4ade80"):(i.innerHTML='<span style="color: #f87171; font-weight:bold;">❌ Incorrecto. Inténtalo de nuevo o revisa la solución.</span>',i.classList.remove("hidden"),t.style.borderColor="#f87171")};const J=()=>{const a=new Set(R.map(o=>o.category));return Array.from(a)},X=()=>R.filter(a=>a.category===A),Z=()=>{const a=J();return`
    <aside id="sidebar">
      <nav style="margin-top: 2rem;">
        <div style="margin-bottom: 2rem;">
            <button class="${q==="theory"?"active":""}" id="btn-theory" style="border: 1px solid var(--accent-color); color: var(--accent-color);">
               🎓 Aula Teórica
            </button>
        </div>

        <div style="margin-bottom:0.5rem; font-size:0.75rem; text-transform:uppercase; color:var(--text-muted); padding-left:10px;">Ejercicios</div>
        ${a.map(o=>`
          <button 
            class="${o===A&&q==="exercises"?"active":""}" 
            data-category="${o}"
          >
            ${o}
          </button>
        `).join("")}
      </nav>

    </aside>
  `},ee=a=>{const o=Object.entries(a.data).map(([i,e])=>`<div><span>${i}</span> <span>${e}</span></div>`).join(""),s=a.valueType==="percentage"?"Ej: 15.5":a.valueType==="currency"?"Ej: 5000":"Resultado",t=a.valueType==="percentage"?"%":a.valueType==="currency"?"€":"";return`
    <div class="exercise-card">
      <div class="exercise-header">
        <span class="exercise-id">${a.id}</span>
        <span class="exercise-category">${a.category}</span>
      </div>
      
      <h3>${a.title}</h3>
      <p class="exercise-question">${a.question}</p>
      
      <div class="exercise-data">
        ${o}
      </div>
      
      <div class="interaction-area" style="margin-top: auto;">
        <div style="display:flex; gap:10px; margin-bottom:10px; align-items:center;">
          <input type="number" id="input-${a.id}" placeholder="${s}" 
                 style="flex:1; padding:10px; border-radius:6px; border:1px solid rgba(255,255,255,0.1); background:rgba(0,0,0,0.3); color:white; font-family:var(--font-mono);">
          <span style="color:var(--text-secondary)">${t}</span>
        </div>
        
        <button id="btn-${a.id}" class="btn-reveal" 
          onclick="validateExercise('${a.id}', '${a.correctValue}', '${a.valueType}')">
          Comprobar
        </button>
        
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
  `},V=()=>{W.innerHTML=`
    ${Z()}
    ${oe()}
  `,document.querySelectorAll("aside nav button[data-category]").forEach(a=>{a.addEventListener("click",o=>{A=o.target.dataset.category||"",q="exercises",V(),document.querySelector("main")?.scrollTo({top:0,behavior:"smooth"})})}),document.getElementById("btn-theory")?.addEventListener("click",()=>{q="theory",V(),document.querySelector("main")?.scrollTo({top:0,behavior:"smooth"})})};Y();
