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
        info: "애슬레져룩의 선두주자 룰루레몬의 쇼핑사이트를 제작하였습니다. 기존 사이트는 카테고리가 너무 세분화되어있고 번역도 친절하지 않아 쇼핑에 어려움이 있어 이를 중심으로 수정하였으며 장바구니와 위시리스트를 구현해보았습니다. ",
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
        info: "React Router를 통해 SPA를 구현하였습니다. 브라운 색상을 사용해 쥬얼리 브랜드의 고급스러움을 나타내었으며 보다 심플한 디자인으로 제품의 정보가 한눈에 들어올 수 있도록 디자인했습니다.",
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
        info: "차홍은 글로벌 헤어 브랜드로 프리미엄살롱, 살롱, 교육, 제품 4가지의 사업을 진행하고 있다. 이 4가지의 사업을 모티브로 메인을 제작하였으며 차홍의 시그니처인 블랙&화이트로 색상을 구성했다.",
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
        info: "영국 프리미어리그에서 활동하고 있는 맨체스터 유나이티트 팀의 한국 홈페이지를 제작했다. Grid와 Keyframs, iframe, slick slide를 활용하였다. ",
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
        info: "뉴욕의 작은 푸드트럭에서 세계적인 버거 브랜드가 된 쉐이크쉑의 한국 홈페이지를 제작했다. 슬라이드와 탭 메뉴, sticky 등을 구현했다.",
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

    name: "태서경",
    ename: "Tae Seo Kyoung",
    email: "xotjrud@gmail.com",
    github: "https://github.com/taeseokyoung",
    tel: "010-2844-9624"
}

export { gnb, portfolio, training, profile }

// RESPONSIVE 