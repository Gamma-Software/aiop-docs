import { Background } from "../Background";
import { Hero } from "./Hero";
import { Pricing } from "./Pricing";
import { Users } from "./Users";
import { OpenSource } from "./OpenSource";
import { Footer } from "./Footer";
import { FeatureBento } from "./FeatureBento";
import { Integrations } from "./Integrations";
import { FromTheBlog } from "./FromTheBlog";
import { Benefits } from "./Benefits";
import { Clients } from "./Clients";
import { Workflow } from "./Workflow";
import { Demo } from "./Demo";
import { Toaster } from "../ui/shadcn/toaster"
import { Capable } from "./Capable"

export const Home = () => (
  <>
    <main className="relative overflow-hidden w-full">
      <Hero/>
      {/* <Users /> */}
      <Demo/>
      <Capable/>
      {/* <Workflow/> */}
      {/* <Benefits/> */}
      <FeatureBento/>
      <Clients/>
      <Integrations/>
      {/* <OpenSource /> */}
      <Pricing/>
      {/* <FromTheBlog locale={lang} /> */}
      {/* <CTA /> */}
      <Footer />
    </main>
    <Background />
    <Toaster />
  </>

);
