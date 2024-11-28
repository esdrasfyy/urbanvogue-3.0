import { api } from "../../libs/axios.lib";

const getGenders = async () => {
  const response = await api.get<Settings.Gender[] | null>("/settings/genders");
  return response.data;
};
const getCountries = async () => {
  const response = await api.get<Settings.Country[] | null>("/settings/countries");
  return response.data;
};
const getStores = async () => {
  const response = await api.get<Settings.Store[] | null>("/settings/stores");
  return response.data;
};
const getCategories = async () => {
  const response = await api.get<Settings.Category[] | null>("/settings/categories");
  return response.data;
};
const getBrands = async () => {
  const response = await api.get<Settings.Brand[] | null>("/settings/brands");
  return response.data;
};
const getSizes = async () => {
  const response = await api.get<Settings.Sizes[] | null>("/settings/sizes");
  return response.data;
};
const getColors = async () => {
  const response = await api.get<Settings.Sizes[] | null>("/settings/colors");
  return response.data;
};
export const Settings = { getGenders, getCountries, getBrands, getCategories, getStores, getSizes, getColors };
