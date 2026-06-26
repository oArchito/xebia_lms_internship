import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaAward } from 'react-icons/fa';
import Card from '../common/Card';

const Instructors = () => {
  const consultants = [
    {
      name: 'Sarah Jenkins',
      title: 'Principal Cloud Architect',
      specialty: 'AWS Champion & Terraform Specialist',
      bio: 'Over 12 years of enterprise cloud migration experience. Former AWS Solutions Architect, specialized in zero-trust VPC designs, cross-region IaC, and automated policy guardrails.',
      initials: 'SJ',
      gradient: 'from-purple-600 to-indigo-500',
      badge: 'AWS Ambassador'
    },
    {
      name: 'Alexandre Dupont',
      title: 'Lead AI/ML Consultant',
      specialty: 'LLMOps & High-Performance Computing',
      bio: 'Ex-Google Brain engineer. Leads Xebia\'s generative AI enterprise integration advisory. Specialized in model serving platforms, Triton inference hosting, and low-latency vector databases.',
      initials: 'AD',
      gradient: 'from-accent-500 to-teal-500',
      badge: 'Ex-Google Brain'
    },
    {
      name: 'Priya Nair',
      title: 'Principal Kubernetes Architect',
      specialty: 'CNCF Ambassador & Security Core',
      bio: 'Kubernetes core contributor and CNCF Ambassador. Expert in cloud-native service mesh architectures (Istio/Linkerd), Kubernetes API development, and secure GitOps patterns.',
      initials: 'PN',
      gradient: 'from-orange-500 to-red-500',
      badge: 'CNCF Ambassador'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-poppins font-black tracking-widest text-purple-600 uppercase px-3 py-1 bg-purple-50 rounded-full">
            Expert Advisory
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-poppins mt-4 text-gray-900 leading-tight">
            Learn From Active <br />
            <span className="text-primary-600">Enterprise Consultants</span>
          </h2>
          <p className="mt-4 text-sm font-poppins text-gray-500 font-medium">
            Our curriculum is built and updated by practicing IT consultants who deploy production systems every single day.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {consultants.map((consultant, index) => (
            <Card
              key={index}
              hoverEffect={true}
              className="flex flex-col items-center text-center p-8 border border-purple-50 hover:border-purple-200/80 bg-[#FAF7FF]/30 h-full relative"
            >
              {/* Floating tech badge */}
              <span className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 bg-white border border-purple-100 text-[10px] font-poppins font-black uppercase text-purple-700 tracking-wider rounded-lg shadow-sm">
                <FaAward className="text-accent-500" />
                {consultant.badge}
              </span>

              {/* Avatar Bubble */}
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-tr ${consultant.gradient} text-white font-extrabold flex items-center justify-center text-2xl font-poppins shadow-lg shadow-purple-200 mb-6 mt-2 relative select-none`}>
                <span>{consultant.initials}</span>
                <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white" title="Active Consultant" />
              </div>

              {/* Identity */}
              <h3 className="text-xl font-bold text-gray-900 font-poppins mb-1">
                {consultant.name}
              </h3>
              <p className="text-sm font-bold text-primary-600 font-poppins mb-1">
                {consultant.title}
              </p>
              <p className="text-xs text-gray-400 font-poppins font-medium tracking-wide mb-6">
                {consultant.specialty}
              </p>

              {/* Bio */}
              <p className="text-sm font-poppins text-gray-500 font-light leading-relaxed mb-8 flex-grow">
                {consultant.bio}
              </p>

              {/* Social handles */}
              <div className="flex items-center gap-3 mt-auto select-none">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg border border-purple-100/60 bg-white hover:bg-purple-600 hover:text-white text-gray-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg border border-purple-100/60 bg-white hover:bg-purple-600 hover:text-white text-gray-400 transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-4 h-4" />
                </a>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Instructors;
