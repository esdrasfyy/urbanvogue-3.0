import { api } from "../../libs/axios.lib";

const getGenders = async () => {
  const response = await api.get<Settings.Gender[] | null>("/settings/genders");
  return response.data;
};
const getCountries = async () => {
  const response = await api.get<Settings.Country[] | null>("/settings/countries"); // Corrigido de "contries" para "countries"
  return response.data;
};
export const Settings = { getGenders, getCountries };
