import SectionLayering from "./designComponents/sectionLayering/SectionLayering.tsx";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { ScrollSmoother} from 'gsap/ScrollSmoother'
gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);

function App() {
    return (
        <div>
            <SectionLayering/>
        </div>
    );
}

export default App;