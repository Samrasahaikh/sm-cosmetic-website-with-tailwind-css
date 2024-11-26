import Hero from "@/components/hero"
import Feature from "@/components/feature"
import NewArrival from "@/components/newArrival"
import Category from "@/components/category"
import BlockSection from "@/components/blockSection"
// import About from "./about/page"
// import Blog from "./blog/page" 
// import Contact from "./contact/page"

export default function Home(){
  return(
    <main>
      <Hero />
      <Feature />
      <NewArrival />
      <Category />
      <BlockSection />
      {/* <About />
      <Blog />
      <Contact /> */}
    </main>
  )
}