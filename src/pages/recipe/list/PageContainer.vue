<template>
  <recipe-list-page v-bind="{ searchText, recipes: filteredRecipes, onSearch }" />
</template>

<script lang="ts">
import Vue from "vue";
import { fetchRecipes } from "../../../rest-api/api/recipe";
import { filterRecipesByCommaSeparatedText } from "./business/filterRecipeBusiness";
import { mapRecipeListModelToVm } from "./mapper";
import { Recipe } from "./viewModel";
import RecipeListPage from "./Page.vue";

export default Vue.extend({
  name: "RecipeListPageContainer",
  components: {
    RecipeListPage,
  },
  data() {
    return {
      recipes: [] as Recipe[],
      searchText: "",
    };
  },
  computed: {
    filteredRecipes(): Recipe[] {
      return filterRecipesByCommaSeparatedText(this.recipes, this.searchText);
    },
  },
  created() {
    fetchRecipes()
      .then((recipes) => {
        this.recipes = mapRecipeListModelToVm(recipes);
      })
      .catch((error) => {
          this.$snackBar.error(error);
      });
  },
  methods: {
    onSearch(value: string) {
      this.searchText = value;
    },
  },
});
</script>