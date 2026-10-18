import Split from '../ui/Split.jsx'
import CheckList from '../ui/CheckList.jsx'
import Button from '../ui/Button.jsx'
import ShieldVisual from '../visuals/ShieldVisual.jsx'

export default function SecuritySplit() {
  return (
    <Split tone="dark" eyebrow="Security first" title="Built secure from the first line of code"
      intro="A fast product that gets hacked is not a success. Security is part of every build, not an extra at the end." visual={<ShieldVisual />}>
      <CheckList items={['Penetration testing with Burp Suite', 'OWASP Top 10 code reviews', 'Linux hardening and staff training']} />
      <div className="mt-8"><Button to="/solutions" variant="white">Explore solutions</Button></div>
    </Split>
  )
}
