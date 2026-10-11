import { notFound } from 'next/navigation'

export default async function VideoDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  if (!id) notFound()
  return (
    <main className="min-h-screen">
      <div className="aspect-video bg-black flex items-center justify-center">
        <div className="text-gray-500 text-center">
          <div className="text-6xl mb-4">▶️</div>
          <div>视频播放器区域 (hls.js)</div>
        </div>
      </div>
      <div className="px-6 py-8">
        <h1 className="text-2xl font-bold mb-2">视频标题 #{id}</h1>
        <p className="text-gray-400 mb-6">创作者: creator_01 · 播放量 12.5k</p>
        <div className="border border-white/10 rounded-lg p-4 mb-6">
          <h3 className="font-semibold mb-2">解锁选项</h3>
          <div className="flex gap-3 flex-wrap">
            <button className="px-4 py-2 bg-primary rounded">单集 $1.99</button>
            <button className="px-4 py-2 border border-white/20 rounded">月度会员 $9.99</button>
          </div>
        </div>
      </div>
    </main>
  )
}
