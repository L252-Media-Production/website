import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Production | L252 Media Production",
  description:
    "Professional event production for churches and businesses — sound, lighting, and visuals for concerts, conferences, and special celebrations.",
};

export default function EventProductionPage() {
  return (
    <ServicePage
      title="Event Production"
      tagline="Bring your events to life with professional sound, lighting, and visuals that create moments people remember."
      description="Whether you're hosting a worship concert, corporate conference, community celebration, or special service, our event production team ensures everything runs smoothly. We handle the full technical picture — audio mixing, stage lighting, video projection, and on-site coordination — so you can focus on your audience and your message. We serve churches and businesses alike, bringing the same level of care and professionalism to every event."
      highlights={[
        {
          heading: "Live Sound Mixing",
          body: "Experienced audio engineers managing front-of-house and monitor mixes for bands, speakers, and hybrid formats.",
        },
        {
          heading: "Stage Lighting Design",
          body: "Dynamic lighting that sets the right tone — from vibrant concert atmospheres to polished corporate presentations.",
        },
        {
          heading: "Video & Projection",
          body: "Live IMAG, lyrics, slides, and video playback managed with precision to keep your audience engaged.",
        },
        {
          heading: "Livestream Production",
          body: "Multi-camera live broadcasts with graphics, transitions, and reliable streaming so your remote audience feels present.",
        },
        {
          heading: "Equipment Rental & Setup",
          body: "We bring the gear your event needs — microphones, speakers, lighting rigs, cameras — and set it all up.",
        },
        {
          heading: "On-Site Technical Support",
          body: "Our crew stays for the duration of your event, handling troubleshooting and adjustments in real time.",
        },
      ]}
      heroImage="/images/event-production.jpg"
      ctaText="Let's make your next event unforgettable."
    />
  );
}
