import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import PageCTA from '@/components/shared/PageCTA';
import SchemaOrg from '@/components/shared/SchemaOrg';
import FAQAccordion from '@/components/shared/FAQAccordion';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbSchema } from '@/lib/schema';
import { SCHOOL } from '@/lib/constants';
import { BLOG_POSTS } from '@/lib/blog-posts';

export const metadata: Metadata = pageMetadata.blog;

export default function BlogPage() {
  const breadcrumbSchemaData = breadcrumbSchema([
    { name: 'Home', url: SCHOOL.siteUrl },
    { name: 'Blog', url: `${SCHOOL.siteUrl}/blog` },
  ]);

  return (
    <>
      <SchemaOrg schema={breadcrumbSchemaData} />
      <PageHero
        title="School Blog"
        subtitle="SEO guides for parents — best schools in Bantwal, admissions, and education tips"
        breadcrumbs={[{ label: 'Blog' }]}
      />
      <div className="container-custom section-padding">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.slug} className="group overflow-hidden rounded-2xl border border-gray-100 shadow-card transition-shadow hover:shadow-card-hover">
              <div className="relative aspect-[16/10]">
                <Image src={post.image} alt={post.title} width={640} height={400} className="h-full w-full object-cover transition-transform group-hover:scale-105" sizes="33vw" />
                <span className="absolute top-4 left-4 rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">{post.category}</span>
              </div>
              <div className="p-6">
                <time className="text-xs text-text-muted">
                  {new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
                <h2 className="mt-2 group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-2 text-sm text-text-muted line-clamp-3">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="mt-4 inline-flex text-sm font-semibold text-accent hover:underline">
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
      <PageCTA />
    </>
  );
}
