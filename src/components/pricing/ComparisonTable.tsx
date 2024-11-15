import { Check, X } from 'lucide-react'

const features = [
  { name: 'Custom Domains', starter: true, pro: true, enterprise: true },
  { name: 'SSL Certificates', starter: true, pro: true, enterprise: true },
  { name: 'Automatic Deployments', starter: true, pro: true, enterprise: true },
  { name: 'Team Collaboration', starter: false, pro: true, enterprise: true },
  { name: 'Priority Support', starter: false, pro: true, enterprise: true },
  { name: 'Custom Branding', starter: false, pro: true, enterprise: true },
  { name: 'SLA', starter: false, pro: false, enterprise: true },
  { name: 'Dedicated Account Manager', starter: false, pro: false, enterprise: true },
]

export function ComparisonTable() {
  return (
    <div className="mt-24 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Compare Plans</h2>
      <div className="overflow-hidden rounded-xl glass-card">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="py-4 px-6 text-left text-white">Features</th>
              <th className="py-4 px-6 text-center text-white">Starter</th>
              <th className="py-4 px-6 text-center text-white">Pro</th>
              <th className="py-4 px-6 text-center text-white">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, i) => (
              <tr 
                key={feature.name} 
                className={`
                  border-b border-white/10 last:border-0
                  transition-colors duration-200 hover:bg-white/5
                `}
              >
                <td className="py-4 px-6 text-white/90">{feature.name}</td>
                <td className="py-4 px-6 text-center">
                  {feature.starter ? (
                    <Check className="h-5 w-5 text-emerald-400 mx-auto" />
                  ) : (
                    <X className="h-5 w-5 text-white/30 mx-auto" />
                  )}
                </td>
                <td className="py-4 px-6 text-center">
                  {feature.pro ? (
                    <Check className="h-5 w-5 text-emerald-400 mx-auto" />
                  ) : (
                    <X className="h-5 w-5 text-white/30 mx-auto" />
                  )}
                </td>
                <td className="py-4 px-6 text-center">
                  {feature.enterprise ? (
                    <Check className="h-5 w-5 text-emerald-400 mx-auto" />
                  ) : (
                    <X className="h-5 w-5 text-white/30 mx-auto" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}