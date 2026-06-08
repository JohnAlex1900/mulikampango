import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCallButton } from "@/components/layout/FloatingCallButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPosts, getBlogPost } from "@/lib/blog-posts";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog post not found",
    };
  }

  return {
    title: `${post.title} - Mulikamtoto Blog`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "Mulikamtoto",
    },
    publisher: {
      "@type": "Organization",
      name: "Mulikamtoto",
    },
    mainEntityOfPage: `/blog/${post.slug}`,
  };

  return (
    <>
      <JsonLd data={schema} />
      <Header />
      <main className="bg-[#f7f8ff] text-[#101042]">
        <section className="bg-[#05051f] px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">
              {post.category}
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-indigo-100/80">
              {post.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-indigo-100/80">
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">
                {post.readingTime}
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">
                Published{" "}
                {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.32fr] lg:items-start">
            <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-200/70">
              <div className="prose prose-slate max-w-none prose-headings:text-[#101042] prose-headings:font-black prose-p:leading-8 prose-li:leading-8">
                {post.sections.map((section) => (
                  <section key={section.heading} className="mb-10 last:mb-0">
                    <h2>{section.heading}</h2>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {section.bullets ? (
                      <ul>
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                ))}
              </div>

              <div className="mt-10 rounded-3xl bg-[#f7f8ff] p-6">
                <h2 className="text-2xl font-black text-[#101042]">
                  Key takeaways
                </h2>
                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  {post.takeaways.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-7 text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <aside className="space-y-6">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70">
                <p className="text-sm font-black uppercase tracking-[0.24em] text-primary">
                  SEO keywords
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full bg-[#eef2ff] px-3 py-2 text-xs font-semibold text-primary"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] bg-[#101042] p-6 text-white shadow-2xl shadow-indigo-950/20">
                <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-200">
                  Next step
                </p>
                <h2 className="mt-4 text-2xl font-black">
                  Need help applying this?
                </h2>
                <p className="mt-4 text-indigo-100/80 leading-7">
                  Mulikamtoto can help with lawful child safety setup, device
                  management, or website security planning.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-[#ff6767] px-5 py-3 font-black text-white transition hover:bg-[#ff7b7b]"
                  >
                    {post.ctaLabel}
                  </Link>
                  <Link
                    href="/blog"
                    className="inline-flex items-center justify-center rounded-lg border border-white/15 px-5 py-3 font-black text-white transition hover:bg-white/10"
                  >
                    Back to blog
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
