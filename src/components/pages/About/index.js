import "./style.css"

function About() {
    return (
        <div className="container">

            <div className="row" id="row-top">
                <div className="col-md-12">
                    <h1>Hi I'm Claire!</h1>
                </div>
            </div>

            <div class="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-4" id="index-card">
                    <div className="card" style="width: 18rem;">
                        <img id="image" src='https://i.postimg.cc/LYRPVqzw/IMG-20171228-021801-278.jpg' className="card-img-top"
                            alt='IMG-20171228-021801-278' />
                    </div>
                </div>

                <div className="col-sm-4">
                    <p>I'm a baby web developer. I have officially survived my two months of Bootcamp and I'm still standing! I look
                    forward to being confident in my newly learned skills and creating useful products that make people's lives
                    more beautiful and a little easier. I think pandas are undoubtably the best animal ever invented and I more
          than anything I wish I was one.</p>
                    <p id="panda"> &#128060;</p>
                </div>
                <div className="col-sm-2"></div>
            </div>
        </div>
    )
}

export default About;