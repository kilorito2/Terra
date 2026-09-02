import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import {
  Droplets,
  Facebook,
  Flame,
  Instagram,
  Megaphone,
  Music2,
  PawPrint,
  ShieldCheck,
  Sprout,
  TreeDeciduous,
  Twitter,
  Waves,
  Wind,
  Youtube,
  Zap,
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const stats: { value: string; label: string }[] = [
  {
    value: "423.9 ppm",
    label: "de CO₂ en la atmósfera en 2024, un 53% más que en 1750",
  },
  {
    value: "8.1M ha",
    label: "de bosque perdidas en el mundo solo durante 2024",
  },
  {
    value: "7M",
    label: "muertes prematuras al año por la contaminación del aire",
  },
  {
    value: "66%",
    label: "de la población mundial sufre escasez de agua un mes al año",
  },
];

type Cause = {
  icon: LucideIcon;
  stat: string;
  title: string;
  text: string;
  span: string;
};

const causes: Cause[] = [
  {
    icon: Flame,
    stat: "+1.5 °C",
    title: "Cambio climático",
    text: "El planeta ya cruzó el umbral simbólico de 1.5 °C de calentamiento respecto a la era preindustrial. Quemar combustibles fósiles para transporte e industria sigue siendo la mayor fuente de gases de efecto invernadero.",
    span: "md:col-span-7",
  },
  {
    icon: TreeDeciduous,
    stat: "8.1M ha",
    title: "Deforestación",
    text: "En 2024 el mundo perdió 8.1 millones de hectáreas de bosque, muy por encima de la meta trazada para 2030. Partes de la Amazonía ya emiten más carbono del que logran absorber.",
    span: "md:col-span-5",
  },
  {
    icon: Waves,
    stat: "<10%",
    title: "Contaminación plástica",
    text: "De los 400 millones de toneladas de plástico que se producen cada año, menos del 10% se recicla. Más de un millón de aves marinas mueren por su causa.",
    span: "md:col-span-4",
  },
  {
    icon: PawPrint,
    stat: "1M especies",
    title: "Pérdida de biodiversidad",
    text: "Hasta un millón de especies están en riesgo de extinción. La actividad humana ya alteró más del 70% de la superficie terrestre libre de hielo.",
    span: "md:col-span-4",
  },
  {
    icon: Droplets,
    stat: "4.000M",
    title: "Escasez de agua",
    text: "Casi dos tercios de la población mundial, unos 4.000 millones de personas, enfrentan escasez severa de agua al menos un mes al año.",
    span: "md:col-span-4",
  },
  {
    icon: Wind,
    stat: "7M",
    title: "Contaminación del aire",
    text: "La OMS calcula 7 millones de muertes prematuras cada año por respirar aire contaminado, sobre todo por partículas finas del tráfico y la industria.",
    span: "md:col-span-12",
  },
];

type Action = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const actions: Action[] = [
  {
    icon: Sprout,
    title: "Reduce tu huella",
    text: "Prioriza el transporte eficiente, el consumo consciente y menos plástico de un solo uso.",
  },
  {
    icon: Megaphone,
    title: "Exige políticas reales",
    text: "Vota y presiona por compromisos climáticos vinculantes: la acción colectiva pesa más que la individual.",
  },
  {
    icon: ShieldCheck,
    title: "Protege lo que queda",
    text: "Apoya la reforestación, las áreas protegidas y a las comunidades que cuidan los ecosistemas.",
  },
];

const discoverLinks = [
  "Cambio Climático",
  "Deforestación",
  "Océanos y Plástico",
  "Biodiversidad",
  "Hoja de Ruta 2030",
];

const missionLinks = [
  "Nuestro Origen",
  "El Equipo",
  "Sala de Prensa",
  "Únete a la Causa",
];

const conciergeLinks = [
  "Escríbenos",
  "Privacidad",
  "Términos de Uso",
  "Reportar un Problema",
];

const socialLinks = [
  { icon: Music2, label: "TikTok" },
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "Twitter" },
  { icon: Youtube, label: "YouTube" },
  { icon: Instagram, label: "Instagram" },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="liquid-glass inline-flex items-center rounded-full px-4 py-1.5 text-[11px] uppercase tracking-widest text-white/80">
      {children}
    </span>
  );
}

function StatTile({ value, label, index }: { value: string; label: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: EASE }}
      className="liquid-glass rounded-2xl p-6"
    >
      <p className="text-3xl md:text-4xl font-medium text-white">{value}</p>
      <p className="mt-2 text-xs md:text-sm text-white/60 leading-relaxed">
        {label}
      </p>
    </motion.div>
  );
}

function CauseCard({ icon: Icon, stat, title, text, span, index }: Cause & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: EASE }}
      className={`liquid-glass rounded-2xl p-6 md:p-8 flex flex-col ${span}`}
    >
      <div className="flex items-center justify-between mb-6">
        <Icon className="text-white/70" size={22} strokeWidth={1.5} />
        <span className="text-2xl md:text-3xl font-medium text-white">
          {stat}
        </span>
      </div>
      <h3 className="text-white font-medium mb-2">{title}</h3>
      <p className="text-sm text-white/60 leading-relaxed max-w-2xl">{text}</p>
    </motion.div>
  );
}

function ActionCard({ icon: Icon, title, text, index }: Action & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: EASE }}
      className="liquid-glass rounded-2xl p-6 md:p-8"
    >
      <Icon className="text-white/70 mb-5" size={22} strokeWidth={1.5} />
      <h3 className="text-white font-medium mb-2">{title}</h3>
      <p className="text-sm text-white/60 leading-relaxed">{text}</p>
    </motion.div>
  );
}

function FooterLinkList({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-sm uppercase tracking-wider text-white font-medium mb-4">
        {title}
      </h4>
      <ul className="text-xs space-y-2">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="hover:text-white transition-colors">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <main className="relative w-full min-h-[115vh] overflow-x-hidden flex flex-col items-center font-sans selection:bg-white/20 selection:text-white">
      <video
        className="fixed inset-0 w-full h-full object-cover z-[0]"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_114316_1c7889ad-2885-410e-b493-98119fee0ddb.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="fixed inset-0 z-[1] bg-gradient-to-b from-black/20 via-black/35 to-black/60 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl flex-1 flex flex-col px-6 md:px-10">
        {/* Hero */}
        <section className="flex-1 flex flex-col items-center justify-center text-center gap-6 pt-32 md:pt-40 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE }}
          >
            <Eyebrow>Datos verificados · 2024–2025</Eyebrow>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: EASE }}
            className="text-4xl md:text-6xl lg:text-7xl font-medium text-white max-w-4xl leading-tight"
          >
            Detrás de cada crisis climática hay una causa.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
            className="text-white/70 max-w-xl text-sm md:text-base"
          >
            La Tierra ya superó el umbral de 1.5 °C de calentamiento.
            Entender por qué, y qué hacer al respecto, empieza aquí.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-4"
          >
            <a
              href="#causas"
              className="liquid-glass rounded-full px-8 py-3 text-sm text-white font-medium"
            >
              Explorar las causas
            </a>
            <a
              href="#accion"
              className="text-sm text-white/70 hover:text-white transition-colors underline underline-offset-4"
            >
              Ver cómo ayudar
            </a>
          </motion.div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 pb-24 md:pb-32">
          {stats.map((s, i) => (
            <StatTile key={s.label} value={s.value} label={s.label} index={i} />
          ))}
        </section>

        {/* Causes */}
        <section id="causas" className="scroll-mt-24 pb-24 md:pb-32">
          <div className="flex flex-col items-center text-center gap-4 mb-10 md:mb-14">
            <Eyebrow>Las causas</Eyebrow>
            <h2 className="text-3xl md:text-5xl font-medium text-white max-w-3xl">
              Seis fuerzas están reescribiendo el planeta
            </h2>
            <p className="text-white/60 max-w-2xl text-sm md:text-base">
              Ninguna actúa sola: el clima, los bosques, los océanos y la
              biodiversidad están conectados, y también sus soluciones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
            {causes.map((cause, i) => (
              <CauseCard key={cause.title} {...cause} index={i} />
            ))}
          </div>

          <p className="mt-6 text-[11px] text-white/40 text-center">
            Fuentes: ONU, OMS, IPCC, IRENA / Ember, Forest Declaration
            Assessment Partners (2024–2025).
          </p>
        </section>

        {/* Hope */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="liquid-glass rounded-3xl p-8 md:p-14 mb-24 md:mb-32 flex flex-col md:flex-row items-start md:items-center gap-8"
        >
          <div className="shrink-0 rounded-full p-4 bg-white/5">
            <Zap className="text-white" size={28} strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-medium text-white mb-2">
              La transición ya empezó
            </h3>
            <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-3xl">
              En 2024 las renovables generaron el 31.7% de la electricidad
              mundial, un salto del 9.8% respecto al año anterior. La eólica
              y la solar, juntas, ya superan a la hidroeléctrica. Las causas
              tienen origen humano, y también las salidas.
            </p>
          </div>
        </motion.section>

        {/* Action */}
        <section id="accion" className="scroll-mt-24 pb-24 md:pb-32">
          <div className="flex flex-col items-center text-center gap-4 mb-10 md:mb-14">
            <Eyebrow>Qué puedes hacer</Eyebrow>
            <h2 className="text-3xl md:text-5xl font-medium text-white max-w-3xl">
              Tres acciones que sí mueven la aguja
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {actions.map((action, i) => (
              <ActionCard key={action.title} {...action} index={i} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="liquid-glass w-full rounded-3xl p-6 md:p-10 text-white/70 mt-32 md:mt-64 mb-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-10">
            <div className="md:col-span-5">
              <div className="flex items-center gap-2 text-white mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 256 256"
                  fill="currentColor"
                >
                  <path d="M 4.688 136 C 68.373 136 120 187.627 120 251.312 C 120 252.883 119.967 254.445 119.905 256 L 0 256 L 0 136.096 C 1.555 136.034 3.117 136 4.688 136 Z M 251.312 136 C 252.883 136 254.445 136.034 256 136.096 L 256 256 L 136.095 256 C 136.032 254.438 136.001 252.875 136 251.312 C 136 187.627 187.627 136 251.312 136 Z M 119.905 0 C 119.967 1.555 120 3.117 120 4.688 C 120 68.373 68.373 120 4.687 120 C 3.117 120 1.555 119.967 0 119.905 L 0 0 Z M 256 119.905 C 254.445 119.967 252.883 120 251.312 120 C 187.627 120 136 68.373 136 4.687 C 136 3.117 136.033 1.555 136.095 0 L 256 0 Z" />
                </svg>
                <span className="text-xl font-medium">TERRA</span>
              </div>
              <p className="text-sm leading-relaxed max-w-sm">
                TERRA investiga las causas detrás de la crisis climática y
                comparte esa claridad con todos, de forma gratuita, para que
                cuidar el planeta empiece por entenderlo.
              </p>
            </div>

            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-10">
              <FooterLinkList title="Explorar" links={discoverLinks} />
              <FooterLinkList title="La Misión" links={missionLinks} />
              <FooterLinkList title="Contacto" links={conciergeLinks} />
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
            <p className="text-[10px] uppercase tracking-widest opacity-50">
              Curated by @GotInGeorgiG
            </p>

            <div className="flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-widest opacity-50">
                Únete al viaje:
              </span>
              <div className="flex items-center gap-4">
                {socialLinks.map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="opacity-70 hover:opacity-100 transition-colors hover:text-white"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.footer>
      </div>
    </main>
  );
}

export default App;
