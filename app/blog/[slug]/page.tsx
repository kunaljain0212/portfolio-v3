import { getPostBySlug, getAllPosts } from "@/lib/api";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Breadcrumb from "@/components/breadcrumb";

export async function generateStaticParams() {
  const posts = getAllPosts(["slug"]);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost(props0: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props0.params;
  const post = getPostBySlug(params.slug, ["title", "date", "content"]);

  if (!post) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title, href: `/blog/${params.slug}` },
  ];

  return (
    <article className="py-12 max-w-3xl mx-auto">
      <Breadcrumb items={breadcrumbItems} />
      <h1 className="text-3xl font-bold my-4">{post.title}</h1>
      <time className="text-sm text-gray-400 block mb-8">{post.date}</time>
      <div className="prose prose-invert max-w-none">
        <ReactMarkdown
          components={{
            code(props) {
              const { children, className, ...rest } = props;
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <SyntaxHighlighter
                  PreTag="div"
                  language={match[1]}
                  style={atomDark}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            },
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
