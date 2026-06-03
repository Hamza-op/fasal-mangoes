import sindhriJpgImage from '../assets/sindhri/sindhri-1.webp';
import sindhri2JpgImage from '../assets/sindhri/sindhri-2.webp';
import sindhri3JpgImage from '../assets/sindhri/sindhri-3.webp';
import anwar1WebpImage from '../assets/anwar/anwar-1.webp';
import anwar2JpegImage from '../assets/anwar/anwar-2.webp';
import anwar3JpegImage from '../assets/anwar/anwar-3.webp';
import dusehri1JpegImage from '../assets/dusehri/dusehri-1.webp';
import dusehri2JpegImage from '../assets/dusehri/dusehri-2.webp';
import dusehri3JpegImage from '../assets/dusehri/dusehri-3.webp';
import chaunsa1WebpImage from '../assets/white-chaunsa/white-chaunsa-1.webp';
import chaunsa2JpegImage from '../assets/white-chaunsa/white-chaunsa-2.webp';
import chaunsa3JpegImage from '../assets/white-chaunsa/white-chaunsa-3.webp';
import nawabpuri1JpegImage from '../assets/nawabpuri/nawabpuri-1.webp';
import nawabpuri2JpegImage from '../assets/nawabpuri/nawabpuri-2.webp';
import nawabpuri3JpegImage from '../assets/nawabpuri/nawabpuri-3.webp';
import azeem1JpegImage from '../assets/azeem-chaunsa/azeem-1.webp';
import azeem2JpegImage from '../assets/azeem-chaunsa/azeem-2.webp';
import azeem3JpegImage from '../assets/azeem-chaunsa/azeem-3.webp';
import lal1JpegImage from '../assets/lal-badshah/lal-badshah-1.webp';
import lal2JpegImage from '../assets/lal-badshah/lal-badshah-2.webp';
import lal3JpegImage from '../assets/lal-badshah/lal-badshah-3.webp';
import black1JpegImage from '../assets/black-chaunsa/black-1.webp';
import black2JpegImage from '../assets/black-chaunsa/black-2.webp';
import black3JpegImage from '../assets/black-chaunsa/black-3.webp';
import langra1JpegImage from '../assets/langra/langra-1.webp';
import langra2JpegImage from '../assets/langra/langra-2.webp';
import langra3JpegImage from '../assets/langra/langra-3.webp';
import faiz1JpegImage from '../assets/faiz-kareem/faiz-kareem-1.webp';
import faiz2JpegImage from '../assets/faiz-kareem/faiz-kareem-2.webp';
import faiz3JpegImage from '../assets/faiz-kareem/faiz-kareem-3.webp';

export const products = [
  {
    id: 'sindhri-1',
    slug: 'sindhri',
    name: 'Sindhri',
    type: 'Premium',
    description: 'The king of mangoes - known for its unique elongated shape, exceptional sweetness, and rich buttery pulp. Sourced straight from the best mango seller in Pakistan, our Sindhri is recognized as a premium Multani mango of the highest grade.',
    flavorProfile: 'Exceptionally sweet, rich, and aromatic with a dense, buttery pulp.',
    season: 'Mid-May to Mid-June',
    origin: 'Rohillanwali, Muzaffargarh, Punjab',
    texture: 'Soft, fiberless, melting flesh',
    deliveryInfo: 'Available June to August. Shipped within 24 hours of harvest to ensure freshness.',
    storageInstructions: 'Store at room temperature (20-25°C) for 3-5 days. Refrigerate to extend shelf life up to 10 days.',
    image: sindhriJpgImage,
    imageFit: 'contain',
    images: [
      sindhriJpgImage,
      sindhri3JpgImage,
      sindhri2JpgImage,
    ],
    variants: [
      { id: 'sindhri-5kg', size: '5 KG Box', weight: '5 kg', price: 2199 },
      { id: 'sindhri-8kg', size: '8 KG Box', weight: '8 kg', price: 2699 },
      { id: 'sindhri-10kg', size: '10 KG Box', weight: '10 kg', price: 2999 },
    ],
  },
  {
    id: 'white-chaunsa-1',
    slug: 'white-chaunsa',
    name: 'White Chaunsa',
    type: 'Premium',
    description: 'A rare, premium variant with striking white/pale coloration. Known as the ultimate Multani Chaunsa online, this variety is prized for its intensely sweet, honey-like floral aroma and smooth fiberless texture.',
    flavorProfile: 'Intensely sweet with delicate floral notes and honey-like rich aroma.',
    season: 'July to August',
    origin: 'Rohillanwali, Muzaffargarh, Punjab',
    texture: 'Creamy, fiberless, buttery soft',
    deliveryInfo: 'Available July to August. Rare availability. Early booking advised.',
    storageInstructions: 'Store at room temperature until fully ripe. Refrigerate promptly after ripening.',
    image: chaunsa1WebpImage,
    images: [
      chaunsa1WebpImage,
      chaunsa2JpegImage,
      chaunsa3JpegImage,
    ],
    variants: [
      { id: 'white-chaunsa-5kg', size: '5 KG Box', weight: '5 kg', price: 2399 },
      { id: 'white-chaunsa-8kg', size: '8 KG Box', weight: '8 kg', price: 2899 },
      { id: 'white-chaunsa-10kg', size: '10 KG Box', weight: '10 kg', price: 3299 },
    ],
  },
  {
    id: 'anwar-ratool-1',
    slug: 'anwar-ratool',
    name: 'Anwar Ratool',
    type: 'Premium',
    description: 'A premium variety from the Ratanada region with a distinctive oval shape. Celebrated as the finest premium Multani mango for its highly delicate sweetness, unmatched aroma, and completely melting fiberless pulp.',
    flavorProfile: 'Exceptionally sweet and highly aromatic with floral notes.',
    season: 'June to July',
    origin: 'Rohillanwali, Muzaffargarh, Punjab',
    texture: 'Highly delicate, fiberless, melting pulp',
    deliveryInfo: 'Available May to June. Limited season availability. Pre-orders recommended.',
    storageInstructions: 'Ripen at room temperature for 2-3 days. Refrigerate after ripening for extended storage.',
    image: anwar1WebpImage,
    images: [
      anwar1WebpImage,
      anwar2JpegImage,
      anwar3JpegImage,
    ],
    variants: [
      { id: 'anwar-5kg', size: '5 KG Box', weight: '5 kg', price: 2399 },
      { id: 'anwar-8kg', size: '8 KG Box', weight: '8 kg', price: 2899 },
      { id: 'anwar-10kg', size: '10 KG Box', weight: '10 kg', price: 3299 },
    ],
  },
  {
    id: 'black-chaunsa-1',
    slug: 'black-chaunsa',
    name: 'Black Chaunsa',
    type: 'Premium',
    description: 'A distinctive dark-colored variety with a perfect balance of sweetness and fiber. Sourced from the historic orchards of the Multani mango belt, Black Chaunsa offers an exceptionally rich, honey-like tropical flavor.',
    flavorProfile: 'Rich, honey-sweet flavor with a strong tropical perfume.',
    season: 'Late-June to August',
    origin: 'Rohillanwali, Muzaffargarh, Punjab',
    texture: 'Juicy, soft, smooth fiber',
    deliveryInfo: 'Available June to July. Peak season ensures optimum ripeness and flavor.',
    storageInstructions: 'Keep at room temperature until ripe. Once ripe, store in refrigerator for up to 8 days.',
    image: black1JpegImage,
    images: [
      black1JpegImage,
      black2JpegImage,
      black3JpegImage,
    ],
    variants: [
      { id: 'black-chaunsa-5kg', size: '5 KG Box', weight: '5 kg', price: 2199 },
      { id: 'black-chaunsa-8kg', size: '8 KG Box', weight: '8 kg', price: 2699 },
      { id: 'black-chaunsa-10kg', size: '10 KG Box', weight: '10 kg', price: 2999 },
    ],
  },
  {
    id: 'dusehri-1',
    slug: 'dusehri',
    name: 'Dusehri',
    type: 'Standard',
    description: 'An early-season favorite with a classic sub-continental sweetness. Highly rated as a sweet Multani mango, our Dusehri box is a staple for families seeking fresh, premium backyard-orchard quality fruit.',
    flavorProfile: 'Mildly sweet, classic sub-continental mango flavor with fine aroma.',
    season: 'May to June',
    origin: 'Rohillanwali, Muzaffargarh, Punjab',
    texture: 'Juicy, tender, soft flesh',
    deliveryInfo: 'Available May to June. Perfect for early-season mango lovers.',
    storageInstructions: 'Ripen naturally at room temperature for 2-4 days. Store in cool place after ripening.',
    image: dusehri1JpegImage,
    images: [
      dusehri1JpegImage,
      dusehri2JpegImage,
      dusehri3JpegImage,
    ],
    variants: [
      { id: 'dusehri-5kg', size: '5 KG Box', weight: '5 kg', price: 2199 },
      { id: 'dusehri-8kg', size: '8 KG Box', weight: '8 kg', price: 2699 },
      { id: 'dusehri-10kg', size: '10 KG Box', weight: '10 kg', price: 2999 },
    ],
  },
  {
    id: 'lal-badshah-1',
    slug: 'lal-badshah',
    name: 'Lal Badshah',
    type: 'Standard',
    description: 'A bold, striking red-hued variety known for its robust traditional taste. Gifted with rich, tangy sweetness and a solid shelf life, this Multani mango box is highly rated by fruit lovers in Pakistan.',
    flavorProfile: 'Tangy-sweet, robust traditional flavor with strong aromatic notes.',
    season: 'June to July',
    origin: 'Rohillanwali, Muzaffargarh, Punjab',
    texture: 'Firm, meaty, low fiber',
    deliveryInfo: 'Available throughout the season. Consistent availability year-round.',
    storageInstructions: 'Ripen at room temperature for 3-5 days. Refrigerate for extended shelf life.',
    image: lal1JpegImage,
    images: [
      lal1JpegImage,
      lal2JpegImage,
      lal3JpegImage,
    ],
    variants: [
      { id: 'lal-badshah-5kg', size: '5 KG Box', weight: '5 kg', price: 2199 },
      { id: 'lal-badshah-8kg', size: '8 KG Box', weight: '8 kg', price: 2699 },
      { id: 'lal-badshah-10kg', size: '10 KG Box', weight: '10 kg', price: 2999 },
    ],
  },
  {
    id: 'azeem-chaunsa-1',
    slug: 'azeem-chaunsa',
    name: 'Azeem Chaunsa',
    type: 'Premium',
    description: 'An extra-large variety of Chaunsa with a superior golden color and intensely sweet taste. This premium Multani Chaunsa is the ideal choice for corporate gifting and export-grade experiences.',
    flavorProfile: 'Deeply sweet, complex, and highly satisfying premium flavor.',
    season: 'July to August',
    origin: 'Rohillanwali, Muzaffargarh, Punjab',
    texture: 'Rich, juicy, fiberless flesh',
    deliveryInfo: 'Available June to July. Limited availability during peak season.',
    storageInstructions: 'Store at room temperature until ripe. Once ripe, refrigerate for up to 10 days.',
    image: azeem1JpegImage,
    images: [
      azeem1JpegImage,
      azeem2JpegImage,
      azeem3JpegImage,
    ],
    variants: [
      { id: 'azeem-chaunsa-5kg', size: '5 KG Box', weight: '5 kg', price: 2199 },
      { id: 'azeem-chaunsa-8kg', size: '8 KG Box', weight: '8 kg', price: 2699 },
      { id: 'azeem-chaunsa-10kg', size: '10 KG Box', weight: '10 kg', price: 2999 },
    ],
  },
  {
    id: 'nawapuri-1',
    slug: 'nawapuri',
    name: 'Nawabpuri',
    type: 'Premium',
    description: 'A premium variety popular for its consistent quality, firm texture, and great shelf life. Cultivated adjacent to the core Multani mango belt, Nawabpuri offers a highly consistent and premium tropical sweetness.',
    flavorProfile: 'Balanced tropical sweetness, mildly perfumed and consistently rich.',
    season: 'June to August',
    origin: 'Rohillanwali, Muzaffargarh, Punjab',
    texture: 'Firm, smooth, meaty consistency',
    deliveryInfo: 'Available June to August. Year-round availability with consistent supply.',
    storageInstructions: 'Ripen at room temperature for 3-4 days. Refrigerate after ripening for extended storage.',
    image: nawabpuri1JpegImage,
    images: [
      nawabpuri1JpegImage,
      nawabpuri2JpegImage,
      nawabpuri3JpegImage,
    ],
    variants: [
      { id: 'nawapuri-5kg', size: '5 KG Box', weight: '5 kg', price: 2399 },
      { id: 'nawapuri-8kg', size: '8 KG Box', weight: '8 kg', price: 2899 },
      { id: 'nawapuri-10kg', size: '10 KG Box', weight: '10 kg', price: 3299 },
    ],
  },
  {
    id: 'faiz-kareem-1',
    slug: 'faiz-kareem',
    name: 'Faiz Kareem',
    type: 'Standard',
    description: 'A delicious variety with a beautiful golden hue and refreshing honey-sweet notes. Perfect for families, this quality Multani mango box provides exceptional value without compromising on fruit sweetness.',
    flavorProfile: 'Vibrant sweet honey notes, refreshing and light.',
    season: 'Mid-May to July',
    origin: 'Rohillanwali, Muzaffargarh, Punjab',
    texture: 'Juicy, melting, low fiber',
    deliveryInfo: 'Available May to July. Peak season offers best quality and pricing.',
    storageInstructions: 'Ripen naturally at room temperature for 2-3 days. Store in cool place after ripening.',
    image: faiz1JpegImage,
    images: [
      faiz1JpegImage,
      faiz2JpegImage,
      faiz3JpegImage,
    ],
    variants: [
      { id: 'faiz-kareem-5kg', size: '5 KG Box', weight: '5 kg', price: 2999 },
      { id: 'faiz-kareem-8kg', size: '8 KG Box', weight: '8 kg', price: 3499 },
      { id: 'faiz-kareem-10kg', size: '10 KG Box', weight: '10 kg', price: 3999 },
    ],
  },
  {
    id: 'langra-1',
    slug: 'langra',
    name: 'Langra',
    type: 'Standard',
    description: 'A classic sub-continental variety known for its distinctive green skin and intensely aromatic citrus-sweet flavor. Grown fresh in the Multani mango belt, our Langra is completely fiberless and highly satisfying.',
    flavorProfile: 'Intensely citrus-sweet with strong tropical perfume.',
    season: 'June to August',
    origin: 'Rohillanwali, Muzaffargarh, Punjab',
    texture: 'Firm, fiberless, fleshy pulp',
    deliveryInfo: 'Available June to August. Peak season availability with premium quality.',
    storageInstructions: 'Ripen at room temperature for 4-5 days. Refrigerate after ripening for extended storage.',
    image: langra1JpegImage,
    images: [
      langra1JpegImage,
      langra2JpegImage,
      langra3JpegImage,
    ],
    variants: [
      { id: 'langra-5kg', size: '5 KG Box', weight: '5 kg', price: 2399 },
      { id: 'langra-8kg', size: '8 KG Box', weight: '8 kg', price: 2899 },
      { id: 'langra-10kg', size: '10 KG Box', weight: '10 kg', price: 3299 },
    ],
  },
];

export const getProductBySlug = (slug) => {
  return products.find((product) => product.slug === slug);
};

export const getAllProducts = () => {
  return products;
};
