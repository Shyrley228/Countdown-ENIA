export const ENIA_SOURCE_URL =
  'https://cdn.www.gob.pe/uploads/document/file/9902385/8081563-anexo-rm-n-152-2026-pcm-enia%282%29.pdf?v=1778018141';

export const ENTITY_TYPES = [
  {
    id: 'gobierno_nacional',
    label: 'Gobierno nacional',
    short: 'Ministerio, organismo público o programa nacional',
    emoji: '🏛️',
  },
  {
    id: 'gobierno_regional',
    label: 'Gobierno regional',
    short: 'Gobierno regional, dirección o unidad ejecutora regional',
    emoji: '🗺️',
  },
  {
    id: 'gobierno_local',
    label: 'Gobierno local',
    short: 'Municipalidad provincial, distrital o empresa municipal',
    emoji: '🏙️',
  },
  {
    id: 'organismo_autonomo',
    label: 'Organismo autónomo',
    short: 'Organismo constitucionalmente autónomo u otra entidad pública',
    emoji: '⚖️',
  },
  {
    id: 'universidad_publica',
    label: 'Universidad pública',
    short: 'Universidad, instituto o entidad pública de investigación',
    emoji: '🎓',
  },
  {
    id: 'empresa_publica',
    label: 'Empresa pública',
    short: 'Empresa estatal nacional, regional, local o bajo FONAFE',
    emoji: '🏢',
  },
];

export const SPECIAL_ROLES = [
  { id: 'general', label: 'Ninguna responsabilidad sectorial específica', group: 'General' },
  { id: 'pcm_ssprd', label: 'PCM – SGTD / Subsecretaría de Políticas y Regulación Digital', group: 'PCM / SGTD' },
  { id: 'pcm_sstsd', label: 'PCM – SGTD / Subsecretaría de Tecnologías y Seguridad Digital', group: 'PCM / SGTD' },
  { id: 'pcm_sssid', label: 'PCM – SGTD / Subsecretaría de Servicios e Innovación Digital', group: 'PCM / SGTD' },
  { id: 'enap_servir', label: 'ENAP / SERVIR', group: 'Talento público' },
  { id: 'minedu_dite', label: 'MINEDU / DITE', group: 'Educación' },
  { id: 'minedu_digetsupa', label: 'MINEDU / DIGETSUPA', group: 'Educación' },
  { id: 'produce', label: 'PRODUCE', group: 'Innovación productiva' },
  { id: 'proinnovate', label: 'PROINNÓVATE', group: 'Innovación productiva' },
  { id: 'concytec', label: 'CONCYTEC', group: 'Ciencia y tecnología' },
  { id: 'inacal', label: 'INACAL', group: 'Normalización y acreditación' },
];

const years = [2026, 2027, 2028, 2029, 2030];
const target = (values, unit = '') =>
  years.reduce((acc, year, index) => ({ ...acc, [year]: `${values[index]}${unit}` }), {});

export const OBLIGATIONS = [
  {
    id: 'politica-institucional-ia',
    title: 'Aprobar la política institucional de uso seguro, responsable y ético de IA',
    summary: 'La entidad debe establecer principios y reglas institucionales para desarrollar, implementar y usar sistemas de IA protegiendo derechos fundamentales y bienestar social.',
    kind: 'obligacion',
    category: 'Gobernanza',
    priority: 'alta',
    appliesTo: ['all'],
    responsible: 'Titular de la entidad y Comité de Gobierno y Transformación Digital',
    deadline: { type: 'continuous', label: 'Implementación institucional prioritaria y revisión continua' },
    sourcePages: [50, 51],
    actions: ['Definir alcance y principios', 'Aprobar mediante instrumento institucional', 'Comunicarla y revisar su aplicación'],
  },
  {
    id: 'liderazgo-cgtd',
    title: 'Liderar y supervisar los proyectos estratégicos de IA',
    summary: 'El Comité de Gobierno y Transformación Digital dirige, evalúa y supervisa los proyectos de sistemas basados en IA estratégicos para la entidad.',
    kind: 'obligacion',
    category: 'Gobernanza',
    priority: 'alta',
    appliesTo: ['all'],
    responsible: 'Comité de Gobierno y Transformación Digital',
    deadline: { type: 'continuous', label: 'Durante todo el ciclo de vida de cada proyecto' },
    sourcePages: [50, 51],
    actions: ['Priorizar iniciativas', 'Revisar riesgos y beneficios', 'Supervisar resultados y cumplimiento'],
  },
  {
    id: 'incluir-pgd',
    title: 'Incluir los proyectos de IA en el Plan de Gobierno Digital',
    summary: 'Los proyectos de sistemas basados en IA deben incorporarse en la planificación de gobierno digital de la entidad.',
    kind: 'obligacion',
    category: 'Planificación',
    priority: 'alta',
    appliesTo: ['all'],
    responsible: 'Comité de Gobierno y Transformación Digital',
    deadline: { type: 'planning', label: 'En la siguiente actualización del Plan de Gobierno Digital' },
    sourcePages: [51],
    actions: ['Inventariar iniciativas', 'Alinear objetivos e indicadores', 'Incorporar responsables y recursos'],
  },
  {
    id: 'equipos-multidisciplinarios',
    title: 'Conformar equipos técnicos multidisciplinarios para proyectos de IA',
    summary: 'La composición del equipo debe responder a la complejidad del problema público y al sistema basado en IA que se desarrollará o usará.',
    kind: 'obligacion',
    category: 'Personas',
    priority: 'media',
    appliesTo: ['all'],
    responsible: 'Comité de Gobierno y Transformación Digital',
    deadline: { type: 'trigger', label: 'Antes de desarrollar o incorporar un sistema de IA' },
    sourcePages: [51],
    actions: ['Incluir negocio, tecnología, legal, datos, seguridad y ética', 'Definir responsabilidades', 'Documentar decisiones'],
  },
  {
    id: 'oficial-ia-plan',
    title: 'Operativizar el rol de Oficial de Inteligencia Artificial y el Plan de Acción de IA',
    summary: 'El Oficial de IA identifica y planifica casos de uso, supervisa su ejecución, formula el Plan de Acción de IA y reporta avances al Comité.',
    kind: 'rol',
    category: 'Gobernanza',
    priority: 'alta',
    appliesTo: ['all'],
    responsible: 'Oficial de Inteligencia Artificial',
    deadline: { type: 'continuous', label: 'Planificación y seguimiento permanente' },
    sourcePages: [51],
    actions: ['Definir el rol y sus atribuciones', 'Crear cartera de casos de uso', 'Integrar el Plan de Acción al PGD', 'Reportar avances'],
  },
  {
    id: 'gobierno-datos',
    title: 'Asegurar gobierno de datos para las iniciativas de IA',
    summary: 'El Oficial de Gobierno de Datos coordina políticas, normas y condiciones habilitantes para implementar el Plan de Acción de IA.',
    kind: 'rol',
    category: 'Datos',
    priority: 'alta',
    appliesTo: ['all'],
    responsible: 'Oficial de Gobierno de Datos',
    deadline: { type: 'trigger', label: 'Antes y durante el uso de datos en IA' },
    sourcePages: [51],
    actions: ['Identificar fuentes y responsables', 'Evaluar calidad y trazabilidad', 'Definir accesos, retención y reutilización'],
  },
  {
    id: 'seguridad-confianza',
    title: 'Aplicar seguridad digital y gestión de incidentes a los sistemas de IA',
    summary: 'Las políticas de seguridad, ciberseguridad y confianza digital deben cubrir las soluciones basadas en IA y sus riesgos particulares.',
    kind: 'rol',
    category: 'Seguridad',
    priority: 'alta',
    appliesTo: ['all'],
    responsible: 'Oficial de Seguridad y Confianza Digital',
    deadline: { type: 'continuous', label: 'Desde el diseño hasta el retiro del sistema' },
    sourcePages: [52, 77],
    actions: ['Modelar amenazas', 'Establecer controles y monitoreo', 'Definir respuesta a incidentes'],
  },
  {
    id: 'datos-personales',
    title: 'Verificar la protección de datos personales en el ciclo de vida de la IA',
    summary: 'La entidad debe asegurar que el tratamiento de datos personales utilizado por soluciones de IA cumpla la normativa y mantenga supervisión humana.',
    kind: 'rol',
    category: 'Datos',
    priority: 'alta',
    appliesTo: ['all'],
    responsible: 'Oficial de Datos Personales y responsables del banco de datos',
    deadline: { type: 'trigger', label: 'Antes del tratamiento y durante la operación' },
    sourcePages: [52],
    actions: ['Determinar base legal', 'Minimizar datos', 'Evaluar riesgos para titulares', 'Documentar medidas'],
  },
  {
    id: 'iso-42001',
    title: 'Implementar la NTP-ISO/IEC 42001 vigente cuando la entidad desarrolla o usa IA',
    summary: 'La ENIA adopta la NTP-ISO/IEC 42001 como estándar de referencia y señala su adopción obligatoria para entidades públicas que desarrollen o usen IA.',
    kind: 'obligacion',
    category: 'Estándares',
    priority: 'alta',
    appliesTo: ['usesAI'],
    responsible: 'Alta dirección, Comité de Gobierno y Transformación Digital y responsables del sistema de gestión de IA',
    deadline: { type: 'progressive', label: 'Implementación progresiva durante 2026–2030' },
    targets: target([5, 15, 30, 50, 80], ' entidades públicas acumuladas a nivel nacional'),
    sourcePages: [55, 75],
    actions: ['Realizar análisis de brecha', 'Definir alcance del sistema de gestión', 'Implementar controles y evidencias', 'Evaluar desempeño y mejora'],
  },
  {
    id: 'presupuesto-planes',
    title: 'Formalizar recursos para IA en los instrumentos de planificación institucional',
    summary: 'La ENIA recomienda sustentar las iniciativas en PEI, PMI y POI, alineándolas con el Plan de Gobierno Digital y estimando costos anualmente.',
    kind: 'recomendacion',
    category: 'Planificación',
    priority: 'media',
    appliesTo: ['all'],
    responsible: 'Alta dirección, planeamiento, presupuesto y área digital',
    deadline: { type: 'annual', label: 'En cada ciclo anual de programación y presupuesto' },
    sourcePages: [80],
    actions: ['Costear iniciativas', 'Vincular productos e indicadores', 'Programar presupuesto y capacidades'],
  },
  {
    id: 'asistencia-sgtd',
    title: 'Postular o solicitar asistencia técnica para pruebas de concepto y soluciones de IA',
    summary: 'La hoja de ruta prevé asistencia de la SGTD a entidades públicas para diseñar, desarrollar e implementar pruebas de concepto o soluciones.',
    kind: 'oportunidad',
    category: 'Innovación',
    priority: 'media',
    appliesTo: ['all'],
    responsible: 'Entidad solicitante y PCM / SGTD – SSPRD',
    deadline: { type: 'annual', label: 'Según convocatorias y programación anual de la SGTD' },
    targets: target([5, 10, 20, 30, 40], ' entidades atendidas acumuladas'),
    sourcePages: [70],
    actions: ['Priorizar un problema público', 'Preparar datos y equipo', 'Solicitar acompañamiento técnico'],
  },
  {
    id: 'retos-concytec',
    title: 'Presentar desafíos públicos para convocatorias de soluciones con IA',
    summary: 'La hoja de ruta contempla convocatorias competitivas para resolver desafíos de instituciones públicas, sectores y gobiernos regionales o locales.',
    kind: 'oportunidad',
    category: 'Innovación',
    priority: 'media',
    appliesTo: ['gobierno_nacional', 'gobierno_regional', 'gobierno_local', 'universidad_publica'],
    responsible: 'Entidad proponente y CONCYTEC',
    deadline: { type: 'annual', label: 'Según el calendario de convocatorias de CONCYTEC' },
    targets: target([1, 3, 9, 17, 27], ' proyectos subvencionados acumulados'),
    sourcePages: [72],
    actions: ['Definir desafío medible', 'Identificar socios', 'Preparar propuesta ética y técnicamente viable'],
  },

  // PCM / SGTD – SSPRD
  {
    id: 'ssprd-programa-capacitacion',
    title: 'Implementar capacitaciones del Programa de Inteligencia Artificial',
    summary: 'Capacitar a funcionarios y servidores en uso responsable, estratégico y ético de IA en la gestión pública.',
    kind: 'meta', category: 'Talento', priority: 'alta', specialRoles: ['pcm_ssprd'], responsible: 'PCM / SGTD – SSPRD',
    deadline: { type: 'annual', label: 'Metas acumuladas 2026–2030' }, targets: target([200, 500, 900, 1400, 2000], ' personas'), sourcePages: [69, 70],
    actions: ['Diseñar contenidos', 'Ejecutar cohortes', 'Medir participación y aprendizaje'],
  },
  {
    id: 'ssprd-asistencia-entidades',
    title: 'Brindar asistencia técnica a entidades públicas en iniciativas de IA',
    summary: 'Acompañar pruebas de concepto y soluciones basadas en IA desde el diseño hasta la implementación.',
    kind: 'meta', category: 'Innovación', priority: 'alta', specialRoles: ['pcm_ssprd'], responsible: 'PCM / SGTD – SSPRD',
    deadline: { type: 'annual', label: 'Metas acumuladas 2026–2030' }, targets: target([5, 10, 20, 30, 40], ' entidades'), sourcePages: [70],
    actions: ['Definir cartera de asistencia', 'Seleccionar entidades', 'Documentar resultados y aprendizajes'],
  },
  {
    id: 'ssprd-sandbox',
    title: 'Implementar sandbox tecnológicos y regulatorios para IA',
    summary: 'Crear entornos seguros de experimentación para soluciones de IA y otras tecnologías emergentes.',
    kind: 'meta', category: 'Regulación', priority: 'alta', specialRoles: ['pcm_ssprd'], responsible: 'PCM / SGTD – SSPRD',
    deadline: { type: 'annual', label: 'Metas acumuladas 2026–2030' }, targets: target([5, 12, 20, 30, 40], ' proyectos presentados'), sourcePages: [74],
    actions: ['Definir reglas de ingreso', 'Evaluar riesgos', 'Supervisar experimentación', 'Publicar aprendizajes'],
  },
  {
    id: 'ssprd-marcos-lineamientos',
    title: 'Formular marcos y lineamientos nacionales para el despliegue responsable de IA',
    summary: 'Incluye desempeño, gobierno de datos, riesgos, arquitectura, experimentación, seguridad, impacto ético, incidentes, transparencia y explicabilidad.',
    kind: 'meta', category: 'Regulación', priority: 'alta', specialRoles: ['pcm_ssprd'], responsible: 'PCM / SGTD – SSPRD',
    deadline: { type: 'annual', label: '50% en 2026 y 100% en 2027 para cada instrumento previsto' }, targets: { 2026: '50%', 2027: '100%' }, sourcePages: [77, 78],
    actions: ['Priorizar instrumentos', 'Coordinar consulta técnica', 'Aprobar y difundir', 'Monitorear adopción'],
  },
  {
    id: 'ssprd-cooperacion',
    title: 'Impulsar cooperación internacional y adopción de principios globales de IA',
    summary: 'Priorizar acuerdos, incorporar principios internacionales en instrumentos nacionales y promover proyectos conjuntos.',
    kind: 'meta', category: 'Cooperación', priority: 'media', specialRoles: ['pcm_ssprd'], responsible: 'PCM / SGTD – SSPRD',
    deadline: { type: 'annual', label: 'Metas acumuladas 2026–2030' }, targets: target([1, 2, 3, 4, 5], ' acuerdos o marcos'), sourcePages: [79],
    actions: ['Mapear aliados', 'Priorizar acuerdos', 'Traducir compromisos en instrumentos nacionales'],
  },

  // PCM / SGTD – SSTSD
  {
    id: 'sstsd-plataforma',
    title: 'Desarrollar y mantener la Plataforma Nacional de Inteligencia Artificial',
    summary: 'Implementar la plataforma bajo la gobernanza de la SGTD.',
    kind: 'meta', category: 'Plataforma', priority: 'alta', specialRoles: ['pcm_sstsd'], responsible: 'PCM / SGTD – SSTSD',
    deadline: { type: 'annual', label: '30% en 2026, 60% en 2027 y 100% en 2028' }, targets: { 2026: '30%', 2027: '60%', 2028: '100%' }, sourcePages: [73],
    actions: ['Definir arquitectura y gobierno', 'Implementar módulos', 'Operar y mantener'],
  },
  {
    id: 'sstsd-casos-uso',
    title: 'Implementar el módulo de casos de uso de IA del sector público',
    summary: 'Recopilar experiencias, resultados y buenas prácticas de entidades públicas.',
    kind: 'meta', category: 'Plataforma', priority: 'alta', specialRoles: ['pcm_sstsd'], responsible: 'PCM / SGTD – SSTSD',
    deadline: { type: 'annual', label: 'Metas acumuladas 2026–2030' }, targets: target([5, 15, 30, 50, 75], ' casos documentados'), sourcePages: [73],
    actions: ['Definir ficha estándar', 'Validar evidencia', 'Publicar y mantener casos'],
  },
  {
    id: 'sstsd-transparencia',
    title: 'Desarrollar el módulo de Transparencia Algorítmica',
    summary: 'Registrar información estandarizada de cada sistema de IA desplegado.',
    kind: 'meta', category: 'Transparencia', priority: 'alta', specialRoles: ['pcm_sstsd'], responsible: 'PCM / SGTD – SSTSD',
    deadline: { type: 'annual', label: 'Metas acumuladas 2026–2030' }, targets: target([2, 10, 18, 27, 40], ' sistemas registrados'), sourcePages: [73],
    actions: ['Definir campos', 'Habilitar registro', 'Verificar calidad y actualización'],
  },

  // PCM / SGTD – SSSID
  {
    id: 'sssid-comunidades',
    title: 'Realizar eventos, talleres y comunidades de práctica en IA',
    summary: 'Promover adopción, interoperabilidad y tecnologías emergentes en coordinación con el CNIDIA.',
    kind: 'meta', category: 'Innovación', priority: 'media', specialRoles: ['pcm_sssid'], responsible: 'PCM / SGTD – SSSID',
    deadline: { type: 'annual', label: 'Metas acumuladas 2026–2030' }, targets: target([5, 10, 17, 24, 35], ' espacios'), sourcePages: [73],
    actions: ['Programar agenda', 'Convocar comunidades', 'Medir participación e impacto'],
  },
  {
    id: 'sssid-pruebas-concepto',
    title: 'Desarrollar y validar pruebas tecnológicas de concepto',
    summary: 'Validar soluciones de IA y promover que escalen a pilotos o casos de uso registrados.',
    kind: 'meta', category: 'Innovación', priority: 'alta', specialRoles: ['pcm_sssid'], responsible: 'PCM / SGTD – SSSID',
    deadline: { type: 'annual', label: 'Metas acumuladas 2026–2030' }, targets: target([2, 4, 6, 8, 10], ' pruebas validadas'), sourcePages: [73, 74],
    actions: ['Seleccionar problemas', 'Prototipar', 'Evaluar', 'Documentar escalamiento'],
  },
  {
    id: 'sssid-alfabetizacion',
    title: 'Desarrollar iniciativas de sensibilización y alfabetización ciudadana en IA',
    summary: 'Ampliar el conocimiento ciudadano sobre oportunidades, riesgos y participación en la gobernanza de IA.',
    kind: 'meta', category: 'Ciudadanía', priority: 'media', specialRoles: ['pcm_sssid'], responsible: 'PCM / SGTD – SSSID',
    deadline: { type: 'annual', label: 'Metas acumuladas 2026–2030' }, targets: target([1, 2, 3, 4, 5], ' iniciativas'), sourcePages: [79],
    actions: ['Diseñar contenidos accesibles', 'Ejecutar campañas', 'Medir alcance'],
  },
  {
    id: 'sssid-participa-peru',
    title: 'Establecer un mecanismo continuo de participación ciudadana sobre IA',
    summary: 'Publicar respuestas institucionales a aportes recibidos mediante Participa Perú.',
    kind: 'meta', category: 'Ciudadanía', priority: 'media', specialRoles: ['pcm_sssid'], responsible: 'PCM / SGTD – SSSID',
    deadline: { type: 'annual', label: 'Un reporte anual acumulado por cada año 2026–2030' }, targets: target([1, 2, 3, 4, 5], ' reportes'), sourcePages: [79],
    actions: ['Recibir aportes', 'Clasificar y responder', 'Publicar reporte anual'],
  },

  // ENAP / SERVIR
  {
    id: 'servir-capacitacion',
    title: 'Capacitar a servidores públicos en aplicación de IA a la gestión pública',
    summary: 'Diseñar y desarrollar acciones formativas con constancia o certificación.',
    kind: 'meta', category: 'Talento', priority: 'alta', specialRoles: ['enap_servir'], responsible: 'ENAP / SERVIR',
    deadline: { type: 'annual', label: 'Metas acumuladas 2026–2030' }, targets: target([500, 1500, 3000, 5000, 8000], ' servidores'), sourcePages: [69],
    actions: ['Diseñar itinerario formativo', 'Implementar cursos', 'Certificar y medir aplicación'],
  },

  // MINEDU
  {
    id: 'minedu-docentes-basica',
    title: 'Capacitar a docentes de educación básica para una adopción responsable de IA',
    summary: 'Implementar acciones presenciales y virtuales para el aprovechamiento pedagógico de IA.',
    kind: 'meta', category: 'Educación', priority: 'alta', specialRoles: ['minedu_dite'], responsible: 'MINEDU / DITE',
    deadline: { type: 'annual', label: 'Metas acumuladas 2026–2030' }, targets: target([2, 5, 8, 12, 15], '% de docentes por región'), sourcePages: [69],
    actions: ['Diseñar capacitación', 'Desplegar territorialmente', 'Medir uso pedagógico'],
  },
  {
    id: 'minedu-recursos',
    title: 'Diseñar recursos educativos digitales con funcionalidades de IA',
    summary: 'Integrar IA en recursos alineados al CNEB y accesibles por canales del MINEDU.',
    kind: 'meta', category: 'Educación', priority: 'media', specialRoles: ['minedu_dite'], responsible: 'MINEDU / DITE',
    deadline: { type: 'annual', label: 'Metas acumuladas 2026–2030' }, targets: target([5, 10, 15, 20, 25], '% de la meta del periodo'), sourcePages: [69],
    actions: ['Priorizar recursos', 'Diseñar con accesibilidad', 'Validar pedagógica y técnicamente'],
  },
  {
    id: 'digetsupa-diagnostico',
    title: 'Diagnosticar capacidades y necesidades formativas en IA generativa',
    summary: 'Evaluar a docentes y completar diagnósticos territoriales.',
    kind: 'meta', category: 'Educación', priority: 'alta', specialRoles: ['minedu_digetsupa'], responsible: 'MINEDU / DIGETSUPA',
    deadline: { type: 'annual', label: '50% en 2026 y 100% en 2027' }, targets: { 2026: '50%', 2027: '100%' }, sourcePages: [69],
    actions: ['Diseñar instrumento', 'Aplicar evaluación', 'Consolidar diagnóstico territorial'],
  },
  {
    id: 'digetsupa-programas',
    title: 'Diseñar programas de actualización pedagógica en IA generativa',
    summary: 'Crear programas con enfoque territorial, especialidad y necesidad docente.',
    kind: 'meta', category: 'Educación', priority: 'media', specialRoles: ['minedu_digetsupa'], responsible: 'MINEDU / DIGETSUPA',
    deadline: { type: 'annual', label: 'Metas acumuladas 2026–2030' }, targets: target([1, 2, 4, 5, 6], ' programas'), sourcePages: [69],
    actions: ['Diseñar malla', 'Pilotear', 'Escalar y evaluar'],
  },
  {
    id: 'digetsupa-comunidad',
    title: 'Crear una comunidad de práctica y red en IA generativa',
    summary: 'Articular docentes activos por región y tipo de institución educativa.',
    kind: 'meta', category: 'Educación', priority: 'media', specialRoles: ['minedu_digetsupa'], responsible: 'MINEDU / DIGETSUPA',
    deadline: { type: 'annual', label: 'Metas acumuladas 2026–2030' }, targets: target([100, 250, 450, 700, 1000], ' docentes activos'), sourcePages: [69],
    actions: ['Diseñar comunidad', 'Convocar', 'Facilitar intercambio y evidencias'],
  },

  // PRODUCE / PROINNOVATE
  {
    id: 'proinnovate-proyectos',
    title: 'Cofinanciar proyectos de innovación tecnológica basados en IA',
    summary: 'Promover proyectos de innovación en sectores productivos.',
    kind: 'meta', category: 'Innovación productiva', priority: 'alta', specialRoles: ['proinnovate'], responsible: 'PROINNÓVATE',
    deadline: { type: 'annual', label: 'Metas acumuladas 2026–2030' }, targets: target([0, 5, 15, 28, 43], ' proyectos'), sourcePages: [71],
    actions: ['Diseñar instrumentos', 'Evaluar proyectos', 'Cofinanciar y monitorear'],
  },
  {
    id: 'proinnovate-difusion',
    title: 'Difundir fondos concursables para proyectos de IA',
    summary: 'Realizar eventos de difusión dirigidos al ecosistema productivo.',
    kind: 'meta', category: 'Innovación productiva', priority: 'media', specialRoles: ['proinnovate'], responsible: 'PROINNÓVATE',
    deadline: { type: 'annual', label: 'Metas acumuladas 2026–2030' }, targets: target([0, 2, 6, 11, 16], ' eventos'), sourcePages: [71],
    actions: ['Segmentar público', 'Realizar eventos', 'Medir postulaciones generadas'],
  },
  {
    id: 'produce-centros',
    title: 'Incorporar servicios de IA en la Red de Centros de Transformación Digital Empresarial',
    summary: 'Fortalecer la oferta de servicios y la adopción de IA en micro y pequeñas empresas.',
    kind: 'meta', category: 'Innovación productiva', priority: 'alta', specialRoles: ['produce'], responsible: 'PRODUCE',
    deadline: { type: 'annual', label: 'Metas acumuladas 2026–2030' }, targets: target([9, 23, 44, 76, 124], ' centros con servicios de IA'), sourcePages: [71],
    actions: ['Diseñar servicios', 'Capacitar centros', 'Monitorear adopción empresarial'],
  },
  {
    id: 'produce-madurez',
    title: 'Actualizar el Modelo de Madurez Digital Empresarial con variables de IA',
    summary: 'Incorporar condiciones que facilitan la adopción y aprovechamiento de IA en MYPE.',
    kind: 'meta', category: 'Innovación productiva', priority: 'media', specialRoles: ['produce'], responsible: 'PRODUCE',
    deadline: { type: 'annual', label: 'Metas acumuladas 2026–2030' }, targets: target([300, 1000, 2500, 5000, 8500], ' MYPE evaluadas'), sourcePages: [71],
    actions: ['Actualizar variables', 'Capacitar centros', 'Aplicar y analizar resultados'],
  },

  // CONCYTEC
  {
    id: 'concytec-financiamiento',
    title: 'Crear instrumentos de financiamiento para investigación y desarrollo en IA',
    summary: 'Publicar instrumentos que impulsen investigación, modelos multilingües y soluciones entrenadas con datos locales.',
    kind: 'meta', category: 'Ciencia', priority: 'alta', specialRoles: ['concytec'], responsible: 'CONCYTEC',
    deadline: { type: 'annual', label: 'Metas acumuladas 2026–2030' }, targets: target([1, 3, 5, 8, 12], ' instrumentos'), sourcePages: [72],
    actions: ['Diseñar instrumentos', 'Publicar calendario', 'Evaluar y monitorear'],
  },
  {
    id: 'concytec-cooperacion',
    title: 'Promover convocatorias internacionales de investigación en IA',
    summary: 'Subvencionar proyectos colaborativos con otros países.',
    kind: 'meta', category: 'Ciencia', priority: 'media', specialRoles: ['concytec'], responsible: 'CONCYTEC',
    deadline: { type: 'annual', label: 'Metas acumuladas 2026–2030' }, targets: target([1, 3, 9, 17, 27], ' convocatorias/proyectos'), sourcePages: [72],
    actions: ['Identificar socios', 'Lanzar convocatorias', 'Monitorear colaboración'],
  },
  {
    id: 'concytec-retos-publicos',
    title: 'Subvencionar soluciones de IA para desafíos prioritarios del sector público',
    summary: 'Atender desafíos de instituciones públicas y gobiernos regionales o locales mediante convocatorias competitivas.',
    kind: 'meta', category: 'Ciencia', priority: 'alta', specialRoles: ['concytec'], responsible: 'CONCYTEC',
    deadline: { type: 'annual', label: 'Metas acumuladas 2026–2030' }, targets: target([1, 3, 9, 17, 27], ' proyectos'), sourcePages: [72],
    actions: ['Recoger desafíos', 'Publicar convocatoria', 'Subvencionar y validar soluciones'],
  },
  {
    id: 'concytec-etica',
    title: 'Capacitar a investigadores en uso ético de IA',
    summary: 'Fortalecer la integridad y gestión responsable de IA en investigación.',
    kind: 'meta', category: 'Ética', priority: 'media', specialRoles: ['concytec'], responsible: 'CONCYTEC',
    deadline: { type: 'annual', label: 'Metas acumuladas 2026–2030' }, targets: target([50, 250, 550, 950, 1450], ' investigadores'), sourcePages: [73],
    actions: ['Diseñar capacitación', 'Certificar', 'Monitorear aplicación'],
  },

  // INACAL
  {
    id: 'inacal-guia-42001',
    title: 'Elaborar la guía nacional para implementar la NTP-ISO/IEC 42001',
    summary: 'Publicar orientación aplicable a entidades públicas.',
    kind: 'meta', category: 'Estándares', priority: 'alta', specialRoles: ['inacal'], responsible: 'Dirección de Normalización – INACAL',
    deadline: { type: 'annual', label: '50% en 2026 y 100% en 2027' }, targets: { 2026: '50%', 2027: '100%' }, sourcePages: [75],
    actions: ['Elaborar proyecto', 'Validar técnicamente', 'Aprobar y publicar'],
  },
  {
    id: 'inacal-acreditacion',
    title: 'Ampliar la acreditación para certificación de sistemas de gestión de IA',
    summary: 'Desarrollar capacidades de organismos de certificación en NTP-ISO/IEC 42001 y riesgos algorítmicos.',
    kind: 'meta', category: 'Estándares', priority: 'alta', specialRoles: ['inacal'], responsible: 'Dirección de Acreditación – INACAL',
    deadline: { type: 'annual', label: 'Metas acumuladas 2026–2030' }, targets: target([1, 2, 3, 4, 5], ' organismos con alcance ampliado'), sourcePages: [75],
    actions: ['Definir criterios', 'Orientar organismos', 'Evaluar ampliaciones'],
  },
  {
    id: 'inacal-23894',
    title: 'Elaborar y aprobar la NTP-ISO/IEC 23894 sobre gestión de riesgos de IA',
    summary: 'Proporcionar un marco para identificar, analizar, evaluar y tratar riesgos durante todo el ciclo de vida.',
    kind: 'meta', category: 'Estándares', priority: 'alta', specialRoles: ['inacal'], responsible: 'Dirección de Normalización – INACAL',
    deadline: { type: 'annual', label: '100% en 2026' }, targets: { 2026: '100%' }, sourcePages: [76],
    actions: ['Elaborar proyecto', 'Aprobar norma', 'Difundir aplicación'],
  },
  {
    id: 'inacal-42005',
    title: 'Elaborar y aprobar la NTP-ISO/IEC 42005 sobre evaluación de impacto de IA',
    summary: 'Orientar la identificación, evaluación y documentación de impactos durante el ciclo de vida.',
    kind: 'meta', category: 'Estándares', priority: 'media', specialRoles: ['inacal'], responsible: 'Dirección de Normalización – INACAL',
    deadline: { type: 'annual', label: '50% en 2026 y 100% en 2027' }, targets: { 2026: '50%', 2027: '100%' }, sourcePages: [76],
    actions: ['Elaborar proyecto', 'Aprobar norma', 'Difundir aplicación'],
  },
];

export const CATEGORIES = [...new Set(OBLIGATIONS.map((item) => item.category))].sort();

export function getEntityType(id) {
  return ENTITY_TYPES.find((item) => item.id === id) || ENTITY_TYPES[0];
}

export function getSpecialRole(id) {
  return SPECIAL_ROLES.find((item) => item.id === id) || SPECIAL_ROLES[0];
}

export function getObligationsForProfile(profile = {}) {
  const entityType = profile.entityType || 'gobierno_nacional';
  const specialRole = profile.specialRole || 'general';
  const usesAI = Boolean(profile.usesAI);

  return OBLIGATIONS.filter((item) => {
    if (item.specialRoles) return item.specialRoles.includes(specialRole);
    const scopes = item.appliesTo || [];
    return (
      scopes.includes('all') ||
      scopes.includes(entityType) ||
      (usesAI && scopes.includes('usesAI'))
    );
  });
}

export function buildProfileContext(profile = {}) {
  const entity = getEntityType(profile.entityType);
  const special = getSpecialRole(profile.specialRole);
  const obligations = getObligationsForProfile(profile);

  return {
    entity,
    special,
    obligations,
    text: obligations
      .map((item) => {
        const targets = item.targets
          ? Object.entries(item.targets).map(([year, value]) => `${year}: ${value}`).join(', ')
          : 'sin meta numérica anual';
        return `- [${item.kind}] ${item.title}. Responsable: ${item.responsible}. Plazo: ${item.deadline.label}. Metas: ${targets}. Fuente: ENIA pp. ${item.sourcePages.join('-')}.`;
      })
      .join('\n'),
  };
}
