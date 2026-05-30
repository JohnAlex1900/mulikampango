'use client'

import { Camera, Cloud, Code2, Router, Server, Wifi } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Modern websites, dashboards, and business systems that support your digital operations.',
  },
  {
    icon: Camera,
    title: 'CCTV Installation',
    description: 'Camera planning, installation, configuration, and remote viewing support for homes and businesses.',
  },
  {
    icon: Wifi,
    title: 'Wi-Fi & Network Security',
    description: 'Router hardening, guest networks, password hygiene, and safer connectivity for shared spaces.',
  },
  {
    icon: Cloud,
    title: 'Cloud Backup Services',
    description: 'Secure backup planning for photos, contacts, documents, and business-critical data.',
  },
  {
    icon: Router,
    title: 'Smart Home Systems',
    description: 'Connected home setup with privacy-aware controls, access management, and security basics.',
  },
  {
    icon: Server,
    title: 'Managed IT Support',
    description: 'Ongoing device setup, troubleshooting, maintenance, and business technology support.',
  },
]

export function Testimonials() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center md:mb-16">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-primary">
            Growth services
          </p>
          <h2 className="mt-4 text-4xl font-black text-[#101042] sm:text-5xl">
            More Digital Protection Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Mulikamtoto grows beyond child monitoring into practical cybersecurity and technology support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
            <div
              key={index}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-50">
                <Icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="mb-2 text-lg font-black text-[#101042]">
                {service.title}
              </h3>
              <p className="text-sm leading-7 text-slate-600">
                {service.description}
              </p>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
