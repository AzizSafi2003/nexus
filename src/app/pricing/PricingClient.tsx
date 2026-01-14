"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

import ProPlanView from "./_components/ProPlanView";
import NavigationHeader from "@/components/NavigationHeader";
import { ENTERPRISE_FEATURES } from "./_constants";
import { Star } from "lucide-react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import UpgradeButton from "./_components/UpgradeButton";
import LoginButton from "@/components/LoginButton";

type Props = {
  userId: string | null;
};

export default function PricingClient({ userId }: Props) {
  const convexUser = useQuery(api.users.getUser, userId ? { userId } : "skip");

  if (convexUser?.isPro) {
    return <ProPlanView />;
  }

  return (
    <div
      className="relative min-h-screen bg-[#0a0a0f] selection:bg-blue-500/20
      selection:text-blue-200"
    >
      <NavigationHeader />

      <main className="relative pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-24">
            <div className="relative inline-block">
              <div className="absolute -inset-px bg-linear-to-r from-blue-500 to-purple-500 blur-xl opacity-10" />
              <h1 className="relative text-5xl md:text-6xl lg:text-7xl font-semibold bg-linear-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text mb-8">
                Elevate Your <br /> Development Experience
              </h1>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join the next generation of developers with our professional suite
              of tools
            </p>
          </div>

          {/* Enterprise Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {ENTERPRISE_FEATURES.map((feature) => (
              <div
                key={feature.label}
                className="group relative bg-linear-to-b from-[#12121a] to-[#0a0a0f] rounded-2xl p-6 hover:scale-[1.02] transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center mb-4 ring-1 ring-gray-800/60">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">
                  {feature.label}
                </h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Pricing Card */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent" />
            <div className="absolute inset-x-0 -bottom-px h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent" />
            <div className="absolute -inset-0.5 bg-linear-to-r from-blue-500/30 to-purple-500/30 blur-2xl opacity-10" />
            <div className="relative bg-[#12121a]/90 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-12">
                <Star className="w-8 h-8 text-blue-400 mx-auto mb-6" />
                <h2 className="text-3xl font-semibold text-white mb-4">
                  Lifetime Pro Access
                </h2>
                <div className="flex justify-center items-baseline gap-2 mb-4">
                  <span className="text-2xl text-gray-400">$</span>
                  <span className="text-6xl font-semibold text-white">40</span>
                  <span className="text-xl text-gray-400">one-time</span>
                </div>
                <p className="text-gray-400 text-lg">
                  Unlock the full potential of Codex
                </p>
              </div>

              <div className="flex justify-center">
                <SignedIn>
                  <UpgradeButton />
                </SignedIn>
                <SignedOut>
                  <LoginButton />
                </SignedOut>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
