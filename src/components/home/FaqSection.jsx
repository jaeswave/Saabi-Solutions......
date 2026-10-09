import Section from '../ui/Section.jsx'
import Faq from '../common/Faq.jsx'
export default function FaqSection({ items }) {
  return (
    <Section tone="mist" eyebrow="FAQ" title="Questions, answered" center>
      <Faq items={items} />
    </Section>
  )
}
