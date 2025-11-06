import {defineStore} from 'pinia';

export const useDataStore = defineStore('data', {
// -----------------------------------
//                STATE
// -----------------------------------
    state: () => {

      return {
        appName: 'Machupichu',
        apiUrlBase: 'https://machupicchu.cl',
        apiUrlGallery: 'galleryurl',
        spaceUrlBase: 'spaceurl',
        appEnv: 'local',
        appDebug: true,
        appUrl: 'https://machupicchu.cl',

        // # =============================================
        // # ----- IMAGES & ALT ---->
        // # =============================================
        appLogo:  '/img/logo.png',
        appIcon: '/img/icon.png',
        appBg: '/img/bg.jpg',
        appBgResponsive: '/img/bg_responsive.jpg',
        appLogoHalalFood: '/img/halal-food.png',
        appLogoAlt: 'logo-image',
        appBgAtl: 'background-image',

        // # =============================================
        // # ----- METAS ---->
        // # =============================================
        appMetaDescription: 'Pioneros en Gastronomía Peruana en Chile, Somos tradición de calidad en exquisitas preparaciones internacionales.',
        appMetaKeys: 'Gastronomía, express, carnes, gourmet, cocteles, restaurant, postres',
        appMetaAutor: 'Kurts Kisis G. - Ekselence SPA',

        // # =============================================
        // # ----- INTERNAL LINKS ---->
        // # =============================================
        appLinkHome: '/',
        appAbout: false,
        appLinkAbout: '/about',
        appLinkDelivery: null,
        appLinkBook: '/book',
        appLinkMenu: '/menu',
        appContact: true,
        appLinkContact: '/contact',

        // # =============================================
        // # ----- BOOK LINK ---->
        // # =============================================
        appBook: true,
        appUrlBook: 'https://app.bookingconfirmed.net/book/63/source/2',
        appDelivery: false,
        appUrlDelivery: '',

        // # =============================================
        // # ----- SPECIAL DAY ---->
        // # =============================================
        appSpecialDay: false,
        appUrlSpecialDayText: 'Dia de los enamorados',
        appUrlSpecialDay: '',

        // # =============================================
        // # ----- MENU PDF LINK ---->
        // # =============================================
        appMenu: true,
        appUrlMenu1: 'https://www.2bcard.com/c10485c64?fbclid=PAZnRzaAN5nMpleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAac54QIqggd0cwcxlHQVB-1lAMjBwzrQy6-vgwKPjq6je0f16L6dCwrebFFHrw_aem_JbjgaSvHGH5c5oxC8rUCjw',
        appUrlMenu2: null,
        appUrlMenu3: null,

        // # =============================================
        // # ----- LINK SOCIAL ---->
        // # =============================================
        appUrlFacebook: 'https://www.facebook.com/MachuPicchuGV',
        appUrlInstagram: 'https://instagram.com/machupicchu_providencia',
        appUrlTripAdvisor: null,
        appWhatsAppApiLink: 'https://api.whatsapp.com/send?phone=56989774023&text=Hola!%20Me%20gustar%C3%ADa%20realizar%20un%20pedido',

        // # =============================================
        // # ----- ICONS ---->
        // # =============================================
        facebookIconUrl: 'svg/facebook-square-brands.svg',
        instagramIconUrl: 'svg/instagram-brands.svg',
        tripadvisorIconUrl: 'svg/tripadvisor-brands.svg',
        emailIconUrl: 'svg/envelope-regular.svg',

        // # =============================================
        // # ----- ESTABLISHMENT DATA ---->
        // # =============================================
        appAddress: 'Av. Francisco Bilbao 1256 - Providencia',
        appPhone: '(+56) (2) 2225 2127',
        appEmail: 'restmachupicchu@gmail.com',
        appHorarios: 'Lunes a Sábado de 13:00pm a 00:00am',
        appHorarios2: 'Domingos de 13:00pm a 17:00pm',
        appSlogan1: 'Pioneros en Gastronomía Peruana en Chile,',
        appSlogan2: 'Somos tradición de calidad en exquisitas preparaciones internacionales.',

        // # =============================================
        // # ----- GRAPHICS CONFIGURATIONS ---->
        // # =============================================
        appGraphicsOverlay: 'rgba(0, 0, 0, 0.8)',
        appGraphicsDrawerBg: 'rgba(0, 0, 0, 0.9)',
        appImgUrl: '/img/',
      }
    },
// -----------------------------------
//                GETTERS
// -----------------------------------
    getters: {
      nameStyles: (state) => {
        return {
          color: state.settings.product_name_color,
          'z-index': 99
        }
      },
    },

// -----------------------------------
//                ACTIONS
// -----------------------------------
    actions: {

      brandView () {
        console.log('HEY!!!')
        this.brandDialog = !this.brandDialog
      },
    },
  }
);
