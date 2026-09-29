import {
  BarChart3,
  House,
  Building2,
  Car,
  CloudCog,
  Code2,
  Compass,
  Cpu,
  GraduationCap,
  HeartPulse,
  Hotel,
  Landmark,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Target,
  Trophy,
  Users,
  Wrench,
  Headset,
  UserRoundCheck,
  Layers,
  type LucideIcon,
} from 'lucide-react'

export const BRAND = 'Scraperrs'

export type Service = {
  id: string
  title: string
  label: string // footer / compact lists
  body: string
  tags: string[]
  icon: LucideIcon
}

export const services: Service[] = [
  {
    id: 'custom-development',
    title: 'Custom software & web development',
    label: 'Custom development',
    body: 'Software and web platforms built around your specific goals — not squeezed into someone else’s template.',
    tags: ['Web apps', 'APIs', 'Integrations'],
    icon: Code2,
  },
  {
    id: 'staff-augmentation',
    title: 'Staff augmentation',
    label: 'Staff augmentation',
    body: 'Scale your tech team quickly with engineers who plug into your process, tools and rituals from week one.',
    tags: ['Dedicated engineers', 'Flexible scale'],
    icon: Users,
  },
  {
    id: 'mvp',
    title: 'MVP creation',
    label: 'MVP creation',
    body: 'Turn an idea into a working minimum viable product fast, so you can test with real users before you over-invest.',
    tags: ['Prototypes', 'Launch-ready v1'],
    icon: Rocket,
  },
  {
    id: 'enterprise',
    title: 'Enterprise CRM & ERP solutions',
    label: 'CRM & ERP',
    body: 'CRM and ERP systems that streamline large operations and give every department one source of truth.',
    tags: ['CRM', 'ERP', 'Workflow automation'],
    icon: Building2,
  },
  {
    id: 'ecommerce',
    title: 'E-commerce & retail tech',
    label: 'E-commerce & retail',
    body: 'Technology that boosts performance online and in-store, from storefronts to inventory and checkout.',
    tags: ['Storefronts', 'Omnichannel', 'Payments'],
    icon: ShoppingCart,
  },
  {
    id: 'data-ai',
    title: 'Data analytics, AI & machine learning',
    label: 'Data, AI & ML',
    body: 'Turn raw data into action with analytics, dashboards and machine-learning models that earn their keep.',
    tags: ['Analytics', 'AI', 'Machine learning'],
    icon: BarChart3,
  },
  {
    id: 'cloud-devops-qa',
    title: 'Cloud, DevOps & quality assurance',
    label: 'Cloud, DevOps & QA',
    body: 'Cloud infrastructure, delivery pipelines and QA that keep everything running smoothly — release after release.',
    tags: ['Cloud', 'CI/CD', 'Testing'],
    icon: CloudCog,
  },
]

export const reasons: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: 'One point of contact',
    body: 'A single partner for all your tech needs. No juggling vendors, no lost context between them.',
    icon: Headset,
  },
  {
    title: 'Tailored to your goals',
    body: 'Every solution starts from your business goals, then works back to the technology — never the other way round.',
    icon: Target,
  },
  {
    title: 'Broad, experienced team',
    body: 'Engineers, designers and specialists with expertise across the full stack, from front end to cloud and AI.',
    icon: UserRoundCheck,
  },
  {
    title: 'Reliable, 24/7 support',
    body: 'Consistent quality and continuous support around the clock, long after launch day.',
    icon: ShieldCheck,
  },
]

export const industries: { name: string; icon: LucideIcon }[] = [
  { name: 'Retail & e-commerce', icon: ShoppingBag },
  { name: 'Automotive', icon: Car },
  { name: 'Healthcare', icon: HeartPulse },
  { name: 'Fintech', icon: Landmark },
  { name: 'Education', icon: GraduationCap },
  { name: 'Travel & hospitality', icon: Hotel },
  { name: 'Real estate', icon: House },
  { name: 'Technology & IT', icon: Cpu },
  { name: 'Sports & event management', icon: Trophy },
]

export const process: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: 'Discover',
    body: 'We map your goals, users and constraints, and agree what success looks like.',
    icon: Search,
  },
  {
    title: 'Design',
    body: 'Architecture and experience planned together, so the build starts on solid ground.',
    icon: Compass,
  },
  {
    title: 'Build',
    body: 'Short, visible iterations with QA built in — you see progress every step.',
    icon: Layers,
  },
  {
    title: 'Launch & support',
    body: 'Smooth release, then monitoring, improvements and 24/7 support.',
    icon: Wrench,
  },
]

export const nav = [
  { href: '#services', label: 'Services' },
  { href: '#why', label: `Why ${BRAND}` },
  { href: '#industries', label: 'Industries' },
  { href: '#process', label: 'Process' },
]
