// Alert message when clicking the Contact Me button
document.querySelector(".btn-success").addEventListener("click", function () {
    alert("Feel free to reach out to me!");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').replace('.html', '');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

function showDetails(service) {
    const modalContent = document.getElementById('modalContent');
    if (service === 'web') {
        modalContent.innerHTML = `
            <h5>Web Development</h5>
            <p>I design and develop responsive, SEO-friendly websites using the latest technologies. From e-commerce to personal portfolios, I ensure your online presence is engaging and effective.</p>
        `;
    } else if (service === 'app') {
        modalContent.innerHTML = `
            <h5>App Development</h5>
            <p>My app development services include cross-platform compatibility, intuitive interfaces, and real-time functionality to meet your business and user needs.</p>
        `;
    } else if (service === 'business') {
        modalContent.innerHTML = `
            <h5>Grow Your Business</h5>
            <p>I create tailored digital marketing strategies, including SEO, social media campaigns, and analytics, to help your business expand its reach and boost revenue.</p>
        `;
    }
    const modal = new bootstrap.Modal(document.getElementById('serviceModal'));
    modal.show();
}

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate successful form submission
    alert('Thank you for your message, ' + name + '! I will get back to you soon.');
    this.reset();
});

// Auto-hide navbar on scroll
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    const navbar = document.querySelector("header");
    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-60px";
    }
    prevScrollpos = currentScrollPos;
};

// Highlight active navbar link
document.querySelectorAll('.nav-link').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});

function showDetails(section) {
    if (section === 'app') {
        alert("Explore our App Development services! We specialize in creating seamless cross-platform experiences tailored to your needs.");
    }
}

function showDetails(section) {
    if (section === 'app') {
        alert("Explore our App Development services! We specialize in creating seamless cross-platform experiences tailored to your needs.");
    } else if (section === 'business') {
        alert("Discover how our digital strategies can help grow your business by enhancing brand visibility and driving revenue.");
    }
}

function showDetails(section) {
    if (section === 'app') {
        alert("Explore our App Development services! We specialize in creating seamless cross-platform experiences tailored to your needs.");
    } else if (section === 'business') {
        alert("Discover how our digital strategies can help grow your business by enhancing brand visibility and driving revenue.");
    } else if (section === 'web') {
        alert("Learn more about our Web Development services! We build responsive, professional websites customized to your unique business requirements.");
    }
}
