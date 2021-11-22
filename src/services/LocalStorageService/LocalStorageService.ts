const LocalStorageService = {
  setItem: (id: string, value: string) => localStorage.setItem(id, value),
  setItemJSON: (id: string, value: any) => {
    try {
      localStorage.setItem(id, JSON.stringify(value));
    } catch (e) {
      localStorage.removeItem(id);
    }
  },
  getItem: (id: string) => localStorage.getItem(id),
  getItemJSON: (id: string) => {
    try {
      return localStorage.getItem(id) ? JSON.parse(localStorage.getItem(id) ?? "") : null;
    } catch (e) {
      return null;
    }
  },
  clear: () => localStorage.clear(),
};

export default LocalStorageService;
