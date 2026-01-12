export interface Topic {
    id: string;
    title: string;
    content: string;
}

export const theoryTopics: Topic[] = [
    {
        id: 'costes',
        title: 'Análisis de Costes',
        content: `
      <h4 style="color:var(--accent-color); margin-bottom:10px;">Umbral de Rentabilidad (Punto Muerto)</h4>
      <p>Imagina que estás organizando una fiesta. Tienes unos gastos que vas a pagar sí o sí (el alquiler del local), llamados <strong>Costes Fijos</strong>. Luego, cada invitado te cuesta dinero en comida y bebida, eso son los <strong>Costes Variables</strong>.</p>
      <p>El <strong>Punto Muerto</strong> es el número exacto de entradas que necesitas vender para no perder dinero. A partir de esa entrada extra, ¡todo es beneficio!</p>
      <div class="formula-box">Q = Costes Fijos / (Precio - Coste Variable Unitario)</div>
      
      <h4 style="color:var(--accent-color); margin-top:20px; margin-bottom:10px;">Apalancamiento Operativo</h4>
      <p>Mide qué tan "sensibles" son tus beneficios a un aumento en las ventas. Si tienes muchos costes fijos (mucha maquinaria, poco personal), un pequeño aumento en ventas dispara tus beneficios. ¡Es como una palanca!</p>
    `
    },
    {
        id: 'patrimonial',
        title: 'Análisis Patrimonial',
        content: `
      <h4 style="color:var(--accent-color); margin-bottom:10px;">Fondo de Maniobra (FM)</h4>
      <p>Es tu "colchón de seguridad" financiero a corto plazo. Responde a la pregunta: ¿Puedo pagar mis deudas inmediatas con el dinero que tengo o voy a cobrar pronto?</p>
      <p>Se calcula restando a lo que tienes (Activo Corriente: caja, clientes...) lo que debes a corto plazo (Pasivo Corriente).</p>
      <div class="formula-box">FM = Activo Corriente - Pasivo Corriente</div>
      <p><strong>Lo ideal:</strong> Que sea positivo. Si es negativo, ¡peligro! Podrías no tener dinero para pagar a tus proveedores mañana.</p>
    `
    },
    {
        id: 'ratios',
        title: 'Ratios Financieros',
        content: `
      <h4 style="color:var(--accent-color); margin-bottom:10px;">Salud Financiera</h4>
      <p>Los ratios son como los análisis de sangre de una empresa. Nos dicen si está sana.</p>
      <ul>
        <li><strong>Liquidez:</strong> ¿Tienes dinero para pagar ya? (Ideal: 1.5 - 2)</li>
        <li><strong>Tesoría (Acid Test):</strong> ¿Y si no vendes nada de tu stock, podrías pagar? (Ideal: ~1)</li>
        <li><strong>Garantía:</strong> Si la empresa quiebra hoy, ¿tus bienes cubren tus deudas? (Ideal: 1.5 - 2.5)</li>
        <li><strong>Endeudamiento:</strong> ¿Cuánto de lo que tienes es tuyo y cuánto es del banco? (Ideal: < 0.6)</li>
      </ul>
    `
    },
    {
        id: 'rentabilidad',
        title: 'Rentabilidad',
        content: `
      <h4 style="color:var(--accent-color); margin-bottom:10px;">ROI vs ROE</h4>
      <p><strong>ROI (Rentabilidad Económica):</strong> Mide lo bueno que es tu negocio en sí mismo. "Por cada 100€ que invierto en máquinas y local, ¿cuánto beneficio saco?". No le importa de dónde viene el dinero.</p>
      <div class="formula-box">ROI = (BAII / Activo Total) x 100</div>

      <p style="margin-top:15px;"><strong>ROE (Rentabilidad Financiera):</strong> Esto es lo que le importa al dueño. "Por cada 100€ de MI bolsillo que puse, ¿cuánto gano?". Aquí sí influye si pediste un préstamo.</p>
      <div class="formula-box">ROE = (Beneficio Neto / Patrimonio Neto) x 100</div>
    `
    },
    {
        id: 'pmm',
        title: 'Periodo Medio de Maduración (PMM)',
        content: `
      <p>Es el tiempo que tarda tu dinero en "dar la vuelta".</p>
      <p>Desde que compras una materia prima, la almacenas, la fabricas, la vendes y... ¡finalmente cobras al cliente!</p>
      <p><strong>PMM Económico:</strong> Todo el ciclo completo.</p>
      <p><strong>PMM Financiero:</strong> Le restas el tiempo que tardas en pagar a tus proveedores. ¡Porque mientras no pagas, ese dinero sigue en tu bolsillo!</p>
      <div class="formula-box">PMM Fin = (PMa + PMf + PMv + PMc) - PMp</div>
    `
    },
    {
        id: 'fiscal',
        title: 'Fiscalidad y Amortizaciones',
        content: `
      <h4 style="color:var(--accent-color); margin-bottom:10px;">IVA</h4>
      <p>Tú eres un recaudador del estado. Cobras IVA cuando vendes (Repercutido) y pagas IVA cuando compras (Soportado). La diferencia es lo que le das a Hacienda.</p>
      
      <h4 style="color:var(--accent-color); margin-top:15px; margin-bottom:10px;">Amortización</h4>
      <p>Tus máquinas pierden valor con el tiempo (se hacen viejas). Contablemente, vamos guardando un poquito de dinero cada año como "gasto" para reflejar esa pérdida de valor.</p>
      <div class="formula-box">Cuota = (Precio Compra - Valor Residual) / Años de Vida</div>
    `
    }
];
