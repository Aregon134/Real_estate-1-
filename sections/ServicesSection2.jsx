import agency from "@/content/Agency.json";
import { ServicesList } from "@/components/ServicesList";
import dataServices from "@/content/Services.json";
export function ServicesSection2() {
  return (
    <>
      <section aria-label="Our services" className="bg-ink-950 lg:px-1.5">
        <div
          className="grain-panel px-5 py-[50px] text-ink-1000 lg:rounded-[25px] lg:px-[30px] lg:py-[200px]"
          style={{
            background:
              "radial-gradient(70% 55% at 100% 0%, #272727 0%, rgb(39 39 39 / 0) 65%), radial-gradient(60% 45% at 0% 100%, #151515 0%, rgb(21 21 21 / 0) 70%), #0a0a0a",
          }}
        >
          <div>
            <ServicesList rows={dataServices} flush={true} />
            <div className="mt-10 lg:mt-14 lg:grid lg:grid-cols-12 lg:gap-6">
              <a
                href={agency.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sweep inline-flex h-12 items-center gap-2.5 rounded-full bg-ink-1000 pl-6 pr-5 text-[0.9375rem] font-semibold tracking-[-0.02em] text-ink-0 lg:col-start-4 lg:w-max"
              >
                Book a 15-minute call
                <span
                  aria-hidden="true"
                  className="btn-arrow relative inline-block size-4 overflow-hidden"
                >
                  <svg
                    viewBox="0 0 16 16"
                    className="btn-arrow-a absolute inset-0 size-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                  <svg
                    viewBox="0 0 16 16"
                    className="btn-arrow-b absolute inset-0 size-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </span>
                <span className="sr-only">{" (opens in a new tab)"}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
