export default function Info() {
  return (
    // TODO: APIで取得できる状態にする
    <section className="mt-32 mb-16 md:mb-12">
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        会社概要
      </h2>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-8">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800 w-1/4">
                      会社名
                    </th>
                    <td className="py-4 px-6 w-3/4">
                      ENEN合同会社
                    </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                      会社名英名
                    </th>
                    <td className="py-4 px-6">
                      ENEN, Inc.
                    </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                      代表社員
                    </th>
                    <td className="py-4 px-6">
                      立原 康平
                    </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                      事業概要
                    </th>
                    <td className="py-4 px-6">
                      教育事業、ダンスエンターテインメント事業、WEB開発事業、クリエイティブ事業、イベント制作事業
                    </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                      本社住所
                    </th>
                    <td className="py-4 px-6">
                      〒150-0001 東京都渋谷区神宮前6丁目23番4号桑野ビル2階
                    </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                      電話番号
                    </th>
                    <td className="py-4 px-6">
                      000-0000-0000
                    </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                      連絡先
                    </th>
                    <td className="py-4 px-6">
                      info@enen-inc.com
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    </section>
  )
}
