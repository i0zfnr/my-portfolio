const groups = ['Frontend Development', 'Backend Development', 'Databases & APIs', 'Tools & Deployment']

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="heading">
        <div><span className="kicker">Capabilities</span><h2>Full-stack development.</h2></div>
        <p className="intro">My detailed technology stack and skill levels will be added soon.</p>
      </div>
      <div className="grid">
        {groups.map(group => <div className="skill" key={group}><h3>{group}</h3><div className="tags"><span className="tag">Details coming soon</span></div></div>)}
      </div>
    </section>
  )
}
