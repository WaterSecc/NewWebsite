"use client";

const MiniContactForm = () => {
  return (
    <form className="mt-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="First name"
          className="w-full rounded-xs border border-gray-300 bg-[#f8f8f8] px-4 py-2 text-sm text-gray-700 placeholder:text-sm dark:border-gray-700 dark:bg-[#2C303B] dark:text-white focus:border-watersecblue focus:outline-none dark:focus:border-watersecblue"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-xs border border-gray-300 bg-[#f8f8f8] px-4 py-2 text-sm text-gray-700 placeholder:text-sm dark:border-gray-700 dark:bg-[#2C303B] dark:text-white focus:border-watersecblue focus:outline-none dark:focus:border-watersecblue"
        />
      </div>
      <div className="mb-4">
        <textarea
          rows={3}
          placeholder="Message"
          className="w-full rounded-xs border border-gray-300 bg-[#f8f8f8] px-4 py-2 text-sm text-gray-700 placeholder:text-sm dark:border-gray-700 dark:bg-[#2C303B] dark:text-white focus:border-watersecblue focus:outline-none dark:focus:border-watersecblue"
        ></textarea>
      </div>
      <button
        type="submit"
        className="rounded-xs bg-watersecblue px-5 py-2 text-sm font-medium text-white hover:bg-watersecblue/90"
      >
        Send
      </button>
    </form>
  );
};

export default MiniContactForm;
