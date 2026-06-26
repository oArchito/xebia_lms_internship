import React from 'react';
import { FaClock, FaBookOpen } from 'react-icons/fa';
import Card from '../common/Card';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';

const SimpleCourses = () => {
  const featuredCourses = [
    {
      title: 'Production Kubernetes & GitOps',
      level: 'Advanced',
      duration: '16 Hours',
      labs: '12 Labs',
      instructor: 'Priya Nair (CNCF Ambassador)',
      description: 'Deploy and secure enterprise-grade EKS clusters. Master multi-tenant continuous delivery pipelines using GitOps with ArgoCD and Helm.'
    },
    {
      title: 'HashiCorp Terraform at Scale',
      level: 'Intermediate',
      duration: '12 Hours',
      labs: '8 Labs',
      instructor: 'Sarah Jenkins (AWS Champion)',
      description: 'Structure multi-environment infrastructure as code. Master remote state locking, custom module design, policy validation, and CI/CD pipelines.'
    },
    {
      title: 'Generative AI & LLMOps on AWS',
      level: 'Advanced',
      duration: '18 Hours',
      labs: '14 Labs',
      instructor: 'Alexandre Dupont (AI Advisory Lead)',
      description: 'Fine-tune and serve open-source foundation models. Configure parameter-efficient adapter parameters, SageMaker endpoints, and pgvector RAG pipelines.'
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50 border-t border-purple-100/40">
      <Container>
        {/* Section Header */}
        <SectionTitle
          title="Featured Learning Pathways"
          subtitle="Enterprise-grade training co-authored by working consultants. Includes sandbox credentials."
          center
        />

        {/* Simplified Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {featuredCourses.map((course, idx) => (
            <Card
              key={idx}
              hoverEffect={true}
              className="h-full flex flex-col p-8 border border-purple-100 bg-white"
            >
              {/* Difficulty badge */}
              <div className="mb-4">
                <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg ${
                  course.level === 'Advanced'
                    ? 'bg-red-50 text-red-600 border border-red-100'
                    : 'bg-yellow-50 text-yellow-700 border border-yellow-100'
                }`}>
                  {course.level}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 font-poppins mb-2">
                {course.title}
              </h3>

              {/* Meta */}
              <div className="flex items-center gap-3 text-xs font-poppins text-gray-400 mb-4 select-none">
                <span className="flex items-center gap-1">
                  <FaClock className="text-purple-400" />
                  {course.duration}
                </span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span className="flex items-center gap-1">
                  <FaBookOpen className="text-accent-500" />
                  {course.labs}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm font-poppins text-gray-500 font-light leading-relaxed mb-6 flex-grow">
                {course.description}
              </p>

              {/* Instructor */}
              <p className="text-xs font-semibold text-purple-700 font-poppins mb-6">
                Instructor: {course.instructor}
              </p>

              {/* Action Button */}
              <a
                href="/login"
                className="w-full text-center py-3 bg-primary-600 hover:bg-primary-700 text-white font-poppins font-bold text-xs tracking-wider uppercase transition-colors"
              >
                Enroll Now
              </a>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SimpleCourses;
