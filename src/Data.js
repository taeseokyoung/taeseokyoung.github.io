const gnb = [
    { id: 1, title: "About" },
    { id: 2, title: "Prototype" },
    { id: 3, title: "Training" },
    { id: 4, title: "Contact" }
]

const portfolio = [
    {
        id: 1,
        title: "LULULEMON",
        stitle: "룰루레몬 웹사이트",
        type: ["RESPONSIVE WEB", "SHOPPINGMALL", "SPORT"],
        font: ["Noto sans", "pretendard"],
        info: "애슬레져룩의 선두주자 룰루레몬의 쇼핑사이트를 제작하였습니다.기존 사이트는 카테고리가 너무 세분화되어있고 번역도 친절하지 않아 쇼핑에 어려움이 있어 이를 중심으로 수정하였으며장바구니와 위시리스트를 구현해보았습니다. ",
        color: ["#e70321", "#333333", "#f7f7f7"],
        skill: ["React", "React Router", "Styled-components", "sass"],
        src: process.env.PUBLIC_URL + "/favicon.png",
        link: "https://taeseokyoung.gitub.io/test_web_react"
    },
    {
        id: 2,
        title: "BULGARI",
        stitle: "불가리 웹사이트",
        type: ["WEB", "SHOPPINGMALL", "JEWELRY"],
        font: ["Noto sans", "pretendard"],
        info: "애슬레져룩의 선두주자 룰루레몬의 쇼핑사이트를 제작하였습니다. 기존 사이트는 카테고리가 너무 세분화되어있고 번역도 친절하지 않아 쇼핑에 어려움이 있어 이를 중심으로 수정하였으며 장바구니와 위시리스트를 구현해보았습니다. ",
        color: ["#e70321", "#333333", "#f7f7f7"],
        skill: ["React", "React Router", "sass"],
        src: process.env.PUBLIC_URL + "/favicon.png",
        link: "https://taeseokyoung.gitub.io/test_web_react"
    },
]
export { gnb, portfolio }