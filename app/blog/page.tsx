import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCallButton } from "@/components/layout/FloatingCallButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogCategories, blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog - Child Safety Online, Family Protection & Web Security",
  description:
    "Read SEO-rich guides on child safety online, parental controls, lost phone recovery, business device management, and web security.",
};

const featuredPost = blogPosts.find((post) => post.featured) ?? blogPosts[0];

export default function BlogIndex() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Mulikamtoto Blog",
    description:
      "SEO-rich articles about child safety online, family device protection, mobile cybersecurity, and web development.",
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.publishedAt,
      author: {
        "@type": "Organization",
        name: "Mulikamtoto",
      },
      url: `/blog/${post.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={schema} />
      <Header />
      <main className="bg-[#f7f8ff] text-[#101042]">
        <section className="bg-[#05051f] px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">
              Blog
            </p>
            <div className="mt-4 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                  Latest articles on child safety, family devices, and web
                  security.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-indigo-100/80">
                  These guides are written to help parents, guardians, and
                  businesses build safer device habits, stronger protection, and
                  clearer digital policies.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-200">
                  Blog focus
                </p>
                <div className="mt-5 space-y-3 text-sm text-indigo-100/80">
                  {blogCategories.map((category) => (
                    <div
                      key={category}
                      className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3"
                    >
                      <span className="font-semibold text-white">
                        {category}
                      </span>
                      <span>New articles</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-200/70">
              <div className="bg-gradient-to-br from-[#101042] to-[#1e1e80] p-8 text-white">
                <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-200">
                  Featured article
                </p>
                <h2 className="mt-4 text-3xl font-black leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="mt-4 max-w-2xl text-indigo-100/80">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-sm text-indigo-100/80">
                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">
                    {featuredPost.category}
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">
                    {featuredPost.readingTime}
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">
                    Updated{" "}
                    {new Date(featuredPost.publishedAt).toLocaleDateString(
                      "en-GB",
                      { year: "numeric", month: "short", day: "numeric" },
                    )}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-black text-[#101042]">
                  Why this article matters
                </h3>
                <p className="mt-4 leading-8 text-slate-600">
                  {featuredPost.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredPost.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full bg-[#eef2ff] px-3 py-2 text-xs font-semibold text-primary"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center justify-center rounded-lg bg-[#101042] px-5 py-3 font-black text-white transition hover:bg-primary"
                  >
                    Read featured article
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 font-black text-[#101042] transition hover:border-primary hover:text-primary"
                  >
                    Ask for a consultation
                  </Link>
                </div>
              </div>
            </article>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-primary">
                What you will find here
              </p>
              <div className="mt-6 space-y-4 text-slate-600 leading-7">
                <p>
                  Practical child safety online advice for parents and
                  guardians.
                </p>
                <p>
                  Guidance on parental controls, screen time, safe zones, and
                  app blocking.
                </p>
                <p>
                  Mobile cybersecurity, lost phone recovery, and business device
                  security tips.
                </p>
                <p>
                  SEO-focused web development articles for small businesses that
                  need safer websites.
                </p>
              </div>
              <div className="mt-8 rounded-2xl bg-[#f7f8ff] p-5">
                <p className="text-sm font-semibold text-slate-500">
                  Total posts
                </p>
                <p className="mt-2 text-4xl font-black text-[#101042]">
                  {blogPosts.length}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-primary">
                  All articles
                </p>
                <h2 className="mt-3 text-3xl font-black text-[#101042]">
                  SEO-rich guides and practical tutorials
                </h2>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70 transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-[#eef2ff] px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-primary">
                      {post.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {post.readingTime}
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl font-black leading-tight text-[#101042] group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {post.keywords.slice(0, 3).map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-semibold text-slate-600"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between gap-4 pt-4">
                    <span className="text-sm font-semibold text-slate-500">
                      {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center justify-center rounded-lg bg-[#101042] px-4 py-2.5 text-sm font-black text-white transition hover:bg-primary"
                    >
                      Read article
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
