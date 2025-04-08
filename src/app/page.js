import { FaqsList } from "@/components/faqs";
import { Footer } from "@/components/footer";
import { KotaverseCta } from "@/components/kota-verse";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <FaqsList />
      <KotaverseCta />
     <Footer />
    </div>
  );
}
