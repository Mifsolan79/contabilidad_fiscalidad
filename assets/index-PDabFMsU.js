(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();const l=e=>new Intl.NumberFormat("es-ES",{style:"currency",currency:"EUR"}).format(e),v=(e,o=2)=>e.toLocaleString("es-ES",{minimumFractionDigits:o,maximumFractionDigits:o}),u=(e,o)=>Math.floor(Math.random()*(o-e+1))+e,I=(e,o,n=2)=>{const t=(Math.random()*(o-e)+e).toFixed(n);return parseFloat(t)},f=(e,o)=>`${e}-${(o+1).toString().padStart(2,"0")}`,k=["TecnoAccesorios S.L.","Innovaciones Textiles S.A.","Logística Rápida S.L.","Construcciones Modernas S.A.","Alimentos del Sur S.L.","Muebles de Diseño S.A.","Componentes Electrónicos S.L.","Servicios Digitales S.A.","Transportes Eco S.L.","BioFarmacéutica S.A.","Energías Renovables S.L.","Moda Urbana S.A.","Consultoría Estratégica S.L.","Robótica Avanzada S.A.","Bebidas Refrescantes S.L."],j=["dedicada a la fabricación de componentes especializados","que opera en el sector textil de alta gama","especializada en distribución logística nacional","referente en el sector de la construcción sostenible","productora de alimentos ecológicos","diseñadora de mobiliario de oficina ergonómico","proveedora de soluciones tecnológicas integrales","líder en servicios de marketing digital","pionera en transporte ecológico de mercancías","laboratorio de referencia en el sector farmacéutico"],B=["desea analizar su viabilidad financiera para el próximo trimestre.","está planificando su estrategia de precios para el año entrante.","necesita evaluar el impacto de sus costes en la rentabilidad actual.","ha solicitado un informe financiero detallado a su departamento contable.","está en proceso de expansión y requiere un análisis de sus márgenes.","quiere revisar su estructura de costes tras los últimos cambios de mercado."],w=["Tras un estudio de costes, el departamento financiero ha extraído la siguiente información:","A partir de los datos contables del último ejercicio, se presenta el siguiente resumen:","La dirección ha facilitado los siguientes datos económicos para su análisis:","El balance de situación y la cuenta de resultados arrojan las siguientes cifras:","Para realizar el cálculo solicitado, disponemos de la siguiente información detallada:"],h=()=>{const e=k[Math.floor(Math.random()*k.length)],o=j[Math.floor(Math.random()*j.length)],n=B[Math.floor(Math.random()*B.length)],t=w[Math.floor(Math.random()*w.length)];return`La empresa "${e}", ${o}, ${n} ${t}`},H=e=>{const o=[];for(let n=0;n<e;n++){const t=u(10,200),s=Math.floor(t*(u(30,70)/100)),a=u(100,2e3)*100,i=t-s,r=a/i,d=Math.ceil(r),c=["Calcula el Umbral de Rentabilidad (Punto Muerto) en unidades físicas.","Determina la cantidad de equilibrio (Q*) para esta empresa basándote en su estructura de costes.","¿Cuántas unidades debe vender la empresa para empezar a obtener beneficios?","Halla el volumen de ventas necesario para cubrir todos los costes (Punto Muerto)."],g=c[n%c.length],p=`${h()} ${g}`;o.push({id:f("UR",n),category:"Análisis de Costes",title:"Cálculo del Umbral de Rentabilidad",question:p,data:{"Costes Fijos Totales (CF)":l(a),"Precio de Venta Unitario (P)":l(t),"Coste Variable Unitario (CVu)":l(s)},solution:`Q = ${v(d,0)} unidades`,explanation:`Fórmula: Q = CF / (P - CVu)
Q = ${a} / (${t} - ${s}) = ${a} / ${i} = ${v(r,2)}`,correctValue:d,valueType:"number"})}return o},G=e=>{const o=[];for(let n=0;n<e;n++){const t=Math.random()>.5,a=u(50,500)*1e3,i=Math.floor(a*(u(40,70)/100)),r=a-i,d=Math.floor(a*(u(30,60)/100)),c=Math.floor((a-d)*(u(20,50)/100)),g=a-d-c,m=r-g;if(t){const b=`${h()} Calculus el Fondo de Maniobra (FM) de la empresa.`;o.push({id:f("FM",n),category:"Análisis Patrimonial",title:"Cálculo del Fondo de Maniobra",question:b,data:{"Activo Corriente":l(r),"Pasivo Corriente":l(g)},solution:`${l(m)}`,explanation:`Fórmula: FM = AC - PC
FM = ${r} - ${g} = ${m}`,correctValue:m,valueType:"currency"})}else{const p=h(),b=["Calcula el Fondo de Maniobra por el método del Patrimonio Neto y Pasivo No Corriente.","Determina el Fondo de Maniobra utilizando la financiación a largo plazo y el activo inmovilizado.","Comprueba la estabilidad financiera calculando el FM desde la perspectiva de los capitales permanentes."],$=`${p} ${b[n%b.length]}`;o.push({id:f("FM-L",n),category:"Análisis Patrimonial",title:"Fondo de Maniobra (Largo Plazo)",question:$,data:{"Patrimonio Neto":l(d),"Pasivo No Corriente":l(c),"Activo No Corriente":l(i)},solution:`${l(m)}`,explanation:`Fórmula: FM = (PN + Provisión Largo Plazo) - ANC
FM = (${d} + ${c}) - ${i} = ${m}`,correctValue:m,valueType:"currency"})}}return o},Q=e=>{const o=[];for(let n=0;n<e;n++){const t=u(500,5e3)*100,s=Math.floor(t*(u(40,70)/100)),a=t-s,i=Math.floor(a*.9),r=Math.floor(a*.2),d=u(r/100,i/100)*100,c=a-d,g=a/c,m=["Calcula el Grado de Apalancamiento Operativo (GAO) para esta empresa.","Determina la sensibilidad del beneficio ante cambios en las ventas calculando el Apalancamiento Operativo.","¿Cuál es el GAO de esta compañía dado su nivel actual de ventas y estructura de costes?","Halla el multiplicador del beneficio (Apalancamiento Operativo) para un aumento en las ventas."],b=`${h()} ${m[n%m.length]}`;o.push({id:f("AO",n),category:"Análisis de Costes",title:"Apalancamiento Operativo",question:b,data:{Ventas:l(t),"Costes Variables":l(s),"Costes Fijos":l(d)},solution:`AO = ${v(g,2)}`,explanation:`Fórmula: AO = MC / Beneficio
AO = ${a} / ${c} = ${v(g,4)}`,correctValue:g,valueType:"number"})}return o},U=e=>{const o=[],n=["liquidez","tesoreria","disponibilidad","garantia","endeudamiento","calidad_deuda","autonomia"];for(let t=0;t<e;t++){const s=n[t%n.length],a=u(100,1e4),i=u(10,50)*a,r=u(20,80)*a,d=u(30,100)*a,c=i+r+d,g=u(100,500)*a,m=c+g,p=Math.floor(m/u(120,250)*100),b=m-p,$=Math.floor(p*(u(30,80)/100));let M="";const q=h();let P="",C="",x={},A="",y=0;switch(s){case"liquidez":A="Ratio de Liquidez General";const F=["Calcula el Ratio de Liquidez General.","Determina la solvencia a corto plazo mediante el Ratio de Liquidez.","¿Cuál es la capacidad de la empresa para hacer frente a sus deudas a corto plazo con sus activos corrientes?"];M=`${q} ${F[t%F.length]}`,x={"Activo Corriente":l(c),"Pasivo Corriente":l($)},y=c/$,P=v(y,2),C=`Fórmula: AC / PC = ${c} / ${$} = ${y.toFixed(4)}`;break;case"tesoreria":A="Ratio de Tesorería";const S=["Calcula el Ratio de Tesorería (Acid Test).","Halla el coeficiente de tesorería (Acid Test) excluyendo las existencias.","Determina la capacidad de pago inmediata sin contar con la venta de stock (Acid Test)."];M=`${q} ${S[t%S.length]}`,x={Realizable:l(r),Disponible:l(i),"Pasivo Corriente":l($)},y=(r+i)/$,P=v(y,2),C=`Fórmula: (Realizable + Disponible) / PC = (${r} + ${i}) / ${$} = ${y.toFixed(4)}`;break;case"disponibilidad":A="Ratio de Disponibilidad";const L=["Calcula el Ratio de Disponibilidad.","¿Cuál es la disponibilidad inmediata de la empresa frente a sus deudas a corto plazo?","Determina el ratio más exigente de liquidez (Disponibilidad)."];M=`${q} ${L[t%L.length]}`,x={Disponible:l(i),"Pasivo Corriente":l($)},y=i/$,P=v(y,2),C=`Fórmula: Disponible / PC = ${i} / ${$} = ${y.toFixed(4)}`;break;case"garantia":A="Ratio de Garantía";const z=["Calcula el Ratio de Garantía.","Determina la solvencia total o garantía de la empresa frente a terceros.","¿Cuál es la distancia a la quiebra? Calcula el Ratio de Garantía."];M=`${q} ${z[t%z.length]}`,x={"Activo Total":l(m),"Pasivo Total":l(p)},y=m/p,P=v(y,2),C=`Fórmula: Activo Total / Pasivo Total = ${m} / ${p} = ${y.toFixed(4)}`;break;case"endeudamiento":A="Ratio de Endeudamiento";const D=["Calcula el ratio de endeudamiento total.","Determina qué proporción de los recursos totales es financiada por deuda.","¿Cuál es el nivel de dependencia financiera externa (Ratio de Endeudamiento)?"];M=`${q} ${D[t%D.length]}`,x={"Pasivo Total":l(p),"Patrimonio Neto":l(b)},y=p/(b+p),P=v(y,2),C=`Fórmula: Pasivo / (PN + Pasivo) = ${p} / (${b} + ${p}) = ${y.toFixed(4)}`;break;case"calidad_deuda":A="Ratio de Calidad de la Deuda";const O=["Calcula el ratio de Calidad de la Deuda.","¿Qué porcentaje de la deuda total vence a corto plazo? (Calidad de la Deuda).","Analiza la estructura de la deuda calculando su calidad."];M=`${q} ${O[t%O.length]}`,x={"Pasivo Corriente":l($),"Pasivo Total":l(p)},y=$/p,P=v(y,2),C=`Fórmula: Pasivo Corriente / Pasivo Total = ${$} / ${p} = ${y.toFixed(4)}`;break;case"autonomia":A="Ratio de Autonomía Financiera";const N=["Calcula el Ratio de Autonomía Financiera.","Determina la independencia financiera de la empresa."];M=`${q} ${N[t%N.length]}`,x={"Patrimonio Neto":l(b),"Pasivo Total":l(p)},y=b/p,P=v(y,2),C=`Fórmula: PN / Pasivo Total = ${b} / ${p} = ${y.toFixed(4)}`;break}o.push({id:f("RATIO",t),category:"Ratios Financieros y Patrimoniales",title:A,question:M,data:x,solution:P,explanation:C,correctValue:y,valueType:"number"})}return o},_=e=>{const o=[];for(let n=0;n<e;n++){const t=Math.random()>.5,s=h(),a=u(100,1e3)*1e3,i=Math.floor(a*I(.4,.7)),r=Math.floor(a*I(.8,1.5)),d=Math.floor(r*I(.1,.25)),c=Math.floor(d*I(.1,.3)),m=Math.floor((d-c)*(1-.25));if(t){const p=d/a*100,b=["Calcula la Rentabilidad Económica (ROI).","Determina el rendimiento de los activos totales (ROI) antes de intereses e impuestos.","¿Cuál es la rentabilidad generada por el activo total de la empresa (ROI)?"],$=`${s} ${b[n%b.length]}`;o.push({id:f("ROI",n),category:"Rentabilidad",title:"Cálculo del ROI",question:$,data:{"Activo Total":l(a),BAII:l(d)},solution:`${v(p)} %`,explanation:`Fórmula: (BAII / Activo) x 100
(${d} / ${a}) x 100 = ${v(p,2)} %`,correctValue:p,valueType:"percentage"})}else{const p=m/i*100,b=["Calcula la Rentabilidad Financiera (ROE).","Determina el rendimiento para los accionistas (ROE) basándote en el beneficio neto.","¿Cuál es la rentabilidad de los fondos propios (ROE) de esta empresa?"],$=`${s} ${b[n%b.length]}`;o.push({id:f("ROE",n),category:"Rentabilidad",title:"Cálculo del ROE",question:$,data:{"Patrimonio Neto":l(i),"Beneficio Neto":l(m)},solution:`${v(p)} %`,explanation:`Fórmula: (BN / PN) x 100
(${m} / ${i}) x 100 = ${v(p,2)} %`,correctValue:p,valueType:"percentage"})}}return o},K=e=>{const o=[];for(let n=0;n<e;n++){const t=u(10,500)*1e3,s=Math.floor(t*(u(0,10)/100)),a=u(4,20),i=(t-s)/a,r=["Calcula la cuota de amortización anual lineal para la siguiente máquina.","Determina el gasto anual por depreciación de este activo usando el método lineal.","¿Cuál es la amortización anual contable de este bien según los datos facilitados?","Halla la cuota constante de amortización para este elemento del inmovilizado."],d=r[n%r.length];if(o.push({id:f("AM",n),category:"Gestión del Inmovilizado",title:"Amortización Lineal",question:d,data:{"Valor de Adquisición":l(t),"Valor Residual":l(s),"Vida Útil":`${a} años`},solution:l(i),explanation:`Fórmula: (V.Adq - V.Res) / Vida
(${t} - ${s}) / ${a} = ${v(i,2)}`,correctValue:i,valueType:"currency"}),n%3===0){const c=u(3,8),g=c*(c+1)/2,m=u(10,100)*1e3,p=u(1,c),b=c-p+1,$=m/g*b;o.push({id:f("AM-D",n),category:"Gestión del Inmovilizado",title:"Amortización Números Dígitos",question:`Calcula la cuota de amortización del año ${p} usando el método de números dígitos (decrecientes) para un bien con vida útil de ${c} años y valor amortizable de ${l(m)}.`,data:{"Valor Amortizable":l(m),"Vida Útil":`${c} años`,"Suma Dígitos":`${g}`},solution:l($),explanation:`Cuota = (Valor / Suma) * Dígito
(${m} / ${g}) * ${b} = ${v($,2)}`,correctValue:$,valueType:"currency"})}}return o},W=e=>{const o=[];for(let n=0;n<e;n++)if(Math.random()>.5){const s=u(5e3,5e4),a=u(3e3,45e3),i=s-a,r=i>0?"A PAGAR":"A COMPENSAR/DEVOLVER",d=["Calcula la liquidación trimestral del IVA (Modelo 303).","Determina el resultado de la declaración de IVA a ingresar o devolver.","Halla la cuota final de IVA a pagar a Hacienda (o a compensar) dados los siguientes datos.","Realiza el cálculo del IVA repercutido y soportado para obtener el resultado de la liquidación."],g=`${h()} ${d[n%d.length]}`;o.push({id:f("IVA",n),category:"Fiscalidad",title:"Liquidación de IVA",question:g,data:{"IVA Repercutido":l(s),"IVA Soportado":l(a)},solution:`${l(i)} (${r})`,explanation:`${s} - ${a} = ${i}`,correctValue:i,valueType:"currency"})}else{const s=u(1e4,1e6),a=s*.25,i=u(0,5e3),r=u(0,5e3),d=a-i-r,c=["Calcula la Cuota Diferencial del Impuesto sobre Sociedades.","Determina la cantidad final a ingresar o devolver por el Impuesto de Sociedades.","Halla la liquidación final del IS teniendo en cuenta las retenciones y pagos a cuenta."],m=`${h()} ${c[n%c.length]}`;o.push({id:f("IS",n),category:"Fiscalidad",title:"Cuota Diferencial IS",question:m,data:{"Base Imponible":l(s),Tipo:"25%",Deducciones:l(i),Retenciones:l(r)},solution:l(d),explanation:`CI=${a} -> CL=${a-i} -> CD=${d}`,correctValue:d,valueType:"currency"})}return o},Y=e=>{const o=[],n=["global","almacenamiento","cobro"];for(let t=0;t<e;t++){const s=n[t%n.length],a=h();if(s==="global"){const i=u(10,40),r=u(5,20),d=u(10,30),c=u(30,90),g=u(30,90),m=i+r+d+c-g,p=["Calcula el Periodo Medio de Maduración Financiero (PMM).","Determina el ciclo de caja o maduración financiera de la empresa.","¿Cuántos días tarda la empresa en recuperar su inversión desde que paga a proveedores? (Calcula el PMM Financiero).","Halla el PMM Financiero a partir de los periodos medios de almacenamiento, fabricación, venta y pago."],b=`${a} ${p[t%p.length]}`;o.push({id:f("PMM",t),category:"PMM",title:"Periodo Medio de Maduración",question:b,data:{PMa:`${i}`,PMf:`${r}`,PMv:`${d}`,PMc:`${c}`,PMp:`${g}`},solution:`${m} días`,explanation:`PMa+PMf+PMv+PMc - PMp = ${i}+${r}+${d}+${c}-${g} = ${m}`,correctValue:m,valueType:"number"})}else if(s==="almacenamiento"){const i=u(1e4,5e4),r=u(1e3,5e3),c=365/(i/r);o.push({id:f("PMM",t),category:"Análisis Financiero",title:"Cálculo PM Almacenamiento",question:`${a} Calcula el PMa.`,data:{Consumo:`${i}`,"Stock medio":`${r}`},solution:`${v(c,2)} días`,explanation:`365 / (Consumo/Stock) = ${v(c,2)}`,correctValue:c,valueType:"number"})}else{const i=u(5e4,2e5),r=u(1e4,4e4),c=365/(i/r);o.push({id:f("PMM",t),category:"Análisis Financiero",title:"Cálculo PM Cobro",question:`${a} Calcula el PMc.`,data:{Ventas:`${i}`,"Saldo Clientes":`${r}`},solution:`${v(c,2)} días`,explanation:`365 / (Ventas/Saldo) = ${v(c,2)}`,correctValue:c,valueType:"number"})}}return o},J=e=>{const o=[];for(let n=0;n<e;n++){const t=u(10,100),s=u(10,50),a=u(10,100),i=u(s+5,s+20),r=t+a,d=t*s+a*i,c=d/r,g=["Calcula el Precio Medio Ponderado (PMP) tras las siguientes operaciones.","Determina el valor de valoración de existencias según el método PMP.","¿Cuál es el precio medio del stock en almacén tras la última compra (PMP)?"],m=g[n%g.length];o.push({id:f("INV",n),category:"Existencias",title:"Precio Medio Ponderado (PMP)",question:m,data:{"Existencia Inicial":`${t} u. a ${l(s)}`,Compra:`${a} u. a ${l(i)}`},solution:l(c),explanation:`PMP = (Valor Total) / (Cantidad Total)
((${t}*${s}) + (${a}*${i})) / (${t}+${a}) = ${d} / ${r} = ${v(c,2)}`,correctValue:c,valueType:"currency"})}return o},X=e=>{const o=[],n=["margin_sales","margin_purchase","commercial","industrial"];for(let t=0;t<e;t++){const s=n[t%n.length],a=u(10,100),i=Math.floor(a*(u(120,200)/100));if(s==="margin_sales"){const r=(i-a)/i*100;o.push({id:f("MAR",t),category:"Márgenes",title:"Margen sobre Ventas",question:"Calcula el porcentaje de margen sobre el precio de venta.",data:{"Precio Venta":l(i),"Coste Producto":l(a)},solution:`${v(r)} %`,explanation:`((Pv - Cp) / Pv) * 100
((${i} - ${a}) / ${i}) * 100 = ${v(r,2)} %`,correctValue:r,valueType:"percentage"})}else if(s==="margin_purchase"){const r=(i-a)/a*100;o.push({id:f("MAR",t),category:"Márgenes",title:"Margen sobre Compras",question:"Calcula el porcentaje de margen sobre el precio de coste (mark-up).",data:{"Precio Venta":l(i),"Coste Producto":l(a)},solution:`${v(r)} %`,explanation:`((Pv - Cp) / Cp) * 100
((${i} - ${a}) / ${a}) * 100 = ${v(r,2)} %`,correctValue:r,valueType:"percentage"})}else if(s==="commercial"){const r=i-a;o.push({id:f("MAR",t),category:"Márgenes",title:"Margen Comercial",question:"Calcula el margen comercial unitario (valor absoluto).",data:{"Precio Venta":l(i),"Coste Producto":l(a)},solution:l(r),explanation:`Pv - Cp = ${i} - ${a} = ${r}`,correctValue:r,valueType:"currency"})}else{const r=u(5e4,2e5),d=Math.floor(r*.6),c=r-d;o.push({id:f("MAR",t),category:"Márgenes",title:"Margen Industrial",question:"Calcula el Margen Industrial de la empresa.",data:{"Ingresos Totales":l(r),"Coste Productos Vendidos":l(d)},solution:l(c),explanation:`Ingresos - Coste Ventas = ${r} - ${d} = ${c}`,correctValue:c,valueType:"currency"})}}return o},Z=()=>[...H(20),...Q(20),...G(20),...U(20),..._(20),...K(20),...W(20),...Y(20),...J(20),...X(20)],ee=[{id:"costes",title:"Análisis de Costes",content:`
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
    `}];let V=[],R="",T="exercises";const ae=document.querySelector("#app"),oe=()=>{V=Z();const e=new Set(V.map(o=>o.category));e.size>0&&(R=Array.from(e)[0]),E()},te=e=>{try{const o=e.replace(/,/g,".").replace(/[^0-9+\-*/().]/g,"");return o?new Function("return "+o)():NaN}catch{return NaN}};window.validateExercise=(e,o,n)=>{const t=document.getElementById(`input-${e}`),s=document.getElementById(`feedback-${e}`),a=document.getElementById(`sol-${e}`),i=document.getElementById(`btn-${e}`),r=document.getElementById(`btn-sol-${e}`);if(!t)return;const d=te(t.value);let c=!1;if(n==="number"||n==="currency"||n==="percentage"){const g=Number(o),m=Math.max(.1,Math.abs(g*.05));!isNaN(d)&&Math.abs(d-g)<=m&&(c=!0)}else t.value.trim().toLowerCase()===String(o).toLowerCase()&&(c=!0);c?(s.innerHTML='<span style="color: #4ade80; font-weight:bold;">✅ ¡Correcto!</span>',s.classList.remove("hidden"),a.classList.remove("hidden"),i.style.display="none",r&&(r.style.display="none"),t.disabled=!0,t.style.borderColor="#4ade80",t.value!==String(d)&&n!=="string"&&(t.value=`${t.value} = ${d}`)):(s.innerHTML='<span style="color: #f87171; font-weight:bold;">❌ Incorrecto. Inténtalo de nuevo o revisa la solución.</span>',s.classList.remove("hidden"),t.style.borderColor="#f87171",r&&(r.classList.remove("hidden"),r.style.display="inline-block"))};window.showSolution=e=>{const o=document.getElementById(`sol-${e}`),n=document.getElementById(`btn-${e}`),t=document.getElementById(`btn-sol-${e}`),s=document.getElementById(`feedback-${e}`),a=document.getElementById(`input-${e}`);o.classList.remove("hidden"),n&&(n.style.display="none"),t&&(t.style.display="none"),a&&(a.disabled=!0),s.innerHTML='<span style="color: #3b82f6; font-weight:bold;">ℹ️ Solución Revelada</span>',s.classList.remove("hidden")};const ne=()=>{const e=new Set(V.map(o=>o.category));return Array.from(e)},ie=()=>V.filter(e=>e.category===R),se=()=>{const e=ne();return`
    <aside id="sidebar">
      <nav style="margin-top: 2rem;">
        <div style="margin-bottom: 2rem;">
            <button class="${T==="theory"?"active":""}" id="btn-theory" style="border: 1px solid var(--accent-color); color: var(--accent-color);">
               🎓 Aula Teórica
            </button>
        </div>

        <div style="margin-bottom:0.5rem; font-size:0.75rem; text-transform:uppercase; color:var(--text-muted); padding-left:10px;">Ejercicios</div>
        ${e.map(o=>`
          <button 
            class="${o===R&&T==="exercises"?"active":""}" 
            data-category="${o}"
          >
            ${o}
          </button>
        `).join("")}
      </nav>

    </aside>
  `},re=e=>{const o=Object.entries(e.data).map(([s,a])=>`<div><span>${s}</span> <span>${a}</span></div>`).join(""),n=e.valueType==="percentage"?"Ej: 15.5":e.valueType==="currency"?"Ej: 5000":"Resultado",t=e.valueType==="percentage"?"%":e.valueType==="currency"?"€":"";return`
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
          <input type="text" id="input-${e.id}" placeholder="${n}" 
                 style="flex:1; padding:10px; border-radius:6px; border:1px solid rgba(255,255,255,0.1); background:rgba(0,0,0,0.3); color:white; font-family:var(--font-mono);">
          <span style="color:var(--text-secondary)">${t}</span>
        </div>
        
        <div style="display: flex; gap: 10px;">
            <button id="btn-${e.id}" class="btn-reveal" 
              onclick="validateExercise('${e.id}', '${e.correctValue}', '${e.valueType}')">
              Comprobar
            </button>
            <button id="btn-sol-${e.id}" class="btn-reveal hidden" style="background-color: var(--text-muted);"
              onclick="showSolution('${e.id}')">
              Ver Solución
            </button>
        </div>
        
        <div id="feedback-${e.id}" class="hidden" style="margin-top:10px; font-size:0.9rem;"></div>
        
        <div id="sol-${e.id}" class="solution-content hidden">
          <div class="solution-val">${e.solution}</div>
          ${e.explanation?`<div class="solution-expl">${e.explanation}</div>`:""}
        </div>
      </div>
    </div>
  `},le=()=>`
    <main>
      <div class="content-wrapper">
        <header>
          <h2>Aula Teórica</h2>
          <p class="intro-text">Repasa los conceptos clave antes de practicar.</p>
        </header>
        
        <div class="exercises-grid" style="grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));">
          ${ee.map(e=>`
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
    `,ce=()=>{if(T==="theory")return le();const e=ie();return`
    <main>
      <div class="content-wrapper">
        <header>
          <h2>${R}</h2>
          <p class="intro-text">Resuelve ${e.length} retos interactivos.</p>
        </header>
        
        <div class="exercises-grid">
          ${e.map(re).join("")}
        </div>
      </div>
    </main>
  `},E=()=>{ae.innerHTML=`
    ${se()}
    ${ce()}
  `,document.querySelectorAll("aside nav button[data-category]").forEach(e=>{e.addEventListener("click",o=>{R=o.target.dataset.category||"",T="exercises",E(),document.querySelector("main")?.scrollTo({top:0,behavior:"smooth"})})}),document.getElementById("btn-theory")?.addEventListener("click",()=>{T="theory",E(),document.querySelector("main")?.scrollTo({top:0,behavior:"smooth"})})};oe();
