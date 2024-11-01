import { defineStore } from 'pinia'
import { useImagesStore } from './imagesStore.js' 

export const useProductStore = defineStore('product', {
    state: () => {
        const imagesStore = useImagesStore();
        return {
        products: [
            {
                id: 1,
                name: 'Ручки',
                img: imagesStore.images.pens,
                category: 'Сувениры',
                description: 'Способы нанесения и стоимость ручек уточнять у менеджера, каталог ручек предоставляется клиенту на выбор. Рассчет индивидуальный и зависит от вашего макета.',
                count: 'От 50 шт',
                details: {
                    estimatedCostTitle: 'Ориентировочная стоимость за штуку',
                    estimatedCostPrice: 'от 8 ₽',
                    customFields: {
                        'Тираж': ['От 50 шт'],
                    },
                    dimensions: ['50 х 90 мм', '90 х 100 мм', '40 х 80 мм', '200 х 150 мм', '50 х 150 мм'],
                    paperType: ['Мелованная 100-300/м²', 'Фактурная 100-300/м²', 'Цветная 100-300/м²'],
                    printType: ['Полноцветная с одной стороны'],
                    lamination: ['Матовая', 'глянцевая'],
                    angles: ['Скругленные', 'без скругления'],
                    rowspan: 2,
                    colspan: 2,
                },
                prices: [
                    imagesStore.images.pensPrices

                ],
                save: false,
            },
            {
                id: 2,
                name: 'Холсты',
                img: imagesStore.images.canvases,
                category: 'Тиражирование',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 1 шт',
                details: {
                    estimatedCostTitle: 'ориентировочная стоимость за штуку',
                    estimatedCostPrice: 'от 910 ₽',
                    customFields: {
                        'Размеры': ['20x30', '30x40', '40x50', '50x70', '80x100', '80x80', '80x60', '30x30', '40x60', '60x90', '90x90', '150x120'],
                        'Тип печати': ['Печать на холсте'],
                    },
                    rowspan: 2,
                    colspan: 12,
                },
                prices: [
                    imagesStore.images.canvasesPrices
                ],
                save: false
            },
            {
                id: 3,
                name: 'Ламинирование',
                img: imagesStore.images.lamination,
                category: 'Копировальные услуги',
                description: `Ламинирование больших форматов возможно при помощи глянцевой, матовой плёнки. Первая идеально передаёт цветовую гамму и яркость, вторая не даёт бликов и подходит для документов даже с самым мелким шрифтом. Сам расходный материал является многослойным, идеально защищает поверхности под собой от любых внешних воздействий.
                \nРаботаем даже с очень большими размерами! Легко ламинируем как обычный лист А4, так и до А0 формата.`,
                count: 'От 10 шт',
                details: {
                    estimatedCostTitle: 'ориентировочная стоимость за штуку',
                    estimatedCostPrice: 'от 30 ₽',
                    customFields: {
                        'тираж': ['10 шт'],
                        'Формат': ['A4', 'A3', 'A2', 'A1', 'A0'],
                    },
                },
                prices: [
                    imagesStore.images.laminationPrices
                ],
                save: false
            },
            {
                id: 4,
                name: 'Магнитный винил',
                img: imagesStore.images.magneticVinyl,
                category: 'Копировальные услуги',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 1 шт',
                details: {
                    estimatedCostTitle: 'ориентировочная стоимость за штуку',
                    estimatedCostPrice: 'от 43 ₽',
                    customFields: {
                        'Тираж': ['1-49 шт, 50-99 шт', '100-199 шт', '200-499 шт', '500-999 шт', '1000-2499 шт', '<2500 шт'],
                        'Размеры': ['55x55 мм', '50x80 мм', '70x100 мм', '100x150 мм', '150x200 мм', '200x300 мм'],
                    },
                },
                prices: [
                    imagesStore.images.magneticVinylPrice,
                ],
                save: false
            },
            {
                id: 5,
                name: 'Шоппер',
                img: imagesStore.images.shopper,
                category: 'Футболки, текстиль',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 10 шт',
                details: {
                    estimatedCostTitle: 'ориентировочная стоимость за штуку',
                    estimatedCostPrice: 'от 800 ₽',
                    customFields: {
                        'Тираж': ['от 10 шт'],
                    },
                },
                prices: [
                    imagesStore.images.shopperPrices
                ],
                save: false
            },
            {
                id: 6,
                name: 'Подушка',
                img: imagesStore.images.pillow,
                category: 'Футболки, текстиль',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 10 шт',
                details: {
                    estimatedCostTitle: 'ориентировочная стоимость за штуку',
                    estimatedCostPrice: 'от 600 ₽',
                    customFields: {
                        'Тираж': ['от 10 шт'],
                    },
                },
                prices: [
                    imagesStore.images.pillowPrices
                ],
                save: false
            },
            {
                id: 7,
                name: 'Футболка',
                img: imagesStore.images.t_shirt,
                category: 'Футболки, текстиль',
                description: "При тираже от 10 штук цена меняется. (рассчитывается с менеджером индивидуально)",
                count: 'От 10 шт',
                details: {
                    estimatedCostTitle: 'ориентировочная стоимость за штуку (с нанесением)',
                    estimatedCostPrice: 'от 1300 ₽',
                    customFields: {
                        'Тираж': ['от 10 шт'],
                    },
                },
                prices: [
                    imagesStore.images.t_shirtPrices,
                ],
                save: false
            },
            {
                id: 8,
                name: 'Визитки',
                img: imagesStore.images.busrinessCards,
                category: 'Футболки, текстиль',
                description: "Срочно понадобились визитки? Хотите, чтобы визитная карточка работала на ваш статус и продвигала бизнес? Тогда доверьте эффективную презентацию профессионалам!",
                count: 'От 48 шт',
                details: {
                    estimatedCostTitle: 'ориентировочная стоимость за 1 штуку',
                    estimatedCostPrice: 'от 11 ₽',
                    customFields: {
                        'Тип печети': ['Цифровая (Бумага)'],
                        'Тираж': ['48-192 шт', '192-384 шт', '408-480 шт', '<504 шт'],
                        'Цвет': ['4+0', '4+4', '4+1', '1+1', '1+0'],
                        'Тип печети': ['Офсетная печать (Картон)'],
                        'Тираж': ['1000 шт', '2000 шт', '3000 шт'],
                    },
                },
                prices: [
                    imagesStore.images.busrinessCardsPrices,
                ],
                save: false
            },
            {
                id: 9,
                name: 'Листовки',
                img: imagesStore.images.leaflets,
                category: 'Футболки, текстиль',
                description: "Где в Челябинске можно оперативно, качественно и недорого напечатать листовки и буклеты? Как эффективно донести до потребителя информацию о ваших товарах и услугах? Лучшее решение предлагает типография Sky Print — ведущий представитель на рынке полиграфических услуг Челябинска. Расскажите о продукции вашей компании, предстоящем мероприятии или планируемой акции с помощью наших красочных листовок и буклетов!",
                count: 'От 1000 шт',
                details: {
                    estimatedCostTitle: 'Ориентировочная стоимость',
                    estimatedCostPrice: 'от 2999 ₽',
                    customFields: {
                        'Тираж': ['1000 шт', '2000 шт', '3000 шт', '5000 шт'],
                        'Формат бумаги': ['А3', 'А4', 'А5', 'А6', 'А7', 'Эвро'],
                    },
                },
                prices: [
                    imagesStore.images.leafletsPrices,
                ],
                save: false
            },
            {
                id: 10,
                name: 'Буклеты',
                img: imagesStore.images.booklets,
                category: 'Футболки, текстиль',
                description: "Где в Челябинске можно оперативно, качественно и недорого напечатать листовки и буклеты? Как эффективно донести до потребителя информацию о ваших товарах и услугах? Лучшее решение предлагает типография Sky Print — ведущий представитель на рынке полиграфических услуг Челябинска. Расскажите о продукции вашей компании, предстоящем мероприятии или планируемой акции с помощью наших красочных листовок и буклетов!",
                count: 'От 1000 шт',
                details: {
                    estimatedCostTitle: 'ориентировочная стоимость',
                    estimatedCostPrice: 'от 5590 ₽',
                    customFields: {
                        'Тираж': ['1000 шт', '3000 шт', '5000 шт'],
                        'Формат бумаги': ['А3', 'А4', 'А5', 'А6', 'Эвро'],
                    },
                },
                prices: [
                    imagesStore.images.bookletsPrices,
                ],
                save: false
            },
            {
                id: 11,
                name: 'Календари',
                img: imagesStore.images.calendars,
                category: 'Футболки, текстиль',
                description: "Календарь-один из популярных видов сувенирной полиграфической продукции. Как правило такой сувенир размещают на самом видном месте в офисе, тем самым украшая его. Календарь несет в себе различную информацию о компании, являясь одним из наиболее действенных инструментов рекламы. Типография «Skyprint» разработает дизайн и изготовит для Вас любой из видов календарей: настольные, настенные, перекидные, квартальные, карманные, календари-домики.",
                count: 'От ? шт',
                details: {
                    estimatedCostTitle: 'Ориентировочная стоимость',
                    estimatedCostPrice: '?? ₽',
                    customFields: {
                        'Вид календаря': ['Квартальные календари'],
                        'Вид календаря': ['Квартальный календарь А4. Без рекламного поля, без ламинирования', 'Квартальный календарь А4. Без рекламного поля, с ламинированием',
                            'Квартальный календарь А4. С рекламным полем, без ламинирования', 'Квартальный календарь А4. С рекламным полем, с ламинированием',
                            'Квартальный календарь А3. С тремя рекламными полями, без ламинирования', 'Квартальный календарь А3. С тремя рекламными полями, с ламинированием',
                            'Квартальный календарь А3. Сетка А4, без ламинирования', 'Квартальный календарь А3. Сетка А4, с ламинированием'],
                        'Тираж': ['1-10 шт', '11-50 шт', '51-100 шт', '<101 шт'],
                        'Вид календаря': ['Перекидные календари'],
                        'Вид календаря': ['Календарь перекидной, формат А4', 'Календарь перекидной, формат А3'],
                        'Тираж': ['1-10 шт/руб', '11-50 шт/руб', '51-150 шт/руб', 'больше 125 шт/руб', 'больше 250 шт/руб'],
                        'Вид календаря': ['Карманные календари'],
                        'Тираж': ['1-150 шт', '125-150 шт'],
                        'Офсет': ['1000 шт', '5000 шт', '10000 шт'],
                        'Вид календаря': ['Календари-домики'],
                        'Вид календаря': ['Календарь настольный "Домик", 3 сгиба', 'Календарь настольный "Домик", перекидной, сетка: 6 листов, 4+4',
                            'Календарь настольный "Домик", перекидной, сетка: 12 листов, 4+0'],
                        'Тираж': ['1-10 шт', '11-50 шт', '51-150 шт'],
                        'Вид календаря': ['Офсет'],
                        'Тираж': ['1000 шт'],
                    },
                },
                prices: [
                    imagesStore.images.calendarsPrices,
                ],
                save: false
            },
            {
                id: 12,
                name: 'Полноцветная лазерная печать',
                img: imagesStore.images.laserPrinting,
                category: 'Футболки, текстиль',
                description: `В стоимость входит бумага Снегурочка 80 г/м. Цена может меняться в зависимости от типа бумаги.`,
                count: 'От 1 шт',
                details: {
                    estimatedCostTitle: 'за штуку',
                    estimatedCostPrice: 'от 23 ₽',
                    customFields: {
                        'Тираж': ['1-10 шт', '11-100 шт', '< 100 шт'],
                        'Формат бумаги': ['А3', 'А4'],
                        'Бумага для полноцветной лазерной печати': ['120 г/м', '160 г/м3', '200 г/м', '300 г/м', 'Самоклейка прозрачная', 'Самоклейка белая', 'Бумага "Лён"', 'Дизайнерския картон 250-300 г/м', 'Бумага Touch Cover', '']
                    },
                },
                prices: [
                    imagesStore.images.laserPrintingPrices,
                ],
                save: false
            },
            {
                id: 13,
                name: 'Сканирование',
                img: imagesStore.images.scanning,
                category: 'Футболки, текстиль',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 1 шт',
                details: {
                    estimatedCostTitle: 'за штуку',
                    estimatedCostPrice: 'от 4 ₽',
                    customFields: {
                        'Формат бумаги': ['А4', 'А3', 'А2', 'А1', 'А0'],
                        'Формат сканирования': ['ЧБ', 'Цветное', 'Цв. 600 dpi'],
                    },
                },
                prices: [
                    imagesStore.images.scanningPrices,
                ],
                save: false
            },
            {
                id: 14,
                name: 'Наклейки',
                img: imagesStore.images.stickers,
                category: 'Футболки, текстиль',
                description: "Минимальная стоимость заказа - 300 руб! \nСтоимость на готовой цветной виниловой пленки может отличвться от прайса (уточнять у менеджера!) \nТермоплёнка - 1400 руб. кв.м.",
                count: 'От 10 шт',
                details: {
                    estimatedCostTitle: 'за штуку',
                    estimatedCostPrice: 'от 300 ₽',
                    customFields: {
                        'Качестов печати': ['360 dpi', '540 dpi', '720 dpi', '1440 dpi'],
                        'Вид наклейки': ['Самоклеящаяся плёнка', 'Самоклеящаяся плёнка + резка по контуру'],
                    },
                },
                prices: [
                    imagesStore.images.stickersPrices,
                ],
                save: false
            },
            {
                id: 15,
                name: 'Плоттерная резка',
                img: imagesStore.images.plotterCutting,
                category: 'Футболки, текстиль',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 10 шт',
                details: {
                    estimatedCostTitle: 'за штуку',
                    estimatedCostPrice: 'от 300 ₽',
                    customFields: {
                        'Формат (средняя высота символа)': ['> 1 cм', '1-5 см', '<5 см'],
                    },
                },
                prices: [
                    imagesStore.images.plotterCuttingPrices,
                ],
                save: false
            },
            {
                id: 16,
                name: 'Тиражирование',
                img: imagesStore.images.replication,
                category: 'Футболки, текстиль',
                description: `При двустороней печачти и при печати на формате А3 стоимость удваивается. 
При изготовлении копий с повышенным фоновым заполнением наценка до 50%.  
Резка в зависимости от тиража и кол-ва резов 20-25% от стоимости заказа.`,
                count: 'От 100 шт',
                details: {
                    estimatedCostTitle: 'за штуку',
                    estimatedCostPrice: 'от 2,2 ₽',
                    customFields: {
                        'Бланки строгой отчетности': [],
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
                    imagesStore.images.replicationPrices,
                ],
                save: false
            },
            {
                id: 17,
                name: 'Блокноты',
                img: imagesStore.images.notebooks,
                category: 'Футболки, текстиль',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 1 шт',
                details: {
                    estimatedCostTitle: 'ориентировачная стоимость за штуку',
                    estimatedCostPrice: 'от 150 ₽',
                    customFields: {
                        'Тираж': ['от 10 шт'],
                    },
                },
                prices: [
                    imagesStore.images.notebooksPrices,
                ],
                save: false
            },
            {
                id: 18,
                name: 'Постеры',
                img: imagesStore.images.t_shirt,
                category: 'Футболки, текстиль',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 10 шт',
                details: {
                    estimatedCostTitle: 'за штуку',
                    estimatedCostPrice: 'от 60 ₽',
                    customFields: {
                        'Тираж': ['от 10 шт'],
                        'Материал': ['Бумага постерная', 'Фото бумага (матовая и глянцевая)'],
                        "Качество": ['360 dpi', '540 dpi', '720 dpi', '1440 dpi'],
                        'Резка изобрежений в край': []
                    },
                },
                prices: [
                    imagesStore.images.postersPrices,
                ],
                save: false
            },
            {
                id: 19,
                name: 'Баннеры',
                img: imagesStore.images.t_shirt,
                category: 'Прочее',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 10 шт',
                details: {
                    estimatedCostTitle: 'Ориентировочная стоимость за штуку',
                    estimatedCostPrice: 'от 600 ₽',
                    customFields: {
                        'Эко-сольвентная печать до 1,5м': [],
                        'Материал': ['Баннер, Корея 440 г/м2', 'Баннер, Литой 510 г/м2'],
                        'Качестов': ['360 dpi', '540 dpi', '720 dpi', '1440 dpi'],
                        'Эко-сольвентная печать до 3м': [],
                        'Материал': ['Баннер, Китая 440 г/м2', 'Баннер, Литой 510 г/м2'],
                        'Качестов': ['360 dpi', '540 dpi', '720 dpi', '1440 dpi'],
                        'Прочие работы': ['Люверсовка', 'Проклейка края', 'Люверс', 'Проклейка края "Карман"']
                    },
                },
                prices: [
                    imagesStore.images.bannersPrices,
                ],
                save: false
            },
            {
                id: 20,
                name: 'Штендер',
                img: imagesStore.images.t_shirt,
                category: 'Прочее',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 10 шт',
                details: {
                    estimatedCostTitle: 'ориентировачная стоимостьза штуку',
                    estimatedCostPrice: 'от 7300 ₽',
                    customFields: {
                        'Тираж': ['от 10 шт'],
                    },
                },
                prices: [
                    imagesStore.images.standerPrices,
                ],
                save: false
            },
            {
                id: 21,
                name: 'Roll-up',
                img: imagesStore.images.RollUp,
                category: 'Прочее',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 10 шт',
                details: {
                    estimatedCostTitle: 'Ориентировочная стоимость за штуку',
                    estimatedCostPrice: 'от 6435 ₽',
                    customFields: {
                        'Тираж': ['от 10 шт'],
                        'Материал': ['Roll-up (печать на баннере, без констукции)', 'Roll-up (печать на плёнке)'],
                        'Качество': ['360 dpi', '540 dpi', '720 dpi', '1440 dpi'],
                    },
                },
                prices: [
                    imagesStore.images.Roll_upPrices,
                ],
                save: false
            },
            {
                id: 22,
                name: 'Пластиковые карты',
                img: imagesStore.images.plasticCards,
                category: 'Прочее',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 10 шт',
                details: {
                    estimatedCostTitle: 'Ориентировочная стоимость за штуку',
                    estimatedCostPrice: 'от 75 ₽',
                    customFields: {
                        'Тираж': ['50-99 шт', '100-299 шт', '300-499 шт', '500-999 шт', '1000-2999 шт', '3000-4999 шт', 'от 5000 шт'],
                        'Дополнительные услуги': ['Магнитная полоса+кодирование', 'Эмбосирование + типирование (за надпись)',
                            'Цветной пластик + (золото, серебро, перламутр)', 'Прозрачный пластик', 'Фактурные карты',
                            'Резные карты', 'Скретч-панель', 'Полоса для подписи'],
                        'Тираж дополнительных услуг': ['50-499 шт', '500-4999 шт']
                    },
                },
                prices: [
                    imagesStore.images.plasticCardsPrices,
                ],
                save: false
            },
            {
                id: 23,
                name: 'Изготовление планшетов, табличек, стендов',
                img: imagesStore.images.t_shirt,
                category: 'Прочее',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 10 шт',
                details: {
                    estimatedCostTitle: 'за штуку',
                    estimatedCostPrice: 'от 316 ₽',
                    customFields: {
                        'Тираж': ['от 10 шт'],
                        'Вид материала': ['Пластик ПХ (2х2 м)', 'Пенакартон (1х1,40 м )', 'Кармашки (прозрачный пластик)',],
                        'Толщина материала': ['3/5 мм', '3 мм', '5 мм', 'А3', 'А4', 'А5', 'под визитки',]
                    },
                },
                prices: [
                    imagesStore.images.makingPrices,
                ],
                save: false
            },

            {
                id: 24,
                name: 'Пакеты ПВД',
                img: imagesStore.images.packages,
                category: 'Прочее',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От ? шт',
                details: {
                    estimatedCostTitle: 'Ориентировочная стоимость',
                    estimatedCostPrice: '?? ₽',
                    customFields: {
                        'Тираж': ['50 шт', '100 шт', '150 шт', '200 шт', '300 шт', '400 шт', '500 шт', '1000 шт'],
                        'Что-то': ['1+0', '2+0', '1+1', '3+0', '2+1', '4+0', '3+1', '2+2']
                    },
                },
                prices: [
                    imagesStore.images.packagesPrices,
                ],
                save: false
            },
            {
                id: 25,
                name: 'Кружки',
                img: imagesStore.images.mugs,
                category: 'Прочее',
                description: "В асортименте появля.тся новые цвета у поставщиков, уточнять у менеджера.",
                count: 'От 1 шт',
                details: {
                    estimatedCostTitle: 'Ориентировочная стоимость за штуку',
                    estimatedCostPrice: 'от 350 ₽',
                    customFields: {
                        'Тираж': ['от 1 шт', 'от 10 шт', 'от 20 шт'],
                        'Наименовения': ['Кружка стандартная (белая внутри и снаружи)', 'Кружка цветная внутри', 'Кружка цветная внутри+ручка',
                            'Кружка цветная ручка+каемка', 'Кружка цветная с ложкой', 'Кружка цветная снаружи (розовая, серебро, золото)',
                            'Кружка кофейная + ложка и блюдце', 'Кружка-хамелеон', 'Термо автомобильная кружка', 'Термостакан с полиграфической вставкой'],
                    },
                },
                prices: [
                    imagesStore.images.mugsPrices,
                ],
                save: false
            },
            {
                id: 26,
                name: 'Силиконовые браслеты',
                img: imagesStore.images.siliconeBracelets,
                category: 'Прочее',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 100 шт',
                details: {
                    estimatedCostTitle: 'Ориентировочная стоимость за штуку',
                    estimatedCostPrice: 'от 65 ₽',
                    customFields: {
                        'Тираж': ['100 шт', '200 шт', '300 шт', '500 шт', '1000 шт', '3000 шт', '5000 шт', '10000 шт'],
                        'Виды': ['С логотипом. Круговая шелкография', 'С выдавленным и прокрашенным логотипом', 'Сегментированные с логотипом. Круговая шелкография',
                            'Двухсторонние с логотипом. Круговая шелкография', 'С нумерацией', 'С вдавленным/выпуклым логотипом', 'С вдавленным прокрашиным логотипом'],
                    },
                },
                prices: [
                    imagesStore.images.siliconeBraceletsPrices,
                ],
                save: false
            },
            {
                id: 27,
                name: 'Закатные экспресс-значки',
                img: imagesStore.images.badges,
                category: 'Прочее',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 10 шт',
                details: {
                    estimatedCostTitle: 'ориент. стоимость за штуку (37мм диаметр)',
                    estimatedCostPrice: 'от 85 ₽',
                    customFields: {
                        'Тираж': ['от 10 шт', '10-99 шт', '100 шт', '200 шт', '300 шт', '600 шт', '800 шт', '1000 шт', '5000 шт'],
                        'Диамерт': ['37 мм', '58 мм'],
                    },
                },
                prices: [
                    imagesStore.images.badgesPrices,
                ],
                save: false
            },
            {
                id: 28,
                name: 'Струйная печать фотографий',
                img: imagesStore.images.studioPhotoPrinting,
                category: 'Прочее',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От ? шт',
                details: {
                    estimatedCostTitle: 'Ориентировочная стоимость',
                    estimatedCostPrice: '?? ₽',
                    customFields: {
                        'Тираж': ['1-11 шт', '<11'],
                        'Формат': ['10х15 (1-11 шт)', '10х15(<11 шт)', '13х18', '15х20', '20х30', '3х4'],
                    },
                },
                prices: [
                    imagesStore.images.studioPhotoPrintingPrices,
                ],
                save: false
            },
            {
                id: 29,
                name: 'Диски',
                img: imagesStore.images.disks,
                category: 'Прочее',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dolor veritatis, voluptas magnam itaque voluptatem ullam eveniet earum inventore at ratione quis dolorem minima quisquam temporibus quae asperiores quasi.",
                count: 'От 100 шт',
                details: {
                    estimatedCostTitle: 'Ориентировочная стоимость за штуку',
                    estimatedCostPrice: 'от 40 ₽',
                    customFields: {
                        'Тираж': ['1-10 шт', '11-100 шт', '<100 шт'],
                        'Запись на носитель': ['CD-R', 'DVD-R', 'Мини-диск'],
                    },
                },
                prices: [
                    imagesStore.images.disksPrices,
                ],
                save: false
            },
        ]
    }},
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
