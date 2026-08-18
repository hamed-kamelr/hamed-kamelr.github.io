type Project = {
  icon: string
  title: string
  description: string
  tags: string[]
  status: string
  statusColor: string
  gradient: string
  highlight?: string
  link?: string
  linkLabel?: string
}

export const powerAppsProjects: Project[] = [
  {
    icon: '🎁',
    title: 'Gifts & Benefits Register',
    description:
      'End-to-end Power Platform solution for managing staff gift declarations and compliance approvals. Built with a Canvas App for submissions, a Power Automate approval flow triggered when gift value exceeds $300, a Model-driven app for EGM review, and Dataverse as the data backbone.',
    tags: ['Power Apps', 'Power Automate', 'Dataverse', 'Canvas App', 'Model-Driven App', 'Microsoft 365'],
    status: 'Portfolio Project',
    statusColor: 'text-[#a855f7] bg-[rgba(168,85,247,0.1)] border-[rgba(168,85,247,0.3)]',
    gradient: 'from-[#7c3aed] to-[#a855f7]',
  },
]
