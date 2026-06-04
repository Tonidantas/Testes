import { Scissors, Instagram, Facebook, MapPin, Clock, Phone } from "lucide-react"

const footerLinks = {
  Serviços: ["Corte Clássico", "Barba Completa", "Degradê", "Coloração", "Tratamentos"],
  Links: ["Sobre Nós", "Nosso Time", "Galeria", "Blog", "Agendar"],
}

export default function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-white/4 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="w-4 h-4 text-amber-400" />
              <span className="text-white font-black text-base tracking-tight">
                BLADE <span className="text-amber-400">&</span> FADE
              </span>
            </div>
            <p className="text-neutral-600 text-sm leading-relaxed mb-6">
              Premium barbershop desde 2016. Onde o estilo encontra a precisão.
            </p>
            <div className="flex gap-2">
              {[Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/8 hover:border-amber-400/40 flex items-center justify-center text-white/30 hover:text-amber-400 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, items]) => (
            <div key={title}>
              <p className="text-white font-bold mb-5 text-xs uppercase tracking-widest">{title}</p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-neutral-600 hover:text-white text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <p className="text-white font-bold mb-5 text-xs uppercase tracking-widest">Contato</p>
            <div className="space-y-3">
              {[
                { icon: MapPin, text: "Rua das Flores, 123\nSão Paulo, SP — 01310-100" },
                { icon: Clock, text: "Seg–Sex: 9h–20h\nSábado: 9h–18h" },
                { icon: Phone, text: "(11) 9 9999-9999\nWhatsapp disponível" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-2.5 text-neutral-600 text-sm">
                  <Icon className="w-4 h-4 text-amber-400/50 shrink-0 mt-0.5" />
                  <p className="whitespace-pre-line">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/4 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-700 text-xs">
            © 2024 Blade & Fade Barbershop. Todos os direitos reservados.
          </p>
          <p className="text-neutral-700 text-xs">
            Feito com ✦ em São Paulo
          </p>
        </div>
      </div>
    </footer>
  )
}
