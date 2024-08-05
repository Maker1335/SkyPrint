import { defineStore } from 'pinia'
import pens from '../../assets/img/goods/pens.svg'
import canvases from '../../assets/img/goods/canvases.svg'

export const useProductStore = defineStore('product', {
    state: () => ({
        products: [
            {
                id: 1,
                name: 'Ручки',
                image: pens,
                description: 'Интересный развития. Соображения идейные направлений высшего финансовых нашей и по позволяет задача постоянный постоянный позволяет прогрессивного прогрессивного плановых идейные роль структура нашей равным рамки рост административных нашей же и в развития.Рост и значение равным существенных форм количественный нашей активности и модель интересный играет идейные отношении реализации же постоянный.',
                details: {
                    estimatedCost: '10 400 ₽',
                    dimensions: ['50 х 90 мм', '90 х 100 мм', '40 х 80 мм', '200 х 150 мм', '50 х 150 мм'],
                    paperType: ['Мелованная 100-300/м²', 'Фактурная 100-300/м²', 'Цветная 100-300/м²'],
                    printType: ['Полноцветная с одной стороны'],
                    lamination: ['Матовая', 'глянцевая'],
                    angles: ['Скругленные', 'без скругления']
                }
            },
            {
                id: 2,
                name: 'Холсты',
                image: canvases,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                details: {
                    estimatedCost: '400 ₽',
                    dimensions: ['200 х 150 мм', '50 х 150 мм'],
                    paperType: ['Фактурная 100-300/м²', 'Цветная 100-300/м²'],
                    printType: ['Полноцветная с одной стороны'],
                    lamination: ['Матовая'],
                    angles: ['без скругления']
                }
            }
        ]
    }),
})
