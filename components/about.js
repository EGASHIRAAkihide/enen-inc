export default function About() {
  return (
    // TODO: APIで取得できる状態にする
    <section className="mt-16 mb-16 md:mb-12">
      <article className="format lg:format-lg">
        <h2>人生を真のエンターテインメントにデザインする</h2>
        <p className="lead">ENEN, Inc.は人生の様々な体験をエンターテインメントにデザインしていくLIFE ENTERTAIN COMPANYです。</p>
        <ol>
            <li><strong>育つ楽しさ（Dance Coordination Project）</strong>: プレ・ゴールデンエイジに楽しみながら育つための事業</li>
            <li><strong>自由なキャリア（Dual Career Project）</strong>: フレックスワークとアーティスト活動を両立させるための事業</li>
            <li><strong>衝動体験（Emotion Craft Project）</strong>: クリエイティブによって日常に衝動体験を生みだすための事業</li>
            <li><strong>パフォーマンス（Entertainment Dance Project）</strong>: 世界中の誰もが楽しめるポジティブな作品を届けるための事業</li>
        </ol>
      </article>
    </section>
  )
}
