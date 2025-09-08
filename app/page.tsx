"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }
  }
  const imageVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: "easeInOut" } }
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
  className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-blue-70 to-accent/60 border-b-4 border-primary"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/main.png')",
          }}
        >
          <div className="absolute inset-0 bg-primary/60"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">ADRILINK LIMITED</h1>
          <h2 className="text-4xl lg:text-4xl font-bold mb-6 text-balance">Your Global Logistics Partner</h2>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-pretty">
            We provide total logistics services: international freight forwarding, custom clearance and transportation
            to wherever you are in East African regions
          </p>

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
                  className="border-accent text-white hover:bg-white hover:text-primary text-lg px-8 bg-transparent"
                >
                  Get Quote
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            variants={sectionVariant}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white">2022</div>
              <div className="text-sm">Established</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-sm">East Africa Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">Global</div>
              <div className="text-sm">Network</div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Live Tracking Demo */}
      {/* <section id="tracking" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary">Track Your Shipment</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Get real-time updates on your cargo with our advanced tracking system. Enter your tracking number below
              for instant status updates.
            </p>
          </div> */}

          {/* Tracking Input */}
          {/* <div className="max-w-2xl mx-auto mb-12">
            <Card className="border-2 border-accent/20">
              <CardHeader>
                <CardTitle className="text-primary text-center flex items-center justify-center">
                  <Search className="w-5 h-5 mr-2 text-accent" />
                  Shipment Tracking
                </CardTitle>
                <CardDescription className="text-center">
                  Enter your tracking number to get real-time shipment updates
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter tracking number (e.g., ADL001234)"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="flex-1"
                    onKeyPress={(e) => e.key === "Enter" && handleTracking()}
                  />
                  <Button
                    onClick={handleTracking}
                    disabled={isTracking || !trackingNumber.trim()}
                    className="bg-accent text-white hover:bg-accent/90"
                  >
                    {isTracking ? (
                      <div className="w-4 h-4 border-2 border-accent-foreground border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Search className="w-4 h-4" />
                    )}
                    {isTracking ? "Tracking..." : "Track"}
                  </Button>
                </div>

                {/* Demo Tracking Numbers */}
                {/* <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Try these demo tracking numbers:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["ADL001234", "ADL005678", "ADL009876"].map((number) => (
                      <Button
                        key={number}
                        variant="outline"
                        size="sm"
                        onClick={() => setTrackingNumber(number)}
                        className="text-xs"
                      >
                        {number}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tracking Results */}
          {/* {trackingResult && (
            <div className="max-w-4xl mx-auto">
              {trackingResult.status === "Not Found" ? (
                <Card className="border-2 border-red-200">
                  <CardContent className="p-8 text-center">
                    <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-red-600 mb-2">Tracking Number Not Found</h3>
                    <p className="text-muted-foreground">{trackingResult.message}</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-6">
                  {/* Shipment Overview */}
                  {/* <Card className="border-2 border-primary/20">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-primary">Shipment Details</CardTitle>
                        <Badge className={`${trackingResult.statusColor} text-white`}>{trackingResult.status}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div>
                          <h4 className="font-semibold text-primary mb-1">Tracking Number</h4>
                          <p className="text-muted-foreground font-mono">{trackingNumber}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-1">Service Type</h4>
                          <p className="text-muted-foreground">{trackingResult.service}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-1">Origin</h4>
                          <p className="text-muted-foreground">{trackingResult.origin}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-1">Destination</h4>
                          <p className="text-muted-foreground">{trackingResult.destination}</p>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      {/* <div className="mt-6">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-primary">Delivery Progress</h4>
                          <span className="text-sm text-muted-foreground">{trackingResult.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-accent h-2 rounded-full transition-all duration-1000 ease-out text-white"
                            style={{ width: `${trackingResult.progress}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-muted-foreground mt-1">
                          <span>Origin</span>
                          <span>In Transit</span>
                          <span>Destination</span>
                        </div>
                      </div>

                      <div className="mt-6 grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-primary mb-1">Current Location</h4>
                          <p className="text-muted-foreground">{trackingResult.currentLocation}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-1">Estimated Delivery</h4>
                          <p className="text-muted-foreground">{trackingResult.estimatedDelivery}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Tracking Timeline */}
                  {/* <Card>
                    <CardHeader>
                      <CardTitle className="text-primary">Shipment Timeline</CardTitle>
                      <CardDescription>Detailed tracking history and status updates</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {trackingResult.events.map((event, index) => {
                          const IconComponent = event.icon
                          return (
                            <div key={index} className="flex items-start space-x-4">
                              <div className="flex-shrink-0">
                                <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center">
                                  <IconComponent className="w-5 h-5 text-accent-foreground" />
                                </div>
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <h4 className="font-semibold text-primary">{event.status}</h4>
                                  <span className="text-sm text-muted-foreground">{event.date}</span>
                                </div>
                                <p className="text-sm text-muted-foreground">{event.location}</p>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card> */}

                  {/* Additional Services */}
                  {/* <div className="grid md:grid-cols-3 gap-6">
                    <Card className="text-center">
                      <CardContent className="p-6">
                        <Mail className="w-8 h-8 text-accent mx-auto mb-3" />
                        <h3 className="font-semibold text-primary mb-2">Email Notifications</h3>
                        <p className="text-sm text-muted-foreground mb-3">Get automatic updates sent to your email</p>
                        <Button variant="outline" size="sm">
                          Subscribe
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="text-center">
                      <CardContent className="p-6">
                        <Phone className="w-8 h-8 text-accent mx-auto mb-3" />
                        <h3 className="font-semibold text-primary mb-2">SMS Alerts</h3>
                        <p className="text-sm text-muted-foreground mb-3">Receive status updates via SMS</p>
                        <Button variant="outline" size="sm">
                          Enable SMS
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="text-center">
                      <CardContent className="p-6">
                        <FileCheck className="w-8 h-8 text-accent mx-auto mb-3" />
                        <h3 className="font-semibold text-primary mb-2">Documents</h3>
                        <p className="text-sm text-muted-foreground mb-3">Download shipping documents</p>
                        <Button variant="outline" size="sm">
                          View Docs
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tracking Features */}
          {/* {!trackingResult && (
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="text-center border-2 border-accent/20">
                <CardContent className="p-6">
                  <Navigation className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-primary mb-2">Real-Time Updates</h3>
                  <p className="text-sm text-muted-foreground">
                    Track your shipment's journey with live location updates and status changes
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-primary/20">
                <CardContent className="p-6">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-primary mb-2">Delivery Estimates</h3>
                  <p className="text-sm text-muted-foreground">
                    Get accurate delivery time estimates based on current transit progress
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-accent/20">
                <CardContent className="p-6">
                  <AlertCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-primary mb-2">Instant Alerts</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive immediate notifications for any delays or status changes
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section> */}

      {/* About Section */}
  <section id="about" className="py-20 bg-gradient-to-br from-blue-50 via-muted/30 to-primary/10 border-b-4 border-blue-300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary">About Adrilink Limited</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Adrilink Limited is a logistics company based in Kenya, incorporated on October 12, 2022, with head office
              in Nairobi.
            </p>
            <p className="text-lg text-muted-foreground text-pretty">
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
                  <h3 className="font-semibold text-primary mb-2">Established Excellence</h3>
                  <p className="text-muted-foreground">
                    Founded in 2022 with a vision to revolutionize logistics in East Africa
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-2">Strategic Location</h3>
                  <p className="text-muted-foreground">Based in Nairobi, Kenya - the gateway to East African markets</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-2">Global Network</h3>
                  <p className="text-muted-foreground">
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
                <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground text-pretty">
                  To design, build and deliver flexible, integrated, best in class and cost effective logistics
                  solutions.
                </p>
                <div className="mt-6 pt-6 border-t border-primary/10">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Excellence in Every Delivery</span>
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
                <CardTitle className="text-2xl text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground text-pretty">
                  To be recognized as the expert in logistic services with top-notch Customer Service.
                </p>
                <div className="mt-6 pt-6 border-t border-accent/10">
                  <div className="flex items-center justify-center space-x-2">
                    <Star className="w-4 h-4 text-accent" />
                    <span className="text-sm text-muted-foreground">Setting Industry Standards</span>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary">Comprehensive Logistics Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
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
                    <div className="w-12 h-12 bg-blue-400 text-white rounded-lg flex items-center justify-center">
                      <Plane className="w-6 h-6 text-blue-900" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Air Freight</h3>
                  </div>
                  <p className="text-white/90 mb-4 max-w-md">
                    International air cargo solutions offering the fastest and most cost-effective transport through our global network.
                  </p>
                  <Button variant="outline" className="bg-blue-400 border-blue-400 text-white hover:bg-blue-500 hover:text-white" onClick={() => setServicePopup("air")}>Read More</Button>
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
                    <div className="w-12 h-12 bg-blue-300 text-white rounded-lg flex items-center justify-center">
                      <Ship className="w-6 h-6 text-blue-900" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Sea Freight</h3>
                  </div>
                  <p className="text-white/90 mb-4 max-w-md">
                    FCL and LCL services with comprehensive tracking and daily updates for complete shipment visibility.
                  </p>
                  <Button variant="outline" className="bg-blue-300 border-blue-300 text-white hover:bg-blue-400 hover:text-white" onClick={() => setServicePopup("sea")}>Read More</Button>
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
                    <div className="w-10 h-10 bg-blue-200 text-white rounded-lg flex items-center justify-center">
                      <Package className="w-5 h-5 text-blue-900" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Consolidation</h3>
                  </div>
                  <p className="text-white/90 text-sm mb-4">
                    Cost-effective groupage services for multiple origins and destinations.
                  </p>
                  <Button variant="outline" className="bg-blue-200 border-blue-200 text-white hover:bg-blue-300 hover:text-white" onClick={() => setServicePopup("consolidation")}>Read More</Button>
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
                    <div className="w-10 h-10 bg-blue-100 text-white rounded-lg flex items-center justify-center">
                      <FileCheck className="w-5 h-5 text-blue-900" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Customs Clearance</h3>
                  </div>
                  <p className="text-white/90 text-sm mb-4">
                    Expert customs brokerage with Africa-wide coverage and compliance.
                  </p>
                  <Button variant="outline" className="bg-blue-100 border-blue-100 text-blue-900 hover:bg-blue-200 hover:text-white" onClick={() => setServicePopup("customs")}>Read More</Button>
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
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Warehouse className="w-5 h-5 text-blue-900" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Warehousing</h3>
                  </div>
                  <p className="text-white/90 text-sm mb-4">
                    Strategic storage and distribution solutions with inventory control.
                  </p>
                  <Button variant="outline" className="bg-blue-50 border-blue-50 text-blue-900 hover:bg-blue-100 hover:text-white" onClick={() => setServicePopup("warehousing")}>Read More</Button>
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
                    <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center">
                      <Truck className="w-5 h-5 text-blue-900" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Door to Door</h3>
                  </div>
                  <p className="text-white/90 text-sm mb-4">
                    Complete supply chain control with comprehensive coverage.
                  </p>
                  <Button variant="outline" className="bg-blue-400 border-blue-400 text-blue-900 hover:bg-blue-500 hover:text-white" onClick={() => setServicePopup("door")}>Read More</Button>
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
                    <div className="w-10 h-10 bg-blue-200 rounded-lg flex items-center justify-center">
                      <Home className="w-5 h-5 text-blue-900" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Packing Services</h3>
                  </div>
                  <p className="text-white/90 text-sm mb-4">
                    Professional packing for local and international moves.
                  </p>
                  <Button variant="outline" className="bg-blue-200 border-blue-200 text-blue-900 hover:bg-blue-300 hover:text-white" onClick={() => setServicePopup("packing")}>Read More</Button>
                </div>
              </div>
            </div>
          </div>
      {/* Service Popups */}
      {servicePopup === "air" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setServicePopup(null)}>
          <div
            className="max-w-lg w-full max-h-[90vh] sm:max-h-[600px] overflow-y-auto bg-gradient-to-br from-blue-400 via-blue-200 to-blue-100 rounded-xl shadow-2xl p-8 relative"
            onClick={e => e.stopPropagation()}
          >
            <button className="absolute top-4 right-4 text-blue-900 hover:text-blue-700 text-xl" onClick={() => setServicePopup(null)}>&times;</button>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Airfreight Import and Export</h3>
            <p className="mb-2 text-blue-900 font-semibold">Main Description</p>
            <p className="mb-4 text-blue-900">In conjunction with our worldwide network of Partners, Associates and Branch offices, we can arrange Air import and export from any country to any destination.</p>
            <p className="mb-2 text-blue-900 font-semibold">Service Details</p>
            <p className="mb-4 text-blue-900">We offer a comprehensive range of international air cargo solutions ensuring your air cargo travels the safest, fastest and most cost-effective way possible.</p>
            <p className="mb-2 text-blue-900 font-semibold">Expertise</p>
            <p className="mb-4 text-blue-900">Our experience in the provision of airfreight, air charters, and aviation support and management services covers the complete range of fixed wing operations. In addition to traditional airfreight services, We provide freight handling services and liaison services with local civil aviation.</p>
          </div>
        </div>
      )}
      {servicePopup === "sea" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setServicePopup(null)}>
          <div
            className="max-w-lg w-full max-h-[90vh] sm:max-h-[600px] overflow-y-auto bg-gradient-to-br from-blue-300 via-blue-100 to-blue-50 rounded-xl shadow-2xl p-8 relative"
            onClick={e => e.stopPropagation()}
          >
            <button className="absolute top-4 right-4 text-blue-900 hover:text-blue-700 text-xl" onClick={() => setServicePopup(null)}>&times;</button>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Sea freight Import & Export</h3>
            <p className="mb-2 text-blue-900 font-semibold">Service Overview</p>
            <ul className="mb-4 text-blue-900 list-disc pl-5">
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
            <p className="mb-2 text-blue-900 font-semibold">Comprehensive Services</p>
            <p className="mb-4 text-blue-900">We offer comprehensive sea freight services via a worldwide network for FCL & LCL shipments, break bulk, project logistics and oversized.</p>
            <p className="mb-2 text-blue-900 font-semibold">Equipment & Capabilities</p>
            <p className="mb-4 text-blue-900">Whether it is in containers, special equipment or hazardous cargo, we are equipped with the tools, knowledge and a shipping line network able to handle all type of load.</p>
            <p className="mb-2 text-blue-900 font-semibold">Tracking & Delivery</p>
            <p className="mb-4 text-blue-900">An integrated tracking service will provide you with Custom-tailored daily email reports. From Port handling services to customs clearance, storage and forwarding, we will ensure your cargo is delivered and handled in a safe and timely manner.</p>
            <p className="mb-2 text-blue-900 font-semibold">Service Options</p>
            <p className="mb-4 text-blue-900">The choice of service includes conference, non-conference lines and charter vessels.</p>
          </div>
        </div>
      )}
      {servicePopup === "packing" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setServicePopup(null)}>
          <div
            className="max-w-lg w-full max-h-[90vh] sm:max-h-[600px] overflow-y-auto bg-gradient-to-br from-blue-200 via-blue-100 to-blue-50 rounded-xl shadow-2xl p-8 relative"
            onClick={e => e.stopPropagation()}
          >
            <button className="absolute top-4 right-4 text-blue-900 hover:text-blue-700 text-xl" onClick={() => setServicePopup(null)}>&times;</button>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Packing & Removals</h3>
            <p className="mb-2 text-blue-900 font-semibold">Team Expertise</p>
            <p className="mb-4 text-blue-900">Adrilink Ltd has qualified team dealing specifically in both local and international packing and removals. We offer a door-to-door solution for both import and export personal effects via our worldwide network.</p>
            <p className="mb-2 text-blue-900 font-semibold">Special Care</p>
            <p className="mb-4 text-blue-900">Personal effects are normally very fragile and need attention to detail and careful handling.</p>
            <p className="mb-2 text-blue-900 font-semibold">Our Procedures</p>
            <ul className="mb-4 text-blue-900 list-disc pl-5">
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
            className="max-w-lg w-full max-h-[90vh] sm:max-h-[600px] overflow-y-auto bg-gradient-to-br from-blue-100 via-blue-200 to-blue-50 rounded-xl shadow-2xl p-8 relative"
            onClick={e => e.stopPropagation()}
          >
            <button className="absolute top-4 right-4 text-blue-900 hover:text-blue-700 text-xl" onClick={() => setServicePopup(null)}>&times;</button>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Airfreight & Sea freight Consolidation</h3>
            <p className="mb-2 text-blue-900 font-semibold">Service Description</p>
            <p className="mb-4 text-blue-900">We also offer consolidation or groupage services from most origins and selected destinations for both airfreight and sea freight.</p>
          </div>
        </div>
      )}
      {servicePopup === "warehousing" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setServicePopup(null)}>
          <div
            className="max-w-lg w-full max-h-[90vh] sm:max-h-[600px] overflow-y-auto bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rounded-xl shadow-2xl p-8 relative"
            onClick={e => e.stopPropagation()}
          >
            <button className="absolute top-4 right-4 text-blue-900 hover:text-blue-700 text-xl" onClick={() => setServicePopup(null)}>&times;</button>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Logistics & Warehousing</h3>
            <p className="mb-2 text-blue-900 font-semibold">Service Listing</p>
            <p className="mb-4 text-blue-900">This service is mentioned in the services list but detailed content is not provided in the PDF source document.</p>
          </div>
        </div>
      )}
      {servicePopup === "customs" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setServicePopup(null)}>
          <div
            className="max-w-lg w-full max-h-[90vh] sm:max-h-[600px] overflow-y-auto bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 rounded-xl shadow-2xl p-8 relative"
            onClick={e => e.stopPropagation()}
          >
            <button className="absolute top-4 right-4 text-blue-900 hover:text-blue-700 text-xl" onClick={() => setServicePopup(null)}>&times;</button>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Customs Clearance Services</h3>
            <p className="mb-2 text-blue-900 font-semibold">Quality Service</p>
            <p className="mb-4 text-blue-900">We continue to provide quality customs broker and clearance services to our clients all over Africa. Strict compliance to proper customs clearance and procedures are vital.</p>
          </div>
        </div>
      )}
      {servicePopup === "door" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setServicePopup(null)}>
          <div
            className="max-w-lg w-full max-h-[90vh] sm:max-h-[600px] overflow-y-auto bg-gradient-to-br from-blue-400 via-blue-200 to-blue-100 rounded-xl shadow-2xl p-8 relative"
            onClick={e => e.stopPropagation()}
          >
            <button className="absolute top-4 right-4 text-blue-900 hover:text-blue-700 text-xl" onClick={() => setServicePopup(null)}>&times;</button>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Door to Door</h3>
            <p className="mb-2 text-blue-900 font-semibold">Competitive Advantage</p>
            <p className="mb-4 text-blue-900">We deliver competitive advantage to each of our client's supply chains by offering a wide range of global integrated logistics to a customer base that stretches to the most remote locations of East & Central Africa.</p>
            <p className="mb-2 text-blue-900 font-semibold">Efficient Integration</p>
            <p className="mb-4 text-blue-900">Our efficient integration of logistics services means that we control the entire supply chain and cut out unnecessary mark-ups and intermediaries. Our clients get exceptional value in a simplified price-per-ton delivered-to-the-door format.</p>
          </div>
        </div>
      )}
      {servicePopup === "container" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setServicePopup(null)}>
          <div
            className="max-w-lg w-full max-h-[90vh] sm:max-h-[600px] overflow-y-auto bg-gradient-to-br from-blue-300 via-blue-100 to-blue-50 rounded-xl shadow-2xl p-8 relative"
            onClick={e => e.stopPropagation()}
          >
            <button className="absolute top-4 right-4 text-blue-900 hover:text-blue-700 text-xl" onClick={() => setServicePopup(null)}>&times;</button>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Container Services</h3>
            <p className="mb-2 text-blue-900 font-semibold">Specialized Equipment</p>
            <p className="mb-4 text-blue-900">Whether you are shipping vaccines or perishable items, our containers are equipped to provide advanced transport you can rely on.</p>
          </div>
        </div>
      )}
        </div>
      </section>

      {/* Why Choose Us */}
  <section id="why-choose-us" className="py-20 bg-gradient-to-br from-primary/10 via-muted/20 to-accent/10 border-b-4 border-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary">Why Choose Adrilink Limited</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We combine competitive rates with quality service and local expertise to deliver exceptional logistics
              solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Competitive Rates</h3>
              <p className="text-muted-foreground">
                Our offices offer competitive rates on all our services without compromising quality.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Quality Service</h3>
              <p className="text-muted-foreground">
                We look forward to offering you our quality service with attention to detail.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Global Network</h3>
              <p className="text-muted-foreground">
                Worldwide partners and associates ensure seamless international operations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Local Expertise</h3>
              <p className="text-muted-foreground">
                Deep understanding of East African market dynamics and regulations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Complete Solutions</h3>
              <p className="text-muted-foreground">End-to-end logistics management from origin to final destination.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Reliable Timing</h3>
              <p className="text-muted-foreground">
                Consistent delivery schedules and real-time tracking for peace of mind.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8">
              Get Your Quote Today
            </Button>
          </div>
        </div>
      </section>

      {/* Client Testimonials & Case Studies */}
  <section id="testimonials" className="py-20 bg-gradient-to-br from-accent/10 via-muted/20 to-primary/5 border-b-4 border-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Trusted by businesses across East Africa for reliable, efficient logistics solutions that drive growth.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 text-pretty">
                  "Adrilink transformed our supply chain efficiency. Their customs clearance expertise saved us weeks of
                  delays and thousands in costs."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-semibold text-sm">MK</span>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Michael Kariuki</p>
                    <p className="text-sm text-muted-foreground">Supply Chain Director, East Africa Beverages</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 text-pretty">
                  "Outstanding air freight service! Our pharmaceutical shipments arrive on time and in perfect condition
                  every single time."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-semibold text-sm">AN</span>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Amina Njoroge</p>
                    <p className="text-sm text-muted-foreground">Operations Manager, MedSupply Kenya</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 text-pretty">
                  "Their door-to-door service reached our remote locations in Uganda seamlessly. Exceptional
                  coordination and communication."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-semibold text-sm">JM</span>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">James Mwangi</p>
                    <p className="text-sm text-muted-foreground">Logistics Head, Agricultural Solutions Ltd</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Case Studies */}
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-primary">Success Stories</h3>
              <p className="text-muted-foreground max-w-xl mx-auto text-pretty">
                Real results from our logistics partnerships across diverse industries
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-2 border-accent/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-primary">Manufacturing Excellence</CardTitle>
                    <div className="text-2xl font-bold text-accent">40%</div>
                  </div>
                  <CardDescription>Cost Reduction Achieved</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    A leading automotive parts manufacturer reduced logistics costs by 40% and improved delivery times
                    by 3 days through our integrated sea freight and customs clearance solutions.
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-muted-foreground">15 containers/month</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-accent" />
                      <span className="text-muted-foreground">3 days faster</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-primary">Pharmaceutical Precision</CardTitle>
                    <div className="text-2xl font-bold text-accent">99.8%</div>
                  </div>
                  <CardDescription>On-Time Delivery Rate</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    Critical temperature-controlled pharmaceutical shipments maintained perfect cold chain integrity
                    with 99.8% on-time delivery across 5 East African countries.
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Thermometer className="w-4 h-4 text-accent" />
                      <span className="text-muted-foreground">Cold chain maintained</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Globe className="w-4 h-4 text-accent" />
                      <span className="text-muted-foreground">5 countries</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Certifications & Trust Indicators */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary">
              Certified Excellence & Trusted Partnerships
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our industry certifications and strategic partnerships ensure compliance, security, and reliability in
              every shipment.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 hover:border-accent/40 transition-all duration-300">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="p-8 relative z-10">
                <div className="mb-6 relative">
                  <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto transform transition-transform duration-500 group-hover:rotate-12">
                    <Shield className="w-10 h-10 text-accent" />
                  </div>
                  <div className="absolute -inset-2 bg-accent/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="font-bold text-lg text-primary mb-3">ISO 9001:2015</h3>
                <p className="text-sm text-muted-foreground">Quality Management System Certified</p>
                <div className="mt-4 pt-4 border-t border-accent/10">
                  <p className="text-xs text-muted-foreground">Certified by Bureau Veritas</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="p-8 relative z-10">
                <div className="mb-6 relative">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto transform transition-transform duration-500 group-hover:rotate-12">
                    <FileCheck className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -inset-2 bg-primary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="font-bold text-lg text-primary mb-3">IATA Certified</h3>
                <p className="text-sm text-muted-foreground">International Air Transport Association</p>
                <div className="mt-4 pt-4 border-t border-primary/10">
                  <p className="text-xs text-muted-foreground">Member since 2022</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 hover:border-accent/40 transition-all duration-300">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="p-8 relative z-10">
                <div className="mb-6 relative">
                  <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto transform transition-transform duration-500 group-hover:rotate-12">
                    <Globe className="w-10 h-10 text-accent" />
                  </div>
                  <div className="absolute -inset-2 bg-accent/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="font-bold text-lg text-primary mb-3">FIATA Member</h3>
                <p className="text-sm text-muted-foreground">International Federation of Freight Forwarders</p>
                <div className="mt-4 pt-4 border-t border-accent/10">
                  <p className="text-xs text-muted-foreground">Global Network Access</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="p-8 relative z-10">
                <div className="mb-6 relative">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto transform transition-transform duration-500 group-hover:rotate-12">
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -inset-2 bg-primary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="font-bold text-lg text-primary mb-3">AEO Certified</h3>
                <p className="text-sm text-muted-foreground">Authorized Economic Operator Status</p>
                <div className="mt-4 pt-4 border-t border-primary/10">
                  <p className="text-xs text-muted-foreground">KRA Accredited</p>
                </div>
              </div>
            </div>
          </div>

          {/* Security & Compliance */}
          <div className="bg-muted/30 rounded-lg p-8 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Security & Compliance</h3>
              <p className="text-muted-foreground max-w-xl mx-auto text-pretty">
                Your cargo security and regulatory compliance are our top priorities
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-accent-foreground" />
                </div>
                <h4 className="font-semibold text-primary mb-2">C-TPAT Compliant</h4>
                <p className="text-sm text-muted-foreground">
                  Customs-Trade Partnership Against Terrorism certified security protocols
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <FileCheck className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-primary mb-2">GDPR Compliant</h4>
                <p className="text-sm text-muted-foreground">
                  Full data protection and privacy compliance for all client information
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Thermometer className="w-6 h-6 text-accent-foreground" />
                </div>
                <h4 className="font-semibold text-primary mb-2">GDP Certified</h4>
                <p className="text-sm text-muted-foreground">
                  Good Distribution Practice for pharmaceutical and healthcare logistics
                </p>
              </div>
            </div>
          </div>

          {/* Strategic Partnerships */}
          <div className="space-y-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">Strategic Partnerships</h3>
              <p className="text-muted-foreground max-w-xl mx-auto text-pretty">
                Global network of trusted partners ensuring seamless worldwide logistics
              </p>
            </div>

            {/* Shipping Lines & Airlines */}
            {/* <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary flex items-center">
                    <Ship className="w-5 h-5 mr-2 text-accent" />
                    Major Shipping Lines
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">Maersk Line</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">MSC</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">CMA CGM</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">COSCO Shipping</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">Hapag-Lloyd</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">Evergreen Line</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-primary flex items-center">
                    <Plane className="w-5 h-5 mr-2 text-accent" />
                    Airline Partners
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">Kenya Airways</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">Emirates SkyCargo</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">Turkish Cargo</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">Qatar Airways Cargo</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">Ethiopian Cargo</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">Lufthansa Cargo</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div> */}

            {/* Government & Regulatory Bodies */}
            <Card className="bg-primary/5 border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary text-center">Government & Regulatory Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                      <FileCheck className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-primary mb-2">Kenya Revenue Authority</h4>
                    <p className="text-sm text-muted-foreground">Authorized customs clearance agent</p>
                  </div>

                  <div>
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Globe className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <h4 className="font-semibold text-primary mb-2">Port Authorities</h4>
                    <p className="text-sm text-muted-foreground">Direct partnerships across East African ports</p>
                  </div>

                  <div>
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Plane className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-primary mb-2">Civil Aviation Authority</h4>
                    <p className="text-sm text-muted-foreground">Licensed air cargo handling operations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Coverage Map */}
      {/* <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary">Our Service Coverage</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive logistics coverage across East Africa with strategic connections to global markets
            </p>
          </div> */}

          {/* Interactive Map Container */}
          {/* <div className="relative bg-card rounded-lg p-8 mb-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div> */}

            {/* Map Visual */}
            {/* <div className="relative">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-primary mb-2">East Africa Coverage Map</h3>
                <p className="text-sm text-muted-foreground">Click on locations to view service details</p>
              </div> */}

              {/* SVG Map Representation */}
              {/* <div className="relative mx-auto max-w-2xl">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="East Africa Map"
                  className="w-full h-96 object-cover rounded-lg opacity-80"
                /> */}

                {/* Interactive Location Markers */}
                {/* <div className="absolute inset-0"> */}
                  {/* Nairobi - Main Hub */}
                  {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative group cursor-pointer">
                      <div className="w-6 h-6 bg-accent rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Nairobi - Main Hub
                      </div>
                    </div>
                  </div> */}

                  {/* Mombasa Port */}
                  {/* <div className="absolute bottom-1/3 right-1/4">
                    <div className="relative group cursor-pointer">
                      <div className="w-5 h-5 bg-primary rounded-full border-3 border-white shadow-lg"></div>
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Mombasa Port
                      </div>
                    </div>
                  </div> */}

                  {/* Kampala */}
                  {/* <div className="absolute top-2/5 left-1/3">
                    <div className="relative group cursor-pointer">
                      <div className="w-4 h-4 bg-accent rounded-full border-2 border-white shadow-lg"></div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        Kampala
                      </div>
                    </div>
                  </div> */}

                  {/* Dar es Salaam */}
                  {/* <div className="absolute bottom-1/4 left-2/3">
                    <div className="relative group cursor-pointer">
                      <div className="w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg"></div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Dar es Salaam
                      </div>
                    </div>
                  </div> */}

                  {/* Kigali */}
                  {/* <div className="absolute top-1/3 left-2/5">
                    <div className="relative group cursor-pointer">
                      <div className="w-4 h-4 bg-accent rounded-full border-2 border-white shadow-lg"></div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        Kigali
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

          {/* Coverage Statistics */}
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-accent mb-2">5+</div>
                <p className="text-sm font-semibold text-primary mb-1">Countries Covered</p>
                <p className="text-xs text-muted-foreground">Kenya, Uganda, Tanzania, Rwanda, Burundi</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-primary/20">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <p className="text-sm font-semibold text-primary mb-1">Major Cities</p>
                <p className="text-xs text-muted-foreground">Direct service to key urban centers</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-accent mb-2">8</div>
                <p className="text-sm font-semibold text-primary mb-1">Major Ports</p>
                <p className="text-xs text-muted-foreground">Sea freight gateway access</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-primary/20">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">12</div>
                <p className="text-sm font-semibold text-primary mb-1">Airports Served</p>
                <p className="text-xs text-muted-foreground">Air cargo handling facilities</p>
              </CardContent>
            </Card>
          </div> */}

          {/* Service Areas Details */}
          {/* <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-accent" />
                  Primary Service Areas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-primary">Kenya</h4>
                    <p className="text-sm text-muted-foreground">Nairobi (HQ), Mombasa Port, Kisumu, Eldoret, Nakuru</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-primary">Uganda</h4>
                    <p className="text-sm text-muted-foreground">Kampala, Entebbe Airport, Jinja, Gulu</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-primary">Tanzania</h4>
                    <p className="text-sm text-muted-foreground">Dar es Salaam Port, Arusha, Mwanza, Dodoma</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-primary">Rwanda & Burundi</h4>
                    <p className="text-sm text-muted-foreground">Kigali, Bujumbura, cross-border logistics</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-accent" />
                  Global Connections
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-primary">Europe</h4>
                    <p className="text-sm text-muted-foreground">Rotterdam, Hamburg, Antwerp, Felixstowe</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-primary">Asia</h4>
                    <p className="text-sm text-muted-foreground">Dubai, Mumbai, Shanghai, Singapore</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-primary">Americas</h4>
                    <p className="text-sm text-muted-foreground">New York, Los Angeles, Miami, Santos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-primary">Middle East</h4>
                    <p className="text-sm text-muted-foreground">Jebel Ali, Doha, Istanbul, Beirut</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div> */}

          {/* Transit Times */}
          {/* <div className="mt-12">
            <Card className="bg-primary/5 border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary text-center">Typical Transit Times from Nairobi</CardTitle>
                <CardDescription className="text-center">
                  Estimated delivery times for our most popular routes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Plane className="w-4 h-4 text-accent" />
                      <span className="font-semibold text-primary">Air Freight</span>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Dubai</span>
                        <span className="text-foreground">1-2 days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Europe</span>
                        <span className="text-foreground">2-3 days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Asia</span>
                        <span className="text-foreground">3-5 days</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Ship className="w-4 h-4 text-accent" />
                      <span className="font-semibold text-primary">Sea Freight</span>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Dubai</span>
                        <span className="text-foreground">7-10 days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Europe</span>
                        <span className="text-foreground">18-25 days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Asia</span>
                        <span className="text-foreground">14-21 days</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Truck className="w-4 h-4 text-accent" />
                      <span className="font-semibold text-primary">Road Transport</span>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Kampala</span>
                        <span className="text-foreground">2-3 days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Dar es Salaam</span>
                        <span className="text-foreground">3-4 days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Kigali</span>
                        <span className="text-foreground">2-3 days</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Clock className="w-4 h-4 text-accent" />
                      <span className="font-semibold text-primary">Express Service</span>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Regional</span>
                        <span className="text-foreground">24-48 hrs</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">International</span>
                        <span className="text-foreground">1-3 days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Same Day</span>
                        <span className="text-foreground">Available</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

  <section id="faq" className="py-20 bg-gradient-to-br from-blue-50 via-primary/10 to-accent/10 border-b-4 border-blue-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Get answers to common questions about our logistics services, shipping processes, and customs procedures.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* General Services FAQ */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-6">
                  <HelpCircle className="w-5 h-5 text-accent" />
                  <h3 className="text-xl font-semibold text-primary">General Services</h3>
                </div>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <span className="font-medium text-primary">What logistics services do you offer?</span>
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 text-muted-foreground text-sm">
                    We provide comprehensive logistics solutions including air freight import/export, sea freight (FCL &
                    LCL), customs clearance, door-to-door delivery, warehousing, consolidation services, packing &
                    removals, and temperature-controlled container services across East Africa and globally.
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <span className="font-medium text-primary">Which countries do you serve?</span>
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 text-muted-foreground text-sm">
                    Our primary coverage includes Kenya, Uganda, Tanzania, Rwanda, and Burundi. We also provide
                    international services to Europe, Asia, Americas, and Middle East through our global network of
                    partners and agents.
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <span className="font-medium text-primary">How do I get a shipping quote?</span>
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 text-muted-foreground text-sm">
                    You can request a quote by contacting us via email at danslauscbukhala@gmail.com, calling our
                    office, or filling out our contact form. Please provide details about your cargo (weight,
                    dimensions, origin, destination, and preferred service type) for an accurate quote.
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <span className="font-medium text-primary">Do you handle dangerous goods?</span>
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 text-muted-foreground text-sm">
                    Yes, we are certified to handle dangerous goods (DG) shipments by both air and sea. Our team is
                    trained in IATA and IMDG regulations. Please inform us about dangerous goods during booking so we
                    can ensure proper documentation and handling procedures.
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <span className="font-medium text-primary">What are your business hours?</span>
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 text-muted-foreground text-sm">
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
                  <h3 className="text-xl font-semibold text-primary">Shipping & Customs</h3>
                </div>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <span className="font-medium text-primary">How long does customs clearance take?</span>
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 text-muted-foreground text-sm">
                    Customs clearance typically takes 1-3 business days for standard shipments with complete
                    documentation. Complex shipments or those requiring additional inspections may take longer. Our
                    customs team works closely with authorities to expedite the process and keep you informed of any
                    delays.
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <span className="font-medium text-primary">
                      What documents do I need for international shipping?
                    </span>
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 text-muted-foreground text-sm">
                    Required documents typically include: Commercial Invoice, Packing List, Bill of Lading/Airway Bill,
                    Certificate of Origin, and any specific permits or licenses. For imports, you'll also need an Import
                    Declaration Form (IDF). Our team will guide you through the specific requirements for your shipment.
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <span className="font-medium text-primary">How can I track my shipment?</span>
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 text-muted-foreground text-sm">
                    We provide real-time tracking through our integrated system. You'll receive a tracking number upon
                    shipment booking and regular email updates on your cargo's status. You can also contact our customer
                    service team for immediate status updates and estimated delivery times.
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <span className="font-medium text-primary">What are the typical transit times?</span>
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 text-muted-foreground text-sm">
                    Transit times vary by service: Air freight to Dubai (1-2 days), Europe (2-3 days), Asia (3-5 days).
                    Sea freight to Dubai (7-10 days), Europe (18-25 days), Asia (14-21 days). Regional road transport:
                    Kampala (2-3 days), Dar es Salaam (3-4 days). Express services available for urgent shipments.
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <span className="font-medium text-primary">Do you provide cargo insurance?</span>
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 text-muted-foreground text-sm">
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
                  <CardTitle className="text-primary flex items-center">
                    <Thermometer className="w-5 h-5 mr-2 text-accent" />
                    Temperature-Controlled Shipping
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-primary text-sm mb-1">
                      What temperature ranges can you maintain?
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      We handle frozen (-18°C to -25°C), chilled (2°C to 8°C), and controlled ambient (15°C to 25°C)
                      shipments with continuous temperature monitoring and alerts.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-sm mb-1">Do you handle pharmaceutical shipments?</h4>
                    <p className="text-xs text-muted-foreground">
                      Yes, we're GDP certified for pharmaceutical logistics with validated cold chain procedures,
                      temperature mapping, and compliance with international pharmaceutical shipping standards.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center">
                    <Package className="w-5 h-5 mr-2 text-accent" />
                    Packaging & Special Handling
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-primary text-sm mb-1">Do you provide packing services?</h4>
                    <p className="text-xs text-muted-foreground">
                      Yes, we offer professional packing services including export crating, fragile item protection, and
                      specialized packaging for electronics, artwork, and machinery.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-sm mb-1">Can you handle oversized cargo?</h4>
                    <p className="text-xs text-muted-foreground">
                      We specialize in project cargo and oversized shipments including machinery, vehicles, and
                      construction equipment with route surveys and special handling equipment.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact for More Questions */}
          
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10"></div>
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-32 [mask-image:radial-gradient(white,transparent_70%)]"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 border border-accent/20 rounded-full text-sm text-accent bg-accent/10">
              <Clock className="w-4 h-4 mr-2" />
              <span>Available 24/7 for Your Logistics Needs</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Ready to Transform Your Supply Chain?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let's discuss how our logistics expertise can streamline your operations and drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 h-14">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us Now
                </Button>
              </a>
              <a href="tel:+254715328244">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 h-14"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule a Call
                </Button>
              </a>
              <a href="https://wa.me/254715328244" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white text-lg px-8 h-14 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                  Contact on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
  <section id="contact" className="py-20 bg-gradient-to-br from-accent/10 via-muted/30 to-primary/5 border-t-4 border-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary">Get in Touch</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Our team is ready to assist you with any inquiries about our logistics services.
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
                  <h3 className="font-semibold text-lg text-primary mb-2">Email Us</h3>
                  <a href="mailto:danslauscbukhala@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                    danslauscbukhala@gmail.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
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
                  <h3 className="font-semibold text-lg text-primary mb-2">Call Us</h3>
                  <a href="tel:+254715328244" className="text-muted-foreground hover:text-primary transition-colors">
                    +254 715 328 244
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
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
                  <h3 className="font-semibold text-lg text-primary mb-2">Visit Us</h3>
                  <p className="text-muted-foreground">
                    Nairobi, Kenya
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Main Office Location
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Contact Info */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center justify-center px-4 py-1.5 border border-accent/20 rounded-full text-sm text-accent bg-accent/10">
                <Clock className="w-4 h-4 mr-2" />
                <span>Quick Response Guaranteed</span>
              </div>
              <p className="mt-4 text-muted-foreground">
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
                <div className="w-32 h-12 overflow-hidden">
                  <img 
                       src="/adrilink-logo.jpeg" alt="Adrilink Logo" 
                    
                    className="w-32 h-12"
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
              {/* <div className="flex items-center space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                  </svg>
                </a>
              </div> */}
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
                  <a href="#testimonials" className="text-sm text-white/80 hover:text-white transition-colors">Testimonials</a>
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
                  <span className="text-sm text-white/80">Nairobi, Kenya</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <a href="mailto:danslauscbukhala@gmail.com" className="text-sm text-white/80 hover:text-white transition-colors">
                    danslauscbukhala@gmail.com
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <a href="tel:+254715328244" className="text-sm text-white/80 hover:text-white transition-colors">
                    +254 715 328 244
                  </a>
                </li>
                <li>
                  {/* <Button variant="outline" className="mt-4 bg-transparent border-white text-white hover:bg-white hover:text-primary w-full">
                    Get Quote
                  </Button> */}
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
              <div className="flex items-center space-x-6">
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
