export const SITE = {
  doctor: {
    name: "Samuel Howard, D.O.",
    shortName: "Dr. Howard",
    fullName: "Dr. Samuel Howard",
    credentials:
      "Board-eligible Orthopedic Surgeon, fellowship-trained in Orthopedic Sports Medicine",
    degree: "D.O.",
    googleBio:
      "Dr. Samuel Howard is a fellowship-trained Orthopedic Sports Medicine surgeon, specializing in minimally invasive arthroscopic surgery of the shoulder, knee, and elbow, as well as total and reverse shoulder replacements. He performs a wide range of advanced procedures, including rotator cuff repair, shoulder instability surgery, SLAP and labral repairs, biceps tenodesis, ACL reconstruction, meniscus repair or meniscectomy, MPFL reconstruction, and cartilage restoration procedures. Dr. Howard also offers expert non-surgical care for common conditions such as patellar tendinitis, Achilles tendinitis, frozen shoulder, trochanteric bursitis, joint sprains, and fractures.",
    shortBio:
      "Dr. Samuel Howard is a fellowship-trained Orthopedic Sports Medicine surgeon specializing in minimally invasive arthroscopic surgery of the shoulder, knee, and elbow, as well as total and reverse shoulder replacements. He offers expert surgical and non-surgical care for patients across Metro Detroit.",
    backgroundBio: [
      "Dr. Howard was born and raised in Oxford, MI. He received his Bachelor of Science in Biology from Oakland University and then went on to earn his medical degree from Michigan State University College of Osteopathic Medicine. He successfully completed his residency in orthopedic surgery at McLaren Oakland Hospital before completing a fellowship in orthopedic sports medicine at Beacon Orthopaedics and Sports Medicine in Cincinnati.",
      "During his fellowship, Dr. Howard provided care for all levels of athletes. He served as an associate team physician for the Cincinnati Reds, Miami (OH) University Redhawks, Archbishop Moeller High School Crusaders, and Madeira High School Mustangs. After completing his fellowship, he decided to return home to Michigan with his wife and 3 children to serve the community he grew up in.",
      "Whether in clinic or at home, Dr. Howard applies the same energy, commitment, and focus to his patients as he does to his family and life.",
    ],
  },
  practiceName: "Macomb Orthopedics",
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
  areasServed: [
    "Clinton Township",
    "Macomb County",
    "Metro Detroit",
    "Sterling Heights",
    "Shelby Township",
    "Troy",
  ],
  localSeoBlurb:
    "Orthopedic sports medicine in Clinton Township, serving Metro Detroit and Macomb County.",
  specialtiesIntro:
    "Dr. Samuel Howard is a fellowship-trained Orthopedic Sports Medicine surgeon specializing in minimally invasive arthroscopic surgery of the shoulder, knee, and elbow. Serving patients across Metro Detroit and Macomb County.",
  specialties: [
    {
      title: "Shoulder",
      conditions: [
        "Rotator cuff tears and repair",
        "Shoulder instability and dislocation surgery",
        "SLAP and labral repairs",
        "Biceps tenodesis",
        "Frozen shoulder",
        "Total and reverse shoulder replacement",
      ],
    },
    {
      title: "Knee",
      conditions: [
        "ACL reconstruction",
        "Meniscus repair and meniscectomy",
        "MPFL reconstruction",
        "Cartilage restoration",
        "Patellar tendinitis",
        "Patella dislocations",
      ],
    },
    {
      title: "Elbow",
      conditions: [
        "Elbow instability",
        "Arthroscopic elbow procedures",
        "Elbow dislocations",
      ],
    },
    {
      title: "Sports injuries",
      conditions: [
        "Joint sprains and strains",
        "Acute sports injuries",
        "Return-to-sport care",
      ],
    },
    {
      title: "Non-surgical care",
      conditions: [
        "Achilles tendinitis",
        "Trochanteric bursitis",
        "Frozen shoulder",
        "Patellar tendinitis",
        "Fractures and joint sprains",
      ],
    },
  ],
  education: [
    {
      label: "Undergrad",
      institution: "Oakland University",
      detail: "Bachelor of Science in Biology",
    },
    {
      label: "Med School",
      institution: "Michigan State University College of Osteopathic Medicine",
      detail: "Doctor of Osteopathic Medicine",
    },
    {
      label: "Residency",
      institution: "McLaren Oakland Hospital",
      detail: "Orthopedic Surgery",
    },
    {
      label: "Fellowship",
      institution: "Beacon Orthopaedics and Sports Medicine",
      detail: "Orthopedic Sports Medicine",
    },
  ],
  memberships: [
    "American Academy of Orthopedic Surgeons (AAOS)",
    "American Orthopaedic Society for Sports Medicine (AOSSM)",
    "American Osteopathic Academy of Orthopedics (AOAO)",
    "Arthroscopy Association of North America (AANA)",
    "American Osteopathic Association (AOA)",
  ],
  address: {
    line1: "38525 Hilldale Street",
    line2: "",
    city: "Clinton Township",
    state: "MI",
    zip: "48036",
    cityStateZip: "Clinton Township, MI 48036",
  },
  geo: {
    latitude: 42.5869,
    longitude: -82.911,
  },
} as const

export const PHONE_DISPLAY = SITE.phone.display
export const PHONE_HREF = SITE.phone.href

export function formatOfficeHoursLine(
  entry: (typeof SITE.hours)[number],
): string {
  return `${entry.dayShort} ${entry.open}–${entry.close}`
}

export function formatFullAddress(): string {
  const { line1, line2, cityStateZip } = SITE.address
  return line2 ? `${line1}, ${line2}, ${cityStateZip}` : `${line1}, ${cityStateZip}`
}
