const gnb = [
    // { id: 1, title: "About" },
    { id: 2, title: "Prototype" },
    { id: 3, title: "Training" },
    { id: 4, title: "Contact" }
]

const portfolio = [
    {
        id: 1,
        title: "LULULEMON",
        stitle: "룰루레몬",
        type: ["Web", "Shop", "Sport"],
        font: ["Pretendard"],
        info: "애슬레져룩의 선두주자 룰루레몬의 쇼핑사이트를 제작하였습니다. 기존 사이트는 카테고리가 너무 세분화되어 상품을 고르기가 어려웠습니다. filter, sort를 활용하고 키워드를 축소하여 보다 간편한 홈페이지를 만들었습니다. ",
        color: ["#e70321", "#333333", "#f7f7f7"],
        skill: ["React", "React Router", "sass"],
        // src: "/image/lululemon.png",
        link: "https://taeseokyoung.github.io/test_web_react"
    },
    {
        id: 2,
        title: "BULGARI",
        stitle: "불가리",
        type: ["Web", "Shop", "Jewelry"],
        font: ["Noto Serif KR", "Pretendard"],
        info: "React Router를 통해 SPA를 구현하였습니다. 브라운 색상과 심플한 디자인으로 주얼리 브랜드의 고급스러움을 나타내고자 하였습니다.",
        color: ["#9B806D", "#f5f2f0", "#333333"],
        skill: ["React", "React Router", "slick"],
        // src: "/image/bulgari.png",
        link: "https://taeseokyoung.github.io/bulgari/"
    },
    {
        id: 3,
        title: "CHAHONG",
        stitle: "차홍",
        type: ["Web", "Brand", "Salon"],
        font: ["Poppins"],
        info: "글로벌한 헤어 브랜드 차홍. 프리미엄살롱, 살롱, 교육, 제품 4가지의 카테고리를 한눈에 보여주고 싶어서 메인 슬라이드와 네브 탭을 함께 볼 수 있도록 제작하였습니다.",
        color: ["#dee2e6", "#212529"],
        skill: ["jQuery", "swiper"],
        // src: "/image/chahong.png",
        link: "https://taeseokyoung.github.io/test_web/test06/"
    },
    {
        id: 4,
        title: "MANCHESTER UNITED",
        stitle: "맨체스터 유나이티드",
        type: ["Web", "Sport"],
        font: ["Noto Sans KR"],
        info: "영국 프리미어리그에서 활동하고 있는 맨체스터 유나이티트 팀의 한국 홈페이지 입니다. Grid와 Keyframs, iframe, slick slide를 활용하여 제작했습니다.",
        color: ["#c70101", "#333333", "#ffffff"],
        skill: ["jQuery", "slick"],
        // src: "/image/chahong.png",
        link: "https://taeseokyoung.github.io/test_web/test05/"
    },
    {
        id: 5,
        title: "SHAKE SHACK",
        stitle: "쉐이크쉑",
        type: ["Web", "Food"],
        font: ["Noto Sans KR", "Galaxi"],
        info: "뉴욕의 작은 푸드트럭에서 세계적인 버거 브랜드가 된 쉐이크쉑의 한국 홈페이지를 제작하였습니다. 슬라이드와 탭 메뉴, sticky 등을 구현하였습니다.",
        color: ["#60ae2b", "#333333", "#ffffff"],
        skill: ["jQuery", "slick"],
        // src: "/image/chahong.png",
        link: "https://taeseokyoung.github.io/test_web/test02/"
    },
]

const training = [
    {
        id: 1,
        title: "PHYMONGSHE",
        stitle: "피몽쉐",
        type: ["Web", "Shop", "Cosmetic"],
        font: ["Pretendard"],
        color: ["#a4a39e", "#222222", "#f9f9f9"],
        skill: ["React", "React Router", "axios", "sass"],
        link: "https://taeseokyoung.github.io/phymongshe"
    },
    {
        id: 2,
        title: "CLEANCLEAN",
        stitle: "깔끔이청소",
        type: ["Web"],
        font: ["Pretendard"],
        color: ["#f4cb4f", "linear-gradient(45deg,#369,#000)"],
        skill: ["React", "React Router"],

        link: "https://taeseokyoung.github.io/cleanclean"
    },
    {
        id: 3,
        title: "HYUNDAIELEVATOR",
        stitle: "현대엘리베이터",
        type: ["Web"],
        font: ["Pretendard"],
        color: ["#f4cb4f", "linear-gradient(45deg,#369,#000)"],
        skill: ["React", "Javascript", "jQuery"],
        link: "https://taeseokyoung.github.io/hyundaielevator"
    },
]

const profile = {

    // name: "태서경",
    // ename: "Tae Seo Kyoung",
    email: "xotjrud@gmail.com",
    github: "https://github.com/taeseokyoung",
    tel: "010-2844-9624"
}

export { gnb, portfolio, training, profile }

// RESPONSIVE 