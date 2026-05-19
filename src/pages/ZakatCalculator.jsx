import { useMemo, useState } from "react";

import {
  Calculator,
  Coins,
  Wallet,
  Landmark,
  Gem,
  BadgeDollarSign,
  MoonStar,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

export default function ZakatCalculator() {

  const nisab = 85000;

  const [cash, setCash] = useState("");
  const [bank, setBank] = useState("");
  const [gold, setGold] = useState("");
  const [silver, setSilver] = useState("");
  const [business, setBusiness] = useState("");
  const [debts, setDebts] = useState("");

  const totalAssets = useMemo(() => {

    return (
      Number(cash || 0) +
      Number(bank || 0) +
      Number(gold || 0) +
      Number(silver || 0) +
      Number(business || 0)
    );

  }, [cash, bank, gold, silver, business]);

  const totalAfterDebt =
    totalAssets - Number(debts || 0);

  const zakat =
    totalAfterDebt > nisab
      ? totalAfterDebt * 0.025
      : 0;

  const eligible = totalAfterDebt >= nisab;

  const fields = [
    {
      label: "হাতে থাকা নগদ টাকা",
      icon: Wallet,
      value: cash,
      setValue: setCash,
      placeholder: "50000",
    },
    {
      label: "ব্যাংক সেভিংস",
      icon: Landmark,
      value: bank,
      setValue: setBank,
      placeholder: "120000",
    },
    {
      label: "স্বর্ণের মূল্য",
      icon: Gem,
      value: gold,
      setValue: setGold,
      placeholder: "80000",
    },
    {
      label: "রৌপ্যের মূল্য",
      icon: Coins,
      value: silver,
      setValue: setSilver,
      placeholder: "20000",
    },
    {
      label: "ব্যবসায়িক সম্পদ",
      icon: BadgeDollarSign,
      value: business,
      setValue: setBusiness,
      placeholder: "60000",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-[#f8faf7] to-white pt-24 md:pt-32 pb-20 md:pb-24">

      {/* BG GLOW */}
      <div className="absolute left-1/2 top-0 h-[450px] w-[300px] -translate-x-1/2 rounded-full bg-emerald-200/30 blur-[120px] md:h-[550px] md:w-[550px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        {/* HERO */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 shadow-sm">

            <Calculator className="h-4 w-4 text-emerald-600" />

            <span className="text-sm font-medium text-emerald-700">
              ইসলামিক যাকাত ক্যালকুলেটর
            </span>

          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-6xl">

            সহজেই হিসাব করুন
            <span className="block text-emerald-600">
              আপনার যাকাত
            </span>
          </h1>

          <p className="mt-6 text-base leading-8 text-gray-600 md:text-lg">

            আপনার নগদ অর্থ, ব্যাংক ব্যালেন্স,
            স্বর্ণ, রৌপ্য ও অন্যান্য সম্পদের তথ্য দিয়ে
            সহজেই যাকাত নির্ণয় করুন।
          </p>

        </div>

        {/* MAIN GRID */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_420px]">

          {/* LEFT SIDE */}
          <div className="rounded-[32px] border border-emerald-100 bg-white p-6 shadow-sm md:rounded-[40px] md:p-10">

            <div className="flex items-center gap-3">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">

                <MoonStar className="h-7 w-7" />
              </div>

              <div>

                <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                  সম্পদের তথ্য
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  আপনার মোট সম্পদের পরিমাণ লিখুন
                </p>

              </div>

            </div>

            {/* INPUTS */}
            <div className="mt-10 grid gap-6 md:grid-cols-2">

              {fields.map((field, index) => {

                const Icon = field.icon;

                return (
                  <div key={index}>

                    <label className="mb-3 flex items-center gap-2 text-sm font-medium text-gray-700">

                      <Icon className="h-4 w-4 text-emerald-600" />

                      {field.label}

                    </label>

                    <div className="relative">

                      <input
                        type="number"
                        value={field.value}
                        onChange={(e) =>
                          field.setValue(e.target.value)
                        }
                        placeholder={field.placeholder}
                        className="h-14 w-full rounded-2xl border border-gray-200 bg-[#fafafa] px-5 text-gray-900 outline-none transition focus:border-emerald-500 focus:bg-white"
                      />

                      <span className="absolute right-5 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                        টাকা
                      </span>

                    </div>

                  </div>
                );
              })}

              {/* DEBTS */}
              <div className="md:col-span-2">

                <label className="mb-3 flex items-center gap-2 text-sm font-medium text-gray-700">

                  <AlertTriangle className="h-4 w-4 text-red-500" />

                  দেনা / ঋণ
                </label>

                <div className="relative">

                  <input
                    type="number"
                    value={debts}
                    onChange={(e) =>
                      setDebts(e.target.value)
                    }
                    placeholder="30000"
                    className="h-14 w-full rounded-2xl border border-gray-200 bg-[#fafafa] px-5 text-gray-900 outline-none transition focus:border-red-400 focus:bg-white"
                  />

                  <span className="absolute right-5 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                    টাকা
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="rounded-[32px] bg-gradient-to-br from-emerald-600 to-green-600 p-6 text-white shadow-2xl md:rounded-[40px] md:p-8">

            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">

              <ShieldCheck className="h-4 w-4" />

              যাকাত সারাংশ
            </div>

            {/* TOTAL ASSETS */}
            <div className="mt-8">

              <div className="text-sm text-white/70">
                মোট সম্পদ
              </div>

              <div className="mt-2 break-all text-3xl font-bold md:text-4xl">
                ৳ {totalAssets.toLocaleString()}
              </div>

            </div>

            {/* AFTER DEBTS */}
            <div className="mt-8 border-t border-white/20 pt-8">

              <div className="text-sm text-white/70">
                দেনা বাদে সম্পদ
              </div>

              <div className="mt-2 break-all text-2xl font-bold md:text-3xl">
                ৳ {totalAfterDebt.toLocaleString()}
              </div>

            </div>

            {/* ZAKAT */}
            <div className="mt-8 border-t border-white/20 pt-8">

              <div className="text-sm text-white/70">
                আপনার যাকাত (২.৫%)
              </div>

              <div className="mt-3 break-all text-4xl font-bold md:text-5xl">
                ৳ {Math.max(0, zakat).toFixed(0)}
              </div>

            </div>

            {/* STATUS */}
            <div
              className={`mt-10 rounded-3xl border p-5 backdrop-blur ${
                eligible
                  ? "border-emerald-300/30 bg-white/10"
                  : "border-red-300/30 bg-red-500/10"
              }`}
            >

              <div className="flex items-center gap-2 text-lg font-semibold">

                {eligible ? (
                  <>
                    <CheckCircle2 className="h-5 w-5" />
                    যাকাত ফরজ হয়েছে
                  </>
                ) : (
                  <>
                    <AlertTriangle className="h-5 w-5" />
                    নিসাব পূর্ণ হয়নি
                  </>
                )}

              </div>

              <p className="mt-3 text-sm leading-7 text-white/80">

                বর্তমান আনুমানিক নিসাব:
                <span className="font-semibold">
                  {" "}
                  ৳ {nisab.toLocaleString()}
                </span>

              </p>

            </div>

            {/* NOTE */}
            <div className="mt-8 rounded-3xl bg-white/10 p-5 text-sm leading-7 text-white/80 backdrop-blur">

              যাকাত তখনই ফরজ হয় যখন একজন মুসলিমের
              সম্পদ নিসাব পরিমাণ অতিক্রম করে এবং
              এক চন্দ্র বছর পূর্ণ হয়। এই ক্যালকুলেটর
              আনুমানিক ২.৫% হারে যাকাত হিসাব করে।

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}