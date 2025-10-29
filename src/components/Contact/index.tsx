"use client";

import Image from "next/image";
import { useState } from "react";
import Snackbar from "@/components/Shared/Snackbar";
import NewsLetterBox from "./NewsLetterBox";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [snack, setSnack] = useState({
    visible: false,
    message: "",
    variant: "success" as "success" | "error",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName || formData.firstName.trim().length < 4)
      newErrors.firstName = "First name must be at least 4 characters.";

    if (!formData.lastName || formData.lastName.trim().length < 4)
      newErrors.lastName = "Last name must be at least 4 characters.";

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[\d+]+$/.test(formData.phone)) {
      newErrors.phone = "Phone number must only contain numbers or the + character.";
    } else if (formData.phone.replace(/\D/g, "").length < 8) {
      newErrors.phone = "Phone number must be at least 8 digits.";
    }

    if (!formData.message || !formData.message.trim())
      newErrors.message = "Message is required.";

    return newErrors;
  };

  const handleBlurValidate = () => {
    setErrors((prev) => ({ ...prev, ...validate() }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSnack({
        visible: true,
        message: "Please fix the errors and try again.",
        variant: "error",
      });
      return;
    }

    setErrors({});
    // Simulate form submission
    setSnack({
      visible: true,
      message:
        "Message sent successfully, we will try to contact you as soon as possible.",
      variant: "success",
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const inputClass = (field: string) =>
    [
      "w-full rounded-md bg-white text-[#1C2B5A] placeholder-bleujdid/80 px-5 py-3 border-2 focus:outline-none",
      errors[field]
        ? "border-red-500 focus:ring-4 focus:ring-red-200"
        : "border-white focus:ring-4 focus:ring-white/30",
    ].join(" ");

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div
          className="grid items-start gap-10 md:gap-12 lg:gap-16"
          style={{ gridTemplateColumns: "65% 35%" }}
        >

          <div className="relative">

            <h2 className="mb-2 text-2xl sm:text-3xl font-bold text-black">
              Contact Us
            </h2>
            <p className="mb-8 text-black/80 text-base sm:text-lg">
              Our support team will get back to you as soon as possible via email.
            </p>
            <div className="relative rounded-xl bg-bleujdid p-6 sm:p-8 md:p-10 shadow-[0_24px_64px_rgba(0,0,0,0.15)] text-white">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* First / Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      onBlur={handleBlurValidate}
                      placeholder="First Name:"
                      className={inputClass("firstName")}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-100 bg-red-500/20 rounded px-2 py-1 inline-block">
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      onBlur={handleBlurValidate}
                      placeholder="Last Name:"
                      className={inputClass("lastName")}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-100 bg-red-500/20 rounded px-2 py-1 inline-block">
                        {errors.lastName}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlurValidate}
                      placeholder="E-Mail:"
                      className={inputClass("email")}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-100 bg-red-500/20 rounded px-2 py-1 inline-block">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlurValidate}
                      placeholder="Phone:"
                      className={inputClass("phone")}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-100 bg-red-500/20 rounded px-2 py-1 inline-block">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlurValidate}
                    rows={6}
                    placeholder="Please tell us how we can help..."
                    className={
                      "w-full resize-none rounded-lg bg-white text-[#1C2B5A] placeholder-bleujdid/70 px-5 py-4 border-2 focus:outline-none " +
                      (errors.message
                        ? "border-red-500 focus:ring-4 focus:ring-red-200"
                        : "border-white focus:ring-4 focus:ring-white/30")
                    }
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-100 bg-red-500/20 rounded px-2 py-1 inline-block">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-center gap-4 pt-2">
                  <button
                    type="submit"
                    className="rounded-full bg-white text-bleujdid px-10 py-3 text-base font-semibold shadow-[0_6px_20px_rgba(255,255,255,0.25)] hover:opacity-90"
                  >
                    Send
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (confirm("Clear the form?")) {
                        setFormData({
                          firstName: "",
                          lastName: "",
                          email: "",
                          phone: "",
                          message: "",
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
            </div>
          </div>


          <div className="flex flex-col justify-start space-y-8">

            <div>
              <NewsLetterBox />
            </div>
          </div>
        </div>
      </div>

      {/* Snackbar */}
      {snack.visible && (
        <Snackbar
          message={snack.message}
          variant={snack.variant}
          onClose={() => setSnack((prev) => ({ ...prev, visible: false }))}
        />
      )}
    </section>
  );
};

export default Contact;
