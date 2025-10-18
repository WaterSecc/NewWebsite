"use client";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.firstName || formData.firstName.length < 4)
      newErrors.firstName = "First name must be at least 4 characters.";
    if (!formData.lastName || formData.lastName.length < 4)
      newErrors.lastName = "Last name must be at least 4 characters.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone)
      newErrors.phone = "Phone number is required.";
    else if (!/^[\d+]+$/.test(formData.phone))
      newErrors.phone = "Phone number must only contain numbers or the + character.";
    else if (formData.phone.replace(/\D/g, "").length < 8)
      newErrors.phone = "Phone number must be at least 8 digits.";
    if (!formData.message)
      newErrors.message = "Message is required.";
    return newErrors;
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
      message: " Message sent successfully, we will try to contact you as soon as possible.",
      variant: "success",
    });

    // Optionally reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="mb-12 rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                For more information contact us
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  {/* First Name */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="firstName" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter your first name"
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color focus:border-watersecblue dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two"
                      />
                      {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                    </div>
                  </div>

                  {/* Last Name */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="lastName" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter your last name"
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color focus:border-watersecblue dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two"
                      />
                      {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="email" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color focus:border-watersecblue dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="phone" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color focus:border-watersecblue dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label htmlFor="message" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Enter your message"
                        className="border-stroke w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color focus:border-watersecblue dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two"
                      />
                      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="rounded-xs bg-watersecblue px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-watersecblue/90 dark:shadow-submit-dark"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLetterBox />
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
