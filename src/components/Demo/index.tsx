"use client";
import Image from "next/image";
import React, { useState } from "react";
import DemoHero from "@/components/DemoHero";

const Demo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
    industry: "",
    jobPosition: "",      // optional
    companySize: "",
    potentialUseCase: "", // optional
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // utils
  const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  const validate = (v = formData) => {
    const e: Record<string, string> = {};

    // required (everything except jobPosition & potentialUseCase)
    if (!v.firstName.trim()) e.firstName = "First name is required.";
    if (!v.lastName.trim()) e.lastName = "Last name is required.";
    if (!v.email.trim()) e.email = "Email is required.";
    if (!v.phoneNumber.trim()) e.phoneNumber = "Phone is required.";
    if (!v.company.trim()) e.company = "Company is required.";
    if (!v.industry.trim()) e.industry = "Industry is required.";
    if (!v.companySize) e.companySize = "Please select a company size.";

    // length rules
    if (v.firstName.trim() && v.firstName.trim().length < 4)
      e.firstName = "Must be at least 4 characters.";
    if (v.lastName.trim() && v.lastName.trim().length < 4)
      e.lastName = "Must be at least 4 characters.";

    // email format
    if (v.email.trim() && !isEmail(v.email))
      e.email = "Please enter a valid email address.";

    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // clear error for the edited field
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleBlurValidate = () => {
    setErrors((prev) => ({ ...prev, ...validate() }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return; // stop if invalid

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/request_demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to submit form");
      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        company: "",
        industry: "",
        jobPosition: "",
        companySize: "",
        potentialUseCase: "",
      });
      setErrors({});
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // helper to switch border/ring based on error
  const inputClass = (field: string) =>
    [
      "w-full rounded-md bg-white text-[#006CFF] placeholder-bleujdid/80 px-5 py-3 border-2 focus:outline-none",
      errors[field]
        ? "border-red-500 focus:ring-4 focus:ring-red-200"
        : "border-white focus:ring-4 focus:ring-white/30",
    ].join(" ");

  return (
    <>

      <section id="contact" className="py-12 md:py-16 lg:py-20">
        <div className="container">
          <div
            className="grid items-center gap-8 md:gap-10 lg:gap-16"
            style={{ gridTemplateColumns: "37% 63%" }}
          >
            {/* LEFT — phone image */}
            <div className="flex justify-center">
              <div className="relative w-[260px] sm:w-[300px] md:w-[340px] lg:w-[360px] aspect-[9/19.5]">
                <Image
                  src="/images/demo/phone-mock.png"
                  alt="WaterSec mobile preview"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>

            
            <div className="relative">
              
              <p className="text-[#0E1726] mb-6 md:mb-8 text-base sm:text-lg leading-relaxed">
                Discover how <span className="font-normal text-bleujdid">Water<b>Sec</b></span> can help you improve your
                water-use efficiency, thus contributing to water conservation and optimizing your bill.
              </p>

              {/* Blue panel form */}
              <div className="relative rounded-xl bg-bleujdid p-5 sm:p-6 md:p-8 lg:p-10 shadow-[0_24px_64px_rgba(0,0,0,0.15)] text-white">
                {submitted ? (
                  <p className="text-center text-white/95 text-lg font-semibold py-10">
                    Thank you! Your request has been sent.
                  </p>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Inputs grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                      {/* First Name */}
                      <div>
                        <input
                          name="firstName"
                          placeholder="First Name:"
                          value={formData.firstName}
                          onChange={handleChange}
                          onBlur={handleBlurValidate}
                          className={inputClass("firstName")}
                          type="text"
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-sm text-red-100 bg-red-500/20 rounded px-2 py-1 inline-block">
                            {errors.firstName}
                          </p>
                        )}
                      </div>

                      {/* Last Name */}
                      <div>
                        <input
                          name="lastName"
                          placeholder="Last Name:"
                          value={formData.lastName}
                          onChange={handleChange}
                          onBlur={handleBlurValidate}
                          className={inputClass("lastName")}
                          type="text"
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-sm text-red-100 bg-red-500/20 rounded px-2 py-1 inline-block">
                            {errors.lastName}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <input
                          name="email"
                          placeholder="E-Mail:"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlurValidate}
                          className={inputClass("email")}
                          type="email"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-100 bg-red-500/20 rounded px-2 py-1 inline-block">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <input
                          name="phoneNumber"
                          placeholder="Phone:"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          onBlur={handleBlurValidate}
                          className={inputClass("phoneNumber")}
                          type="text"
                        />
                        {errors.phoneNumber && (
                          <p className="mt-1 text-sm text-red-100 bg-red-500/20 rounded px-2 py-1 inline-block">
                            {errors.phoneNumber}
                          </p>
                        )}
                      </div>

                      {/* Company */}
                      <div>
                        <input
                          name="company"
                          placeholder="Company:"
                          value={formData.company}
                          onChange={handleChange}
                          onBlur={handleBlurValidate}
                          className={inputClass("company")}
                          type="text"
                        />
                        {errors.company && (
                          <p className="mt-1 text-sm text-red-100 bg-red-500/20 rounded px-2 py-1 inline-block">
                            {errors.company}
                          </p>
                        )}
                      </div>

                      {/* Industry */}
                      <div>
                        <input
                          name="industry"
                          placeholder="Industry:"
                          value={formData.industry}
                          onChange={handleChange}
                          onBlur={handleBlurValidate}
                          className={inputClass("industry")}
                          type="text"
                        />
                        {errors.industry && (
                          <p className="mt-1 text-sm text-red-100 bg-red-500/20 rounded px-2 py-1 inline-block">
                            {errors.industry}
                          </p>
                        )}
                      </div>

                      {/* Job position (optional) */}
                      <input
                        name="jobPosition"
                        placeholder="Job position:"
                        value={formData.jobPosition}
                        onChange={handleChange}
                        className="w-full rounded-md bg-white text-[#006CFF] placeholder-bleujdid/80 px-5 py-3 border-2 border-white focus:outline-none focus:ring-4 focus:ring-white/30"
                        type="text"
                      />

                      {/* Company size */}
                      <div className="relative">
                        <select
                          name="companySize"
                          value={formData.companySize}
                          onChange={handleChange}
                          onBlur={handleBlurValidate}
                          className={
                            "w-full appearance-none rounded-md bg-white text-[#006CFF] px-5 py-3 pr-10 border-2 focus:outline-none " +
                            (errors.companySize
                              ? "border-red-500 focus:ring-4 focus:ring-red-200"
                              : "border-white focus:ring-4 focus:ring-white/30")
                          }
                        >
                          <option value="">Company size</option>
                          <option value="1">1</option>
                          <option value="2-10">2 - 10</option>
                          <option value="11-30">11 - 30</option>
                          <option value=">30">&gt; 30</option>
                        </select>
                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-bleujdid/70 text-lg">
                          ▾
                        </span>
                        {errors.companySize && (
                          <p className="mt-1 text-sm text-red-100 bg-red-500/20 rounded px-2 py-1 inline-block">
                            {errors.companySize}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message (optional) */}
                    <textarea
                      name="potentialUseCase"
                      value={formData.potentialUseCase}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Please tell us how we can help..."
                      className="w-full resize-none rounded-lg bg-white text-[#006CFF] placeholder-bleujdid/70 px-5 py-4 border-2 border-white focus:outline-none focus:ring-4 focus:ring-white/30"
                    />

                    {/* API error */}
                    {error && (
                      <div className="text-sm font-medium text-red-100 bg-red-500/20 rounded-md px-4 py-2 inline-block">
                        ⚠ {error}
                      </div>
                    )}

                    {/* Buttons */}
                    <div className="flex items-center justify-center gap-4 pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="rounded-full bg-white text-bleujdid px-10 py-3 text-base font-semibold shadow-[0_6px_20px_rgba(255,255,255,0.25)] hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Sending..." : "Send"}
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          if (confirm("Clear the form?")) {
                            setFormData({
                              firstName: "",
                              lastName: "",
                              email: "",
                              phoneNumber: "",
                              company: "",
                              industry: "",
                              jobPosition: "",
                              companySize: "",
                              potentialUseCase: "",
                            });
                            setErrors({});
                          }
                        }}
                        className="rounded-full border-2 border-white text-white px-10 py-3 text-base font-semibold hover:bg-white/10"
                      >
                        Delete
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Demo;
