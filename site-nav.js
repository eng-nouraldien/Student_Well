// site-nav.js — FINAL CLEAN STABLE VERSION (Mobile & Dark Mode Safe)

(function () {

  /* ================= Inject Nav Styles ================= */
  const styleText = `
    .sw-topbar {
      background: var(--header-bg);
      border-bottom: 1px solid var(--border);
      padding: 10px 14px;
    }

    .sw-topbar .sw-container {
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
    }

    .sw-brand {
      text-align: center;
    }

    .sw-title {
      font-weight: 800;
      font-size: 18px;
      color: var(--accent);
    }

    .sw-sub {
      font-size: 13px;
      color: var(--muted);
    }

    .sw-navlinks {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: center;
    }

    .sw-navlinks a {
      color: var(--text);
      text-decoration: none;
      padding: 6px 10px;
      border-radius: 8px;
      font-weight: 600;
      transition: 0.2s ease;
    }

    .sw-navlinks a.active {
      background: var(--accent);
      color: #fff;
    }

    .sw-footer {
      padding: 14px;
      border-top: 1px solid var(--border);
      text-align: center;
      color: var(--muted);
      font-size: 13px;
    }

    @media (max-width: 700px) {
      .sw-topbar .sw-container {
        flex-direction: column;
        align-items: center;
      }
    }
  `;

  if (!document.querySelector('style[data-origin="site-nav"]')) {
    const style = document.createElement("style");
    style.setAttribute("data-origin", "site-nav");
    style.textContent = styleText;
    document.head.appendChild(style);
  }

  /* ================= HTML ================= */
  const headerHtml = `
    <div class="sw-topbar" role="banner">
      <div class="sw-container">
        <div class="sw-brand">
          <div class="sw-title">Student Well</div>
          <div class="sw-sub">دعم الطلاب للرفاهية النفسية</div>
        </div>
        <nav class="sw-navlinks" aria-label="القائمة الرئيسية">
          <a href="index.html">الرئيسية</a>
          <a href="survey.html">الاستبيان</a>
          <a href="plans.html">خطط</a>
          <a href="goals.html">أهداف</a>
          <a href="library.html">المكتبة</a>
          <a href="ai.html">نظام ذكي</a>
          <a href="contact.html">تواصل</a>
        </nav>
      </div>
    </div>
  `;

const footerHtml = `
  <div class="sw-footer">
    <div>
      © ${new Date().getFullYear()} StudentWell
    </div>
    <div class="page-credit" style="margin-top:6px;font-size:12px;opacity:0.85">
      Designed & Developed by <br>
      Eng Nour Aldien
    </div>
  </div>
`;

  /* ================= Init ================= */
  document.addEventListener("DOMContentLoaded", () => {

    /* Inject Navbar */
    if (!document.querySelector(".sw-topbar")) {
      document.body.insertAdjacentHTML("afterbegin", headerHtml);
    }

    /* Inject Footer */
    if (!document.querySelector(".sw-footer")) {
      document.body.insertAdjacentHTML("beforeend", footerHtml);
    }

    /* Active Link */
    const path = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".sw-navlinks a").forEach(link => {
      if (link.getAttribute("href") === path) {
        link.classList.add("active");
      }
    });

    /* Inject Dark Toggle */
    let darkBtn = document.getElementById("darkToggle");
    if (!darkBtn) {
      darkBtn = document.createElement("button");
      darkBtn.id = "darkToggle";
      darkBtn.className = "dark-toggle";
      darkBtn.setAttribute("aria-label", "Toggle dark mode");
      darkBtn.textContent = "🌙";
      document.body.appendChild(darkBtn);
    }

    /* Apply Saved Theme */
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
    }

    /* Toggle Handler */
    darkBtn.addEventListener("click", () => {
      const isDark = document.body.classList.toggle("dark-mode");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });

  });

})();

/* ================= Utils ================= */
function getIcon(type) {
  switch (type) {
    case "video": return "🎥";
    case "article": return "📄";
    case "pdf": return "📘";
    case "tool": return "🛠️";
    default: return "📌";
  }
}
document.getElementById('resetPomo').addEventListener('click', ()=>{
  if(timerId) clearInterval(timerId);
  timerId = null;
  running = false;
  total = 25 * 60;
  clock.textContent = format(total);
  state.textContent = 'مستعد';
});
if ('Notification' in window) {
  if (Notification.permission === 'default') {
    Notification.requestPermission();
  }
}
