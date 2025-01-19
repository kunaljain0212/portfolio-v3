import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getAllPosts } from '@/lib/api'

export default function RecentBlogs() {
  const recentBlogs = getAllPosts(['title', 'date', 'slug', 'excerpt']).slice(0, 4)

  return (
    <section className="py-12">
      <h2 className="text-lg text-muted-foreground mb-8">Recent Blogs</h2>
      <div className="space-y-8">
        {recentBlogs.map((blog) => (
          <article key={blog.slug} className="border-b border-gray-800 pb-6">
            <Link href={`/blog/${blog.slug}`} className="block group">
              <h3 className="text-xl font-medium mb-2 group-hover:text-green-400 transition-colors">{blog.title}</h3>
              <p className="text-muted-foreground mb-2">{blog.excerpt}</p>
              <time className="text-sm text-gray-400">{blog.date}</time>
            </Link>
          </article>
        ))}
      </div>
      <div className="mt-8">
        <Link href="/blog" className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors">
          Show all blogs
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}

