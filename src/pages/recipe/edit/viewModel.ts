import { ValidationResult, createDefaultValidationResult } from "@lemoncode/fonk";

export interface Recipe {
  id: number;
  image: string;
  name: string;
  description: string;
  ingredients: string[];
}

export const createEmptyRecipe = (): Recipe => ({
  id: 0,
  image: '',
  name: "",
  description: "",
  ingredients: [],
});

export interface RecipeError {
  name: ValidationResult;
  ingredients: ValidationResult;
  description: ValidationResult;
}

export const createEmptyRecipeError = (): RecipeError => ({
  name: createDefaultValidationResult(),
  ingredients: createDefaultValidationResult(),
  description: createDefaultValidationResult(),
});