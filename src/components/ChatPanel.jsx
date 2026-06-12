import { Bot, LoaderCircle, MessageCircleQuestion, Send, Sparkles, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const starterMessages = [
  {
    role: 'assistant',
    content: '¡Hola! Soy **NIA**, tu copiloto de la ENIA. Puedo ayudarte a entender responsables, plazos, metas y primeros pasos según el perfil de tu entidad. No reemplazo la revisión jurídica institucional.',
  },
];

const suggestions = [
  '¿Cuáles son mis 3 prioridades?',
  '¿Qué debe hacer el Comité de Gobierno Digital?',
  'Explícame la NTP-ISO/IEC 42001 en lenguaje simple',
];

function renderText(text) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={index}>{part.slice(2, -2)}</strong>;
    return part.split('\n').map((line, lineIndex) => <span key={`${index}-${lineIndex}`}>{line}{lineIndex < part.split('\n').length - 1 && <br />}</span>);
  });
}

export default function ChatPanel({ profile, open, onClose }) {
  const [messages, setMessages] = useState(starterMessages);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, loading]);

  async function sendMessage(text = input) {
    const clean = text.trim();
    if (!clean || loading) return;

    const nextMessages = [...messages, { role: 'user', content: clean }];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          profile,
          messages: nextMessages.map(({ role, content }) => ({ role, content })),
        }),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || 'No se pudo consultar a Claude.');
      setMessages((current) => [...current, { role: 'assistant', content: data.reply }]);
    } catch (error) {
      setMessages((current) => [...current, {
        role: 'assistant',
        content: `No pude conectarme al servicio de IA. ${error.message} Revisa que ANTHROPIC_API_KEY esté configurada en Vercel y vuelve a intentar.`,
      }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <aside className={`${open ? 'translate-x-0' : 'translate-x-full'} fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-white/10 bg-slate-950/95 shadow-2xl backdrop-blur-xl transition-transform duration-300 lg:sticky lg:top-4 lg:z-10 lg:h-[calc(100vh-2rem)] lg:translate-x-0 lg:rounded-[2rem] lg:border`}>
      <header className="flex items-center justify-between border-b border-white/10 p-4">
        <div className="flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 text-slate-950">
            <Bot size={23} />
            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-slate-950 bg-emerald-400" />
          </div>
          <div>
            <div className="flex items-center gap-2"><h2 className="font-black text-white">NIA</h2><span className="rounded-full bg-violet-500/15 px-2 py-0.5 text-[10px] font-bold text-violet-200">Claude API</span></div>
            <p className="text-xs text-slate-400">Copiloto de obligaciones ENIA</p>
          </div>
        </div>
        <button type="button" onClick={onClose} className="rounded-xl p-2 text-slate-400 hover:bg-white/5 hover:text-white lg:hidden"><X size={20} /></button>
      </header>

      <div className="scrollbar-thin flex-1 space-y-4 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 ${message.role === 'user' ? 'rounded-br-md bg-violet-500 text-white' : 'rounded-bl-md border border-white/10 bg-white/[.045] text-slate-200'}`}>
              {renderText(message.content)}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="flex items-center gap-2 rounded-2xl rounded-bl-md border border-white/10 bg-white/[.045] px-4 py-3 text-sm text-slate-300">
              <LoaderCircle size={16} className="animate-spin text-cyan-300" /> Revisando la ruta…
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      <div className="border-t border-white/10 p-4">
        <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
          {suggestions.map((suggestion) => (
            <button key={suggestion} type="button" onClick={() => sendMessage(suggestion)} className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 hover:border-violet-400/50 hover:text-white">
              {suggestion}
            </button>
          ))}
        </div>
        <form onSubmit={(event) => { event.preventDefault(); sendMessage(); }} className="flex items-end gap-2 rounded-2xl border border-white/10 bg-slate-900 p-2 focus-within:border-violet-400/60">
          <textarea
            rows="1"
            maxLength="2500"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                sendMessage();
              }
            }}
            placeholder="Pregunta por tu ruta ENIA…"
            className="max-h-28 min-h-10 flex-1 resize-none bg-transparent px-2 py-2 text-sm text-white outline-none placeholder:text-slate-500"
          />
          <button type="submit" disabled={!input.trim() || loading} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 text-slate-950 transition hover:scale-105 disabled:opacity-40"><Send size={18} /></button>
        </form>
        <p className="mt-2 flex items-center justify-center gap-1 text-[10px] text-slate-600"><Sparkles size={11} /> Respuestas orientativas basadas en el anexo ENIA incorporado.</p>
      </div>
    </aside>
  );
}
