"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from '@/components/ui/carousel-autoplay'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Badge } from "@/components/ui/badge"
import {
  Plane,
  Ship,
  Package,
  FileCheck,
  Home,
  Warehouse,
  Truck,
  Thermometer,
  Globe,
  Shield,
  Clock,
  Users,
  Mail,
  Phone,
  MapPin,
  Star,
  CheckCircle,
  ChevronDown,
  HelpCircle,
  Search,
  Navigation,
  AlertCircle,

} from "lucide-react"

export default function AdrilinkLanding() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [trackingResult, setTrackingResult] = useState(null)
  const [isTracking, setIsTracking] = useState(false)

  // Service popups state
  const [servicePopup, setServicePopup] = useState<string|null>(null)

  const handleTracking = async () => {
    if (!trackingNumber.trim()) return

    setIsTracking(true)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

  
  }

  // Animation variants for sections and images
  const sectionVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] } } // cubic-bezier for easeInOut
  }
  const imageVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: [0.42, 0, 0.58, 1] } } // cubic-bezier for easeInOut
  }

  return (
  <div className="min-h-screen bg-background">
      {/* Animated Hero Section */}
      <motion.section
        id="home"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
  className="relative py-20 lg:py-32 overflow-hidden border-b-4 border-primary"
      >

        {/* Hero Image Carousel */}
        <div className="absolute inset-0">
          <Carousel className="h-full w-full" opts={{ loop: true }} plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}>
            <CarouselContent className="h-full">
              {["/cargo.jpg", "/customs.jpg", "/sea.jpg"].map((src, idx) => (
                <CarouselItem key={src} className="h-full">
                  <div className="relative h-full w-full">
                    <img
                      src={src}
                      alt={`Hero Slide ${idx + 1}`}
                      className="object-cover w-full"
                      style={{ height: '1200px' }}
                    />
                
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          {/* <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance text-primary uppercase font-bold">ADRILINK LIMITED</h1> */}
          <br />
          <br />
         
        
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-balance text-white uppercase font-bold">YOUR GLOBAL LOGISTICS PARTNER</h2>
          {/* <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-pretty text-primary uppercase font-bold">
            WE PROVIDE TOTAL LOGISTICS SERVICES: INTERNATIONAL FREIGHT FORWARDING, CUSTOM CLEARANCE AND TRANSPORTATION TO WHEREVER YOU ARE IN EAST AFRICAN REGIONS
          </p> */}
     
          <br />
          <br />
          <br />
        
         
         

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <a href="#services">
                <Button size="lg" className="bg-accent text-white hover:bg-accent/90 text-lg px-8">
                  Our Services
                </Button>
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <a href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent text-black hover:bg-white hover:text-black text-lg px-8 bg-transparent"
                >
                  Get Quote
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <br />
          <br />
          <br />
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            variants={sectionVariant}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white uppercase font-bold">2022</div>
              <div className="text-sm text-white uppercase font-bold">Established</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white uppercase font-bold">100%</div>
              <div className="text-sm text-white uppercase font-bold">East Africa Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white uppercase font-bold">24/7</div>
              <div className="text-sm text-white uppercase font-bold">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white uppercase font-bold">Global</div>
              <div className="text-sm text-white uppercase font-bold">Network</div>
            </div>
          </motion.div>
          <br />
          <br />
        </div>
      </motion.section>

      
      {/* About Section */}
  <section id="about" className="py-20 bg-gradient-to-br from-blue-50 via-muted/30 to-primary/10 border-b-4 border-blue-300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-black">About Adrilink Limited</h2>
            <p className="text-lg text-black mb-8 text-pretty">
              Adrilink Limited is a logistics company based in Kenya, incorporated on October 12, 2022, with head office
              in Nairobi.
            </p>
            <p className="text-lg text-black text-pretty">
              We weave excellent logistics services into a global network with multi-modal transportation capabilities,
              an unrivalled distribution system and superior information technology that provides total logistics
              solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.img
              src="/main.png"
              className="rounded-lg shadow-lg w-full"
              variants={imageVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            />
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-black mb-2">Established Excellence</h3>
                  <p className="text-black">
                    Founded in 2022 with a vision to revolutionize logistics in East Africa
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-black mb-2">Strategic Location</h3>
                  <p className="text-black">Based in Nairobi, Kenya - the gateway to East African markets</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-black mb-2">Global Network</h3>
                  <p className="text-black">
                    Worldwide partnerships ensuring seamless international logistics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-primary/5 via-background to-primary/5 border-2 border-primary/20">
              <CardHeader className="text-center pb-4">
                <div className="relative">
                  <div className="w-20 h-20 bg-primary/10 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 transform transition-transform duration-500 group-hover:rotate-12">
                    <Star className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -inset-2 bg-primary/5 text-white rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <CardTitle className="text-2xl text-black">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-black text-pretty">
                  To design, build and deliver flexible, integrated, best in class and cost effective logistics
                  solutions.
                </p>
                <div className="mt-6 pt-6 border-t border-primary/10">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm text-black">Excellence in Every Delivery</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-accent/5 via-background to-accent/5 border-2 border-accent/20">
              <CardHeader className="text-center pb-4">
                <div className="relative">
                  <div className="w-20 h-20 bg-accent/10 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 transform transition-transform duration-500 group-hover:rotate-12">
                    <Globe className="w-10 h-10 text-accent" />
                  </div>
                  <div className="absolute -inset-2 bg-accent/5 text-white rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <CardTitle className="text-2xl text-black">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-black text-pretty">
                  To be recognized as the expert in logistic services with top-notch Customer Service.
                </p>
                <div className="mt-6 pt-6 border-t border-accent/10">
                  <div className="flex items-center justify-center space-x-2">
                    <Star className="w-4 h-4 text-accent" />
                    <span className="text-sm text-black">Setting Industry Standards</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
  <section id="services" className="py-20 bg-gradient-to-br from-primary/5 via-muted/30 to-accent/10 border-b-4 border-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-black">Comprehensive Logistics Solutions</h2>
            <p className="text-lg text-black max-w-2xl mx-auto text-pretty">
              From air and sea freight to customs clearance and door-to-door delivery, we provide end-to-end logistics
              services across East Africa and beyond.
            </p>
          </div>

          {/* Large Featured Services */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Air Freight */}
            <div className="group relative h-[400px] overflow-hidden rounded-xl">
              <img 
                 src="/cargo.jpg"
                alt="Air Freight Services"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#0073E7' }}>
                      <Plane className="w-6 h-6" style={{ color: '#fff' }} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Air Freight</h3>
                  </div>
                  <p className="text-white/90 mb-4 max-w-md">
                    International air cargo solutions offering the fastest and most cost-effective transport through our global network.
                  </p>
                  <Button variant="outline" className="text-white" style={{ backgroundColor: '#0073E7', borderColor: '#0073E7' }} onClick={() => setServicePopup("air")}>Read More</Button>
                </div>
              </div>
            </div>

            {/* Sea Freight */}
            <div className="group relative h-[400px] overflow-hidden rounded-xl">
              <img 
                src="/sea.jpg"
                alt="Sea Freight Services"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#0073E7' }}>
                      <Ship className="w-6 h-6" style={{ color: '#fff' }} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Sea Freight</h3>
                  </div>
                  <p className="text-white/90 mb-4 max-w-md">
                    FCL and LCL services with comprehensive tracking and daily updates for complete shipment visibility.
                  </p>
                  <Button variant="outline" className="text-white" style={{ backgroundColor: '#0073E7', borderColor: '#0073E7' }} onClick={() => setServicePopup("sea")}>Read More</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Other Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Consolidation */}
            <div className="group relative h-[300px] overflow-hidden rounded-xl">
              <img 
                src="/main.jpg"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#0073E7' }}>
                      <Package className="w-5 h-5" style={{ color: '#fff' }} />
                    </div>
                    <h3 className="text-xl font-bold text-white">Consolidation</h3>
                  </div>
                  <p className="text-white/90 text-sm mb-4">
                    Cost-effective groupage services for multiple origins and destinations.
                  </p>
                  <Button variant="outline" className="text-white" style={{ backgroundColor: '#0073E7', borderColor: '#0073E7' }} onClick={() => setServicePopup("consolidation")}>Read More</Button>
                </div>
              </div>
            </div>

            {/* Customs Clearance */}
            <div className="group relative h-[300px] overflow-hidden rounded-xl">
              <img 
                src="/customs.jpg"
                alt="Customs Clearance Services"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#0073E7' }}>
                      <FileCheck className="w-5 h-5" style={{ color: '#fff' }} />
                    </div>
                    <h3 className="text-xl font-bold text-white">Customs Clearance</h3>
                  </div>
                  <p className="text-white/90 text-sm mb-4">
                    Expert customs brokerage with Africa-wide coverage and compliance.
                  </p>
                  <Button variant="outline" className="text-white" style={{ backgroundColor: '#0073E7', borderColor: '#0073E7' }} onClick={() => setServicePopup("customs")}>Read More</Button>
                </div>
              </div>
            </div>

            {/* Warehousing */}
            <div className="group relative h-[300px] overflow-hidden rounded-xl">
              <img 
                src="/warehousing.jpg"
                alt="Warehousing Services"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#0073E7' }}>
                      <Warehouse className="w-5 h-5" style={{ color: '#fff' }} />
                    </div>
                    <h3 className="text-xl font-bold text-white">Warehousing</h3>
                  </div>
                  <p className="text-white/90 text-sm mb-4">
                    Strategic storage and distribution solutions with inventory control.
                  </p>
                  <Button variant="outline" className="text-white" style={{ backgroundColor: '#0073E7', borderColor: '#0073E7' }} onClick={() => setServicePopup("warehousing")}>Read More</Button>
                </div>
              </div>
            </div>

            {/* Door to Door */}
            <div className="group relative h-[300px] overflow-hidden rounded-xl">
              <img 
                src="/door-door.jpg"
                alt="Door to Door Services"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#0073E7' }}>
                      <Truck className="w-5 h-5" style={{ color: '#fff' }} />
                    </div>
                    <h3 className="text-xl font-bold text-white">Door to Door</h3>
                  </div>
                  <p className="text-white/90 text-sm mb-4">
                    Complete supply chain control with comprehensive coverage.
                  </p>
                  <Button variant="outline" className="text-white" style={{ backgroundColor: '#0073E7', borderColor: '#0073E7' }} onClick={() => setServicePopup("door")}>Read More</Button>
                </div>
              </div>
            </div>

        

            {/* Packing Services */}
            <div className="group relative h-[300px] overflow-hidden rounded-xl">
              <img 
                src="/packing.jpg"
                alt="Packing Services"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#0073E7' }}>
                      <Home className="w-5 h-5" style={{ color: '#fff' }} />
                    </div>
                    <h3 className="text-xl font-bold text-white">Packing Services</h3>
                  </div>
                  <p className="text-white/90 text-sm mb-4">
                    Professional packing for local and international moves.
                  </p>
                  <Button variant="outline" className="text-white" style={{ backgroundColor: '#0073E7', borderColor: '#0073E7' }} onClick={() => setServicePopup("packing")}>Read More</Button>
                </div>
              </div>
            </div>
          </div>
      {/* Service Popups */}
      {servicePopup === "air" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setServicePopup(null)}>
          <div
            className="max-w-lg w-full max-h-[90vh] sm:max-h-[600px] overflow-y-auto rounded-xl shadow-2xl p-8 relative"
            style={{ background: 'linear-gradient(135deg, #0073E7 0%, #4FC3F7 100%)' }}
            onClick={e => e.stopPropagation()}
          >
            <button className="absolute top-4 right-4 text-black hover:text-gray-700 text-xl" onClick={() => setServicePopup(null)}>&times;</button>
            <h3 className="text-2xl font-bold mb-4 text-black">Airfreight Import and Export</h3>
            <p className="mb-2 font-semibold text-black">Main Description</p>
            <p className="mb-4 text-black">In conjunction with our worldwide network of Partners, Associates and Branch offices, we can arrange Air import and export from any country to any destination.</p>
            <p className="mb-2 font-semibold text-black">Service Details</p>
            <p className="mb-4 text-black">We offer a comprehensive range of international air cargo solutions ensuring your air cargo travels the safest, fastest and most cost-effective way possible.</p>
            <p className="mb-2 font-semibold text-black">Expertise</p>
            <p className="mb-4 text-black">Our experience in the provision of airfreight, air charters, and aviation support and management services covers the complete range of fixed wing operations. In addition to traditional airfreight services, We provide freight handling services and liaison services with local civil aviation.</p>
          </div>
        </div>
      )}
      {servicePopup === "sea" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setServicePopup(null)}>
          <div
            className="max-w-lg w-full max-h-[90vh] sm:max-h-[600px] overflow-y-auto rounded-xl shadow-2xl p-8 relative"
            style={{ background: 'linear-gradient(135deg, #0073E7 0%, #B3E5FC 100%)' }}
            onClick={e => e.stopPropagation()}
          >
            <button className="absolute top-4 right-4 text-black hover:text-gray-700 text-xl" onClick={() => setServicePopup(null)}>&times;</button>
            <h3 className="text-2xl font-bold mb-4 text-black">Sea freight Import & Export</h3>
            <p className="mb-2 font-semibold text-black">Service Overview</p>
            <ul className="mb-4 list-disc pl-5 text-black">
              <li>FCL and LCL import and export</li>
              <li>Issuance and verification of shipping documentation</li>
              <li>Export and import customs clearance</li>
              <li>Certified industrial packing and crating</li>
              <li>Packing and crating of household goods</li>
              <li>Warehousing, assembly and distribution logistics</li>
              <li>Letter of credit processing</li>
              <li>Part & full vessel charter</li>
              <li>Conventional shipments (break-bulk, dry & liquid bulk)</li>
              <li>Volga-Don Sea/River navigation</li>
              <li>Sea/Air transportation</li>
              <li>Sea/Road and Sea/Rail Intermodal</li>
            </ul>
            <p className="mb-2 font-semibold text-black">Comprehensive Services</p>
            <p className="mb-4 text-black">We offer comprehensive sea freight services via a worldwide network for FCL & LCL shipments, break bulk, project logistics and oversized.</p>
            <p className="mb-2 font-semibold text-black">Equipment & Capabilities</p>
            <p className="mb-4 text-black">Whether it is in containers, special equipment or hazardous cargo, we are equipped with the tools, knowledge and a shipping line network able to handle all type of load.</p>
            <p className="mb-2 font-semibold text-black">Tracking & Delivery</p>
            <p className="mb-4 text-black">An integrated tracking service will provide you with Custom-tailored daily email reports. From Port handling services to customs clearance, storage and forwarding, we will ensure your cargo is delivered and handled in a safe and timely manner.</p>
            <p className="mb-2 font-semibold text-black">Service Options</p>
            <p className="mb-4 text-black">The choice of service includes conference, non-conference lines and charter vessels.</p>
          </div>
        </div>
      )}
      {servicePopup === "packing" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setServicePopup(null)}>
          <div
            className="max-w-lg w-full max-h-[90vh] sm:max-h-[600px] overflow-y-auto rounded-xl shadow-2xl p-8 relative"
            style={{ background: 'linear-gradient(135deg, #0073E7 0%, #E1F5FE 100%)' }}
            onClick={e => e.stopPropagation()}
          >
            <button className="absolute top-4 right-4 text-black hover:text-gray-700 text-xl" onClick={() => setServicePopup(null)}>&times;</button>
            <h3 className="text-2xl font-bold mb-4 text-black">Packing & Removals</h3>
            <p className="mb-2 font-semibold text-black">Team Expertise</p>
            <p className="mb-4 text-black">Adrilink Ltd has qualified team dealing specifically in both local and international packing and removals. We offer a door-to-door solution for both import and export personal effects via our worldwide network.</p>
            <p className="mb-2 font-semibold text-black">Special Care</p>
            <p className="mb-4 text-black">Personal effects are normally very fragile and need attention to detail and careful handling.</p>
            <p className="mb-2 font-semibold text-black">Our Procedures</p>
            <ul className="mb-4 list-disc pl-5 text-black">
              <li>A survey of the personal effects</li>
              <li>Professional packing</li>
              <li>Collection of shipment and storage in a closed warehouse awaiting freight</li>
              <li>Coordination with international agent partners</li>
              <li>Freight booking(s) done</li>
              <li>Freight shipment</li>
              <li>Advise international agent partners</li>
              <li>Follow-up and sending of consistent up-dates to our customer advising them on the status of their shipment</li>
            </ul>
          </div>
        </div>
      )}
      {servicePopup === "consolidation" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setServicePopup(null)}>
          <div
            className="max-w-lg w-full max-h-[90vh] sm:max-h-[600px] overflow-y-auto rounded-xl shadow-2xl p-8 relative"
            style={{ background: 'linear-gradient(135deg, #0073E7 0%, #B3E5FC 100%)' }}
            onClick={e => e.stopPropagation()}
          >
            <button className="absolute top-4 right-4 text-black hover:text-gray-700 text-xl" onClick={() => setServicePopup(null)}>&times;</button>
            <h3 className="text-2xl font-bold mb-4 text-black">Airfreight & Sea freight Consolidation</h3>
            <p className="mb-2 font-semibold text-black">Service Description</p>
            <p className="mb-4 text-black">We also offer consolidation or groupage services from most origins and selected destinations for both airfreight and sea freight.</p>
          </div>
        </div>
      )}
      {servicePopup === "warehousing" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setServicePopup(null)}>
          <div
            className="max-w-lg w-full max-h-[90vh] sm:max-h-[600px] overflow-y-auto rounded-xl shadow-2xl p-8 relative"
            style={{ background: 'linear-gradient(135deg, #0073E7 0%, #E1F5FE 100%)' }}
            onClick={e => e.stopPropagation()}
          >
            <button className="absolute top-4 right-4 text-black hover:text-gray-700 text-xl" onClick={() => setServicePopup(null)}>&times;</button>
            <h3 className="text-2xl font-bold mb-4 text-black">Logistics & Warehousing</h3>
            <p className="mb-2 font-semibold text-black">Service Listing</p>
            <p className="mb-4 text-black">Our strategically located warehousing facilities are designed to optimize storage and streamline delivery across East Africa, ensuring efficiency, reliability, and seamless support for businesses of all sizes.</p>
          </div>
        </div>
      )}
      {servicePopup === "customs" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setServicePopup(null)}>
          <div
            className="max-w-lg w-full max-h-[90vh] sm:max-h-[600px] overflow-y-auto rounded-xl shadow-2xl p-8 relative"
            style={{ background: 'linear-gradient(135deg, #0073E7 0%, #B3E5FC 100%)' }}
            onClick={e => e.stopPropagation()}
          >
            <button className="absolute top-4 right-4 text-black hover:text-gray-700 text-xl" onClick={() => setServicePopup(null)}>&times;</button>
            <h3 className="text-2xl font-bold mb-4 text-black">Customs Clearance Services</h3>
            <p className="mb-2 font-semibold text-black">Quality Service</p>
            <p className="mb-4 text-black">We continue to provide quality customs broker and clearance services to our clients all over Africa. Strict compliance to proper customs clearance and procedures are vital.</p>
          </div>
        </div>
      )}
      {servicePopup === "door" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setServicePopup(null)}>
          <div
            className="max-w-lg w-full max-h-[90vh] sm:max-h-[600px] overflow-y-auto rounded-xl shadow-2xl p-8 relative"
            style={{ background: 'linear-gradient(135deg, #0073E7 0%, #4FC3F7 100%)' }}
            onClick={e => e.stopPropagation()}
          >
            <button className="absolute top-4 right-4 text-black hover:text-gray-700 text-xl" onClick={() => setServicePopup(null)}>&times;</button>
            <h3 className="text-2xl font-bold mb-4 text-black">Door to Door</h3>
            <p className="mb-2 font-semibold text-black">Competitive Advantage</p>
            <p className="mb-4 text-black">We deliver competitive advantage to each of our client's supply chains by offering a wide range of global integrated logistics to a customer base that stretches to the most remote locations of East & Central Africa.</p>
            <p className="mb-2 font-semibold text-black">Efficient Integration</p>
            <p className="mb-4 text-black">Our efficient integration of logistics services means that we control the entire supply chain and cut out unnecessary mark-ups and intermediaries. Our clients get exceptional value in a simplified price-per-ton delivered-to-the-door format.</p>
          </div>
        </div>
      )}
      {servicePopup === "container" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setServicePopup(null)}>
          <div
            className="max-w-lg w-full max-h-[90vh] sm:max-h-[600px] overflow-y-auto rounded-xl shadow-2xl p-8 relative"
            style={{ background: 'linear-gradient(135deg, #0073E7 0%, #B3E5FC 100%)' }}
            onClick={e => e.stopPropagation()}
          >
            <button className="absolute top-4 right-4 text-black hover:text-gray-700 text-xl" onClick={() => setServicePopup(null)}>&times;</button>
            <h3 className="text-2xl font-bold mb-4 text-black">Container Services</h3>
            <p className="mb-2 font-semibold text-black">Specialized Equipment</p>
            <p className="mb-4 text-black">Whether you are shipping vaccines or perishable items, our containers are equipped to provide advanced transport you can rely on.</p>
          </div>
        </div>
      )}
        </div>
      </section>

      {/* Why Choose Us */}
  <section id="why-choose-us" className="py-20 bg-gradient-to-br from-primary/10 via-muted/20 to-accent/10 border-b-4 border-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-black">Why Choose Adrilink Limited</h2>
            <p className="text-lg text-black max-w-2xl mx-auto text-pretty">
              We combine competitive rates with quality service and local expertise to deliver exceptional logistics
              solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Competitive Rates</h3>
              <p className="text-black">
                Our offices offer competitive rates on all our services without compromising quality.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Quality Service</h3>
              <p className="text-black">
                We look forward to offering you our quality service with attention to detail.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Global Network</h3>
              <p className="text-black">
                Worldwide partners and associates ensure seamless international operations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Local Expertise</h3>
              <p className="text-black">
                Deep understanding of East African market dynamics and regulations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Complete Solutions</h3>
              <p className="text-black">End-to-end logistics management from origin to final destination.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Reliable Timing</h3>
              <p className="text-black">
                Consistent delivery schedules and real-time tracking for peace of mind.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="#contact">
              <Button size="lg" className="bg-accent text-black hover:bg-accent/90 text-lg px-8">
                Get Your Quote Today
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
  <section id="faq" className="py-20 bg-gradient-to-br from-blue-50 via-primary/10 to-accent/10 border-b-4 border-blue-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-black">Frequently Asked Questions</h2>
            <p className="text-lg text-black max-w-2xl mx-auto text-pretty">
              Get answers to common questions about our logistics services, shipping processes, and customs procedures.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* General Services FAQ */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-6">
                  <HelpCircle className="w-5 h-5 text-accent" />
                  <h3 className="text-xl font-semibold text-black">General Services</h3>
                </div>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <span className="font-medium text-black">What logistics services do you offer?</span>
                    <ChevronDown className="w-4 h-4 text-black" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 text-black text-sm">
                    We provide comprehensive logistics solutions including air freight import/export, sea freight (FCL &
                    LCL), customs clearance, door-to-door delivery, warehousing, consolidation services, packing &
                    removals, and temperature-controlled container services across East Africa and globally.
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <span className="font-medium text-black">Which countries do you serve?</span>
                    <ChevronDown className="w-4 h-4 text-black" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 text-black text-sm">
                    Our primary coverage includes Kenya, Uganda, Tanzania, Rwanda, and Burundi. We also provide
                    international services to Europe, Asia, Americas, and Middle East through our global network of
                    partners and agents.
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <span className="font-medium text-black">How do I get a shipping quote?</span>
                    <ChevronDown className="w-4 h-4 text-black" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 text-black text-sm">
                    You can request a quote by contacting us via email at danslauscbukhala@gmail.com, calling our
                    office, or filling out our contact form. Please provide details about your cargo (weight,
                    dimensions, origin, destination, and preferred service type) for an accurate quote.
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <span className="font-medium text-black">Do you handle dangerous goods?</span>
                    <ChevronDown className="w-4 h-4 text-black" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 text-black text-sm">
                    Yes, we are certified to handle dangerous goods (DG) shipments by both air and sea. Our team is
                    trained in IATA and IMDG regulations. Please inform us about dangerous goods during booking so we
                    can ensure proper documentation and handling procedures.
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <span className="font-medium text-black">What are your business hours?</span>
                    <ChevronDown className="w-4 h-4 text-black" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 text-black text-sm">
                    Our office hours are Monday to Friday: 8:00 AM - 6:00 PM, Saturday: 9:00 AM - 2:00 PM. We're closed
                    on Sundays. However, we provide 24/7 support for urgent shipments and tracking inquiries through our
                    emergency contact line.
                  </CollapsibleContent>
                </Collapsible>
              </div>

              {/* Shipping & Customs FAQ */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-6">
                  <FileCheck className="w-5 h-5 text-accent" />
                  <h3 className="text-xl font-semibold text-black">Shipping & Customs</h3>
                </div>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <span className="font-medium text-black">How long does customs clearance take?</span>
                    <ChevronDown className="w-4 h-4 text-black" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 text-black text-sm">
                    Customs clearance typically takes 1-3 business days for standard shipments with complete
                    documentation. Complex shipments or those requiring additional inspections may take longer. Our
                    customs team works closely with authorities to expedite the process and keep you informed of any
                    delays.
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <span className="font-medium text-black">
                      What documents do I need for international shipping?
                    </span>
                    <ChevronDown className="w-4 h-4 text-black" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 text-black text-sm">
                    Required documents typically include: Commercial Invoice, Packing List, Bill of Lading/Airway Bill,
                    Certificate of Origin, and any specific permits or licenses. For imports, you'll also need an Import
                    Declaration Form (IDF). Our team will guide you through the specific requirements for your shipment.
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <span className="font-medium text-black">How can I track my shipment?</span>
                    <ChevronDown className="w-4 h-4 text-black" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 text-black text-sm">
                    We provide real-time tracking through our integrated system. You'll receive a tracking number upon
                    shipment booking and regular email updates on your cargo's status. You can also contact our customer
                    service team for immediate status updates and estimated delivery times.
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <span className="font-medium text-black">What are the typical transit times?</span>
                    <ChevronDown className="w-4 h-4 text-black" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 text-black text-sm">
                    Transit times vary by service: Air freight to Dubai (1-2 days), Europe (2-3 days), Asia (3-5 days).
                    Sea freight to Dubai (7-10 days), Europe (18-25 days), Asia (14-21 days). Regional road transport:
                    Kampala (2-3 days), Dar es Salaam (3-4 days). Express services available for urgent shipments.
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <span className="font-medium text-black">Do you provide cargo insurance?</span>
                    <ChevronDown className="w-4 h-4 text-black" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 text-black text-sm">
                    Yes, we offer comprehensive cargo insurance through our trusted insurance partners. Coverage options
                    include All Risk, Total Loss Only, and specific coverage for high-value or sensitive goods.
                    Insurance rates typically range from 0.1% to 0.5% of cargo value depending on the type of goods and
                    route.
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>

            {/* Additional FAQ Categories */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-accent/20">
                <CardHeader>
                  <CardTitle className="text-black flex items-center">
                    <Thermometer className="w-5 h-5 mr-2 text-accent" />
                    Temperature-Controlled Shipping
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-black">
                  <div>
                    <h4 className="font-semibold text-black text-sm mb-1">
                      What temperature ranges can you maintain?
                    </h4>
                    <p className="text-xs text-black">
                      We handle frozen (-18°C to -25°C), chilled (2°C to 8°C), and controlled ambient (15°C to 25°C)
                      shipments with continuous temperature monitoring and alerts.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black text-sm mb-1">Do you handle pharmaceutical shipments?</h4>
                    <p className="text-xs text-black">
                      Yes, we're GDP certified for pharmaceutical logistics with validated cold chain procedures,
                      temperature mapping, and compliance with international pharmaceutical shipping standards.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-black flex items-center">
                    <Package className="w-5 h-5 mr-2 text-accent" />
                    Packaging & Special Handling
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-black">
                  <div>
                    <h4 className="font-semibold text-black text-sm mb-1">Do you provide packing services?</h4>
                    <p className="text-xs text-black">
                      Yes, we offer professional packing services including export crating, fragile item protection, and
                      specialized packaging for electronics, artwork, and machinery.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black text-sm mb-1">Can you handle oversized cargo?</h4>
                    <p className="text-xs text-black">
                      We specialize in project cargo and oversized shipments including machinery, vehicles, and
                      construction equipment with route surveys and special handling equipment.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>         
          </div>
        </div>
      </section>


      {/* Contact Section */}
  <section id="contact" className="py-20 bg-gradient-to-br from-accent/10 via-muted/30 to-primary/5 border-t-4 border-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
             <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 border border-accent/20 rounded-full text-sm text-black bg-accent/10">
              <Clock className="w-4 h-4 mr-2 text-black" />
              <span className="text-black">Available 24/7 for Your Logistics Needs</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
              Ready to Transform Your Supply Chain?
            </h2>
            <p className="text-lg text-black mb-10 max-w-2xl mx-auto">
              Let's discuss how our logistics expertise can streamline your operations and drive your business forward.
            </p>
           
          </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Email Contact */}
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-accent/5 to-background p-6 border border-accent/20 hover:border-accent/40 transition-all duration-300">
                <div className="absolute inset-0 bg-grid-white/5 bg-grid-16"></div>
                <div className="relative">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg text-black mb-2">Email Us</h3>
                  <a href="mailto:info@adrilink.com" className="text-black hover:text-accent transition-colors">
                    info@adrilink.com
                  </a>
                  <p className="text-sm text-black mt-2">
                    24/7 response time
                  </p>
                </div>
              </div>

              {/* Phone Contact */}
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 to-background p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300">
                <div className="absolute inset-0 bg-grid-white/5 bg-grid-16"></div>
                <div className="relative">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg text-black mb-2">Call Us</h3>
                  <a href="tel:+254715328244" className="text-black hover:text-primary transition-colors">
                    +254 715 328 244
                  </a>
                  <br />
                  <a href="tel:+254732528658" className="text-black hover:text-primary transition-colors">
                    +254 732 528 658
                  </a>
                  <p className="text-sm text-black mt-2">
                    Mon-Sat: 8am - 6pm
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-accent/5 to-background p-6 border border-accent/20 hover:border-accent/40 transition-all duration-300">
                <div className="absolute inset-0 bg-grid-white/5 bg-grid-16"></div>
                <div className="relative">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg text-black mb-2">Visit Us</h3>
                  <p className="text-black">
                    Access Building, 3rd Floor, CBD, Opposite Supreme Court, Nairobi, Kenya
                  </p>
                  <p className="text-sm text-black mt-2">
                    Main Office Location
                  </p>
                  <div className="mt-4 rounded-lg overflow-hidden border border-accent/20">
                    <iframe
                      title="Adrilink Office Location"
                      src="https://www.google.com/maps?q=Access+Building,+Nairobi,+Kenya&output=embed"
                      width="100%"
                      height="180"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Contact Info */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center justify-center px-4 py-1.5 border border-accent/20 rounded-full text-sm text-black bg-accent/10">
                <Clock className="w-4 h-4 mr-2 text-black" />
                <span className="text-black">Quick Response Guaranteed</span>
              </div>
              <p className="mt-4 text-black">
                For urgent inquiries, our team is available 24/7 to assist you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 overflow-hidden">
                  <img 
                       src="/adrilink-logo.png" alt="Adrilink Logo" 
                    
                    className="w-12 h-12"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white">Adrilink Limited</h3>
                  <p className="text-xs text-white/80">Your Global Logistics Partner</p>
                </div>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                Providing comprehensive logistics solutions across East Africa and beyond. Your trusted partner in global freight forwarding and logistics services.
              </p>
              </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#home" className="text-sm text-white/80 hover:text-white transition-colors">Home</a>
                </li>
                <li>
                  <a href="#about" className="text-sm text-white/80 hover:text-white transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#services" className="text-sm text-white/80 hover:text-white transition-colors">Our Services</a>
                </li>
               
                <li>
                  <a href="#contact" className="text-sm text-white/80 hover:text-white transition-colors">Contact</a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Air Freight</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Sea Freight</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Customs Clearance</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Warehousing</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Door to Door Delivery</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-sm text-white/80">Access Building, 3rd Floor, CBD, Opposite Supreme Court, Nairobi, Kenya</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <a href="mailto:info@adrilink.com" className="text-sm text-white/80 hover:text-white transition-colors">
                    info@adrilink.com
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <a href="tel:+254715328244" className="text-sm text-white/80 hover:text-white transition-colors">
                    +254 715 328 244
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <a href="tel:+254732528658" className="text-sm text-white/80 hover:text-white transition-colors">
                    +254 732 528 658
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-white/60">
                &copy; {new Date().getFullYear()} Adrilink Limited. All rights reserved.
              </p>
              <p>Powered by <a href="https://www.dimartsolutions.com/" target="_blank" rel="noopener noreferrer">DiMart Solutions</a></p>

              
            </div>
          </div>
        </div>
      </footer>
    {/* Floating WhatsApp Button */}
    <a
      href="https://wa.me/254715328244"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-6 right-6 md:bottom-8 md:right-8 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center w-16 h-16 transition-all duration-300 group"
      style={{ boxShadow: '0 4px 24px 0 rgba(39, 174, 96, 0.25)' }}
      aria-label="Contact on WhatsApp"
    >
      {/* Official WhatsApp SVG */}
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_87_101)">
          <path d="M16 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.824.824 5.45 2.24 7.654L2 30l6.56-2.16A13.28 13.28 0 0016 29.333c7.364 0 13.333-5.969 13.333-13.333S23.364 2.667 16 2.667z" fill="#25D366"/>
          <path d="M16 27.733c-2.36 0-4.68-.68-6.68-1.96l-.48-.3-3.893 1.28 1.28-3.76-.32-.5A11.74 11.74 0 014.267 16c0-6.44 5.26-11.7 11.733-11.7 6.44 0 11.7 5.26 11.7 11.7 0 6.44-5.26 11.733-11.7 11.733zm-6.16-3.36l.68.44a10.36 10.36 0 005.48 1.6c5.72 0 10.373-4.653 10.373-10.373 0-5.72-4.653-10.373-10.373-10.373-5.72 0-10.373 4.653-10.373 10.373 0 2.16.653 4.2 1.88 5.96l.44.64-.84 2.48 2.56-.84z" fill="#fff"/>
          <path d="M12.96 10.96c-.2-.44-.4-.44-.56-.44-.16-.01-.32-.01-.48-.01-.17 0-.44.06-.68.32-.24.26-.9.88-.9 2.14 0 1.26.92 2.48 1.04 2.66.12.18 1.8 2.88 4.36 3.92 2.16.86 2.6.69 3.08.65.48-.04 1.52-.62 1.74-1.22.22-.6.22-1.12.16-1.22-.06-.1-.24-.16-.5-.28-.26-.12-1.52-.75-1.76-.84-.24-.09-.42-.14-.6.14-.18.28-.7.84-.86 1.02-.16.18-.32.2-.58.08-.26-.12-1.1-.4-2.1-1.28-.78-.7-1.3-1.56-1.46-1.82-.16-.26-.02-.4.12-.52.12-.12.26-.32.38-.48.12-.16.16-.28.24-.46.08-.18.04-.34-.02-.48-.06-.14-.6-1.48-.84-2.04z" fill="#25D366"/>
        </g>
        <defs>
          <clipPath id="clip0_87_101">
            <rect width="32" height="32" fill="#fff"/>
          </clipPath>
        </defs>
      </svg>
      <span className="absolute opacity-0 group-hover:opacity-100 bg-green-600 text-white text-xs rounded px-2 py-1 bottom-20 right-0 whitespace-nowrap transition-opacity duration-200 pointer-events-none">
        Chat on WhatsApp
      </span>
    </a>
  </div>
  )
}
