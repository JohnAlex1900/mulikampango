export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  keywords: string[];
  featured?: boolean;
  sections: BlogSection[];
  takeaways: string[];
  ctaLabel: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "child-safety-online-checklist",
    title: "Child Safety Online Checklist for Parents in 2026",
    description:
      "A practical child safety online checklist covering screen time, safe browsing, location sharing, and device rules for families.",
    excerpt:
      "Use this checklist to create safer digital habits, configure parental controls, and keep your family's device setup clear, lawful, and consent-based.",
    category: "Child Safety",
    publishedAt: "2026-06-08",
    readingTime: "8 min read",
    keywords: [
      "child safety online",
      "parental controls",
      "family safety checklist",
      "screen time rules",
      "consent-based location sharing",
    ],
    featured: true,
    sections: [
      {
        heading: "Start with a family device policy",
        paragraphs: [
          "The best child safety strategy begins with a simple, visible agreement. Families should decide which devices are managed, what time windows apply, and which apps or websites are off limits.",
          "That policy works best when the child understands it. Clear rules reduce conflict and make it easier to adjust settings over time instead of using hidden monitoring tactics.",
        ],
        bullets: [
          "List every phone, tablet, or laptop in use",
          "Set bedtime and school-time limits",
          "Agree on app approval rules before installing new software",
        ],
      },
      {
        heading: "Use layered protection rather than one switch",
        paragraphs: [
          "Safe browsing, app blocking, and location sharing each solve a different problem. Families often get better results when they combine them into a layered setup.",
          "For example, a child safety platform can help you set safe zones, alerts, and usage limits while still leaving room for trust and age-appropriate freedom.",
        ],
        bullets: [
          "Screen time controls",
          "Website filtering and app blocking",
          "Location alerts for approved places only",
          "Usage summaries for parent review",
        ],
      },
      {
        heading: "Review the setup every month",
        paragraphs: [
          "Children grow, schedules change, and school routines evolve. Monthly reviews help you keep the setup useful instead of outdated.",
          "Look for patterns that suggest the rules are too strict, too loose, or no longer aligned with the child’s age and responsibilities.",
        ],
      },
    ],
    takeaways: [
      "Make the rules visible and age-appropriate.",
      "Combine screen time, content, and location controls.",
      "Review the setup regularly with your child.",
    ],
    ctaLabel: "Request a family safety audit",
  },
  {
    slug: "screen-time-limits-that-work",
    title: "Screen Time Limits That Actually Work for Families",
    description:
      "Learn how to set screen time limits that reduce friction, improve sleep, and support healthy digital habits for children.",
    excerpt:
      "These practical screen-time strategies help families avoid constant arguments while still keeping children on a healthier digital routine.",
    category: "Parental Controls",
    publishedAt: "2026-06-08",
    readingTime: "7 min read",
    keywords: [
      "screen time limits",
      "parental control app",
      "healthy digital habits",
      "family device rules",
    ],
    sections: [
      {
        heading: "Use routines, not just timers",
        paragraphs: [
          "A timer is useful, but a routine is what changes behavior. Families should tie device use to existing habits such as homework, dinner, and bedtime.",
          "When children know what happens next, they are less likely to treat screen-time settings as punishment.",
        ],
      },
      {
        heading: "Keep weekend and school-day rules different",
        paragraphs: [
          "A healthy setup usually has more flexibility on weekends and tighter rules during school nights. This helps the family avoid a one-size-fits-all policy.",
          "Use a parental controls dashboard to build multiple profiles so the schedule matches the day, not just the device.",
        ],
        bullets: [
          "Shorter school-night windows",
          "Longer weekend allowance",
          "App-specific exceptions for homework or reading",
        ],
      },
      {
        heading: "Explain the why behind the rule",
        paragraphs: [
          "Children cooperate more when the rule is linked to sleep, focus, or safety instead of authority alone.",
          "That approach also makes it easier to expand digital responsibility as the child gets older.",
        ],
      },
    ],
    takeaways: [
      "Build routines around screen time.",
      "Use different limits for different days.",
      "Explain the reason behind every rule.",
    ],
    ctaLabel: "Plan a screen-time setup",
  },
  {
    slug: "safe-zones-location-sharing-guide",
    title: "How to Set Up Safe Zones and Location Sharing Responsibly",
    description:
      "A guide to consent-based location sharing, safe zones, and child safety alerts for parents and guardians.",
    excerpt:
      "Location sharing only works well when it is transparent, age-appropriate, and tied to real safety goals such as school arrival and family travel.",
    category: "Family Safety",
    publishedAt: "2026-06-08",
    readingTime: "6 min read",
    keywords: [
      "safe zones",
      "location sharing for parents",
      "child safety alerts",
      "geofencing",
    ],
    sections: [
      {
        heading: "Choose places that matter",
        paragraphs: [
          "The most useful safe zones are the places where arrival and departure matter: home, school, a relative’s house, or a trusted activity center.",
          "Avoid creating too many zones. If every location is monitored, the alerts become noisy and easy to ignore.",
        ],
      },
      {
        heading: "Use alerts for events, not surveillance",
        paragraphs: [
          "Alerts should be tied to meaningful moments such as arriving at school or leaving a known area.",
          "That keeps the experience focused on safety and reduces the feeling of hidden monitoring.",
        ],
        bullets: [
          "Arrival alert for school",
          "Departure alert for home",
          "Emergency check-in for travel",
        ],
      },
      {
        heading: "Make consent visible",
        paragraphs: [
          "The child should know which zones exist and why they were created. Transparency builds trust and reduces resistance.",
          "For families and businesses alike, lawful device management starts with clear notice and permission.",
        ],
      },
    ],
    takeaways: [
      "Keep safe zones limited and meaningful.",
      "Use alerts for important events only.",
      "Explain the setup clearly to the child.",
    ],
    ctaLabel: "Configure safe zones",
  },
  {
    slug: "block-apps-websites-without-breaking-trust",
    title: "How to Block Apps and Websites Without Breaking Trust",
    description:
      "Advice for parents who want to block distracting apps and unsafe websites while preserving a healthy parent-child relationship.",
    excerpt:
      "Trust grows when restrictions are explained, age-based, and regularly reviewed instead of hidden or arbitrary.",
    category: "Digital Wellbeing",
    publishedAt: "2026-06-08",
    readingTime: "7 min read",
    keywords: [
      "app blocking",
      "website blocking",
      "child safety online",
      "digital trust",
    ],
    sections: [
      {
        heading: "Block by purpose, not fear",
        paragraphs: [
          "The most effective blocks are tied to a purpose: protecting sleep, preventing unsafe content, or reducing distraction during school hours.",
          "When the purpose is clear, children are more likely to accept it and less likely to work around it.",
        ],
      },
      {
        heading: "Prefer category-based rules",
        paragraphs: [
          "Category-based controls are easier to manage than chasing individual URLs or app names. They also make future adjustments faster.",
          "A good family safety platform should allow you to refine rules without rebuilding everything from scratch.",
        ],
      },
      {
        heading: "Review exceptions openly",
        paragraphs: [
          "Homework tools, educational sites, or travel apps may need exceptions. Keep those exceptions visible so the system stays fair and understandable.",
        ],
      },
    ],
    takeaways: [
      "Tie blocks to a safety purpose.",
      "Use categories instead of only single app rules.",
      "Keep exceptions visible and fair.",
    ],
    ctaLabel: "Review content blocking options",
  },
  {
    slug: "what-to-do-after-phone-is-lost",
    title: "What to Do After a Phone Is Lost or Stolen",
    description:
      "A practical phone recovery and anti-theft checklist for families, students, and small businesses.",
    excerpt:
      "A fast, calm response can protect personal data, reduce fraud risk, and help you recover the device more quickly.",
    category: "Anti-Theft",
    publishedAt: "2026-06-08",
    readingTime: "6 min read",
    keywords: [
      "lost phone",
      "anti-theft setup",
      "phone recovery",
      "device security",
    ],
    sections: [
      {
        heading: "Act in the first 15 minutes",
        paragraphs: [
          "Use the device finder, change key passwords, and contact your carrier or IT admin if the phone belongs to a business.",
          "The faster you lock down access, the less likely the thief or finder can reach your accounts.",
        ],
        bullets: [
          "Lock the device remotely",
          "Change email, banking, and social passwords",
          "Notify your carrier or admin team",
        ],
      },
      {
        heading: "Check whether the device had an anti-theft profile",
        paragraphs: [
          "If your anti-theft setup includes location sharing, alerts, or remote lock readiness, you may still be able to trace recent movement.",
          "Even if the phone is gone, a ready-made recovery plan shortens the damage.",
        ],
      },
      {
        heading: "Prepare for the next incident now",
        paragraphs: [
          "The best anti-theft plan is the one you build before the loss happens. Document the device, keep backups current, and test the lock and recovery flow.",
        ],
      },
    ],
    takeaways: [
      "Move fast on the first 15 minutes.",
      "Use remote lock and password changes.",
      "Prepare the recovery plan before you need it.",
    ],
    ctaLabel: "Set up anti-theft protection",
  },
  {
    slug: "secure-company-phones-small-teams",
    title: "How Small Teams Can Secure Company Phones the Right Way",
    description:
      "A business device management guide for inventory, policy, and lawful company phone security.",
    excerpt:
      "Small businesses can reduce support headaches and data risk by treating company phones as managed assets instead of personal devices.",
    category: "Business Security",
    publishedAt: "2026-06-08",
    readingTime: "8 min read",
    keywords: [
      "business device management",
      "company phones",
      "mobile security policy",
      "remote wipe",
    ],
    sections: [
      {
        heading: "Create a device inventory first",
        paragraphs: [
          "Before adding controls, list every managed phone, who uses it, and what it is allowed to access.",
          "That inventory becomes the foundation for policy, support, and recovery.",
        ],
      },
      {
        heading: "Define what the company owns and what the employee controls",
        paragraphs: [
          "A clear ownership policy prevents confusion about backups, app installs, and account access.",
          "It also supports lawful notice and consistent management when devices change hands.",
        ],
        bullets: [
          "Approved apps list",
          "Lock and wipe readiness",
          "Backup and return rules",
        ],
      },
      {
        heading: "Review devices monthly",
        paragraphs: [
          "Monthly reviews help spot outdated software, missing backups, and gaps in the policy before they become incidents.",
        ],
      },
    ],
    takeaways: [
      "Inventory every managed phone.",
      "Separate company ownership from personal use.",
      "Review policies and backups monthly.",
    ],
    ctaLabel: "Book a device management audit",
  },
  {
    slug: "wordpress-security-basics-small-business",
    title: "WordPress Security Basics for Small Businesses",
    description:
      "Practical WordPress security advice for small businesses that want a faster, safer website and fewer maintenance surprises.",
    excerpt:
      "A secure business website starts with updates, backups, least-privilege access, and a simple recovery plan.",
    category: "Web Development",
    publishedAt: "2026-06-08",
    readingTime: "7 min read",
    keywords: [
      "WordPress security",
      "small business website security",
      "website backups",
      "managed IT",
    ],
    sections: [
      {
        heading: "Keep the core, themes, and plugins updated",
        paragraphs: [
          "Outdated components are one of the easiest ways a WordPress site gets compromised. Updates should be part of the maintenance routine, not an occasional task.",
        ],
      },
      {
        heading: "Back up before every major change",
        paragraphs: [
          "Reliable backups protect your site when a plugin update breaks the layout or a security issue appears.",
          "Backups are especially useful for businesses that rely on their website for leads and bookings.",
        ],
      },
      {
        heading: "Limit admin access",
        paragraphs: [
          "Only people who need to manage the site should have elevated access. The fewer admin accounts, the lower the risk.",
        ],
      },
    ],
    takeaways: [
      "Update your website regularly.",
      "Back up before major changes.",
      "Keep admin access limited.",
    ],
    ctaLabel: "Request website hardening",
  },
];

export const blogCategories = Array.from(
  new Set(blogPosts.map((post) => post.category)),
);

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
