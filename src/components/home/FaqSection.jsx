import Section from '../ui/Section.jsx'
import Faq from '../common/Faq.jsx'
export default function FaqSection({ items, tone = 'mist' }) {
  return (
    <Section tone={tone} eyebrow="FAQ" title="Questions, answered" center>
      <Faq items={items} />
    </Section>
  )
}
