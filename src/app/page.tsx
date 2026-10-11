export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="hero py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
          榴莲TV
        </h1>
        <p className="mt-4 text-gray-400 text-lg">Premium Video Streaming Platform</p>
        <div className="mt-8 flex gap-4 justify-center">
          <a href="/browse" className="px-6 py-3 bg-primary rounded-full font-semibold hover:opacity-90 transition">
            立即浏览
          </a>
          <a href="/subscription" className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition">
            开通会员
          </a>
        </div>
      </section>
      <section className="px-6 pb-20">
        <h2 className="text-2xl font-bold mb-6">热门推荐</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-video bg-white/5 rounded-lg flex items-center justify-center text-gray-500">
              视频占位 {i + 1}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
