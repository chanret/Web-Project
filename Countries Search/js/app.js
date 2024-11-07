const { createApp } = Vue;

createApp({
  data() {
    return {
      countries: [],
      search: "",
    };
  },
  mounted() {
    (async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      this.countries = await response.json();
    })();
  },
  computed: {
    filteredCountries() {
      if (this.countries.length === 0) return [];
      return this.countries.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
    selectedCountry() {
      return this.filteredCountries[0];
    },
  },
  methods: {
    selectCountry(index) {
      this.search = this.filteredCountries[index].name.common;
    },
  },
}).mount("#app");
