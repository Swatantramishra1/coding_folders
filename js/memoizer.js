memoizer = (fun) => {
  let cache = {};
  return function (n) {
    if (cache[n]) {
      return cache[n];
    } else {
      cache[n] = fun(n);
      return cache[n];
    }
  };
};


const memo = (fun) => {
  let cache = {};
  return function (n) {
    if (cache[n]) {
      return cache[n];
    } else {
      cache[n] = fun(n);
      return cache[n];
    }
  }
}


// "collection-v3-item":{},
// "product-viewed":{},
// "collection-v3-widget":{},
// "category":{},
// "collection-item":{},
// "subcategory":{},
// "REGULAR_DELIVERY":{},
// "delivery-status":{},
// "cart-changes":{},
// "home-page-banner":{},
// "suggestions":{},
// "ALTERNATE_DELIVERY":{},
// "featured-card-1":{},
// "supr-pass-card":{},
// "netbanking":{},
// "floating-cart":{},
// "self-serve-static-faq-l1":{},
// "wallet":{},
// "collection-widget":{},
// "search":{},
// "featured-card-2":{},
// "complaint-config":{},
// "preferred":{},
// "collection-v3-see-all":{},
// "subscription-card":{},
// "add-from-subscription":{},
// "upi":{},
// "self-serve-static-faq-l2":{},
// "add-to-wallet":{},
// "pay-from-wallet":{},
// "add-new":{},
// "dropdown-option":{},
// "done-button":{},
// "self-serve-service-issue":{},
// "milestone-group":{},
// "self-serve-api-trigger":{},
// "self-serve-api-response":{},
// "no-product-found":{},
// "supr-access-service-fee-banner":{},
// "featured-card-3":{},
// "self-serve-order":{},
// "featured-card-4":{},
// "supr-access-applied":{},
// "freshbot-script-initialize":{},
// "support-call-button":{},
// "supr-pass-detail-view":{},
// "calendar-chat-us":{},
// "calendar-call-us":{},
// "card":{},
// "featured-card-5":{},
// "older-orders":{},
// "milestone-task":{},
// "self-serve-entry":{},
// "self-serve-feedback_params":{},
// "all-transactions":{},
// "get-supr-access":{},
// "featured-card-6":{},
// "SUPRCREDIT":{},
// "complaint-view":{},
// "see-all":{},
// "self-serve-proceed":{},
// "self-serve-other-queries":{},
// "cart-validation-error":{},
// "featured-card-7":{},
// "item-unavailable-error":{},
// "self-serve-static-faq-tree":{},
// "phone-verified":{},
// "self-serve-complaints":{},
// "self-serve-quantity":{},
// "self-serve-notes":{},
// "self-serve-complaint-type":{},
// "location-search-box":{},
// "image-upload":{},
// "featured-card-8":{},
// "thank-you-for-feedback":{},
// "auto-debit-banner":{},
// "self-serve-static-faq-chat":{},
// "archive issues":{},
// "invalid-coupon":{},
// "out-of-stock":{},
// "supr-credits-container":{},
// "self-serve-complaint_success":{},
// "out-of-stock-sku":{},
// "self-serve-navigate-support":{},
// "self-serve-edit":{},
// "whatsapp-check":{},
// "self-serve-complaint-raised":{},
// "recharge-plan":{},
// "featured-card-9":{},
// "product-tile-access-price":{},
// "self-serve-static-faq-submit":{},
// "self-serve-static-faq-comment":{},
// "SUPRACCESS":{},
// "image-uploaded":{},
// "self-serve-image-upload-trigger":{},
// "featured-card-10":{},
// "self-serve-image-upload-success":{},
// "self-serve-ivr-other-queries":{},
// "self-serve-ivr-older-orders":{},
// "self-serve-image-order":{},
// "resume-chat":{},
// "suprcredits-faqs-viewed":{},
// "self-serve-ond":{},
// "self-serve-image-proceed":{},
// "address-not-serviceable":{},
// "apply-promo-container":{},
// "featured-card-11":{},
// "oos-suggestions":{},
// "view-photo":{},
// "self-serve-ivr-today-order":{},
// "supr-scratch-cards-block":{},
// "featured-card-12":{},
// "tplus1-banner-subscription":{},
// "scratch-card-revealed":{},
// "landing-page-oops":{},
// "featured-card-13":{},
// "system-vacation-error":{},
// "membership-details-view":{},
// "bulk-order-error":{},
// "self-serve-static-faq-l2-close":{},
// "confirm-pause":{},
// "COUPONCODE":{},
// "featured-card-14":{},
// "cutoff-time-over-error":{},
// "weekdays":{},
// "edit-frequency":{},
// "featured-card-15":{},
// "self-serve-api-error":{},
// "self-serve-error-interuption":{},
// "invalid-date-error":{},
// "deliver-once":{},
// "featured-card-16":{},
// "alternate-sku-msg":{},
// "incorrect-otp":{},
// "self-serve-support-options-error":{},
// "featured-card-17":{}:{},
// "self-serve-delivery-popup":{},
// "self-serve-complaint_agent_transfer":{},
// "featured-card-18":{},
// "freshbot-view-initiate":{},
// "featured-card-19":{},
// "featured-card-20":{},
// "support-chat-button":{},
// "block-access-banner":{},
// "active-reach-us":{},
// "featured-card-21":{},
// "freshchat-initiate":{},
// "apply-referral-code-block":{},
// "featured-card-24":{},
// "featured-card-22":{},
// "featured-card-23":{},
// "hero-collection-grid-card":{},
// "referral-code-success-banner":{},
// "featured-card-25":{},
// "featured-card-26":{},
// "self-serve-complaint_error":{},
// "featured-card-27":{},
// "hero-collection-vertical-card":{},
// "archive-reach-us":{}