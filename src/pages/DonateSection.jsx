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
  Sparkles,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const campaigns = [
  {
    title: "মসজিদ সম্প্রসারণ প্রকল্প",
    raised: 187500,
    goal: 250000,
    donors: 423,

    description:
      "নামাজের জায়গা বৃদ্ধি ও আধুনিক সুবিধা উন্নয়নে সহায়তা করুন।",
  },

  {
    title: "রমজান ইফতার প্রোগ্রাম",
    raised: 38900,
    goal: 50000,
    donors: 612,

    description:
      "অসহায় পরিবারগুলোর জন্য ইফতার ও খাদ্য সহায়তা প্রদান।",
  },

  {
    title: "কুরআন একাডেমি স্পন্সরশিপ",
    raised: 12450,
    goal: 30000,
    donors: 89,

    description:
      "হিফজ ও ইসলামিক শিক্ষার্থীদের সহযোগিতা করুন।",
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
    name: "ব্যাংক ট্রান্সফার",
    icon: Landmark,
    number: "DBBL • 1234567890",
    type: "Savings Account",
    color: "from-emerald-500 to-green-600",
  },
];

export default function DonateSection() {

  const [open, setOpen] = useState(false);

  const [selectedPayment, setSelectedPayment] =
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

  return (
    <section
      id="donate"
      className="relative overflow-hidden bg-gradient-to-b from-[#f7faf8] to-white py-28"
    >

      {/* BG GLOW */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-300/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-5 py-2 shadow-sm">

            <Sparkles className="h-4 w-4 text-emerald-600" />

            <span className="text-sm font-medium text-emerald-700">
              সদকায়ে জারিয়া
            </span>

          </div>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-gray-900 md:text-6xl">

            আপনার দান হোক
            <span className="block text-emerald-600">
              চিরস্থায়ী সওয়াবের মাধ্যম
            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">

            আপনার প্রতিটি অনুদান মসজিদ পরিচালনা,
            কুরআন শিক্ষা ও অসহায় মানুষের পাশে দাঁড়াতে সহায়তা করে।

          </p>

        </div>

        {/* STATS
        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">

          <div className="rounded-[28px] border border-emerald-100 bg-white p-6 shadow-sm">

            <div className="text-4xl font-bold text-gray-900">
              ১.২K+
            </div>

            <div className="mt-2 text-sm text-gray-500">
              দাতা সদস্য
            </div>

          </div>

          <div className="rounded-[28px] border border-emerald-100 bg-white p-6 shadow-sm">

            <div className="text-4xl font-bold text-gray-900">
              ৳ ২৪L+
            </div>

            <div className="mt-2 text-sm text-gray-500">
              সংগ্রহ হয়েছে
            </div>

          </div>

          <div className="rounded-[28px] border border-emerald-100 bg-white p-6 shadow-sm">

            <div className="text-4xl font-bold text-gray-900">
              ২৪/৭
            </div>

            <div className="mt-2 text-sm text-gray-500">
              কমিউনিটি সহায়তা
            </div>

          </div>

          <div className="rounded-[28px] border border-emerald-100 bg-white p-6 shadow-sm">

            <div className="text-4xl font-bold text-gray-900">
              ১০০%
            </div>

            <div className="mt-2 text-sm text-gray-500">
              স্বচ্ছ ব্যবস্থাপনা
            </div>

          </div>

        </div> */}

        {/* CAMPAIGNS */}
        <div className="mt-20 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {campaigns.map((campaign, index) => {

            const percentage = Math.round(
              (campaign.raised / campaign.goal) * 100
            );

            return (
              <div
                key={index}
                className="group rounded-[32px] border border-gray-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* TOP */}
                <div className="flex items-center justify-between">

                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">

                    <Heart className="h-3.5 w-3.5" />

                    চলমান প্রজেক্ট

                  </div>

                  <div className="rounded-full bg-emerald-100 p-2 text-emerald-600">

                    <ShieldCheck className="h-4 w-4" />

                  </div>

                </div>

                {/* TITLE */}
                <h3 className="mt-6 text-2xl font-bold leading-tight text-gray-900">

                  {campaign.title}

                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-500">

                  {campaign.description}

                </p>

                {/* PROGRESS */}
                <div className="mt-8">

                  <div className="flex items-end justify-between">

                    <div>

                      <div className="text-3xl font-bold text-gray-900">

                        ৳
                        {campaign.raised.toLocaleString()}

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
                  <div className="mt-4 flex items-center justify-between text-sm">

                    <div className="inline-flex items-center gap-2 text-gray-500">

                      <Users className="h-4 w-4" />

                      {campaign.donors} জন দাতা

                    </div>

                    <div className="font-medium text-emerald-600">
                      Verified
                    </div>

                  </div>

                </div>

                {/* BUTTON */}
                <button
                  onClick={() => setOpen(true)}
                  className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-[1.01]"
                >

                  এখনই দান করুন

                  <ArrowRight className="h-4 w-4" />

                </button>

              </div>
            );
          })}

        </div>

      </div>

      {/* MODAL */}
      {open && (

        <div className="fixed inset-0 z-[999] overflow-y-auto bg-black/50 backdrop-blur-sm">

          <div className="flex min-h-screen items-center justify-center p-4">

            <div className="relative w-full max-w-6xl rounded-[36px] bg-white p-6 shadow-2xl md:p-10">

              {/* CLOSE */}
              <button
                onClick={() => {
                  setOpen(false);
                  setSelectedPayment(null);
                }}
                className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 transition hover:bg-gray-200"
              >

                <X className="h-5 w-5" />

              </button>

              {/* HEADER */}
              <div className="max-w-2xl">

                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">

                  💳 নিরাপদ অনুদান

                </div>

                <h3 className="mt-5 text-4xl font-bold text-gray-900">

                  আপনার অনুদান সম্পন্ন করুন

                </h3>

                <p className="mt-4 text-gray-600 leading-7">

                  নিচের যেকোনো মাধ্যমে সহজেই অনুদান পাঠাতে পারবেন।

                </p>

              </div>

              {/* PAYMENT METHODS */}
              <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                {paymentMethods.map((method, index) => {

                  const Icon = method.icon;

                  return (
                    <div
                      key={index}
                      className="rounded-[30px] border border-gray-200 bg-[#fafafa] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >

                      {/* ICON */}
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-r ${method.color} text-white shadow-lg`}
                      >

                        <Icon className="h-7 w-7" />

                      </div>

                      {/* INFO */}
                      <div className="mt-6">

                        <h4 className="text-2xl font-semibold text-gray-900">
                          {method.name}
                        </h4>

                        <p className="mt-2 text-sm text-gray-500">
                          {method.type}
                        </p>

                        <div className="mt-4 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800 break-all">

                          {method.number}

                        </div>

                      </div>

                      {/* BTN */}
                      <button
                        onClick={() =>
                          setSelectedPayment(method)
                        }
                        className="mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gray-900 text-sm font-medium text-white transition hover:opacity-90"
                      >

                        <CreditCard className="h-4 w-4" />

                        পেমেন্ট করুন

                      </button>

                    </div>
                  );
                })}

              </div>

              {/* POPUP */}
              {selectedPayment && (

                <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">

                  <div className="relative w-full max-w-md rounded-[32px] bg-white p-8 shadow-2xl">

                    {/* CLOSE */}
                    <button
                      onClick={() =>
                        setSelectedPayment(null)
                      }
                      className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition hover:bg-gray-200"
                    >

                      <X className="h-4 w-4" />

                    </button>

                    {/* ICON */}
                    <div
                      className={`mx-auto flex h-24 w-24 items-center justify-center rounded-[30px] bg-gradient-to-r ${selectedPayment.color} text-white shadow-2xl`}
                    >

                      <selectedPayment.icon className="h-10 w-10" />

                    </div>

                    {/* TEXT */}
                    <div className="mt-7 text-center">

                      <h3 className="text-3xl font-bold text-gray-900">

                        {selectedPayment.name}

                      </h3>

                      <p className="mt-2 text-gray-500">
                        অনুদান পাঠানোর তথ্য
                      </p>

                    </div>

                    {/* NUMBER */}
                    <div className="mt-8 rounded-3xl border border-gray-200 bg-[#f9fafb] p-6">

                      <div className="text-xs uppercase tracking-widest text-gray-500">
                        Account Number
                      </div>

                      <div className="mt-3 text-3xl font-bold tracking-wide text-gray-900 break-all">

                        {selectedPayment.number}

                      </div>

                      <div className="mt-3 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">

                        {selectedPayment.type}

                      </div>

                    </div>

                    {/* INFO */}
                    <div className="mt-6 space-y-3 text-sm leading-7 text-gray-600">

                      <p>
                        • উপরের নাম্বারে আপনার অনুদান পাঠান।
                      </p>

                      <p>
                        • পেমেন্ট রেফারেন্সে নিজের নাম ব্যবহার করুন।
                      </p>

                      <p>
                        • পেমেন্ট শেষে মসজিদ কর্তৃপক্ষকে ট্রানজেকশন আইডি দিন।
                      </p>

                    </div>

                    {/* ACTION */}
                    <div className="mt-8 flex gap-3">

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
                          : "নাম্বার কপি করুন"}

                      </button>

                      <button className="flex h-12 flex-1 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 text-sm font-medium text-white shadow-lg transition hover:opacity-90">

                        আমি পেমেন্ট করেছি

                      </button>

                    </div>

                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

    </section>
  );
}