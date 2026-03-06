"use client";
import Image from "next/image";

import {
  Card,
  Divider,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@heroui/react";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

type SheetId = "profile" | "experience" | "education" | "skills";
type ExperienceId = "groww" | "tristone" | "popmunch" | "7mm" | "gaurang";

const tabs: { id: SheetId; label: string }[] = [
  { id: "profile", label: "Profile" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
];

type TimelineItem = {
  month: string;
  icon: "cap" | "briefcase" | "briefcase-cap";
  role: React.ReactNode;
  top?: React.ReactNode;
  bottom?: React.ReactNode;
  topTag?: string;
  bottomTag?: string;
};

const timelineSteps: TimelineItem[] = [
  {
    month: "July 2020",
    icon: "cap",
    role: "",
    bottom: (
      <>
        Joined NMIMS BSc
        <br />
        Finance
      </>
    ),
  },
  {
    month: "Sep 2020",
    icon: "briefcase-cap",
    role: (
      <>
        First internship:
        <br />
        10 months
      </>
    ),
    top: (
      <>
        Research on investment
        <br />
        products for personal
        <br />
        finance coursework
      </>
    ),
  },
  {
    month: "Aug 2021",
    icon: "briefcase-cap",
    role: (
      <>
        Second internship:
        <br />
        9 months
      </>
    ),
    bottom: (
      <>
        D2C Brand - Product
        <br />
        lifecycle and marketplace
        <br />
        placements
      </>
    ),
  },
  {
    month: "May 2022",
    icon: "briefcase-cap",
    role: (
      <>
        Third internship:
        <br />
        10 months
      </>
    ),
    top: (
      <>
        <span className="text-blue-700">Investment banking summer</span>
        <br />
        <span className="text-blue-700">analyst</span> working on capital raise
        <br />
        mandates;
        <br />
        <span className="italic">closed my first deal ($1 Mn)</span>
      </>
    ),
  },
  {
    month: "May 2023",
    icon: "cap",
    role: "",
    bottom: (
      <>
        Graduated with a
        <br />
        Bsc Finance degree
      </>
    ),
  },
  {
    month: "June 2023",
    icon: "briefcase",
    role: (
      <>
        First full time role:
        <br />
        2 years 2 months
      </>
    ),
    topTag: "Financial Analyst",
    top: (
      <>
        <span className="font-semibold text-red-600 underline">Y1</span>: Worked with a hedge fund valuing
        <br />
        companies (sector agnostic), a PE client where I
        <br />
        did thorough market research
        <br />
        <span className="font-semibold text-red-600 underline">Y2</span>: Worked on deal modelling - LBO, M&amp;A,
        <br />
        Strategic
      </>
    ),
  },
  {
    month: "August 2025",
    icon: "briefcase",
    role: "Second full time role",
    bottomTag: "Entrepreneur in Residence",
    bottom: (
      <>
        Worked on building function-wise
        <br />
        OKRs and KRAs to improve data
        <br />
        visibility of leading indicators
        <br />
        and led governance
      </>
    ),
  },
];

function TimelineIcon({ kind }: { kind: "cap" | "briefcase" | "briefcase-cap" }) {
  if (kind === "cap") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-9 w-9 text-slate-900"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 9 12 4l10 5-10 5L2 9Z" />
        <path d="M5.5 11v4.1c3.9 2.4 9.1 2.4 13 0V11" />
        <path d="M20 10v6.2" />
        <circle cx="20" cy="17.7" r="1.2" />
      </svg>
    );
  }
  const briefcase = (
    <svg
      viewBox="0 0 24 24"
      className="h-9 w-9 text-slate-900"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="7" width="18" height="12" rx="2.2" />
      <path d="M9 7V5.8C9 4.8 9.8 4 10.8 4h2.4c1 0 1.8.8 1.8 1.8V7" />
      <path d="M3 12h18" />
      <rect x="11" y="11" width="2" height="3" rx="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
  if (kind === "briefcase") return briefcase;
  return (
    <div className="relative">
      {briefcase}
      <svg
        viewBox="0 0 24 24"
        className="absolute -bottom-2 -left-2 h-6 w-6 text-slate-900"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 9 12 4l10 5-10 5L2 9Z" />
        <path d="M6 10.5v2.6c3.2 1.8 8.8 1.8 12 0v-2.6" />
        <path d="M19 10v4.4" />
        <circle cx="19" cy="15.1" r="0.7" fill="currentColor" stroke="none" />
      </svg>
    </div>
  );
}

const experienceDetails: Record<
  ExperienceId,
  {
    title: string;
    subtitle: string;
    period: string;
    bullets: string[];
  }
> = {
  groww: {
    title: "Go Zero - Zero sugar ice cream brand",
    subtitle: "Entrepreneur in Residence",
    period: "August 2025 - December 2025",
    bullets: [
      "Led performance management and program execution for a 35-member organization across sales, supply chain, and production.",
      "Enabled design and implementation of a company-wide OKR framework and review cadence (WBRs / MBRs), achieving 95%+ adherence to planning and review timelines.",
      "Built leadership dashboards and performance tracking to improve visibility and decision-making across functions.",
      "Improved stock availability by ~10% by implementing SKU prioritisation in production planning and weekly monitoring of at-risk SKUs.",
      "Drove influencer-led LinkedIn campaign with 30+ founders and creators, increasing brand visibility and founder reach.",
    ],
  },
  tristone: {
    title: "Tristone Strategic Partners - Financial Advisory",
    subtitle: "Financial Analyst",
    period: "June 2023 - August 2025",
    bullets: [
      "Created dynamic corporate transaction models, including LBOs, M&As and take private models with deal sizes ranging between $20 Mn to $100 Mn across industries such as animal health, trucking, packaged foods and meats in the USA.",
      "Independently assisted a hedge fund in the USA with about 30+ companies by creating financial models and executed business valuation using DCF.",
      "Developed various investor presentations and memos featuring an in-depth analysis of the company, industry trends, and trading comps, including a key presentation for a leading global semiconductor and AI computing company.",
      "Conducted detailed equity trading and transaction comparables (deal comps or precedent transactions) analysis to arrive at multiples for the valuation of different industries.",
      "Hands on experience in using databases such as Bloomberg Terminal, Pitchbook, S&P Capital IQ and Preqin.",
      "Achieved an efficient turn-around time for a client deliverable of 20+ models over a span of 3 months by streamlining the process.",
    ],
  },
  popmunch: {
    title: "Polymath Advisors - Investment Bank",
    subtitle: "Investment Banking Analyst (Internship)",
    period: "May 2022 - March 2023",
    bullets: [
      "Analyzed startup pitch decks to advise on target investors based on thesis, ticket size, and sector focus; collaborated with senior management of PE and VC firms for fundraising, due diligence, and roadshows.",
      "Officiated investor meetings, prepared pitch decks and handled data rooms. Led the close of tranche 1 in a $3 million round for a B2B design tech platform; analyzed 50+ pipeline deals and founder pitches during client onboarding.",
    ],
  },
  "7mm": {
    title: "7mm - D2C fine paper and stationery brand",
    subtitle: "Brand Management (Internship)",
    period: "August 2021 - April 2022",
    bullets: [
      "Managed brand content strategy and execution across social media platforms, successfully negotiating brand placements on marketplaces and retail stores, achieving a 60% conversion rate.",
      "Led product development efforts, overseeing the entire lifecycle from research and conceptualization to execution and launch.",
    ],
  },
  gaurang: {
    title: "That finance guy - Gaurang Sanghvi",
    subtitle: "Research Intern",
    period: "September 2020 - July 2021",
    bullets: [
      "Led research for personal finance coursework to enhance financial literacy among youth and crafted a content strategy across multiple channels to blend financial education with engaging content.",
    ],
  },
};

function ColumnHeaders() {
  const cols = "ABCDEFGH".split("");
  return (
    <div className="grid grid-cols-[46px_repeat(8,minmax(0,1fr))] border-b border-slate-300 bg-slate-100 text-[11px] font-semibold text-slate-600">
      <div className="border-r border-slate-300 px-2 py-1.5" />
      {cols.map((col) => (
        <div key={col} className="border-r border-slate-300 px-2 py-1.5 text-center">
          {col}
        </div>
      ))}
    </div>
  );
}

function ExcelSheet({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="overflow-hidden rounded-xl border border-slate-300 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
    >
      <div className="flex items-center gap-2 border-b border-slate-300 bg-slate-50 px-3 py-2">
        <span className="h-3 w-3 rounded-full bg-rose-400" />
        <span className="h-3 w-3 rounded-full bg-amber-400" />
        <span className="h-3 w-3 rounded-full bg-emerald-400" />
        <Divider orientation="vertical" className="mx-1 h-4 bg-slate-300" />
        <span className="font-mono text-xs text-slate-500">fx</span>
        <div className="rounded border border-slate-300 bg-white px-2 py-1 font-mono text-xs text-slate-600">
          {title}
        </div>
      </div>
      <ColumnHeaders />
      <div className="grid grid-cols-[46px_1fr]">
        <div className="border-r border-slate-300 bg-slate-50">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="flex h-11 items-center justify-center border-b border-slate-200 font-mono text-[11px] text-slate-500"
            >
              {i + 1}
            </div>
          ))}
        </div>
        <div className="bg-[linear-gradient(to_right,_#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,_#e2e8f0_1px,transparent_1px)] bg-[size:88px_44px] p-4 sm:p-6">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [active, setActive] = useState<SheetId>("profile");
  const [activeExperience, setActiveExperience] = useState<ExperienceId | null>(null);
  const activeLabel = useMemo(() => tabs.find((t) => t.id === active)?.label ?? "Profile", [active]);
  const activeExperienceData = activeExperience ? experienceDetails[activeExperience] : null;
  const openExperienceFromTimeline = (id: ExperienceId) => {
    setActive("experience");
    setActiveExperience(id);
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#f1f5f9_0%,_#e2e8f0_100%)]">
      <div className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
        <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-xl border border-slate-300 shadow-sm">
          <div className="flex h-11 items-center justify-between bg-[#1f7244] px-4 text-white">
            <div className="text-sm font-semibold">File</div>
            <p className="font-[family-name:var(--font-manrope)] text-sm font-medium">
              Hitanshi Chheda Profile - Excel
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Link
                href="mailto:Hitanshichheda6@gmail.com"
                className="text-sm text-white underline underline-offset-2"
              >
                hitanshichheda6@gmail.com
              </Link>
              <Link
                href="https://linkedin.com/in/hitanshi-chheda/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex h-5 w-5 items-center justify-center"
              >
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                  alt="LinkedIn"
                  width={16}
                  height={16}
                  className="rounded-[2px]"
                  unoptimized
                />
              </Link>
            </div>
          </div>

          <div className="flex h-10 items-center gap-6 bg-[#2b804a] px-4 text-sm text-white">
            <span className="font-semibold">Home</span>
            <span>Insert</span>
            <span>Draw</span>
            <span>Page Layout</span>
            <span>Formulas</span>
            <span>Data</span>
            <span>Review</span>
            <span>View</span>
          </div>

        </div>
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-3 pb-24 pt-30 sm:px-6 sm:pb-28 sm:pt-32">
        {active === "profile" && (
          <ExcelSheet title="Candidate Snapshot">
            <Card className="w-full border border-slate-300 bg-white/95 p-4">
              <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-slate-900">
                Hitanshi Chheda
              </h1>
              <p className="mt-2 font-mono text-xs text-slate-600">
                <span className="text-blue-700">Mumbai, India</span> | <span className="text-blue-700">+91 9820969628</span> |{" "}
                <Link href="mailto:Hitanshichheda6@gmail.com" className="font-mono text-xs text-slate-600 underline">
                  hitanshichheda6@gmail.com
                </Link>{" "}
                |{" "}
                <Link
                  href="https://linkedin.com/in/hitanshi-chheda/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-slate-600 underline"
                >
                  LinkedIn
                </Link>
              </p>
              <Divider className="my-3 bg-slate-300" />
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-slate-500">Executive Summary</p>
              <p className="text-sm leading-relaxed text-blue-700">
                I&apos;m Hitanshi, a finance graduate from NMIMS with{" "}
                <button
                  type="button"
                  onClick={() => setActive("experience")}
                  className="inline cursor-pointer text-green-700 underline underline-offset-2 decoration-green-700 transition hover:text-green-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  ~2.5 years of experience
                </button>{" "}
                across financial advisory and a high-growth D2C startup. I began my career working on M&amp;A and capital raise
                mandates, building detailed financial and valuation models and presenting strategic recommendations
                directly to leadership teams. Most recently, I worked as an Entrepreneur in Residence at a D2C startup,
                operating at the intersection of strategy, execution, and growth.
              </p>

              <div className="mt-4 rounded-lg border border-slate-300 bg-slate-50 p-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-slate-500">career timeline</p>
                <div className="mt-3 rounded-xl border border-slate-300 bg-[#ececec] p-4">
                  <div className="grid grid-cols-7 gap-4">
                    {timelineSteps.map((step, idx) => (
                      <div key={`top-${step.month}-${idx}`} className="flex h-full items-end justify-center">
                        {step.top || step.topTag ? (
                          <div className="flex w-full max-w-[500px] flex-col items-center">
                            {step.month === "Sep 2020" || step.month === "May 2022" || step.topTag === "Financial Analyst" ? (
                              <button
                                type="button"
                                onClick={() =>
                                  openExperienceFromTimeline(
                                    step.month === "Sep 2020"
                                      ? "gaurang"
                                      : step.month === "May 2022"
                                        ? "popmunch"
                                        : "tristone"
                                  )
                                }
                                aria-label="Open Tristone Strategic Partners experience"
                                className="box relative cursor-pointer text-center text-slate-900 transition hover:border-blue-500 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                style={
                                  step.topTag
                                    ? { width: "250px", paddingLeft: "6px", paddingRight: "6px" }
                                    : step.month === "Sep 2020"
                                      ? { width: "155px", padding: "6px 5px", lineHeight: "1.15" }
                                      : { width: "170px", padding: "6px 5px", lineHeight: "1.15" }
                                }
                              >
                                {step.month === "Sep 2020" || step.month === "May 2022" || step.topTag === "Financial Analyst" ? (
                                  <span className="pointer-events-none absolute -bottom-2 right-1 inline-flex rotate-12 items-center justify-center text-white drop-shadow-[0_1px_1px_rgba(15,23,42,0.8)]">
                                    <svg
                                      viewBox="0 0 24 24"
                                      className="h-3.5 w-3.5"
                                      fill="currentColor"
                                      stroke="#000"
                                      strokeWidth="1"
                                      aria-hidden="true"
                                    >
                                      <path d="M4 3v14.2c0 .7.8 1.1 1.4.7l3.2-2.2 2.3 4.8c.2.5.8.7 1.3.5l1.6-.8c.5-.2.7-.8.5-1.3L12 14.1h4.6c.7 0 1.1-.8.7-1.4L4.9 2.4A1 1 0 0 0 4 3Z" />
                                    </svg>
                                  </span>
                                ) : null}
                                {step.top}
                              </button>
                            ) : (
                              <div
                                className="box text-center text-slate-900"
                                style={
                                  step.topTag
                                    ? { width: "250px", paddingLeft: "6px", paddingRight: "6px" }
                                    : step.month === "Sep 2020"
                                      ? { width: "155px", padding: "6px 5px", lineHeight: "1.15" }
                                      : step.month === "May 2022"
                                        ? { width: "170px", padding: "6px 5px", lineHeight: "1.15" }
                                      : undefined
                                }
                              >
                                {step.top}
                              </div>
                            )}
                            {step.topTag ? (
                              step.topTag === "Financial Analyst" ? (
                                <button
                                  type="button"
                                  onClick={() => openExperienceFromTimeline("tristone")}
                                  aria-label="Open Tristone Strategic Partners experience"
                                  className="mt-2 bg-black px-3 py-1 text-center text-sm text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                >
                                  {step.topTag}
                                </button>
                              ) : (
                                <div className="mt-2 bg-black px-3 py-1 text-center text-sm text-white shadow-sm">{step.topTag}</div>
                              )
                            ) : null}
                          </div>
                        ) : (
                          <div className="h-[120px]" />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-4">
                    {timelineSteps.map((step, idx) => (
                      <div key={`top-line-${step.month}-${idx}`} className="flex justify-center">
                        <div className={`h-9 w-px bg-blue-400 ${step.top || step.topTag ? "opacity-100" : "opacity-0"}`} />
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-4">
                    {timelineSteps.map((step, idx) => (
                      <div key={`mid-${step.month}-${idx}`}>
                        <div
                          className="mx-auto flex h-[52px] max-w-[380px] items-center justify-center border border-[#cdd6e6] bg-[#d8dfec]"
                          style={{ clipPath: "polygon(0 0, 84% 0, 100% 50%, 84% 100%, 0 100%, 12% 50%)" }}
                        >
                          <TimelineIcon kind={step.icon} />
                        </div>
                        <div className="mx-auto mt-2 max-w-[380px] bg-[#dcdcdc] py-1 text-center">
                          <span className="font-[family-name:var(--font-manrope)] text-sm text-slate-900">{step.month}</span>
                        </div>
                        <div
                          className={`mx-auto max-w-[380px] text-center text-[13px] italic leading-tight text-red-700 ${
                            step.role ? "mt-2 min-h-[42px]" : "h-0"
                          }`}
                        >
                          {step.role || null}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-4">
                    {timelineSteps.map((step, idx) => (
                      <div
                        key={`bottom-line-${step.month}-${idx}`}
                        className={`flex justify-center ${
                          step.month === "May 2023" || step.month === "July 2020"
                            ? "-mt-12"
                            : step.month === "August 2025"
                              ? "-mt-5"
                            : step.role
                              ? ""
                              : "-mt-10"
                        }`}
                      >
                        <div
                          className={`w-px bg-blue-400 ${
                            step.month === "May 2023" || step.month === "July 2020"
                              ? "h-[78px]"
                              : step.month === "August 2025"
                                ? "h-[58px]"
                                : "h-9"
                          } ${step.bottom || step.bottomTag ? "opacity-100" : "opacity-0"}`}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-4">
                    {timelineSteps.map((step, idx) => (
                      <div
                        key={`bottom-${step.month}-${idx}`}
                        className={`relative flex h-full items-start justify-center ${
                          step.month === "August 2025" ? "-translate-x-2" : ""
                        }`}
                      >
                        {step.bottom || step.bottomTag ? (
                          <div className="flex w-full max-w-[500px] flex-col items-center">
                            {step.bottomTag ? (
                              step.month === "August 2025" ? (
                                <button
                                  type="button"
                                  onClick={() => openExperienceFromTimeline("groww")}
                                  className="mb-2 bg-black px-3 py-1 text-center text-sm text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                >
                                  {step.bottomTag}
                                </button>
                              ) : (
                                <div className="mb-2 bg-black px-3 py-1 text-center text-sm text-white shadow-sm">{step.bottomTag}</div>
                              )
                            ) : null}
                            {step.month === "Aug 2021" || step.month === "August 2025" ? (
                              <button
                                type="button"
                                onClick={() => openExperienceFromTimeline(step.month === "Aug 2021" ? "7mm" : "groww")}
                                className="box relative cursor-pointer text-center text-slate-900 transition hover:border-blue-500 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                style={
                                  step.month === "Aug 2021"
                                    ? { width: "155px", padding: "6px 5px", lineHeight: "1.15" }
                                    : { width: "188px", padding: "6px 5px", lineHeight: "1.15", boxSizing: "border-box" }
                                }
                              >
                                <span className="pointer-events-none absolute -bottom-2 right-1 inline-flex rotate-12 items-center justify-center text-white drop-shadow-[0_1px_1px_rgba(15,23,42,0.8)]">
                                  <svg
                                    viewBox="0 0 24 24"
                                    className="h-3.5 w-3.5"
                                    fill="currentColor"
                                    stroke="#000"
                                    strokeWidth="1"
                                    aria-hidden="true"
                                  >
                                    <path d="M4 3v14.2c0 .7.8 1.1 1.4.7l3.2-2.2 2.3 4.8c.2.5.8.7 1.3.5l1.6-.8c.5-.2.7-.8.5-1.3L12 14.1h4.6c.7 0 1.1-.8.7-1.4L4.9 2.4A1 1 0 0 0 4 3Z" />
                                  </svg>
                                </span>
                                {step.bottom}
                              </button>
                            ) : (
                              <div
                                className="box text-center text-slate-900"
                                style={
                                  step.month === "May 2023"
                                    ? { width: "145px", padding: "6px 6px" }
                                    : step.month === "July 2020"
                                      ? { width: "135px", padding: "6px 4px", lineHeight: "1.15" }
                                      : undefined
                                }
                              >
                                {step.bottom}
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="h-[120px]" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </ExcelSheet>
        )}

        {active === "experience" && (
          <ExcelSheet title="Work Experience">
            <div className="grid gap-3">
              <Card
                isPressable
                onPress={() => setActiveExperience("groww")}
                className="cursor-pointer border border-slate-300 bg-white/95 p-4 text-left transition-transform duration-200 hover:-translate-y-1 hover:border-blue-400 hover:shadow-[0_8px_20px_rgba(59,130,246,0.18)]"
              >
                <p className="font-semibold text-slate-900">Go Zero | Entrepreneur in Residence</p>
                <p className="font-mono text-xs text-slate-500">Aug 2025 - Dec 2025</p>
              </Card>
              <Card
                isPressable
                onPress={() => setActiveExperience("tristone")}
                className="cursor-pointer border border-slate-300 bg-white/95 p-4 text-left transition-transform duration-200 hover:-translate-y-1 hover:border-blue-400 hover:shadow-[0_8px_20px_rgba(59,130,246,0.18)]"
              >
                <p className="font-semibold text-slate-900">Tristone Strategic Partners | Financial Analyst</p>
                <p className="font-mono text-xs text-slate-500">Jun 2023 - Aug 2025</p>
              </Card>
              <Card
                isPressable
                onPress={() => setActiveExperience("popmunch")}
                className="relative cursor-pointer border border-slate-300 bg-white/95 p-4 text-left transition-transform duration-200 hover:-translate-y-1 hover:border-blue-400 hover:shadow-[0_8px_20px_rgba(59,130,246,0.18)]"
              >
                <span className="absolute right-4 top-3 text-[11px] italic text-slate-500">
                  Internship
                </span>
                <p className="font-semibold text-slate-900">Polymath Advisors | Investment Banking Analyst</p>
                <p className="font-mono text-xs text-slate-500">May 2022 - Mar 2023</p>
              </Card>
              <Card
                isPressable
                onPress={() => setActiveExperience("7mm")}
                className="relative cursor-pointer border border-slate-300 bg-white/95 p-4 text-left transition-transform duration-200 hover:-translate-y-1 hover:border-blue-400 hover:shadow-[0_8px_20px_rgba(59,130,246,0.18)]"
              >
                <span className="absolute right-4 top-3 text-[11px] italic text-slate-500">
                  Internship
                </span>
                <p className="font-semibold text-slate-900">7mm | Brand Management</p>
                <p className="font-mono text-xs text-slate-500">Aug 2021 - Apr 2022</p>
              </Card>
              <Card
                isPressable
                onPress={() => setActiveExperience("gaurang")}
                className="relative cursor-pointer border border-slate-300 bg-white/95 p-4 text-left transition-transform duration-200 hover:-translate-y-1 hover:border-blue-400 hover:shadow-[0_8px_20px_rgba(59,130,246,0.18)]"
              >
                <span className="absolute right-4 top-3 text-[11px] italic text-slate-500">Internship</span>
                <p className="font-semibold text-slate-900">That Finance guy | Research intern</p>
                <p className="font-mono text-xs text-slate-500">Sep 2020 - Jul 2021</p>
              </Card>
            </div>
          </ExcelSheet>
        )}

        {active === "education" && (
          <ExcelSheet title="Education">
            <div className="grid gap-3 max-w-4xl">
              <Card className="border border-slate-300 bg-white/95 p-4">
                <p className="font-semibold text-slate-900">NMIMS, B.Sc in Finance</p>
                <p className="font-mono text-xs text-slate-500">May 2023 | GPA 3.6 / 4.0</p>
              </Card>
              <Card className="border border-slate-300 bg-white/95 p-4">
                <p className="font-semibold text-slate-900">N.M. College, XII HSC</p>
                <p className="font-mono text-xs text-slate-500">Mar 2020 | 91.40%</p>
              </Card>
              <Card className="border border-slate-300 bg-white/95 p-4">
                <p className="font-semibold text-slate-900">Xth ICSE</p>
                <p className="font-mono text-xs text-slate-500">Mar 2018 | 91.5%</p>
              </Card>
            </div>
          </ExcelSheet>
        )}

        {active === "skills" && (
          <ExcelSheet title="Skills">
            <div className="max-w-5xl">
              <Card className="border border-slate-300 bg-white/95 p-0">
                <div className="grid grid-cols-1 divide-y divide-slate-300">
                  <div className="p-4 sm:p-5">
                    <p className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-slate-900">
                      Assets
                    </p>
                    <div className="mt-3 space-y-1.5 text-[15px] leading-relaxed text-slate-800">
                      <p className="underline">Operational</p>
                      <ul className="list-disc pl-8">
                        <li>Financial modelling (valuation, LBO, transaction structuring)</li>
                        <li>Investor decks and memos</li>
                        <li>Comps analysis</li>
                        <li>Industry research</li>
                      </ul>
                      <p className="pt-3 underline">Database Fluency</p>
                      <ul className="list-disc pl-8">
                        <li>CapIQ</li>
                        <li>Bloomberg</li>
                        <li>FactSet</li>
                        <li>Pitchbook</li>
                      </ul>
                      <p className="pt-3 underline">Context switching seamlessly</p>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5">
                    <p className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-slate-900">
                      Goodwill
                    </p>
                    <p className="mt-3 text-[15px] leading-relaxed text-slate-800">
                      Been fortunate enough to work with teams who would trust me again
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </ExcelSheet>
        )}
      </div>

      <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:px-6 sm:pb-4">
        <div className="mx-auto flex w-full max-w-7xl items-end gap-1 rounded-b-xl border border-slate-300 bg-slate-200 p-2 shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`min-w-28 rounded-t-md border px-3 py-2 text-sm font-medium transition ${
                active === tab.id
                  ? "border-slate-300 border-b-white bg-white text-slate-900"
                  : "border-slate-300 bg-slate-100 text-slate-600 hover:bg-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
          <div className="ml-2 rounded border border-slate-300 bg-slate-100 px-2 py-1 font-mono text-xs text-slate-500">
            sheet: {activeLabel}
          </div>
        </div>
      </div>

      <Modal
        isOpen={!!activeExperienceData}
        onOpenChange={(open) => {
          if (!open) setActiveExperience(null);
        }}
        size="3xl"
        placement="center"
        scrollBehavior="inside"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            <p className="font-[family-name:var(--font-manrope)] text-xl font-bold text-slate-900">
              {activeExperienceData?.title}
            </p>
            <p className="text-base italic text-slate-700">{activeExperienceData?.subtitle}</p>
            <p className="font-[family-name:var(--font-instrument-serif)] text-xl text-slate-900">
              {activeExperienceData?.period}
            </p>
          </ModalHeader>
          <ModalBody className="pb-6">
            <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-800">
              {activeExperienceData?.bullets.map((point, idx) => (
                <li key={`exp-point-${idx}`}>{point}</li>
              ))}
            </ul>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}



