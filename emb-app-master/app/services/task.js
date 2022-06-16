import Service from '@ember/service';


export default Service.extend({
 lists:null,
 init() {
     this._super(...arguments);
     this.set("lists",[])
 }, 
});


