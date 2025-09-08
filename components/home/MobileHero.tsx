"use client"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from '@/components/ui/carousel-autoplay'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function MobileHero() {
  return (
    <section className="block md:hidden w-full bg-primary/90 border-b-4 border-primary">
      {/* Top Titles */}
  <div className="text-center text-black pt-8 pb-4 px-4">
        <h1 className="text-2xl font-bold mb-1">ADRILINK LIMITED</h1>
        <h2 className="text-lg font-semibold mb-2">Your Global Logistics Partner</h2>
      </div>
      {/* Carousel */}
      <div className="w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-lg">
        <Carousel className="h-[180px] w-full" opts={{ loop: true }} plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}>
          <CarouselContent className="h-full">
            {["/main.png", "/cargo.jpg", "/customs.jpg"].map((src, idx) => (
              <CarouselItem key={src} className="h-full">
                <div className="relative h-full w-full">
                  <img
                    src={src}
                    alt={`Hero Slide ${idx + 1}`}
                    className="object-cover w-full h-full min-h-[180px] max-h-[220px]"
                  />
                  <div className="absolute inset-0 bg-primary/60"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      {/* Rest of hero info below carousel */}
  <div className="text-center text-black px-4 pt-6 pb-8">
        <p className="text-base mb-6 max-w-xs mx-auto">
          We provide total logistics services: international freight forwarding, custom clearance and transportation to wherever you are in East African regions
        </p>
        <div className="flex flex-col gap-3 items-center mb-6">
          <a href="#services" className="w-full">
            <Button size="lg" className="w-full bg-accent text-white hover:bg-accent/90 text-base">Our Services</Button>
          </a>
          <a href="#contact" className="w-full">
            <Button size="lg" variant="outline" className="w-full border-accent text-black hover:bg-white hover:text-black text-base bg-transparent">Get Quote</Button>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
          <div className="text-center">
            <div className="text-xl font-bold text-black">2022</div>
            <div className="text-xs">Established</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-black">100%</div>
            <div className="text-xs">East Africa Coverage</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-black">24/7</div>
            <div className="text-xs">Support</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-black">Global</div>
            <div className="text-xs">Network</div>
          </div>
        </div>
      </div>
    </section>
  )
}
