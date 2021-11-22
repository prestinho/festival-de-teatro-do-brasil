import { Filters } from "../../models/Filters/Filters";
import LocalStorageService from "../LocalStorageService/LocalStorageService";

const emptyFilter: Filters = { state: "" };

const FiltersService = {
  getFilters: (): Filters => LocalStorageService.getItemJSON("filters") ?? emptyFilter,
  setFilters: (filters: Filters) =>
    LocalStorageService.setItemJSON("filters", filters ?? emptyFilter),
};

export default FiltersService;
