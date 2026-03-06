/**
 * Image URLs from WordPress site (symposia.us)
 */

const WP_BASE = 'https://symposia.us/wp-content/uploads';

export const images = {
  // Logo - Community Bookstore
  logo: `${WP_BASE}/2025/04/cropped-Community-Bookstore.jpg`,

  // Hoboken Green Business certification
  hobokenGreenBusiness: `${WP_BASE}/2025/11/temp.pdf.png`,

  // About section - 2 images
  about: [
    `${WP_BASE}/2019/11/b.jpg`,
    `${WP_BASE}/2019/10/carmen-symposia.jpg`,
  ],

  // Space rental - 4 images
  spaceRental: [
    `${WP_BASE}/2023/03/IMG_8407.png`,
    `${WP_BASE}/2024/09/Peerspace-1-2.jpg`,
    `${WP_BASE}/2024/09/Peerspace-2-1.jpg`,
    `${WP_BASE}/2022/04/91B49F4F-3C8A-4710-A1DA-F1E6C5640FF1-rotated.jpg`,
  ],

  // Community section - 3 images
  community: [
    `${WP_BASE}/2022/04/IMG_8769_Original-scaled.jpg`,
    `${WP_BASE}/2022/04/4DF6DE1F-E0A0-46B1-9FB9-9184166A537E-scaled.jpg`,
    `${WP_BASE}/2022/02/Book-Club.jpg`,
  ],

  // Homepage slider - 8 images
  carousel: [
    { url: `${WP_BASE}/2024/09/img_0912-2-rotated.jpeg`, alt: 'Symposia Community Bookstore' },
    { url: `${WP_BASE}/2023/08/Book-Club.jpg`, alt: 'Book Club at Symposia' },
    { url: `${WP_BASE}/2023/03/FE646D68-2121-4263-A43A-DEC48778AD1E.png`, alt: 'Community book discussion space' },
    { url: `${WP_BASE}/2022/04/IMG_8736_Original-scaled.jpg`, alt: 'Bookstore interior' },
    { url: `${WP_BASE}/2022/04/symposia.jpg`, alt: 'Symposia Community Bookstore' },
    { url: `${WP_BASE}/2022/02/Book-Club.jpg`, alt: 'Book Club' },
    { url: `${WP_BASE}/2021/10/Conversation-Group-scaled.jpg`, alt: 'Conversation Group' },
    { url: `${WP_BASE}/2020/01/IMG_5844-scaled.jpg`, alt: 'Symposia bookstore' },
  ],

  // Events page - dummy images (can also be used in slider; will fetch from WordPress later)
  events: [
    `${WP_BASE}/2024/09/img_0912-2-rotated.jpeg`,
    `${WP_BASE}/2023/08/Book-Club.jpg`,
    `${WP_BASE}/2023/03/FE646D68-2121-4263-A43A-DEC48778AD1E.png`,
    `${WP_BASE}/2022/04/IMG_8769_Original-scaled.jpg`,
    `${WP_BASE}/2022/02/Book-Club.jpg`,
    `${WP_BASE}/2021/10/Conversation-Group-scaled.jpg`,
    `${WP_BASE}/2020/01/IMG_5844-scaled.jpg`,
  ],
} as const;
