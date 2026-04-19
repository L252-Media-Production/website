"use client";

import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("Contact");
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const token = recaptchaRef.current?.getValue();
    if (!token) {
      setErrorMsg(t("recaptchaError"));
      return;
    }

    setStatus("loading");
    setErrorMsg(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, recaptchaToken: token }),
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
      recaptchaRef.current?.reset();
    } else {
      setStatus("error");
      recaptchaRef.current?.reset();
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <svg className="mx-auto mb-4 w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-lg font-semibold text-green-800 mb-2">{t("successTitle")}</h3>
        <p className="text-green-700 text-sm">{t("successBody")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">
            {t("firstName")}
          </label>
          <input
            required
            type="text"
            id="firstName"
            name="firstName"
            className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder={t("firstNamePlaceholder")}
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">
            {t("lastName")}
          </label>
          <input
            required
            type="text"
            id="lastName"
            name="lastName"
            className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder={t("lastNamePlaceholder")}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
          {t("emailAddress")}
        </label>
        <input
          required
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder={t("emailPlaceholder")}
        />
      </div>

      <div>
        <label htmlFor="organization" className="block text-sm font-medium text-slate-700 mb-1">
          {t("organization")}
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder={t("organizationPlaceholder")}
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">
          {t("serviceInterest")}
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">{t("selectService")}</option>
          <option value="av-installation">{t("avInstallation")}</option>
          <option value="event-production">{t("eventProduction")}</option>
          <option value="it-network">{t("itNetwork")}</option>
          <option value="training">{t("training")}</option>
          <option value="multiple">{t("multipleServices")}</option>
          <option value="unsure">{t("notSureYet")}</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
          {t("projectMessage")}
        </label>
        <textarea
          required
          id="message"
          name="message"
          rows={5}
          className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          placeholder={t("projectPlaceholder")}
        />
      </div>

      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""}
      />

      {errorMsg && (
        <p className="text-sm text-red-600">{errorMsg}</p>
      )}

      {status === "error" && (
        <div className="rounded-md border border-red-200 bg-red-50 p-4">
          <p className="text-sm font-semibold text-red-800">{t("errorTitle")}</p>
          <p className="text-sm text-red-700 mt-1">{t("errorBody")}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-400 text-white font-semibold rounded-md transition-colors"
      >
        {status === "loading" ? t("sending") : t("sendMessage")}
      </button>
    </form>
  );
}
