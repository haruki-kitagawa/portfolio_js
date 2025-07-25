/**
 * WorkList.jsx
 * Date : 2025/06/26
 * Author : H.Kitagawa
 * Desc : 作品一覧画面
 */

import { useLocation } from "react-router-dom";
import MenuBar from "../components/MenuBar";
import WorkItem from "../components/WorkItem";
import routes from "../Routes";
import Images from "../hooks/Images";

const WorkList = () => {
    // サイト内位置管理
    const location = useLocation();
    // 現在ページ名
    const pageTitle = routes.find(r => r.path == location.pathname).label;

    const works = [
        {
            id: 1,
            title: "Aurora Travel",
            image: Images.aurora,
            period: { start: "2024/01", end: "2024/02" },
            desc: [
            "「Aurora Travel」は、オーロラ観賞をテーマにした旅行情報サイトです。",
            "世界各地のオーロラスポットの紹介や、旅行プラン、最新の気象データを掲載し、訪問者が自分に最適な旅行計画を立てられるようサポートします。"
            ],
            stack: ["HTML", "CSS", "JavaScript", "React", "Figma"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/aurora-travel" },
            { label: "GitHub", url: "https://github.com/username/aurora-travel" }
            ],
        },
        {
            id: 2,
            title: "Urban Eats",
            image: Images.eats,
            period: { start: "2024/02", end: "2024/03" },
            desc: [
            "「Urban Eats」は、都市ごとのレストラン情報を集めたグルメ紹介サイトです。",
            "口コミ機能やマップ連携を導入し、利用者が簡単にお店を探せる設計にしました。"
            ],
            stack: ["HTML", "CSS", "JavaScript", "React"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/urban-eats" },
            { label: "GitHub", url: "https://github.com/username/urban-eats" }
            ]
        },
        {
            id: 3,
            title: "BookNest",
            image: Images.book,
            period: { start: "2024/03", end: "2024/04" },
            desc: [
            "「BookNest」は、読書家のための書籍レビューサイトです。",
            "ジャンルごとに本を探せる検索機能や、マイ本棚機能を実装し、ユーザー同士が本をシェアし合える場を目指しました。"
            ],
            stack: ["HTML", "SCSS", "Vue.js", "Firebase"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/booknest" },
            { label: "GitHub", url: "https://github.com/username/booknest" }
            ]
        },
        {
            id: 4,
            title: "FitBuddy",
            image: Images.fitness,
            period: { start: "2024/04", end: "2024/05" },
            desc: [
            "「FitBuddy」は、初心者向けのホームフィットネス支援サイトです。",
            "トレーニング動画やカロリー計算機能を搭載し、モチベーションを維持できるUIを重視して制作しました。"
            ],
            stack: ["HTML", "CSS", "JavaScript", "React", "Chart.js"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/fitbuddy" },
            { label: "GitHub", url: "https://github.com/username/fitbuddy" }
            ]
        },
        {
            id: 5,
            title: "CraftWorks",
            image: Images.craft,
            period: { start: "2024/05", end: "2024/06" },
            desc: [
            "「CraftWorks」は、ハンドメイド作家の作品を紹介・販売するギャラリー型ECサイトです。",
            "作品ごとに詳細ページを設け、魅力が伝わるデザインを心がけました。"
            ],
            stack: ["Next.js", "Tailwind CSS", "Stripe", "TypeScript"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/craftworks" },
            { label: "GitHub", url: "https://github.com/username/craftworks" }
            ]
        },
        {
            id: 6,
            title: "Green Life",
            image: Images.vegetable,
            period: { start: "2024/06", end: "2024/07" },
            desc: [
            "「Green Life」は、家庭菜園の情報発信サイトです。",
            "野菜ごとの育て方記事や育成記録を投稿できる仕組みを実装し、初心者でも楽しめるよう工夫しました。"
            ],
            stack: ["HTML", "CSS", "JavaScript", "Firebase"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/green-life" },
            { label: "GitHub", url: "https://github.com/username/green-life" }
            ]
        },
        {
            id: 7,
            title: "CodeBoost",
            image: Images.program,
            period: { start: "2024/07", end: "2024/08" },
            desc: [
            "「CodeBoost」は、プログラミング学習者向けの情報共有サイトです。",
            "Q&A掲示板や、チュートリアル記事の掲載機能を用意し、学習を支援するプラットフォームとして開発しました。"
            ],
            stack: ["React", "Node.js", "MongoDB", "Express"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/codeboost" },
            { label: "GitHub", url: "https://github.com/username/codeboost" }
            ]
        },
        {
            id: 8,
            title: "Pixel Art Hub",
            image: Images.pixel,
            period: { start: "2024/08", end: "2024/09" },
            desc: [
            "「Pixel Art Hub」は、ドット絵作家のための作品投稿サイトです。",
            "作品をピクセルごとに拡大表示できるビューア機能を作り、制作者のこだわりが伝わるサイトに仕上げました。"
            ],
            stack: ["Vue.js", "SCSS", "Firebase", "Cloud Storage"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/pixel-art-hub" },
            { label: "GitHub", url: "https://github.com/username/pixel-art-hub" }
            ]
        },
        {
            id: 9,
            title: "Coffee Atlas",
            image: Images.coffee,
            period: { start: "2024/09", end: "2024/10" },
            desc: [
            "「Coffee Atlas」は、世界のコーヒー豆情報をまとめた専門情報サイトです。",
            "豆の産地別検索や味の特徴のチャート表示を実装し、コーヒー好きが楽しめるサイトを制作しました。"
            ],
            stack: ["React", "Tailwind CSS", "D3.js"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/coffee-atlas" },
            { label: "GitHub", url: "https://github.com/username/coffee-atlas" }
            ]
        },
        {
            id: 10,
            title: "Movie Flicks",
            image: Images.movie,
            period: { start: "2024/10", end: "2024/11" },
            desc: [
            "「Movie Flicks」は、映画レビューとランキングを扱う情報サイトです。",
            "ジャンル別ランキングや予告編動画の埋め込み機能を搭載し、映画好きのユーザーに向けた設計を行いました。"
            ],
            stack: ["HTML", "CSS", "JavaScript", "TMDB API"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/movie-flicks" },
            { label: "GitHub", url: "https://github.com/username/movie-flicks" }
            ]
        },
        {
            id: 11,
            title: "PetConnect",
            image: Images.pet,
            period: { start: "2024/11", end: "2024/12" },
            desc: [
            "「PetConnect」は、ペットオーナー同士の情報交換を目的としたコミュニティサイトです。",
            "フォーラム機能やペット自慢ギャラリーを用意し、交流しやすいデザインにしました。"
            ],
            stack: ["React", "Firebase", "Tailwind CSS"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/petconnect" },
            { label: "GitHub", url: "https://github.com/username/petconnect" }
            ]
        },
        {
            id: 12,
            title: "Wander Diary",
            image: Images.travel,
            period: { start: "2024/12", end: "2025/01" },
            desc: [
            "「Wander Diary」は、旅の思い出を投稿・共有できるトラベルブログサイトです。",
            "記事投稿フォームや写真ギャラリー機能を実装し、旅好きが集まる空間を目指しました。"
            ],
            stack: ["Next.js", "Markdown", "Vercel", "Tailwind CSS"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/wander-diary" },
            { label: "GitHub", url: "https://github.com/username/wander-diary" }
            ]
        },
        {
            id: 13,
            title: "Trend Closet",
            image: Images.fashion,
            period: { start: "2025/01", end: "2025/02" },
            desc: [
            "「Trend Closet」は、最新ファッションアイテムを紹介するファッションメディアサイトです。",
            "ブランド検索や色別コーディネート提案機能を搭載しました。"
            ],
            stack: ["React", "SCSS", "API連携"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/trend-closet" },
            { label: "GitHub", url: "https://github.com/username/trend-closet" }
            ]
        },
        {
            id: 14,
            title: "StudyMate",
            image: Images.schedule,
            period: { start: "2025/02", end: "2025/03" },
            desc: [
            "「StudyMate」は、学生向けの勉強スケジュール管理サイトです。",
            "カレンダー連携や課題リスト機能を実装し、使いやすさを重視した設計をしました。"
            ],
            stack: ["React", "FullCalendar.js", "Firebase"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/studymate" },
            { label: "GitHub", url: "https://github.com/usertitle/studymate" }
            ]
        },
        {
            id: 15,
            title: "Sweet Recipe",
            image: Images.sweets,
            period: { start: "2025/03", end: "2025/04" },
            desc: [
            "「Sweet Recipe」は、お菓子作り専門のレシピサイトです。",
            "材料ごとの絞り込み検索や、工程ごとの写真表示を実装し、初心者にも分かりやすく制作しました。"
            ],
            stack: ["HTML", "CSS", "Vanilla JS"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/sweet-recipe" },
            { label: "GitHub", url: "https://github.com/username/sweet-recipe" }
            ]
        },
        {
            id: 16,
            title: "EcoSteps",
            image: Images.eco,
            period: { start: "2025/04", end: "2025/05" },
            desc: [
            "「EcoSteps」は、環境保護のアイデアを共有する情報サイトです。",
            "投稿機能やコメント機能を実装し、ユーザー同士がエコ活動のアイデアを交換できる場を作りました。"
            ],
            stack: ["Nuxt.js", "Firebase", "Tailwind CSS"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/ecosteps" },
            { label: "GitHub", url: "https://github.com/username/ecosteps" }
            ]
        },
        {
            id: 17,
            title: "Rhythm Zone",
            image: Images.music,
            period: { start: "2025/05", end: "2025/06" },
            desc: [
            "「Rhythm Zone」は、音楽好きのための楽曲レビューサイトです。",
            "アーティストごとのページや音楽動画埋め込みに対応し、視覚的にも楽しめるサイトに仕上げました。"
            ],
            stack: ["React", "SCSS", "YouTube API"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/rhythm-zone" },
            { label: "GitHub", url: "https://github.com/username/rhythm-zone" }
            ]
        },
        {
            id: 18,
            title: "ArtFusion",
            image: Images.artist,
            period: { start: "2025/06", end: "2025/07" },
            desc: [
            "「ArtFusion」は、アーティストのポートフォリオを集めたギャラリーサイトです。",
            "各作家ごとのプロフィールページや、作品のスライド表示機能を実装しました。"
            ],
            stack: ["Next.js", "Framer Motion", "Tailwind CSS"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/artfusion" },
            { label: "GitHub", url: "https://github.com/username/artfusion" }
            ]
        },
        {
            id: 19,
            title: "ZenSpace",
            image: Images.zen,
            period: { start: "2025/07", end: "2025/08" },
            desc: [
            "「ZenSpace」は、瞑想やマインドフルネスを支援する情報サイトです。",
            "瞑想ガイド動画やBGMプレイヤーを搭載し、落ち着いた色合いのデザインで制作しました。"
            ],
            stack: ["HTML", "CSS", "JavaScript", "Audio API"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/zenspace" },
            { label: "GitHub", url: "https://github.com/username/zenspace" }
            ]
        },
        {
            id: 20,
            title: "GameForge",
            image: Images.game,
            period: { start: "2025/08", end: "2025/09" },
            desc: [
            "「GameForge」は、インディーゲーム開発者向けの情報共有サイトです。",
            "開発中のゲーム紹介ページやフォーラムを実装し、クリエイター同士が交流できる場を目指しました。"
            ],
            stack: ["React", "Node.js", "Express", "MongoDB"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/gameforge" },
            { label: "GitHub", url: "https://github.com/username/gameforge" }
            ]
        },
        {
            id: 21,
            title: "PhotoStream",
            image: Images.camera,
            period: { start: "2025/09", end: "2025/10" },
            desc: [
            "「PhotoStream」は、写真共有と加工ができるSNSサイトです。",
            "フィルター機能やタグ検索を搭載し、写真好きが繋がれる場を目指しました。"
            ],
            stack: ["React", "Firebase", "Tailwind CSS"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/photostream" },
            { label: "GitHub", url: "https://github.com/username/photostream" }
            ]
        },
        {
            id: 22,
            title: "HealthTrack",
            image: Images.walking,
            period: { start: "2025/10", end: "2025/11" },
            desc: [
            "「HealthTrack」は、健康管理を支援するWebアプリです。",
            "歩数計連携やカロリー計算機能を実装し、日々の健康維持をサポートします。"
            ],
            stack: ["Vue.js", "SCSS", "Firebase"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/healthtrack" },
            { label: "GitHub", url: "https://github.com/username/healthtrack" }
            ]
        },
        {
            id: 23,
            title: "QuizMaster",
            image: Images.quiz,
            period: { start: "2025/11", end: "2025/12" },
            desc: [
            "「QuizMaster」は、オンラインクイズ作成＆共有サイトです。",
            "多様なジャンルのクイズ作成やランキング表示機能を搭載しました。"
            ],
            stack: ["React", "Node.js", "MongoDB"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/quizmaster" },
            { label: "GitHub", url: "https://github.com/username/quizmaster" }
            ]
        },
        {
            id: 24,
            title: "MindMaply",
            image: Images.map,
            period: { start: "2026/01", end: "2026/02" }, // 期間跨ぎ調整
            desc: [
            "「MindMaply」は、アイデア整理用のマインドマップ作成ツールです。",
            "直感的なドラッグ操作とノード編集機能を実装しました。"
            ],
            stack: ["Vue.js", "D3.js", "Tailwind CSS"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/mindmaply" },
            { label: "GitHub", url: "https://github.com/username/mindmaply" }
            ]
        },
        {
            id: 25,
            title: "RecipeBook",
            image: Images.recipe,
            period: { start: "2026/02", end: "2026/03" },
            desc: [
            "「RecipeBook」は、レシピを投稿・共有できるWebサービスです。",
            "ユーザーのマイレシピ保存や食材検索機能を実装しました。"
            ],
            stack: ["Next.js", "Tailwind CSS", "Vercel"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/recipebook" },
            { label: "GitHub", url: "https://github.com/username/recipebook" }
            ]
        },
        {
            id: 26,
            title: "Mindful Journal",
            image: Images.mind,
            period: { start: "2026/03", end: "2026/04" },
            desc: [
            "「Mindful Journal」は、日々の気持ちや出来事を記録するマインドフルネス日記アプリです。",
            "感情の記録やカレンダー表示、タグ付け機能を実装し、心の整理をサポートします。"
            ],
            stack: ["React", "Tailwind CSS", "Firebase"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/mindful-journal" },
            { label: "GitHub", url: "https://github.com/username/mindful-journal" }
            ]
        },
        {
            id: 27,
            title: "InspireNote",
            image: Images.idea,
            period: { start: "2026/04", end: "2026/05" },
            desc: [
            "「InspireNote」は、アイデアを整理するノートアプリです。",
            "Markdown対応やタグ検索機能を搭載しました。"
            ],
            stack: ["Vue.js", "SCSS", "Firebase"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/inspirenote" },
            { label: "GitHub", url: "https://github.com/username/inspirenote" }
            ]
        },
        {
            id: 28,
            title: "WeatherWise",
            image: Images.weather,
            period: { start: "2026/05", end: "2026/06" },
            desc: [
            "「WeatherWise」は、地域別の詳細な気象情報を表示するサイトです。",
            "グラフ表示や週間予報機能を実装しました。"
            ],
            stack: ["React", "Chart.js", "OpenWeather API"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/weatherwise" },
            { label: "GitHub", url: "https://github.com/username/weatherwise" }
            ]
        },
        {
            id: 29,
            title: "JobFinder",
            image: Images.job,
            period: { start: "2026/06", end: "2026/07" },
            desc: [
            "「JobFinder」は、求人情報を検索・保存できるサイトです。",
            "地域や職種で絞り込める検索機能を搭載しました。"
            ],
            stack: ["Next.js", "Tailwind CSS", "ElasticSearch"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/jobfinder" },
            { label: "GitHub", url: "https://github.com/username/jobfinder" }
            ]
        },
        {
            id: 30,
            title: "StudyHub",
            image: Images.study,
            period: { start: "2026/07", end: "2026/08" },
            desc: [
            "「StudyHub」は、学生や社会人のための学習コンテンツ共有プラットフォームです。",
            "教材アップロード、進捗管理、他ユーザーとのQ&A機能を搭載し、学びを支援する場を目指しました。"
            ],
            stack: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/studyhub" },
            { label: "GitHub", url: "https://github.com/username/studyhub" }
            ]
        },
        {
            id: 31,
            title: "Eventify",
            image: Images.ticket,
            period: { start: "2026/08", end: "2026/09" },
            desc: [
            "「Eventify」は、イベント管理と告知を支援するWebサービスです。",
            "参加者管理やチケット販売連携を搭載しました。"
            ],
            stack: ["Vue.js", "Firebase", "Tailwind CSS"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/eventify" },
            { label: "GitHub", url: "https://github.com/username/eventify" }
            ]
        },
        {
            id: 32,
            title: "FinanceBuddy",
            image: Images.houseKeep,
            period: { start: "2026/09", end: "2026/10" },
            desc: [
            "「FinanceBuddy」は、個人の支出を管理する家計簿アプリです。",
            "収支グラフ表示や月次レポート機能を搭載しました。"
            ],
            stack: ["React", "Chart.js", "Firebase"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/financebuddy" },
            { label: "GitHub", url: "https://github.com/username/financebuddy" }
            ]
        },
        {
            id: 33,
            title: "LangLearn",
            image: Images.language,
            period: { start: "2026/10", end: "2026/11" },
            desc: [
            "「LangLearn」は、語学学習者向けの練習サイトです。",
            "単語帳機能や発音練習ツールを搭載しました。"
            ],
            stack: ["Next.js", "Tailwind CSS", "Firebase"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/langlearn" },
            { label: "GitHub", url: "https://github.com/username/langlearn" }
            ]
        },
        {
            id: 34,
            title: "SportsTracker",
            image: Images.result,
            period: { start: "2026/11", end: "2026/12" },
            desc: [
            "「SportsTracker」は、アマチュア選手やチームの試合結果や成績を記録・共有するアプリです。",
            "競技種目ごとに試合データを管理でき、グラフ表示やランキング機能も備えています。"
            ],
            stack: ["React", "Redux", "Chart.js", "Firebase"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/sportstracker" },
            { label: "GitHub", url: "https://github.com/username/sportstracker" }
            ]
        },
        {
            id: 35,
            title: "ColorLab",
            image: Images.color,
            period: { start: "2027/01", end: "2027/02" },
            desc: [
            "「ColorLab」は、配色の組み合わせを試せるツールです。",
            "パレット保存機能やコードコピー機能を搭載しました。"
            ],
            stack: ["React", "Tailwind CSS", "Figma API"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/colorlab" },
            { label: "GitHub", url: "https://github.com/username/colorlab" }
            ]
        },
        {
            id: 36,
            title: "MediNote",
            image: Images.karte,
            period: { start: "2027/02", end: "2027/03" },
            desc: [
            "「MediNote」は、通院記録や健康データをまとめて管理できる個人向けヘルスケアアプリです。",
            "診療メモ、投薬履歴、検査結果の管理機能を搭載し、健康意識向上をサポートします。"
            ],
            stack: ["Vue.js", "Vuetify", "Firebase"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/medinote" },
            { label: "GitHub", url: "https://github.com/username/medinote" }
            ]
        },
        {
            id: 37,
            title: "TaskWave",
            image: Images.task,
            period: { start: "2027/03", end: "2027/04" },
            desc: [
            "「TaskWave」は、タスクを整理するToDoアプリです。",
            "ドラッグ&ドロップで並び替えが可能です。"
            ],
            stack: ["Vue.js", "Firebase", "Tailwind CSS"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/taskwave" },
            { label: "GitHub", url: "https://github.com/username/taskwave" }
            ]
        },
        {
            id: 38,
            title: "GardenLog",
            image: Images.garden,
            period: { start: "2027/04", end: "2027/05" },
            desc: [
            "「GardenLog」は、ガーデニングの記録と共有ができるサイトです。",
            "育成日記や植物情報を投稿できます。"
            ],
            stack: ["React", "Firebase", "Tailwind CSS"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/gardenlog" },
            { label: "GitHub", url: "https://github.com/username/gardenlog" }
            ]
        },
        {
            id: 39,
            title: "CookTogether",
            image: Images.cookTogether,
            period: { start: "2027/05", end: "2027/06" },
            desc: [
            "「CookTogether」は、料理好き同士がレシピを共有し合うコミュニティサイトです。",
            "写真付きレシピ投稿、いいね機能、コメント機能を搭載し、交流を楽しめる場を目指しました。"
            ],
            stack: ["Vue.js", "Vuetify", "Firebase"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/cooktogether" },
            { label: "GitHub", url: "https://github.com/username/cooktogether" }
            ]
        },
        {
            id: 40,
            title: "SketchPad",
            image: Images.sketch,
            period: { start: "2027/06", end: "2027/07" },
            desc: [
            "「SketchPad」は、ブラウザ上で絵を描けるツールです。",
            "レイヤー管理やカラー選択機能を搭載しました。"
            ],
            stack: ["Vue.js", "Canvas API", "Tailwind CSS"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/sketchpad" },
            { label: "GitHub", url: "https://github.com/username/sketchpad" }
            ]
        },
        {
            id: 41,
            title: "EcoTrack",
            image: Images.ecoTrack,
            period: { start: "2027/07", end: "2027/08" },
            desc: [
            "「EcoTrack」は、日々のエコ活動を記録して可視化するWebアプリです。",
            "カーボンフットプリントの管理や節約目標の設定ができます。"
            ],
            stack: ["Angular", "D3.js", "Firebase"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/ecotrack" },
            { label: "GitHub", url: "https://github.com/username/ecotrack" }
            ]
        },
        {
            id: 42,
            title: "MemoFlow",
            image: Images.memo,
            period: { start: "2027/08", end: "2027/09" },
            desc: [
            "「MemoFlow」は、短文メモを手軽に記録できるWebアプリです。",
            "ピン留め機能や色分けが可能です。"
            ],
            stack: ["Vue.js", "Firebase", "Tailwind CSS"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/memoflow" },
            { label: "GitHub", url: "https://github.com/username/memoflow" }
            ]
        },
        {
            id: 43,
            title: "VoiceWave",
            image: Images.voice,
            period: { start: "2027/09", end: "2027/10" },
            desc: [
            "「VoiceWave」は、音声メッセージの録音と共有ができるコミュニケーションアプリです。",
            "波形表示やメッセージのタグ付け機能を搭載しています。"
            ],
            stack: ["React Native", "Node.js", "Firebase"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/voicewave" },
            { label: "GitHub", url: "https://github.com/username/voicewave" }
            ]
        },
        {
            id: 44,
            title: "MentorConnect",
            image: Images.professor,
            period: { start: "2027/10", end: "2027/11" },
            desc: [
            "「MentorConnect」は、専門家と学習者をつなぐオンラインプラットフォームです。",
            "予約管理やレビュー機能を搭載しています。"
            ],
            stack: ["React", "Node.js", "MongoDB"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/mentorconnect" },
            { label: "GitHub", url: "https://github.com/username/mentorconnect" }
            ]
        },
        {
            id: 45,
            title: "PlantDiary",
            image: Images.planter,
            period: { start: "2027/11", end: "2027/12" },
            desc: [
            "「PlantDiary」は、観葉植物の育成を記録するアプリです。",
            "水やり通知機能や写真日記を実装しました。"
            ],
            stack: ["Vue.js", "Firebase", "Tailwind CSS"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/plantdiary" },
            { label: "GitHub", url: "https://github.com/username/plantdiary" }
            ]
        },
        {
            id: 46,
            title: "StockWise",
            image: Images.stock,
            period: { start: "2027/12", end: "2028/01" },
            desc: [
            "「StockWise」は、株式投資のポートフォリオを管理できるWebアプリです。",
            "リアルタイム株価の取得や、保有資産の推移グラフを表示する機能を搭載しています。"
            ],
            stack: ["React", "Recharts", "Firebase"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/stockwise" },
            { label: "GitHub", url: "https://github.com/username/stockwise" }
            ]
        },
        {
            id: 47,
            title: "CycleConnect",
            image: Images.bicycle,
            period: { start: "2028/01", end: "2028/02" },
            desc: [
            "「CycleConnect」は、自転車愛好家のためのコミュニティサイトです。",
            "ルート共有やメンテナンス記録機能を備えています。"
            ],
            stack: ["React", "Tailwind CSS", "Mapbox API"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/cycleconnect" },
            { label: "GitHub", url: "https://github.com/username/cycleconnect" }
            ]
        },
        {
            id: 48,
            title: "CraftIdeas",
            image: Images.diy,
            period: { start: "2028/02", end: "2028/03" },
            desc: [
            "「CraftIdeas」は、DIYアイデアを共有するサイトです。",
            "カテゴリー検索や材料リスト生成機能を実装しました。"
            ],
            stack: ["Vue.js", "Firebase", "Tailwind CSS"],
            relatedLink: [
            { label: "作品サイト", url: "https://example.com/craftideas" },
            { label: "GitHub", url: "https://github.com/username/craftideas" }
            ]
        },
    ];

    return(
        <div className="outside-div">   {/* 画面全体 */}
            <div className="base-card"> {/* カード */}
                <MenuBar/>              {/* メニューバー */}

                <div
                    className="card-container items-center h-full w-3xl "
                    style={{backgroundColor: `rgba(var(--sub-color-rgb), 0.2)`}}
                >
                    <p className="page-title my-8">{pageTitle}</p>

                    {/* 作品一覧 */}
                    <div className="overflow-y-scroll overflow-x-hidden h-fit w-full m-auto">
                        {/* w -> 単一の作品情報 */}
                        { works.map((w) => { 
                            return( 
                                <WorkItem key={`work-${w.id}`} item={w} />
                            )})
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WorkList;