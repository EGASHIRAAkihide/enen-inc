import Image from 'next/image'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaTiktok } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

export default function Member() {
  const memberInfos = [
    {
      id: 1,
      name: '立原 康平',
      position: 'CEO/Business Producer',
      description: '2018年に慶應義塾大学経済学部を卒業後、楽天グループ株式会社で企業のEC事業展開のコンサルティングに従事。同時に2016年よりストリートダンスクルーENcounter ENgraversにて全体統括として、イベントや公演の企画、組織マネジメントを担う。2022年5月にENcounterENgraversのメンバー4名と共にENEN,Inc.を設立。プロジェクトマネジメントやマーケティング戦略の立案の経験を元に、各事業の旗振りを行う。',
      profileImage: '/assets/profileImage001.jpg',
      twitter: 'https://twitter.com/touchy0912',
      instagram: 'https://www.instagram.com/enen_touchy0912/',
    },
    {
      id: 2,
      name: 'AKIHITO',
      position: 'Choreograher/Dancer/Instructor',
      description: '全国に100名以上メンバーが在籍する、HIPHOPダンスチームENcounter ENgraversを主宰する振付師兼ストリートダンサー。17歳で、高校生全国ストリートダンス大会で優勝し、その後、日本最大級の振付作品コンテスト『Legend Tokyo』にて、史上初の審査員満場一致の完全優勝を成し遂げる。振付師としては、『ロミオ＆ジュリエット』『NEWSIES』『17AGAIN』『宝塚歌劇団』をはじめとしたミュージカルからアーティストの振付まで多岐にわたり活動し、22-23 SEASONよりプロダンスリーグD.LEAGUEにてSEPTENI RAPTURESのディレクターに就任。',
      profileImage: '/assets/profileImage002.jpg',
      instagram: 'https://instagram.com/akihito88_enceng/',
    },
    {
      id: 3,
      name: '氏家 健吾',
      position: 'CopyWriter',
      description: '2016年に慶應義塾大学卒業後、広告代理店で6年間勤務し、2022年4月よりGEKIに参画。ブランドと社会の接触面を最大化させるPR視点でのブランドプロポジションやアクションプランを設計し、クリエイティブによる視覚言語でのアウトプットまで行う。ブランドの性格やあるべき姿を汲み取り、血の通ったコピーを起点にブランドを作っていくことを強みとしている。',
      profileImage: '/assets/profileImage003.jpg',
      twitter: 'https://twitter.com/Kengo_Ujiie',
      instagram: 'https://www.instagram.com/kengo_ujiie_official/',
      externalLink: 'https://note.com/kengo_ujiie_geki',
    },
    {
      id: 4,
      name: 'GASHI',
      position: 'Web Director/Web Developer/UI Designer/Dancer',
      description: '2017年愛知大学文学部メディア芸術専攻卒業。現在は個人事業主として、webapp開発・プロジェクトに参画し、さまざまなアプリケーションを開発している。',
      profileImage: '/assets/profileImage004.jpg',
      instagram: 'https://www.instagram.com/gashi_japan/',
    },
    {
      id: 5,
      name: 'Ken’ya Arimura',
      position: 'Director / Producer',
      description: '熊本県出身。2017年名古屋大学卒業。広告会社に入社後、宇宙・アニメ・食品・衣料・車など幅広い業界のアクティベーションイベントやキャンペーンのディレクション・プロデュースに従事。ストリートダンスクルー ENcounter ENgraversでは、イベントオーガナイザーとして、東京芸術劇場や渋谷WOMBでのダンスイベントの全体プロデュースを担当。自分自身のひとりの生活者としての感覚を大切にし、常に「これに触れた人はどう感じるか？」を想像することを第一としている。',
      profileImage: '/assets/profileImage005.jpg',
      instagram: 'https://instagram.com/ken._.ya.jp/',
    },
  ]

  const loader = ({ src, width, quality }) => {
    return `https://enen-inc.vercel.app//${src}?w=${width}&q=${quality}`
  }

  return (
    // TODO: APIで取得できる状態にする
    <section className="mt-32 mb-16 md:mb-12">
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Member
      </h2>
      <ul className="gap-4 grid lg:grid-cols-2 pt-4">
          {/* TODO: component化する */}
          {memberInfos.map((item) => (
            <li key={item.name} className="flex flex-col bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <Image
                className="object-cover w-full h-80 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                width={360}
                height={240}
                alt={item.name}
                src={item.profileImage}
                loader={loader}
              />
              <div className="flex flex-col justify-between p-4 leading-normal md:w-4/5">
                <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                <h6 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{item.position}</h6>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                <ul className="flex gap-3 justify-end">
                  {
                    item.instagram && (
                      <li>
                        <a href={item.instagram} target="_blank">
                          <AiOutlineInstagram size={24} />
                        </a>
                      </li>
                    )
                  }
                  {
                    item.twitter && (
                      <li>
                        <a href={item.twitter} target="_blank">
                          <AiOutlineTwitter size={24} />
                        </a>
                      </li>
                    )
                  }
                  {
                    item.tiktok && (
                      <li>
                        <a href={item.tiktok} target="_blank">
                          <FaTiktok size={20} />
                        </a>
                      </li>
                    )
                  }
                  {
                    item.externalLink && (
                      <li>
                        <a href={item.externalLink} target="_blank">
                          <FiExternalLink size={20} />
                        </a>
                      </li>
                    )
                  }
                </ul>
              </div>
          </li>
          ))}
      </ul>
    </section>
  )
}
