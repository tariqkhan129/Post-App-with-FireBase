import { collection, addDoc , getDocs , deleteDoc , doc,  updateDoc} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { db } from "./firebase.mjs";


const querySnapshot = await getDocs(collection(db, "posts"));
var posts = document.getElementById('posts');


document.getElementById('btn').addEventListener('click', async () => {

    var title = document.getElementById('title').value;
    var desc = document.getElementById('desc').value;

    try {
        const docRef = await addDoc(collection(db, "posts"), {
            title: title,
            desc: desc
        });
        // this function will reload the page automatically, we don't need to refresh the page to show the result
        window.location.reload();
        // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }

});

const postDelete = async(id) => {

    console.log(id);
    
    await deleteDoc(doc(db, "posts", id));
    // this function will reload the page automatically, we don't need to refresh the page to show the result of deleted item 
    window.location.reload();
}

window.postDelete = postDelete;

const postUpdate = async (id) => {
    console.log(id);
    const updateList = doc(db, "posts", id);
    var updatedTitle = prompt('Enter Your Updated Title');
    var updatedDesc = prompt('Enter Your Updated Description');
    // Set the "capital" field of the city 'DC'
    await updateDoc(updateList, {
        title: updatedTitle,
        desc:updatedDesc
    }).then(() => {
         // this function will reload the page automatically, we don't need to refresh the page to show the result of updated item 
        window.location.reload();
    });
}
window.postUpdate = postUpdate;

querySnapshot.forEach((doc) => {
    posts.innerHTML += `<div class="result"><div class="text">
    <h1>${doc.data().title}</h1><p>${doc.data().desc}</p></div>
    <div class="btn"><button onclick='postDelete("${doc.id}")'>Delete</button><button onclick='postUpdate("${doc.id}")'>Update</button></div></div>`
    
});


