import '../App.css';
import cabin from '../assets/cabin_nice_cropped1.jpeg'
import beams from '../assets/3beams.jpeg'
import windows from '../assets/windows_nice_wide.jpeg'

function CustomersSay() {
    return (
        <section id="customers-say">
            <div className="section-title">
                What Customers Say
            </div>
            <div className="customer-quote-picture-container">
                <div className='customer-quote-container'>
                    <div className='customer-name-left'>Jeff Browning | Designer & Ultrarunning Coach</div>
                    <div className='customer-quote-left'>"Elias was prompt, hard-working, and has a positive attitude. He made sure the job was done right. Good attention to detail. I'd definitely hire him again."</div>
                </div>
                <img src={cabin} className='customer-say-image'></img>
            </div>
            <div className="customer-quote-picture-container">
                <img src={beams} className='customer-say-image'></img>
                <div className='customer-quote-container-right-border'>
                    <div className='customer-name-right'>John Dolan | MA, DDS, MS</div>
                    <div className='customer-quote-right'>"Elias Uribe has worked on several projects for me over the last three years on property in Cottonwood Canyon south of Bozeman. Elias is profoundly thoughtful in his work. I have never hired or worked with a professional who is equally dedicated, skilled and tireless. Elias will bring insight and problem-solving skills to your project. You will find that he is personable with clients and colleagues alike. I can’t recommend Elias highly enough and I look forward to hiring him on my upcoming architectural projects. There is no one I would rather have on my team."</div>
                </div>
            </div>
            <div className="customer-quote-picture-container">
                <div className='customer-quote-container'>
                    <div className='customer-name-left'>Seth Bork | Project Management</div>
                    <div className='customer-quote-left'>"Elias's work was quality, on time, on budget, and with a great attitude. I will work with Elias again!"</div>
                </div>
                <img src={windows} className='customer-say-image'></img>
            </div>
        </section>
    )
}

export default CustomersSay