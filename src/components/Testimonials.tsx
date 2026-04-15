import React from 'react';
import { FormattedMessage } from 'react-intl';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    feedback: 'An absolutely magical day exploring hidden beaches and crystal-clear waters. The guides were knowledgeable and made us feel like VIPs throughout!',
    location: 'Toronto, Canada',
    avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
  {
    name: 'Carlos Mendoza',
    feedback: 'The catamaran sunset cruise exceeded all expectations. Perfect blend of relaxation, adventure, and breathtaking Caribbean scenery.',
    location: 'Buenos Aires, Argentina',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Emma Larsson',
    feedback: 'Snorkeling in the coral reefs was like entering another world! Professional crew, pristine equipment, and unforgettable marine life encounters.',
    location: 'Stockholm, Sweden',
    avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
  },
  {
    name: 'James O\'Brien',
    feedback: 'The jungle safari and waterfall tour was the highlight of our vacation. Authentic, thrilling, and beautifully organized from start to finish.',
    location: 'Dublin, Ireland',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="section-shell">
        <h2 className="mb-12 text-center text-5xl font-bold text-slate-900">
          <FormattedMessage id="testimonials.title" />
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <article key={index} className="glass-card rounded-3xl p-6">
              <div className="mb-5 flex items-center gap-3">
                <img src={testimonial.avatar} alt={testimonial.name} className="h-12 w-12 rounded-full border-2 border-teal-500" />
                <div>
                  <h3 className="font-semibold text-slate-900">{testimonial.name}</h3>
                  <p className="text-sm text-slate-500">{testimonial.location}</p>
                </div>
              </div>
              <p className="italic text-slate-600">"{testimonial.feedback}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
