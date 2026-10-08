"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Phone,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Clock3,
} from "lucide-react";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";

interface LeadFormProps {
  onContinue: (data: {
    leadId: string;
    fullName: string;
    whatsapp: string;
  }) => void;
}

export default function LeadForm({
  onContinue,
}: LeadFormProps) {
  const [fullName, setFullName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const [errors, setErrors] = useState({
    fullName: "",
    whatsapp: "",
  });

  const [loading, setLoading] = useState(false);

  function validate() {
    const newErrors = {
      fullName: "",
      whatsapp: "",
    };

    let isValid = true;

    // ==========================================================
    // FULL NAME VALIDATION
    // ==========================================================

    if (!fullName.trim()) {
      newErrors.fullName =
        "Please enter your full name.";

      isValid = false;
    } else if (fullName.trim().length < 2) {
      newErrors.fullName =
        "Name must be at least 2 characters.";

      isValid = false;
    } else if (
      !/^[A-Za-z ]+$/.test(
        fullName.trim()
      )
    ) {
      newErrors.fullName =
        "Only letters and spaces are allowed.";

      isValid = false;
    }

    // ==========================================================
    // WHATSAPP VALIDATION
    // ==========================================================

    if (!whatsapp) {
      newErrors.whatsapp =
        "Please enter your WhatsApp number.";

      isValid = false;
    } else if (
      !isValidPhoneNumber(whatsapp)
    ) {
      newErrors.whatsapp =
        "Please enter a valid WhatsApp number.";

      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    console.log(
      "CRM URL:",
      process.env.NEXT_PUBLIC_CRM_URL
    );

    try {
      // ========================================================
      // DYNAMIC SOURCE PAGE
      // ========================================================
      // This automatically captures the page where the
      // assessment form was submitted.
      //
      // Examples:
      // /
      // /services
      // /contact
      // /assessment
      // /about
      //
      // No pages are hardcoded.
      // ========================================================

      const sourcePage =
        window.location.pathname;

      console.log(
        "Lead Source Page:",
        sourcePage
      );

      // ========================================================
      // SUBMIT LEAD TO CRM
      // ========================================================

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CRM_URL}/api/website-assessment`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",

            "x-api-key":
              process.env
                .NEXT_PUBLIC_CRM_API_KEY!,
          },

          body: JSON.stringify({
            fullName:
              fullName.trim(),

            phone: whatsapp,

            // IMPORTANT:
            // Backend/CRM field name
            source_page:
              sourcePage,
          }),
        }
      );

      // ========================================================
      // RESPONSE
      // ========================================================

      console.log(
        "Status:",
        response.status
      );

      const responseText =
        await response.text();

      console.log(
        "Response:",
        responseText
      );

      let data: any = {};

      try {
        data = responseText
          ? JSON.parse(
              responseText
            )
          : {};
      } catch (parseError) {
        console.error(
          "Failed to parse CRM response:",
          parseError
        );

        throw new Error(
          "Invalid response from CRM server."
        );
      }

      console.log(
        "CRM Data:",
        data
      );

      // ========================================================
      // ERROR HANDLING
      // ========================================================

      if (!response.ok) {
        console.error(
          "CRM Error:",
          data
        );

        throw new Error(
          data.message ||
            "Failed to create lead"
        );
      }

      // ========================================================
      // CONTINUE ASSESSMENT
      // ========================================================

      onContinue({
        leadId: data.leadId,

        fullName:
          fullName.trim(),

        whatsapp,
      });
    } catch (err) {
      console.error(
        "Assessment submission error:",
        err
      );

      alert(
        "Unable to start assessment. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-white to-orange-50 px-4 py-3">
      <motion.div
        initial={{
          opacity: 0,
          y: 24,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.45,
        }}
        className="w-full max-w-lg overflow-hidden rounded-3xl border border-white/70 bg-white/90 shadow-2xl backdrop-blur"
      >
        {/* ======================================================
            HEADER
        ====================================================== */}

        <div className="bg-gradient-to-r from-[#163A63] to-[#27558C] px-6 py-4 text-center text-white">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
            <Sparkles size={22} />
          </div>

          <h1 className="text-2xl font-bold leading-tight">
            Is Digital Marketing the
            <br />
            Right Career for You?
          </h1>

          <p className="mt-2 text-sm text-white/80">
            Take a free 3-minute assessment
            and receive your personalized
            career report.
          </p>
        </div>

        {/* ======================================================
            FORM
        ====================================================== */}

        <form
          onSubmit={handleSubmit}
          className="space-y-4 p-4"
        >
          {/* ====================================================
              NAME
          ==================================================== */}

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Full Name
            </label>

            <div className="flex items-center rounded-xl border border-gray-200 px-3 transition-all focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-100">
              <User
                size={18}
                className="text-gray-400"
              />

              <input
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => {
                  setFullName(
                    e.target.value
                  );

                  if (
                    errors.fullName
                  ) {
                    setErrors(
                      (prev) => ({
                        ...prev,
                        fullName:
                          "",
                      })
                    );
                  }
                }}
                className="w-full bg-transparent px-3 py-3 outline-none"
              />
            </div>

            {errors.fullName && (
              <p className="mt-1 text-xs text-red-500">
                {errors.fullName}
              </p>
            )}
          </div>

          {/* ====================================================
              WHATSAPP
          ==================================================== */}

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              WhatsApp Number
            </label>

            <div className="rounded-xl border border-gray-200 px-3 py-3 transition-all focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-100">
              <PhoneInput
                international
                defaultCountry="IN"
                value={whatsapp}
                onChange={(value) => {
                  setWhatsapp(
                    value || ""
                  );

                  if (
                    errors.whatsapp
                  ) {
                    setErrors(
                      (prev) => ({
                        ...prev,
                        whatsapp:
                          "",
                      })
                    );
                  }
                }}
                placeholder="Enter WhatsApp Number"
                className="phone-input"
              />
            </div>

            {errors.whatsapp && (
              <p className="mt-1 text-xs text-red-500">
                {errors.whatsapp}
              </p>
            )}
          </div>

          {/* ====================================================
              TRUST
          ==================================================== */}

          <div className="rounded-xl border border-orange-100 bg-orange-50 p-4">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Clock3
                size={16}
                className="text-orange-500"
              />

              <span>
                3-minute assessment
              </span>
            </div>

            <div className="mt-2 flex items-center gap-2 text-sm text-gray-700">
              <ShieldCheck
                size={16}
                className="text-orange-500"
              />

              <span>
                AI-powered personalized
                report
              </span>
            </div>

            <div className="mt-2 flex items-center gap-2 text-sm text-gray-700">
              <ShieldCheck
                size={16}
                className="text-orange-500"
              />

              <span>
                Free career counseling
              </span>
            </div>
          </div>

          {/* ====================================================
              BUTTON
          ==================================================== */}

          <motion.button
            type="submit"
            whileHover={{
              scale: 1.01,
            }}
            whileTap={{
              scale: 0.98,
            }}
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 py-3.5 text-base font-semibold text-white shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? (
              "Starting..."
            ) : (
              <>
                Start Assessment
                <ArrowRight size={18} />
              </>
            )}
          </motion.button>

          {/* ====================================================
              SECURITY NOTE
          ==================================================== */}

          <p className="text-center text-[11px] text-gray-500">
            Your details are secure and used
            only for your assessment.
          </p>
        </form>
      </motion.div>
    </div>
  );
}
