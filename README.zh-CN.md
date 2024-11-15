# Glassmorphic Pricing 玻璃态定价组件

基于 React、TypeScript 和 Tailwind CSS 构建的现代化定价页面组件。具有令人惊叹的玻璃态设计、流畅的动画效果和完全响应式布局。

[English](./README.md) | [中文](./README.zh-CN.md)

![玻璃态定价组件预览](https://source.unsplash.com/random/1200x630/?ui,glass,modern)
![recording](https://github.com/user-attachments/assets/fb8d2c4d-7866-4c1d-abdb-3bb803137c05)



## ✨ 特性

- 🎨 现代玻璃态设计，带有精美的模糊效果
- 💫 流畅的动画和过渡效果
- 📱 完全响应式布局，适配所有设备
- 🌙 深色模式优化
- 💎 精美的"最受欢迎"卡片设计
- 🔄 月付/年付切换，带有节省金额计算器
- 📊 功能对比表格
- 🎯 交互式功能提示
- ♿ 无障碍支持（符合 ARIA 规范）
- 🔧 TypeScript 支持，带有完整类型定义
- 📦 零外部依赖（除 React 外）
- 🎨 可自定义主题和样式

## 🛠️ 技术栈

- React 18
- TypeScript 5
- Tailwind CSS 3
- Vite 5
- Lucide Icons

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 📖 使用方法

```tsx
import { PricingSection } from 'glassmorphic-pricing-ui'

function App() {
  const handlePlanSelect = (plan: string) => {
    console.log(`选择的套餐: ${plan}`)
  }

  return (
    <PricingSection
      plans={[
        {
          title: "基础版",
          price: { monthly: "5", yearly: "4" },
          features: [...],
          onSelect: handlePlanSelect
        },
        // ... 其他套餐
      ]}
    />
  )
}
```

## ⚙️ 配置

### 属性

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

### 自定义

组件可以通过属性和 Tailwind CSS 类进行自定义：

```tsx
// 自定义主题
<PricingSection
  theme={{
    primary: '#8B5CF6',
    secondary: '#4F46E5',
    background: '#1E293B'
  }}
/>

// 自定义卡片样式
<PricingCard
  className="custom-card"
  cardStyle={{
    background: 'linear-gradient(...)',
    borderRadius: '1rem'
  }}
/>
```

## 🤝 贡献

欢迎贡献！请阅读我们的[贡献指南](CONTRIBUTING.md)了解详情。

## 📝 许可证

[MIT](LICENSE)

## 🙏 致谢

- 图标来自 [Lucide](https://lucide.dev)
- 设计灵感来自各种现代 SaaS 产品</content>
