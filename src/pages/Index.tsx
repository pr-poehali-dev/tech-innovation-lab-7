export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">К*ЗАКУРДАЕВ</div>
        <nav>
          <a href="#about">О себе</a>
          <a href="#sport">Увлечения</a>
          <a href="#reading">Уроки</a>
          <a href="#contact">Контакт</a>
        </nav>
        <button className="btn-cta">Написать</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              УЧИТЕЛЬ,
              <br />
              КОТОРЫЙ <span>ЗАЖИГАЕТ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Закурдаев Кирилл Романович — учитель начальных классов. Превращаю каждый урок в маленькое открытие, а каждого ребёнка — в читателя.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a href="#reading">
                <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                  Мои уроки
                </button>
              </a>
              <a href="#about">
                <button className="btn-cta" style={{ background: "white" }}>
                  Узнать больше
                </button>
              </a>
            </div>
          </div>
          <div className="hero-img" style={{ background: "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80') center center / cover" }}>
            <div className="sticker">
              УРОК
              <br />
              С ДУШОЙ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #НАЧАЛЬНЫЕ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ЧИТАЕМ!
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ЛЮБОВЬ К ЗНАНИЯМ * ИГРОВОЙ СПОРТ * ЛИТЕРАТУРНОЕ ЧТЕНИЕ * КАЖДЫЙ РЕБЁНОК ТАЛАНТЛИВ * РАЗВИТИЕ ЧЕРЕЗ ИГРУ * ЛЮБОВЬ К ЗНАНИЯМ * ИГРОВОЙ СПОРТ * ЛИТЕРАТУРНОЕ ЧТЕНИЕ * КАЖДЫЙ РЕБЁНОК ТАЛАНТЛИВ * РАЗВИТИЕ ЧЕРЕЗ ИГРУ
          </div>
        </div>

        {/* О себе */}
        <section className="section-padding" id="about">
          <div className="section-header">
            <h2 className="section-title">О СЕБЕ</h2>
          </div>

          <div className="menu-grid">
            <div className="menu-card">
              <span className="menu-tag">Педагог</span>
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Учитель"
              />
              <div className="menu-card-body">
                <h3 style={{ marginBottom: "10px" }}>Кирилл Романович</h3>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Учитель начальных классов с горящим сердцем и неиссякаемой энергией. Верю, что каждый ребёнок — это целый мир, который нужно бережно открыть.
                </p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>Игровой спорт</span>
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Игровой спорт"
              />
              <div className="menu-card-body">
                <h3 style={{ marginBottom: "10px" }}>Увлечение — геревый спорт</h3>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Вне класса я активный спортсмен — занимаюсь геревым спортом. Командный дух, честная игра и воля к победе — те же ценности, которые я несу детям.
                </p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>Читаем!</span>
              <img
                src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Литературное чтение"
              />
              <div className="menu-card-body">
                <h3 style={{ marginBottom: "10px" }}>Литературное чтение</h3>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Веду уроки литературного чтения — учу детей не просто читать слова, а чувствовать историю, сопереживать героям и открывать книгу как приключение.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Философия */}
        <section className="retro-vibe" id="sport">
          <div>
            <h2 className="vibe-title">СПОРТ И ШКОЛА —<br />ЭТО ОДНО.</h2>
            <p className="vibe-text">
              Геревый спорт научил меня главному: победа рождается в команде. Именно поэтому в моём классе дети не соревнуются — они поддерживают друг друга. Атмосфера доверия, азарт открытий и радость от каждого маленького «я понял!» — вот что такое мои уроки.
            </p>
            <a href="#reading">
              <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
                Мои уроки
              </button>
            </a>
          </div>
          <div className="vibe-img" style={{ background: "url('https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80') center center / cover" }}></div>
        </section>

        {/* Уроки */}
        <section className="section-padding" id="reading">
          <h2 className="section-title" style={{ marginBottom: "20px", textAlign: "center" }}>
            ЛИТЕРАТУРНОЕ ЧТЕНИЕ
          </h2>
          <p style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 50px", color: "#555", fontSize: "16px", lineHeight: 1.7 }}>
            На моих уроках книга — это не обязанность, а путешествие. Мы читаем вслух, обсуждаем, рисуем образы и даже разыгрываем сцены. Каждый урок — маленький театр.
          </p>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Книги"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Чтение"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Урок"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Начальная школа"
              />
            </div>
          </div>
        </section>
      </main>

      <footer id="contact">
        <div>
          <div className="footer-logo">К*ЗАКУРДАЕВ</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Закурдаев Кирилл Романович — учитель начальных классов. Литературное чтение, игровой спорт и настоящая любовь к детям.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#about" style={{ color: "inherit", textDecoration: "none" }}>
                О себе
              </a>
            </li>
            <li>
              <a href="#sport" style={{ color: "inherit", textDecoration: "none" }}>
                Увлечения
              </a>
            </li>
            <li>
              <a href="#reading" style={{ color: "inherit", textDecoration: "none" }}>
                Уроки
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакт</h4>
          <ul>
            <li>Начальная школа</li>
            <li>Литературное чтение</li>
            <li>Геревый спорт</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
