import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { stripe } from "@/libs/stripe";
import { getURL } from "@/app/utils/getURL";
import { createOrRetrieveCustomer } from "@/libs/supabaseAdmin";

export async function POST() {
    try {
        const supabase = createRouteHandlerClient({ cookies });

        const {
            data: { user },
        } = await supabase.auth.getUser();

        if (!user) throw new Error("Could not get user");

        const customer = await createOrRetrieveCustomer({
            uuid: user.id || "",
            email: user.email || "",
        });

        if (!customer) throw new Error("Could not get customer");

        const { url } = await stripe.billingPortal.sessions.create({
            customer,
            return_url: `${getURL()}/account`,
        });

        return NextResponse.json({ url });
    } catch (error: any) {
        console.log(error);
        return new NextResponse("Internal error", { status: 500 });
    }
}

// import Stripe from "stripe";
// import { NextResponse } from "next/server";
// import { headers } from "next/headers";
// import { stripe } from "@/libs/stripe";
// import {
//     upsertProductRecord,
//     upsertPriceRecord,
//     manageSubscriptionStatusChange,
// } from "@/libs/supabaseAdmin";

// const relevantEvents = new Set([
//     "product.created",
//     "product.updated",
//     "price.created",
//     "price.updated",
//     "checkout.session.completed",
//     "customer.subscription.created",
//     "customer.subscription.updated",
//     "customer.subscription.deleted",
// ]);
// export async function POST(request: Request) {
//     const body = await request.text();
//     const sig = headers().get("Stripe-Signature");
//     const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
//     let event: Stripe.Event;
//     try {
//         if (!sig || !webhookSecret) return;
//         event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
//     } catch (error: any) {
//         console.log("Error message:" + error.message);
//         return new NextResponse(`Webhook Error: ${error.message}`, {
//             status: 400,
//         });
//     }

//     if (relevantEvents.has(event.type)) {
//         try {
//             switch (event.type) {

//                 case "product.created":
//                 case "product.updated":
//                     await upsertProductRecord(
//                         event.data.object as Stripe.Product
//                     );
//                     break;
//                 case "price.created":
//                 case "price.updated":
//                     await upsertPriceRecord(event.data.object as Stripe.Price);
//                     break;
//                 case "customer.subscription.created":
//                 case "customer.subscription.updated":
//                 case "customer.subscription.deleted":
//                     const subscription = event.data
//                         .object as Stripe.Subscription;
//                     await manageSubscriptionStatusChange(
//                         subscription.id,
//                         subscription.customer as string,
//                         event.type === "customer.subscription.created"
//                     );
//                     break;
//                 case "checkout.session.completed":
//                     const checkoutSession = event.data
//                         .object as Stripe.Checkout.Session;
//                     if (checkoutSession.mode === "subscription") {
//                         const subscriptionId = checkoutSession.subscription;
//                         await manageSubscriptionStatusChange(
//                             subscriptionId as string,
//                             checkoutSession.customer as string,
//                             true
//                         );
//                     }
//                     break;
//                 default:
//                     throw new Error("Unhandled relevant event!");
//             }
//         } catch (error) {
//             console.log(error);
//             return new NextResponse("Webhook error", { status: 400 });
//         }
//     }
//     return NextResponse.json({ received: true }, { status: 200 });
// }
