"use client";
import Image from "next/image";
import React, { useState } from "react";

const Demo = () => {
    const [formData, setFormData] = useState({
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

    const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/request_demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
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
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

    return (
       <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* LEFT IMAGE */}
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12 mb-10 lg:mb-0">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/demo/demo.png"
                alt="Request a demo"
                width={700}
                height={700}
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:px-8 xl:p-[55px]">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                Fill out this form to request a demo
              </h2>
              <p className="mb-8 text-base font-medium text-body-color">
                Discover how WaterSec can help you improve your water-use efficiency.
              </p>

              {submitted ? (
                <p className="text-green-600 font-medium">
                  ✅ Thank you! Your request has been sent.
                </p>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="-mx-4 flex flex-wrap">
                    {[
                      ["firstName", "First Name"],
                      ["lastName", "Last Name"],
                      ["email", "Email"],
                      ["phoneNumber", "Phone Number"],
                      ["company", "Company Name"],
                      ["industry", "Company Industry"],
                      ["jobPosition", "Job Position"],
                    ].map(([key, label]) => (
                      <div key={key} className="w-full px-4 md:w-1/2 mb-6">
                        <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                          {label}
                        </label>
                        <input
                          name={key}
                          type={key === "email" ? "email" : "text"}
                          value={formData[key]}
                          onChange={handleChange}
                          required
                          className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-watersecblue dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two"
                        />
                      </div>
                    ))}

                    {/* Company Size */}
                    <div className="w-full px-4 md:w-1/2 mb-6">
                      <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                        Company Size
                      </label>
                      <select
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleChange}
                        required
                        className="appearance-none border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color focus:border-watersecblue dark:bg-[#2C303B] dark:text-body-color-dark"
                      >
                        <option value="">Select size</option>
                        <option value="1">1</option>
                        <option value="2-10">2-10</option>
                        <option value="11-30">11-30</option>
                        <option value=">30">&gt;30</option>
                      </select>
                    </div>

                    {/* Potential Use Case */}
                    <div className="w-full px-4 mb-6">
                      <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                        Message
                      </label>
                      <textarea
                        name="potentialUseCase"
                        value={formData.potentialUseCase}
                        onChange={handleChange}
                        rows={4}
                        required
                        placeholder="Tell us more about your needs"
                        className="w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color focus:border-watersecblue dark:bg-[#2C303B] dark:text-body-color-dark"
                      />
                    </div>

                    {error && (
                      <div className="w-full px-4 text-red-600 text-sm font-medium">
                        ⚠ {error}
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="w-full px-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="rounded-xs bg-watersecblue px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-watersecblue/90"
                      >
                        {isSubmitting ? "Sending..." : "Send"}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Demo;
