import type { Metadata } from "next";


export const metadata : Metadata = {
 title: 'SEO Title',
 description: 'SEO Description',
  keywords: ['About Page', 'Luis B', 'Next.js'],
};

export default function AboutPage() {
  return (
    <>
      <h1 className="text-7xl">About page</h1>
    </>
  );
}