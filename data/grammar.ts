import { Grammar } from "../types";

export const grammar: Grammar[] = [
  {
    id: 1,
    grammar: "～をもとに（して）",
    english: "based on",
    background:
      "To create smth based on X (in metaphoric way, there is no real materia used)",
    conjunction: "N + をもとに（して） N + をもとにした + N",
    sentence:
      "この 小説[しょうせつ]は 作者自身[さくしゃじしん]の 個人的[こじんてき]な 体験[たいけん]をもとに 書[か]いたものだそうだ。",
    sentence_english:
      "They say this novel was written based on the author's personal experience."
  },
  {
    id: 2,
    grammar: "～に基づいて",
    english: "based on",
    background:
      "To think/suggest an idea/plan based on some data, rule, investigation. Is followed by verb construction.",
    conjunction: "N+に基づいて N+に基づく/に基づいた+N",
    sentence:
      "最新[さいしん]のデータに基づいて 売[う]り 上[あ]げ 計画[けいかく]を 立[た]てたいと 思[おも]います。",
    sentence_english:
      "I think on planning the net sales based on the newest data."
  },
  {
    id: 3,
    grammar: "~に関して",
    english: "in connection with; regarding",
    background:
      "Official speech, news, announcements. Followed by the verbs indicating need for investigation  (調べる•説明する). Compare: after について always go the case details.",
    conjunction: "N+に関して N+に関する+N",
    sentence:
      "ごみ 処理[しょり]の 問題[もんだい]に関しては、 環境課[かんきょうか]の 課長[かちょう]がご 説明[せつめい]いたします。",
    sentence_english:
      "Head of the environment protection department provided comments regarding the waste issue."
  },
  {
    id: 4,
    grammar: "~をめぐって",
    english: "regarding",
    background:
      "Regarding smth that is a conflict or debate point between multiple confronting parties.",
    conjunction: "N+をめぐって N+をめぐる+N",
    sentence: "親が残した土地をめぐって親族が争っている。",
    sentence_english:
      "Relatives argued over the piece of land left by the parents."
  },
  {
    id: 5,
    grammar: "~ にかけては",
    english: "as for; regarding",
    background:
      "As for doing X, subject is the best/is well above any other person.",
    conjunction: "N+にかけては",
    sentence: "あの政治家は演説にかけては最高のレベルだ。",
    sentence_english:
      "As for making speeches, this politician shows the highest skill level."
  },
  {
    id: 6,
    grammar: "~に対して (1)",
    english: "related to; addressed to",
    background:
      "Regarding a person/company/idea, smb holds a certain emotion/ impression",
    conjunction: "N+に対して N+に対する+N",
    sentence: "目上のひとに対してそんな乱暴な言い方をしてはいけません。",
    sentence_english:
      "You can't use this rude way of addressing while speaking to people above you."
  },
  {
    id: 7,
    grammar: "~に対して (2)",
    english: "on the contrary; different from; while",
    background: "While smth is X, there is a different Y.",
    conjunction:
      "X+の+にたいして, where X  can be: N / Adj-な / Adj-である / N-な / N-である",
    sentence:
      "うちでは、父は 感情[かんじょう]が 激[はげ]しいのに対して、母は 冷静[れいせい]で 穏[おだ]やかな 性格[せいかく]です。",
    sentence_english:
      "As for my family, while my dad is very expressive, my mom has a calm and reserved attitude."
  },
  {
    id: 8,
    grammar: "～にこたえて",
    english: "responding to",
    background:
      "Responding to smb's hopes, desires, requests smth is done. Is followed by an action sentence/ verb.",
    conjunction: "N+にこたえて N+にこたえる+N",
    sentence:
      "その 歌手[かしゅ]は、 会場[かいじょう]の人々アンコールにこたえて 再び[ふたたび] 舞台[ぶたい]に出てきた。",
    sentence_english:
      "That singer, responding to encores of the people gathered, entered the stage one more time."
  },
  {
    id: 9,
    grammar: "～に沿って",
    english: "along with, according to",
    background:
      "In accordance with a certain rule, plan, manual, thought smth is progressing.",
    conjunction: "N+に沿って N+に沿う/に沿った+N",
    sentence: "与えられたテーマに沿ってレポートを書き進めてください。",
    sentence_english:
      "Please proceed with writing your report in accordance with the topic provided."
  },
  {
    id: 10,
    grammar: "～のもとで",
    english: "under the influence of",
    background:
      "Under the influence of a certain important person (parents, teacher) smth happens. Often refers to trainings, or bringing up, or lifestyle.",
    conjunction: "N+のもとで",
    sentence: "チームは今、新しい監督のもとで練習にはげんでいる。",
    sentence_english:
      "Team is now training hard under an oversight of a new trainer."
  },
  {
    id: 11,
    grammar: "～のもとに",
    english: "given that; under the circumstances",
    background: "Given certain circumstances/condition smth happens",
    conjunction: "N+のもとに",
    sentence:
      "校庭でのキャンプファイアーは夏の最大イベントで、周辺住民の了解のもとに１０年も続いている。",
    sentence_english:
      "Starting campfire in the school yard is summer's biggest event and it continues for 10 years already under the agreement with nearby living people."
  },
  {
    id: 12,
    grammar: "～向けだ",
    english: "For (smb)",
    background:
      "Made (for), designed (for) some specific and important group of people",
    conjunction: "N+向けだ",
    sentence: "この工場で生産されている発電機は個人向けだ。",
    sentence_english:
      "Power generators manufactured at this plant are for private use."
  },
  {
    id: 13,
    grammar: "～につれて",
    english: "as; along",
    background:
      "As X is changing, Y gradually changes too and in the same direction. Is used when Y naturally accompanies X and is NOT a result of smb's will",
    conjunction: "N+につれて V-う+につれて",
    sentence: "台風の接近につれて、雨や風が強くなってきた。",
    sentence_english:
      "As typhoon was getting closer, rain and wind were becoming stronger."
  },
  {
    id: 14,
    grammar: "～に従って",
    english: "as; along",
    background:
      "As X is changing, Y is gradually changing too, in the same direction. Y is naturally associated with X, AND X always results from smb's will or intention",
    conjunction: "N+にしたがって V-う+にしたがって",
    sentence: "車のスピードが上がるにしたがって、事故の危険性も高くなる。",
    sentence_english:
      "As a car's speed grows, the risk of an accident increases."
  },
  {
    id: 15,
    grammar: "～に伴って",
    english: "as; along",
    background:
      "As X changes, Y is changing accordingly. Is used when saying about indefinite changes -> after expression that may mean either increase or decrease. Used in official speech.",
    conjunction: "N/V-う+に伴って N+に伴う+N",
    sentence: "入学する留学生数の変化に伴って、クラス数を変える必要です",
    sentence_english:
      "We need to change the number of classes in accordance with the changes in numbers of foreign students applying."
  },
  {
    id: 16,
    grammar: "～とともに",
    english: "as; along",
    background:
      "As X decreases (increases), Y is decreases (increases) accordingly. Is used when talking about definite changes. Is used in official speech.",
    conjunction: "N/V-う+とともに",
    sentence: "経済の回復とともに、人々の表情も明るくなってきた。",
    sentence_english:
      "As the economics was restoring, people's faces were growing brighter."
  },
  {
    id: 17,
    grammar: "～次第だ",
    english: "depending on",
    background:
      "Depending on action X, result Y may change. Y is usually expressed by a single potential outcome of many other possible. Is not used with past tense.",
    conjunction: "N+次第だ",
    sentence: "この夏のトレーニング次第で、秋の試合に勝てるかどうかが決める。",
    sentence_english:
      "Depending on this summer's training, it will be decided whether we win this autumn's contest."
  },
  {
    id: 18,
    grammar: "～に応じて",
    english: "in accordance with",
    background:
      "In accordance with X, Y may change. Y is changing to meet the restrictions put by X (such as age, physical capabilities or budget)",
    conjunction: "N+に応じて N+に応じた+N",
    sentence: "収入に応じて収める税金の額が変わる。",
    sentence_english:
      "The sum of taxes paid changes in accordance with one's income."
  },
  {
    id: 19,
    grammar: "～につけて",
    english: "related to",
    background: "When X happens, a related Y emotion always appears",
    conjunction: "V-う+につけて",
    sentence: "彼女のうわさを聞くにつけて、心配になる。",
    sentence_english: "When I hear rumours about her, I get anxious."
  },
  {
    id: 20,
    grammar: "～に限らず",
    english: "not limited to, not just",
    background:
      "is followed by a phrase expanding the mentioned limited group X to a larger Y, that incorporates X  (e.g. not only weekends, but all year round). Is often followed by みんな、さまざま、いつも.",
    conjunction: "N+に限らず",
    sentence:
      "うちに限らず近所の住民はみんな夜中のバイクの音に悩まされている。",
    sentence_english:
      "From the bikes' noise late at night not only my family suffers, but also all the people living nearby."
  },
  {
    id: 21,
    grammar: "～のみならず",
    english: "not only, but also",
    background:
      "is followed by a sentence that expands group X with a group Y that is on the same ierarchy level (e.g., not only weekends, but also weekdays). Is often followed by も. May start the whole sentence. Only formal speech.",
    conjunction: "N/ N+である/ V-た/ な-Adj+である +のみならず",
    sentence:
      "我が社は日本国内のみならず、アメリカやヨーロッパなどでもビジネス活動を行っております。",
    sentence_english:
      "Our company does business not only in Japan, but also in America, Europe and elsewhere."
  },
  {
    id: 22,
    grammar: "～ばかりか",
    english: "not only X, but also Y",
    background:
      "connects two nouns/sentences, of which the 1st is normal/expected, while the second is normally not expected in the described case",
    conjunction: "N/ Adj-な/ Adj-である/ N-である+ばかりか",
    sentence:
      "Aコースの山道は、初心者には危険なばかりか、途中の景色あまり良くない。",
    sentence_english:
      "The mountain path of the A route is not only dangerous for beginners, but the views along the way are not so good."
  },
  {
    id: 23,
    grammar: "～はもとより",
    english: "let alone; not to mention",
    background:
      "In described situation not only X thing/person is true, but also Y thing/person is true, although Y is less expected/thought of here. Formal.",
    conjunction: "N(+particle)+はもとより",
    sentence:
      "その学校では、教室内ではもとより教室の外でも禁煙を守ってください。",
    sentence_english:
      "Within this school, please follow the non-smoking rule not only in classrooms, but outside them as well."
  },
  {
    id: 24,
    grammar: "～上（に）",
    english: "furthermore, moreover",
    background:
      "Emphatic statement. Not only X is good/bad, but also Y is good/bad. X and Y always develop the same way. に is optional.",
    conjunction: "Adj+な/である+上（に） N+の/である+上（に）",
    sentence:
      "ここは空気がきれいな上、近くに明るいところがないので星が良く見える。",
    sentence_english:
      "The stars are well seen from this place, as the air here is clear and there are no bright lit objects nearby."
  },
  {
    id: 25,
    grammar: "～やら～やら",
    english: "things like X, Y and so on; whether X or not/or Y",
    background:
      'Informal only. Used to list examples of things, events, actions. When means "whether X or not/or Y" is often followed by 分からない or similar expression',
    conjunction: "N/ V-辞書形/  Adj-い +やら、～やら",
    sentence:
      "今日は、上司に叱られるやら、財布を落とすやら（で）さんざんな一日だった。",
    sentence_english:
      "I got told of by my boss; I lost my wallet - it's been a horrible day today."
  },
  {
    id: 26,
    grammar: "～というか～というか",
    english: "one may call it X or Y",
    background:
      "used to give two definitions/ descriptions of the same case/situation, none of which is fully accurate",
    conjunction: "N/ na-Adj stem +と言うか～と言うか",
    sentence:
      "あの子は元気というか、落ち着けがないというか、静かにしていない子です。",
    sentence_english:
      "One may call this child lively or may call him fidgety, but he is a kid who can hardly sit still."
  },
  {
    id: 27,
    grammar: "～にしてるも～にしてるも（にしろ/にせよ）",
    english: "whether X or Y; be it X or Y",
    background:
      "X and Y are contrastive elements and may as well be phrases or sentences. にせよ is used in written speech (with the same formality level).",
    conjunction: "N/ V-辞書形/ V-ない形 +にしてるも・にしろ・にせよ",
    sentence: "高いにせよ安いにせよ、必要なら買うしかない",
    sentence_english:
      "Be it expensive or cheap, if you need something, you have no option but to buy it."
  },
  {
    id: 28,
    grammar: "～といった",
    english: "like; such as; among others",
    background:
      "Is preceded by set of nouns, phrases or sentences and followed by generic noun. There may be only 1 element before といった, which means several other examples are implied. Elements may be united by such particles as や、しかも etc.",
    conjunction: "N1, N2, (....) といった N(general)",
    sentence: "ここではBMWやベンツといったドイツの高級車が人気があるようだ。",
    sentence_english:
      "It looks like expensive German cars such as BMW or Mercedes-Benz are popular here."
  },
  {
    id: 29,
    grammar: "～際に",
    english: "when",
    background: "at a point when X, Y is being done/happens/exists. Formal.",
    conjunction: "Nの / V-う / V-た + 際（に）",
    sentence:
      "こちらの会議室をご利用になる際は、受付で必要事項をご記入ください。",
    sentence_english:
      "When you would wish to use this conference room, please be so kind to register you reservation at the reception desk."
  },
  {
    id: 30,
    grammar: "～に際して",
    english: "in the occasion of; at; prior; when",
    background:
      "in the occasion of X, Y is done. Formal, written. Used when describing special occasions (graduating, wedding, new business, etc). Cannot be preceeded by past tense. NB! に当たって is similar in all aspects, but is used in all types of occasions.",
    conjunction: "N / V-う + に際して",
    sentence: "大阪に転勤するに際して、妻子は東京に残した。",
    sentence_english:
      "When I transferred to Osaka, I left my wife and children behind in Tokyo."
  },
  {
    id: 31,
    grammar: "～に当り；～に当たって",
    english: "in the occasion of; before; prior; when",
    background:
      "In the occasion of X, Y is done/happens. Formal, written. Preceeding verb is always non-past regardless of the final predicate tense. Is often preceeded by Sino-Jpn する verb (another marker of written speech).  NB! に当たって is more formal than に当り ～時 usage is wider: formal/non-formal, past/non-past ～前に is also used with non-past V only, but is (1) less formal and (2) occasion may be non-significant",
    conjunction: "N / V-う +に当り/に当たって",
    sentence: "私は就寝に当たって少量の洋酒を喫することを習慣にしている。",
    sentence_english:
      "It is my custom to drink a small amount of foreign liquor prior to going to bed."
  },
  {
    id: 32,
    grammar: "～とたん（に）/途端/",
    english: "just as; as soon as; the moment",
    background:
      "The very moment X is done, Y happens. Y is either a situation not controlled by main subject, or is epxressed by intransitive verb. Focuses on suddenness. X can only be an action and cannot be a state. X can either be a verb or demonstrative adjective その NB! ～と同時に is very similar, but in addition it can be preceeded by a concurrent state, and by N and Adj",
    conjunction: "V-た / V-たら + とたん（に）",
    sentence: "その牛乳を飲んだら、とたんに腹が痛み出した。",
    sentence_english: "The moment I drank the milk, my stomach started to ache."
  },
  {
    id: 33,
    grammar: "～（か）と思うと/～（か）と思ったら",
    english: "as soon as; soon after; when one feels/thinks that",
    background:
      "Can be used in two ways: (1) non-emotional: as soon as action X happens, action Y happens. As such it describes a habitual action or state. Verb X is always in past tense. (2) emotional: as soon as I think/thought of X, I feel Y. Verb X may be in either tense. It is the tense of verb X that states if the thought is current or it is a recollection of past thought. Stresses a swift change from X to Y",
    conjunction:
      "(1): V-た +（か）と思うと/（か）と思ったら (2): V-う/V-た +（か）と思うと/（か）と思ったら",
    sentence:
      "(1) 赤ちゃんは今泣いたと思うと、もう笑っている。 (2a) 馬鹿にされたかと思うと、悔しい。 (2b) 会社のリストラで職を失うのではないかと思うと、気が重いです。",
    sentence_english:
      "(1) Baby is crying this moment, and the next he is already laughing. (2a) When I think I was despised, I feel distressed (2b) When I think how I might be laid off because of restructuring of my company, I feel depressed"
  },
  {
    id: 34,
    grammar: "～か～ないかのうちに",
    english: "just as; at that instant",
    background:
      "Just as X happens, Y happens almost simultaneously. Strong stress on 2 actions changing each other almost the same moment. Y is a real action and cannot be an intention.",
    conjunction: "V-う/V-た + か + V-ない + かのうちに",
    sentence:
      "一郎はベッドに横になるかないかのうちに、ぐっすり眠ってしまった。",
    sentence_english:
      "Ichirou fell fast asleep the very moment he got into bed."
  },
  {
    id: 35,
    grammar: "～最中だ",
    english: "right when",
    background:
      "Right in the middle of X, Y is done/happens. Y usually expresses an unexpected hindrance to X.",
    conjunction: "N+の/V-ている + 最中だ",
    sentence: "スピーチの最中に、突然電気が消えた。",
    sentence_english: "Right in the middle of the speech the lights went out."
  },
  {
    id: 36,
    grammar: "～うちに",
    english: "while; during; before",
    background:
      'while X is in effect, Y. X is usually a V of state or progressive action, or Adj, or N that expresses a time period (spring, week, day time, etc.) X as a V is always non-past, regardless of the main clause tense. X as a N can\'t be an event, such as "lesson", "meeting", etc. NB! Similar 間に refers only to a period with a clear start and end, while time period indicated by うちに may be indefinite.',
    conjunction: "N-の/V-う/V-ている/V-ない/Adj-い/Adj-な + うちに",
    sentence:
      "(1) 家事は、子供が眠っているうちに、全部やってしまった。 (2) 走っているうちにお腹が痛くなった。",
    sentence_english:
      "(1) I finished all the household chores while the kids were asleep. (2) While I was running, my stomach started to ache."
  },
  {
    id: 37,
    grammar: "～ばかりだ・～一方だ",
    english: "keep ~ing; become ~er and ~er",
    background:
      'X happens continuously or is done repeatedly, or is steadily evolving in the same direction. NB! 一方is a noun and is operated as such (一方+の/だ/です) ばかりだ is less formal and is more often used with negative changes. It also has a 2nd meaning of "He only/always laughs at me" ますます too expresses "continue to; keep ~ing", but it is operated as an Adverb だけ also means "only, always" but it can\'t replace ばかりだ in the same meaning, if it is the main clause.',
    conjunction: "V-う + ばかりだ・一方だ",
    sentence:
      "(1) このごろは仕事が多くて残業が増えるばかりだ。 (2) 牛や豚の病気が広がる一方なので、国中の人が心配している。",
    sentence_english:
      "(1) The amount of job is great and overwork continues to increase. (2) As cattle and swine diseases continue to spread, people of this country are getting anxious."
  },
  {
    id: 38,
    grammar: "～（よ）うとしている",
    english: "about to occur",
    background:
      'X is just about to occur. X is a verb in volitional form (5th base). Often used in formal ocassions, but is not limited to it. NB! ～んとする has the same meaning, but is used in written Japanese and is somewhat archaic. Is combined with 1st base of the verb. 2nd meaning of both structures is "try to do smth',
    conjunction: "V-おう/よう + としている",
    sentence:
      "(1) 駅前に３０階建ての高級マンションが完成しようとしている。 (2) まさに輝かんとする月が雲で隠れた。",
    sentence_english:
      "(1) The top-class 30-floor high residential house nearby the station is about to be completed. (2) The moon, which was just about to shine, was concealed by the clouds."
  },
  {
    id: 39,
    grammar: "～つつある",
    english: "-ing; while",
    background:
      'May express (1) that a certain action is/was in progress or (2) two concurrent actions are done by the same person. May only be preceeded by a V in 2nd base form (V-ます） Is not used to describe everyday situations ("I am eating my dinner" or "I watched TV while drinking" NB! Similar V-ている cannot be used with punctual or movement verbs (帰る、開く) Similar ながら may also be preceeded by other V forms (V-ない、V-て) as well as by Adj and N. If concurrent actions are done by different persons, it is better to use V-ている間に',
    conjunction: "V-2 + つつ（ある）",
    sentence:
      "(1) 台風が九州に接近しつつある。 (2) タバコは体によくないとわかりつつなかなかやめられない。",
    sentence_english:
      "(1) A typhoon is approaching Kyushu. (2) Although knowing that smoking is harmful to my health, I just cannot quit."
  },
  {
    id: 40,
    grammar: "～てはじめて",
    english: "only after; not until",
    background:
      "Smb does smth or smth happens only after smth else happens or smth else is done. NB! 生まれて初めて means \"the first time in one's life",
    conjunction: "V-てはじめて",
    sentence: "実際に現地の様子を見てはじめて、今回の地震のひどさを知った。",
    sentence_english:
      "Only after I saw the real condition of the area I realised how terrible this earthquake was."
  },
  {
    id: 41,
    grammar: "～上で",
    english: "upon; after",
    background:
      "After a certain consideration or preparation, the main action is done. Both preparatory and main actions are volitional and are done by the same subject. In case of N+の上（で）, N is usually the base of Sino-Jpn verb (N-する) and is a noun of interview, investigation and the like. N-の上 sounds more official than N-の上で",
    conjunction: "V-た上で or N-の上（で）",
    sentence:
      "彼女とはお見合いをして、一年間交際した上で、結婚に踏み切りました。",
    sentence_english:
      "I decided to get married after meeting her through an arranged match and dating her for one year."
  },
  {
    id: 42,
    grammar: "～次第",
    english: "as soon as; depend on",
    background:
      'V2-次第/ VN-次第 means "as soon as", while N次第だ means "depends on". In both cases preceeding V/N is a prerequisite for the main clause. Main clause cannot be past tense.  In ～次第 formation polite verbs are used in specific form: いらっしゃり、おっしゃり、なさり. Formal.',
    conjunction: "V2-次第/ VN-次第/ (Xは) N次第だ・で",
    sentence:
      "(1) 山岸教授がいらっしゃり次第、会議を始めたいと思います。 (2) お尋ねの件は、判明次第、ご連絡申し上げます。",
    sentence_english:
      "(1) I'd like to begin our meeting as soon as Prof. Yamagishi arrives. (2) On the matter you have inquired about, I will inform you as soon as I find out."
  },
  {
    id: 43,
    grammar: "～て以来・～てこのかた",
    english: "since then; ever since",
    background:
      'Since a certain time/action/event in the past the situation has not changed. Timepoint in the condition clause must be relatively distant ("this morning" or "yesterday" cannot be used). If used as V-て以来の - can modify a noun. NB! 以来 has more uses and meanings, and is equal to V-てこのかた only in the formation above.',
    conjunction: "V-て以来・V-てこのかた",
    sentence:
      "(1) 生の舞台を見て以来、すっかり歌舞伎のファンになってしまった。 (2) 日本から帰国してこのかた、毎日日本のことを思い出している。",
    sentence_english:
      "(1) Ever since I saw the life performance for the first time, I became a huge fan of kabuki. (2) Ever since I returned home from Japan I keep thinking about it every day."
  },
  {
    id: 44,
    grammar: "～てからではないと・～てからではなければ",
    english: "until; unless",
    background:
      "Until the condition clause is met, the main clause won't /can't happen. The main clause is always negative and non-past.",
    conjunction: "V-て+からではないと・～からではなければ",
    sentence:
      "もっと情報を集めてからではないと、その話が本当かどうか判断できない。",
    sentence_english:
      "Until I get more information, I can't judge if this story is true or not."
  },
  {
    id: 45,
    grammar: "～をはじめ（として・とする）",
    english: "starting with, beginning with",
    background:
      "starting from <smth that represents a group of objects>, there are many other things belonging to this group. Is followed by a collective noun.",
    conjunction: "N+をはじめ・をはじめとして・をはじめするN",
    sentence:
      "日本には「桃太郎」をはじめとして、おじいさん、おばあさんが出てくる昔話が多い。",
    sentence_english:
      'Beginning with "Momotarou", in Japan there are many tales where an old man and old woman appear.'
  },
  {
    id: 46,
    grammar: "～からして",
    english: "even X; judging from X",
    background:
      'Singles out smth for emphasis or presents smth as a basis for judgment. In case the X is a human being, formation always means "even X". If otherwise - meaning depends on the context. In terms of operation からして replaces the subject particle (は or が)',
    conjunction: "N-からして",
    sentence:
      "(1) 僕は彼女の話し方からしてきに食わないんだ。 (2) 彼女はその話し方からして明晰な頭脳を持っていると思う。",
    sentence_english:
      "(1) I hate even the way she talks. (2) Judging fromt he way she talks, I think she is clearheaded."
  },
  {
    id: 47,
    grammar: "～にわたって",
    english: "for, over, ranging, covering",
    background:
      'X takes place over a particular span of time or physical space, X may represent number of occurrences or items, topic area. When used in YからXにわたって, both Y and X are specific time points (e.g, from 9 am till 6 pm), and indefinite time expressions (as "morning" or "yesterday") can\'t be used. Is commonly used with quantifiers of time/distance/space or nouns of time/location/space. When X is a single entity, X must be a word that underlines "entire X", "whole X" - like 全身/whole body. Written/formal speech.',
    conjunction: "N+にわたって+V；N+にわたる+N",
    sentence:
      "(1) 厚い雨雲が関東から九州にわたって広がっている。 (2) 殺人現場は再三にわたって捜査が行われた。",
    sentence_english:
      "(1) Thick clouds extend from Kantou to Kyuushu. (2) The murder site was examined through 3 times."
  },
  {
    id: 48,
    grammar: "～を通じて・～を通して",
    english: "throughout; through, via",
    background:
      "X may be a span of time over which smth happens or exists; or X may be a medium via which smth is done.  NB! Both particles can replace each other in all but one case: を通して can be used with concrete, physical medium, while を通じて cannot.",
    conjunction: "N+を通して・を通して",
    sentence:
      "(1) 父は一生を通じて、一度も東京を出たことがない。 (2) カーテンを通して室内の様子が見えた。",
    sentence_english:
      "(1) My father never throughout his life left Tokyo. (2) The insides of the room can be seen through the curtain."
  },
  {
    id: 49,
    grammar: "～限り",
    english: "as far as, to the extent",
    background:
      "as far as the limits of X can go, smth is done/expected, etc. In case X is a verb, it is often in a potential form. NB! Compare with ～限り（は）, that has a different conjunction and meaning emphasis.",
    conjunction: "N+の+限り； V-う/V-ている+限り",
    sentence:
      "(1) 明日はいよいよ試合だ。力の限り頑張ろう。 (2) 君が知っている限りのことを全部わたしに話してほしい。",
    sentence_english:
      "(1) At last, tomorrow is the match. Let's fight with all our strength. (2) I want you to tell me everything you know."
  },
  {
    id: 50,
    grammar: "～だけ",
    english: "as ~ as possible, as much as",
    background:
      "To do X to the extent smb wants or can do. Supposes that the X action continues for a significant period of time. Is often used with verbs in potential form, is often followed by expressions of wishes, hopes or needs. Often comes in a construction of V+だけ+V, where V is the same verb.",
    conjunction: "V-う+だけ",
    sentence:
      "ここにあるダンボールを、車に積めるだけ積んで持って帰ってください。",
    sentence_english:
      "Please pack into the car as many cardboards lying over there as possible and return back."
  },
  {
    id: 51,
    grammar: "～に限り",
    english: "only (this one of all)",
    background:
      "Formal speech. Underlines that of all similar only X is special. NB! Compare with ～に限って, its meaning is more broad and usage is less formal.",
    conjunction: "N+に限り",
    sentence:
      "この病院は午後6時までですが、急を要する患者さんに限り、時間外でも診察いたします。",
    sentence_english:
      "This hospital is only open until 6 pm, but patients with emergencies are admitted even outside of business hours."
  },
  {
    id: 52,
    grammar: "～に限って",
    english: "exactly X, specifically X",
    background:
      "Is used to express an exclusive focus on topic item X.  (1) May underline that case X is unexpectedly different to usual course of action. (2) Or stress speaker's judgment on X or discontent of X - in this case, the idea of the main clause is often negative, regardless of the main predicate be in negative form or not.",
    conjunction: "N+に限って",
    sentence:
      "(1) ふだん酒などあまり飲まない彼が、今日に限ってかなり飲んだ。何かあったのだろうか。 (2) 急ぐ時に限って、バスがなかなか来ない。 (3) うちの子供に限ってそんなひどいことはしませんよ。",
    sentence_english:
      "(1) Athough he normally doesn't drink alcohol, today he really drank a lot. Smth happened maybe? (2) Of all times, it is when I am on a hurry, the bus doesn't come for ages. (3) Our child, of all children, would not do such a terrible thing."
  },
  {
    id: 53,
    grammar: "～限り(は)",
    english: "so long as",
    background:
      "As long as the X condition lasts, situation remains as is.  NB! 間 and うちに may replace it, when speaking about time intervals. Also, they can be used with i-Adjectives, while 限り（は） cannot.",
    conjunction:
      "V-う・V-ない・V-た・V-ている+限り Adj-な・Adj-である+限り N-である+限り",
    sentence:
      "(1) この試験に通らない限り上級クラスには入れません。  (2) 足が丈夫な限り、まだまだ山登りが楽しめるだろう。",
    sentence_english:
      "(1) You cannot enroll into advanced class until you pass this exam. (2) As long as my legs are alright, I hope to enjoy mountain hilking."
  },
  {
    id: 54,
    grammar: "～限りでは",
    english: "as far as",
    background:
      'Means "as far as I perceive" or "as far as I am informed", i.e. X is a verb of perception (see, hear, etc.) or information (examine, remember, investigate, etc.). Main clause expresses speaker\'s judgment or information they have on the subject.',
    conjunction: "N+の+限りでは V-う・V-た・V-ている+限りでは",
    sentence: "私が知っている限りでは、この近所に花屋はありません。",
    sentence_english: "As far as I know there are no flower shops nearby."
  },
  {
    id: 55,
    grammar: "～を問わず",
    english: "regardless of; whether X or Y; whether X or not",
    background:
      'Basically means "without questioning". May be used with multiple preceeding nouns w/o using such particles as や or と. In advertising materials, を may be dropped. Can become the final predicate in the form of を問わない/を問いません. Is often used with such nouns as 男女、内外、有無 etc. In most cases is interchangeable with に関わらず、に関係なく、によらず. Conjunctions are multiple, and use N, V and Adjectives in various combinations. Below are only some expamples.',
    conjunction:
      "N1({、/と/や}N2)+を問わず XかYか+を問わず, where X&Y - contrastive non-past N,V, Adj Xaff+Xneg+を問わず X+Y+を問わず, where X&Y - antonymic non-past Adj",
    sentence:
      "(1) 年内は平日、休日を問わず、全店朝9時から夜8時まで営業しております。 (2) この競技にはプロアマを問わず参加が可能だ。",
    sentence_english:
      "(1) All our stores will be open from 9 am till 8 pm regardless of whether it is a weekday or weekend until the rest of this year. (2) It doesn't matter if you are an amateur or a professional; everyone can compete in this event."
  },
  {
    id: 56,
    grammar: "～に関わらず・～にかかわりなく",
    english: "regardless of X",
    background:
      'X here may take variety of forms, incl Nouns, phrases or clauses and represents 2 or more possible conditions. Phrase means that smb does smth, smth happens or smth is the case regardless of condition expressed by X. NB! Phrase ～にも関わらず has a different meaning of "despite X',
    conjunction:
      "N+に関わらず XかYか+に関わらず, where Y is antonym to X or is a negative form of X; bth X&Y may be N,V, Adj Many other conjunctions possible",
    sentence:
      "我々は、助成金が下りるかどうかに関わらず、このプロジェクトを続ける。",
    sentence_english:
      "We are going to continue this project, whether we are given the grant or not."
  },
  {
    id: 57,
    grammar: "～も構わず",
    english: "regardless of, despite the",
    background:
      'Basically means "paying no attention to", "not being troubled about". Is used when speaking about a certain action that is not normally seen/observed under these circumstances and is performed regardless of the situation.',
    conjunction:
      "Adj-な・Adj-である+（の）+も構わず N・N-である+（の）+も構わず V-う+の+も構わず",
    sentence: "人目も構わず、道で大泣きしている人を見かけた。",
    sentence_english:
      "I saw a person crying out loud on the way, paying no attention to being seen by people around."
  },
  {
    id: 58,
    grammar: "～はともかく（として）",
    english: "if we put aside X; omitting X",
    background:
      "Speaker would like to shift the stress from X point in the subordinate clause to another point in the main clause, as X is not that important. Not minding X, Y",
    conjunction:
      "N+(particle)+はともかく（として） Adj-な・N-な・V-う+の+はともかく（として）",
    sentence: "この店は、店の雰囲気はともかく、料理の味は最高だ。",
    sentence_english:
      "As for that restaurant, once you don't mind the atmosphere, the cuisine is superb."
  },
  {
    id: 59,
    grammar: "～はさておき",
    english: "if we put aside X, skipping X",
    background:
      "Speaker wants to omit some data that is not related to the topic or is not so important now and turn to the main subject. The clause that ends with はさておき often starts with a question word.",
    conjunction: "N+(particle)+はさておき",
    sentence:
      "飲み会をするなら、細かいことはさておき、まずは場所と時間をきめなくては。",
    sentence_english:
      "If we want to have a drinking party, let's skip the details and first decide on the place and time."
  },
  {
    id: 60,
    grammar: "～わけではない・～というわけではない",
    english: "It is not that; it doesn't mean that",
    background:
      "Phrase is used to deny what is said in previous or following clause. More precisely, to say that X is not completely true. Thus, together with わけだはない such words as 全部、誰でも、いつも etc are often used.",
    conjunction:
      "V-う・V-た・Adj-い・Adj-た+（という）わけだはない Adj-な・Adj-だった・N-の・N-である+わけではない Adj-だ・N-だ+というわけではない",
    sentence: "私は最近あまりたくさん食べないが、食欲がないわけではない。",
    sentence_english:
      "Although I don't eat much these days, it's not that I have no appetite at all."
  },
  {
    id: 61,
    grammar: "～わけがない",
    english: "there's no reason for X",
    background:
      'わけ means "reason", so the phrase literally says there is no reason to believe (=denies the possibility) that smb does smth, or smth takes place, or smth is in a certain state, etc. Normally the clause before わけがない is non-past as it denies the possibility of current/future state. But, when speaking of habits, common beliefs or abilities it can indirectly deny past actions. Expresses speaker\'s opinion. NB! はずがない has similar meaning, but it can be used with past sentences to directly deny past actions, state or events.',
    conjunction: "V-う・Adj-い・Adj-な・N-である+わけがない",
    sentence: "あの店の物がこんなに安いわけがない。",
    sentence_english: "Goods at that shop cannot be this cheap."
  },
  {
    id: 62,
    grammar: "～わけにはいかない・～わけにもいかない",
    english: "cannot do X; cannot help doing X",
    background:
      "Is used to indicate that certain action is not possible in these circumstances OR you cannot give up a certain action in these circumstances (depends of Aff/Neg form of X). Phrase stresses the fact that situation is involuntary and speaker is forced by external circumstances. Used with verbs, in non-past form only. NB! related られる、できる、なければならない express potential, obligation or necessity, while わけにはいかない only stresses that the speaker has no other choice.",
    conjunction: "V-う・V-ない+わけにはいかない",
    sentence:
      "(1) こんな高価な物を頂くわけにはいかない。  (2) この論文は重要だから、読まないわけにはいかない。",
    sentence_english:
      "(1) I can't receive such an expensive gift. (lit. there is no option I can receive it, even if I want) (2) This is an important paper, so I have no choice but to read it."
  },
  {
    id: 63,
    grammar: "～どころではない・～どころか",
    english: "cannot, just impossible, far from X, anything but X",
    background:
      "Indicates that X action or state is absolutely impossible due to the adverse situation. どころではない always comes in the end of the sentence, while どころか only completes the clause. In other aspects their meaning/usage is the same. Preceeding X is always non-past.",
    conjunction:
      "V-う・Adj-い+どころではない N-（をする）+どころではない, N is an action noun な-Adjstem+どころではない",
    sentence: "物凄い排気ガスを吸っているから、健康どころではない。",
    sentence_english:
      "I am breathing with all these awful exhaust fumes, there's no way I can be healthy."
  },
  {
    id: 64,
    grammar: "～ものか (1)",
    english: "definitely not, absolutely not",
    background:
      'Rhetorical question marker that shows a strong negation or disagreement. In colloquial speech changes to もんか for men and もんですか for women. NB! ものか may have an absolutely different meaning of "I wonder if" or "I wish that", in this case it is a real question marker, that may become embedded. In addition, surrounding verbs indicate a potential or change.',
    conjunction: "V-う・Adj-い・Adj-な+ものか",
    sentence: "A: 黙って帰ったら彼に悪いだるう。 B: 構うもんか。",
    sentence_english:
      "A: It's not right if we go home without saying a word to him, right? B: Who cares? (lit: I definitely care not)"
  },
  {
    id: 65,
    grammar: "～というものではない・～というものでもない",
    english: "Y is not X, Y is not equal to X",
    background:
      'Literal meaning is "Y is not thing called X", "When you say Y, it does not mean that X". Phrase is used when the speaker wants to express their opinion on the essence of the subject rather than on how it is called. というものでもない sounds a bit softer',
    conjunction: "V-う・V-だ・Adj-い・Adj-だ・N-だ+というものではない",
    sentence: "自由だからといって、なにをしてもいいというものではない。",
    sentence_english:
      "Something called freedom does not mean that you can do whatever you want."
  },
  {
    id: 66,
    grammar: "～とは",
    english: "what is called X is Y",
    background:
      "Formal version of というのは. Is used to present an explanation or definition for X in formal/written speech.",
    conjunction: "N+とは",
    sentence: "「増悪」とは医学用語で、症状がもっと悪くなることである。",
    sentence_english:
      'Progression" is a special medical term which means that disease symptoms are getting worse.'
  },
  {
    id: 67,
    grammar: "～といえば",
    english: "when it comes to X, Y; once I say X, Y",
    background:
      "Used when the speaker turns from the initial subject to another - either via association or memory, or when the speaker wants so say something more important related to the subject. In case of the second option, formation often looks like XといえばXけど...",
    conjunction: "Cited word+といえば Adj-だ・N-だ・Adj-い+といえば",
    sentence:
      "(1) このコーヒー、ハワイのお生産ですか。ハワイといえば、幸子さんが来月ハワイで結婚式をするんだそうですよ。 (2) 松本さんのうちのお嬢さん、かわいいといえばかわいいけど、ちょっとわがままね。",
    sentence_english:
      "(1) This coffee, was it produced in Hawaii? Speaking of Hawaii, they say that Ms. Sachiko will have a wedding ceremony at Hawaii next month. (2) Mrs Matsumoto daughter is pretty, though not only pretty but also a bit naughty."
  },
  {
    id: 68,
    grammar: "～というと・～といえば・～といったら",
    english: "when you mention X, when it comes to X",
    background:
      "Phrase is used when smth mentioned by smb caused an involuntary response, revokes some memory or the speaker wants to make a remark different from what is expected. In any case, the clause that follows is an involuntary action or state of mind caused by X. NB! といえば is used to present what has just been mentioned as a new topic and it can't be used to question the meaning of X (in this case you have to use というと)",
    conjunction: "V-う・N+というと/といえば/といったら",
    sentence:
      "オーストラリアといえば、すぐにコアラとかカンガルーを思い浮かべる。",
    sentence_english:
      "When one mentions Australia, the first things that come to my mind are something like koala, kangaroo and so on."
  },
  {
    id: 69,
    grammar: "～（のこと）となると",
    english: "when it comes to X, if it is true that X",
    background:
      'When N preceeds the phrase, it means "when it comes to X"; if a clause sentence (S) - "if it is true that X". In case of N, it often comes with a meaning that the whole situation is a bit unexpected. NB! とすると also expresses a provisional idea, however it is used when S is hypothetical or uncertain, while となると means that the speaker sees S to be true or real',
    conjunction: "N+（のこと）+となると Sinf+となると XがN+となると",
    sentence:
      "(1) 弟は、車になると急に専門家みたいになる。 (2) 彼が手伝ってくれないになると、誰かほかのひとを頼むしかない。",
    sentence_english:
      "(1) When it comes to cars, my younger brother turns out to be surprisingly skillful (2) If (it is true that) he is not going to help us, we have no other option but to ask someone else."
  },
  {
    id: 70,
    grammar: "～といったら",
    english: "speaking of X, recalling X",
    background:
      'When speaking of X or recalling X, there is an unusually strong/extreme feeling or action, like "I lost my words", "I forgot how to breathe", etc.',
    conjunction: "N+といったら",
    sentence:
      "このニュースを聞いたときの驚きいったら、しばらく声も出せないほどだった。",
    sentence_english:
      "I was so surprised to hear those news, that became unable to say a word for some while."
  },
  {
    id: 71,
    grammar: "～にもかかわらず",
    english: "altough, though, despite",
    background:
      'Without any relation to preceeding action or state X. Written/formal speech. Literally delivers a strong idea of "totally contrary to everyone\'s expectation". NB! Similar expressions are のに、けれど（も）, but they are less formal and require different conjunction',
    conjunction:
      "V-う・Adj-い+（の）+にもかかわらず N・な-Adjstem+なの/である（の）/だった（の）/であった（の）+にもかかわらず",
    sentence:
      "(1) 激しい雨（だった）にもかかわらず、サッカーの試合は続いた。 (2) 日本の経済力は強くなっているにもヵかわらず、にほんじんはそれを実感できない。",
    sentence_english:
      "(1) In spite of fierce rain, the soccer game continued (2) Despite the fact that the Japanese economy has become strong. the Japanese people can't feel the effects."
  },
  {
    id: 72,
    grammar: "～ものの・～とはいうものの",
    english: "although, even though",
    background:
      'Written/formal. When used to express "although" meaning, ものの does not modify a noun. Instead, it is a conjuction that joins two clauses S1 and S2. Of those S1 is some information, and S2 is a fact that the speaker focuses on, their subject is the same. Given that information, the discussed fact is generally unexpected. Thus, S2 cannot be a question, or intention for any future action (command, request, volition, etc.) - in such cases が or けれども should be used.',
    conjunction:
      "V-う・V-た・Adj-い・Aji-かった+ものの N・Adjstem+である/だった/であった+ものの N・Adj-な+とはいうものの",
    sentence:
      "マネージャーになって給料は上がったものの、急にいろんな仕事が増えてとても忙しかった。",
    sentence_english:
      "Although I became a manager and got a raise, my various tasks quickly increased and I became very busy."
  },
  {
    id: 73,
    grammar: "～ながら（も）",
    english: "although, even though, nevertheless",
    background:
      'Written/formal speech only, disjunctive conjunction meaning "although", with additional emphasis if も is added. Is used usually with 3rd person as the clause subject. Of few exceptions the most frequent is 残念ながら NB! Similar expressions のに、けれども、が are less formal and can be freely used with 1st or 2nd persons as clause subject.',
    conjunction: "V2・V-てい+ながら（も） Adj-い・Adjstem・N+ながら（も）",
    sentence: "ボブは日本にいながらも、洋食ばかり食べている。",
    sentence_english:
      "Although Bob is in Japan, he eats only Western-style food."
  },
  {
    id: 74,
    grammar: "～つつ（も）",
    english: "although",
    background:
      'NB! Compare to つつある (while). This is one of the phrase meanings, "although". "Although I had an X intention/knowledge, I ended up doing smth different',
    conjunction: "V2+つつ（も）",
    sentence: "危険だと知りつつ、山道を登り続けた。",
    sentence_english:
      "Even though I knew it was dangerous, I continued to climb the mountain path."
  },
  {
    id: 75,
    grammar: "～といっても",
    english: "although smb said/say that X",
    background:
      "Clarifies the statement in the preceding sentence, which might be misleading.",
    conjunction:
      "N・N-だ・N-だった+といっても V-う・V-た・Adj-い・Adj-かった+といっても な-Adjstem・Adj-だった+といっても",
    sentence:
      "私は今おばの家に住んでいる。おばといっても、母の兄弟ではなく、祖母の妹に当たる人だ",
    sentence_english:
      "I am now staying at my aunt's house. Even though I call her aunt, she's not my mother's sibling, and is related to my grandma's younger sister."
  },
  {
    id: 76,
    grammar: "～からといって",
    english: "even if, even though, just because",
    background:
      "This conjunction introduces a reason for smb action or for smb having an idea and delivers disapproval of that action or idea. Main clause is always in negative form. Is used in two types of cases: (1) when the speaker expects that listener considers sub-clause to be good reason for main clause - and disagrees; (2) when listener or 3rd party does main clause because of sub-clause - and the speaker disapproves it. May be contracted to からって in speech.",
    conjunction: "Sub-Clauseinf+からといって",
    sentence: "弁償したからといって済む問題ではない。",
    sentence_english:
      "Even if you pay the compensation, it's not like it will solve the problem."
  },
  {
    id: 77,
    grammar:
      "～とすると・～としたら・～とすれば ～となると・～となったら・～となれば",
    english: "If it is true that X, Y",
    background:
      "All of these phrases express some provisional idea. However, those deriving from なる are used when the speaker sees X to be true or real, while those from する are used when X is hypothetical or uncertain.",
    conjunction: "Sinf+とすると・となると",
    sentence:
      "(1) 彼が犯人ではないとすると、どこかにほんとうの犯人がいるはずだ。 (2) 引っ越すとなると、かなりのお金がかかる。だいじょぶかなあ。",
    sentence_english:
      "(1) In case he's not the one who commited the crime, the real criminal must be out there. (speaker believes that 3rd person is not the criminal) (2) If I happen to move, that would require quite a sum of money. Would I manage to do that.. (speaker thinks that moving to another place is unlikely)"
  },
  {
    id: 78,
    grammar: "～ものなら",
    english: "if; if at all",
    background:
      "Is used to express a hypothetical situation that is highly unlikely (as speaker thinks). The V in this structure is often an informal potential non-past verb. The main clause often expresses a wish (V-たい). To strengthen the unlikliness of the sub-clause, it may start with もし",
    conjunction: "Vpot.inf.nonpast+ものなら",
    sentence: "もしできるものなら、もう一度生まれ変わりたい。",
    sentence_english: "If I could, I would like to be born again."
  },
  {
    id: 79,
    grammar: "～(よ)うものなら",
    english: "if X at all; if X happen to",
    background:
      "Used to express an undesirable hypothetical situation. Only verbs can come before ものなら. Written. Often comes together with such words as うっかり or 間違って.   NB! Similar たりしたら can also be used with other parts of speech and is a spoken language.",
    conjunction: "V+（よ）うものなら",
    sentence:
      "私はたばこの煙に特に敏感で、近くで吸われようものならもう何事にも集中できなくなってしまう。",
    sentence_english:
      "I'm particularly sensitive to cigarette smoke, so when someone is smoking nearby, I cannot concentrate on anything."
  },
  {
    id: 80,
    grammar: "～ないことには",
    english: "unless",
    background:
      "Introduces a condition X, w/o which it is difficult for smb to do smth or for smth to take place. I.e. X in the sub-clause is a necessary condition to make main clause actual. The main predicate should be directly or indirectly negative. NB! Similar expressions are なくては、なければ、なかったら. Of those なければ and なかったら are different as they can be used with positive main predicates as well.",
    conjunction: "V-ないことには",
    sentence:
      "日本語学習者は、日本に行かないことには日本語を自然に話せるようには難しいだろう。",
    sentence_english:
      "If a Japanese language learner doesn't go to Japan, it will be difficult for them to learn to speak Japanese naturally."
  },
  {
    id: 81,
    grammar: "～を抜きにしては",
    english: "if not for X; if there were no X",
    background:
      "Speaker focuses on some important topic X, saying that in case X had not exist/had been taken away, main clause woudn't have become real. The main clause is real already.",
    conjunction: "N+を抜きにしては",
    sentence:
      "ボランティアの人たちの助けを抜きにしては、外国人の受け入れ計画は無理だと思う。",
    sentence_english:
      "If not for the help of volunteers, the plan of welcoming the foreigners would have been impossible."
  },
  {
    id: 82,
    grammar: "～としても・～にしても・～にしろ・～にせよ",
    english:
      "even though X is/was the case, even if X is/was true; no matter who/what/when etc.",
    background:
      "Whatever would be the case, speaker's attitude/emotions will not change. Preceeding X may be V, N, Adj, Adv in 普通形 にしても is less formal",
    conjunction: "V, N, Adj, Adv in 普通形",
    sentence: "親元を離れるとしても、できるだけ親の近く住む方がいい。",
    sentence_english:
      "Even if you separate from your parent's house, it is better if you still live somewhere nearby."
  },
  {
    id: 83,
    grammar: "～によって",
    english: "due to, because of; by means of, with",
    background:
      'This particle may have a range of meanings:  (1) the means for doing smth - it can be preceeded by a clause nominalized with こと  (2) dependency on X (situation, smth, smb) - preceeding element can be an embedded Yes-No question.  (3) cause for smth or (4) an agent of a passive sentence. NB! により is also used in 1st and 2nd meanings, but it may only mean an intangible instrument (means of) and is only used in written language. による is used in N+による+N as cause and passive agent, or as means of smth NB2! によって as "means of" differs from で stylistically. The former can only be used in written, impersonal or very formal speach. The latter may be used in all styles によって as agent marker differs from に gramatically and stylistically. The former is used when the subject of passive sentence is inanimate (picture, congress,etc.), the latter - only with animate.',
    conjunction:
      "N・Vinf・い-Adjinf+によって N・な-Adj+だった+によって Embedded Wh-Question+によって・により",
    sentence:
      "(1) この問題は話し合いによって解決出来るはずだ。 (2) 日本へ行けるかどうかによって、来年の計画が全く変わってきます。",
    sentence_english:
      "(1) We should be ale to resolve this problem by means of negotiation (2) Depending on whether I can go to Japan or not, my next year's schedule will be totally different."
  },
  {
    id: 84,
    grammar: "～ものだから・～もので・～もの",
    english: "because of, due to",
    background:
      "Is used in spoken language only to apologise and give respectable reason for an error, delay, etc. もの is mostly used by women and children May be contracted to もんだから、もんで",
    conjunction:
      "Adj-な・N-な+ものだから Adj-かった・Adj-いんだ・V-た+ものだから",
    sentence:
      "すみません。昨日はちょっと熱があったものだから、お休みしました。",
    sentence_english:
      "I'm sorry. I had a slight fever yesterday, and so decided to take a day off."
  },
  {
    id: 85,
    grammar: "～おかげだ・～せいだ",
    english: "because of, due to",
    background:
      "Under the influence fo certain person/circumstances that are out of speaker's control, situation develops. The key to both particles is the speaker's attitude to the result. In case the result is desirable and speaker is thankful, then おかげで, \"thanks to\" is used. In case the result is undesirable, then せいで is used. In both cases the evaluation is totally personal and subjective. Both おかげ and せい are dependent nouns, and should be operated as such せいか is used with both (-) and (+) results, when speaker doubts if X really was the cause for Y.",
    conjunction: "N+の+おかげで・せいで V-う・V-た・Adj-な+おかげで・せいで",
    sentence:
      "(1) いい天気が続いているおかげで、工事が思ったより早く進んでいます。 (2) 今年の春は気温が低い日が多かったせいで、桜の開花が遅い。 (3) 値段のせいか、この商品は売れ行きが悪い。",
    sentence_english:
      "(1) Thanks to ongoing good weather the construction progresses faster than we thought. (2) Because there were many cold days this spring, sakura started to bloom late. (3) It is may be because of the price that this item sells so bad."
  },
  {
    id: 86,
    grammar: "～あまり・あまりの～に",
    english: "because of too much X; so X that Y",
    background:
      "The X in sub-clause was so strong, that the outcome was uncommon. Adj cannot precede あまり, V can be either past or non-past (but presenting a past action or event), non-past form is more common. Formal written. NB! Auxiliary verb すぎる has similar idea, but has following differences: (1) すぎる may be the main predicate, while あまり is a part of sub-clause; (2) すぎる does not always express the cause; (3) V or N preceding あまり usually expresses psychological action or state; (4) すぎる is used in both spoken and written language.",
    conjunction: "N+の+あまり Vinf+あまり あまりの+N+に",
    sentence: "私は喜びのあまり思わず隣の人に抱きついてしまった。",
    sentence_english:
      "I was so happy that without a second thought hugged the person next to me."
  },
  {
    id: 87,
    grammar: "～につき",
    english: "because of, due to",
    background:
      "For the reason of X, certain situation/circumstances occur. Written, very formal.",
    conjunction: "N+につき",
    sentence: "トイレはただ今清掃中につき、ご利用になれません。",
    sentence_english: "WC is being cleaned now, so it is out of service."
  },
  {
    id: 88,
    grammar: "～ことだし",
    english: "because, as, due to",
    background:
      "There might be other reasons, but mainly because of X, Y should be done. Only spoken language.",
    conjunction: "V-う・V-た・Adj-い・Adj-な+ことだし N+の+ことだし",
    sentence: "雨もやんだことだし、ちょっとジョギングしてこようか。",
    sentence_english: "As the rain stopped, won't I go jogging?"
  },
  {
    id: 89,
    grammar: "～のことだから",
    english: "because",
    background:
      "Because it is X, something habitual or usual for X will happen. When X is a N, the main clause must represent a future action, event, or state. Is often used when speaking about people habits.",
    conjunction: "N+のことだから",
    sentence: "夏のことだから、食べ物には十分気を付けてください。",
    sentence_english:
      "Since it is summer, please be extra cautious about what you eat. (X is hidden: since it is summer, and it is natural for food to go bad quickly)."
  },
  {
    id: 90,
    grammar: "～だけに",
    english: "as one would expect; naturally because",
    background:
      "Since it is X, everyone would expect that Y. With this phrase often さすが comes, which means that the speaker is impressed by what comes in the main clause (Y). さすが can be placed before or right after the topic.",
    conjunction:
      "Vinf・Adj-い・Adj-かった・Adj-な・Adj-だった・N-だった+だけに N+だけに",
    sentence: "彼は元アナウンサーだけに声がよく通る。",
    sentence_english:
      "He used to be an announcer, so as expected his voice carries well."
  },
  {
    id: 91,
    grammar: "～ばかりに",
    english: "simply because; just because",
    background:
      'Is used to indicate that a single factor causes a negative situation. Or, in case the ばかりに sub-clause presents desire via たい construction, the main clause may indicate an effort. NB! ～とばかりに has a totally different meaning of "as if smb were saying that X',
    conjunction:
      "Vinf.past+ばかりに Adj-い・Adj-かった+ばかりに Adj-な・Adj/N-だった・Adj/N-である・Adj/N-であった+ばかりに",
    sentence:
      "(1) あの日たまたま休んでいたばかりに、大事な連絡を聞きそびれた。 (2) あいつは目立ちたいばかりに似合わない派手な背広をきいている。",
    sentence_english:
      "(1) I missed an important announcement just because I took my leave that day. (2) He's wearing a gaudy suit jacket that doesn't suit him only because he wants to stand out."
  },
  {
    id: 92,
    grammar: "～からには・～以上（は）・～上は",
    english: "now that X; once X; if X at all",
    background:
      'Indicates that speaker feels there should be a strong logical link between the sub-clause and main clause. NB! There is one case, when からには cannot replace 以上は: when the latter means "as long as smb does smth continuously, good/bad result ensues", and condition is an active action and not a state (e.g. listening is an action, but living somewhere is a state)',
    conjunction: "V-う・V-た・N/Adj-である+からには",
    sentence:
      "ネット上で文章を書いたからには、必ずそれを読む人が存在するのです。",
    sentence_english:
      "Since you published the passage on internet, there obviously would be people who will read it."
  },
  {
    id: 93,
    grammar: "～がたい",
    english: "cannot, unable to",
    background:
      'An auxillary adjective that expresses that for smb it is virtually impossible to do smth. Written or formal only. Comes only with verbs that require an agent.  NB! similar expressions are にくい、辛い. Their difference is (1) stylistic: にくい and 辛い can also be used in spoken language; (2) they can mean "hard to do, but not necessarily impossible"; (3) にくい can also be used with intransitive verbs; (4) づらい is used when the action in focus is physically or psychologically difficult for the agent and for this reason indicates an undesirable situation',
    conjunction: "V2+がたい",
    sentence: "留学中、自分の国では得がたい経験をたくさんした。",
    sentence_english:
      "While studying abroad I got various experience that is almost impossible to obtain in my native country."
  },
  {
    id: 94,
    grammar: "～かねる",
    english: "cannot, hardly possible",
    background:
      'Auxillary verb expressing that smb can\'t do smth even if they want to. Is used in formal written or spoken Japanese when speaker wants to say politely that they can\'t do smth because of some circumstances. For this reason V that comes with かねる is normally a verb that needs a first-person human subject. Exception is if this combination becomes the main predicate in a form of V-かねている. Also this V can\'t be a regular potential form either, except for 分かる and できる. NB! Can be used as かねない, and as a double negation conveys the idea of "it is very possible" or "might" NB2! Similar expressions are にくい and がたい. They have a slightly different meaning of "objectively hard/impossible", while かねる only implies that X is impossible because of some circumstances. Also, がたい is only used in written language.',
    conjunction: "V2+かねる",
    sentence: "あなたの気持ちも理解できますが、その案には賛成しかねます。",
    sentence_english:
      "Although I understand your feelings, I cannot agree with this plan."
  },
  {
    id: 95,
    grammar: "～ようがない",
    english: "cannot do X",
    background:
      'Even though the speaker wants to do X, there is no way/there are no means for X to be done - because よう lit. means "a way to do smth" NB! Is close to はずがない in meaning, but ようがない always supposes some means to do smth.',
    conjunction: "V2+ようがない",
    sentence:
      "彼の連絡先が分からないので、このニュースを知らせたくても知らせようがない。",
    sentence_english:
      "I don't know his contact details, so even though I'd like to pass him the news there's no way I can do that."
  },
  {
    id: 96,
    grammar: "～どころではない",
    english: "cannot; simply impossible; out of question",
    background:
      'Speaker indicates that action/state is simply impossible due to an adverse situation NB! どころではない as synonym to どころか may mean "far from X", "completely different to X". NB2! どころの話ではない has the same meaning and usage, but is more emphatic.',
    conjunction:
      "Adj-い・Vinf.non-past+どころではない N（をする）・Adjstem+どころではない",
    sentence: "仕事が忙しく、旅行どころではない。",
    sentence_english:
      "I am so busy with my job, that having a trip is completely out of question."
  },
  {
    id: 97,
    grammar: "～得る・～得ない",
    english: "can, able, possible // cannot, impossible",
    background:
      'Auxillary verb that expresses possibility or its abscence. Is primarily used in written Jpn, and sometimes in formal speech too. NB! 得る expresses possibility, not ability, so it can\'t be used when speaking about pure ability (e.g. "He can speak Jpn"). NB2! In most cases can be replaced with ～られる or ことができる, except when the main V is totally non-controllable (e.g. "to exist") - in such case only 得る may be used. When used like this, 得る is often read as うる, and its other forms - like 得ない/えない.',
    conjunction: "V2+得る・得ない",
    sentence: "一度に記憶し得る単語の数は限られている。",
    sentence_english:
      "The amount of vocabulary items one can memorize at one time is limited."
  },
  {
    id: 98,
    grammar: "～わりに（は）",
    english: "despite, although, (not) as much as",
    background:
      'despite the X circumstance/characteristic, Y is not proportional to what you would normally expect. わり is a noun that means "ratio, proportion", so preceding X (N, V, Adj) should use the form suitable for a noun. When X is a predicate, the sentence may sound as Xが、そのわりに（は）.  NB! にしては is similar, but (1) Y after にしては may mean complete absence of smth in contrast to expectation, while with わりに Y always exists, it is its degree that is different from expected; (2) with にしては preceding noun may only be a predicate, else this structure can\'t be used; (3) にしては  cannot be used when in the preceding clause has an adjective predicate.',
    conjunction:
      "N/Adjstem+である・だった・であった+わりに（は） N+の+わりに（は） Adj-な・Adj-い+わりに（は） Vinf+わりに（は）",
    sentence: "この料理は安い材料で簡単にできるわりには豪華に見える。",
    sentence_english:
      "This dish looks gorgeous as compared to how easy it is to make it from cheap ingredients."
  },
  {
    id: 99,
    grammar: "～にしては",
    english: "despite, although",
    background:
      "Despite X, unexpected Y is present (or expected Y is not present). X usually means smth specific (e.g., April, 1000 yen) and not smth with a range (e.g. age, price). Y is the speaker's evaluation of the situation in sub-clause. NB! Similar expression is わりに（は）, with the following difference: (1) Y after わりに（は） is always present, but its degree is different; (2) clause before わりに（は） may have an adjective predicate or may have a noun that is not a predicate. In both such cases にしては cannot be used.",
    conjunction: "Vinf+にしては N・Adjstem+である・だった+にしては",
    sentence: "このケーキ、子供が作ったにしてはおいしくできれいますね。",
    sentence_english:
      "These cakes turned out to be tasty for something made by a child."
  },
  {
    id: 100,
    grammar: "～だけ（のことは）ある",
    english: "no wonder; explains it",
    background:
      'with contribution of X, no wonder it results in Y. X is usually smb\'s achievement, skills or habits, and Y  is a positively expected, remarkable result. Reason X and result Y may be presented in different order, and may be split into separate sentences, e.g.: "Result Y. Xだけのことはある." or "Xだげのことはあって、result Y." Structure is often used with adverb さすが, which doubles the expectedness of result Y. If this adverb is used, it comes in the second part of the phrase (be it with X or with Y).',
    conjunction:
      "Vinf・Adj-い・Adj-な+だけ（ことは）ある Adjstem・N+だった+だけ（ことは）ある",
    sentence:
      "彼は若いころから俳句を作ってきただけのことはあって、さすがに自然に対する観察眼が鋭い。",
    sentence_english:
      "He has been composing haiku since his younger days. No wonder he has such a sharp eye for nature."
  },
  {
    id: 101,
    grammar: "～として",
    english: "as smb/smth; in the capacity/role of",
    background:
      "For X in such a role/circumstances/position/name, Y hapens or Y applies",
    conjunction: "N+として",
    sentence: "彼は選手を引退した後、コーチとしてチームのために働いた。",
    sentence_english:
      "After he retired from being an athlete, he started to work for the team as a coach."
  },
  {
    id: 102,
    grammar: "～にとって",
    english: "to; for",
    background:
      "From the standpoint of X; so far as X is concerned. The preceding X cannot be the agent or the experiencer (i.e. semantic subject), for such a noun には should be used. NB! related espression には has the following differences: (1) cannot be used before N, while にとっての can; (2) には gives a sense of contrast (not for others, but for us; at least for us; etc.), while にとって is neutral in this aspect.",
    conjunction: "N+にとって",
    sentence: "今日は私達にとって忘れられない日になるでしょう。",
    sentence_english: "Today will be an unforgettable day for us."
  },
  {
    id: 103,
    grammar: "～にしたら・～にすれば・～にしてみれば・～にしても",
    english: "if looking from X position",
    background:
      'X before any of these structures is the position/person other than the speaker. Conveys the idea of "if we look from another person\'s point of view, the situation might have different evaluation". The whole case presents an open or assumed conflict of viewpoints.',
    conjunction: "N+～にしたら・～にすれば・～にしてみれば・～にしても",
    sentence:
      "新しい高速道路ができて便利になったが、沿線の住民にしてみれば、あまりありがたくないかもしれない。",
    sentence_english:
      "Even though the new highway is convenient, those people living along it might feel not so grateful. (if I were one of those living along it I might have felt not so grateful)."
  },
  {
    id: 104,
    grammar: "～たところ",
    english: "when - then",
    background:
      'A dependent noun that expresses the idea of "when X was done, Y occurred as a result". Is used to talk about a single definite volitional past action and smth that was the result of that action. Mostly formal. NB! related V-たら has no such restrictions: (1) both formal and informal; (2) may be used for non-past events; (3) may be used with non-volitional actions (e.g. to wake up; to stop raining, etc.); (4) Y may not be a result of X action',
    conjunction: "V-た+ところ",
    sentence:
      "２，３日休みたいと課長に相談したところ、２週間休んでもいいと言われた。",
    sentence_english:
      "When I went to the department head to discuss a desired 2-3 day leave, I was told that it is alright to take 2 weeks."
  },
  {
    id: 105,
    grammar: "～きり",
    english: "since;",
    background:
      'Since X occurred (X action was completed), the resultant situation remained unchanged or nothing different happened. The main clause after sub-clause with きり often comes with negation. NB! when used with nouns of time, counters or demonstrative pronouns きり has the "only X" meaning: only today, only two (people, CDs), only this much (or since then) - etc. In this aspect may be replaced by だけ NB2! Is sometimes used with かかる and つく as かかり（っ）きり or つき（っ）きり, these two meaning that smb was single-focused on some action and had no space for anything else. NB3! related まま may also be used when action in sub-clause and main clause occur simultaneously, while きり may not: "I fell asleep with the lights on',
    conjunction: "V-た+きり",
    sentence: "日本は長寿国だが、寝たきり老人の数が多い。",
    sentence_english:
      "Japan is a country of long-livers, so the number of old people who fell asleep and did not wake up is high. (i.e. who fell asleep and died while sleeping)"
  },
  {
    id: 106,
    grammar: "～あげく",
    english: "eventually; in the end; finally",
    background:
      'The result Y was reached after an extended time was spent on action X. The entire V-た+あげく usually expresses smth troubling, so it can\'t be used to say "having spent my time on enjoyable/neutral X". This conjunction is used only when speaking about two consequent past events, so for future events it is not applicable. Agent of the action X should be explicitly human. May come in a isolated (no preceding V) form of あげく果てには that means a somewhat extreme outcome. NB! In related X上で, Y: X is a preparatory action for an important Y. Also, both X and Y may be future events. NB2! In related X末に,Y: X may be a single or multiple events that finally resulted in the Y end state. Does not have a nuance of extended time spent on X. X and Y are past only. NB3! In related X結果Y: Y is a direct result of X, Y may be a future event.',
    conjunction: "N+の+あげく V-た+あげく V-た+あげく+N",
    sentence: "5時間の及ぶ議論のあげく、結局、結論がでなかった。",
    sentence_english:
      "After a 5-hour long discussion, in the end we were unable to reach any conclusion."
  },
  {
    id: 107,
    grammar: "～末(に)",
    english: "after; finally; in the end of",
    background:
      "A noun that indicates that in the end of a period (when used after a noun that means a time period - week, year, etc.) or after a long, hard mental or physical work, some final end state is reached. X here often supposes several actions are done before Y finally occurs. NB! In the 2nd meaning can be replaced with 後で and のち（に）, but these two don't have the sub-meaining of \"after a long hard work",
    conjunction: "N-の・V-た+末（に）",
    sentence: "数回に及ぶ議論の末、Aの案を採用することにした。",
    sentence_english:
      "After several rounds of discussion, it was decided to implement the plan A."
  },
  {
    id: 108,
    grammar: "～ところだった",
    english: "just about to do smth; almost did smth",
    background:
      'X before ところだった is an action that was just about to occur, but did not occur in the end. Is often used with such adverbs as 危うく and うっかり. X is often an unwanted action, but in case of Xところだったのに it is a desired result that did not become real. NB! be wary of the form of X. Only V-inf before ところだ gives the meaning of "to be about doing X". Other variants, such as V-た, N or Adj give totally different meanings.',
    conjunction: "Vinf+ところだった",
    sentence: "朝寝坊して、危うく試験が受けられないところだった。",
    sentence_english:
      "I overslept this morning and nearly missed taking my exam."
  },
  {
    id: 109,
    grammar: "～ずじまいだ",
    english: "end up not doing smth",
    background:
      "Despite the speaker's initial intention, they missed the chance or proper timing (NB! this detail) to complete the planned action and ended up not doing X. ず here comes from negative V form in old Jpn, so する will turn to せずじまいだ Informal.",
    conjunction: "V1+ずじまいだ",
    sentence: "彼女にラブレターを書いたけど、勇気がなくて出せずじまいだった。",
    sentence_english:
      "Even though I wrote her a love letter, since i did not get enough courage, I ended up not giving it to her."
  },
  {
    id: 110,
    grammar: "～ぐらい・～くらい",
    english: "at least, about",
    background:
      'More complex meaning than just approximate quantity, this conjunction means the lowest extent to which the X action might/should be done: "talk a bit", "at least your own room". When X is a noun, ぐらい is used more often than くらい',
    conjunction: "N・V-た・Adj-な+ぐらい・くらい",
    sentence: "うちにかえってきたら、自分の靴ぐらいちゃんと並べなさい。",
    sentence_english:
      "When you return back home, line up at least your own shoes."
  },
  {
    id: 111,
    grammar: "～など・～なんか・～なんて",
    english: "something like X",
    background:
      "Informal, spoken. Is used to mark X as smth/smb not really significant or of low value.",
    conjunction: "N+(particle)+～など・～なんか・～なんて",
    sentence:
      "桜井さんは文書がとてもうまい。私なんて簡単な文もちゃんと書けないのに。",
    sentence_english:
      "Mr. Sakurai is really good at writing papers. Someone like myself is not capable of writing even a single sentence."
  },
  {
    id: 112,
    grammar: "～まで・～までして・てまで",
    english: "even",
    background:
      "Is used to stress that X is the most extreme example to be used in this situation. Often expresses speakers's surprise, discussion of an issue or criticism.",
    conjunction: "N+(particle)+～まで・～までして V-て+まで",
    sentence: "一番に賛成してくれると思っていた母まで私の結婚に反対した。",
    sentence_english:
      "Even my mother, whom I thought to be the first person to agree, was opposed to my marriage."
  },
  {
    id: 113,
    grammar: "～として～ない",
    english: "even X is not",
    background:
      'Is used to express that even the slightest degree of X is not present. Is used in conjunction with question words (何・だれ) combined with "1+counter particle" - 一度、一つ, etc.',
    conjunction: '(何・だれ)+"1+counter particle"+として～ない',
    sentence: "彼女はこれまで一度として練習を休んだことはない。",
    sentence_english:
      "Up to this moment she hasn't skipped the training even once."
  },
  {
    id: 114,
    grammar: "～さえ",
    english: "even; if only; if just",
    background:
      'Emphatic article that expresses the "even X" idea in non-conditional clauses and "if only X" idea in conditional clauses. Before さえ such particles as が and を can never be used, へ and に are optional, others are compulsory. NB! In case of conditional clause, ば is most common, なら is less common and と is totally not acceptable. The reason is, さえ represents the only needed condition for main clause to become true. In conditional clause さえ may appear in different positions, this way changing the focus point. NB2! In non-conditional clause さえ may be replaced by (1) まで, but only for affirmative sentences; (2) by emphatic marker すら, although the latter is more literal; (3) by particle （で）も, mostly in negative sentences',
    conjunction:
      "N+(particle)+さえ Adj-く+さえ V-て+さえ V2+さえする Adjstem・N+でさえある",
    sentence:
      "(1) この料理は簡単だ。料理の苦手な私でさえ失敗しなかった。 (2) 年をとっても体さえ丈夫なら、ほかにのぞむことはない。",
    sentence_english:
      "(1) This dish is simple. Even such bad at cooking person as myself did not fail to make it. (2) Even if I grow old, if only my body stays healthy, there is nothing more I would wish for."
  },
  {
    id: 115,
    grammar: "～てでも",
    english: "even X",
    background:
      "Conveys speaker's determination to use extreme action X if needed, X is not done under normal circumstances. The main clause which incorporates てでも expresses intention, plan, or wish of the speaker.",
    conjunction: "V-て+でも",
    sentence:
      "熱があるが、大切な約束があるので、どんなことをしてでもいかなければならない。",
    sentence_english:
      "I have a fever, but since there is an important promise, I am to go regardless of what it takes."
  },
  {
    id: 116,
    grammar: "～とみえる",
    english: "seems that X",
    background:
      "Based on what the speaker observes for another party, an assumed judgment is made. May be either main clause or sub-clause predicate. Preceding X may be any part of speech in default form",
    conjunction: "普通形+とみえる",
    sentence:
      "欲しい物はなかったとみえて、客は何も買わずすぐ店をでてしまった。",
    sentence_english:
      "Seemingly having not found the thing they wanted, the customer leaved the shop right away without buying anything."
  },
  {
    id: 117,
    grammar: "～かねない",
    english: "might do X, it is possible to do X",
    background:
      "Negative form of かねる (lit. can't do smth) which reflects the possibility of X to occur, with X being the undesired outcome. Used only with V. Ref: \"you can't exclude that X will happen\" NB! related 恐れがある conveys the negative anticipation too, but (1) is formal, written; (2) expresses the speaker's personal/subjective concern; (3) may also be used with N, Adj",
    conjunction: "V2+かねない",
    sentence:
      "大事なことはみんなに相談しないと、後で文句をいわれかねませんよ。",
    sentence_english:
      "If you don't discuss important things with everyone, there might be complaints later on."
  },
  {
    id: 118,
    grammar: "～恐れがある",
    english: "I'm afraid that there might be/have been X",
    background:
      'Speaker conveys their personal concern that smth negative might happen/might have happened. Formal, written. Is modified by nouns (or noun phrase) or clause. Preceeding clause may be any event: past, present, future. May be used in negative form too, with an idea "there is/was no risk that" NB! related 危険性がある・心配がある are synonymous, but the first is used for objectively risky cases, while the second shares personal concern NB2! related 可能性がある・かもしれない also express possibility, but are neutral and may be used to talk about positive outcomes too. In addition, かもしれない may only be used with Verbs and sometimes may convey an idea totally different from 可能性・恐れがある',
    conjunction:
      "N-の・Adj-な+恐れがある N・Adjstem+である・だった・であった+恐れがある Vinf・Adj-いinf+恐れがある",
    sentence: "この地域の野生動物は絶滅の恐れがある",
    sentence_english:
      "The wild animals in this region are in danger of becoming extinct."
  },
  {
    id: 119,
    grammar: "～まい・～ではあるまいか",
    english: "will probably not",
    background:
      'Formal, written. Somewhat close to ないだろう・ましょう. Has the same form in any tense, so timing of the event is reflected in the main predicate. Is used to express negative volition - either of the speaker or of the 3rd party. NB! V-う+まいと(する) means "try not to V", and する is often omitted when in sub-clause. NB2! V5+か+V-う+まいか means "whether I will/would/should or not" NB3! まい is usually linked to inf non-past V form, but sometimes V2 form may be used. Also, するまい and 来るまい may come as すまい and 来まい',
    conjunction: "V-う+まい Adj-く+はあるまい Adjstem・N+ではあるまい",
    sentence: "この問題はこの学校の学生にはそれほど難しくあるまい。",
    sentence_english:
      "This problem is probably not very difficult for the students of this school."
  },
  {
    id: 120,
    grammar: "～に違いない・～に相違ない",
    english: "there's no doubt that X, must be X",
    background:
      "The speaker is convinced that their guess is true or there is no mistake in their assumption. Expresses the highest level of probability (while the lowest is かもしれない). Speaker's guess is not necessarily based on objective facts (in a contrast to はずだ). Two expressions have the same meaining, but に相違ない is formal. Both structures may be preceded by a sentence, nominalized with の",
    conjunction:
      "Vinf・Adj-いinf+に違いない N・Adjstem+（０）・だった+に違いない",
    sentence: "日本に一年住んでいるのだから、彼も少しは生活に慣れたに違いない",
    sentence_english:
      "As he has been living in Japan for 1 year, he must have got used to this way of life a bit."
  },
  {
    id: 121,
    grammar: "～に決まっている",
    english: "surely X, be bound to X, to be a given, must be",
    background:
      'Expresses that the speaker is absolutely sure X is true, although it is not based on any objective data. In this meaning に決まっている is a modal verb, and should be differentiated from an independent V "smth is determined, decided". Only spoken. NB! related に違いない delivers the idea of a guess, while に決まっている expresses srong convinction, there is no room for guessing when the latter is used.',
    conjunction:
      "Vinf・Adj-いinf+に決まっている N・Adjstem+（０）・だった+に決まっている",
    sentence: "同じ商品なら、気持ちのいい店で買うに決まっている。",
    sentence_english:
      "If the goods are the same, it is a given that people will shop at the store with a good atmosphere."
  },
  {
    id: 122,
    grammar: "～ものだ",
    english: "X  is smth/smb that Y",
    background:
      "Dependent noun that is used by the speaker to express their judgment or present a general characteristic of X, or to state the essence of X. Is never used in past form. The explained X is a general notion (e.g., humanity, (all) parents, (all) department heads), rather than smth or smb specific.  Is often used in newspaper articles to present a purpose, reason, cause, etc for smth introduced before. In such use だ is often dropped. Preceding X is often expanded, presented as a relative clause, so for conjunction NB that ものだ is a noun.",
    conjunction: "V-う・V-ない・Adj-な・Adj-い+ものだ",
    sentence:
      "彼は大会社の社長なのだそうだ。そうは見えなかった。人は外見だけではわからないものだ。",
    sentence_english:
      "They say he is the head of a large company. Although it doesn't look like that. He is someone, whom you can't perceive based on his looks only."
  },
  {
    id: 123,
    grammar: "～というものだ",
    english: "X is Y",
    background:
      "Is used to state the evaluation of X based on common sense. Speaker is expressing the most expected and general point of view, and not their own personal feelings or position.",
    conjunction: "Defalut form of V, Adj, N+というものだ",
    sentence:
      "今日中にアメリカまで荷物を届けると言われても、それは無理というものだ。",
    sentence_english:
      "Although I was told that my package reaches US within today, it is basically impossible."
  },
  {
    id: 124,
    grammar: "～にすぎない",
    english: "not more than X; as little as X; merely X",
    background:
      'Smth or smb is nothing more than stated in terms of amount, degree, status, etc (smth that can be at least relatively measured). NB! related ただ: (1) is preferred when X is an Adj ;(2) can replace にすぎない as ただのNだ, but in this formation ただ may mean "ordinary" depending on N NB2! related だけだ (1) may replace when X is a V, in a mean this "just X, and only that',
    conjunction:
      "N+に過ぎない ＃+counter/少し/わずか+に過ぎない Vinf+に過ぎない",
    sentence: "私の収入はアルバイトを入れても年二万ドルに過ぎない。",
    sentence_english:
      "My income is not more than 20000$, even including my side job."
  },
  {
    id: 125,
    grammar: "～にほかならない",
    english: "be nothing but X",
    background:
      "An action or state metioned as topic is nothing but X. Written, or very formal spoken. May also be used in archaic form of ～にほかならぬ X is either N, or から-clause, or nominalized こと-clause. NB! ～に過ぎない seems to be close, but is quite different in fact, as it focuses on X not to exceed some value. In addition, it is used with V and quantity expressions, where にほかならない is NAP",
    conjunction:
      "(Nは)N+にほかならない ～のは～から+にほかならない ～は～こと+にほかならないほ",
    sentence: "働くのはお金が欲しいからにほかならない。",
    sentence_english:
      "The reason we work is nothing but our wish to gain money."
  },
  {
    id: 126,
    grammar: "～に越したことはない",
    english: "there's nothing better than X; be ideal; be the best",
    background:
      'Is used to indicate that the phrase or action X is the most desirable or ideal. Often has the background idea of "if possible, X is the best" and reflects that the speaker is thinking of an ideal situation. X is always non-past. NB! related ～ば～ほど良い can replace it when used with Adj, but (1) this expression does not imply "if possible", so such adverbs as できれば、できることなら、可能なら may only mark the +に越したことはない; (2) adverb 少しでも may only be used with +に越したことはない',
    conjunction:
      "Adj-い・Adj-ない+に越したことはない Adjstem・N+(である)+に越したことはない Vinf.n-past+に越したことはない",
    sentence:
      "値段に関係なく質のいいものを買いたいが、安く買えるに越したことはない。",
    sentence_english:
      "Although I want to buy an item of good quality regardless of its price, if I managed to buy it cheap, that would be the best."
  },
  {
    id: 127,
    grammar: "～しかない・～（より）ほか（には）ない",
    english: "there's no other option but X; no other way that X",
    background:
      "A phrase that inidcates that there is no other choice than to do X, or only X is true out of select few things. NB! related V1+ざるを得ない has almost the same meaning, except is used with V only. NB2! in (より）ほか（には）ない all parts in brackets are optional and may be combined into various combinations.",
    conjunction: "V-う+しかない・よりほかない N+より・の+ほか（に）はV-ない",
    sentence: "この道は一方通行だから、戻りたくてもまっすぐ行くしかない。",
    sentence_english:
      "This is a one-way road, so even if you'd like to turn back, you have no option but to go straight forward."
  },
  {
    id: 128,
    grammar: "～べきだ・～べきではない",
    english: "should, ought to; shouldn't",
    background:
      "Auxillary which expresses that smth should be some way or smb should do smth, because this is their responsibility/duty, or this is the right/good thing to do, or this is a right/good state to be in. Is not used when the speaker's status is lower than the agent's NB! closest related is はずだ, but it involves speaker's expectation or knowledge about the way X should be rather than objective obligation for X to be that way (which is べきだ). NB2! related ものだ is a generic statement of obligation to express a social norm. Thus, it is used in broader situations, and only partially overlaps with べきだ NB3! In terms of obligation strength, it goes down in a row V2-なければならない>>>V-うべきだ>>>V-たのほうがいい NB4! In terms of prohibitive force, it goes down in a row V-てはいけない>>>V-うべきではない>>>V-うものではない",
    conjunction: "Vinf.n-past+べきだ Adjstem・N+である+べきだ",
    sentence: "そんな質問は、初めて会った人にすべきではない。",
    sentence_english:
      "You shouldn't ask that question a person whom you met for the first time (lit. it's not a good way to do smth)"
  },
  {
    id: 129,
    grammar: "～（よ）うではないか",
    english: "let's do it (together); why don't we do it?",
    background:
      "Written, or formal spoken. Mostly used by men, as a strong call for action. May often be seen in the speeches of politicians addressed to vast auditory.",
    conjunction: "V5+ではないか",
    sentence: "みんなで協力して、このイベントを成功させようじゃないか。",
    sentence_english: "Collaborating together, let's make this event a success."
  },
  {
    id: 130,
    grammar: "～ことだ",
    english: "you'd better do/don't",
    background:
      "One of multiple usages of こと, so NB the environment. Is used to share an advice, should not be used towards people of higher position. Cannot be used with negation, past forms or questions.",
    conjunction: "V-う・V-ない+ことだ",
    sentence: "太りなくなければ、夜遅く食べないことだ。",
    sentence_english:
      "In case you don't want to get fat, you'd better not eat late at night."
  },
  {
    id: 131,
    grammar: "～ものではない・～ものだ",
    english: "should not; should",
    background:
      'Expresses that X should not be (or should be) bc either it goes against social norm, or it is impossible as the result is foreseeably poor, or smb naturally cannot do smth. In two latter cases V in potential form is used. ものだ has other different meanings as well. Should not be used when addressing people of higher position. NB! as "shouldn\'t" may be replaced by べきではない or V-てはいけない, 1st is weaker and 2nd is stronger NB2! as "naturally can\'t" may be replaced by 当然だ or 当たり前だ, both of which mean "smth is a matter of course',
    conjunction: "V-う・V-ない+ものだ V-う+ものではない",
    sentence: "日本では、お見舞いの時は鉢植えの花はあげないものだ。",
    sentence_english:
      "As for Japan, when visiting an ill person, you should avoid giving them a rooted plant."
  },
  {
    id: 132,
    grammar: "～ことはない",
    english: "there's no need to",
    background:
      'Is used to say that there is no need for X and in this meaning is similar to 必要はない. Sometimes may also mean "no possibility for X", and in this meaning is similar to 可能性はない. Be careful for surroundings, this phrase is used only as stated and preceding X is an affirmative non-past V',
    conjunction: "V-う+ことはない",
    sentence:
      "彼の言葉など気にすることはないよ。いつもきつい言い方をする人だから。",
    sentence_english:
      "There's no need to pay attention to his words. He's just the person that always speaks harshly."
  },
  {
    id: 133,
    grammar: "～ものか",
    english: "definitely not, absolutely not",
    background:
      'Rhetorical question marker that expressess strong negative intention or disagreement. Literally means "can X be true at all?". In male colloquial speech changes to もんか, in female - to もんですか',
    conjunction: "V-う・Adj-い+ものか Adj-な・N+な+ものか",
    sentence:
      "A: みんな、あの政治家は信頼できるって言っているよ。 B: 分かるもんか。",
    sentence_english:
      "A: Everyone is saying, that politician may be relied upon. B: How do they know? (or: they can't know for sure)"
  },
  {
    id: 134,
    grammar: "～てしかたがない・～てたまらない・～てしょうがない・～てならない",
    english: "cannot help doing X, cannot control X",
    background:
      "Is used when the speaker describes the situations smb can't control. This includes emorions, bodily reactions (e.g. sneeze), sensations (ache, smells, etc.) spontaneous thoughts, etc. The majority of such situations are negative, but positive ones aren't uncommon. When the subject is not in the 1st person, structure is followed by evidentiality markers (ようだ、らしい, etc.) NB! てたまらない is especially preferred when speaking about bodily reactions and cannot be used when speaking about feelings or thoughts. NB2! てならない is preferred when speaking about feelings and bodily reactions.",
    conjunction: "V-て仕方がない Adj-くて仕方がない Adj-で仕方がない",
    sentence:
      "赤ちゃんはお母さんがいないと不安でたまらないらしく、泣きだした。",
    sentence_english:
      "The baby seemed to be anxious while their mother was away, and started crying."
  },
  {
    id: 135,
    grammar: "～ずにはいられない・～ないではいられない",
    english: "cannot help doing smth",
    background:
      'The restriction is applied by the given situation, so it might be "cannot" as well as "shouldn\'t". Literal meaning is "cannot remain not doing smth" NB! related わけにはいかない indicates there is a pressure from external circumstances, while ないではいられない may mean a burning desire to act.',
    conjunction: "V-ないではいられない V1+ずにはいられあい",
    sentence: "この犬を見ていると、山田さんの顔を思い出さないにはいられない。",
    sentence_english:
      "When I look at that dog, I can't help recalling Yamada's face."
  },
  {
    id: 136,
    grammar: "～ないわけに（は）いかない",
    english: "are to do smth",
    background:
      "Due to external circumstances one can't but do smth. Implies strong obligation, often related to social duties or expectations. Is followed by the volitional action, agent is mostly the speaker.",
    conjunction: "V-ない+わけにはいかない",
    sentence: "親友に結婚式だから、忙しくても出席しはいわけにはいかない。",
    sentence_english:
      "Since this is my best friend's wedding ceremony, even if I am busy, I can't but attend."
  },
  {
    id: 137,
    grammar: "～ざるを得ない",
    english: "have no choice but",
    background:
      'Auxillary that indicates the idea of no-choice situation. Written. Preceding V is a volitional V only, so no potential forms, or smth like 分かる cannot be used with this phrase. NB! related V-ないなければならない cannot replace this phrase when it bears different meaning of "smb has to do smth bc they have an obligation" NB2! may be replaced by V-ないわけにはいかない or V-うしかない',
    conjunction: "V1+ざるを得ない せざるを得ない",
    sentence: "このまま赤字が続けば、経済方針を変更せざるを得ないだろう。",
    sentence_english:
      "If the budget gap continues like this, it's possible there would be no choice but to change the economic policy."
  },
  {
    id: 138,
    grammar: "～たいものだ～てほしいものだ",
    english: "strong wish",
    background:
      "Is used to express a strong, sincere, but a more or less general wish or desire. Is not used for requests or any specific wishes.",
    conjunction: "V2+たいものだ V-て・V-ないで+ほしいものだ",
    sentence: "今度こそ実験は成功して欲しいものだ。",
    sentence_english:
      "This very time I really wish for the experiment to be a success."
  }
];
