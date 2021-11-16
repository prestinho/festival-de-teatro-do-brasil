const LocalStorageService = {
  setItem: (id: string, value: string) => localStorage.setItem(id, value),
  setItemJSON: (id: string, value: any) =>
    localStorage.setItem(id, JSON.stringify(value)),
  getItem: (id: string) => localStorage.getItem(id),
  getItemJSON: (id: string) =>
    localStorage.getItem(id) ? JSON.parse(localStorage.getItem(id) ?? "") : null,
  clear: () => localStorage.clear(),
};

export default LocalStorageService;
