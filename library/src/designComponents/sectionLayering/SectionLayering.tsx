import SectionOne from "./SectionOne.tsx";
import SectionTwo from "./SectionTwo.tsx";
import SectionThree from "./SectionThree.tsx";
import gsap from 'gsap';
import {useGSAP} from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {ScrollSmoother} from 'gsap/ScrollSmoother'

function SectionLayering() {

    useGSAP(() => {
        const sections = gsap.utils.toArray<HTMLElement>('.section')

       ScrollSmoother.create({
            wrapper: '#smooth-wrapper',   // you'll add this div
            content: '#smooth-content',   // you'll add this div
            smooth: 1.5,                  // try 1–2 for nice feel
            effects: true,
            smoothTouch: 0.1,             // optional: slight smoothing on mobile
       });

        sections.forEach((section,i ) => {

            ScrollTrigger.create({
                trigger: section,
                start: 'top top',
                end: 'bottom top',
                pin: true,
                pinSpacing: false,
                anticipatePin: 1,
            });

            gsap.to(sections[i-1], {
                yPercent: -100,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top bottom',
                    scrub: true,
                    invalidateOnRefresh: true,
                }
            })

        })

    })

    return (
        <main>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <SectionOne />
                    <SectionTwo/>
                    <SectionThree/>
                </div>
            </div>
        </main>
    );
}

export default SectionLayering;