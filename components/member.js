export default function Member() {
  return (
    // TODO: APIで取得できる状態にする
    <section className="mt-16 mb-16 md:mb-12">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
        Member
      </h2>
      <ul className="pt-4">
        <li>
          <div>
            name<br />
            description<br />
            sns(instagram, tiktok)<br />
            image
          </div>
        </li>
      </ul>
    </section>
  )
}
