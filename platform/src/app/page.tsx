import { Hero } from '@/components/layout/Hero';
import { Features } from '@/components/layout/Features';
import { Specializations } from '@/components/layout/Specializations';
import { SuccessStories } from '@/components/layout/SuccessStories';
import { Community } from '@/components/layout/Community';
import { Pricing } from '@/components/layout/Pricing';
import { CTA } from '@/components/layout/CTA';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Specializations />
      <SuccessStories />
      <Community />
      <Pricing />
      <CTA />
    </main>
  );
}
