import HelloFoody from "./images/helloFoody.jpg"
import Ethereum from "./images/Ethereum.jpg"

import GithabIcon from "./images/githab.svg"
import TgIcon from "./images/tg.svg"
import InstIcon from "./images/inst.svg"
import VkIcon from "./images/vk.svg"

export const data = {
  aboutMe: {
    desc:
      "Территориально нахожусь в Санкт-Петербурге. Изначально занималась дизайном интерфейсов в компании Code Artel, после стала изучать frontend и выполнять задачи по верстке. Сейчас полноценно занимаюсь версткой. <br /> <br /> Технологии, с которыми мне приходилось работать: HMTL5, CSS3, SASS, JS (ES6) BEM, Styled Components, GIT, Webpack, React.js, Gatsby.js, GraphQL. А также различные библиотеки экосистемы React. <br /><br /> Если в этом перечне нет того, что вам необходимо – скорее всего это не проблема, поскольку я в состоянии изучить новое и сразу применять для решения задачи. Я понимаю ваши потребности и с отвественностью подхожу к любой работе. Связывайтесь со мной любым удобным для вас способом: соц. сети, форма в разделе контакты и мы обсудим вашу задачу и возможные решения :)",
  },
  myWorks: {
    title: "Мои работы",
    subtitle:
      "Здесь представлены мои законченные работы. Они в процессе пополнения. Небольшие проекты, которые я делала в целях изучения технологий, можно посмотреть на моем ",
    myRepoLink: "https://github.com/EkaterinaaTM?tab=repositories",
    siteRepoLink: "https://github.com/EkaterinaaTM/my-site",
    worksList: [
      {
        id: 1,
        img: HelloFoody,
        link: "https://ekaterinaatm.github.io/food-markets-landing/",
        desc: "Лендинг ''Hello, Foody!'' Гастрономические киоски с едой.",
      },
      {
        id: 2,
        img: Ethereum,
        link: "https://ekaterinaatm.github.io/Ethereum-landing/",
        desc:
          "Лендинг Ethereum – децентрализованная опенсорсная платформа для денежных средств, работающая на блокчейне.",
      },
    ],
  },
  socialIcons: [
    {
      icon: GithabIcon,
      alt: "githab",
      href: "https://github.com/EkaterinaaTM",
    },
    {
      icon: TgIcon,
      alt: "telegram",
      href: "tg://tg.me/salvia_ll",
    },
    {
      icon: InstIcon,
      alt: "Instagram",
      href: "https://www.instagram.com/salvia_ll/",
    },
    {
      icon: VkIcon,
      alt: "vk",
      href: "https://vk.com/saalvia",
    },
  ],
}

export default data
