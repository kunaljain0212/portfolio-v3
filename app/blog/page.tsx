import Link from 'next/link'
import { getAllPosts } from '@/lib/api'
import Breadcrumb from '@/components/breadcrumb'

export default function BlogPage() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'excerpt'])

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
  ]

  return (
    <div className="py-12">
      <Breadcrumb items={breadcrumbItems} />
      <h1 className="text-3xl font-bold my-8">All Blogs</h1>
      <div className="space-y-12">
        {allPosts.map((post) => (
          <article key={post.slug} className="border-b border-gray-800 pb-8">
            <Link href={`/blog/${post.slug}`} className="block group">
              <h2 className="text-2xl font-medium mb-3 group-hover:text-green-400 transition-colors">{post.title}</h2>
              <p className="text-muted-foreground mb-3">{post.excerpt}</p>
              <time className="text-sm text-gray-400">{post.date}</time>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}

