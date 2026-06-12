# Seguridad

## Claves y variables

- Nunca subas `.env`, `.env.local` ni claves reales al repositorio.
- Configura `ANTHROPIC_API_KEY` directamente en Vercel.
- No uses nombres con prefijo `VITE_` para secretos, porque Vite expone esas variables al navegador.
- Rota inmediatamente una clave si fue publicada por error.

## Chat con IA

La ruta `/api/chat`:

- valida método, historial, roles y longitud;
- limita la cantidad de mensajes enviados al modelo;
- aplica un límite básico por IP e instancia;
- construye el contexto desde datos internos, no desde texto normativo enviado por el navegador;
- bloquea solicitudes de secretos mediante instrucciones de sistema.

Para una aplicación pública con tráfico significativo se recomienda añadir autenticación, observabilidad, Vercel Firewall y rate limiting persistente.

## Reporte

Antes de publicar un reporte de vulnerabilidad, elimina claves, datos personales y contenido confidencial de capturas o registros.
