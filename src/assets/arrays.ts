import { IconType } from "react-icons";
import Product_1 from "/productItem1.png";
import Product_2 from "/productItem2.png";
import Product_3 from "/productItem3.png";
import Product_4 from "/productItem4.png";
import OurQualityImage_1 from "/productItem5.png";
import OurQualityImage_2 from "/productItem6.png";
import Sicao_logo from "/sicao_logo.svg";
import Aydin_logo from "/aydin_logo.svg";
import BMP_logo from "/BMP_logo.svg";
import CacaoBarry_logo from "/barry_logo.svg";
import Carma_logo from "/carma_logo.svg";
import Callebaut_logo from "/callebaut_logo.svg";
import TMK_logo from "/TMK_logo.svg";
import ProductImage_1 from "/productItem7.png";
import ProductImage_2 from "/productItem8.png";
import ProductImage_3 from "/productItem9.png";
import ProductImage_4 from "/productItem10.png";
import SuparaImg from "/supara_img.png";
import PodarimneImg from "/podarimne_img.png";
import KaynarImg from "/kaynar_img.png";
import WasabiImg from "/wasabi_img.jpeg";
import ShirinImg from "/shirin_img.png";
import NashamarkaImg from "/nashamarka_img.png";
import SovaImg from "/sova_img.jpeg";
import B_img from "/b_img.jpeg";
import MacaronnayaImg from "/macaronnaya_img.png";
import KontiImg from "/konti_img.png";
import NewsImg_1 from "/productItem11.png";
import NewsImg_2 from "/productItem12.png";
import NewsImg_3 from "/productItem13.png";
import NewsImg_4 from "/productItem14.png";
import { FaStar } from "react-icons/fa6";
import { HiShieldCheck } from "react-icons/hi";
import { BsFillGrid1X2Fill } from "react-icons/bs";

export interface INavbarRoutes {
  route: string;
  path: string;
  id: number;
}

export interface ICategory {
  id?: number;
  title: string;
  image: string;
}

export interface IQuality {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  bgColor: string;
  icon: IconType;
  gridArea: string;
}

export interface IOurQualityImage {
  id: number;
  image: string;
  btnChild: string;
  btnLeft?: boolean;
  gridArea: string;
}

export interface IDistributorsLogo {
  id: number;
  name: string;
  logo: string;
}

export interface IRecommendedProduct {
  id: number;
  image: string;
  title: string;
  weight: number;
  price: number;
}

export interface ITrustCompaniesLogo {
  id: number;
  name: string;
  logo: string;
}

export interface INews {
  id: number;
  image: string;
  title: string;
  description: string;
  date: number;
  link: string;
}

export const NavbarRoutes: INavbarRoutes[] = [
  {
    route: "Главная",
    path: "#",
    id: 1,
  },
  {
    route: "О нас",
    path: "#",
    id: 2,
  },
  {
    route: "Новости",
    path: "#",
    id: 3,
  },
  {
    route: "Каталог",
    path: "#",
    id: 4,
  },
];

export const Categories: ICategory[] = [
  {
    id: 1,
    title: "Шоколад и какао продукты",
    image: Product_1,
  },
  {
    id: 2,
    title: "Молочная продукция",
    image: Product_2,
  },
  {
    id: 3,
    title: "Ингредиенты",
    image: Product_3,
  },
  {
    id: 4,
    title: "Покрытия и наполнители",
    image: Product_4,
  },
];

export const Qualities: IQuality[] = [
  {
    id: 1,
    title: "Нам можно доверять",
    description:
      "Мы выстраиваем долгосрочные отношения. Развиваемся, чтоб помочь нашим клиентам становиться ещё лучше",
    bgColor: "#FCFCF1",
    icon: FaStar,
    gridArea: "b",
  },
  {
    id: 2,
    title: "Экспертность",
    description:
      "Наша экспертность в сфере применения кондитерского сырья. Возможность предоставления технологической поддержки.",
    bgColor: "#FFF5E8",
    icon: HiShieldCheck,
    gridArea: "e",
  },
  {
    id: 3,
    title: "Гарантия качества",
    subtitle: "Высокий уровень поставляемых услуг.",
    description:
      "Большой опыт работы с международными поставщиками. Закрываем все вопросы по бесперебойному обеспечению производств сырьевой базой.",
    bgColor: "#FFFBEE",
    icon: BsFillGrid1X2Fill,
    gridArea: "f",
  },
];

export const QualityImage: IOurQualityImage[] = [
  {
    id: 1,
    image: OurQualityImage_1,
    btnChild: "с 2018 года",
    btnLeft: true,
    gridArea: "c",
  },
  {
    id: 2,
    image: OurQualityImage_2,
    btnChild: "200+ товаров",
    btnLeft: false,
    gridArea: "d",
  },
];

export const DistributorsLogo: IDistributorsLogo[] = [
  {
    id: 1,
    name: "Sicao",
    logo: Sicao_logo,
  },
  {
    id: 2,
    name: "Aydin",
    logo: Aydin_logo,
  },
  {
    id: 3,
    name: "Белогородские молочные продукты",
    logo: BMP_logo,
  },
  {
    id: 4,
    name: "Cacao Barry",
    logo: CacaoBarry_logo,
  },
  {
    id: 5,
    name: "Carma",
    logo: Carma_logo,
  },
  {
    id: 6,
    name: "Callebaut",
    logo: Callebaut_logo,
  },
  {
    id: 7,
    name: "Туровский молочный комбинат",
    logo: TMK_logo,
  },
];

export const RecommendedProduct: IRecommendedProduct[] = [
  {
    id: 1,
    image: ProductImage_1,
    title: "Шпатель кондитерский пластиковый 254мм 50 SG250B",
    weight: 150,
    price: 550,
  },
  {
    id: 2,
    image: ProductImage_2,
    title: "Шпатель кондитерский пластиковый 254мм 50 SG250B",
    weight: 150,
    price: 550,
  },
  {
    id: 3,
    image: ProductImage_3,
    title: "Шпатель кондитерский пластиковый 254мм 50 SG250B",
    weight: 150,
    price: 550,
  },
  {
    id: 4,
    image: ProductImage_4,
    title: "Шпатель кондитерский пластиковый 254мм 50 SG250B",
    weight: 150,
    price: 550,
  },
];

export const TrustUsCompanies: ITrustCompaniesLogo[] = [
  {
    id: 1,
    name: "Supara",
    logo: SuparaImg,
  },
  {
    id: 2,
    name: "Podarimne.kg",
    logo: PodarimneImg,
  },
  {
    id: 3,
    name: "Kaynar Group",
    logo: KaynarImg,
  },
  {
    id: 4,
    name: "Wasabi",
    logo: WasabiImg,
  },
  {
    id: 5,
    name: "Shirin",
    logo: ShirinImg,
  },
  {
    id: 6,
    name: "Наша марка",
    logo: NashamarkaImg,
  },
  {
    id: 7,
    name: "SoVa",
    logo: SovaImg,
  },
  {
    id: 8,
    name: "B",
    logo: B_img,
  },
  {
    id: 9,
    name: "Макаронная лавка",
    logo: MacaronnayaImg,
  },
  {
    id: 10,
    name: "Konti",
    logo: KontiImg,
  },
];

export const LastNews: INews[] = [
  {
    id: 1,
    title: "Новые поступления",
    description:
      "Объявление о запуске новых вкусов шоколада или какао-порошка, включая описание уникальных ингредиентов и технологий производства.",
    image: NewsImg_1,
    date: new Date(2024, 7, 12).getTime(),
    link: "some url",
  },
  {
    id: 2,
    title: "Новые поступления",
    description:
      "Объявление о запуске новых вкусов шоколада или какао-порошка, включая описание уникальных ингредиентов и технологий производства.",
    image: NewsImg_2,
    date: new Date(2024, 7, 12).getTime(),
    link: "some url",
  },
  {
    id: 3,
    title: "Новые поступления",
    description:
      "Объявление о запуске новых вкусов шоколада или какао-порошка, включая описание уникальных ингредиентов и технологий производства.",
    image: NewsImg_3,
    date: new Date(2024, 7, 12).getTime(),
    link: "some url",
  },
  {
    id: 4,
    title: "Новые поступления",
    description:
      "Объявление о запуске новых вкусов шоколада или какао-порошка, включая описание уникальных ингредиентов и технологий производства.",
    image: NewsImg_4,
    date: new Date(2024, 7, 12).getTime(),
    link: "some url",
  },
];

export const FooterNavbar: string[] = ["Главная","Каталог","Новости","Личный кабинет","Корзина","О нас",
];

export const Catalog: string[] = ["Шоколад","Сливки","Сыр","Декор","Орехи",
]
