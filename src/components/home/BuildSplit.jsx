import Split from '../ui/Split.jsx'
import CheckList from '../ui/CheckList.jsx'
import Button from '../ui/Button.jsx'
import PhoneVisual from '../visuals/PhoneVisual.jsx'

export default function BuildSplit() {
  return (
    <Split tone="sky" reverse eyebrow="Build" title="Apps and websites your customers actually enjoy using"
      intro="Clean design, fast pages and smooth payments, built for phones first because that is where your customers are." visual={<PhoneVisual />}>
      <CheckList items={['Fast, mobile-first design', 'Secure sign-in and payments', 'Dashboards you can read at a glance']} />
      <div className="mt-8"><Button to="/portfolio" variant="dark">See our work</Button></div>
    </Split>
  )
}
