"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { fadeInUp } from "@/styles/animations";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Is FileFlow free to use?",
    answer: "Yes! FileFlow offers a generous free tier that includes 10 conversions per day with files up to 25MB. For higher limits, check out our Pro and Enterprise plans.",
  },
  {
    question: "How secure are my files?",
    answer: "Your files are encrypted during upload and processing. All files are automatically deleted from our servers within 1 hour. We never access, share, or store your files beyond what's needed for conversion.",
  },
  {
    question: "What file formats are supported?",
    answer: "FileFlow supports a wide range of formats including PDF, Word, Excel, PowerPoint, images (PNG, JPG, WebP, SVG), video (MP4, WebM, MOV), audio (MP3, WAV, FLAC), archives (ZIP, RAR), and developer formats (JSON, CSV, YAML).",
  },
  {
    question: "Do I need to create an account?",
    answer: "No! You can start converting files immediately without signing up. Create an account only if you want to access your conversion history, save favorites, or unlock Pro features.",
  },
  {
    question: "Is there an API available?",
    answer: "Yes, we offer a REST API for Pro and Enterprise customers. You can integrate FileFlow's conversion capabilities directly into your applications. API documentation is coming soon.",
  },
  {
    question: "What's the maximum file size?",
    answer: "Free users can convert files up to 25MB. Pro users get 500MB, and Enterprise users have no file size limit. Need more? Contact us for custom solutions.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-primary"
      >
        <span className="text-sm font-medium sm:text-base">{question}</span>
        <ChevronDown
          className={cn(
            "ml-4 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-muted-foreground">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section className="py-20 sm:py-28 bg-secondary/30">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"
      >
        <SectionHeading
          badge="FAQ"
          title="Frequently asked questions"
          subtitle="Everything you need to know about FileFlow. Can't find the answer? Contact our support team."
        />

        <div className="glass-card rounded-2xl p-6 sm:p-8">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
