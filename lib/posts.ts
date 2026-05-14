export type Post = {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  image: string
  body: string[]
}

export const POSTS: Post[] = [
  {
    slug: "acl-return-to-sport",
    title: "Return to sport after ACL reconstruction: what the timeline actually looks like",
    excerpt:
      "Nine months is a number, not a milestone. Here&apos;s the framework we use to decide when an athlete is genuinely ready.",
    date: "March 14, 2026",
    readTime: "7 min read",
    category: "Knee",
    image: "/athlete-running-track-rehabilitation--editorial.jpg",
    body: [
      "The most common question I get after an ACL reconstruction is the most reasonable one: when can I play again? The honest answer is that calendar time is the least useful predictor of readiness. Strength, neuromuscular control, and movement quality matter far more &mdash; and they don&apos;t graduate on a schedule.",
      "In our practice, we use a series of objective benchmarks before clearing an athlete: limb symmetry above 90% on isokinetic testing, hop tests within 10% of the uninvolved side, and a movement screen that holds up under fatigue. These are not arbitrary thresholds. Athletes who clear them have substantially lower re-tear rates than those returned based on time alone.",
      "Most patients reach those benchmarks somewhere between seven and twelve months. Some take longer. A few are ready earlier, but rarely. The goal is not to rush the calendar &mdash; it&apos;s to make sure the next season isn&apos;t cut short by a re-injury that was preventable.",
      "If you&apos;re currently in rehab, the most important conversations are the ones happening with your physical therapist. Ask what your numbers look like. Ask what they want them to look like. The team you trust should give you specifics, not platitudes.",
    ],
  },
  {
    slug: "shoulder-instability-young-athletes",
    title: "Shoulder instability in young athletes: when to operate, when to wait",
    excerpt:
      "A first-time dislocation in a 16-year-old is a different problem than the same injury in a 35-year-old. The data is clearer than most patients realize.",
    date: "February 22, 2026",
    readTime: "6 min read",
    category: "Shoulder",
    image: "/baseball-pitcher-shoulder-anatomy-medical--editori.jpg",
    body: [
      "Roughly nine out of ten young athletes who dislocate a shoulder will do it again. That statistic, more than anything else, shapes how we think about surgical timing.",
      "The Bankart lesion &mdash; a tear of the labrum at the front of the shoulder &mdash; is what makes the joint structurally unstable after a first dislocation. Conservative management can be appropriate, but in patients under 25 who play contact or overhead sports, the recurrence rate without surgery is high enough that early stabilization is often the more durable choice.",
      "Surgical decision-making depends on the patient&apos;s sport, age, the appearance of the labrum on MRI, and whether there&apos;s any bone loss on the glenoid. We talk through every one of those factors before recommending an operation.",
    ],
  },
  {
    slug: "meniscus-repair-vs-removal",
    title: "Meniscus repair versus removal: why we save tissue whenever we can",
    excerpt:
      "Twenty years ago, most meniscus tears were trimmed. The long-term outcomes data has changed how we approach the same injury today.",
    date: "January 30, 2026",
    readTime: "5 min read",
    category: "Knee",
    image: "/knee-anatomy-medical-illustration--editorial.jpg",
    body: [
      "The meniscus is the knee&apos;s shock absorber. We&apos;ve known this for decades, but we&apos;ve only recently begun to act on it consistently in the operating room.",
      "When patients lose meniscus tissue &mdash; whether through injury or surgical removal &mdash; the cartilage underneath wears faster. That&apos;s not a hypothesis. It&apos;s what we see ten and twenty years out in patients who had aggressive meniscectomies in their twenties.",
      "Today, our default is to repair the tissue whenever the tear pattern and biology allow it. The recovery is longer than a simple trim, but the knee that comes out the other side is meaningfully healthier.",
    ],
  },
  {
    slug: "blood-flow-restriction-training",
    title: "Blood flow restriction training: a tool, not a miracle",
    excerpt:
      "BFR has earned its place in our rehab protocols, but it works best as one tool inside a larger program &mdash; not as a shortcut.",
    date: "December 12, 2025",
    readTime: "4 min read",
    category: "Rehabilitation",
    image: "/physical-therapy-rehabilitation-clinical--editoria.jpg",
    body: [
      "Blood flow restriction training uses a calibrated cuff to partially limit blood flow to a working muscle. The result is that lower loads can produce strength and hypertrophy gains closer to what you&apos;d see with much heavier weight.",
      "For post-operative patients who can&apos;t yet load a joint, that is genuinely useful. We use it routinely after knee and shoulder procedures. But BFR doesn&apos;t replace progressive overload &mdash; it bridges to it.",
    ],
  },
]

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug)
}
