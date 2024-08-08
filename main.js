function showAbout() {
  showLoading();
  setTimeout(() => {
    hideLoading();
    document.getElementById("content").innerHTML = `
      <h2>About Me</h2>
      <p>Saya adalah seorang mahasiswa teknik Informatika semester 3 yang
          memiliki keinginan untuk belajar dan mampu beradaptasi dengan
          baik.Saya menyukai hal yang baru dan ingin berkembang.</p>
    `;
    document.getElementById("gameMenu").style.display = "none";
  }, 2000);
}

function showProjects() {
  showLoading();
  setTimeout(() => {
    hideLoading();
    document.getElementById("content").innerHTML = `
      <h2>Skill & Project</h2>
      <section id="skill" class="skill">
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <img src="image/python.jpg" alt="Python" />
              </div>
              <div class="card-back">
                <img src="image/projectpy.png" alt="project python" />
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <img src="image/html.png" alt="HTML" />
              </div>
              <div class="card-back">
                <img src="image/prohtml.png" alt="project html" />
                <a href="https://diablo-che.github.io/Search/" class="read-more-button">Read More</a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <img src="image/css.png" alt="CSS" />
              </div>
              <div class="card-back">
                <img src="image/prhtml.png" alt="project html" />
                <a href="https://diablo-che.github.io/login/" class="read-more-button">Read More</a>
              </div>
            </div>
          </div>
          <div class="card">
              <div class="card-front">
                <img src="image/java script.jpg" alt="JavaScript" />
              </div>
          </div>
          <div class="card">
              <div class="card-front">
                <img src="image/excel.png" alt="Excel" />
              </div>
          </div>
          <div class="card">
              <div class="card-front">
                <img src="image/spreadsheet.png" alt="Spreadsheet" />
              </div>
          </div>
      </section>
    `;
  }, 2000);
}

function showContact() {
  showLoading();
  setTimeout(() => {
    hideLoading();
    document.getElementById("content").innerHTML = `
      <h2>Contact</h2>
      <section id="contact" class="contact">
        <form action="https://api.web3forms.com/submit" method="POST">
          <div class="form-group">
            <input type="hidden" name="access_key" value="e33e2204-8286-471e-8258-55d176b66b57">

            <label for="name" class="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              class="form-input"
              placeholder="Your Name"
              required
            />
          </div>
          <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              class="form-input"
              placeholder="Your Email"
              required
            />
          </div>
          <div class="form-group">
            <label for="message" class="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              class="form-input"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" class="submit-button">Send Message</button>
        </form>
      </section>
      `;
  }, 2000);
}

function showLoading() {
  document.getElementById("loading").style.display = "flex";
}

function hideLoading() {
  document.getElementById("loading").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll with offset
  document.querySelectorAll(".nav-item a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      const offset = parseInt(this.getAttribute("data-offset")) || 0;
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  });

  // Back to top button functionality
  const backToTopButton = document.querySelector(".back-to-top");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  window.scrollToTop = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
});
