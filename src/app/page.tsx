import React from 'react';
import { Check, ShieldCheck, TrendingUp, BookOpen, AlertCircle } from 'lucide-react';
import EmailForm from '@/components/EmailForm';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-cookie-50">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 pt-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="relative w-40 h-10 md:w-48 md:h-12">
            <Image
              src="/assets/images/logo-transparent.png"
              alt="CookieCraft AI Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-cookie-100 blur-3xl opacity-60 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-amber-50 blur-3xl opacity-60 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Hero Text */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cookie-100/80 backdrop-blur-sm text-cookie-800 text-xs font-bold uppercase tracking-wide mb-6">
                <span className="w-2 h-2 rounded-full bg-cookie-500 animate-pulse"></span>
                Free Guide for Aspiring Bakers
              </div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Thinking of Starting a Cookie Business? <br className="hidden md:block" />
                <span className="text-cookie-600">Don’t Make These Expensive Mistakes.</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Your complete, step-by-step checklist to launch your cookie business legally, profitably, and without the overwhelm. From LLC to first sale.
              </p>

              <div className="flex flex-col items-center lg:items-start gap-8">
                <div className="w-full max-w-md">
                  <EmailForm />
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-y-4 gap-x-8 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Instant PDF Download</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Up-to-Date for 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Join 5,000+ Bakers</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex-1 w-full max-w-xl lg:max-w-none">
              <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                <Image
                  src="/assets/images/hero-cookies-assortment.jpg"
                  alt="Beautiful assortment of gourmet cookies"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem / Agitation */}
      <section className="py-20 bg-cookie-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-cookie-600 rounded-2xl transform rotate-3 translate-x-2 translate-y-2"></div>
              {/* Agitation Image */}
              <div className="relative rounded-2xl shadow-xl w-full h-80 md:h-96 bg-gray-200 overflow-hidden">
                <Image
                  src="/assets/images/agitation-kitchen-chaos.jpg"
                  alt="Stressed baker bringing hands to face in messy kitchen"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
                Why Most Cookie Businesses Crumble Before The First Sale
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Passion makes cookies taste good, but it doesn&apos;t pay the bills. Too many talented bakers jump straight into the kitchen without a plan, only to get hit with:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="bg-red-100 p-1 rounded-full mt-1">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <strong className="text-gray-900 block">Unexpected Legal Fines</strong>
                    <span className="text-gray-600 text-sm">Ignoring cottage food laws or local zoning can shut you down instantly.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-red-100 p-1 rounded-full mt-1">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <strong className="text-gray-900 block">The &quot;Hobby&quot; Pricing Trap</strong>
                    <span className="text-gray-600 text-sm">Underpricing your goods because you didn&apos;t account for labor and overhead.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-red-100 p-1 rounded-full mt-1">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <strong className="text-gray-900 block">Inventory Nightmares</strong>
                    <span className="text-gray-600 text-sm">Wasting money on bulk ingredients that spoil before you use them.</span>
                  </div>
                </li>
              </ul>
              <p className="font-medium text-gray-900">
                You don&apos;t need an MBA. You just need a roadmap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Launch Confidently
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our 10-point checklist covers the critical pillars of a successful bakery launch.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/success-organized-setup.jpg"
                alt="Organized baking business desk with LLC paperwork and calculator"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow flex gap-6">
                <div className="w-12 h-12 shrink-0 bg-blue-100 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Legal & Compliance</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Clear steps for LLC formation, insurance requirements, and navigating Cottage Food Laws in your specific state.
                  </p>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow flex gap-6">
                <div className="w-12 h-12 shrink-0 bg-green-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Costing & Profit</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A simple formula to price your cookies for profit, factoring in ingredients, packaging, and your time.
                  </p>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow flex gap-6">
                <div className="w-12 h-12 shrink-0 bg-purple-100 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Operations Setup</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    From kitchen equipment essentials (without overspending) to packaging that keeps cookies fresh during shipping.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Trust */}
      <section className="py-16 bg-gray-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-cookie-300 font-medium uppercase tracking-widest text-sm mb-10">Trusted by Bakeries Everywhere</h3>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-70 grayscale">
            {/* Mock Logos */}
            <div className="text-2xl font-serif font-bold">SugarSpun</div>
            <div className="text-2xl font-serif font-bold">Crumble & Co</div>
            <div className="text-2xl font-serif font-bold">The Baker&apos;s Nook</div>
            <div className="text-2xl font-serif font-bold">SweetTooth</div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-cookie-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
            Ready to turn your dough into... dough? 💵
          </h2>
          <p className="text-cookie-100 text-lg mb-10 max-w-2xl mx-auto">
            Get the roadmap that has helped hundreds of bakers launch their dream business. It&apos;s free, it&apos;s comprehensive, and it&apos;s waiting for you.
          </p>
          <div className="flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md">
              <h4 className="text-gray-900 font-bold mb-4 text-left">Get your free checklist</h4>
              <EmailForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Basic Footer for portability */}
      <footer className="bg-cookie-900 text-cookie-100 py-12 px-4 border-t border-cookie-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8 md:w-10 md:h-10">
                <Image src="/assets/images/logo-icon.png" alt="CookieCraft AI Logo" fill className="object-contain" />
              </div>
              <span className="font-serif text-xl font-bold text-white">CookieCraft AI</span>
            </div>
            <p className="text-cookie-300 max-w-sm">
              Helping bakers turn their passion into profitable businesses with intelligent tools and guidance.
            </p>
          </div>
          <div className="text-right text-sm text-cookie-400">
            <p>&copy; {new Date().getFullYear()} CookieCraft AI. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
