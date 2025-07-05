"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const NProgressProvider = () => {
  const router = useRouter();

  useEffect(() => {
    NProgress.configure({ showSpinner: false });

    const start = () => NProgress.start();
    const done = () => NProgress.done();

    // Listen to router events (App Router doesn't have events like Pages Router, so we'll observe DOM changes)
    const observer = new MutationObserver(() => {
      done(); // complete when DOM changes (naive solution)
    });

    observer.observe(document.body, { childList: true, subtree: true });

    start();

    return () => {
      done();
      observer.disconnect();
    };
  }, [router]);

  return null;
};

export default NProgressProvider;
