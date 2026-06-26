import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClock, FaBookOpen, FaStar, FaChevronDown, FaChevronUp, FaSearch, FaTimes } from 'react-icons/fa';
import Card from '../common/Card';

const CourseCatalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchInputRef = useRef(null);
  
  // States
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCourseId, setExpandedCourseId] = useState(null);

  // Sync search state from URL search param
  useEffect(() => {
    const searchVal = searchParams.get('search');
    if (searchVal !== null) {
      setSearchQuery(searchVal);
      // Smooth scroll to catalog section
      const catalogEl = document.getElementById('courses');
      if (catalogEl) {
        catalogEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [searchParams]);

  const categories = ['All', 'Cloud Native', 'DevOps & SRE', 'AI & Data Engineering'];

  const courses = [
    {
      id: 'kubernetes',
      title: 'Production Kubernetes & GitOps',
      category: 'Cloud Native',
      duration: '16 Hours',
      level: 'Advanced',
      labs: '12 Sandbox Labs',
      rating: '4.9',
      reviewCount: 118,
      instructor: 'Priya Nair',
      role: 'CNCF Ambassador',
      description: 'Deploy and secure enterprise-grade EKS/GKE clusters. Master multi-tenant continuous delivery pipelines using GitOps with ArgoCD and Helm.',
      syllabus: [
        'AWS EKS / GKE Control Plane & Worker Node Architectures',
        'Ingress-NGINX Controllers, TLS Certificates via Let\'s Encrypt, and ExternalDNS',
        'ArgoCD GitOps deployment patterns, ApplicationSets, and Rollouts',
        'Kubernetes NetworkPolicies, Calico Security, and CIS Benchmarks',
        'Multi-cluster Config Management and Secret Management with External Secrets Operator'
      ]
    },
    {
      id: 'terraform',
      title: 'HashiCorp Terraform at Scale',
      category: 'DevOps & SRE',
      duration: '12 Hours',
      level: 'Intermediate',
      labs: '8 Sandbox Labs',
      rating: '4.8',
      reviewCount: 94,
      instructor: 'Sarah Jenkins',
      role: 'AWS Community Hero',
      description: 'Structure multi-environment infrastructure-as-code securely. Master remote backend locking, custom provider design, and GitHub Actions automation.',
      syllabus: [
        'Terraform Architecture, Directed Acyclic Graph (DAG), and State Internals',
        'Writing DRY reusable modules with complex variables and outputs',
        'Terragrunt structures for multi-region and multi-account automation',
        'IAM role delegation, VPC design, and secure security group modules',
        'Policy-as-Code validation using Sentinel, OPA, and tfsec in CI/CD'
      ]
    },
    {
      id: 'llama3',
      title: 'Generative AI & LLMOps on AWS',
      category: 'AI & Data Engineering',
      duration: '18 Hours',
      level: 'Advanced',
      labs: '14 Sandbox Labs',
      rating: '4.9',
      reviewCount: 76,
      instructor: 'Alexandre Dupont',
      role: 'Generative AI Advisory Lead',
      description: 'Fine-tune, evaluate, and serve open-source LLMs like Llama 3. Implement parameter-efficient fine-tuning (LoRA), QLoRA, and custom vector databases.',
      syllabus: [
        'Introduction to LLM weight structures and Prompt Engineering models',
        'Parameter Efficient Fine-Tuning (PEFT) and LoRA Adapter mechanics',
        'Quantization theory (QLoRA) and multi-GPU memory optimization',
        'Deploying scalable SageMaker Real-Time endpoints with Triton Inference Server',
        'Retrieval-Augmented Generation (RAG) implementation with pgvector and LangChain'
      ]
    },
    {
      id: 'aws',
      title: 'AWS Cloud Practitioner & Architecture',
      category: 'Cloud Native',
      duration: '8 Hours',
      level: 'Beginner',
      labs: '6 Sandbox Labs',
      rating: '4.7',
      reviewCount: 215,
      instructor: 'Sarah Jenkins',
      role: 'AWS Community Hero',
      description: 'Kickstart your cloud-native journey. Understand AWS core architectures (EC2, VPC, S3, RDS, IAM) through highly practical hands-on exercises.',
      syllabus: [
        'Global Infrastructure, Regions, Availability Zones, and Shared Responsibility',
        'Compute Foundations: EC2 provisioning, EBS volumes, and AMI builds',
        'Scalable Storage: Amazon S3 buckets, lifecycle policies, and versioning',
        'Identity & Access Management (IAM): Users, groups, roles, and JSON policies',
        'Database architectures: Relational (RDS Aurora) vs. NoSQL (DynamoDB)'
      ]
    },
    {
      id: 'sre',
      title: 'Site Reliability Engineering (SRE) Masterclass',
      category: 'DevOps & SRE',
      duration: '14 Hours',
      level: 'Advanced',
      labs: '10 Sandbox Labs',
      rating: '4.8',
      reviewCount: 82,
      instructor: 'Priya Nair',
      role: 'CNCF Ambassador',
      description: 'Define service level objectives (SLOs) and build advanced observability. Configure custom Prometheus alert managers, Grafana boards, and chaos pipelines.',
      syllabus: [
        'Drafting actionable Service Level Indicators (SLIs) and Error Budgets',
        'Prometheus architecture, scraping metrics, and writing complex PromQL queries',
        'Designing dashboard grids in Grafana and implementing alerting webhooks',
        'Distributed tracing setups with OpenTelemetry, Jaeger collectors, and W3C trace contexts',
        'Chaos Engineering principles and executing automated chaos runs with Chaos Mesh'
      ]
    },
    {
      id: 'typescript',
      title: 'Modern Enterprise Backend Architectures',
      category: 'AI & Data Engineering',
      duration: '10 Hours',
      level: 'Intermediate',
      labs: '8 Sandbox Labs',
      rating: '4.8',
      reviewCount: 104,
      instructor: 'Alexandre Dupont',
      role: 'Generative AI Advisory Lead',
      description: 'Build robust enterprise microservices using TypeScript, NestJS, and PostgreSQL. Implement production JWT auth, RabbitMQ event brokers, and Redis caching.',
      syllabus: [
        'NestJS modular architectures, Dependency Injection, and custom pipes',
        'Database modeling, migrations, and repository patterns using Prisma & PostgreSQL',
        'Secure authorization pipelines using JWT and Passport.js passport-local strategies',
        'Asynchronous event-driven messaging pipelines using RabbitMQ queues',
        'Scaling reads and rate limiting microservices using Redis caching layers'
      ]
    }
  ];

  // Handle Search submit / URL update
  const updateSearchParam = (value) => {
    if (value.trim()) {
      setSearchParams({ search: value.trim() });
    } else {
      setSearchParams({});
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    updateSearchParam(searchQuery);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchParams({});
    if (searchInputRef.current) searchInputRef.current.focus();
  };

  // Filter logic
  const filteredCourses = courses.filter((course) => {
    const matchesCategory = activeCategory === 'All' || course.category === activeCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleSyllabus = (courseId) => {
    if (expandedCourseId === courseId) {
      setExpandedCourseId(null);
    } else {
      setExpandedCourseId(courseId);
    }
  };

  return (
    <section id="courses" className="py-24 bg-[#FAF7FF]/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-poppins font-black tracking-widest text-primary-600 uppercase px-3.5 py-1.5 bg-primary-50 rounded-full border border-primary-100">
            Course Catalog
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-poppins mt-4 text-gray-900 leading-tight">
            Co-authored by <br />
            <span className="text-primary-600">Enterprise Consultants</span>
          </h2>
          <p className="mt-4 text-sm font-poppins text-gray-500 font-medium">
            Browse our targeted engineering tracks. Each curriculum comes with dedicated sandbox credentials and graded lab terminals.
          </p>
        </div>

        {/* Filter and Search Bar Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12 bg-white p-5 border border-purple-100/50 shadow-sm rounded-2xl">
          
          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setExpandedCourseId(null);
                }}
                className={`px-4 py-2 text-xs font-poppins font-bold uppercase tracking-wider rounded-xl transition-all ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white shadow-md shadow-primary-600/20'
                    : 'bg-gray-50 text-gray-500 hover:bg-purple-50 hover:text-primary-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <form onSubmit={handleSearchSubmit} className="relative w-full lg:w-96 flex items-center">
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                // Dynamically filter as user types, but only write to URL occasionally
                if (e.target.value === '') {
                  setSearchParams({});
                }
              }}
              placeholder="Search courses or skills..."
              className="w-full pl-11 pr-10 py-3 bg-gray-50 border border-gray-200 focus:border-primary-300 font-poppins text-sm rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-500 transition-all text-gray-800 placeholder-gray-400"
            />
            <span className="absolute left-4 text-gray-400">
              <FaSearch className="w-3.5 h-3.5" />
            </span>
            {searchQuery && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                <FaTimes className="w-3.5 h-3.5" />
              </button>
            )}
          </form>

        </div>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredCourses.map((course) => {
                const isExpanded = expandedCourseId === course.id;
                return (
                  <motion.div
                    layout
                    key={course.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card
                      hoverEffect={!isExpanded}
                      className="h-full flex flex-col items-stretch p-7 border border-purple-50/50 hover:border-purple-200/80 bg-white"
                    >
                      {/* Top metadata badges */}
                      <div className="flex items-center justify-between mb-4">
                        <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg ${
                          course.level === 'Advanced'
                            ? 'bg-red-50 text-red-600 border border-red-100'
                            : course.level === 'Intermediate'
                            ? 'bg-yellow-50 text-yellow-700 border border-yellow-100'
                            : 'bg-green-50 text-green-600 border border-green-100'
                        }`}>
                          {course.level}
                        </span>
                        <div className="flex items-center gap-1 text-xs font-semibold text-yellow-500 font-poppins">
                          <FaStar className="w-3 h-3 fill-current" />
                          <span>{course.rating}</span>
                          <span className="text-gray-400 font-light font-sans">({course.reviewCount})</span>
                        </div>
                      </div>

                      {/* Course Title */}
                      <h3 className="text-xl font-bold text-gray-900 font-poppins mb-2.5 leading-snug">
                        {course.title}
                      </h3>

                      {/* Summary details */}
                      <div className="flex items-center gap-4 text-xs font-poppins text-gray-400 mb-4 select-none">
                        <span className="flex items-center gap-1.5">
                          <FaClock className="w-3.5 h-3.5 text-purple-400" />
                          {course.duration}
                        </span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="flex items-center gap-1.5">
                          <FaBookOpen className="w-3.5 h-3.5 text-accent-500" />
                          {course.labs}
                        </span>
                      </div>

                      {/* Course short description */}
                      <p className="text-sm font-poppins text-gray-500 font-light leading-relaxed mb-6 flex-grow">
                        {course.description}
                      </p>

                      {/* Separator line */}
                      <div className="border-t border-purple-50/60 my-4"></div>

                      {/* Instructor Avatar Block */}
                      <div className="flex items-center gap-3.5 mb-5 select-none">
                        {/* CSS Avatar placeholder */}
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-accent-500 text-white font-bold flex items-center justify-center text-sm font-poppins shadow-md shadow-purple-200">
                          {course.instructor.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-800 font-poppins leading-none mb-1">
                            {course.instructor}
                          </p>
                          <p className="text-[10px] text-purple-600 font-bold uppercase tracking-wider font-poppins">
                            {course.role}
                          </p>
                        </div>
                      </div>

                      {/* Expand Syllabus Button */}
                      <div className="w-full flex flex-col items-stretch gap-2.5">
                        <button
                          type="button"
                          onClick={() => toggleSyllabus(course.id)}
                          className="w-full py-2.5 border border-purple-100/60 hover:bg-purple-50 text-xs font-poppins font-bold text-primary-600 tracking-wider uppercase flex items-center justify-center gap-2 transition-colors select-none"
                        >
                          <span>{isExpanded ? 'Hide Syllabus' : 'View Syllabus'}</span>
                          {isExpanded ? <FaChevronUp className="w-2.5 h-2.5" /> : <FaChevronDown className="w-2.5 h-2.5" />}
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="w-full overflow-hidden"
                            >
                              <div className="bg-purple-50/50 p-4 border border-purple-100/40 mt-2">
                                <p className="text-[10px] font-bold text-primary-600 uppercase tracking-widest mb-3">Syllabus Overview</p>
                                <ul className="flex flex-col gap-2.5">
                                  {course.syllabus.map((topic, i) => (
                                    <li key={i} className="text-xs font-poppins text-gray-600 font-light flex items-start gap-2 leading-relaxed">
                                      <span className="text-accent-500 font-bold mt-0.5 select-none">✓</span>
                                      <span>{topic}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                        
                        <a
                          href="/login"
                          className="w-full text-center py-3 bg-primary-600 hover:bg-primary-700 text-white font-poppins font-bold text-xs tracking-wider uppercase shadow-md shadow-purple-200 transition-colors"
                        >
                          Enroll in Sandbox Path
                        </a>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-20 bg-white border border-purple-100/50 rounded-2xl max-w-md mx-auto p-8 shadow-sm">
            <p className="text-lg font-bold text-gray-800 font-poppins mb-2">No courses found</p>
            <p className="text-sm font-poppins text-gray-500 font-light leading-relaxed mb-6">
              We couldn't find any courses matching your search query "{searchQuery}". Try selecting other filters or type another keyword.
            </p>
            <button
              onClick={clearSearch}
              className="px-6 py-2.5 bg-primary-600 text-white text-xs font-poppins font-bold tracking-wider uppercase rounded-xl shadow-md"
            >
              Clear Search
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default CourseCatalog;
