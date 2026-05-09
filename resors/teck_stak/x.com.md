app/
│
├── (public_app)/              // Unauthenticated & Public Views
│   ├── page.tsx               // Route: `/` (Splash page / Login prompt)
│   ├── login/page.tsx         // Route: `/login` (Sign in form)
│   ├── signup/page.tsx        // Route: `/signup` (Registration flow)
│   ├── about/page.tsx         // Route: `/about` (Company info)
│   ├── tos/page.tsx           // Route: `/tos` (Terms of service)
│   └── privacy/page.tsx       // Route: `/privacy` (Privacy policy)
│
├── (main_app)/                // The Logged-in User Experience
│   ├── layout.tsx             // Global Layout (Sidebar, Right Trends Panel)
│   │
│   ├── home/page.tsx          // Route: `/home` (Main Feed: "For You" & "Following")
│   ├── explore/page.tsx       // Route: `/explore` (Search & Trending topics)
│   │
│   ├── notifications/         // Activity Feed
│   │   ├── page.tsx           // Route: `/notifications` (All)
│   │   ├── mentions/page.tsx  // Route: `/notifications/mentions`
│   │   └── verified/page.tsx  // Route: `/notifications/verified`
│   │
│   ├── messages/              // Direct Messages
│   │   ├── page.tsx           // Route: `/messages` (Inbox)
│   │   ├── requests/page.tsx  // Route: `/messages/requests` (Message requests)
│   │   └── [chat_id]/page.tsx // Route: `/messages/123` (Chat window)
│   │
│   ├── bookmarks/page.tsx     // Route: `/bookmarks` (Saved posts)
│   │
│   ├── lists/                 // Curated Feeds
│   │   ├── page.tsx           // Route: `/lists` (Your lists)
│   │   └── [list_id]/page.tsx // Route: `/lists/123` (List timeline)
│   │
│   ├── communities/           // Groups/Communities
│   │   ├── page.tsx           // Route: `/communities` (Discover)
│   │   └── [community_id]/page.tsx // Route: `/communities/123` (Community timeline)
│   │
│   ├── compose/               // Advanced Posting 
│   │   └── post/page.tsx      // Route: `/compose/post` (Mobile-style full-screen editor)
│   ├── drafts/page.tsx        // Route: `/drafts` (Saved, unpublished posts)
│   ├── scheduled/page.tsx     // Route: `/scheduled` (Queue of future posts)
│   │
│   ├── premium/               // X Premium (Twitter Blue)
│   │   ├── page.tsx           // Route: `/premium` (Sales landing page)
│   │   └── subscribe/page.tsx // Route: `/premium/subscribe` (Checkout form)
│   │
│   ├── monetization/          // Creator Payouts
│   │   ├── page.tsx           // Route: `/monetization` (Revenue dashboard)
│   │   └── payouts/page.tsx   // Route: `/monetization/payouts` (Bank transfer history)
│   │
│   ├── spaces/                // Live Audio Rooms
│   │   ├── page.tsx           // Route: `/spaces` (Hub for active rooms)
│   │   └── [space_id]/page.tsx// Route: `/spaces/123` (The live audio UI)
│   │
│   ├── jobs/page.tsx          // Route: `/jobs` (Job board)
│   ├── articles/page.tsx      // Route: `/articles` (Long-form blogs)
│   │
│   ├── i/grok/                // The AI Chatbot
│   │   └── page.tsx           // Route: `/i/grok` (Chat UI with Grok)
│   │
│   ├── settings/              // Deep Settings & Security
│   │   ├── page.tsx           // Route: `/settings` (Settings menu)
│   │   ├── account/page.tsx   // Route: `/settings/account` (Account info)
│   │   ├── privacy/page.tsx   // Route: `/settings/privacy` (Privacy & Safety)
│   │   ├── notifications/page.tsx // Route: `/settings/notifications`
│   │   ├── security/page.tsx  // Route: `/settings/security` (2FA setup)
│   │   ├── sessions/page.tsx  // Route: `/settings/sessions` (Active device logins)
│   │   ├── blocked_accounts/page.tsx 
│   │   ├── muted_accounts/page.tsx   
│   │   ├── muted_keywords/page.tsx   
│   │   ├── accessibility/page.tsx // Route: `/settings/accessibility` (High contrast, etc.)
│   │   ├── download-data/page.tsx // Route: `/settings/download-data` (ZIP export)
│   │   └── deactivate/page.tsx    // Route: `/settings/deactivate` (Delete account)
│   │
│   └── [username]/            // DYNAMIC ROUTING (User Profiles)
│       ├── page.tsx           // Route: `/:username` (Main profile timeline)
│       ├── with_replies/page.tsx // Route: `/:username/with_replies`
│       ├── media/page.tsx     // Route: `/:username/media`
│       ├── likes/page.tsx     // Route: `/:username/likes` (User's liked posts)
│       ├── followers/page.tsx // Route: `/:username/followers`
│       ├── following/page.tsx // Route: `/:username/following`
│       ├── creator-subscriptions/page.tsx // Route: `/:username/creator-subscriptions`
│       ├── subscribers/page.tsx           // Route: `/:username/subscribers` (Private feed)
│       │
│       └── status/            
│           └── [post_id]/     // SINGLE POST VIEW
│               ├── page.tsx           // Route: `/:username/status/123` (The post & thread)
│               ├── analytics/page.tsx // Route: `.../analytics` (Views & Impressions)
│               ├── retweets/page.tsx  // Route: `.../retweets` (List of who reposted)
│               ├── likes/page.tsx     // Route: `.../likes` (List of who liked)
│               └── history/page.tsx   // Route: `.../history` (Post edit history)
│
├── admin/                     // ADMIN DASHBOARD
│   ├── page.tsx               // Route: `/admin` (Overview stats)
│   ├── login/page.tsx         // Route: `/admin/login` (Admin authentication)
│   │
│   ├── users/                 
│   │   ├── page.tsx           // Route: `/admin/users` (User management table)
│   │   └── banned/page.tsx    // Route: `/admin/users/banned` (Suspended users)
│   │
│   ├── verification-queue/page.tsx // Route: `/admin/verification-queue` (Approve blue checks)
│   ├── roles/page.tsx         // Route: `/admin/roles` (Promote users to admins)
│   │
│   ├── reports/
│   │   ├── page.tsx           // Route: `/admin/reports` (Incoming user reports)
│   │   └── appeals/page.tsx   // Route: `/admin/reports/appeals` (Review ban appeals)
│   │
│   ├── hashtags/page.tsx      // Route: `/admin/hashtags` (Manage trending topics)
│   ├── moderation-logs/page.tsx // Route: `/admin/moderation-logs` (Admin audit trail)
│   │
│   ├── announcements/page.tsx // Route: `/admin/announcements` (Push global alerts)
│   ├── system-health/page.tsx // Route: `/admin/system-health` (Server CPU/RAM stats)
│   ├── banned-ips/page.tsx    // Route: `/admin/banned-ips` (Firewall/IP blacklist)
│   └── ads/page.tsx           // Route: `/admin/ads` (Inject promoted posts)
│
└── i/api/                     // INTERNAL BACKEND
    ├── spaces/route.ts        // Live audio signaling 
    ├── grok/route.ts          // AI streaming API
    └── stripe/route.ts        // Payment processing Webhooks for Premium