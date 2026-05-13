import styles from "./page.module.css";
import PasswordGate from "./PasswordGate";

const achievements = [
  {
    area: "東京都大田区大森北一丁目",
    type: "事業用地",
    feature: "不動産会社様がご所有の土地、テナントビル用地として取引",
  },
  {
    area: "東京都江戸川区南小岩七丁目",
    type: "事業用地",
    feature: "確定測量・建物現況・契約不適合免責、建売用地として取引",
  },
  {
    area: "東京都葛飾区亀有四丁目",
    type: "アパマン用地",
    feature: "不動産会社様がご所有の土地、賃貸マンション用地として取引",
  },
  {
    area: "東京都大田区山王一丁目",
    type: "区分マンション",
    feature: "残置物あり・契約不適合免責、フルリノベーション再販物件として取引",
  },
  {
    area: "千葉県船橋市浜町一丁目",
    type: "収益物件",
    feature: "現況渡し・残置物あり・契約不適合免責、賃借人付き立退き物件として取引",
  },
];

const propertyTypes = [
  {
    title: "アパマン用地\n事業用地",
    image: "property-apartment-land.png",
  },
  {
    title: "収益物件\nレジ・ビル等",
    image: "property-income.png",
  },
  {
    title: "区分マンション",
    image: "property-condo.png",
  },
  {
    title: "立退き案件",
    image: "property-eviction.png",
  },
  {
    title: "残置物あり物件",
    image: "property-leftovers.png",
  },
  {
    title: "再建築不可",
    image: "property-rebuild-disabled.png",
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
          <img className={styles.logoMark} src="ir-logo-mark.png" alt="" aria-hidden="true" />
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
            アパマン用地、事業用地、収益物件（レジ・ビル等）、区分マンション、立退き案件、残置物あり物件、再建築不可まで、
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

          <aside id="company" className={styles.companyArea}>
            <div className={styles.sectionHeader}>
              <h2>会社情報・対応エリア</h2>
            </div>
            <div className={styles.company}>
              <div className={styles.companyBlock}>
                <h3>会社名</h3>
                <p>株式会社 IR estate</p>
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
                <h3>免許番号</h3>
                <p>千葉県知事（1）第18184号</p>
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
            </div>
          </aside>
        </div>
      </section>

      <section id="service" className={styles.strengthSection}>
        <div className={styles.strengthInner}>
          <article className={styles.serviceContent}>
            <p className={styles.eyebrow}>Service</p>
            <h2>事業内容</h2>
            <div className={styles.serviceCard}>
              <h3>不動産買取事業</h3>
              <p>
                居住用不動産（区分MS、戸建て、土地）、事業用不動産、借地権、
                再建築不可等々種別・規模問わずお気軽にご相談ください。
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>コンサルティング事業</h3>
              <p>
                不動産売買に限らず、賃貸、建築、税務等々
                その方にとって最適なサービスをご提案いたします。
              </p>
            </div>
          </article>

          <div className={styles.strengthContent}>
            <div>
              <p className={styles.eyebrow}>Strength</p>
              <h2>IR estateの強み</h2>
            </div>
            <div className={styles.strengthCards}>
              <article>
                <span>01</span>
                <div>
                  <h3>幅広い物件種別に対応</h3>
                  <p>
                    一般的な不動産から、権利関係や利用条件に課題がある案件まで、
                    相談初期から実務目線で整理します。
                  </p>
                </div>
              </article>
              <article>
                <span>02</span>
                <div>
                  <h3>法人間取引に適した進行</h3>
                  <p>
                    不動産会社・金融機関との連携を前提に、情報開示、条件調整、
                    スケジュール管理まで丁寧に進めます。
                  </p>
                </div>
              </article>
              <article>
                <span>03</span>
                <div>
                  <h3>出口を見据えた判断</h3>
                  <p>
                    価格だけでなく、用途、収益性、再販可能性、リスク要因を踏まえ、
                    案件ごとに現実的な道筋を検討します。
                  </p>
                </div>
              </article>
            </div>
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
