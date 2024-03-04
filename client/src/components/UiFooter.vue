<template>
  <div class="footer">
    <div class="footer__content">
      <div class="footer__links">
        <div class="wrapper">
          <div class="footer__links-logo">
            <img src="../../public/logo.svg" alt="" />
          </div>
          <ul class="footer__links-sites">
            <button class="footer__links-site">
              <img src="../../public/insta.svg" alt="" />
            </button>
            <button class="footer__links-site">
              <img src="../../public/vk.svg" alt="" />
            </button>
            <button class="footer__links-site">
              <img src="../../public/twitter.svg" alt="" />
            </button>
          </ul>
        </div>
        <div class="footer__links-subtitle">
          Instagram является запрещенной соц.сетью в РФ
        </div>
      </div>
      <div class="footer__navigation">
        <div class="footer__navigation-dropdown">
          <button class="footer__navigation-dropbtn">Информация<span class="footer__navigation-dropbtn--arrow"> ></span></button>
          <ul v-if="navigation" class="footer__navigation-dropdown-content">
            <a
              v-for="nav in navigation"
              :key="nav.id"
              href="#"
              class="footer__navigation-dropdown-item"
              >{{ nav.title }}</a
            >
          </ul>
        </div>
        <div class="footer__navigation-dropdown">
          <button class="footer__navigation-dropbtn">Информация<span class="footer__navigation-dropbtn--arrow"> ></span></button>
          <ul v-if="navigation" class="footer__navigation-dropdown-content">
            <a
              v-for="nav in navigation"
              :key="nav.id"
              href="#"
              class="footer__navigation-dropdown-item"
              >{{ nav.title }}</a
            >
          </ul>
        </div>
        <div class="footer__navigation-dropdown">
          <button class="footer__navigation-dropbtn">Информация<span class="footer__navigation-dropbtn--arrow"> ></span></button>
          <ul v-if="navigation" class="footer__navigation-dropdown-content">
            <a
              v-for="nav in navigation"
              :key="nav.id"
              href="#"
              class="footer__navigation-dropdown-item"
              >{{ nav.title }}</a
            >
          </ul>
        </div>
      </div>
      <div class="footer__subscribe">
        <div class="wrapper">
          <div class="footer__subscribe-title">Подписка на новости</div>
          <div class="footer__subscribe-subtitle">
            Подпишитесь на новости и скидки
          </div>
        </div>
        <form action="" class="footer__subscribe-search">
          <input
            type="text"
            placeholder="Email"
            class="footer__subscribe-input"
          />
          <button class="footer__subscribe-button">Подписаться</button>
        </form>
        <div class="footer__subscribe-privacy">
          Согласен с <span>политикой конфиденциальности</span>
        </div>
      </div>
    </div>

    <div class="footer__footer">
      <p class="footer__footer-privacy">
        © 2023 - Swoosh Store - Интернет магазин ориганальных кроссовок
      </p>
      <a href="" class="footer__footer-link">Политика конфиденциальности</a>
      <div class="footer__footer-logo">
        <img src="../../public/site.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.footer {
  background: #1e1e1e;
  color: #fff;
  padding: 50px 50px 0 50px;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    padding: 30px 25px 0 25px;
  }

  @media (max-width: 768px) {
    padding: 20px 15px 0 15px;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;

    @media (max-width: 1024px) {
      display: grid;
      grid-template-columns: 201px auto;
      grid-template-rows: auto;
      grid-column-gap: 62px;
      grid-row-gap: 45px;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  &__links {
    // max-width: 214px;
    width: 100%;
    grid-area: 1 / 1 / 2 / 2;

    .wrapper {
      @media (max-width: 768px) {
        display: flex;
        justify-content: space-between;
      }
    }
  }

  &__links-logo {
    display: flex;

    img {
      @media (max-width: 1024px) {
        max-width: 201px;
      }

      @media (max-width: 768px) {
        max-width: 147px;
      }
    }
  }

  &__links-sites {
    display: flex;
    margin-top: 55px;

    @media (max-width: 768px) {
      margin-top: 0;
    }
  }

  &__links-site {
    background: #272727;
    width: 46px;
    height: 46px;
    border: none;

    &:nth-child(n + 2) {
      margin-left: 11px;
    }

    img {
    }
  }

  &__links-subtitle {
    margin-top: 11px;
    color: #6b6b6b;
    font-size: 13px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;

    @media (max-width: 768px) {
      text-align: right;
    }
  }

  &__navigation {
    display: flex;
    grid-area: 1 / 2 / 2 / 3;
    justify-content: center;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  &__navigation-dropdown {
    &:nth-child(n + 2) {
      margin-left: 130px;

      @media (max-width: 1280px) {
        margin-left: 62px;
      }

      @media (max-width: 768px) {
        margin-left: 0;
        margin-top: 15px;
      }
    }
  }

  &__navigation-dropbtn {
    border: none;
    background: none;
    font-size: 14px;
    font-weight: 700;
    line-height: 11px;
    letter-spacing: 0em;
    text-align: left;
    color: #707070;
    text-transform: uppercase;
  }

  &__navigation-dropbtn--arrow {
    display: none;

    @media (max-width: 768px) {
      display: inline;
      transform: rotate(90deg);
    }
  }

  &__navigation-dropdown-content {
  }

  &__navigation-dropdown-item {
    display: flex;
    flex-direction: column;
    margin-top: 21px;
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    line-height: 11px;
    letter-spacing: 0em;
    text-align: left;
    text-decoration: none;

    @media (max-width: 768px) {
      text-align: center;
    }

    &:hover {
      color: #6b6b6b;
    }
  }

  &__subscribe {
    grid-area: 2 / 1 / 3 / 3;

    @media (max-width: 1024px) {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 30px 0 20px 0;
      border-top: solid 1px rgba(216, 221, 228, 0.09);
    }
  }

  &__subscribe-title {
    color: #707070;
    font-size: 14px;
    font-weight: 700;
    line-height: 11px;
    letter-spacing: 0em;
    text-align: left;
    text-transform: uppercase;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  &__subscribe-subtitle {
    font-size: 15px;
    font-weight: 400;
    line-height: 11px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 23px;

    @media (max-width: 1024px) {
      margin-top: 12px;
    }
  }

  &__subscribe-search {
    margin-top: 23px;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 307px;

    @media (max-width: 1024px) {
      margin: 0;
    }

    @media (max-width: 768px) {
      margin-top: 15px;
    }
  }

  &__subscribe-input {
    // padding: 20px 0 20px 102px;
    padding: 0 120px 0 17px;
    height: 47px;
    border: none;
    line-height: 1.4em;
    outline: none;
    color: inherit;
    color: #fff;
    width: 100%;
    background: none;
    border: solid 1px rgba(216, 221, 228, 0.09);
  }

  &__subscribe-button {
    font-size: 13px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    right: 0;
    width: 121px;
    height: 28px;
    border-left: solid 1px rgba(216, 221, 228, 0.09);
    color: #ff6915;
  }

  &__subscribe-privacy {
    margin-top: 9px;
    font-size: 13px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
    color: #6b6e72;

    @media (max-width: 1024px) {
      max-width: 138px;
      margin-left: 9px;
    }

    @media (max-width: 768px) {
      margin-top: 10px;
      max-width: 330px;
    }

    span {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  &__footer {
    padding: 33px 0;
    border-top: solid 1px rgba(216, 221, 228, 0.09);
    display: flex;
    justify-content: space-between;
    color: #d6d6d6;
    font-size: 13px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;

    @media (max-width: 1024px) {
      padding: 15px 0;
    }

    @media (max-width: 768px) {
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
  }

  &__footer-privacy {
    @media (max-width: 1024px) {
      max-width: 203px;
    }
  }

  &__footer-link {
    color: #d6d6d6;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      padding-top: 15px;
    }
  }

  &__footer-logo {
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      padding-top: 15px;
    }
  }
}
</style>

<script setup lang="ts">
interface INavigation {
  id: number;
  title: string;
  link?: string;
}

const navigation: INavigation[] = [
  {
    id: 0,
    title: "О магазине",
    link: "",
  },
  {
    id: 1,
    title: "Наш блог",
    link: "",
  },
  {
    id: 2,
    title: "Доставка",
    link: "",
  },
  {
    id: 3,
    title: "Оплата",
    link: "",
  },
  {
    id: 4,
    title: "Контакты",
    link: "",
  },
];
</script>
