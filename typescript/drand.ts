let words: Array<string> = ['Hello', 'World',"Youuu"];
for (let word of words) {
    console.log(word);
}


import 'isomorphic-fetch';
// async function
export async function fetchPublic(address : String): Promise<Object> {
    // await response of fetch call
    let response = await fetch("http://" + address + "/public");
    // only proceed once promise is resolved
    let data = await response.json();
    // only proceed once second promise is resolved
    return data;
} 

export async function fetchPrivate(address : String): Promise<Object> {
      // await response of fetch call
      let response = await fetch("http://" + address + "/private");
      // only proceed once promise is resolved
      let data = await response.json();
      // only proceed once second promise is resolved
      return data;
}
 

fetchPublic("192.168.0.22:80").then(j => console.log(j));
exports.fetchPublic = fetchPublic;

declare var exports: any;

exports.fetchPublic = fetchPublic;
exports.fetchPrivate = fetchPrivate;
export default fetchPublic;