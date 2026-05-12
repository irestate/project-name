import styles from "./page.module.css";
import PasswordGate from "./PasswordGate";

const achievements = [
  {
    area: "東京都足立区",
    type: "収益物件（区分マンション）",
    price: "5,000万円〜1億円",
    feature: "賃借人の退去交渉を伴う案件",
  },
  {
    area: "埼玉県川口市",
    type: "工場跡地（更地）",
    price: "1億円〜3億円",
    feature: "土壌汚染調査・除去を伴う案件",
  },
  {
    area: "神奈川県横浜市神奈川区",
    type: "再建築不可（戸建）",
    price: "2,000万円〜4,000万円",
    feature: "接道要件を満たさない再建築不可案件",
  },
];

const propertyTypes = [
  {
    title: "アパマン用地",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "収益物件",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "再建築不可",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "工場跡地",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "残置物の多い物件",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80",
  },
];

const strengths = [
  "複雑案件の豊富な取扱実績",
  "不動産会社・金融機関との強固なネットワーク",
  "専門知識に基づく実務的な解決力",
];

export default function Home() {
  return (
    <PasswordGate>
      <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.logo} href="#top" aria-label="IR estate トップ">
          IR estate
        </a>
        <nav className={styles.nav} aria-label="主要ナビゲーション">
          <a href="#top">トップ</a>
          <a href="#service">事業内容</a>
          <a href="#results">取引事例</a>
          <a href="#properties">取り扱い対象物件</a>
          <a href="#company">会社情報</a>
          <a href="#news">ニュース</a>
        </nav>
        <a className={styles.headerCta} href="#contact">
          法人間取引のご相談
          <span aria-hidden="true">›</span>
        </a>
      </header>

      <section id="top" className={styles.hero}>
        <video
          className={styles.heroVideo}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="hero-video.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroInner}>
          <h1>難易度の高い不動産案件に、実務で応える。</h1>
          <p className={styles.heroLead}>
            不動産会社・金融機関のための複雑案件対応パートナー。
            アパマン用地、収益物件、再建築不可、工場跡地、残置物の多い物件まで、
            一般流通では扱いづらい不動産案件にも柔軟に対応します。
          </p>
          <div className={styles.heroProofs} aria-label="IR estate の強み">
            {strengths.map((strength, index) => (
              <div className={styles.proofItem} key={strength}>
                <span>{index + 1}</span>
                <p>{strength}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.overview} aria-label="主要情報">
        <div className={styles.overviewGrid}>
          <section id="results" className={styles.results}>
            <div className={styles.sectionHeader}>
              <h2>取引事例</h2>
              <a href="#contact">一覧を見る</a>
            </div>
            <div className={styles.resultList}>
              {achievements.map((item) => (
                <article className={styles.resultCard} key={`${item.area}-${item.type}`}>
                  <dl>
                    <div>
                      <dt>エリア</dt>
                      <dd>{item.area}</dd>
                    </div>
                    <div>
                      <dt>種別</dt>
                      <dd>{item.type}</dd>
                    </div>
                    <div>
                      <dt>価格帯</dt>
                      <dd>{item.price}</dd>
                    </div>
                    <div>
                      <dt>案件の特徴</dt>
                      <dd>{item.feature}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </section>

          <section id="properties" className={styles.properties}>
            <div className={styles.sectionHeader}>
              <h2>取り扱い対象物件</h2>
            </div>
            <div className={styles.propertyGrid}>
              {propertyTypes.map((item) => (
                <article className={styles.propertyCard} key={item.title}>
                  <div
                    className={styles.propertyImage}
                    style={{ backgroundImage: `url(${item.image})` }}
                    aria-hidden="true"
                  />
                  <h3>{item.title}</h3>
                </article>
              ))}
            </div>
          </section>

          <aside id="company" className={styles.company}>
            <h2>会社情報・対応エリア</h2>
            <div className={styles.companyBlock}>
              <h3>免許番号</h3>
              <p>千葉県知事（1）第18184号</p>
            </div>
            <div className={styles.companyBlock}>
              <h3>所在地</h3>
              <p>千葉県船橋市本町7-23-10-406</p>
            </div>
            <div className={styles.companyBlock}>
              <h3>連絡先</h3>
              <p>
                代表電話: 047-767-0365
                <br />
                Email: irestate@ir-estate.jp
              </p>
            </div>
            <div className={styles.companyBlock}>
              <h3>対応エリア</h3>
              <p>
                首都圏（東京都・神奈川県・埼玉県・千葉県）
                <br />
                その他エリアもご相談ください。
              </p>
            </div>
            <a id="contact" className={styles.companyCta} href="mailto:info@ir-estate.jp">
              法人間取引のご相談
              <span aria-hidden="true">›</span>
            </a>
          </aside>
        </div>
      </section>

      <section id="service" className={styles.strengthSection}>
        <div className={styles.strengthInner}>
          <div>
            <p className={styles.eyebrow}>Strength</p>
            <h2>IR estateの強み</h2>
          </div>
          <div className={styles.strengthCards}>
            <article>
              <span>01</span>
              <h3>幅広い物件種別に対応</h3>
              <p>
                一般的な不動産から、権利関係や利用条件に課題がある案件まで、
                相談初期から実務目線で整理します。
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>法人間取引に適した進行</h3>
              <p>
                不動産会社・金融機関との連携を前提に、情報開示、条件調整、
                スケジュール管理まで丁寧に進めます。
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>出口を見据えた判断</h3>
              <p>
                価格だけでなく、用途、収益性、再販可能性、リスク要因を踏まえ、
                案件ごとに現実的な道筋を検討します。
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="news" className={styles.news}>
        <div className={styles.newsInner}>
          <h2>ニュース</h2>
          <div className={styles.newsList}>
            <article>
              <time dateTime="2026-05-12">2026.5.12</time>
              <p>会社ホームページをリニューアルしました。</p>
            </article>
          </div>
        </div>
      </section>
      </main>
    </PasswordGate>
  );
}
