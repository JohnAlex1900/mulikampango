'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'Mulikampango gave us peace of mind. We can finally let our teenager have some independence while staying informed about their safety.',
    author: 'Sarah M.',
    role: 'Parent of 2',
    rating: 5,
  },
  {
    quote: 'The interface is so intuitive. Within minutes of setup, I could monitor my daughter\'s location and app usage. Highly recommended!',
    author: 'James L.',
    role: 'Single Parent',
    rating: 5,
  },
  {
    quote: 'Customer support is exceptional. When I had questions, they responded immediately. This is what great service looks like.',
    author: 'Michelle R.',
    role: 'Parent of 3',
    rating: 5,
  },
  {
    quote: 'The geofencing feature alone is worth it. I get alerts when my kids leave school, and it gives me so much peace of mind.',
    author: 'David T.',
    role: 'Parent of 1',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Parents Are Saying
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of families who already trust Mulikampango with their children's safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-white to-blue-50 border border-border hover:shadow-md transition-all"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div>
                <p className="font-bold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
