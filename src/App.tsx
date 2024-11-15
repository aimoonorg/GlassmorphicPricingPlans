import { useState } from 'react'
import { PricingCard } from './components/pricing/PricingCard'
import { PricingToggle } from './components/pricing/PricingToggle'
import { ComparisonTable } from './components/pricing/ComparisonTable'
import { Rocket, Zap, Building2 } from 'lucide-react'
import { Button } from './components/ui/button'

export default function App() {
  const [yearly, setYearly] = useState(false)

  const plans = [
    {
      title: "Hobby",
      description: "Perfect for side projects and small applications",
      price: { monthly: "5", yearly: "4" },
      period: yearly ? "/mo/billed yearly" : "/mo",
      features: [
        { text: "8 GB RAM / 8 vCPU per service", tooltip: "Dedicated resources for your applications" },
        { text: "Single developer workspace", tooltip: "Perfect for individual developers" },
        { text: "Community support", tooltip: "Access to our community forums and knowledge base" },
        { text: "7-day log history", tooltip: "Access logs for the past 7 days" },
        { text: "US-West region", tooltip: "Deploy your applications in our US-West region" }
      ],
      buttonText: "Deploy with Hobby",
      icon: Rocket,
      type: 'hobby'
    },
    {
      title: "Pro",
      description: "For professional developers and teams shipping to production",
      price: { monthly: "20", yearly: "16" },
      period: yearly ? "/mo/billed yearly" : "/mo/seat",
      features: [
        { text: "32 GB RAM / 32 vCPU per service", tooltip: "Enhanced resources for production workloads" },
        { text: "Multiple developer workspace", tooltip: "Collaborate with your entire team" },
        { text: "Railway Support (1 Business Day)", tooltip: "Priority support with 24-hour response time" },
        { text: "30-day log history", tooltip: "Extended log retention for better debugging" },
        { text: "Global regions", tooltip: "Deploy to any of our global regions" }
      ],
      buttonText: "Deploy with Pro",
      popular: true,
      icon: Zap,
      type: 'pro'
    },
    {
      title: "Enterprise",
      description: "For businesses with large instance, SLA, and/or compliance needs",
      price: { monthly: "Custom", yearly: "Custom" },
      period: "",
      features: [
        { text: "Up to 2 TB RAM / 112 vCPU per service", tooltip: "Maximum resources for enterprise workloads" },
        { text: "Unlimited team seats included", tooltip: "No per-seat pricing, unlimited team members" },
        { text: "Support SLAs available", tooltip: "Custom SLAs tailored to your needs" },
        { text: "90-day log history available", tooltip: "Extended log retention for compliance" },
        { text: "HIPAA compliance available", tooltip: "Enterprise-grade security and compliance" }
      ],
      buttonText: "Contact Us",
      icon: Building2,
      type: 'enterprise'
    }
  ]

  const handlePlanSelect = (plan: string) => {
    console.log(`Selected plan: ${plan}`)
    // Add your plan selection logic here
  }

  return (
    <div className="min-h-screen py-16 px-4 relative overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-float" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-float delay-1000" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-emerald-500/20 rounded-full filter blur-3xl animate-float delay-2000" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 text-gradient">
            Simple, transparent pricing
          </h1>
          <p className="mt-4 text-xl text-white/70 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Always know what you'll pay.
            No hidden fees and no surprises.
          </p>
        </div>

        <PricingToggle onChange={setYearly} />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard
              key={plan.title}
              {...plan}
              yearly={yearly}
              onSelect={() => handlePlanSelect(plan.title)}
            />
          ))}
        </div>

        <ComparisonTable />

        <div className="mt-24 text-center glass-card rounded-2xl p-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-white">Need something different?</h2>
          <p className="text-white/70 mb-8 text-lg">
            Contact us for custom enterprise solutions tailored to your specific needs.
            Our team is ready to help you scale.
          </p>
          <Button 
            onClick={() => console.log('Contact sales clicked')}
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20"
            size="lg"
          >
            Contact Sales Team
          </Button>
        </div>
      </div>
    </div>
  )
}