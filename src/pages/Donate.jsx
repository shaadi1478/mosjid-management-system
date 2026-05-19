import { useState } from "react";

import {
  Heart,
  Users,
  CreditCard,
  Landmark,
  Smartphone,
  Wallet,
  X,
  Copy,
  Check,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const campaigns = [
  {
    title: "মসজিদ সম্প্রসারণ প্রকল্প",
    raised: 187500,
    goal: 250000,
    donors: 423,
    description:
      "নামাজের স্থান বৃদ্ধি ও মসজিদের সুবিধা উন্নয়নে সহায়তা করুন।",
  },
  {
    title: "রমজান ফুড ড্রাইভ",
    raised: 38900,
    goal: 50000,
    donors: 612,
    description:
      "অসহায় পরিবারগুলোর জন্য ইফতার ও প্রয়োজনীয় খাদ্য সহায়তা দিন।",
  },
  {
    title: "কুরআন একাডেমি স্পন্সরশিপ",
    raised: 12450,
    goal: 30000,
    donors: 89,
    description:
      "কুরআন ও ইসলামিক শিক্ষার্থীদের সহযোগিতা করুন।",
  },
];

const paymentMethods = [
  {
    name: "bKash",
    icon: Smartphone,
    number: "01712345678",
    type: "Personal",
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Nagad",
    icon: Wallet,
    number: "01812345678",
    type: "Personal",
    color: "from-orange-500 to-amber-500",
  },
  {
    name: "Rocket",
    icon: Smartphone,
    number: "01912345678",
    type: "Agent",
    color: "from-purple-500 to-violet-500",
  },
  {
    name: "Bank Transfer",
    icon: Landmark,
    number: "DBBL • 1234567890",
    type: "Savings Account",
    color: "from-emerald-500 to-green-600",
  },
];

export default function Donate() {

  const [open, setOpen] = useState(false);

  const [selectedPayment, setSelectedPayment] =
    useState(null);

  const [selectedCampaign, setSelectedCampaign] =
    useState(null);

  const [copied, setCopied] = useState(false);

  // COPY
  const handleCopy = (text) => {

    navigator.clipboard.writeText(text);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  // OPEN MODAL
  const handleDonate = (campaign) => {

    setSelectedCampaign(campaign);

    setOpen(true);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-[#f6faf7] to-white pt-24 md:pt-32 pb-20 md:pb-24">

      {/* BG GLOW */}
      <div className="absolute left-1/2 top-0 h-[500px] md:h-[700px] w-[300px] md:w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        {/* HERO */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">

            <Sparkles className="h-4 w-4" />

            আল্লাহর ঘরের জন্য দান করুন
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl">

            আপনার দান হয়ে উঠুক
            <span className="block text-emerald-600">
              সদকায়ে জারিয়া
            </span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-gray-600 md:text-lg">

            আপনার প্রতিটি দান মসজিদ পরিচালনা,
            শিক্ষার্থী সহায়তা ও সমাজকল্যাণে গুরুত্বপূর্ণ ভূমিকা রাখে।
          </p>

          {/* STATS */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

              <div className="text-3xl font-bold text-gray-900">
                ১.২K+
              </div>

              <div className="mt-1 text-sm text-gray-500">
                দাতা সদস্য
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

              <div className="text-3xl font-bold text-gray-900">
                ৳ ২৪০K
              </div>

              <div className="mt-1 text-sm text-gray-500">
                সংগ্রহ হয়েছে
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

              <div className="text-3xl font-bold text-gray-900">
                ২৪/৭
              </div>

              <div className="mt-1 text-sm text-gray-500">
                কমিউনিটি সহায়তা
              </div>
            </div>

          </div>

        </div>

        {/* CAMPAIGNS */}
        <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {campaigns.map((campaign, index) => {

            const percentage = Math.round(
              (campaign.raised / campaign.goal) * 100
            );

            return (
              <div
                key={index}
                className="group rounded-[28px] border border-gray-200 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl md:rounded-[32px] md:p-7"
              >

                {/* TOP */}
                <div className="flex items-center justify-between">

                  <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">

                    <Heart className="h-3.5 w-3.5" />

                    সক্রিয় ক্যাম্পেইন
                  </div>

                  <div className="rounded-full bg-emerald-50 p-2 text-emerald-600">

                    <ShieldCheck className="h-4 w-4" />
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="mt-6 text-xl font-bold leading-tight text-gray-900 md:text-2xl">

                  {campaign.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-500">

                  {campaign.description}
                </p>

                {/* AMOUNT */}
                <div className="mt-8">

                  <div className="flex items-end justify-between gap-4">

                    <div>

                      <div className="text-2xl font-bold text-gray-900 md:text-3xl">
                        ৳ {campaign.raised.toLocaleString()}
                      </div>

                      <div className="mt-1 text-sm text-gray-500">
                        এখন পর্যন্ত সংগ্রহ
                      </div>
                    </div>

                    <div className="text-right">

                      <div className="text-sm font-medium text-emerald-600">
                        {percentage}% সম্পন্ন
                      </div>

                      <div className="mt-1 text-xs text-gray-500">
                        লক্ষ্য ৳
                        {campaign.goal.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* BAR */}
                  <div className="mt-5 h-3 overflow-hidden rounded-full bg-gray-100">

                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-green-600"
                      style={{
                        width: `${percentage}%`,
                      }}
                    />
                  </div>

                  {/* FOOTER */}
                  <div className="mt-4 flex items-center justify-between gap-3 text-sm">

                    <div className="inline-flex items-center gap-2 text-gray-500">

                      <Users className="h-4 w-4" />

                      {campaign.donors} জন দাতা
                    </div>

                    <div className="font-medium text-gray-700">
                      যাচাইকৃত
                    </div>
                  </div>
                </div>

                {/* BUTTON */}
                <button
                  onClick={() =>
                    handleDonate(campaign)
                  }
                  className="mt-8 inline-flex h-11 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 px-4 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-[1.01] hover:opacity-95 md:h-12"
                >

                  এখনই দান করুন

                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* MAIN MODAL */}
      {open && (

        <div className="fixed inset-0 z-[999] overflow-y-auto bg-black/50 backdrop-blur-sm">

          <div className="flex min-h-screen items-center justify-center p-3 sm:p-5">

            <div className="relative w-full max-w-6xl overflow-hidden rounded-[28px] bg-white p-4 shadow-2xl sm:rounded-[36px] sm:p-6 lg:p-10">

              {/* CLOSE */}
              <button
                onClick={() => {
                  setOpen(false);
                  setSelectedPayment(null);
                }}
                className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-gray-200 sm:right-5 sm:top-5"
              >

                <X className="h-5 w-5" />
              </button>

              {/* HEADER */}
              <div className="max-w-2xl pr-10">

                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1 text-xs font-medium text-emerald-700">

                  নিরাপদ অনুদান
                </div>

                <h2 className="mt-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">

                  {selectedCampaign?.title}
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">

                  আপনার পছন্দের পেমেন্ট মাধ্যম নির্বাচন করে দান সম্পন্ন করুন।
                </p>
              </div>

              {/* METHODS */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">

                {paymentMethods.map((method, index) => {

                  const Icon = method.icon;

                  return (
                    <div
                      key={index}
                      className="group rounded-[24px] border border-gray-200 bg-[#fafafa] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-[30px] sm:p-6"
                    >

                      {/* ICON */}
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${method.color} text-white shadow-lg sm:h-16 sm:w-16`}
                      >

                        <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                      </div>

                      {/* TEXT */}
                      <div className="mt-5 sm:mt-6">

                        <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">

                          {method.name}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500 sm:mt-2">

                          {method.type}
                        </p>

                        <div className="mt-4 break-all rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm font-medium text-gray-800 sm:px-4">

                          {method.number}
                        </div>
                      </div>

                      {/* BTN */}
                      <button
                        onClick={() =>
                          setSelectedPayment(method)
                        }
                        className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gray-900 text-sm font-medium text-white transition hover:opacity-90 sm:mt-6"
                      >

                        <CreditCard className="h-4 w-4" />

                        চালিয়ে যান
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* PAYMENT POPUP */}
              {selectedPayment && (

                <div className="fixed inset-0 z-[1000] overflow-y-auto bg-black/50 backdrop-blur-sm">

                  <div className="flex min-h-screen items-center justify-center p-3 sm:p-5">

                    <div className="relative w-full max-w-md rounded-[26px] bg-white p-5 shadow-2xl sm:rounded-[32px] sm:p-8">

                      {/* CLOSE */}
                      <button
                        onClick={() =>
                          setSelectedPayment(null)
                        }
                        className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 sm:right-4 sm:top-4"
                      >

                        <X className="h-4 w-4" />
                      </button>

                      {/* ICON */}
                      <div
                        className={`mx-auto flex h-20 w-20 items-center justify-center rounded-[24px] bg-gradient-to-r ${selectedPayment.color} text-white shadow-2xl sm:h-24 sm:w-24 sm:rounded-[28px]`}
                      >

                        <selectedPayment.icon className="h-8 w-8 sm:h-10 sm:w-10" />
                      </div>

                      {/* TITLE */}
                      <div className="mt-6 text-center sm:mt-7">

                        <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">

                          {selectedPayment.name}
                        </h3>

                        <p className="mt-2 text-sm text-gray-500 sm:text-base">

                          পেমেন্ট তথ্য
                        </p>
                      </div>

                      {/* NUMBER */}
                      <div className="mt-6 rounded-3xl border border-gray-200 bg-[#f9fafb] p-5 sm:mt-8 sm:p-6">

                        <div className="text-[11px] uppercase tracking-widest text-gray-500 sm:text-xs">

                          অ্যাকাউন্ট নম্বর
                        </div>

                        <div className="mt-3 break-all text-xl font-bold tracking-wide text-gray-900 sm:text-3xl">

                          {selectedPayment.number}
                        </div>

                        <div className="mt-3 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">

                          {selectedPayment.type}
                        </div>
                      </div>

                      {/* INFO */}
                      <div className="mt-5 space-y-3 text-sm leading-relaxed text-gray-600 sm:mt-6">

                        <p>
                          • উপরের নম্বরে আপনার অনুদান পাঠান।
                        </p>

                        <p>
                          • পেমেন্ট রেফারেন্সে আপনার নাম ব্যবহার করুন।
                        </p>

                        <p>
                          • ট্রানজেকশন আইডি মসজিদ কর্তৃপক্ষকে জানান।
                        </p>
                      </div>

                      {/* ACTIONS */}
                      <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">

                        <button
                          onClick={() =>
                            handleCopy(
                              selectedPayment.number
                            )
                          }
                          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-gray-100 text-sm font-medium text-gray-800 transition hover:bg-gray-200"
                        >

                          {copied ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}

                          {copied
                            ? "কপি হয়েছে"
                            : "কপি করুন"}
                        </button>

                        <button className="flex h-12 flex-1 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 text-sm font-medium text-white shadow-lg transition hover:opacity-90">

                          আমি পেমেন্ট করেছি
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}