import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import Card from '../common/Card';

const Testimonials = () => {
  const reviews = [
    {
      quote: "The interactive cloud sandboxes were an absolute game-changer for us. We transitioned our group of 35 developers from VM-based workflows to Kubernetes and ArgoCD in just six weeks, with zero local setup friction.",
      author: "Marcus Vance",
      role: "VP of Engineering",
      company: "FinTech Payments Group",
      rating: 5,
      avatarInitials: "MV"
    },
    {
      quote: "Most online courses teach basic hello-world configurations. Xebia's Terraform track gets into real multi-account state locking, Terragrunt, and OPA policies. You can tell it is written by consultants who deal with enterprise scale daily.",
      author: "Helena Rostova",
      role: "Lead DevSecOps Architect",
      company: "Aero Logistics Digital",
      rating: 5,
      avatarInitials: "HR"
    },
    {
      quote: "The LLMOps track was exactly what my data team needed. Deploying real Llama 3 models on AWS SageMaker endpoints and setting up Vector databases directly inside the sandbox saved us weeks of prototyping.",
      author: "Amit Patel",
      role: "Lead Machine Learning Engineer",
      company: "Veridian AI Health",
      rating: 5,
      avatarInitials: "AP"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-purple-50/20 to-[#FAF7FF]/40 border-t border-purple-100/40">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-poppins font-black tracking-widest text-accent-500 uppercase px-3.5 py-1.5 bg-accent-50 rounded-full border border-accent-100">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-poppins mt-4 text-gray-900 leading-tight">
            Loved by <br />
            <span className="text-primary-600">Engineering Teams</span>
          </h2>
          <p className="mt-4 text-sm font-poppins text-gray-500 font-medium">
            See how individual developers and enterprise teams leverage our sandboxes to ship secure cloud-native apps.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <Card
              key={idx}
              hoverEffect={true}
              className="flex flex-col p-8 border border-purple-100/50 bg-white shadow-sm relative h-full justify-between"
            >
              {/* Quote icon bubble */}
              <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 mb-6 select-none border border-purple-100/40">
                <FaQuoteLeft className="w-3.5 h-3.5" />
              </div>

              {/* Quote copy */}
              <p className="text-sm font-poppins text-gray-600 font-light leading-relaxed mb-8 flex-grow italic">
                "{review.quote}"
              </p>

              {/* Rating and Author details */}
              <div className="mt-auto">
                <div className="flex items-center gap-1 mb-4 text-yellow-500 select-none">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                
                <div className="flex items-center gap-3.5 select-none">
                  {/* CSS Circle Avatar */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-200 to-purple-100 text-purple-700 font-bold flex items-center justify-center text-sm font-poppins border border-purple-300">
                    {review.avatarInitials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 font-poppins leading-none mb-1">
                      {review.author}
                    </h4>
                    <p className="text-[11px] font-poppins text-gray-500 font-light">
                      {review.role}, <span className="font-semibold text-primary-600">{review.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
