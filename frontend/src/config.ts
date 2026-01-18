export const weddingConfig = {
  groom: {
    name: 'Андрей',
    fullName: 'Андрей',
    role: 'Жених',
    image: '',
  },
  bride: {
    name: 'Лера',
    fullName: 'Лера',
    role: 'Невеста',
    image: '',
  },
  wedding: {
    date: '2025-08-31T17:00:00',
    dateFormatted: '31 августа 2026',
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
      name: 'Vinity',
      address: 'Ленинградская область, Ломоносовский район, Лопухинское сельское поселение, урочище Новые Медуши,2',
      mapUrl: 'https://yandex.ru/maps/-/CLhk7I0l',
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
    background: '',
    hero: {
      couple: '',
      groom: '',
      bride: '',
      flowers1: '',
      flowers2: '',
      flowers3: '',
      flowers4: '',
    },
    venue: {
      main: '/images/venue-1.webp',
      decoration1: '',
      decoration2: '',
    },
    program: {
      clock: '',
    },
    gallery: [],
    footer: {
      background: '',
      couple: '',
    },
    desktop: [],
    decorations: {
      topBorder: '',
      bottomBorder: '',
      separator: '',
    },
    svg: {
      title: '/images/title.svg',
      names: '/images/names.svg',
      date: '/images/date.svg',
      location: '/images/place.svg',
      venue: '',
      program: '',
      invite: '/images/invite.svg',
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
