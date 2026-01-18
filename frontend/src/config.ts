export const weddingConfig = {
  groom: {
    name: 'Андрей',
    fullName: 'Андрей',
    role: 'Жених',
    image: '/images/tilda/photo-1.jpg',
  },
  bride: {
    name: 'Лера',
    fullName: 'Лера',
    role: 'Невеста',
    image: '/images/tilda/photo-2.jpg',
  },
  wedding: {
    date: '2026-07-19T17:00:00',
    dateFormatted: '19 июля 2026',
    dayOfWeek: 'Воскресенье',
    ceremony: {
      time: '18:00',
      title: 'Торжественная церемония',
    },
    banquet: {
      time: '19:00',
      title: 'Праздничный банкет',
    },
    location: {
      name: 'Green House',
      address: 'Московская область, Дмитровский район, деревня Свистуха',
      mapUrl: 'https://yandex.ru/maps/-/CLGYiG-9',
    },
  },
  dressCode: {
    colors: ['#f6ece3', '#4b0b22', '#ffffff'],
    description: 'Бежевые и бордовые тона',
  },
  quotes: [
    {
      text: 'Вы получили эту ссылку, а значит мы спешим сообщить вам важную новость!',
      author: '',
    },
    {
      text: 'И очень хотим разделить с вами этот счастливый праздник.',
      author: '',
    },
  ],
  gifts: {
    description: 'Не ломайте голову над подарком - мы будем рады вашим пожеланиям в конвертах.',
    transfer: {
      name: 'Лера',
      bank: 'Сбербанк',
      card: '0000 0000 0000 0000',
    },
    contact: {
      name: 'Андрей',
      phone: '+7 (999) 999-99-99',
    },
  },
  organizer: {
    name: 'Наталья',
    role: 'Организатор',
    phone: '+7 (999) 563-06-94',
    description: 'Если вы хотите сделать для нас сюрприз или уточнить детали торжества, свяжитесь, пожалуйста, с нашим организатором',
  },
  program: [
    {
      time: '18:00',
      title: 'Фуршет',
      description: 'Welcome-зона',
      icon: 'fa-champagne-glasses',
    },
    {
      time: '18:30',
      title: 'Регистрация',
      description: 'Торжественная церемония',
      icon: 'fa-rings-wedding',
    },
    {
      time: '19:00',
      title: 'Банкет',
      description: 'Праздничный ужин',
      icon: 'fa-utensils',
    },
    {
      time: '00:00',
      title: 'Окончание',
      description: 'Завершение праздника',
      icon: 'fa-heart',
    },
  ],
  rsvp: {
    deadline: '01.09',
    questions: {
      name: {
        label: 'Ваше Имя и Фамилия',
        placeholder: 'Иван Иванов/Мария Иванова',
        required: true,
      },
      presence: {
        label: 'Планируете ли вы присутствовать на свадьбе?',
        options: [
          'Да, с удовольствием!',
          'Буду с парой!',
          'К сожалению, не смогу.',
        ],
        required: true,
      },
      partnerName: {
        label: 'Имя и Фамилия вашей пары',
        placeholder: 'Иван Иванов/Мария Иванова',
        required: false,
      },
    },
  },
  audio: '/assets/music/pure-love-304010.mp3',
  images: {
    background: '/images/tilda/tild6237-3636-4638-b937-653263343334/photo.png',
    hero: {
      couple: '/images/tilda/photo-1.jpg',
      groom: '/images/tilda/photo-1.jpg',
      bride: '/images/tilda/photo-2.jpg',
      flowers1: '/images/tilda/tild3034-3561-4966-b262-356235643861/bf2b32f09209717e70e9.png',
      flowers2: '/images/tilda/tild3462-6330-4235-b563-343665333736/noroot.png',
      flowers3: '/images/tilda/tild3034-3561-4966-b262-356235643861/bf2b32f09209717e70e9.png',
      flowers4: '/images/tilda/tild3462-6330-4235-b563-343665333736/noroot.png',
    },
    venue: {
      main: '/images/tilda/tild6131-3661-4134-b537-336562633632/photo.jpg',
      decoration1: '/images/tilda/tild3462-6330-4235-b563-343665333736/noroot.png',
      decoration2: '/images/tilda/tild3034-3561-4966-b262-356235643861/bf2b32f09209717e70e9.png',
    },
    program: {
      clock: '/images/tilda/tild6237-3636-4638-b937-653263343334/photo.png',
    },
    gallery: [
      '/images/tilda/tild6561-3632-4364-b437-396363396166/full-shot-couple-sit.jpg',
      '/images/tilda/photo-guest-1.jpg',
      '/images/tilda/photo-guest-2.jpg',
      '/images/tilda/photo-guest-3.jpg',
      '/images/tilda/photo-guest-4.jpg',
    ],
    footer: {
      background: '/images/tilda/tild6131-3661-4134-b537-336562633632/photo.jpg',
      couple: '/images/tilda/photo-1.jpg',
    },
    desktop: [
      '/images/tilda/photo-1.jpg',
      '/images/tilda/photo-2.jpg',
      '/images/tilda/tild6561-3632-4364-b437-396363396166/full-shot-couple-sit.jpg',
    ],
    decorations: {
      topBorder: '/images/tilda/tild3034-3561-4966-b262-356235643861/bf2b32f09209717e70e9.png',
      bottomBorder: '/images/tilda/tild3462-6330-4235-b563-343665333736/noroot.png',
      separator: '/images/tilda/tild3462-6330-4235-b563-343665333736/noroot.png',
    },
    svg: {
      title: '/images/title.svg',
      names: '/images/names.svg',
      date: '/images/date.svg',
      location: '/images/place.svg',
      venue: '',
      program: '',
      invite: '/images/tilda/Frame_151.svg',
      countdown: '',
      rsvp: '/images/anketa.svg',
      footer: '',
    },
  },
  theme: {
    colors: {
      primary: '#4b0b22',
      secondary: '#f6ece3',
      white: '#ffffff',
      text: '#4b0b22',
    },
  },
};
