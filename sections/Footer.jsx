import agency from "@/content/Agency.json";
import { FounderChip } from "@/components/FounderChip";
import Image from "next/image";
import founders from "@/content/Team.json";
export function Footer() {
  return (
    <>
      <footer className="j5buJW_variable uBJf4W_variable bg-ink-950 text-ink-0">
        <div className="px-gutter py-[50px] lg:pb-[100px] lg:pt-[200px]">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-1">
            <div>
              <p className="max-w-[600px] indent-[4.1em] text-[1.5rem] font-medium leading-[1.2] tracking-[-0.04em] text-ink-0/60 lg:text-[1.875rem]">
                From a first website to search and automation that give you
                hours back,{" "}
                <span className="text-ink-0">we build it ourselves.</span>
              </p>
              <FounderChip people={founders} />
            </div>
          </div>
          <div className="mt-10 grid grid-cols-[3fr_2fr] gap-x-1 lg:mt-20 lg:grid-cols-4">
            <div className="col-span-2">
              <span
                aria-hidden="true"
                className="relative block size-4 text-ink-0/30"
              >
                <span className="absolute inset-x-0 top-[7px] h-0.5 bg-current" />
                <span className="absolute inset-y-0 left-[7px] w-0.5 bg-current" />
              </span>
              <div className="grid mt-[41px] justify-items-start gap-2 lg:mt-[81px]">
                <a
                  href={agency.phoneHref}
                  className="inline-flex min-h-6 items-center text-[1.125rem] font-medium leading-[1.2] tracking-[-0.04em] transition-opacity duration-200 hover:opacity-60"
                >
                  {agency.phone}
                </a>
                <a
                  href={`mailto:${agency.email}`}
                  className="group inline-flex items-center gap-[7px]"
                >
                  <span
                    aria-hidden="true"
                    className="relative grid size-[18px] shrink-0 place-items-center rounded-full bg-ink-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-90"
                  >
                    <span className="absolute h-2 w-0.5 bg-ink-1000" />
                    <span className="absolute h-0.5 w-2 bg-ink-1000" />
                  </span>
                  <span className="relative whitespace-nowrap pb-[3px] text-[min(1.625rem,calc((100vw-4.5rem)/14.2))] font-semibold leading-[1.15] tracking-[-0.05em] lg:text-[2.125rem]">
                    {agency.email}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-0.5 bg-ink-0 transition-opacity duration-200 group-hover:opacity-0"
                    />
                  </span>
                </a>
              </div>
              <p className="mt-4 text-[0.75rem] font-medium leading-[1.3] tracking-[-0.04em] text-ink-0/60 lg:text-[0.875rem]">
                Himachal Pradesh, India · Asia/Kolkata
              </p>
            </div>
            <nav aria-label="Footer" className="mt-[35px] lg:mt-0">
              <span
                aria-hidden="true"
                className="relative block size-4 text-ink-0/30"
              >
                <span className="absolute inset-x-0 top-[7px] h-0.5 bg-current" />
                <span className="absolute inset-y-0 left-[7px] w-0.5 bg-current" />
              </span>
              <p className="mt-10 text-[0.75rem] font-medium leading-[1.3] tracking-[-0.04em] text-ink-0/60 lg:mt-20 lg:text-[0.875rem]">
                Navigation
              </p>
              <ul className="mt-[15px] flex flex-col gap-2 lg:mt-4 lg:gap-2.5">
                <li>
                  <a
                    href="/"
                    className="group relative inline-flex min-h-6 items-center text-[1.125rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.375rem]"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -left-3 top-1/2 size-2 -translate-y-1/2 rounded-full bg-ink-0 opacity-0 transition-opacity duration-[250ms] group-hover:opacity-25"
                    />
                    <span className="inline-block transition-transform duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none group-hover:translate-x-[15px]">
                      Home
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/portfolio"
                    className="group relative inline-flex min-h-6 items-center text-[1.125rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.375rem]"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -left-3 top-1/2 size-2 -translate-y-1/2 rounded-full bg-ink-0 opacity-0 transition-opacity duration-[250ms] group-hover:opacity-25"
                    />
                    <span className="inline-block transition-transform duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none group-hover:translate-x-[15px]">
                      Projects
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="group relative inline-flex min-h-6 items-center text-[1.125rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.375rem]"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -left-3 top-1/2 size-2 -translate-y-1/2 rounded-full bg-ink-0 opacity-0 transition-opacity duration-[250ms] group-hover:opacity-25"
                    />
                    <span className="inline-block transition-transform duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none group-hover:translate-x-[15px]">
                      Services
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/ai"
                    className="group relative inline-flex min-h-6 items-center text-[1.125rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.375rem]"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -left-3 top-1/2 size-2 -translate-y-1/2 rounded-full bg-ink-0 opacity-0 transition-opacity duration-[250ms] group-hover:opacity-25"
                    />
                    <span className="inline-block transition-transform duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none group-hover:translate-x-[15px]">
                      AI Automation
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/pricing"
                    className="group relative inline-flex min-h-6 items-center text-[1.125rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.375rem]"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -left-3 top-1/2 size-2 -translate-y-1/2 rounded-full bg-ink-0 opacity-0 transition-opacity duration-[250ms] group-hover:opacity-25"
                    />
                    <span className="inline-block transition-transform duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none group-hover:translate-x-[15px]">
                      Pricing
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/faq"
                    className="group relative inline-flex min-h-6 items-center text-[1.125rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.375rem]"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -left-3 top-1/2 size-2 -translate-y-1/2 rounded-full bg-ink-0 opacity-0 transition-opacity duration-[250ms] group-hover:opacity-25"
                    />
                    <span className="inline-block transition-transform duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none group-hover:translate-x-[15px]">
                      FAQ
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="group relative inline-flex min-h-6 items-center text-[1.125rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.375rem]"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -left-3 top-1/2 size-2 -translate-y-1/2 rounded-full bg-ink-0 opacity-0 transition-opacity duration-[250ms] group-hover:opacity-25"
                    />
                    <span className="inline-block transition-transform duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none group-hover:translate-x-[15px]">
                      About
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="group relative inline-flex min-h-6 items-center text-[1.125rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.375rem]"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -left-3 top-1/2 size-2 -translate-y-1/2 rounded-full bg-ink-0 opacity-0 transition-opacity duration-[250ms] group-hover:opacity-25"
                    />
                    <span className="inline-block transition-transform duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none group-hover:translate-x-[15px]">
                      Blog
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/how-we-work"
                    className="group relative inline-flex min-h-6 items-center text-[1.125rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.375rem]"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -left-3 top-1/2 size-2 -translate-y-1/2 rounded-full bg-ink-0 opacity-0 transition-opacity duration-[250ms] group-hover:opacity-25"
                    />
                    <span className="inline-block transition-transform duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none group-hover:translate-x-[15px]">
                      How we work
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={agency.linkedin}
                    className="group relative inline-flex min-h-6 items-center text-[1.125rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.375rem]"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -left-3 top-1/2 size-2 -translate-y-1/2 rounded-full bg-ink-0 opacity-0 transition-opacity duration-[250ms] group-hover:opacity-25"
                    />
                    <span className="inline-block transition-transform duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none group-hover:translate-x-[15px]">
                      Kushagra on LinkedIn
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="mt-[35px] lg:mt-0">
              <span
                aria-hidden="true"
                className="relative block size-4 text-ink-0/30"
              >
                <span className="absolute inset-x-0 top-[7px] h-0.5 bg-current" />
                <span className="absolute inset-y-0 left-[7px] w-0.5 bg-current" />
              </span>
            </div>
            <div
              aria-hidden="true"
              className="col-span-2 mt-10 [container-type:inline-size] lg:col-start-3 lg:mt-[100px]"
            >
              <p className="whitespace-nowrap font-[family-name:var(--font-cal)] text-[length:calc(100cqw/3.95)] leading-[0.82] tracking-[-0.05em]">
                {agency.name.toLowerCase()}
              </p>
              <p className="mt-1 whitespace-nowrap font-[family-name:var(--font-script)] text-[length:calc(100cqw/11)] leading-none text-accent">
                {agency.tagline}
              </p>
            </div>
          </div>
        </div>
        <div
          data-footer-bar={true}
          className="relative z-[31] bg-[linear-gradient(90deg,#0a0a0a,#050505_85%)] px-6 py-10 font-medium tracking-[-0.04em] text-ink-1000 sm:px-9 lg:grid lg:grid-cols-4 lg:items-center lg:gap-x-1 lg:py-[42px]"
        >
          <p className="text-[0.75rem] lg:col-span-2 lg:text-[0.875rem]">
            {"© "}
            {2026} Ziggloom™. All rights reserved.
          </p>
          <div className="mt-6 flex flex-col items-start gap-[9px] text-[0.8125rem] lg:col-span-2 lg:mt-0 lg:flex-row lg:items-center lg:gap-10 lg:text-[0.9375rem]">
            <a
              href="/legal/privacy"
              className="inline-flex min-h-6 items-center lg:min-h-7 transition-opacity duration-200 hover:opacity-60"
            >
              Privacy Policy
            </a>
            <a
              href="/legal/terms"
              className="inline-flex min-h-6 items-center lg:min-h-7 transition-opacity duration-200 hover:opacity-60"
            >
              Terms of Service
            </a>
            <p className="mt-4 text-[0.8125rem] lg:ml-auto lg:mt-0">
              Project contact{" "}
              <Image
                src="/icon.svg"
                alt=""
                width={28}
                height={28}
                sizes="28px"
                quality={90}
                className="mx-0.5 inline-block size-7 rounded-full object-cover align-middle"
              />{" "}
              Kushagra Bhartia
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
