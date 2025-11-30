import tofuImage from '../assets/tofu_pasta_salad.png';
import risottoImage from '../assets/pumpkin_risotto.png';
import pizzaImage from '../assets/spinach_pizza.png';

export const menuItems = [
    {
        id: 1,
        name: "저당 두부면 샐러드 파스타",
        description: "파스타의 만족감을 주면서 탄수화물을 대폭 줄이고 단백질과 식이섬유를 높였습니다.",
        image: tofuImage,
        imageColor: "#E8F5E9",
        baseNutrition: { calories: 320, protein: 22, fat: 12, carbs: 28 },
        variations: {
            default: {
                noodle: [{ name: "두부면", isDefault: true }, { name: "닭가슴살면", isDefault: false }],
                sauce: [{ name: "바질페스토", isDefault: true }],
                topping: [{ name: "닭", isDefault: true }, { name: "새우", isDefault: false }],
                vegetables: [
                    { name: "방울토마토", isDefault: true }, { name: "루꼴라", isDefault: true }, { name: "올리브", isDefault: true }
                ]
            },
            cancer: {
                noodle: [{ name: "두부면", isDefault: true }],
                sauce: [{ name: "저염/저지방 바질페스토", isDefault: true }],
                topping: [{ name: "연어", isDefault: true }, { name: "흰살생선", isDefault: false }],
                vegetables: [
                    { name: "시금치", isDefault: true }, { name: "브로콜리", isDefault: true }, { name: "비트", isDefault: true }, { name: "당근", isDefault: true }, { name: "아보카도", isDefault: true },
                    { name: "라디키오", isDefault: false }, { name: "아루굴라", isDefault: false }, { name: "로메인", isDefault: false }, { name: "골드키위 슬라이스", isDefault: false }
                ]
            },
            diabetes: {
                noodle: [{ name: "두부면", isDefault: true }, { name: "닭가슴살면", isDefault: false }],
                sauce: [{ name: "저염/저지방 바질페스토", isDefault: true }],
                topping: [{ name: "닭", isDefault: true }, { name: "새우", isDefault: false }, { name: "렌틸콩", isDefault: false }, { name: "병아리콩", isDefault: false }],
                vegetables: [
                    { name: "브로콜리", isDefault: true }, { name: "케일", isDefault: true }, { name: "오이", isDefault: true }, { name: "토마토", isDefault: true },
                    { name: "방울 양배추", isDefault: false }, { name: "샐러리", isDefault: false }, { name: "허브믹스", isDefault: false }, { name: "로메인", isDefault: false }, { name: "주키니 리본", isDefault: false }
                ]
            },
            highBloodPressure: {
                noodle: [{ name: "두부면", isDefault: true }],
                sauce: [{ name: "저염/저지방 바질페스토", isDefault: true }],
                topping: [{ name: "닭", isDefault: true }, { name: "새우", isDefault: false }],
                vegetables: [
                    { name: "시금치", isDefault: true }, { name: "아보카도", isDefault: true }, { name: "주키니", isDefault: true }, { name: "브로콜리", isDefault: true },
                    { name: "토마틸로", isDefault: false }, { name: "오크 리프 레터스", isDefault: false }, { name: "구운 애호박", isDefault: false }, { name: "구운 파프리카", isDefault: false }, { name: "바질", isDefault: false }
                ]
            },
            kidneyDisease: {
                noodle: [{ name: "닭가슴살면", isDefault: true }],
                sauce: [{ name: "라이트 레몬 오일", isDefault: true }, { name: "라이트 요거트 소스", isDefault: false }],
                topping: [{ name: "닭", isDefault: true }, { name: "흰살생선", isDefault: false }],
                vegetables: [
                    { name: "양상추", isDefault: true }, { name: "양배추", isDefault: true }, { name: "오이", isDefault: true }, { name: "파프리카", isDefault: true }, { name: "토마토", isDefault: true },
                    { name: "무채", isDefault: false }, { name: "구운 양파", isDefault: false }, { name: "청경채", isDefault: false }, { name: "구운 가지", isDefault: false }
                ]
            }
        },
        options: {
            noodle: [
                { name: "두부면", cal: 0, protein: 0, fat: 0, carbs: 0 },
                { name: "닭가슴살면", cal: 20, protein: 5, fat: 0, carbs: 0 }
            ],
            sauce: [
                { name: "바질페스토", cal: 60, protein: 1, fat: 6, carbs: 1 },
                { name: "저염/저지방 바질페스토", cal: 40, protein: 1, fat: 3, carbs: 1 },
                { name: "라이트 레몬 오일", cal: 40, protein: 0, fat: 4, carbs: 1 },
                { name: "라이트 요거트 소스", cal: 20, protein: 1, fat: 0, carbs: 3 }
            ],
            topping: [
                { name: "닭", cal: 50, protein: 10, fat: 1, carbs: 0 },
                { name: "새우", cal: 40, protein: 9, fat: 0.5, carbs: 0 },
                { name: "연어", cal: 60, protein: 8, fat: 3, carbs: 0 },
                { name: "흰살생선", cal: 40, protein: 8, fat: 1, carbs: 0 },
                { name: "렌틸콩", cal: 30, protein: 2, fat: 0, carbs: 5 },
                { name: "병아리콩", cal: 20, protein: 1, fat: 0, carbs: 3 }
            ],
            vegetables: [
                { name: "방울토마토", cal: 5, protein: 0, fat: 0, carbs: 1 },
                { name: "루꼴라", cal: 5, protein: 0, fat: 0, carbs: 1 },
                { name: "올리브", cal: 15, protein: 0, fat: 1.5, carbs: 0 },
                { name: "시금치", cal: 5, protein: 0.5, fat: 0, carbs: 1 },
                { name: "브로콜리", cal: 10, protein: 1, fat: 0, carbs: 2 },
                { name: "비트", cal: 10, protein: 0, fat: 0, carbs: 2 },
                { name: "당근", cal: 10, protein: 0, fat: 0, carbs: 2 },
                { name: "아보카도", cal: 50, protein: 1, fat: 4, carbs: 3 },
                { name: "라디키오", cal: 5, protein: 0, fat: 0, carbs: 1 },
                { name: "아루굴라", cal: 5, protein: 0, fat: 0, carbs: 1 },
                { name: "로메인", cal: 5, protein: 0, fat: 0, carbs: 1 },
                { name: "골드키위 슬라이스", cal: 30, protein: 0, fat: 0, carbs: 7 },
                { name: "케일", cal: 10, protein: 1, fat: 0, carbs: 2 },
                { name: "오이", cal: 5, protein: 0, fat: 0, carbs: 1 },
                { name: "토마토", cal: 10, protein: 0, fat: 0, carbs: 2 },
                { name: "방울 양배추", cal: 15, protein: 1, fat: 0, carbs: 3 },
                { name: "샐러리", cal: 5, protein: 0, fat: 0, carbs: 1 },
                { name: "허브믹스", cal: 5, protein: 0, fat: 0, carbs: 1 },
                { name: "주키니 리본", cal: 10, protein: 1, fat: 0, carbs: 2 },
                { name: "주키니", cal: 10, protein: 1, fat: 0, carbs: 2 },
                { name: "토마틸로", cal: 10, protein: 0, fat: 0, carbs: 2 },
                { name: "오크 리프 레터스", cal: 5, protein: 0, fat: 0, carbs: 1 },
                { name: "구운 애호박", cal: 15, protein: 1, fat: 0, carbs: 3 },
                { name: "구운 파프리카", cal: 15, protein: 1, fat: 0, carbs: 3 },
                { name: "바질", cal: 2, protein: 0, fat: 0, carbs: 0 },
                { name: "양상추", cal: 5, protein: 0, fat: 0, carbs: 1 },
                { name: "양배추", cal: 10, protein: 0, fat: 0, carbs: 2 },
                { name: "파프리카", cal: 10, protein: 0, fat: 0, carbs: 2 },
                { name: "무채", cal: 10, protein: 0, fat: 0, carbs: 2 },
                { name: "구운 양파", cal: 20, protein: 0, fat: 0, carbs: 5 },
                { name: "청경채", cal: 5, protein: 0, fat: 0, carbs: 1 },
                { name: "구운 가지", cal: 15, protein: 1, fat: 0, carbs: 3 }
            ]
        }
    },
    {
        id: 2,
        name: "고단백 단호박 크림 리조또",
        description: "리조또의 부드러움은 유지하되, 쌀의 양을 줄이고 단백질과 기능성 재료를 넣었습니다.",
        image: risottoImage,
        imageColor: "#FFF3E0",
        baseNutrition: { calories: 450, protein: 28, fat: 15, carbs: 45 },
        variations: {
            default: {
                grain: [{ name: "백미 30%+파로,보리 70%", isDefault: true }],
                sauce: [{ name: "단호박 퓨레 + 두유 크림", isDefault: true }],
                protein: [{ name: "닭", isDefault: true }, { name: "새우", isDefault: true }],
                topping: [{ name: "호박씨", isDefault: true }]
            },
            cancer: {
                grain: [{ name: "백미 50%+파로, 보리 50%", isDefault: true }],
                sauce: [{ name: "단호박+비트+당근 퓨레 + 두유 50%+물 50%", isDefault: true }],
                protein: [{ name: "연어", isDefault: true }, { name: "대구", isDefault: false }],
                topping: [
                    { name: "브로콜리", isDefault: true }, { name: "구운 단호박 큐브", isDefault: true }, { name: "로스티드 마늘", isDefault: true }, { name: "구운 양송이", isDefault: true }
                ]
            },
            diabetes: {
                grain: [{ name: "백미 30%+파로,보리 70%", isDefault: true }],
                sauce: [{ name: "단호박 퓨레 + 두유크림 70%+물 30%", isDefault: true }],
                protein: [{ name: "닭", isDefault: true }, { name: "새우", isDefault: true }],
                topping: [
                    { name: "브로콜리", isDefault: true }, { name: "버섯", isDefault: true }, { name: "아스파라거스", isDefault: true }, { name: "구운 양파", isDefault: true }, { name: "콜리플라워", isDefault: true }
                ]
            },
            highBloodPressure: {
                grain: [{ name: "백미 30%+파로,보리 70%", isDefault: true }],
                sauce: [{ name: "단호박 퓨레 + 두유 라이트 크림", isDefault: true }],
                protein: [{ name: "연어", isDefault: true }, { name: "닭", isDefault: true }],
                topping: [
                    { name: "파프리카", isDefault: true }, { name: "가지", isDefault: true }, { name: "토마토", isDefault: true }, { name: "아스파라거스", isDefault: true },
                    { name: "구운 호박", isDefault: true }, { name: "샐러리 잎", isDefault: true }, { name: "줄기 토마토", isDefault: true }, { name: "바질", isDefault: true }, { name: "타임", isDefault: true }
                ]
            },
            kidneyDisease: {
                grain: [{ name: "백미 70%+파로,보리 30%", isDefault: true }],
                sauce: [{ name: "단호박 퓨레 + 두유 30%+우유 30%+물 40%", isDefault: true }],
                protein: [{ name: "닭가슴살", isDefault: true }, { name: "흰살생선", isDefault: false }],
                topping: [
                    { name: "양상추", isDefault: true }, { name: "양배추", isDefault: true }, { name: "오이", isDefault: true }, { name: "청경채", isDefault: true }, { name: "알배추", isDefault: true }, { name: "노각", isDefault: true }
                ]
            }
        },
        options: {
            grain: [
                { name: "백미 30%+파로,보리 70%", cal: 0, protein: 0, fat: 0, carbs: 0 },
                { name: "백미 50%+파로, 보리 50%", cal: 10, protein: 0, fat: 0, carbs: 5 },
                { name: "백미 70%+파로,보리 30%", cal: 20, protein: 0, fat: 0, carbs: 10 }
            ],
            sauce: [
                { name: "단호박 퓨레 + 두유 크림", cal: 50, protein: 2, fat: 2, carbs: 8 },
                { name: "단호박+비트+당근 퓨레 + 두유 50%+물 50%", cal: 40, protein: 2, fat: 1, carbs: 7 },
                { name: "단호박 퓨레 + 두유크림 70%+물 30%", cal: 45, protein: 2, fat: 2, carbs: 6 },
                { name: "단호박 퓨레 + 두유 라이트 크림", cal: 40, protein: 2, fat: 1, carbs: 5 },
                { name: "단호박 퓨레 + 두유 30%+우유 30%+물 40%", cal: 35, protein: 2, fat: 1, carbs: 5 }
            ],
            protein: [
                { name: "닭", cal: 50, protein: 10, fat: 1, carbs: 0 },
                { name: "새우", cal: 40, protein: 9, fat: 0.5, carbs: 0 },
                { name: "연어", cal: 60, protein: 8, fat: 3, carbs: 0 },
                { name: "대구", cal: 40, protein: 8, fat: 1, carbs: 0 },
                { name: "닭가슴살", cal: 40, protein: 8, fat: 1, carbs: 0 },
                { name: "흰살생선", cal: 40, protein: 8, fat: 1, carbs: 0 }
            ],
            topping: [
                { name: "호박씨", cal: 20, protein: 1, fat: 1.5, carbs: 0 },
                { name: "브로콜리", cal: 10, protein: 1, fat: 0, carbs: 2 },
                { name: "구운 단호박 큐브", cal: 20, protein: 0, fat: 0, carbs: 5 },
                { name: "로스티드 마늘", cal: 10, protein: 0, fat: 0, carbs: 2 },
                { name: "구운 양송이", cal: 10, protein: 1, fat: 0, carbs: 1 },
                { name: "버섯", cal: 10, protein: 1, fat: 0, carbs: 1 },
                { name: "아스파라거스", cal: 5, protein: 0.5, fat: 0, carbs: 1 },
                { name: "구운 양파", cal: 15, protein: 0, fat: 0, carbs: 4 },
                { name: "콜리플라워", cal: 10, protein: 1, fat: 0, carbs: 2 },
                { name: "파프리카", cal: 10, protein: 0, fat: 0, carbs: 2 },
                { name: "가지", cal: 10, protein: 0, fat: 0, carbs: 2 },
                { name: "토마토", cal: 10, protein: 0, fat: 0, carbs: 2 },
                { name: "구운 호박", cal: 15, protein: 0, fat: 0, carbs: 4 },
                { name: "샐러리 잎", cal: 2, protein: 0, fat: 0, carbs: 0 },
                { name: "줄기 토마토", cal: 10, protein: 0, fat: 0, carbs: 2 },
                { name: "바질", cal: 2, protein: 0, fat: 0, carbs: 0 },
                { name: "타임", cal: 2, protein: 0, fat: 0, carbs: 0 },
                { name: "양상추", cal: 5, protein: 0, fat: 0, carbs: 1 },
                { name: "양배추", cal: 10, protein: 0, fat: 0, carbs: 2 },
                { name: "오이", cal: 5, protein: 0, fat: 0, carbs: 1 },
                { name: "청경채", cal: 5, protein: 0, fat: 0, carbs: 1 },
                { name: "알배추", cal: 5, protein: 0, fat: 0, carbs: 1 },
                { name: "노각", cal: 5, protein: 0, fat: 0, carbs: 1 }
            ]
        }
    },
    {
        id: 3,
        name: "통곡물 시금치 퓨전 피자",
        description: "도우를 통곡물이나 저탄수 재료로 바꾸고, 치즈와 소스 양을 조절한 건강 피자입니다.",
        image: pizzaImage,
        imageColor: "#E0F2F1",
        baseNutrition: { calories: 380, protein: 25, fat: 14, carbs: 35 },
        variations: {
            default: {
                dough: [{ name: "통밀 저탄수 도우", isDefault: true }],
                sauce: [{ name: "무설탕 토마토 소스", isDefault: true }, { name: "발사믹 글레이즈 (저당)", isDefault: true }],
                vegetables: [{ name: "시금치", isDefault: true }, { name: "버섯", isDefault: true }],
                cheese: [{ name: "페타치즈", isDefault: true }]
            },
            cancer: {
                dough: [{ name: "순두부 또띠아", isDefault: true }, { name: "통밀 도우", isDefault: false }],
                sauce: [{ name: "허브 올리브 오일", isDefault: true }, { name: "발사믹 글레이즈", isDefault: true }],
                vegetables: [
                    { name: "시금치", isDefault: true }, { name: "비트", isDefault: true }, { name: "당근", isDefault: true }, { name: "가지", isDefault: true },
                    { name: "방울 양배추", isDefault: false }, { name: "적양배추", isDefault: false }, { name: "고구마 슬라이스", isDefault: false }, { name: "구운 레드 어니언", isDefault: false }
                ],
                cheese: [{ name: "리코타", isDefault: true }]
            },
            diabetes: {
                dough: [{ name: "통밀 도우", isDefault: true }],
                sauce: [{ name: "무설탕 토마토 소스", isDefault: true }],
                vegetables: [
                    { name: "버섯", isDefault: true }, { name: "브로콜리", isDefault: true }, { name: "양파", isDefault: true }, { name: "파프리카", isDefault: true },
                    { name: "아티초크", isDefault: false }, { name: "구운 배추", isDefault: false }, { name: "주키니", isDefault: false }
                ],
                cheese: [{ name: "저염 리코타", isDefault: true }]
            },
            highBloodPressure: {
                dough: [{ name: "통밀 도우", isDefault: true }],
                sauce: [{ name: "무염 토마토 소스", isDefault: true }],
                vegetables: [
                    { name: "시금치", isDefault: true }, { name: "토마토", isDefault: true }, { name: "주키니", isDefault: true }, { name: "파프리카", isDefault: true },
                    { name: "구운 버섯 믹스", isDefault: false }, { name: "무화과 슬라이스", isDefault: false }, { name: "구운 양파", isDefault: false }, { name: "가지", isDefault: false }
                ],
                cheese: [{ name: "무염 리코타", isDefault: true }]
            },
            kidneyDisease: {
                dough: [{ name: "일반 밀 도우", isDefault: true }, { name: "우유 또띠아", isDefault: false }],
                sauce: [{ name: "요거트 라이트 소스", isDefault: true }],
                vegetables: [
                    { name: "양배추", isDefault: true }, { name: "양상추", isDefault: true }, { name: "파프리카", isDefault: true },
                    { name: "버터헤드 레터스", isDefault: false }, { name: "구운 무", isDefault: false }, { name: "적근대", isDefault: false }, { name: "오이 슬라이스", isDefault: false }
                ],
                cheese: []
            }
        },
        options: {
            dough: [
                { name: "통밀 저탄수 도우", cal: 100, protein: 5, fat: 2, carbs: 15 },
                { name: "순두부 또띠아", cal: 80, protein: 6, fat: 3, carbs: 5 },
                { name: "통밀 도우", cal: 110, protein: 5, fat: 2, carbs: 18 },
                { name: "일반 밀 도우", cal: 120, protein: 4, fat: 1, carbs: 25 },
                { name: "우유 또띠아", cal: 90, protein: 4, fat: 3, carbs: 10 }
            ],
            sauce: [
                { name: "무설탕 토마토 소스", cal: 20, protein: 1, fat: 0, carbs: 4 },
                { name: "발사믹 글레이즈 (저당)", cal: 15, protein: 0, fat: 0, carbs: 3 },
                { name: "허브 올리브 오일", cal: 40, protein: 0, fat: 4, carbs: 0 },
                { name: "발사믹 글레이즈", cal: 20, protein: 0, fat: 0, carbs: 5 },
                { name: "무염 토마토 소스", cal: 20, protein: 1, fat: 0, carbs: 4 },
                { name: "요거트 라이트 소스", cal: 20, protein: 1, fat: 0, carbs: 3 }
            ],
            vegetables: [
                { name: "시금치", cal: 5, protein: 0.5, fat: 0, carbs: 1 },
                { name: "버섯", cal: 10, protein: 1, fat: 0, carbs: 1 },
                { name: "비트", cal: 10, protein: 0, fat: 0, carbs: 2 },
                { name: "당근", cal: 10, protein: 0, fat: 0, carbs: 2 },
                { name: "가지", cal: 10, protein: 0, fat: 0, carbs: 2 },
                { name: "방울 양배추", cal: 15, protein: 1, fat: 0, carbs: 3 },
                { name: "적양배추", cal: 10, protein: 0, fat: 0, carbs: 2 },
                { name: "고구마 슬라이스", cal: 30, protein: 0, fat: 0, carbs: 7 },
                { name: "구운 레드 어니언", cal: 15, protein: 0, fat: 0, carbs: 3 },
                { name: "브로콜리", cal: 10, protein: 1, fat: 0, carbs: 2 },
                { name: "양파", cal: 10, protein: 0, fat: 0, carbs: 2 },
                { name: "파프리카", cal: 10, protein: 0, fat: 0, carbs: 2 },
                { name: "아티초크", cal: 10, protein: 1, fat: 0, carbs: 2 },
                { name: "구운 배추", cal: 10, protein: 0, fat: 0, carbs: 2 },
                { name: "주키니", cal: 10, protein: 0, fat: 0, carbs: 2 },
                { name: "토마토", cal: 10, protein: 0, fat: 0, carbs: 2 },
                { name: "구운 버섯 믹스", cal: 15, protein: 1, fat: 0, carbs: 2 },
                { name: "무화과 슬라이스", cal: 20, protein: 0, fat: 0, carbs: 5 },
                { name: "구운 양파", cal: 15, protein: 0, fat: 0, carbs: 3 },
                { name: "양배추", cal: 10, protein: 0, fat: 0, carbs: 2 },
                { name: "양상추", cal: 5, protein: 0, fat: 0, carbs: 1 },
                { name: "버터헤드 레터스", cal: 5, protein: 0, fat: 0, carbs: 1 },
                { name: "구운 무", cal: 10, protein: 0, fat: 0, carbs: 2 },
                { name: "적근대", cal: 5, protein: 0, fat: 0, carbs: 1 },
                { name: "오이 슬라이스", cal: 5, protein: 0, fat: 0, carbs: 1 }
            ],
            cheese: [
                { name: "페타치즈", cal: 50, protein: 3, fat: 4, carbs: 1 },
                { name: "리코타", cal: 30, protein: 2, fat: 2, carbs: 1 },
                { name: "저염 리코타", cal: 30, protein: 2, fat: 2, carbs: 1 },
                { name: "무염 리코타", cal: 30, protein: 2, fat: 2, carbs: 1 }
            ]
        }
    }
];
