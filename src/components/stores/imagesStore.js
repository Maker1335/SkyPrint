import { defineStore } from 'pinia'

import pens from '../../assets/img/goods/img/pens.svg'
import pensPrices from '../../assets/img/goods/prices/pensPrices.svg'
import canvases from '../../assets/img/goods/img/canvases.webp'
import canvasesPrices from '../../assets/img/goods/prices/canvasesPrices.svg'
import lamination from '../../assets/img/goods/img/lamination.webp'
import laminationPrices from '../../assets/img/goods/prices/laminationPrices.svg'
import magneticVinyl from '../../assets/img/goods/img/magneticVinyl.svg'
import magneticVinylPrice from '../../assets/img/goods/prices/magneticVinylPrices.svg'
import shopper from '../../assets/img/goods/img/shopper.webp'
import shopperPrices from '../../assets/img/goods/prices/shopperPrices.svg'
import pillow from '../../assets/img/goods/img/pillow.webp'
import pillowPrices from '../../assets/img/goods/prices/pillowPrices.svg'
import t_shirt from '../../assets/img/goods/img/t-shirt.webp'
import t_shirtPrices from '../../assets/img/goods/prices/t-shirtPrices.svg'
import busrinessCards from '../../assets/img/goods/img/busrinessCards.webp'
import busrinessCardsPrices from '../../assets/img/goods/prices/busrinessCardsPrices.svg'
import booklets from '../../assets/img/goods/img/booklets.svg'
import bookletsPrices from '../../assets/img/goods/prices/bookletsPrices.svg'
import calendars from '../../assets/img/goods/img/calendars.svg'
import calendarsPrices from '../../assets/img/goods/prices/calendarsPrices.svg'
import laserPrinting from '../../assets/img/goods/img/laserPrinting.webp'
import laserPrintingPrices from '../../assets/img/goods/prices/laserPrintingPrices.svg'
import stickers from '../../assets/img/goods/img/stickers.svg'
import stickersPrices from '../../assets/img/goods/prices/stickersPrices.svg'
import plotterCutting from '../../assets/img/goods/img/plotterCutting.svg'
import plotterCuttingPrices from '../../assets/img/goods/prices/plotterCuttingPrices.svg'
import notebooks from '../../assets/img/goods/img/notebooks.webp'
import notebooksPrices from '../../assets/img/goods/prices/notebooksPrices.svg'
import plasticCards from '../../assets/img/goods/img/plasticCards.webp'
import plasticCardsPrices from '../../assets/img/goods/prices/plasticCardsPrices.svg'
import packages from '../../assets/img/goods/img/packages.webp'
import packagesPrices from '../../assets/img/goods/prices/packagesPrices.svg'
import mugs from '../../assets/img/goods/img/mugs.svg'
import mugsPrices from '../../assets/img/goods/prices/mugsPrices.svg'
import badges from '../../assets/img/goods/img/badges.webp'
import badgesPrices from '../../assets/img/goods/prices/badgesPrices.svg'
import disks from '../../assets/img/goods/img/disks.webp'
import disksPrices from '../../assets/img/goods/prices/disksPrices.svg'
import siliconeBracelets from '../../assets/img/goods/img/siliconeBracelets.webp'
import siliconeBraceletsPrices from '../../assets/img/goods/prices/siliconeBraceletsPrices.svg'
import leaflets from '../../assets/img/goods/img/leaflets.svg'
import leafletsPrices from '../../assets/img/goods/prices/leafletsPrices.svg'
import scanning from '../../assets/img/goods/img/scanning.svg'
import scanningPrices from '../../assets/img/goods/prices/scanningPrices.svg'
import poster from '../../assets/img/goods/img/poster.webp'
import postersPrices from '../../assets/img/goods/prices/postersPrices.svg'
import banner from '../../assets/img/goods/img/banner.webp'
import bannersPrices from '../../assets/img/goods/prices/bannersPrices.svg'
import RollUp from '../../assets/img/goods/img/RollUp.webp'
import Roll_upPrices from '../../assets/img/goods/prices/Roll_upPrices.svg'
import studioPhotoPrinting from '../../assets/img/goods/img/studioPhotoPrinting.webp'
import studioPhotoPrintingPrices from '../../assets/img/goods/prices/studioPhotoPrintingPrices.svg'
import stander from '../../assets/img/goods/img/stander.webp'
import standerPrices from '../../assets/img/goods/prices/standerPrices.svg'
import replication from '../../assets/img/goods/img/replication.webp'
import replicationPrices from '../../assets/img/goods/prices/replicationPrices.svg'

import b_w_print from '../../assets/img/goods/img/b_w_print.webp'
import b_w_printPrices from '../../assets/img/goods/prices/b_w_printPrices.svg'
import plates from '../../assets/img/goods/img/plates.webp'
import thermo_mug from '../../assets/img/goods/img/thermo_mug.webp'
import thermos from '../../assets/img/goods/img/thermos.webp'
import magnets from '../../assets/img/goods/img/magnets.webp'
import glasses from '../../assets/img/goods/img/glasses.webp'
import keychain from '../../assets/img/goods/img/keychain.webp'
import mouse_pad from '../../assets/img/goods/img/mouse_pad.webp'
import puzzles from '../../assets/img/goods/img/puzzles.webp'
import thermos_cup from '../../assets/img/goods/img/thermos_cup.webp'
import baseballCaps from '../../assets/img/goods/img/baseballCaps.webp'

import flipCalendars from '../../assets/img/goods/img/flipCalendars.webp'
import flipCalendarsPrices from '../../assets/img/goods/prices/flipCalendarsPrices.svg'
import quarterlyCalendars from '../../assets/img/goods/img/quarterlyCalendars.webp'
import quarterlyCalendarsPrices from '../../assets/img/goods/prices/quarterlyCalendarsPrices.svg'
import pocketCalendars from '../../assets/img/goods/img/pocketCalendars.webp'
import pocketCalendarsPrices from '../../assets/img/goods/prices/pocketCalendarsPrices.svg'
import housesCalendars from '../../assets/img/goods/img/housesCalendars.webp'
import housesCalendarsPrices from '../../assets/img/goods/prices/housesCalendarsPrices.svg'

import makingPrices from '../../assets/img/goods/prices/makingPrices.svg'
import car from '../../assets/img/goods/img/car.webp'
import printingOfDrawings from '../../assets/img/goods/img/printingOfDrawings.webp'

export const useImagesStore = defineStore('images', {
    state: () => ({
        images: {
            pens,
            pensPrices,
            canvases,
            canvasesPrices,
            lamination,
            laminationPrices,
            magneticVinyl,
            magneticVinylPrice,
            shopper,
            shopperPrices,
            pillow,
            pillowPrices,
            t_shirt,
            t_shirtPrices,
            busrinessCards,
            busrinessCardsPrices,
            booklets,
            bookletsPrices,
            calendars,
            calendarsPrices,
            laserPrinting,
            laserPrintingPrices,
            stickers,
            stickersPrices,
            plotterCutting,
            plotterCuttingPrices,
            notebooks,
            notebooksPrices,
            plasticCards,
            plasticCardsPrices,
            packages,
            packagesPrices,
            mugs,
            mugsPrices,
            badges,
            badgesPrices,
            disks,
            disksPrices,
            siliconeBracelets,
            siliconeBraceletsPrices,
            leaflets,
            leafletsPrices,
            scanning,
            scanningPrices,
            poster,
            postersPrices,
            banner,
            bannersPrices,
            RollUp,
            Roll_upPrices,
            studioPhotoPrinting,
            studioPhotoPrintingPrices,
            stander,
            standerPrices,
            replication,
            replicationPrices,
            makingPrices,
            car,
            b_w_print,
            b_w_printPrices,
            plates,
            thermo_mug,
            thermos,
            magnets,
            glasses,
            keychain,
            mouse_pad,
            puzzles,
            thermos_cup,
            baseballCaps,
            flipCalendars,
            flipCalendarsPrices,
            quarterlyCalendars,
            quarterlyCalendarsPrices,
            pocketCalendars,
            pocketCalendarsPrices,
            housesCalendars,
            housesCalendarsPrices,
            printingOfDrawings
        },
    })
})


