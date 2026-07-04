import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import PageCTA from '@/components/shared/PageCTA';
import SchemaOrg from '@/components/shared/SchemaOrg';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbSchema } from '@/lib/schema';
import { SCHOOL } from '@/lib/constants';
import { FEE_TABLE } from '@/lib/page-data';
import { Wallet, CreditCard, Smartphone } from 'lucide-react';

export const metadata: Metadata = pageMetadata.feeStructure;

export default function FeeStructurePage() {
  const breadcrumbSchemaData = breadcrumbSchema([
    { name: 'Home', url: SCHOOL.siteUrl },
    { name: 'Fees', url: `${SCHOOL.siteUrl}/fee-structure` },
  ]);

  return (
    <>
      <SchemaOrg schema={breadcrumbSchemaData} />
      <PageHero
        title="Fee Structure"
        subtitle="Transparent school fees in Bantwal — affordable English medium education"
        breadcrumbs={[{ label: 'Fee Structure' }]}
      />

      <div className="container-custom section-padding">
        <div className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          Fees may vary. Contact school for the latest fee structure. Call {SCHOOL.phone}.
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-6 py-4 font-semibold">Class</th>
                <th className="px-6 py-4 font-semibold">Term Fee</th>
                <th className="px-6 py-4 font-semibold">Annual Fee</th>
                <th className="px-6 py-4 font-semibold">Other Charges</th>
                <th className="px-6 py-4 font-semibold">Total (Approx.)</th>
              </tr>
            </thead>
            <tbody>
              {FEE_TABLE.map((fee, i) => (
                <tr key={fee.class} className={i % 2 === 0 ? 'bg-white' : 'bg-surface'}>
                  <td className="px-6 py-4 font-bold text-text-main">{fee.class}</td>
                  <td className="px-6 py-4">{fee.termFee}</td>
                  <td className="px-6 py-4">{fee.annualFee}</td>
                  <td className="px-6 py-4">{fee.other}</td>
                  <td className="px-6 py-4 font-semibold text-accent">{fee.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-surface p-8">
            <Wallet className="h-8 w-8 text-primary" />
            <h3 className="mt-4">Scholarships</h3>
            <ul className="mt-4 space-y-2 text-sm text-text-muted">
              <li><strong className="text-text-main">Merit-based:</strong> For students with outstanding academic performance</li>
              <li><strong className="text-text-main">Need-based:</strong> Support for deserving families — enquire at school office</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-surface p-8">
            <CreditCard className="h-8 w-8 text-primary" />
            <h3 className="mt-4">Payment Modes</h3>
            <ul className="mt-4 space-y-3 text-sm text-text-muted">
              <li className="flex items-center gap-2"><Wallet className="h-4 w-4 text-accent" /> Cash at school office</li>
              <li className="flex items-center gap-2"><CreditCard className="h-4 w-4 text-accent" /> Bank transfer</li>
              <li className="flex items-center gap-2"><Smartphone className="h-4 w-4 text-accent" /> UPI payment</li>
            </ul>
          </div>
        </div>

        <p className="mt-12 text-center text-sm text-text-muted">
          Disclaimer: The fee structure above is indicative for academic year 2025-26.
          Transport, uniform, books, and examination fees are additional.
          Om Janahithaya English Medium School reserves the right to revise fees with prior notice.
        </p>
      </div>

      <PageCTA />
    </>
  );
}
