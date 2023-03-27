import { Collapse } from 'antd';
const { Panel } = Collapse;

const About = () => {
    const onChange = (key) => {
        console.log(key);
    };

    return (
        <div className="tab-items">
            <h3 style={{ textAlign: "center", padding: "1rem" }}>Hypnosis for Happiness: About the HypnoBot</h3>
            <Collapse defaultActiveKey={['1']} onChange={onChange}>
                <Panel header="Why Create the HypnoBot?" key="1">
                    <ul>
                        <li>To bring more happiness to the world.</li>
                        <li>The mind is designed to focus on the negative.</li>
                        <li>The HypnoBot focuses on the positive elements of life and language to use AI (ChatGPT) to generate hypnosis scripts designed to help you be more aware of your true power, and live more happily and freely.</li>
                        <li>Instead of spending time doing other distracting behaviors - playing online, social media, eating, drinking, not following through on what we want - instead - come to the Hypnobot.</li>
                        <li>Take a minute and consider what you'd LIKE to be experiencing right now.</li>
                        <li>Type it in as a prompt.</li>
                        <li>When the Hypnobot returns your hypnosis, take a moment to read it, and really allow it to sink in.</li>
                        <li>Notice what works for YOU in the hypnosis, but also, in the hypnosis script.</li>
                        <li>This means you are NOTICING what works for you, and writing better prompts.</li>
                        <li>ChatGPT functions as an immediate feedback mechanism when we use it properly!</li>
                    </ul>
                    <h3 style={{ textAlign: "center" }}>BEGIN YOUR JOURNEY NOW!</h3>
                </Panel>
                <Panel header="What hypnotic language works for you?What ideas serve you the best?" key="2">
                    <ul>
                        <li>Notice, modify your prompt, and see how GOOD you can get ChatGPT to generate a script for you.</li>
                        <li>When you LOVE IT! Let us Know!</li>
                        <li>Soon you'll be able to score/rank/share and download!</li>
                        <li>Future versions of The Hypnobot will generate an audio FOR YOU - until then, read it on your own.</li>
                        <li>Use the The Alpha Sequence for further practice and study.</li>
                        <li>Condition yourself for positivity - the brain will thank you for it!</li>
                    </ul>

                </Panel>
                <Panel header="What would you like the Happy HypnoBot to do?" key="3">
                    <h3 style={{ textAlign: "center" }}>Send me an email!!</h3>
                    <ul>
                        <li>The Hypnobot is in DEVELOPMENT</li>
                        <li>Which means some things won't work - for example the SHARE button does not work as expected!
                        </li>
                        <li>The hypnobot is Looking for PYTHON FLASK and ChatGPT Developers! Contact us using the link above if you want to help with the HypnoBot!</li>
                    </ul>

                </Panel>
                <Panel header="What does ChatGPT Say About Writing Good Hypnosis Scripts?" key="4">
                    <ul>
                        <li>Use positive language and focus on desired outcomes: When writing hypnosis prompts, it's important to use positive language and focus on the desired outcomes or behaviors that you want to encourage.</li>
                        <li>Use vivid imagery and sensory language: Hypnosis prompts often use vivid imagery and sensory language to help the listener visualize and experience the desired outcomes.</li>
                        <li>Use repetition and reinforcement: Repetition and reinforcement can be effective in helping to reinforce the desired outcomes and behaviors.</li>
                        <li>Use pacing and rhythm: The pacing and rhythm of the prompt can also be important in creating a sense of relaxation and comfort.</li>
                        <li>Practice and refine: As with any skill, practice and refinement can help you improve your writing over time.</li>
                    </ul>

                </Panel>
            </Collapse>
            <h3 style={{ textAlign: "center", padding: "1rem" }}>Thank you for using the Happy Hypno Bot You Are Deeply Deeply Loved</h3>
        </div >
    );
};
export default About;