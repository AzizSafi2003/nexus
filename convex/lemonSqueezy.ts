"use node";
import { v } from "convex/values";
import { internalAction } from "./_generated/server";
import { createHmac, timingSafeEqual } from "crypto";

const webhookSecret = process.env.LEMON_SQUEEZY_WEBHOOK_SECRET!;

/* Verifies the webhook signature using constant-time comparison to prevent timing attacks. */
function verifySignature(payload: string, signature: string): boolean {
  const hmac = createHmac("sha256", webhookSecret);
  const computedSignature = hmac.update(payload).digest("hex");

  // Ensure both signatures have the same length before comparison
  if (signature.length !== computedSignature.length) {
    return false;
  }

  return timingSafeEqual(
    Buffer.from(signature, "hex"),
    Buffer.from(computedSignature, "hex")
  );
}

export const verifyWebhook = internalAction({
  args: {
    payload: v.string(),
    signature: v.string(),
  },
  handler: async (ctx, args) => {
    const isValid = verifySignature(args.payload, args.signature);

    if (!isValid) {
      throw new Error("Invalid signature");
    }

    return JSON.parse(args.payload);
  },
});
