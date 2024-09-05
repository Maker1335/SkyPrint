import { defineStore } from 'pinia'
import pens from '../../assets/img/goods/img/pens.svg'
import pensPrices from '../../assets/img/goods/prices/pensPrices.svg'
import canvases from '../../assets/img/goods/img/canvases.svg'
import canvasesPrices from '../../assets/img/goods/prices/canvasesPrices.svg'
import lamination from '../../assets/img/goods/img/lamination.svg'
import laminationPrices from '../../assets/img/goods/prices/laminationPrices.svg'
// import magneticVinyl from '../../assets/img/goods/img/magneticVinyl.svg'
import magneticVinylPrice from '../../assets/img/goods/prices/magneticVinylPrices.svg'
import shopper from '../../assets/img/goods/img/shopper.svg'
import shopperPrices from '../../assets/img/goods/prices/shopperPrices.svg'
import pillow from '../../assets/img/goods/img/pillow.svg'
import pillowPrices from '../../assets/img/goods/prices/pillowPrices.svg'
import t_shirt from '../../assets/img/goods/img/t-shirt.svg'
import t_shirtPrices from '../../assets/img/goods/prices/t-shirtPrices.svg'

import busrinessCards from '../../assets/img/goods/img/businessCards.svg'
import busrinessCardsPrices from '../../assets/img/goods/prices/busrinessCardsPrices.svg'

import booklets from '../../assets/img/goods/img/booklets.svg'
import bookletsPrices from '../../assets/img/goods/prices/bookletsPrices.svg'

import calendars from '../../assets/img/goods/img/calendars.svg'
import calendarsPrices from '../../assets/img/goods/prices/calendarsPrices.svg'

import laserPrinting from '../../assets/img/goods/img/laserPrinting.svg'
import laserPrintingPrices from '../../assets/img/goods/prices/laserPrintingPrices.svg'

import stickers from '../../assets/img/goods/img/stickers.svg'
import stickersPrices from '../../assets/img/goods/prices/stickersPrices.svg'

import plotterCutting from '../../assets/img/goods/img/plotterCutting.svg'
import plotterCuttingPrices from '../../assets/img/goods/prices/plotterCuttingPrices.svg'

import notebooks from '../../assets/img/goods/img/notebooks.svg'
import notebooksPrices from '../../assets/img/goods/prices/notebooksPrices.svg'

import plasticCards from '../../assets/img/goods/img/plasticCards.svg'
import plasticCardsPrices from '../../assets/img/goods/prices/plasticCardsPrices.svg'

import packages from '../../assets/img/goods/img/packages.svg'
import packagesPrices from '../../assets/img/goods/prices/packagesPrices.svg'

import mugs from '../../assets/img/goods/img/mugs.svg'
import mugsPrices from '../../assets/img/goods/prices/mugsPrices.svg'

import badges from '../../assets/img/goods/img/badges.svg'
import badgesPrices from '../../assets/img/goods/prices/badgesPrices.svg'

import disks from '../../assets/img/goods/img/disks.svg'
import disksPrices from '../../assets/img/goods/prices/disksPrices.svg'

import leafletsPrices from '../../assets/img/goods/prices/leafletsPrices.svg'
import scanningPrices from '../../assets/img/goods/prices/scanningPrices.svg'
import postersPrices from '../../assets/img/goods/prices/postersPrices.svg'
import bannersPrices from '../../assets/img/goods/prices/bannersPrices.svg'
import Roll_upPrices from '../../assets/img/goods/prices/Roll_upPrices.svg'
import studioPhotoPrintingPrices from '../../assets/img/goods/prices/studioPhotoPrintingPrices.svg'
import standerPrices from '../../assets/img/goods/prices/standerPrices.svg'
import replicationPrices from '../../assets/img/goods/prices/replicationPrices.svg'
import makingPrices from '../../assets/img/goods/prices/makingPrices.svg'

// import busrinessCardsPrices from '../../assets/img/goods/prices/busrinessCardsPrices.svg'

export const useProductStore = defineStore('product', {
    state: () => ({
        products:  [
            {
                id: 1,
                name: 'Ручки',
                img: pens,
                category: 'Сувениры',
                description: 'Интересный развития. Соображения идейные направлений высшего финансовых нашей и по позволяет задача постоянный постоянный позволяет прогрессивного прогрессивного плановых идейные роль структура нашей равным рамки рост административных нашей же и в развития.Рост и значение равным существенных форм количественный нашей активности и модель интересный играет идейные отношении реализации же постоянный.',
                count: 'От 50 шт',
                details: {
                    estimatedCost: '8 ₽',
                    customFields: {
                        'Тираж': ['От 50 шт'],
                    },
                    // арт ручку: ['Каталог (цена в PS)'],
                    // тампопопечать 1цвет/1оттиск: ['При партии до 250шт. - 2310руб. при партии 500шт. - 3500руб.'],
                    // уф-печать и шелкография: ['(Цену в PS уточнить)'],
                    dimensions: ['50 х 90 мм', '90 х 100 мм', '40 х 80 мм', '200 х 150 мм', '50 х 150 мм'],
                    paperType: ['Мелованная 100-300/м²', 'Фактурная 100-300/м²', 'Цветная 100-300/м²'],
                    printType: ['Полноцветная с одной стороны'],
                    lamination: ['Матовая', 'глянцевая'],
                    angles: ['Скругленные', 'без скругления'],
                    rowspan: 2,
                    colspan: 2,
                },
                prices: [
                    pensPrices
                ],
                save: false,
            },
            {
                id: 2,
                name: 'Холсты',
                img: canvases,
                category: 'Тиражирование',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 1 шт',
                details: {
                    estimatedCost: '910 ₽',
                    customFields: {
                        'Размеры': ['20x30', '30x40', '40x50', '50x70', '80x100', '80x80', '80x60', '30x30', '40x60', '60x90', '90x90', '150x120'],
                        'Тип печати': ['Печать на холсте'],
                    },
                    rowspan: 2,
                    colspan: 12,
                },
                prices: [
                    canvasesPrices
                ],
                save: false
            },
            {
                id: 3,
                name: 'Ламинирование',
                img: lamination,
                category: 'Копировальные услуги',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 10 шт',
                details: {
                    estimatedCost: '100 ₽',
                    customFields: {
                        'тираж': ['10 шт'],
                        'Формат': ['A4', 'A3', 'A2', 'A1','A0'],
                    },
                },
                prices: [
                    laminationPrices
                ],
                save: false
            },
            {
                id: 4,
                name: 'Магнитный винил',
                img: t_shirt,
                category: 'Копировальные услуги',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 1 шт',
                details: {
                    estimatedCost: '70 ₽',
                    customFields: {
                        'Тираж': ['1-49 шт, 50-99 шт', '100-199 шт', '200-499 шт', '500-999 шт', '1000-2499 шт', '<2500 шт'],
                        'Размеры': ['55x55 мм', '50x80 мм', '70x100 мм', '100x150 мм', '150x200 мм', '200x300 мм'],
                    },
                },
                prices: [
                    magneticVinylPrice,
                ],
                save: false
            },
            {
                id: 5,
                name: 'Шоппер',
                img: shopper,
                category: 'Футболки, текстиль',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 10 шт',
                details: {
                    estimatedCost: '600 ₽',
                    customFields: {
                        'Тираж': ['от 10 шт'],
                    },
                },
                prices: [
                    shopperPrices
                ],
                save: false
            },
            {
                id: 6,
                name: 'Подушка',
                img: pillow,
                category: 'Футболки, текстиль',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 10 шт',
                details: {
                    estimatedCost: '600 ₽',
                    customFields: {
                        'Тираж': ['от 10 шт'],
                    },
                },
                prices: [
                    pillowPrices
                ],
                save: false
            },
            {
                id: 7,
                name: 'Футболка',
                img: t_shirt,
                category: 'Футболки, текстиль',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 10 шт',
                details: {
                    estimatedCost: '600 ₽',
                    customFields: {
                        'Тираж': ['от 10 шт'],
                    },
                },
                prices: [
                    t_shirtPrices,
                ],
                save: false
            },
            {
                id: 8,
                name: 'Визитки',
                img: busrinessCards,
                category: 'Футболки, текстиль',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 48 шт',
                details: {
                    estimatedCost: '600 ₽',
                    customFields: {
                        'Тип печети': ['Цифровая (Бумага)'],
                        'Тираж': ['48-192 шт', '192-384 шт', '408-480 шт', '<504 шт'],
                        'Цвет': ['4+0' , '4+4', '4+1', '1+1', '1+0'],
                        'Тип печети': ['Офсетная печать (Картон)'],
                        'Тираж': ['1000 шт', '2000 шт', '3000 шт'],
                    },
                },
                prices: [
                    busrinessCardsPrices,
                ],
                save: false
            },
            {
                id: 9,
                name: 'Листовки',
                img: t_shirt,
                category: 'Футболки, текстиль',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 1000 шт',
                details: {
                    estimatedCost: '3000 ₽',
                    customFields: {
                        'Тираж': ['1000 шт', '2000 шт', '3000 шт', '5000 шт'],
                        'Формат бумаги': ['А3', 'А4', 'А5', 'А6', 'А7', 'Эвро'],
                    },
                },
                prices: [
                    leafletsPrices,
                ],
                save: false
            },
            {
                id: 10,
                name: 'Буклеты',
                img: booklets,
                category: 'Футболки, текстиль',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 1000 шт',
                details: {
                    estimatedCost: '8000 ₽',
                    customFields: {
                        'Тираж': ['1000 шт', '3000 шт', '5000 шт'],
                        'Формат бумаги': ['А3', 'А4', 'А5', 'А6', 'Эвро'],
                    },
                },
                prices: [
                    bookletsPrices,
                ],
                save: false
            },
            {
                id: 11,
                name: 'Календари',
                img: calendars,
                category: 'Футболки, текстиль',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 1 шт',
                details: {
                    estimatedCost: '600 ₽',
                    customFields: {
                        'Вид календаря': ['Квартальные календари'],
                        'Вид календаря': ['Квартальный календарь А4. Без рекламного поля, без ламинирования', 'Квартальный календарь А4. Без рекламного поля, с ламинированием', 
                            'Квартальный календарь А4. С рекламным полем, без ламинирования', 'Квартальный календарь А4. С рекламным полем, с ламинированием', 
                            'Квартальный календарь А3. С тремя рекламными полями, без ламинирования', 'Квартальный календарь А3. С тремя рекламными полями, с ламинированием', 
                            'Квартальный календарь А3. Сетка А4, без ламинирования', 'Квартальный календарь А3. Сетка А4, с ламинированием'],
                        'Тираж': ['1-10 шт', '11-50 шт', '51-100 шт', '<101 шт'],
                        'Вид календаря': ['Перекидные календари'],
                        'Вид календаря': ['Календарь перекидной, формат А4', 'Календарь перекидной, формат А3' ],
                        'Тираж': ['1-10 шт/руб', '11-50 шт/руб', '51-150 шт/руб', 'больше 125 шт/руб', 'больше 250 шт/руб'],
                        'Вид календаря': ['Карманные календари'],
                        'Тираж': ['1-150 шт', '125-150 шт'],
                        'Офсет':['1000 шт', '5000 шт',  '10000 шт'],
                        'Вид календаря': ['Календари-домики'],
                        'Вид календаря': ['Календарь настольный "Домик", 3 сгиба', 'Календарь настольный "Домик", перекидной, сетка: 6 листов, 4+4', 
                            'Календарь настольный "Домик", перекидной, сетка: 12 листов, 4+0'],
                        'Тираж': ['1-10 шт', '11-50 шт', '51-150 шт'],
                        'Вид календаря': ['Офсет'],
                        'Тираж': ['1000 шт'],
                    },
                },
                prices: [
                    calendarsPrices,
                ],
                save: false
            },
            {
                id: 12,
                name: 'Полноцветная лаверная печать',
                img: laserPrinting,
                category: 'Футболки, текстиль',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 1 шт',
                details: {
                    estimatedCost: '40 ₽',
                    customFields: {
                        'Тираж': ['1-10 шт', '11-100 шт', '< 100 шт'],
                        'Формат бумаги': ['А3', 'А4'],
                        'Бумага для полноцветной лазерной печати':['120 г/м','160 г/м3','200 г/м','300 г/м','Самоклейка прозрачная','Самоклейка белая','Бумага "Лён"','Дизайнерския картон 250-300 г/м','Бумага Touch Cover','']
                    },
                },
                prices: [
                    laserPrintingPrices,
                ],
                save: false
            },
            {
                id: 13,
                name: 'Сканирование',
                img: t_shirt,
                category: 'Футболки, текстиль',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 1 шт',
                details: {
                    estimatedCost: '200 ₽',
                    customFields: {
                        'Формат бумаги': ['А4', 'А3', 'А2','А1','А0' ],
                        'Формат сканирования': ['ЧБ', 'Цветное', 'Цв. 600 dpi'],
                    },
                },
                prices: [
                    scanningPrices,
                ],
                save: false
            },
            {
                id: 14,
                name: 'Наклейки',
                img: stickers,
                category: 'Футболки, текстиль',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 10 шт',
                details: {
                    estimatedCost: '900 ₽',
                    customFields: {
                        'Качестов печати': ['360 dpi', '540 dpi', '720 dpi', '1440 dpi'],
                        'Вид наклейки': ['Самоклеящаяся плёнка', 'Самоклеящаяся плёнка + резка по контуру'],
                    },
                },
                prices: [
                    stickersPrices,
                ],
                save: false
            },
            {
                id: 15,
                name: 'Плоттерная резка',
                img: plotterCutting,
                category: 'Футболки, текстиль',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 10 шт',
                details: {
                    estimatedCost: '2000 ₽',
                    customFields: {
                        'Формат (средняя высота символа)': ['> 1 cм', '1-5 см', '<5 см'],
                    },
                },
                prices: [
                    plotterCuttingPrices,
                ],
                save: false
            },
            {
                id: 16,
                name: 'Тиражирование',
                img: t_shirt,
                category: 'Футболки, текстиль',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 100 шт',
                details: {
                    estimatedCost: '1000 ₽',
                    customFields: {
                        'Бланки строгой отчетности':[],
                        'A4 1+0': ['100 шт', '200 шт', '300 шт', '500 шт', '1000 шт'],
                        'A5 1+0': ['200 шт', '400 шт', '600 шт', '1000 шт', '2000 шт'],
                        'A6 1+0': ['400 шт', '800 шт', '1200 шт', '2000 шт', '4000 шт'],
                        'Колличество слоев': ['2 слоя', '3 слоя'],
                        'Тиражирование': [],
                        'Цвет': ['Чёрный', 'Красный, снинй, зелёный'],
                        'Колличество копий с 1 оригинала': ['100 шт', '200 шт', '300 шт', '500 шт', '1000 шт', '5000 шт', '10000 шт'],
                        'Вид бумаги': [],
                        'Формат бумаги': ['А4', 'А3'],

                    },
                },
                prices: [
                    replicationPrices,
                ],
                save: false
            },
            {
                id: 17,
                name: 'Блокноты',
                img: notebooks,
                category: 'Футболки, текстиль',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 1 шт',
                details: {
                    estimatedCost: '600 ₽',
                    customFields: {
                        'Тираж': ['от 10 шт'],
                    },
                },
                prices: [
                    notebooksPrices,
                ],
                save: false
            },
            {
                id: 18,
                name: 'Постеры',
                img: t_shirt,
                category: 'Футболки, текстиль',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 10 шт',
                details: {
                    estimatedCost: '400 ₽',
                    customFields: {
                        'Тираж': ['от 10 шт'],
                        'Материал': ['Бумага постерная', 'Фото бумага (матовая и глянцевая)'],
                        "Качество":['360 dpi', '540 dpi', '720 dpi', '1440 dpi'],
                        'Резка изобрежений в край': []
                    },
                },
                prices: [
                    postersPrices,
                ],
                save: false
            },
            {
                id: 19,
                name: 'Баннеры',
                img: t_shirt,
                category: 'Футболки, текстиль',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 10 шт',
                details: {
                    estimatedCost: '500 ₽',
                    customFields: {
                        'Эко-сольвентная печать до 1,5м': [],
                        'Материал':['Баннер, Корея 440 г/м2','Баннер, Литой 510 г/м2'],
                        'Качестов':['360 dpi', '540 dpi', '720 dpi', '1440 dpi'],
                        'Эко-сольвентная печать до 3м': [],
                        'Материал':['Баннер, Китая 440 г/м2','Баннер, Литой 510 г/м2'],
                        'Качестов':['360 dpi', '540 dpi', '720 dpi', '1440 dpi'],
                        'Прочие работы': ['Люверсовка','Проклейка края','Люверс','Проклейка края "Карман"']
                    },
                },
                prices: [
                    bannersPrices,
                ],
                save: false
            },
            {
                id: 20,
                name: 'Штендер',
                img: t_shirt,
                category: 'Футболки, текстиль',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 10 шт',
                details: {
                    estimatedCost: '7000 ₽',
                    customFields: {
                        'Тираж': ['от 10 шт'],
                    },
                },
                prices: [
                    standerPrices,
                ],
                save: false
            },
            {
                id: 21,
                name: 'Roll-up',
                img: t_shirt,
                category: 'Футболки, текстиль',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 10 шт',
                details: {
                    estimatedCost: '600 ₽',
                    customFields: {
                        'Тираж': ['от 10 шт'],
                        'Материал': ['Roll-up (печать на баннере, без констукции)','Roll-up (печать на плёнке)'],
                        'Качество': ['360 dpi', '540 dpi', '720 dpi', '1440 dpi'],
                    },
                },
                prices: [
                    Roll_upPrices,
                ],
                save: false
            },
            {
                id: 22,
                name: 'Пластиковые карты',
                img: plasticCards,
                category: 'Футболки, текстиль',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 10 шт',
                details: {
                    estimatedCost: '15 ₽',
                    customFields: {
                        'Тираж': ['50-99 шт', '100-299 шт', '300-499 шт', '500-999 шт', '1000-2999 шт', '3000-4999 шт', 'от 5000 шт'],
                        'Дополнительные услуги':['Магнитная полоса+кодирование','Эмбосирование + типирование (за надпись)',
                            'Цветной пластик + (золото, серебро, перламутр)','Прозрачный пластик' ,'Фактурные карты',
                            'Резные карты','Скретч-панель','Полоса для подписи'], 
                        'Тираж дополнительных услуг': ['50-499 шт','500-4999 шт']
                    },
                },
                prices: [
                    plasticCardsPrices,
                ],
                save: false
            },
            {
                id: 23,
                name: 'Изготовление планшетов, табличек, стендов',
                img: t_shirt,
                category: 'Футболки, текстиль',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 10 шт',
                details: {
                    estimatedCost: '2500 ₽',
                    customFields: {
                        'Тираж': ['от 10 шт'],
                        'Вид материала':['Пластик ПХ (2х2 м)','Пенакартон (1х1,40 м )','Кармашки (прозрачный пластик)',],
                        'Толщина материала': ['3/5 мм','3 мм','5 мм','А3','А4','А5','под визитки',]
                    },
                },
                prices: [
                    makingPrices ,
                ],
                save: false
            },
            
            {
                id: 24,
                name: 'Пакеты ПВД',
                img: packages,
                category: 'Футболки, текстиль',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 50 шт',
                details: {
                    estimatedCost: '35 ₽',
                    customFields: {
                        'Тираж': ['50 шт','100 шт','150 шт','200 шт','300 шт','400 шт','500 шт','1000 шт'],
                        'Что-то':['1+0','2+0','1+1','3+0','2+1','4+0','3+1','2+2']
                    },
                },
                prices: [
                    packagesPrices,
                ],
                save: false
            },
            {
                id: 25,
                name: 'Кружки',
                img: mugs,
                category: 'Футболки, текстиль',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 1 шт',
                details: {
                    estimatedCost: '450 ₽',
                    customFields: {
                        'Тираж': ['от 1 шт','от 10 шт','от 20 шт'],
                        'Наименовения':['Кружка стандартная (белая внутри и снаружи)','Кружка цветная внутри','Кружка цветная внутри+ручка',
                            'Кружка цветная ручка+каемка','Кружка цветная с ложкой','Кружка цветная снаружи (розовая, серебро, золото)',
                            'Кружка кофейная + ложка и блюдце','Кружка-хамелеон','Термо автомобильная кружка','Термостакан с полиграфической вставкой'],
                    },
                },
                prices: [
                    mugsPrices,
                ],
                save: false
            }, 
            {
                id: 26,
                name: 'Силиконовые браслеты',
                img: t_shirt,
                category: 'Футболки, текстиль',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 100 шт',
                details: {
                    estimatedCost: '80 ₽',
                    customFields: {
                        'Тираж': ['100 шт','200 шт','300 шт','500 шт','1000 шт','3000 шт','5000 шт','10000 шт'],
                        'Виды':['С логотипом. Круговая шелкография','С выдавленным и прокрашенным логотипом','Сегментированные с логотипом. Круговая шелкография',
                            'Двухсторонние с логотипом. Круговая шелкография','С нумерацией','С вдавленным/выпуклым логотипом','С вдавленным прокрашиным логотипом'],
                    },
                },
                prices: [
                    t_shirtPrices,
                ],
                save: false
            },
            {
                id: 27,
                name: 'Закатные экспресс-значки',
                img: badges,
                category: 'Футболки, текстиль',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 10 шт',
                details: {
                    estimatedCost: '50 ₽',
                    customFields: {
                        'Тираж': ['от 10 шт','10-99 шт','100 шт','200 шт','300 шт','600 шт','800 шт','1000 шт','5000 шт'],
                        'Диамерт':['37 мм','58 мм'],
                    },
                },
                prices: [
                    badgesPrices,
                ],
                save: false
            },
            {
                id: 28,
                name: 'Студийная печать фотографий',
                img: t_shirt,
                category: 'Футболки, текстиль',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 1 шт',
                details: {
                    estimatedCost: '70 ₽',
                    customFields: {
                        'Тираж': ['1-11 шт', '<11'],
                        'Формат':['10х15 (1-11 шт)', '10х15(<11 шт)','13х18','15х20','20х30','3х4'],
                    },
                },
                prices: [
                    studioPhotoPrintingPrices,
                ],
                save: false
            },
            {
                id: 29,
                name: 'Диски',
                img: disks,
                category: 'Футболки, текстиль',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 100 шт',
                details: {
                    estimatedCost: '40 ₽',
                    customFields: {
                        'Тираж': ['1-10 шт','11-100 шт','<100 шт'],
                        'Запись на носитель':['CD-R','DVD-R','Мини-диск'],
                    },
                },
                prices: [
                    disksPrices,
                ],
                save: false
            },
        ]
    }),
    actions: {
        toggleSave(productId) {
            const product = this.products.find(p => p.id === productId);
            if (product) {
                product.save = !product.save;
                this.updateLocalStorage();
            }
        },
        updateLocalStorage() {
            localStorage.setItem('products', JSON.stringify(this.products));
        },
        // Метод для инициализации данных из локального хранилища
        loadFromLocalStorage() {
            const savedProducts = localStorage.getItem('products');
            if (savedProducts) {
                this.products = JSON.parse(savedProducts);
            }
        },
    },
    created() {
        this.loadFromLocalStorage();
    }
})
