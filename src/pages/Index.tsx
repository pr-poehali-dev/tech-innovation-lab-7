const MY_PHOTO = "https://cdn.poehali.dev/projects/978904af-65dc-47fa-bff8-8c83874bafd0/bucket/8e55f20b-6d83-4816-89fc-fc7d1e634de7.jpg";
const DIPLOMA_IMG = "https://cdn.poehali.dev/projects/978904af-65dc-47fa-bff8-8c83874bafd0/files/6dde3159-ab0c-4c9b-9f58-bd54eac4e849.jpg";
const STUDENTS_IMG = "https://cdn.poehali.dev/projects/978904af-65dc-47fa-bff8-8c83874bafd0/files/b590ae2f-fed7-4043-86b0-0b36cb780878.jpg";
const SPORT_IMG = "https://cdn.poehali.dev/projects/978904af-65dc-47fa-bff8-8c83874bafd0/files/0c491ac7-1cc8-4cb7-a834-eade00367e1d.jpg";
const READING_IMG = "https://cdn.poehali.dev/projects/978904af-65dc-47fa-bff8-8c83874bafd0/files/77cca8d3-68a7-431f-832c-4097e0b8c93e.jpg";

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
          <a href="#awards">Грамоты</a>
          <a href="#contact">Контакты</a>
        </nav>
        <a href="tel:89145278906">
          <button className="btn-cta">Позвонить</button>
        </a>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              УЧИТЕЛЬ,
              <br />
              КОТОРЫЙ <span>ЗАЖИГАЕТ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Закурдаев Кирилл Романович — учитель начальных классов, победитель конкурса «Учитель года — 2026». Превращаю каждый урок в маленькое открытие, а каждого ребёнка — в настоящего читателя.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a href="#reading">
                <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                  Мои уроки
                </button>
              </a>
              <a href="#contact">
                <button className="btn-cta" style={{ background: "white" }}>
                  Написать
                </button>
              </a>
            </div>
          </div>
          <div
            className="hero-img"
            style={{
              backgroundImage: `url(${MY_PHOTO})`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          >
            <div className="sticker">
              УЧИТЕЛЬ
              <br />
              ГОДА 2026
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #НАЧАЛЬНЫЕ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ЧИТАЕМ!
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * УЧИТЕЛЬ ГОДА 2026 * ГЕРЕВЫЙ СПОРТ * ЛИТЕРАТУРНОЕ ЧТЕНИЕ * КАЖДЫЙ РЕБЁНОК ТАЛАНТЛИВ * РАЗВИТИЕ ЧЕРЕЗ ИГРУ * УЧИТЕЛЬ ГОДА 2026 * ГЕРЕВЫЙ СПОРТ * ЛИТЕРАТУРНОЕ ЧТЕНИЕ * КАЖДЫЙ РЕБЁНОК ТАЛАНТЛИВ * РАЗВИТИЕ ЧЕРЕЗ ИГРУ
          </div>
        </div>

        {/* О СЕБЕ */}
        <section className="section-padding" id="about">
          <div className="section-header">
            <h2 className="section-title">О СЕБЕ</h2>
          </div>

          {/* Большой блок с фото */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0",
            border: "var(--border)",
            boxShadow: "var(--shadow)",
            marginBottom: "40px",
          }}
          className="grid-cols-1 md:grid-cols-2"
          >
            <img
              src={MY_PHOTO}
              alt="Закурдаев Кирилл Романович"
              style={{ width: "100%", height: "500px", objectFit: "cover", objectPosition: "center top", display: "block" }}
            />
            <div style={{ padding: "40px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "20px", background: "white" }}>
              <div style={{ display: "inline-block", background: "var(--primary)", color: "white", padding: "6px 16px", fontWeight: 800, fontSize: "12px", textTransform: "uppercase", width: "fit-content" }}>
                Учитель начальных классов
              </div>
              <h2 style={{ fontFamily: "Unbounded, sans-serif", fontSize: "32px", fontWeight: 800, lineHeight: 1.1 }}>
                Закурдаев<br />Кирилл<br />Романович
              </h2>
              <p style={{ color: "#555", lineHeight: 1.8, fontSize: "15px" }}>
                Молодой и энергичный педагог с горящим сердцем. Убеждён: каждый ребёнок — это целый мир, полный талантов. Моя задача — помочь этим талантам раскрыться. Каждый урок — это не обязанность, а приключение, которое мы проживаем вместе.
              </p>
              <p style={{ color: "#555", lineHeight: 1.8, fontSize: "15px" }}>
                Победитель городского конкурса «Учитель года — 2026». Преподаю литературное чтение, увлекаюсь геревым спортом. Верю, что позитивный настрой учителя — это половина успеха ученика!
              </p>
              <a href="tel:89145278906" style={{ textDecoration: "none" }}>
                <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                  Позвонить мне
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* СПОРТ */}
        <section className="retro-vibe" id="sport">
          <div>
            <h2 className="vibe-title">ГЕРЕВЫЙ<br />СПОРТ — ЭТО<br />МОЁ!</h2>
            <p className="vibe-text">
              Вне класса я активный спортсмен — геревый спорт даёт заряд энергии и учит работать в команде. Командный дух, честная игра, воля к победе — именно эти ценности я несу в класс каждый день. Мои ученики знают: побеждает тот, кто не сдаётся. И это касается не только спорта, но и учёбы!
            </p>
            <a href="#reading">
              <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
                Мои уроки
              </button>
            </a>
          </div>
          <div
            className="vibe-img"
            style={{
              backgroundImage: `url(${SPORT_IMG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </section>

        {/* МОИ УЧЕНИКИ */}
        <section className="section-padding" id="students">
          <div className="section-header">
            <h2 className="section-title">МОИ УЧЕНИКИ</h2>
            <span style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase", fontSize: "14px" }}>
              Гордость класса
            </span>
          </div>
          <div className="menu-grid">
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)", color: "white" }}>Читатели</span>
              <img src={STUDENTS_IMG} alt="Ученики на уроке" />
              <div className="menu-card-body">
                <h3 style={{ marginBottom: "10px" }}>Юные читатели</h3>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Мои ребята — самые любознательные в школе. На уроках они не просто слушают — они спорят, придумывают, удивляются. Каждый из них открывает для себя мир через книгу.
                </p>
              </div>
            </div>
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>Активисты</span>
              <img src={READING_IMG} alt="Литературное чтение" />
              <div className="menu-card-body">
                <h3 style={{ marginBottom: "10px" }}>Урок как театр</h3>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  На уроках литературного чтения мы разыгрываем сцены, обсуждаем героев и рисуем образы. Каждый ребёнок — главный герой своей истории!
                </p>
              </div>
            </div>
            <div className="menu-card">
              <span className="menu-tag">Таланты</span>
              <img src={STUDENTS_IMG} alt="Дети читают" />
              <div className="menu-card-body">
                <h3 style={{ marginBottom: "10px" }}>Каждый талантлив</h3>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Я уверен: нет неспособных детей, есть неподобранный ключик. Нахожу подход к каждому — и результат не заставляет ждать. Мои ученики растут!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ЛИТЕРАТУРНОЕ ЧТЕНИЕ */}
        <section className="section-padding" id="reading" style={{ background: "#fff", borderTop: "var(--border)", borderBottom: "var(--border)" }}>
          <h2 className="section-title" style={{ marginBottom: "16px", textAlign: "center" }}>
            ЛИТЕРАТУРНОЕ ЧТЕНИЕ
          </h2>
          <p style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 50px", color: "#555", fontSize: "16px", lineHeight: 1.8 }}>
            Веду уроки литературного чтения в начальных классах. На моих уроках книга — это не обязанность, а путешествие. Мы читаем вслух, обсуждаем, рисуем образы и разыгрываем сцены. Каждый урок — маленький театр, где все — главные герои!
          </p>
          <div className="social-grid">
            <div className="social-item">
              <img src={READING_IMG} alt="Урок литературного чтения" />
            </div>
            <div className="social-item">
              <img src={STUDENTS_IMG} alt="Дети читают" />
            </div>
            <div className="social-item">
              <img src={MY_PHOTO} alt="Кирилл Романович" style={{ objectPosition: "center top" }} />
            </div>
            <div className="social-item">
              <img src={SPORT_IMG} alt="Геревый спорт" />
            </div>
          </div>
        </section>

        {/* ГРАМОТЫ */}
        <section className="section-padding" id="awards">
          <div className="section-header">
            <h2 className="section-title">ГРАМОТЫ</h2>
            <span style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase", fontSize: "14px" }}>
              Достижения
            </span>
          </div>

          {/* Грамота-карточка */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}>
            {/* Главная грамота */}
            <div style={{
              border: "var(--border)",
              boxShadow: "var(--shadow)",
              background: "white",
              overflow: "hidden",
            }}>
              <img src={DIPLOMA_IMG} alt="Учитель года 2026" style={{ width: "100%", height: "260px", objectFit: "cover", display: "block", borderBottom: "var(--border)" }} />
              <div style={{ padding: "24px" }}>
                <div style={{ background: "var(--accent)", display: "inline-block", padding: "4px 12px", fontWeight: 800, fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>
                  🏆 Главная награда
                </div>
                <h3 style={{ fontFamily: "Unbounded, sans-serif", fontSize: "18px", fontWeight: 800, marginBottom: "10px" }}>
                  Учитель года — 2026
                </h3>
                <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.7 }}>
                  Победитель городского конкурса «Учитель года — 2026» среди учителей начальных классов. Признание коллег, родителей и учеников — лучшая награда!
                </p>
              </div>
            </div>

            {/* Грамота 2 */}
            <div style={{
              border: "var(--border)",
              boxShadow: "var(--shadow)",
              background: "white",
              overflow: "hidden",
            }}>
              <img src={DIPLOMA_IMG} alt="Грамота за педагогическое мастерство" style={{ width: "100%", height: "260px", objectFit: "cover", objectPosition: "center 30%", display: "block", borderBottom: "var(--border)", filter: "hue-rotate(40deg)" }} />
              <div style={{ padding: "24px" }}>
                <div style={{ background: "var(--primary)", color: "white", display: "inline-block", padding: "4px 12px", fontWeight: 800, fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>
                  Педагогика
                </div>
                <h3 style={{ fontFamily: "Unbounded, sans-serif", fontSize: "18px", fontWeight: 800, marginBottom: "10px" }}>
                  За педагогическое мастерство
                </h3>
                <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.7 }}>
                  Почётная грамота за высокие результаты в обучении и воспитании учащихся начальных классов. Выданная школьным советом, 2026 г.
                </p>
              </div>
            </div>

            {/* Грамота 3 */}
            <div style={{
              border: "var(--border)",
              boxShadow: "var(--shadow)",
              background: "white",
              overflow: "hidden",
            }}>
              <img src={DIPLOMA_IMG} alt="Грамота за спорт" style={{ width: "100%", height: "260px", objectFit: "cover", objectPosition: "center 60%", display: "block", borderBottom: "var(--border)", filter: "hue-rotate(200deg)" }} />
              <div style={{ padding: "24px" }}>
                <div style={{ background: "var(--secondary)", color: "white", display: "inline-block", padding: "4px 12px", fontWeight: 800, fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>
                  Спорт
                </div>
                <h3 style={{ fontFamily: "Unbounded, sans-serif", fontSize: "18px", fontWeight: 800, marginBottom: "10px" }}>
                  Активный педагог года
                </h3>
                <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.7 }}>
                  Грамота за популяризацию здорового образа жизни и активного спорта среди учащихся школы. Геревый спорт — не просто хобби, это образ жизни!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* КОНТАКТЫ */}
        <section className="section-padding" id="contact" style={{ background: "var(--dark)", color: "white" }}>
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center", color: "white" }}>
            КОНТАКТЫ
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "30px",
            maxWidth: "800px",
            margin: "0 auto",
          }}>
            {/* Телефон учителя */}
            <div style={{
              border: "3px solid white",
              padding: "30px",
              boxShadow: "8px 8px 0 var(--primary)",
            }}>
              <div style={{ fontSize: "12px", fontWeight: 800, textTransform: "uppercase", color: "var(--accent)", marginBottom: "12px", letterSpacing: "2px" }}>
                Учитель
              </div>
              <h3 style={{ fontFamily: "Unbounded, sans-serif", fontSize: "18px", fontWeight: 800, marginBottom: "10px", lineHeight: 1.3 }}>
                Закурдаев<br />Кирилл Романович
              </h3>
              <a
                href="tel:89145278906"
                style={{ display: "block", fontFamily: "Unbounded, sans-serif", fontSize: "22px", fontWeight: 800, color: "var(--accent)", textDecoration: "none", marginBottom: "16px", letterSpacing: "-1px" }}
              >
                8 914 527-89-06
              </a>
              <p style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.6 }}>
                Учитель начальных классов,<br />литературное чтение
              </p>
            </div>

            {/* Телефон директора */}
            <div style={{
              border: "3px solid white",
              padding: "30px",
              boxShadow: "8px 8px 0 var(--secondary)",
            }}>
              <div style={{ fontSize: "12px", fontWeight: 800, textTransform: "uppercase", color: "var(--accent)", marginBottom: "12px", letterSpacing: "2px" }}>
                Директор
              </div>
              <h3 style={{ fontFamily: "Unbounded, sans-serif", fontSize: "18px", fontWeight: 800, marginBottom: "10px", lineHeight: 1.3 }}>
                Директор<br />школы
              </h3>
              <a
                href="tel:89965278906"
                style={{ display: "block", fontFamily: "Unbounded, sans-serif", fontSize: "22px", fontWeight: 800, color: "var(--accent)", textDecoration: "none", marginBottom: "16px", letterSpacing: "-1px" }}
              >
                8 996 527-89-06
              </a>
              <p style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.6 }}>
                Администрация школы,<br />вопросы по учебному процессу
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">К*ЗАКУРДАЕВ</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Закурдаев Кирилл Романович — учитель начальных классов,<br />победитель «Учитель года — 2026».
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li><a href="#about" style={{ color: "inherit", textDecoration: "none" }}>О себе</a></li>
            <li><a href="#sport" style={{ color: "inherit", textDecoration: "none" }}>Увлечения</a></li>
            <li><a href="#reading" style={{ color: "inherit", textDecoration: "none" }}>Уроки</a></li>
            <li><a href="#awards" style={{ color: "inherit", textDecoration: "none" }}>Грамоты</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li>
              <a href="tel:89145278906" style={{ color: "inherit", textDecoration: "none" }}>
                8 914 527-89-06 (учитель)
              </a>
            </li>
            <li>
              <a href="tel:89965278906" style={{ color: "inherit", textDecoration: "none" }}>
                8 996 527-89-06 (директор)
              </a>
            </li>
            <li style={{ color: "#999" }}>Начальная школа</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
