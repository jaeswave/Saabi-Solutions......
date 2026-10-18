import { pillars } from '../../data/content.js'
import Split from '../ui/Split.jsx'
import CheckList from '../ui/CheckList.jsx'
import Button from '../ui/Button.jsx'
import DashboardVisual from '../visuals/DashboardVisual.jsx'

export default function WhatWeDo() {
  return (
    <Split tone="mist" eyebrow="What Kliqq does" title="Your business runs on technology. We make sure it performs."
      intro="Technology rarely fails in the boardroom. It fails at the till, in the classroom, on launch day. We design and manage the systems so it does not."
      visual={<DashboardVisual />}>
      <CheckList items={pillars} />
      <div className="mt-8"><Button to="/services" variant="dark">See our services</Button></div>
    </Split>
  )
}
