import React from 'react'
import {Button} from "@/components/ui/button";
import CompanionCards from "@/components/CompanionCards";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";


const Page = () => {
  return (
    <main>
        <h1 className="text-2xl underline">popular Companions</h1>
        <section className="home-section">
            <CompanionCards
                id="123"
                name="Neura the Brainy Explorer"
                subject="science"
                duration={45}
                color="#ffda6e" topic={""} bookmarked={false}            />

            <CompanionCards
                id="456"
                name="Collins the Brainy Developer"
                subject="javascript"
                duration={45}
                color="#ffda6e" topic={""} bookmarked={false}            />

            <CompanionCards
                id="789"
                name="Asake the Brainy Musician"
                subject="Music"
                duration={45}
                color="#ffda6e" topic={""} bookmarked={false}            />

        </section>

        <section className="home-section">
            <CompanionsList title="Recently completer Sessions"
            companions={recentSessions} classNames="w-2/3 max-lg:w-full"
            />
            <CTA/>
        </section>

    </main>
  )
}

export default Page