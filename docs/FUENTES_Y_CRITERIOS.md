# Fuentes y criterios de cálculo

## Referencias principales

1. Presidencia del Consejo de Ministros. **Resolución Ministerial N.° 152-2026-PCM**.
2. Presidencia del Consejo de Ministros. **Anexo: Estrategia Nacional de Inteligencia Artificial 2026-2030**.
3. Plataforma Digital Única del Estado Peruano. **Calendario oficial de feriados 2026**.
4. Presidencia del Consejo de Ministros. **Decreto Supremo N.° 075-2026-PCM**, día no laborable del sector público del 27 de julio de 2026.
5. TUO de la Ley N.° 27444, Ley del Procedimiento Administrativo General, para el criterio general del cómputo de plazos.

## Enlaces usados por la interfaz

- https://www.gob.pe/institucion/pcm/normas-legales/8081563-152-2026-pcm
- https://cdn.www.gob.pe/uploads/document/file/9902385/8081563-anexo-rm-n-152-2026-pcm-enia%282%29.pdf?v=1778018141
- https://www.gob.pe/feriados
- https://www.gob.pe/institucion/pcm/normas-legales/8180439-075-2026-pcm

## Criterio implementado

- Fecha de publicación utilizada: 1 de mayo de 2026.
- El primer día computable es el siguiente día hábil.
- Se excluyen sábados, domingos, feriados nacionales y los días no laborables expresamente incorporados en `assets/config.js`.
- Los plazos de 90 y 120 días hábiles se cuentan incluyendo el último día hábil del periodo.
- El semáforo usa días hábiles restantes: verde para más de 30; amarillo entre 10 y 30; rojo para menos de 10 o vencido.

## Mantenimiento

Antes de usar la aplicación para seguimiento oficial, valide si se han publicado nuevas normas que modifiquen los días no laborables o los plazos. La fecha de última revisión del calendario se encuentra en `assets/config.js`.
