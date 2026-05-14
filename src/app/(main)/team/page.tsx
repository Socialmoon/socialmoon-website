import Link from 'next/link';
import {
  ArrowRight,
  Code2,
  ExternalLink,
  Github,
  Instagram,
  Linkedin,
  Megaphone,
  PenTool,
  Users,
} from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import TeamPhoto from '@/components/common/TeamPhoto';
import TEAM, { TeamMember, TeamSocials } from '@/data/team';

const STUDIO_LANES = [
  { title: 'Campaign thinking', text: 'Brand memory, social content, lead paths, and creative direction.', icon: Megaphone },
  { title: 'Design execution', text: 'Page polish, UI details, responsive sections, and memorable digital experiences.', icon: PenTool },
  { title: 'Technical build', text: 'Websites, apps, dashboards, backend support, QA thinking, and systems that keep work usable.', icon: Code2 },
];

export default function TeamPage() {
  const leadership = TEAM.filter((member) => ['CEO', 'CTO'].includes(member.designation));
  const team = TEAM.filter((member) => !['CEO', 'CTO'].includes(member.designation));

  return (
    <div className="min-h-screen bg-[#fffdf8]">
      <PageHero
        eyebrow="Team"
        title="The people behind SocialMoon's creative and technical work."
        description="A focused team shaping campaigns, websites, apps, interfaces, backend support, and delivery systems around one goal: work that feels clear, memorable, and trustworthy."
        icon={Users}
        primaryCta={{ label: 'Work with the team', href: '/contact' }}
        secondaryCta={{ label: 'Open roles', href: '/careers' }}
      >
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-orange-200">Studio rhythm</p>
          <div className="mt-4 space-y-3">
            {STUDIO_LANES.map((lane) => (
              <div key={lane.title} className="flex gap-3 rounded-2xl bg-white/5 p-3">
                <lane.icon className="mt-0.5 h-5 w-5 shrink-0 text-orange-200" />
                <div>
                  <p className="text-sm font-black text-white">{lane.title}</p>
                  <p className="mt-0.5 text-xs leading-5 text-slate-300">{lane.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageHero>

      <Section>
        <Container>
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff4d2e]">Leadership</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
              Direction, standards, and execution ownership.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {leadership.map((member) => (
              <TeamFeatureCard key={member.id || member.name} member={member} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="mb-8 grid grid-cols-1 gap-4 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff4d2e]">Team</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">People who move the work forward.</h2>
            </div>
            <p className="text-sm leading-7 text-slate-600">
              Each person owns a clear designation in the SocialMoon workflow, from marketing direction to backend support, UI, and project movement.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {team.map((member, index) => (
              <TeamMemberCard key={member.id || member.name} member={member} index={index + leadership.length} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-[#fffdf8]">
        <Container>
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white sm:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-200">Work with SocialMoon</p>
                <h2 className="mt-2 text-2xl font-black">Bring us the brand people should remember.</h2>
              </div>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff4d2e] px-6 py-3 text-sm font-bold text-white">
                Start with a brief
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

function TeamFeatureCard({ member }: { member: TeamMember }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-[minmax(15rem,18rem)_1fr]">
        <TeamPhoto name={member.name} sources={[member.imageUrl, member.image]} className="aspect-[3/4] min-h-80 sm:aspect-auto sm:min-h-[24rem]" />
        <div className="flex flex-col p-6">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#ff4d2e]">{member.designation}</p>
          <h3 className="mt-2 text-2xl font-black text-slate-950">{member.name}</h3>
          <p className="mt-1 text-sm font-black text-slate-600">{member.role}</p>
          <p className="mt-4 rounded-2xl bg-[#fffdf8] p-3 text-sm font-bold leading-6 text-slate-700">{member.focus}</p>
          <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">{member.bio}</p>
          <SocialLinks socials={member.socials} className="mt-5" />
        </div>
      </div>
    </article>
  );
}

function TeamMemberCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-[#fffdf8] shadow-sm transition-transform hover:-translate-y-1">
      <TeamPhoto name={member.name} sources={[member.imageUrl, member.image]} className="aspect-[3/4] w-full" />
      <div className="flex flex-1 flex-col p-4">
        <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#ff4d2e]">0{index + 1}</p>
        <h3 className="mt-1 text-lg font-black leading-tight text-slate-950">{member.name}</h3>
        <p className="mt-1 text-sm font-black text-slate-600">{member.designation}</p>
        <p className="mt-4 rounded-2xl bg-white p-3 text-sm font-bold leading-6 text-slate-700">{member.focus}</p>
        <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">{member.bio}</p>
        <SocialLinks socials={member.socials} className="mt-5" />
      </div>
    </article>
  );
}

function SocialLinks({ socials, className = '' }: { socials?: TeamSocials; className?: string }) {
  const links = [
    { label: 'GitHub', href: socials?.github, icon: Github },
    { label: 'Instagram', href: socials?.instagram, icon: Instagram },
    { label: 'LinkedIn', href: socials?.linkedin, icon: Linkedin },
    { label: 'Website', href: socials?.website, icon: ExternalLink },
    { label: 'X', href: socials?.x, icon: ExternalLink },
  ].filter((item) => item.href);

  if (links.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {links.map((item) => (
        <Link
          key={item.label}
          href={item.href as string}
          target="_blank"
          rel="noreferrer"
          aria-label={`${item.label} profile`}
          className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-[#ff4d2e] hover:text-[#ff4d2e]"
        >
          <item.icon className="h-4 w-4" />
        </Link>
      ))}
    </div>
  );
}
