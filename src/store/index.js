import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

/*const state = {
	newbi:'0'
}*/
var state,xmlhttp
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		state = eval('(' + xmlhttp.responseText + ')')
	} else {
		state = {serverIP:0}
	}
}
xmlhttp.open("GET","http://192.168.0.110/json/users.php",false);
xmlhttp.send();

const getters = {
	stime() {
		var mydate = new Date();
		return mydate.getTime();
	}
}
export default new Vuex.Store({
	state,
	getters
})