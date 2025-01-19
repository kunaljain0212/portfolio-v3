'use client'

import GitHubCalendar from 'react-github-calendar'

export default function GithubContributions() {
  return (
    <section className="py-12">
      <h2 className="text-lg text-muted-foreground mb-8">GitHub Contributions</h2>
      <GitHubCalendar 
        username="kunaljain0212"
        colorScheme='dark'
        fontSize={16}
      />
    </section>
  )
}

