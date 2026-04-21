import ContactHero from "../features/contact/components/ContactHero";
import ContactForm from "../features/contact/components/ContactForm";
import ContactInfoCard from "../features/contact/components/ContactInfoCard";
import LocationCard from "../features/contact/components/LocationCard";
import StatusGrid from "../features/contact/components/StatusGrid";

const Contact = () => {
  return (
    <div className="bg-background text-on-surface">

      <main className="mx-auto max-w-7xl px-8 pb-20 pt-32">
        <ContactHero />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <section className="rounded-xl bg-surface-container-low p-8 outline outline-outline-variant/15 md:p-12 lg:col-span-7">
            <ContactForm />
          </section>

          <div className="space-y-6 lg:col-span-5">
            <ContactInfoCard/>
            <LocationCard />
          </div>
        </div>

        <StatusGrid />
      </main>

    </div>
  )
}

export default Contact