import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTerminal, FaCode, FaPlay, FaSyncAlt, FaCircle } from 'react-icons/fa';

const LiveLabPreview = () => {
  const [activeTab, setActiveTab] = useState('terraform');
  const [isRunning, setIsRunning] = useState(false);
  const [terminalLines, setTerminalLines] = useState(['xebia-sandbox:~ $ ']);
  const terminalEndRef = useRef(null);

  const labs = {
    terraform: {
      title: 'Infrastructure as Code',
      subtitle: 'Provision AWS VPC via Terraform HCL',
      language: 'hcl',
      code: `module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "5.1.0"

  name = "xebia-prod-vpc"
  cidr = "10.0.0.0/16"

  azs             = ["us-east-1a", "us-east-1b"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24"]

  enable_nat_gateway = true
  single_nat_gateway = true

  tags = {
    Environment = "production"
    Owner       = "xebia-infra-team"
  }
}`,
      commands: [
        { cmd: 'terraform init', delay: 1000 },
        { cmd: 'Initializing the backend...', delay: 600, type: 'info' },
        { cmd: 'Initializing provider plugins...', delay: 800, type: 'info' },
        { cmd: '✔ HashiCorp AWS provider v5.24.0 installed', delay: 400, type: 'success' },
        { cmd: 'Terraform has been successfully initialized!', delay: 600, type: 'success' },
        { cmd: 'terraform apply -auto-approve', delay: 1200 },
        { cmd: 'module.vpc.aws_vpc.this: Creating...', delay: 700, type: 'info' },
        { cmd: 'module.vpc.aws_internet_gateway.this: Creating...', delay: 600, type: 'info' },
        { cmd: 'module.vpc.aws_subnet.public[0]: Creating...', delay: 800, type: 'info' },
        { cmd: 'module.vpc.aws_route_table.public[0]: Creating...', delay: 500, type: 'info' },
        { cmd: 'module.vpc.aws_vpc.this: Creation complete after 3s [id=vpc-0a86bf671192e]', delay: 400, type: 'success' },
        { cmd: 'module.vpc.aws_internet_gateway.this: Creation complete after 1s', delay: 300, type: 'success' },
        { cmd: 'Apply complete! Resources: 12 added, 0 changed, 0 destroyed.', delay: 800, type: 'success' },
        { cmd: 'Outputs: vpc_id = "vpc-0a86bf671192e"', delay: 400, type: 'info' }
      ]
    },
    kubernetes: {
      title: 'Cloud Native GitOps',
      subtitle: 'Deploy ArgoCD Application Manifest',
      language: 'yaml',
      code: `apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: billing-api-gitops
  namespace: argocd
spec:
  project: default
  source:
    repoURL: 'https://github.com/xebia-learn/billing-api.git'
    targetRevision: HEAD
    path: deploy/helm
  destination:
    server: 'https://kubernetes.default.svc'
    namespace: billing-prod
  syncPolicy:
    automated:
      prune: true
      selfHeal: true`,
      commands: [
        { cmd: 'kubectl apply -f argocd-app.yaml', delay: 1000 },
        { cmd: 'application.argoproj.io/billing-api-gitops created', delay: 500, type: 'success' },
        { cmd: 'kubectl get application -n argocd', delay: 1100 },
        { cmd: 'NAME                 SYNC STATUS   HEALTH STATUS\nbilling-api-gitops   OutOfSync     Missing', delay: 600, type: 'info' },
        { cmd: 'argocd app sync billing-api-gitops', delay: 1300 },
        { cmd: 'Initiating sync operation for billing-api-gitops...', delay: 500, type: 'info' },
        { cmd: 'Syncing: Deployment/billing-api (created)', delay: 600, type: 'info' },
        { cmd: 'Syncing: Service/billing-api-svc (created)', delay: 400, type: 'info' },
        { cmd: 'Syncing: Ingress/billing-api-ingress (created)', delay: 500, type: 'info' },
        { cmd: 'argocd app wait billing-api-gitops', delay: 1200 },
        { cmd: 'STATUS: Synced\nHEALTH: Healthy\nMESSAGE: Pods are running with 3 healthy replicas.', delay: 800, type: 'success' },
        { cmd: 'Sync completed successfully! 🚀', delay: 400, type: 'success' }
      ]
    },
    python: {
      title: 'AI & Data Engineering',
      subtitle: 'Configure LoRA PEFT Adapter for Llama 3',
      language: 'python',
      code: `from transformers import AutoModelForCausalLM, AutoTokenizer
from peft import LoraConfig, get_peft_model

model_id = "meta-llama/Meta-Llama-3-8B"
tokenizer = AutoTokenizer.from_pretrained(model_id)
model = AutoModelForCausalLM.from_pretrained(
    model_id, device_map="auto"
)

peft_config = LoraConfig(
    r=16,
    lora_alpha=32,
    target_modules=["q_proj", "v_proj"],
    lora_dropout=0.05,
    bias="none",
    task_type="CAUSAL_LM"
)

model = get_peft_model(model, peft_config)
print("LoRA Adapter loaded successfully. Initializing training loop...")`,
      commands: [
        { cmd: 'python train_lora.py', delay: 1200 },
        { cmd: 'Loading Meta-Llama-3-8B tokenizer and weights...', delay: 900, type: 'info' },
        { cmd: 'Allocating weights to GPU (CUDA:0)... Done.', delay: 600, type: 'info' },
        { cmd: 'Applying PEFT LoRA adapter layers...', delay: 500, type: 'info' },
        { cmd: 'Number of trainable parameters: 3,407,872 (0.043% of total)', delay: 400, type: 'success' },
        { cmd: 'Epoch 1/3 [=====>....................] - Loss: 1.84 - Learning Rate: 2e-4', delay: 900, type: 'info' },
        { cmd: 'Epoch 2/3 [============>................] - Loss: 1.12 - Learning Rate: 1e-4', delay: 900, type: 'info' },
        { cmd: 'Epoch 3/3 [=========================>...] - Loss: 0.73 - Learning Rate: 1e-5', delay: 900, type: 'info' },
        { cmd: 'Adapter training completed. Evaluating checkpoints...', delay: 600, type: 'success' },
        { cmd: 'Saving adapter checkpoint to: ./outputs/lora_adapter_weights', delay: 500, type: 'success' }
      ]
    }
  };

  useEffect(() => {
    // Reset terminal when changing labs
    if (!isRunning) {
      setTerminalLines([`xebia-sandbox:~ $ `]);
    }
  }, [activeTab, isRunning]);

  useEffect(() => {
    // Scroll terminal to bottom
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalLines]);

  const runSimulation = async () => {
    if (isRunning) return;
    setIsRunning(true);
    setTerminalLines([]);

    const currentLab = labs[activeTab];
    let outputLines = [];

    for (let i = 0; i < currentLab.commands.length; i++) {
      const step = currentLab.commands[i];
      
      // If it's a command, prefix it with prompt
      if (!step.type) {
        outputLines.push(`xebia-sandbox:~ $ ${step.cmd}`);
        setTerminalLines([...outputLines]);
      } else {
        outputLines.push(step.cmd);
        setTerminalLines([...outputLines]);
      }
      
      await new Promise((resolve) => setTimeout(resolve, step.delay));
    }

    outputLines.push(`xebia-sandbox:~ $ `);
    setTerminalLines([...outputLines]);
    setIsRunning(false);
  };

  // Helper to color lines based on context
  const getLineStyle = (line) => {
    if (line.startsWith('xebia-sandbox:~ $')) {
      return 'text-purple-300 font-bold';
    }
    if (line.includes('✔') || line.includes('complete') || line.includes('Successfully') || line.includes('created') || line.includes('Healthy') || line.includes('completed') || line.includes('Saving')) {
      return 'text-accent-500 font-semibold';
    }
    if (line.includes('Creating') || line.includes('Initializing') || line.includes('Syncing') || line.includes('Epoch')) {
      return 'text-gray-300 font-light';
    }
    return 'text-gray-400 font-light';
  };

  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-poppins font-black tracking-widest text-accent-500 uppercase px-3 py-1 bg-accent-500/10 rounded-full">
            Interactive Playground
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-poppins mt-4 text-white leading-tight">
            Realistic Sandbox Labs. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-accent-500">
              Zero Setup Required.
            </span>
          </h2>
          <p className="mt-4 text-base font-poppins text-gray-400 font-light">
            Every lesson runs on real cloud clusters. Click through the tabs below and execute the simulation to experience the active terminal environment.
          </p>
        </div>

        {/* Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Selector Tabs (Columns 1-4) */}
          <div className="lg:col-span-4 flex flex-col gap-4 justify-center">
            {Object.keys(labs).map((key) => {
              const lab = labs[key];
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  disabled={isRunning}
                  onClick={() => setActiveTab(key)}
                  className={`text-left p-6 transition-all duration-300 border-l-4 rounded-r-xl select-none ${
                    isActive
                      ? 'bg-purple-950/20 border-purple-500 shadow-lg shadow-purple-950/25'
                      : 'bg-transparent border-transparent text-gray-400 hover:bg-gray-800/40 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`p-2 rounded-lg text-sm ${isActive ? 'bg-purple-600/30 text-purple-400' : 'bg-gray-800 text-gray-400'}`}>
                      {key === 'terraform' && <FaCode />}
                      {key === 'kubernetes' && <FaSyncAlt />}
                      {key === 'python' && <FaTerminal />}
                    </span>
                    <span className="text-lg font-bold font-poppins text-white">{lab.title}</span>
                  </div>
                  <p className="mt-2 text-xs font-poppins text-gray-400 leading-normal">
                    {lab.subtitle}
                  </p>
                </button>
              );
            })}

            <div className="mt-6 pl-4 border-l border-gray-800 hidden lg:block">
              <p className="text-xs font-poppins text-gray-500 font-medium leading-relaxed">
                👉 Click "Run Simulation" on the console editor to watch this code execute on the mock infrastructure sandbox.
              </p>
            </div>
          </div>

          {/* Right Column: Code & Terminal IDE (Columns 8-12) */}
          <div className="lg:col-span-8 flex flex-col rounded-2xl border border-gray-800 bg-[#0B0F19] overflow-hidden shadow-2xl">
            {/* Editor Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#080B12] border-b border-gray-900 select-none">
              <div className="flex items-center gap-2">
                <FaCircle className="w-3 h-3 text-red-500/70" />
                <FaCircle className="w-3 h-3 text-yellow-500/70" />
                <FaCircle className="w-3 h-3 text-green-500/70" />
                <span className="ml-3 text-xs font-poppins text-gray-500 font-bold tracking-wider uppercase">
                  {activeTab === 'terraform' && 'aws_vpc.tf'}
                  {activeTab === 'kubernetes' && 'argocd-app.yaml'}
                  {activeTab === 'python' && 'train_lora.py'}
                </span>
              </div>
              <button
                onClick={runSimulation}
                disabled={isRunning}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-800 hover:to-purple-700 disabled:opacity-40 text-white font-poppins font-bold text-xs tracking-wider uppercase rounded-xl transition-all shadow-md shadow-purple-950/50"
              >
                {isRunning ? (
                  <>
                    <svg className="animate-spin h-3.5 w-3.5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    <span>Running...</span>
                  </>
                ) : (
                  <>
                    <FaPlay className="w-2.5 h-2.5" />
                    <span>Run Simulation</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Content Editor Area */}
            <div className="relative p-6 font-mono text-sm overflow-x-auto leading-relaxed bg-[#0B0F19] border-b border-gray-900 max-h-64 min-h-[16rem]">
              <pre className="text-gray-400">
                <code>
                  {labs[activeTab].code.split('\n').map((line, idx) => (
                    <div key={idx} className="flex">
                      <span className="w-8 select-none text-gray-700 text-right pr-4 font-mono">{idx + 1}</span>
                      <span className="flex-1 whitespace-pre">{line}</span>
                    </div>
                  ))}
                </code>
              </pre>
            </div>

            {/* Simulated Interactive Terminal */}
            <div className="bg-[#05070B] p-6 font-mono text-sm min-h-[10rem] max-h-[12rem] overflow-y-auto flex flex-col gap-2">
              <div className="flex items-center gap-2 select-none pb-2 border-b border-gray-900/60 mb-2">
                <FaTerminal className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-xs text-gray-500 font-bold tracking-widest font-poppins uppercase">Interactive Sandbox Terminal</span>
              </div>
              <div className="flex-grow flex flex-col gap-1.5 overflow-y-auto">
                {terminalLines.map((line, index) => (
                  <div key={index} className={`whitespace-pre-wrap leading-relaxed ${getLineStyle(line)}`}>
                    {line}
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveLabPreview;
