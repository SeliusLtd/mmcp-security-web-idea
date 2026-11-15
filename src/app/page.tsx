import { SiteHeader } from "@/components/mmcp/site-header";
import { Hero } from "@/components/mmcp/hero";
import { Operations } from "@/components/mmcp/operations";
import { Capabilities } from "@/components/mmcp/capabilities";
import { Sectors } from "@/components/mmcp/sectors";
import { Packages } from "@/components/mmcp/packages";
import { Operators } from "@/components/mmcp/operators";
import { Engage } from "@/components/mmcp/engage";
import { SiteFooter } from "@/components/mmcp/site-footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Operations />
        <Capabilities />
        <Sectors />
        <Packages />
        <Operators />
        <Engage />
      </main>
      <SiteFooter />
    </div>
  );
}
