// Wedding configuration
export const weddingConfig = {
  groom: {
    name: 'Андрей',
    fullName: 'Андрей',
    role: 'Жених',
    image: '/assets/images/cowo.webp',
  },
  bride: {
    name: 'Лера',
    fullName: 'Лера',
    role: 'Невеста',
    image: '/assets/images/cewe.webp',
  },
  wedding: {
    date: '2025-08-31T14:00:00',
    dateFormatted: '31 августа 2025',
    dayOfWeek: 'Воскресенье',
    ceremony: {
      time: '14:00',
      title: 'Торжественная регистрация',
    },
    banquet: {
      time: '16:00',
      title: 'Праздничный ужин',
    },
    location: {
      address: 'Адрес будет указан позже',
      mapUrl: '#',
    },
  },
  dressCode: {
    colors: ['#f8e8e8', '#d4a5a5', '#8b7355'],
    description: 'Пастельные и нежные тона',
  },
  quotes: [
    {
      text: '«Любовь — это когда хочешь состариться с кем-то вместе»',
      author: 'Альберт Камю',
    },
    {
      text: '«Счастье — это когда тебя понимают, любовь — когда ты любишь, настоящая любовь — когда любят тебя»',
      author: 'Конфуций',
    },
  ],
  gifts: {
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
  audio: '/assets/music/pure-love-304010.mp3',
  images: {
    background: '/assets/images/bg.webp',
    placeholder: '/assets/images/placeholder.webp',
    gallery: [
      'https://picsum.photos/1280/720?random=1',
      'https://picsum.photos/1280/720?random=2',
      'https://picsum.photos/1280/720?random=3',
      'https://picsum.photos/1280/720?random=4',
      'https://picsum.photos/1280/720?random=5',
      'https://picsum.photos/1280/720?random=6',
    ],
    desktop: [
      'https://picsum.photos/1000/1000?random=7',
      'https://picsum.photos/1000/1000?random=8',
      'https://picsum.photos/1000/1000?random=9',
    ],
  },
};
