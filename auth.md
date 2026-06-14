# Authentication — CommentToDM

CommentToDM is a SaaS product by [Sbl.so](https://sbl.so). Authentication is handled through the app at [app.commenttodm.com](https://app.commenttodm.com).

## Sign Up
- URL: https://app.commenttodm.com/signup
- Method: Email + password registration
- After sign-up, connect your LinkedIn account via OAuth to activate automations

## Sign In
- URL: https://app.commenttodm.com/login
- Method: Email + password

## LinkedIn OAuth
CommentToDM connects to your LinkedIn account using LinkedIn's official OAuth 2.0 flow. We store OAuth access tokens (AES-256 encrypted at rest) to monitor comments and send DMs on your behalf. We never store your LinkedIn password.

Scopes requested:
- `r_liteprofile` — read your name and profile URL
- `r_emailaddress` — read your email
- `w_messages` — send direct messages on your behalf

## Subscription
Access requires an active $99/month subscription, managed via Stripe. Payment is required before connecting LinkedIn.

## Account Deletion
To delete your account and all associated data, email [hi@commenttodm.com](mailto:hi@commenttodm.com). Data is purged within 30 days per our [Privacy Policy](https://commenttodm.com/privacy/).

## Contact
- Support: hi@commenttodm.com
- Privacy: privacy@commenttodm.com
