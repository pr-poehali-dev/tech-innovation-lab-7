const TEACHER_IMG = "https://cdn.poehali.dev/projects/978904af-65dc-47fa-bff8-8c83874bafd0/files/f2b02f95-19aa-4aaa-b2f6-3c70a7ee9f70.jpg";
const READING_IMG = "https://cdn.poehali.dev/projects/978904af-65dc-47fa-bff8-8c83874bafd0/files/c752d146-ae06-487f-9c20-c370fedaf95f.jpg";
const SPORT_IMG = "https://cdn.poehali.dev/projects/978904af-65dc-47fa-bff8-8c83874bafd0/files/f8190473-adf3-46e2-9420-d4a8a54b157c.jpg";

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
          <div className="hero-img" style={{ backgroundImage: `url(${TEACHER_IMG})`, backgroundSize: "cover", backgroundPosition: "center top" }}>
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
            &nbsp; * ЛЮБОВЬ К ЗНАНИЯМ * ГЕРЕВЫЙ СПОРТ * ЛИТЕРАТУРНОЕ ЧТЕНИЕ * КАЖДЫЙ РЕБЁНОК ТАЛАНТЛИВ * РАЗВИТИЕ ЧЕРЕЗ ИГРУ * ЛЮБОВЬ К ЗНАНИЯМ * ГЕРЕВЫЙ СПОРТ * ЛИТЕРАТУРНОЕ ЧТЕНИЕ * КАЖДЫЙ РЕБЁНОК ТАЛАНТЛИВ * РАЗВИТИЕ ЧЕРЕЗ ИГРУ
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
              <img src={TEACHER_IMG} alt="Закурдаев Кирилл Романович" />
              <div className="menu-card-body">
                <h3 style={{ marginBottom: "10px" }}>Кирилл Романович</h3>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Учитель начальных классов с горящим сердцем и неиссякаемой энергией. Верю, что каждый ребёнок — это целый мир, который нужно бережно открыть. Каждый день — возможность вдохновить!
                </p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)", color: "white" }}>Геревый спорт</span>
              <img src={SPORT_IMG} alt="Геревый спорт" />
              <div className="menu-card-body">
                <h3 style={{ marginBottom: "10px" }}>Увлекаюсь геревым спортом</h3>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Вне класса я активный спортсмен — геревый спорт даёт заряд энергии и учит работать в команде. Честная игра и воля к победе — ценности, которые я несу детям каждый день.
                </p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>Читаем!</span>
              <img src={READING_IMG} alt="Литературное чтение" />
              <div className="menu-card-body">
                <h3 style={{ marginBottom: "10px" }}>Литературное чтение</h3>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Веду уроки литературного чтения — учу детей не просто читать слова, а чувствовать историю, сопереживать героям и открывать книгу как захватывающее приключение.
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
          <div className="vibe-img" style={{ backgroundImage: `url(${SPORT_IMG})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
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
              <img src={READING_IMG} alt="Дети читают" />
            </div>
            <div className="social-item">
              <img src={TEACHER_IMG} alt="Учитель" />
            </div>
            <div className="social-item">
              <img src={SPORT_IMG} alt="Геревый спорт" />
            </div>
            <div className="social-item">
              <img src={READING_IMG} alt="Литературное чтение" />
            </div>
          </div>
        </section>
      </main>

      <footer id="contact">
        <div>
          <div className="footer-logo">К*ЗАКУРДАЕВ</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Закурдаев Кирилл Романович — учитель начальных классов. Литературное чтение, геревый спорт и настоящая любовь к детям.
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