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
        type: ["WEB", "SHOPPINGMALL", "SPORT"],
        font: ["pretendard"],
        info: "애슬레져룩의 선두주자 룰루레몬의 쇼핑사이트를 제작하였습니다. 기존 사이트는 카테고리가 너무 세분화되어있고 번역도 친절하지 않아 쇼핑에 어려움이 있어 이를 중심으로 수정하였으며 장바구니와 위시리스트를 구현해보았습니다. ",
        color: ["#e70321", "#333333", "#f7f7f7"],
        skill: ["React", "React Router", "Styled-components", "sass"],
        // src: "/image/lululemon.png",
        link: "https://taeseokyoung.gitub.io/test_web_react"
    },
    {
        id: 2,
        title: "BULGARI",
        stitle: "불가리",
        type: ["WEB", "SHOPPINGMALL", "JEWELRY"],
        font: ["Noto Serif KR", "pretendard"],
        info: "React Router를 통해 SPA를 구현하였습니다. 브라운 색상을 사용해 쥬얼리 브랜드의 고급스러움을 나타내었으며 보다 심플한 디자인으로 제품의 정보가 한눈에 들어올 수 있도록 디자인했습니다.",
        color: ["#9B806D", "#f5f2f0", "#333333"],
        skill: ["React", "React Router", "slick", "sass"],
        // src: "/image/bulgari.png",
        link: "https://taeseokyoung.github.io/bulgari/"
    },
    {
        id: 3,
        title: "CHAHONG",
        stitle: "차홍",
        type: ["WEB", "BRANDPAGE", "HAIRSALON"],
        font: ["Poppins"],
        info: "차홍은 글로벌 헤어 브랜드로 프리미엄살롱, 살롱, 교육, 제품 4가지의 사업을 진행하고 있다. 이 4가지의 사업을 모티브로 메인을 제작하였으며 차홍의 시그니처인 블랙&화이트로 색상을 구성했다.",
        color: ["#dee2e6", "#212529"],
        skill: ["jQuery", "swiper"],
        // src: "/image/chahong.png",
        link: "https://taeseokyoung.github.io/test_web/test06/"
    },
]
export { gnb, portfolio }

// RESPONSIVE 