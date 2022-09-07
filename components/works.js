export default function Works() {
  return (
    // TODO: APIで取得できる状態にする
    <section className="mt-16 mb-16 md:mb-12">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
        Works
      </h2>
      <ul className="pt-4">
        <li>
          <div>
            title<br />
            description<br />
            date<br />
            [optional] label<br />
            image<br />
            external link
          </div>
        </li>
      </ul>
    </section>
  )
}
