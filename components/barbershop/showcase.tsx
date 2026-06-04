import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import Image from "next/image"

export default function Showcase() {
  return (
    <section className="bg-[#080808]" id="galeria">
      <ContainerScroll
        titleComponent={
          <div className="text-center">
            <p className="text-amber-400 font-mono text-xs tracking-[0.35em] uppercase mb-5">
              Nossa Barbearia
            </p>
            <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] font-black text-white tracking-tighter leading-none">
              UM ESPAÇO <br />
              <span className="text-amber-400">DIFERENCIADO</span>
            </h2>
          </div>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1400&q=80"
          alt="Interior da Blade & Fade Barbershop"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </section>
  )
}
