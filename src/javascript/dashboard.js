const firebaseConfig = {
  apiKey: "AIzaSyDYaiHcGG8La-rYH9NI1HlG3s1GscF7Epk",
  authDomain: "capstone-app-e5b61.firebaseapp.com",
  projectId: "capstone-app-e5b61",
  storageBucket: "capstone-app-e5b61.appspot.com",
  messagingSenderId: "45166716819",
  appId: "1:45166716819:web:4a345c62e6b33a19fa2a66",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const databaseRef = firebase.database();

const card = document.querySelector("#postCard");

//  get all posts
databaseRef.ref("posts").on("value", (snapshot) => {
  for (let [key, value] of Object.entries(snapshot.val())) {
    card.innerHTML += `    <div class="card">

                    <div class="card-body">
                        <h3>${value.title}</h3>
                        <p>${value.date}</p>


                    </div>
                    <div class="button">
                      
                        <button id="${key}" onClick='deletepost(this.id)' > <i class="fas fa-user-edit" ></i></button>
                        <button id="${key}" onClick='editpost(this.id)'><i class="fa fa-trash"  aria-hidden="true"></i></button>
                           

                               
                     

                        
                        

                    </div>


                </div>`;
    const id = key;
    console.log(id, value);
  }
});

// delete

const deletepost = (key) => {
  const databaseRef = firebase.database();

  databaseRef.ref("posts" + key).on("value", (snapshot) => {
    console.log("key");
    console.log(snapshot.val());
  });
  console.log(key);
};

// edit post
const editpost = (key) => {
  console.log(key);
  window.location.href = "../pages/editpost.html";
};
