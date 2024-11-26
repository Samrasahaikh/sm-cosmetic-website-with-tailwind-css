import Hero from "@/components/hero"
import Feature from "@/components/feature"
import NewArrival from "@/components/newArrival"
import Category from "@/components/category"
import BlockSection from "@/components/blockSection"


export default function Home(){
  return(
    <main>
      <Hero />
      <Feature />
      <NewArrival />
      <Category />
      <BlockSection />

    </main>
  )
}