var app = new Vue({
    el: "#article",
    data: {
        products:[
            {id:1, title:"Ariel", short_text:"Dutch potatoes with white skin and yellow flesh that does not darken after cooking", image:"ariel.png", desc:"The tubers are large, well preserved until spring, starch content - 18.7%, yield - 280-450 kg per hundred square meters."},
            {id:2, title:"Impala", short_text:"Potatoes of the Dutch selection with yellow skin and pulp. The variety is resistant to late blight and scab.", image:"impala.png", desc:"The starch content is 14.6%. The ripening period is 70 days, but you can dig up the tubers already on the 45th day."},
            {id:3, title:"Lazuli", short_text:"Belarusian variety resistant to nematode. Tubers with yellow skin and white flesh", image:"Lazyrit.png", desc:"Productivity - up to 259 kg per hundred square meters. The ripening period is 55 days, but you can dig up the tubers already on the 45th day."},
            {id:4, title:"Rowan", short_text:"Dutch variety. Tubers - with pink skin and creamy flesh.", image:"ryabina.png", desc:"Weight - 80-120 g, starch content - 11-15%. Productivity - up to 450 kg per hundred;"},
            {id:5, title:"Blueeyed", short_text:"A variety of domestic selection, bred immediately after the Great Patriotic War specifically for household plots.", image:"sineglas.png", desc:"The variety is obtained by crossing cultivated and wild types of potatoes, therefore it is resistant to adverse weather conditions. Tuber weight - 150-200 g."}
        ]    },
    mounted:function(){
        conlose.log(window.localStorage.getItem('prod'));
    },
    methods: {
        addItem:function(id){
            window.localStorage.setItem('prod',id);
        }
    }
});