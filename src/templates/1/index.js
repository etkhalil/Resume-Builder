import './1.css'

function Template(props) {
    return (
        <div id="resume" ref={props.reference}>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/james-moriarty.jpg" alt="James Moriarty" />
          <h1>James Moriarty</h1>
          <p>Cell: <a href="#">555-666-7777</a>
          </p><p>Web: <a href="#">moriarty.com</a>
          </p><p>Email: <a href="#">napoleon@crime.com</a>
          </p><p id="objective">I am a reserved but ambitious young professional seeking a career that fits my professional skills, personality, and murderous tendencies. My good birth, excellent education and phenomenal mathematical faculty have allowed me to advance the prospects of several criminal enterprises.
          </p><dl>
            <dt>Education
            </dt><dd>
              <h2>Oxford University</h2>
              <p><strong>Major:</strong> Applied Mathematics<br />
                <strong>Minor:</strong> Romance Languages</p>
            </dd></dl>
          <dl>
            <dt>Skills
            </dt><dd>
              <h2>Office Skills</h2>
              <p>Office and records management, database administration, event organization, customer support, travel coordination
              </p><h2>Computer skills</h2>
              <p>Microsoft productivity software (Word, Excel, etc), Adobe Creative Suite, Windows
              </p></dd></dl>
          <dl>
            <dt>Experience
            </dt><dd>
              <h2>Consulting Criminal<span>London 1892 – present</span></h2>
              <ul>
                <li>Development within the criminal underworld
                </li><li>Conducted negotiations with several rogue governments
                </li></ul>
              <h2>The Coldstream Guards<span>Army Coach, London 1889 – 1888</span></h2>
              <ul>
                <li>Recruiting, training and terrorizing young men.
                </li></ul>
              <h2>Oxford University<span>Professor of Mathematics 1885 – 1888</span></h2>
              <ul>
                <li>Published papers in binomials, asteroid dynamics and game theory
                </li><li>Intimidated students
                </li></ul>
            </dd>
          </dl>
          <dl>
            <dt>Hobbies
            </dt><dd>World domination, Social Manipulation, Murder Most Foul
            </dd></dl>
          <dl>
            <dt>References
            </dt><dd>Available on request
            </dd></dl>
          <p className="objective" style={{marginTop: '2rem'}}>(<a href="http://thenewcode.com/553/Build-A-Responsive-Web-Résumé">Return to the original blog article</a>.)
          </p></div>
      );
}

export default Template;
