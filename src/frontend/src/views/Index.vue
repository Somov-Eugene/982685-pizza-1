<template>
  <!--
    Задание для ветки module1-task1:
    В данный момент мы не будем дробить страницу на мелкие компоненты, сделаем это позже.
    Сейчас нам нужно сделать один большой компонент, который будет отображаться в браузере так же, как и в вёрстке.
  -->
  <div>
    <header class="header">
      <div class="header__logo">
        <a href="index.html" class="logo">
          <img
            src="@/assets/img/logo.svg"
            alt="V!U!E! Pizza logo"
            width="90"
            height="40"
          />
        </a>
      </div>
      <div class="header__cart">
        <a href="cart.html">0 ₽</a>
      </div>
      <div class="header__user">
        <a href="#" class="header__login"><span>Войти</span></a>
      </div>
    </header>

    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>

          <div class="content__dough">
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите тесто</h2>

              <div class="sheet__content dough">
                <label
                  v-for="(dough, doughIndex) in selectedDough"
                  :key="`dough-${doughIndex}`"
                  :class="`dough__input dough__input--${dough.value}`"
                >
                  <input
                    type="radio"
                    name="dought"
                    class="visually-hidden"
                    :value="dough.value"
                    :checked="doughIndex === 0"
                  />
                  <b>{{ dough.name }}</b>
                  <span>{{ dough.description }}</span>
                </label>
              </div>
            </div>
          </div>

          <div class="content__diameter">
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите размер</h2>

              <div class="sheet__content diameter">
                <label
                  v-for="(size, sizeIndex) in selectedSizes"
                  :key="`size-${sizeIndex}`"
                  :class="`diameter__input diameter__input--${size.value}`"
                >
                  <input
                    type="radio"
                    name="diameter"
                    class="visually-hidden"
                    :value="size.value"
                    :checked="sizeIndex === 0"
                  />
                  <span>{{ size.name }}</span>
                </label>
              </div>
            </div>
          </div>

          <div class="content__ingridients">
            <div class="sheet">
              <h2 class="title title--small sheet__title">
                Выберите ингридиенты
              </h2>

              <div class="sheet__content ingridients">
                <div class="ingridients__sauce">
                  <p>Основной соус:</p>

                  <label
                    v-for="(sauce, sauceIndex) in selectedSauces"
                    :key="`sauce-${sauceIndex}`"
                    class="radio ingridients__input"
                  >
                    <input
                      type="radio"
                      name="sauce"
                      :value="sauce.value"
                      checked="sauceIndex === 0"
                    />
                    <span>{{ sauce.name }}</span>
                  </label>
                </div>

                <div class="ingridients__filling">
                  <p>Начинка:</p>

                  <ul class="ingridients__list">
                    <li
                      v-for="(ingredient, ingredientIndex) in selectedIngridients"
                      :key="`ingredient-${ingredientIndex}`"
                      class="ingridients__item"
                    >
                      <span
                        :class="`filling filling--${ingredient.value}`"
                      >
                        {{ ingredient.name }}
                      </span>

                      <div class="counter counter--orange ingridients__counter">
                        <button
                          type="button"
                          class="
                            counter__button
                            counter__button--minus
                            counter__button--disabled
                          "
                        >
                          <span class="visually-hidden">Меньше</span>
                        </button>
                        <input
                          type="text"
                          name="counter"
                          class="counter__input"
                          value="0"
                        />
                        <button
                          type="button"
                          class="
                            counter__button
                            counter__button--plus
                          "
                        >
                          <span class="visually-hidden">Больше</span>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="content__pizza">
            <label class="input">
              <span class="visually-hidden">Название пиццы</span>
              <input
                type="text"
                name="pizza_name"
                placeholder="Введите название пиццы"
              />
            </label>

            <div class="content__constructor">
              <div class="pizza pizza--foundation--big-tomato">
                <div class="pizza__wrapper">
                  <div class="pizza__filling pizza__filling--ananas"></div>
                  <div class="pizza__filling pizza__filling--bacon"></div>
                  <div class="pizza__filling pizza__filling--cheddar"></div>
                </div>
              </div>
            </div>

            <div class="content__result">
              <p>Итого: 0 ₽</p>
              <button
                type="button"
                class="button button--disabled"
                disabled
              >
                Готовьте!
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import misc from "@/static/misc.json";
import pizza from "@/static/pizza.json";
import user from "@/static/user.json";

export default {
  name: "Index",

  data() {
    return {
      misc,
      pizza,
      user,
    };
  },

  computed: {
    selectedDough() {
      return this.pizza.dough.map((dough) => {
        let value = "";

        switch (dough.name) {
          case "Тонкое":
            value = "light";
            break;
          case "Толстое":
            value = "large";
            break;
        }

        return {
          ...dough,
          value,
        };
      });
    },

    selectedSizes() {
      return this.pizza.sizes.map((size) => {
        let value = "";

        switch (size.multiplier) {
          case 1:
            value = "small";
            break;
          case 2:
            value = "normal";
            break;
          case 3:
            value = "big";
            break;
        }

        return {
          ...size,
          value,
        };
      });
    },

    selectedSauces() {
      return this.pizza.sauces.map((sauce) => {
        let value = "";

        switch (sauce.name) {
          case "Томатный":
            value = "tomato";
            break;
          case "Сливочный":
            value = "creamy";
            break;
        }

        return {
          ...sauce,
          value,
        };
      });
    },

    selectedIngridients() {
      return this.pizza.ingredients.map((ingredient) => {
        let value = "";

        switch (ingredient.name) {
          case "Грибы":
            value = "mushrooms";
            break;
          case "Чеддер":
            value = "cheddar";
            break;
          case "Салями":
            value = "salami";
            break;
          case "Ветчина":
            value = "ham";
            break;
          case "Ананас":
            value = "ananas";
            break;
          case "Бекон":
            value = "bacon";
            break;
          case "Лук":
            value = "onion";
            break;
          case "Чили":
            value = "chile";
            break;
          case "Халапеньо":
            value = "jalapeno";
            break;
          case "Маслины":
            value = "olives";
            break;
          case "Томаты":
            value = "tomatoes";
            break;
          case "Лосось":
            value = "salmon";
            break;
          case "Моцарелла":
            value = "mozzarella";
            break;
          case "Пармезан":
            value = "parmesan";
            break;
          case "Блю чиз":
            value = "blue_cheese";
            break;
        }

        return {
          ...ingredient,
          value,
        };
      });
    },
  },
};
</script>

<style lang="sass" scoped>
@import "~@/assets/scss/mixins/mixins";

@import "~@/assets/scss/layout/header";
@import "~@/assets/scss/layout/content";
@import "~@/assets/scss/layout/sheet";

@import "~@/assets/scss/blocks/button";
@import "~@/assets/scss/blocks/counter";
@import "~@/assets/scss/blocks/diameter";
@import "~@/assets/scss/blocks/dough";
@import "~@/assets/scss/blocks/filling";
@import "~@/assets/scss/blocks/ingridients";
@import "~@/assets/scss/blocks/pizza";
@import "~@/assets/scss/blocks/title";
</style>
