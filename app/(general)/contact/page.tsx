import type { Metadata } from "next";


export const metadata : Metadata = {
 title: 'Contact Page',
 description: 'This is the contact Page',
 keywords: ['Contact Page', 'Luis B', 'Next.js'],
};
export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">Contact Page</span>
    </>
  );
}