import {
  Menu, X, ArrowUp, Mail, Phone, MapPin, Check, Calendar,
  BookOpen, FlaskConical, Globe, Users, Cpu, Heart, Activity,
  ShieldCheck, Award, FileText, Upload, ChevronRight, ChevronDown,
  Star, ExternalLink, Twitter, Linkedin,
  Leaf, Microscope,
  Database,
  Brain
} from 'lucide-react'

const icons = {
  menu: Menu,
  x: X,
  arrowUp: ArrowUp,
  mail: Mail,
  phone: Phone,
  mapPin: MapPin,
  check: Check,
  calendar: Calendar,
  book: BookOpen,
  flask: FlaskConical,
  globe: Globe,
  users: Users,
  cpu: Cpu,
  database: Database,
  heart: Heart,
  leaf: Leaf,
  microscope: Microscope,
  heart: Heart,
  brain: Brain,
  activity: Activity,
  shield: ShieldCheck,
  award: Award,
  fileText: FileText,
  upload: Upload,
  chevronRight: ChevronRight,
  chevronDown: ChevronDown,
  star: Star,
  externalLink: ExternalLink,
  twitter: Twitter,
  linkedin: Linkedin,
}

export default function Icon({ name, className = 'w-5 h-5', style }) {
  const IconComponent = icons[name]

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`)
    return null
  }

  return <IconComponent className={className} style={style} />
}