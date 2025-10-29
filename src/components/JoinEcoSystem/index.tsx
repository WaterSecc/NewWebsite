"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

type FileLike = File & { id?: string };

const MAX_FILES = 2;
const MAX_SIZE_MB = 5;
const ACCEPTED = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
];

const JoinEcoSystem = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    companyName: "",
    companyIndustry: "",
    jobPosition: "",
    companySize: "",
  });

  const [files, setFiles] = useState<FileLike[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState("");

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.fullName.trim() || form.fullName.trim().length < 4)
      e.fullName = "Full name must be at least 4 characters.";

    if (!form.email.trim()) e.email = "Email is required.";
    else if (!isEmail(form.email)) e.email = "Please enter a valid email address.";

    if (!form.companyName.trim()) e.companyName = "Company name is required.";
    if (!form.companyIndustry.trim()) e.companyIndustry = "Company industry is required.";

    if (!form.companySize) e.companySize = "Please select a company size.";

    // jobPosition is optional, files are optional
    return e;
  };

  const inputClass = (hasError: boolean) =>
    [
      "w-full rounded-md bg-white text-[#1C2B5A] placeholder-bleujdid/80 px-5 py-3 border-2 focus:outline-none",
      hasError ? "border-red-500 focus:ring-4 focus:ring-red-200" : "border-white focus:ring-4 focus:ring-white/30",
    ].join(" ");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: "" }));
  };

  const touchValidate = () => setErrors((p) => ({ ...p, ...validate() }));

  const onFilesSelected = (picked: FileList | null) => {
    if (!picked || !picked.length) return;

    const next: FileLike[] = [];
    let fileError = "";

    const existing = [...files];
    Array.from(picked).forEach((f) => {
      if (existing.length + next.length >= MAX_FILES) {
        fileError = `You can upload up to ${MAX_FILES} files.`;
        return;
      }
      if (!ACCEPTED.includes(f.type)) {
        fileError = "Unsupported file type.";
        return;
      }
      if (f.size > MAX_SIZE_MB * 1024 * 1024) {
        fileError = `Each file must be ≤ ${MAX_SIZE_MB}MB.`;
        return;
      }
      (f as FileLike).id = `${f.name}-${f.size}-${f.lastModified}`;
      next.push(f as FileLike);
    });

    if (fileError) setErrors((p) => ({ ...p, files: fileError }));
    else setErrors((p) => ({ ...p, files: "" }));

    setFiles((prev) => [...prev, ...next]);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    onFilesSelected(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault();

  const removeFile = (id?: string) => setFiles((prev) => prev.filter((f) => f.id !== id));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError("");

    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append("fullName", form.fullName.trim());
      fd.append("email", form.email.trim());
      fd.append("companyName", form.companyName.trim());
      fd.append("companyIndustry", form.companyIndustry.trim());
      fd.append("jobPosition", form.jobPosition.trim());
      fd.append("companySize", form.companySize);

      files.forEach((f) => fd.append("documents", f));

      // TODO: replace with your API endpoint
      // const res = await fetch("/api/ecosystem/join", { method: "POST", body: fd });
      // if (!res.ok) throw new Error("Failed to submit");

      await new Promise((r) => setTimeout(r, 600)); // simulate
      setSubmitted(true);
      setForm({
        fullName: "",
        email: "",
        companyName: "",
        companyIndustry: "",
        jobPosition: "",
        companySize: "",
      });
      setFiles([]);
      setErrors({});
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      setApiError("An error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* LEFT COLUMN - IMAGE (unchanged) */}
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12 mb-10 lg:mb-0">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images/about/about2.png"
                alt="Join our ecosystem"
                width={900}
                height={900}
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT COLUMN - BLUE PANEL FORM */}
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            {/* Paragraph above panel */}
            <h2 className="mb-2 text-2xl font-bold text-[#0E1726] sm:text-3xl lg:text-2xl xl:text-3xl">
              Join Us!
            </h2>
            <p className="mb-6 md:mb-8 text-base sm:text-lg text-[#1C1C1C]">
              Are you pitching eco-friendly products? Want to partner with us to help achieve our mission?
            </p>

            <div className="rounded-xl bg-bleujdid px-6 py-8 sm:px-8 sm:py-10 shadow-[0_24px_64px_rgba(0,0,0,0.15)] text-white">
              {submitted ? (
                <p className="text-center text-white/95 text-lg font-semibold py-10">
                  ✅ Thanks! Your partnership request has been received.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Top grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {/* Full Name */}
                    <div>
                      <input
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        onBlur={touchValidate}
                        placeholder="Full Name:"
                        className={inputClass(!!errors.fullName)}
                        type="text"
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-sm text-red-100 bg-red-500/20 rounded px-2 py-1 inline-block">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={touchValidate}
                        placeholder="E-Mail:"
                        className={inputClass(!!errors.email)}
                        type="email"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-100 bg-red-500/20 rounded px-2 py-1 inline-block">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Company Name */}
                    <div>
                      <input
                        name="companyName"
                        value={form.companyName}
                        onChange={handleChange}
                        onBlur={touchValidate}
                        placeholder="Company Name:"
                        className={inputClass(!!errors.companyName)}
                        type="text"
                      />
                      {errors.companyName && (
                        <p className="mt-1 text-sm text-red-100 bg-red-500/20 rounded px-2 py-1 inline-block">
                          {errors.companyName}
                        </p>
                      )}
                    </div>

                    {/* Company Industry */}
                    <div>
                      <input
                        name="companyIndustry"
                        value={form.companyIndustry}
                        onChange={handleChange}
                        onBlur={touchValidate}
                        placeholder="Company Industry:"
                        className={inputClass(!!errors.companyIndustry)}
                        type="text"
                      />
                      {errors.companyIndustry && (
                        <p className="mt-1 text-sm text-red-100 bg-red-500/20 rounded px-2 py-1 inline-block">
                          {errors.companyIndustry}
                        </p>
                      )}
                    </div>

                    {/* Job Position (optional) */}
                    <input
                      name="jobPosition"
                      value={form.jobPosition}
                      onChange={handleChange}
                      placeholder="Job Position (optional):"
                      className="w-full rounded-md bg-white text-[#1C2B5A] placeholder-bleujdid/80 px-5 py-3 border-2 border-white focus:outline-none focus:ring-4 focus:ring-white/30"
                      type="text"
                    />

                    {/* Company Size */}
                    <div className="relative">
                      <select
                        name="companySize"
                        value={form.companySize}
                        onChange={handleChange}
                        onBlur={touchValidate}
                        className={
                          "w-full appearance-none rounded-md bg-white text-[#006CFF] px-5 py-3 pr-10 border-2 focus:outline-none " +
                          (errors.companySize ? "border-red-500 focus:ring-4 focus:ring-red-200" : "border-white focus:ring-4 focus:ring-white/30")
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

                  {/* Optional documents */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/90">Related Documents (optional)</label>
                    <div
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                      className="relative rounded-md border-2 border-dashed bg-white/95 p-6 text-center transition border-white"
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.doc,.docx,.ppt,.pptx"
                        multiple
                        onChange={(e) => onFilesSelected(e.target.files)}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-2 h-10 w-10 text-bleujdid" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M4 12l8-8 8 8M12 4v12" />
                      </svg>
                      <p className="text-[#1C2B5A]">
                        Have files to describe the project? Drag & drop here, or <span className="font-semibold">click</span> to upload.
                        <br />
                        <span className="text-xs text-[#1C2B5A]/60">(Max {MAX_FILES} files, {MAX_SIZE_MB}MB each — PDF/DOC/PPT)</span>
                      </p>
                    </div>

                    {files.length > 0 && (
                      <ul className="mt-3 space-y-2">
                        {files.map((f) => (
                          <li
                            key={f.id}
                            className="flex items-center justify-between rounded-md bg-white/95 px-4 py-2 text-sm text-[#1C2B5A] border border-white"
                          >
                            <span className="truncate">{f.name}</span>
                            <button
                              type="button"
                              onClick={() => removeFile(f.id)}
                              className="ml-3 rounded-md border border-bleujdid px-2 py-1 text-bleujdid hover:bg-white/70"
                            >
                              Remove
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                    {errors.files && (
                      <p className="mt-2 text-sm text-red-100 bg-red-500/20 rounded px-2 py-1 inline-block">{errors.files}</p>
                    )}
                  </div>

                  {/* API error */}
                  {apiError && (
                    <p className="text-sm text-red-100 bg-red-500/20 rounded px-2 py-1 inline-block">{apiError}</p>
                  )}

                  {/* Actions */}
                  <div className="flex items-center justify-center gap-4 pt-1">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="rounded-full bg-white text-bleujdid px-10 py-3 text-base font-semibold shadow-[0_6px_20px_rgba(255,255,255,0.25)] hover:opacity-90 disabled:opacity-70"
                    >
                      {submitting ? "Sending..." : "Send"}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (confirm("Clear the form?")) {
                          setForm({
                            fullName: "",
                            email: "",
                            companyName: "",
                            companyIndustry: "",
                            jobPosition: "",
                            companySize: "",
                          });
                          setFiles([]);
                          setErrors({});
                          setSubmitted(false);
                          setApiError("");
                          if (fileInputRef.current) fileInputRef.current.value = "";
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

          {/* Spacer column kept for layout parity */}
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12"></div>
        </div>
      </div>
    </section>
  );
};

export default JoinEcoSystem;
