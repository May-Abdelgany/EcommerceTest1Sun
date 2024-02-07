
import Stripe from "stripe"
function payment(
    {
        payment_method_types = ['card'],
        mode = 'payment',
        metadata = {},
        success_url = process.env.SUCCESS_URL,
        cancel_url = process.env.CANCEL_URL,
        customer_email = '',
        discounts = [],
        line_items = []
    } = {}
) {
    const stripe = new Stripe(process.env.SECRET_KEY)
    const session = stripe.checkout.sessions.create({
        payment_method_types,
        mode,
        metadata,
        success_url,
        cancel_url,
        customer_email,
        discounts,
        line_items
    })
    return session
}
export default payment

// [
//     {
//         price_data: {
//             currency: 'usd',
//             product_data: {
//                 name
//             },
//             unit_amount
//         },
//         quantity
//     }
// ]