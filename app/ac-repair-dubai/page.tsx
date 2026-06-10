import { internalLinks } from "@/lib/internalLinks"

export const metadata = {
  title: "AC Repair Dubai | 24/7 Emergency AC Repair Services",
  description:
    "Professional AC Repair Dubai services. Same-day AC repair, maintenance and installation across Dubai.",
}

export default function ACRepairPage() {
  return (
    <main className="container mx-auto px-4 py-10">

      <h1>AC Repair Dubai</h1>

      <p>
        We provide professional AC Repair Dubai services across all major areas.
        Our expert technicians handle split AC, central AC, and emergency breakdowns
        with fast response time.
      </p>

      <p>
        We serve Dubai Marina, JLT, Deira, Business Bay, and surrounding areas
        with 24/7 support.
      </p>

      <h2>Our Services</h2>

      <ul>
        <li>AC Repair</li>
        <li>AC Maintenance</li>
        <li>AC Installation</li>
      </ul>

      {/* Related Services */}
      <h2>Related Services</h2>

      <div>
        {internalLinks?.acRepair?.map((item, index) => (
          <a
            key={index}
            href={item.url}
            style={{
              display: "block",
              margin: "8px 0",
              color: "#2563eb",
              textDecoration: "underline",
            }}
          >
            {item.title}
          </a>
        ))}
      </div>

    </main>
  )
}
