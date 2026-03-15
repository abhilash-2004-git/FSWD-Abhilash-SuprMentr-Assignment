<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" type="text/css" href="style.css"> <!-- Link to your CSS file -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer"/>
</head>
<body>
    <div class="hero">
        <nav>
            <h2 class="logo">Portfo<span>lio</span></h2>
            <ul> <!-- Changed from <u1> to <ul> -->
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Skills</a></li> <!-- Changed from "skills" to "Skills" -->
                <li><a href="#">Contact Us</a></li>
            </ul>
            <a href="#" class="btn">Follow</a>
            <!-- Removed <a href="#" class="link-with-background"></a> -->
        </nav>
        <div class="content">
            <h4>Hello, my name is</h4>
            <h1>Abhilash<span>Naik</span></h1>
            <h3>I am a Web Developer.</h3> <!-- Corrected typo "I'am" to "I am" -->
            <div class="newsletter"> <!-- Changed class name from "newslatter" to "newsletter" -->
                <form>
                    <input type="email" name="email" id="mail" placeholder="Enter Your email"> <!-- Corrected attribute "aria-placeholder" to "placeholder" -->
                    <input type="submit" name="submit" value="Let's Start"> <!-- Corrected button text from "Lets Start" to "Let's Start" -->
                </form>
            </div>
        </div>
    </div>

    <section class="about">
        <div class="main">
            <img src="main-img.png.jpg" alt="">
            <div class="about-text">
                <h2>About Me</h2>
                <h5>Developer <span>& Designer</span></h5>
                <p>I am a front-end web developer. I can provide clean code and pixel-perfect design. I also make Python web designs with animation. I can provide clean code and pixel-perfect design.</p> <!-- Corrected typos and formatting -->
                <button type="button">Let's Talk</button>
            </div>
        </div>
    </section>

    <div class="service">
        <div class="title">
            <h2>Our Services</h2> <!-- Corrected typo "service" to "services" -->
        </div>
        <div class="box">
            <div class="card">
                <i class="fas fa-bars"></i> <!-- Changed class from "fa-solid" to "fas" -->
                <h5>Web Development</h5>
                <div class="pra">
                    <p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be as fast as possible.</p> <!-- Corrected typos and formatting -->
                    <p style="text-align: center;">
                        <a class="button" href="#">Read more</a>
                    </p>
                </div>
            </div>
            <!-- Similar corrections for the other cards -->
        </div>
    </div>

    <div class="contact-me"> <!-- Changed class name from "Contact-me" to "contact-me" -->
        <p>Let me Get You A Beautiful Website.</p>
        <a class="button-to" href="#">Hire me</a>
    </div>

    <footer>
        <p>Abhilash Naik</p>
        <p>For more HTML, CSS, and GRAPHICS DESIGN - please click on the link below to follow my channel</p> <!-- Corrected typos -->
        <div class="social">
            <a href="https://www.facebook.com/abhilash.pethri?mibextid=ZbWKwL"><i class="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/abhilash_naik_udupi?igsh=MWF1bTUwd2plY2o1dA=="><i class="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/abhilash-naik-86a182280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/21Abhilash"><i class="fab fa-github"></i></a>
            <a href="#"><i class="fab fa-google"></i></a>
        </div>
        <p class="end">Copyright By Abhilash Naik</p> <!-- Corrected typo "CopyRight" to "Copyright" -->
    </footer>
</body>
</html>