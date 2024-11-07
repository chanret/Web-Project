new Vue({
    el:'#app',
    data(){
        return {
            title: 'List of Countries',
            countries: [],
            country:{},
            show_country: false
  
        }
    },
    methods:{
        fetchCountries: function(){
            let url = 'https://restcountries.com/v3.1/all';
            axios.get(url).then(res=>{
                this.countries = res.data
                console.log(this.countries)
            })
        },
        showCountry: function(alphacode){
            let allCountries = this.countries;
            let country = allCountries.filter(country => country.alpha2Code == alphacode);
            this.country = country;
            this.show_country = true;
            console.log(country);
        },
        showCountries: function(){
            this.show_country = false;
        }
    },
    mounted(){
        this.fetchCountries()
    }
  })
