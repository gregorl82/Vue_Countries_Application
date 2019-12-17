import Vue from 'vue'

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      favouriteCountries: [],
      favouriteCountry: null,
      displayCountry: null,
      countries: []
    },
    mounted() {
      this.fetchCountries()
    },
    computed: {
      totalPopulation: function() {
        return this.countries.reduce((total, country) => {
          return total + country.population
        }, 0)
      },

    },
    methods: {
      addFavouriteCountry: function() {
        this.favouriteCountries.push(this.favouriteCountry)
      },
      fetchCountries: function() {
        const request = fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then((data) => {
          this.countries = data
        })
      }
    }
  })
})
