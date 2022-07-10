<template>
  <div>
    <form>
      <label for="locale-select">Language: </label>
      <select id="locale-select" v-model="$i18n.locale">
        <option value="en">en</option>
        <option value="ar">ar</option>
      </select>
    </form>
  </div>
</template>
