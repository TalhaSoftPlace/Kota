import { Articles } from "@/components/blog-articles";
import { FaqsList } from "@/components/faqs";
import { Footer } from "@/components/footer";
import { KotaverseCta } from "@/components/kota-verse";
import { PartnersSection } from "@/components/partners";
import { WorkProjects } from "@/components/work-projects";

export default function Home() {
  return (
    <div className="">
      <WorkProjects />
      <PartnersSection />
      <Articles />
      <FaqsList />
      <KotaverseCta />
     <Footer />
    </div>
  );
}
