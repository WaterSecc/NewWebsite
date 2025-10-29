"use client";

import React, { useCallback, useRef, useState } from "react";

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

const Career = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [files, setFiles] = useState<FileLike[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState("");

  const inputRef = useRef<HTMLInputElement | null>(null);

  const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  const validate = () => {
    const e: Record<string, string> = {};
    if (!fullName.trim() || fullName.trim().length < 4) {
      e.fullName = "Full name must be at least 4 characters.";
    }
    if (!email.trim()) {
      e.email = "Email is required.";
    } else if (!isEmail(email)) {
      e.email = "Please enter a valid email address.";
    }
    if (!files.length) {
      e.files = "Please upload at least one document.";
    }
    return e;
  };

  const onFilesSelected = (picked: FileList | null) => {
    if (!picked || !picked.length) return;

    const newList: FileLike[] = [];
    let fileError = "";

    // merge with existing but enforce caps
    const existing = [...files];

    Array.from(picked).forEach((f) => {
      if (existing.length + newList.length >= MAX_FILES) {
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
      // attach a simple id for mapping removal
      (f as FileLike).id = `${f.name}-${f.size}-${f.lastModified}`;
      newList.push(f as FileLike);
    });

    if (fileError) {
      setErrors((prev) => ({ ...prev, files: fileError }));
    } else {
      setErrors((prev) => ({ ...prev, files: "" }));
    }

    setFiles((prev) => [...prev, ...newList]);
  };

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    onFilesSelected(e.dataTransfer.files);
  }, []);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const removeFile = (id?: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const inputClass = (hasError: boolean) =>
    [
      "w-full rounded-md bg-white text-[#1C2B5A] placeholder-bleujdid/80 px-5 py-3 border-2 focus:outline-none",
      hasError ? "border-red-500 focus:ring-4 focus:ring-red-200" : "border-white focus:ring-4 focus:ring-white/30",
    ].join(" ");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError("");

    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    setSubmitting(true);
    try {
      // prepare multipart form data (typical for CV uploads)
      const form = new FormData();
      form.append("fullName", fullName.trim());
      form.append("email", email.trim());
      files.forEach((f) => form.append("documents", f));

      // TODO: point to your API route / endpoint
      // const res = await fetch("/api/careers/apply", { method: "POST", body: form });
      // if (!res.ok) throw new Error("Failed to submit application");

      // Simulate success
      await new Promise((r) => setTimeout(r, 700));
      setSubmitted(true);
      setFullName("");
      setEmail("");
      setFiles([]);
      setErrors({});
    } catch (err) {
      setApiError("An error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="careers" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="grid items-start gap-10 md:gap-12 lg:gap-16" style={{ gridTemplateColumns: "65% 35%" }}>
          <div className="relative">
            <h2 className="mb-2 text-2xl sm:text-3xl font-bold">Start a new career with WaterSec!</h2>
            <p className="mb-8 text-black/85">
              We’re looking for bold people who build with heart and chase solutions with fearless optimism.
            </p>
          <div className="relative rounded-xl bg-bleujdid p-6 sm:p-8 md:p-10 text-white shadow-[0_24px_64px_rgba(0,0,0,0.15)]">
            

            {submitted ? (
              <p className="text-center text-white/95 text-lg font-semibold py-10">✅ Application received. Thank you!</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name:"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        setErrors((p) => ({ ...p, fullName: "" }));
                      }}
                      onBlur={() => setErrors((p) => ({ ...p, ...validate() }))}
                      className={inputClass(!!errors.fullName)}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-100 bg-red-500/20 rounded px-2 py-1 inline-block">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="E-Mail:"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setErrors((p) => ({ ...p, email: "" }));
                      }}
                      onBlur={() => setErrors((p) => ({ ...p, ...validate() }))}
                      className={inputClass(!!errors.email)}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-100 bg-red-500/20 rounded px-2 py-1 inline-block">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Upload box */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/90">Upload Documents</label>
                  <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    className={
                      "relative rounded-md border-2 border-dashed bg-white/95 p-6 text-center transition " +
                      (errors.files ? "border-red-500" : "border-white")
                    }
                  >
                    <input
                      ref={inputRef}
                      type="file"
                      accept=".pdf,.doc,.docx,.ppt,.pptx"
                      multiple
                      onChange={(e) => onFilesSelected(e.target.files)}
                      className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                    />

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto mb-2 h-10 w-10 text-bleujdid"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M4 12l8-8 8 8M12 4v12" />
                    </svg>

                    <p className="text-[#1C2B5A]">
                      Drag & drop files here, or <span className="font-semibold">click</span> to upload
                      <br />
                      <span className="text-xs text-[#1C2B5A]/60">(Max {MAX_FILES} files, {MAX_SIZE_MB}MB each — PDF/DOC/PPT)</span>
                    </p>
                  </div>

                  {/* Selected files list */}
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
                {apiError && <p className="text-sm text-red-100 bg-red-500/20 rounded px-2 py-1 inline-block">{apiError}</p>}

                {/* Actions */}
                <div className="flex items-center justify-center gap-4 pt-1">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="rounded-full bg-white px-10 py-3 text-base font-semibold text-bleujdid shadow-[0_6px_20px_rgba(255,255,255,0.25)] hover:opacity-90 disabled:opacity-70"
                  >
                    {submitting ? "Sending..." : "Send"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (confirm("Clear the form?")) {
                        setFullName("");
                        setEmail("");
                        setFiles([]);
                        setErrors({});
                        setSubmitted(false);
                        setApiError("");
                        inputRef.current && (inputRef.current.value = "");
                      }
                    }}
                    className="rounded-full border-2 border-white px-10 py-3 text-base font-semibold text-white hover:bg-white/10"
                  >
                    Delete
                  </button>
                </div>
              </form>
            )}
          </div>
          </div>

          {/* RIGHT — Info box (customize as you like) */}
          <div className="flex flex-col justify-start space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0E1726] mb-3">Join WaterSec</h3>
              <p className="text-[#1C1C1C] text-base sm:text-lg leading-relaxed">
                We hire people who care about impact. Tell us who you are and share your CV/portfolio.
                If your profile matches an open role, our team will reach out.
              </p>
            </div>

            <div className="rounded-xl border border-black/5 bg-white p-5 shadow-sm">
              <h4 className="font-semibold text-[#0E1726] mb-2">Tips for a strong application</h4>
              <ul className="list-disc pl-5 text-sm text-[#1C1C1C]/90 space-y-1">
                <li>Keep your CV concise (max 2 pages).</li>
                <li>Include relevant projects or Github links.</li>
                <li>Highlight water-tech, IoT, or climate experience.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
