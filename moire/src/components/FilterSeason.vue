<template>
  <fieldset class="form__block">
    <legend class="form__legend">Коллекция</legend>
    <ul class="check-list">
      <li class="check-list__item">
        <label class="check-list__label">
          <input
            class="check-list__check sr-only"
            type="checkbox"
            name="collection"
            value="лето"
            checked="false"
          />
          <span class="check-list__desc">
            лето
            <span>(2)</span>
          </span>
        </label>
      </li>
      <li class="check-list__item">
        <label class="check-list__label">
          <input class="check-list__check sr-only" type="checkbox" name="collection" value="зима" />
          <span class="check-list__desc">
            зима
            <span>(53)</span>
          </span>
        </label>
      </li>
      <li class="check-list__item">
        <label class="check-list__label">
          <input
            class="check-list__check sr-only"
            type="checkbox"
            name="collection"
            value="весна"
          />
          <span class="check-list__desc">
            весна
            <span>(24)</span>
          </span>
        </label>
      </li>
      <li class="check-list__item">
        <label class="check-list__label">
          <input
            class="check-list__check sr-only"
            type="checkbox"
            name="collection"
            value="осень"
          />
          <span class="check-list__desc">
            осень
            <span>(30)</span>
          </span>
        </label>
      </li>
    </ul>
  </fieldset>
</template>
