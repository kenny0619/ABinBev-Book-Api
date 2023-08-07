export * from "./mongo-db.module";
export * from "./postgres.module";
export * from "./entities";
export * from "./abstracts";
export * from "./base";

// Transaction status
export const INITIATED = "initiated";
export const SUCCESS = "success";
export const FAILED = "failed";
export const ABANDONED = "abandoned";
export const REJECTED = "rejected";

export const PAYSTACK = "paystack";

export const PENDING = "pending";
export const ACTIVE = "active";
export const EXPIRED = "expired";
export const CANCELLED = "cancelled";
export const DUPLICATE = "duplicate";

export const TransactionStatus = {
  Initiated: "initiated",
  Success: "success",
  Failed: "failed",
  Abandoned: "abandoned",
  Rejected: "rejected",
};
