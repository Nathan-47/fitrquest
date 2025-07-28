import compImg1 from '../images/competition/comp_rewards.png'
import compImg2 from '../images/competition/comp_insta_stories.png'


const Comp = () => {
    return (
        <div className="container">
            <div className="row">
                <div class="grid grid-cols-3 gap-4">
                    <div class="col-span-1">
                        <img className="supp-img" src={compImg1} alt='Image shows JAAQ fitness app on a iphone and RAW nutrition supplement bottles'/>
                    </div>
                    <div class="col-span-2">
                        <h1>What can be won</h1>
                        <p>Hey Quest taker, you can Participate in our FitrChallenge that will give you the chance to win various prizes. Start your FitrChallenge today and take advantage of these amazing rewards!</p>
                        <ul className='list-disc'>
                            <li>1 -year free subscriptions to JAAQ</li>
                            <li>Raw Nutrition supplements: Whey protein, Creatine, Pre-workout</li>
                            <li>Revive supplements: Collagen powder, Daily Greens powder</li>
                        </ul>
                    </div>
                    
                    <div class="col-span-2">
                        <h1>How to win</h1>
                        <p>There will be THREE  winners from three categories. How a winner is selected is from other Questers on what video or photo is their favourite for the month. To enter upload video or photo to any social media and tag the following  #FitrChallenge.</p>
                    </div>
                    <div class="col-span-1">
                        <img className="mobile-img" src={compImg2} alt='A tablet and iphone that both have a fitrquest instagram review story being filled out'/>
                    </div>
                </div>

                {/* submit clip button */}
                <div className='submit-wrapper'>
                    <a href="#"><div className='submitBtn'>Submit clip</div></a>
                </div>
            </div>
        </div>
    );
};

export default Comp;