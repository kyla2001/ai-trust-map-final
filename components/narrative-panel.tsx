export default function NarrativePanel() {
  return (
    <div className="w-full lg:w-1/2 p-6 lg:p-12 lg:overflow-y-auto">
      {/* Introduction Section */}
      <section data-section="intro" className="min-h-screen flex flex-col justify-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#2c3e50] mb-6">
  <img src="https://aitrustmap.com/assets/logo.gif" alt="AI Trust Map animation" className="inline-block w-14 h-14 mr-2 align-middle" />
  Trust Map
</h1>

        <p className="text-lg md:text-xl text-[#34495e] mb-8 font-sans leading-relaxed">
          Explore how unequal data distribution affects AI-generated insights across different sectors like health, crime, education, and more.
        </p>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e0ddd3]">
          <p className="text-[#34495e] italic">
            Scroll down to explore how xxxxxxxxxx
          </p>
        </div>
      </section>

      {/* Trust Score Section */}
      <section data-section="trust-score" className="min-h-screen py-24">
        <h2 className="font-serif text-3xl md:text-4xl text-[#2c3e50] mb-6">Understanding AI Trust Scores</h2>
        <p className="text-lg text-[#34495e] mb-8 font-sans leading-relaxed">
          The AI Trust Score is a composite metric ranging from 0-100 that measures public confidence in artificial
          intelligence technologies. Counties with higher scores (green) indicate populations more willing to adopt and
          trust AI systems in daily life, while lower scores (red) suggest skepticism or resistance.
        </p>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e0ddd3] mb-8">
          <h3 className="font-serif text-xl text-[#2c3e50] mb-3">How Scores Are Calculated</h3>
          <p className="text-[#34495e] mb-4">
            Trust scores are derived from surveys, public data, and AI adoption metrics across five key categories:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#34495e]">
            <li>
              <span className="font-medium">Crime & Safety</span>: xxxx
            </li>
            <li>
              <span className="font-medium">Healthcare</span>: xxxx
            </li>
            <li>
              <span className="font-medium">Education</span>: xxxx
            </li>
            <li>
              <span className="font-medium">Economy</span>: xxxx
            </li>
            <li>
              <span className="font-medium">Environment</span>: xxxx
            </li>
          </ul>
        </div>
        <p className="text-lg text-[#34495e] font-sans leading-relaxed">
          The map shows a clear pattern: coastal urban areas typically show higher trust scores, while rural counties in
          the Midwest and South display more cautious attitudes toward AI technologies.
        </p>
      </section>

      {/* Categories Section */}
      <section data-section="categories" className="py-24">
        <h2 className="font-serif text-3xl md:text-4xl text-[#2c3e50] mb-6">Trust by Category</h2>
        <p className="text-lg text-[#34495e] mb-12 font-sans leading-relaxed">
          AI trust varies significantly across different domains. Explore how counties respond to AI in various sectors:
        </p>

        <div data-category="crime" className="mb-16">
          <h3 className="font-serif text-2xl text-[#2c3e50] mb-4">Crime & Safety</h3>
          <p className="text-lg text-[#34495e] mb-6 font-sans leading-relaxed">
            Urban areas show higher trust in AI-powered surveillance and predictive policing, while rural counties
            express concerns about privacy and over-reliance on automated systems for law enforcement.
          </p>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e0ddd3]">
            <p className="text-[#34495e] italic">
              Counties with recent crime reduction initiatives using AI technologies show markedly higher trust scores
              in this category.
            </p>
          </div>
        </div>

        <div data-category="health" className="mb-16">
          <h3 className="font-serif text-2xl text-[#2c3e50] mb-4">Healthcare</h3>
          <p className="text-lg text-[#34495e] mb-6 font-sans leading-relaxed">
            Healthcare AI trust is highest in counties with major medical centers and research institutions. Rural areas
            with limited healthcare access show growing acceptance of telemedicine AI solutions.
          </p>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e0ddd3]">
            <p className="text-[#34495e] italic">
              The COVID-19 pandemic accelerated trust in AI diagnostic tools in previously skeptical regions.
            </p>
          </div>
        </div>

        <div data-category="education" className="mb-16">
          <h3 className="font-serif text-2xl text-[#2c3e50] mb-4">Education</h3>
          <p className="text-lg text-[#34495e] mb-6 font-sans leading-relaxed">
            Counties with higher education institutions and tech-focused school districts show greater trust in AI for
            personalized learning. Concerns about AI replacing teachers remain prevalent in traditional education
            strongholds.
          </p>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e0ddd3]">
            <p className="text-[#34495e] italic">
              School districts that implemented AI tutoring systems during pandemic closures report lasting positive
              sentiment.
            </p>
          </div>
        </div>

        <div data-category="economy" className="mb-16">
          <h3 className="font-serif text-2xl text-[#2c3e50] mb-4">Economy</h3>
          <p className="text-lg text-[#34495e] mb-6 font-sans leading-relaxed">
            Financial centers show high trust in AI for investment and banking, while manufacturing-heavy counties
            express concerns about automation and job displacement. Regions with diverse economies tend to have balanced
            perspectives.
          </p>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e0ddd3]">
            <p className="text-[#34495e] italic">
              Counties with retraining programs for AI-displaced workers show improving trust metrics year over year.
            </p>
          </div>
        </div>

        <div data-category="environment" className="mb-16">
          <h3 className="font-serif text-2xl text-[#2c3e50] mb-4">Environment</h3>
          <p className="text-lg text-[#34495e] mb-6 font-sans leading-relaxed">
            Coastal counties vulnerable to climate change show high trust in AI environmental solutions.
            Energy-producing regions display more skepticism toward AI-driven sustainability initiatives.
          </p>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e0ddd3]">
            <p className="text-[#34495e] italic">
              Communities that have implemented AI-powered disaster prediction systems show dramatic increases in trust
              scores.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section data-section="case-studies" className="min-h-screen py-24">
        <h2 className="font-serif text-3xl md:text-4xl text-[#2c3e50] mb-6">County Case Studies</h2>
        <p className="text-lg text-[#34495e] mb-12 font-sans leading-relaxed">
          A closer look at contrasting approaches to AI adoption and resulting trust levels:
        </p>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e0ddd3] mb-12">
          <h3 className="font-serif text-2xl text-[#2c3e50] mb-4">New York County, NY</h3>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              <p className="text-[#34495e] mb-4">
                <span className="font-medium">Trust Score: 87/100</span> — One of the highest in the nation
              </p>
              <p className="text-[#34495e] mb-4">
                Manhattan has embraced AI across multiple sectors, from finance to healthcare. The high concentration of
                tech companies and startups has normalized AI in daily life, while public education campaigns have
                addressed concerns about data privacy.
              </p>
              <p className="text-[#34495e]">
                Key initiatives include AI-powered traffic management, predictive maintenance for public transportation,
                and AI-assisted healthcare triage systems at major hospitals.
              </p>
            </div>
            <div className="md:w-1/3 bg-[#e6f2f5] rounded-lg p-4">
              <h4 className="font-serif text-lg text-[#2c3e50] mb-2">Success Factors</h4>
              <ul className="list-disc pl-5 text-[#34495e] space-y-1">
                <li>xxx</li>
                <li>xxx</li>
                <li>xxx</li>
                <li>xxx</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e0ddd3]">
          <h3 className="font-serif text-2xl text-[#2c3e50] mb-4">Cook County, IL</h3>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              <p className="text-[#34495e] mb-4">
                <span className="font-medium">Trust Score: 64/100</span> — Mixed trust levels
              </p>
              <p className="text-[#34495e] mb-4">
                Chicago and surrounding areas show a more complex relationship with AI. While downtown and northern
                suburbs embrace innovation, south and west neighborhoods express concerns about algorithmic bias and
                surveillance.
              </p>
              <p className="text-[#34495e]">
                The county's controversial predictive policing program initially damaged trust but recent reforms with
                community oversight have begun to rebuild confidence in AI systems.
              </p>
            </div>
            <div className="md:w-1/3 bg-[#f5efe6] rounded-lg p-4">
              <h4 className="font-serif text-lg text-[#2c3e50] mb-2">Challenges & Responses</h4>
              <ul className="list-disc pl-5 text-[#34495e] space-y-1">
                <li>xxxx</li>
                <li>xxxx</li>
                <li>xxxx</li>
                <li>xxxx</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Rankings Section */}
      <section data-section="rankings" className="min-h-screen py-24">
        <h2 className="font-serif text-3xl md:text-4xl text-[#2c3e50] mb-6">County Rankings</h2>
        <p className="text-lg text-[#34495e] mb-12 font-sans leading-relaxed">
          Examining the counties with the highest and lowest AI trust scores reveals patterns about what drives public
          confidence in artificial intelligence.
        </p>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e0ddd3] mb-12">
          <h3 className="font-serif text-2xl text-[#2c3e50] mb-4">Top 5 Most Trusting Counties</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#e0ddd3]">
                  <th className="text-left py-3 px-4 font-serif text-[#2c3e50]">County</th>
                  <th className="text-center py-3 px-4 font-serif text-[#2c3e50]">Trust Score</th>
                  <th className="text-left py-3 px-4 font-serif text-[#2c3e50]">Key Factors</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e0ddd3]">
                  <td className="py-3 px-4 text-[#34495e]">San Francisco County, CA</td>
                  <td className="py-3 px-4 text-center text-[#34495e]">92</td>
                  <td className="py-3 px-4 text-[#34495e]">Tech industry presence, AI education</td>
                </tr>
                <tr className="border-b border-[#e0ddd3]">
                  <td className="py-3 px-4 text-[#34495e]">King County, WA</td>
                  <td className="py-3 px-4 text-center text-[#34495e]">89</td>
                  <td className="py-3 px-4 text-[#34495e]">Tech workforce, transparent AI policies</td>
                </tr>
                <tr className="border-b border-[#e0ddd3]">
                  <td className="py-3 px-4 text-[#34495e]">New York County, NY</td>
                  <td className="py-3 px-4 text-center text-[#34495e]">87</td>
                  <td className="py-3 px-4 text-[#34495e]">Innovation hubs, public AI benefits</td>
                </tr>
                <tr className="border-b border-[#e0ddd3]">
                  <td className="py-3 px-4 text-[#34495e]">Travis County, TX</td>
                  <td className="py-3 px-4 text-center text-[#34495e]">85</td>
                  <td className="py-3 px-4 text-[#34495e]">Tech growth, university research</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-[#34495e]">Middlesex County, MA</td>
                  <td className="py-3 px-4 text-center text-[#34495e]">84</td>
                  <td className="py-3 px-4 text-[#34495e]">Academic institutions, biotech AI</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e0ddd3]">
          <h3 className="font-serif text-2xl text-[#2c3e50] mb-4">Bottom 5 Least Trusting Counties</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#e0ddd3]">
                  <th className="text-left py-3 px-4 font-serif text-[#2c3e50]">County</th>
                  <th className="text-center py-3 px-4 font-serif text-[#2c3e50]">Trust Score</th>
                  <th className="text-left py-3 px-4 font-serif text-[#2c3e50]">Key Concerns</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e0ddd3]">
                  <td className="py-3 px-4 text-[#34495e]">McDowell County, WV</td>
                  <td className="py-3 px-4 text-center text-[#34495e]">31</td>
                  <td className="py-3 px-4 text-[#34495e]">Job displacement, digital divide</td>
                </tr>
                <tr className="border-b border-[#e0ddd3]">
                  <td className="py-3 px-4 text-[#34495e]">Harlan County, KY</td>
                  <td className="py-3 px-4 text-center text-[#34495e]">33</td>
                  <td className="py-3 px-4 text-[#34495e]">Economic transition concerns</td>
                </tr>
                <tr className="border-b border-[#e0ddd3]">
                  <td className="py-3 px-4 text-[#34495e]">Apache County, AZ</td>
                  <td className="py-3 px-4 text-center text-[#34495e]">35</td>
                  <td className="py-3 px-4 text-[#34495e]">Limited infrastructure, cultural factors</td>
                </tr>
                <tr className="border-b border-[#e0ddd3]">
                  <td className="py-3 px-4 text-[#34495e]">Holmes County, MS</td>
                  <td className="py-3 px-4 text-center text-[#34495e]">36</td>
                  <td className="py-3 px-4 text-[#34495e]">Privacy concerns, lack of exposure</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-[#34495e]">Aleutians East Borough, AK</td>
                  <td className="py-3 px-4 text-center text-[#34495e]">38</td>
                  <td className="py-3 px-4 text-[#34495e]">Connectivity issues, traditional values</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#e0ddd3] mt-12">
        <h2 className="font-serif text-2xl text-[#2c3e50] mb-6">About This Project</h2>
        <p className="text-[#34495e] mb-8">
          The AI Trust Map is a research initiative examining public perception and trust in artificial intelligence
          across the United States. Our goal is to identify factors that influence AI adoption and help communities
          build responsible AI ecosystems.
        </p>

        <h3 className="font-serif text-xl text-[#2c3e50] mb-4">Data Sources</h3>
        <ul className="list-disc pl-6 space-y-2 text-[#34495e] mb-8">
          <li>National AI Perception Survey (2023)</li>
          <li>U.S. Census Bureau</li>
          <li>Bureau of Labor Statistics</li>
          <li>County-level technology adoption metrics</li>
          <li>Academic research on AI trust and ethics</li>
        </ul>

        <p className="text-sm text-[#6c7a89] italic">
          © 2024 AI Trust Map Project. All data visualizations are based on aggregated survey responses and public data.
        </p>
      </footer>
    </div>
  )
}
