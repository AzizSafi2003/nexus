import { ConvexError, v } from "convex/values";
import { mutation } from "./_generated/server";

export const saveExecution = mutation({
  args: {
    language: v.string(),
    code: v.string(),
    /* we can have one of them output or error, or both in the same time */
    output: v.optional(v.string()),
    error: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // checking if the user is authenticated:
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new ConvexError("Not Authenticated");

    // check pro status
    const user = await ctx.db
      .query("users")
      .withIndex("by_user_id")
      .filter((q) => q.eq(q.field("userId"), identity.subject))
      .first();

    if (!user?.isPro && args.language !== "javascript") {
      throw new ConvexError("Pro subscription required to use this language");
    }

    /* we will take all the arguments and add the userId that this user added this code */
    await ctx.db.insert("codeExecutions", {
      ...args,
      userId: identity.subject,
    });
  },
});
