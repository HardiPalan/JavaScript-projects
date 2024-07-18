angular.module("Filters", []).filter("searchFilter", () => {
    return (data, searchType, searchText) => {
      if (!searchText) {
        return data;
      }
  
      let keyword = RegExp(searchText, "i");
      return data.filter((item) => {
        switch (searchType) {
          case "title":
            return keyword.test(item.title);
          case "created_on":
            return keyword.test(item.created_on);
          case "category":
            return keyword.test(item.category);
          case "product":
            return keyword.test(item.product);
        }
      });
    };
  });