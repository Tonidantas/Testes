import Nav from "@/components/barbershop/nav"
import Hero from "@/components/barbershop/hero"
import ToolsScroll from "@/components/barbershop/tools-scroll"
import Services from "@/components/barbershop/services"
import Showcase from "@/components/barbershop/showcase"
import Team from "@/components/barbershop/team"
import Booking from "@/components/barbershop/booking"
import Footer from "@/components/barbershop/footer"

export default function Home() {
  return (
    <main className="bg-[#080808] overflow-x-hidden">
      <Nav />
      <Hero />
      <ToolsScroll />
      <Services />
      <Showcase />
      <Team />
      <Booking />
      <Footer />
    </main>
  )
}
