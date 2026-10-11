export default function CreatorDashboard() {
  return (
    <main className="min-h-screen px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">创作者中心</h1>
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        {[
          { label: '总播放量', value: '125.6k' },
          { label: '粉丝', value: '3.2k' },
          { label: '本月收入', value: '$1,234' },
          { label: '待审核', value: '3' }
        ].map((s) => (
          <div key={s.label} className="bg-white/5 rounded-lg p-4">
            <div className="text-gray-400 text-sm">{s.label}</div>
            <div className="text-2xl font-bold mt-1">{s.value}</div>
          </div>
        ))}
      </div>
      <div className="bg-white/5 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">我的视频</h2>
        <div className="space-y-3">
          {['视频 A', '视频 B', '视频 C'].map((t, i) => (
            <div key={i} className="flex items-center gap-4 p-3 bg-black/30 rounded">
              <div className="w-32 aspect-video bg-white/10 rounded flex items-center justify-center">📹</div>
              <div className="flex-1">
                <div className="font-semibold">{t}</div>
                <div className="text-sm text-gray-400">播放 {1000 + i * 500} · 收益 ${10 + i * 5}</div>
              </div>
              <button className="px-3 py-1 border border-white/20 rounded text-sm">编辑</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
