export default function BrowsePage() {
  return (
    <main className="min-h-screen px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">剧集浏览</h1>
      <div className="flex gap-2 mb-8 flex-wrap">
        {['全部', '动作', '剧情', '喜剧', '综艺', '纪录片'].map((c) => (
          <button key={c} className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition">
            {c}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <a key={i} href={`/video/${i + 1}`} className="aspect-video bg-white/5 rounded-lg flex flex-col items-center justify-center text-gray-500 hover:bg-white/10 transition">
            <span>🎬</span>
            <span className="mt-2 text-sm">视频 #{i + 1}</span>
          </a>
        ))}
      </div>
    </main>
  )
}
