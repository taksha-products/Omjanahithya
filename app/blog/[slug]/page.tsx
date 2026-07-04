import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageCTA from '@/components/shared/PageCTA';
import SchemaOrg from '@/components/shared/SchemaOrg';
import FAQAccordion from '@/components/shared/FAQAccordion';
import { generateMeta } from '@/lib/metadata';
import { breadcrumbSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SCHOOL } from '@/lib/constants';
import { BLOG_POSTS } from '@/lib/blog-posts';
import { renderBlogContent } from '@/lib/markdown';
import { Calendar, User, ArrowLeft } from 'lucide-react';

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Post Not Found' };
  return generateMeta({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: [post.category, 'school blog Bantwal', post.slug.replace(/-/g, ' ')],
    ogType: 'article',
    absoluteTitle: true,
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const breadcrumbSchemaData = breadcrumbSchema([
    { name: 'Home', url: SCHOOL.siteUrl },
    { name: 'Blog', url: `${SCHOOL.siteUrl}/blog` },
    { name: post.title, url: `${SCHOOL.siteUrl}/blog/${post.slug}` },
  ]);

  const schemas: Record<string, unknown>[] = [
    breadcrumbSchemaData,
    articleSchema(post),
  ];
  if (post.faqs?.length) {
    schemas.push(faqSchema(post.faqs));
  }

  const contentHtml = renderBlogContent(post.content);

  return (
    <>
      <SchemaOrg schema={schemas} />
      <article>
        <div className="relative h-64 md:h-80 lg:h-96 bg-gradient-to-r from-primary to-primary-light">
          <Image src={post.image} alt={post.title} width={1200} height={630} className="h-full w-full object-cover opacity-30 mix-blend-overlay" sizes="100vw" priority />
          <div className="absolute inset-0 bg-deep/50" />
          <div className="container-custom relative flex h-full flex-col justify-end pb-8">
            <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">{post.category}</span>
            <h1 className="mt-4 text-white">{post.title}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/80">
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span className="flex items-center gap-1"><User className="h-4 w-4" />{post.author}</span>
            </div>
          </div>
        </div>

        <div className="container-custom section-padding">
          <div className="mx-auto max-w-3xl">
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />

            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <FAQAccordion items={post.faqs} />
              </div>
            )}

            <div className="mt-12 rounded-2xl bg-surface p-8 text-center">
              <h3 className="text-xl font-bold">School Admission in Bantwal</h3>
              <p className="mt-2 text-text-muted">Apply at Om Janahithaya English Medium School, Arala.</p>
              <Link href="/admissions" className="btn-primary mt-4">Apply for Admission</Link>
            </div>

            <Link href="/blog" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:text-accent">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
          </div>
        </div>
      </article>
      <PageCTA />
    </>
  );
}
