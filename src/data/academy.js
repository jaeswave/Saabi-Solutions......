import { Code2, ShieldCheck, ClipboardList, BarChart3, Database, Brain, Rocket, School, Briefcase, Users } from 'lucide-react'

export const audiences = [
  { icon: Rocket, title: 'Youth Tech Camp', desc: 'Fun, hands-on tech for ages 12 to 17.', points: ['Digital skills and online safety', 'Intro to coding and web design', 'Build and present a mini project'] },
  { icon: School, title: 'JAMB-to-Campus Skills Bridge', desc: 'For JAMB and post-UTME candidates and school leavers waiting for admission: arrive at university with a real skill.', points: ['Coding, data or design starter track', 'Portfolio projects to show on day one', 'Flexible weekday or weekend timetable'] },
  { icon: Briefcase, title: 'Career Tracks', desc: 'Job-ready paths for graduates and career changers.', points: ['Six tracks from software to AI', 'Real projects and mentorship', 'CV, interview and freelancing guidance'] },
  { icon: Users, title: 'Private & Corporate Training', desc: 'Tailored classes for families, schools, churches, NGOs and companies.', points: ['One-to-one or small groups', 'At your location or online', 'Custom syllabus and schedule'] },
]
export const tracks = [
  { icon: Code2, title: 'Software Engineering', duration: '6 months', level: 'Beginner to job-ready', learn: ['HTML, CSS, JavaScript and React', 'Node.js, databases and APIs', 'Git, deployment and real projects'] },
  { icon: ShieldCheck, title: 'Cybersecurity', duration: '4 months', level: 'Beginner to junior analyst', learn: ['Networks, Linux and security basics', 'Ethical hacking and Burp Suite', 'OWASP Top 10 and incident response'] },
  { icon: ClipboardList, title: 'Project Management', duration: '3 months', level: 'Beginner friendly', learn: ['Agile and Scrum in practice', 'Planning, risk and stakeholders', 'Jira, Trello and Notion'] },
  { icon: BarChart3, title: 'Data Analysis', duration: '4 months', level: 'Beginner friendly', learn: ['Excel, SQL and Power BI', 'Cleaning and visualising data', 'Business dashboards and reports'] },
  { icon: Database, title: 'Data Engineering', duration: '5 months', level: 'Intermediate', learn: ['Python and advanced SQL', 'Pipelines, ETL and warehouses', 'Cloud data tools'] },
  { icon: Brain, title: 'AI & Machine Learning', duration: '5 months', level: 'Beginner to intermediate', learn: ['Python and data foundations', 'Machine learning basics', 'Building with AI tools and APIs'] },
]
export const deliveryModes = [
  { title: 'Public classes', desc: 'Join an open cohort with other learners.', points: ['Scheduled start dates', 'Weekend and evening options', 'Live online or in person', 'Great for meeting like-minded peers'] },
  { title: 'Private classes', desc: 'Training shaped around you or your organisation.', points: ['One-to-one or small group', 'Your place, your schedule', 'Custom syllabus and pace', 'Ideal for families, schools and staff teams'] },
]
export const perks = [
  { title: 'Learn by building', desc: 'Every student ships real projects for a portfolio, not just notes.' },
  { title: 'Mentorship', desc: 'Small groups and direct feedback from working engineers.' },
  { title: 'Career guidance', desc: 'CV reviews, interview practice and advice on first jobs and freelancing.' },
  { title: 'Certificate', desc: 'A completion certificate when you finish the track and final project.' },
]
export const academyFaqs = [
  { q: 'Who can join the Academy?', a: 'Teens, JAMB candidates, school leavers, undergraduates, graduates, career changers and working professionals. There is a track or programme for each stage.' },
  { q: 'What is the JAMB-to-Campus Skills Bridge?', a: 'A short programme for candidates waiting for admission. You learn a practical tech skill and build projects, so you start university with something real to show.' },
  { q: 'Do under-18s need parental consent?', a: 'Yes. Students under 18 need a parent or guardian to approve enrolment. We are happy to speak with parents about the programme.' },
  { q: 'Do I need a laptop or any experience?', a: 'Beginners are welcome. A laptop helps for most tracks, and we can advise you on affordable options when you enquire.' },
  { q: 'Can you train my staff, school or church group?', a: 'Yes. Our private and corporate classes can be held at your location or online, with a syllabus built for your group.' },
  { q: 'Is it online or in person?', a: 'Both options are planned. Tell us what suits you when you enquire and we will match you to a class.' },
]
