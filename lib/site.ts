export const SITE = {
  doctor: {
    name: "Samuel Howard, D.O.",
    shortName: "Dr. Howard",
    credentials:
      "Board-eligible Orthopedic Surgeon, fellowship-trained in Orthopedic Sports Medicine",
    degree: "D.O.",
  },
  phone: {
    display: "(586) 469-8300",
    href: "tel:+15864698300",
  },
  booking: {
    url: "https://macomborthopedics.com",
    label: "Book a visit",
    onlineLabel: "Book online",
  },
  hours: [
    { day: "Monday", dayShort: "Mon", open: "8:30a", close: "4:00p" },
    { day: "Tuesday", dayShort: "Tue", open: "8:00a", close: "4:30p" },
    { day: "Wednesday", dayShort: "Wed", open: "8:30a", close: "4:00p" },
    { day: "Thursday", dayShort: "Thu", open: "8:00a", close: "4:00p" },
    { day: "Friday", dayShort: "Fri", open: "8:30a", close: "4:00p" },
  ],
  inClinicDays: ["Monday", "Thursday"] as const,
  partnersNote:
    "On Tuesdays, Wednesdays, and Fridays, Dr. Howard's partners are in the office.",
  inClinicNote:
    "Dr. Howard sees patients in clinic on Mondays and Thursdays. Other days, his partners at Macomb Orthopedics cover the office.",
  specialtiesIntro:
    "Arthroscopic, minimally invasive surgery for shoulder, elbow, and knee. Fellowship training in Orthopedic Sports Medicine means fewer procedures, performed more often.",
  specialties: [
    {
      title: "Shoulder",
      conditions: [
        "Rotator cuff tears",
        "Labrum tears",
        "Shoulder instability and dislocation",
        "Biceps ruptures",
        "Total shoulder replacement",
      ],
    },
    {
      title: "Knee",
      conditions: [
        "ACL, PCL, LCL, and MCL reconstruction",
        "Meniscus tears",
        "Patella dislocations",
        "Cartilage injury",
        "Quadriceps and patellar tendon ruptures",
        "Total knee replacement",
      ],
    },
    {
      title: "Elbow",
      conditions: ["Elbow dislocations", "Arthroscopic elbow procedures"],
    },
    {
      title: "Ankle & Foot",
      conditions: ["Achilles ruptures", "Ankle sprains"],
    },
    {
      title: "Fractures & Trauma",
      conditions: ["All fracture care", "Acute sports and traumatic injuries"],
    },
  ],
  // TODO(client): Replace with confirmed Macomb Orthopedics office address
  address: {
    line1: "240 North Athletic Way",
    line2: "Suite 410",
    cityStateZip: "Indianapolis, IN 46204",
  },
} as const

export const PHONE_DISPLAY = SITE.phone.display
export const PHONE_HREF = SITE.phone.href

export function formatOfficeHoursLine(
  entry: (typeof SITE.hours)[number],
): string {
  return `${entry.dayShort} ${entry.open}–${entry.close}`
}
