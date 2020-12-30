<template>
  <app-layout>
    <v-layout
      align-center
      justify-center
      row
      fill-height
    />
      <img
        class="img-recipe"
        alt="Recipe-Image"
        :src="recipe.image"
      >
    <form-component v-bind="$props" />
  </app-layout>
</template>

<script lang="ts">
import Vue from "vue";
import { AppLayout } from "../../../common/layouts";
import { FormProps } from "./formProps";
import { FormComponent } from "./components";

export default Vue.extend({
  name: "RecipeEditPage",
  components: { AppLayout, FormComponent },
  props: {
    recipe: { require: true },
    recipeError: { required: true },    
    onUpdateRecipe: { require: true },
    onSave: { require: true },
    onRemoveIngredient: { required: true },
    onAddIngredient: { required: true },
  } as FormProps,
});
</script>

<style>
.img-recipe {
  max-height: 200px;
  margin-bottom: 20px;
}
</style>