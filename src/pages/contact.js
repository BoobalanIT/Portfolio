import Head from "next/head";
import { useState } from "react";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Boobalan V | Contact Me</title>
        <meta
          name="description"
          content="Get in touch with Boobalan V — Software Developer and Full-Stack Developer based in Chennai, India."
        />
      </Head>
      <Layout>
        <article className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
          <div className="z-0 inline-block h-full w-full bg-light px-5 py-8 sm:px-8 sm:py-10 md:px-12 lg:px-16 xl:px-24 2xl:px-32 lg:py-16 dark:bg-dark">
            <AnimatedText
              text="Let's Build Something Great!"
              className="mb-10 md:mb-14 lg:mb-16 !text-3xl sm:!text-5xl md:!text-6xl lg:!text-7xl xl:!text-8xl"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 w-full">
              {/* Contact Info Cards */}
              <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6">
                <h2 className="text-2xl sm:text-3xl font-bold dark:text-light">
                  Contact Information
                </h2>
                <p className="font-medium text-sm sm:text-base text-dark/80 dark:text-light/80">
                  Feel free to reach out for full-stack software development opportunities, backend/API architecture, AI &amp; MCP integrations, or freelance collaborations.
                </p>

                {/* Email Card */}
                <div className="p-5 sm:p-6 rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark shadow-md flex items-center gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-full bg-dark text-light dark:bg-light dark:text-dark flex items-center justify-center text-lg sm:text-xl font-bold">
                    &#9993;
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-semibold text-primary dark:text-primaryDark uppercase">
                      EMAIL ADDRESS
                    </span>
                    <a
                      href="mailto:boobalanvaithiyanthan1@gmail.com"
                      className="block text-sm sm:text-base lg:text-lg font-bold hover:underline dark:text-light break-all"
                    >
                      boobalanvaithiyanthan1@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="p-5 sm:p-6 rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark shadow-md flex items-center gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-full bg-dark text-light dark:bg-light dark:text-dark flex items-center justify-center text-lg sm:text-xl font-bold">
                    &#9742;
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-primary dark:text-primaryDark uppercase">
                      PHONE / WHATSAPP
                    </span>
                    <a
                      href="tel:+919025006329"
                      className="block text-base sm:text-lg font-bold hover:underline dark:text-light"
                    >
                      +91 9025006329
                    </a>
                  </div>
                </div>

                {/* Location Card */}
                <div className="p-5 sm:p-6 rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark shadow-md flex items-center gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-full bg-dark text-light dark:bg-light dark:text-dark flex items-center justify-center text-lg sm:text-xl font-bold">
                    &#128205;
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-primary dark:text-primaryDark uppercase">
                      LOCATION
                    </span>
                    <p className="text-base sm:text-lg font-bold dark:text-light">
                      Chennai, Tamil Nadu, India
                    </p>
                  </div>
                </div>

                {/* Social & Resume Card */}
                <div className="p-5 sm:p-6 rounded-2xl border-2 border-solid border-primary dark:border-primaryDark bg-primary/5 dark:bg-primaryDark/10 flex flex-col gap-3">
                  <span className="text-xs font-bold text-primary dark:text-primaryDark uppercase">
                    PROFILES &amp; RESUME
                  </span>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://www.linkedin.com/in/boobalan001/"
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-lg border border-dark dark:border-light text-sm font-bold hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/BoobalanIT"
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-lg border border-dark dark:border-light text-sm font-bold hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-colors"
                    >
                      GitHub
                    </a>
                    <a
                      href="/assets/docs/Boobalan%20V%20%E2%80%94%20Resume.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-lg bg-dark text-light dark:bg-light dark:text-dark text-sm font-bold hover:opacity-85 transition-opacity"
                    >
                      Download Resume
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-7 p-5 sm:p-8 rounded-2xl border-2 border-solid border-dark bg-light dark:border-light dark:bg-dark shadow-xl">
                <h3 className="text-2xl font-bold dark:text-light mb-6">
                  Send Me a Message
                </h3>
                {submitted ? (
                  <div className="p-6 rounded-xl bg-green-500/10 border border-green-500 text-green-700 dark:text-green-400 font-bold text-center space-y-3">
                    <p>
                      Thank you! Your message has been recorded. Boobalan will get back to you shortly.
                    </p>
                    <p className="text-sm font-medium">
                      You can also email directly at{" "}
                      <a href="mailto:boobalanvaithiyanthan1@gmail.com" className="underline">
                        boobalanvaithiyanthan1@gmail.com
                      </a>
                      .
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div>
                      <label className="block text-sm font-bold mb-2 dark:text-light">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full p-3 rounded-lg border border-dark/30 dark:border-light/30 bg-transparent text-dark dark:text-light focus:outline-none focus:border-dark dark:focus:border-light"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2 dark:text-light">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full p-3 rounded-lg border border-dark/30 dark:border-light/30 bg-transparent text-dark dark:text-light focus:outline-none focus:border-dark dark:focus:border-light"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2 dark:text-light">
                        Subject / Role
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Full-Stack Developer Opportunity / Project Inquiry"
                        className="w-full p-3 rounded-lg border border-dark/30 dark:border-light/30 bg-transparent text-dark dark:text-light focus:outline-none focus:border-dark dark:focus:border-light"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2 dark:text-light">
                        Message
                      </label>
                      <textarea
                        rows="5"
                        required
                        placeholder="Describe your inquiry, role, or project..."
                        className="w-full p-3 rounded-lg border border-dark/30 dark:border-light/30 bg-transparent text-dark dark:text-light focus:outline-none focus:border-dark dark:focus:border-light"
                      />
                    </div>
                    <button
                      type="submit"
                      className="py-3 px-8 rounded-lg bg-dark text-light font-bold dark:bg-light dark:text-dark hover:bg-light hover:text-dark hover:border-2 hover:border-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light transition-all"
                    >
                      Send Message &rarr;
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </>
  );
}
