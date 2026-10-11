const plans = [
  { name: '月度会员', price: '$9.99', period: '/月', features: ['无限制观看', '高清画质', '离线下载'], popular: false },
  { name: '年度会员', price: '$99.99', period: '/年', features: ['无限制观看', '4K 画质', '离线下载', '创作者分润'], popular: true },
  { name: '终身会员', price: '$299', period: '一次性', features: ['所有功能永久解锁', '优先客服', '早期新功能体验'], popular: false }
]

export default function SubscriptionPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">选择你的会员方案</h1>
        <p className="text-gray-400">随时随地，畅享精彩内容</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div key={plan.name} className={`rounded-2xl p-6 border relative ${plan.popular ? 'border-primary bg-primary/10' : 'border-white/10 bg-white/5'}`}>
            {plan.popular && <span className="absolute top-3 right-3 text-xs bg-primary px-2 py-1 rounded">推荐</span>}
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <div className="mt-4">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-gray-400 ml-1">{plan.period}</span>
            </div>
            <ul className="mt-6 space-y-2 text-gray-300">
              {plan.features.map((f) => (
                <li key={f}>✓ {f}</li>
              ))}
            </ul>
            <button className={`mt-6 w-full py-3 rounded-lg font-semibold ${plan.popular ? 'bg-primary' : 'border border-white/20 hover:bg-white/10'}`}>
              立即开通
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}
