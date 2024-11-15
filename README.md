# Glassmorphic Pricing UI

A stunning, modern pricing page component built with React, TypeScript, and Tailwind CSS. Features a beautiful glassmorphic design with smooth animations and fully responsive layout.

[English](./README.md) | [中文](./README.zh-CN.md)

![recording](https://github.com/user-attachments/assets/4c683db8-1b7d-4177-8276-d5f2e40ae350)

## ✨ Features

- 🎨 Modern glassmorphic design with beautiful blur effects
- 💫 Smooth animations and transitions
- 📱 Fully responsive layout for all devices
- 🌙 Dark mode optimized
- 💎 Premium "Most Popular" card design
- 🔄 Monthly/Yearly pricing toggle with savings calculator
- 📊 Feature comparison table
- 🎯 Interactive tooltips for feature descriptions
- ♿ Accessible (ARIA compliant)
- 🔧 TypeScript support with full type definitions
- 📦 Zero external dependencies (except React)
- 🎨 Customizable themes and styles

## 🛠️ Tech Stack

- React 18
- TypeScript 5
- Tailwind CSS 3
- Vite 5
- Lucide Icons

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## 📖 Usage

```tsx
import { PricingSection } from 'glassmorphic-pricing-ui'

function App() {
  const handlePlanSelect = (plan: string) => {
    console.log(`Selected plan: ${plan}`)
  }

  return (
    <PricingSection
      plans={[
        {
          title: "Hobby",
          price: { monthly: "5", yearly: "4" },
          features: [...],
          onSelect: handlePlanSelect
        },
        // ... other plans
      ]}
    />
  )
}
```

## ⚙️ Configuration

### Props

```typescript
interface PricingProps {
  plans: Array<{
    title: string
    description: string
    price: {
      monthly: string
      yearly: string
    }
    features: Array<{
      text: string
      tooltip?: string
    }>
    popular?: boolean
    buttonText: string
  }>
  onPlanSelect?: (plan: string) => void
  initialBillingCycle?: 'monthly' | 'yearly'
}
```

### Customization

The component can be customized through props and Tailwind CSS classes:

```tsx
// Custom theme
<PricingSection
  theme={{
    primary: '#8B5CF6',
    secondary: '#4F46E5',
    background: '#1E293B'
  }}
/>

// Custom card styles
<PricingCard
  className="custom-card"
  cardStyle={{
    background: 'linear-gradient(...)',
    borderRadius: '1rem'
  }}
/>
```

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details.

## 📝 License

[MIT](LICENSE)

## 🙏 Credits

- Icons by [Lucide](https://lucide.dev)
- Design inspiration from various modern SaaS products</content>
